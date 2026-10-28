/* Chapter 25 study guide. Source: DSM-5-TR Section III, Conditions for Further Study (pp. 903–927), with the Section III
   introduction (pp. 839–840). Written in the app’s own words from the manual, with page references. The seven proposed
   criteria sets are paraphrased: confirm exact wording against the manual. None of these conditions is an official
   diagnosis; the “recording” content shows which Section II category or Chapter 22 code a clinician would use, and is app
   guidance. ICD-10-CM checked through FY2027 (October 1, 2026) and the APA DSM-5-TR updates of 2022–2025 for the codes the
   chapter cites (no change found for those checked; confirm against the official tabular list). ICD-11, evidence newer
   than the manual, treatment and exam strategy are outside the DSM and labeled as such. Self-harm content is clinical
   and never instructional. */
SP.add("ch25", "guide", {
  intro: "Section III is the manual’s **workshop**: measures, the cultural formulation, the alternative personality model, and this chapter of **seven proposed criteria sets** that the DSM-5 Task Force judged **not yet ready** for official use (pp. 839–840, 903). They are here to give researchers and clinicians a **common language** (p. 903), and they are tested because each one sits next to a Section II diagnosis you already know: [[dx:attenuated-psychosis-syndrome|attenuated psychosis syndrome]] beside [[dx:brief-psychotic-disorder|brief psychotic disorder]] and [[dx:schizotypal-pd|schizotypal personality disorder]]; [[dx:short-duration-hypomania|depressive episodes with short-duration hypomania]] beside [[dx:bipolar-ii|bipolar II disorder]]; [[dx:caffeine-use-disorder|caffeine use disorder]] beside the Section II [[dx:caffeine-withdrawal|caffeine withdrawal]]; [[dx:internet-gaming-disorder|Internet gaming disorder]] beside [[dx:gambling|gambling disorder]]; [[dx:nd-pae|neurobehavioral disorder associated with prenatal alcohol exposure]] beside [[dx:adhd|ADHD]] and [[dx:idd|intellectual developmental disorder]]; and [[dx:suicidal-behavior-disorder|suicidal behavior disorder]] and [[dx:nssi-disorder|nonsuicidal self-injury disorder]] beside the Chapter 22 codes for [[dx:suicidal-behavior|suicidal behavior]] and [[dx:nssi|nonsuicidal self-injury]]. The rule that governs every question is on p. 903: **only Section II is official**. Learn the thresholds, the time rules, and what you would actually write in the chart. The [[helper:further-study|conditions-for-further-study helper]] walks through the decisions.",
  objectives: [
    "State what Section III is for and why these seven sets are **not for clinical use**, and name the condition that **left** this chapter for Section II (**prolonged grief disorder**, formerly persistent complex bereavement disorder) (p. 903).",
    "Give each condition’s **threshold and time rule**: APS (one attenuated symptom, **weekly for a month**, **begun or worsened within a year**, psychosis never met); short-duration hypomania (**two or more** lifetime periods of **2–3 days** plus a lifetime MDE); caffeine use disorder (**the first three** criteria within 12 months); Internet gaming disorder (**5 of 9** in 12 months); ND-PAE (B, C and D domains with **childhood onset**); suicidal behavior disorder (an attempt within **24 months**; current ≤12, early remission 12–24); NSSI disorder (**5 or more days** in the last year).",
    "Explain why attenuated psychosis is a **state** with **preserved insight**, and recall the conversion figures: 3-year risk **up to 22%**, **73%** of converters to a schizophrenia spectrum disorder, **34.9%** over 10 years, the **thirds** rule (pp. 904–905).",
    "Apply the bipolar II rule: one **4-day** hypomania plus a lifetime MDE is bipolar II **permanently**, and a lifetime MDE **excludes** cyclothymic disorder (pp. 909–910).",
    "Explain why caffeine use disorder has a **higher threshold** than other substance use disorders, and why **tolerance and withdrawal alone** do not make the diagnosis (pp. 911, 913).",
    "Distinguish Internet gaming disorder from **Internet gambling** (gambling disorder), from **other Internet use** (social media, pornography) and from professional use; know that its withdrawal has **no physical signs** (pp. 913–916).",
    "Define **more than minimal** prenatal alcohol exposure (**>13 drinks a month** or **>2 on one occasion**), the **2-of-4 adaptive rule** with communication or social communication required, the **deferral under age 3**, and that ND-PAE can be diagnosed **without** fetal alcohol syndrome features (pp. 916–918).",
    "Define a **suicide attempt** by the expectation of death at the **time of initiation**, know what counts (**interrupted** and **changed-mind** attempts after initiation) and what does not (ideation, preparation, delirium, dissuasion **before** starting, purely political or religious acts), and recall the **T14.91XA/XD** and **Z91.51** codes (pp. 920–921).",
    "Describe NSSI disorder’s functions (**negative reinforcement**), its course (teen onset, peak in the **late teens and early 20s**, self-injury preceding attempts by **1–2 years**), the **cultural** and **group-belonging** exclusions, and the look-alikes that take precedence (**trichotillomania, excoriation, stereotypic movement disorder**) (pp. 923–926).",
    "Record each condition correctly: the Section II **residual categories** (F28, F31.89, F15.99, F88, F99) and the Chapter 22 codes (**T14.91XA/XD, Z91.51, R45.88, Z91.52**), all as app guidance built on the manual’s own examples."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s25-map",
          title: "What Section III is, and what this chapter holds",
          pages: "839–840, 903",
          blocks: [
            { type: "p", text: "DSM-5 was designed to be a **living** manual, and Section III, **Emerging Measures and Models**, is where it grows (p. 840). It has four parts: **assessment measures** (the Level 1 cross-cutting symptom measure, the clinician-rated psychosis severity dimensions, WHODAS 2.0), **Culture and Psychiatric Diagnosis** with the Cultural Formulation Interview, the **Alternative DSM-5 Model for Personality Disorders**, and **Conditions for Further Study** (pp. 839–840). This chapter is the last of those." },
            { type: "defs", title: "The ground rules (p. 903)", items: [
              ["Why the sets exist", "To **encourage research** that will clarify these conditions and inform decisions about **placing them in a future edition**."],
              ["Where the thresholds came from", "**Expert consensus**, informed by literature review, data reanalysis and field trials where they existed. The sets give researchers and clinicians a **common language**."],
              ["What the Task Force decided", "After empirical review and public comment, that the evidence was **insufficient** to make these official diagnoses in Section II."],
              ["What that means in the clinic", "The proposed sets are **not intended for clinical use**. Only Section II criteria and disorders are **officially recognized** for clinical purposes."],
              ["The one that graduated", "**Persistent complex bereavement disorder** began in this section; with evidence of validity, reliability and clinical utility it moved to the trauma- and stressor-related chapter as [[dx:pgd|prolonged grief disorder]], with reformulated criteria."]
            ] },
            { type: "table", caption: "The seven conditions for further study (DSM-5-TR pp. 903–927)", head: ["Condition", "Core rule", "Nearest Section II neighbor", "Pages"], rows: [
              ["[[dx:attenuated-psychosis-syndrome|Attenuated psychosis syndrome]]", "**One** attenuated symptom, **weekly for 1 month**, new or worse within **1 year**, insight kept; psychosis **never** met", "[[dx:brief-psychotic-disorder|Brief psychotic disorder]], [[dx:schizotypal-pd|schizotypal PD]], [[dx:other-specified-psychotic|F28]]", "903–907"],
              ["[[dx:short-duration-hypomania|Depressive episodes with short-duration hypomania]]", "A lifetime MDE plus **two or more** hypomanic periods of **2–3 days**", "[[dx:bipolar-ii|Bipolar II]], [[dx:cyclothymic|cyclothymic]], [[dx:other-specified-bipolar|F31.89]]", "907–910"],
              ["[[dx:caffeine-use-disorder|Caffeine use disorder]]", "**The first three** criteria (cut-down, use despite harm, withdrawal) within **12 months**", "[[dx:caffeine-withdrawal|Caffeine withdrawal]], [[dx:caffeine-intox|intoxication]]", "910–913"],
              ["[[dx:internet-gaming-disorder|Internet gaming disorder]]", "**5 of 9** in **12 months**; nongambling games only", "[[dx:gambling|Gambling disorder]]", "913–916"],
              ["[[dx:nd-pae|Neurobehavioral disorder associated with prenatal alcohol exposure]]", "More than minimal exposure; neurocognitive **1 of 5**, self-regulation **1 of 3**, adaptive **2 of 4**; **childhood onset**", "[[dx:other-specified-nd|F88]], [[dx:adhd|ADHD]], [[dx:idd|IDD]]", "916–920"],
              ["[[dx:suicidal-behavior-disorder|Suicidal behavior disorder]]", "A **suicide attempt** within **24 months**; current ≤12, early remission 12–24", "[[dx:suicidal-behavior|Suicidal behavior]] (Ch 22 codes)", "920–923"],
              ["[[dx:nssi-disorder|Nonsuicidal self-injury disorder]]", "Self-injury on **5 or more days** in the last year, **without** suicidal intent, to relieve or change a feeling state", "[[dx:nssi|Nonsuicidal self-injury]] (Ch 22 codes), [[dx:borderline-pd|borderline PD]]", "923–926"]
            ] },
            { type: "update", kind: "tr", title: "What the text revision changed (comparison made by the app, not stated in the chapter)", text: "Compared with DSM-5 (2013), the text revision **removed persistent complex bereavement disorder** from this chapter (it became prolonged grief disorder in Section II, F43.81), kept the other seven proposed criteria sets with their thresholds unchanged, and **updated the descriptive text**: new prevalence and course figures (the 10-year conversion risk for attenuated psychosis, international gaming prevalence, the ND-PAE meta-analytic rates), new **Association With Suicidal Thoughts or Behavior** sections, more **culture** and **sex- and gender-related** text, and notes pointing the suicidal behavior and NSSI sets to the new Chapter 22 codes. The comparison is the app’s, made from the two editions." },
            { type: "callout", kind: "exam", title: "How examiners use this chapter", text: "Two ways. First, **threshold questions**: the one number that makes the set (weekly for a month; 2–3 days twice; the first three; 5 of 9; 13 drinks; 24 months; 5 days). Second, **boundary questions**: when does the picture stop being the Section III condition and become the Section II diagnosis next door (a 4-day hypomania, a psychotic symptom that is no longer attenuated, a wish to die rather than relief)? Either way, if a question asks what to **record**, the answer is a Section II category or a Chapter 22 code, never the Section III name alone (p. 903)." }
          ]
        },
        {
          id: "s25-recording",
          title: "How these conditions are recorded",
          pages: "903, 920, 923–924",
          blocks: [
            { type: "p", text: "The chapter gives no codes of its own, and it says plainly that the sets are not for clinical use (p. 903). Two of the seven, suicidal behavior disorder and NSSI disorder, carry a **note** pointing to the Chapter 22 codes that can accompany any diagnosis or stand alone (pp. 920, 923–924). For the rest, Section II already provides a home in the **other specified** categories, and three of those categories name the Section III condition as an example. The table collects this; it is **app guidance** assembled from the manual’s Section II examples." },
            { type: "table", caption: "Recording a presentation that matches a proposed criteria set (app guidance; codes checked through October 2026)", head: ["Condition", "What the chart gets", "Where the manual says so"], rows: [
              ["Attenuated psychosis syndrome", "[[dx:other-specified-psychotic|Other specified schizophrenia spectrum and other psychotic disorder]], **F28**, with “attenuated psychosis syndrome” as the stated reason", "Chapter 2 lists it as an F28 example"],
              ["Depressive episodes with short-duration hypomania", "[[dx:other-specified-bipolar|Other specified bipolar and related disorder]], **F31.89**, reason “short-duration hypomanic episodes (2–3 days) and major depressive episodes”", "Chapter 3 lists it as an F31.89 example"],
              ["Caffeine use disorder", "No use-disorder category exists for caffeine. Record what Section II has: [[dx:caffeine-withdrawal|caffeine withdrawal]] **F15.93** or [[dx:caffeine-intox|intoxication]] **F15.920** when present; otherwise **unspecified caffeine-related disorder, F15.99**", "Chapter 16: caffeine has intoxication, withdrawal and the unspecified category only"],
              ["Internet gaming disorder", "No Section II category names it. The manual notes its inclusion in **ICD-11** (p. 914). If a diagnosis must be recorded, the chapter-wide residual [[dx:other-specified-mental-disorder|other specified mental disorder]] **F99** (Chapter 20) is the honest choice; many clinicians instead describe the problem without a code", "App guidance; no DSM example"],
              ["ND-PAE", "[[dx:other-specified-nd|Other specified neurodevelopmental disorder]], **F88**, reason “neurodevelopmental disorder associated with prenatal alcohol exposure”", "Chapter 1 lists it as the F88 example"],
              ["Suicidal behavior disorder", "The Chapter 22 codes: **T14.91XA** (initial encounter) or **T14.91XD** (subsequent) for current suicidal behavior; **Z91.51** for a history", "Note on p. 920 (printed as T14.91A/D; see below)"],
              ["NSSI disorder", "The Chapter 22 codes: **R45.88** current nonsuicidal self-injury; **Z91.52** history", "Note on pp. 923–924"]
            ] },
            { type: "update", kind: "post", year: "2022", title: "The suicide-attempt codes need the X placeholder", source: "APA DSM-5-TR coding update (2022); ICD-10-CM FY2025–FY2027 tabular lists; checked October 27, 2026", text: "The Section III note prints **T14.91A** and **T14.91D** (p. 920). In ICD-10-CM the seventh character sits in the seventh position, so the valid codes are **T14.91XA** and **T14.91XD**, as the APA’s update and Chapter 22 of this app state. **Z91.51**, **R45.88** and **Z91.52** are printed correctly. No change was found for these codes in the October 2024, 2025 or 2026 updates; confirm against the official tabular list in force on the date of service." },
            { type: "callout", kind: "pearl", title: "Three ways to write the same thing", text: "A 17-year-old whose picture matches attenuated psychosis syndrome can be charted as (1) **F28, other specified schizophrenia spectrum and other psychotic disorder (attenuated psychosis syndrome)**, which is what the manual’s Section II example supports; (2) no diagnosis plus a note that the presentation meets the Section III proposed criteria and is being followed; or (3) a Section II diagnosis that is actually met, such as a depressive or anxiety disorder, with the attenuated symptoms described. What you cannot do is write “attenuated psychosis syndrome” as if it were an official diagnosis with its own code (p. 903). App guidance." },
            { type: "callout", kind: "caution", title: "Section III does not change Section II thresholds", text: "A proposed set never lowers the bar for its Section II neighbor. Two periods of 3-day hypomania do not make bipolar II; weekly odd perceptions with insight do not make brief psychotic disorder; 5 days of self-injury do not make borderline personality disorder. The sets describe **subthreshold or neighboring** pictures so that research can decide whether they deserve a category of their own (p. 903)." }
          ]
        }
      ]
    },
    {
      title: "Attenuated psychosis syndrome",
      sections: [
        {
          id: "s25-aps-criteria",
          title: "Attenuated psychosis syndrome: the proposed criteria",
          pages: "903–904",
          blocks: [
            { type: "p", text: "The idea is a **clinical high-risk state**: psychosis-like experiences that fall **below** the psychotic threshold, are **newer or worse** than before, trouble the person enough to need care, and have **never** crossed into a psychotic disorder (pp. 903–904)." },
            { type: "criteria", title: "Attenuated psychosis syndrome in brief (proposed; not for clinical use)", code: "No code: Section III", pages: "903–904", items: [
              ["A", "At least **one** of three symptoms, severe or frequent enough to **warrant clinical attention**: **attenuated delusions**, **attenuated hallucinations**, or **attenuated disorganized speech**."],
              ["B", "Present at least **once a week** for the **past month**."],
              ["C", "**Began or worsened** in the **past year**."],
              ["D", "**Distressing and disabling** enough to warrant clinical attention."],
              ["E", "Another mental disorder does not explain it better (a **depressive or bipolar disorder with psychotic features** is the named example); and not attributable to a substance or a medical condition."],
              ["F", "The person has **never** met criteria for **any psychotic disorder**."]
            ], note: "A, B and C are the three numbers: **one** symptom, **weekly for a month**, **within a year**. F is the gate: a single past psychotic episode closes it forever." },
            { type: "defs", title: "What “attenuated” means (p. 904)", items: [
              ["Below threshold", "Psychosis-like, but **less severe and more transient** than symptoms that would count toward a psychotic disorder; the symptom does not have the **fixed** quality that full psychosis needs."],
              ["Insight is kept", "The person has **reasonable insight**: perceptions are recognized as altered, magical ideas are **not compelling**. **Doubt** about the belief can be elicited, **skepticism** about the perception can be induced, and insight can be tested with an open question such as whether there might be another explanation."],
              ["State, not trait", "The syndrome is **state psychopathology** tied to functional impairment, not a long-standing trait; the person or others notice a **change**, which is what Criterion A’s “warrant clinical attention” captures."],
              ["Not yet psychosis", "The psychopathology has **not progressed** to full psychotic severity."]
            ] },
            { type: "table", caption: "The three symptom types by severity (p. 904)", head: ["Symptom", "Moderate", "Severe (still below threshold)"], rows: [
              ["A1 Attenuated delusions: **suspicious** content", "Views others as **untrustworthy**; hypervigilant; senses ill will", "**Loosely organized** beliefs about danger or hostile intent; guardedness that interferes with the interview; a strong sense that the world is hostile"],
              ["A1 Attenuated delusions: **grandiose** content", "Notions of being **gifted, influential or special**", "Beliefs of superiority that **alienate friends and worry relatives**; unrealistic plans and investments"],
              ["A2 Attenuated hallucinations", "**Unformed** sounds and images (shadows, trails, halos, murmurs, rumbling) felt as unusual or puzzling", "**Vivid and frequent**: recurring illusions or hallucinations that capture attention and affect concentration; behavior may be disrupted, but **skepticism can still be induced**"],
              ["A3 Attenuated disorganized communication", "Often drifts to **irrelevant topics** but **responds easily to clarifying questions**; speech meandering, circumstantial, odd but understandable", "Fails to reach the point **without external guidance** (tangential); at the most severe level, infrequent **thought blocking or loose associations** under pressure, with structure **quickly restored** by reorienting questions"]
            ] },
            { type: "list", title: "Reading the fine print (pp. 904–905)", items: [
              "The three forms of disorganized speech the text names: **odd** speech (vague, metaphorical, overly elaborate or stereotyped), **unfocused** speech (muddled, confused, too fast or too slow, the wrong words, off the track) and **meandering** speech (circumstantial, tangential).",
              "Criterion D asks for distress **and/or** impaired social or role performance; Criterion A adds that the person or responsible others **note the change and express concern**, so that care is indicated.",
              "**Measures exist** to establish whether Criteria A–E are met, or to identify a clinical high-risk state more broadly (p. 905); the manual does not name them (the SIPS and CAARMS interviews are the usual tools, outside the DSM)."
            ] },
            { type: "callout", kind: "exam", title: "The question that tests insight", text: "A 20-year-old hears murmurs at night that she thinks might be neighbors talking about her, but when asked whether there could be another explanation she agrees it may be the pipes and her imagination, and she wants help because it frightens her. That **inducible doubt** is the whole point of “attenuated” (p. 904). If she were **certain**, the symptom would be a delusion and the question would move to Chapter 2." },
            { type: "case", title: "Clinical vignette: a change noticed by the family", text: "A 19-year-old engineering student in Balanga is brought by his mother, who says that over the past 8 months he has become withdrawn and suspicious, several times a week asking whether classmates are “talking in code” about him. He concedes it is probably not true but cannot shake the feeling, has stopped joining group projects and his grades have fallen. He has never had a fixed delusion, hallucination or disorganized behavior, uses no substances, and is not depressed.", point: "A1 (suspicious attenuated delusions with inducible doubt), B (several times a week for well over a month), C (new within the year), D (distress and role impairment), E and F are all present: the picture matches **attenuated psychosis syndrome** (pp. 903–904). What goes in the chart is [[dx:other-specified-psychotic|F28]] with the reason, plus close follow-up (app guidance)." }
          ]
        },
        {
          id: "s25-aps-features",
          title: "Attenuated psychosis syndrome: features, course and differential",
          pages: "904–907",
          blocks: [
            { type: "list", title: "Associated features (p. 905)", items: [
              "Magical thinking, poor concentration, some disorganization of thought or behavior, excessive suspiciousness, anxiety, social withdrawal and a disturbed **sleep-wake cycle**.",
              "**Impaired cognition** and **negative symptoms** are often seen.",
              "Neuroimaging separates **groups** with the syndrome from controls, in a pattern like schizophrenia but milder; it is **not diagnostic in the individual**."
            ] },
            { type: "table", caption: "Numbers worth knowing (p. 905)", head: ["Finding", "Figure"], rows: [
              ["Prevalence in non-help-seeking people aged 16–40 (one Swiss study)", "**0.3%**"],
              ["People with Criterion A symptoms that did **not** begin or worsen in the past year (fail Criterion C)", "Another **2.3%**"],
              ["General population acknowledging attenuated delusions or hallucinations", "Up to **7%** across countries"],
              ["Groups with higher rates of attenuated symptoms", "**Migrants** more than native populations, possibly from trauma and discrimination"],
              ["Usual onset", "**Mid-to-late adolescence or early adulthood**; may follow normal development or earlier cognitive, negative or social impairment"],
              ["3-year cumulative risk of psychosis, help-seekers who **met** criteria", "**Up to 22%**"],
              ["3-year cumulative risk, help-seekers who did **not** meet criteria", "**1.54%**"],
              ["Among those who convert", "**73%** schizophrenia spectrum disorder; **11%** affective psychosis"],
              ["Ages in which the criteria are validated", "**12–35**, with little evidence in the youngest"],
              ["Window of highest risk", "The **first 2 years**, but risk continues for up to **10 years**"],
              ["Overall 10-year transition", "**34.9%**"],
              ["Clinical remission", "Only about **one-third**"],
              ["The thirds rule", "About one-third **develop psychosis**, one-third **remit**, one-third have **persistent disability**"]
            ] },
            { type: "list", title: "What predicts progression to psychosis (p. 905)", items: [
              "**Male** sex, lifetime stress or trauma, **unemployment**, **living alone**.",
              "Severity of attenuated **positive** symptoms, of **negative** symptoms, and of disorganized and cognitive symptoms; **poor functioning**.",
              "Most who progress develop a **schizophrenia spectrum** disorder.",
              "Other poor outcomes besides psychosis: persistent attenuated symptoms, persistent or recurrent comorbid disorders, disability and low functioning."
            ] },
            { type: "defs", title: "Risk and prognostic factors (p. 906)", items: [
              ["Temperamental", "Prognostic factors have **not been definitively characterized**."],
              ["Genetic and physiological", "In people who meet the criteria, a **family history of psychosis** does **not** add risk of transition over **4 years** compared with controls. Structural, functional, electrophysiological and neurochemical imaging findings are associated with transition but are **not validated for clinical use**."]
            ] },
            { type: "callout", kind: "culture", title: "Culture-related issues (p. 906)", text: "Perceptual experiences (hearing noises, seeing shadows) and religious or supernatural beliefs (the evil eye, curses, spirits) are **odd in some contexts and ordinary in others**. People who have lived through **trauma or persecution** (torture, political violence, racism, discrimination) can report fears that are misread as attenuated or frank paranoid delusions, because some fears are **appropriate** and can merge with posttraumatic symptoms. Groups at **higher risk of misdiagnosis**: migrants, socially oppressed ethnic and racialized groups, and others facing adversity and discrimination. The **distress and impairment** criterion is the safeguard: adaptive wariness toward authority is not paranoia." },
            { type: "p", text: "**Functional consequences (p. 906).** Many are impaired at presentation, and **modest-to-moderate** social and role impairment can **persist even after the symptoms fade**." },
            { type: "table", caption: "Differential diagnosis (pp. 906–907)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:brief-psychotic-disorder|Brief psychotic disorder]]", "Early attenuated symptoms can resemble it, but in the syndrome the delusions, hallucinations or disorganized speech **never cross the psychotic threshold**"],
              ["[[dx:schizotypal-pd|Schizotypal personality disorder]]", "A **stable trait** disorder that lacks the **state** quality (Criterion C, new or worse within a year) and needs a **broader array** of symptoms"],
              ["Reality distortions inside other disorders", "Low self-esteem or feeling disregarded in [[dx:mdd|MDD]]; feeling the focus of unwanted attention in [[dx:social-anxiety|social anxiety disorder]]; inflated self-esteem with pressured speech and less sleep in [[dx:bipolar-i|bipolar I]] or [[dx:bipolar-ii|II]]; feeling unable to feel, with fear of abandonment and self-injury, in [[dx:borderline-pd|borderline PD]]. If the distortions occur **only during** the other disorder, **no additional** attenuated psychosis diagnosis"],
              ["Adjustment reaction of adolescence", "Mild, transient symptoms typical of development and **proportionate to the stress** do not qualify"],
              ["The extreme of normal perceptual aberration and magical thinking", "Consider strongly when the distortions carry **no distress, impairment or need for care**"],
              ["[[dx:substance-induced-psychotic|Substance/medication-induced psychotic disorder]]", "Attenuated symptoms occur in **intoxication** with cannabis, hallucinogens, phencyclidine, inhalants and stimulants, and in **withdrawal** from alcohol or sedatives; if they occur **only during** substance use, prefer the induced diagnosis"],
              ["[[dx:adhd|ADHD]]", "A history of attention problems does **not** exclude the syndrome; earlier inattention may be **prodromal** or comorbid ADHD"]
            ] },
            { type: "list", title: "Comorbidity (p. 907)", items: [
              "Most have a comorbid disorder, mainly **depression (41%)** and/or **anxiety (15%)**.",
              "A little more than **half** have at least one comorbid disorder at follow-up, most of it present from the first assessment; **persistent** comorbidity predicts poor clinical and functional outcome.",
              "Some go on to new anxiety, depressive, bipolar or personality disorders, but the group is **not at increased risk of new nonpsychotic disorders** compared with help-seeking controls."
            ] },
            { type: "callout", kind: "pearl", title: "Schizotypal versus attenuated: the time axis", text: "Both can look like odd beliefs, unusual perceptions and vague speech. Ask **when it started and whether it changed**. Schizotypal personality disorder has been there, stably, since early adulthood; attenuated psychosis syndrome is a **change within the last year** (p. 906). A person can have both only if the recent worsening stands out against the trait baseline (app guidance)." },
            { type: "update", kind: "post", year: "2021", title: "Outside the DSM: the newer conversion figures", source: "Salazar de Pablo et al., JAMA Psychiatry 2021 (meta-analysis of 130 studies, 9,222 clinical high-risk people); research notes checked October 27, 2026", text: "In the largest meta-analysis of clinical high-risk cohorts, cumulative transition to psychosis was about **9%** at 6 months, **15%** at 1 year, **19%** at 2 years, **25%** at 3 years and **28%** beyond 4 years. The manual’s “up to 22% at 3 years” and “34.9% at 10 years” come from specific cohorts; quote the DSM figures on a DSM exam and know that pooled estimates are a little lower. Not from the manual." }
          ]
        }
      ]
    },
    {
      title: "Depressive episodes with short-duration hypomania",
      sections: [
        {
          id: "s25-sdh-criteria",
          title: "Short-duration hypomania: the proposed criteria",
          pages: "907–908",
          blocks: [
            { type: "p", text: "This set is bipolar II with one thing missing: the **4 days**. The person has had at least one full [[gl:major depressive episode|major depressive episode]] and at least **two** lifetime periods that look exactly like hypomania but lasted only **2 or 3 days** (pp. 907–908)." },
            { type: "criteria", title: "Depressive episodes with short-duration hypomania in brief (proposed; not for clinical use)", code: "No code: Section III", pages: "907–908", items: [
              ["MDE", "A **lifetime** major depressive episode with the usual criteria: **five or more** of nine symptoms in the same **2 weeks**, one being depressed mood or loss of interest; distress or impairment; not substance- or medically caused; not better explained by a schizophrenia spectrum disorder."],
              ["Hypomanic periods", "At least **two lifetime** periods that meet the hypomanic **symptom** criteria but last **at least 2 and fewer than 4 consecutive days**."],
              ["A", "A distinct period of **elevated, expansive or irritable mood** that is abnormal and persistent, together with abnormally and persistently **raised activity or energy**."],
              ["B", "**Three or more** of seven (**four** if the mood is only irritable), a noticeable change present to a significant degree: inflated self-esteem or grandiosity; decreased need for sleep; more talkative or pressured; flight of ideas or racing thoughts; distractibility; increased goal-directed activity or agitation; risky activities with painful consequences."],
              ["C", "An **unequivocal change** in functioning that is uncharacteristic of the person."],
              ["D", "The mood change and the functional change are **observable by others**."],
              ["E", "**Not severe enough** for marked impairment or hospitalization; any **psychotic features** make the episode **manic** by definition."],
              ["F", "Not due to a substance (a drug of abuse, a medication or other treatment)."]
            ], note: "Everything about the hypomanic periods is full-strength except the clock: **2–3 days** instead of 4 or more." },
            { type: "ladder", title: "Hypomania by duration", ticks: [[0, "0"], [25, "2 d"], [50, "4 d"], [100, "7 d"]], rows: [
              { label: "Short-duration hypomania (×2 lifetime)", from: 25, to: 50, color: "guide", span: "≥2 and <4 days" },
              { label: "Hypomanic episode (bipolar II)", from: 50, to: 100, color: "case", span: "≥4 days" },
              { label: "Manic episode (bipolar I)", from: 100, to: 100, color: "hy", span: "≥1 week, or any length if hospitalized" }
            ], note: "A single 4-day hypomania with a lifetime MDE makes bipolar II, permanently (pp. 909–910)." },
            { type: "callout", kind: "exam", title: "Count the days, then count the episodes", text: "Two numbers decide the set: each period is **2 or 3 days** (fewer than 4 consecutive days), and there must be **at least two** such periods in the person’s life, in addition to a lifetime MDE (pp. 907–908). One 3-day period with an MDE is [[dx:other-specified-depressive|other specified depressive disorder]] territory or simply MDD; two 3-day periods match this set; one **4-day** period and the diagnosis is [[dx:bipolar-ii|bipolar II]] (p. 910)." },
            { type: "case", title: "Clinical vignette: the energetic weekends", text: "A 31-year-old nurse in Mariveles with a history of two major depressive episodes describes, on three occasions over the past 4 years, 2- to 3-day stretches in which she slept 3 hours, talked nonstop, started several projects and spent beyond her means; her husband noticed each time, but she kept working and was never psychotic or hospitalized. She has never had such a period lasting 4 days. She uses no substances.", point: "A lifetime MDE plus **three** lifetime periods of **2–3 days** that meet every hypomanic criterion except duration: the picture matches **depressive episodes with short-duration hypomania** (pp. 907–909). Recorded as [[dx:other-specified-bipolar|other specified bipolar and related disorder, F31.89]] with the reason “short-duration hypomanic episodes and major depressive episodes” (app guidance from the Chapter 3 example)." }
          ]
        },
        {
          id: "s25-sdh-features",
          title: "Short-duration hypomania: features and differential",
          pages: "909–910",
          blocks: [
            { type: "defs", title: "Diagnostic and associated features (p. 909)", items: [
              ["The essence", "At least one MDE plus at least two **2- to 3-day** periods that met the hypomanic criteria except for duration; the symptoms are **intense enough** to be hypomania and are a **noticeable change** from the person’s usual self."],
              ["The bipolar II rule", "A history of a **syndromal hypomanic episode** plus an MDE **is bipolar II**, whatever the length of current hypomanic symptoms."],
              ["Who they resemble", "People with short-duration hypomania and an MDE look more like **bipolar** patients than like MDD patients: more psychiatric comorbidity, more **family history of bipolar disorder**, **earlier onset**, more **recurrent** depressions and a **higher rate of suicide attempts**."]
            ] },
            { type: "table", caption: "Numbers worth knowing (p. 909)", head: ["Finding", "Figure"], rows: [
              ["Prevalence with the DSM-5 definition", "**Unclear**: no epidemiological study has used it yet"],
              ["MDD with subthreshold hypomania (shorter than 4 days **or** fewer than three Criterion B symptoms), U.S.", "Up to **6.7%**, more common than bipolar I or II"],
              ["In clinical settings across countries", "Roughly a **quarter** of the rate seen for depression with **full-length (4-day)** hypomania"],
              ["Sex", "May be more common in **women**, who may show more **atypical** depressive features"],
              ["Family history of bipolar disorder", "**Three to four times** more common than in MDD; **similar** to full-duration hypomania"],
              ["Suicide attempts", "**Higher** than in MDD; **similar** to bipolar II"],
              ["Global functioning", "Similar scores to full-duration hypomania; specific impairments not yet determined"]
            ] },
            { type: "table", caption: "Differential diagnosis (p. 910)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:bipolar-ii|Bipolar II disorder]]", "Hypomanic **episodes** of **4 days or more**. Once one has occurred with a lifetime MDE, the diagnosis **changes to and stays** bipolar II, regardless of how long later hypomanic periods last"],
              ["[[dx:mdd|Major depressive disorder]]", "Also has a lifetime MDE; the presence of **two or more** lifetime periods of 2–3 days of hypomanic symptoms moves the picture to this set"],
              ["MDD **with mixed features**", "Hypomanic features **concurrent** with the depressive episode; here the subsyndromal hypomania and the full depression occur **at different times**"],
              ["[[dx:bipolar-i|Bipolar I disorder]]", "At least one **manic** episode: **1 week or more**, **marked impairment** or **hospitalization**; any episode with **psychotic symptoms** or needing hospitalization is manic **whatever its length**"],
              ["[[dx:cyclothymic|Cyclothymic disorder]]", "Periods of depressive and hypomanic **symptoms**, but a lifetime **MDE precludes** cyclothymic disorder"]
            ] },
            { type: "callout", kind: "caution", title: "Where it already lives in Section II", text: "Chapter 3 lists “short-duration hypomanic episodes (2–3 days) and major depressive episodes” as the first example under [[dx:other-specified-bipolar|other specified bipolar and related disorder]] (F31.89), and Chapter 4 lists depressive presentations with insufficient symptoms or duration under [[dx:other-specified-depressive|F32.89]]. The Section III set adds the full descriptive text and the research definition; the recording route is the Section II category (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Caffeine use disorder",
      sections: [
        {
          id: "s25-cud-criteria",
          title: "Caffeine use disorder: the proposed criteria",
          pages: "910–911",
          blocks: [
            { type: "p", text: "Caffeine is the one substance in Chapter 16 with [[dx:caffeine-intox|intoxication]] and [[dx:caffeine-withdrawal|withdrawal]] but **no use disorder**. Section III proposes one, with a deliberately **stricter** entry rule than the 2-of-11 pattern used for every other substance: the person must have **the first three** criteria, not any three (pp. 910–911)." },
            { type: "criteria", title: "Caffeine use disorder in brief (proposed; not for clinical use)", code: "No code: Section III", pages: "910–911", items: [
              ["Stem", "A problematic pattern of caffeine use causing clinically significant impairment or distress, shown by **at least the first three** of nine criteria within **12 months**."],
              ["1", "**Persistent desire or unsuccessful efforts** to cut down or control use. (required)"],
              ["2", "**Continued use despite** knowing of a persistent or recurrent **physical or psychological problem** likely caused or worsened by caffeine. (required)"],
              ["3", "**Withdrawal**: the characteristic caffeine withdrawal syndrome, **or** caffeine (or a close relative) taken to relieve or avoid withdrawal. (required)"],
              ["4", "Larger amounts or longer than intended."],
              ["5", "Failure to fulfill major **role obligations** (repeated lateness or absence related to use or withdrawal)."],
              ["6", "Continued use despite **social or interpersonal problems** caused by caffeine (arguments about the consequences, medical problems, cost)."],
              ["7", "**Tolerance**: markedly more needed for the effect, or markedly less effect from the same amount."],
              ["8", "A great deal of **time** obtaining, using or recovering."],
              ["9", "**Craving**, a strong desire or urge to use."]
            ], note: "Items 1–3 are the gate; items 4–9 add weight but cannot replace any of the first three." },
            { type: "defs", title: "Why the threshold is different (p. 911)", items: [
              ["The design", "The working diagnostic algorithm differs from the other substance use disorders so that only cases of **sufficient clinical importance** are labeled a mental disorder."],
              ["The fear", "**Overdiagnosis**, because habitual, nonproblematic daily caffeine use is so common."],
              ["The goal of listing it", "To stimulate research into the **reliability, validity and prevalence** of the disorder under this schema, with particular attention to whether the diagnosis is linked to **functional impairment**."]
            ] },
            { type: "callout", kind: "exam", title: "The “first three” trap", text: "A patient with tolerance (7), craving (9) and a lot of time spent on coffee (8) has three criteria but **does not** meet the proposed set, because none of them is among items 1–3. A patient with failed cut-down attempts, headaches and fatigue when she skips coffee, and continued use despite palpitations her doctor attributed to caffeine meets **exactly** the gate (pp. 910–911). Compare the [[dx:alcohol-use|alcohol]] rule: any 2 of 11." },
            { type: "case", title: "Clinical vignette: the energy-drink habit", text: "A 24-year-old call-center agent in Clark drinks four energy drinks and several coffees across each night shift. For a year he has tried repeatedly to cut down and failed; on days off he gets headaches, exhaustion and irritability that lift as soon as he drinks coffee; and he keeps drinking despite palpitations and insomnia that his physician has told him are caffeine-related. He is distressed and has missed shifts because of withdrawal headaches.", point: "Criteria 1, 2 and 3 are all present within 12 months, plus 5 (role failure): the picture matches **caffeine use disorder** (pp. 910–911). Section II has no code for it; what can be recorded is [[dx:caffeine-withdrawal|caffeine withdrawal, F15.93]] when the syndrome is present, and otherwise **unspecified caffeine-related disorder, F15.99** (app guidance)." }
          ]
        },
        {
          id: "s25-cud-features",
          title: "Caffeine use disorder: features, numbers and differential",
          pages: "911–913",
          blocks: [
            { type: "defs", title: "Diagnostic features (p. 911)", items: [
              ["Essence", "Going on using caffeine, and **being unable to control** it, in the face of harmful physical or psychological effects."],
              ["What caffeine users endorse (two U.S. population surveys)", "Use despite problems **14%–17%**; a persistent desire or failed efforts to control use **34%–45%**; withdrawal or use to relieve it **18%–27%**. Smaller numbers reported more use than intended, time spent (coffee all day into the evening), tolerance, craving, role failure (searching for coffee on a family vacation; late for work), and, much less often, use despite social problems."],
              ["Problems attributed to caffeine", "**Heart, stomach and urinary** problems; anxiety, depression, insomnia, irritability and difficulty thinking."],
              ["One construct", "In 2,259 Hungarian consumers, the nine criteria loaded on a **single factor**."],
              ["Treatment seekers (Baltimore)", "Most endorsed: **withdrawal 97%**, desire or failed efforts **91%–94%**, use despite problems **75%–91%**. **88%** had made prior serious attempts to change; **43%–47%** had been advised by a medical professional to cut down; reasons were **health (59%)** and not wanting to be dependent (**35%**)."],
              ["Withdrawal", "Described in the Section II caffeine withdrawal text; habitual users have a **well-defined** withdrawal syndrome on abstinence, and many keep using to avoid it."]
            ] },
            { type: "table", caption: "Prevalence estimates (p. 912)", head: ["Sample", "Figure"], rows: [
              ["General population", "**Unclear**"],
              ["Vermont population study", "**9%** endorsed the three required criteria **plus tolerance**"],
              ["U.S. demographic-quota sample of 1,006 caffeine consumers", "**8%** endorsed all three required criteria"],
              ["Caffeine-consuming adolescents at a Boston hospital", "**3.9%**"],
              ["Hungarian convenience sample", "**13.9%**, of whom **4.3%** said the symptoms caused significant distress"]
            ] },
            { type: "list", title: "Course, risk and culture (p. 912)", items: [
              "People meeting the criteria consume a **wide range** of daily amounts and products: coffee, soft drinks, tea, **energy drinks**, medications.",
              "The diagnosis **prospectively predicts** greater caffeine reinforcement and **more severe withdrawal**.",
              "There is **no lifespan research**; the disorder has been found in adolescents and adults; U.S. consumption rises with **age**, and energy-drink use in adolescents and young adults is a growing concern.",
              "**Heritability** of heavy use, tolerance and withdrawal: **35%–77%**. A common **polysubstance** genetic factor links caffeine, alcohol and smoking, with **28%–41%** of caffeine’s heritable effects shared with alcohol and tobacco; caffeine and tobacco also have factors **unique to these licit drugs**. Heritability of caffeine use disorder markers resembles that of alcohol and tobacco markers.",
              "**Culture**: beverage type (tea, coffee, caffeinated soda, **mate**) and preparation vary globally, so the caffeine in a “cup” varies; weigh this when estimating intake.",
              "**Suicide**: no research on the disorder; evidence on heavy consumption is **contradictory** (possibly higher risk, possibly protective)."
            ] },
            { type: "p", text: "**Functional consequences (p. 913).** In one U.S. survey, those who met the criteria reported more caffeine-related **distress**, feeling bad or guilty about use, **sleep** problems, anxiety, depression and stress; more criteria predicted worse outcomes; the disorder may predict more caffeine use **during pregnancy**." },
            { type: "table", caption: "Differential diagnosis (p. 913)", head: ["Look-alike", "How to tell"], rows: [
              ["Nonproblematic caffeine use", "Hard to separate, because social, behavioral or psychological problems are difficult to pin on caffeine, especially with other substances on board. **Regular heavy use with tolerance and withdrawal is common and is not, by itself, enough** for the diagnosis"],
              ["[[dx:stimulant-use|Other stimulant use disorder]]", "Problems from other stimulant drugs or medications can mimic the picture; identify the substance"],
              ["[[dx:gad|Anxiety disorders]]", "**Chronic heavy** caffeine use can mimic **GAD**; **acute** consumption can produce and mimic **[[dx:panic-attack|panic attacks]]**"]
            ] },
            { type: "list", title: "Comorbidity (p. 913)", items: [
              "**Daily cigarette smoking**, [[dx:cannabis-use|cannabis use disorder]], and a family or personal history of [[dx:alcohol-use|alcohol use disorder]].",
              "Higher rates among treatment seekers for caffeine problems, **tobacco** users, **high school and college students**, and people with histories of alcohol or illicit drug misuse.",
              "Features of the disorder may be associated with **MDD, GAD, panic disorder, antisocial personality disorder**, and the alcohol, cannabis and cocaine use disorders."
            ] },
            { type: "callout", kind: "pearl", title: "Where the withdrawal facts live", text: "The withdrawal criterion points back to Section II: caffeine withdrawal needs abrupt cessation or reduction after prolonged daily use and **three or more** of headache, fatigue or drowsiness, dysphoric or irritable mood, difficulty concentrating, and flu-like symptoms, with distress or impairment ([[dx:caffeine-withdrawal|Chapter 16]]). Outside the DSM, the classic pharmacology review puts headache in about **half** of abstainers, starting **12–24 hours** after the last dose, peaking at **20–51 hours** and lasting **2–9 days** (Juliano and Griffiths, 2004)." }
          ]
        }
      ]
    },
    {
      title: "Internet gaming disorder",
      sections: [
        {
          id: "s25-igd-criteria",
          title: "Internet gaming disorder: the proposed criteria",
          pages: "913–914",
          blocks: [
            { type: "p", text: "Gambling disorder is the **only** behavioral addiction in Section II. Internet gaming was the one other behavior with a literature large enough to earn a proposed set, built to look like a substance use disorder: **5 of 9** features in **12 months** (pp. 913–914)." },
            { type: "criteria", title: "Internet gaming disorder in brief (proposed; not for clinical use)", code: "No code: Section III", pages: "913–914", items: [
              ["Stem", "Persistent, recurrent use of the Internet to play games, often with other players, causing clinically significant impairment or distress, shown by **five or more** of nine in a **12-month** period."],
              ["1", "**Preoccupation**: thinking about past play or the next session; gaming becomes the dominant daily activity."],
              ["2", "**Withdrawal** when gaming is taken away: irritability, anxiety or sadness, with **no physical signs** of pharmacological withdrawal."],
              ["3", "**Tolerance**: a need for increasing time in games."],
              ["4", "Unsuccessful attempts to **control** participation."],
              ["5", "**Loss of interest** in previous hobbies and entertainment because of, and apart from, games."],
              ["6", "Continued excessive use despite knowing of **psychosocial problems**."],
              ["7", "**Deceiving** family, therapists or others about the amount of gaming."],
              ["8", "Gaming to **escape or relieve a negative mood** (helplessness, guilt, anxiety)."],
              ["9", "**Jeopardizing or losing** a significant relationship, job, or educational or career opportunity."]
            ], specifiers: [["Current severity", "Mild, moderate or severe by the **degree of disruption** of normal activities: fewer symptoms and less disruption at the mild end; more hours and more severe loss of relationships, career or school at the severe end (p. 914)"]], note: "Only **nongambling** Internet games count. Internet gambling belongs to gambling disorder; work-related Internet use, other recreational or social use, and sexual sites are **excluded** (pp. 913–914)." },
            { type: "defs", title: "The commentary that frames the set (p. 914)", items: [
              ["Why only gambling is official", "Other behaviors are called “addictions” in everyday speech, but **compulsive Internet gaming** is the one with a **considerable literature**."],
              ["Where the concern is loudest", "Reported as an “addiction” by the **Chinese** government and treated as a **public health threat in South Korea**, which has set up treatment and prevention systems; most treatment reports come from **Asian** countries, with some from the United States and other high-income countries."],
              ["What the work group found", "In more than **240 articles**, behavioral similarities to gambling disorder and substance use disorders (tolerance, withdrawal, repeated failed attempts to cut back, impairment), but **no standard definition** for prevalence data and no natural-history studies."],
              ["Why it is here", "The seemingly **high prevalence** in Asia and the West justified a Section III listing and inclusion in the mental, behavioural and neurodevelopmental disorders chapter of **ICD-11**. Reports have kept accumulating since DSM-5, but many issues remain unresolved."],
              ["Other names", "Internet use disorder, Internet addiction, gaming addiction."]
            ] },
            { type: "callout", kind: "exam", title: "Gambling online is not gaming", text: "A 30-year-old who plays online poker for money 6 hours a night, chases losses and has borrowed from relatives is assessed for [[dx:gambling|gambling disorder]], a Section II diagnosis, **not** Internet gaming disorder (pp. 913–914). The reverse also holds: a 15-year-old who plays an online battle game 9 hours a day with no money involved is in Section III territory, and there is no gambling diagnosis to make." },
            { type: "case", title: "Clinical vignette: the computer shop", text: "A 16-year-old boy in Olongapo has, for over a year, played an online team battle game 8–10 hours a day, mostly at a computer shop near school. He thinks about the game constantly, has dropped basketball and his friends outside the game, lies to his parents about where he has been, becomes irritable and tearful when the shop is closed, has failed two subjects, and says he plays to stop feeling “useless.” There is no gambling and no substance use.", point: "Preoccupation (1), withdrawal (2), loss of other interests (5), deception (7), escape (8) and jeopardized schooling (9): **six of nine** over 12 months, matching **Internet gaming disorder**, severe by disruption (pp. 913–915). Nothing in Section II names it; record the comorbid Section II diagnosis if one is met (screen for [[dx:mdd|depression]] and [[dx:adhd|ADHD]], p. 916), and describe the gaming problem in the formulation (app guidance)." }
          ]
        },
        {
          id: "s25-igd-features",
          title: "Internet gaming disorder: features, numbers and differential",
          pages: "914–916",
          blocks: [
            { type: "defs", title: "Diagnostic features (pp. 914–915)", items: [
              ["Essence", "**Excessive and prolonged** participation in Internet gaming producing cognitive and behavioral symptoms: progressive **loss of control**, **tolerance** and **withdrawal**, analogous to substance use disorders."],
              ["Why the Internet matters", "Games pit **groups of players** in different world regions against each other, so **time-zone independence** encourages play at all hours; the **social and team** aspects are a key motivation. Off-line computer games can be included but are less studied."],
              ["The pattern", "Attempts to redirect the person to schoolwork or people are **strongly resisted**. They keep gaming despite neglecting everything else, typically **8–10 hours or more a day** and **at least 30 hours a week**, become **agitated and angry** when kept from the game, and go long periods **without food or sleep**; school, work and family obligations are neglected."],
              ["The threshold", "Until the optimal criteria are settled empirically, use a **conservative** definition: **five or more of nine**."]
            ] },
            { type: "list", title: "Associated features (p. 915)", items: [
              "No consistent personality type, but **negative affectivity, detachment, antagonism, disinhibition and psychoticism** have been associated with it.",
              "Exposure to the game triggers brain activation in specific regions **not limited to reward structures**."
            ] },
            { type: "table", caption: "Numbers worth knowing (p. 915)", head: ["Finding", "Figure"], rows: [
              ["Mean 12-month prevalence across countries", "**4.7%** (range **0.7%–15.6%**)"],
              ["Asia versus the West (DSM-5 criteria)", "**Similar**"],
              ["United States (large Internet surveys)", "**1% or lower**"],
              ["Adolescents, meta-analysis of 16 studies", "Pooled **4.6%**: boys/men **6.8%**, girls/women **1.3%**"],
              ["Environmental risk", "A computer with an Internet connection"],
              ["Highest risk group", "**Adolescent men**"],
              ["Boys aged 12–15", "Greater risk of adverse effects (lower grades, loneliness)"],
              ["Game choice by gender at 12–15", "Girls: puzzles, music, social and educational themes; boys: action, fighting, strategy and role-playing games, which may have **greater addictive potential**"]
            ] },
            { type: "list", title: "Association with suicidal thoughts or behavior (p. 916)", items: [
              "Few studies address the disorder itself; the evidence comes from the **broader phenotype** of problematic Internet and gaming behavior.",
              "**Australia** (Young Minds Matter, ages 11–17): problem Internet and online gaming behavior was linked to a higher risk of a **suicide attempt** in the previous year.",
              "**Taiwan** (9,510 students aged 12–18): Internet addiction, including gaming, was associated with suicidal thoughts and attempts after controlling for demographics, depression, family support and self-esteem.",
              "**Europe** (8,807 students): **3.62%** had Internet gaming disorder by DSM-5 criteria and **3.11%** had pathological Internet use without gaming; both groups had similarly raised emotional symptoms, conduct problems, hyperactivity/inattention, self-injury and suicidal thoughts and behavior.",
              "The mental health effects, including suicidality, may be **mediated by sleep**."
            ] },
            { type: "p", text: "**Functional consequences (p. 916).** School failure, job loss or marriage failure; gaming **crowds out** social, scholastic and family life; grades decline, then schooling fails; family responsibilities are neglected." },
            { type: "table", caption: "Differential diagnosis and comorbidity (p. 916)", head: ["Look-alike", "How to tell"], rows: [
              ["Excessive non-gaming Internet use", "Social media (Facebook) or online pornography is **not considered analogous**; research on other excessive uses would need its own guidelines"],
              ["[[dx:gambling|Gambling disorder]]", "Excessive **online gambling** may qualify for the separate Section II diagnosis"],
              ["Comorbidity", "Neglected **health**; associated diagnoses include [[dx:mdd|MDD]], [[dx:adhd|ADHD]] and [[dx:ocd|OCD]]"]
            ] },
            { type: "update", kind: "post", year: "2022", title: "Outside the DSM: ICD-11 gaming disorder", source: "ICD-11 MMS 2026 release, 6C51 gaming disorder and QE22 hazardous gaming; research notes checked October 27, 2026", text: "ICD-11, in force since January 2022, lists **gaming disorder (6C51)** as a disorder due to addictive behaviors beside gambling disorder. Its definition uses **three features** rather than nine: impaired **control** over gaming, increasing **priority** of gaming over other interests and daily activities, and **continuation or escalation despite negative consequences**, with significant impairment, usually evident over **at least 12 months** (shorter if all features are present and symptoms are severe); it has online and offline subtypes and a separate **hazardous gaming (QE22)** category for risky use that is not yet a disorder. Pooled prevalence in a 2021 meta-analysis of 53 studies was about **3%** (Stevens et al.). Not from the DSM." }
          ]
        }
      ]
    },
    {
      title: "Neurobehavioral disorder associated with prenatal alcohol exposure",
      sections: [
        {
          id: "s25-ndpae-criteria",
          title: "ND-PAE: the proposed criteria",
          pages: "916–917",
          blocks: [
            { type: "p", text: "Alcohol is a **neurobehavioral teratogen**, and the proposed set gives the **mental** consequences of in utero exposure a name that does not depend on the face: ND-PAE can be diagnosed **with or without** the physical signs of fetal alcohol syndrome (p. 917). The structure is one exposure criterion and three impairment domains, each with its own count (pp. 916–917)." },
            { type: "criteria", title: "ND-PAE in brief (proposed; not for clinical use)", code: "No code: Section III", pages: "916–917", items: [
              ["A", "**More than minimal** alcohol exposure during gestation, including **before the pregnancy was recognized**; confirmed by maternal self-report, medical or other records, or clinical observation."],
              ["B", "Impaired **neurocognitive** functioning, **one or more** of: global intellectual impairment (IQ or comprehensive developmental standard score of **70 or below**); executive function (planning, organization, flexibility, inhibition); learning (achievement below intellectual level; a specific learning disability); memory (recently learned information, repeating mistakes, long verbal instructions); visual-spatial reasoning (disorganized drawings, left-right confusion)."],
              ["C", "Impaired **self-regulation**, **one or more** of: mood or behavioral regulation (lability, negative affect, outbursts); attention (shifting, sustaining effort); impulse control (waiting a turn, following rules)."],
              ["D", "Impaired **adaptive** functioning, **two or more** of four, **at least one** being (1) or (2): (1) communication deficit; (2) social communication and interaction (overly friendly with strangers, poor reading of cues and consequences); (3) daily living skills (toileting, feeding, bathing, managing a schedule); (4) motor skills (fine motor, gross motor milestones, coordination and balance)."],
              ["E", "Onset of the B, C and D symptoms in **childhood**."],
              ["F", "Clinically significant distress or impairment."],
              ["G", "Not better explained by **postnatal** substance effects, a medical condition (TBI, delirium, dementia), **another teratogen** (fetal hydantoin syndrome), a **genetic** condition (Williams, Down, Cornelia de Lange syndromes) or **environmental neglect**."]
            ], note: "Remember the counts as **1 of 5, 1 of 3, 2 of 4** (with communication or social communication required), on top of exposure and childhood onset." },
            { type: "defs", title: "What “more than minimal” means (p. 918)", items: [
              ["The figure", "More than **13 drinks in any month** of pregnancy, **or** more than **2 drinks on any one occasion**."],
              ["Why a threshold at all", "Animal and human studies show harm at lower levels, but how much exposure is needed to change outcome remains unclear; setting a floor will have to weigh the stage of development, maternal **smoking**, maternal and fetal **genetics**, and maternal age, health and obstetric problems."],
              ["Evidence of exposure", "A clinical diagnosis of **fetal alcohol syndrome**, with its facial dysmorphology and growth retardation, can itself serve as evidence of significant exposure; facial guidelines exist for diverse ethnoracial physiognomies."],
              ["Documenting impairment", "Past psychological or educational evaluations, medical records, reports by the person or informants, and clinician observation (p. 917)."],
              ["When not to decide yet", "Accurate neurocognitive assessment is hard in the very young, so it is appropriate to **defer** the diagnosis in children **3 years and younger**."]
            ] },
            { type: "callout", kind: "exam", title: "The adaptive criterion is the one examiners twist", text: "Two of four is not enough on its own: at least one of the two must be **communication** or **social communication and interaction** (p. 917). A child with motor clumsiness and delayed self-care but intact language and social reading does not meet D. And a child with IQ 85 can still meet B through executive, learning, memory or visual-spatial impairment, because the IQ cutoff is only **one** of five B options (p. 916)." },
            { type: "case", title: "Clinical vignette: the adopted schoolboy", text: "An 8-year-old boy adopted at age 2 is referred for school failure. Records show his birth mother drank heavily throughout pregnancy. His IQ is 82, but testing shows marked executive and memory impairment, he has daily outbursts and cannot wait his turn, his language is delayed and he is indiscriminately friendly with strangers. There is no history of head injury, neglect since adoption, or a genetic syndrome, and his face is unremarkable.", point: "A (documented exposure), B (executive and memory, one is enough), C (mood regulation and impulse control), D (communication **and** social communication, satisfying the special rule), E (childhood onset), F and G: the picture matches **ND-PAE** without fetal alcohol syndrome features (pp. 916–918). Recorded as [[dx:other-specified-nd|other specified neurodevelopmental disorder, F88]] with the reason, as Chapter 1’s example supports (app guidance); comorbid [[dx:adhd|ADHD]] is weighed against the executive impairment (p. 920)." }
          ]
        },
        {
          id: "s25-ndpae-features",
          title: "ND-PAE: features, numbers and differential",
          pages: "917–920",
          blocks: [
            { type: "defs", title: "Diagnostic and associated features (pp. 917–918)", items: [
              ["Essence", "Prenatal alcohol exposure plus impairment across the **neurocognitive, behavioral and adaptive** domains; ND-PAE is a **clarifying term** meant to cover the **full range** of developmental disabilities from in utero exposure."],
              ["The symptom picture", "Marked IQ impairment **or** deficits in executive function, learning, memory or visual-spatial reasoning; self-regulation problems (mood or behavior regulation, attention, impulse control); adaptive deficits in **communication** and **social interaction**, and sometimes daily-living and motor skills."],
              ["Associated circumstances", "Diagnosable in any socioeconomic or cultural group, but **parental alcohol or substance misuse**, mental illness in a parent, exposure to violence at home or in the community, neglect or abuse, **disrupted caregiving**, multiple out-of-home placements and discontinuous medical care are often present."]
            ] },
            { type: "table", caption: "Numbers worth knowing (pp. 918–919)", head: ["Finding", "Figure"], rows: [
              ["ND-PAE (including fetal alcohol spectrum disorders), United States", "**15.2 per 1,000** (range 11.3–50.0)"],
              ["When only children with full evaluations are counted", "**31.1–98.5 per 1,000**"],
              ["Children in care settings (multinational meta-analysis)", "**251.5 per 1,000**"],
              ["Global FASD prevalence, 2012", "**7.7 per 1,000**; Americas **8.8 per 1,000**"],
              ["Young children with prenatal exposure showing marked delay in the first 3 years", "About **one-half**; others show nothing until preschool or school age"],
              ["Age at which diagnosis is most likely", "The **school years**, when learning, executive and integrative language problems, social deficits and challenging behavior become evident as demands rise"],
              ["Drinking in pregnancy worldwide", "**0.2%** (Eastern Mediterranean region) to **25.2%** (European region)"],
              ["Premature deaths among people with fetal alcohol syndrome in an Alberta registry", "**15%** were by suicide"]
            ] },
            { type: "list", title: "Risk, culture and suicide (p. 919)", items: [
              "**Environmental**: low maternal socioeconomic status and education are risk factors for fetal alcohol syndrome, through social and structural factors such as the **concentration of liquor stores** in low-income, segregated communities.",
              "**Genetics of metabolism**: groups with higher frequencies of certain **aldehyde dehydrogenase 2** alleles may be **less** likely to show the effects of exposure.",
              "**Suicide** is a high-risk outcome, rising sharply in late adolescence and early adulthood. In the Canadian national FASD database, impaired **affect regulation** marks much higher risk; 54 California adolescents with FASD had markedly higher rates of ideation and serious attempts (all by boys) than U.S. adolescents in general.",
              "In a Canadian survey, **mothers** of people with FASD had more than **six times** the risk of suicide and nearly **five times** the risk of an attempt after the birth, so the children’s risk may be partly **mediated by family factors**, genetic or environmental, beyond the condition itself."
            ] },
            { type: "p", text: "**Functional consequences (p. 919).** CNS dysfunction often produces lifelong deficits in adaptive behavior and maladaptive behavior. Abnormalities occur in **multiple organ systems**: heart, kidney, liver, gastrointestinal tract and endocrine. People with prenatal exposure have more **disrupted schooling**, poor employment, **trouble with the law**, confinement (legal or psychiatric) and dependent living." },
            { type: "table", caption: "Differential diagnosis (pp. 919–920)", head: ["Consider", "Why"], rows: [
              ["Other prenatal substance exposure; poor prenatal care", "Can produce similar neurodevelopmental pictures"],
              ["**Postnatal** substance effects", "A medication, alcohol or other drugs after birth (Criterion G)"],
              ["[[dx:ncd-tbi|Traumatic brain injury]], [[dx:delirium|delirium]], [[dx:major-ncd|major NCD]]", "Disorders due to another medical condition"],
              ["Environmental **neglect**", "Named in Criterion G"],
              ["Genetic syndromes: **Williams, Down, Cornelia de Lange**", "Similar physical and behavioral features; a **clinical geneticist** may be needed"],
              ["Other teratogens: **fetal hydantoin syndrome, maternal phenylketonuria**", "A careful prenatal exposure history clarifies the agent"]
            ] },
            { type: "list", title: "Comorbidity (p. 920)", items: [
              "Mental health problems in **more than 90%** of people with significant prenatal exposure.",
              "**ADHD** is the most common co-occurring diagnosis, but people with ND-PAE differ in **neuropsychological profile** and in **response to medication**.",
              "[[dx:oppositional-defiant|Oppositional defiant]] and [[dx:conduct-disorder|conduct disorder]] are also likely, but their appropriateness should be weighed against the **intellectual and executive** impairments that often accompany exposure.",
              "**Mood** symptoms, including bipolar and depressive symptoms, are described; prenatal exposure raises later risk of **tobacco, alcohol and other substance use disorders**."
            ] },
            { type: "callout", kind: "culture", title: "Outside the DSM: FASD frameworks", text: "Pediatric and public health systems use **fetal alcohol spectrum disorder** frameworks (fetal alcohol syndrome, partial FAS, alcohol-related neurodevelopmental disorder) that depend on growth, facial features and documented exposure. ND-PAE is the DSM’s attempt to describe the **behavioral** phenotype so that children **without** the face can be recognized (p. 917). A 2018 JAMA study of four U.S. communities estimated FASD at **1.1%–5%** of first-graders (conservative) and up to 3.1%–9.8% (weighted). Not from the manual." }
          ]
        }
      ]
    },
    {
      title: "Suicidal behavior disorder",
      sections: [
        {
          id: "s25-sbd-criteria",
          title: "Suicidal behavior disorder: the proposed criteria",
          pages: "920–921",
          blocks: [
            { type: "p", text: "Chapter 22 already lets you **code** a suicide attempt ([[dx:suicidal-behavior|suicidal behavior]], T14.91XA/XD, Z91.51). The Section III proposal goes further and treats recent suicidal behavior as a **condition in its own right**, defined by one thing: a **suicide attempt** within the last **2 years** (p. 920)." },
            { type: "criteria", title: "Suicidal behavior disorder in brief (proposed; not for clinical use)", code: "No code: Section III (use the Chapter 22 codes)", pages: "920", items: [
              ["A", "Within the last **24 months**, the person has made a **suicide attempt**: a self-initiated sequence of behaviors that, at the **time of initiation**, the person expected would lead to death. The time of initiation is when a behavior that **applied the method** took place."],
              ["B", "The act does **not** meet the definition of **nonsuicidal self-injury**: it is not damage to the body surface done to relieve a negative state or produce a positive one."],
              ["C", "Not applied to **suicidal ideation** or to **preparatory acts**."],
              ["D", "Not initiated during **delirium or confusion**."],
              ["E", "Not undertaken **solely** for a **political or religious** objective."]
            ], specifiers: [["Current", "The last attempt was **within the past 12 months**"], ["In early remission", "The last attempt was **12–24 months** ago"]], note: "The manual’s note (p. 920) points to the Chapter 22 codes for current suicidal behavior and for a history of it; the printed T14.91A/D should be read as **T14.91XA/XD** (see “How these conditions are recorded”)." },
            { type: "defs", title: "Dimensions the text describes but does not make specifiers (pp. 920–921)", items: [
              ["Violence of method", "**Overdoses** with legal or illegal substances are generally classed as **nonviolent**; jumping, gunshot wounds and other methods as **violent**."],
              ["Medical consequences", "A **high-lethality** attempt is one that needs **medical hospitalization beyond an emergency department visit**."],
              ["Planning versus impulsiveness", "The degree of planning, which can affect the medical outcome."],
              ["Timing", "Behavior **12–24 months** before the evaluation makes the condition **in early remission**."]
            ] },
            { type: "callout", kind: "exam", title: "Three boundary cases the criteria settle (p. 921)", text: "**Counts**: a person swallows part of the intended amount and then stops, or is stopped by someone else, after starting; the attempt was **initiated**. **Does not count**: a person is talked out of it, or changes their mind, **before** initiating the behavior; that is ideation or preparation (Criterion C). **Still counts**: a person who **deliberately became intoxicated** beforehand to lower anticipatory anxiety and reduce interference; the delirium exclusion (Criterion D) is for acts begun in a **confusional state**, not for planned intoxication." },
            { type: "case", title: "Clinical vignette: the interrupted attempt", text: "A 42-year-old farmer from Dinalupihan is brought to the emergency department 10 months after a previous admission for a suicide attempt. His wife says she found him this morning with a container of pesticide open and some already swallowed; he had told her the night before that he had decided the family would be better off without him. He is medically stable, fully alert and oriented, and says he intended to die.", point: "A self-initiated act that **applied the method** with the expectation of death, within 24 months, not NSSI, not mere ideation or preparation, not in delirium, not political: matches **suicidal behavior disorder, current** (the last attempt within 12 months) (pp. 920–921). Recorded with the Chapter 22 code **T14.91XA** for this encounter and, for the earlier attempt, **Z91.51** history (app guidance; Chapter 22). The **interruption** by his wife does not undo the attempt; the culture section notes that **pesticide** is a common method in low-income countries (p. 922). Risk assessment and safety planning are outside the DSM (see the care orientation on the library page)." }
          ]
        },
        {
          id: "s25-sbd-features",
          title: "Suicidal behavior disorder: features, risk and comorbidity",
          pages: "921–923",
          blocks: [
            { type: "defs", title: "Diagnostic features (p. 921)", items: [
              ["The essential manifestation", "A suicide attempt: behavior undertaken with **at least some intent to die**. It **may or may not** cause injury or serious medical consequences."],
              ["What must not influence the diagnosis", "Poor planning, ignorance of the lethality of the method, low intent or ambivalence, and chance intervention by others all change the **medical outcome** but **are not considered in assigning** the diagnosis."],
              ["Intent is hard to establish", "People may deny intent when admitting it could mean hospitalization or distress to loved ones."],
              ["Markers of risk the text names", "Degree of **planning**, including choosing a time and place to **avoid rescue**; the mental state at the time, with **acute agitation** especially concerning; **recent discharge** from inpatient care; recent **discontinuation of lithium** or, in schizophrenia, of **clozapine**."],
              ["Environmental triggers", "Learning of a potentially fatal diagnosis such as cancer; sudden unexpected loss of a close relative or partner; **job loss**; displacement from **housing**."],
              ["Less reliable reassurance", "Talking about **future events** and readiness to sign a **safety contract** are **less reliable** indicators."],
              ["Prediction", "**No clinical instrument** has a positive predictive value good enough to predict suicidal behavior in the individual; single clinical or biological factors are poor indicators because suicidal behavior arises from **converging** risks along **multiple pathways**; many **biomarkers** have been studied and **none is robust**."]
            ] },
            { type: "table", caption: "Numbers and patterns worth knowing (pp. 921–922)", head: ["Finding", "What the text says"], rows: [
              ["Age", "Any time in the life span; **rarely under age 5**"],
              ["Reattempts", "About **25%–30%** of people who attempt will attempt again"],
              ["Variability", "Frequency, method and lethality vary, much as episode frequency and severity vary in **MDD**"],
              ["Genetics (the largest GWAS of suicide attempt, Psychiatric Genomics Consortium)", "The **genetic risk for depression** raises attempt risk across cohorts with MDD, bipolar disorder and schizophrenia: attempters carry more **depression** risk alleles than nonattempters, rather than more alleles for their own diagnosis; the genetic associations are **partly unique, partly shared with depression**"],
              ["Sex and gender", "**Suicide** about **twice** as common in **men**; **nonfatal** suicidal behavior more common in **women**; men use more lethal methods (gunshot, hanging), women more often self-poisoning; women make **more attempts on average**, possibly because less lethal methods allow repetition; **transgender** people have high suicide rates and higher risk of suicidal behavior than cisgender people"],
              ["Diagnostic markers", "Laboratory consequences of the attempt: **anemia, hypotension or shock** after blood loss; **coma or obtundation** and **electrolyte** abnormalities after overdose"]
            ] },
            { type: "callout", kind: "culture", title: "Culture-related issues (p. 922)", text: "Culture shapes **incidence, methods, motives, circumstances and meanings**: **pesticide** self-poisoning in low-income countries, **gunshot** in the southwestern United States; patterns shift over time, by migrant or ethnic group and by service setting. Stressors with cultural weight include family breakdown, **loss of dignity or status**, intergenerational conflict from **differential acculturation**, changing sociocultural integration, **stigma and self-stigma** about suicide, and **structural inequity**. Attitudes to suicide are shaped by historical, legal, religious and other factors; in one multigenerational U.S. sample, **parental** belief in the importance of religion predicted **lower** suicidal behavior in offspring independent of the offspring’s own beliefs and of parental depression, suicidal behavior or divorce. Reasons and methods can carry cultural meaning that shapes responses (stigma, shame or respect)." },
            { type: "list", title: "Comorbidity (p. 923)", items: [
              "Seen across many disorders, most often **bipolar disorder**, **MDD**, **schizophrenia** and **schizoaffective disorder**.",
              "**Anxiety disorders**, in particular **panic** with catastrophic content and **PTSD flashbacks**.",
              "**Substance use disorders**, especially **alcohol**; **borderline** and **antisocial** personality disorders; **eating disorders**; **adjustment disorders**."
            ] },
            { type: "callout", kind: "pearl", title: "Section III disorder versus Chapter 22 code", text: "The Chapter 22 entry defines suicidal behavior and gives the codes; it is a **condition that may be a focus of clinical attention**, never a diagnosis. The Section III set adds a **time frame** (24 months), **exclusions** (NSSI, ideation, preparation, delirium, political acts) and **specifiers** (current, early remission), the apparatus of a disorder. For now the chart uses the Chapter 22 codes whether or not the Section III set is met (pp. 920–921; app guidance). Outside the DSM: risk formulation (static and dynamic factors, means safety, safety planning) and the crisis lines in the care orientation." }
          ]
        }
      ]
    },
    {
      title: "Nonsuicidal self-injury disorder",
      sections: [
        {
          id: "s25-nssi-criteria",
          title: "NSSI disorder: the proposed criteria",
          pages: "923–924",
          blocks: [
            { type: "p", text: "The Chapter 22 code [[dx:nssi|R45.88]] records that self-injury **without suicidal intent** is present. The Section III set turns a **pattern** of it into a proposed disorder: at least **5 days** in the last year, done for one of **three expected effects**, preceded by distress or preoccupation, outside sanctioned practices and other explanations (p. 923)." },
            { type: "criteria", title: "Nonsuicidal self-injury disorder in brief (proposed; not for clinical use)", code: "No code: Section III (use the Chapter 22 codes)", pages: "923", items: [
              ["A", "In the last year, on **5 or more days**, intentional self-inflicted damage to the **surface of the body** of a kind likely to cause **bleeding, bruising or pain**, with the expectation of only **minor or moderate** physical harm, that is, **no suicidal intent**. The absence of suicidal intent is **stated** by the person or **inferred** from repeated engagement in a behavior the person knows is unlikely to be lethal."],
              ["B", "Done with **one or more** of three expectations: **relief** from a negative feeling or thought; **resolving** an interpersonal difficulty; inducing a **positive** feeling state. The relief comes **during or shortly after**, and the pattern may look like **dependence** on the behavior."],
              ["C", "Associated with **at least one** of: interpersonal difficulty or **negative feelings** (depression, anxiety, tension, anger, distress, self-criticism) **immediately before** the act; a period of **preoccupation** with the intended act that is hard to control; **frequent thinking** about self-injury even when not acted on."],
              ["D", "**Not socially sanctioned** (body piercing, tattooing, a religious or cultural ritual) and **not merely** scab picking or nail biting."],
              ["E", "The behavior or its results cause clinically significant distress, or they **interfere** with relationships, schooling or other important areas."],
              ["F", "Not exclusively during **psychotic episodes, delirium, intoxication or withdrawal**; in a neurodevelopmental disorder, not part of repetitive **stereotypies**; not better explained by another disorder or medical condition (psychotic disorder, autism spectrum disorder, intellectual developmental disorder, **Lesch-Nyhan syndrome**, stereotypic movement disorder with self-injury, trichotillomania, excoriation disorder)."]
            ], note: "The manual’s note (pp. 923–924) points to **R45.88** (current) and **Z91.52** (history), usable with any diagnosis or alone, defined in Chapter 22." },
            { type: "callout", kind: "exam", title: "What the number is", text: "**Five days**, not five acts and not five episodes: several injuries on one day count as one day (p. 923). Contrast suicidal behavior disorder’s **24 months**, which counts a single attempt. And the intent criterion runs the other way: NSSI disorder needs **no** suicidal intent, inferred if necessary from repetition of a behavior the person knows is not lethal." },
            { type: "case", title: "Clinical vignette: the relief that does not last", text: "A 15-year-old Grade 10 student in Balanga is brought by her mother after a teacher noticed scars on her forearm. She says that for about 8 months, on roughly 2 or 3 days each month, she has cut herself superficially when she feels “too full” of anger or sadness after arguments with her father, that the tension drops within minutes, and that she has never wanted to die and knows the cuts are not dangerous. She thinks about it most days, feels ashamed afterwards and has withdrawn from friends. She has no psychosis and uses no substances.", point: "Well over 5 days in the last year, done for relief (B1), preceded by negative feelings (C1) and with frequent thinking (C3), not sanctioned, with interference, and not better explained: the picture matches **NSSI disorder** (p. 923). The chart gets **R45.88** (Chapter 22) and whatever Section II diagnosis is met; a full **suicide risk assessment** is still required, because self-injury precedes attempts by about 1–2 years in many who later attempt (p. 925)." }
          ]
        },
        {
          id: "s25-nssi-features",
          title: "NSSI disorder: features, course and differential",
          pages: "924–926",
          blocks: [
            { type: "defs", title: "Diagnostic features (p. 924)", items: [
              ["Essence", "Repeated **minor-to-moderate**, often painful, injuries to the body surface **without suicidal intent**."],
              ["Purpose", "Most often to **reduce negative emotion** (tension, anxiety, sadness, self-reproach); less often to resolve an interpersonal difficulty; sometimes as **deserved self-punishment**. Relief is usually **immediate**, during the act."],
              ["When it becomes frequent", "A sense of **urgency and craving**, a pattern resembling **addiction**; wounds become deeper and more numerous."],
              ["Methods the text names", "**Cutting** is the most common, usually on the **forearm** or front of the **thighs**, often in a characteristic pattern that scars; also superficial scratching, burning, hitting or banging, biting, and interfering with wound healing. **Multiple methods** over time go with more severe psychopathology, including **suicide attempts**."],
              ["Why many never present", "Reluctance to disclose because of **stigma**, and because the behavior **works** in regulating emotion, which lowers motivation for treatment. Children and adolescents may **experiment**, find it painful or distressing rather than relieving, and stop."]
            ] },
            { type: "list", title: "Associated features (p. 924)", items: [
              "Maintained mainly by **negative reinforcement**: the behavior quickly reduces negative emotion and aversive arousal.",
              "Some report that it also reduces unwanted **dissociation** and even **suicidal ideation**, and helps them cope with trauma-related self-directed anger or disgust.",
              "**Social and emotional** reinforcement can also sustain it: eliciting reactions from others, or generating positive feelings."
            ] },
            { type: "table", caption: "Prevalence, course and culture (pp. 924–925)", head: ["Finding", "What the text says"], rows: [
              ["Gender ratio", "**Modestly** higher in girls/women than boys/men (international meta-analysis); the gap is **much larger for suicidal behavior**; more pronounced in **clinical** samples; it **varies by culture** (higher in girls among rural Chinese high school students, higher in boys among Jordanian youth aged 11–19)"],
              ["Sexual minorities", "**Substantially more common**, especially among people who identify as **bisexual**"],
              ["Onset and peak", "Starts in the **early to mid-teens**, can last years; **earlier onset, more severe**; peaks in **late adolescence and the early 20s**, then declines"],
              ["How it spreads", "Learned on the recommendation or observation of others, through **media** and **social media**; exposure to others who self-injure in **inpatient, school, correctional and community** settings raises initiation, by **social modeling**"],
              ["Cultural exclusion", "Not diagnosed when the behavior is a **widely accepted cultural practice**, even one carried out by a minority (collective **self-flagellation** during religious festivals), nor when it expresses **group belonging** rather than individual distress (research on Goth, Emo and Punk youth in Germany)"]
            ] },
            { type: "list", title: "Association with suicidal thoughts or behavior (p. 925)", items: [
              "People with NSSI **can and do** attempt suicide: assess suicide risk and get **third-party** information about recent changes in stress and mood.",
              "A history of NSSI predicts attempts; NSSI onset typically **precedes** suicide attempts by about **1–2 years** (clinical and community samples in three high-income countries).",
              "Strong predictors of ideation and attempts: **multiple** previous methods, **high frequency**, **younger onset**, and using self-injury for **relief from internal distress or self-punishment**."
            ] },
            { type: "p", text: "**Functional consequences (p. 925).** Shared implements raise the risk of **blood-borne infection**; severe burns, wound infection from poor care, and **permanent scarring** can follow." },
            { type: "table", caption: "Differential diagnosis (pp. 925–926)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:borderline-pd|Borderline personality disorder]]", "Self-injury has been treated as **pathognomonic**, but many people with NSSI disorder **do not** meet borderline criteria; NSSI disorder often co-occurs with **depressive, eating and substance** disorders instead"],
              ["[[dx:suicidal-behavior|Suicidal behavior]]", "Separated by the **stated goal**: a **wish to die** versus a wish for **relief**. In frequent self-injurers the episodes are **short-term benign**, and some use self-injury to **avoid** attempting suicide"],
              ["[[dx:trichotillomania|Trichotillomania]]", "Self-injury **confined to hair pulling** (scalp, eyebrows, eyelashes), in **sessions** lasting hours, usually during **relaxation or distraction**: diagnose trichotillomania instead"],
              ["[[dx:stereotypic-movement|Stereotypic movement disorder]]", "Repetitive, driven, apparently purposeless movements (rocking, head banging, self-biting, hitting) that may injure, often with a medical, genetic or neurodevelopmental condition (Lesch-Nyhan, IDD, **intrauterine alcohol exposure**): if the behavior meets SMD criteria, diagnose SMD instead"],
              ["[[dx:excoriation|Excoriation (skin-picking) disorder]]", "Picking at skin felt to be unsightly or blemished, usually **face or scalp**; self-injury **confined to picking** is excoriation disorder"]
            ] },
            { type: "callout", kind: "pearl", title: "Function, not form, is the fork in the road", text: "Three patients have fresh forearm wounds. One wanted to die; that is suicidal behavior and the Chapter 22 T code. One wanted the tension to stop and knew it would not kill her; that is NSSI, and if it has happened on 5 days this year with the B and C features, the Section III set is met. One picks at a blemish for hours and cannot stop; that is [[dx:excoriation|excoriation disorder]], a Section II diagnosis that takes precedence (pp. 923, 926). The form of the injury does not decide." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s25-compare",
          title: "The seven side by side",
          pages: "903–927",
          blocks: [
            { type: "table", caption: "Threshold, time rule and exclusions in one table (pp. 903–926)", head: ["Condition", "Threshold", "Time rule", "Key exclusions", "Record as (app guidance)"], rows: [
              ["Attenuated psychosis syndrome", "**1 of 3** attenuated symptoms; insight kept", "**Weekly for 1 month**; began or worsened within **1 year**", "Another disorder explains it; substance or medical cause; **any psychotic disorder ever**", "F28 (reason stated)"],
              ["Short-duration hypomania with MDE", "Full hypomanic symptom count (**3, or 4** if irritable)", "**≥2 lifetime** periods of **2–3 days** (<4) plus a lifetime MDE", "Psychosis or hospitalization = **mania**; any **4-day** hypomania = bipolar II; schizophrenia spectrum explains the MDE", "F31.89 (reason stated)"],
              ["Caffeine use disorder", "**The first three** of 9 (cut-down, harm, withdrawal)", "**12 months**", "Nonproblematic heavy use with tolerance and withdrawal alone", "F15.93 / F15.920 if met; else F15.99"],
              ["Internet gaming disorder", "**5 of 9**", "**12 months**", "Internet **gambling** (gambling disorder); social media, pornography, work use", "No DSM example; F99 if a code is needed"],
              ["ND-PAE", "B **1 of 5**, C **1 of 3**, D **2 of 4** (communication or social communication required)", "Exposure in gestation; **childhood onset**; defer ≤3 years", "Postnatal substances; TBI, delirium, dementia; other teratogens; genetic syndromes; neglect", "F88 (reason stated)"],
              ["Suicidal behavior disorder", "**One attempt** (initiated, with expectation of death)", "Within **24 months**; current ≤12, early remission 12–24", "NSSI; ideation; preparation; delirium; purely political or religious acts", "T14.91XA/XD; Z91.51"],
              ["NSSI disorder", "Body-surface injury, **no suicidal intent**, B 1 of 3, C 1 of 3", "**≥5 days** in the last year", "Sanctioned practices; scab picking and nail biting; psychosis, delirium, intoxication, withdrawal; stereotypies; trichotillomania, excoriation, SMD", "R45.88; Z91.52"]
            ] },
            { type: "ladder", title: "Time rules in the chapter", ticks: [[0, "0"], [8, "1 mo"], [50, "12 mo"], [100, "24 mo"]], rows: [
              { label: "APS: weekly symptoms", from: 0, to: 8, color: "guide", span: "past month" },
              { label: "APS: onset or worsening", from: 0, to: 50, color: "guide", span: "within 1 year" },
              { label: "Caffeine use disorder", from: 0, to: 50, color: "case", span: "12 months" },
              { label: "Internet gaming disorder", from: 0, to: 50, color: "case", span: "12 months" },
              { label: "NSSI disorder: ≥5 days", from: 0, to: 50, color: "hy", span: "last year" },
              { label: "SBD: current", from: 0, to: 50, color: "clin", span: "≤12 months" },
              { label: "SBD: early remission", from: 50, to: 100, color: "clin", span: "12–24 months" }
            ], note: "Short-duration hypomania’s 2–3 days and ND-PAE’s childhood onset do not fit this axis; see their sections." },
            { type: "compare", title: "Three families of proposal", items: [
              { title: "Subthreshold versions of Section II disorders", color: "guide", points: ["**Attenuated psychosis** (below psychosis).", "**Short-duration hypomania** (below 4 days).", "Both are already F28 / F31.89 examples in Section II."] },
              { title: "New addictions", color: "case", points: ["**Caffeine use disorder** (a stricter use-disorder template).", "**Internet gaming disorder** (a behavioral addiction beside gambling).", "ICD-11 has gaming disorder but no caffeine dependence (outside the DSM)."] },
              { title: "Behaviors and exposures given disorder status", color: "hy", points: ["**ND-PAE** (a teratogenic exposure with a behavioral phenotype).", "**Suicidal behavior disorder** and **NSSI disorder** (behaviors that Chapter 22 codes, with time frames and exclusions added)."] }
            ] }
          ]
        },
        {
          id: "s25-lookalikes",
          title: "Section II look-alikes, by chapter",
          pages: "903–926",
          blocks: [
            { type: "p", text: "Every proposed set lives next to a Section II diagnosis. This table collects the pairs the chapter itself draws, so you can study each boundary from both sides." },
            { type: "table", caption: "The boundaries the chapter draws (pp. 906–926)", head: ["Section II diagnosis", "Section III condition", "The deciding feature"], rows: [
              ["[[dx:brief-psychotic-disorder|Brief psychotic disorder]] (Ch 2)", "Attenuated psychosis syndrome", "Does the symptom **cross the psychotic threshold**? Fixed belief, no inducible doubt = psychosis (pp. 904, 906)"],
              ["[[dx:schizotypal-pd|Schizotypal PD]] (Ch 2, Ch 18)", "Attenuated psychosis syndrome", "**Trait** since early adulthood versus a **state** change within the year; schizotypal needs a broader symptom array (p. 906)"],
              ["[[dx:substance-induced-psychotic|Substance-induced psychotic disorder]] (Ch 2)", "Attenuated psychosis syndrome", "Attenuated symptoms **only during** intoxication or withdrawal favor the induced diagnosis (p. 907)"],
              ["[[dx:bipolar-ii|Bipolar II]] (Ch 3)", "Short-duration hypomania", "**4 days**; once met, bipolar II for life (p. 910)"],
              ["[[dx:cyclothymic|Cyclothymic disorder]] (Ch 3)", "Short-duration hypomania", "A lifetime **MDE** excludes cyclothymia (p. 910)"],
              ["[[dx:mdd|MDD]] with mixed features (Ch 4)", "Short-duration hypomania", "**Concurrent** hypomanic features versus hypomania and depression at **different times** (p. 910)"],
              ["[[dx:caffeine-withdrawal|Caffeine withdrawal]] (Ch 16)", "Caffeine use disorder", "Withdrawal is one of the three required criteria; alone it is **not** the disorder (pp. 910, 913)"],
              ["[[dx:gad|GAD]], [[dx:panic-disorder|panic disorder]] (Ch 5)", "Caffeine use disorder", "Chronic use mimics GAD; acute use mimics panic attacks: ask about caffeine before diagnosing anxiety (p. 913)"],
              ["[[dx:gambling|Gambling disorder]] (Ch 16)", "Internet gaming disorder", "**Money** at stake online = gambling disorder (pp. 913–914, 916)"],
              ["[[dx:adhd|ADHD]], [[dx:oppositional-defiant|ODD]], [[dx:conduct-disorder|CD]] (Ch 1, 15)", "ND-PAE", "ADHD is the commonest comorbidity but responds differently; weigh ODD/CD against intellectual and executive deficits (p. 920)"],
              ["[[dx:idd|IDD]] (Ch 1)", "ND-PAE", "IQ ≤70 is only **one** B option; ND-PAE can be met with a normal IQ (p. 916)"],
              ["[[dx:suicidal-behavior|Suicidal behavior]] code (Ch 22)", "Suicidal behavior disorder", "Same definition of an attempt; Section III adds the **24-month** window, exclusions and specifiers (pp. 920–921)"],
              ["[[dx:nssi|NSSI]] code (Ch 22)", "NSSI disorder", "Section III adds **5 days in a year**, the functions, the preoccupation and the exclusions (p. 923)"],
              ["[[dx:borderline-pd|Borderline PD]] (Ch 18)", "NSSI disorder", "Self-injury is **not pathognomonic** of borderline PD; many with NSSI disorder do not have it (p. 925)"],
              ["[[dx:trichotillomania|Trichotillomania]], [[dx:excoriation|excoriation]] (Ch 6), [[dx:stereotypic-movement|SMD]] (Ch 1)", "NSSI disorder", "Injury **confined** to hair pulling, skin picking or stereotypies gets the Section II diagnosis instead (p. 926)"]
            ] }
          ]
        },
        {
          id: "s25-beyond",
          title: "Beyond the manual: ICD-11, newer evidence and care",
          pages: "903–927",
          blocks: [
            { type: "p", text: "Everything in this section is **outside the DSM**: it is here because residents are examined on it and because the conditions are treated in practice whatever their manual status." },
            { type: "table", caption: "ICD-11 (2022; MMS 2026 release) and these conditions (outside the DSM; checked October 27, 2026)", head: ["Condition", "ICD-11"], rows: [
              ["Attenuated psychosis syndrome", "**No** ICD-11 category; subthreshold presentations fall under other specified categories"],
              ["Short-duration hypomania", "No separate category; ICD-11 bipolar type II also requires hypomanic episodes of **several days**"],
              ["Caffeine use disorder", "ICD-11 has caffeine **harmful use** (6C48.0/6C48.1), **intoxication** (6C48.2) and **withdrawal** (6C48.3) but **no caffeine dependence** category"],
              ["Internet gaming disorder", "**Gaming disorder 6C51** (online/offline), a disorder due to addictive behaviors; **hazardous gaming QE22** for risky use; three features, usually over 12 months"],
              ["ND-PAE", "No ND-PAE category; fetal alcohol syndrome sits among congenital conditions, and the behavioral phenotype is coded by its components"],
              ["Suicidal behavior and NSSI", "Coded as **intentional self-harm** in the external-causes chapter, by mechanism (PB80–PD3Z), not as mental disorders"]
            ] },
            { type: "defs", title: "Evidence newer than the text (outside the DSM; sources dated 2017–2022, checked October 27, 2026)", items: [
              ["Clinical high risk", "Pooled transition to psychosis about **19% at 2 years** and **25% at 3 years** (Salazar de Pablo et al., 2021); most who do not convert still have persistent symptoms or impairment, which is why services treat the state, not only the risk."],
              ["Gaming", "Pooled worldwide prevalence of gaming disorder about **3%** (Stevens et al., 2021), with wide variation by instrument and sample."],
              ["Self-injury", "Lifetime NSSI in non-clinical adolescents about **22%** in a 2022 meta-analysis (Xiao et al.), with similar past-year rates, so a single disclosure is common and the Section III threshold (5 days, with the B and C features) is what separates a disorder from experimentation."],
              ["Prenatal alcohol", "Global FASD prevalence about **7.7 per 1,000** (Lange et al., 2017); in four U.S. communities **1.1%–5%** of first-graders by conservative estimate (May et al., 2018)."]
            ] },
            { type: "callout", kind: "caution", title: "Care orientation (outside the DSM; see each library page)", text: "**Attenuated psychosis**: monitoring, psychosocial treatment (CBT, family work), treatment of comorbid depression and anxiety, and **no antipsychotic** as first-line prevention. **Short-duration hypomania**: treat the depression while watching for antidepressant-emergent hypomania; mood stabilizers are a bipolar-II-style decision. **Caffeine**: graded reduction over weeks avoids withdrawal. **Gaming**: CBT-based programs and family involvement; treat depression and ADHD. **ND-PAE**: developmental, educational and family supports; stimulants help some but response is less predictable. **Suicidal behavior** and **NSSI**: structured risk assessment, means safety, safety planning, treatment of the underlying disorder, and psychotherapies with evidence for self-harm (DBT, CBT); crisis lines are on the library pages. These are orientations, not protocols." }
          ]
        },
        {
          id: "s25-exam",
          title: "How this chapter is tested",
          pages: "903–927",
          blocks: [
            { type: "p", text: "App guidance. Examiners treat the chapter as a set of **numbers and boundaries**." },
            { type: "list", title: "Traps to expect", items: [
              "Treating any of the seven as an **official diagnosis**: they are research criteria; only Section II is official (p. 903).",
              "Forgetting that **persistent complex bereavement disorder** has **left** the chapter and is now **prolonged grief disorder** in Section II (p. 903).",
              "APS: counting a **fixed** belief as attenuated; the person must retain **doubt** (p. 904). Forgetting Criterion F: **any** past psychotic disorder excludes it (p. 904). Confusing **state** (APS) with **trait** (schizotypal) (p. 906).",
              "Short-duration hypomania: counting **one** 2–3-day period (two are needed), or missing that a **4-day** period makes **bipolar II** permanently (pp. 908–910). Mixed features are **concurrent**; this set is **sequential** (p. 910).",
              "Caffeine: scoring **any three** criteria; it is **the first three** (pp. 910–911). Calling heavy use with tolerance and withdrawal a disorder (p. 913).",
              "Gaming: counting **online gambling** (gambling disorder) or **social media** use (not analogous) (pp. 913, 916); expecting **physical** withdrawal signs (p. 913).",
              "ND-PAE: requiring **facial features** (not needed, p. 917) or an **IQ under 70** (one of five B options, p. 916); forgetting the **communication or social communication** rule in D (p. 917); diagnosing a **2-year-old** (defer at 3 and under, p. 918). The exposure figure is **13 drinks a month or 2 on an occasion** (p. 918).",
              "Suicidal behavior disorder: counting a person talked out of it **before** starting (does not count) or discounting an attempt that was **interrupted after** starting (counts) (p. 921). Letting **low lethality** or **ambivalence** argue against the diagnosis (not considered, p. 921). Mixing up **current (≤12 months)** and **early remission (12–24 months)** (p. 920).",
              "NSSI disorder: using 5 **acts** instead of 5 **days** (p. 923); forgetting that **religious** or **group** self-injury is excluded (p. 925); assuming **borderline PD** (p. 925); missing that **trichotillomania, excoriation and SMD** take precedence (p. 926).",
              "Codes: writing **T14.91A/D** as printed; the valid codes are **T14.91XA/XD** (p. 920; APA correction)."
            ] },
            { type: "callout", kind: "mnemonic", title: "The seven numbers", text: "**1-week-1-month-1-year** (APS) · **2 × 2–3 days** (short-duration hypomania) · **first 3 of 9** (caffeine) · **5 of 9** (gaming) · **13 drinks or 2 in a sitting, 1-1-2** (ND-PAE) · **24 months, 12/12–24** (suicidal behavior) · **5 days** (NSSI). App mnemonic; check each against its criteria set." }
          ]
        }
      ]
    }
  ]
});
