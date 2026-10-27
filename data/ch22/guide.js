/* Chapter 22 study guide. Source: DSM-5-TR, Other Conditions That May Be a Focus of Clinical Attention (pp. 821–836).
   Written in the app’s own words from the manual, with page references. Nothing in this chapter is a mental
   disorder and nothing has a criteria set (p. 821); the guide gives the manual’s definitions, examples and codes.
   Codes as printed in the 2022 manual, with the APA’s post-publication corrections and the ICD-10-CM changes
   through FY2027 (October 1, 2026) in labeled update boxes: T14.91XA/XD (September 2022 correction), Z91.199
   (October 2022), Z59.10 (October 2023), Z59.71/Z59.72 (October 2024). ICD-10-CM titles, ICD-11, law and clinical
   advice are outside the DSM and labeled as such. Abuse, suicidal behavior and self-injury are described at the
   level of the manual’s definitions. */
SP.add("ch22", "guide", {
  intro: "The last chapter of Section II lists **conditions and psychosocial or environmental problems** that can be the **focus of clinical attention** or that affect the **diagnosis, course, prognosis or treatment** of a mental disorder, each with an ICD-10-CM code, usually a **Z code** (p. 821). None of them is a mental disorder (p. 821). The text revision added the two entries the exam now likes most: **suicidal behavior** (T14.91XA/XD current, Z91.51 history) and **nonsuicidal self-injury** (R45.88 current, Z91.52 history) (p. 822). The rest is a structured list: **abuse and neglect** with their confirmed/suspected T codes and victim/perpetrator/history Z codes (pp. 822–828), **relational** and **family** problems (pp. 828–830), problems of **education, work, housing, money, the social environment, the law and other circumstances** (pp. 830–834), and a final group of **additional conditions** from **wandering** and **uncomplicated bereavement** to **malingering**, **age-related cognitive decline** and **borderline intellectual functioning** (pp. 834–836). Learn the **four reasons** a condition may be coded, the **coding mechanics** (confirmed vs suspected, initial vs subsequent encounter, victim vs perpetrator vs history), and the handful of **definitions** the manual actually spells out. The [[helper:psychosocial|psychosocial helper]] sorts a problem into the right group and asks whether a disorder should be coded instead or as well.",
  objectives: [
    "State the **four reasons** a condition in this chapter may be coded and the rule that these conditions are **not mental disorders** (p. 821).",
    "Define **suicidal behavior** (self-endangering behavior with **at least some intent to die**; not applicable if the person is dissuaded or changes their mind **before initiating**) and **nonsuicidal self-injury**, with their current and history codes (p. 822).",
    "Use the abuse and neglect coding system: **confirmed (T74)** versus **suspected (T76)**, **A** (initial, active treatment) versus **D** (subsequent, routine care in recovery), the **Z69** encounter codes for **victim** and **perpetrator**, and the **Z62/Z91** history codes (pp. 822–828).",
    "Give the manual’s definitions of child **physical abuse** (and what reasonable discipline is), **sexual abuse**, **neglect** and **psychological abuse**, and of partner **physical** and **sexual violence**, **neglect** and **psychological abuse** (pp. 823–828).",
    "Recognize the **relational**, **family-environment**, **educational**, **occupational**, **housing**, **economic**, **social**, **legal** and **other** problem codes and the few explicit exclusions (deployment reactions, reactions to a change of residence, lifestyle problems that are symptoms) (pp. 828–834).",
    "Separate the look-alikes: **uncomplicated bereavement** from a major depressive episode and prolonged grief disorder, **antisocial behavior** from conduct disorder and antisocial personality disorder, **nonadherence** from psychological factors affecting other medical conditions, **malingering** from factitious and functional neurological symptom disorders, **age-related cognitive decline** from mild neurocognitive disorder and **borderline intellectual functioning** from mild intellectual developmental disorder (pp. 834–836).",
    "Know the **code corrections and changes** since 2022 (T14.91XA/XD, Z91.199, Z59.10, Z59.71/Z59.72) and which ICD-10-CM titles differ from the DSM names (labeled app material)."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s22-map",
          title: "What the chapter is for, and the four reasons to code",
          pages: "821–822",
          blocks: [
            { type: "p", text: "The chapter collects **conditions and psychosocial or environmental problems** that matter clinically without being mental disorders. A condition here may be coded when **any** of four things is true: it is a **reason for the current visit**; it **explains the need** for a test, procedure or treatment; it **plays a role in starting or worsening** a mental disorder; or it is a **problem to be considered in the overall management plan** (p. 821). The listing exists to draw attention to these issues and to give clinicians a systematic way to **document** them (p. 821)." },
            { type: "steps", title: "The four reasons to code a condition from this chapter (p. 821)", items: [
              ["Reason for the visit", "The problem itself brought the person in: a couple seeking help for relationship distress, a bereaved person asking for help with insomnia."],
              ["Explains a test, procedure or treatment", "A homelessness code explains why discharge planning or a social work referral is needed."],
              ["Initiates or exacerbates a mental disorder", "Partner violence or job loss preceding a depressive episode."],
              ["Belongs in the management plan", "Nonadherence, food insecurity or a legal case that shapes how treatment is delivered."]
            ] },
            { type: "table", caption: "The 14 groups in order (pp. 821–822)", head: ["Group", "Examples the manual gives", "Guide section"], rows: [
              ["1 Suicidal behavior and nonsuicidal self-injury", "Self-endangering behavior with some intent to die; self-inflicted damage without suicidal intent", "[[page:c/ch22/guide/s22-suicidal|Suicidal behavior]], [[page:c/ch22/guide/s22-nssi|NSSI]]"],
              ["2 Abuse and neglect", "Child and adult physical, sexual and psychological abuse and neglect", "[[page:c/ch22/guide/s22-child-abuse|Child abuse]] onward"],
              ["3 Relational problems", "Parent-child, sibling, partner distress, separation or divorce", "[[page:c/ch22/guide/s22-relational|Relational]]"],
              ["4 Educational", "Illiteracy, schooling unavailable, failed examinations, underachievement", "[[page:c/ch22/guide/s22-education-work|Education and work]]"],
              ["5 Occupational", "Unemployment, change of job, threat of job loss, stressful schedule, discord", "[[page:c/ch22/guide/s22-education-work|Education and work]]"],
              ["6 Housing", "Homelessness, inadequate housing, discord with neighbor, lodger or landlord", "[[page:c/ch22/guide/s22-housing-economic|Housing and economic]]"],
              ["7 Economic", "Lack of adequate food or safe water, extreme poverty, low income", "[[page:c/ch22/guide/s22-housing-economic|Housing and economic]]"],
              ["8 Social environment", "Living alone, acculturation difficulty, social exclusion", "[[page:c/ch22/guide/s22-social-legal|Social and legal]]"],
              ["9 Legal system", "Conviction, imprisonment, release from prison, other legal circumstances", "[[page:c/ch22/guide/s22-social-legal|Social and legal]]"],
              ["10 Other psychosocial, personal and environmental", "Unwanted pregnancy, victim of crime, victim of terrorism", "[[page:c/ch22/guide/s22-other-circumstances|Other circumstances]]"],
              ["11 Access to care", "Unavailable or inaccessible health care facilities", "[[page:c/ch22/guide/s22-other-circumstances|Other circumstances]]"],
              ["12 Personal history", "Psychological trauma, military deployment", "[[page:c/ch22/guide/s22-other-circumstances|Other circumstances]]"],
              ["13 Counseling and medical advice", "Sex counseling, other counseling", "[[page:c/ch22/guide/s22-other-circumstances|Other circumstances]]"],
              ["14 Additional conditions", "Wandering, uncomplicated bereavement, phase of life problem", "[[page:c/ch22/guide/s22-additional|Additional conditions]] onward"]
            ] },
            { type: "callout", kind: "key", title: "Three sentences that frame every question", text: "1) These are **not mental disorders** (p. 821): a Z code never replaces a diagnosis that is met, and it can sit **beside** one. 2) A condition is coded for one of **four reasons** (p. 821), not simply because it exists. 3) Most entries have **no definition beyond their title**; the manual defines in detail only suicidal behavior and NSSI, the abuse and neglect categories, the relational problems, a few housing, economic and social entries, and the additional conditions at the end. Those definitions are what gets tested." },
            { type: "update", kind: "tr", title: "What the text revision changed (app comparison)", text: "The app’s own comparison with DSM-5 (2013): the text revision **added** the group “Suicidal behavior and nonsuicidal self-injury” with its codes (p. 822), while Section III keeps the proposed **suicidal behavior disorder** and **nonsuicidal self-injury disorder** as conditions for further study; it split homelessness into **sheltered** (Z59.01) and **unsheltered** (Z59.02) and added **food insecurity** (Z59.41) and **lack of safe drinking water** (Z58.6) with the FY2022 ICD-10-CM codes; it rewrote the relational-problem and family-environment entries; and it dropped the ICD-9-CM (V) codes. Confirm against pp. 821–836." }
          ]
        },
        {
          id: "s22-how-to-code",
          title: "How the codes work: confirmed or suspected, initial or subsequent, victim or perpetrator",
          pages: "822–823",
          blocks: [
            { type: "p", text: "Two coding notes govern the T codes in this chapter. For **suicidal behavior**, and for every **abuse and neglect** category, the letter at the end of the T code records the **phase of care**, not the severity: **A** while the person is receiving **active treatment** (an emergency department visit, surgery, evaluation and treatment by a **new clinician**), **D** for encounters **after** active treatment, during **routine care in the healing or recovery phase** (a cast change or removal, removal of a fixation device, **medication adjustment**, aftercare and follow-up) (pp. 822–823)." },
            { type: "defs", title: "The layers of an abuse or neglect code set (pp. 822–823)", items: [
              ["The event: confirmed", "**T74.-** with a 7th character **A** or **D**. The second digit after the point says who: **1** adult, **2** child; the first says what: **0** neglect, **1** physical, **2** sexual, **3** psychological (app reading of the code tables; e.g., T74.12XA = confirmed child physical abuse, initial encounter)."],
              ["The event: suspected", "**T76.-** with the same structure (T76.12XA = suspected child physical abuse, initial encounter)."],
              ["The encounter is for mental health services", "**Z69** codes, separate for the **victim** and the **perpetrator**, and for children separate again for **parental** and **nonparental** abuse (Z69.010 victim of abuse by a parent; Z69.020 victim of nonparental abuse; Z69.011 and Z69.021 the perpetrators; Z69.11 and Z69.12 partner victim and perpetrator; Z69.81 and Z69.82 nonpartner adult victim and perpetrator)."],
              ["Past history", "**Z62.81-** for abuse or neglect **in childhood** (Z62.810 physical or sexual, Z62.811 psychological, Z62.812 neglect) and **Z91.41-** for partner violence or abuse (Z91.410 physical or sexual, Z91.411 psychological, Z91.412 neglect)."]
            ] },
            { type: "callout", kind: "caution", title: "Legal implications", text: "The manual says that because abuse and neglect carry **legal implications**, **care** is needed in assessing them and in assigning the codes (p. 822). A **suspected** code exists for exactly this reason: use T76 when the event is not confirmed. A **past history** of abuse or neglect can shape diagnosis and treatment response and may be recorded **alongside** the diagnosis (pp. 822–823)." },
            { type: "callout", kind: "exam", title: "The 6th-character slip (app note)", text: "The suicidal-behavior coding note on p. 822 says “6th character” and prints **T14.91A / T14.91D**; the APA’s **September 2022 correction** changed these to **T14.91XA / T14.91XD**, so the A or D is the **7th character** with an **X** placeholder, exactly as in the abuse codes (p. 823 says 7th character). Write the corrected codes (APA DSM-5-TR coding update, September 2022; labeled)." },
            { type: "table", caption: "Choosing the letter (pp. 822–823)", head: ["Situation", "Character", "Why"], rows: [
              ["Emergency department after a suicide attempt or an assault", "**A**", "Active treatment"],
              ["First evaluation by a new psychiatrist for the same event", "**A**", "Evaluation and treatment by a new clinician counts as active treatment"],
              ["Follow-up visit to adjust medication after the acute care", "**D**", "Routine care in the recovery phase"],
              ["Cast removal weeks after an injury from abuse", "**D**", "Aftercare"]
            ] }
          ]
        }
      ]
    },
    {
      title: "Suicidal behavior and nonsuicidal self-injury",
      sections: [
        {
          id: "s22-suicidal",
          title: "Suicidal behavior",
          pages: "822",
          blocks: [
            { type: "criteria", title: "The manual’s definition (not a criteria set)", code: "T14.91XA / T14.91XD; Z91.51", pages: "822", items: [
              ["What", "Behavior that **could injure the person**, carried out with **at least some intent to die** as a result."],
              ["Intent", "May be **explicit**, or **inferred** from the behavior or the circumstances."],
              ["Injury", "An attempt **may or may not** cause actual self-injury."],
              ["Not applicable", "If the person is **dissuaded by someone else**, or **changes their mind before initiating** the behavior."]
            ] },
            { type: "table", caption: "Codes (p. 822, with the September 2022 correction)", head: ["Code", "Use", "Note"], rows: [
              ["**T14.91XA**", "Current suicidal behavior, **initial** encounter", "Part of the initial encounter with the presentation (active treatment)"],
              ["**T14.91XD**", "Current suicidal behavior, **subsequent** encounter", "Later encounters with the same presentation (routine care in recovery)"],
              ["**Z91.51**", "**History** of suicidal behavior", "Suicidal behavior at any time in the person’s life"]
            ] },
            { type: "callout", kind: "key", title: "Where the line is", text: "The category turns on **intent to die**, however slight, and on the behavior having been **initiated**. Preparing and then stopping oneself, or being talked out of it, is **not** suicidal behavior under this entry (p. 822), though it is clinically important and belongs in the risk assessment (app guidance). An attempt that caused **no injury** still counts (p. 822)." },
            { type: "case", title: "Clinical vignette", text: "A 29-year-old man is seen in the emergency department after taking a handful of his prescribed tablets, telling the triage nurse he wanted to die. He has no physical sequelae. He also reports an overdose 6 years ago.", point: "Current suicidal behavior, initial encounter, **T14.91XA** (intent explicit; injury not required), with **Z91.51** for the earlier attempt (p. 822). His mental disorder, if any, is diagnosed separately; the behavior code does not replace it (app guidance)." },
            { type: "callout", kind: "pearl", title: "Not a disorder, by design (app note)", text: "DSM-5-TR puts suicidal behavior here as a **condition that may be a focus of clinical attention**, while **suicidal behavior disorder** remains a Section III condition for further study. The ICD-10-CM title of T14.91 is “**suicide attempt**” and Z91.51 is “personal history of suicidal behavior” (ICD-10-CM titles; both unchanged through October 2026). Suicidal **ideation** has its own ICD-10-CM code, R45.851, which the chapter does not list (app note)." }
          ]
        },
        {
          id: "s22-nssi",
          title: "Nonsuicidal self-injury",
          pages: "822",
          blocks: [
            { type: "criteria", title: "The manual’s definition (not a criteria set)", code: "R45.88; Z91.52", pages: "822", items: [
              ["What", "**Intentional, self-inflicted damage** to the body of a kind **likely to cause bleeding, bruising or pain**."],
              ["Examples", "Cutting, burning, stabbing, hitting, excessive rubbing."],
              ["Without", "**Suicidal intent**: that is the whole difference from the entry above."]
            ] },
            { type: "table", caption: "Codes (p. 822)", head: ["Code", "Use"], rows: [
              ["**R45.88**", "Current nonsuicidal self-injury: the behavior is part of the present picture"],
              ["**Z91.52**", "History of nonsuicidal self-injury: at any time in the person’s life"]
            ] },
            { type: "compare", title: "Suicidal behavior versus nonsuicidal self-injury (p. 822)", items: [
              { title: "Suicidal behavior", color: "mech", points: ["**Some intent to die**, explicit or inferred.", "Injury not required.", "T14.91XA / T14.91XD; history Z91.51.", "Not applicable if stopped before initiating."] },
              { title: "Nonsuicidal self-injury", color: "guide", points: ["**No suicidal intent**.", "Damage likely to bleed, bruise or hurt.", "R45.88; history Z91.52.", "Section III keeps NSSI **disorder** as a condition for further study (app note)."] }
            ] },
            { type: "callout", kind: "caution", title: "Ask about intent every time (app guidance)", text: "The same act can belong to either entry; only the person’s **intent** decides, and intent can be **inferred** from circumstances when it is not stated (p. 822). Both entries can be recorded in the same person at different times, and both can sit next to borderline personality disorder, a depressive disorder or any other diagnosis. The ICD-10-CM title of R45.88 is “nonsuicidal self-harm” and of Z91.52 “personal history of nonsuicidal self-harm” (ICD-10-CM titles; both introduced October 1, 2021, unchanged since)." },
            { type: "case", title: "Clinical vignette", text: "A 17-year-old girl tells her new psychiatrist that for 2 years she has scratched her forearms with a sharp object when overwhelmed, enough to bleed, to “feel something”; she is clear that she has never wanted to die and has never tried to.", point: "Current nonsuicidal self-injury, **R45.88** (self-inflicted damage likely to cause bleeding, no suicidal intent; p. 822), recorded alongside whatever disorder is diagnosed. If she had stopped a year ago, the history code **Z91.52** would apply. Intent must still be re-asked at each visit (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Abuse and neglect",
      sections: [
        {
          id: "s22-child-abuse",
          title: "Child physical abuse and child sexual abuse",
          pages: "823–824",
          blocks: [
            { type: "p", text: "The abuse and neglect block opens with four child categories, each built the same way: a definition, **confirmed** (T74) and **suspected** (T76) event codes with **A** or **D**, then the Z codes for a **mental health encounter** with the victim or the perpetrator and for **past history** (pp. 822–823)." },
            { type: "criteria", title: "Child physical abuse (p. 823)", code: "T74.12XA/XD confirmed; T76.12XA/XD suspected", pages: "823", items: [
              ["What", "**Nonaccidental physical injury** to a child, anywhere from minor bruises to severe fractures or death."],
              ["By whom", "A **parent, caregiver or other person responsible** for the child, by any method (hitting with a hand or object, kicking, shaking, burning and so on)."],
              ["Intent", "Counts as abuse **whether or not** the caregiver meant to hurt the child."],
              ["Not abuse", "**Reasonable physical discipline** (spanking, paddling) that causes **no bodily injury**."]
            ] },
            { type: "criteria", title: "Child sexual abuse (pp. 823–824)", code: "T74.22XA/XD confirmed; T76.22XA/XD suspected", pages: "823–824", items: [
              ["What", "**Any sexual act** involving a child that is meant to give **sexual gratification** to a parent, caregiver or other person responsible for the child."],
              ["Includes", "Fondling of the genitals, penetration, incest, rape, sodomy, indecent exposure."],
              ["Also includes", "**Noncontact exploitation**: forcing, tricking, enticing, threatening or pressuring the child into acts for **others’** sexual gratification, with no direct contact between child and abuser."]
            ] },
            { type: "table", caption: "The other codes for both categories (pp. 823–824)", head: ["Situation", "Physical abuse", "Sexual abuse"], rows: [
              ["Mental health services for the **victim**, abuse **by a parent**", "Z69.010", "Z69.010"],
              ["Mental health services for the **victim**, **nonparental** abuse", "Z69.020", "Z69.020"],
              ["**Past history** in childhood", "Z62.810", "Z62.810"],
              ["Mental health services for the **perpetrator**, parental", "Z69.011", "Z69.011"],
              ["Mental health services for the **perpetrator**, nonparental", "Z69.021", "Z69.021"]
            ] },
            { type: "callout", kind: "exam", title: "Why the Z codes repeat", text: "The victim, perpetrator and history Z codes are the **same** for child physical and child sexual abuse (and, for Z69, for neglect and psychological abuse too); only the **T codes** tell the types apart (pp. 823–825). The ICD-10-CM title of Z62.810 is “personal history of physical **and** sexual abuse in childhood”, one code for both (ICD-10-CM title; app note)." },
            { type: "case", title: "Clinical vignette", text: "A 7-year-old boy is admitted with a spiral fracture of the humerus; the history given does not fit the injury, and the child protection team is investigating. He is seen by the consultation psychiatry service for the first time.", point: "The event is not yet confirmed: **T76.12XA**, suspected child physical abuse, initial encounter (evaluation by a new clinician is active treatment) (p. 823). If the psychiatric visit is specifically to provide mental health services to the victim and the suspected abuser is a parent, **Z69.010** is added (p. 823). Reporting duties follow local law (app guidance; see the coding section)." }
          ]
        },
        {
          id: "s22-child-neglect-psych",
          title: "Child neglect and child psychological abuse",
          pages: "824–825",
          blocks: [
            { type: "criteria", title: "Child neglect (p. 824)", code: "T74.02XA/XD confirmed; T76.02XA/XD suspected", pages: "824", items: [
              ["What", "A confirmed or suspected **egregious act or omission** by a parent or caregiver that **deprives** the child of **basic, age-appropriate needs**."],
              ["Harm", "Results in, or has a **reasonable potential** to result in, **physical or psychological harm**."],
              ["Forms", "**Abandonment**; lack of appropriate **supervision**; failure to meet **emotional or psychological** needs; failure to provide **education, medical care, nourishment, shelter or clothing**."]
            ] },
            { type: "criteria", title: "Child psychological abuse (p. 825)", code: "T74.32XA/XD confirmed; T76.32XA/XD suspected", pages: "825", items: [
              ["What", "**Nonaccidental verbal or symbolic acts** by a parent or caregiver that cause, or could reasonably cause, **significant psychological harm**."],
              ["Excluded", "**Physical and sexual** abusive acts belong to their own categories."],
              ["Examples", "Berating, disparaging or humiliating; **threatening**; harming or abandoning (or threatening to) **people or things the child cares about**; **confining** the child (tying limbs, binding to furniture, shutting in a small space such as a closet); egregious **scapegoating**; coercing the child to **hurt themselves**; and **excessive discipline** (extremely high frequency or duration, even below the level of physical abuse), physical or not."]
            ] },
            { type: "table", caption: "The other codes (pp. 824–825)", head: ["Situation", "Neglect", "Psychological abuse"], rows: [
              ["Victim, by a parent", "Z69.010", "Z69.010"],
              ["Victim, nonparental", "Z69.020", "Z69.020"],
              ["Past history in childhood", "**Z62.812**", "**Z62.811**"],
              ["Perpetrator, parental", "Z69.011", "Z69.011"],
              ["Perpetrator, nonparental", "Z69.021", "Z69.021"]
            ] },
            { type: "callout", kind: "pearl", title: "Two phrases to keep straight", text: "Neglect is an **omission** (or an egregious act) that deprives the child of **needs**; psychological abuse is a **verbal or symbolic act** that harms. Both are judged by actual **or reasonably potential** harm (pp. 824–825). Excessive discipline that stops short of injury is **psychological** abuse (p. 825), whereas discipline that is reasonable and causes no injury is **not** abuse at all (p. 823)." },
            { type: "case", title: "Clinical vignette", text: "A 10-year-old girl is referred by her school for weight loss and exhaustion; she has been left alone most nights for months to care for two toddlers, misses meals and rarely attends school. Social services have confirmed the circumstances. She is now in outpatient follow-up with the same child psychiatrist who assessed her in hospital.", point: "Confirmed child neglect, subsequent encounter: **T74.02XD** (deprivation of supervision, nourishment and education with harm; routine follow-up after the active phase) (pp. 823–824), with **Z69.010** if the visit is for mental health services to the victim of parental neglect (p. 824)." }
          ]
        },
        {
          id: "s22-partner-violence",
          title: "Spouse or partner violence: physical and sexual",
          pages: "826",
          blocks: [
            { type: "criteria", title: "Spouse or partner violence, physical (p. 826)", code: "T74.11XA/XD confirmed; T76.11XA/XD suspected", pages: "826", items: [
              ["What", "**Nonaccidental acts of physical force** that cause, or could reasonably cause, **physical harm** to an intimate partner, **or that evoke significant fear**."],
              ["Examples", "The manual’s list runs from shoving, slapping, hair pulling and pinching through restraining, shaking, throwing, biting, kicking and hitting (fist or object) to burning, poisoning, strangling or smothering, holding the head under water and using a weapon."],
              ["Excluded", "Acts done to **physically protect oneself or one’s partner**."]
            ] },
            { type: "criteria", title: "Spouse or partner violence, sexual (p. 826)", code: "T74.21XA/XD confirmed; T76.21XA/XD suspected", pages: "826", items: [
              ["What", "**Physical force or psychological coercion** to make the partner take part in a sexual act **against their will**, whether or not the act is completed."],
              ["Also", "Sexual acts with a partner who is **unable to consent**."]
            ] },
            { type: "table", caption: "The other codes (p. 826)", head: ["Situation", "Physical violence", "Sexual violence"], rows: [
              ["Mental health services for the **victim**", "Z69.11", "**Z69.81**"],
              ["**Past history**", "Z91.410", "Z91.410"],
              ["Mental health services for the **perpetrator**", "Z69.12", "Z69.12"]
            ] },
            { type: "callout", kind: "exam", title: "The one asymmetry", text: "The **victim** code differs: **Z69.11** for physical violence but **Z69.81** for sexual violence; the perpetrator code (**Z69.12**) and the history code (**Z91.410**) are shared (p. 826). “Evokes significant fear” means an act of force can qualify as physical violence **without injury** (p. 826)." },
            { type: "case", title: "Clinical vignette", text: "A 34-year-old woman attends a first psychiatric appointment arranged by a domestic violence service after her husband repeatedly grabbed her by the throat during arguments over the past year, documented by the police; she has nightmares and avoids home.", point: "Confirmed partner physical violence, initial encounter with a new clinician: **T74.11XA**, with **Z69.11** because the encounter is to provide mental health services to the victim (p. 826). Her symptoms are assessed for [[dx:ptsd|PTSD]] or another disorder in their own right; the Z codes do not replace that (app guidance). Safety planning comes first (app guidance)." }
          ]
        },
        {
          id: "s22-partner-neglect-psych",
          title: "Spouse or partner neglect and psychological abuse",
          pages: "826–827",
          blocks: [
            { type: "criteria", title: "Spouse or partner neglect (pp. 826–827)", code: "T74.01XA/XD confirmed; T76.01XA/XD suspected", pages: "826–827", items: [
              ["What", "One partner’s **egregious act or omission** that leaves a **dependent** partner without **basic needs**, causing, or reasonably likely to cause, physical or psychological harm."],
              ["Context", "Relationships in which one partner is **extremely dependent** on the other for care or for managing everyday activities because of substantial **physical, psychological/intellectual or cultural** limitations (the manual’s example: unable to communicate or manage daily life after moving to a **foreign culture**)."]
            ] },
            { type: "criteria", title: "Spouse or partner abuse, psychological (p. 827)", code: "T74.31XA/XD confirmed; T76.31XA/XD suspected", pages: "827", items: [
              ["What", "**Nonaccidental verbal or symbolic acts** by one partner that cause, or could reasonably cause, **significant harm** to the other."],
              ["Examples", "Berating or humiliating; **interrogating**; restricting the ability to **come and go**; **obstructing access to help** (police, legal, protective or medical resources); threatening physical harm or sexual assault; harming or threatening people or things the victim cares about; unwarranted restriction of **economic resources**; **isolating** from family, friends or support; **stalking**; and “**gaslighting**”, trying to make the victim doubt their sanity."]
            ] },
            { type: "table", caption: "The other codes (pp. 826–827)", head: ["Situation", "Neglect", "Psychological abuse"], rows: [
              ["Mental health services for the victim", "Z69.11", "Z69.11"],
              ["Past history", "**Z91.412**", "**Z91.411**"],
              ["Mental health services for the perpetrator", "Z69.12", "Z69.12"]
            ] },
            { type: "callout", kind: "pearl", title: "Dependency is the key word for neglect", text: "Partner **neglect** is written for a partner who **depends** on the other for care or daily functioning; an able adult who is simply ignored by a partner does not fit the definition (pp. 826–827). Psychological abuse needs no dependency; its list is long and includes **economic control, isolation, stalking and gaslighting** (p. 827)." },
            { type: "case", title: "Clinical vignette", text: "A 45-year-old man seen for depressive symptoms describes 3 years in which his wife has controlled all money, taken his phone, forbidden contact with his siblings and told him he is “mad” when he objects; there is no physical violence and he is not dependent on her for care. This is his second visit; the first was 2 weeks ago.", point: "Confirmed partner psychological abuse, subsequent encounter: **T74.31XD** (economic control, isolation, gaslighting; routine follow-up) with **Z69.11** if the visit is to provide mental health services to the victim (p. 827). Neglect does not apply: he is not a dependent partner (pp. 826–827). His depressive disorder is diagnosed separately (app guidance)." }
          ]
        },
        {
          id: "s22-adult-nonpartner",
          title: "Adult abuse by a nonspouse or nonpartner",
          pages: "827–828",
          blocks: [
            { type: "p", text: "The last abuse category covers maltreatment of an adult by **a second adult who is not their intimate partner**: physical, sexual or emotional. The examples parallel the partner categories: nonaccidental force (pushing, scratching, slapping, throwing something that could hurt, punching, biting) that harms, could harm, or causes **significant fear**; sexual acts obtained by **force or coercion**; and words or symbolic acts that could cause psychological harm (berating, interrogating, restricting movement, obstructing help, threats, restricting money, isolation, stalking, making the person think they are “crazy”). **Self-protective acts** are again excluded (pp. 827–828)." },
            { type: "table", caption: "Codes (p. 828)", head: ["Type", "Confirmed", "Suspected"], rows: [
              ["Physical abuse", "T74.11XA / T74.11XD", "T76.11XA / T76.11XD"],
              ["Sexual abuse", "T74.21XA / T74.21XD", "T76.21XA / T76.21XD"],
              ["Psychological abuse", "T74.31XA / T74.31XD", "T76.31XA / T76.31XD"],
              ["Mental health services for the **victim**", "**Z69.81**", ""],
              ["Mental health services for the **perpetrator**", "**Z69.82**", ""]
            ] },
            { type: "callout", kind: "exam", title: "Same T codes as the partner categories", text: "ICD-10-CM distinguishes **adult** (x1) from **child** (x2) and the **type** of maltreatment, but **not** whether the abuser was a partner, so the nonpartner adult T codes are identical to the partner T codes (pp. 826–828). The relationship shows only in the **Z69** encounter codes (**Z69.81/Z69.82** for nonpartner abuse versus Z69.11/Z69.12 for partners) and in the recorded **name** of the category (app reading of pp. 826–828). There is **no partner-style history code** listed for nonpartner adult abuse (p. 828)." },
            { type: "case", title: "Clinical vignette", text: "A 78-year-old widow living with her adult son is brought by a neighbor; she has bruises on both upper arms, is afraid of her son, and says he shouts at her, takes her pension and will not let her see friends. Adult protective services have been notified but have not completed their assessment. She is being seen for the first time.", point: "Abuse of an adult by a **nonpartner** (her son): suspected physical abuse **T76.11XA** and suspected psychological abuse **T76.31XA**, initial encounter, with **Z69.81** if the encounter is to provide her with mental health services (pp. 827–828). Partner codes do not apply. Assess for cognitive disorder and depression separately (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Relational and family problems",
      sections: [
        {
          id: "s22-relational",
          title: "Parent-child, sibling and partner relational problems",
          pages: "828–829",
          blocks: [
            { type: "p", text: "The manual introduces this group by noting that key relationships, above all **intimate partner** and **parent/caregiver-child** relationships, shape health for better or worse, and at the extreme shade into maltreatment. A relational problem comes to attention either as the **reason for seeking care** or as something that affects the **course, prognosis or treatment** of a disorder (p. 828)." },
            { type: "defs", title: "Parent-child relational problem (p. 829)", items: [
              ["Codes", "**Z62.820** parent–biological child; **Z62.821** parent–adopted child; **Z62.822** parent–foster child; **Z62.898** other caregiver–child."],
              ["Who is a “parent”", "One of the child’s **primary caregivers**: biological, adoptive or foster parent, **or another relative such as a grandparent** in a parental role."],
              ["When", "The main focus is the **quality** of the relationship, or that quality affects a disorder’s course, prognosis or treatment."],
              ["Behavioral problems", "Inadequate parental **control, supervision or involvement**; **overprotection**; **excessive pressure**; arguments that escalate to **threats of physical violence**; **avoidance** without resolving problems."],
              ["Cognitive problems", "Negative attributions of the other’s intentions, **hostility or scapegoating**, unwarranted feelings of **estrangement**."],
              ["Affective problems", "**Sadness, apathy or anger** about the other person."],
              ["Always", "Weigh the child’s **developmental needs** and the **cultural context**."]
            ] },
            { type: "defs", title: "Sibling relational problem, Z62.891 (p. 829)", items: [
              ["When", "A **pattern of interaction** among siblings with significant **impairment** in individual or family functioning, or with **symptoms** in one or more siblings, or when it affects a sibling’s disorder."],
              ["Who", "**Children or adults**; full, half-, step-, foster and adopted siblings."]
            ] },
            { type: "defs", title: "Relationship distress with spouse or intimate partner, Z63.0 (p. 829)", items: [
              ["When", "The **major focus** is the quality of the intimate relationship, or that quality affects a disorder’s course, prognosis or treatment. Partners may be of the **same or different genders**."],
              ["Behavioral", "**Conflict resolution** difficulty, **withdrawal**, **overinvolvement**."],
              ["Cognitive", "Chronic negative attributions of the partner’s intentions; **dismissing** the partner’s positive behavior."],
              ["Affective", "Chronic **sadness, apathy and/or anger** about the partner."]
            ] },
            { type: "callout", kind: "exam", title: "Three domains, twice", text: "Both the parent-child entry and the partner-distress entry describe impairment in **behavioral, cognitive and affective** domains, with different examples (p. 829). A grandparent raising a child counts as a **parent** for this category (p. 829); since the three specific codes name the biological, adoptive and foster parent, the grandparent’s relationship is recorded with **Z62.898 other caregiver–child** (app reading of p. 829)." },
            { type: "case", title: "Clinical vignette", text: "The parents of a 14-year-old boy with well-controlled ADHD ask for family sessions: every evening ends in shouting over homework and screens, the father has twice threatened to “knock sense into him”, and the boy now avoids both parents. There is no injury and no fear of violence.", point: "The focus is the **quality of the parent-child relationship** (arguments escalating to threats of violence, avoidance) and it is affecting the management of a disorder: **Z62.820** parent–biological child relational problem, alongside ADHD (p. 829). A threat without force or injury is not physical abuse (pp. 823, 826); if threats became a pattern that could cause significant psychological harm, child psychological abuse would need consideration (p. 825; app guidance)." }
          ]
        },
        {
          id: "s22-family",
          title: "Problems related to the family environment",
          pages: "829–830",
          blocks: [
            { type: "defs", title: "Four family-environment codes (pp. 829–830)", items: [
              ["Z62.29 Upbringing away from parents", "The main focus is a child being **raised away from the parents**, or that upbringing affects a disorder. Covers a child in **state custody** placed in kin or foster care; a child living with a **nonparental relative or friends** without a court mandate; and a child in a **group home or orphanage**. **Excludes** Z59.3, problem related to living in a residential institution."],
              ["Z62.898 Child affected by parental relationship distress", "The focus is the **negative effect of parental discord** (high conflict, distress or disparagement) on a child, including on the child’s disorder."],
              ["Z63.5 Disruption of family by separation or divorce", "Partners in an intimate adult couple **living apart** because of relationship problems, or **in the process of divorce**."],
              ["Z63.8 High expressed emotion level within family", "**Expressed emotion** is a qualitative measure of the amount of **hostility, emotional overinvolvement and criticism** directed at a family member who is an identified patient; coded when it is the focus or affects that member’s disorder."]
            ] },
            { type: "callout", kind: "pearl", title: "Z62.898 does double duty", text: "The same code, **Z62.898**, is listed for **other caregiver–child relational problem** (p. 829) and for **child affected by parental relationship distress** (p. 830); the recorded name tells them apart (app reading). Expressed emotion is the one construct in this chapter with a research pedigree in schizophrenia and mood disorder relapse; the manual defines it but cites no figures (p. 830)." },
            { type: "case", title: "Clinical vignette", text: "A 23-year-old man with schizophrenia relapses for the third time within months of each discharge home. His parents, who love him, check on him hourly, criticize his smoking and inactivity constantly and argue about his care in front of him. The team plans family psychoeducation.", point: "**Z63.8** high expressed emotion level within family: hostility, overinvolvement and criticism toward the identified patient, affecting the course of his disorder (p. 830), recorded with schizophrenia. Family intervention is standard care (app guidance, outside the DSM)." }
          ]
        }
      ]
    },
    {
      title: "Psychosocial and environmental problems",
      sections: [
        {
          id: "s22-education-work",
          title: "Educational and occupational problems",
          pages: "830–831",
          blocks: [
            { type: "p", text: "Both groups are coded when the problem is the **focus of clinical attention** or affects **diagnosis, treatment or prognosis** (p. 830). The manual lists the problems and their codes with almost no further definition; two exclusions are the testable content." },
            { type: "table", caption: "Educational problems (p. 830)", head: ["Code", "Problem"], rows: [
              ["Z55.0", "Illiteracy and low-level literacy"],
              ["Z55.1", "Schooling unavailable and unattainable"],
              ["Z55.2", "Failed school examinations"],
              ["Z55.3", "Underachievement in school (below what the person’s intellectual capacity would predict)"],
              ["Z55.4", "Educational maladjustment and discord with teachers and classmates"],
              ["Z55.8", "Problems related to inadequate teaching"],
              ["Z55.9", "Other problems related to education and literacy"]
            ] },
            { type: "table", caption: "Occupational problems (pp. 830–831)", head: ["Code", "Problem"], rows: [
              ["**Z56.82**", "Problem related to current **military deployment status**"],
              ["Z56.0", "Unemployment"],
              ["Z56.1", "Change of job"],
              ["Z56.2", "Threat of job loss"],
              ["Z56.3", "Stressful work schedule"],
              ["Z56.4", "Discord with boss and workmates"],
              ["Z56.5", "Uncongenial work environment"],
              ["Z56.6", "Other physical and mental strain related to work"],
              ["Z56.81", "Sexual harassment on the job"],
              ["Z56.9", "Other problem related to employment"]
            ] },
            { type: "callout", kind: "caution", title: "Deployment status is not the reaction to it", text: "**Z56.82** is for an **occupational** problem tied directly to deployment status. **Psychological reactions** to deployment are **not** coded here; they are better captured as an **adjustment disorder** or another mental disorder (p. 830). The same logic recurs in the housing group for reactions to a change of residence (p. 831)." },
            { type: "case", title: "Clinical vignette", text: "A 19-year-old university student is referred after failing her second-year examinations; testing shows average ability, she has no mood, anxiety or attention disorder, and she describes a part-time job that leaves no time to study. She is not distressed beyond the practical problem.", point: "No mental disorder; the focus is an educational problem, **Z55.2** failed school examinations (or Z55.3 underachievement if the point is performance below capacity), with **Z56.3** stressful work schedule if the job is a focus too (pp. 830–831). If a full evaluation had found nothing to address at all, Z03.89 would apply instead (Chapter 20; app guidance)." }
          ]
        },
        {
          id: "s22-housing-economic",
          title: "Housing and economic problems",
          pages: "831–832",
          blocks: [
            { type: "defs", title: "Housing problems (p. 831)", items: [
              ["Z59.01 Sheltered homelessness", "Primary nighttime residence is a **homeless shelter, warming shelter, domestic violence shelter, motel, or a temporary or transitional living situation**; coded when it affects treatment or prognosis."],
              ["Z59.02 Unsheltered homelessness", "Living in a place **not meant for human habitation**: a public space (tunnel, station, mall), a building not meant for living in (an abandoned structure or disused factory), a vehicle, a cave, a cardboard box or some other improvised arrangement."],
              ["Z59.1 Inadequate housing", "Lack of **heat** (in cold weather) or **electricity**, **infestation** by insects or rodents, inadequate **plumbing and toilets**, **overcrowding**, inadequate sleeping space, **excessive noise**; consider **cultural norms** first."],
              ["Z59.2 Discord with neighbor, lodger or landlord", "When it is a focus or affects treatment or prognosis."],
              ["Z59.3 Problem related to living in a residential institution", "Problems of institutional living. **Psychological reactions to a change in living situation** are **not** included; those are an **adjustment disorder**."],
              ["Z59.9 Other housing problem", "Anything else about housing."]
            ] },
            { type: "defs", title: "Economic problems (pp. 831–832)", items: [
              ["Z59.41 Food insecurity", "Lack of adequate food."],
              ["Z58.6 Lack of safe drinking water", "As named."],
              ["Z59.5 Extreme poverty", "As named."],
              ["Z59.6 Low income", "As named."],
              ["Z59.7 Insufficient social or health insurance or welfare support", "The person **meets eligibility criteria** but is not receiving support, receives **insufficient** support, or otherwise **lacks access** to needed insurance or programs. Examples: cannot qualify for lack of **documentation or proof of address**; cannot obtain adequate health insurance because of **age or a preexisting condition**; denied support by **excessively stringent** income or other requirements."],
              ["Z59.9 Other economic problem", "Anything else; note that Z59.9 is printed for both “other housing” and “other economic” problem."]
            ] },
            { type: "update", kind: "post", year: "2024", title: "Codes that changed after printing", source: "APA DSM-5-TR coding updates, September 2023 and September 2024 (psychiatry.org); ICD-10-CM FY2024 and FY2025 code tables; checked October 27, 2026", text: "Two printed codes in this section are no longer valid as complete codes. **Z59.1 inadequate housing** became **Z59.10** (inadequate housing, unspecified) on **October 1, 2023**, when ICD-10-CM added Z59.11 (environmental temperature), Z59.12 (utilities) and Z59.19 (other). **Z59.7** became **Z59.71 insufficient health insurance coverage** and **Z59.72 insufficient welfare support** on **October 1, 2024**; choose by the kind of support that is lacking. Neither has changed since (FY2026, FY2027). ICD-10-CM also carries social-determinant codes the DSM does not list, such as Z59.81- housing instability, Z59.82 transportation insecurity, Z59.86- financial insecurity and Z59.87 material hardship (app note; confirm against the official tabular list)." },
            { type: "case", title: "Clinical vignette", text: "A 52-year-old man with bipolar I disorder has missed his depot injections since being evicted; he sleeps in a bus station and eats irregularly from a soup kitchen. The team arranges a shelter place and social work review.", point: "**Z59.02** unsheltered homelessness (a public space not meant for habitation) and **Z59.41** food insecurity, each coded because it affects treatment and belongs in the management plan (pp. 821, 831–832), beside bipolar I disorder. Once in a shelter the code changes to **Z59.01** (p. 831)." }
          ]
        },
        {
          id: "s22-social-legal",
          title: "Problems of the social environment and the legal system",
          pages: "832–833",
          blocks: [
            { type: "defs", title: "Social environment (p. 832)", items: [
              ["Z60.2 Problem related to living alone", "Chronic **loneliness, isolation**, and **lack of structure** in daily living (irregular meals and sleep, inconsistent chores)."],
              ["Z60.3 Acculturation difficulty", "Difficulty adjusting to a **new culture**, for example after **migration**."],
              ["Z60.4 Social exclusion or rejection", "An **imbalance of social power** with **recurrent** exclusion or rejection: **bullying, teasing, intimidation**, being targeted for verbal abuse and humiliation, purposeful exclusion from the activities of peers or workmates."],
              ["Z60.5 Target of (perceived) adverse discrimination or persecution", "**Perceived or experienced** discrimination or persecution for membership (or perceived membership) in a category: the manual lists gender and gender identity, race and ethnicity, religion, sexual orientation, national origin, political beliefs, disability, caste, social standing, body weight and physical appearance."],
              ["Z60.9 Other problem related to social environment", "Anything else."]
            ] },
            { type: "table", caption: "Interaction with the legal system (pp. 832–833)", head: ["Code", "Problem"], rows: [
              ["Z65.0", "Conviction in criminal proceedings without imprisonment"],
              ["Z65.1", "Imprisonment or other incarceration"],
              ["Z65.2", "Problems related to release from prison"],
              ["Z65.3", "Problems related to other legal circumstances (civil litigation, child custody or support proceedings)"]
            ] },
            { type: "callout", kind: "pearl", title: "Bullying has a code", text: "**Z60.4** is the chapter’s bullying code, defined by a **power imbalance** and **recurrence** (p. 832); it is not an abuse code, because the perpetrator is a peer rather than a caregiver or partner (app reading of pp. 822–832). **Z60.5** covers discrimination that is **perceived** as well as experienced, and the manual’s list of categories is long, including **caste, weight and appearance** (p. 832)." },
            { type: "case", title: "Clinical vignette", text: "A 15-year-old boy with autism spectrum disorder has stopped attending school; classmates have for months mocked his speech, excluded him from every group activity and posted humiliating videos. He has no new depressive or anxiety disorder on assessment.", point: "**Z60.4** social exclusion or rejection (recurrent bullying and purposeful exclusion with a power imbalance), coded with autism spectrum disorder because it affects his course and management (pp. 821, 832). School-based intervention is part of the plan (app guidance)." }
          ]
        },
        {
          id: "s22-other-circumstances",
          title: "Other circumstances, access to care, personal history and counseling",
          pages: "833–834",
          blocks: [
            { type: "defs", title: "Other psychosocial, personal and environmental circumstances (p. 833)", items: [
              ["Z72.9 Problem related to lifestyle", "Coded when the lifestyle problem is itself a **specific focus of treatment**, or when it **directly affects** a disorder’s course, prognosis or treatment: lack of exercise, inappropriate diet, high-risk sexual behavior, poor sleep hygiene. A problem that is a **symptom of a mental disorder** is **not** coded unless it meets that test; then code **both**."],
              ["Z64.0 / Z64.1", "Problems related to **unwanted pregnancy** / to **multiparity**."],
              ["Z64.4", "Discord with a **social service provider** (probation officer, case manager, social services worker)."],
              ["Z65.4", "**Victim of crime**; the same code is listed for **victim of terrorism or torture**."],
              ["Z65.5", "Exposure to **disaster, war or other hostilities**."]
            ] },
            { type: "table", caption: "Access, history and counseling (pp. 833–834)", head: ["Code", "Entry", "What the manual adds"], rows: [
              ["Z75.3", "Unavailability or inaccessibility of health care facilities", "Access problems, when a focus or affecting treatment"],
              ["Z75.4", "Unavailability or inaccessibility of other helping agencies", ""],
              ["Z91.49", "Personal history of psychological trauma", "A history code, not a diagnosis"],
              ["Z91.82", "Personal history of military deployment", ""],
              ["Z31.5", "Genetic counseling", "Seeking to understand the risk of a disorder with a **significant genetic component** (e.g., bipolar disorder) for oneself, existing children or future children"],
              ["Z70.9", "Sex counseling", "Sex education, sexual behavior, orientation, attitudes (embarrassment, timidity), **others’** sexual behavior or orientation, sexual enjoyment, any other sex-related issue"],
              ["Z71.3", "Dietary counseling", "Dietary issues such as weight management"],
              ["Z71.9", "Other counseling or consultation", "Anything not specified elsewhere in the chapter (e.g., drug-abuse prevention counseling for an adolescent)"]
            ] },
            { type: "callout", kind: "exam", title: "Lifestyle problem versus symptom", text: "Poor sleep hygiene in a person whose insomnia is a symptom of depression is **not** coded Z72.9 unless it is a **specific focus of treatment** or **directly affects** course or treatment; when it is, record **both** the disorder and the lifestyle code (p. 833). The same structure applies across the chapter: a Z code is added for a reason, never automatically (p. 821)." },
            { type: "case", title: "Clinical vignette", text: "A 30-year-old woman whose brother and mother have bipolar I disorder asks, before trying to conceive, what the risk is for her and for a child. She has no symptoms and no diagnosis.", point: "**Z31.5** genetic counseling: she seeks to understand the risk of a disorder with a significant genetic component for herself and her future children (p. 833). Nothing else from the chapter is needed; if the evaluation finds no disorder and no other problem, that is the record (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Additional conditions",
      sections: [
        {
          id: "s22-additional",
          title: "Wandering, uncomplicated bereavement, phase of life, religious or spiritual problem",
          pages: "834",
          blocks: [
            { type: "defs", title: "Wandering associated with a mental disorder, Z91.83 (p. 834)", items: [
              ["What", "A person **with a mental disorder** whose **desire to walk about** causes significant **management or safety** concerns; the manual’s examples are **major neurocognitive** and **neurodevelopmental** disorders, with a restless urge to wander that risks **falls** and leads them to **leave supervised settings** unaccompanied."],
              ["Excludes", "People trying to **escape an unwanted housing situation** (children **running away**, patients who no longer want to stay in hospital) and people who walk or pace because of **medication-induced akathisia**."],
              ["Coding note", "**Code the mental disorder first** (e.g., major neurocognitive disorder, autism spectrum disorder), then **Z91.83 wandering associated with [that disorder]**."]
            ] },
            { type: "defs", title: "Uncomplicated bereavement, Z63.4 (p. 834)", items: [
              ["What", "The focus is a **normal reaction** to the **death of a loved one**."],
              ["Looks like", "Some grieving people have symptoms characteristic of a **major depressive episode**: sadness with **insomnia, poor appetite and weight loss**."],
              ["Tell-tale", "The bereaved person typically regards the depressed mood as **“normal”**, though they may seek help for **insomnia or anorexia**."],
              ["Culture", "The **duration and expression** of normal bereavement vary considerably between cultural groups."],
              ["Where to look", "The manual points to the **major depressive episode** and **prolonged grief disorder** texts for how to separate grief from each."]
            ] },
            { type: "defs", title: "Phase of life problem, Z60.0, and religious or spiritual problem, Z65.8 (p. 834)", items: [
              ["Z60.0", "A problem adjusting to a **life-cycle transition**: entering or completing school, leaving parental control, getting married, starting a career, becoming a parent, the **empty nest**, retiring."],
              ["Z65.8", "Distressing experiences of **losing or questioning one’s faith**, difficulties around **conversion** to a new faith, or doubts about **spiritual values**, which need not involve an organized church or institution."]
            ] },
            { type: "compare", title: "Grief: three places it can land (p. 834 and Chapters 4 and 7)", items: [
              { title: "Uncomplicated bereavement (Z63.4)", color: "guide", points: ["A **normal** reaction, mood felt as “normal”.", "Depressive-like symptoms possible.", "Not a disorder; help may be sought for sleep or appetite."] },
              { title: "Major depressive episode", color: "mech", points: ["Full MDE criteria met; the Chapter 4 text guides the distinction.", "[[dx:mdd|Major depressive disorder]] can be diagnosed during bereavement."] },
              { title: "Prolonged grief disorder", color: "hy", points: ["Chapter 7: a persistent grief response **12 months** after the death (6 in children), beyond cultural norms.", "[[dx:pgd|Prolonged grief disorder]]."] }
            ] },
            { type: "callout", kind: "exam", title: "Wandering versus pacing versus running away", text: "Pacing from **akathisia** is Chapter 21 ([[dx:medication-induced-acute-akathisia|medication-induced acute akathisia]]); a child **running away** is escaping a situation, not wandering; the **wandering** code needs a **mental disorder coded first** and a **safety or management** concern (p. 834)." },
            { type: "case", title: "Clinical vignette", text: "An 81-year-old woman with major neurocognitive disorder due to Alzheimer’s disease has twice been found by police several streets from the care home at night; she was not trying to leave but “looking for her mother”. Staff want a management plan. She takes no antipsychotic.", point: "Code the disorder first, then **Z91.83** wandering associated with major neurocognitive disorder due to Alzheimer’s disease: a restless urge to wander with safety concerns and leaving a supervised setting (p. 834). No akathisia (no dopamine blocker) and no intent to escape." }
          ]
        },
        {
          id: "s22-behavior-adherence",
          title: "Antisocial behavior, nonadherence, overweight or obesity",
          pages: "835",
          blocks: [
            { type: "defs", title: "Antisocial behavior not attributable to a mental disorder (p. 835)", items: [
              ["Z72.811 Adult antisocial behavior", "Antisocial behavior in an adult **not attributable to a mental disorder** such as conduct disorder or antisocial personality disorder; the manual’s examples are certain **career criminals**: professional thieves, racketeers, drug dealers."],
              ["Z72.810 Child or adolescent antisocial behavior", "Antisocial behavior in a child or adolescent **not attributable to a mental disorder** such as intermittent explosive disorder or conduct disorder: **isolated** antisocial acts, **not a pattern**."]
            ] },
            { type: "defs", title: "Nonadherence to medical treatment, Z91.19 (p. 835)", items: [
              ["What", "The focus is nonadherence to an **important aspect of treatment** for a mental or other medical condition."],
              ["Reasons the manual lists", "**Discomfort** from treatment (side effects), **expense**, personal **values** or **religious or cultural beliefs** about the treatment, **age-related debility**, and the presence of a **mental disorder** (schizophrenia, a personality disorder)."],
              ["Two conditions", "Only when the problem is **severe enough to warrant independent clinical attention**, and only when criteria for **psychological factors affecting other medical conditions** are **not** met."]
            ] },
            { type: "defs", title: "Overweight or obesity, E66.9 (p. 835)", items: [
              ["What", "Coded when overweight or obesity is a **focus of clinical attention**; the manual adds nothing more."]
            ] },
            { type: "compare", title: "Antisocial behavior: code or diagnosis? (p. 835 and Chapters 15 and 18)", items: [
              { title: "Z72.810 / Z72.811", color: "guide", points: ["Not attributable to a disorder.", "Child or adolescent: **isolated** acts.", "Adult: a career of crime without a disorder."] },
              { title: "Conduct disorder", color: "mech", points: ["A **repetitive, persistent pattern** violating rights or rules, with the Chapter 15 count and duration.", "[[dx:conduct-disorder|Conduct disorder]]."] },
              { title: "Antisocial personality disorder", color: "hy", points: ["Age **18** or older, conduct disorder before **15**, the Chapter 18 pattern.", "[[dx:antisocial-pd|Antisocial personality disorder]]."] }
            ] },
            { type: "callout", kind: "pearl", title: "Nonadherence versus PFAMC", text: "If a psychological or behavioral factor **adversely affects** a medical condition in the way Chapter 9 describes, [[dx:pfamc|psychological factors affecting other medical conditions]] is the diagnosis and Z91.19 is **not** used (p. 835). Z91.19 is for nonadherence that stands on its own as a problem and is severe enough to need attention (p. 835)." },
            { type: "update", kind: "post", year: "2022", title: "Z91.19 became Z91.199", source: "APA DSM-5-TR coding update, September 2022 (effective October 1, 2022); ICD-10-CM FY2023 code tables; checked October 27, 2026", text: "ICD-10-CM split Z91.19 on **October 1, 2022** into **Z91.190** (patient’s noncompliance with other medical treatment and regimen due to financial hardship), **Z91.198** (for other reason) and **Z91.199** (unspecified reason); the APA’s September 2022 update assigns DSM-5-TR nonadherence to medical treatment to **Z91.199**. ICD-10-CM also has more specific nonadherence codes (Z91.11-, Z91.12-, Z91.13-, Z91.14-, Z91.15-, for dietary regimen, intentional and unintentional underdosing, renal dialysis and other regimens) that the DSM does not list (ICD-10-CM; app note). Unchanged through FY2027." }
          ]
        },
        {
          id: "s22-malingering",
          title: "Malingering (Z76.5)",
          pages: "835",
          blocks: [
            { type: "criteria", title: "The manual’s description (not a criteria set)", code: "Z76.5", pages: "835", items: [
              ["Essential feature", "Symptoms, physical or psychological, that are **deliberately** produced and **false or grossly exaggerated**, driven by **external incentives**."],
              ["Incentives named", "Avoiding **military duty** or **work**, obtaining **financial compensation**, evading **criminal prosecution**, obtaining **drugs**."],
              ["May be adaptive", "The manual’s example: feigning illness while a **captive of the enemy in wartime**."]
            ] },
            { type: "steps", title: "Strongly consider malingering with any combination of (p. 835)", items: [
              ["1 Medicolegal context", "Sent by an **attorney** for examination, or self-referred with a **lawsuit or criminal charges** pending."],
              ["2 Marked discrepancy", "Between what the person **claims** (stress, disability) and what is **objectively** found and observed."],
              ["3 Lack of cooperation", "During the evaluation and with the prescribed treatment."],
              ["4 Antisocial personality disorder", "Its presence."]
            ] },
            { type: "compare", title: "Malingering and its neighbors (p. 835)", items: [
              { title: "Malingering (Z76.5)", color: "guide", points: ["Symptoms **intentionally** produced.", "Motive: an **external incentive**.", "Not a mental disorder."] },
              { title: "Factitious disorder", color: "mech", points: ["Symptoms intentionally produced or feigned.", "**No** external incentive; the aim is the **sick role**.", "[[dx:factitious|Factitious disorder]] (Chapter 9)."] },
              { title: "Functional neurological symptom disorder and other somatic symptom–related disorders", color: "hy", points: ["Symptoms **not** intentionally produced.", "No obvious external incentive.", "[[dx:fnd|FND]], [[dx:ssd|somatic symptom disorder]]."] }
            ] },
            { type: "callout", kind: "key", title: "When feigning is definite", text: "Clear evidence of feigning, such as loss of function that is present **during the examination but not at home**, suggests **factitious disorder** if the apparent aim is the **sick role** and **malingering** if it is an **incentive such as money** (p. 835). The distinction is about **motive**, not about whether the symptoms are real." },
            { type: "callout", kind: "caution", title: "A list to consider, not to diagnose with (app guidance)", text: "The four indicators tell the clinician when to **strongly consider** malingering; they are not criteria, and the manual gives no threshold (p. 835). A medicolegal context by itself is common and proves nothing (app guidance). Document observations and discrepancies rather than motives you cannot verify, and keep the possibility of a real disorder open: factitious disorder and malingering can coexist with other diagnoses (app guidance)." },
            { type: "case", title: "Clinical vignette", text: "A 38-year-old man referred by his lawyer while a compensation claim is pending reports constant severe back pain and “total memory loss” after a minor workplace fall; he walks normally when he thinks he is unobserved, refuses the recommended tests, and has a documented antisocial personality disorder. He states openly that he needs the payout.", point: "All four indicators are present (medicolegal context, marked discrepancy, lack of cooperation, antisocial personality disorder) and the incentive is external: **Z76.5 malingering**, recorded with the personality disorder (p. 835). Factitious disorder is excluded by the obvious incentive (p. 835)." }
          ]
        },
        {
          id: "s22-cognitive",
          title: "Age-related cognitive decline and borderline intellectual functioning",
          pages: "835–836",
          blocks: [
            { type: "defs", title: "Age-related cognitive decline, R41.81 (pp. 835–836)", items: [
              ["What", "An **objectively identified** decline in cognitive functioning that is a consequence of **aging** and is **within normal limits for the person’s age**."],
              ["Complaints", "Trouble remembering **names or appointments**; difficulty solving **complex problems**."],
              ["Only after", "Determining that the impairment is **not better explained by a specific mental disorder** and **not attributable to a neurological condition**."]
            ] },
            { type: "defs", title: "Borderline intellectual functioning, R41.83 (p. 836)", items: [
              ["When", "It is the focus of clinical attention or affects treatment or prognosis."],
              ["The hard part", "Separating it from **mild intellectual developmental disorder** needs careful assessment of **intellectual and adaptive** functions **and their discrepancies**, especially when a co-occurring disorder affects **cooperation with standardized testing** (the manual names **schizophrenia** and **ADHD with severe impulsivity**)."]
            ] },
            { type: "compare", title: "Normal, borderline, disorder (pp. 835–836 and Chapters 1 and 17)", items: [
              { title: "R41.81 age-related cognitive decline", color: "guide", points: ["Objective decline, **within normal limits for age**.", "A disorder and a neurological cause excluded first."] },
              { title: "Mild / major neurocognitive disorder", color: "mech", points: ["Decline **beyond** what is expected, with concern, objective deficit and (major) loss of independence.", "[[dx:mild-ncd|Mild NCD]], [[dx:major-ncd|major NCD]]."] },
              { title: "R41.83 borderline intellectual functioning", color: "hy", points: ["Below average without meeting IDD.", "Versus [[dx:idd|intellectual developmental disorder]]: both intellectual **and adaptive** functions, and their discrepancies."] }
            ] },
            { type: "callout", kind: "pearl", title: "What the manual does not say (app note)", text: "DSM-5-TR gives **no IQ range** for borderline intellectual functioning and no test cutoff for age-related cognitive decline (pp. 835–836); older convention placed borderline functioning roughly at IQ 71–84, but that figure is outside the DSM-5-TR text. The ICD-10-CM titles match the DSM names for both codes (ICD-10-CM; unchanged through October 2026)." },
            { type: "case", title: "Clinical vignette", text: "A 72-year-old retired teacher worries that she forgets names and takes longer to plan a trip; cognitive testing is within the normal range for her age and education, she manages her finances and household fully, and neurological examination and imaging are normal. She has no depression.", point: "Objective performance within normal limits for age, with a specific disorder and a neurological cause excluded: **R41.81** age-related cognitive decline (pp. 835–836). Mild neurocognitive disorder would need decline beyond the expected range (Chapter 17)." }
          ]
        }
      ]
    },
    {
      title: "Using the chapter",
      sections: [
        {
          id: "s22-coding",
          title: "Coding and recording, current to October 2026",
          pages: "821–836",
          blocks: [
            { type: "list", title: "Recording rules from the chapter", items: [
              "Record the **DSM name** with the code; several ICD-10-CM titles differ (below).",
              "**T codes** carry a 7th character: **A** active treatment, **D** routine care in recovery (pp. 822–823); the suicidal-behavior codes are **T14.91XA / T14.91XD** after the APA’s September 2022 correction.",
              "**Confirmed** = T74, **suspected** = T76; add **Z69** when the encounter is for mental health services to the **victim** or **perpetrator**; use **Z62.81-** / **Z91.41-** for **past history** (pp. 822–828).",
              "**Wandering**: code the mental disorder first, then Z91.83 (p. 834).",
              "**Lifestyle** problems that are symptoms: code only when a specific focus or directly affecting course; then code both (p. 833).",
              "A Z code can be the **principal diagnosis or reason for visit** when no disorder is present, and can be listed **with** a disorder when it is a focus of care (p. 821; Section I pp. 23–24)."
            ] },
            { type: "table", caption: "ICD-10-CM titles that differ from the DSM names (app note; titles from ICD-10-CM code tables, unchanged through October 2026)", head: ["Code", "DSM-5-TR name", "ICD-10-CM title"], rows: [
              ["T14.91X-", "Current suicidal behavior", "Suicide attempt"],
              ["R45.88", "Current nonsuicidal self-injury", "Nonsuicidal self-harm"],
              ["Z91.52", "History of nonsuicidal self-injury", "Personal history of nonsuicidal self-harm"],
              ["Z62.810", "History of physical abuse / of sexual abuse in childhood", "Personal history of physical and sexual abuse in childhood (one code)"],
              ["Z91.410", "History of partner violence, physical / sexual", "Personal history of adult physical and sexual abuse (one code)"],
              ["Z62.891", "Sibling relational problem", "Sibling rivalry"],
              ["Z62.820 / .821 / .822", "Parent–biological / adopted / foster child relational problem", "Parent–biological / adopted / foster child conflict"],
              ["Z63.0", "Relationship distress with spouse or intimate partner", "Problems in relationship with spouse or partner"],
              ["Z63.4", "Uncomplicated bereavement", "Disappearance and death of family member"],
              ["Z63.8", "High expressed emotion level within family", "Other specified problems related to primary support group"],
              ["Z58.6", "Lack of safe drinking water", "Inadequate drinking-water supply"],
              ["Z60.4", "Social exclusion or rejection", "Social exclusion and rejection"],
              ["Z65.4", "Victim of crime / of terrorism or torture", "Victim of crime and terrorism"],
              ["Z64.4", "Discord with social service provider", "Discord with counselors"],
              ["Z91.83", "Wandering associated with a mental disorder", "Wandering in diseases classified elsewhere"],
              ["E66.9", "Overweight or obesity", "Obesity, unspecified (ICD asks for a BMI code, Z68.-)"]
            ] },
            { type: "update", kind: "post", year: "2026", title: "Code changes since printing, and what did not change", source: "APA DSM-5-TR coding updates, September 2022, 2023, 2024 and 2025 (psychiatry.org); ICD-10-CM FY2023–FY2027 code tables (icd10data.com; the official CDC addenda were not consulted directly); checked October 27, 2026", text: "**Changed:** T14.91A/D → **T14.91XA/XD** (correction, September 2022); Z91.19 → **Z91.199** (October 1, 2022); Z59.1 → **Z59.10** (October 1, 2023); Z59.7 → **Z59.71** insufficient health insurance coverage and **Z59.72** insufficient welfare support (October 1, 2024). **Not changed** in any APA update or in FY2026–FY2027: Z91.51, Z91.52, R45.88, the T74/T76 abuse codes, Z69.-, Z62.-, Z63.-, Z55–Z56, Z59.01/.02/.41, Z58.6, Z60.-, Z65.-, Z64.-, Z72.-, Z75.-, Z76.5, Z91.49/.82/.83, R41.81, R41.83, E66.9 (E66.811–E66.813, obesity class 1–3, were added to ICD-10-CM on October 1, 2024 but the DSM text keeps E66.9). ICD-10-CM also has abuse codes the DSM does not list (T74.4 shaken infant syndrome, T74.5/T76.5 forced sexual exploitation, T74.6/T76.6 forced labor exploitation, T76.A financial abuse) and the history codes Z62.813–Z62.815 and Z91.42 (app note). No September 2026 APA update existed on the check date. **ICD-11** (outside the DSM): the equivalents sit in Chapter 24, “Factors influencing health status or contact with health services” (blocks QD50–QD9Z and QE00–QE9Z). Confirm every code against the tabular list in force on the date of service." },
            { type: "callout", kind: "culture", title: "Philippine context (outside the DSM; app guidance)", text: "Coding abuse does not discharge reporting duties. In the Philippines, child abuse falls under **RA 7610** (and **RA 11648**, 2022, which raised the age of sexual consent to 16), violence against women and their children under **RA 9262**, and workplace and public-space sexual harassment under **RA 11313**; the **Mental Health Act (RA 11036)** governs confidentiality. Follow hospital protocol and the women and children protection unit where you train. Verify current law before relying on it." }
          ]
        },
        {
          id: "s22-exam",
          title: "How this chapter is tested",
          pages: "821–836",
          blocks: [
            { type: "p", text: "App guidance. Sixteen pages of lists, so examiners pick the **definitions** and the **mechanics**." },
            { type: "list", title: "Traps to expect", items: [
              "Treating a Z code as a **diagnosis**: these conditions are not mental disorders, and a met diagnosis is coded in its own right (p. 821).",
              "**Suicidal behavior** needs some intent to die and an **initiated** act; a person talked out of it beforehand does not get the code (p. 822). **Injury is not required** (p. 822).",
              "**NSSI** is defined by the **absence of suicidal intent**, not by the method (p. 822).",
              "**A versus D** is about **phase of care** (active treatment versus routine recovery care), not the first versus a later visit in a strict sense: a **new clinician’s evaluation is A** (pp. 822–823).",
              "**Confirmed (T74) versus suspected (T76)**: code what is established (pp. 822–823).",
              "Reasonable physical discipline **without injury** is **not** abuse (p. 823); **excessive** discipline is **psychological** abuse (p. 825).",
              "Partner **neglect** requires a **dependent** partner (pp. 826–827).",
              "The **nonpartner adult** T codes are the **same** as the partner ones; only the Z69 codes differ (pp. 826–828).",
              "**Deployment status** (Z56.82) and **living in an institution** (Z59.3) exclude the **psychological reaction**, which is an adjustment disorder (pp. 830–831).",
              "**Wandering** needs the disorder coded first and excludes **akathisia** and **running away** (p. 834).",
              "**Uncomplicated bereavement** can look like an MDE; the grieving person calls the mood normal (p. 834).",
              "**Malingering** is **considered**, not diagnosed, from the four indicators; the difference from factitious disorder is the **external incentive** (p. 835).",
              "**Age-related cognitive decline** is **within normal limits** for age, after excluding a disorder and a neurological cause (pp. 835–836).",
              "**Borderline intellectual functioning** versus mild IDD turns on **adaptive** as well as intellectual function (p. 836).",
              "Printed codes that are now wrong: T14.91A/D, Z91.19, Z59.1, Z59.7 (app note)."
            ] },
            { type: "callout", kind: "mnemonic", title: "One line for the chapter (app, original)", text: "**“Reason to code, confirmed or suspected, A or D, victim or perpetrator, history last.”** Check against pp. 821–828: the four reasons (p. 821), T74/T76 (pp. 822–823), the 7th character (pp. 822–823), Z69 encounter codes and Z62/Z91 history codes (pp. 823–828)." }
          ]
        }
      ]
    }
  ]
});
