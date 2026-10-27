/* Disorder library: Chapter 22, Other Conditions That May Be a Focus of Clinical Attention (DSM-5-TR pp. 821–836).
   Codes as printed in the 2022 manual, with the APA’s later coding corrections and updates: T14.91A/D → T14.91XA/XD
   (correction, September 2022), Z91.19 → Z91.199 (October 1, 2022), Z59.1 → Z59.10 (October 1, 2023), Z59.7 →
   Z59.71 / Z59.72 (October 1, 2024). For the other codes, no change was found through the FY2027 tables (October 1,
   2026; secondary code pages) for the codes checked; not every code was checked individually, so confirm against
   the official tabular list. These conditions are NOT mental disorders and have NO
   criteria sets (p. 821): each entry’s `criteria` holds the manual’s definition, examples, exclusions and coding rule
   as labeled items, and `duration` is “Not applicable”. ICD-10-CM titles, ICD-11, law and clinical advice are
   outside the DSM and labeled. Abuse, suicidal behavior and self-injury are kept at the level of the manual’s
   definitions. */
(function () {
  var SRC = "APA DSM-5-TR coding corrections and updates, September 2022–2025 (psychiatry.org); ICD-10-CM FY2022–FY2027 code tables (icd10data.com code pages; official CDC addenda not consulted directly); checked October 27, 2026";
  var NC = "No change was found through the FY2027 tables for the codes checked; confirm against the official tabular list";
  var APA = " No APA DSM-5-TR coding update after those named here touches this entry, and no 2026 APA update existed on the check date; confirm against the official tabular list in force on the date of service.";
  var UNCH = " showed **no change through the FY2027 tables** (October 1, 2026) for the codes checked (not every code was checked individually; confirm against the official tabular list)";
  var NOTMD = "Not a mental disorder (p. 821); recorded beside any diagnosis that is met (app note)";
  var ICD11 = " **ICD-11** (outside the DSM): the equivalent factors sit in Chapter 24, “Factors influencing health status or contact with health services” (blocks QD50–QD9Z and QE00–QE9Z); individual ICD-11 codes were not verified for the app.";
  var CONF = "Confirmed or suspected event, A or D, then the encounter or history Z code (pp. 822–823)";
  var LAW = " **Philippine context** (outside the DSM; app guidance): coding does not replace reporting duties under **RA 7610** (children) and **RA 9262** (violence against women and their children); follow hospital protocol and the women and children protection unit, and verify current law.";
  var TNOTE = " **ICD-10-CM note** (outside the DSM): in T74 and T76 the digit after the point gives the type (0 neglect, 1 physical, 2 sexual, 3 psychological) and the next digit the age group (1 adult, 2 child); X is a placeholder and the 7th character is A, D or S (the DSM uses only A and D). ICD-10-CM also contains T74.4 shaken infant syndrome, T74.5/T76.5 forced sexual exploitation, T74.6/T76.6 forced labor exploitation, T76.A financial abuse (suspected) and T74.9/T76.9 unspecified maltreatment, which the DSM chapter does not list.";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "suicidal-behavior", ch: "ch22", sec: "s22-suicidal", pages: "822", critPages: "822",
      name: "Suicidal behavior", code: "T14.91XA",
      codes: [
        ["T14.91XA", "Current suicidal behavior, initial encounter (ICD-10-CM title “Suicide attempt, initial encounter”; record the DSM name)", "Printed T14.91A/D; corrected to T14.91XA/XD by the APA, September 2022"],
        ["T14.91XD", "Current suicidal behavior, subsequent encounter (ICD-10-CM title “Suicide attempt, subsequent encounter”; record the DSM name)", "Printed T14.91A/D; corrected to T14.91XA/XD by the APA, September 2022"],
        ["Z91.51", "History of suicidal behavior (ICD-10-CM title “Personal history of suicidal behavior”; record the DSM name)", NC]
      ],
      aka: ["suicide attempt (ICD-10-CM title)", "current suicidal behavior", "history of suicidal behavior", "T14.91XA / T14.91XD", "suicidal behavior disorder (Section III condition for further study, not this entry)"],
      essence: "Behavior that **could injure** the person, carried out with **at least some intent to die**; the intent may be **stated or inferred** from the act and its circumstances, and **no injury is required**. If the person is **talked out of it** or **changes their mind before starting**, the category does not apply. **T14.91XA** while in active treatment, **T14.91XD** in routine recovery care, **Z91.51** for a lifetime history (p. 822).",
      duration: "Not applicable",
      functioning: "Not described; the code records a behavior, not impairment (p. 822). " + NOTMD,
      mood: "Not part of the definition; the person’s mental disorder, if any, is diagnosed separately (app guidance)",
      criteria: [
        ["What", "Potentially self-injurious behavior carried out with **at least some intent to die** as a result (p. 822)."],
        ["Intent", "May be **explicit**, or **inferred** from the behavior or the circumstances (p. 822)."],
        ["Injury", "An attempt **may or may not** produce actual self-injury (p. 822)."],
        ["Excludes", "A person **dissuaded by someone else**, or who **changes their mind before initiating** the behavior (p. 822)."],
        ["Codes", "Current: **T14.91XA** initial encounter (active treatment: emergency department, evaluation by a new clinician), **T14.91XD** subsequent encounter (routine care during recovery: medication adjustment, aftercare). History at any time in life: **Z91.51** (p. 822; X placeholder per the APA September 2022 correction)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 822)"]],
      risk: ["The chapter gives no risk factors; suicide risk factors are covered under the individual disorders (app note).", "Safety (app guidance): ask about intent, plans, access to means and protective factors at every encounter, and act on current risk regardless of the code chosen."],
      differential: [
        { id: "nssi", how: "Self-inflicted damage likely to cause bleeding, bruising or pain **without suicidal intent**: intent, not method, separates the two (p. 822)." },
        { id: "borderline-pd", how: "Recurrent suicidal behavior is one of its criteria (Chapter 18); the T14.91 or Z91.51 code can sit beside the diagnosis (app guidance)." },
        { id: "mdd", how: "A depressive disorder is diagnosed in its own right; the behavior code records the act, not the disorder (app guidance)." },
        { name: "Suicidal ideation without an initiated act", how: "Not this category: the behavior must have been initiated (p. 822). ICD-10-CM has R45.851 for suicidal ideation, which the chapter does not list (ICD-10-CM; app note)." },
        { id: "malingering", how: "A threat or claimed attempt aimed at an external gain (for example admission or avoiding prosecution) raises malingering; assess risk first all the same (p. 835; app guidance)." }
      ],
      pearls: ["Two words carry the definition: **some intent** and **initiated** (p. 822).", "**No injury needed**: an attempt that harmed no one still counts (p. 822).", "A **new clinician’s** first evaluation is still **A** (p. 822).", "Write **T14.91XA / XD**, not the printed T14.91A / D (APA correction, September 2022).", "Section III keeps **suicidal behavior disorder** as a condition for further study; here it is a code, not a diagnosis (app note).", "Safety first (app guidance): a code is never a substitute for a risk assessment and plan."],
      cmp: { symptoms: "Initiated, potentially self-injurious act with at least some intent to die (stated or inferred)", exclusions: "Stopped or dissuaded before starting; self-injury without suicidal intent (NSSI)", prevalence: "Not given", course: "Current (A/D) or lifetime history (Z91.51)" },
      clues: [["Core picture", "A man brought to the emergency department after an overdose he says was meant to end his life; no lasting injury"], ["Key test", "Any intent to die + act initiated"], ["Code", "T14.91XA (initial), T14.91XD (subsequent), Z91.51 (history)"]],
      updates: upd("**T14.91XA / T14.91XD** (ICD-10-CM title “Suicide attempt”, initial / subsequent encounter; in ICD-10-CM since FY2018, with T14.91XS for sequela, which the DSM does not use). The manual printed **T14.91A / T14.91D** and a coding note calling A/D the “6th character”; the **APA’s September 2022 correction** (effective immediately) changed them to **T14.91XA / T14.91XD**, so A/D is the 7th character after an X placeholder, as in the abuse codes. **Z91.51** (“Personal history of suicidal behavior”) has existed since **October 1, 2021** and" + UNCH + ". ICD-10-CM also has **R45.851** suicidal ideations, not listed in the chapter. **App comparison**: DSM-5 (2013) had only a general Personal History of Self-Harm code (Z91.5); the text revision added specific current and history codes for suicidal behavior (Preface to DSM-5-TR)." + ICD11 + APA)
    },
    {
      id: "nssi", ch: "ch22", sec: "s22-nssi", pages: "822", critPages: "822",
      name: "Nonsuicidal self-injury", code: "R45.88",
      codes: [
        ["R45.88", "Current nonsuicidal self-injury (ICD-10-CM title “Nonsuicidal self-harm”; record the DSM name)", NC],
        ["Z91.52", "History of nonsuicidal self-injury (ICD-10-CM title “Personal history of nonsuicidal self-harm”; record the DSM name)", NC]
      ],
      aka: ["NSSI", "nonsuicidal self-harm (ICD-10-CM title)", "self-injury without suicidal intent", "nonsuicidal self-injury disorder (Section III condition for further study, not this entry)"],
      essence: "**Intentional, self-inflicted damage** to the body of a kind **likely to cause bleeding, bruising or pain** (cutting, burning, stabbing, hitting, excessive rubbing) **without suicidal intent**. **R45.88** when it is part of the current presentation, **Z91.52** for a history at any time in life (p. 822).",
      duration: "Not applicable",
      functioning: "Not described; the code records a behavior (p. 822). " + NOTMD,
      mood: "Not part of the definition (p. 822)",
      criteria: [
        ["What", "Deliberate damage a person inflicts on their own body, of a sort **likely to cause bleeding, bruising or pain** (p. 822)."],
        ["Examples", "Cutting, burning, stabbing, hitting, excessive rubbing (p. 822)."],
        ["Without", "**Suicidal intent**; any intent to die moves the act to suicidal behavior (p. 822)."],
        ["Codes", "**R45.88** current (the behavior is part of the presentation); **Z91.52** history (occurred at any time in life) (p. 822)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 822)"]],
      risk: ["The chapter gives no risk factors (p. 822).", "Safety (app guidance): ask about suicidal intent each time; NSSI and suicidal behavior can occur in the same person at different times."],
      differential: [
        { id: "suicidal-behavior", how: "Same acts can occur, but with **at least some intent to die** (p. 822)." },
        { id: "borderline-pd", how: "Self-injury is among its criteria; record R45.88 beside the diagnosis when it is a focus (Chapter 18; app guidance)." },
        { name: "Stereotypic self-injurious movements", how: "Repetitive, driven self-hitting or biting in a neurodevelopmental context belongs to stereotypic movement disorder with self-injurious behavior (Chapter 1; app guidance)." },
        { name: "Trichotillomania and excoriation disorder", how: "Hair pulling and skin picking are coded in the obsessive-compulsive chapter, not as NSSI (Chapter 6; app guidance)." },
        { id: "factitious", how: "Self-inflicted injury presented as illness to take on the sick role is factitious disorder (Chapter 9; app guidance)." }
      ],
      pearls: ["Defined by the **absence of suicidal intent**, not by the method (p. 822).", "Damage must be likely to cause **bleeding, bruising or pain** (p. 822).", "ICD-10-CM says “self-**harm**”, DSM says “self-**injury**”: record the DSM name (app note).", "Section III keeps **NSSI disorder** as a condition for further study (app note).", "Re-ask intent at each visit (app guidance)."],
      cmp: { symptoms: "Deliberate self-inflicted bodily damage likely to bleed, bruise or hurt, no suicidal intent", exclusions: "Any intent to die (suicidal behavior); stereotypies; hair pulling and skin picking", prevalence: "Not given", course: "Current (R45.88) or history (Z91.52)" },
      clues: [["Core picture", "A teenager who cuts her forearm when overwhelmed and is clear she has never wanted to die"], ["Key test", "No suicidal intent"], ["Code", "R45.88 (current), Z91.52 (history)"]],
      updates: upd("**R45.88** (ICD-10-CM title “Nonsuicidal self-harm”) and **Z91.52** (“Personal history of nonsuicidal self-harm”) both entered ICD-10-CM on **October 1, 2021**; each" + UNCH + ". No APA DSM-5-TR update changed them. **App comparison**: DSM-5 (2013) had only a general Personal History of Self-Harm code (Z91.5); the text revision added specific NSSI codes (Preface to DSM-5-TR), while Section III keeps the proposed NSSI disorder." + ICD11 + APA)
    },
    {
      id: "child-physical-abuse", ch: "ch22", sec: "s22-child-abuse", pages: "823", critPages: "823",
      name: "Child physical abuse", code: "T74.12XA",
      codes: [
        ["T74.12XA", "Child physical abuse, confirmed, initial encounter", NC],
        ["T74.12XD", "Child physical abuse, confirmed, subsequent encounter", NC],
        ["T76.12XA", "Child physical abuse, suspected, initial encounter", NC],
        ["T76.12XD", "Child physical abuse, suspected, subsequent encounter", NC],
        ["Z69.010", "Encounter for mental health services for victim of child physical abuse by parent", NC],
        ["Z69.020", "Encounter for mental health services for victim of nonparental child physical abuse", NC],
        ["Z62.810", "Personal history (past history) of physical abuse in childhood (ICD-10-CM title “Personal history of physical and sexual abuse in childhood”; record the DSM name)", NC],
        ["Z69.011", "Encounter for mental health services for perpetrator of parental child physical abuse", NC],
        ["Z69.021", "Encounter for mental health services for perpetrator of nonparental child physical abuse", NC]
      ],
      aka: ["physical abuse of a child", "nonaccidental injury (NAI)", "child maltreatment, physical", "battered child (older term)"],
      essence: "**Nonaccidental physical injury** to a child, from minor bruises to severe fractures or death, by a **parent, caregiver or other responsible person**, by any method. It is abuse **whether or not harm was intended**; **reasonable** physical discipline that leaves **no bodily injury** is not abuse. Confirmed **T74.12X-**, suspected **T76.12X-** (p. 823).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition; trauma-related and other disorders are assessed in their own right (app guidance)",
      criteria: [
        ["What", "Injury to a child that is not accidental, anywhere on the scale from minor bruising to severe fractures or death (p. 823)."],
        ["By whom", "A parent, caregiver or other person responsible for the child; any method, such as hitting with a hand or object, kicking, shaking, throwing, burning or choking (p. 823)."],
        ["Intent", "Counts as abuse even if the caregiver did not mean to hurt the child (p. 823)."],
        ["Excludes", "Reasonable physical discipline such as spanking or paddling that causes **no bodily injury** (p. 823)."],
        ["Codes", "Confirmed **T74.12XA/XD**; suspected **T76.12XA/XD**; mental health services to the victim **Z69.010** (parent) or **Z69.020** (nonparental); to the perpetrator **Z69.011** or **Z69.021**; past history **Z62.810** (p. 823)."],
        ["Care", "Abuse codes carry **legal implications**; assess and code carefully, and use the suspected code when the event is not established (p. 822)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 823)"]],
      risk: ["The chapter gives no risk factors (p. 823).", "Safety (app guidance): ensure the child’s immediate safety and follow mandated reporting before anything else."],
      differential: [
        { id: "child-psychological-abuse", how: "Excessive discipline that stops short of injury is psychological abuse; physical and sexual acts are excluded from that category (p. 825)." },
        { id: "child-neglect", how: "Harm from deprivation of needs (supervision, food, medical care) rather than from inflicted force (p. 824)." },
        { id: "parent-child-relational", how: "Arguments that escalate to **threats** of violence without injury are a relational problem (p. 829; app reading)." },
        { name: "Accidental injury and medical causes of bruising or fractures", how: "The injury must be nonaccidental; pediatric and forensic assessment decides (app guidance)." },
        { id: "factitious", how: "Factitious disorder imposed on another: a caregiver falsifies or induces illness in the child; it is coded as a disorder in the perpetrator, and the child may also receive an abuse code (Chapter 9; app guidance)." }
      ],
      pearls: ["**Intent to hurt is irrelevant**: the injury defines it (p. 823).", "Reasonable discipline **without injury** is not abuse (p. 823).", "**T74** confirmed, **T76** suspected; **.12** = physical, child (pp. 822–823; app reading).", "Z62.810 is shared with child sexual abuse history (p. 824; ICD-10-CM title covers both).", "Report according to local law (app guidance)."],
      cmp: { symptoms: "Nonaccidental injury by a caregiver, any method, minor to fatal", exclusions: "Reasonable discipline without injury; accidents", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A preschooler with bruises of different ages and an explanation that does not fit, under investigation"], ["Key test", "Nonaccidental injury; intent irrelevant"], ["Code", "T74.12XA (confirmed) or T76.12XA (suspected)"]],
      updates: upd("The T74.12X-, T76.12X-, Z69.0- and Z62.810 codes" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM title of **Z62.810** is “Personal history of physical and sexual abuse in childhood” (one code for both histories)." + TNOTE + LAW + ICD11 + APA)
    },
    {
      id: "child-sexual-abuse", ch: "ch22", sec: "s22-child-abuse", pages: "823–824", critPages: "823–824",
      name: "Child sexual abuse", code: "T74.22XA",
      codes: [
        ["T74.22XA", "Child sexual abuse, confirmed, initial encounter", NC],
        ["T74.22XD", "Child sexual abuse, confirmed, subsequent encounter", NC],
        ["T76.22XA", "Child sexual abuse, suspected, initial encounter", NC],
        ["T76.22XD", "Child sexual abuse, suspected, subsequent encounter", NC],
        ["Z69.010", "Encounter for mental health services for victim of child sexual abuse by parent", NC],
        ["Z69.020", "Encounter for mental health services for victim of nonparental child sexual abuse", NC],
        ["Z62.810", "Personal history (past history) of sexual abuse in childhood (ICD-10-CM title “Personal history of physical and sexual abuse in childhood”; record the DSM name)", NC],
        ["Z69.011", "Encounter for mental health services for perpetrator of parental child sexual abuse", NC],
        ["Z69.021", "Encounter for mental health services for perpetrator of nonparental child sexual abuse", NC]
      ],
      aka: ["sexual abuse of a child", "CSA", "child maltreatment, sexual", "noncontact sexual exploitation of a child"],
      essence: "**Any sexual act involving a child** meant to give **sexual gratification** to a parent, caregiver or other responsible person, including **contact** acts and **noncontact exploitation** (forcing, tricking, enticing, threatening or pressuring a child into acts for others’ gratification without direct contact). Confirmed **T74.22X-**, suspected **T76.22X-** (pp. 823–824).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition; trauma-related and other disorders are assessed in their own right (app guidance)",
      criteria: [
        ["What", "Any sexual act involving a child intended to provide sexual gratification to a parent, caregiver or other person responsible for the child (pp. 823–824)."],
        ["Includes", "The manual lists genital fondling, penetration, incest, rape, sodomy and indecent exposure (p. 824)."],
        ["Noncontact", "Exploitation without direct physical contact: the child is forced, tricked, enticed, threatened or pressured into acts for the sexual gratification of others (p. 824)."],
        ["Codes", "Confirmed **T74.22XA/XD**; suspected **T76.22XA/XD**; victim **Z69.010** (parent) or **Z69.020** (nonparental); perpetrator **Z69.011** or **Z69.021**; past history **Z62.810** (p. 824)."],
        ["Care", "Legal implications call for careful assessment and coding (p. 822)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 823–824)"]],
      risk: ["The chapter gives no risk factors (pp. 823–824).", "Safety (app guidance): secure the child’s safety, involve the child protection team, and avoid repeated or leading interviews."],
      differential: [
        { id: "child-physical-abuse", how: "Nonaccidental physical injury without a sexual purpose (p. 823)." },
        { id: "child-psychological-abuse", how: "Verbal or symbolic acts; physical and sexual acts are excluded from it (p. 825)." },
        { id: "ptsd", how: "A possible consequence, diagnosed on its own criteria; the abuse code records the event (Chapter 7; app guidance)." }
      ],
      pearls: ["**Noncontact** exploitation counts (p. 824).", "Defined by the **purpose**: sexual gratification of the responsible adult or of others (pp. 823–824).", "Same Z69 and Z62.810 codes as child physical abuse; only the T code differs (pp. 823–824).", "Keep documentation factual and in the child’s words (app guidance)."],
      cmp: { symptoms: "Contact or noncontact sexual acts involving a child for an adult’s or others’ gratification", exclusions: "Physical abuse without sexual purpose; psychological abuse", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A disclosure by a child of sexual acts by a caregiver, under investigation"], ["Key test", "Sexual purpose; contact not required"], ["Code", "T74.22XA (confirmed) or T76.22XA (suspected)"]],
      updates: upd("The T74.22X-, T76.22X-, Z69.0- and Z62.810 codes" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM has separate **T74.5-/T76.5-** codes for forced sexual exploitation and history code **Z62.813** (personal history of forced labor or sexual exploitation in childhood), which the DSM chapter does not list." + TNOTE + " **Philippine context** (outside the DSM; app guidance): RA 7610 and **RA 11648** (2022, age of sexual consent raised to 16); verify current law and follow protocol." + ICD11 + APA)
    },
    {
      id: "child-neglect", ch: "ch22", sec: "s22-child-neglect-psych", pages: "824", critPages: "824",
      name: "Child neglect", code: "T74.02XA",
      codes: [
        ["T74.02XA", "Child neglect, confirmed, initial encounter", NC],
        ["T74.02XD", "Child neglect, confirmed, subsequent encounter", NC],
        ["T76.02XA", "Child neglect, suspected, initial encounter", NC],
        ["T76.02XD", "Child neglect, suspected, subsequent encounter", NC],
        ["Z69.010", "Encounter for mental health services for victim of child neglect by parent", NC],
        ["Z69.020", "Encounter for mental health services for victim of nonparental child neglect", NC],
        ["Z62.812", "Personal history (past history) of neglect in childhood", NC],
        ["Z69.011", "Encounter for mental health services for perpetrator of parental child neglect", NC],
        ["Z69.021", "Encounter for mental health services for perpetrator of nonparental child neglect", NC]
      ],
      aka: ["neglect of a child", "child maltreatment, neglect", "abandonment", "supervisory neglect"],
      essence: "A confirmed or suspected **egregious act or omission** by a parent or caregiver that **deprives** a child of **basic, age-appropriate needs** and causes, or could reasonably cause, **physical or psychological harm**: abandonment, poor supervision, unmet emotional needs, or failure to provide education, medical care, food, shelter or clothing. Confirmed **T74.02X-**, suspected **T76.02X-** (p. 824).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition (p. 824)",
      criteria: [
        ["What", "An egregious act or omission by a parent or other caregiver that leaves the child without the basic needs appropriate to their age (p. 824)."],
        ["Harm", "Results in physical or psychological harm, or has a reasonable potential to do so (p. 824)."],
        ["Forms", "Abandonment; lack of appropriate supervision; failure to meet emotional or psychological needs; failure to provide necessary education, medical care, nourishment, shelter or clothing (p. 824)."],
        ["Codes", "Confirmed **T74.02XA/XD**; suspected **T76.02XA/XD**; victim **Z69.010** (parent) or **Z69.020** (nonparental); perpetrator **Z69.011** or **Z69.021**; past history **Z62.812** (p. 824)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 824)"]],
      risk: ["The chapter gives no risk factors (p. 824).", "Consider economic, housing and parental mental health problems as context, coded separately when they are a focus (app guidance)."],
      differential: [
        { id: "child-psychological-abuse", how: "An **act** (verbal or symbolic) that harms, rather than deprivation of needs (pp. 824–825)." },
        { id: "economic-problem", how: "Deprivation from poverty alone, without an egregious caregiver act or omission, is an economic problem (pp. 824, 831–832; app reading)." },
        { id: "rad", how: "A possible consequence of severe insufficient care in early childhood, diagnosed on its own criteria (Chapter 7; app guidance)." },
        { id: "dsed", how: "Also follows insufficient care; indiscriminate social behavior rather than inhibited attachment (Chapter 7; app guidance)." }
      ],
      pearls: ["Neglect is mainly an **omission**; harm may be **actual or potential** (p. 824).", "Education and **medical care** failures count (p. 824).", "History code **Z62.812** (neglect), not Z62.810 (p. 824).", "Report according to local law (app guidance)."],
      cmp: { symptoms: "Caregiver act or omission depriving a child of basic needs, with actual or potential harm", exclusions: "Poverty alone without caregiver fault; psychological abuse", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A school-age child left alone for days, missing meals and school, confirmed by social services"], ["Key test", "Deprivation of basic needs by the caregiver"], ["Code", "T74.02XA (confirmed) or T76.02XA (suspected)"]],
      updates: upd("The T74.02X-, T76.02X-, Z69.0- and Z62.812 codes" + UNCH + "; no APA DSM-5-TR update changed them." + TNOTE + LAW + ICD11 + APA)
    },
    {
      id: "child-psychological-abuse", ch: "ch22", sec: "s22-child-neglect-psych", pages: "825", critPages: "825",
      name: "Child psychological abuse", code: "T74.32XA",
      codes: [
        ["T74.32XA", "Child psychological abuse, confirmed, initial encounter", NC],
        ["T74.32XD", "Child psychological abuse, confirmed, subsequent encounter", NC],
        ["T76.32XA", "Child psychological abuse, suspected, initial encounter", NC],
        ["T76.32XD", "Child psychological abuse, suspected, subsequent encounter", NC],
        ["Z69.010", "Encounter for mental health services for victim of child psychological abuse by parent", NC],
        ["Z69.020", "Encounter for mental health services for victim of nonparental child psychological abuse", NC],
        ["Z62.811", "Personal history (past history) of psychological abuse in childhood", NC],
        ["Z69.011", "Encounter for mental health services for perpetrator of parental child psychological abuse", NC],
        ["Z69.021", "Encounter for mental health services for perpetrator of nonparental child psychological abuse", NC]
      ],
      aka: ["emotional abuse of a child", "child maltreatment, psychological", "verbal abuse of a child"],
      essence: "**Nonaccidental verbal or symbolic acts** by a parent or caregiver that cause, or could reasonably cause, **significant psychological harm**; physical and sexual acts are excluded. Examples: berating and humiliating, threats, harming or threatening what the child loves, **confining**, egregious **scapegoating**, making the child hurt themselves, and **excessive discipline** short of physical abuse. Confirmed **T74.32X-**, suspected **T76.32X-** (p. 825).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition (p. 825)",
      criteria: [
        ["What", "Nonaccidental verbal or symbolic acts by a parent or caregiver with actual or reasonably potential **significant psychological harm** (p. 825)."],
        ["Excludes", "Physical and sexual abusive acts, which have their own categories (p. 825)."],
        ["Examples", "Berating, disparaging or humiliating; threatening; harming or abandoning, or threatening to, people or things the child cares about; confining (tying, binding to furniture, shutting in a small space such as a closet); egregious scapegoating; coercing self-inflicted pain; disciplining excessively in frequency or duration, physically or not (p. 825)."],
        ["Codes", "Confirmed **T74.32XA/XD**; suspected **T76.32XA/XD**; victim **Z69.010** or **Z69.020**; perpetrator **Z69.011** or **Z69.021**; past history **Z62.811** (p. 825)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 825)"]],
      risk: ["The chapter gives no risk factors (p. 825)."],
      differential: [
        { id: "child-physical-abuse", how: "Inflicted physical injury; reasonable discipline without injury is not abuse at all (p. 823)." },
        { id: "child-neglect", how: "Deprivation of needs by omission rather than harmful acts (p. 824)." },
        { id: "parent-child-relational", how: "Hostility, scapegoating or threats within a strained relationship without significant psychological harm are a relational problem (p. 829; app reading)." },
        { id: "family-environment", how: "A child harmed by **parental conflict** between the parents (Z62.898) rather than by acts directed at the child (p. 830)." }
      ],
      pearls: ["**Excessive** discipline below the level of physical abuse is **psychological** abuse (p. 825).", "**Confining** a child (tying, closets) is listed here (p. 825).", "History code **Z62.811** (p. 825).", "Harm may be **actual or potential** (p. 825)."],
      cmp: { symptoms: "Verbal or symbolic caregiver acts with significant psychological harm: humiliation, threats, confinement, scapegoating, excessive discipline", exclusions: "Physical and sexual acts; relational problems without significant harm", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A child regularly locked in a closet and told she is worthless, confirmed by social services"], ["Key test", "Verbal or symbolic act, significant psychological harm"], ["Code", "T74.32XA (confirmed) or T76.32XA (suspected)"]],
      updates: upd("The T74.32X-, T76.32X-, Z69.0- and Z62.811 codes" + UNCH + "; no APA DSM-5-TR update changed them." + TNOTE + LAW + ICD11 + APA)
    },
    {
      id: "partner-violence-physical", ch: "ch22", sec: "s22-partner-violence", pages: "826", critPages: "826",
      name: "Spouse or partner violence, physical", code: "T74.11XA",
      codes: [
        ["T74.11XA", "Spouse or partner violence, physical, confirmed, initial encounter", NC],
        ["T74.11XD", "Spouse or partner violence, physical, confirmed, subsequent encounter", NC],
        ["T76.11XA", "Spouse or partner violence, physical, suspected, initial encounter", NC],
        ["T76.11XD", "Spouse or partner violence, physical, suspected, subsequent encounter", NC],
        ["Z69.11", "Encounter for mental health services for victim of spouse or partner violence, physical", NC],
        ["Z91.410", "Personal history (past history) of spouse or partner violence, physical (ICD-10-CM title “Personal history of adult physical and sexual abuse”; record the DSM name)", NC],
        ["Z69.12", "Encounter for mental health services for perpetrator of spouse or partner violence, physical", NC]
      ],
      aka: ["intimate partner violence, physical (IPV)", "domestic violence, physical", "spousal abuse"],
      essence: "**Nonaccidental physical force** against an intimate partner that causes, or could reasonably cause, **physical harm**, **or that evokes significant fear**: from shoving and slapping to strangling, holding the head under water or using a weapon. **Self-protective acts** are excluded. Confirmed **T74.11X-**, suspected **T76.11X-** (p. 826).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition; fear is one route to the category (p. 826)",
      criteria: [
        ["What", "Nonaccidental acts of physical force with actual or reasonably potential physical harm to the partner, or that evoke significant fear (p. 826)."],
        ["Examples", "A long list running from shoving, slapping, pinching and pulling hair, through restraining, shaking, throwing, biting, kicking and hitting, to burning, poisoning, strangling or smothering, holding the head under water and using a weapon (p. 826)."],
        ["Excludes", "Acts to physically protect oneself or one’s partner (p. 826)."],
        ["Codes", "Confirmed **T74.11XA/XD**; suspected **T76.11XA/XD**; victim **Z69.11**; perpetrator **Z69.12**; past history **Z91.410** (p. 826)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 826)"]],
      risk: ["The chapter gives no risk factors (p. 826).", "Safety (app guidance): ask privately, assess immediate danger (strangulation and weapons are high-risk markers) and make a safety plan."],
      differential: [
        { id: "partner-violence-sexual", how: "Force or coercion toward a sexual act (p. 826)." },
        { id: "partner-abuse-psychological", how: "Verbal or symbolic acts (threats, isolation, economic control) without physical force (p. 827)." },
        { id: "adult-abuse-nonpartner", how: "Same T codes, but the abuser is not an intimate partner; victim code Z69.81 (pp. 827–828)." },
        { id: "partner-relationship-distress", how: "Conflict without nonaccidental force or fear-evoking acts (p. 829; app reading)." },
        { id: "ied", how: "A perpetrator’s recurrent impulsive aggression may meet intermittent explosive disorder; the abuse code records the event (Chapter 15; app guidance)." }
      ],
      pearls: ["Fear alone can qualify: **injury is not required** (p. 826).", "**Self-defense is excluded** (p. 826).", "Victim **Z69.11**, perpetrator **Z69.12**, history **Z91.410** (p. 826).", "ICD-10-CM T codes do not record the relationship; the DSM name does (app note)."],
      cmp: { symptoms: "Nonaccidental physical force against a partner causing or risking harm, or evoking significant fear", exclusions: "Self-protective acts; conflict without force", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A woman whose husband has repeatedly grabbed her throat in arguments, documented by police"], ["Key test", "Force with harm, risk of harm or fear"], ["Code", "T74.11XA + Z69.11 (victim encounter)"]],
      updates: upd("The T74.11X-, T76.11X-, Z69.11, Z69.12 and Z91.410 codes" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM title of **Z91.410** is “Personal history of adult physical and sexual abuse” (shared with partner sexual violence)." + TNOTE + " **Philippine context** (outside the DSM; app guidance): **RA 9262** covers violence against women and their children, including physical, sexual, psychological and economic abuse; verify current law and follow protocol." + ICD11 + APA)
    },
    {
      id: "partner-violence-sexual", ch: "ch22", sec: "s22-partner-violence", pages: "826", critPages: "826",
      name: "Spouse or partner violence, sexual", code: "T74.21XA",
      codes: [
        ["T74.21XA", "Spouse or partner violence, sexual, confirmed, initial encounter", NC],
        ["T74.21XD", "Spouse or partner violence, sexual, confirmed, subsequent encounter", NC],
        ["T76.21XA", "Spouse or partner violence, sexual, suspected, initial encounter", NC],
        ["T76.21XD", "Spouse or partner violence, sexual, suspected, subsequent encounter", NC],
        ["Z69.81", "Encounter for mental health services for victim of spouse or partner violence, sexual", NC],
        ["Z91.410", "Personal history (past history) of spouse or partner violence, sexual (ICD-10-CM title “Personal history of adult physical and sexual abuse”; record the DSM name)", NC],
        ["Z69.12", "Encounter for mental health services for perpetrator of spouse or partner violence, sexual", NC]
      ],
      aka: ["intimate partner sexual violence", "marital rape", "domestic violence, sexual"],
      essence: "Use of **physical force or psychological coercion** to make a partner engage in a sexual act **against their will**, **completed or not**, and any sexual act with a partner **unable to consent**. Confirmed **T74.21X-**, suspected **T76.21X-**; note the victim encounter code is **Z69.81**, not Z69.11 (p. 826).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition (p. 826)",
      criteria: [
        ["What", "Physical force or psychological coercion to compel the partner into a sexual act against their will, whether or not the act is completed (p. 826)."],
        ["Also", "Sexual acts with an intimate partner who cannot consent (p. 826)."],
        ["Codes", "Confirmed **T74.21XA/XD**; suspected **T76.21XA/XD**; victim **Z69.81**; perpetrator **Z69.12**; past history **Z91.410** (p. 826)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 826)"]],
      risk: ["The chapter gives no risk factors (p. 826).", "Safety (app guidance): private interview, immediate safety, medical and forensic care if recent."],
      differential: [
        { id: "partner-violence-physical", how: "Physical force without a sexual act; victim code Z69.11 (p. 826)." },
        { id: "adult-abuse-nonpartner", how: "Same T codes when the perpetrator is not a partner; victim Z69.81, perpetrator Z69.82 (p. 828)." },
        { id: "partner-relationship-distress", how: "Sexual disagreement without force or coercion is relational distress (p. 829; app reading)." }
      ],
      pearls: ["**Coercion** counts, not only force; **attempts** count (p. 826).", "Inability to consent (for example intoxication or cognitive impairment) makes any act qualify (p. 826; examples are app guidance).", "Victim code is the odd one out: **Z69.81** (p. 826).", "History code **Z91.410** is shared with physical violence (p. 826)."],
      cmp: { symptoms: "Forced or coerced sexual act with a partner, completed or attempted, or with a partner unable to consent", exclusions: "Consensual disagreement; physical violence without a sexual act", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A woman coerced by repeated threats into sex with her husband, now in first psychiatric contact"], ["Key test", "Against the partner’s will or without capacity to consent"], ["Code", "T74.21XA + Z69.81 (victim encounter)"]],
      updates: upd("The T74.21X-, T76.21X-, Z69.81, Z69.12 and Z91.410 codes" + UNCH + "; no APA DSM-5-TR update changed them." + TNOTE + " **Philippine context** (outside the DSM; app guidance): RA 9262 includes sexual violence by a partner; verify current law and follow protocol." + ICD11 + APA)
    },
    {
      id: "partner-neglect", ch: "ch22", sec: "s22-partner-neglect-psych", pages: "826–827", critPages: "826–827",
      name: "Spouse or partner neglect", code: "T74.01XA",
      codes: [
        ["T74.01XA", "Spouse or partner neglect, confirmed, initial encounter", NC],
        ["T74.01XD", "Spouse or partner neglect, confirmed, subsequent encounter", NC],
        ["T76.01XA", "Spouse or partner neglect, suspected, initial encounter", NC],
        ["T76.01XD", "Spouse or partner neglect, suspected, subsequent encounter", NC],
        ["Z69.11", "Encounter for mental health services for victim of spouse or partner neglect", NC],
        ["Z91.412", "Personal history (past history) of spouse or partner neglect", NC],
        ["Z69.12", "Encounter for mental health services for perpetrator of spouse or partner neglect", NC]
      ],
      aka: ["neglect of a dependent partner", "intimate partner neglect"],
      essence: "An **egregious act or omission** by one partner that leaves a **dependent partner** without **basic needs**, with actual or potential physical or psychological harm. Written for relationships where one partner relies heavily on the other for care or daily life because of **physical, psychological/intellectual or cultural** limitations (for example, unable to cope in a **foreign culture**). Confirmed **T74.01X-**, suspected **T76.01X-** (pp. 826–827).",
      duration: "Not applicable",
      functioning: "The dependent partner cannot meet basic needs alone; that dependency defines the context (pp. 826–827). " + NOTMD,
      mood: "Not part of the definition (pp. 826–827)",
      criteria: [
        ["What", "An egregious act or omission by one partner that leaves a dependent partner without basic needs (p. 826)."],
        ["Harm", "Results, or could reasonably result, in physical or psychological harm (p. 826)."],
        ["Context", "One partner is extremely dependent on the other for care or for help with ordinary daily activities, through substantial physical, psychological/intellectual or cultural limitation; example: unable to communicate or manage everyday life while living in a foreign culture (pp. 826–827)."],
        ["Codes", "Confirmed **T74.01XA/XD**; suspected **T76.01XA/XD**; victim **Z69.11**; perpetrator **Z69.12**; past history **Z91.412** (pp. 826–827)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 826–827)"]],
      risk: ["The chapter gives no risk factors; dependency is the defining context (pp. 826–827)."],
      differential: [
        { id: "partner-abuse-psychological", how: "Harmful verbal or symbolic acts; no dependency is required (p. 827)." },
        { id: "partner-relationship-distress", how: "An able partner who feels ignored or unsupported has relationship distress, not neglect (p. 829; app reading)." },
        { id: "adult-abuse-nonpartner", how: "Care deprivation by a non-partner (for example an adult child) has no neglect category in the nonpartner entry, which lists physical, sexual and psychological abuse only (p. 828; app reading)." }
      ],
      pearls: ["The key word is **dependent** (pp. 826–827).", "**Cultural** limitation counts: a partner isolated in a foreign culture (pp. 826–827).", "History **Z91.412** (p. 827).", "Victim and perpetrator Z69.11 / Z69.12 are shared with physical violence (pp. 826–827)."],
      cmp: { symptoms: "Deprivation of a dependent partner’s basic needs with actual or potential harm", exclusions: "Able partner feeling neglected (relational distress); psychological abuse", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A wife with advanced multiple sclerosis left unfed and unwashed for days by her husband"], ["Key test", "Dependent partner deprived of basic needs"], ["Code", "T74.01XA (confirmed) or T76.01XA (suspected)"]],
      updates: upd("The T74.01X-, T76.01X-, Z69.11, Z69.12 and Z91.412 codes" + UNCH + "; no APA DSM-5-TR update changed them." + TNOTE + ICD11 + APA)
    },
    {
      id: "partner-abuse-psychological", ch: "ch22", sec: "s22-partner-neglect-psych", pages: "827", critPages: "827",
      name: "Spouse or partner abuse, psychological", code: "T74.31XA",
      codes: [
        ["T74.31XA", "Spouse or partner abuse, psychological, confirmed, initial encounter", NC],
        ["T74.31XD", "Spouse or partner abuse, psychological, confirmed, subsequent encounter", NC],
        ["T76.31XA", "Spouse or partner abuse, psychological, suspected, initial encounter", NC],
        ["T76.31XD", "Spouse or partner abuse, psychological, suspected, subsequent encounter", NC],
        ["Z69.11", "Encounter for mental health services for victim of spouse or partner psychological abuse", NC],
        ["Z91.411", "Personal history (past history) of spouse or partner psychological abuse", NC],
        ["Z69.12", "Encounter for mental health services for perpetrator of spouse or partner psychological abuse", NC]
      ],
      aka: ["emotional abuse by a partner", "coercive control (outside the DSM)", "gaslighting", "economic abuse"],
      essence: "**Nonaccidental verbal or symbolic acts** by one partner with actual or potential **significant harm** to the other: berating, **interrogating**, restricting movement, **blocking access to help**, threats, harming what the victim cares about, **controlling money**, **isolating**, **stalking** and **gaslighting**. Confirmed **T74.31X-**, suspected **T76.31X-** (p. 827).",
      duration: "Not applicable",
      functioning: "Not described in the entry; a past history can shape diagnosis and treatment response (pp. 822–823). " + NOTMD,
      mood: "Not part of the definition (p. 827)",
      criteria: [
        ["What", "Nonaccidental verbal or symbolic acts by one partner with actual or reasonably potential significant harm to the other (p. 827)."],
        ["Examples", "Berating or humiliating; interrogating; restricting freedom to come and go; obstructing access to police, legal, protective or medical help; threatening physical harm or sexual assault; harming or threatening people or things the victim cares about; unwarranted restriction of economic resources; isolation from family, friends or support; stalking; trying to make the victim doubt their sanity (“gaslighting”) (p. 827)."],
        ["Codes", "Confirmed **T74.31XA/XD**; suspected **T76.31XA/XD**; victim **Z69.11**; perpetrator **Z69.12**; past history **Z91.411** (p. 827)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 827)"]],
      risk: ["The chapter gives no risk factors (p. 827).", "Safety (app guidance): threats, stalking and escalating control can precede physical violence; assess danger and plan."],
      differential: [
        { id: "partner-violence-physical", how: "Physical force, or acts that evoke fear through force (p. 826)." },
        { id: "partner-neglect", how: "Deprivation of a **dependent** partner’s needs (pp. 826–827)." },
        { id: "partner-relationship-distress", how: "Conflict, criticism and withdrawal in both directions without the controlling acts listed or significant harm (p. 829; app reading)." },
        { id: "adult-abuse-nonpartner", how: "The same acts by a non-partner adult; victim Z69.81 (pp. 827–828)." }
      ],
      pearls: ["**Economic control, isolation, stalking, gaslighting** are all listed (p. 827).", "No physical act is needed (p. 827).", "History **Z91.411** (p. 827).", "“Coercive control” is a research and legal term, not DSM wording (outside the DSM)."],
      cmp: { symptoms: "Controlling and degrading verbal or symbolic acts: interrogation, isolation, economic restriction, stalking, gaslighting", exclusions: "Mutual conflict without such acts (relational distress); physical violence", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A man whose wife controls all his money, takes his phone and forbids contact with his family"], ["Key test", "Verbal or symbolic acts with significant harm"], ["Code", "T74.31XA (confirmed) + Z69.11 if a victim encounter"]],
      updates: upd("The T74.31X-, T76.31X-, Z69.11, Z69.12 and Z91.411 codes" + UNCH + "; no APA DSM-5-TR update changed them." + TNOTE + " **Philippine context** (outside the DSM; app guidance): RA 9262 includes psychological and economic abuse; verify current law." + ICD11 + APA)
    },
    {
      id: "adult-abuse-nonpartner", ch: "ch22", sec: "s22-adult-nonpartner", pages: "827–828", critPages: "827–828",
      name: "Adult abuse by nonspouse or nonpartner", code: "T74.11XA",
      codes: [
        ["T74.11XA", "Adult physical abuse by nonspouse or nonpartner, confirmed, initial encounter", NC],
        ["T74.11XD", "Adult physical abuse by nonspouse or nonpartner, confirmed, subsequent encounter", NC],
        ["T76.11XA", "Adult physical abuse by nonspouse or nonpartner, suspected, initial encounter", NC],
        ["T76.11XD", "Adult physical abuse by nonspouse or nonpartner, suspected, subsequent encounter", NC],
        ["T74.21XA", "Adult sexual abuse by nonspouse or nonpartner, confirmed, initial encounter", NC],
        ["T74.21XD", "Adult sexual abuse by nonspouse or nonpartner, confirmed, subsequent encounter", NC],
        ["T76.21XA", "Adult sexual abuse by nonspouse or nonpartner, suspected, initial encounter", NC],
        ["T76.21XD", "Adult sexual abuse by nonspouse or nonpartner, suspected, subsequent encounter", NC],
        ["T74.31XA", "Adult psychological abuse by nonspouse or nonpartner, confirmed, initial encounter", NC],
        ["T74.31XD", "Adult psychological abuse by nonspouse or nonpartner, confirmed, subsequent encounter", NC],
        ["T76.31XA", "Adult psychological abuse by nonspouse or nonpartner, suspected, initial encounter", NC],
        ["T76.31XD", "Adult psychological abuse by nonspouse or nonpartner, suspected, subsequent encounter", NC],
        ["Z69.81", "Encounter for mental health services for victim of nonspousal or nonpartner adult abuse", NC],
        ["Z69.82", "Encounter for mental health services for perpetrator of nonspousal or nonpartner adult abuse", NC]
      ],
      aka: ["elder abuse (when the victim is older; outside the DSM term)", "abuse of an adult by a relative, carer or stranger", "nonpartner adult maltreatment"],
      essence: "**Physical, sexual or emotional abuse** of an adult by **someone other than their intimate partner** (a son, carer, relative or stranger). Examples parallel the partner categories; **self-protective acts** are excluded. The **T codes are the same** as the partner codes; only the encounter codes differ: **Z69.81** victim, **Z69.82** perpetrator (pp. 827–828).",
      duration: "Not applicable",
      functioning: "Not described in the entry (pp. 827–828). " + NOTMD,
      mood: "Not part of the definition (pp. 827–828)",
      criteria: [
        ["What", "Physical, sexual or emotional abuse of an adult by a second adult who is not their intimate partner (p. 827)."],
        ["Physical", "Nonaccidental force (pushing, scratching, slapping, throwing something that could hurt, punching, biting) that harms, could harm, or causes significant fear (p. 827)."],
        ["Sexual", "Sexual acts obtained by force or coercion (p. 827)."],
        ["Psychological", "Verbal or symbolic acts that could cause psychological harm: berating, interrogating, restricting movement, obstructing help, threats, harming what the person cares about, restricting money, isolating, stalking, making the person think they are “crazy” (pp. 827–828)."],
        ["Excludes", "Acts to physically protect oneself or the other person (p. 828)."],
        ["Codes", "Physical **T74.11XA/XD** confirmed, **T76.11XA/XD** suspected; sexual **T74.21XA/XD**, **T76.21XA/XD**; psychological **T74.31XA/XD**, **T76.31XA/XD**; victim **Z69.81**; perpetrator **Z69.82**. No history code is listed for this category (p. 828)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 827–828)"]],
      risk: ["The chapter gives no risk factors (pp. 827–828).", "App guidance: older, cognitively impaired or dependent adults living with a carer are a group to ask about specifically; screen privately."],
      differential: [
        { id: "partner-violence-physical", how: "Same T code, but the abuser is an intimate partner; victim Z69.11 (p. 826)." },
        { id: "partner-violence-sexual", how: "Same T code with a partner; victim Z69.81 too, perpetrator Z69.12 (p. 826)." },
        { id: "partner-abuse-psychological", how: "Same T code with a partner; victim Z69.11 (p. 827)." },
        { id: "social-environment-problem", how: "Bullying and exclusion by peers with a power imbalance is Z60.4, not an abuse code (p. 832; app reading)." },
        { id: "major-ncd", how: "Assess cognition in an older victim: it affects capacity, safety and placement (app guidance)." }
      ],
      pearls: ["T codes are **identical** to the partner codes; the **name** and the **Z69.81/Z69.82** codes show the relationship (pp. 826–828).", "No **neglect** subtype and no **history** code are listed (p. 828).", "Self-protective acts are excluded (p. 828).", "Elder abuse usually falls here (app note)."],
      cmp: { symptoms: "Physical, sexual or psychological abuse of an adult by a non-partner adult", exclusions: "Partner abuse (Z69.11/Z69.12); peer bullying (Z60.4); self-protection", prevalence: "Not given", course: CONF },
      clues: [["Core picture", "A widow with bruised arms who fears her adult son, who takes her pension and keeps friends away"], ["Key test", "Abuser is an adult who is not a partner"], ["Code", "T74.11XA / T76.31XA etc. + Z69.81"]],
      updates: upd("All T74.11/.21/.31X- and T76.11/.21/.31X- codes and **Z69.81/Z69.82**" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM has **T76.A-** (suspected financial abuse) and **T74.6/T76.6** forced labor exploitation, which the DSM chapter does not list." + TNOTE + ICD11 + APA)
    },
    {
      id: "parent-child-relational", ch: "ch22", sec: "s22-relational", pages: "828–829", critPages: "829",
      name: "Parent-child relational problem", code: "Z62.820",
      codes: [
        ["Z62.820", "Parent-biological child relational problem (ICD-10-CM title “Parent-biological child conflict”; record the DSM name)", NC],
        ["Z62.821", "Parent-adopted child relational problem (ICD-10-CM title “Parent-adopted child conflict”; record the DSM name)", NC],
        ["Z62.822", "Parent-foster child relational problem (ICD-10-CM title “Parent-foster child conflict”; record the DSM name)", NC],
        ["Z62.898", "Other caregiver-child relational problem", NC]
      ],
      aka: ["parent-child conflict (ICD-10-CM wording)", "caregiver-child relational problem", "family conflict with a child"],
      essence: "The focus is the **quality of the relationship** between a child and a **primary caregiver** (biological, adoptive or foster parent, or a relative such as a **grandparent** in the parental role), or that quality is affecting a disorder. Impairment shows in **behavioral** (poor control or supervision, overprotection, excessive pressure, escalating arguments, avoidance), **cognitive** (negative attributions, hostility, scapegoating, estrangement) and **affective** (sadness, apathy, anger) domains; weigh **development and culture** (p. 829).",
      duration: "Not applicable",
      functioning: "Impaired functioning in behavioral, cognitive or affective domains is typical (p. 829). " + NOTMD,
      mood: "Sadness, apathy or anger about the other person are the affective examples (p. 829)",
      criteria: [
        ["What", "The main clinical focus is the quality of the parent-child relationship, or that quality is affecting the course, prognosis or treatment of a mental or other medical condition (p. 829)."],
        ["“Parent”", "Any primary caregiver: biological, adoptive or foster parent, or another relative (such as a grandparent) filling the parental role (p. 829)."],
        ["Behavioral", "Inadequate control, supervision or involvement; overprotection; excessive pressure; arguments escalating to threats of violence; avoidance without resolution (p. 829)."],
        ["Cognitive", "Negative attributions of the other’s intentions, hostility or scapegoating, unwarranted estrangement (p. 829)."],
        ["Affective", "Sadness, apathy or anger about the other (p. 829)."],
        ["Context", "Take the child’s developmental needs and the cultural context into account (p. 829)."],
        ["Codes", "**Z62.820** biological, **Z62.821** adopted, **Z62.822** foster, **Z62.898** other caregiver (p. 829)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 829)"]],
      risk: ["The chapter gives no risk factors (p. 829)."],
      differential: [
        { id: "oppositional-defiant", how: "A persistent pattern of angry, defiant behavior in the child meeting Chapter 15 criteria is a disorder; the relational code may be added if the relationship is a focus (app guidance)." },
        { id: "child-psychological-abuse", how: "Caregiver acts with significant psychological harm (threats, confinement, scapegoating, excessive discipline) move to psychological abuse (p. 825)." },
        { id: "child-physical-abuse", how: "Threats that become nonaccidental injury are physical abuse (p. 823)." },
        { id: "family-environment", how: "Harm to a child from conflict **between the parents** is Z62.898 child affected by parental relationship distress (p. 830)." },
        { id: "rad", how: "Absent attachment behavior after severe insufficient care is a disorder (Chapter 7; app guidance)." }
      ],
      pearls: ["Three domains: **behavioral, cognitive, affective** (p. 829).", "A **grandparent** raising a child is a “parent”; record the grandparent relationship with **Z62.898** (p. 829; app reading).", "**Z62.898** is also the code for a child affected by parental relationship distress: write the name (pp. 829–830).", "Consider **development and culture** before calling it a problem (p. 829)."],
      cmp: { symptoms: "Caregiver-child relationship problems in behavior (control, pressure, arguments, avoidance), cognition (hostility, scapegoating) and affect", exclusions: "Abuse or neglect; a disorder in the child explaining it fully", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "Nightly shouting matches over homework between a teenager and his father, with mutual avoidance"], ["Key test", "Relationship quality is the focus"], ["Code", "Z62.820 (biological), .821, .822, Z62.898"]],
      updates: upd("**Z62.820 / Z62.821 / Z62.822** (ICD-10-CM titles “Parent-biological / adopted / foster child conflict”) and **Z62.898**" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "sibling-relational", ch: "ch22", sec: "s22-relational", pages: "829", critPages: "829",
      name: "Sibling relational problem", code: "Z62.891",
      codes: [["Z62.891", "Sibling relational problem (ICD-10-CM title “Sibling rivalry”; record the DSM name)", NC]],
      aka: ["sibling rivalry (ICD-10-CM title)", "sibling conflict"],
      essence: "A **pattern of interaction among siblings** linked to significant **impairment** in individual or family functioning or to **symptoms** in one or more of them, or affecting a sibling’s disorder. Applies to **children or adults**, and to **full, half-, step-, foster and adopted** siblings (p. 829).",
      duration: "Not applicable",
      functioning: "Significant impairment in individual or family functioning is one route to the category (p. 829). " + NOTMD,
      mood: "Not part of the definition (p. 829)",
      criteria: [
        ["What", "The focus is a pattern of sibling interaction with significant impairment in individual or family functioning or with symptoms in one or more siblings (p. 829)."],
        ["Or", "Problems between siblings are influencing the course, prognosis or treatment of a sibling’s mental or other medical condition (p. 829)."],
        ["Who", "Children or adults; full, half-, step-, foster and adopted siblings (p. 829)."],
        ["Code", "**Z62.891** (p. 829)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 829)"]],
      risk: ["The chapter gives no risk factors (p. 829)."],
      differential: [
        { id: "parent-child-relational", how: "The focus is the caregiver-child relationship (p. 829)." },
        { id: "adult-abuse-nonpartner", how: "Abuse of one adult sibling by another is coded as abuse, not as a relational problem (pp. 827–828; app reading)." },
        { id: "conduct-disorder", how: "A persistent pattern of aggression toward others, siblings included, meeting Chapter 15 criteria (app guidance)." }
      ],
      pearls: ["Works for **adults** too (p. 829).", "Step-, half-, foster and adopted siblings count (p. 829).", "ICD-10-CM calls it “sibling rivalry” (app note)."],
      cmp: { symptoms: "Sibling interaction pattern with significant impairment or symptoms", exclusions: "Abuse; a disorder explaining the behavior", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "Two adult sisters whose bitter dispute over their mother’s care is worsening one sister’s depression"], ["Key test", "Sibling pattern with impairment or symptoms"], ["Code", "Z62.891"]],
      updates: upd("**Z62.891** (ICD-10-CM title “Sibling rivalry”)" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    },
    {
      id: "partner-relationship-distress", ch: "ch22", sec: "s22-relational", pages: "829", critPages: "829",
      name: "Relationship distress with spouse or intimate partner", code: "Z63.0",
      codes: [["Z63.0", "Relationship distress with spouse or intimate partner (ICD-10-CM title “Problems in relationship with spouse or partner”; record the DSM name)", NC]],
      aka: ["marital problem", "couple distress", "partner relational problem (DSM-IV term)", "relationship distress"],
      essence: "The **major focus** is the **quality of an intimate (spouse or partner) relationship**, or that quality is affecting a disorder; partners may be of the **same or different genders**. Impairment is typically **behavioral** (poor conflict resolution, withdrawal, overinvolvement), **cognitive** (chronic negative attributions, dismissing the partner’s positives) or **affective** (chronic sadness, apathy, anger) (p. 829).",
      duration: "Not applicable",
      functioning: "Impaired functioning in behavioral, cognitive or affective domains is typical (p. 829). " + NOTMD,
      mood: "Chronic sadness, apathy or anger about the partner are the affective examples (p. 829)",
      criteria: [
        ["What", "The major focus of the clinical contact is the quality of the intimate relationship, or that quality is affecting the course, prognosis or treatment of a mental or other medical condition (p. 829)."],
        ["Who", "Partners of the same or different genders (p. 829)."],
        ["Behavioral", "Difficulty resolving conflict, withdrawal, overinvolvement (p. 829)."],
        ["Cognitive", "Chronic negative attributions of the partner’s intentions; dismissing the partner’s positive behavior (p. 829)."],
        ["Affective", "Chronic sadness, apathy and/or anger about the partner (p. 829)."],
        ["Code", "**Z63.0** (p. 829)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 829)"]],
      risk: ["The chapter gives no risk factors (p. 829)."],
      differential: [
        { id: "partner-violence-physical", how: "Nonaccidental force or fear-evoking acts are partner violence, not distress (p. 826)." },
        { id: "partner-abuse-psychological", how: "One-sided controlling acts (interrogation, isolation, economic restriction, gaslighting) with significant harm (p. 827)." },
        { id: "family-environment", how: "Partners **living apart** because of relationship problems or divorcing: Z63.5 (p. 830)." },
        { id: "mdd", how: "A depressive disorder in either partner is diagnosed in its own right; Z63.0 can be added when the relationship is a focus (app guidance)." }
      ],
      pearls: ["Same three domains as the parent-child entry, with different examples (p. 829).", "Same- or different-gender partners (p. 829).", "Screen privately for violence before couple work (app guidance)."],
      cmp: { symptoms: "Conflict, withdrawal, overinvolvement, negative attributions, chronic sadness or anger in an intimate relationship", exclusions: "Partner violence or abuse; separation/divorce (Z63.5)", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A couple seeking help for constant unresolved arguments and emotional withdrawal"], ["Key test", "Relationship quality is the major focus"], ["Code", "Z63.0"]],
      updates: upd("**Z63.0** (ICD-10-CM title “Problems in relationship with spouse or partner”)" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    },
    {
      id: "family-environment", ch: "ch22", sec: "s22-family", pages: "829–830", critPages: "829–830",
      name: "Problems related to the family environment", code: "Z63.8",
      codes: [
        ["Z62.29", "Upbringing away from parents", NC],
        ["Z62.898", "Child affected by parental relationship distress", NC],
        ["Z63.5", "Disruption of family by separation or divorce", NC],
        ["Z63.8", "High expressed emotion level within family (ICD-10-CM title “Other specified problems related to primary support group”; record the DSM name)", NC]
      ],
      aka: ["upbringing away from parents", "child affected by parental relationship distress", "disruption of family by separation or divorce", "high expressed emotion (EE)", "foster or kinship care problems"],
      essence: "Four family codes: **Z62.29** a child **raised away from the parents** (state custody in kin or foster care, informal placement with relatives or friends, group home or orphanage; excludes Z59.3); **Z62.898** a **child harmed by the parents’ relationship conflict**; **Z63.5** partners **living apart** or **divorcing**; **Z63.8** **high expressed emotion** (hostility, emotional overinvolvement, criticism toward the identified patient) (pp. 829–830).",
      duration: "Not applicable",
      functioning: "Coded when the problem is the focus or affects the course, prognosis or treatment of a disorder (pp. 829–830). " + NOTMD,
      mood: "Not part of the definitions (pp. 829–830)",
      criteria: [
        ["Z62.29", "The focus is a child being raised apart from the parents, or that upbringing affects a disorder: a child in state custody placed with kin or in foster care; a child living with a nonparental relative or friends without a court order; a child in a group home or orphanage. **Excludes** Z59.3, problem related to living in a residential institution (p. 829)."],
        ["Z62.898", "The focus is the negative effect on a child of the parents’ relationship discord (high conflict, distress or disparagement), including effects on the child’s disorder (p. 830)."],
        ["Z63.5", "An adult couple has separated because of relationship difficulties, or is in the middle of a divorce (p. 830)."],
        ["Z63.8", "Expressed emotion is a qualitative measure of hostility, emotional overinvolvement and criticism aimed at a family member who is an identified patient; coded when it is the focus or affects that member’s disorder (p. 830)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 829–830)"]],
      risk: ["The chapter gives no risk factors (pp. 829–830).", "App note (outside the DSM): high expressed emotion is a well-replicated predictor of relapse in schizophrenia and mood disorders; family psychoeducation targets it."],
      differential: [
        { id: "parent-child-relational", how: "The problem lies in the child’s own relationship with a caregiver; Z62.898 is shared with other caregiver-child relational problem, so write the name (pp. 829–830)." },
        { id: "partner-relationship-distress", how: "Couple distress while still together is Z63.0; Z63.5 when living apart or divorcing (pp. 829–830)." },
        { id: "housing-problem", how: "A problem of living in a residential institution is Z59.3, excluded from Z62.29 (pp. 829, 831)." },
        { id: "adjustment", how: "Emotional or behavioral symptoms in response to a separation, divorce or placement that meet Chapter 7 criteria are an adjustment disorder (app guidance)." }
      ],
      pearls: ["**Z62.898** serves two names (pp. 829–830).", "Z62.29 includes **informal** placements without a court order (p. 829).", "Expressed emotion = **hostility, overinvolvement, criticism** (p. 830).", "Z63.5 is for the couple, not the child (p. 830; app reading)."],
      cmp: { symptoms: "Upbringing away from parents; child harmed by parental discord; separation or divorce; high expressed emotion", exclusions: "Residential institution (Z59.3); couple distress while together (Z63.0)", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A man with schizophrenia relapsing after each discharge to a critical, overinvolved family"], ["Key test", "Which family problem is the focus"], ["Code", "Z62.29, Z62.898, Z63.5, Z63.8"]],
      updates: upd("**Z62.29**, **Z62.898**, **Z63.5** and **Z63.8** (ICD-10-CM title “Other specified problems related to primary support group”)" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "educational-problem", ch: "ch22", sec: "s22-education-work", pages: "830", critPages: "830",
      name: "Educational problems", code: "Z55.9",
      codes: [
        ["Z55.0", "Illiteracy and low-level literacy", NC],
        ["Z55.1", "Schooling unavailable and unattainable", NC],
        ["Z55.2", "Failed school examinations", NC],
        ["Z55.3", "Underachievement in school", NC],
        ["Z55.4", "Educational maladjustment and discord with teachers and classmates", NC],
        ["Z55.8", "Problems related to inadequate teaching", NC],
        ["Z55.9", "Other problems related to education and literacy", NC]
      ],
      aka: ["academic problem (DSM-IV term)", "school problem", "illiteracy", "underachievement"],
      essence: "An **academic or educational** problem that is the **focus of attention** or affects diagnosis, treatment or prognosis: **illiteracy** or low literacy, **no access** to schooling, **failing** examinations or grades, **underachievement** below intellectual capacity, **discord** with teachers, staff or students, **inadequate teaching**, or other education problems (Z55.0–Z55.9) (p. 830).",
      duration: "Not applicable",
      functioning: "Defined by educational difficulty, not by a disorder (p. 830). " + NOTMD,
      mood: "Not part of the definition (p. 830)",
      criteria: [
        ["What", "A school, academic or literacy problem is the focus of care, or it affects diagnosis, treatment or prognosis (p. 830)."],
        ["Problems to consider", "Illiteracy or low literacy; schooling unavailable or unattainable; poor academic performance (failed examinations or marks) or underachievement relative to intellectual capacity; discord with teachers, staff or students; inadequate teaching; any other education or literacy problem (p. 830)."],
        ["Codes", "**Z55.0, Z55.1, Z55.2, Z55.3, Z55.4, Z55.8, Z55.9** (p. 830)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 830)"]],
      risk: ["The chapter gives no risk factors (p. 830)."],
      differential: [
        { name: "Specific learning disorder", how: "Persistent difficulty in reading, writing or mathematics below age expectations despite adequate teaching meets Chapter 1 criteria; Z55 codes record the educational circumstance (app guidance)." },
        { name: "Attention-deficit/hyperactivity disorder", how: "Underachievement driven by inattention or hyperactivity meeting Chapter 1 criteria (app guidance)." },
        { id: "idd", how: "Low achievement with deficits in intellectual **and** adaptive function (Chapter 1; app guidance)." },
        { id: "borderline-intellectual-functioning", how: "Below-average ability without IDD can explain lower achievement; Z55.3 is for performance **below** capacity (pp. 830, 836; app reading)." },
        { id: "no-diagnosis", how: "If a full evaluation finds nothing to address, Z03.89 (Chapter 20; app guidance)." }
      ],
      pearls: ["**Underachievement** means below what the person’s **intellectual capacity** predicts (p. 830).", "Rule out learning, attention and intellectual disorders first (app guidance).", "Seven Z55 codes; Z55.9 is the catch-all (p. 830)."],
      cmp: { symptoms: "Illiteracy, no schooling, failed exams, underachievement, discord at school, inadequate teaching", exclusions: "Specific learning disorder, ADHD, IDD as the explanation", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A student of average ability failing exams because a part-time job leaves no study time"], ["Key test", "Educational problem is the focus; no disorder explains it"], ["Code", "Z55.2 / Z55.3 etc."]],
      updates: upd("**Z55.0–Z55.4, Z55.8, Z55.9**" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "occupational-problem", ch: "ch22", sec: "s22-education-work", pages: "830–831", critPages: "830–831",
      name: "Occupational problems", code: "Z56.9",
      codes: [
        ["Z56.82", "Problem related to current military deployment status", NC],
        ["Z56.0", "Unemployment", NC],
        ["Z56.1", "Change of job", NC],
        ["Z56.2", "Threat of job loss", NC],
        ["Z56.3", "Stressful work schedule", NC],
        ["Z56.4", "Discord with boss and workmates", NC],
        ["Z56.5", "Uncongenial work environment", NC],
        ["Z56.6", "Other physical and mental strain related to work", NC],
        ["Z56.81", "Sexual harassment on the job", NC],
        ["Z56.9", "Other problem related to employment", NC]
      ],
      aka: ["work problem", "job stress", "unemployment", "workplace sexual harassment", "military deployment problem"],
      essence: "An **occupational problem** that is the focus of attention or affects treatment or prognosis: **deployment status** (Z56.82), **unemployment**, **job change**, **threat of job loss**, a **stressful schedule**, **discord** at work, a **hostile environment**, other work strain, **sexual harassment** or other employment problems. **Psychological reactions to deployment** are **not** coded here: they are an adjustment or other mental disorder (pp. 830–831).",
      duration: "Not applicable",
      functioning: "Defined by the work problem, not by a disorder (pp. 830–831). " + NOTMD,
      mood: "Not part of the definition (pp. 830–831)",
      criteria: [
        ["What", "An occupational problem is the focus of clinical attention or affects the person’s treatment or prognosis (p. 830)."],
        ["Areas", "Employment and work-environment problems: current military deployment status, unemployment, recent job change, threat of job loss, stressful schedule, uncertainty about career choice, sexual harassment at work, discord with supervisors or co-workers, an uncongenial or hostile workplace, other physical or mental work strain, and any other employment problem (p. 830)."],
        ["Z56.82", "An occupational problem directly tied to military deployment status; **psychological reactions** to deployment are **excluded** and better captured as an adjustment disorder or another mental disorder (p. 830)."],
        ["Codes", "**Z56.82, Z56.0, Z56.1, Z56.2, Z56.3, Z56.4, Z56.5, Z56.6, Z56.81, Z56.9** (pp. 830–831)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 830–831)"]],
      risk: ["The chapter gives no risk factors (pp. 830–831)."],
      differential: [
        { id: "adjustment", how: "Emotional or behavioral symptoms in response to a work stressor or to deployment that meet Chapter 7 criteria (p. 830)." },
        { id: "mdd", how: "A depressive episode after job loss is diagnosed in its own right; the Z56 code may be added (app guidance)." },
        { id: "ptsd", how: "Trauma-related symptoms after deployment are a mental disorder, not Z56.82 (p. 830; app guidance)." },
        { id: "health-access-history", how: "A past deployment with no current occupational problem is **Z91.82** personal history (p. 833)." }
      ],
      pearls: ["Deployment **status** ≠ the **reaction** to it (p. 830).", "**Z56.81** is the sexual harassment code (p. 831).", "Ten codes; Z56.9 is the catch-all (pp. 830–831).", "Philippine context (outside the DSM; app guidance): workplace sexual harassment falls under RA 11313 (Safe Spaces Act); verify current law."],
      cmp: { symptoms: "Unemployment, job change or threat, stressful schedule, discord, hostile workplace, harassment, deployment status", exclusions: "Psychological reaction to deployment (adjustment or other disorder)", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A nurse working mandatory double shifts whose insomnia treatment depends on a schedule change"], ["Key test", "Work problem is the focus; reactions coded as disorders"], ["Code", "Z56.0–Z56.9, Z56.81, Z56.82"]],
      updates: upd("**Z56.0–Z56.6, Z56.81, Z56.82, Z56.9**" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "housing-problem", ch: "ch22", sec: "s22-housing-economic", pages: "831", critPages: "831",
      name: "Housing problems", code: "Z59.01",
      codes: [
        ["Z59.01", "Sheltered homelessness", NC],
        ["Z59.02", "Unsheltered homelessness", NC],
        ["Z59.10", "Inadequate housing (printed Z59.1; ICD-10-CM title “Inadequate housing, unspecified”; record the DSM name)", "Z59.10 since October 1, 2023 (APA update)"],
        ["Z59.2", "Discord with neighbor, lodger, or landlord", NC],
        ["Z59.3", "Problem related to living in a residential institution", NC],
        ["Z59.9", "Other housing problem", NC]
      ],
      aka: ["homelessness", "sheltered homelessness", "unsheltered homelessness", "inadequate housing", "residential institution problem"],
      essence: "Housing codes used when the problem affects **treatment or prognosis** (or is a focus): **sheltered homelessness** (sleeping in a shelter, motel or temporary arrangement), **unsheltered homelessness** (a place not meant for living: public spaces, abandoned buildings, a car, a cave, a box), **inadequate housing** (no heat or electricity, pests, poor plumbing, overcrowding, noise; consider cultural norms), **discord** with neighbor, lodger or landlord, **institutional living** (reactions to a move are an adjustment disorder) (p. 831).",
      duration: "Not applicable",
      functioning: "Coded when it affects treatment or prognosis (p. 831). " + NOTMD,
      mood: "Not part of the definitions (p. 831)",
      criteria: [
        ["Z59.01", "Sheltered homelessness: the main nighttime residence is a homeless, warming or domestic violence shelter, a motel, or a temporary or transitional arrangement (p. 831)."],
        ["Z59.02", "Unsheltered homelessness: staying somewhere not intended for human habitation, such as a tunnel, station or mall, an abandoned or unused building, a car, a cave, a cardboard box or another improvised arrangement (p. 831)."],
        ["Z59.10", "Inadequate housing: for example no heat in cold weather or no electricity, insect or rodent infestation, inadequate plumbing or toilets, overcrowding, too little sleeping space, excessive noise; consider cultural norms first (p. 831; printed Z59.1)."],
        ["Z59.2", "Discord with neighbors, lodgers or a landlord as a focus or affecting treatment (p. 831)."],
        ["Z59.3", "A problem of living in a residential institution; **psychological reactions** to a change in living situation are **excluded** and better captured as an adjustment disorder (p. 831)."],
        ["Z59.9", "Any other housing problem (p. 831)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 831)"]],
      risk: ["The chapter gives no risk factors (p. 831)."],
      differential: [
        { id: "adjustment", how: "Distress or behavioral change after moving into an institution or losing a home that meets Chapter 7 criteria (p. 831)." },
        { id: "family-environment", how: "A **child** in a group home or orphanage is coded **Z62.29**, which excludes Z59.3 (p. 829)." },
        { id: "economic-problem", how: "Poverty, food insecurity and insufficient welfare support are coded separately and often alongside (pp. 831–832)." }
      ],
      pearls: ["**Sheltered vs unsheltered** turns on where the person sleeps (p. 831).", "Consider **cultural norms** before calling housing inadequate (p. 831).", "Write **Z59.10**, not the printed Z59.1 (APA update, October 2023).", "Z59.9 is printed for both other housing and other economic problems (pp. 831–832)."],
      cmp: { symptoms: "Sheltered or unsheltered homelessness, inadequate housing, discord with neighbors or landlord, institutional living", exclusions: "Psychological reaction to a move (adjustment disorder); child in group home (Z62.29)", prevalence: "Not given", course: "Coded while it affects care" },
      clues: [["Core picture", "A man with bipolar I disorder sleeping in a bus station after eviction, missing depot injections"], ["Key test", "Where the person sleeps"], ["Code", "Z59.02 (unsheltered), Z59.01 (shelter), Z59.10"]],
      updates: upd("**Z59.1** became invalid as a complete code on **October 1, 2023**, when ICD-10-CM added **Z59.10** (inadequate housing, unspecified), **Z59.11** (inadequate housing environmental temperature), **Z59.12** (inadequate housing utilities) and **Z59.19** (other inadequate housing); the **APA’s September 2023 update** assigns DSM-5-TR inadequate housing to **Z59.10**. Z59.01 and Z59.02 (FY2022), Z59.2, Z59.3 and Z59.9" + UNCH + ". ICD-10-CM also has **Z59.81-** housing instability (FY2022), which the DSM does not list." + ICD11 + APA)
    },
    {
      id: "economic-problem", ch: "ch22", sec: "s22-housing-economic", pages: "831–832", critPages: "831–832",
      name: "Economic problems", code: "Z59.6",
      codes: [
        ["Z59.41", "Food insecurity", NC],
        ["Z58.6", "Lack of safe drinking water (ICD-10-CM title “Inadequate drinking-water supply”; record the DSM name)", NC],
        ["Z59.5", "Extreme poverty", NC],
        ["Z59.6", "Low income", NC],
        ["Z59.71", "Insufficient health insurance coverage (printed Z59.7, insufficient social or health insurance or welfare support)", "Z59.71 / Z59.72 since October 1, 2024 (APA update)"],
        ["Z59.72", "Insufficient welfare support (printed Z59.7, insufficient social or health insurance or welfare support)", "Z59.71 / Z59.72 since October 1, 2024 (APA update)"],
        ["Z59.9", "Other economic problem", NC]
      ],
      aka: ["poverty", "food insecurity", "low income", "insufficient insurance", "insufficient welfare support"],
      essence: "An **economic problem** that is the focus or affects treatment or prognosis: **food insecurity**, **no safe drinking water**, **extreme poverty**, **low income**, **insufficient insurance or welfare support** (eligible but not receiving, receiving too little, or lacking access, e.g., no documents or proof of address, age or preexisting condition, overly strict requirements) or another economic problem (pp. 831–832).",
      duration: "Not applicable",
      functioning: "Coded when it is a focus or affects treatment or prognosis (p. 831). " + NOTMD,
      mood: "Not part of the definitions (pp. 831–832)",
      criteria: [
        ["What", "An economic problem is the focus of clinical attention or affects treatment or prognosis (p. 831)."],
        ["Areas", "Food insecurity, no safe drinking water, extreme poverty, low income, too little insurance or welfare support, and other money problems (p. 831)."],
        ["Insurance or welfare", "The person is eligible for support but not getting it, gets too little for their needs, or otherwise cannot reach needed insurance or programs: for example, disqualified for lack of documents or proof of address, unable to get adequate insurance because of age or a preexisting condition, or refused because of overly strict income or other rules (p. 832)."],
        ["Codes", "**Z59.41, Z58.6, Z59.5, Z59.6, Z59.71 / Z59.72** (printed Z59.7), **Z59.9** (p. 832)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 831–832)"]],
      risk: ["The chapter gives no risk factors (pp. 831–832)."],
      differential: [
        { id: "housing-problem", how: "Homelessness and inadequate housing are housing codes, often recorded alongside (p. 831)." },
        { id: "nonadherence", how: "Nonadherence because of **expense** may also be coded when it needs attention in its own right (p. 835)." },
        { id: "child-neglect", how: "A child deprived of food through an egregious caregiver act or omission, not poverty alone, is neglect (p. 824; app reading)." }
      ],
      pearls: ["Write **Z59.71** (health insurance) or **Z59.72** (welfare), not the printed Z59.7 (APA update, October 2024).", "Z59.41 food insecurity was printed **F59.41** in early printings; the APA corrected it in September 2022 (app note).", "**Z58.6** water sits outside the Z59 block (p. 832).", "Economic codes justify social work and plan changes: one of the four reasons to code (p. 821)."],
      cmp: { symptoms: "Food insecurity, unsafe water, extreme poverty, low income, insufficient insurance or welfare", exclusions: "Housing problems (coded separately); neglect", prevalence: "Not given", course: "Coded while it affects care" },
      clues: [["Core picture", "A woman who cannot afford her medicines and was refused welfare for lack of a proof of address"], ["Key test", "Economic problem affects care"], ["Code", "Z59.6, Z59.72, Z59.41 etc."]],
      updates: upd("**Z59.7** became invalid on **October 1, 2024**, when ICD-10-CM split it into **Z59.71** (insufficient health insurance coverage) and **Z59.72** (insufficient welfare support); the **APA’s September 2024 update** adopted both. The **APA’s September 2022 correction** fixed a printing error (food insecurity printed **F59.41** → **Z59.41**). Z58.6 (FY2022), Z59.41, Z59.5, Z59.6 and Z59.9" + UNCH + ". ICD-10-CM also has **Z59.82** transportation insecurity, **Z59.86-** financial insecurity and **Z59.87** material hardship (FY2023), which the DSM does not list." + ICD11 + APA)
    },
    {
      id: "social-environment-problem", ch: "ch22", sec: "s22-social-legal", pages: "832", critPages: "832",
      name: "Problems related to the social environment", code: "Z60.9",
      codes: [
        ["Z60.2", "Problem related to living alone", NC],
        ["Z60.3", "Acculturation difficulty", NC],
        ["Z60.4", "Social exclusion or rejection (ICD-10-CM title “Social exclusion and rejection”; record the DSM name)", NC],
        ["Z60.5", "Target of (perceived) adverse discrimination or persecution", NC],
        ["Z60.9", "Other problem related to social environment", NC]
      ],
      aka: ["living alone", "loneliness", "acculturation difficulty", "bullying", "social exclusion", "discrimination", "persecution"],
      essence: "**Z60.2** living alone (loneliness, isolation, **lack of daily structure**); **Z60.3** **acculturation** difficulty (e.g., after migration); **Z60.4** recurrent **exclusion or rejection** with a **power imbalance** (bullying, teasing, intimidation, humiliation, deliberate exclusion); **Z60.5** **perceived or experienced discrimination or persecution** for membership in a group; **Z60.9** other (p. 832).",
      duration: "Not applicable",
      functioning: "Coded when it is a focus or affects treatment or prognosis (p. 832). " + NOTMD,
      mood: "Chronic loneliness is an example for living alone (p. 832)",
      criteria: [
        ["Z60.2", "Problems tied to living alone: chronic loneliness and isolation, and loss of structure in daily life such as irregular meals and sleep or neglected household chores (p. 832)."],
        ["Z60.3", "Difficulty adjusting to a new culture, for example after migration (p. 832)."],
        ["Z60.4", "An imbalance of social power with recurrent exclusion or rejection: bullying, teasing, intimidation, being targeted for verbal abuse and humiliation, being deliberately left out by peers or workmates (p. 832)."],
        ["Z60.5", "Perceived or experienced discrimination or persecution for actual or perceived membership in a group, typically gender or gender identity, race or ethnicity, religion, sexual orientation, national origin, politics, disability, caste, social standing, body weight or physical appearance (p. 832)."],
        ["Z60.9", "Any other social-environment problem (p. 832)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 832)"]],
      risk: ["The chapter gives no risk factors (p. 832)."],
      differential: [
        { id: "adult-abuse-nonpartner", how: "Abuse by an adult (force, coercion, threats, stalking) is an abuse code; Z60.4 is peer exclusion with a power imbalance (pp. 827–828, 832; app reading)." },
        { id: "phase-of-life-problem", how: "Adjusting to a life-cycle transition rather than to a new culture (p. 834)." },
        { id: "adjustment", how: "Symptoms meeting Chapter 7 criteria after migration or bullying (app guidance)." },
        { name: "Persecutory delusions", how: "Perceived persecution can be real; assess before attributing it to psychosis, and keep the cultural context in mind (app guidance)." }
      ],
      pearls: ["**Z60.4** is the bullying code: power imbalance plus recurrence (p. 832).", "**Z60.5** covers **perceived** as well as experienced discrimination (p. 832).", "Living alone matters through **lack of structure**, not only loneliness (p. 832)."],
      cmp: { symptoms: "Living alone problems, acculturation difficulty, bullying or exclusion, discrimination or persecution", exclusions: "Abuse by an adult; disorders meeting criteria", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "An autistic teenager mocked and excluded by classmates for months, now refusing school"], ["Key test", "Recurrent exclusion with a power imbalance"], ["Code", "Z60.4 (and Z60.2, Z60.3, Z60.5, Z60.9)"]],
      updates: upd("**Z60.2, Z60.3, Z60.4** (ICD-10-CM title “Social exclusion and rejection”), **Z60.5** and **Z60.9**" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "legal-problem", ch: "ch22", sec: "s22-social-legal", pages: "832–833", critPages: "832–833",
      name: "Problems related to interaction with the legal system", code: "Z65.3",
      codes: [
        ["Z65.0", "Conviction in criminal proceedings without imprisonment", NC],
        ["Z65.1", "Imprisonment or other incarceration", NC],
        ["Z65.2", "Problems related to release from prison", NC],
        ["Z65.3", "Problems related to other legal circumstances (e.g., civil litigation, child custody or support proceedings)", NC]
      ],
      aka: ["legal problem", "incarceration", "release from prison", "custody proceedings", "litigation"],
      essence: "A problem with the **legal system** that is the focus or affects treatment or prognosis: **conviction without imprisonment** (Z65.0), **imprisonment** or other incarceration (Z65.1), problems after **release from prison** (Z65.2), and **other legal circumstances** such as civil litigation or child custody or support proceedings (Z65.3) (pp. 832–833).",
      duration: "Not applicable",
      functioning: "Coded when it is a focus or affects treatment or prognosis (p. 832). " + NOTMD,
      mood: "Not part of the definition (pp. 832–833)",
      criteria: [
        ["What", "A problem with police, courts or prisons is the focus of care or affects treatment or prognosis (p. 832)."],
        ["Areas", "Criminal conviction, imprisonment or other incarceration, problems after release from prison, other legal circumstances (civil litigation, child custody or support proceedings) (p. 832)."],
        ["Codes", "**Z65.0, Z65.1, Z65.2, Z65.3** (p. 833)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 832–833)"]],
      risk: ["The chapter gives no risk factors (pp. 832–833)."],
      differential: [
        { id: "antisocial-behavior", how: "The behavior that led to the charge, when not due to a disorder, is Z72.810/Z72.811 (p. 835)." },
        { id: "antisocial-pd", how: "A pervasive pattern meeting Chapter 18 criteria (app guidance)." },
        { id: "malingering", how: "A **medicolegal context** is one of the four indicators that should prompt consideration of malingering (p. 835)." },
        { id: "other-psychosocial-circumstances", how: "Being a **victim** of crime is Z65.4 (p. 833)." }
      ],
      pearls: ["Four codes, Z65.0–Z65.3 (p. 833).", "Custody and support disputes are **Z65.3** (pp. 832–833).", "Legal context raises the question of malingering but proves nothing (p. 835; app guidance)."],
      cmp: { symptoms: "Conviction, incarceration, release from prison, litigation or custody proceedings", exclusions: "Victim of crime (Z65.4)", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A man with schizophrenia released from prison last month with no housing or follow-up arranged"], ["Key test", "Legal circumstance affects care"], ["Code", "Z65.0–Z65.3"]],
      updates: upd("**Z65.0–Z65.3**" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "other-psychosocial-circumstances", ch: "ch22", sec: "s22-other-circumstances", pages: "833", critPages: "833",
      name: "Problems related to other psychosocial, personal, and environmental circumstances", code: "Z72.9",
      codes: [
        ["Z72.9", "Problem related to lifestyle", NC],
        ["Z64.0", "Problems related to unwanted pregnancy", NC],
        ["Z64.1", "Problems related to multiparity", NC],
        ["Z64.4", "Discord with social service provider, including probation officer, case manager, or social services worker (ICD-10-CM title “Discord with counselors”; record the DSM name)", NC],
        ["Z65.4", "Victim of crime (ICD-10-CM title “Victim of crime and terrorism”; record the DSM name)", NC],
        ["Z65.4", "Victim of terrorism or torture (ICD-10-CM title “Victim of crime and terrorism”; record the DSM name)", NC],
        ["Z65.5", "Exposure to disaster, war, or other hostilities", NC]
      ],
      aka: ["lifestyle problem", "unwanted pregnancy", "multiparity", "victim of crime", "victim of terrorism or torture", "disaster exposure"],
      essence: "**Z72.9** a **lifestyle** problem (inactivity, poor diet, high-risk sex, poor sleep hygiene) when it is a **specific focus** or **directly affects** a disorder; a lifestyle problem that is a **symptom** of a disorder is coded only if it meets that test, and then **both** are coded. Also **unwanted pregnancy**, **multiparity**, **discord with a social service provider**, **victim of crime** or of **terrorism or torture** (same code, Z65.4), and **disaster, war or hostilities** (p. 833).",
      duration: "Not applicable",
      functioning: "Coded when a focus or affecting course, prognosis or treatment (p. 833). " + NOTMD,
      mood: "Not part of the definitions (p. 833)",
      criteria: [
        ["Z72.9", "A lifestyle problem that is itself a target of treatment or has a direct effect on a condition’s course, prognosis or treatment: for example little exercise, poor diet, high-risk sexual behavior, poor sleep hygiene (p. 833)."],
        ["Symptom rule", "If the problem stems from a symptom of a mental disorder, do not code it unless it is a specific treatment focus or directly affects course, prognosis or treatment; in that case code the disorder and the lifestyle problem (p. 833)."],
        ["Z64.0 / Z64.1", "Problems related to unwanted pregnancy / to multiparity (p. 833)."],
        ["Z64.4", "Discord with a social service provider (probation officer, case manager, social services worker) (p. 833)."],
        ["Z65.4", "Victim of crime; the same code is listed for victim of terrorism or torture (p. 833)."],
        ["Z65.5", "Exposure to disaster, war or other hostilities (p. 833)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 833)"]],
      risk: ["The chapter gives no risk factors (p. 833)."],
      differential: [
        { id: "insomnia", how: "Poor sleep hygiene in a person with insomnia disorder is coded Z72.9 only if it is a specific focus or directly affects care (p. 833; app example)." },
        { id: "ptsd", how: "Symptoms after crime, torture, terrorism or disaster that meet Chapter 7 criteria are a disorder; Z65.4/Z65.5 record the exposure (app guidance)." },
        { id: "acute-stress", how: "Within the first month after the event (Chapter 7; app guidance)." },
        { id: "health-access-history", how: "A **past** psychological trauma without a current problem is Z91.49 (p. 833)." },
        { id: "legal-problem", how: "Being convicted, imprisoned or in litigation is Z65.0–Z65.3, not victim status (pp. 832–833)." }
      ],
      pearls: ["The **symptom rule**: code a lifestyle problem that is a symptom only when it is a specific focus or directly affects care, then code **both** (p. 833).", "**Z65.4** serves both crime and terrorism or torture: write the name (p. 833).", "Z64.4 includes **probation officers** (p. 833)."],
      cmp: { symptoms: "Lifestyle problems, unwanted pregnancy, multiparity, social-service discord, crime or terrorism victimization, disaster or war exposure", exclusions: "Symptom of a disorder not separately targeted; disorders meeting criteria", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A typhoon survivor whose clinic follow-up is shaped by loss of home and community"], ["Key test", "Circumstance is a focus or affects care"], ["Code", "Z72.9, Z64.0, Z64.1, Z64.4, Z65.4, Z65.5"]],
      updates: upd("**Z72.9, Z64.0, Z64.1, Z64.4** (ICD-10-CM title “Discord with counselors”), **Z65.4** (“Victim of crime and terrorism”) and **Z65.5**" + UNCH + "; no APA DSM-5-TR update changed them." + ICD11 + APA)
    },
    {
      id: "health-access-history", ch: "ch22", sec: "s22-other-circumstances", pages: "833", critPages: "833",
      name: "Problems related to access to health care; circumstances of personal history", code: "Z75.3",
      codes: [
        ["Z75.3", "Unavailability or inaccessibility of health care facilities", NC],
        ["Z75.4", "Unavailability or inaccessibility of other helping agencies", NC],
        ["Z91.49", "Personal history of psychological trauma", NC],
        ["Z91.82", "Personal history of military deployment", NC]
      ],
      aka: ["access to care problem", "no available services", "personal history of psychological trauma", "personal history of military deployment"],
      essence: "**Access**: **Z75.3** health care facilities and **Z75.4** other helping agencies that are **unavailable or inaccessible**, when this is the focus or affects treatment or prognosis. **Personal history**: **Z91.49** psychological trauma and **Z91.82** military deployment, recorded as background rather than current problems (p. 833).",
      duration: "Not applicable",
      functioning: "Coded when a focus or affecting treatment or prognosis (p. 833). " + NOTMD,
      mood: "Not part of the definitions (p. 833)",
      criteria: [
        ["Access", "A problem with access to medical or other health care is the focus or affects treatment or prognosis: **Z75.3** health care facilities, **Z75.4** other helping agencies (p. 833)."],
        ["History", "**Z91.49** personal history of psychological trauma; **Z91.82** personal history of military deployment (p. 833)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 833)"]],
      risk: ["The chapter gives no risk factors (p. 833)."],
      differential: [
        { id: "ptsd", how: "Current trauma-related symptoms meeting criteria are a disorder; Z91.49 records a past trauma (app guidance)." },
        { id: "other-specified-trauma", how: "Trauma-related symptoms short of full criteria (Chapter 7; app guidance)." },
        { id: "occupational-problem", how: "A current problem tied to deployment status is Z56.82 (p. 830)." },
        { id: "economic-problem", how: "Lack of insurance is Z59.71, not an access-to-facility code (p. 832; app reading)." }
      ],
      pearls: ["History codes are **background**, not diagnoses (p. 833).", "Current deployment problem **Z56.82** vs past deployment **Z91.82** (pp. 830, 833).", "Access codes fit rural and island settings where services are far away (app guidance)."],
      cmp: { symptoms: "Unavailable or inaccessible facilities or agencies; past trauma; past deployment", exclusions: "Current trauma disorder; current deployment problem", prevalence: "Not given", course: "History codes are lifetime" },
      clues: [["Core picture", "A woman on clozapine whose island has no laboratory for blood monitoring"], ["Key test", "Access problem affects treatment"], ["Code", "Z75.3, Z75.4, Z91.49, Z91.82"]],
      updates: upd("**Z75.3, Z75.4, Z91.49, Z91.82**" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM also has **Z91.42** (personal history of forced labor or sexual exploitation), which the DSM does not list." + ICD11 + APA)
    },
    {
      id: "counseling-encounter", ch: "ch22", sec: "s22-other-circumstances", pages: "833–834", critPages: "833–834",
      name: "Other health service encounters for counseling and medical advice", code: "Z71.9",
      codes: [
        ["Z31.5", "Genetic counseling", NC],
        ["Z70.9", "Sex counseling", NC],
        ["Z71.3", "Dietary counseling", NC],
        ["Z71.9", "Other counseling or consultation", NC]
      ],
      aka: ["genetic counseling", "sex counseling", "dietary counseling", "other counseling or consultation"],
      essence: "Encounters for **advice**: **Z31.5** **genetic** counseling about the risk of a disorder with a significant genetic component (e.g., **bipolar disorder**) for oneself, existing or future children; **Z70.9** **sex** counseling (education, behavior, orientation, attitudes, a partner’s or child’s behavior or orientation, enjoyment); **Z71.3** **dietary** counseling (e.g., weight management); **Z71.9** **other** counseling (e.g., drug-abuse prevention for an adolescent) (pp. 833–834).",
      duration: "Not applicable",
      functioning: "Not applicable: these are encounter codes (pp. 833–834). " + NOTMD,
      mood: "Not applicable",
      criteria: [
        ["Z31.5", "Seeking to understand the risk of developing a mental disorder with a significant genetic component, such as bipolar disorder, for oneself and relatives, including existing and future children (p. 833)."],
        ["Z70.9", "Counseling about sex education, sexual behavior, orientation or attitudes (embarrassment, timidity), the sexual behavior or orientation of others (spouse, partner, child), sexual enjoyment or other sex-related issues (p. 834)."],
        ["Z71.3", "Counseling on dietary issues such as weight management (p. 834)."],
        ["Z71.9", "Counseling or advice for a problem not specified elsewhere in the chapter, for example drug-abuse prevention counseling for an adolescent (p. 834)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not applicable (pp. 833–834)"]],
      risk: [],
      differential: [
        { id: "no-diagnosis", how: "A full evaluation that finds no disorder and no other problem: Z03.89 (Chapter 20); counseling codes are for when advice is the purpose (app guidance)." },
        { id: "overweight-obesity", how: "E66.9 when overweight is itself the focus; Z71.3 for the counseling encounter (pp. 834–835; app reading)." },
        { name: "Sexual dysfunctions and gender dysphoria", how: "Diagnoses with their own criteria (Chapters 13–14); Z70.9 is for counseling without such a diagnosis (app guidance)." }
      ],
      pearls: ["**Bipolar disorder** is the manual’s genetic-counseling example (p. 833).", "Sex counseling includes concerns about **others’** sexual behavior or orientation (p. 834).", "**Z71.9** is the catch-all (p. 834)."],
      cmp: { symptoms: "Encounter for genetic, sex, dietary or other counseling", exclusions: "Diagnoses with their own criteria", prevalence: "Not applicable", course: "Encounter-based" },
      clues: [["Core picture", "A woman whose mother and brother have bipolar disorder asking about risk before pregnancy"], ["Key test", "Advice is the purpose of the visit"], ["Code", "Z31.5, Z70.9, Z71.3, Z71.9"]],
      updates: upd("**Z31.5, Z70.9, Z71.3, Z71.9**" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM titles for these four were not verified for the app." + ICD11 + APA)
    },
    {
      id: "wandering", ch: "ch22", sec: "s22-additional", pages: "834", critPages: "834",
      name: "Wandering associated with a mental disorder", code: "Z91.83",
      codes: [["Z91.83", "Wandering associated with [specific mental disorder] (ICD-10-CM title “Wandering in diseases classified elsewhere”; code the mental disorder first; record the DSM name)", NC]],
      aka: ["wandering", "elopement risk (nursing term)", "exit-seeking (nursing term)"],
      essence: "A person **with a mental disorder** whose **urge to walk about** creates significant **management or safety** concerns, typically in **major neurocognitive** or **neurodevelopmental** disorders: risk of **falls** and of **leaving supervised settings** unaccompanied. **Excludes** escaping an unwanted situation (a child **running away**, a patient wanting to **leave hospital**) and pacing from **akathisia**. **Code the disorder first**, then Z91.83 (p. 834).",
      duration: "Not applicable",
      functioning: "Defined by clinical management or safety concerns (p. 834). " + NOTMD,
      mood: "Not part of the definition (p. 834)",
      criteria: [
        ["What", "A person with a mental disorder whose urge to walk about creates significant safety or management concerns (p. 834)."],
        ["Example", "Major neurocognitive or neurodevelopmental disorders with a restless urge to wander, risking falls and leaving supervised settings without needed company (p. 834)."],
        ["Excludes", "Intent to escape an unwanted housing situation (children running away from home, people who no longer want to stay in hospital); walking or pacing caused by medication-induced akathisia (p. 834)."],
        ["Coding note", "Code the associated mental disorder first (e.g., major neurocognitive disorder, autism spectrum disorder), then **Z91.83 wandering associated with [that disorder]** (p. 834)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 834)"]],
      risk: ["The chapter gives no risk factors; the named settings are major NCD and neurodevelopmental disorders (p. 834).", "Safety (app guidance): identification, supervision, environmental design and a missing-person protocol."],
      differential: [
        { id: "medication-induced-acute-akathisia", how: "Pacing driven by inner restlessness after a dopamine blocker or other causative drug is excluded (pp. 813, 834)." },
        { id: "major-ncd", how: "The commonest associated disorder; it is coded first (p. 834)." },
        { id: "asd", how: "Named in the coding note as an associated disorder; coded first (p. 834)." },
        { id: "delirium", how: "Acute restlessness and wandering with disturbed attention and awareness needs medical work-up (app guidance)." },
        { name: "Running away or wanting to leave hospital", how: "Intentional escape from an unwanted situation is excluded (p. 834)." }
      ],
      pearls: ["**Disorder first**, then Z91.83 (p. 834).", "Not for **akathisia** pacing, not for **running away** (p. 834).", "Needs a **safety or management** concern (p. 834).", "ICD-10-CM title: “Wandering in diseases classified elsewhere” (app note)."],
      cmp: { symptoms: "Urge to walk about in a person with a mental disorder causing safety or management concerns", exclusions: "Escape from an unwanted situation; akathisia", prevalence: "Not given", course: "Coded while it is a concern" },
      clues: [["Core picture", "A woman with Alzheimer’s disease found by police streets away from her care home at night"], ["Key test", "Mental disorder + safety concern; not escape, not akathisia"], ["Code", "Disorder first, then Z91.83"]],
      updates: upd("**Z91.83** (ICD-10-CM title “Wandering in diseases classified elsewhere”; it carries a code-first instruction for the underlying condition)" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    },
    {
      id: "uncomplicated-bereavement", ch: "ch22", sec: "s22-additional", pages: "834", critPages: "834",
      name: "Uncomplicated bereavement", code: "Z63.4",
      codes: [["Z63.4", "Uncomplicated bereavement (ICD-10-CM title “Disappearance and death of family member”; record the DSM name)", NC]],
      aka: ["normal grief", "bereavement", "normal bereavement"],
      essence: "The focus is a **normal reaction to the death of a loved one**. Some bereaved people have **MDE-like symptoms** (sadness, insomnia, poor appetite, weight loss) but typically regard the low mood as **“normal”**, seeking help mainly for **insomnia or anorexia**. Duration and expression **vary by culture**; the MDE and prolonged grief disorder texts guide the distinction (p. 834).",
      duration: "Not applicable (no time limit; normal duration varies across cultures, p. 834)",
      functioning: "Not described; the reaction is within normal limits (p. 834). " + NOTMD,
      mood: "Sadness that the person considers a normal response to the loss (p. 834)",
      criteria: [
        ["What", "The focus of clinical attention is a normal grief response after a loved one has died (p. 834)."],
        ["Symptoms", "Some grieving people show features typical of a major depressive episode: sadness with insomnia, poor appetite and weight loss (p. 834)."],
        ["Tell-tale", "The person usually views the depressed mood as normal, though may seek help for associated symptoms such as insomnia or anorexia (p. 834)."],
        ["Culture", "Duration and expression of normal bereavement differ considerably between cultural groups (p. 834)."],
        ["See", "The major depressive episode and prolonged grief disorder texts for how to separate grief from each (p. 834)."],
        ["Code", "**Z63.4** (p. 834)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 834)"]],
      risk: ["The chapter gives no risk factors (p. 834)."],
      differential: [
        { id: "mdd", how: "Full MDE criteria can be met during bereavement and the disorder diagnosed; pervasive low mood, worthlessness and self-criticism unrelated to the loss favor an MDE (Chapter 4; app summary)." },
        { id: "pgd", how: "A persistent, impairing grief response at least **12 months** after the death (6 months in children) beyond cultural norms (Chapter 7)." },
        { id: "adjustment", how: "Grief that is more intense or prolonged than expected can be an adjustment disorder when PGD criteria are not met (Chapter 7; app guidance)." },
        { id: "ptsd", how: "A traumatic death can lead to PTSD with intrusive memories of the death itself (Chapter 7; app guidance)." }
      ],
      pearls: ["Grief can **look like** an MDE; the person sees the mood as **normal** (p. 834).", "Help is often sought for **sleep or appetite** (p. 834).", "Culture shapes how long and how grief shows (p. 834).", "ICD-10-CM title: “Disappearance and death of family member” (app note).", "Ask about suicidal thoughts all the same (app guidance)."],
      cmp: { symptoms: "Sadness, insomnia, poor appetite, weight loss after a death, felt as normal", exclusions: "Full MDE; prolonged grief disorder; adjustment disorder", prevalence: "Not given", course: "Culturally variable; resolves" },
      clues: [["Core picture", "A widow 2 months after her husband’s death asking only for help with sleep, saying her sadness is natural"], ["Key test", "Normal reaction; mood felt as normal"], ["Code", "Z63.4"]],
      updates: upd("**Z63.4** (ICD-10-CM title “Disappearance and death of family member”)" + UNCH + "; no APA DSM-5-TR update changed it. **App comparison**: the text revision added prolonged grief disorder in Chapter 7 (12 months after the death in adults, 6 in children) and points to it here." + ICD11 + APA)
    },
    {
      id: "phase-of-life-problem", ch: "ch22", sec: "s22-additional", pages: "834", critPages: "834",
      name: "Phase of life problem", code: "Z60.0",
      codes: [["Z60.0", "Phase of life problem", NC]],
      aka: ["life-cycle transition problem", "life transition problem", "empty nest", "retirement adjustment problem"],
      essence: "A problem **adjusting to a life-cycle transition** (a developmental phase) that is the focus or affects treatment or prognosis: **starting or finishing school**, **leaving parental control**, **marriage**, a **new career**, **becoming a parent**, the **empty nest**, **retirement** (p. 834).",
      duration: "Not applicable",
      functioning: "Coded when a focus or affecting treatment or prognosis (p. 834). " + NOTMD,
      mood: "Not part of the definition (p. 834)",
      criteria: [
        ["What", "A problem adjusting to a life-cycle transition is the focus or affects treatment or prognosis (p. 834)."],
        ["Examples", "Entering or completing school, leaving parental control, marrying, starting a new career, becoming a parent, adjusting after children leave home, retiring (p. 834)."],
        ["Code", "**Z60.0** (p. 834)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 834)"]],
      risk: ["The chapter gives no risk factors (p. 834)."],
      differential: [
        { id: "adjustment", how: "Emotional or behavioral symptoms out of proportion to the transition, or with significant impairment, meeting Chapter 7 criteria (app guidance)." },
        { id: "mdd", how: "A full depressive episode after retirement or childbirth is a disorder (with peripartum onset where it applies) (Chapter 4; app guidance)." },
        { id: "social-environment-problem", how: "Adjusting to a **new culture** is acculturation difficulty, Z60.3 (p. 832)." }
      ],
      pearls: ["Expected transitions, not unexpected stressors (p. 834; app reading).", "Retirement and the empty nest are the classic exam examples (p. 834)."],
      cmp: { symptoms: "Difficulty adjusting to a normal life-cycle transition", exclusions: "Adjustment disorder; depressive disorder; acculturation", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A recently retired engineer feeling aimless and quarrelling at home, without a mental disorder"], ["Key test", "Life-cycle transition is the focus"], ["Code", "Z60.0"]],
      updates: upd("**Z60.0**" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    },
    {
      id: "religious-spiritual-problem", ch: "ch22", sec: "s22-additional", pages: "834", critPages: "834",
      name: "Religious or spiritual problem", code: "Z65.8",
      codes: [["Z65.8", "Religious or spiritual problem", NC]],
      aka: ["spiritual crisis", "loss of faith", "religious conversion problem"],
      essence: "The focus is a **religious or spiritual problem**: distress from **losing or questioning faith**, problems tied to **conversion** to a new faith, or **questioning spiritual values**, which need not involve an **organized church or religious institution** (p. 834).",
      duration: "Not applicable",
      functioning: "Not described (p. 834). " + NOTMD,
      mood: "Distress is implied by the examples (p. 834)",
      criteria: [
        ["What", "The focus of clinical attention is a religious or spiritual problem (p. 834)."],
        ["Examples", "Distressing loss or questioning of faith; problems linked to converting to a new faith; questioning spiritual values, not necessarily tied to an organized church or institution (p. 834)."],
        ["Code", "**Z65.8** (p. 834)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 834)"]],
      risk: ["The chapter gives no risk factors (p. 834)."],
      differential: [
        { id: "schizophrenia", how: "Religious content can appear in delusions; culturally shared beliefs and experiences are not delusions (Chapter 2; app guidance)." },
        { id: "mdd", how: "Guilt and hopelessness with religious themes can be part of a depressive episode (Chapter 4; app guidance)." },
        { id: "phase-of-life-problem", how: "A developmental transition rather than a crisis of faith (p. 834)." }
      ],
      pearls: ["Does **not** require an organized religion (p. 834).", "Conversion problems count (p. 834).", "Assess within the person’s cultural and religious frame (app guidance)."],
      cmp: { symptoms: "Distress over loss or questioning of faith, conversion, spiritual values", exclusions: "Psychotic or depressive disorders with religious content", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A seminarian distressed by doubts about his faith, without depression or psychosis"], ["Key test", "Spiritual or religious problem is the focus"], ["Code", "Z65.8"]],
      updates: upd("**Z65.8**" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    },
    {
      id: "antisocial-behavior", ch: "ch22", sec: "s22-behavior-adherence", pages: "835", critPages: "835",
      name: "Adult or child/adolescent antisocial behavior", code: "Z72.811",
      codes: [
        ["Z72.811", "Adult antisocial behavior", NC],
        ["Z72.810", "Child or adolescent antisocial behavior", NC]
      ],
      aka: ["adult antisocial behavior", "child or adolescent antisocial behavior", "criminal behavior without a mental disorder"],
      essence: "Antisocial behavior that is the focus but is **not attributable to a mental disorder**. **Z72.811 adult**: not due to conduct disorder or antisocial personality disorder; examples are **professional thieves, racketeers, drug dealers**. **Z72.810 child or adolescent**: not due to intermittent explosive or conduct disorder; **isolated acts, not a pattern** (p. 835).",
      duration: "Not applicable",
      functioning: "Not described (p. 835). " + NOTMD,
      mood: "Not part of the definition (p. 835)",
      criteria: [
        ["Z72.811", "Adult antisocial behavior that is the focus of attention and is not attributable to a mental disorder such as conduct disorder or antisocial personality disorder; examples are some professional thieves, racketeers or illegal-drug dealers (p. 835)."],
        ["Z72.810", "Antisocial behavior in a child or adolescent that is the focus and is not attributable to a mental disorder such as intermittent explosive disorder or conduct disorder; examples are **isolated** acts rather than a pattern (p. 835)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 835)"]],
      risk: ["The chapter gives no risk factors (p. 835)."],
      differential: [
        { id: "conduct-disorder", how: "A **repetitive, persistent pattern** violating others’ rights or major norms, with the Chapter 15 count and duration (app summary)." },
        { id: "antisocial-pd", how: "Age 18 or older, evidence of conduct disorder before 15, and a pervasive pattern (Chapter 18; app summary)." },
        { id: "ied", how: "Recurrent impulsive aggressive outbursts out of proportion to provocation (Chapter 15; app summary)." },
        { id: "oppositional-defiant", how: "Angry, defiant, vindictive pattern without serious rule violations (Chapter 15; app guidance)." },
        { id: "legal-problem", how: "The consequences (conviction, imprisonment) are coded with Z65 (pp. 832–833)." }
      ],
      pearls: ["The test is **not attributable to a mental disorder** (p. 835).", "Child/adolescent: **isolated acts**, not a pattern (p. 835).", "Adult examples are **career criminals** (p. 835).", "**Z72.811** adult, **Z72.810** child (p. 835): the higher digit is the adult."],
      cmp: { symptoms: "Antisocial acts not explained by a mental disorder; isolated in youth", exclusions: "Conduct disorder, ASPD, IED", prevalence: "Not given", course: "Isolated acts (youth) or a criminal career without a disorder (adult)" },
      clues: [["Core picture", "A 15-year-old caught shoplifting once on a dare, with no other conduct problems"], ["Key test", "Not attributable to a disorder; not a pattern"], ["Code", "Z72.810 (child), Z72.811 (adult)"]],
      updates: upd("**Z72.810 / Z72.811**" + UNCH + "; no APA DSM-5-TR update changed them. ICD-10-CM titles were not verified for the app." + ICD11 + APA)
    },
    {
      id: "nonadherence", ch: "ch22", sec: "s22-behavior-adherence", pages: "835", critPages: "835",
      name: "Nonadherence to medical treatment", code: "Z91.199",
      codes: [["Z91.199", "Nonadherence to medical treatment (printed Z91.19; ICD-10-CM title “Patient’s noncompliance with other medical treatment and regimen due to unspecified reason”; record the DSM name)", "Z91.199 since October 1, 2022 (APA update)"]],
      aka: ["noncompliance with treatment", "treatment nonadherence", "medication nonadherence"],
      essence: "The focus is **nonadherence to an important part of treatment** for a mental or other medical condition, for reasons such as **side effects**, **cost**, personal **values** or **religious or cultural beliefs**, **age-related debility**, or a **mental disorder** (schizophrenia, a personality disorder). Use only when it is **severe enough to need attention in its own right** and **PFAMC** criteria are **not** met (p. 835).",
      duration: "Not applicable",
      functioning: "Must be severe enough to warrant independent clinical attention (p. 835). " + NOTMD,
      mood: "Not part of the definition (p. 835)",
      criteria: [
        ["What", "The focus is failure to follow an important part of treatment for a mental or other medical condition (p. 835)."],
        ["Reasons", "Discomfort from treatment (side effects), expense, personal value judgments or religious or cultural beliefs about the treatment, age-related debility, a mental disorder such as schizophrenia or a personality disorder (p. 835)."],
        ["Threshold", "Severe enough to warrant independent clinical attention (p. 835)."],
        ["Excludes", "Presentations meeting criteria for psychological factors affecting other medical conditions (p. 835)."],
        ["Code", "**Z91.199** (printed Z91.19; APA update, October 2022)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 835)"]],
      risk: ["Reasons named by the manual double as risk factors to ask about: side effects, cost, beliefs, debility, mental disorder (p. 835)."],
      differential: [
        { id: "pfamc", how: "When a psychological or behavioral factor (including poor adherence) adversely affects a medical condition as Chapter 9 describes, PFAMC is diagnosed and Z91.199 is not used (p. 835)." },
        { id: "schizophrenia", how: "Nonadherence driven by poor insight is common; the disorder is coded, and Z91.199 added only if the nonadherence needs separate attention (p. 835; app guidance)." },
        { id: "medication-induced-acute-akathisia", how: "Side effects such as akathisia are a named reason; code the side effect too when it is a focus (pp. 813, 835; app guidance)." },
        { id: "economic-problem", how: "Cost-driven nonadherence may also take Z59.6 or Z59.71 (pp. 832, 835; app reading)." }
      ],
      pearls: ["Write **Z91.199**, not the printed Z91.19 (APA update, October 2022).", "Not if **PFAMC** criteria are met (p. 835).", "Must be **severe enough** for independent attention (p. 835).", "Ask **why**: side effects, cost, beliefs, debility, disorder (p. 835)."],
      cmp: { symptoms: "Nonadherence to an important part of treatment, severe enough for its own attention", exclusions: "PFAMC; trivial lapses", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A man with schizophrenia who stops his antipsychotic every few months because of weight gain, leading to relapse"], ["Key test", "Severe, important, not PFAMC"], ["Code", "Z91.199 (printed Z91.19)"]],
      updates: upd("On **October 1, 2022** ICD-10-CM split **Z91.19** into **Z91.190** (noncompliance with other medical treatment and regimen due to financial hardship), **Z91.198** (other reason) and **Z91.199** (unspecified reason); the **APA’s September 2022 update** (effective October 1, 2022) assigns DSM-5-TR nonadherence to medical treatment to **Z91.199**. No later change was found (confirm against the official tabular list). ICD-10-CM also has more specific underdosing and regimen codes (Z91.11-, Z91.12-, Z91.13-, Z91.14-, Z91.15-) that the DSM does not list." + ICD11 + APA)
    },
    {
      id: "overweight-obesity", ch: "ch22", sec: "s22-behavior-adherence", pages: "835", critPages: "835",
      name: "Overweight or obesity", code: "E66.9",
      codes: [["E66.9", "Overweight or obesity (ICD-10-CM title “Obesity, unspecified”; record the DSM name)", NC]],
      aka: ["obesity", "overweight", "weight problem"],
      essence: "Coded when **overweight or obesity is a focus of clinical attention**; the manual says nothing more (p. 835). Relevant in psychiatry for **antipsychotic-related weight gain** and for eating disorders (app guidance).",
      duration: "Not applicable",
      functioning: "Not described (p. 835). " + NOTMD,
      mood: "Not part of the definition (p. 835)",
      criteria: [
        ["What", "Overweight or obesity is a focus of clinical attention (p. 835)."],
        ["Code", "**E66.9** (p. 835)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 835)"]],
      risk: ["Not given in the chapter; app guidance: second-generation antipsychotics (especially olanzapine and clozapine) and some mood stabilizers cause weight gain; monitor weight and metabolic indices."],
      differential: [
        { name: "Binge-eating disorder", how: "Recurrent binge eating with loss of control meeting Chapter 10 criteria; obesity may coexist (app guidance)." },
        { id: "bulimia", how: "Binges with compensatory behavior; weight is often normal (Chapter 10; app guidance)." },
        { id: "counseling-encounter", how: "**Z71.3** dietary counseling records the counseling encounter (p. 834)." },
        { id: "other-psychosocial-circumstances", how: "Inactivity or poor diet as a lifestyle focus: **Z72.9** (p. 833)." }
      ],
      pearls: ["Obesity is **not** a mental disorder (p. 835; app note).", "ICD-10-CM asks for an additional **BMI** code (Z68.-) (outside the DSM).", "ICD-10-CM added **E66.811–E66.813** (obesity class 1–3) on October 1, 2024; the DSM keeps **E66.9** (app note)."],
      cmp: { symptoms: "Overweight or obesity as a focus of care", exclusions: "Eating disorders explaining it", prevalence: "Not given", course: "Coded while it is a focus" },
      clues: [["Core picture", "A woman with bipolar disorder who gained 15 kg on olanzapine and wants a weight plan"], ["Key test", "Weight is the focus"], ["Code", "E66.9"]],
      updates: upd("**E66.9** (ICD-10-CM title “Obesity, unspecified”; ICD-10-CM asks for an additional BMI code, Z68.-)" + UNCH + ". ICD-10-CM added **E66.811, E66.812, E66.813** (obesity class 1, 2, 3) on **October 1, 2024**; no APA update adopted them, so the DSM code stays E66.9." + ICD11 + APA)
    },
    {
      id: "malingering", ch: "ch22", sec: "s22-malingering", pages: "835", critPages: "835",
      name: "Malingering", code: "Z76.5",
      codes: [["Z76.5", "Malingering", NC]],
      aka: ["feigning for gain", "symptom exaggeration for external incentive", "simulation (older term)"],
      essence: "**Intentional** production of **false or grossly exaggerated** physical or psychological symptoms, driven by **external incentives** (avoiding military duty or work, compensation, evading prosecution, obtaining drugs); sometimes **adaptive** (feigning illness as a wartime captive). **Strongly consider** it with any combination of: **medicolegal context**, **marked discrepancy** between claims and findings, **poor cooperation**, **antisocial personality disorder** (p. 835).",
      duration: "Not applicable",
      functioning: "Claimed disability out of keeping with objective findings is one of the indicators (p. 835). " + NOTMD,
      mood: "Not part of the definition (p. 835)",
      criteria: [
        ["Essential feature", "Physical or psychological symptoms that are invented or grossly exaggerated on purpose, for the sake of an external incentive (p. 835)."],
        ["Incentives", "Avoiding military duty or work, obtaining financial compensation, evading criminal prosecution, obtaining drugs (p. 835)."],
        ["Adaptive", "May be adaptive in some circumstances, for example feigning illness while held captive by an enemy in wartime (p. 835)."],
        ["Consider when (any combination)", "1) Medicolegal context (attorney referral, or self-referral with litigation or charges pending); 2) marked discrepancy between claimed stress or disability and objective findings; 3) lack of cooperation with evaluation and prescribed treatment; 4) antisocial personality disorder (p. 835). These prompt consideration; they are not a criteria set."],
        ["Versus factitious", "External incentive present in malingering, absent in factitious disorder (p. 835)."],
        ["Versus FND and somatic disorders", "Intentional production and obvious external incentives (p. 835)."],
        ["Definite feigning", "For example, function lost during examination but intact at home: factitious disorder if the apparent aim is the sick role, malingering if it is a gain such as money (p. 835)."],
        ["Code", "**Z76.5** (p. 835)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 835)"]],
      risk: ["Contexts named: medicolegal, compensation, military, criminal, drug-seeking (p. 835).", "Antisocial personality disorder is one of the four indicators (p. 835)."],
      differential: [
        { id: "factitious", how: "Feigning **without** an obvious external incentive; the aim is the sick role (p. 835)." },
        { id: "fnd", how: "Symptoms **not** intentionally produced, no obvious external incentive (p. 835)." },
        { id: "ssd", how: "Genuine distress and excessive thoughts about real or perceived symptoms, not feigned (p. 835; app guidance)." },
        { id: "antisocial-pd", how: "One of the four indicators; can be diagnosed alongside malingering (p. 835)." },
        { id: "ptsd", how: "Real PTSD can occur in a compensation setting; a medicolegal context alone proves nothing (app guidance)." }
      ],
      pearls: ["**External incentive** = malingering; **sick role** = factitious (p. 835).", "The four indicators are prompts to **consider**, not criteria (p. 835).", "Can be **adaptive** (p. 835).", "Document observations and discrepancies, not presumed motives (app guidance).", "Symptom-validity testing is outside the DSM (app note)."],
      cmp: { symptoms: "Intentional false or grossly exaggerated symptoms for an external gain", exclusions: "Factitious disorder (no external gain); FND and SSD (not intentional)", prevalence: "Not given", course: "Context-bound" },
      clues: [["Core picture", "A lawyer-referred man with a pending claim, severe disability on testing and a normal gait in the car park"], ["Key test", "Intentional + external incentive"], ["Code", "Z76.5"]],
      updates: upd("**Z76.5**" + UNCH + "; no APA DSM-5-TR update changed it. ICD-10-CM title not verified for the app." + ICD11 + APA)
    },
    {
      id: "age-related-cognitive-decline", ch: "ch22", sec: "s22-cognitive", pages: "835–836", critPages: "835–836",
      name: "Age-related cognitive decline", code: "R41.81",
      codes: [["R41.81", "Age-related cognitive decline", NC]],
      aka: ["normal cognitive aging", "benign senescent forgetfulness (older term)", "age-associated memory impairment (older research term)"],
      essence: "An **objectively identified** cognitive decline due to **aging** that stays **within normal limits for age**: trouble recalling **names or appointments**, difficulty with **complex problem solving**. Use **only after** excluding a **specific mental disorder** and a **neurological condition** (pp. 835–836).",
      duration: "Not applicable",
      functioning: "Within normal limits for age; independence is preserved (pp. 835–836; app reading)",
      mood: "Not part of the definition; depression is one of the disorders to exclude (app guidance)",
      criteria: [
        ["What", "An objectively identified decline in cognition resulting from aging and within normal limits for the person’s age (pp. 835–836)."],
        ["Complaints", "Problems remembering names or appointments; difficulty solving complex problems (p. 836)."],
        ["Only after", "Determining that the impairment is not better explained by a specific mental disorder and not attributable to a neurological condition (p. 836)."],
        ["Code", "**R41.81** (p. 835)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (pp. 835–836)"]],
      risk: ["Aging itself (pp. 835–836)."],
      differential: [
        { id: "mild-ncd", how: "Modest decline **beyond** age expectations from a previous level, with concern and objective deficit, independence preserved (Chapter 17)." },
        { id: "major-ncd", how: "Substantial decline that interferes with independence (Chapter 17)." },
        { id: "mdd", how: "Depression can impair concentration and memory and must be excluded (app guidance)." },
        { id: "delirium", how: "Acute, fluctuating disturbance of attention and awareness (Chapter 17; app guidance)." }
      ],
      pearls: ["**Within normal limits** for age (pp. 835–836).", "Decline must be **objectively** identified (p. 835).", "Exclude a mental disorder **and** a neurological condition first (p. 836).", "No test cutoff is given (app note)."],
      cmp: { symptoms: "Forgetting names and appointments; slower complex problem solving; objectively normal for age", exclusions: "Mild or major NCD; depression; neurological disease", prevalence: "Not given", course: "Gradual, consistent with aging" },
      clues: [["Core picture", "A 72-year-old who forgets names, with testing in the normal range for age and normal imaging"], ["Key test", "Within normal limits for age, after exclusions"], ["Code", "R41.81"]],
      updates: upd("**R41.81**" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    },
    {
      id: "borderline-intellectual-functioning", ch: "ch22", sec: "s22-cognitive", pages: "836", critPages: "836",
      name: "Borderline intellectual functioning", code: "R41.83",
      codes: [["R41.83", "Borderline intellectual functioning", NC]],
      aka: ["BIF", "borderline intelligence", "below-average intellectual functioning"],
      essence: "Coded when borderline intellectual functioning is the **focus** or **affects treatment or prognosis**. Separating it from **mild intellectual developmental disorder** needs careful assessment of **intellectual and adaptive** functions **and their discrepancies**, especially when a disorder such as **schizophrenia** or **ADHD with severe impulsivity** undermines **standardized testing** (p. 836).",
      duration: "Not applicable",
      functioning: "Adaptive function is assessed to separate it from IDD (p. 836). " + NOTMD,
      mood: "Not part of the definition (p. 836)",
      criteria: [
        ["When", "Borderline intellectual functioning is the focus of clinical attention or affects treatment or prognosis (p. 836)."],
        ["Versus IDD", "Distinguishing it from mild intellectual developmental disorder needs careful assessment of intellectual and adaptive function and of discrepancies between them (p. 836)."],
        ["Caution", "Especially when co-occurring disorders impair cooperation with standardized testing, such as schizophrenia or ADHD with severe impulsivity (p. 836)."],
        ["Code", "**R41.83** (p. 836)."]
      ],
      specifiers: [],
      epi: [["Prevalence", "Not given in the chapter (p. 836)"]],
      risk: ["The chapter gives no risk factors (p. 836)."],
      differential: [
        { id: "idd", how: "Deficits in intellectual **and** adaptive functioning with onset in the developmental period (Chapter 1)." },
        { id: "unspecified-idd", how: "For people over 5 when assessment is not possible because of sensory, physical or severe behavioral problems (Chapter 1; app guidance)." },
        { id: "schizophrenia", how: "Named as a disorder that can distort testing (p. 836)." },
        { name: "ADHD with severe impulsivity", how: "Named as a disorder that can distort testing (p. 836)." },
        { id: "educational-problem", how: "Underachievement (Z55.3) means performance **below** capacity, not low capacity (p. 830; app reading)." }
      ],
      pearls: ["The manual gives **no IQ range** (p. 836); the older IQ 71–84 convention is outside DSM-5-TR (app note).", "**Adaptive** function is the hinge versus mild IDD (p. 836).", "Retest when a co-occurring disorder may have spoiled testing (p. 836; app guidance)."],
      cmp: { symptoms: "Below-average intellectual functioning without meeting IDD", exclusions: "Mild IDD (adaptive deficits); invalid testing from co-occurring disorders", prevalence: "Not given", course: "Stable" },
      clues: [["Core picture", "A young man with schizophrenia whose low test scores were obtained while acutely psychotic; adaptive skills are fair"], ["Key test", "Intellectual and adaptive function and their discrepancy"], ["Code", "R41.83"]],
      updates: upd("**R41.83**" + UNCH + "; no APA DSM-5-TR update changed it." + ICD11 + APA)
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Suicidal behavior vs nonsuicidal self-injury", ids: ["suicidal-behavior", "nssi"] },
    { label: "Uncomplicated bereavement vs MDD vs prolonged grief disorder", ids: ["uncomplicated-bereavement", "mdd", "pgd"] },
    { label: "Malingering vs factitious disorder vs functional neurological symptom disorder", ids: ["malingering", "factitious", "fnd"] },
    { label: "Antisocial behavior vs conduct disorder vs antisocial personality disorder", ids: ["antisocial-behavior", "conduct-disorder", "antisocial-pd"] },
    { label: "Age-related cognitive decline vs mild neurocognitive disorder", ids: ["age-related-cognitive-decline", "mild-ncd"] },
    { label: "Borderline intellectual functioning vs intellectual developmental disorder", ids: ["borderline-intellectual-functioning", "idd"] }
  ]);
})();
