/* Chapter 19 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code). F65 codes as printed in DSM-5-TR (2022),
             unchanged in ICD-10-CM through FY2027 (checked October 27, 2026). Specifiers never change the code.
   counting: decide which findings count toward a criterion, then whether it is met.
   Vignettes are adults unless an age rule is the point; wording is clinical and forensic-aware.
   Ids are stable keys for progress. */
(function () {
  var DX = [
    "Voyeuristic disorder",
    "Exhibitionistic disorder",
    "Frotteuristic disorder",
    "Sexual masochism disorder",
    "Sexual sadism disorder",
    "Pedophilic disorder",
    "Fetishistic disorder",
    "Transvestic disorder",
    "Other specified paraphilic disorder",
    "Unspecified paraphilic disorder",
    "No paraphilic disorder (paraphilia only)",
    "No paraphilic disorder (behavior only during another disorder)"
  ];
  var SPEC_GEN = ["None", "In a controlled environment", "In full remission"];
  var SPEC_EXH = [
    "Sexually aroused by exposing genitals to prepubertal children",
    "In full remission",
    "Sexually aroused by exposing genitals to physically mature individuals",
    "None",
    "Sexually aroused by exposing genitals to prepubertal children and to physically mature individuals"
  ];
  var SPEC_MAS = ["None", "With asphyxiophilia", "In a controlled environment", "In full remission"];
  var SPEC_PED = [
    "Exclusive type, sexually attracted to males",
    "Exclusive type, sexually attracted to females",
    "Nonexclusive type, sexually attracted to females",
    "Nonexclusive type, sexually attracted to females, limited to incest",
    "Nonexclusive type, sexually attracted to females, in full remission"
  ];
  var SPEC_FET = ["Body part(s)", "Nonliving object(s)", "Other", "None"];
  var SPEC_TRV = ["None", "With fetishism", "With autogynephilia", "With fetishism, with autogynephilia"];
  var SPEC_NONE = ["None", "In full remission", "In a controlled environment", "With fetishism"];
  var NOCODE = "No paraphilic disorder code";

  SP.add("ch19", "dxline", [
    {
      id: "w19-01", tag: "Voyeuristic, nondisclosing",
      "case": "A 29-year-old call-center agent in Quezon City is referred by the court after being caught three times in 14 months photographing women through the gap of a dormitory bathroom window. Three different women were involved, none of whom knew or agreed. He calls each episode an accident, denies any sexual interest and says he feels no distress about anything except the case.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifier", options: SPEC_GEN, answer: 0 },
        { label: "Code", options: ["F65.3", "F65.2", "F65.81", "F65.89", NOCODE], answer: 0 }
      ],
      line: "**F65.3** Voyeuristic disorder",
      why: "Repeated secret watching of **unsuspecting** people, **multiple victims on separate occasions**, over more than 6 months supports Criterion A even though he denies urges; acting on them with **nonconsenting** people meets Criterion B without any distress; he is over **18** (Criterion C) (pp. 780–781). He lives in the community, so neither shared specifier applies."
    },
    {
      id: "w19-02", tag: "Exhibitionistic, adults",
      "case": "A 34-year-old engineer refers himself. For about a year he has had daily, intense urges to expose his genitals to adult women at a bus terminal in Cubao, and masturbates to these fantasies. He has never acted on them. He is ashamed, avoids the terminal and has been late for work repeatedly. He has no sexual interest in children.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: SPEC_EXH, answer: 2 },
        { label: "Code", options: ["F65.3", "F65.2", "F65.89", "F65.9", NOCODE], answer: 1 }
      ],
      line: "**F65.2** Exhibitionistic disorder, sexually aroused by exposing genitals to physically mature individuals",
      why: "Criterion A can be met by **urges and fantasies** alone for 6 months; Criterion B is met by **distress and impairment** even though he has never acted (p. 783). The target is adults, so the **physically mature individuals** subtype applies."
    },
    {
      id: "w19-03", tag: "Exhibitionistic, children",
      "case": "A 41-year-old man is evaluated after his third conviction in 2 years for exposing his genitals to unsuspecting schoolchildren of about 8 to 10 years near a public elementary school in Laguna. All the reported incidents involved prepubertal children; none involved adults. He denies any urge and calls the incidents accidental. He reports no distress.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: SPEC_EXH, answer: 0 },
        { label: "Code", options: ["F65.4", "F65.2", "F65.89", "F65.3", NOCODE], answer: 1 }
      ],
      line: "**F65.2** Exhibitionistic disorder, sexually aroused by exposing genitals to prepubertal children (assess for **F65.4** pedophilic disorder as well)",
      why: "Recurrent exposure to unsuspecting people on separate occasions meets Criteria A and B despite denial (p. 784). The target subtype is set by the age of those targeted: **prepubertal children**. Exposure that is **exclusively** to children does **not** preclude pedophilic disorder; he may have **both**, and each is coded when both are met (pp. 783, 795)."
    },
    {
      id: "w19-04", tag: "Frotteuristic, custody",
      "case": "A 27-year-old man is assessed in a provincial jail in Bulacan, where he has been detained for 8 months awaiting trial. Before detention he had, over 2 years, pressed against at least five women on crowded jeepneys and MRT trains without their consent, and he acknowledges strong urges to do so since his early twenties. In jail he has had no opportunity and reports no distress, only frustration at being caught.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Specifier", options: SPEC_GEN, answer: 1 },
        { label: "Code", options: ["F65.81", "F65.8", "F65.2", "F65.89", NOCODE], answer: 0 }
      ],
      line: "**F65.81** Frotteuristic disorder, in a controlled environment",
      why: "Six months of urges and behaviors (A) acted on with **nonconsenting** people (B) (pp. 785–786). He lives where the opportunity is **restricted**, so add **in a controlled environment**; quiet months in jail are **not** remission. F65.8 is an ICD-10-CM parent code the DSM does not use."
    },
    {
      id: "w19-05", tag: "Masochism, breath play",
      "case": "A 24-year-old university student presents in distress. For 3 years his arousal has depended on fantasies of being bound and humiliated, and for the past year he has used a belt around his neck to restrict his breathing while masturbating alone. He has fainted twice, is frightened by it and has stopped dating because he cannot become aroused any other way. No other person is involved.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Specifier", options: SPEC_MAS, answer: 1 },
        { label: "Code", options: ["F65.50", "F65.52", "F65.51", "F65.5", NOCODE], answer: 2 }
      ],
      line: "**F65.51** Sexual masochism disorder, with asphyxiophilia",
      why: "Six months of arousal from being bound and humiliated (A) with **distress and impairment** (B) (p. 788). Arousal practiced through **restriction of breathing** earns **with asphyxiophilia**, which also flags the risk of accidental death (p. 789). F65.50 and F65.5 are ICD-10-CM codes the DSM does not use."
    },
    {
      id: "w19-06", tag: "Sadism, forensic",
      "case": "A 41-year-old man is evaluated after conviction for sexual assaults on two adult women 3 years apart; neither consented. In both, the injuries went far beyond what was needed to restrain the victim, and investigators seized a large collection of pornography centered on frightened, suffering victims. He denies any sexual interest in suffering and reports no distress.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "Specifier", options: SPEC_GEN, answer: 0 },
        { label: "Code", options: ["F65.51", "F65.50", "F65.52", "F65.89", NOCODE], answer: 2 }
      ],
      line: "**F65.52** Sexual sadism disorder",
      why: "Denial does not block the diagnosis: **recurrent** acts against **nonconsenting** people meet A and B (pp. 790–791). Pain that is merely **instrumental** to an assault is not enough, but **violence beyond what the assault required** and a **sadistic pornography preference** are the manual’s markers that the suffering itself was arousing (p. 792)."
    },
    {
      id: "w19-07", tag: "Consensual BDSM",
      "case": "A 33-year-old woman and her husband, both adults, have for 6 years taken part in consensual dominance–submission role play, restraints and spanking, which they both enjoy and negotiate in advance. She mentions it during an assessment for insomnia. She is not distressed by the interest, functions well at work and at home, and no one has been harmed or pressured.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 10 },
        { label: "Specifier", options: SPEC_NONE, answer: 0 },
        { label: "Code", options: ["F65.51", "F65.52", "F65.50", "F65.9", NOCODE], answer: 4 }
      ],
      line: "No paraphilic disorder: **masochistic or sadistic sexual interest without Criterion B**",
      why: "Criterion A may be present, but there is **no distress or impairment** and **no nonconsenting** partner, so Criterion B is not met: she has the interest, not the disorder (p. 780). Most people in community **BDSM** networks would not meet criteria (p. 792). Assess the insomnia on its own terms."
    },
    {
      id: "w19-08", tag: "Pedophilic, incest",
      "case": "A 45-year-old married man, sexually attracted to adult women, is referred after his 10-year-old stepdaughter disclosed repeated sexual contact over 9 months. Investigation found no other child victims, and he has no sexual interest in children outside the family. He admits recurrent urges toward her over that period. He reports little distress but his marriage has ended.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 5 },
        { label: "Specifier", options: SPEC_PED, answer: 3 },
        { label: "Code", options: ["F65.4", "F65.89", "F65.2", "F65.9", NOCODE], answer: 0 }
      ],
      line: "**F65.4** Pedophilic disorder, nonexclusive type, sexually attracted to females, limited to incest",
      why: "Six months of urges and behaviors toward a **prepubescent** child (A); he **acted on** them (B); he is over 16 and far more than 5 years older (C) (pp. 792–793). He is also attracted to adults (**nonexclusive**), to **females**, and the attraction is confined to family (**limited to incest**). There is **no remission** option for this disorder."
    },
    {
      id: "w19-09", tag: "Pedophilic, never acted",
      "case": "A 31-year-old man asks a Manila clinic for confidential help. Since his late teens he has been sexually attracted only to boys of about 8 to 11, with daily fantasies. He has never had sexual contact with a child and has never viewed sexual images of children. He is tormented by guilt, has withdrawn from friends and has resigned a tutoring job because he does not trust himself. He has no attraction to adults.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 5 },
        { label: "Specifier", options: SPEC_PED, answer: 0 },
        { label: "Code", options: ["F65.89", "F65.9", "F65.4", "F65.3", NOCODE], answer: 2 }
      ],
      line: "**F65.4** Pedophilic disorder, exclusive type, sexually attracted to males",
      why: "Criterion B has two routes: **acted on** the urges, **or marked distress or interpersonal difficulty** (p. 792). He meets it by distress alone, with no offense. Attracted **only** to children = **exclusive type**. Without the distress, and with no acts, he would have pedophilia but not the disorder (p. 793)."
    },
    {
      id: "w19-10", tag: "Fetishistic, body part",
      "case": "A 37-year-old man in Cebu reports that for over 10 years he has been sexually aroused almost entirely by women’s feet. For the last 18 months he has been unable to become aroused with his consenting adult wife unless her feet are the focus, which she now refuses; they are separating and he is depressed about it. He has no interest in footwear and no thoughts about being a woman.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 6 },
        { label: "Specifier", options: SPEC_FET, answer: 0 },
        { label: "Code", options: ["F65.0", "F65.1", "F65.89", "F65.9", NOCODE], answer: 0 }
      ],
      line: "**F65.0** Fetishistic disorder, body part(s)",
      why: "A highly specific focus on a **nongenital body part** for over 6 months (A) with distress and relationship impairment (B) (p. 796). Partialism was folded back into fetishistic disorder in DSM-5 (p. 797). Record **body part(s)**; the code stays F65.0."
    },
    {
      id: "w19-11", tag: "Transvestic, fabrics",
      "case": "A 39-year-old married man has, since adolescence, been sexually aroused by wearing women’s satin slips, and the arousal centers on the feel of the fabric. Twice in 4 years he has thrown away his collection in shame and bought it again. His wife discovered it last month and he is distressed and sleeping poorly. He has never wanted to be a woman and is comfortable as a man.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 7 },
        { label: "Specifier", options: SPEC_TRV, answer: 1 },
        { label: "Code", options: ["F65.0", "F65.1", "F64.0", "F65.89", NOCODE], answer: 1 }
      ],
      line: "**F65.1** Transvestic disorder, with fetishism",
      why: "Arousal from **wearing** the garments (cross-dressing) for over 6 months (A) with distress shown by the **purging and acquisition** cycle (B) (pp. 798–799). Arousal by **fabrics, materials or garments** = **with fetishism**, which makes later gender dysphoria **less** likely (p. 799). Fetishistic disorder is excluded because the objects are cross-dressing clothing (Criterion C, p. 796)."
    },
    {
      id: "w19-12", tag: "Voyeuristic, remission",
      "case": "A 46-year-old man was diagnosed with voyeuristic disorder at 33 after repeatedly watching neighbors through windows without their knowledge. He completed treatment and has lived at home in the community for the past 6 years. Records and his wife confirm no further watching of anyone, and he reports no distress or impairment over that time. He attends for a review.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifier", options: SPEC_GEN, answer: 2 },
        { label: "Code", options: ["F65.3", "F65.89", "F65.9", "F65.2", NOCODE], answer: 0 }
      ],
      line: "**F65.3** Voyeuristic disorder, in full remission",
      why: "Full remission needs **at least 5 years** with no acting on urges with a nonconsenting person **and** no distress or impairment, **in an uncontrolled environment** (p. 781). Six years at home qualifies. Remission says nothing about whether the voyeuristic **interest** itself has gone, and the specifier does not change the code."
    },
    {
      id: "w19-13", tag: "Mania",
      "case": "A 30-year-old woman with bipolar I disorder is admitted in a manic episode after exposing herself to strangers in a mall in Pampanga on two days this week. Her husband and her records describe no such behavior or urges at any other time in 10 years, including during long well periods. Once treated she is mortified and has no sexual interest in exposing.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 11 },
        { label: "Specifier", options: SPEC_NONE, answer: 0 },
        { label: "Code", options: ["F65.2", "F65.89", "F65.9", "F65.3", NOCODE], answer: 4 }
      ],
      line: "No paraphilic disorder: **behavior only during a manic episode** (diagnose and code the bipolar I disorder)",
      why: "Disinhibition in **mania**, major neurocognitive disorder, intellectual developmental disorder, personality change due to a medical condition, intoxication or schizophrenia can produce exposing; a paraphilic disorder is diagnosed **only if the behavior also occurs outside** those states (p. 785). There is also no 6-month pattern and no specific sexual interest."
    },
    {
      id: "w19-14", tag: "Other specified",
      "case": "A 35-year-old farmworker from Nueva Ecija is referred by a rural health physician. For about 3 years his only strong sexual arousal has involved animals, and he admits sexual contact with farm animals. He is deeply ashamed, avoids family gatherings and fears exposure in his barangay. He has no other paraphilic interests.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 8 },
        { label: "Specifier (reason)", options: ["None", "Zoophilia", "In full remission", "Body part(s)"], answer: 1 },
        { label: "Code", options: ["F65.9", "F65.89", "F65.8", "F65.0", NOCODE], answer: 1 }
      ],
      line: "**F65.89** Other specified paraphilic disorder, zoophilia",
      why: "None of the eight listed disorders covers animals. Recurrent, intense arousal for **at least 6 months** with marked distress and impairment fits the other specified category, and the clinician **records the reason**: the manual’s own recording example is **zoophilia** (p. 801). Unspecified (F65.9) is for when no reason is given or information is insufficient."
    }
  ]);

  SP.add("ch19", "counting", [
    {
      id: "n19-01", tag: "Pedophilic Criterion B",
      "case": "Adult men (all over 25) who each meet Criterion A for pedophilic disorder for more than 6 months:",
      ask: "Mark the findings that satisfy Criterion B. Are at least three present?",
      items: [
        ["Had sexual contact with a 9-year-old neighbor", true, "Acted on the urges in person."],
        ["Exposed himself to children at a playground on several occasions", true, "Noncontact behavior with children counts as acting (p. 793)."],
        ["Is consumed by guilt and has stopped all social contact because of the attraction", true, "Marked distress or interpersonal difficulty."],
        ["Has downloaded sexual images of prepubescent children but has never interacted with a child", false, "Informs Criterion A, but **by itself** does not meet Criterion B (p. 793)."],
        ["Feels no guilt, functions well and has never acted on the interest", false, "Pedophilic interest, not the disorder (p. 793)."]
      ],
      need: 3,
      met: true,
      why: "Criterion B is **acted on** the urges (contact or noncontact, in person) **or marked distress or interpersonal difficulty** (p. 792). Child sexual abuse images alone, without in-person sexual interaction with a child, are **insufficient for B** (p. 793)."
    },
    {
      id: "n19-02", tag: "Criterion B: which arm",
      "case": "Adults who each meet Criterion A for the disorder named, for more than 6 months, and who report no distress or impairment:",
      ask: "Mark the findings that satisfy Criterion B for the disorder named. Are at least three present?",
      items: [
        ["Exhibitionistic: exposed himself to two unsuspecting strangers", true, "Acted on with a nonconsenting person (p. 783)."],
        ["Frotteuristic: rubbed against nonconsenting women on crowded trains", true, "Acted on with a nonconsenting person (p. 786)."],
        ["Sexual sadism: hurt a partner who had refused", true, "Acted on with a nonconsenting person (p. 790)."],
        ["Sexual masochism: is spanked by a willing partner", false, "Masochism has **no** nonconsenting arm; B needs distress or impairment (p. 788)."],
        ["Fetishistic: uses leather with a willing partner", false, "Distress or impairment only (p. 796)."]
      ],
      need: 3,
      met: true,
      why: "For the **courtship disorders and sadism**, acting on urges with a **nonconsenting** person meets B even with no distress. **Masochism, fetishistic and transvestic** disorders need **distress or impairment** (pp. 780–798)."
    },
    {
      id: "n19-03", tag: "Age rules",
      "case": "People who otherwise meet Criteria A and B for the disorder named:",
      ask: "Mark the people who are eligible by age. Are at least three eligible?",
      items: [
        ["An 18-year-old, for voyeuristic disorder", true, "Meets the age-18 floor (p. 780)."],
        ["A 17-year-old, for voyeuristic disorder", false, "Under **18**: Criterion C not met (pp. 780–781)."],
        ["A 16-year-old, for exhibitionistic disorder", true, "No minimum age, though adolescent curiosity must be weighed (p. 784)."],
        ["A 15-year-old with interest in 8-year-olds, for pedophilic disorder", false, "Under **16** (p. 793)."],
        ["A 17-year-old in an ongoing relationship with a 13-year-old, for pedophilic disorder", false, "Excluded by the **late-adolescent** note (p. 793)."],
        ["A 22-year-old with interest in 9-year-olds, for pedophilic disorder", true, "At least 16 and at least 5 years older (p. 793)."]
      ],
      need: 3,
      met: true,
      why: "Only **voyeuristic** (**18**) and **pedophilic** (**16 and 5 years older**, with the late-adolescent exclusion) disorders have an age criterion; exhibitionistic and frotteuristic have **none** (pp. 780, 784, 787, 793)."
    },
    {
      id: "n19-04", tag: "Full remission",
      "case": "A 40-year-old man was diagnosed with exhibitionistic disorder. Since his last offense he has spent 5 years in prison and then 3 years living at home. In all 8 years there has been no acting on urges and no distress or impairment.",
      ask: "Mark the years that count toward the 5 years needed for “in full remission.” Do at least five count?",
      items: [
        ["Years 1–5: in prison, no acts, no distress", false, "A **controlled** environment: these years do not count (p. 783)."],
        ["Year 6: at home, no acts, no distress", true, "Uncontrolled environment."],
        ["Year 7: at home, no acts, no distress", true, "Uncontrolled environment."],
        ["Year 8: at home, no acts, no distress", true, "Uncontrolled environment."]
      ],
      need: 5,
      met: false,
      why: "Full remission needs **5 years in an uncontrolled environment** with no acting on urges and no distress or impairment (p. 783). He has **3**. Time in prison supports **in a controlled environment**, not remission."
    },
    {
      id: "n19-05", tag: "Offender features",
      "case": "A 38-year-old man has been convicted of sexual offenses against children. The evaluator is deciding whether he also has pedophilic disorder.",
      ask: "Mark the findings the manual lists as pointing to pedophilic disorder in a person who has offended. Are at least three present?",
      items: [
        ["He admits a sexual interest in children", true, "Self-reported interest (p. 793)."],
        ["Sexual images of children were found on his devices", true, "Use of child pornography (p. 793)."],
        ["There were several child victims", true, "Multiple victims (p. 793)."],
        ["The victims were boys", true, "Boy victims (p. 793)."],
        ["The victims were unrelated to him", true, "Unrelated victims (p. 793)."],
        ["The single offense happened while he was heavily intoxicated", false, "Points to disinhibition, not a pedophilic pattern (p. 796)."],
        ["He has a broad history of theft and assault against adults", false, "Antisocial pattern; access-driven offending is possible without the disorder (p. 795)."]
      ],
      need: 3,
      met: true,
      why: "The manual’s five pointers: **self-reported interest, child pornography use, multiple child victims, boy victims, unrelated victims** (p. 793). Antisocial traits raise the risk of acting in men who already have pedophilia (p. 794) but do not establish it."
    },
    {
      id: "n19-06", tag: "Sadism vs instrumental pain",
      "case": "A 35-year-old man is evaluated after a conviction for sexual assault on a nonconsenting adult.",
      ask: "Mark the findings that suggest he was aroused by the victim’s suffering. Are at least two present?",
      items: [
        ["He admits that the victim’s pain excited him", true, "Admission of arousal by pain (p. 792)."],
        ["He collects pornography with sadistic themes", true, "Sadistic pornography preference (p. 792)."],
        ["Injuries far exceeded what was needed to overpower her", true, "Violence beyond what the assault required (p. 792)."],
        ["He used force only to restrain her", false, "**Instrumental** pain: not by itself sadism (p. 792)."],
        ["He has been cruel to people and animals for years with no sexual arousal", false, "Conduct disorder or ASPD pattern without an arousal pattern (p. 792)."]
      ],
      need: 2,
      met: true,
      why: "Pain inflicted **instrumentally** during an assault does not show sexual sadism. Look for **admission**, a **sadistic pornography** preference, or **excess violence** (p. 792). If both sets of criteria are met, ASPD and sexual sadism disorder can both be given."
    },
    {
      id: "n19-07", tag: "Fetish objects",
      "case": "Adult men, each aroused for more than 6 months by the focus named, with distress:",
      ask: "Mark the foci that can count for fetishistic disorder. Are at least three present?",
      items: [
        ["Women’s high-heeled shoes, held while masturbating", true, "Nonliving object."],
        ["A partner’s hair", true, "Nongenital body part (partialism)."],
        ["Rubber sheeting", true, "Nonliving object (p. 797)."],
        ["A vibrator", false, "A device **designed for genital stimulation**: excluded by Criterion C (p. 796)."],
        ["Women’s dresses that he wears only when cross-dressing", false, "Cross-dressing clothing: transvestic disorder (p. 798)."]
      ],
      need: 3,
      met: true,
      why: "Criterion A covers **nonliving objects** and **nongenital body parts**. Criterion C excludes objects limited to **cross-dressing clothing** or devices **made for genital stimulation** (p. 796)."
    },
    {
      id: "n19-08", tag: "Transvestic vs fetishistic",
      "case": "A 32-year-old man is distressed by masturbating with women’s underwear for 2 years. He has never wished to live as a woman.",
      ask: "Mark the findings that point to transvestic rather than fetishistic disorder. Is at least one present?",
      items: [
        ["He imagines himself as a woman during the activity", true, "Thoughts of being a woman (p. 800)."],
        ["Arousal depends on wearing the garments", true, "Cross-dressing is the focus (p. 798)."],
        ["He imagines being dressed as a woman", true, "Points to transvestic disorder (p. 800)."],
        ["He handles and smells the garments without putting them on", false, "Object focus: fetishistic (p. 797)."],
        ["He is also aroused by silky fabrics used for bedsheets", false, "Another fetish: points toward fetishistic disorder (p. 800)."]
      ],
      need: 1,
      met: true,
      why: "Ask about his **thoughts** during the activity: being, being like or being dressed as a woman point to **transvestic** disorder; **other fetishes** point to fetishistic disorder (p. 800). Absence of a wish to be a woman argues against gender dysphoria."
    },
    {
      id: "n19-09", tag: "Disinhibition",
      "case": "Adults whose peeping, exposing or touching has occurred only during the state named, never otherwise:",
      ask: "Mark the states that, when they are the only context, mean no paraphilic diagnosis. Are at least five present?",
      items: [
        ["A manic episode", true, "Named (p. 782)."],
        ["Major neurocognitive disorder", true, "Named (p. 782)."],
        ["Intellectual developmental disorder", true, "Named (p. 782)."],
        ["Substance intoxication", true, "Named (p. 782)."],
        ["Schizophrenia", true, "Named (p. 782)."],
        ["Personality change due to another medical condition", true, "Named (p. 782)."],
        ["The behavior also occurs when he is sober and well", false, "Then a paraphilic disorder can be diagnosed."]
      ],
      need: 5,
      met: true,
      why: "These states impair judgment and impulse control; diagnose a paraphilic disorder **only if the behavior also occurs outside them** (pp. 782, 785, 787)."
    },
    {
      id: "n19-10", tag: "Other specified examples",
      "case": "Adults with recurrent, intense arousal for at least 6 months and marked distress:",
      ask: "Mark the paraphilias the manual names as examples for other specified paraphilic disorder. Are at least four present?",
      items: [
        ["Telephone scatologia (obscene calls)", true, "Named (p. 801)."],
        ["Necrophilia (corpses)", true, "Named (p. 801)."],
        ["Zoophilia (animals)", true, "Named (p. 801)."],
        ["Klismaphilia (enemas)", true, "Named (p. 801)."],
        ["Coprophilia or urophilia (feces or urine)", true, "Both named (p. 801)."],
        ["Arousal from women’s shoes", false, "Has its own diagnosis: fetishistic disorder (p. 796)."],
        ["Arousal from cross-dressing", false, "Has its own diagnosis: transvestic disorder (p. 798)."]
      ],
      need: 4,
      met: true,
      why: "The manual’s examples are **telephone scatologia, necrophilia, zoophilia, coprophilia, klismaphilia, urophilia**; the list is not exhaustive, and the reason is recorded, e.g., “other specified paraphilic disorder, zoophilia” (F65.89) (p. 801)."
    }
  ]);
})();
