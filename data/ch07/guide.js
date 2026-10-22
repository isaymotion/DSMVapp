/* Chapter 7 study guide. Source: DSM-5-TR, Trauma- and Stressor-Related Disorders (pp. 295–328).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch07", "guide", {
  intro: "Every disorder in this chapter names **exposure to a traumatic or stressful event** as a diagnostic criterion (p. 295). Responses to trauma are varied: some are fear-based, but many are dominated by **anhedonia and dysphoria**, **anger and aggression**, or **dissociation**, which is why these disorders were moved out of the anxiety chapter. Two disorders of early childhood, **reactive attachment disorder** and **disinhibited social engagement disorder**, share a single cause, **social neglect**, but look opposite: withdrawn versus indiscriminately friendly. **PTSD** needs a **Criterion A** trauma (actual or threatened death, serious injury or sexual violence) and four symptom clusters for **more than 1 month**; **acute stress disorder** covers **3 days to 1 month**. **Adjustment disorders** follow any stressor, start within **3 months** and end within **6 months** of the stressor’s end. **Prolonged grief disorder**, new in DSM-5-TR, needs **12 months** (6 in youth) of intense yearning or preoccupation plus three other grief symptoms. The [[helper:trauma|trauma and stressor helper]] and the [[helper:attachment|attachment helper]] walk you through the reasoning.",
  objectives: [
    "Define a **Criterion A** traumatic event and its four routes of exposure, and recognize what does **not** qualify (natural deaths, media exposure outside work, most medical illness).",
    "State the PTSD criteria for people **older than 6** (1 intrusion, 1 avoidance, 2 cognition and mood, 2 arousal, **>1 month**) and for **children 6 and younger**.",
    "Apply the **dissociative symptoms** and **delayed expression** specifiers.",
    "Diagnose **acute stress disorder** (9 of 14 symptoms, **3 days to 1 month**) and explain how it relates to PTSD.",
    "Diagnose **adjustment disorders** with their six subtypes and codes, the **3-month** onset and **6-month** offset rules, and the acute and persistent specifiers.",
    "Diagnose **prolonged grief disorder** (12 months, 6 in youth; yearning or preoccupation; 3 of 8) and separate it from normal grief, MDD and PTSD.",
    "Separate **reactive attachment disorder** (withdrawn, minimal comfort seeking) from **disinhibited social engagement disorder** (overfamiliar with strangers), and both from autism, intellectual disability and ADHD.",
    "Know the epidemiology, course, risk factors (pre-, peri- and posttraumatic), suicide risk and comorbidity of each disorder.",
    "Use the **other specified** examples, including subthreshold PTSD and adjustment-like disorders with delayed onset or prolonged duration."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s7-map",
          title: "How the chapter is built",
          pages: "295",
          blocks: [
            { type: "p", text: "The chapter sits between the anxiety, obsessive-compulsive and dissociative chapters because of its close links with all three. Its disorders are grouped because they **require an event**, not because they share a symptom profile (p. 295)." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:rad|Reactive attachment disorder]]", "F94.1", "Neglected young child who rarely seeks or responds to comfort", "295–298"],
              ["[[dx:dsed|Disinhibited social engagement disorder]]", "F94.2", "Neglected child who approaches and goes off with strangers", "298–301"],
              ["[[dx:ptsd|Posttraumatic stress disorder]]", "F43.10", "Criterion A trauma; intrusion, avoidance, cognition/mood, arousal; >1 month", "301–313"],
              ["[[dx:acute-stress|Acute stress disorder]]", "F43.0", "Criterion A trauma; 9 of 14 symptoms; 3 days to 1 month", "313–319"],
              ["[[dx:adjustment|Adjustment disorders]]", "F43.20–F43.25", "Distress or impairment within 3 months of any stressor, gone within 6 months of its end", "319–322"],
              ["[[dx:pgd|Prolonged grief disorder]]", "F43.8 (now F43.81)", "≥12 months after a death (6 in youth): yearning or preoccupation + 3 of 8", "322–327"],
              ["[[dx:other-specified-trauma|Other specified trauma- and stressor-related disorder]]", "F43.8 (now F43.89)", "Subthreshold or atypical presentations, reason recorded", "327–328"],
              ["[[dx:unspecified-trauma|Unspecified trauma- and stressor-related disorder]]", "F43.9", "Reason not recorded or information insufficient", "328"]
            ] },
            { type: "update", kind: "post", year: "2022", title: "New ICD-10-CM codes after DSM-5-TR went to press", source: "ICD-10-CM update effective October 1, 2022; APA DSM-5-TR coding update", text: "DSM-5-TR printed **F43.8** for both prolonged grief disorder and other specified trauma- and stressor-related disorder. From **October 1, 2022**, use **F43.81** for **prolonged grief disorder** and **F43.89** for **other specified trauma- and stressor-related disorder**; F43.8 is no longer a billable code." },
            { type: "flow", title: "Five kinds of reaction to adversity", steps: [
              ["Neglect in early childhood", "Reactive attachment disorder (withdrawn) · disinhibited social engagement disorder (indiscriminate)", "case"],
              ["Trauma, first month", "Acute stress disorder (3 days to 1 month)", "hy"],
              ["Trauma, after a month", "PTSD (more than 1 month; may be delayed)", "drug"],
              ["Any stressor", "Adjustment disorders (within 3 months; gone within 6 months of the end)", "mech"],
              ["A death", "Normal grief · prolonged grief disorder (≥12 months, 6 in youth)", "guide"]
            ], note: "A stressor does not exclude other diagnoses. If the reaction meets **major depressive disorder**, panic disorder or another disorder, diagnose that disorder (instead of an adjustment disorder, or alongside PTSD)." },
            { type: "update", kind: "tr", title: "Prolonged grief disorder joins the manual", text: "DSM-5-TR’s best-known addition. DSM-5 had placed **persistent complex bereavement disorder** in Section III (conditions for further study) and listed it as an other specified example. DSM-5-TR made **prolonged grief disorder** a full diagnosis, added “not better explained by prolonged grief disorder” to adjustment disorder Criterion D, and added **persistent response to trauma with PTSD-like symptoms** (subthreshold PTSD) to the other specified examples." }
          ]
        },
        {
          id: "s7-criterion-a",
          title: "What counts as a trauma (Criterion A)",
          pages: "301, 305–306",
          blocks: [
            { type: "p", text: "PTSD and acute stress disorder require **exposure to actual or threatened death, serious injury or sexual violence**. Adjustment disorders accept **any** stressor; the attachment disorders require **neglect**; prolonged grief disorder requires a **death**." },
            { type: "table", caption: "The four routes of exposure (pp. 301, 305–306)", head: ["Route", "Examples", "Limits"], rows: [
              ["**A1 Directly experiencing**", "Combat, assault, robbery, childhood physical abuse, kidnapping, hostage-taking, terrorism, torture, disasters, severe accidents; **sexual violence** of any kind, including nonconsensual images", "Bullying counts only with a credible threat of serious harm or sexual violence"],
              ["**A2 Witnessing in person**", "Seeing an assault, unnatural death, domestic violence; a parent watching their child’s life-threatening emergency", "Must be **in person**"],
              ["**A3 Learning it happened to someone close**", "Murder, assault, suicide, serious accident of a close relative or friend", "Death must be **violent or accidental**: a natural death does not qualify"],
              ["**A4 Repeated or extreme exposure to aversive details**", "First responders collecting remains; police reviewing child abuse; drone operators; therapists hearing trauma details", "Media, TV, movies or pictures count **only if work related**"]
            ] },
            { type: "defs", title: "Medical events and multiple traumas (pp. 305–306)", items: [
              ["Medical illness", "A life-threatening illness is **not necessarily** a trauma. Qualifying medical events are **sudden and catastrophic**: myocardial infarction, anaphylaxis, waking during surgery, burn debridement, emergency cardioversion."],
              ["Severity", "PTSD may be especially severe or long-lasting when the stressor is **interpersonal and intentional** (torture, sexual violence)."],
              ["Multiple traumas", "Ask for the **worst** event, because intrusion and avoidance symptoms refer to a specific event. If the person cannot pick one, the whole exposure can count."]
            ] },
            { type: "callout", kind: "exam", text: "Learning that a parent **died of cancer** is not Criterion A (a natural death). Learning that a parent **was killed in a crash** is. Watching a massacre **on the news** is not, unless it is your job (a journalist editing the footage)." }
          ]
        }
      ]
    },
    {
      title: "Disorders of attachment after neglect",
      sections: [
        {
          id: "s7-rad",
          title: "Reactive attachment disorder",
          pages: "295–298",
          blocks: [
            { type: "criteria", title: "Reactive attachment disorder in brief", code: "F94.1", pages: "295–296", items: [
              ["A", "Consistent **inhibited, emotionally withdrawn** behavior toward adult caregivers: **both**", ["The child **rarely or minimally seeks comfort** when distressed.", "The child **rarely or minimally responds to comfort** when distressed."]],
              ["B", "Persistent social and emotional disturbance with **≥2 of 3**:", ["Minimal social and emotional responsiveness to others.", "**Limited positive affect.**", "Episodes of unexplained **irritability, sadness or fearfulness**, even in nonthreatening interactions with caregivers."]],
              ["C", "A pattern of **extremes of insufficient care**: ≥1 of", ["**Social neglect or deprivation** (unmet needs for comfort, stimulation, affection).", "**Repeated changes of primary caregivers** (e.g., frequent foster care changes).", "Rearing in **unusual settings** that limit selective attachments (e.g., institutions with high child-to-caregiver ratios)."]],
              ["D", "The care in C is presumed responsible for A."],
              ["E", "Criteria for **autism spectrum disorder** are not met."],
              ["F", "Evident **before age 5**."],
              ["G", "**Developmental age of at least 9 months.**"]
            ], specifiers: [["Persistent", "Present for more than **12 months**"], ["Severe", "All symptoms present, each at relatively high levels"]] },
            { type: "list", title: "Features and course (pp. 296–297)", items: [
              "The essential feature is **absent or grossly underdeveloped attachment**: the child has the **capacity** to attach but no opportunity was given.",
              "Associated: **cognitive and language delays**, **stereotypies**, signs of severe neglect (malnutrition).",
              "**Rare** even in severely neglected children: **under 10%**; prevalence is unknown.",
              "Features look similar from **9 months to 5 years**. Improves with normative caregiving; without it, signs may persist for years. Diagnose with caution after age 5.",
              "**Serious social neglect** is both required and the **only known risk factor**; prognosis depends on the **quality of later caregiving**.",
              "Be cautious across cultures where attachment has not been studied, and in war zones and among refugee children."
            ] },
            { type: "case", title: "Clinical vignette: the quiet toddler", text: "A 3-year-old girl adopted 4 months ago from an orphanage, where she lived from birth with one caregiver for 20 infants, does not go to her adoptive parents when she falls and hurts herself, and stiffens rather than relaxing when they hug her. She rarely smiles and has unexplained crying spells during play. She has language delays but uses gestures and eye contact to communicate, and has no restricted interests.", point: "Neither seeks nor responds to comfort, with limited positive affect and unexplained sadness, after **institutional rearing**, before age 5, developmental age over 9 months, not autism: **F94.1 reactive attachment disorder**." }
          ]
        },
        {
          id: "s7-dsed",
          title: "Disinhibited social engagement disorder",
          pages: "298–301",
          blocks: [
            { type: "criteria", title: "Disinhibited social engagement disorder in brief", code: "F94.2", pages: "298–299", items: [
              ["A", "The child actively **approaches and interacts with unfamiliar adults**, with **≥2 of 4**:", ["**Reduced or absent reticence** with unfamiliar adults.", "**Overly familiar** verbal or physical behavior beyond cultural and age norms.", "**Diminished or absent checking back** with the caregiver after venturing away, even in unfamiliar settings.", "**Willingness to go off with an unfamiliar adult** with minimal or no hesitation."]],
              ["B", "Not limited to **impulsivity** (as in ADHD): socially disinhibited behavior."],
              ["C", "**Extremes of insufficient care** (same three forms as RAD)."],
              ["D", "The care in C is presumed responsible for A."],
              ["E", "**Developmental age of at least 9 months.**"]
            ], specifiers: [["Persistent", "Present for more than **12 months**"], ["Severe", "All symptoms present, each at relatively high levels"]] },
            { type: "list", title: "Features and course (pp. 299–301)", items: [
              "May coexist with delays and stereotypies, but signs **persist after neglect ends**, so children may show no current neglect.",
              "It can occur in children who **do** have attachments, from disturbed to **secure**: DSED is not a disorder of attachment itself.",
              "Rare; up to **2%** in low-income UK community samples.",
              "Described from the **second year of life through adolescence and young adulthood**. Toddlers go off with strangers; preschoolers are verbally and socially intrusive and attention seeking; school-age children are overfamiliar with **inauthentic** emotion; adolescents have **superficial** peer relationships; adults show excessive self-disclosure and low stranger awareness.",
              "**Not seen** when neglect occurs only **after age 2**.",
              "Prognosis is only **modestly** linked to later caregiving: it often **persists** even in markedly improved environments (unlike RAD).",
              "Risk: neglect, multiple placement disruptions, maternal borderline personality disorder, low-quality care; blunted reward sensitivity and poor inhibitory control."
            ] },
            { type: "p", text: "**Differential and comorbidity** (p. 301): unlike **ADHD**, there are no attention or hyperactivity problems. It often co-occurs with **ADHD and externalizing disorders** (shared poor inhibitory control), cognitive and language delays, stereotypies and, sometimes, **autism**." }
          ]
        },
        {
          id: "s7-attach-ddx",
          title: "RAD or DSED, autism or delay?",
          pages: "297–301",
          blocks: [
            { type: "compare", title: "Same cause, opposite pictures", items: [
              { title: "Reactive attachment disorder", color: "case", points: ["**Internalizing**: withdrawn, inhibited, sad.", "Does not seek or accept comfort from caregivers.", "Requires onset **before 5** and that autism is excluded.", "Improves with good caregiving."] },
              { title: "Disinhibited social engagement disorder", color: "drug", points: ["**Externalizing**: overfriendly, goes off with strangers.", "May have attachments, even secure ones.", "No age-of-onset ceiling; not seen if neglect began after 2.", "Often persists despite good caregiving."] }
            ] },
            { type: "table", caption: "Differential diagnosis of RAD (pp. 297–298)", head: ["Condition", "How it differs"], rows: [
              ["Autism spectrum disorder", "Rarely a history of neglect; **restricted interests and rituals**; **selective** deficits in social communication; **shows attachment** typical for developmental level"],
              ["Intellectual developmental disorder", "Social and emotional skills match cognitive level; **selective attachments** appear by a cognitive age of 7–9 months"],
              ["Depressive disorders in young children", "Reduced positive affect but **still seek and respond to comfort**"]
            ] },
            { type: "callout", kind: "exam", text: "Both disorders need **neglect** and a **developmental age of at least 9 months**. RAD has two extra rules: **onset before 5** and **not autism**. DSED has its own: **not just impulsivity**. Both use **persistent** (>12 months) and **severe** specifiers." }
          ]
        }
      ]
    },
    {
      title: "Posttraumatic stress disorder",
      sections: [
        {
          id: "s7-ptsd-criteria",
          title: "PTSD in people older than 6: criteria",
          pages: "301–303",
          blocks: [
            { type: "criteria", title: "PTSD (adults, adolescents and children older than 6)", code: "F43.10", pages: "301–303", items: [
              ["A", "Exposure to actual or threatened **death, serious injury or sexual violence**: directly, witnessed in person, learned about (close person; violent or accidental death), or repeated or extreme exposure to aversive details (not media unless work related)."],
              ["B", "**Intrusion: ≥1 of 5**", ["Recurrent, involuntary, **intrusive distressing memories** (children: repetitive play with trauma themes).", "Recurrent **distressing dreams** (children: frightening dreams without recognizable content).", "**Dissociative reactions (flashbacks)**, from brief intrusions to complete loss of awareness (children: reenactment in play).", "Intense or prolonged **psychological distress** at cues.", "Marked **physiological reactions** to cues."]],
              ["C", "**Avoidance: ≥1 of 2**", ["Avoiding distressing **memories, thoughts or feelings**.", "Avoiding **external reminders** (people, places, conversations, activities, objects, situations)."]],
              ["D", "**Negative alterations in cognitions and mood: ≥2 of 7**", ["**Amnesia** for an important aspect (dissociative, not from head injury or substances).", "Persistent, exaggerated **negative beliefs** about oneself, others or the world.", "Distorted cognitions about cause or consequences leading to **blame** of self or others.", "Persistent **negative emotional state** (fear, horror, anger, guilt, shame).", "Markedly **diminished interest**.", "**Detachment** or estrangement from others.", "Persistent **inability to feel positive emotions**."]],
              ["E", "**Arousal and reactivity: ≥2 of 6**", ["**Irritability and angry outbursts**.", "**Reckless or self-destructive** behavior.", "**Hypervigilance**.", "Exaggerated **startle**.", "Poor **concentration**.", "**Sleep** disturbance."]],
              ["F", "Duration of B–E **more than 1 month**."],
              ["G", "Clinically significant **distress or impairment**."],
              ["H", "Not due to a **substance** or **medical condition**."]
            ], specifiers: [["With dissociative symptoms", "Persistent or recurrent **depersonalization** or **derealization**, not due to substances (blackouts) or a medical condition (complex partial seizures)"], ["With delayed expression", "Full criteria **not met until at least 6 months** after the event (some symptoms may start immediately)"]] },
            { type: "callout", kind: "mnemonic", title: "1-1-2-2, more than a month", text: "**1** intrusion, **1** avoidance, **2** cognition and mood, **2** arousal, for **more than 1 month**. Twenty symptoms in all: 5 + 2 + 7 + 6. The [[page:mnemonics|Mnemonics]] page has more." },
            { type: "case", title: "Clinical vignette: the night shift", text: "A 32-year-old nurse was held at knifepoint by a patient’s relative 3 months ago. She has vivid, unwanted memories of the blade and nightmares several times a week, and her heart races when she smells the same aftershave. She has switched to day shifts and avoids the ward where it happened. She blames herself for not calling security sooner, feels cut off from her husband and no longer enjoys running. She startles at every alarm, checks exits constantly and sleeps 4 hours a night.", point: "Criterion A (directly threatened with death), **intrusion** (memories, nightmares, cue reactivity), **avoidance**, **cognition and mood** (self-blame, detachment, lost interest), **arousal** (startle, hypervigilance, sleep), for **more than 1 month**: **F43.10 PTSD**." }
          ]
        },
        {
          id: "s7-ptsd-symptoms",
          title: "PTSD: reading the symptom clusters",
          pages: "305–308",
          blocks: [
            { type: "defs", title: "Points the manual emphasizes (pp. 306–307)", items: [
              ["Intrusive memories vs rumination", "Intrusions are **involuntary**, vivid, sensory and emotional, not voluntary brooding, which is the depressive pattern."],
              ["Flashbacks", "Dissociative states, usually **seconds** long, on a continuum from brief sensory intrusion to complete loss of awareness, followed by distress and arousal."],
              ["Cues", "External (windy days after a hurricane, someone who looks like the perpetrator) or **internal** (dizziness after head trauma, a racing heart)."],
              ["Avoidance", "Deliberate distraction or suppression, including **substance use** to avoid internal reminders."],
              ["Amnesia (D1)", "Typically **dissociative**, not due to head injury, alcohol or drugs."],
              ["Negative beliefs (D2)", "“The world is completely dangerous,” “No one can be trusted,” “My life is permanently ruined.”"],
              ["Reckless behavior (E2)", "Dangerous driving, heavy substance use, risky sex, self-directed violence. **Not** job-required danger with precautions, and not merely unwise behavior such as gambling or binge eating."],
              ["Startle (E4) vs cue reactivity (B5)", "Startle is **reflexive** and can follow **any** stimulus; B5 needs some awareness that the cue relates to the trauma."],
              ["Duration rules", "**Current** PTSD: B–E all met for more than a month, including the past month. **Lifetime** PTSD: a period of more than a month when all were met together."]
            ] },
            { type: "list", title: "Presentations and associated features (pp. 305, 308)", items: [
              "The picture varies: **fear-based** reexperiencing, **anhedonic or dysphoric** mood and negative cognitions, **arousal and externalizing** anger, **dissociation**, or combinations.",
              "Developmental **regression** (loss of language) in young children.",
              "**Auditory pseudo-hallucinations** (hearing one’s thoughts in voices) and **paranoid ideation** can occur.",
              "After **prolonged, repeated, severe** trauma (childhood abuse, torture): difficulties regulating emotion, unstable relationships and dissociation.",
              "When a close person died violently, symptoms of **both** PTSD and prolonged grief disorder may be present."
            ] }
          ]
        },
        {
          id: "s7-ptsd-young",
          title: "PTSD in children 6 years and younger",
          pages: "303–304, 309",
          blocks: [
            { type: "table", caption: "How the preschool criteria differ", head: ["Element", "Older than 6", "6 and younger"], rows: [
              ["A Exposure", "Four routes, including learning about a close friend and work exposure", "Directly, witnessing (especially **caregivers**), or learning it happened to a **parent or caregiver**; **no A4**"],
              ["B Intrusion", "≥1 of 5", "≥1 of 5; memories **may not appear distressing** and may show as **play reenactment**; dreams may not be clearly trauma-related"],
              ["C/D Avoidance and cognitions", "C: ≥1 avoidance; D: ≥2 of 7", "**Combined**: ≥1 of 6 (avoidance of activities/places or people/conversations; more negative emotions; less interest including **constricted play**; social withdrawal; less positive emotion)"],
              ["Arousal", "E: ≥2 of 6", "D: ≥2 of 5 (no reckless behavior; tantrums included)"],
              ["Impairment", "Social, occupational or other", "Relationships with **parents, siblings, peers, caregivers** or **school behavior**"],
              ["Duration and specifiers", "More than 1 month; dissociative; delayed expression", "Same"]
            ] },
            { type: "list", title: "Development (p. 309)", items: [
              "PTSD can occur **after the first year of life**.",
              "Young children reexperience through **play** (a fire survivor draws flames), may not look fearful, may focus on **imagined interventions**, and may become **preoccupied with reminders** while avoiding them.",
              "Severe **emotional abuse** (threats of abandonment) and intense medical treatment can be traumatic for young children.",
              "School-age children avoid new activities; adolescents avoid dating or driving, may judge themselves cowardly and feel socially changed.",
              "In older adults PTSD is linked with negative health perceptions, primary care use and suicidal thoughts; declining health and cognition can worsen it."
            ] }
          ]
        },
        {
          id: "s7-ptsd-course",
          title: "PTSD: prevalence, course and risk factors",
          pages: "308–311",
          blocks: [
            { type: "table", caption: "Prevalence (p. 308)", head: ["Population", "Figure"], rows: [
              ["US adults, lifetime (DSM-5)", "**6.1%–8.3%**"],
              ["US adults, 12-month (DSM-5)", "**4.7%**"],
              ["US adults, lifetime (DSM-IV)", "6.8%"],
              ["US adolescents, lifetime (DSM-IV)", "5.0%–8.1%"],
              ["24 countries, lifetime (DSM-IV)", "3.9%"],
              ["Conflict-affected populations", "**11%** point prevalence with impairment"],
              ["Survivors of rape, combat, captivity, internment, genocide", "**One-third to over one-half**"],
              ["Women vs men, lifetime (DSM-5)", "**8%–11%** vs **4.1%–5.4%**"]
            ] },
            { type: "list", title: "Course (pp. 308–309)", items: [
              "Symptoms usually begin within the **first 3 months**; full criteria may be delayed months or years (**delayed expression**, formerly “delayed onset”).",
              "Often begins as **acute stress disorder**.",
              "About **half** of adults recover completely within **3 months**; some remain symptomatic **beyond 12 months**, sometimes **more than 50 years**.",
              "Reminders, new stressors and new traumas can bring recurrence."
            ] },
            { type: "table", caption: "Risk and protective factors (pp. 309–310)", head: ["Phase", "Factors"], rows: [
              ["**Pretraumatic**", "Childhood emotional problems by 6; prior mental disorders (panic, depression, PTSD, OCD); negative affectivity; lower SES and education; prior and childhood trauma and adversity; lower intelligence; discrimination; family psychiatric history. Modest heritability; GWAS loci. **Protective**: social support before the event"],
              ["**Peritraumatic**", "Severity (“dose”), perceived life threat, injury, **interpersonal violence** (especially by a caregiver); for military personnel, being a perpetrator, witnessing atrocities, killing; **peritraumatic dissociation**, fear and panic that persist"],
              ["**Posttraumatic**", "Negative appraisals, poor coping, **acute stress disorder**, repeated reminders, new adversity, financial losses; forced migration; discrimination (more chronic course). **Protective**: social support, family stability for children"]
            ] },
            { type: "callout", kind: "culture", text: "Culture shapes exposure, meaning (being unable to perform funerary rites; living among unpunished perpetrators; loss of “face”) and expression. In many non-Western groups **avoidance** is less common and **somatic** symptoms (dizziness, breathlessness, heat) more common; anger, nightmares and **sleep paralysis** are common everywhere. Self-blame may fit ideas of karma or destiny (pp. 310–311)." }
          ]
        },
        {
          id: "s7-ptsd-suicide",
          title: "PTSD: suicide, function and comorbidity",
          pages: "311–313",
          blocks: [
            { type: "list", title: "Suicide (p. 311)", items: [
              "Childhood abuse and sexual trauma raise suicide risk in civilians and veterans.",
              "PTSD is linked with suicidal thoughts, attempts and **death by suicide**.",
              "It raises the chance of moving **from suicidal thoughts to a plan or attempt**, independent of mood disorders; the link holds in adolescents too."
            ] },
            { type: "p", text: "**Functional consequences** (pp. 311–312): high social, occupational and physical impairment, poor quality of life and physical health problems; poor relationships, absenteeism, lower income and education." },
            { type: "p", text: "**Comorbidity** (p. 313): more likely to have depressive, bipolar, anxiety or **substance use** disorders; raised risk of **major neurocognitive disorder**. Women more often develop PTSD after mild TBI. In **young children**, comorbidity is mainly **ODD and separation anxiety disorder**." }
          ]
        },
        {
          id: "s7-ptsd-ddx",
          title: "PTSD: differential diagnosis",
          pages: "312–313",
          blocks: [
            { type: "table", caption: "PTSD or something else? (pp. 312–313)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:adjustment|Adjustment disorder]]", "Stressor of **any** type; or a Criterion A event without full PTSD criteria; or the full PTSD picture after a **non**-Criterion A stressor (a spouse leaving)"],
              ["[[dx:acute-stress|Acute stress disorder]]", "Restricted to **3 days to 1 month**"],
              ["[[dx:ocd|OCD]]", "Intrusive thoughts are **obsessions**, not trauma memories; compulsions"],
              ["[[dx:panic-disorder|Panic disorder]], [[dx:gad|GAD]], [[dx:separation-anxiety|separation anxiety]]", "Arousal, avoidance and worry not tied to a specific trauma"],
              ["[[dx:mdd|Major depressive disorder]]", "No B or C symptoms; both can be diagnosed if both are met"],
              ["ADHD", "Onset **before 12**; PTSD follows a trauma"],
              ["Personality disorders", "Interpersonal problems that began or greatly worsened **after** trauma suggest PTSD"],
              ["Dissociative disorders", "May or may not follow trauma; if full PTSD is met, consider **with dissociative symptoms**"],
              ["Functional neurological symptom disorder", "New somatic symptoms after trauma may be PTSD"],
              ["Psychotic disorders", "Flashbacks relate directly to the trauma, without other psychotic or substance features"],
              ["Traumatic brain injury", "Both can coexist. **Reexperiencing and avoidance** point to PTSD; **disorientation and confusion** to TBI. TBI memory loss reflects **failed encoding**; PTSD memory loss is **dissociative**"]
            ] },
            { type: "callout", kind: "exam", text: "Same symptoms, wrong event: a full PTSD picture after a **divorce or firing** is an **adjustment disorder**, because the stressor does not meet Criterion A. A Criterion A event with too few symptoms is also an adjustment disorder (or other specified if it lasts beyond 6 months)." }
          ]
        }
      ]
    },
    {
      title: "Acute stress disorder",
      sections: [
        {
          id: "s7-asd-criteria",
          title: "Acute stress disorder: criteria",
          pages: "313–316",
          blocks: [
            { type: "criteria", title: "Acute stress disorder in brief", code: "F43.0", pages: "313–315", items: [
              ["A", "Exposure to actual or threatened **death, serious injury or sexual violence** (same four routes as PTSD)."],
              ["B", "**Nine or more of 14** symptoms from any of five categories, beginning or worsening after the event:", [
                "**Intrusion (4)**: memories; dreams; flashbacks; distress or physiological reactions to cues.",
                "**Negative mood (1)**: inability to feel positive emotions.",
                "**Dissociation (2)**: altered sense of reality of self or surroundings (daze, time slowing); amnesia for part of the event.",
                "**Avoidance (2)**: of memories, thoughts or feelings; of external reminders.",
                "**Arousal (5)**: sleep disturbance; irritability and outbursts; hypervigilance; poor concentration; exaggerated startle."
              ]],
              ["C", "Duration **3 days to 1 month** after the trauma.", [], "Symptoms usually begin immediately, but must persist **at least 3 days**."],
              ["D", "Clinically significant **distress or impairment**."],
              ["E", "Not due to a substance or medical condition (e.g., **mild TBI**), and not better explained by **brief psychotic disorder**."]
            ] },
            { type: "compare", title: "Acute stress disorder vs PTSD", items: [
              { title: "Acute stress disorder", color: "hy", points: ["**3 days to 1 month**.", "**9 of 14** symptoms from **any** category: no cluster minimums.", "Intrusion item 4 combines distress and physiological reactions.", "Two **dissociative** items listed separately."] },
              { title: "PTSD", color: "drug", points: ["**More than 1 month**.", "Minimums in each cluster: **1-1-2-2**.", "Separate items for distress and physiological reactions.", "Dissociation as a **specifier**."] }
            ] },
            { type: "list", title: "Associated features (p. 316)", items: [
              "**Catastrophic** thinking about one’s role, response or future harm; excessive **guilt**; interpreting symptoms as signs of lost mental capacity.",
              "**Panic attacks** in the first month, cued or seemingly spontaneous.",
              "Chaotic or impulsive behavior: reckless driving, irrational decisions, gambling.",
              "In children, marked **separation anxiety** and need for attention.",
              "After a traumatic death, acute **grief** reactions (disbelief, anger).",
              "**Postconcussive** symptoms are common whether or not the brain was injured."
            ] }
          ]
        },
        {
          id: "s7-asd-course",
          title: "Acute stress disorder: course, risk and differential",
          pages: "316–319",
          blocks: [
            { type: "table", caption: "Epidemiology and course (pp. 316–317)", head: ["Topic", "Detail"], rows: [
              ["After non-assault trauma", "**Under 20%** (accidents, mild TBI, burns, industrial accidents)"],
              ["After interpersonal trauma", "**19%–50%** (assault, rape)"],
              ["Earliest diagnosis", "**3 days** after the event"],
              ["Outcome", "May remit within a month or progress to PTSD; about **half** of people who develop PTSD first had acute stress disorder"],
              ["Sex", "More common in women"]
            ] },
            { type: "defs", title: "Risk factors (p. 317)", items: [
              ["Temperamental", "Prior mental disorder, negative affectivity, greater perceived severity, **avoidant coping**, and especially **catastrophic appraisals** (exaggerated future harm, guilt, hopelessness)."],
              ["Environmental", "Exposure to the trauma; prior trauma."],
              ["Physiological", "Elevated **acoustic startle** before the trauma."]
            ] },
            { type: "defs", title: "Differential diagnosis (pp. 318–319)", items: [
              ["Adjustment disorders", "Any stressor; or a Criterion A event without enough symptoms; reactions to life-threatening **illness** often fit better; depressive or anger reactions involve **rumination**, not intrusive memories."],
              ["Panic disorder", "Spontaneous panic attacks are common in acute stress disorder; diagnose panic disorder only with unexpected attacks plus worry or behavior change."],
              ["Dissociative disorders", "Severe dissociation **without** other ASD symptoms → depersonalization/derealization disorder; persistent trauma **amnesia** alone → dissociative amnesia."],
              ["PTSD", "If symptoms persist **beyond 1 month** and meet PTSD criteria, change the diagnosis to PTSD."],
              ["OCD and psychotic disorders", "Obsessions are not trauma memories; flashbacks relate to the trauma without other psychotic features."],
              ["Traumatic brain injury", "Can coexist; reexperiencing and avoidance point to ASD, disorientation and confusion to TBI; ASD lasts only up to a month."]
            ] },
            { type: "callout", kind: "culture", text: "Profiles vary across cultures, especially dissociation, nightmares, avoidance and somatic symptoms. **Possession or trance-like** behaviors may occur in the first month; panic is salient among Cambodians (**khyâl attacks**), and **ataque de nervios** may follow trauma among Latin Americans (p. 317)." }
          ]
        }
      ]
    },
    {
      title: "Adjustment disorders",
      sections: [
        {
          id: "s7-adjust",
          title: "Adjustment disorders: criteria and subtypes",
          pages: "319–321",
          blocks: [
            { type: "criteria", title: "Adjustment disorders in brief", code: "F43.20–F43.25", pages: "319–320", items: [
              ["A", "Emotional or behavioral symptoms in response to an identifiable stressor, **within 3 months** of its onset."],
              ["B", "Clinically significant: **marked distress out of proportion** to the stressor (in cultural context) and/or **significant impairment**."],
              ["C", "Does **not** meet criteria for another mental disorder and is not merely an **exacerbation** of a preexisting one."],
              ["D", "Not **normal bereavement**, and not better explained by **prolonged grief disorder**."],
              ["E", "Once the stressor or its consequences end, symptoms do not persist **more than another 6 months**."]
            ], specifiers: [["Duration", "**Acute**: less than 6 months · **Persistent (chronic)**: 6 months or more, possible only with a **chronic stressor** or one with **enduring consequences**"]] },
            { type: "table", caption: "Subtypes and codes (p. 319)", head: ["Code", "Subtype", "Predominant symptoms"], rows: [
              ["**F43.21**", "With depressed mood", "Low mood, tearfulness, hopelessness"],
              ["**F43.22**", "With anxiety", "Nervousness, worry, jitteriness, separation anxiety"],
              ["**F43.23**", "With mixed anxiety and depressed mood", "Both"],
              ["**F43.24**", "With disturbance of conduct", "Conduct problems"],
              ["**F43.25**", "With mixed disturbance of emotions and conduct", "Emotional symptoms and conduct problems"],
              ["**F43.20**", "Unspecified", "Not classifiable in the subtypes above"]
            ] },
            { type: "list", title: "Features, prevalence and course (pp. 320–321)", items: [
              "Stressors can be single (a breakup), multiple, recurrent (seasonal business crises), continuous (chronic illness, a crime-ridden neighborhood), community-wide (disaster) or **developmental** (starting school, marriage, parenthood, retirement).",
              "Can follow a **death** when grief exceeds cultural, religious or age-appropriate norms and does not meet prolonged grief disorder.",
              "**Common**: 5%–20% of US outpatients have it as the principal diagnosis; up to **50%** in hospital psychiatric consultation services; perhaps more common in women.",
              "Acute stressors bring onset within days and a brief course; persistent stressors can produce the persistent form.",
              "Risk: disadvantaged life circumstances.",
              "Linked with **suicide attempts and suicide**; among some migrant groups it is one of the diagnoses most associated with suicidal behavior. **Self-immolation** is a risk in some cultural contexts.",
              "Reduces work or school performance, and can complicate medical illness (poor adherence, longer stays)."
            ] }
          ]
        },
        {
          id: "s7-adjust-ddx",
          title: "Adjustment disorders: differential diagnosis",
          pages: "321–322",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 321–322)", items: [
              ["Major depressive disorder", "If MDD criteria are met after a stressor, adjustment disorder **does not apply**."],
              ["PTSD and acute stress disorder", "Adjustment disorder accepts **any** stressor and can be diagnosed **immediately** and for up to 6 months; ASD needs 3 days to 1 month, PTSD more than 1 month. Use adjustment disorder for **subthreshold** trauma reactions, or a full PTSD picture after a **non**-Criterion A stressor. Subthreshold PTSD lasting **beyond 6 months** → **other specified** trauma- and stressor-related disorder."],
              ["Personality disorders", "Long-standing personality patterns can mimic situational distress; diagnose adjustment disorder only if the reaction **exceeds** what the personality disorder explains."],
              ["Bereavement", "Out-of-proportion or impairing acute grief can be adjustment disorder; **beyond 12 months**, it is prolonged grief disorder or other specified."],
              ["Psychological factors affecting other medical conditions", "There, psychological factors **worsen** an illness; in adjustment disorder, the illness is the **stressor**."],
              ["Normative stress reactions", "Most people are upset when bad things happen. Diagnose only when distress **exceeds** what is expected (in that culture) or impairs function."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 322): can accompany most mental disorders and any medical condition, **if** the other disorder does not explain the reaction to the stressor (e.g., adjustment disorder with depressed mood after a job loss in someone with OCD)." },
            { type: "callout", kind: "exam", text: "The two adjustment disorder numbers: onset within **3 months** of the stressor, resolution within **6 months** of the stressor **ending**. With an ongoing stressor (chronic illness) the disorder can last longer: the **persistent (chronic)** specifier. Never use adjustment disorder when another disorder’s full criteria are met." }
          ]
        }
      ]
    },
    {
      title: "Prolonged grief disorder",
      sections: [
        {
          id: "s7-pgd-criteria",
          title: "Prolonged grief disorder: criteria",
          pages: "322–324",
          blocks: [
            { type: "criteria", title: "Prolonged grief disorder in brief", code: "F43.8 (now F43.81)", pages: "322–323", items: [
              ["A", "The death of a close person **at least 12 months** ago (**6 months** in children and adolescents)."],
              ["B", "A persistent grief response with **one or both**, most days to a clinically significant degree, and **nearly every day for at least the last month**:", ["**Intense yearning or longing** for the deceased.", "**Preoccupation** with thoughts or memories of the deceased (in youth, may focus on the **circumstances of the death**)."]],
              ["C", "**At least 3 of 8**, most days, nearly every day for the last month:", ["**Identity disruption** (part of oneself has died).", "Marked **disbelief** about the death.", "**Avoidance of reminders** that the person is dead.", "Intense **emotional pain** (anger, bitterness, sorrow).", "Difficulty **reintegrating** into relationships and activities.", "**Emotional numbness**.", "Feeling that **life is meaningless**.", "Intense **loneliness**."]],
              ["D", "Clinically significant **distress or impairment**."],
              ["E", "Duration and severity **clearly exceed** social, cultural or religious norms."],
              ["F", "Not better explained by **MDD** or **PTSD**, and not due to a substance or medical condition."]
            ] },
            { type: "callout", kind: "mnemonic", title: "12 · 6 · 1 · 1 · 3", text: "**12** months since the death (**6** in youth); symptoms nearly every day for the last **1** month; **1** of 2 core symptoms (yearning or preoccupation); **3** of 8 others. See the [[page:mnemonics|Mnemonics]] page for the eight." },
            { type: "case", title: "Clinical vignette: the empty chair", text: "A 61-year-old man’s wife died suddenly 18 months ago. Nearly every day he aches with longing for her, cannot believe she is gone, and feels part of him died with her. He avoids their favorite restaurant because it makes her absence unbearable, feels life has no meaning, has stopped seeing friends and feels intensely lonely. His family says he has not changed since the funeral; his religious community expected him to resume activities after a year. He sleeps and eats normally and does not feel worthless.", point: "More than 12 months after a death, **yearning** nearly every day, with **identity disruption, disbelief, avoidance, meaninglessness, poor reintegration and loneliness** beyond cultural norms, and no major depressive episode: **prolonged grief disorder** (F43.81)." }
          ]
        },
        {
          id: "s7-pgd-features",
          title: "Prolonged grief disorder: features, course and risk",
          pages: "324–326",
          blocks: [
            { type: "list", title: "Associated features (p. 324)", items: [
              "Maladaptive beliefs about the self, **guilt** about the death, shortened sense of future.",
              "**Somatic** complaints, sometimes mirroring the deceased’s symptoms; more health care visits; poor self-care.",
              "**Hallucinations of the deceased** (hearing their voice) occur in normal grief but are more common in prolonged grief.",
              "Bitterness, anger, restlessness, blaming others, poor sleep."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 324–325)", head: ["Topic", "Detail"], rows: [
              ["Adults (DSM-5-TR definition)", "Unknown; a meta-analysis using a 6-month definition found **9.8%** of bereaved people"],
              ["Bereaved US youth", "**18%** (persistent complex bereavement disorder definition)"],
              ["Onset", "Usually within the first months; full syndrome may be delayed"],
              ["Course", "Especially prolonged in **parents after the death of a child**; complicated by PTSD after **violent** deaths"],
              ["Older adults", "Higher risk; may be linked with **cognitive decline**"]
            ] },
            { type: "list", title: "Children and adolescents (p. 325)", items: [
              "Grief shows in **play, behavior, regression** and protest at separation and reunion.",
              "Young children may **search** for the deceased (not understanding permanence), worry about caregivers’ safety, ask repeatedly about death, and wish literally to **reunite** (climb a ladder to heaven).",
              "Adolescents may describe “not feeling anything,” give up on goals (“It’s not worth trying if they can’t be here”), take risks, or fear dying the same way.",
              "Failure to reach developmental milestones reflects failure to reintegrate."
            ] },
            { type: "defs", title: "Risk, culture, sex and suicide (pp. 325–326)", items: [
              ["Risk", "**Dependency** on the deceased, death of a **child** or **spouse/partner**, **violent or unexpected** deaths, economic stress; for children, disrupted caregiver support."],
              ["Culture", "Grief norms vary; **inability to perform funerary rites** can worsen it; indirect expressions (drinking, poor self-care) may be more common than overt grief. Diagnose only beyond cultural norms."],
              ["Sex", "Findings on women vs men are mixed."],
              ["Suicide", "Heightened **suicidal ideation**, independent of MDD and PTSD; higher after **violent** loss (homicide, suicide, accident) and after the death of a **child** (especially under 25)."],
              ["Consequences", "Work and social impairment, more tobacco and alcohol use, and higher risk of **cardiac disease, hypertension, cancer and immune problems**."]
            ] }
          ]
        },
        {
          id: "s7-pgd-ddx",
          title: "Grief, depression, PTSD or prolonged grief?",
          pages: "326–327",
          blocks: [
            { type: "table", caption: "Telling them apart (pp. 326–327)", head: ["Feature", "Prolonged grief disorder", "Major depressive disorder", "PTSD after a violent death"], rows: [
              ["Focus", "**Loss and separation** from the deceased", "**Generalized** low mood, worthlessness", "The **traumatic event** itself"],
              ["Intrusions", "Thoughts of many aspects of the **relationship**, including positive ones", "Rumination about failings", "Perceptual, “**here and now**” memories of the event"],
              ["Avoidance", "Reminders that the person is **gone**", "Withdrawal from apathy", "Reminders of the **trauma** (the crash scene)"],
              ["Yearning", "**Present**", "Not central", "**Absent**"]
            ] },
            { type: "defs", title: "Other distinctions (pp. 326–327)", items: [
              ["Normal grief", "Severe grief for at least **12 months** (6 in youth) that impairs function and exceeds norms. **Anniversary** spikes alone are not the disorder."],
              ["Separation anxiety disorder", "Anxiety about separation from **living** attachment figures; prolonged grief concerns the **deceased**."],
              ["Psychotic disorders", "Sensing or seeing the deceased (often **hypnagogic**, often comforting) is common in normal grief. Diagnose psychosis only with other symptoms such as delusions or disorganization."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 327): most often **MDD**, **PTSD** (especially after violent or accidental deaths) and **substance use disorders**; separation anxiety about living attachment figures may co-occur. MDD can be diagnosed **alongside** prolonged grief disorder when its criteria are separately met." },
            { type: "callout", kind: "exam", text: "The bereavement ladder: **normal grief** (no disorder) → impairing, out-of-proportion grief before 12 months → **adjustment disorder** → severe grief beyond **12 months** (6 in youth) meeting criteria → **prolonged grief disorder** → beyond 12 months but subthreshold → **other specified**. A **major depressive episode** can be diagnosed at any point after a death." }
          ]
        }
      ]
    },
    {
      title: "Residual categories and putting it together",
      sections: [
        {
          id: "s7-other",
          title: "Other specified and unspecified trauma- and stressor-related disorder",
          pages: "327–328",
          blocks: [
            { type: "p", text: "Both cover trauma- or stressor-related symptoms causing distress or impairment without meeting a specific disorder. **Other specified** records the reason; **unspecified (F43.9)** does not, or information is insufficient (e.g., the emergency department) (pp. 327–328)." },
            { type: "table", caption: "Other specified examples (p. 328)", head: ["Example", "What it is"], rows: [
              ["**Adjustment-like disorder with delayed onset**", "Symptoms begin **more than 3 months** after the stressor"],
              ["**Adjustment-like disorder with prolonged duration**", "Lasts **more than 6 months** without a prolonged stressor"],
              ["**Persistent response to trauma with PTSD-like symptoms**", "**Subthreshold or partial PTSD** lasting more than 6 months"],
              ["**Ataque de nervios**", "Latin American cultural syndrome (see Section III)"],
              ["**Other cultural syndromes**", "See “Culture and Psychiatric Diagnosis” in Section III"]
            ] },
            { type: "callout", kind: "pearl", text: "Use the **reason** to record the code clearly: “F43.89 other specified trauma- and stressor-related disorder, persistent response to trauma with PTSD-like symptoms.” (Printed as F43.8 in DSM-5-TR; F43.89 since October 2022.)" }
          ]
        },
        {
          id: "s7-compare",
          title: "The time rules side by side",
          pages: "295–328",
          blocks: [
            { type: "ladder", title: "Chapter 7: time rules", ticks: [[6, "3 d"], [20, "1 mo"], [40, "3 mo"], [58, "6 mo"], [80, "12 mo"]], rows: [
              { label: "Acute stress disorder", dx: "acute-stress", from: 6, to: 20, color: "hy", span: "3 days to 1 month" },
              { label: "PTSD", dx: "ptsd", from: 20, to: 100, color: "drug", open: true, span: "More than 1 month" },
              { label: "PTSD, delayed expression", dx: "ptsd", from: 58, to: 100, color: "mech", open: true, span: "Full criteria first met ≥6 months after" },
              { label: "Adjustment disorder: onset", dx: "adjustment", from: 0, to: 40, color: "guide", span: "Within 3 months of the stressor" },
              { label: "Adjustment disorder: offset", dx: "adjustment", from: 0, to: 58, color: "clin", span: "Gone within 6 months after the stressor ends" },
              { label: "Prolonged grief disorder (youth)", dx: "pgd", from: 58, to: 100, color: "case", open: true, span: "≥6 months after the death" },
              { label: "Prolonged grief disorder (adults)", dx: "pgd", from: 80, to: 100, color: "case", open: true, span: "≥12 months after the death" },
              { label: "RAD and DSED: persistent", dx: "rad", from: 80, to: 100, color: "guide", open: true, span: "Present >12 months" }
            ], note: "RAD must be evident **before age 5**; both attachment disorders need a developmental age of **9 months**. Prolonged grief symptoms must be present nearly every day for at least the **last month**." },
            { type: "table", caption: "Which stressor does each disorder need?", head: ["Disorder", "Required event"], rows: [
              ["RAD, DSED", "**Extremes of insufficient care** in early childhood"],
              ["PTSD, acute stress disorder", "**Criterion A**: actual or threatened death, serious injury or sexual violence"],
              ["Adjustment disorders", "**Any** identifiable stressor"],
              ["Prolonged grief disorder", "**Death** of a close person"]
            ] }
          ]
        },
        {
          id: "s7-approach",
          title: "A practical approach and the classic traps",
          pages: "295–328",
          blocks: [
            { type: "steps", title: "Six steps after a stressful event", items: [
              ["1. What happened?", "Neglect in infancy, a Criterion A trauma, another stressor, or a death. Ask about the **worst** event and about **multiple** traumas."],
              ["2. When?", "Days since the event (<3 days: no disorder yet; 3 days to 1 month: ASD; >1 month: PTSD), months since a stressor (adjustment disorder), months since a death (prolonged grief)."],
              ["3. Which symptoms?", "Count PTSD clusters (1-1-2-2), ASD symptoms (9 of 14) or grief symptoms (1 + 3)."],
              ["4. Another disorder?", "MDD, panic disorder, dissociative disorders, psychosis, substance use, TBI. Diagnose them instead of an adjustment disorder, or alongside PTSD."],
              ["5. Specifiers", "PTSD: dissociative symptoms, delayed expression. Adjustment: subtype and acute or persistent. RAD and DSED: persistent, severe."],
              ["6. Safety", "Suicide risk is raised in PTSD, adjustment disorders and prolonged grief. Ask about substances and reckless behavior."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) A **natural** death learned about is not Criterion A. 2) **Media** exposure counts only if work related. 3) Most **medical illness** is not Criterion A; sudden catastrophic events are. 4) PTSD needs **more than** 1 month; ASD **3 days to 1 month**. 5) ASD needs **9 of 14** from any category. 6) Children **6 and younger** have their own criteria (combined avoidance/cognition, no A4). 7) Delayed expression means full criteria **≥6 months** later. 8) Adjustment disorder: within **3 months**, gone within **6 months of the stressor ending**; not if another disorder is met. 9) PTSD symptoms after a **non**-Criterion A stressor = adjustment disorder. 10) Prolonged grief needs **12 months** (6 in youth). 11) RAD needs onset **before 5** and **no autism**; DSED can occur with **secure** attachments. 12) Prolonged grief is coded **F43.81** and other specified **F43.89** since October 2022." },
            { type: "p", text: "Practice with the [[helper:trauma|trauma and stressor helper]] and the [[helper:attachment|attachment helper]], then compare [[dx:ptsd|PTSD]] with [[dx:acute-stress|acute stress disorder]] and [[dx:pgd|prolonged grief disorder]] with [[dx:mdd|major depressive disorder]] in the library." }
          ]
        }
      ]
    }
  ]
});
