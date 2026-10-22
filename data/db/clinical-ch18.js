/* Chapter 18 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   Schizotypal personality disorder’s extras live in clinical-ch02.js. */
(function () {
  var NOAPPROVED = "No medication is FDA-approved for any personality disorder as of October 2026; medicines treat comorbid disorders or specific target symptoms, time-limited and alongside psychotherapy.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "general-pd",
      ask: [
        ["D Onset", "“Thinking back to your teens and early twenties, were you like this then?”", "Ask an informant who knew the person early."],
        ["B Pervasive", "“Does this happen at home, at work and with friends, or mainly in one place?”"],
        ["A Cognition", "“How do you usually see yourself and other people?”"],
        ["A Affect", "“How strong are your feelings, and how quickly do they change?”"],
        ["A Interpersonal", "“What tends to go wrong in your relationships?”"],
        ["A Impulse control", "“Do you often act on impulse and regret it?”"],
        ["E–F Exclusions", "“Were things different before you got depressed, started using, or had your injury?”", "Exclude episodes, substances and medical causes."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Structured psychotherapy** matched to the disorder is the mainstay; establish a clear frame, shared goals and a crisis plan.",
        points: [NOAPPROVED, "Treat co-occurring depression, anxiety, PTSD and substance use, which worsen outcomes.", "Review medications at least every 6 months and taper what does not help."],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "paranoid-pd",
      ask: [
        ["A1 Suspicion", "“Do you often feel people are trying to take advantage of you or harm you?”"],
        ["A2 Loyalty", "“Can you count on your friends and coworkers?”"],
        ["A3 Confiding", "“Do you avoid telling people things in case they use them against you?”"],
        ["A4 Hidden meanings", "“Do you notice insults or threats in what others say that they don’t seem to mean?”"],
        ["A5 Grudges", "“When someone wrongs you, how long does it stay with you?”"],
        ["A6 Attacks", "“Do people often attack your reputation? What do you do?”", "Ask about lawsuits and fights."],
        ["A7 Fidelity", "“Do you worry your partner is unfaithful? What makes you think so?”"],
        ["Context", "“Have you faced discrimination or been treated unfairly by officials?”", "Separate realistic mistrust from a trait."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Supportive, respectful psychotherapy** with transparency: explain everything, avoid premature confrontation of beliefs, and keep a consistent, predictable stance.",
        points: [NOAPPROVED, "A low-dose antipsychotic (e.g., [[stahl:drugs/risperidone|risperidone]]) may be considered briefly for stress-related psychotic-like episodes or severe agitation.", "Treat comorbid depression, anxiety and substance use."],
        stahl: [["Antipsychotics", "c/ch05/guide/s5-dones"]]
      }
    },
    {
      id: "schizoid-pd",
      ask: [
        ["A1 Closeness", "“Do you want close relationships, including with family?”", "No desire, not fear of rejection."],
        ["A2 Solitude", "“Do you prefer doing things alone?”"],
        ["A3 Sex", "“How interested are you in sexual relationships?”"],
        ["A4 Pleasure", "“What do you enjoy?”"],
        ["A6 Opinions", "“Does praise or criticism from others affect you?”"],
        ["ASD", "“As a child, did you have intense special interests, routines or sensory sensitivities?”", "Screen for autism."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Seldom seeks treatment. Offer **low-pressure supportive therapy** focused on the person’s goals (often work or a comorbid problem), respecting the need for distance; group or skills work only if wanted.",
        points: [NOAPPROVED, "Treat comorbid depression if present."],
        stahl: []
      }
    },
    {
      id: "antisocial-pd",
      ask: [
        ["C Childhood", "“Before 15, did you get into fights, steal, skip school, run away, set fires or hurt animals?”", "Required: conduct disorder before 15."],
        ["A1 Law", "“Have you done things you could have been arrested for, even if you weren’t caught?”"],
        ["A2 Deceit", "“Do you lie or con people to get what you want?”"],
        ["A4 Aggression", "“How often do you get into physical fights?”", "Self-defense does not count."],
        ["A6 Responsibility", "“How long have you kept jobs? Do you pay debts and child support?”"],
        ["A7 Remorse", "“How do you feel about people you have hurt?”"],
        ["Collateral", "Check records and informants.", "Deceit is central."],
        ["Risk", "Ask about weapons, violence toward partners or children, and suicidal thoughts."]
      ],
      tx: {
        asOf: "October 2026",
        first: "No treatment has strong evidence for the core disorder. Focus on **risk management** and **comorbidities**: substance use treatment (often contingency management), structured cognitive-behavioral programs targeting aggression and offending, and mentalization-based approaches under study.",
        points: [NOAPPROVED, "Treat substance use disorders (e.g., [[stahl:drugs/naltrexone|naltrexone]] for alcohol use disorder) and ADHD, which drive risk.", "Be alert to malingering and medication diversion; avoid benzodiazepines and other misusable drugs."],
        stahl: [["Naltrexone", "drugs/naltrexone"]]
      }
    },
    {
      id: "borderline-pd",
      ask: [
        ["1 Abandonment", "“What happens inside you when someone important might leave, or is late?”"],
        ["2 Relationships", "“Do your feelings about people swing from wonderful to terrible?”"],
        ["3 Identity", "“Do you have a clear sense of who you are, or does it change a lot?”"],
        ["4 Impulsivity", "“Do you spend, drink, use drugs, have sex, drive or binge in ways you later regret?”", "Need at least two areas."],
        ["5 Self-harm", "“Have you hurt yourself on purpose or tried to kill yourself?”", "Ask method, frequency, last episode."],
        ["6 Mood", "“How long do your mood changes last: hours or days?”", "Hours suggests borderline; days suggests a mood episode."],
        ["7 Emptiness", "“Do you often feel empty inside?”"],
        ["9 Stress symptoms", "“Under stress, do you feel unreal, or that people are against you?”"],
        ["Mood episodes", "“Have you had several days of high energy with little need for sleep?”", "Screen for bipolar disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: "A **structured, evidence-based psychotherapy** targeting core features: **DBT**, **mentalization-based treatment**, **transference-focused psychotherapy**, **schema therapy**, or **good psychiatric management**. The APA guideline (December 2024) found no single gold standard.",
        points: [
          "No medication improves the core symptoms. Any medicine should be **time-limited**, aimed at a **measurable target**, adjunctive to therapy, and reviewed at least every **6 months**.",
          "Lamotrigine did not beat placebo in the LABILE trial; avoid relying on mood stabilizers. Brief, low-dose second-generation antipsychotics (e.g., [[stahl:drugs/aripiprazole|aripiprazole]], [[stahl:drugs/quetiapine|quetiapine]]) are sometimes used for specific symptoms.",
          "Avoid benzodiazepines; prescribe in small quantities because of overdose risk.",
          "Psychoeducation about the good prognosis; a crisis plan; treat comorbid depression, PTSD, substance use and eating disorders."
        ],
        stahl: [["Partial agonists", "c/ch05/guide/s5-pa"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "histrionic-pd",
      ask: [
        ["1 Attention", "“How do you feel when you are not the center of attention?”"],
        ["2 Seductiveness", "Observe and ask how others respond to the person’s style.", "Judge against cultural norms."],
        ["5 Speech", "“Tell me specifically what you like about them.”", "Impressionistic speech lacks detail."],
        ["8 Intimacy", "“Who are your close friends? How long have you known them?”"],
        ["Somatic", "“Have you had physical symptoms that doctors could not explain?”", "Screen for somatic symptom and functional disorders."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Psychodynamic or cognitive therapy** focusing on the need for attention, emotional depth and relationships; set clear, consistent boundaries.",
        points: [NOAPPROVED, "Treat comorbid depression and somatic presentations; take suicidal threats seriously."],
        stahl: []
      }
    },
    {
      id: "narcissistic-pd",
      ask: [
        ["1 Self-importance", "“How do you compare with others in your field?”"],
        ["4 Admiration", "“How important is it that others recognize your achievements?”"],
        ["5 Entitlement", "“How do you react when rules apply to you like everyone else?”"],
        ["7 Empathy", "“How did your partner feel when that happened?”"],
        ["Vulnerability", "“How do you feel after criticism or a setback?”", "Shame, rage or withdrawal."],
        ["Safety", "“Since the setback, have you thought about ending your life?”", "Attempts tend to be planned and lethal."],
        ["Mood", "“Have there been days of unusually high mood and little sleep?”", "Exclude hypomania."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Psychotherapy, often **transference-focused**, **mentalization-based** or **schema** therapy, aiming at self-esteem regulation and empathy; expect ruptures and address them directly.",
        points: [NOAPPROVED, "Treat comorbid depression, PDD and substance use (especially cocaine).", "Assess suicide risk carefully after failures or humiliation."],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "avoidant-pd",
      ask: [
        ["Wish for closeness", "“Would you like more friends or a partner?”", "Yes in avoidant PD; no in schizoid PD."],
        ["2 Certainty", "“Do you need to be sure people like you before getting involved?”"],
        ["1 Work", "“Have you turned down jobs or promotions because of the people contact?”"],
        ["6 Self-view", "“How do you think others see you?”"],
        ["7 Risks", "“Do you avoid new activities in case you embarrass yourself?”"],
        ["Social anxiety", "“Do you fear speaking, eating or performing in front of others?”", "Often coexists."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** (individual or group) with graded exposure, social skills training and work on core beliefs of inferiority; schema therapy also has support.",
        points: ["Medications used for social anxiety disorder help the anxiety component: an [[stahl:c/ch07/guide/s7-ssri|SSRI]] or [[stahl:drugs/venlafaxine|venlafaxine]].", "Treat comorbid depression and substance use."],
        stahl: [["Social anxiety disorder", "c/ch08/guide/s8-social"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "dependent-pd",
      ask: [
        ["1 Decisions", "“Can you make everyday decisions on your own?”"],
        ["2 Responsibility", "“Who decides where you live, work and who you see?”"],
        ["3 Disagreement", "“What happens if you disagree with them?”", "Exclude realistic fear of retribution."],
        ["6 Alone", "“How do you feel when you are alone?”"],
        ["7 Replacement", "“After your last relationship ended, how soon did you find someone new?”"],
        ["Safety", "“Has anyone hurt or threatened you? Do you feel safe at home?”", "Dependent people may tolerate abuse."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** and assertiveness training, gradually building independent decisions; time-limited goals help avoid fostering dependence on the therapist.",
        points: [NOAPPROVED, "Treat comorbid depression and anxiety; address abuse and safety."],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "ocpd",
      ask: [
        ["1–2 Perfectionism", "“Do you miss deadlines because work isn’t good enough yet?”"],
        ["3 Work", "“When did you last take a holiday? Is the work hours a financial necessity?”"],
        ["6 Delegating", "“Can others help you, or must things be done your way?”"],
        ["5 and 7 Saving", "“Do you keep worn-out things or find it hard to spend money?”"],
        ["OCD screen", "“Do you have unwanted thoughts that you neutralize with rituals?”", "True obsessions point to OCD."],
        ["Culture", "“Are these standards shared by your community or religion?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT** targeting perfectionism, rigidity and work–life balance, or psychodynamic therapy; the traits are often ego-syntonic, so start from the distress they cause.",
        points: [NOAPPROVED, "Treat comorbid OCD, depression and anxiety (e.g., an [[stahl:c/ch07/guide/s7-ssri|SSRI]])."],
        stahl: [["OCD", "c/ch13/guide/s13-ocd"]]
      }
    },
    {
      id: "personality-change-amc",
      ask: [
        ["A Change", "Ask an informant: “How is he different from before? When did it start?”", "“Not himself.”"],
        ["B Cause", "Review neurological history, exam, imaging, EEG, endocrine and infection tests.", "Frontal signs, seizures, focal deficits."],
        ["D Delirium", "Check attention and fluctuation.", "Not if only during delirium."],
        ["Subtype", "“Is it mainly mood swings, impulsiveness, aggression, apathy or suspicion?”", "Labile, disinhibited, aggressive, apathetic, paranoid."],
        ["Safety", "Ask about aggression, sexual disinhibition, driving and finances."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the **underlying condition**; use environmental structure, caregiver education and behavioral strategies.",
        points: ["Target symptoms: an [[stahl:c/ch07/guide/s7-ssri|SSRI]] for lability or irritability; cautious antipsychotics for severe aggression or paranoia, weighing risks in older or brain-injured patients.", "Apathy may respond to activation strategies; review contributing medications.", "Consider capacity and safeguarding."],
        stahl: [["Agitation in dementia", "c/ch12/guide/s12-agitation"], ["Pseudobulbar affect and apathy", "c/ch12/guide/s12-pba-apathy"]]
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "unstable", title: "Emotional storms, self-harm and unstable relationships",
      intro: "Ask about the time course: hours-long reactive shifts point to borderline personality disorder; distinct episodes of days point to bipolar disorder. Document a long-standing pattern before diagnosing a personality disorder.",
      ask: ["How long do mood shifts last, and what sets them off?", "Have you hurt yourself or tried to end your life?", "What happens when someone might leave you?", "Any days of high energy with little sleep?", "Any trauma, substance use or binge eating?"],
      mustNotMiss: ["**Suicide risk** and lethal means.", "**Bipolar disorder** and major depression.", "**PTSD**, substance use and eating disorders."],
      helpers: ["personality", "pdpair"],
      items: [
        { ch: "ch18", dx: "borderline-pd", when: "Abandonment fear, idealization–devaluation, self-harm, emptiness, hours-long shifts." },
        { ch: "ch03", dx: "bipolar-ii", when: "Hypomanic episodes of at least 4 days with decreased need for sleep." },
        { ch: "ch18", dx: "histrionic-pd", when: "Theatrical, shallow emotion without self-destructiveness." },
        { ch: "ch18", dx: "dependent-pd", when: "Fear of abandonment met with appeasement." },
        { ch: "ch07", dx: "ptsd", when: "Mood and impulsivity driven by trauma reminders." },
        { ch: "ch08", dx: "did", when: "Shifts with amnesia and identity states." }
      ]
    },
    {
      id: "lifelong-pattern", title: "Long-standing difficulties getting along with people",
      intro: "Establish that the pattern began by adolescence or early adulthood, appears across settings, and is not confined to episodes, substances or a medical condition. Then sort by cluster and by motive.",
      ask: ["Were you like this as a teenager?", "Does it happen at home, work and with friends?", "Do you want close relationships? What gets in the way?", "Have you been depressed, using substances or injured when it started?"],
      mustNotMiss: ["A **new change** in later life (medical cause).", "**Depressive, anxiety or psychotic episodes** mimicking traits.", "**Cultural** context and discrimination."],
      helpers: ["personality", "pdpair"],
      items: [
        { ch: "ch18", dx: "paranoid-pd", when: "Distrust, grudges, hidden meanings." },
        { ch: "ch18", dx: "schizoid-pd", when: "No wish for relationships, cold and solitary." },
        { ch: "ch02", dx: "schizotypal-pd", when: "Odd beliefs, perceptions and dress; suspicious social anxiety." },
        { ch: "ch18", dx: "narcissistic-pd", when: "Grandiose, entitled, unempathic." },
        { ch: "ch18", dx: "avoidant-pd", when: "Wants closeness but fears rejection." },
        { ch: "ch18", dx: "ocpd", when: "Rigid, perfectionistic and controlling." },
        { ch: "ch18", dx: "other-specified-pd", when: "Mixed features without full criteria." },
        { ch: "ch01", name: "Autism spectrum disorder", when: "Lifelong social communication differences with restricted interests." }
      ]
    },
    {
      id: "rule-breaking", title: "Lying, rule-breaking or violence in an adult",
      intro: "Antisocial personality disorder needs age 18 or older and conduct disorder before 15. Check whether the behavior is confined to substance use, mania or psychosis, and consider adult antisocial behavior.",
      ask: ["Did this start before age 15?", "Does it happen only when using or during episodes of high mood?", "Is it for gain, for revenge, or to get care?", "Any head injury or new neurological symptoms?"],
      mustNotMiss: ["**Violence risk**: weapons, partners, children.", "**Mania** and **psychosis**.", "**Frontal lobe** injury or dementia in a new-onset case."],
      helpers: ["personality"],
      items: [
        { ch: "ch18", dx: "antisocial-pd", when: "Since 15, with conduct disorder before 15; for gain, without remorse." },
        { ch: "ch18", dx: "paranoid-pd", when: "Antisocial acts for revenge." },
        { ch: "ch18", dx: "narcissistic-pd", when: "Exploitative but not aggressive or deceitful in the same way." },
        { ch: "ch03", dx: "bipolar-i", when: "Only during manic episodes." },
        { ch: "ch18", dx: "personality-change-amc", when: "A new change after brain injury or disease." },
        { ch: "ch22", name: "Adult antisocial behavior (Z72.811)", when: "Crime for gain without personality features." }
      ]
    },
    {
      id: "personality-change", title: "A change in personality in midlife or later",
      intro: "Personality disorders begin by early adulthood. A genuine change from a previous personality needs a medical, neurological and substance evaluation.",
      ask: ["How was he before? When did it change?", "Any head injury, seizures, headaches, weakness or memory problems?", "New medicines, alcohol or drugs?", "Is it mood swings, impulsiveness, aggression, apathy or suspicion?"],
      mustNotMiss: ["**Brain tumor**, stroke, **frontotemporal dementia**, Huntington’s disease.", "**Delirium**.", "**Substance use** and medication effects."],
      helpers: ["personality"],
      items: [
        { ch: "ch18", dx: "personality-change-amc", when: "Direct effect of a medical condition (F07.0)." },
        { ch: "ch04", dx: "mdd", when: "Withdrawal and irritability within a depressive episode." },
        { ch: "ch03", dx: "bipolar-i", when: "Disinhibition within a manic episode." },
        { ch: "ch07", dx: "ptsd", when: "Change after extreme stress." },
        { ch: "ch17", name: "Major neurocognitive disorder", when: "Personality change with cognitive decline." }
      ]
    },
    {
      id: "odd", title: "Odd beliefs or eccentric behavior",
      items: [
        { ch: "ch18", dx: "paranoid-pd", when: "Lifelong distrust and suspiciousness without delusion." },
        { ch: "ch18", dx: "schizoid-pd", when: "Lifelong detachment without odd beliefs." }
      ]
    },
    {
      id: "clutter", title: "Can’t throw things away; a cluttered home",
      items: [
        { ch: "ch18", dx: "ocpd", when: "Keeps worn-out things as part of a rigid, perfectionistic, miserly style." }
      ]
    }
  ]);
})();
