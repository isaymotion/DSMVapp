/* Chapter 20 high yield. Bold text becomes a blank in "Hide key facts" mode, so bold the answer, not the topic.
   Source: DSM-5-TR, Other Mental Disorders and Additional Codes (pp. 803–806), in the app’s own words, with
   Section I, “Use of the Manual” (pp. 22–24), labeled where used. Codes checked against ICD-10-CM through FY2027
   (October 1, 2026): F06.8, F09, F99 and Z03.89 unchanged since FY2016. ICD-10-CM titles, ICD-11 and practical
   advice are outside the DSM and labeled as such. */
SP.add("ch20", "highYield", [
  { id: "hy20-map", topic: "The chapter at a glance", items: [
    "The chapter contains **no** criteria sets, only definitions and recording rules (pp. 803–805).",
    "It offers **four** residual categories plus one additional code (pp. 803–805).",
    "Each of the four residual categories requires clinically significant **distress or impairment** (p. 803).",
    "Two categories cover symptoms that are a **direct physiological consequence** of another medical condition (p. 803).",
    "The only example symptom picture the chapter names: **dissociative symptoms** (pp. 803–804).",
    "The additional code for an evaluation that finds nothing: **Z03.89** (p. 805)."
  ] },
  { id: "hy20-conditions", topic: "The four conditions for F99", items: [
    "Condition 1: the presentation **is** a mental disorder, shown by distress or impairment (p. 803).",
    "Condition 2: it meets criteria for **no specific** Section II disorder (p. 803).",
    "Condition 3: it fits no chapter-specific **other specified or unspecified** category (p. 803).",
    "Condition 4: **no other** mental disorder diagnosis applies (p. 803).",
    "Subthreshold low mood after a breakup takes **adjustment disorder** if its criteria fit, otherwise a Chapter 4 residual; never F99 (app guidance).",
    "F99 is meant for a presentation that fits **no chapter** at all (app reading of p. 803)."
  ] },
  { id: "hy20-f068", topic: "Other specified mental disorder due to AMC (F06.8)", items: [
    "Code for other specified mental disorder due to another medical condition: **F06.8** (p. 803).",
    "F06.8 applies when no **specific** “due to another medical condition” disorder fits (pp. 803–804).",
    "With F06.8, the clinician **states the reason** the presentation falls short (p. 804).",
    "In the name, the actual medical condition **replaces** the words “another medical condition” (p. 804).",
    "The other specified line ends with the **symptom manifestation** (p. 804).",
    "The medical condition’s code is listed **immediately before** F06.8 (p. 804).",
    "In the manual’s example, G40.209 (complex partial seizures) comes first and the F06.8 line closes with “**dissociative symptoms**” (p. 804).",
    "Dissociation caused by seizures lands here because Chapter 8 has **no** “due to another medical condition” disorder (app reading)."
  ] },
  { id: "hy20-f09", topic: "Unspecified mental disorder due to AMC (F09)", items: [
    "Code for unspecified mental disorder due to another medical condition: **F09** (p. 805).",
    "With F09, the clinician **does not state** the reason criteria are not met (p. 805).",
    "F09 also covers presentations with **insufficient information**, as in an emergency room (p. 805).",
    "In the F09 version of the seizure example, the line stops at the condition’s name: **no symptom phrase** is added (p. 805).",
    "As with F06.8, the medical condition is coded and listed **first** (p. 805).",
    "F06.8 and F09 differ in code; the only clinical difference is whether the **reason is recorded** (pp. 804–805)."
  ] },
  { id: "hy20-f99", topic: "Other specified and unspecified mental disorder (F99)", items: [
    "Code for other specified mental disorder: **F99** (p. 805).",
    "Code for unspecified mental disorder: **F99**, the same code (p. 805).",
    "Because the code is shared, the **written name** shows which category was meant (p. 805).",
    "Other specified mental disorder is recorded as the name followed by the **specific reason** (p. 805).",
    "Unspecified mental disorder includes cases with **too little information**, for example in emergency settings (p. 805).",
    "The manual gives **no** example presentation for other specified mental disorder (p. 805)."
  ] },
  { id: "hy20-z0389", topic: "Z03.89 No diagnosis or condition", items: [
    "Z03.89 is used after the person **has been evaluated** and nothing is found (p. 805).",
    "Z03.89 means no mental disorder **or condition** is present (p. 805).",
    "Z03.89 is an **additional code**, not a mental disorder (p. 805).",
    "An unclear picture still under assessment takes an **unspecified** category or a provisional diagnosis, not Z03.89 (app guidance).",
    "A psychosocial problem without a disorder takes a Z code from **Chapter 22**, [[ch:ch22|Other Conditions That May Be a Focus of Clinical Attention]], not Z03.89 (app guidance).",
    "ICD-10-CM title (outside the DSM): Z03.89 is “encounter for observation for other suspected diseases and conditions **ruled out**”."
  ] },
  { id: "hy20-coding", topic: "Recording, coding and Section I rules", items: [
    "Other specified versus unspecified is decided by whether the clinician **chooses** to record the reason (p. 803).",
    "Section I (p. 23): the choice between other specified and unspecified is **clinical judgment**.",
    "Section I (p. 22): in settings such as the emergency department, a chapter’s unspecified category can serve as a **placeholder** until a fuller differential is possible.",
    "Section I (pp. 23–24): when the disorder due to the medical condition is the principal diagnosis, it is the **second** line listed.",
    "Section I (pp. 23–24): “(principal diagnosis)” or “(**reason for visit**)” may be added after the diagnosis for clarity.",
    "Section I (p. 24): “**(provisional)**” marks a strong presumption that criteria will be confirmed.",
    "The chapter’s introductory example of a medical condition coded first: **B20** HIV disease (p. 803).",
    "Outside the DSM: F06.8, F09, F99 and Z03.89 are **unchanged** in ICD-10-CM from FY2016 through FY2027 (October 2026).",
    "ICD-10-CM title (outside the DSM): F99 is “mental disorder, **not otherwise specified**”.",
    "Outside the DSM: F99 carries an Excludes1 note against **F09**, so a medically caused picture never takes F99.",
    "September 2022 APA coding update (outside the printed DSM): since October 2022, mild NCD due to a medical condition is **F06.70/F06.71** (formerly G31.84), not F06.8.",
    "ICD-11 (outside the DSM; app mapping): the nearest equivalents of F99 are **6E8Y and 6E8Z**."
  ] }
]);
