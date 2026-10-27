/*
 * Diagnostic helper for Chapter 22 (Other Conditions That May Be a Focus of Clinical Attention), DSM-5-TR pp. 821–836.
 * "psychosocial": from a problem or circumstance to the right group of codes, with the reminder that a mental
 * disorder that is met is diagnosed in its own right and that a Z code is added for one of the four reasons on p. 821.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "psychosocial",
    chapter: "ch22",
    title: "A problem rather than a disorder: which Z code, and is a disorder present too?",
    summary: "Start from a psychosocial problem, behavior or circumstance, decide whether a mental disorder is present as well, check that one of the four reasons to code applies, then sort the problem into its group: self-harm, abuse and neglect, relational and family, education and work, housing and money, social and legal, other circumstances, or the additional conditions.",
    caution: "A teaching aid built from DSM-5-TR pp. 821–836. Nothing in this chapter is a mental disorder (p. 821). Codes are as printed, with the APA corrections (T14.91XA/XD, Z91.199, Z59.10, Z59.71/Z59.72) noted in the results; use the code set in force on the date of service. Abuse, suicidal behavior and self-injury carry legal and safety duties outside the DSM.",
    start: "disorder",
    nodes: {
      disorder: {
        q: "Does the person also meet criteria for a mental disorder, or is the problem itself the only focus?",
        help: "A Z code never replaces a diagnosis that is met; it is added when the condition is a reason for the visit, explains a test or treatment, helps initiate or worsen a disorder, or belongs in the management plan (p. 821). Reactions to deployment or to a change of residence are adjustment disorders, not Z codes (pp. 830–831).",
        options: [
          { label: "A mental disorder is met: diagnose it, and ask whether a condition from this chapter should be added", to: "reason", note: "Both can be recorded." },
          { label: "No disorder: the problem or circumstance is the focus", to: "reason", note: "A Z code may be the reason for visit." },
          { label: "No disorder and no problem after a full evaluation", to: "r:nodx", note: "Z03.89 (Chapter 20)." }
        ]
      },
      reason: {
        q: "Does one of the four reasons to code apply?",
        help: "1) a reason for the current visit; 2) it explains the need for a test, procedure or treatment; 3) it plays a role in starting or worsening a mental disorder; 4) it should be considered in the overall management plan (p. 821).",
        options: [
          { label: "Yes", to: "group", note: "Choose the group." },
          { label: "No: the circumstance exists but is not clinically relevant", to: "r:norecord", note: "Describe in the history; no code needed." }
        ]
      },
      group: {
        q: "What kind of problem is it?",
        help: "The chapter has 14 groups (pp. 821–822). Pick the closest.",
        options: [
          { label: "A suicide attempt, or self-injury without suicidal intent", to: "selfharm", note: "Group 1." },
          { label: "Maltreatment: abuse or neglect of a child or an adult", to: "abuse", note: "Group 2." },
          { label: "A relationship or family problem", to: "relational", note: "Group 3 and the family environment." },
          { label: "School, work, housing, money, social environment or the law", to: "environment", note: "Groups 4–9." },
          { label: "Another circumstance: pregnancy, crime, disaster, access to care, personal history, counseling, lifestyle", to: "r:other", note: "Groups 10–13." },
          { label: "Wandering, bereavement, a life transition, a faith problem, antisocial behavior, nonadherence, weight, malingering or a cognitive question", to: "additional", note: "Group 14." }
        ]
      },
      selfharm: {
        q: "Was there at least some intent to die, and was the behavior initiated?",
        help: "Intent can be explicit or inferred; injury is not required; a person dissuaded or who changed their mind before initiating does not receive the suicidal behavior code (p. 822). NSSI is self-inflicted damage likely to cause bleeding, bruising or pain, without suicidal intent (p. 822).",
        options: [
          { label: "Some intent to die, behavior initiated (injury or not)", to: "encounter", note: "Suicidal behavior." },
          { label: "Self-injury without suicidal intent", to: "r:nssi", note: "R45.88 current; Z91.52 history." },
          { label: "Stopped or dissuaded before initiating", to: "r:nocode-ideation", note: "Not suicidal behavior under this entry." },
          { label: "The behavior was in the past, not part of this presentation", to: "r:history-sb", note: "Z91.51." }
        ]
      },
      encounter: {
        q: "Is the person receiving active treatment for the episode, or routine care in recovery?",
        help: "A = active treatment: emergency department, evaluation and treatment by a new clinician. D = after active treatment, routine care in the healing or recovery phase: medication adjustment, aftercare, follow-up (pp. 822–823).",
        options: [
          { label: "Active treatment (emergency care, first evaluation by a new clinician)", to: "r:sb-a", note: "T14.91XA." },
          { label: "Routine care in recovery (follow-up, medication adjustment)", to: "r:sb-d", note: "T14.91XD." }
        ]
      },
      abuse: {
        q: "Who was maltreated, by whom, and is the event confirmed?",
        help: "Child categories: physical abuse, sexual abuse, neglect, psychological abuse (pp. 823–825). Adult categories: partner physical violence, partner sexual violence, partner neglect, partner psychological abuse, and abuse by a nonpartner adult (pp. 826–828). Confirmed = T74; suspected = T76; 7th character A or D; Z69 codes when the encounter is for mental health services to the victim or perpetrator; Z62.81-/Z91.41- for past history (pp. 822–823).",
        options: [
          { label: "A child, by a parent, caregiver or responsible person", to: "r:child", note: "Child maltreatment codes." },
          { label: "An adult, by an intimate partner", to: "r:partner", note: "Partner violence, neglect or abuse." },
          { label: "An adult, by another adult who is not a partner", to: "r:nonpartner", note: "Nonpartner adult abuse." },
          { label: "Past abuse or neglect, not a current event", to: "r:history-abuse", note: "History codes." },
          { label: "Bullying or exclusion by peers, no caregiver or partner", to: "r:social", note: "Z60.4, not an abuse code." }
        ]
      },
      relational: {
        q: "Which relationship, and is it conflict or maltreatment?",
        help: "Maltreatment goes to the abuse codes. Relational problems are about the quality of the relationship (behavioral, cognitive and affective impairment) or its effect on a disorder (pp. 828–829). Family-environment codes cover upbringing away from parents, a child affected by parental discord, separation or divorce, and high expressed emotion (pp. 829–830).",
        options: [
          { label: "Parent (or caregiver) and child", to: "r:parentchild", note: "Z62.820/.821/.822/.898." },
          { label: "Siblings", to: "r:sibling", note: "Z62.891." },
          { label: "Spouse or intimate partner, without abuse", to: "r:partnerdistress", note: "Z63.0." },
          { label: "The family environment: raised away from parents, parental discord affecting a child, separation or divorce, high expressed emotion", to: "r:family", note: "Z62.29, Z62.898, Z63.5, Z63.8." },
          { label: "Normal grief after a death", to: "r:bereavement", note: "Z63.4." }
        ]
      },
      environment: {
        q: "Which area?",
        help: "Education Z55.-, occupation Z56.- (deployment status Z56.82 excludes the psychological reaction), housing Z59.0-/.1/.2/.3/.9 (reactions to a change of residence are an adjustment disorder), economic Z59.41/Z58.6/Z59.5/.6/.7/.9, social environment Z60.-, legal Z65.0–.3 (pp. 830–833).",
        options: [
          { label: "Education or work", to: "r:eduwork", note: "Z55 / Z56." },
          { label: "Housing or money", to: "r:housing", note: "Z59 / Z58.6." },
          { label: "Social environment: living alone, migration, bullying, discrimination", to: "r:social", note: "Z60." },
          { label: "The legal system", to: "r:legal", note: "Z65.0–Z65.3." }
        ]
      },
      additional: {
        q: "Which of the additional conditions?",
        help: "Each has a look-alike disorder: wandering versus akathisia and running away; bereavement versus MDE and prolonged grief disorder; antisocial behavior versus conduct disorder and ASPD; nonadherence versus PFAMC; malingering versus factitious disorder; age-related cognitive decline versus mild NCD; borderline intellectual functioning versus mild IDD (pp. 834–836).",
        options: [
          { label: "Wandering in a person with a mental disorder", to: "r:wandering", note: "Z91.83, disorder coded first." },
          { label: "Grief after a death, felt as normal", to: "r:bereavement", note: "Z63.4." },
          { label: "A life-cycle transition, or a religious or spiritual problem", to: "r:phase", note: "Z60.0 / Z65.8." },
          { label: "Antisocial behavior not explained by a disorder", to: "r:antisocial", note: "Z72.811 / Z72.810." },
          { label: "Not following treatment, or overweight or obesity", to: "r:adherence", note: "Z91.19 (now Z91.199) / E66.9." },
          { label: "Possible feigning for an external gain", to: "r:malingering", note: "Z76.5." },
          { label: "Memory or intellectual functioning below par but not a disorder", to: "r:cognitive", note: "R41.81 / R41.83." }
        ]
      }
    },
    results: {
      "nodx": { label: "Not this chapter", dx: "No diagnosis or condition", line: "Evaluated, with no mental disorder and no condition from this chapter: [[dx:no-diagnosis|Z03.89]] (Chapter 20, p. 805).", points: ["Z03.89 is wrong whenever a problem that needs attention was found."], link: { ch: "ch22", sec: "s22-map", label: "The four reasons to code" } },
      "norecord": { label: "No code", dx: "Circumstance noted, not coded", line: "The chapter codes a condition only for one of the four reasons on p. 821; a circumstance that is not clinically relevant is described in the history.", points: ["Reconsider if it later affects treatment or prognosis."], link: { ch: "ch22", sec: "s22-map", label: "The four reasons to code" } },
      "sb-a": { dx: "Current suicidal behavior, initial encounter", line: "Potentially self-injurious behavior with at least some intent to die, initiated, during active treatment (p. 822).", points: ["Code: T14.91XA (printed T14.91A; corrected by the APA, September 2022).", "Add Z91.51 if there was earlier suicidal behavior.", "Diagnose any mental disorder separately; assess and manage risk first (app guidance)."], link: { ch: "ch22", sec: "s22-suicidal", label: "Suicidal behavior" }, dxId: "suicidal-behavior" },
      "sb-d": { dx: "Current suicidal behavior, subsequent encounter", line: "The same behavior, now in routine care during recovery: follow-up, medication adjustment (pp. 822–823).", points: ["Code: T14.91XD.", "Risk is reassessed at every visit (app guidance)."], link: { ch: "ch22", sec: "s22-suicidal", label: "Suicidal behavior" }, dxId: "suicidal-behavior" },
      "history-sb": { dx: "History of suicidal behavior", line: "Suicidal behavior at any time in the person’s life, not part of the current presentation (p. 822).", points: ["Code: Z91.51."], link: { ch: "ch22", sec: "s22-suicidal", label: "Suicidal behavior" }, dxId: "suicidal-behavior" },
      "nssi": { dx: "Nonsuicidal self-injury", line: "Intentional self-inflicted damage likely to cause bleeding, bruising or pain, without suicidal intent (p. 822).", points: ["Code: R45.88 when current; Z91.52 for history.", "Re-ask about intent at each visit; the same act with intent to die is suicidal behavior (app guidance)."], link: { ch: "ch22", sec: "s22-nssi", label: "NSSI" }, dxId: "nssi" },
      "nocode-ideation": { label: "Not suicidal behavior", dx: "Dissuaded or changed mind before initiating", line: "The suicidal behavior category does not apply when the person was dissuaded or changed their mind before initiating the behavior (p. 822).", points: ["Suicidal ideation is documented and managed in the risk assessment; ICD-10-CM has R45.851 for ideation, which the DSM chapter does not list (app note).", "Diagnose any mental disorder separately."], link: { ch: "ch22", sec: "s22-suicidal", label: "Where the line is" } },
      "child": { dx: "Child maltreatment: physical abuse, sexual abuse, neglect or psychological abuse", line: "Choose the type by the manual’s definitions (pp. 823–825), then confirmed (T74.x2) or suspected (T76.x2) with A or D.", points: ["Physical T74.12/T76.12; sexual T74.22/T76.22; neglect T74.02/T76.02; psychological T74.32/T76.32, each with XA or XD.", "Encounter for mental health services: Z69.010 (victim, parental), Z69.020 (victim, nonparental), Z69.011 and Z69.021 (perpetrator).", "Reasonable discipline without injury is not abuse (p. 823); excessive discipline is psychological abuse (p. 825).", "Reporting duties apply (RA 7610; app guidance, outside the DSM)."], link: { ch: "ch22", sec: "s22-child-abuse", label: "Child abuse" }, dxId: "child-physical-abuse" },
      "partner": { dx: "Spouse or partner violence (physical or sexual), neglect, or psychological abuse", line: "Choose the type by the manual’s definitions (pp. 826–827): physical force or significant fear; force or coercion into a sexual act; deprivation of a dependent partner; verbal or symbolic acts including economic control, isolation, stalking and gaslighting.", points: ["Physical T74.11/T76.11; sexual T74.21/T76.21; neglect T74.01/T76.01; psychological T74.31/T76.31, each with XA or XD.", "Victim encounter Z69.11 (Z69.81 for sexual violence); perpetrator Z69.12; history Z91.410/.411/.412.", "Safety planning first (RA 9262; app guidance, outside the DSM)."], link: { ch: "ch22", sec: "s22-partner-violence", label: "Partner violence" }, dxId: "partner-violence-physical" },
      "nonpartner": { dx: "Adult abuse by a nonspouse or nonpartner", line: "Physical, sexual or psychological abuse of an adult by an adult who is not an intimate partner (pp. 827–828).", points: ["Same adult T codes as the partner categories (T74.11/.21/.31, T76.11/.21/.31 with XA or XD); the relationship shows in Z69.81 (victim) and Z69.82 (perpetrator).", "Elder abuse by an adult child belongs here (app example)."], link: { ch: "ch22", sec: "s22-adult-nonpartner", label: "Nonpartner adult abuse" }, dxId: "adult-abuse-nonpartner" },
      "history-abuse": { dx: "Personal history of abuse or neglect", line: "A past history may be recorded alongside the diagnosis because it influences diagnosis and treatment response (pp. 822–823).", points: ["Childhood: Z62.810 physical or sexual, Z62.811 psychological, Z62.812 neglect.", "Partner: Z91.410 physical or sexual, Z91.411 psychological, Z91.412 neglect.", "No partner-style history code is listed for nonpartner adult abuse (p. 828)."], link: { ch: "ch22", sec: "s22-how-to-code", label: "How the codes work" }, dxId: "child-physical-abuse" },
      "parentchild": { dx: "Parent-child relational problem", line: "The focus is the quality of the parent-child relationship, or it affects a disorder; impairment in behavioral, cognitive or affective domains (p. 829).", points: ["Z62.820 biological, Z62.821 adopted, Z62.822 foster child; Z62.898 other caregiver, including a grandparent in a parental role (app reading).", "Threats of violence that become force or injury move to the abuse codes (pp. 823, 826)."], link: { ch: "ch22", sec: "s22-relational", label: "Relational problems" }, dxId: "parent-child-relational" },
      "sibling": { dx: "Sibling relational problem", line: "A pattern of sibling interaction with significant impairment or symptoms, in children or adults; full, half-, step-, foster and adopted siblings (p. 829).", points: ["Code: Z62.891."], link: { ch: "ch22", sec: "s22-relational", label: "Relational problems" }, dxId: "sibling-relational" },
      "partnerdistress": { dx: "Relationship distress with spouse or intimate partner", line: "The major focus is the quality of the intimate relationship, or it affects a disorder; partners of the same or different genders (p. 829).", points: ["Code: Z63.0.", "Living apart or divorcing: Z63.5 (p. 830).", "Any force, coercion, control or fear points to the partner abuse codes instead (pp. 826–827)."], link: { ch: "ch22", sec: "s22-relational", label: "Relational problems" }, dxId: "partner-relationship-distress" },
      "family": { dx: "Problem related to the family environment", line: "Z62.29 upbringing away from parents; Z62.898 child affected by parental relationship distress; Z63.5 disruption of family by separation or divorce; Z63.8 high expressed emotion level within family (pp. 829–830).", points: ["Z62.29 excludes Z59.3 living in a residential institution (p. 829)."], link: { ch: "ch22", sec: "s22-family", label: "Family environment" }, dxId: "family-environment" },
      "eduwork": { dx: "Educational or occupational problem", line: "Z55.0–Z55.9 for education; Z56.82 and Z56.0–Z56.9 for work (pp. 830–831).", points: ["Psychological reactions to deployment are an adjustment disorder or another disorder, not Z56.82 (p. 830)."], link: { ch: "ch22", sec: "s22-education-work", label: "Education and work" }, dxId: "occupational-problem" },
      "housing": { dx: "Housing or economic problem", line: "Z59.01 sheltered and Z59.02 unsheltered homelessness, Z59.1 inadequate housing, Z59.2, Z59.3, Z59.9; Z59.41 food insecurity, Z58.6, Z59.5, Z59.6, Z59.7, Z59.9 (pp. 831–832).", points: ["Reactions to a change of living situation are an adjustment disorder, not Z59.3 (p. 831).", "Since printing: Z59.1 → Z59.10 (October 2023); Z59.7 → Z59.71 / Z59.72 (October 2024) (APA updates)."], link: { ch: "ch22", sec: "s22-housing-economic", label: "Housing and economic" }, dxId: "housing-problem" },
      "social": { dx: "Problem related to the social environment", line: "Z60.2 living alone, Z60.3 acculturation difficulty, Z60.4 social exclusion or rejection (bullying, with a power imbalance and recurrence), Z60.5 target of (perceived) discrimination or persecution, Z60.9 (p. 832).", points: ["Bullying by peers is Z60.4, not an abuse code (app reading)."], link: { ch: "ch22", sec: "s22-social-legal", label: "Social and legal" }, dxId: "social-environment-problem" },
      "legal": { dx: "Problem related to interaction with the legal system", line: "Z65.0 conviction without imprisonment, Z65.1 imprisonment, Z65.2 release from prison, Z65.3 other legal circumstances (pp. 832–833).", points: ["A medicolegal context is also one of the four indicators for considering malingering (p. 835)."], link: { ch: "ch22", sec: "s22-social-legal", label: "Social and legal" }, dxId: "legal-problem" },
      "other": { dx: "Other psychosocial, personal or environmental circumstance", line: "Lifestyle Z72.9 (only when a specific focus or directly affecting course); pregnancy Z64.0/Z64.1; social service discord Z64.4; victim of crime, terrorism or torture Z65.4; disaster or war Z65.5; access to care Z75.3/Z75.4; history of trauma Z91.49 or deployment Z91.82; counseling Z31.5, Z70.9, Z71.3, Z71.9 (pp. 833–834).", points: ["A lifestyle problem that is a symptom is coded only when it meets the test; then code both (p. 833)."], link: { ch: "ch22", sec: "s22-other-circumstances", label: "Other circumstances" }, dxId: "other-psychosocial-circumstances" },
      "wandering": { dx: "Wandering associated with a mental disorder", line: "A desire to walk about that causes management or safety concerns in a person with a disorder such as major NCD or autism (p. 834).", points: ["Code the mental disorder first, then Z91.83.", "Excludes running away or wanting to leave hospital, and pacing from [[dx:medication-induced-acute-akathisia|akathisia]] (p. 834)."], link: { ch: "ch22", sec: "s22-additional", label: "Additional conditions" }, dxId: "wandering" },
      "bereavement": { dx: "Uncomplicated bereavement", line: "A normal reaction to the death of a loved one, possibly with depressive-like symptoms the person regards as normal (p. 834).", points: ["Code: Z63.4.", "Full MDE criteria → [[dx:mdd|major depressive disorder]] (Chapter 4); persistent grief 12 months on (6 in children) → [[dx:pgd|prolonged grief disorder]] (Chapter 7)."], link: { ch: "ch22", sec: "s22-additional", label: "Additional conditions" }, dxId: "uncomplicated-bereavement" },
      "phase": { dx: "Phase of life problem, or religious or spiritual problem", line: "Z60.0 for a life-cycle transition; Z65.8 for loss or questioning of faith, conversion or spiritual values (p. 834).", points: ["If the transition produces a symptomatic reaction with impairment, consider [[dx:adjustment|adjustment disorder]] (app guidance)."], link: { ch: "ch22", sec: "s22-additional", label: "Additional conditions" }, dxId: "phase-of-life-problem" },
      "antisocial": { dx: "Adult, or child or adolescent, antisocial behavior", line: "Antisocial behavior not attributable to a mental disorder: Z72.811 adults; Z72.810 isolated acts in children or adolescents (p. 835).", points: ["A repetitive pattern → [[dx:conduct-disorder|conduct disorder]]; from 18 with conduct disorder before 15 → [[dx:antisocial-pd|antisocial personality disorder]]."], link: { ch: "ch22", sec: "s22-behavior-adherence", label: "Antisocial behavior" }, dxId: "antisocial-behavior" },
      "adherence": { dx: "Nonadherence to medical treatment, or overweight or obesity", line: "Z91.19 (now Z91.199) when nonadherence to an important aspect of treatment is severe enough for independent attention and PFAMC criteria are not met; E66.9 when weight is a focus (p. 835).", points: ["If a psychological factor adversely affects a medical condition, diagnose [[dx:pfamc|PFAMC]] instead (p. 835)."], link: { ch: "ch22", sec: "s22-behavior-adherence", label: "Nonadherence" }, dxId: "nonadherence" },
      "malingering": { dx: "Malingering", line: "Intentional false or grossly exaggerated symptoms for an external incentive; strongly considered with any combination of the four indicators (p. 835).", points: ["Code: Z76.5.", "No external incentive and a sick-role aim → [[dx:factitious|factitious disorder]]; symptoms not intentionally produced → [[dx:fnd|FND]] or another somatic symptom–related disorder (p. 835)."], link: { ch: "ch22", sec: "s22-malingering", label: "Malingering" }, dxId: "malingering" },
      "cognitive": { dx: "Age-related cognitive decline, or borderline intellectual functioning", line: "R41.81 for objective decline within normal limits for age after excluding a disorder and a neurological cause; R41.83 when borderline intellectual functioning is the focus or affects treatment (pp. 835–836).", points: ["Decline beyond the expected → [[dx:mild-ncd|mild NCD]]; deficits in intellectual and adaptive functioning → [[dx:idd|intellectual developmental disorder]]."], link: { ch: "ch22", sec: "s22-cognitive", label: "Cognitive" }, dxId: "age-related-cognitive-decline" }
    }
  }
]);
