/* Chapter 26 study guide. Source: DSM-5-TR Section III, Alternative DSM-5 Model for Personality Disorders (pp. 881–902;
   p. 902 is blank), with the Section III introduction (p. 839). Written in the app’s own words from the manual, with page
   references. The general criteria, the six proposed criteria sets and PD-TS are paraphrased; the Level of Personality
   Functioning Scale (Table 2, pp. 895–898) and the trait taxonomy (Table 3, pp. 899–901) are condensed and described, not
   reprinted: confirm exact wording against the manual. The model is an ALTERNATIVE in Section III: nothing in it is an
   official diagnosis, and the chart carries the Section II personality disorder and its ICD-10-CM code (Chapter 18); every
   statement about recording is app guidance. The PID-5, the LPFS self-report forms and the structured interview for the
   model are copyrighted instruments and are described by purpose and length only. ICD-10-CM checked through FY2027
   (October 1, 2026) and the APA DSM-5-TR update listings of 2022–2025 for the Section II personality disorder codes (no
   change found for those checked; confirm against the official tabular list). ICD-11, evidence newer than the manual,
   treatment, Philippine context and exam strategy are outside the DSM and labeled as such. Self-harm content stays at
   the manual’s level of generality. */
SP.add("ch26", "guide", {
  intro: "The last chapter of the app is the manual’s **second way of thinking about personality**. Section II keeps the ten categorical personality disorders whose criteria came over from DSM-IV-TR (Ch 18, p. 733); Section III offers a **hybrid dimensional–categorical model** in which a personality disorder is defined by **impaired personality functioning** (the self and the interpersonal) plus **pathological traits** (p. 881). The model keeps **six** named disorders ([[dx:ampd-antisocial|antisocial]], [[dx:ampd-avoidant|avoidant]], [[dx:ampd-borderline|borderline]], [[dx:ampd-narcissistic|narcissistic]], [[dx:ampd-ocpd|obsessive-compulsive]], [[dx:ampd-schizotypal|schizotypal]]) and replaces everything else with [[dx:ampd-pd-ts|personality disorder—trait specified]] (pp. 881, 891). Two instruments carry it: the **Level of Personality Functioning Scale** ([[dx:lpfs|LPFS]]; Table 2, pp. 895–898), which grades identity, self-direction, empathy and intimacy from **0 to 4**, and the **trait taxonomy** ([[dx:trait-model|five domains, 25 facets]]; Table 3, pp. 899–901). Chapter 18 already gave a one-section overview ([[page:c/ch18/guide/s18-ampd|section 18]]); this chapter is the full model, read the way the manual presents it: the general criteria, Criterion A, Criterion B, the six sets and PD-TS, and then the text on functioning, traits and clinical utility. Nothing here is an official diagnosis for the chart: the **Section II** disorder and code remain the diagnosis line, and the model’s level and trait profile enrich the **formulation** (app guidance).",
  objectives: [
    "Say why the model exists: the Section II categories **overlap heavily** and other specified/unspecified personality disorder is **often correct but mostly uninformative**; the APA Board of Trustees kept Section II for **continuity** and added this model in Section III (p. 881).",
    "List the **general criteria A–G** and the **two determinations** they rest on: the level of impairment in personality functioning (A) and the pathological traits (B); then pervasiveness (C), stability with onset traceable to at least adolescence or early adulthood (D), and the three alternative explanations (E–G) (pp. 881–882).",
    "Name the four elements of personality functioning (**identity, self-direction** for the self; **empathy, intimacy** for the interpersonal), the five LPFS levels (**0 little or no, 1 some, 2 moderate, 3 severe, 4 extreme**) and the diagnostic threshold (**moderate or greater**), and explain why that threshold was chosen (pp. 882–883, 892).",
    "Recite the **five trait domains** with their adaptive poles (Negative Affectivity–Emotional Stability; Detachment–Extraversion; Antagonism–Agreeableness; Disinhibition–Conscientiousness; Psychoticism–Lucidity) and place the **25 facets**, including the cross-listed ones (hostility, depressivity, suspiciousness) and the two “lack of” facets (restricted affectivity, rigid perfectionism) (pp. 890, 893, 899–901).",
    "Apply each proposed criteria set: **2 or more of 4** A areas for every disorder, then **6 of 7** (antisocial, age 18), **3 of 4 with anxiousness** (avoidant), **4 of 7 with impulsivity, risk taking or hostility** (borderline), **both** grandiosity and attention seeking (narcissistic), **3 of 4 with rigid perfectionism** (obsessive-compulsive), **4 of 6** (schizotypal) (pp. 884–890).",
    "Use **PD-TS** correctly: moderate impairment in 2 of 4 areas plus one or more elevated **domains or facets**, reviewing **all five** domains; no subtypes, because the recorded traits are the specifiers; it also represents **paranoid, schizoid, histrionic and dependent** presentations and subthreshold, mixed or atypical pictures (pp. 890–891).",
    "Record the **specifiers** the model allows (additional traits; the level of functioning; **with psychopathic features** for antisocial PD, defined by low anxiousness, low withdrawal and high attention seeking) (pp. 885–890).",
    "Distinguish a **trait** from a **symptom** and from a **specific behavior**, explain why traits are dimensional with two poles, and describe how the trait model is assessed (**review all five domains** like a review of systems; the **PID-5** self- and informant-report forms; domain-level assessment as an acceptable option; **elevation** judged by norms and/or clinical judgment) (pp. 892–894).",
    "Explain the model’s **clinical utility**: functioning and traits each add independent value to decisions about disability, risk, treatment and prognosis, so the assessment **may be relevant** whether or not a personality disorder is present (p. 894).",
    "Chart it properly: the **Section II** personality disorder and its ICD-10-CM code on the diagnosis line, the LPFS level and trait profile in the formulation, and never a Section III set as a stand-alone diagnosis (app guidance; Section I, pp. 22–24, and p. 839)."
  ],
  parts: [
    {
      title: "Why an alternative model",
      sections: [
        {
          id: "s26-map",
          title: "Where this chapter sits, and how to read it",
          pages: "839, 881, 895–901",
          blocks: [
            { type: "p", text: "Section III, **Emerging Measures and Models**, is where DSM-5 keeps tools and proposals that are not yet part of the official classification (p. 839). The Alternative DSM-5 Model for Personality Disorders (the literature calls it the **AMPD**; the manual simply says “the alternative model”) is its third part, after the [[ch:ch23|assessment measures]] and [[ch:ch24|cultural formulation]] and before the [[ch:ch25|conditions for further study]]. It is offered **as an alternative** to the Section II classification, which stays in force (p. 881)." },
            { type: "table", caption: "The chapter at a glance (pp. 881–901; the manual gives no page for the blank p. 902)", head: ["Part", "What it holds", "Pages"], rows: [
              ["Introduction and general criteria", "Why the model exists; the seven general criteria A–G; what A and B each need", "881–882"],
              ["Criterion A, Table 1", "Self (identity, self-direction) and interpersonal (empathy, intimacy) functioning; the five LPFS levels", "882–883"],
              ["Criterion B", "Five domains, 25 facets; how the facets and the B subsets were chosen", "882"],
              ["Criteria C–G", "Pervasiveness, stability, and the three alternative explanations", "882–883"],
              ["Six specific personality disorders", "Typical features, then each set’s A areas and B traits, with specifiers", "883–890"],
              ["PD-TS", "The trait-specified diagnosis, its B across all five domains, why no subtypes", "890"],
              ["Scoring algorithms and diagnosis", "Why 2 of 4; how thresholds were set; who gets PD-TS", "891"],
              ["Level of personality functioning", "The continuum, the dimensional definition, how to rate the LPFS", "891–892"],
              ["Personality traits", "Definition, dimensionality, hierarchy, the trait model, traits vs symptoms, assessment, clinical utility", "892–894"],
              ["Table 2: LPFS", "Four elements × five levels", "895–898"],
              ["Table 3: trait taxonomy", "Domains with their polar opposites and the 25 facet definitions", "899–901"]
            ] },
            { type: "callout", kind: "key", title: "The one-sentence model", text: "A personality disorder is **moderate or greater impairment in self and interpersonal functioning** (Criterion A) plus **one or more pathological traits** (Criterion B), relatively **pervasive** and **stable** since at least adolescence or early adulthood, and not better explained by another disorder, a substance or medical condition, or a developmental stage or sociocultural environment (pp. 881–882)." },
            { type: "callout", kind: "caution", title: "Not a diagnosis for the chart", text: "Everything in this chapter is a **Section III** proposal. The diagnosis line carries the **Section II** personality disorder and its ICD-10-CM code ([[ch:ch18|Chapter 18]]; schizotypal PD is coded F21; its criteria and text are in the personality disorders chapter, Ch 18, p. 744, and Chapter 2 only lists it, p. 104). The model’s LPFS level and trait profile go in the **formulation** and treatment plan (app guidance; see [[page:c/ch26/guide/s26-recording|recording]])." }
          ]
        },
        {
          id: "s26-why",
          title: "What the Section II approach gets wrong, in the manual’s words",
          pages: "881",
          blocks: [
            { type: "p", text: "The manual is unusually candid here. The **APA Board of Trustees** decided to keep both models: the Section II classification to **preserve continuity with current clinical practice**, and this one to **address numerous shortcomings** of that approach (p. 881). Two shortcomings are named." },
            { type: "defs", title: "The two named shortcomings (p. 881)", items: [
              ["Co-occurrence", "Symptoms that meet criteria for one specific personality disorder **frequently also meet criteria for others**: people do not tend to present with a pattern that fits **one and only one** disorder."],
              ["The uninformative residual", "**Other specified or unspecified** personality disorder is **often the correct** diagnosis, but a **mostly uninformative** one."]
            ] },
            { type: "defs", title: "What the model proposes instead (p. 881)", items: [
              ["A hybrid", "A **dimensional–categorical** model: dimensions (levels of functioning, trait profiles) feed into categories (six named disorders plus PD-TS)."],
              ["Two ingredients", "**Impairments in personality functioning** and **pathological personality traits**."],
              ["Six disorders kept", "**Antisocial, avoidant, borderline, narcissistic, obsessive-compulsive, schizotypal.** Paranoid, schizoid, histrionic and dependent are not named types in this model; they are represented by PD-TS (p. 891)."],
              ["PD-TS", "**Personality disorder—trait specified**, for when a personality disorder is judged **present** but no specific set is met."]
            ] },
            { type: "callout", kind: "pearl", title: "Why it matters at the bedside", text: "The usual clinic problem is a patient who meets two or three Section II sets, or none fully. The model answers both: one **severity** rating that says how impaired, and one **profile** that says in what way. That is the pair to carry into the formulation (app guidance; pp. 881, 891)." },
            { type: "callout", kind: "exam", title: "How examiners use this chapter", text: "Three kinds of question. **Structure**: what A and B are, the four elements, the five levels, the five domains, the 25 facets and their domains. **Thresholds**: 2 of 4 areas, then each set’s B count and its mandatory trait. **Logic**: what PD-TS covers, what the specifiers add, what the LPFS can do without a diagnosis, and why a trait is not a symptom. The Section II numbers (5 of 9 for borderline, and so on) belong to [[ch:ch18|Chapter 18]] and are a favorite distractor (app guidance)." }
          ]
        },
        {
          id: "s26-general",
          title: "The general criteria A–G",
          pages: "881–882",
          blocks: [
            { type: "criteria", title: "General criteria for personality disorder in brief (alternative model; Section III)", code: "No code: Section III", pages: "881", items: [
              ["A", "**Moderate or greater** impairment in personality functioning, which the model splits into **self** and **interpersonal** functioning."],
              ["B", "**At least one** pathological personality trait."],
              ["C", "The impairments and the person’s trait expression are **relatively inflexible** and show across a **broad range** of personal and social situations."],
              ["D", "They are **relatively stable** over time, with onsets that can be traced back **at least to adolescence or early adulthood**."],
              ["E", "Not better explained by **another mental disorder**."],
              ["F", "Not due solely to the physiological effects of a **substance** or of **another medical condition** (severe head trauma is the manual’s example)."],
              ["G", "Not better understood as **normal** for the person’s **developmental stage** or **sociocultural environment**."]
            ], note: "A and B are the two **determinations** a diagnosis requires: an assessment of the **level of impairment** for A, and an evaluation of **pathological traits** for B. C through G then apply to both the impairments and the trait expression (p. 882)." },
            { type: "defs", title: "Two things the manual adds (p. 882)", items: [
              ["By definition", "Every Section III personality disorder defined by a criteria set, and PD-TS, **meets the general criteria by definition**; the sets specify A and B, and C–G are assumed."],
              ["The pairing", "Each specific disorder is described by its **typical impairments** in functioning (A) and its **characteristic traits** (B) (p. 883)."]
            ] },
            { type: "compare", title: "Section II versus the alternative model (Ch 18 figures are Section II; app comparison)", items: [
              { title: "Section II general criteria", color: "guide", points: ["Enduring pattern deviating from cultural expectations in **2 or more** of cognition, affectivity, interpersonal functioning, impulse control (Ch 18, p. 734).", "Pervasive, stable, early onset, distress or impairment, not better explained, not substance or medical.", "Ten specific disorders in three clusters plus other specified and unspecified."] },
              { title: "Alternative model", color: "case", points: ["**Impairment in functioning** (A, graded 0–4) plus **traits** (B, 25 facets in 5 domains).", "Pervasive, stable, early onset, not better explained, not substance or medical, **not normal for stage or setting** (C–G).", "Six specific disorders plus **PD-TS**; no clusters."] }
            ] },
            { type: "callout", kind: "pearl", title: "Criterion G as a separate exclusion", text: "Section II builds culture into its Criterion A (a pattern deviating markedly from the expectations of the person’s culture; Ch 18, p. 734) and rules out substance, medical and other-disorder explanations. The alternative model makes **developmental stage and sociocultural environment** a separate exclusion criterion of its own, G (p. 881); adolescence, late life and the person’s cultural setting are the examples it gives when it explains E–G (p. 883). (Ch 18 comparison; app reading.)" }
          ]
        }
      ]
    },
    {
      title: "Criterion A: personality functioning",
      sections: [
        {
          id: "s26-criterion-a",
          title: "Self and interpersonal functioning: the four elements",
          pages: "882–883",
          blocks: [
            { type: "p", text: "The model places **disturbances in self and interpersonal functioning** at the **core** of personality psychopathology and rates them on a **continuum** (p. 882). Self functioning has two elements, **identity** and **self-direction**; interpersonal functioning has two, **empathy** and **intimacy** (Table 1, p. 883). Every A criterion in the six sets, and in PD-TS, is written in these four elements." },
            { type: "table", caption: "Table 1, the elements of personality functioning, in the app’s words (p. 883)", head: ["Side", "Element", "What it covers"], rows: [
              ["Self", "**Identity**", "Experiencing oneself as **unique**, with **clear boundaries** between self and others; **stable self-esteem** and **accurate self-appraisal**; the capacity to feel, and to **regulate**, a range of emotion"],
              ["Self", "**Self-direction**", "Pursuing **coherent and meaningful** short-term and life **goals**; using **constructive, prosocial internal standards** of behavior; being able to **self-reflect** productively"],
              ["Interpersonal", "**Empathy**", "**Understanding and appreciating** other people’s experiences and motives; **tolerating** differing perspectives; understanding the **effect of one’s own behavior** on others"],
              ["Interpersonal", "**Intimacy**", "**Depth and duration** of connection; the **desire and capacity** for closeness; **mutuality of regard** shown in how one behaves with others"]
            ] },
            { type: "defs", title: "What impairment in functioning predicts (p. 882)", items: [
              ["Presence of a disorder", "Impairment in personality functioning **predicts the presence** of a personality disorder."],
              ["Severity and number", "The **severity** of the impairment predicts whether the person has **more than one** personality disorder, or one of the **typically more severe** ones."],
              ["The threshold", "A **moderate** level of impairment is required for a diagnosis; this threshold rests on **empirical evidence** that it **maximizes** clinicians’ ability to identify personality disorder pathology **accurately and efficiently**."]
            ] },
            { type: "callout", kind: "analogy", title: "Two mirrors", text: "Identity and self-direction are the **inward** mirror: who I am, and where I am going. Empathy and intimacy are the **outward** mirror: what I understand of you, and how close I can let you come. The LPFS asks how clear each mirror is (app analogy; pp. 882–883)." },
            { type: "callout", kind: "exam", title: "The elements, by side", text: "Self = **identity + self-direction**; interpersonal = **empathy + intimacy** (p. 883). Examiners swap them (“empathy is an element of self functioning”): it is not. A second trap is the pairing of A criterion items: each set’s A1 is always identity, A2 self-direction, A3 empathy, A4 intimacy (pp. 884–890) (app guidance)." }
          ]
        },
        {
          id: "s26-lpfs",
          title: "The Level of Personality Functioning Scale: the continuum and its five levels",
          pages: "882, 891–892",
          blocks: [
            { type: "p", text: "The **Level of Personality Functioning Scale** (LPFS; Table 2, pp. 895–898) uses each of the four elements to separate **five levels** of impairment (p. 882). Like most human tendencies, personality functioning is **distributed on a continuum** (p. 891); the levels are cut points on it." },
            { type: "ladder", title: "The five LPFS levels (p. 882)", ticks: [[0, "0"], [25, "1"], [50, "2"], [75, "3"], [100, "4"]], rows: [
              { label: "Level 0: little or no impairment", from: 0, to: 12, color: "guide", span: "healthy, adaptive" },
              { label: "Level 1: some impairment", from: 12, to: 37, color: "guide", span: "subthreshold" },
              { label: "Level 2: moderate impairment", from: 37, to: 62, color: "case", span: "the diagnostic threshold" },
              { label: "Level 3: severe impairment", from: 62, to: 87, color: "hy", span: "severe" },
              { label: "Level 4: extreme impairment", from: 87, to: 100, color: "hy", span: "extreme" }
            ], note: "An app layout of the five named levels, not a scoring diagram: Level 0 is little or no impairment (healthy, adaptive functioning), Level 1 some, Level 2 moderate, Level 3 severe and Level 4 extreme (p. 882). **Moderate or greater** is the threshold for a diagnosis." },
            { type: "defs", title: "The two ends of the continuum (p. 891)", items: [
              ["Optimal functioning", "A **complex, fully elaborated, well-integrated** psychological world: a self-concept that is mostly **positive, volitional and adaptive**; an emotional life that is **rich, broad and well regulated**; the capacity to be a **productive member of society** with **reciprocal, fulfilling** relationships."],
              ["Severe personality pathology", "An **impoverished, disorganized and/or conflicted** psychological world: a **weak, unclear and maladaptive** self-concept; a tendency to **negative, dysregulated** emotions; a **deficient** capacity for adaptive interpersonal functioning and social behavior."]
            ] },
            { type: "defs", title: "Why severity comes first (pp. 891–892)", items: [
              ["The strongest predictor", "**Generalized severity may be the single most important predictor** of present and future dysfunction when personality psychopathology is assessed (the manual’s hedge, “may be,” is deliberate)."],
              ["Severity plus style", "Personality disorders are **optimally characterized** by a generalized **severity continuum** with additional specification of **stylistic elements**, drawn from symptom constellations and traits."],
              ["The core", "The core of personality psychopathology is **impairment in ideas and feelings about the self and about relationships**, a notion consistent with **multiple theories** of personality disorder and their research."],
              ["Why these four", "The LPFS components, identity, self-direction, empathy and intimacy, are **particularly central** to describing a functioning continuum."],
              ["Why it matters for treatment", "Mental representations of self and others are **reciprocally influential**, shape the **interaction with mental health professionals**, and can affect **treatment efficacy and outcome**; hence the importance of assessing the person’s self-concept and view of others."],
              ["Continuous, but still worth a level", "Although the disturbance is **continuously distributed**, considering the **level** of impairment is useful for **clinical characterization, treatment planning and prognosis**."]
            ] }
          ]
        },
        {
          id: "s26-lpfs-levels",
          title: "Table 2, level by level, in the app’s words",
          pages: "895–898",
          blocks: [
            { type: "p", text: "Table 2 is a grid of the **four elements** across the **five levels** (pp. 895–898). The synopses below are the app’s condensed descriptions of what each level looks like; the manual’s cells are longer and should be read before a formal rating. The rater picks the level that **most closely captures** the person’s **current overall** impairment (p. 892), not a sum across the four columns (app reading)." },
            { type: "table", caption: "Level 0 (little or no impairment) and Level 1 (some impairment), condensed (p. 895)", head: ["Element", "Level 0", "Level 1"], rows: [
              ["Identity", "Ongoing sense of a **unique self** with role-appropriate boundaries; consistent, self-regulated **positive self-esteem** with accurate appraisal; can experience, tolerate and regulate a **full range** of emotion", "Sense of self **relatively intact**, but boundaries **blur** when strong emotion or distress is present; self-esteem **dips at times**, with overly critical or somewhat distorted appraisal; strong emotions can be distressing, with some **narrowing** of emotional range"],
              ["Self-direction", "Sets and pursues **reasonable goals** from a realistic view of one’s capacities; appropriate standards; fulfillment in **several realms**; can reflect on inner experience and make constructive meaning of it", "**Excessively goal-directed**, somewhat goal-inhibited, or **conflicted** about goals; standards may be unrealistic or socially inappropriate, limiting some fulfillment; can reflect, but may **overweight one kind** of self-knowledge (intellectual or emotional)"],
              ["Empathy", "Accurately understands others’ experiences and motives **in most situations**; comprehends and appreciates others’ perspectives **even when disagreeing**; aware of the effect of own actions", "**Somewhat compromised** appreciation of others; may see others as having **unreasonable expectations** or a wish for control; can consider other perspectives but **resists** doing so; **inconsistent** awareness of own effect on others"],
              ["Intimacy", "Maintains **multiple satisfying, enduring** relationships; desires and engages in **caring, close, reciprocal** relationships; strives for cooperation and mutual benefit; responds flexibly to others’ ideas and feelings", "Can form enduring relationships with **some limits** on depth and satisfaction; wants intimacy but may be **inhibited** in expressing it and constrained when intense emotion or conflict arises; cooperation may be limited by unrealistic standards"]
            ] },
            { type: "table", caption: "Level 2 (moderate impairment), the diagnostic threshold, condensed (p. 896)", head: ["Element", "Level 2"], rows: [
              ["Identity", "**Depends excessively on others** for self-definition, with compromised boundaries; **vulnerable self-esteem** governed by an exaggerated concern with external evaluation and a wish for approval; a sense of **incompleteness or inferiority** with compensatory inflated or deflated appraisal; emotion regulation **depends on positive external appraisal**; threats to self-esteem can provoke strong emotions such as rage or shame"],
              ["Self-direction", "Goals are more often a means of **gaining external approval** than self-generated, so they may lack coherence or stability; standards may be **unreasonably high** (a need to be special, to please) or **low** (out of step with prevailing values); fulfillment is undermined by a sense of **inauthenticity**; **impaired** capacity to reflect on inner experience"],
              ["Empathy", "**Hyperattuned** to others’ experience, but only where it seems **relevant to the self**; excessively self-referential; significantly compromised ability to appreciate others’ experience and to consider alternative perspectives; generally **unaware of or unconcerned** about own effect on others, or appraises it unrealistically"],
              ["Intimacy", "Wants and can form relationships, but connections may be **largely superficial**; intimate relationships mainly serve **self-regulation and self-esteem**, with an unrealistic expectation of being perfectly understood; tends **not to see relationships as reciprocal** and cooperates mostly for **personal gain**"]
            ] },
            { type: "table", caption: "Level 3 (severe) and Level 4 (extreme), condensed (pp. 897–898)", head: ["Element", "Level 3", "Level 4"], rows: [
              ["Identity", "**Weak sense of autonomy or agency**; experiences of **lacking an identity**, or of **emptiness**; boundaries poor or rigid (over-identification with others, overemphasis on independence, or swinging between the two); **fragile self-esteem** easily swayed by events, incoherent self-image, un-nuanced appraisal (self-loathing, self-aggrandizing, or an illogical mix); emotions **rapidly shifting** or a chronic, unwavering despair", "A unique self and a sense of agency are **virtually absent**, or organized around **perceived external persecution**; boundaries with others **confused or lacking**; weak or distorted self-image easily threatened by interaction, with marked distortion and confusion in self-appraisal; emotions **incongruent** with context or inner experience; **hatred and aggression** may dominate, though they may be disavowed and attributed to others"],
              ["Self-direction", "Difficulty **setting or reaching** personal goals; internal standards **unclear or contradictory**; life felt as **meaningless or dangerous**; significantly compromised ability to reflect on and understand own mental processes", "Poor differentiation of thought from action, so goal-setting is **severely compromised**, with unrealistic or incoherent goals; internal standards **virtually lacking**; genuine fulfillment **virtually inconceivable**; profoundly unable to reflect constructively; own motivations may go unrecognized or feel **external to the self**"],
              ["Empathy", "Ability to consider others’ thoughts, feelings and behavior **significantly limited**; may pick out very specific aspects of others’ experience, especially **vulnerability and suffering**; generally unable to consider alternative perspectives and **highly threatened** by differing opinions; confused about or unaware of own impact; often bewildered by others, with **destructive motives frequently misattributed** to them", "**Pronounced inability** to consider and understand others’ experience and motivation; attention to others’ perspectives **virtually absent**, being hypervigilant and focused on need fulfillment and harm avoidance; social interactions can be **confusing and disorienting**"],
              ["Intimacy", "Some desire for relationships, but capacity for **positive, enduring** connection significantly impaired; relationships rest on a strong belief in the **absolute need** for the intimate other and/or on **expected abandonment or abuse**; feelings about involvement swing between **fear or rejection and desperate desire**; little mutuality, others seen mainly by how they affect the self, cooperation disrupted by perceived slights", "Desire for affiliation **limited** by profound disinterest or expectation of harm; engagement **detached, disorganized or consistently negative**; relationships conceived almost solely as sources of **comfort or of pain and suffering**; social behavior **not reciprocal**, aimed at basic needs or escape from pain"]
            ] },
            { type: "callout", kind: "pearl", title: "Reading the grid quickly", text: "Watch three things move as the levels rise: **boundaries** (clear → blur under stress → compromised → poor or rigid → confused or absent), **self-esteem** (stable → dips → vulnerable, externally governed → fragile → distorted and easily threatened), and **reciprocity** (mutual → somewhat limited → superficial, for gain → built on absolute need or expected abandonment → non-reciprocal, comfort or pain). The Level 2 column is the one to know cold: it is the threshold (pp. 895–898; app reading)." },
            { type: "callout", kind: "caution", title: "Describe, do not reprint", text: "The LPFS is a copyrighted table. In notes, record the **level** and a few of the person’s own examples for each element rather than copying the cell text (app guidance)." }
          ]
        },
        {
          id: "s26-rating",
          title: "Rating the LPFS, and what the rating can do",
          pages: "892",
          blocks: [
            { type: "steps", title: "How the manual says to rate it (p. 892)", items: [
              ["1. One overall level", "Select the level that **most closely captures** the person’s **current overall** level of impairment in personality functioning; the scale is not added up (app reading)."],
              ["2. The diagnostic use", "The rating is **necessary** for a personality disorder diagnosis: **moderate or greater** impairment is required."],
              ["3. The severity use", "It can **specify the severity** of impairment for a person with **any** personality disorder **at a given point in time**; it is a rating at a point in time of something relatively stable, so it can be repeated (app reading)."],
              ["4. The global use", "The LPFS **may also serve** as a **global indicator** of personality functioning **without** a personality disorder diagnosis, or when the impairment is **subthreshold** for one."]
            ] },
            { type: "case", title: "Clinical vignette: a rating without a diagnosis", text: "A 34-year-old call-center team leader in Subic is referred for recurrent low mood. Between episodes she describes a clear sense of who she is, realistic goals and two close friendships of more than ten years, but when criticized at work her self-esteem drops sharply for days and she withdraws from her partner. The psychiatrist rates her at Level 1 and records it in the formulation.", point: "At **Level 1** (some impairment) Criterion A is **not met**, so no personality disorder is diagnosed by this model; the LPFS still serves as a **global indicator** of functioning and a baseline for her depressive disorder’s treatment (p. 892). The diagnosis line carries the depressive disorder alone (app guidance)." },
            { type: "callout", kind: "pearl", title: "A Level 1 person can have traits", text: "Criteria A and B are separate determinations (p. 882). Elevated anxiousness or perfectionism in someone functioning at Level 0 or 1 is a **trait profile without a disorder**; the model says assessing it **may be relevant** anyway, because traits shape the course of other disorders (p. 894)." }
          ]
        }
      ]
    },
    {
      title: "Criterion B: pathological personality traits",
      sections: [
        {
          id: "s26-traits",
          title: "What a trait is, and why traits are dimensional",
          pages: "892–893",
          blocks: [
            { type: "defs", title: "Definition and the anxiousness example (p. 892)", items: [
              ["A trait", "A **tendency** to feel, perceive, behave and think in ways that are **relatively consistent over time and across situations** in which the trait may show itself."],
              ["High trait anxiousness", "The person **feels** anxious readily, even where most people would be calm; **perceives** situations as anxiety-provoking more often than others do; **behaves** so as to avoid situations expected to provoke anxiety; and so **thinks** of the world as more anxiety-provoking than other people do."],
              ["Not all the time", "A person high in a trait is **not necessarily** anxious at all times and in all situations."],
              ["Traits change", "Trait levels **can and do change** through life: some changes are general and reflect **maturation** (teenagers are generally higher on trait impulsivity than older adults), others reflect **life experiences**."]
            ] },
            { type: "defs", title: "Dimensionality and the two poles (pp. 892–893)", items: [
              ["Everyone is on the spectrum", "Traits apply to **everyone in different degrees**; they are not present versus absent."],
              ["Two poles", "Every trait, including those in this model, runs between **two opposing poles**. The model labels the pathological pole because that pole is its focus: **callousness** could be described in full as callousness **versus kind-heartedness**."],
              ["The other pole is not always adaptive", "The opposite pole is recognizable too and **may not be adaptive in every circumstance**: the manual’s example is extreme kind-heartedness that lets a person be **repeatedly taken advantage of** by unscrupulous others."]
            ] },
            { type: "defs", title: "Hierarchy: domains and facets (p. 893)", items: [
              ["Narrow and broad", "Some trait terms are **specific** (“talkative”) and describe a narrow range of behavior; others are **broad** (Detachment) and cover a wide range."],
              ["Domains", "Broad trait dimensions; each is a **spectrum of more specific facets that tend to occur together** (withdrawal and anhedonia both sit in Detachment)."],
              ["Facets", "The specific trait dimensions; there are **25** in this model (p. 882)."],
              ["Across cultures", "Despite some **cross-cultural variation in facets**, the broad **domains** they make up are **relatively consistent across cultures**."]
            ] },
            { type: "callout", kind: "analogy", title: "Weather and climate", text: "A symptom is today’s weather; a trait is the climate. Climate is read off many days, it changes slowly, and it does not mean every day is the same (app analogy; pp. 892–894)." }
          ]
        },
        {
          id: "s26-domains",
          title: "The five domains and their adaptive poles",
          pages: "890, 893",
          blocks: [
            { type: "p", text: "The trait system has **five broad domains**, each named for its pathological pole with the adaptive pole in parentheses, and **25 facets** inside them (Table 3, pp. 899–901). The domains are **maladaptive variants** of the five domains of the widely validated and replicated **Five Factor Model** (the “Big Five”) and also resemble the domains of the **Personality Psychopathology Five (PSY-5)**; the facets were chosen for **clinical relevance** (p. 893)." },
            { type: "table", caption: "The five domains with their polar opposites, in the app’s words (pp. 890, 899–901)", head: ["Domain (vs. adaptive pole)", "Meaning"], rows: [
              ["**Negative Affectivity** (vs. Emotional Stability)", "Frequent, intense experience of **many negative emotions** (anxiety, depression, guilt or shame, worry, anger) together with their **behavioral** (self-harm) and **interpersonal** (dependency) expressions"],
              ["**Detachment** (vs. Extraversion)", "Avoidance of socioemotional experience: **withdrawal** from interactions at every level, from casual contact through friendship to intimacy, and **restricted affect**, above all a **limited capacity for pleasure**"],
              ["**Antagonism** (vs. Agreeableness)", "Behavior that puts the person **at odds with others**: an exaggerated sense of self-importance with an expectation of special treatment, and a **callous antipathy** that spans unawareness of others’ needs and a readiness to **use others** for self-enhancement"],
              ["**Disinhibition** (vs. Conscientiousness)", "Orientation to **immediate gratification**: impulsive behavior driven by current thoughts, feelings and stimuli, **without regard for past learning** or **future consequences**"],
              ["**Psychoticism** (vs. Lucidity)", "Many **culturally incongruent** odd, eccentric or unusual behaviors and thoughts, in both **process** (perception, dissociation) and **content** (beliefs)"]
            ] },
            { type: "defs", title: "The adaptive poles are not just absence of pathology (p. 893)", items: [
              ["Named poles", "**Emotional Stability, Extraversion, Agreeableness, Conscientiousness, Lucidity**."],
              ["What they do", "Healthy, adaptive, resilient traits at these poles can **greatly soften the effects of mental disorders** and **help coping and recovery** from traumatic injuries and other medical illness."]
            ] },
            { type: "callout", kind: "mnemonic", title: "The five domains", text: "**N-D-A-D-P**: **N**egative Affectivity, **D**etachment, **A**ntagonism, **D**isinhibition, **P**sychoticism; their poles spell the healthy person, **E-E-A-C-L**: Emotional Stability, Extraversion, Agreeableness, Conscientiousness, Lucidity. App mnemonic; check against pp. 890 and 893." },
            { type: "callout", kind: "exam", title: "Which Big Five domain is missing?", text: "The alternative model has **no maladaptive Openness** domain; **Psychoticism (vs. Lucidity)** stands in its place, and the manual says only that the five domains are maladaptive variants of the FFM and similar to the PSY-5 (p. 893). Whether Psychoticism maps onto Openness is disputed in the literature (outside the DSM; see [[page:c/ch26/guide/s26-evidence|evidence]]) (app guidance)." }
          ]
        },
        {
          id: "s26-facets",
          title: "Table 3: the 25 facets by domain",
          pages: "899–901",
          blocks: [
            { type: "p", text: "Table 3 defines every domain and facet (pp. 899–901). Several facets are listed under **two** domains: **hostility** is defined under Negative Affectivity with a cross-reference to Antagonism; **depressivity** and **suspiciousness** are defined under Detachment and cross-listed under Negative Affectivity; and two facets appear as a **“lack of”**: the lack of **restricted affectivity** characterizes **low** Negative Affectivity, and the lack of **rigid perfectionism** characterizes **low** Disinhibition (pp. 899–900). Counting each facet once, where it is defined, gives 6 + 6 + 5 + 5 + 3 = 25 (app count)." },
            { type: "table", caption: "Negative Affectivity: six facets defined here, three cross-listed (p. 899)", head: ["Facet", "In brief (app paraphrase)"], rows: [
              ["**Emotional lability**", "Unstable emotions and mood; feelings easily aroused, intense and/or out of proportion to events"],
              ["**Anxiousness**", "Nervousness, tenseness or panic in many situations; frequent worry about past unpleasant events and future negative possibilities; fear and apprehension about uncertainty; expecting the worst"],
              ["**Separation insecurity**", "Fear of being alone through rejection by or separation from significant others, rooted in a lack of confidence in one’s ability to look after oneself physically and emotionally"],
              ["**Submissiveness**", "Adapting one’s behavior to others’ real or perceived wishes even when this runs against one’s own interests, needs or desires"],
              ["**Hostility** (see also Antagonism)", "Persistent or frequent anger; anger or irritability at minor slights; mean, nasty or vengeful behavior"],
              ["**Perseveration**", "Persisting at tasks or in one way of doing things long after it has stopped working; the same behavior despite repeated failure or clear reasons to stop"],
              ["Depressivity, Suspiciousness", "**Cross-listed**: defined under Detachment"],
              ["Restricted affectivity (lack of)", "Its **absence** marks **low** Negative Affectivity; defined under Detachment"]
            ] },
            { type: "table", caption: "Detachment: six facets (p. 899)", head: ["Facet", "In brief (app paraphrase)"], rows: [
              ["**Withdrawal**", "Preferring to be alone; reticence in company; avoiding social contact and activity; not initiating contact"],
              ["**Intimacy avoidance**", "Avoiding close or romantic relationships, attachments and intimate sexual relationships"],
              ["**Anhedonia**", "Little enjoyment of, engagement in or energy for life; a reduced capacity for pleasure and interest"],
              ["**Depressivity**", "Feeling down, miserable and/or hopeless, with difficulty recovering; pessimism; pervasive shame and/or guilt; a sense of inferior worth; suicidal thoughts and behavior"],
              ["**Restricted affectivity**", "Scant reaction to situations that stir others; emotional experience and expression constricted; indifferent and aloof where engagement would be normal"],
              ["**Suspiciousness**", "Expecting and being sensitive to signs of ill intent or harm; doubting others’ loyalty and fidelity; feeling mistreated, used and/or persecuted"]
            ] },
            { type: "table", caption: "Antagonism: five facets, hostility cross-listed (p. 900)", head: ["Facet", "In brief (app paraphrase)"], rows: [
              ["**Manipulativeness**", "Using subterfuge to influence or control others; seduction, charm, glibness or ingratiation to get one’s way"],
              ["**Deceitfulness**", "Dishonesty and fraud; misrepresenting oneself; embellishing or inventing when recounting events"],
              ["**Grandiosity**", "Believing oneself superior and deserving of special treatment; self-centeredness; entitlement; condescension"],
              ["**Attention seeking**", "Behaving so as to attract notice and become the focus of others’ attention and admiration"],
              ["**Callousness**", "Not caring about others’ feelings or problems; no guilt or remorse about the harm one’s actions do to others"],
              ["Hostility", "**Cross-listed**: defined under Negative Affectivity"]
            ] },
            { type: "table", caption: "Disinhibition: five facets, one a “lack of” (p. 900)", head: ["Facet", "In brief (app paraphrase)"], rows: [
              ["**Irresponsibility**", "Disregarding and failing to honor financial and other obligations; no respect for, or follow-through on, agreements and promises; careless with others’ property"],
              ["**Impulsivity**", "Acting on impulse in response to what is in front of one, without a plan or thought of outcomes; difficulty making and keeping to plans; urgency, and self-harming behavior when distressed"],
              ["**Distractibility**", "Difficulty concentrating and staying on task; attention easily pulled away; difficulty maintaining goal-focused behavior, both planning and completing"],
              ["**Risk taking**", "Dangerous, risky, potentially self-damaging activity undertaken needlessly and without regard to consequences; disregard of one’s limits and denial of real danger; reckless pursuit of goals whatever the risk"],
              ["**Rigid perfectionism (lack of)**", "Rigid insistence that everything, including others’ performance, be flawless; sacrificing timeliness to get every detail right; believing there is one right way; difficulty changing views; preoccupation with details, organization and order. Its **absence** marks **low** Disinhibition"]
            ] },
            { type: "table", caption: "Psychoticism: three facets (p. 901)", head: ["Facet", "In brief (app paraphrase)"], rows: [
              ["**Unusual beliefs and experiences**", "Believing one has unusual abilities (mind reading, telekinesis, thought–action fusion); unusual experiences of reality, hallucination-like ones included"],
              ["**Eccentricity**", "Behavior, appearance and/or speech that is odd, unusual or bizarre; strange, unpredictable thoughts; saying unusual or inappropriate things"],
              ["**Cognitive and perceptual dysregulation**", "Odd or unusual thought processes and experiences: depersonalization, derealization and dissociative experiences; mixed sleep–wake state experiences; thought-control experiences"]
            ] },
            { type: "callout", kind: "exam", title: "The facets examiners love", text: "Which domain? **Hostility**: Negative Affectivity in Table 3 (p. 899) but labeled “an aspect of Antagonism” inside the antisocial and borderline criteria sets (pp. 884, 887). **Depressivity** and **suspiciousness**: Detachment (p. 899). **Rigid perfectionism**: Disinhibition, as its lack (p. 900), and in the obsessive-compulsive set “an aspect of extreme Conscientiousness” (p. 888). **Submissiveness**: Negative Affectivity (p. 899), the facet that captures a dependent presentation under PD-TS. **Distractibility**: Disinhibition (p. 900). Two facets appear in **no** specific set: submissiveness and distractibility (app count) (app guidance)." }
          ]
        },
        {
          id: "s26-traits-symptoms",
          title: "Traits, symptoms and specific behaviors",
          pages: "893–894",
          blocks: [
            { type: "compare", title: "Three things that look alike (pp. 893–894)", items: [
              { title: "A specific behavior", color: "guide", points: ["An **instance** of a trait, or just an act.", "The manual’s example: a rarely impulsive person who suddenly spends a great deal on a unique item because of an unusual opportunity.", "Only when behaviors **aggregate across time and circumstance**, so that a pattern distinguishes people, do they reflect a trait."] },
              { title: "A trait", color: "case", points: ["A **tendency or disposition** toward specific behaviors.", "Relatively consistent compared with symptoms and behaviors, though **by no means immutable**.", "Even people who are impulsive are **not impulsive all the time**."] },
              { title: "A symptom", color: "hy", points: ["Tends to **wax and wane**, so it is less stable than a trait.", "Higher depressivity raises the likelihood of **discrete episodes** of a depressive disorder; episode symptoms such as poor concentration rise and fall with the episode and so are **not part of the trait definition**.", "Both symptoms and traits are **amenable to intervention**; treating symptoms can change longer-term trait patterns (p. 894)."] }
            ] },
            { type: "callout", kind: "pearl", title: "A sentence to keep", text: "A trait is a tendency; a behavior is an instance of it; a symptom comes and goes with an episode. When a patient with trait depressivity has an episode of major depression, both the trait and the disorder are real, and both can be treated (pp. 893–894; app reading)." }
          ]
        },
        {
          id: "s26-assessment",
          title: "Assessing the trait model: review all five domains",
          pages: "894",
          blocks: [
            { type: "p", text: "The clinical value of a multidimensional model lies in making the clinician look at **several relevant areas** of each patient’s personality rather than hunting for **one optimal label** (p. 894). The manual’s comparison is the **review of systems**: a patient with a neurological complaint still has the cardiovascular, respiratory and gastrointestinal systems reviewed, lest a treatable problem be missed." },
            { type: "steps", title: "How the manual describes clinical use (p. 894)", items: [
              ["1. Review all five domains", "An initial inquiry covers **every** broad domain of personality."],
              ["2. Use an instrument if available", "The systematic review is **facilitated** by formal psychometric instruments for the facets and domains. The trait model is put into practice by the **Personality Inventory for DSM-5 (PID-5)**, with a **self-report** form for patients and an **informant-report** form for people who know the patient well (a spouse is the example)."],
              ["3. Facets when you can", "A detailed assessment collects **both patient and informant** data on **all 25 facets**."],
              ["4. Domains when you cannot", "If time or other constraints prevent that, assessment at the level of the **five domains** is an **acceptable clinical option** when only a **general** portrait is needed (the PD-TS B criterion is written at that level)."],
              ["5. Facets when personality is the focus", "If personality-based problems are the **focus of treatment**, it will be important to assess **facets as well as domains**."],
              ["6. Decide what is elevated", "Because traits are continuously distributed, deciding that a trait is **elevated** (and so present for diagnosis) **could involve** comparing the person with **population norms** and/or **clinical judgment**. If testing and/or interview findings **back up the clinician’s judgment** that the trait is elevated, the trait counts toward **Criterion B**."]
            ] },
            { type: "callout", kind: "caution", title: "Instruments are described, never reprinted", text: "The PID-5 and its forms, the self-report versions of the LPFS and the structured interview for the model are copyrighted. The app describes what each measures and how long it is ([[page:c/ch26/guide/s26-evidence|evidence]]); it does not reproduce items or scoring (app guidance)." },
            { type: "callout", kind: "pearl", title: "What “elevated” is not", text: "The manual does not give a cut-off score for any facet (p. 894). Elevation is a **judgment** supported by data, which is why a PID-5 printout alone never makes a diagnosis (app reading)." }
          ]
        }
      ]
    },
    {
      title: "Criteria C–G and the diagnoses",
      sections: [
        {
          id: "s26-cdefg",
          title: "Pervasiveness, stability and the three alternative explanations",
          pages: "882–883",
          blocks: [
            { type: "defs", title: "Criteria C and D (p. 882)", items: [
              ["Why pervasive", "Personality is itself a **pattern** in how a person perceives, relates to and thinks about the environment and the self, so its impairments show across a **range of personal and social contexts**."],
              ["Why “relatively”", "All except the **most extremely pathological** personalities show **some adaptability**; the disorder’s pattern is maladaptive and relatively **inflexible**, producing disability because the person **cannot modify** thinking or behavior even when it clearly is not working."],
              ["Why stable", "Traits, meaning dispositions to behave or feel in particular ways, are **more stable than their symptomatic expressions**, yet traits **can change**; impairments in personality functioning are **more stable than symptoms**."]
            ] },
            { type: "defs", title: "Criteria E, F and G: the differential (p. 883)", items: [
              ["Another mental disorder (E)", "A personality disorder is **not diagnosed** when its manifestations are **clearly an expression** of the other disorder; the example is schizotypal features present **only in the context of schizophrenia**."],
              ["But comorbidity is real", "Personality disorders **can be accurately diagnosed** alongside another disorder such as **major depressive disorder**, and patients with other disorders **should be assessed** for comorbid personality disorders, because these often affect the **course** of the other disorder."],
              ["Always worth assessing", "It is **always appropriate** to assess personality functioning and pathological traits, to give a **context** for other psychopathology."],
              ["Substance or medical condition (F)", "What looks like a personality disorder may be the physiological effect of a substance or another medical condition; **severe head trauma** is the example in Criterion F (p. 881)."],
              ["Stage or setting (G)", "A **normal developmental stage** (adolescence, late life) or the person’s **sociocultural environment** may better explain the picture."]
            ] },
            { type: "case", title: "Clinical vignette: Criterion E", text: "A 24-year-old man in Balanga with a 2-year history of schizophrenia, now stable on treatment, is referred to confirm “schizotypal personality.” His odd beliefs, ideas of reference and social withdrawal all began with his first psychotic episode; family describe an outgoing, well-liked teenager before that.", point: "The schizotypal-like features are **an expression of schizophrenia** and began with it, so Criterion E is not met and no personality disorder is diagnosed by this model (p. 883). Had the pattern clearly preceded the psychosis, the Section II note on recording schizotypal personality disorder **(premorbid)** would apply ([[dx:schizotypal-pd|schizotypal PD]]; Ch 18, p. 745; app guidance)." },
            { type: "callout", kind: "exam", title: "The G trap", text: "An impulsive, moody 16-year-old is not a borderline personality disorder on this model unless the pattern is **not better understood as normal for the developmental stage** (G) and can be traced back **at least** to adolescence (D), with moderate impairment (A). The manual itself notes that teenagers are generally higher on trait impulsivity (p. 892) (app guidance)." }
          ]
        },
        {
          id: "s26-six",
          title: "The six specific personality disorders: typical features and thresholds",
          pages: "883–884, 891",
          blocks: [
            { type: "p", text: "Section III gives criteria for six disorders: **antisocial, avoidant, borderline, narcissistic, obsessive-compulsive and schizotypal**. Each is defined by its **typical impairments** in functioning (A) and its **characteristic traits** (B), and all also meet the general criteria **C through G** (pp. 883–884)." },
            { type: "table", caption: "Typical features and the domains each set draws on (pp. 883–890)", head: ["Disorder", "Typical features (app paraphrase)", "Trait domains in B"], rows: [
              ["[[dx:ampd-antisocial|Antisocial]]", "Fails to conform to lawful and ethical behavior; **egocentric, callous** lack of concern for others; deceit, irresponsibility, manipulation and/or risk taking", "**Antagonism** and **Disinhibition**"],
              ["[[dx:ampd-avoidant|Avoidant]]", "Avoids social situations and holds back in relationships out of felt **ineptitude and inadequacy**; anxious preoccupation with negative evaluation and rejection; fear of ridicule or embarrassment", "**Negative Affectivity** and **Detachment**"],
              ["[[dx:ampd-borderline|Borderline]]", "**Instability** of self-image, goals, relationships and affect, with impulsivity, risk taking and/or hostility", "**Negative Affectivity**, plus **Antagonism and/or Disinhibition**"],
              ["[[dx:ampd-narcissistic|Narcissistic]]", "**Variable and vulnerable self-esteem** regulated by attention and approval seeking; grandiosity, **overt or covert**", "**Antagonism**"],
              ["[[dx:ampd-ocpd|Obsessive-compulsive]]", "Difficulty forming and keeping close relationships, with **rigid perfectionism**, inflexibility and restricted emotional expression", "**Negative Affectivity and/or Detachment** (plus rigid perfectionism, the Conscientiousness pole)"],
              ["[[dx:ampd-schizotypal|Schizotypal]]", "Impaired capacity for social and close relationships; **eccentric** cognition, perception and behavior; distorted self-image, incoherent goals, suspiciousness, restricted affect", "**Psychoticism** and **Detachment**"]
            ] },
            { type: "table", caption: "The thresholds, side by side (pp. 884–890; app layout)", head: ["Disorder", "A (areas of 4)", "B threshold", "Mandatory trait(s)", "Extra rule"], rows: [
              ["Antisocial", "2 or more", "**6 of 7**", "none", "At least **18 years**; specifier **with psychopathic features**"],
              ["Avoidant", "2 or more", "**3 of 4**", "**Anxiousness**", "—"],
              ["Borderline", "2 or more", "**4 of 7**", "at least one of **impulsivity, risk taking, hostility**", "—"],
              ["Narcissistic", "2 or more", "**both of 2**", "grandiosity **and** attention seeking", "—"],
              ["Obsessive-compulsive", "2 or more", "**3 of 4**", "**Rigid perfectionism**", "—"],
              ["Schizotypal", "2 or more", "**4 of 6**", "none", "—"],
              ["PD-TS", "2 or more", "**1 or more** domains or facets", "none", "Consider **all five** domains"]
            ] },
            { type: "defs", title: "Where the numbers came from: the scoring algorithms (p. 891)", items: [
              ["Any 2 of 4 for A", "Chosen to **maximize the relationship** of the A criteria to their corresponding disorder."],
              ["The B thresholds", "Set **empirically** to **minimize the change in prevalence** from DSM-IV and the **overlap** with other personality disorders, and to **maximize** the relationship with **functional impairment**."],
              ["The result", "Criteria sets that represent clinically useful disorders **with high fidelity**, in core impairments of varying severity plus constellations of traits."]
            ] },
            { type: "callout", kind: "mnemonic", title: "The B counts", text: "**6-3-4-2-3-4**, in the order the manual lists the disorders: antisocial 6 of 7, avoidant 3 of 4, borderline 4 of 7, narcissistic 2 of 2, obsessive-compulsive 3 of 4, schizotypal 4 of 6; and three sets have a **must-have** (avoidant: anxiousness; borderline: one of impulsivity, risk taking, hostility; obsessive-compulsive: rigid perfectionism). App mnemonic; check each against pp. 884–890." }
          ]
        },
        {
          id: "s26-antisocial",
          title: "Antisocial personality disorder",
          pages: "884–885",
          blocks: [
            { type: "criteria", title: "Antisocial personality disorder in brief (proposed; Section III)", code: "No code: Section III (Section II F60.2)", pages: "884–885", items: [
              ["A", "Moderate or greater impairment, shown by characteristic difficulty in **2 or more** of: (1) **identity**: egocentrism, self-esteem drawn from gain, power or pleasure; (2) **self-direction**: goals set by personal gratification, no prosocial internal standards, with behavior that breaks the law or the culture’s ethical norms; (3) **empathy**: no concern for others’ feelings, needs or suffering, no remorse after hurting them; (4) **intimacy**: no capacity for mutual intimacy, relating mainly by **exploitation**, including deceit and coercion, and by dominance or intimidation."],
              ["B", "**6 or more of 7** traits: (1) **manipulativeness** (Antagonism), (2) **callousness** (Antagonism; the set adds aggression and sadism), (3) **deceitfulness** (Antagonism), (4) **hostility** (labeled Antagonism here), (5) **risk taking** (Disinhibition; the set adds boredom proneness and thoughtless activity to counter boredom), (6) **impulsivity** (Disinhibition), (7) **irresponsibility** (Disinhibition)."],
              ["Note", "The person is **at least 18 years** old."]
            ], specifiers: ["With psychopathic features"], note: "Four Antagonism traits plus three Disinhibition traits; the threshold of 6 of 7 is the **highest** in the model (app count)." },
            { type: "defs", title: "The psychopathic features specifier (p. 885)", items: [
              ["The variant", "A distinct variant often called **psychopathy** (or “primary” psychopathy): a **lack of anxiety or fear** and a **bold interpersonal style** that may mask maladaptive behavior such as fraudulence."],
              ["In trait terms", "**Low anxiousness** (Negative Affectivity), **low withdrawal** (Detachment) and **high attention seeking** (Antagonism)."],
              ["Two components", "High attention seeking plus low withdrawal capture **social potency** (assertive, dominant); low anxiousness captures **stress immunity** (emotional stability, resilience)."],
              ["Other specifiers", "Other traits present but not required (anxiousness is the example) and the **level of functioning** can also be specified."]
            ] },
            { type: "compare", title: "Antisocial PD here and in Section II (Ch 18 comparison; app)", items: [
              { title: "Section II (Ch 18, pp. 748–749)", color: "guide", points: ["**3 or more of 7** behaviors since age 15.", "**Age 18** or older.", "Evidence of **conduct disorder** before age 15.", "Not exclusively during schizophrenia or bipolar disorder."] },
              { title: "Alternative model (pp. 884–885)", color: "case", points: ["**2 of 4** A areas plus **6 of 7** traits.", "**Age 18** or older (the only set with an age note).", "No conduct-disorder requirement.", "**With psychopathic features** specifier; traits and level can be specified."] }
            ] },
            { type: "case", title: "Clinical vignette: the specifier", text: "A 29-year-old man in Olongapo is assessed after a series of investment frauds. He is charming, fearless and relaxed in the interview, enjoys being the center of attention, has no remorse, lies fluently, has abandoned two families and their debts, drives recklessly and acts on whims. He describes feeling no anxiety even when caught.", point: "A: identity, self-direction, empathy and intimacy all impaired (**4 of 4**). B: manipulativeness, callousness, deceitfulness, risk taking, impulsivity and irresponsibility are present (**6 of 7**, hostility absent). Low anxiousness, low withdrawal and high attention seeking describe **psychopathic features** (p. 885). The chart carries Section II antisocial personality disorder, **F60.2**, if its own criteria are met, with the profile in the formulation (app guidance)." }
          ]
        },
        {
          id: "s26-avoidant",
          title: "Avoidant personality disorder",
          pages: "885–886",
          blocks: [
            { type: "criteria", title: "Avoidant personality disorder in brief (proposed; Section III)", code: "No code: Section III (Section II F60.6)", pages: "885–886", items: [
              ["A", "**2 or more** of: (1) **identity**: low self-esteem with self-appraisal as socially inept, unappealing or inferior, and excessive shame; (2) **self-direction**: unrealistic standards and reluctance to pursue goals, take personal risks or try new activities involving contact with people; (3) **empathy**: preoccupation with and sensitivity to criticism or rejection, reading others’ views as negative; (4) **intimacy**: unwilling to get involved unless sure of being liked, with reduced mutuality for fear of being shamed or ridiculed."],
              ["B", "**3 or more of 4**, one of which **must be anxiousness**: (1) **anxiousness** (Negative Affectivity; here with fear of embarrassment and reactions to social situations), (2) **withdrawal** (Detachment), (3) **anhedonia** (Detachment), (4) **intimacy avoidance** (Detachment)."]
            ], specifiers: [], note: "One Negative Affectivity facet, which is compulsory, and three Detachment facets (app count)." },
            { type: "defs", title: "Specifiers (p. 886)", items: [
              ["Heterogeneity", "The manual notes **considerable heterogeneity** in the additional traits of people with this disorder."],
              ["Traits that can be specified", "Other Negative Affectivity traits: **depressivity, separation insecurity, submissiveness, suspiciousness, hostility** are the examples."],
              ["Level", "The level of personality functioning can also be specified."]
            ] },
            { type: "callout", kind: "exam", title: "The avoidant–schizotypal–obsessive-compulsive overlap", text: "**Withdrawal** sits in the avoidant and schizotypal sets; **intimacy avoidance** in the avoidant and obsessive-compulsive sets; **restricted affectivity** in the obsessive-compulsive and schizotypal sets. What separates them is the **mandatory or defining** facet: avoidant must have **anxiousness**, obsessive-compulsive must have **rigid perfectionism**, schizotypal needs **Psychoticism** facets (pp. 885–890) (app guidance)." }
          ]
        },
        {
          id: "s26-borderline",
          title: "Borderline personality disorder",
          pages: "886–887",
          blocks: [
            { type: "criteria", title: "Borderline personality disorder in brief (proposed; Section III)", code: "No code: Section III (Section II F60.3)", pages: "886–887", items: [
              ["A", "**2 or more** of: (1) **identity**: markedly impoverished, poorly developed or unstable self-image, often with excessive self-criticism; chronic emptiness; dissociative states under stress; (2) **self-direction**: instability of goals, aspirations, values or career plans; (3) **empathy**: reduced ability to recognize others’ feelings and needs, with interpersonal hypersensitivity (quick to feel slighted) and a view of others biased toward their negative attributes or vulnerabilities; (4) **intimacy**: intense, unstable, conflicted close relationships, with mistrust, neediness and anxious worry about being abandoned, whether real or imagined, often seen in extremes of idealization and devaluation and alternating between over-involvement and withdrawal."],
              ["B", "**4 or more of 7**, with at least one of **(5) impulsivity, (6) risk taking, (7) hostility** among them: (1) **emotional lability** (Negative Affectivity), (2) **anxiousness** (Negative Affectivity; here with fears of falling apart or losing control), (3) **separation insecurity** (Negative Affectivity), (4) **depressivity** (Negative Affectivity; includes pervasive shame, inferior self-worth, thoughts of suicide and suicidal behavior), (5) **impulsivity** (Disinhibition; includes a sense of urgency and self-harming behavior under distress), (6) **risk taking** (Disinhibition), (7) **hostility** (labeled Antagonism here)."]
            ], specifiers: [], note: "Four Negative Affectivity traits, two Disinhibition traits and hostility; the **must-have** rule means that four Negative Affectivity traits alone do **not** meet B (app count and reading)." },
            { type: "defs", title: "Specifiers (p. 887)", items: [
              ["Traits that can be specified", "**Psychoticism** traits are the example: **cognitive and perceptual dysregulation** is not a criterion but can be specified when present."],
              ["Level", "The level of personality functioning can also be specified."]
            ] },
            { type: "compare", title: "Borderline PD here and in Section II (Ch 18 comparison; app)", items: [
              { title: "Section II (Ch 18, p. 752)", color: "guide", points: ["**5 or more of 9** features: abandonment efforts, unstable intense relationships, identity disturbance, impulsivity in two areas, recurrent suicidal or self-mutilating behavior, affective instability, chronic emptiness, inappropriate anger, transient paranoid ideation or dissociation.", "Dissociation and paranoid ideation are a **criterion**."] },
              { title: "Alternative model (pp. 886–887)", color: "case", points: ["**2 of 4** A areas (dissociation under stress sits inside the **identity** area) plus **4 of 7** traits with one of the three **disinhibited or hostile** traits.", "Psychoticism traits are a **specifier**, not a criterion.", "Suicidal and self-harming behavior appear inside **depressivity** and **impulsivity**."] }
            ] },
            { type: "case", title: "Clinical vignette: the must-have rule", text: "A 23-year-old nursing student in Mariveles has had a shifting sense of who she is since her mid-teens, drops courses and friendships abruptly, feels empty, and swings from idealizing to despising her boyfriend when he is late to reply. She is anxious, tearful and easily moved to despair, dreads being left, and has had thoughts of ending her life, but she describes no impulsive acts, no risk taking and no anger.", point: "A is met (identity, self-direction, intimacy: **3 of 4**). B: emotional lability, anxiousness, separation insecurity and depressivity are present, **4 of 7**, but **none** of impulsivity, risk taking or hostility, so the borderline set is **not met** (p. 886). The model would describe her under **PD-TS** with those Negative Affectivity traits (pp. 890–891); whether Section II borderline personality disorder (5 of 9) is met is a separate question for the chart (app guidance). Thoughts of suicide call for a safety assessment regardless of the label (app guidance)." }
          ]
        },
        {
          id: "s26-narcissistic",
          title: "Narcissistic personality disorder",
          pages: "887–888",
          blocks: [
            { type: "criteria", title: "Narcissistic personality disorder in brief (proposed; Section III)", code: "No code: Section III (Section II F60.81)", pages: "887–888", items: [
              ["A", "**2 or more** of: (1) **identity**: excessive reliance on others for self-definition and self-esteem regulation; self-appraisal inflated, deflated or swinging between extremes; emotion regulation that mirrors self-esteem; (2) **self-direction**: goals set by gaining approval; standards unreasonably high (to be exceptional) or too low (entitlement); often unaware of own motives; (3) **empathy**: impaired recognition of others’ feelings and needs; excessive attunement to others’ reactions only when relevant to the self; over- or underestimating own effect on others; (4) **intimacy**: relationships largely superficial and in the service of self-esteem; little genuine interest in others, with a need for personal gain."],
              ["B", "**Both** of: (1) **grandiosity** (Antagonism; entitlement overt or covert, self-centeredness, conviction of being better than others, condescension), (2) **attention seeking** (Antagonism; excessive attempts to attract and hold attention; admiration seeking)."]
            ], specifiers: [], note: "The **smallest** B set in the model: two traits, both required, both from Antagonism (app count)." },
            { type: "defs", title: "Specifiers: two faces of narcissism (p. 888)", items: [
              ["More antagonistic", "Other Antagonism traits (**manipulativeness, deceitfulness, callousness**) can be specified when **more pervasive antagonistic features** are present; the manual’s quoted label is **“malignant narcissism.”**"],
              ["More vulnerable", "Negative Affectivity traits (**depressivity, anxiousness**) can be specified to record more **“vulnerable”** presentations."],
              ["Level", "The level of personality functioning can also be specified."]
            ] },
            { type: "callout", kind: "pearl", title: "Overt and covert", text: "The typical-features sentence allows grandiosity that is **overt or covert** (p. 883), and the grandiosity facet includes **covert** entitlement (p. 887): the shy, resentful, secretly superior patient can meet B, provided attention seeking is also present (app reading)." }
          ]
        },
        {
          id: "s26-ocpd",
          title: "Obsessive-compulsive personality disorder",
          pages: "888–889",
          blocks: [
            { type: "criteria", title: "Obsessive-compulsive personality disorder in brief (proposed; Section III)", code: "No code: Section III (Section II F60.5)", pages: "888–889", items: [
              ["A", "**2 or more** of: (1) **identity**: sense of self drawn mainly from work or productivity; constricted experience and expression of strong emotion; (2) **self-direction**: difficulty finishing tasks and reaching goals because of rigid, unreasonably high, inflexible standards; overly conscientious and moralistic attitudes; (3) **empathy**: difficulty understanding and appreciating others’ ideas, feelings or behavior; (4) **intimacy**: relationships rank below work and productivity; rigidity and stubbornness harm them."],
              ["B", "**3 or more of 4**, one of which **must be rigid perfectionism**: (1) **rigid perfectionism** (the **extreme Conscientiousness** pole, opposite Disinhibition), (2) **perseveration** (Negative Affectivity), (3) **intimacy avoidance** (Detachment), (4) **restricted affectivity** (Detachment)."]
            ], specifiers: [], note: "The only set whose mandatory trait is the **adaptive pole taken to an extreme**: rigid perfectionism is listed in Table 3 as the lack-of facet of Disinhibition (p. 900) (app reading)." },
            { type: "defs", title: "Specifiers (p. 889)", items: [
              ["Traits that can be specified", "Other Negative Affectivity traits; **anxiousness** is the example."],
              ["Level", "The level of personality functioning can also be specified."]
            ] },
            { type: "callout", kind: "exam", title: "Where rigid perfectionism lives", text: "In Table 3 it is a **Disinhibition** facet written as “(lack of)”: its **absence** characterizes low Disinhibition (p. 900). In the obsessive-compulsive set it is “an aspect of **extreme Conscientiousness**” (p. 888). Both statements describe the same pole. The Section II disorder, by contrast, needs **4 of 8** features (Ch 18, p. 771) (app guidance)." }
          ]
        },
        {
          id: "s26-schizotypal",
          title: "Schizotypal personality disorder",
          pages: "889–890",
          blocks: [
            { type: "criteria", title: "Schizotypal personality disorder in brief (proposed; Section III)", code: "No code: Section III (Section II F21)", pages: "889–890", items: [
              ["A", "**2 or more** of: (1) **identity**: self–other boundaries confused; self-concept distorted; emotional expression often incongruent with context or inner experience; (2) **self-direction**: unrealistic or incoherent goals; no clear internal standards; (3) **empathy**: pronounced difficulty understanding own impact on others; frequent misreading of others’ motives and behavior; (4) **intimacy**: marked impairment in forming close relationships, with mistrust and anxiety."],
              ["B", "**4 or more of 6**: (1) **cognitive and perceptual dysregulation** (Psychoticism; odd thought processes, vague, circumstantial, metaphorical, over-elaborate or stereotyped thought or speech, odd sensations), (2) **unusual beliefs and experiences** (Psychoticism), (3) **eccentricity** (Psychoticism), (4) **restricted affectivity** (Detachment), (5) **withdrawal** (Detachment), (6) **suspiciousness** (Detachment)."]
            ], specifiers: [], note: "All three Psychoticism facets and three Detachment facets; with 4 of 6, at least **one** Psychoticism facet is always present (app arithmetic)." },
            { type: "defs", title: "Specifiers (pp. 889–890)", items: [
              ["Traits that can be specified", "Negative Affectivity traits: **depressivity, anxiousness** are the examples."],
              ["Level", "The level of personality functioning can also be specified."]
            ] },
            { type: "callout", kind: "caution", title: "Criterion E and schizophrenia", text: "Schizotypal features that occur **only during schizophrenia** do not earn a personality disorder diagnosis on this model (p. 883). In Section II the code is **F21**; the criteria and text are in the personality disorders chapter (Ch 18, p. 744), and the schizophrenia spectrum chapter only lists it (p. 104) ([[dx:schizotypal-pd|library entry]]; app guidance)." }
          ]
        },
        {
          id: "s26-pdts",
          title: "Personality disorder—trait specified",
          pages: "890–891",
          blocks: [
            { type: "criteria", title: "PD-TS in brief (proposed; Section III)", code: "No code: Section III (Section II F60.89 or F60.9, or the Section II type represented)", pages: "890", items: [
              ["A", "Moderate or greater impairment in personality functioning, with difficulty in **2 or more** of **identity, self-direction, empathy, intimacy**."],
              ["B", "**One or more** pathological trait **domains** or specific **facets** within domains, having considered **all** five domains: Negative Affectivity (vs. Emotional Stability), Detachment (vs. Extraversion), Antagonism (vs. Agreeableness), Disinhibition (vs. Conscientiousness), Psychoticism (vs. Lucidity)."]
            ], specifiers: [], note: "The B criterion can be met at the **domain** level, which is why domain-level assessment is an acceptable option for a general portrait (p. 894)." },
            { type: "defs", title: "Subtypes and specifiers (p. 890)", items: [
              ["No subtypes", "Because personality features vary **continuously on multiple dimensions**, the trait model (Table 3) can represent **every** expression of PD-TS; subtypes are **unnecessary**. The clinician **tailors** each person’s profile across all five domains."],
              ["The traits are the specifiers", "The features recorded for Criterion B **directly constitute** the specifiers. The manual’s example: two people both with **emotional lability, hostility and depressivity** differ if one also has **callousness**."]
            ] },
            { type: "defs", title: "Who gets PD-TS (p. 891)", items: [
              ["A match to one of the six", "Diagnose **that** disorder; extra prominent traits can be noted as **specifiers** (the narcissistic entry is the example)."],
              ["Substantially different", "A functioning or trait pattern **substantially different** from any of the six → **PD-TS**."],
              ["Subthreshold", "Not enough **A** or **B** criteria for a specific set → a subthreshold presentation, recorded as PD-TS."],
              ["Mixed or atypical", "A mix of features of several types, or features less characteristic of any type."],
              ["The four types without a set of their own", "**Paranoid, schizoid, histrionic and dependent** personality disorders, which the manual calls current diagnoses, are **represented by PD-TS**: moderate or greater impairment, specified by the relevant trait combinations."],
              ["How to specify it", "The level of impairment with the **LPFS** (Table 2) and the traits with the **taxonomy** (Table 3)."]
            ] },
            { type: "table", caption: "The four Section II types without a set of their own, as PD-TS profiles (app suggestion; the manual names no trait sets for them)", head: ["Section II type (Ch 18)", "Facets a clinician would likely record", "Domains"], rows: [
              ["Paranoid (F60.0)", "Suspiciousness, hostility", "Detachment, Negative Affectivity/Antagonism"],
              ["Schizoid (F60.1)", "Withdrawal, intimacy avoidance, anhedonia, restricted affectivity", "Detachment"],
              ["Histrionic (F60.4)", "Attention seeking, emotional lability, manipulativeness", "Antagonism, Negative Affectivity"],
              ["Dependent (F60.7)", "Submissiveness, separation insecurity, anxiousness", "Negative Affectivity"]
            ] },
            { type: "case", title: "Clinical vignette: a dependent presentation", text: "A 41-year-old woman in Bataan has let her husband and then her eldest son make every decision for her since her early twenties, agrees with whatever is asked of her even against her own needs, panics at the thought of being left to manage alone, and describes herself as unable to cope on her own. Her self-esteem is governed by others’ approval, her goals are theirs, and her relationships exist to secure care.", point: "A: identity, self-direction and intimacy are impaired at about **Level 2**. No specific set fits; the profile is **submissiveness, separation insecurity and anxiousness** in Negative Affectivity. The model records **PD-TS** with those traits (pp. 890–891). The chart carries Section II **dependent personality disorder (F60.7)** if its criteria are met, otherwise other specified personality disorder (F60.89) with the features named (app guidance)." }
          ]
        },
        {
          id: "s26-algorithms",
          title: "Putting it together: from assessment to diagnosis",
          pages: "882, 891–892, 894",
          blocks: [
            { type: "flow", title: "The model’s diagnostic sequence (pp. 882, 891–892; app layout)", steps: [
              "Rate the LPFS: current overall level across identity, self-direction, empathy, intimacy",
              "Level 0 or 1 → no personality disorder by this model; the LPFS stays as a global indicator",
              "Level 2 or more → review all five trait domains (and facets if personality is the focus)",
              "Does the A and B pattern match one of the six sets, with its B count and mandatory traits? → that disorder, plus any trait and level specifiers",
              "Substantially different, subthreshold, mixed or atypical → PD-TS, specified by level and traits",
              "Check C–G: pervasive, stable since at least adolescence or early adulthood, not another disorder, substance or medical condition, not normal for stage or setting"
            ] },
            { type: "defs", title: "The two determinations, restated (p. 882)", items: [
              ["Determination 1", "The **level of impairment** in personality functioning, needed for Criterion A."],
              ["Determination 2", "An evaluation of **pathological traits**, needed for Criterion B."],
              ["Independent but related", "Both are required and the manual keeps them separate; it also notes that the severity of impairment predicts having more than one personality disorder or a typically more severe one (p. 882). Research since has found Criterion A and B measures highly correlated (Zimmermann et al. 2019; Krueger and Hobbs 2020; outside the DSM)."]
            ] },
            { type: "callout", kind: "pearl", title: "Specifiers come in three kinds", text: "**Additional traits** (any facet not required for the set), the **level of personality functioning**, and, for antisocial PD only, **with psychopathic features** (pp. 885–890). For PD-TS the recorded traits **are** the specifiers (p. 890)." }
          ]
        },
        {
          id: "s26-utility",
          title: "Clinical utility of the combined model",
          pages: "894",
          blocks: [
            { type: "defs", title: "What each construct adds (p. 894)", items: [
              ["Mutual value", "The disorder and trait constructs **each add value** to each other when predicting **antecedent** variables (family history, a history of child abuse), **concurrent** variables (functional impairment, medication use) and **predictive** variables (hospitalization, suicide attempts)."],
              ["Independent contributions", "Impairments in functioning and pathological traits each contribute **independently** to decisions about **how disabled** a person is; the **risks of self-harm, violence and criminality**; the **type and intensity of treatment** to recommend; and **prognosis**."],
              ["Beyond personality disorders", "Knowing a person’s level of functioning and trait profile gives a **rich base of information** for **treatment planning** and for predicting the course and outcome of **many mental disorders** besides personality disorders."],
              ["The conclusion", "Assessment of personality functioning and traits **may be relevant whether or not** the person has a personality disorder."]
            ] },
            { type: "callout", kind: "pearl", title: "In the clinic", text: "Even when you chart only a depressive or anxiety disorder, a line in the formulation such as “personality functioning Level 1; elevated anxiousness and submissiveness” tells the next clinician how the patient will relate to treatment (p. 892) and what may complicate it (p. 883). That is the model’s everyday use (app guidance)." }
          ]
        }
      ]
    },
    {
      title: "Beyond the text",
      sections: [
        {
          id: "s26-recording",
          title: "Recording: what goes on the chart (app guidance)",
          pages: "839, 881; Section I pp. 22–24",
          blocks: [
            { type: "callout", kind: "caution", title: "Section III is not the diagnosis line", text: "The alternative model is offered **as an alternative** in Section III (p. 881), the manual’s section for emerging measures and models (p. 839). Only Section II disorders and codes are the official classification, so the **diagnosis line** carries the Section II personality disorder and its ICD-10-CM code ([[ch:ch18|Chapter 18]]), or other specified (F60.89) or unspecified (F60.9) personality disorder; the model’s level and trait profile go in the **formulation** (app guidance)." },
            { type: "table", caption: "From the model to the chart (app guidance; Section II codes from Chapter 18, no change found for the codes checked through FY2027; confirm against the official tabular list)", head: ["Model conclusion", "Diagnosis line", "Formulation"], rows: [
              ["Antisocial set met", "Section II antisocial PD, **F60.2**, if its own criteria are met (conduct disorder before 15 included)", "LPFS level; traits; **with psychopathic features** if present"],
              ["Avoidant set met", "Section II avoidant PD, **F60.6**", "LPFS level; traits"],
              ["Borderline set met", "Section II borderline PD, **F60.3**", "LPFS level; traits; Psychoticism traits if specified"],
              ["Narcissistic set met", "Section II narcissistic PD, **F60.81**", "LPFS level; traits; malignant or vulnerable features"],
              ["Obsessive-compulsive set met", "Section II obsessive-compulsive PD, **F60.5**", "LPFS level; traits"],
              ["Schizotypal set met", "Section II schizotypal PD, **F21**", "LPFS level; traits"],
              ["PD-TS, paranoid-, schizoid-, histrionic- or dependent-like", "The Section II type if its criteria are met: **F60.0, F60.1, F60.4, F60.7**", "LPFS level; the trait profile that is the PD-TS specifier"],
              ["PD-TS, mixed, atypical or subthreshold for every Section II set", "**Other specified PD (F60.89)** with the features named, or **unspecified PD (F60.9)**", "LPFS level; trait profile"],
              ["Level 0–1, with or without elevated traits", "No personality disorder", "LPFS level as a global indicator; traits that may shape treatment (p. 894)"]
            ] },
            { type: "defs", title: "The Section II rules that carry over (Section I; app guidance)", items: [
              ["Mismatch between models", "The two models have different thresholds, so a person can meet a Section III set without meeting the Section II criteria for the same name, or the reverse. The **Section II** criteria decide the code; the model’s conclusion is recorded as a formulation, never forced onto the code (app guidance; p. 881)."],
              ["Other specified", "When the clinician wants to communicate **why** the full criteria are not met, other specified personality disorder (F60.89) with the reason stated; the model’s trait list is a good reason (Section I, pp. 22–23; app guidance)."],
              ["Comorbidity", "A personality disorder can be recorded with another disorder such as major depressive disorder; the model explicitly encourages assessing it (p. 883)."]
            ] },
            { type: "callout", kind: "pearl", title: "One line that says it all", text: "Formulation example: “Personality functioning Level 2 (moderate); elevated anxiousness, separation insecurity, submissiveness (Negative Affectivity); profile consistent with PD-TS, dependent-like. Diagnosis: dependent personality disorder, F60.7.” (app guidance)" }
          ]
        },
        {
          id: "s26-section2",
          title: "The two models side by side (Chapter 18 comparison)",
          pages: "881–891; Ch 18 pp. 733–778",
          blocks: [
            { type: "table", caption: "Section II versus the alternative model (Section II facts from Chapter 18; app comparison)", head: ["Feature", "Section II (Ch 18)", "Alternative model (Ch 26)"], rows: [
              ["Status", "Official classification and codes", "Section III proposal; no codes (p. 881)"],
              ["Definition of a PD", "Enduring pattern in 2 or more of cognition, affectivity, interpersonal functioning, impulse control (p. 734)", "Moderate or greater impairment in self/interpersonal functioning plus pathological traits (p. 881)"],
              ["Severity", "No built-in severity scale", "LPFS Levels 0–4 for every disorder and for PD-TS (p. 882)"],
              ["Named disorders", "Ten, in Clusters A, B and C", "Six, no clusters; paranoid, schizoid, histrionic and dependent become PD-TS profiles (p. 891)"],
              ["Residual category", "Other specified (F60.89) and unspecified (F60.9)", "PD-TS, specified by level and traits (p. 890)"],
              ["Thresholds", "Counts of criteria (e.g., borderline 5 of 9, p. 752; antisocial 3 of 7 with conduct disorder before 15, p. 748; avoidant 4 of 7, p. 764; OCPD 4 of 8, p. 771; narcissistic 5 of 9, p. 760; schizotypal 5 of 9, p. 744)", "2 of 4 A areas plus the set’s B count (6/7, 3/4, 4/7, 2/2, 3/4, 4/6) with mandatory traits (pp. 884–890)"],
              ["Age rule", "Antisocial PD at least 18 (p. 748); other PDs in under-18s need features for at least 1 year (p. 736)", "Antisocial PD at least 18 (p. 885); onset traceable to at least adolescence or early adulthood (p. 881)"],
              ["Specifiers", "None beyond “(premorbid)” for paranoid, schizoid or schizotypal PD that preceded schizophrenia (Ch 18, pp. 738, 742, 745)", "Additional traits, the level of functioning, and “with psychopathic features” for antisocial PD (pp. 885–890)"],
              ["Instruments", "None named", "LPFS (Table 2); PID-5 self- and informant-report (p. 894)"]
            ] },
            { type: "callout", kind: "exam", title: "Do not mix the numbers", text: "A question that gives **5 of 9** is asking about Section II borderline or narcissistic PD; **4 of 7** with a mandatory trait is this chapter’s borderline set; **6 of 7** is this chapter’s antisocial set, not Section II’s 3 of 7. Read which model the stem names before counting (app guidance)." }
          ]
        },
        {
          id: "s26-icd11",
          title: "ICD-11: the other dimensional model (outside the DSM)",
          pages: "outside the DSM",
          blocks: [
            { type: "p", text: "**Outside the DSM.** ICD-11 abandoned categorical personality disorders altogether. A personality disorder is coded by **severity**, **mild (6D10.0), moderate (6D10.1) or severe (6D10.2)**, with **6D10.Z** when severity is unspecified, and then described with **trait domain qualifiers** (6D11.0–6D11.4): **negative affectivity, detachment, dissociality, disinhibition and anankastia**, plus a **borderline pattern** qualifier (**6D11.5**) that can be added only alongside a severity category or “personality difficulty” (WHO ICD-11 as listed by a code reference site, 2026; app summary)." },
            { type: "table", caption: "AMPD and ICD-11 compared (outside the DSM; app comparison from Bach et al. 2018 and the ICD-11 listing)", head: ["Feature", "AMPD (DSM-5-TR Section III)", "ICD-11"], rows: [
              ["Severity", "LPFS Levels 0–4; moderate or greater required", "Mild, moderate or severe (6D10.0–6D10.2), or severity unspecified (6D10.Z)"],
              ["Trait domains", "Negative Affectivity, Detachment, Antagonism, Disinhibition, **Psychoticism**", "Negative affectivity, Detachment, **Dissociality**, Disinhibition, **Anankastia**"],
              ["Named types", "Six specific disorders plus PD-TS", "**None**; only the borderline pattern qualifier"],
              ["Facets", "25 facets", "Trait domain qualifiers, with no facet list in the codes"],
              ["Fit with Section II types", "Better captures **schizotypal** features through Psychoticism", "Better captures **obsessive-compulsive** features through Anankastia (Bach et al. 2018, one outpatient sample)"]
            ] },
            { type: "callout", kind: "pearl", title: "What the Philippine resident needs from this", text: "The two systems agree on the big idea: **one severity dimension plus a trait profile**. If the Philippines adopts ICD-11 for morbidity coding, the LPFS level translates roughly into the ICD-11 severity bands and the AMPD domains into its qualifiers, with Psychoticism and anankastia as the mismatches (outside the DSM; app guidance, not an official crosswalk)." }
          ]
        },
        {
          id: "s26-evidence",
          title: "The instruments and the evidence (outside the DSM)",
          pages: "894; outside the DSM",
          blocks: [
            { type: "table", caption: "Instruments built on the model (described, not reprinted; outside the DSM, research file of November 2, 2026)", head: ["Instrument", "What it measures", "Length and source"], rows: [
              ["**PID-5** (Personality Inventory for DSM-5)", "Self-report of all 25 facets and 5 domains; the instrument the manual names (p. 894)", "**220 items**; adult and ages 11–17 versions listed by the APA; Krueger et al. 2012"],
              ["**PID-5-BF** (brief form)", "The five **domains** only", "**25 items**; adult and ages 11–17 versions listed by the APA"],
              ["**PID-5-SF** (short form)", "The 25 facets, abbreviated", "**100 items** (Maples et al. 2015); not listed on the APA page"],
              ["**PID-5-IRF** (informant form)", "The informant-report version the manual describes (p. 894)", "Listed by the APA; item count not confirmed by the app"],
              ["**LPFS-SR**", "Self-report of identity, self-direction, empathy and intimacy with a total", "**80 items**, 4-point scale; Morey 2017"],
              ["**LPFS-BF 2.0**", "Brief self-report with self and interpersonal factors", "Weekers, Hutsebaut and Kamphuis 2019; item count not confirmed by the app"],
              ["**SCID-5-AMPD**", "Clinician interview in three modules: the LPFS, the traits, the personality disorders", "APA Publishing, 2018 (First, Skodol, Bender, Oldham); a commercial product, not a free online measure"]
            ] },
            { type: "defs", title: "History and evidence in brief (outside the DSM)", items: [
              ["How it got here", "The DSM-5 Personality and Personality Disorders Work Group (chaired by Andrew Skodol) and the Task Force recommended the hybrid model; the APA Board of Trustees voted in **2012** not to adopt it for Section II and placed it in Section III, keeping the DSM-IV criteria (secondary sources: Zachar et al. 2016, Skodol et al. 2015)."],
              ["Reliability and validity", "A 2019 review of 237 publications (Zimmermann et al.) found **acceptable interrater reliability**, largely consistent latent structure, strong links to external measures and some **incremental validity** beyond categorical diagnoses; Criterion A and Criterion B measures are **highly correlated**, which raises conceptual questions (also Krueger and Hobbs 2020)."],
              ["Fit with the Big Five", "In one Brazilian PID-5 sample, Negative Affectivity tracked neuroticism (r ≈ .70), Detachment low extraversion, Antagonism low agreeableness and Disinhibition low conscientiousness, while Psychoticism had no clear counterpart, its link to openness being weak and disputed (Barchi-Ferreira and Osório 2022; Widiger and McCabe 2020)."],
              ["DSM-5 to DSM-5-TR", "The APA’s Section III summary states the alternative model **was not changed** from DSM-5; see the comparison box below."]
            ] },
            { type: "callout", kind: "caution", title: "Copyright and use", text: "The PID-5 forms are listed on the APA’s online assessment-measures page; the LPFS-SR, LPFS-BF 2.0 and SCID-5-AMPD belong to their authors or publisher. Use the originals; the app describes them only (app guidance)." }
          ]
        },
        {
          id: "s26-treatment",
          title: "Treatment bridge (outside the DSM)",
          pages: "outside the DSM",
          blocks: [
            { type: "p", text: "**Outside the DSM.** The chapter says only that symptoms and traits are both **amenable to intervention** and that treating symptoms can change longer-term trait patterns (p. 894), and that functioning and traits inform **treatment type and intensity** (p. 894). The evidence below is for the Section II disorders and is summarized from guidelines and reviews, not from the manual." },
            { type: "defs", title: "Borderline personality disorder (outside the DSM)", items: [
              ["APA practice guideline, December 2024", "Recommends a **structured psychotherapy** with literature support that targets the core features; **no therapy emerged as a gold standard**. No evidence that **any medication treats the core symptoms**. Before prescribing, review comorbidity, prior psychotherapies and prior medication trials; any psychotropic should be **time-limited, aimed at a measurable target symptom and adjunctive to psychotherapy**; reconcile medications at least **every 6 months**."],
              ["Cochrane psychotherapy review, 2020", "75 trials, 4,507 participants; **DBT** and **MBT** the most studied; DBT reduced severity, self-harm and improved functioning versus treatment as usual, MBT reduced self-harm and suicidality, all at **low certainty**."],
              ["Cochrane pharmacotherapy review, 2022", "46 trials, 2,769 participants: **no clear benefit** of any drug class over placebo on severity, self-harm, suicide-related outcomes or functioning (mostly very low certainty); antipsychotics and mood stabilizers may modestly reduce interpersonal problems (low certainty)."],
              ["NICE CG78 (2009), as summarized", "Do not use drug treatment specifically for the disorder or its individual symptoms; avoid antipsychotics for medium- or long-term treatment; short-term sedatives in a crisis for no more than a week; avoid polypharmacy; treat comorbid disorders by their own guidance."]
            ] },
            { type: "defs", title: "How the model changes the plan (app guidance)", items: [
              ["Severity sets intensity", "A Level 3–4 rating argues for a structured, longer, team-based program; Level 2 may be managed with a time-limited structured therapy and clear crisis planning."],
              ["Traits set targets", "Elevated **anxiousness** or **depressivity** suggests treatable comorbid anxiety or depressive disorders to look for; **impulsivity** and **risk taking** point to safety planning; **suspiciousness** and **hostility** predict a rocky alliance to plan around."],
              ["Reassess", "The LPFS can be re-rated at a later point in time (p. 892), which makes it a natural progress measure."],
              ["Safety", "Depressivity includes thoughts of suicide and suicidal behavior, and impulsivity includes self-harming behavior under distress (pp. 887, 899–900): ask directly and plan for safety. The Philippine **NCMH Crisis Hotline** is **1553** (toll-free from landlines) or **1800-1888-1553**; **0919-057-1553** (Smart/TNT); **0917-899-8727** and **0966-351-4518** (Globe/TM) (app guidance; confirm current numbers before giving them out)."]
            ] },
            { type: "callout", kind: "pearl", title: "Medication and personality disorders", text: "For borderline personality disorder the APA’s 2024 guideline found no evidence that any medication treats the core symptoms, and the 2022 Cochrane review concluded that no drug therapy seems effective for the disorder itself; medicines are for comorbid disorders or a specific, measurable target symptom, time-limited and alongside psychotherapy ([[dx:borderline-pd|Chapter 18 treatment bridge]]; the Stahl companion has no personality disorder chapter) (outside the DSM; app guidance)." }
          ]
        },
        {
          id: "s26-philippines",
          title: "Philippine context (outside the DSM)",
          pages: "outside the DSM",
          blocks: [
            { type: "defs", title: "What is and is not available locally (outside the DSM; research file, November 2026)", items: [
              ["No local validation", "No Filipino validation or Filipino-language adaptation of the **PID-5** or the **LPFS** was found. Use the English forms with that limitation stated, and lean on the **informant report**, which the manual includes in a detailed assessment (p. 894; the weighting is app guidance)."],
              ["A related local study", "The **Mapa ng Loob**, a Filipino Five Factor inventory (Del Pilar 2017, Philippine Journal of Psychology), was factor-analyzed together with PID-5 facets (Lee and Untalan 2016, as cited): the neuroticism, extraversion and conscientiousness facets grouped with the matching PID-5 domains, two agreeableness facets grouped with Antagonism, and openness formed a separate factor rather than joining Psychoticism, in keeping with the manual’s note that facets vary across cultures while domains are relatively consistent (p. 893)."],
              ["Criterion G in practice", "Deference to elders, **pakikisama** (getting along) and family-centered decision-making can look like submissiveness or dependency to an examiner from another setting. The manual’s Criterion G asks whether the pattern is **normal for the sociocultural environment** (p. 881); the Cultural Formulation Interview ([[ch:ch24|Chapter 24]]) is the tool for that question (app guidance)."],
              ["Where the model helps most", "In public mental health settings with one psychiatrist for many patients, the **five-domain review** and a one-line formulation of level and traits is a feasible way to record personality without a full structured interview, which the manual allows when only a general portrait is needed (p. 894; app guidance)."]
            ] }
          ]
        },
        {
          id: "s26-tr-changes",
          title: "DSM-5 to DSM-5-TR: what changed",
          pages: "881–902; outside the DSM",
          blocks: [
            { type: "update", kind: "tr", title: "What the text revision changed (comparison made by the app, not stated in the chapter)", text: "The APA’s own summary of the Section III revisions states that the Alternative DSM-5 Model for Personality Disorders **was not changed from DSM-5**; the text revision’s Section III changes were elsewhere (the assessment measures, the cultural chapter, and the move of persistent complex bereavement disorder to Section II as prolonged grief disorder). The app found no criterion, threshold or table changes in this chapter between the two editions; confirm against both editions if a detail matters (APA DSM-5-TR Section III fact sheet; app comparison)." },
            { type: "callout", kind: "pearl", title: "Why that matters for study", text: "Older review books and question banks on the alternative model remain accurate for this chapter; the Section II personality disorder **text** (not criteria) did gain DSM-5-TR updates, which are covered in [[ch:ch18|Chapter 18]] (Ch 18, p. 733; app guidance)." }
          ]
        },
        {
          id: "s26-exam",
          title: "Exam strategy and the chapter’s mnemonics",
          pages: "881–901",
          blocks: [
            { type: "list", title: "The twelve facts examiners test (app guidance)", items: [
              "A personality disorder = **moderate or greater** impairment in functioning (A) + **one or more** pathological traits (B) + C–G (pp. 881–882).",
              "Self functioning = **identity, self-direction**; interpersonal = **empathy, intimacy** (p. 883).",
              "LPFS: **0 little or no, 1 some, 2 moderate, 3 severe, 4 extreme**; **moderate** is the threshold, chosen empirically (p. 882).",
              "Five domains and poles: **Negative Affectivity/Emotional Stability, Detachment/Extraversion, Antagonism/Agreeableness, Disinhibition/Conscientiousness, Psychoticism/Lucidity**; maladaptive variants of the **Five Factor Model**, similar to the **PSY-5** (pp. 890, 893).",
              "**25 facets**; hostility is under Negative Affectivity in Table 3 but “an aspect of Antagonism” in the antisocial and borderline sets; depressivity and suspiciousness are Detachment facets; rigid perfectionism is the lack-of facet of Disinhibition (pp. 884, 887, 899–900).",
              "Every set needs **2 of 4** A areas (p. 891); B: antisocial **6 of 7** and **age 18**; avoidant **3 of 4 with anxiousness**; borderline **4 of 7 with impulsivity, risk taking or hostility**; narcissistic **both**; obsessive-compulsive **3 of 4 with rigid perfectionism**; schizotypal **4 of 6** (pp. 884–890).",
              "**With psychopathic features** = low anxiousness, low withdrawal, high attention seeking (p. 885).",
              "**PD-TS**: 2 of 4 areas + 1 or more domains or facets across all five domains; no subtypes; the traits are the specifiers; it represents paranoid, schizoid, histrionic and dependent presentations and subthreshold or mixed pictures (pp. 890–891).",
              "The LPFS may be used as a **global indicator** without a diagnosis or when subthreshold (p. 892).",
              "A **trait** is a disposition; a **behavior** is an instance; a **symptom** waxes and wanes (pp. 893–894).",
              "Assess like a **review of systems**: all five domains; **PID-5** self and informant; domain level acceptable for a general portrait; elevation by **norms and/or clinical judgment** (p. 894).",
              "Functioning and traits contribute **independently** to disability, risk, treatment and prognosis; assessment **may be relevant** with or without a personality disorder (p. 894)."
            ] },
            { type: "callout", kind: "mnemonic", title: "LPFS: Who? Where? You? Us?", text: "The four elements of personality functioning: **Who?** = identity (who am I: a unique self with clear boundaries, steady self-esteem, accurate self-appraisal, regulated emotion); **Where?** = self-direction (where am I going: coherent goals, prosocial standards, productive self-reflection); **You?** = empathy (do I understand you: others’ experiences and motives, tolerating different views, seeing my own effect); **Us?** = intimacy (how close are we: depth and duration, the wish and capacity for closeness, mutual regard). App mnemonic; DSM check: Table 1, p. 883." },
            { type: "callout", kind: "mnemonic", title: "Domains: New Doctors Always Double-check Prescriptions", text: "**N**egative Affectivity, **D**etachment, **A**ntagonism, **D**isinhibition, **P**sychoticism; and the poles, **Every Excellent Attending Checks Labs**: **E**motional Stability, **E**xtraversion, **A**greeableness, **C**onscientiousness, **L**ucidity. App mnemonic; DSM check: pp. 890, 893." },
            { type: "callout", kind: "mnemonic", title: "General criteria: Ability, Bad traits, Contexts, Durable, Else, Foreign, Growth", text: "**A** = Ability to function impaired (moderate or greater impairment in self/interpersonal functioning); **B** = Bad traits (one or more pathological traits); **C** = Contexts (relatively rigid and present across most personal and social settings); **D** = Durable (relatively stable, onset traceable to at least adolescence or early adulthood); **E** = Else? (not better explained by another mental disorder); **F** = Foreign cause? (not solely the bodily effects of a substance or a medical condition, e.g. severe head trauma); **G** = Growth stage or group (not normal for the developmental stage or sociocultural environment). App mnemonic; DSM check: p. 881." },
            { type: "callout", kind: "mnemonic", title: "Borderline: SAD LAB, but I Run Hot", text: "**S**eparation insecurity, **A**nxiousness, **D**epressivity, emotional **LAB**ility; **I**mpulsivity, **Run** = risk taking, **Hot** = hostility. Four or more of the seven, and at least one of I, Run or Hot. App mnemonic; DSM check: pp. 886–887." },
            { type: "callout", kind: "mnemonic", title: "Antisocial: the swindler’s portrait", text: "**M**anipulative, **C**old (callousness), **D**eceitful, **H**ot-tempered (hostility), **R**eckless (risk taking), **I**mpulsive, **I**OU-dodger (irresponsibility): six or more of the seven, and at least 18 years old. App mnemonic; DSM check: pp. 884–885." },
            { type: "callout", kind: "mnemonic", title: "Six PDs: SNOB AA stay; PSHD gets PuSHeD", text: "**S**chizotypal, **N**arcissistic, **O**bsessive-compulsive, **B**orderline, **A**ntisocial, **A**voidant stay as named disorders; **P**aranoid, **S**chizoid, **H**istrionic, **D**ependent are PuSHeD into PD-TS (moderate or greater impairment plus the relevant trait combination). App mnemonic; DSM check: pp. 881, 891." },
            { type: "callout", kind: "exam", title: "Reading a stem", text: "First find the **model**: “Section III”, “alternative model”, “Level of Personality Functioning” or trait names such as “anxiousness” and “Detachment” mean this chapter; a list of nine behaviors means Chapter 18. Then find the **A count** (areas of four) and the **B count** with its **mandatory trait**. Then look for E, F and G: a disorder that explains the picture, a substance or head injury, an adolescent, or a cultural norm. Finally, remember that the answer to “what do you write on the chart” is always the **Section II** disorder and code (app guidance)." }
          ]
        }
      ]
    }
  ]
});
