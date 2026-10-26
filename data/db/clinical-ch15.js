/* Chapter 15 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var SAFETY = "Ask every time about **suicidal thoughts**, **weapons** at home, **abuse or neglect**, and **legal** trouble; raised suicide attempt rates are reported across this chapter.";
  var COLLATERAL = "Get **collateral history** from parents, teachers or partners: children and adolescents tend to minimize, and symptoms may not appear in the clinic.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "oppositional-defiant",
      ask: [
        ["A Mood", "“How often does your child lose their temper, get annoyed easily, or stay angry and resentful?”", "Temper loss can be angry looks or words, not only tantrums."],
        ["A Behavior", "“Does your child argue with adults, refuse rules or requests, annoy people on purpose, or blame others for their own mistakes?”"],
        ["A Vindictiveness", "“In the last 6 months, has your child tried to get back at someone out of spite? How many times?”", "Needs at least twice in 6 months."],
        ["A Frequency", "“On how many days a week does this happen, and for how many months?”", "Under 5: most days; 5 and older: at least weekly."],
        ["A Who", "“Is it only with brothers or sisters, or also with you, teachers or other children?”", "At least one person must not be a sibling."],
        ["B Impact", "“How is this affecting home life, school or friendships?”"],
        ["C Mood", "“Between these episodes, is your child irritable or angry most of the day, nearly every day?”", "If DMDD criteria are met, ODD is not diagnosed. Also ask about depression and mania."],
        ["Severity", "“Does this happen at home only, or also at school, with friends, or elsewhere?”", "One setting mild, two moderate, three or more severe."],
        ["Look-alikes", "“Does the refusal happen mainly with homework or sitting still? Does your child understand instructions? Are they anxious about being judged?”", "ADHD, language disorder, social anxiety."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Parent management training** (e.g., Parent–Child Interaction Therapy, Incredible Years, Triple P) for children; no medication is approved for ODD (NICE CG158; AACAP practice parameter).",
        points: [
          COLLATERAL,
          "Teach parents to **praise and reward** wanted behavior, give **clear, brief commands**, and use **calm, consistent** consequences such as time-out; reduce harsh or inconsistent discipline.",
          "For older children and adolescents: problem-solving and social skills training, family therapy, school-based behavior plans.",
          "Treat comorbid **ADHD**: [[stahl:drugs/methylphenidate|stimulants]] often reduce defiance and aggression too; [[stahl:drugs/atomoxetine|atomoxetine]] and [[stahl:drugs/guanfacine|guanfacine]] are alternatives.",
          "Screen for **anxiety and depression**, especially when angry, irritable mood is prominent.",
          SAFETY
        ],
        stahl: [["Methylphenidate", "drugs/methylphenidate"], ["Guanfacine", "drugs/guanfacine"], ["Impulsivity and violence", "c/ch13/guide/s13-impulse"]]
      }
    },
    {
      id: "ied",
      ask: [
        ["A Outbursts", "“When you get angry, what happens? Do you shout, break things, or hit anyone?”"],
        ["A1 Frequency", "“How often do you blow up without breaking anything or hurting anyone: about twice a week? For how long?”", "Twice weekly on average for 3 months."],
        ["A2 Severity", "“In the past year, how many times have you damaged property or injured a person or animal?”", "Three in 12 months."],
        ["B Proportion", "“What usually sets it off? Looking back, was the reaction out of proportion?”"],
        ["C Impulsive", "“Do the outbursts come on suddenly, or do you plan them? Do you use anger to get something?”", "Planned or instrumental aggression points away from IED."],
        ["D Consequences", "“Has this cost you a job, a relationship, money, or brought you to court?”"],
        ["F Exclusions", "“Do outbursts happen only when you’re drinking or using, or during periods of depression or very high mood? Any head injury or seizures?”", "Mood episodes, psychosis, substances and medical causes exclude."],
        ["Between", "“How is your mood between outbursts?”", "Persistent irritability suggests DMDD (in youth) or a mood disorder."],
        ["Trauma and safety", "“Have you been through anything traumatic? Have you ever thought of hurting yourself?”", "IED with PTSD carries high suicide attempt rates."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** for anger (relaxation, cognitive restructuring, coping skills) has randomized trial support; [[stahl:drugs/fluoxetine|fluoxetine]] reduced impulsive aggression in a placebo-controlled trial. No drug is approved for IED.",
        points: [
          "Identify triggers and early warning signs; teach time-out and **leaving the situation**; anger diaries.",
          "[[stahl:drugs/fluoxetine|Fluoxetine]] (Coccaro et al., 2009) is the best-studied medication; mood stabilizers and other agents have weaker evidence.",
          "Treat comorbid **PTSD, depression, anxiety and substance use**; stop alcohol and stimulants.",
          "Ask about **domestic violence**, weapons and children at risk; consider legal obligations.",
          SAFETY
        ],
        stahl: [["Fluoxetine", "drugs/fluoxetine"], ["Impulsivity and violence", "c/ch13/guide/s13-impulse"]]
      }
    },
    {
      id: "conduct-disorder",
      ask: [
        ["A Aggression", "“Has your child bullied or threatened others, started fights, used a weapon, or been cruel to people or animals?”", "Include online bullying."],
        ["A Aggression", "“Has your child ever robbed someone face to face, or forced anyone into sexual activity?”"],
        ["A Property", "“Has your child set a fire meaning to cause damage, or deliberately broken other people’s things?”"],
        ["A Deceit or theft", "“Has your child broken into a house, building or car? Lied to get things or avoid duties? Stolen things of value?”"],
        ["A Rules", "“Does your child stay out at night against your rules? Since what age? Run away overnight? Skip school, and since what age?”", "Staying out and truancy must start before 13; runaway twice, or once for a long time."],
        ["A Timing", "“Which of these happened in the last year, and which in the last 6 months?”", "3 in 12 months, 1 in the last 6."],
        ["Onset", "“Did any of these happen before age 10?”", "Childhood-onset F91.1 versus adolescent-onset F91.2."],
        ["Specifier", "“When your child hurts someone, do they seem sorry? Do they care how others feel, or about school? How do they show feelings?”", "Remorse only when caught does not count; ask several informants."],
        ["C Age", "For adults: “Has this pattern continued since your teens, with lying, fights, and not caring about consequences?”", "If 18 or older, check antisocial PD."],
        ["Context", "“Has anyone hurt your child? Did the running away follow abuse?”", "Runaway caused by abuse does not usually count."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Family-based psychosocial treatment: **parent management training** for children; **multisystemic therapy** or functional family therapy for adolescents. No medication is approved for conduct disorder (NICE CG158).",
        points: [
          COLLATERAL,
          "Work with family, **school** and, when involved, the **justice system**; keep youth out of groups made up only of other high-risk peers.",
          "Treat comorbid **ADHD** with stimulants or nonstimulants; this often reduces aggression.",
          "[[stahl:drugs/risperidone|Risperidone]] only for **severe, persistent aggression** after psychosocial treatment, short term, with weight, glucose, lipid and prolactin monitoring (NICE CG158; Cochrane 2017).",
          "Screen for **learning and language disorders**, depression, substance use and trauma.",
          "Avoid fear-based or boot-camp programs, which can worsen outcomes.",
          SAFETY
        ],
        stahl: [["Risperidone", "drugs/risperidone"], ["Methylphenidate", "drugs/methylphenidate"], ["Impulsivity and violence", "c/ch13/guide/s13-impulse"]]
      }
    },
    {
      id: "pyromania",
      ask: [
        ["A Fire setting", "“How many times have you set fires on purpose?”", "More than once is required."],
        ["B Tension", "“How do you feel in the hours or minutes before you set a fire?”"],
        ["C Fascination", "“Are you drawn to fires, fire trucks or fire stations? Do you watch fires in your neighborhood?”"],
        ["D Relief", "“How do you feel while the fire burns, or afterward?”"],
        ["E Motive", "“Was there any other reason: money, getting back at someone, hiding something, a cause you believe in, or voices telling you to?”", "Any external motive excludes pyromania."],
        ["E Judgment", "“Had you been drinking or using at the time?”", "Intoxication, dementia or intellectual disability exclude."],
        ["F Other disorders", "“Have you been in trouble for fights, theft or lying since childhood? Any periods of very high energy and little sleep?”", "Conduct disorder, antisocial PD and mania exclude."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** focused on the tension–relief cycle and on fire-safety education; medication evidence is minimal.",
        points: [
          "Treat comorbid **alcohol use**, gambling and mood disorders.",
          "In children and adolescents, fire setting usually reflects **conduct disorder, ADHD or adjustment problems**: treat those, and provide fire-safety programs.",
          "Assess **risk to others** and legal obligations.",
          SAFETY
        ],
        stahl: [["Impulsivity and violence", "c/ch13/guide/s13-impulse"]]
      }
    },
    {
      id: "kleptomania",
      ask: [
        ["A Urges", "“Do you get urges to take things you don’t need and could pay for? How often do you give in?”"],
        ["A Objects", "“What do you do with the things you take?”", "Often given away, thrown out, hoarded or returned."],
        ["B Tension", "“How do you feel just before you take something?”"],
        ["C Relief", "“How do you feel while you are taking it?”"],
        ["D Motive", "“Do you ever take things to get back at someone, or because voices or beliefs tell you to?”"],
        ["E Other disorders", "“Have you had trouble with fights or lying since childhood? Periods of very high mood?”", "Conduct disorder, antisocial PD and mania exclude."],
        ["Features", "“Do you plan it, or do it with others? How do you feel afterward?”", "Usually alone, unplanned, followed by guilt."],
        ["Comorbidity", "“How is your mood? Any binge eating, purging, compulsive buying or heavy drinking?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** (covert sensitization, exposure and response prevention, relapse planning); [[stahl:drugs/naltrexone|naltrexone]] reduced urges and stealing in a randomized trial (Grant et al., 2009). No drug is approved.",
        points: [
          "Naltrexone is used off label; check liver function and avoid with opioid use.",
          "SSRI evidence is mixed; treat comorbid **depression**, **bulimia** and **alcohol use**.",
          "Practical steps: avoid stores alone, shop with a list, involve a support person.",
          "Address shame, legal consequences and **suicide risk**.",
          SAFETY
        ],
        stahl: [["Naltrexone", "drugs/naltrexone"], ["Impulsivity and violence", "c/ch13/guide/s13-impulse"]]
      }
    },
    {
      id: "other-specified-disruptive",
      ask: [
        ["Reason", "“How often do the outbursts or behaviors happen, and for how long?”", "Record why full criteria are not met (e.g., outbursts of insufficient frequency)."],
        ["Impact", "“How much distress or trouble is this causing?”", "Clinically significant distress or impairment is required."]
      ]
    },
    {
      id: "unspecified-disruptive",
      ask: [
        ["Information", "“Who else knows this person’s history? When did this start?”", "Revise once collateral history is available."]
      ]
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "conduct-problems", title: "Aggression, lying, stealing or truancy in a child or teen",
      intro: "Count the conduct disorder behaviors in the past **12 months** (3 needed, 1 in the last 6), note whether any began **before age 10**, and get **collateral** history. Check whether the behavior is confined to a mood episode, substance use or a stressor, and screen for **ADHD, learning problems and abuse**.",
      ask: ["Fights, bullying, weapons, cruelty to people or animals?", "Fire setting or vandalism?", "Breaking in, lying to get things, stealing?", "Staying out at night, running away, truancy, and since what age?", "Any of this before age 10?", "Remorse, empathy, concern about school, depth of feelings?", "Problems at school with reading or language?", "Has anyone hurt the child?"],
      mustNotMiss: ["**Abuse or neglect**, including running away to escape abuse.", "**Suicide risk** and access to **weapons**.", "**Depression or mania** driving irritability and risk-taking.", "**Substance use**, especially in adolescent girls."],
      helpers: ["disruptive"],
      items: [
        { ch: "ch15", dx: "conduct-disorder", when: "3 of 15 behaviors in 12 months (1 in the last 6), with impairment." },
        { ch: "ch15", dx: "oppositional-defiant", when: "Defiance and anger without serious aggression, theft or deceit; can coexist with CD." },
        { ch: "ch15", dx: "ied", when: "Impulsive, out-of-proportion outbursts without planned aggression." },
        { ch: "ch15", dx: "other-specified-disruptive", when: "Fewer than 3 behaviors, with impairment and a recorded reason." },
        { ch: "ch01", dx: "adhd", when: "Impulsive rule-breaking; often comorbid, and both are diagnosed." },
        { ch: "ch07", dx: "adjustment", when: "Conduct problems that start with a stressor and do not persist beyond 6 months after it." },
        { ch: "ch07", dx: "ptsd", when: "Reenactment and risk-taking after trauma that look like conduct problems." },
        { ch: "ch04", dx: "dmdd", when: "Chronic irritability between severe outbursts; CD can still be added." }
      ]
    },
    {
      id: "anger-outbursts", title: "Explosive anger or rage attacks in an adult",
      intro: "Decide whether the outbursts are **impulsive and out of proportion** (IED) or **planned and instrumental** (antisocial behavior), whether they occur **only** with substances, mood episodes or psychosis, and whether a **medical cause** such as brain injury is present.",
      ask: ["How often, and how severe: shouting only, or damage and injury?", "Sudden, or planned? Used to get something?", "Mood between outbursts?", "Only when drinking or using?", "Head injury, seizures, new neurological symptoms?", "Trauma history and nightmares?", "Partner or children at risk?"],
      mustNotMiss: ["**Domestic violence** and children at risk.", "**Brain injury**, epilepsy or dementia in new-onset aggression.", "**Mania** or **psychosis**.", "**Suicide risk**, especially with PTSD."],
      helpers: ["disruptive"],
      items: [
        { ch: "ch15", dx: "ied", when: "Twice weekly verbal or harmless outbursts for 3 months, or 3 destructive ones in 12 months." },
        { ch: "ch15", dx: "other-specified-disruptive", when: "Similar outbursts that are too infrequent for IED." },
        { ch: "ch18", dx: "antisocial-pd", when: "Aggression for gain, without remorse, with conduct disorder before 15." },
        { ch: "ch18", dx: "borderline-pd", when: "Intense anger with unstable relationships, self-image and self-harm." },
        { ch: "ch18", dx: "personality-change-amc", when: "New aggression after brain injury or disease." },
        { ch: "ch07", dx: "ptsd", when: "Irritability and angry outbursts after trauma." },
        { ch: "ch03", dx: "bipolar-i", when: "Anger only during manic episodes." }
      ]
    },
    {
      id: "fire-setting", title: "Repeated fire setting",
      intro: "Fire setting is a behavior, not a diagnosis. Ask about **motive** first (money, revenge, hiding a crime, ideology, attention), then **psychosis, mania, intoxication, dementia or intellectual disability**, then **conduct disorder or antisocial PD**. Only then consider **pyromania**, which is rare.",
      ask: ["How many fires, and what was set alight?", "Why: any gain, anger or cause?", "Feelings before and after?", "Interest in fires, fire trucks, fire stations?", "Drinking or using at the time?", "Other aggression, theft or lying since childhood?"],
      mustNotMiss: ["**Risk to life**: people in buildings, escalation.", "**Psychosis** (command hallucinations) and **mania**.", "**Conduct disorder** in a young person.", "**Suicide risk**: higher rates reported in fire setters."],
      helpers: ["firesetting"],
      items: [
        { ch: "ch15", dx: "pyromania", when: "Tension before, fascination, relief after; no other motive or disorder explains it." },
        { ch: "ch15", dx: "conduct-disorder", when: "Fire setting meant to cause serious damage within a wider antisocial pattern." },
        { ch: "ch18", dx: "antisocial-pd", when: "An adult pattern of antisocial acts since conduct disorder before 15." },
        { ch: "ch03", dx: "bipolar-i", when: "Fire setting during a manic episode." },
        { ch: "ch02", dx: "schizophrenia", when: "Fire set in response to delusions or hallucinations." },
        { ch: "ch17", dx: "major-ncd", when: "Fire from impaired judgment in dementia." },
        { ch: "ch01", dx: "adhd", when: "Impulsive fire setting in a child." }
      ]
    },
    {
      id: "stealing", title: "Repeated stealing or shoplifting",
      intro: "Most stealing is **ordinary theft** for the object or its value. Consider **kleptomania** only when the items are **not needed**, there is **tension before and relief during** the act, and conduct disorder, antisocial PD, mania, psychosis and dementia do not explain it.",
      ask: ["What is taken, and what happens to it?", "Could the person afford it?", "Feelings just before and during?", "Planned, or with others?", "Other antisocial behavior since childhood?", "Mood, eating, buying and drinking patterns?"],
      mustNotMiss: ["**Mania** or **frontotemporal dementia** in new-onset stealing in an adult.", "**Malingering** to avoid prosecution.", "**Suicide risk** after arrest."],
      helpers: ["firesetting"],
      items: [
        { ch: "ch15", dx: "kleptomania", when: "Unneeded items, rising tension then relief, alone and unplanned; often guilt afterward." },
        { ch: "ch15", dx: "conduct-disorder", when: "Theft within a pattern of aggression, deceit and rule-breaking in a youth." },
        { ch: "ch18", dx: "antisocial-pd", when: "Theft for gain in an adult, with conduct disorder before 15." },
        { ch: "ch03", dx: "bipolar-i", when: "Stealing during a manic episode." },
        { ch: "ch17", dx: "ncd-frontotemporal", when: "New disinhibited stealing in midlife." },
        { ch: "ch10", dx: "bulimia", when: "Stealing food or other items, often with binge eating." }
      ]
    },
    {
      id: "irritable-child",
      helpers: ["disruptive"],
      items: [
        { ch: "ch15", dx: "oppositional-defiant", when: "Anger, defiance or spite with a non-sibling, 4 of 8 for 6 months; not with DMDD." },
        { ch: "ch15", dx: "ied", when: "Outbursts out of proportion with normal mood between them, age 6 or older." },
        { ch: "ch15", dx: "conduct-disorder", when: "Aggression with theft, deceit or serious rule-breaking." }
      ]
    },
    {
      id: "rule-breaking",
      helpers: ["disruptive"],
      items: [
        { ch: "ch15", dx: "conduct-disorder", when: "An adult who meets conduct disorder but not antisocial PD criteria." },
        { ch: "ch15", dx: "ied", when: "Impulsive, out-of-proportion violence that is not planned or for gain." },
        { ch: "ch15", dx: "kleptomania", when: "Repeated stealing of unneeded items, with tension and relief." },
        { ch: "ch15", dx: "pyromania", when: "Repeated fire setting from fascination, with no external motive." }
      ]
    }
  ]);
})();
