/* Chapter 22 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app;
   a published mnemonic carries `source` instead. Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable.
   The chapter's entries are conditions and problems, not mental disorders, and have no criteria sets. */
SP.add("ch22", "mnemonics", [
  {
    id: "m22-01", short: "Why code it: VIEW", name: "VIEW: the four reasons a chapter condition may be coded", original: true, dx: "other-psychosocial-circumstances", sec: "s22-map",
    "for": "When a Z code (or other code from this chapter) earns a place in the record",
    letters: [
      ["V", "Visit reason", "The problem is why the person came in today"],
      ["I", "Investigation or intervention explained", "It accounts for the need for a test, procedure or treatment"],
      ["E", "Exacerbation or onset", "It helped start or worsen a mental disorder"],
      ["W", "Whole management plan", "It is something the overall treatment plan has to take into account"]
    ],
    caveat: "DSM check: p. 821. Any one reason is enough. These are **not mental disorders**; the chapter exists to flag issues seen in practice and give a systematic way to document them (p. 821). A Z code is usually listed **alongside** a diagnosis, not in place of one (app guidance)."
  },
  {
    id: "m22-02", short: "14 groups: sentence", name: "'Sad And Restless, Every Office Has Extra Stress; Lawyers Often Ask Patients Confusing Arguments'", original: true, dx: "other-psychosocial-circumstances", sec: "s22-map",
    "for": "The 14 groups of conditions in the chapter, in the manual's order",
    letters: [
      ["S", "Suicidal behavior and nonsuicidal self-injury", "T14.91XA/XD, Z91.51; R45.88, Z91.52"],
      ["A", "Abuse and neglect", "Child and adult: physical, sexual, neglect, psychological"],
      ["R", "Relational problems", "Parent-child, sibling, partner; family environment"],
      ["E", "Educational problems", "Z55.x"],
      ["O", "Occupational problems", "Z56.x, including Z56.82 deployment status"],
      ["H", "Housing problems", "Z59.01, Z59.02, Z59.10, Z59.2, Z59.3, Z59.9"],
      ["E", "Economic problems", "Z59.41, Z58.6, Z59.5, Z59.6, Z59.71/Z59.72, Z59.9"],
      ["S", "Social environment", "Z60.2, Z60.3, Z60.4, Z60.5, Z60.9"],
      ["L", "Legal system", "Z65.0–Z65.3"],
      ["O", "Other psychosocial, personal and environmental circumstances", "Lifestyle, pregnancy, multiparity, social service discord, crime, terrorism, disaster"],
      ["A", "Access to health care", "Z75.3, Z75.4"],
      ["P", "Personal history", "Z91.49 psychological trauma, Z91.82 military deployment"],
      ["C", "Counseling and medical advice", "Z31.5, Z70.9, Z71.3, Z71.9"],
      ["A", "Additional conditions", "Wandering, uncomplicated bereavement, phase of life, religious or spiritual, antisocial behavior, nonadherence, overweight, malingering, R41.81, R41.83"]
    ],
    caveat: "DSM check: the list of 14 groups is on pp. 821–822; the 'Additional' group runs pp. 834–836. Codes shown are current after the APA coding updates (Z59.10 from October 2023, Z59.71/Z59.72 from October 2024; T14.91XA/XD from September 2022). Not every entry is a Z code: T, R and E codes appear too."
  },
  {
    id: "m22-03", short: "Self-harm: AIM", name: "AIM: sorting suicidal behavior, NSSI and a changed mind", original: true, dx: "suicidal-behavior", sec: "s22-suicidal",
    "for": "Three questions that decide which self-harm code (if any) applies",
    letters: [
      ["A", "Act begun?", "If someone talked the person out of it, or they changed their mind before starting, the suicidal behavior category does not apply"],
      ["I", "Intent to die?", "Any intent, stated or inferred from the circumstances, means suicidal behavior (T14.91XA/XD), with or without injury"],
      ["M", "Marks without intent?", "Self-inflicted damage likely to cause bleeding, bruising or pain with no suicidal intent is nonsuicidal self-injury (R45.88)"]
    ],
    caveat: "DSM check: p. 822. Past behavior at any time in life takes **Z91.51** (suicidal) or **Z91.52** (NSSI). The XA/XD form follows the **APA coding update, September 2022** (printed T14.91A/D, with a coding note that wrongly says '6th character'). (App guidance.) An uncodable aborted attempt still needs a full risk assessment and safety plan."
  },
  {
    id: "m22-04", short: "Maltreatment code anatomy", name: "Reading a maltreatment T code: 74/76 · 0-1-2-3 · 1/2 · A/D", original: true, dx: "child-physical-abuse", sec: "s22-how-to-code",
    "for": "Building an abuse or neglect event code from four choices",
    letters: [
      ["74/76", "Confirmed or suspected", "T74 = confirmed ('4 = for sure'); T76 = suspected ('6 = sixth sense')"],
      ["0-1-2-3", "Type of maltreatment (4th character)", "0 neglect, 1 physical, 2 sexual, 3 psychological: 'No Punches, Sex or Psych' in order"],
      ["1/2", "Adult or child (5th character)", "1 = adult (partner or nonpartner), 2 = child"],
      ["A/D", "Encounter (7th character)", "A = Active treatment (surgery, emergency visit, new clinician); D = Done with active care, now routine recovery care (cast change, device removal, medication adjustment, follow-up)"]
    ],
    caveat: "DSM check: pp. 822–828 (coding note p. 823). Examples: T74.12XA confirmed child physical abuse, initial; T76.31XD suspected adult psychological abuse, subsequent. The type and age digits are an app reading of the ICD-10-CM structure, checked against every code the chapter lists. Because of the **legal implications**, assess and code abuse with care (p. 822)."
  },
  {
    id: "m22-05", short: "Z69: victim before perpetrator", name: "Victim first: the Z69 encounter digits", original: true, dx: "adult-abuse-nonpartner", sec: "s22-how-to-code",
    "for": "Choosing the mental health encounter code for a victim or a perpetrator of maltreatment",
    letters: [
      ["01/02", "Child: by parent or not", "Z69.01- by a parent; Z69.02- by a nonparent; last digit 0 = victim, 1 = perpetrator (Z69.010, Z69.011, Z69.020, Z69.021)"],
      ["11/12", "Spouse or partner", "Z69.11 victim, Z69.12 perpetrator (physical violence, neglect, psychological abuse)"],
      ["81/82", "Nonpartner adult (and partner sexual victims)", "Z69.81 victim, Z69.82 perpetrator; Z69.81 is also the DSM's victim code for partner sexual violence"]
    ],
    caveat: "DSM check: pp. 823–828. In each pair the **victim's code comes first**. Trap: the victim of **partner sexual** violence takes **Z69.81**, not Z69.11, while the perpetrator still takes Z69.12 (p. 826). History codes are separate: Z62.810/.811/.812 for childhood, Z91.410/.411/.412 for partner maltreatment."
  },
  {
    id: "m22-06", short: "Code updates: HINT", name: "HINT: the chapter's codes changed since printing", original: true, dx: "housing-problem", sec: "s22-coding",
    "for": "The APA coding updates that change codes printed in this chapter",
    letters: [
      ["H", "Housing", "Inadequate housing Z59.1 → Z59.10 (APA coding update, September 2023; effective October 1, 2023)"],
      ["I", "Insurance", "Z59.7 → Z59.71 insufficient health insurance coverage or Z59.72 insufficient welfare support (APA coding update, September 2024; effective October 1, 2024)"],
      ["N", "Nonadherence", "Z91.19 → Z91.199 (APA coding update, September 2022; effective October 1, 2022)"],
      ["T", "T14.91", "Current suicidal behavior T14.91A/D → T14.91XA/XD (APA correction, September 2022)"]
    ],
    caveat: "DSM check: the printed codes are on pp. 822, 831, 832 and 835; the changes come from the APA's coding updates, not the printed text. As of October 2026 no later change to this chapter was found; confirm against the current APA update and ICD-10-CM tabular list before billing."
  },
  {
    id: "m22-07", short: "Malingering: LIES", name: "LIES: when to strongly consider malingering", original: true, dx: "malingering", sec: "s22-malingering",
    "for": "The manual's four indicators that should raise suspicion of malingering, in any combination",
    letters: [
      ["L", "Legal context", "Referred by an attorney, or self-referred while a lawsuit or criminal charges are pending"],
      ["I", "Inconsistency", "A marked gap between the claimed stress or disability and what is objectively found"],
      ["E", "Evasive cooperation", "Poor cooperation with the evaluation and with prescribed treatment"],
      ["S", "Sociopathy", "Antisocial personality disorder is present"]
    ],
    caveat: "DSM check: p. 835. These are **indicators, not a criteria set**; none proves malingering. The core is **intentional** false or grossly exaggerated symptoms for an **external incentive**; with no external incentive and a sick-role aim, think **factitious disorder** (p. 835). (App guidance.) Use the label privately for study only; document observed facts, not the word 'lies'."
  },
  {
    id: "m22-08", short: "Not a disorder: D-BRAIN", name: "D-BRAIN: chapter conditions and the disorders they resemble", original: true, dx: "uncomplicated-bereavement", sec: "s22-exam",
    "for": "Six exam pairs where a chapter condition must be told apart from a diagnosis",
    letters: [
      ["D", "Deployment status (Z56.82)", "Psychological reactions to deployment are an adjustment disorder or another disorder, not this code (p. 830)"],
      ["B", "Bereavement, uncomplicated (Z63.4)", "Normal grief seen by the person as normal; compare major depressive episode and prolonged grief disorder (p. 834)"],
      ["R", "R41.81 age-related cognitive decline", "Within normal limits for age, after excluding a mental or neurological cause; compare mild NCD (pp. 835–836)"],
      ["A", "Antisocial behavior (Z72.811 / Z72.810)", "Not due to a disorder: professional crime in adults, isolated acts in youth; compare ASPD and conduct disorder (p. 835)"],
      ["I", "Intellectual functioning, borderline (R41.83)", "Compare mild IDD by weighing intellectual and adaptive functioning (p. 836)"],
      ["N", "Nonadherence (Z91.199)", "Only if severe enough for its own attention and PFAMC is not met (p. 835)"]
    ],
    caveat: "DSM check: each line cites its page. In every pair, **diagnose the disorder when its criteria are met**; the chapter code covers problems that fall short of a disorder or need attention on their own (pp. 28, 821; app reading). Z91.199 per the APA coding update, September 2022 (printed Z91.19)."
  }
]);
