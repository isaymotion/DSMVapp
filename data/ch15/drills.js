/* Chapter 15 practice drills.
   dxline:   build the full diagnosis line (diagnosis, subtype, specifiers, severity, code). Codes unchanged through October 2026.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var SEV = ["Mild", "Moderate", "Severe"];
  var ONSET = ["Childhood-onset type", "Adolescent-onset type", "Unspecified onset"];
  var LPE = ["With limited prosocial emotions", "No specifier: fewer than two traits, or not shown over 12 months across settings"];

  SP.add("ch15", "dxline", [
    {
      id: "w15-01", tag: "ODD",
      "case": "For the past 8 months a 7-year-old boy has lost his temper at home several times a week, argued with his mother almost daily, refused to do chores most days, and blamed his parents for his own misbehavior about once a week. His teacher reports no problems at school, and he gets on well with friends. His mood is normal between these episodes and he has no outbursts out of proportion to events. No mood, psychotic or substance use disorder is present. Family life is strained.",
      parts: [
        { label: "Diagnosis", options: ["Oppositional defiant disorder", "Disruptive mood dysregulation disorder", "Conduct disorder", "Intermittent explosive disorder", "Adjustment disorder, with disturbance of conduct"], answer: 0 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["F91.3", "F91.8", "F34.81", "F91.1", "F63.81"], answer: 0 }
      ],
      line: "**F91.3** Oppositional defiant disorder, mild",
      why: "Four symptoms (temper, arguing with an adult, defying requests, blaming others), each at least weekly in a child aged 5 or older, for over 6 months, with a parent rather than only a sibling. Severity depends on **settings**, not on symptom count: home only is **mild** (pp. 522–523)."
    },
    {
      id: "w15-02", tag: "ODD",
      "case": "A 10-year-old girl has, for 9 months, been touchy and easily annoyed, angry and resentful, argued with her teachers and parents, and deliberately provoked classmates, each several times a week. These behaviors occur at home and at school but not at her weekend dance class. She has no aggression toward people or animals, no theft and no property destruction. Her mood is not persistently irritable between incidents, and there is no depressive or bipolar episode.",
      parts: [
        { label: "Diagnosis", options: ["Conduct disorder", "Oppositional defiant disorder", "Disruptive mood dysregulation disorder", "Other specified disruptive, impulse-control, and conduct disorder"], answer: 1 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["F91.2", "F91.8", "F91.3", "F91.9"], answer: 2 }
      ],
      line: "**F91.3** Oppositional defiant disorder, moderate",
      why: "Four symptoms across the mood and behavior groups, at least weekly, for more than 6 months. Symptoms in **two** settings (home and school) make it **moderate** (p. 523)."
    },
    {
      id: "w15-03", tag: "ODD",
      "case": "Over the past year a 14-year-old boy has often refused rules and requests from teachers and his parents, often argued with adults, often blamed others for his mistakes, and twice in the last 6 months got back at classmates by spreading a cruel rumor. These behaviors happen at home, at school and on his basketball team. He has never fought, stolen, destroyed property or skipped school. There is no mood or psychotic disorder.",
      parts: [
        { label: "Diagnosis", options: ["Oppositional defiant disorder", "Conduct disorder, adolescent-onset type", "Intermittent explosive disorder", "Adjustment disorder, with disturbance of conduct"], answer: 0 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: ["F91.2", "F91.3", "F63.81", "F43.24"], answer: 1 }
      ],
      line: "**F91.3** Oppositional defiant disorder, severe",
      why: "Defiance, arguing, blaming and vindictiveness make four symptoms. Spite needs only **two episodes in 6 months**, not weekly. No angry mood symptom is needed. Three settings make it **severe** (pp. 522–523)."
    },
    {
      id: "w15-04", tag: "IED",
      "case": "A 28-year-old warehouse worker has, for the past 4 months, yelled abuse at coworkers and shoved them (never injuring anyone or breaking anything) about three times a week. The triggers are trivial, such as a misplaced tool, and the outbursts come on suddenly, last about 10 minutes and are followed by embarrassment. He gains nothing from them. His mood is normal between episodes, he does not use alcohol or drugs, and his neurological examination and history are unremarkable. He has received a final written warning.",
      parts: [
        { label: "Diagnosis", options: ["Antisocial personality disorder", "Intermittent explosive disorder", "Personality change due to another medical condition, aggressive type", "Oppositional defiant disorder"], answer: 1 },
        { label: "Criterion A met by", options: ["A1: frequent outbursts without damage or injury", "A2: three damaging or injurious outbursts in 12 months"], answer: 0 },
        { label: "Code", options: ["F63.81", "F63.9", "F91.8", "F60.2", "F63.1"], answer: 0 }
      ],
      line: "**F63.81** Intermittent explosive disorder",
      why: "Verbal aggression and physical aggression with **no damage or injury**, averaging at least **twice a week for 3 months**, meets A1. The outbursts are impulsive, out of proportion, not used to gain anything, and costly at work; he is over 6 and nothing else explains them (p. 527). IED has no subtype or severity specifiers."
    },
    {
      id: "w15-05", tag: "Conduct disorder",
      "case": "A 12-year-old boy began starting fights at school at age 8. In the past 12 months he has threatened younger children for their lunch money, held a knife to a boy during a fight, kicked a neighbor’s dog until it limped, and broken into a parked car; the car break-in was last month. His parents, two teachers and an uncle who sees him weekly all describe the same picture over the past 2 years at home, school and in the neighborhood: he apologizes only when caught and facing punishment, seems indifferent to how his victims feel, and is cold and uncaring with family and friends.",
      parts: [
        { label: "Subtype", options: ONSET, answer: 0 },
        { label: "Specifier", options: LPE, answer: 0 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: ["F91.2", "F91.9", "F91.1", "F91.3", "F60.2"], answer: 2 }
      ],
      line: "**F91.1** Conduct disorder, childhood-onset type, with limited prosocial emotions, severe",
      why: "A symptom before age 10 (fights at 8) makes it **childhood-onset**. Apologizing only when caught does not count as remorse, so **lack of remorse** is present, along with **callousness**: two traits over 12 months, in several relationships, reported by several informants. A weapon, cruelty, robbery with a victim and breaking in are the manual’s examples of **severe** (pp. 531–532)."
    },
    {
      id: "w15-06", tag: "Conduct disorder",
      "case": "A 14-year-old boy had no behavior problems until age 12. Since then he has often stayed out until 2 a.m. despite his parents forbidding it, often skipped school (this also started at 12), and often lied to relatives to get money; all three are still happening. He has never been aggressive, stolen, destroyed property or run away. Teachers and parents describe him as warm and genuinely guilty after he is found out, and anxious about his falling grades. He has been suspended twice.",
      parts: [
        { label: "Subtype", options: ONSET, answer: 1 },
        { label: "Specifier", options: LPE, answer: 1 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["F91.1", "F91.2", "F91.9", "F91.3"], answer: 1 }
      ],
      line: "**F91.2** Conduct disorder, adolescent-onset type, mild",
      why: "Staying out and truancy count because both began **before age 13**; with conning that makes exactly three symptoms. No symptom before 10 means **adolescent-onset**. No conduct problems beyond the three required, and the harm is relatively minor (lying, truancy, staying out): **mild** (pp. 531–532)."
    },
    {
      id: "w15-07", tag: "Conduct disorder",
      "case": "A 17-year-old girl in a group home has, within the past year, shoplifted expensive clothing several times, smashed car windows on her street, and often conned staff and relatives into giving her money; the most recent incident was 3 weeks ago. She has never used a weapon or hurt anyone. She entered care at 15, and no records or relatives can say how she behaved before age 10. School and court reports confirm marked impairment.",
      parts: [
        { label: "Subtype", options: ONSET, answer: 2 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["F91.1", "F91.2", "F91.9", "F91.8"], answer: 2 }
      ],
      line: "**F91.9** Conduct disorder, unspecified onset, moderate",
      why: "Theft without confronting a victim, property destruction and conning make three symptoms in 12 months, one within 6 months. With no way to know whether a symptom began before 10, record **unspecified onset**, which shares **F91.9** with the unspecified disruptive category. Stealing without a victim and vandalism are the manual’s **moderate** examples (pp. 531–532)."
    },
    {
      id: "w15-08", tag: "ODD + CD",
      "case": "An 11-year-old boy has, for over a year, lost his temper most days, argued with teachers and his parents, refused to follow rules and deliberately annoyed classmates, at home and at school. He started picking fights at age 9 and still often does. In the past 12 months he has also stolen a classmate’s bicycle while no one was around and spray-painted the school gym; the vandalism was 2 months ago. Parents and teachers say he is genuinely sorry afterward and close to his friends. There is no mood disorder.",
      parts: [
        { label: "Diagnoses (choose all that apply)", options: ["Conduct disorder", "Oppositional defiant disorder", "Intermittent explosive disorder", "Disruptive mood dysregulation disorder"], answer: [0, 1], multi: true },
        { label: "Conduct disorder subtype", options: ONSET, answer: 0 },
        { label: "Conduct disorder severity", options: SEV, answer: 1 },
        { label: "Codes", options: ["F91.1 only", "F91.3 only", "F91.1 and F91.3", "F91.2 and F91.3", "F91.1 and F63.81"], answer: 2 }
      ],
      line: "**F91.1** Conduct disorder, childhood-onset type, moderate; **F91.3** oppositional defiant disorder, moderate",
      why: "Fights, theft without a victim and vandalism make three conduct symptoms, beginning at 9 (**childhood-onset**). The four ODD symptoms in two settings also meet criteria, and **both diagnoses can be given** when both are met (p. 536). Theft and vandalism sit at the manual’s **moderate** level (p. 532)."
    },
    {
      id: "w15-09", tag: "ADHD + ODD",
      "case": "An 8-year-old girl has, since age 5, had seven inattentive and six hyperactive-impulsive ADHD symptoms at home and at school, impairing her schoolwork and friendships. For the past 10 months she has also lost her temper, argued with her parents, refused simple requests such as putting on her shoes or coming to dinner, and blamed her brother for her own misdeeds, each several times a week. These four behaviors occur only at home. There is no mood disorder.",
      parts: [
        { label: "Diagnoses (choose all that apply)", options: ["Attention-deficit/hyperactivity disorder", "Oppositional defiant disorder", "Conduct disorder", "Disruptive mood dysregulation disorder"], answer: [0, 1], multi: true },
        { label: "ADHD presentation", options: ["Combined presentation", "Predominantly inattentive presentation", "Predominantly hyperactive/impulsive presentation"], answer: 0 },
        { label: "ODD severity", options: SEV, answer: 0 },
        { label: "Codes", options: ["F90.2 and F91.3", "F90.0 and F91.3", "F90.2 only", "F90.1 and F91.3", "F90.2 and F91.1"], answer: 0 }
      ],
      line: "**F90.2** Attention-deficit/hyperactivity disorder, combined presentation; **F91.3** oppositional defiant disorder, mild",
      why: "Six or more symptoms in each ADHD domain is **combined (F90.2)**. ODD can be added because her refusals are **not limited** to tasks needing sustained effort or sitting still (p. 526). Blaming her brother still counts, since the pattern also involves her parents. Home only is **mild**."
    },
    {
      id: "w15-10", tag: "Pyromania",
      "case": "A 24-year-old man has deliberately set five grass and dumpster fires over 2 years. Before each he feels mounting tension; watching the fire and the fire trucks brings relief and excitement. He listens to a fire scanner nightly and hangs around the local fire station. He gains no money, holds no grudge against anyone, is sober when he sets fires, and has no psychotic symptoms, manic episodes, or history of fights, theft or other rule-breaking. Intelligence and cognition are normal.",
      parts: [
        { label: "Diagnosis", options: ["Conduct disorder", "Pyromania", "Antisocial personality disorder", "Other specified disruptive, impulse-control, and conduct disorder"], answer: 1 },
        { label: "Code", options: ["F63.1", "F63.2", "F63.81", "F91.8", "F60.2"], answer: 0 }
      ],
      line: "**F63.1** Pyromania",
      why: "Repeated, purposeful fire setting with tension beforehand, fascination with fire and its trappings, and relief or pleasure. Every Criterion E motive (money, ideology, hiding a crime, revenge, better living conditions, psychosis, impaired judgment) is ruled out, and there is no conduct disorder, mania or antisocial pattern (p. 537)."
    },
    {
      id: "w15-11", tag: "Kleptomania",
      "case": "A 35-year-old accountant has repeatedly taken cheap items (lip balm, socks, a key ring) from shops over 6 years although she could easily pay. Tension builds as she walks the aisles, and pocketing the item brings a rush of relief. She acts alone, on impulse, and later throws the items away or leaves them in a drawer. She feels ashamed and fears arrest. She is not angry at the stores, has no psychotic symptoms or manic episodes, and has no other antisocial behavior.",
      parts: [
        { label: "Diagnosis", options: ["Kleptomania", "Conduct disorder", "Antisocial personality disorder", "No diagnosis: ordinary shoplifting"], answer: 0 },
        { label: "Code", options: ["F63.2", "F63.1", "F63.81", "F91.8"], answer: 0 }
      ],
      line: "**F63.2** Kleptomania",
      why: "Recurrent impulses to steal things she does **not need** for use or for their value, rising tension before and relief during the act, without anger, psychosis, mania or a general antisocial pattern (p. 539). Discarding or hoarding the items and stealing alone, unplanned, fit the description (pp. 539–540)."
    },
    {
      id: "w15-12", tag: "Residual",
      "case": "A 9-year-old boy has had sudden shouting and pushing outbursts at minor frustrations about once a week for 5 months, with no damage or injury. His mood is normal between outbursts, he shows no other oppositional or conduct symptoms, and there is no stressor. He has been excluded from two after-school programs. The clinician wants to record why full criteria are not met.",
      parts: [
        { label: "Diagnosis", options: ["Intermittent explosive disorder", "Oppositional defiant disorder", "Other specified disruptive, impulse-control, and conduct disorder", "Unspecified disruptive, impulse-control, and conduct disorder"], answer: 2 },
        { label: "Reason recorded", options: ["Recurrent behavioral outbursts of insufficient frequency", "Insufficient information", "Conduct symptoms below threshold", "Onset before age 6"], answer: 0 },
        { label: "Code", options: ["F91.9", "F63.81", "F91.8", "F63.9"], answer: 2 }
      ],
      line: "**F91.8** Other specified disruptive, impulse-control, and conduct disorder, recurrent behavioral outbursts of insufficient frequency",
      why: "IED A1 needs outbursts averaging **twice a week** for 3 months; once a week falls short and there are no damaging outbursts for A2. Temper loss alone is one ODD symptom, not four. The impairment is real and the clinician names the reason, so this is **other specified**, using the manual’s own example (p. 541)."
    },
    {
      id: "w15-13", tag: "Residual",
      "case": "Police bring a 16-year-old boy to the emergency department after a fight and an alleged theft at a mall. He is angry and uncooperative, no family member can be reached, and there are no records. The clinician sees clear disruptive and aggressive behavior but cannot establish its pattern, duration or onset, and chooses not to specify a reason.",
      parts: [
        { label: "Diagnosis", options: ["Conduct disorder, unspecified onset", "Other specified disruptive, impulse-control, and conduct disorder", "Unspecified disruptive, impulse-control, and conduct disorder", "Intermittent explosive disorder"], answer: 2 },
        { label: "Code", options: ["F91.8", "F91.9", "F91.2", "F63.81"], answer: 1 }
      ],
      line: "**F91.9** Unspecified disruptive, impulse-control, and conduct disorder",
      why: "Without the history, conduct disorder (3 symptoms in 12 months) cannot be confirmed. When information is insufficient, as in emergency settings, and the clinician does not give a reason, use **unspecified**. It shares **F91.9** with conduct disorder, unspecified onset, so write the name out (p. 541)."
    },
    {
      id: "w15-14", tag: "ASD + IED",
      "case": "A 13-year-old boy has autism spectrum disorder needing support (level 1) for both social communication and restricted, repetitive behaviors, with average intelligence and fluent speech. In the past 10 months he has, at small frustrations such as a sibling touching his game, smashed a television, kicked a hole in his bedroom door and punched his sister, giving her a bloody nose. These explosions are far worse than his usual meltdowns, and the team is planning treatment aimed at them specifically. His mood is normal between outbursts; there is no stressor, substance use or medical cause.",
      parts: [
        { label: "Diagnoses (choose all that apply)", options: ["Autism spectrum disorder", "Intermittent explosive disorder", "Disruptive mood dysregulation disorder", "Conduct disorder"], answer: [0, 1], multi: true },
        { label: "IED Criterion A met by", options: ["A1: frequent outbursts without damage or injury", "A2: three damaging or injurious outbursts in 12 months"], answer: 1 },
        { label: "Codes", options: ["F84.0 and F63.81", "F84.0 only", "F63.81 only", "F84.0 and F34.81", "F84.0 and F91.8"], answer: 0 }
      ],
      line: "**F84.0** Autism spectrum disorder, requiring support for social communication and for restricted, repetitive behaviors (level 1), without accompanying intellectual impairment, without accompanying language impairment; **F63.81** intermittent explosive disorder",
      why: "Three outbursts with **damage or injury** within 12 months meets A2. The note under the IED criteria allows the diagnosis **alongside ASD** (and ADHD, conduct disorder or ODD) when outbursts exceed what the disorder usually brings and **need independent clinical attention** (p. 527)."
    }
  ]);

  SP.add("ch15", "counting", [
    {
      id: "n15-01", tag: "ODD Criterion A (under 5)",
      "case": "A 4-year-old girl’s parents and preschool teacher describe the past 7 months:",
      ask: "Mark the behaviors that count as ODD symptoms at her age. Are at least four present?",
      items: [
        ["Loses her temper most days, at home and at preschool", true, "Under age 5 a symptom must occur on **most days**; this does."],
        ["Touchy and easily annoyed by her teacher most days", true, "A2, at the required frequency."],
        ["Refuses her parents’ requests most days", true, "A5, at the required frequency."],
        ["Argues with her father about twice a week", false, "Weekly is the rule from age 5. Before 5 the bar is **most days**."],
        ["Twice in the past 6 months deliberately broke a classmate’s drawing to get back at her", true, "Spitefulness has its own rule: **at least twice in 6 months**, at any age."]
      ],
      need: 4,
      met: true,
      why: "Four symptoms count. The frequency guide is most days under age 5 and at least weekly from age 5, except vindictiveness, which needs two episodes in 6 months (p. 522)."
    },
    {
      id: "n15-02", tag: "ODD Criterion A (5 and older)",
      "case": "A 9-year-old boy’s behavior over the past 8 months:",
      ask: "Mark the behaviors that count as ODD symptoms. Are at least four present?",
      items: [
        ["Argues with his teacher two or three times a week", true, "A4, at least weekly from age 5."],
        ["Blames classmates for his own mistakes about once a week", true, "A7, at least weekly."],
        ["Loses his temper about once a month", false, "From age 5 a symptom needs to occur **at least once a week**."],
        ["Deliberately annoys his older brother daily, but nobody else", false, "Sibling conflict is common, so the manual asks that symptoms be seen in interactions with **people other than siblings** (p. 523); behavior aimed only at a brother does not count here."],
        ["Refuses classroom rules several times a week", true, "A5, at least weekly."]
      ],
      need: 4,
      met: false,
      why: "Only three symptoms count, so Criterion A is not met. Watch him over time, or consider other specified disruptive, impulse-control, and conduct disorder if impairment is significant (pp. 522–523, 541)."
    },
    {
      id: "n15-03", tag: "ODD severity",
      "case": "A 12-year-old meets ODD criteria. Where do her symptoms appear?",
      ask: "Mark each setting where some ODD symptoms are present. Are there three or more (severe)?",
      items: [
        ["At home with her parents", true, "One setting."],
        ["At school with teachers", true, "A second setting."],
        ["At swimming practice with her coach and teammates", true, "A third setting (peers and another adult)."],
        ["She was calm and polite throughout the clinic interview", false, "ODD symptoms are often not seen in the office; their absence there does not lower severity."],
        ["She has eight of the eight ODD symptoms", false, "ODD severity depends on **how many settings**, not on how many symptoms."]
      ],
      need: 3,
      met: true,
      why: "Mild is one setting, moderate two, severe three or more. Assess across settings and relationships, because pervasiveness is the severity marker (p. 523)."
    },
    {
      id: "n15-04", tag: "CD Criterion A (age 13 rule)",
      "case": "A 15-year-old boy has had these behaviors in the past 12 months, all continuing into the past 6 months:",
      ask: "Mark the behaviors that count as conduct disorder symptoms. Are at least three present?",
      items: [
        ["Often skips school; the truancy began at age 14", false, "Truancy counts only if it began **before age 13**."],
        ["Often stays out all night against his parents’ rules, starting at age 12", true, "A13: began before 13."],
        ["Ran away overnight once and came home the next afternoon", false, "Running away needs **two** overnight episodes, or one without returning for a lengthy period."],
        ["Shoplifted expensive sneakers on two occasions", true, "A12: theft of nontrivial value without confronting a victim."],
        ["Often lies to his grandmother to get money", true, "A11: conning others for goods or favors."]
      ],
      need: 3,
      met: true,
      why: "Three symptoms count: staying out, shoplifting and conning. Check the age rule for A13 and A15 and the frequency rule for A14 before counting rule violations (p. 531)."
    },
    {
      id: "n15-05", tag: "CD Criterion A (time window)",
      "case": "A 16-year-old girl’s history:",
      ask: "Mark the behaviors that count toward Criterion A of conduct disorder. Are at least three present in the past 12 months, with at least one in the past 6?",
      items: [
        ["Ran away overnight twice to escape sexual abuse by her stepfather", false, "Running away as a **direct result of abuse** does not usually count."],
        ["Broke into a neighbor’s car 10 months ago", true, "A10, inside the 12-month window."],
        ["Stole a phone from a classmate’s locker 8 months ago", true, "A12, inside the window."],
        ["Often bullies a classmate online, most recently last week", true, "A1, and it falls within the past 6 months."],
        ["Was cruel to the family cat 14 months ago", false, "Outside the **12-month** window."]
      ],
      need: 3,
      met: true,
      why: "Three symptoms fall in the past 12 months and one (the bullying) in the past 6 months, so Criterion A is met. The abuse also needs its own clinical and protective response (pp. 531, 533)."
    },
    {
      id: "n15-06", tag: "CD Criterion A (recency)",
      "case": "A 14-year-old boy’s conduct problems, with nothing since 7 months ago:",
      ask: "Mark the behaviors that fall within the past 12 months. Is Criterion A met?",
      items: [
        ["Often started fights at school until 11 months ago", true, "A2, within 12 months."],
        ["Set fire to a neighbor’s shed, meaning to destroy it, 9 months ago", true, "A8, within 12 months."],
        ["Broke into the school office 7 months ago", true, "A10, within 12 months."],
        ["Has had no conduct problems in the 7 months since starting a new school", false, "Nothing falls in the past 6 months."]
      ],
      need: 3,
      met: false,
      metLabel: "So, is Criterion A met?",
      why: "Three symptoms in 12 months is not enough on its own: at least **one must be in the past 6 months**. None is, so Criterion A is not currently met (p. 530)."
    },
    {
      id: "n15-07", tag: "Limited prosocial emotions",
      "case": "A 13-year-old meets conduct disorder criteria. His parents, two teachers and his coach have known him for years, and each describes the same pattern at home, school and sport for the past 2 years:",
      ask: "Mark the findings that count as one of the four specifier traits. Are at least two present?",
      items: [
        ["Says sorry only when he has been caught and is facing punishment", true, "Remorse shown only when caught is excluded, so this is **lack of remorse or guilt**."],
        ["Unmoved when others are hurt or upset; cares only about what happens to him", true, "**Callous, lacking empathy.**"],
        ["Makes no effort at school even when the expectations are clear, and blames teachers for poor grades", true, "**Unconcerned about performance.**"],
        ["Seeks thrills and seems fearless", false, "These features may accompany the specifier but are **not among its four traits**."],
        ["In his own interview he denies all of these traits", false, "Self-report alone does not settle it; those with the specifier may not admit the traits."]
      ],
      need: 2,
      met: true,
      why: "Three traits are present, shown persistently for at least 12 months across relationships and settings, and confirmed by **multiple informants**: record **with limited prosocial emotions** (pp. 531–533)."
    },
    {
      id: "n15-08", tag: "Limited prosocial emotions",
      "case": "A 15-year-old girl meets conduct disorder criteria. Only her new homeroom teacher, who has known her for 5 months, has given a report. Her parents say she is affectionate at home.",
      ask: "Mark the findings that satisfy the requirements for the specifier. Is the specifier met?",
      items: [
        ["The teacher says she seems cold and indifferent to classmates’ feelings", false, "One informant, one setting, 5 months: not yet a persistent pattern."],
        ["The teacher says her emotions look switched on and off for effect", false, "Same problem: short and seen in one setting only."],
        ["The traits have lasted at least 12 months", false, "Only 5 months are documented."],
        ["The traits appear in several relationships and settings", false, "Her parents describe the opposite at home."]
      ],
      need: 2,
      met: false,
      why: "The specifier needs two traits shown **persistently for 12 months** in **multiple relationships and settings**, judged from **multiple sources** who have known the person for a long time (pp. 531–533). Gather more history before recording it."
    },
    {
      id: "n15-09", tag: "IED Criterion A2",
      "case": "A 30-year-old man describes his outbursts over the past 12 months. Each came on suddenly after a minor annoyance, except where noted:",
      ask: "Mark the outbursts that count toward Criterion A2. Are there at least three?",
      items: [
        ["Punched a wall and left a hole", true, "Property damage."],
        ["Threw his old, cheap phone at the floor and shattered it", true, "Destroying an object counts **regardless of its value**."],
        ["Shoved his brother, who was not hurt", false, "Physical aggression without injury belongs to **A1**, not A2."],
        ["Slapped a coworker, leaving a bruise", true, "Physical injury to another person."],
        ["Planned and carried out a beating of a man who owed him money", false, "Premeditated and aimed at a tangible goal: it fails Criterion C."]
      ],
      need: 3,
      met: true,
      why: "Three damaging or injurious, impulsive outbursts within 12 months meet A2 (pp. 527–528). The other criteria, including B through F, still need checking."
    },
    {
      id: "n15-10", tag: "IED Criterion A1",
      "case": "Over the past 13 weeks a 19-year-old woman has had these outbursts:",
      ask: "Mark the outbursts that go into the A1 tally.",
      items: [
        ["Screamed insults at her roommate over small things: 14 times", true, "Verbal aggression."],
        ["Shoved coworkers without injuring anyone: 6 times", true, "Physical aggression without damage or injury still counts for A1."],
        ["Kicked and dented a car door: once", false, "Damage belongs to the A2 tally."],
        ["Calmly threatened a classmate to get his test answers: 3 times", false, "Planned and for a tangible goal: not impulsive aggression."],
        ["Shouted at strangers while high on cocaine: 4 times", false, "Outbursts caused by intoxication are left out."]
      ],
      metLabel: "Do the countable outbursts average at least twice a week over 3 months?",
      met: false,
      why: "Twenty countable outbursts in 13 weeks is about **1.5 a week**, below the A1 average of **twice weekly**. One damaging outburst is far from the three needed for A2. Criterion A is not met (pp. 527, 530)."
    }
  ]);
})();
