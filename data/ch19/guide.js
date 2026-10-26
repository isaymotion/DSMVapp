/* Chapter 19 study guide. Source: DSM-5-TR, Paraphilic Disorders (pp. 779–801).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026)
   and the APA DSM-5-TR updates of September 2022–2025: no changes for this chapter. Treatment, risk-assessment, legal
   and ICD-11 content is outside the DSM and labeled as such. The chapter concerns behavior that can harm others, so the
   wording is clinical and forensic-aware throughout. */
SP.add("ch19", "guide", {
  intro: "A **paraphilia** is an intense, persistent sexual interest in something other than ordinary sexual activity with a physically mature, consenting partner (p. 779). It becomes a **paraphilic disorder** only when it **causes distress or impairment** to the person, or when acting on it has **harmed, or risked harming, someone else** (p. 780). That two-part logic, **Criterion A** (what the interest is) plus **Criterion B** (what it costs), runs through all eight listed disorders: three **courtship disorders** ([[dx:voyeuristic-disorder|voyeuristic]], [[dx:exhibitionistic-disorder|exhibitionistic]], [[dx:frotteuristic-disorder|frotteuristic]]), two **algolagnic** disorders ([[dx:sexual-masochism-disorder|masochism]], [[dx:sexual-sadism-disorder|sadism]]), and three disorders of **target** ([[dx:pedophilic-disorder|pedophilic]], [[dx:fetishistic-disorder|fetishistic]], [[dx:transvestic-disorder|transvestic]]). Every one needs **6 months**; most carry the **in a controlled environment** and **in full remission** specifiers; and the exam loves the exceptions: the **age rules**, the disorder with **no remission specifier**, and which disorders count **acting on urges with a nonconsenting person** as Criterion B. The [[helper:paraphilic|paraphilic disorders helper]] walks through the decisions.",
  objectives: [
    "Define **paraphilia** and **paraphilic disorder**, and explain why a paraphilia is **necessary but not sufficient** for a diagnosis.",
    "Sort the eight disorders into **courtship**, **algolagnic** and **anomalous target** groups, and state each one’s **Criterion A** in plain words.",
    "State the three shapes of **Criterion B**: acted on with a **nonconsenting person** or distress/impairment (voyeuristic, exhibitionistic, frotteuristic, sadism); **distress or impairment only** (masochism, fetishistic, transvestic); and pedophilic disorder’s own wording (**acted on**, or **marked distress or interpersonal difficulty**).",
    "Apply the **age rules**: voyeuristic disorder from **18**; pedophilic disorder from **16 and at least 5 years older** than the child, with the late-adolescent exclusion; **no minimum age** for exhibitionistic or frotteuristic disorder.",
    "Use the shared specifiers **in a controlled environment** and **in full remission** (**5 years** without acting on urges or distress, in an **uncontrolled** environment), and know that **pedophilic disorder has neither**.",
    "Recognize the **nondisclosing** person: recurrent behavior with **multiple victims on separate occasions** can meet Criteria A and B even when urges are denied.",
    "Work the **differential**: the paraphilia without the disorder; sexual disinhibition in **mania, major neurocognitive disorder, intellectual developmental disorder, personality change due to another medical condition, substance intoxication or schizophrenia**; **conduct disorder and antisocial personality disorder**; instrumental pain during a sexual assault; **OCD** worries about attraction; and **transvestic disorder versus fetishistic disorder versus gender dysphoria**.",
    "Code the chapter (**F65.3, F65.2, F65.81, F65.51, F65.52, F65.4, F65.0, F65.1, F65.89, F65.9**), record the other specified category with its reason, and know the ICD-10-CM titles that differ from the DSM names."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s19-map",
          title: "How the chapter is built",
          pages: "779–780",
          blocks: [
            { type: "p", text: "The manual lists **eight** paraphilic disorders. They were singled out for explicit criteria because they are **relatively common** among paraphilias and because some are satisfied by acts that are **criminal offenses** (p. 779). Dozens of other paraphilias exist, and any of them can become a disorder through its consequences; they go under the **other specified** category." },
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Group", "Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["Courtship", "[[dx:voyeuristic-disorder|Voyeuristic disorder]]", "F65.3", "Watching an **unsuspecting** person who is naked, undressing or having sex; diagnosed from **age 18**", "780–783"],
              ["Courtship", "[[dx:exhibitionistic-disorder|Exhibitionistic disorder]]", "F65.2", "Exposing the genitals to an **unsuspecting** person; subtyped by the **age** of those targeted", "783–785"],
              ["Courtship", "[[dx:frotteuristic-disorder|Frotteuristic disorder]]", "F65.81", "Touching or rubbing against a **nonconsenting** person", "785–788"],
              ["Algolagnic", "[[dx:sexual-masochism-disorder|Sexual masochism disorder]]", "F65.51", "Arousal from being humiliated, beaten, bound or made to suffer; **with asphyxiophilia** specifier", "788–790"],
              ["Algolagnic", "[[dx:sexual-sadism-disorder|Sexual sadism disorder]]", "F65.52", "Arousal from another person’s **physical or psychological suffering**", "790–792"],
              ["Target", "[[dx:pedophilic-disorder|Pedophilic disorder]]", "F65.4", "Sexual focus on **prepubescent** children; person **16 or older** and **5 years older**; **no remission specifier**", "792–796"],
              ["Target", "[[dx:fetishistic-disorder|Fetishistic disorder]]", "F65.0", "**Nonliving objects** or a **nongenital body part**; not cross-dressing clothes or sex toys", "796–798"],
              ["Target", "[[dx:transvestic-disorder|Transvestic disorder]]", "F65.1", "Arousal from **cross-dressing**; **with fetishism**, **with autogynephilia**", "798–800"],
              ["Residual", "[[dx:other-specified-paraphilic|Other specified paraphilic disorder]]", "F65.89", "Reason recorded, e.g., **zoophilia**", "801"],
              ["Residual", "[[dx:unspecified-paraphilic|Unspecified paraphilic disorder]]", "F65.9", "Reason not given, or not enough information", "801"]
            ] },
            { type: "compare", title: "Two ways to sort the eight (p. 779)", items: [
              { title: "Anomalous activity: courtship disorders", color: "guide", points: ["Distorted pieces of normal courtship: **looking** (voyeuristic), **showing** (exhibitionistic), **touching** (frotteuristic).", "All three involve an **unsuspecting or nonconsenting** person, so Criterion B can be met by the behavior alone."] },
              { title: "Anomalous activity: algolagnic disorders", color: "case", points: ["Arousal tied to **pain and suffering**: receiving it (masochism) or inflicting it (sadism).", "Only sadism has the nonconsenting-person arm of Criterion B."] },
              { title: "Anomalous target", color: "hy", points: ["Directed at **other humans**: pedophilic disorder.", "Directed **elsewhere**: fetishistic disorder (objects, body parts) and transvestic disorder (cross-dressing)."] }
            ] },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The criteria sets, specifiers and codes are those of DSM-5 (2013), including the ICD-10-CM codes. The text revision rewrote the descriptive sections: new **Association With Suicidal Thoughts or Behavior** sections for the algolagnic disorders, updated **prevalence** figures from community surveys (Quebec, Sweden, Finland, Australia) and forensic samples, the **BDSM** definition in the masochism and sadism text, **emotional congruence with children** under pedophilic disorder, and updated language for **gender** and for people who have offended. Confirm details against pp. 779–801." },
            { type: "update", kind: "post", year: "2026", title: "No code changes through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026); APA DSM-5-TR coding and criteria updates, September 2022–2025; checked October 27, 2026", text: "F65.0, F65.1, F65.2, F65.3, F65.4, F65.51, F65.52, F65.81, F65.89 and F65.9 were **not changed** in the October 2024, 2025 or 2026 ICD-10-CM updates, and none of the APA’s DSM-5-TR updates touches this chapter. The codes printed in the manual are still current. Check the official tabular list in force on the date of service." },
            { type: "callout", kind: "exam", title: "The three exceptions examiners love", text: "**Age:** only voyeuristic disorder (**18**) and pedophilic disorder (**16, and 5 years older**) have an age criterion. **Remission:** every disorder has the **in full remission** and **in a controlled environment** specifiers **except pedophilic disorder**. **Criterion B:** masochism, fetishistic and transvestic disorders need **distress or impairment**; the courtship disorders and sadism can be met by **acting on urges with a nonconsenting person** instead." }
          ]
        },
        {
          id: "s19-paraphilia-vs-disorder",
          title: "Paraphilia versus paraphilic disorder",
          pages: "779–780",
          blocks: [
            { type: "defs", title: "The two definitions (pp. 779–780)", items: [
              ["Paraphilia", "Any **intense and persistent** sexual interest other than interest in genital stimulation or preliminary fondling with **physically mature, phenotypically normal, consenting** human partners. Where “intense” is hard to judge (people who are very old or medically ill and have little sexual interest of any kind), a paraphilia can be defined as an interest **equal to or greater than** the person’s nonparaphilic interests. Some paraphilias are better described as **preferential** than intense."],
              ["Paraphilic disorder", "A paraphilia that is **currently causing distress or impairment** to the person, **or** whose satisfaction has involved **harm or risk of harm to others**. The paraphilia is **necessary but not sufficient**; on its own it does not call for treatment."],
              ["Activity versus target", "Some paraphilias are about the **erotic activity** (spanking, whipping, binding, strangling another person, or an interest in such acts that rivals copulation); others are about the **erotic target** (children, corpses, amputees, animals, objects such as shoes or rubber). A person’s **pornography** choices often mirror the pattern (p. 779)."]
            ] },
            { type: "flow", title: "From interest to diagnosis (p. 780)", vertical: true, steps: [
              ["Criterion A", "The qualitative nature of the paraphilia: what the arousal is about, for at least 6 months"],
              ["Criterion B", "The negative consequences: distress, impairment, or harm or risk of harm to others"],
              ["Diagnosis", "Reserved for people who meet both A and B: a paraphilic disorder"],
              ["A without B", "The person “has the paraphilia” but not the disorder, for example a benign paraphilia found while assessing something else"]
            ], note: "The word **diagnosis** is deliberately reserved for A + B; a paraphilia discovered incidentally is described, not diagnosed." },
            { type: "list", title: "Points the introduction makes (p. 780)", items: [
              "Having **two or more paraphilias** is not rare. Sometimes the link is obvious (foot and shoe fetishism); sometimes it is coincidental or reflects a general vulnerability in psychosexual development.",
              "**Separate comorbid diagnoses** are warranted when more than one paraphilia is causing suffering or harm.",
              "Because diagnosis has two prongs, **severity** can be rated two ways: how **strong the paraphilia** is, or how **serious its consequences** are.",
              "The distress and impairment of Criterion B must be the result of the paraphilia, not of some other factor; but the resulting depression, anxiety, guilt, poor work history and damaged relationships are not unique and can be measured with general functioning or quality-of-life scales."
            ] },
            { type: "callout", kind: "pearl", title: "Why this matters", text: "A man who is aroused by leather, has a willing partner, is not distressed and harms no one has a **fetishistic interest**, not fetishistic disorder. The same logic protects consenting **BDSM** practitioners (p. 792) and people with unusual but private interests. The diagnosis is about **consequences**, not about how unusual the interest is." },
            { type: "case", title: "Clinical vignette: the incidental finding", text: "A 38-year-old man being assessed for panic disorder mentions, when asked about his sexual history, that for many years he has been most aroused by women’s high-heeled shoes, which his wife happily includes in their sex life. He is not troubled by it and has never had any problem because of it.", point: "Criterion A for a fetishistic interest is present, Criterion B is not. He **has the paraphilia** (fetishism) but **no paraphilic disorder**; it is noted in the history and not diagnosed (p. 780)." }
          ]
        },
        {
          id: "s19-shared-rules",
          title: "Rules shared across the eight disorders",
          pages: "780–801",
          blocks: [
            { type: "p", text: "The criteria sets are built to a template. Learning the template once, then the exceptions, is the fastest way through the chapter." },
            { type: "table", caption: "The template and its exceptions", head: ["Element", "Standard form", "Exceptions"], rows: [
              ["Duration", "**At least 6 months** of recurrent, intense arousal shown by **fantasies, urges or behaviors**", "None: all eight use 6 months"],
              ["Criterion B", "**Acted on** with a **nonconsenting** person, **or** clinically significant distress or impairment", "**Masochism, fetishistic, transvestic:** distress or impairment **only**. **Pedophilic:** acted on, **or marked distress or interpersonal difficulty**"],
              ["Age", "No minimum age", "**Voyeuristic:** 18 or older (Criterion C). **Pedophilic:** 16 or older **and** 5 years older than the child (Criterion C)"],
              ["In a controlled environment", "Living in an institution or other setting where the opportunity is **restricted**", "**Not available** for pedophilic disorder"],
              ["In full remission", "**5 years** in an **uncontrolled** environment with no acting on urges with a nonconsenting person **and** no distress or impairment", "**Not available** for pedophilic disorder; the distress-only disorders define it by the absence of distress or impairment alone"],
              ["Own specifiers", "", "Exhibitionistic (**target age**), masochism (**asphyxiophilia**), pedophilic (**exclusive/nonexclusive, sex attracted to, limited to incest**), fetishistic (**body part, object, other**), transvestic (**with fetishism, with autogynephilia**)"]
            ] },
            { type: "defs", title: "Reading the shared rules (pp. 781–794)", items: [
              ["Remission is about consequences", "The **in full remission** specifier says nothing about whether the paraphilia itself is still present; the interest may persist after behaviors and distress have stopped (pp. 781, 783, 786). It needs **5 years** without acting on urges or distress or impairment, and those years must be in an **uncontrolled** environment."],
              ["Controlled environment", "Meant mainly for people in **institutional or other settings** where the opportunity for the behavior is limited, such as prison or a secure hospital; five quiet years in custody do **not** make a remission."],
              ["Disclosing and nondisclosing people", "For the disorders with a victim (voyeuristic, exhibitionistic, frotteuristic, sadism, pedophilic), the criteria apply both to people who **admit** the interest and to those who **deny** it despite substantial objective evidence. A person who denies urges but has acted **repeatedly** can be diagnosed: the recurrent behavior supports Criterion A and the harm to others satisfies Criterion B."],
              ["What “recurrent” means", "It may be read as **multiple victims on separate occasions**, which raises confidence that the behavior is paraphilically motivated. **Fewer victims** can qualify if there were multiple occasions with the same person or corroborating evidence of a preferential interest. Multiple victims are **sufficient but not necessary**: an acknowledged intense interest also meets Criterion A."],
              ["Admitting people without distress", "Someone who acknowledges the interest, reports no distress (no anxiety, obsessions, guilt or shame), functions well and whose history shows they do not act on it has the **sexual interest**, not the disorder."]
            ] },
            { type: "ladder", title: "Time rules in the chapter", ticks: [[0, "0"], [10, "6 mo"], [100, "5 yr"]], rows: [
              { label: "Criterion A (all eight)", from: 0, to: 10, color: "guide", span: "≥6 months" },
              { label: "In full remission", from: 0, to: 100, color: "case", span: "≥5 years, uncontrolled environment" }
            ], note: "The 5-year clock runs only in an **uncontrolled** environment. Pedophilic disorder has no remission specifier at all." },
            { type: "callout", kind: "caution", title: "Course language the manual repeats", text: "For most of the disorders the manual says the same things: persistence over time is **unclear**; distress or impairment may **change over time** with or without treatment, as may psychiatric comorbidity, **hypersexuality** and sexual impulsivity; and **advancing age** tends to bring **less** paraphilic preference and behavior (pp. 782, 784, 787, 789, 791, 794). The paraphilia itself is often described as **lifelong** (sadism p. 791, pedophilia p. 794)." },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A man convicted of exposing himself to strangers on **four** occasions over 2 years denies any sexual urge and calls every episode accidental. Can exhibitionistic disorder be diagnosed? **Yes.** Recurrent exposure to multiple unsuspecting people on separate occasions supports Criterion A, and the harm to others satisfies Criterion B, regardless of his self-report (p. 784)." }
          ]
        }
      ]
    },
    {
      title: "Courtship disorders",
      sections: [
        {
          id: "s19-voyeuristic",
          title: "Voyeuristic disorder",
          pages: "780–783",
          blocks: [
            { type: "criteria", title: "Voyeuristic disorder in brief", code: "F65.3", pages: "780", items: [
              ["A", "For at least **6 months**, recurrent, intense sexual arousal from **watching an unsuspecting person** who is naked, undressing or engaged in sexual activity, shown by fantasies, urges or behaviors."],
              ["B", "The person has **acted on** the urges with a **nonconsenting** person, **or** the urges or fantasies cause clinically significant distress or impairment."],
              ["C", "The person experiencing the arousal or acting on it is **at least 18 years old**."]
            ], specifiers: [["Controlled environment", "Opportunities to watch are restricted (institutional settings)"], ["Full remission", "No acting on urges with a nonconsenting person and no distress or impairment for **5 years** in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 780–781)", items: [
              ["Unsuspecting", "The person watched does not know; watching a partner who agrees to be watched is not voyeurism."],
              ["Why 18", "Puberty and adolescence bring more sexual curiosity. The age floor exists to avoid **pathologizing normal adolescent** interest (p. 781); it is the only courtship disorder with a minimum age."],
              ["Nondisclosure", "Someone caught repeatedly peeping who calls each episode accidental and denies any urge can still be diagnosed: the repeated behavior shows Criterion A and the harm shows Criterion B (p. 781)."],
              ["Remission", "Does not mean the voyeuristic interest has gone; only that behavior and distress have stopped for 5 years outside a controlled setting."]
            ] },
            { type: "table", caption: "Numbers to know (pp. 781–782)", head: ["Fact", "Figure"], rows: [
              ["Prevalence of the full disorder", "**Unknown**"],
              ["Voyeuristic acts", "The **most common** of the potentially law-breaking sexual behaviors"],
              ["Quebec survey, lifetime voyeuristic behavior", "**34.5%** (men 50.3%, women 21.2%); “intense desire” 9.6%, “persistent behavior” 2.1%"],
              ["Male-to-female ratio for acts", "About **2:1** (Quebec) to **3:1** (Sweden); very uncommon in women in clinical settings"],
              ["Incarcerated sex offenders, Austria (n = 1,346)", "Voyeuristic disorder in **3.7%**"]
            ] },
            { type: "list", title: "Course, risk and comorbidity (pp. 782–783)", items: [
              "Men usually first notice the interest in **adolescence**; the diagnosis still waits until 18.",
              "Suggested environmental risk factors: **childhood sexual abuse**, **substance misuse** and **sexual preoccupation/hypersexuality**, with causality and specificity unclear. Anything that raises the risk of voyeurism raises the risk of the disorder.",
              "Comorbidity data come mostly from men suspected or convicted of peeping, so they may not apply to everyone: **hypersexuality** and other paraphilic disorders (especially **exhibitionistic**), depressive, bipolar, anxiety and substance use disorders, **ADHD**, conduct disorder and **antisocial personality disorder**."
            ] },
            { type: "case", title: "Clinical vignette: the apartment-block camera", text: "A 29-year-old man is referred after being caught, for the third time in a year, filming through the bathroom window of a neighboring apartment with a phone camera. Two different households were involved. He says he was “just testing the camera” and denies any sexual interest. He reports no distress about anything.", point: "Repeated secret watching of **unsuspecting** people on **separate occasions** with **more than one victim** supports Criterion A; the harm to others meets Criterion B; he is over 18. **Voyeuristic disorder (F65.3)** can be diagnosed despite his denial (p. 781)." }
          ]
        },
        {
          id: "s19-exhibitionistic",
          title: "Exhibitionistic disorder",
          pages: "783–785",
          blocks: [
            { type: "criteria", title: "Exhibitionistic disorder in brief", code: "F65.2", pages: "783", items: [
              ["A", "For at least **6 months**, recurrent, intense sexual arousal from **exposing the genitals to an unsuspecting person**, shown by fantasies, urges or behaviors."],
              ["B", "**Acted on** with a **nonconsenting** person, **or** clinically significant distress or impairment from the urges or fantasies."]
            ], specifiers: [["Target: children", "Aroused by exposing to **prepubertal children**"], ["Target: adults", "Aroused by exposing to **physically mature** individuals"], ["Target: both", "Aroused by exposing to children and to mature individuals"], ["Controlled environment", "Opportunity to expose is restricted"], ["Full remission", "5 years without acting on urges or distress, in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 783–784)", items: [
              ["The subtypes", "They are set by the **age or physical maturity** of the people the person prefers to expose to. Their purpose is to make the clinician notice when children are targeted so that a **co-occurring pedophilic disorder is not missed**. Exposure to children does **not** rule out an additional pedophilic diagnosis."],
              ["No minimum age", "Unlike voyeuristic disorder, there is **no age criterion**, though the manual warns that exposure is hard to separate from age-appropriate sexual curiosity in adolescents (p. 784)."],
              ["Nondisclosure", "Repeated exposure to unsuspecting people on separate occasions supports the diagnosis even when every episode is called accidental (p. 784)."],
              ["Admitting without distress", "A person who acknowledges the interest, is not distressed or impaired, and whose history shows no acting on it has **exhibitionistic sexual interest**, not the disorder."]
            ] },
            { type: "table", caption: "Numbers to know (p. 784)", head: ["Fact", "Figure"], rows: [
              ["Prevalence of the full disorder", "**Unknown**; highly unusual in women"],
              ["Single arousing exhibitionistic acts in women", "Up to **half** as often as in men"],
              ["Quebec survey, lifetime exhibitionistic behavior", "**30.9%** (men 32.6%, women 29.4%); “intense desire” 4.8%, “persistent behavior” 0.8%"],
              ["Swedish estimate of lifetime disorder", "**4.1%** of men, **2.1%** of women"]
            ] },
            { type: "list", title: "Course, risk and comorbidity (pp. 784–785)", items: [
              "Men often report first noticing the interest in **adolescence**, somewhat **later** than ordinary sexual interest in women or men develops. Persistence over time is little known.",
              "Risk factors for the disorder in men with the preference: **antisocial history or antisocial personality disorder**, **alcohol misuse** and a **pedophilic sexual preference**, because these raise the risk of sexual recidivism in exhibitionistic offenders. Suggested environmental factors: childhood **sexual and emotional abuse** and hypersexuality.",
              "Comorbidity (mostly from convicted men): depressive, bipolar, anxiety and substance use disorders, hypersexuality, ADHD, other paraphilic disorders and antisocial personality disorder."
            ] },
            { type: "callout", kind: "exam", title: "Exam twist: one diagnosis or two?", text: "A man exposes himself **only** to prepubescent children for 2 years. He may have **both** exhibitionistic disorder (sexually aroused by exposing to prepubertal children) **and** pedophilic disorder. A man who exposes himself to **anyone, regardless of age**, may need **only** exhibitionistic disorder (p. 795)." },
            { type: "case", title: "Clinical vignette: the self-referred commuter", text: "A 34-year-old man asks for help because for about a year he has had strong, recurring urges to expose himself to women at the bus terminal. He has never done so, but he thinks about it daily, avoids the terminal, has started arriving late for work and feels ashamed. He has no other paraphilic interests.", point: "Criterion A is met by **urges and fantasies**; Criterion B is met by **distress and impairment** even though he has not acted. **Exhibitionistic disorder (F65.2), sexually aroused by exposing genitals to physically mature individuals** (p. 783)." }
          ]
        },
        {
          id: "s19-frotteuristic",
          title: "Frotteuristic disorder",
          pages: "785–788",
          blocks: [
            { type: "criteria", title: "Frotteuristic disorder in brief", code: "F65.81", pages: "785–786", items: [
              ["A", "For at least **6 months**, recurrent, intense sexual arousal from **touching or rubbing against a nonconsenting person**, shown by fantasies, urges or behaviors."],
              ["B", "**Acted on** with a **nonconsenting** person, **or** clinically significant distress or impairment from the urges or fantasies."]
            ], specifiers: [["Controlled environment", "Opportunity to touch or rub against others is restricted"], ["Full remission", "5 years without acting on urges or distress, in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 786–787)", items: [
              ["Nonconsenting, not unsuspecting", "The frotteuristic criteria say **nonconsenting**; the person touched may well notice. The behavior classically happens in **crowds** (the manual’s example is a crowded subway car, p. 787)."],
              ["Nondisclosure", "Repeated touching of unwilling people on separate occasions supports the diagnosis even when called unintentional and nonsexual (p. 786)."],
              ["No minimum age", "None; but at younger ages frotteuristic disorder can be hard to tell from **conduct-disordered** behavior without a sexual motive (p. 787)."],
              ["Specifier wording", "The frotteuristic text calls it the “in remission” specifier (p. 786); the criteria box uses the standard “in full remission” wording."]
            ] },
            { type: "table", caption: "Numbers to know (pp. 786–787)", head: ["Fact", "Figure"], rows: [
              ["Prevalence of the full disorder", "**Unknown**"],
              ["Frotteuristic acts, adult men (US and Canada)", "Up to **30%**; “intense desire” 3.8%, “persistent behavior” 0.7%"],
              ["Outpatient men with paraphilic disorders and hypersexuality", "**10%–14%** meet criteria for frotteuristic disorder"],
              ["Women", "Prevalence likely **lower**"]
            ] },
            { type: "list", title: "Course, risk and comorbidity (pp. 787–788)", items: [
              "Men often first notice the interest in **late adolescence or emerging adulthood**; children and adolescents can also touch or rub against unwilling others without the disorder.",
              "Nonspecific risk factors: **nonsexual antisocial behavior** and sexual preoccupation/hypersexuality, with uncertain causality.",
              "Comorbidity (mostly men suspected or convicted of sexual touching): **hypersexuality** and other paraphilic disorders, especially **exhibitionistic and voyeuristic**; conduct disorder, antisocial personality disorder, depressive, bipolar, anxiety and substance use disorders."
            ] },
            { type: "case", title: "Clinical vignette: the jeepney passenger", text: "A 26-year-old man is brought by police after three women on different days complained that he pressed his groin against them on crowded jeepneys. He admits he has had these urges for 2 years and that the crowded ride is the only way he becomes aroused. He says he is not bothered by the urges, only by being caught.", point: "Six months of urges and behaviors (Criterion A) plus **acting on them with nonconsenting people** (Criterion B): **frotteuristic disorder (F65.81)**. His lack of distress does not matter once he has acted (p. 786)." }
          ]
        },
        {
          id: "s19-courtship-compare",
          title: "The courtship disorders side by side, and their shared differential",
          pages: "782–788",
          blocks: [
            { type: "table", caption: "Three courtship disorders compared", head: ["", "Voyeuristic", "Exhibitionistic", "Frotteuristic"], rows: [
              ["Code", "F65.3", "F65.2", "F65.81"],
              ["Criterion A", "Watching an **unsuspecting** person naked, undressing or having sex", "Exposing genitals to an **unsuspecting** person", "Touching or rubbing against a **nonconsenting** person"],
              ["Minimum age", "**18**", "None", "None"],
              ["Own specifier", "None", "**Target age** (children / mature / both)", "None"],
              ["Typical onset awareness", "Adolescence", "Adolescence (later than normative interest)", "Late adolescence or emerging adulthood"],
              ["Survey behavior (Quebec or US/Canada)", "34.5% lifetime", "30.9% lifetime", "Up to 30% of adult men"],
              ["Most-linked paraphilic comorbidity", "Exhibitionistic", "Other paraphilic disorders", "Exhibitionistic and voyeuristic"]
            ] },
            { type: "h", text: "The shared differential (pp. 782, 785, 787)" },
            { type: "defs", title: "The same three headings appear under each courtship disorder", items: [
              ["The paraphilia without the disorder", "Recurrent intense arousal to the activity, but **no acting on it** with an unsuspecting or nonconsenting person and **no distress or impairment**: describe the interest, do not diagnose a disorder."],
              ["Sexual disinhibition from another disorder", "A **manic episode**, [[dx:major-ncd|major neurocognitive disorder]], [[dx:idd|intellectual developmental disorder]], [[dx:personality-change-amc|personality change due to another medical condition]], **substance intoxication** or [[dx:schizophrenia]] can loosen judgment and impulse control and produce peeping, exposing or touching. Diagnose the paraphilic disorder **only if the behavior also occurs outside** these states."],
              ["Conduct disorder and antisocial personality disorder", "[[dx:conduct-disorder|Conduct disorder]] in adolescents and [[dx:antisocial-pd|antisocial personality disorder]] bring a **broader** pattern of norm-breaking, and the **specific sexual interest** in watching, exposing or touching is usually **missing**."]
            ] },
            { type: "callout", kind: "pearl", title: "A practical screen (app guidance)", text: "When a sexual offense is the reason for referral, ask three things in order: Is the behavior **repeated** across occasions or victims? Does it happen **only** during intoxication, mania, psychosis or cognitive decline? Is there a **specific erotic interest** in the act, or is it one of many antisocial acts? Repeated, outside those states, with a specific interest: think paraphilic disorder." },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 72-year-old man with [[dx:ncd-frontotemporal|frontotemporal neurocognitive disorder]] has begun exposing himself to carers; he had no such behavior before his illness. **No exhibitionistic disorder**: the behavior occurs only in the context of the neurocognitive disorder (p. 785)." }
          ]
        }
      ]
    },
    {
      title: "Algolagnic disorders",
      sections: [
        {
          id: "s19-masochism",
          title: "Sexual masochism disorder",
          pages: "788–790",
          blocks: [
            { type: "criteria", title: "Sexual masochism disorder in brief", code: "F65.51", pages: "788", items: [
              ["A", "For at least **6 months**, recurrent, intense sexual arousal from **being humiliated, beaten, bound or otherwise made to suffer**, shown by fantasies, urges or behaviors."],
              ["B", "The fantasies, urges or behaviors cause clinically significant **distress or impairment**."]
            ], specifiers: [["With asphyxiophilia", "The person practices achieving arousal through **restriction of breathing**"], ["Controlled environment", "Opportunity for masochistic behavior is restricted"], ["Full remission", "No distress or impairment for **5 years** in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 788–789)", items: [
              ["Distress or impairment only", "There is **no nonconsenting-person arm**: the person suffers, not a victim. Without Criterion B, consensual masochistic activity is a sexual interest, not a disorder."],
              ["Who the criteria are for", "Unlike the courtship disorders, the masochism criteria are written for people who **freely admit** the interest (p. 788); there is no nondisclosing route."],
              ["Asphyxiophilia", "The only disorder-specific specifier. It flags the practice with the highest risk of **accidental death** (p. 789)."],
              ["Remission here", "Defined purely by **5 years without distress or impairment** in an uncontrolled environment."]
            ] },
            { type: "list", title: "Features, prevalence and course (pp. 788–789)", items: [
              "Heavy use of **pornography** with masochistic themes is sometimes an associated feature.",
              "People who practice sadomasochism may show **reduced pain sensitivity**; whether this holds for people with the disorder is unknown.",
              "The widely assumed link to **childhood sexual abuse** is **not supported** by sufficient evidence.",
              "Prevalence of the disorder is **unknown**. In Australia, **2.2% of men and 1.3% of women** reported BDSM involvement in the past 12 months.",
              "Community samples report a **mean onset of 19.3 years** for masochism, with earlier onsets (puberty, even childhood) of masochistic fantasies also reported. Persistence over time is little known; advancing age tends to reduce the preference and behavior."
            ] },
            { type: "callout", kind: "culture", title: "Culture check (p. 789)", text: "Painful **religious or spiritual rituals**, such as suspension from hooks, self-flagellation and other forms of self-mortification practiced collectively, must be distinguished from sadomasochistic behavior done for sexual arousal. Whether sexual arousal plays any part in such rituals is unknown." },
            { type: "callout", kind: "caution", title: "Suicide and safety (p. 789)", text: "The disorder’s link to suicidal thoughts or behavior is **unknown**, but in a study of **321 adults** involved in BDSM, **stigma-related shame and guilt** were associated with suicidal ideation. People reporting an interest in **asphyxiophilia** show more sexual distress and psychological maladjustment, and masochistic practice carries a risk of **accidental death** from asphyxiophilia or other autoerotic procedures; how many of those who die meet criteria for the disorder is unknown." },
            { type: "list", title: "Differential and comorbidity (pp. 789–790)", items: [
              "**Sexual masochism** without distress or impairment: no diagnosis.",
              "“Forced cross-dressing” fantasies in which the arousal comes from the **domination or humiliation**, with distress or impairment, are diagnosed as **sexual masochism disorder**, not fetishistic or transvestic disorder (p. 798).",
              "Comorbidity data come mostly from people in treatment: other paraphilic disorders such as **transvestic fetishism**, and some indication of an association with [[dx:borderline-pd|borderline personality disorder]] from a **small clinical sample of women**."
            ] },
            { type: "case", title: "Clinical vignette: the breath-play worry", text: "A 24-year-old man presents in distress. For 3 years his masturbation has depended on fantasies of being bound and humiliated, and for the past year he has used a belt around his neck to restrict his breathing during these sessions. He has fainted twice, is frightened, and has withdrawn from dating because he cannot become aroused any other way.", point: "Six months of masochistic fantasies and behaviors (Criterion A) with **distress and impairment** (Criterion B): **sexual masochism disorder, with asphyxiophilia (F65.51)**. The specifier also flags the risk of accidental death (pp. 788–789)." }
          ]
        },
        {
          id: "s19-sadism",
          title: "Sexual sadism disorder",
          pages: "790–792",
          blocks: [
            { type: "criteria", title: "Sexual sadism disorder in brief", code: "F65.52", pages: "790", items: [
              ["A", "For at least **6 months**, intense, recurrent arousal from another person’s **physical or psychological suffering**, shown by fantasies, urges or behaviors."],
              ["B", "**Acted on** with a **nonconsenting** person, **or** clinically significant distress or impairment from the urges or fantasies."]
            ], specifiers: [["Controlled environment", "Opportunity for sadistic sexual behavior is restricted"], ["Full remission", "No acting on urges with a nonconsenting person and no distress or impairment for **5 years** in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 790–791)", items: [
              ["Admitting and denying people", "The criteria apply to **admitting individuals** and to those who deny any interest despite substantial evidence. An admitting person with no distress, no impairment and a history of **never acting on it with nonconsenting people** has sadistic sexual interest, not the disorder."],
              ["Recurrent", "May be read as **multiple victims on separate occasions**; fewer victims qualify with repeated acts against the same person or corroborating evidence of a preferential interest; an acknowledged intense interest also suffices."],
              ["Consent is the hinge", "Consensual sadistic activity without distress or impairment is **not** a disorder. The manual notes that most people active in **community BDSM networks** are not dissatisfied with their interests and would not meet criteria (p. 792)."]
            ] },
            { type: "table", caption: "Numbers to know (p. 791)", head: ["Fact", "Figure"], rows: [
              ["Prevalence of the disorder", "**Unknown**; data mostly from forensic settings"],
              ["Civilly committed sexual offenders, United States", "Sexual sadism disorder in **less than 10%**"],
              ["Sexually motivated homicides", "Sadistic behavior in about **one-third**"],
              ["Australia, BDSM in the past year", "2.2% of men, 1.3% of women"],
              ["Finland, lifetime sexually sadistic behavior", "**2.7%** of men, **2.3%** of women"],
              ["Forensic samples", "Almost exclusively **men**"]
            ] },
            { type: "list", title: "Course, culture and suicide (pp. 791)", items: [
              "Information on course is **extremely limited**. Sadistic **preference** is probably **lifelong**; the **disorder** fluctuates with distress and with the propensity to harm nonconsenting others. Advancing age tends to reduce the preference and behavior. Many BDSM participants became aware of their interest in their **teens**.",
              "The **legal status** of sadistic sexual behavior varies across countries, so distress (cultural acceptance) and impairment (legal consequences) can vary with it.",
              "Suicide link **unknown**; the same **321-adult BDSM study** found stigma-related shame and guilt associated with suicidal ideation."
            ] },
            { type: "defs", title: "Differential diagnosis (p. 792)", items: [
              ["Sexual sadism without the disorder", "No acting on urges with a nonconsenting person and no distress or impairment: no diagnosis."],
              ["Pain inflicted during a sexual assault", "Pain caused **instrumentally**, in the act of rape or while subduing or restraining a victim, does **not** by itself indicate sexual sadism disorder. Look for evidence that the suffering itself is arousing: an **admission** of arousal by pain, a preference for **sadistic pornography**, or **violence beyond what the assault required**."],
              ["Conduct disorder and antisocial personality disorder", "Physical cruelty and forced sex can occur in [[dx:conduct-disorder|conduct disorder]] or [[dx:antisocial-pd|antisocial personality disorder]] **without** an underlying arousal pattern; that alone is not sadism. When both sets of criteria are met, **both** diagnoses may be given."]
            ] },
            { type: "callout", kind: "key", title: "Finnish co-occurrence figures (p. 792)", text: "Among people who had engaged in sexually sadistic behavior, other paraphilic behaviors co-occurred in descending order: **masochism 68.8%**, **voyeurism 33.3%**, **transvestic fetishism 9.2%**, **exhibitionism 6.4%**. Comorbidity data otherwise come from convicted men and may not apply to people diagnosed on the basis of distress alone." },
            { type: "case", title: "Clinical vignette: the forensic evaluation", text: "A 41-year-old man is evaluated after conviction for two sexual assaults 3 years apart. In both, the injuries went far beyond what was needed to overpower the victims, and investigators found a large collection of pornography centered on terrified, suffering victims. He denies any sexual interest in suffering and says the injuries happened “in the struggle.”", point: "Denial does not prevent the diagnosis. **Recurrent** acts against **nonconsenting** people, violence **beyond what the assault required**, and a **sadistic pornography preference** are the manual’s own markers that the suffering was arousing: **sexual sadism disorder (F65.52)** (pp. 790–792)." }
          ]
        },
        {
          id: "s19-bdsm",
          title: "BDSM, consent and the line between interest and disorder",
          pages: "788–792",
          blocks: [
            { type: "p", text: "The manual defines **BDSM** (bondage-domination-sadism-masochism) as a broad range of activities practiced by people with masochistic or sadistic interests and by others with similar interests: restraints, discipline, spanking, slapping, **sensory deprivation** (blindfolds) and **dominance–submission role play** with themes such as master and enslaved person, owner and pet, or kidnapper and victim (pp. 788, 791). The definition appears under both algolagnic disorders because it describes a **community practice**, not a diagnosis." },
            { type: "compare", title: "Interest, disorder, or crime?", items: [
              { title: "Sexual interest (no diagnosis)", color: "guide", points: ["Consensual BDSM with **no distress or impairment**.", "The manual says most people in community BDSM networks would **not** meet criteria (p. 792)."] },
              { title: "Sexual masochism disorder", color: "hy", points: ["Masochistic arousal **plus** distress or impairment.", "Add **with asphyxiophilia** when breathing restriction is practiced."] },
              { title: "Sexual sadism disorder", color: "case", points: ["Sadistic arousal **acted on with a nonconsenting person**, or with distress or impairment.", "Consent is what separates the disorder from the interest."] },
              { title: "Sexual assault without sadism", color: "clin", points: ["Pain that is **instrumental** to the assault, with no evidence that suffering itself arouses.", "Think conduct disorder or antisocial personality disorder rather than a paraphilic disorder (p. 792)."] }
            ] },
            { type: "callout", kind: "caution", title: "Where the danger lies (pp. 789, 800)", text: "The manual’s safety concern is **asphyxiophilia**: people reporting it have more sexual distress and maladjustment, masochistic practice carries a risk of accidental death, and **autoerotic asphyxia** is associated with **transvestic** behavior in a substantial share of fatal cases. Ask directly about breath restriction whenever masochistic or transvestic interests come up." },
            { type: "callout", kind: "pearl", title: "Outside the DSM: ICD-11 draws the line differently", text: "ICD-11 keeps paraphilic disorders that involve **nonconsenting people** (exhibitionistic, voyeuristic, pedophilic, **coercive sexual sadism**, frotteuristic, and an “other” category involving nonconsenting individuals) and groups solitary or consensual patterns into one residual category that counts only with **marked distress or risk of injury or death**. It **dropped** fetishism, fetishistic transvestism and sadomasochism as diagnoses. DSM-5-TR keeps all eight; its safeguard is Criterion B." }
          ]
        }
      ]
    },
    {
      title: "Pedophilic disorder",
      sections: [
        {
          id: "s19-pedophilic-criteria",
          title: "Pedophilic disorder: criteria and specifiers",
          pages: "792–793",
          blocks: [
            { type: "criteria", title: "Pedophilic disorder in brief", code: "F65.4", pages: "792–793", items: [
              ["A", "For at least **6 months**, recurrent, intense sexually arousing fantasies, urges or behaviors about sexual activity with a **prepubescent** child (generally **13 or younger**)."],
              ["B", "The person has **acted on** these urges, **or** the urges or fantasies cause **marked distress or interpersonal difficulty**."],
              ["C", "The person is **at least 16** and **at least 5 years older** than the child(ren) involved in Criterion A.", [], "Do not include a person in **late adolescence** in a continuing sexual relationship with a **12- or 13-year-old**."]
            ], specifiers: [["Exclusive type", "Attracted **only** to children"], ["Nonexclusive type", "Also attracted to physically mature people"], ["Attracted to", "**Males**, **females**, or **both**"], ["Limited to incest", "Attraction confined to family"]], note: "There is **no** “in a controlled environment” and **no** “in full remission” specifier for pedophilic disorder." },
            { type: "defs", title: "Reading the criteria (pp. 792–794)", items: [
              ["Prepubescent, not an exact age", "The guide of 13 or younger is **approximate**: puberty starts at different ages, has been starting **earlier** over time, and varies across ethnic groups and cultures (p. 793). Pubertal status is what matters."],
              ["Criterion B is worded differently", "It says **acted on** the urges, or **marked distress or interpersonal difficulty**, not the chapter’s usual “clinically significant distress or impairment” wording."],
              ["Criterion C, two parts", "Age **16 or more** and a gap of **5 or more years**. A 15-year-old cannot receive the diagnosis; a 17-year-old with a 13-year-old partner in an ongoing relationship is excluded by the note."],
              ["Acting on without contact", "Behaviors include sexual interactions with children **with or without physical contact**; exposing oneself to children counts (p. 793)."],
              ["Child sexual abuse material", "Use of sexual images of prepubescent children is typical of pedophilic interest and informs **Criterion A**, but on its own, without in-person sexual interaction with a child, it is **not enough for Criterion B** (p. 793)."],
              ["No remission specifier", "The only disorder in the chapter without the shared specifiers."]
            ] },
            { type: "callout", kind: "mnemonic", title: "Memory hook: 6-13-16-5", text: "**6** months of interest in children **13** or younger, in a person at least **16** years old and at least **5** years older than the child." },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 19-year-old is referred after a report of sexual contact with his 13-year-old girlfriend in a relationship of 8 months. Pedophilic disorder? The note under Criterion C excludes a person in **late adolescence** in a **continuing relationship with a 12- or 13-year-old** (p. 793). Whether the law treats the relationship as an offense is a separate question from the diagnosis (outside the DSM: in the Philippines, RA 11648 of 2022 sets the age of consent at 16, with a close-in-age exemption that never applies under 13)." },
            { type: "case", title: "Clinical vignette: the self-referred teacher", text: "A 31-year-old male teacher asks for confidential help. Since his late teens he has been sexually attracted mainly to boys aged about 8 to 11, with daily fantasies and masturbation to these fantasies. He has never had sexual contact with a child and has never used sexual images of children. He is tormented by guilt, has stopped socializing and recently resigned from a school post because he no longer trusts himself.", point: "Criterion A (6 months of fantasies and urges), Criterion B (**marked distress** and interpersonal difficulty), Criterion C (31, far more than 5 years older): **pedophilic disorder, exclusive type, sexually attracted to males (F65.4)**, without any offense. A person with the same attraction who was **not distressed and had never acted** would have pedophilia but not the disorder (p. 793)." }
          ]
        },
        {
          id: "s19-pedophilic-features",
          title: "Pedophilic disorder: features, course, risk and markers",
          pages: "793–795",
          blocks: [
            { type: "defs", title: "Diagnostic features (pp. 793–794)", items: [
              ["Disclosing", "Openly reports an intense interest in children, sometimes stating that it **equals or exceeds** interest in physically mature people. With marked distress or psychosocial difficulty, the disorder; with no guilt, shame or anxiety, no functional limit, and a history of never acting, **pedophilic interest only**."],
              ["Denying", "Known to have sexually approached **multiple children on separate occasions**, denies any urge and calls contact accidental, or admits past acts but denies a sustained interest. Can still be diagnosed with **recurrent behavior over 6 months** (A) plus having **acted** or interpersonal difficulty (B). Multiple victims are sufficient but not necessary."],
              ["Separating offenders with and without the disorder", "Factors pointing to pedophilic disorder in a person who has offended against a child: **self-reported interest** in children, **use of child pornography**, **multiple** child victims, **boy** victims, and **unrelated** child victims (p. 793)."],
              ["Emotional congruence with children", "An emotional and cognitive affinity with children: preferring their company, feeling more in common with them than with adults, choosing jobs or volunteer roles to be near them. Linked to pedophilic interest and to the likelihood of **reoffending** (p. 794)."]
            ] },
            { type: "list", title: "Prevalence and course (p. 794)", items: [
              "Prevalence of the full disorder is **unknown**; likely **under 3%** of men in international studies. In women it is even less certain but probably a **small fraction** of the male rate.",
              "Men often report becoming aware of the interest **around puberty**, the same window in which other men notice their interest in adults. Diagnosing at that age is problematic because of the difficulty separating it from age-appropriate interest in peers, hence Criterion C.",
              "**Pedophilia per se** appears **lifelong**; the **disorder** fluctuates because distress, impairment and the propensity to act change over time, with or without treatment.",
              "Adults may report that awareness of the interest **preceded** any behavior with children or any self-identification. **Advanced age** reduces the frequency of sexual behavior involving children as it does other sexual behavior."
            ] },
            { type: "defs", title: "Risk and prognostic factors (pp. 794–795)", items: [
              ["Temperamental", "Pedophilia **interacts with antisocial traits** (callousness, impulsivity, risk-taking): men with both are more likely to act, so [[dx:antisocial-pd|antisocial personality disorder]] is a risk factor for the disorder in men with pedophilia."],
              ["Environmental", "Some men with pedophilia report **childhood sexual abuse**; whether it is causal is unclear."],
              ["Genetic and physiological", "Anything that raises the probability of pedophilia raises the risk of the disorder; some evidence points to **neurodevelopmental perturbation in utero** as raising the probability of pedophilic interest."]
            ] },
            { type: "defs", title: "Diagnostic markers (p. 795)", items: [
              ["Penile plethysmography", "The longest-used and most researched psychophysiological measure, useful when history suggests the disorder but the person denies it. **Sensitivity and specificity vary across sites** because stimuli, procedures and scoring differ."],
              ["Viewing time", "Measures time spent looking at photographs of nude or minimally clothed persons; used especially with self-report."],
              ["Legal caution", "In the United States, possessing sexual images of children **even for diagnostic purposes** may break child pornography law; **audio** descriptions can be used in plethysmography instead."],
              ["The marker is relative", "Across methods, the marker is the **response to child stimuli relative to adult stimuli**, not the absolute response."],
              ["Women", "Laboratory measures have had very little study in women and are not necessarily useful for them."]
            ] },
            { type: "callout", kind: "pearl", title: "Outside the DSM: risk tools are not diagnosis", text: "Actuarial instruments such as **Static-99R** estimate sexual **recidivism risk** in people who have offended; they do not diagnose pedophilic disorder, and the DSM does not rate risk. Keep the two questions separate in reports: **does he meet criteria** (DSM) and **how likely is he to reoffend** (risk assessment)." }
          ]
        },
        {
          id: "s19-pedophilic-differential",
          title: "Pedophilic disorder: differential diagnosis and comorbidity",
          pages: "795–796",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 795–796)", items: [
              ["Pedophilia without the disorder", "Interest in prepubescent children that has **not been acted on** and causes **no marked distress or interpersonal difficulty**: no diagnosis."],
              ["Other paraphilic disorders", "A person with [[dx:exhibitionistic-disorder|exhibitionistic disorder]] who exposes himself **exclusively to prepubescent children** may have **both** disorders; one who exposes himself to people **of any age** may need only exhibitionistic disorder."],
              ["Antisocial personality disorder", "ASPD raises the chance that a person **primarily attracted to adults** will approach a child because the child is **accessible**. Add pedophilic disorder **only** with 6 months of recurrent fantasies, urges or behaviors centered on prepubescent children."],
              ["Substance intoxication", "Disinhibition can likewise lead a person attracted to adults to approach a child."],
              ["Obsessive-compulsive disorder", "Some people present with **ego-dystonic** worries that they might be attracted to children. Interviewing shows **no positive feelings** about the thoughts, **no link to sexual behavior** (no masturbation to them), and often **other intrusive sexual ideas** (for example about sexual orientation): [[dx:ocd]], not pedophilic disorder."]
            ] },
            { type: "compare", title: "Three men who touched a child: which diagnosis?", items: [
              { title: "Pedophilic disorder", color: "case", points: ["A **persistent** (6-month) erotic interest in prepubescent children, often with **multiple, unrelated or boy** victims, child pornography use or self-reported interest."] },
              { title: "ASPD, no pedophilic disorder", color: "guide", points: ["Attracted to adults; the child was **available**; a broad antisocial pattern; no sustained interest in children."] },
              { title: "Intoxication, no pedophilic disorder", color: "hy", points: ["A single disinhibited act while intoxicated in a person attracted to adults, with no pattern outside intoxication."] }
            ] },
            { type: "callout", kind: "exam", title: "Exam twist: the frightened parent", text: "A 28-year-old woman with a history of contamination obsessions is terrified by intrusive images of harming her infant sexually. She finds the thoughts abhorrent, has never been aroused by them, avoids bathing the baby and checks herself constantly. This is **OCD** with intrusive sexual obsessions, not pedophilic disorder: the thoughts are **ego-dystonic**, unconnected to arousal or sexual behavior (p. 796)." },
            { type: "list", title: "Comorbidity (p. 796)", items: [
              "Substance use disorders; depressive, bipolar and anxiety disorders; antisocial personality disorder; other paraphilic disorders.",
              "Caution: the data come largely from **men convicted** of offenses against children and may not apply to people who have never approached a child and are diagnosed on the basis of distress."
            ] },
            { type: "callout", kind: "caution", title: "Outside the DSM: the clinical and legal frame", text: "Treatment follows a **risk-based** framework (WFSBP 2010, updated 2020): psychological treatment such as CBT and relapse prevention for everyone; **SSRIs** for lower-risk presentations; **antiandrogens** (cyproterone acetate, not approved in the US; medroxyprogesterone acetate) and **GnRH agonists** (leuprolide, triptorelin) for the most severe or highest-risk cases, with consent and monitoring. In the Philippines, child abuse is reportable under **RA 7610**, and **RA 11648 (2022)** raised the age of sexual consent to 16. Know your hospital’s policy on confidentiality and reporting before the first interview." }
          ]
        }
      ]
    },
    {
      title: "Fetishistic and transvestic disorders",
      sections: [
        {
          id: "s19-fetishistic",
          title: "Fetishistic disorder",
          pages: "796–798",
          blocks: [
            { type: "criteria", title: "Fetishistic disorder in brief", code: "F65.0", pages: "796", items: [
              ["A", "For at least **6 months**, recurrent, intense sexual arousal from **nonliving objects** or from a **highly specific focus on nongenital body part(s)**, shown by fantasies, urges or behaviors."],
              ["B", "Clinically significant **distress or impairment** from the fantasies, urges or behaviors."],
              ["C", "The fetish objects are **not limited** to clothing used in **cross-dressing** (that is transvestic disorder) or to devices made for **genital stimulation** (for example a vibrator)."]
            ], specifiers: [["Body part(s)", "Partialism: an eroticized nongenital body part such as feet or hair"], ["Nonliving object(s)", "Undergarments, footwear, rubber, leather, diapers and other apparel"], ["Other", "Combinations or other foci"], ["Controlled environment", "Opportunity for fetishistic behavior is restricted"], ["Full remission", "No distress or impairment for **5 years** in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 796–797)", items: [
              ["Partialism is back", "An exclusive focus on a body part (partialism) was a **paraphilia not otherwise specified** in DSM-IV-TR and had been part of fetishism before DSM-III; DSM-5 **re-incorporated** it into fetishistic disorder because object and body-part fetishes so often combine (socks, shoes and feet)."],
              ["Specifiers combine", "A person may meet any **combination** of the body-part and object specifiers."],
              ["Criterion C draws two borders", "Clothing worn **for cross-dressing** belongs to transvestic disorder; an object that stimulates the genitals because it was **designed to** is not a fetish."],
              ["Distress or impairment only", "No nonconsenting-person arm. Many self-identified fetishists report no impairment and have a fetishistic **interest**, not the disorder."]
            ] },
            { type: "list", title: "Associated features, course and sex differences (pp. 797–798)", items: [
              "Fetishistic experience can be **multisensory**: holding, tasting, rubbing, inserting or smelling the object while masturbating, or preferring a partner to wear or use it.",
              "Many people with a fetishistic interest also enjoy sex **without** the object, though sex with it is usually more satisfying; for a **minority** the object is **obligatory** for arousal or satisfaction. Some build **large collections**.",
              "Paraphilias usually begin at puberty, but fetishistic interests can start **before adolescence**. Once established, the course is **continuous** with fluctuating intensity.",
              "Culture: weigh what is **normative sexual behavior** before calling a practice a disorder.",
              "Reported more in **men** but present in women; the sex gap is **smaller for fantasy than for behavior**; clinical samples are nearly all men.",
              "Functional consequences: **sexual dysfunction** in a reciprocal relationship when the object or body part is unavailable; some prefer **solitary** fetish-related activity even within a loving relationship.",
              "Comorbidity: other paraphilic disorders and hypersexuality; **rarely**, neurological conditions."
            ] },
            { type: "defs", title: "Differential diagnosis (p. 798)", items: [
              ["Transvestic disorder", "The **nearest neighbor**. Fetishistic disorder is not diagnosed when the objects are only clothing worn during cross-dressing."],
              ["Sexual masochism disorder", "“**Forced cross-dressing**” fantasies or activities in which the arousal comes mainly from the domination or humiliation, with distress or impairment, are **sexual masochism disorder**."],
              ["Fetishism", "Use of a fetish object without distress, impairment or other adverse consequence: the partner who happily includes feet in foreplay, or the man content with solitary activity in rubber or leather, has no disorder."]
            ] },
            { type: "case", title: "Clinical vignette: the obligatory object", text: "A 36-year-old man reports that for as long as he can remember he has been aroused by women’s stockings, which he collects by the hundred. For 2 years he has been unable to maintain an erection with his wife unless stockings are involved; she has refused, their marriage is failing, and he feels hopeless. He has no interest in wearing the stockings himself and no thoughts of being a woman.", point: "Six months of arousal to a **nonliving object** (Criterion A) with **impairment** in his relationship and distress (Criterion B); the object is not cross-dressing clothing (he does not wear it) and not a sex toy (Criterion C): **fetishistic disorder, nonliving object(s) (F65.0)** (pp. 796–798)." }
          ]
        },
        {
          id: "s19-transvestic",
          title: "Transvestic disorder",
          pages: "798–800",
          blocks: [
            { type: "criteria", title: "Transvestic disorder in brief", code: "F65.1", pages: "798", items: [
              ["A", "For at least **6 months**, recurrent, intense sexual arousal from **cross-dressing**, shown by fantasies, urges or behaviors."],
              ["B", "Clinically significant **distress or impairment** from the fantasies, urges or behaviors."]
            ], specifiers: [["With fetishism", "Aroused by **fabrics, materials or garments**"], ["With autogynephilia", "Aroused by thoughts or images of **oneself as a woman**"], ["Controlled environment", "Opportunity to cross-dress is restricted"], ["Full remission", "No distress or impairment for **5 years** in an uncontrolled environment"]] },
            { type: "defs", title: "Reading the criteria (pp. 798–799)", items: [
              ["Not every cross-dresser", "The diagnosis is not for everyone who dresses as the other sex, even habitually. It needs cross-dressing (or thoughts of it) that is **always or often sexually exciting** (A) **and** distress or impairment (B)."],
              ["How much clothing", "One or two garments (often women’s undergarments, for men) or a complete outfit with wig and makeup."],
              ["The two specifiers predict gender dysphoria", "**With fetishism** makes later gender dysphoria **less** likely; **with autogynephilia** makes it **more** likely, in men with transvestic disorder (p. 799)."],
              ["Purging and acquisition", "A man spends heavily on women’s clothes, shoes and wigs, **throws them all out** to fight the urge, then starts buying again. This cycle is a sign of **distress** and often the clue to Criterion B (p. 799)."],
              ["Autogynephilia", "A man’s paraphilic arousal by the thought or image of himself as a woman. Fantasies may center on **female physiological functions** (lactation, menstruation), **stereotypically feminine activities** (knitting) or **female anatomy** (breasts) (p. 799)."]
            ] },
            { type: "list", title: "Arousal patterns the text describes (p. 799)", items: [
              "In **younger men**, cross-dressing usually leads to masturbation, after which the clothing is removed.",
              "**Older men** often learn to avoid genital stimulation so that, without ejaculation, the session can be **prolonged**.",
              "Some men and women end a session with **intercourse with their partner**; some cannot stay aroused for sex **without** cross-dressing or private cross-dressing fantasies.",
              "Prevalence of the disorder is unknown; it is far more common in men. **Fewer than 3%** of Swedish men report ever being aroused by wearing women’s clothing; repeated arousing cross-dressing is rarer still."
            ] },
            { type: "flow", title: "The typical course in men (pp. 799–800)", vertical: true, steps: [
              ["Childhood", "Strong fascination with a particular item of women’s clothing; before puberty, cross-dressing gives generalized pleasurable excitement"],
              ["Puberty", "Women’s clothing starts to produce erection and sometimes the first ejaculation"],
              ["Adulthood", "Severity peaks: the drive to cross-dress clashes with heterosexual relationships, marriage and family plans"],
              ["Later life", "Sexual arousal to cross-dressing fades, sometimes to nothing, while the wish to cross-dress stays or grows and is replaced by comfort or well-being"]
            ], note: "Course may be **continuous or episodic**. Interest often drops when a man first falls in love, but the abatement is usually temporary; when the urge returns, so does the distress." },
            { type: "callout", kind: "key", title: "The gender dysphoria connection (p. 800)", text: "Some men with transvestic disorder **progress to gender dysphoria**: they gradually want to stay in the female role longer and to feminize their bodies, usually with a **reported drop** in sexual arousal from cross-dressing. In adolescence or early adulthood they may be indistinguishable from other men with transvestic disorder. **Middle-aged and older** men with a history of transvestism are more likely to present with **gender dysphoria** than with transvestic disorder." },
            { type: "defs", title: "Differential diagnosis and comorbidity (p. 800)", items: [
              ["Transvestism", "Arousal from cross-dressing without distress or impairment: no diagnosis."],
              ["Fetishistic disorder", "A man who masturbates with women’s underwear may have either. Ask about his **thoughts** during the activity (being a woman, being like a woman, being dressed as a woman point to transvestic disorder) and about **other fetishes** (soft, silky fabrics used for garments or for something else)."],
              ["Gender dysphoria", "People with transvestic disorder do **not** report incongruence with their assigned gender or a wish to be the other gender, and usually lack a **childhood history of cross-gender behavior**. When full criteria for both are met, give **both** diagnoses ([[dx:gender-dysphoria-adults|Chapter 14]])."],
              ["Comorbidity", "Fetishistic and masochistic interests are the most frequent companions. **Autoerotic asphyxia**, a particularly dangerous masochistic practice, is associated with transvestic behavior in a **substantial proportion of fatal cases**."]
            ] },
            { type: "case", title: "Clinical vignette: the purge", text: "A 45-year-old married man has, since adolescence, been aroused by wearing women’s underwear and, lately, full outfits with a wig. Three times in 5 years he has thrown away a wardrobe worth months of salary, only to rebuild it. His wife found the latest collection and has left. He is miserable, but says he has never wanted to be a woman and has never doubted that he is a man. He is most aroused by imagining himself with a woman’s body.", point: "Arousal from cross-dressing with distress and marital impairment: **transvestic disorder, with autogynephilia (F65.1)** (his arousal centers on himself as a woman). The purge-and-rebuild cycle marks the distress; the absence of incongruence rules out gender dysphoria for now, but the autogynephilia specifier means the risk of later gender dysphoria is **higher** (pp. 799–800)." }
          ]
        },
        {
          id: "s19-fetish-transvestic-gd",
          title: "Fetishistic disorder, transvestic disorder and gender dysphoria compared",
          pages: "796–800",
          blocks: [
            { type: "table", caption: "Three diagnoses that share women’s clothing", head: ["", "Fetishistic disorder", "Transvestic disorder", "Gender dysphoria (Ch 14)"], rows: [
              ["What arouses or drives it", "The **object** itself (fabric, garment, footwear) or a **body part**", "**Wearing** the clothing, often with thoughts of being a woman", "Not arousal: **incongruence** between experienced and assigned gender"],
              ["Thoughts during the act", "About the object", "About being, or being like, or being dressed as, a woman", "Wish **to be** the other gender, all the time"],
              ["Childhood cross-gender behavior", "Not typical", "Usually absent", "Usually **present**"],
              ["Course", "Continuous, fluctuating", "Arousal fades with age; wish persists; some progress to gender dysphoria", "Persistent incongruence"],
              ["Code", "F65.0", "F65.1", "F64.0 / F64.2"],
              ["Can co-occur with the others?", "With transvestic (if other fetishes)", "With gender dysphoria (both diagnosed)", "With transvestic disorder"]
            ] },
            { type: "steps", title: "Three questions that sort them (pp. 798, 800)", items: [
              ["Is the arousal from the object or from wearing it?", "Object or body part without wearing: fetishistic. Wearing, with ideas of being a woman: transvestic."],
              ["Is the arousal the point at all?", "If the person wants to **live as** another gender and is distressed by the incongruence, think gender dysphoria, with or without a transvestic history."],
              ["Where does the pleasure come from in “forced” scenarios?", "If it is the **domination or humiliation**, the diagnosis is sexual masochism disorder."]
            ] },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 50-year-old man with a 30-year history of arousing cross-dressing now reports that the arousal has almost gone, that he wants to live as a woman full time and feels he was always one, and is seeking hormones. The chapter says exactly this: transvestic disorder can **progress to gender dysphoria** with loss of arousal, and older men with a transvestic history more often present with **gender dysphoria** (p. 800). Evaluate for gender dysphoria in adolescents and adults (F64.0)." }
          ]
        }
      ]
    },
    {
      title: "Residual categories, coding and assessment",
      sections: [
        {
          id: "s19-residual",
          title: "Other specified and unspecified paraphilic disorder",
          pages: "801",
          blocks: [
            { type: "defs", title: "The two residual categories (p. 801)", items: [
              ["Other specified paraphilic disorder (F65.89)", "Symptoms characteristic of a paraphilic disorder, with clinically significant distress or impairment, that do **not meet full criteria** for any of the eight. The clinician **records the reason**: write “other specified paraphilic disorder” followed by the specific paraphilia, for example **“zoophilia.”**"],
              ["Unspecified paraphilic disorder (F65.9)", "The same threshold of symptoms and distress or impairment, but the clinician **chooses not to state** the reason, or there is **not enough information** for a more specific diagnosis."]
            ] },
            { type: "table", caption: "The manual’s examples for the other specified category (p. 801)", head: ["Paraphilia", "Focus"], rows: [
              ["Telephone scatologia", "Obscene telephone calls"],
              ["Necrophilia", "Dead bodies"],
              ["Zoophilia", "Nonhuman animals"],
              ["Coprophilia", "Feces"],
              ["Klismaphilia", "Enemas"],
              ["Urophilia", "Urine"]
            ] },
            { type: "list", title: "Rules that still apply (p. 801)", items: [
              "The examples are named with the same frame as the listed disorders: recurrent, intense arousal present for **at least 6 months** that causes **marked distress or impairment**.",
              "The list is **not exhaustive**; any of the dozens of named paraphilias can qualify when its consequences reach the threshold (p. 779).",
              "Other specified paraphilic disorder **can** carry the **in remission** and **in a controlled environment** specifiers."
            ] },
            { type: "callout", kind: "exam", title: "Exam twist", text: "A 30-year-old man has for 2 years made obscene calls to strangers for arousal and is distressed by the police attention and his own shame. None of the eight disorders fits; the manual’s own example is **telephone scatologia**: record **other specified paraphilic disorder, telephone scatologia (F65.89)** (p. 801)." }
          ]
        },
        {
          id: "s19-coding",
          title: "Coding and recording",
          pages: "780–801",
          blocks: [
            { type: "table", caption: "ICD-10-CM codes (unchanged FY2016 through FY2027; checked October 27, 2026)", head: ["DSM-5-TR diagnosis", "Code", "ICD-10-CM title (record the DSM name)"], rows: [
              ["Fetishistic disorder", "**F65.0**", "Fetishism"],
              ["Transvestic disorder", "**F65.1**", "Transvestic fetishism"],
              ["Exhibitionistic disorder", "**F65.2**", "Exhibitionism"],
              ["Voyeuristic disorder", "**F65.3**", "Voyeurism"],
              ["Pedophilic disorder", "**F65.4**", "Pedophilia"],
              ["Sexual masochism disorder", "**F65.51**", "Sexual masochism"],
              ["Sexual sadism disorder", "**F65.52**", "Sexual sadism"],
              ["Frotteuristic disorder", "**F65.81**", "Frotteurism"],
              ["Other specified paraphilic disorder", "**F65.89**", "Other paraphilias"],
              ["Unspecified paraphilic disorder", "**F65.9**", "Paraphilia, unspecified"]
            ] },
            { type: "defs", title: "Recording rules", items: [
              ["Specifiers do not change the code", "Write them in words after the name: “sexual masochism disorder, with asphyxiophilia, in a controlled environment (F65.51).”"],
              ["Pedophilic specifiers", "Record type (exclusive or nonexclusive), sex attracted to (males, females, both) and, when it applies, limited to incest: “pedophilic disorder, nonexclusive type, sexually attracted to females, limited to incest (F65.4).”"],
              ["Exhibitionistic subtype", "Name the target group: “exhibitionistic disorder, sexually aroused by exposing genitals to physically mature individuals (F65.2).”"],
              ["Other specified", "Name plus reason: “other specified paraphilic disorder, zoophilia (F65.89).”"],
              ["Two paraphilic disorders", "Code each when more than one paraphilia causes suffering or harm (p. 780), for example exhibitionistic disorder **and** pedophilic disorder."]
            ] },
            { type: "callout", kind: "caution", title: "Coding traps (outside the DSM text)", text: "ICD-10-CM also contains **F65.50, sadomasochism, unspecified**, and the parent codes **F65.5** and **F65.8**, none of which DSM-5-TR uses; choose F65.51 or F65.52 by the diagnosis. The ICD-10-CM **titles** are the old ICD-10 names (fetishism, transvestic fetishism, pedophilia): record the **DSM-5-TR disorder name** in the chart and let the code carry the mapping." },
            { type: "update", kind: "post", year: "2026", title: "Checked through FY2027 and the 2025 APA update", source: "ICD-10-CM code tables FY2025–FY2027 (secondary code references agreeing; official tabular list to confirm); APA DSM-5-TR updates, September 2022, 2023, 2024 and 2025; checked October 27, 2026", text: "No F65 code was added, deleted or retitled in the October 2024, 2025 or 2026 updates, and the APA has published no criteria, text or coding change for the paraphilic disorders since the 2022 printing. There was no 2026 APA update as of October 27, 2026." }
          ]
        },
        {
          id: "s19-assessment",
          title: "Assessment, risk and treatment: what lies outside the manual",
          pages: "779–801",
          blocks: [
            { type: "p", text: "The DSM text defines the disorders and gives some diagnostic markers; it says **nothing about treatment** and does not rate risk. Everything in this section is **outside the DSM** and dated." },
            { type: "steps", title: "An assessment frame (app guidance, built on pp. 780–796)", items: [
              ["Clarify the referral", "Self-referred distress, a partner’s complaint, or a forensic question? The route shapes consent, confidentiality and what the person will disclose."],
              ["Establish Criterion A", "Content of fantasies, urges and behaviors; duration (6 months); whether the interest equals or exceeds nonparaphilic interest; pornography pattern (p. 779); more than one paraphilia (p. 780)."],
              ["Establish Criterion B", "Distress or impairment, or acts with a nonconsenting person. For nondisclosing people, collateral records: number of victims and occasions (pp. 781, 784, 786, 791, 793)."],
              ["Rule out disinhibition", "Mania, major neurocognitive disorder, intellectual developmental disorder, personality change due to a medical condition, intoxication, psychosis (pp. 782, 785, 787, 796)."],
              ["Screen comorbidity and safety", "Depression, bipolar, anxiety, substance use, ADHD, antisocial traits, hypersexuality; suicidal ideation linked to stigma-related shame (pp. 789, 791); asphyxiophilia and autoerotic asphyxia (pp. 789, 800)."],
              ["Specifiers and code", "Target age, asphyxiophilia, pedophilic specifiers, fetishistic focus, transvestic specifiers; controlled environment; full remission (5 years)."]
            ] },
            { type: "callout", kind: "pearl", title: "Outside the DSM: the WFSBP treatment framework (2010; updated 2020)", text: "The World Federation of Societies of Biological Psychiatry guidelines (Thibaut et al.) grade treatment by the **risk of harm to others** and the **severity** of the paraphilia. The order is: **psychological treatment** (CBT, relapse prevention) for all; **SSRIs** for lower-risk presentations and paraphilias without contact offending; **antiandrogens** (cyproterone acetate where available, not approved in the US; medroxyprogesterone acetate) for higher risk; **GnRH agonists** (leuprolide, triptorelin) for the most severe or highest-risk cases, with informed consent and monitoring of bone density, liver and metabolic measures. Sources differ on how the levels are numbered, so learn the order, not a number. See [[stahl:drugs/fluoxetine|the Stahl companion]] for SSRI prescribing." },
            { type: "callout", kind: "culture", title: "Outside the DSM: the Philippine frame", text: "**RA 11648 (March 2022)** raised the age of sexual consent to **16**, with a close-in-age exemption (a gap of 3 years or less) that does not apply when the younger person is under 13. **RA 7610** governs child abuse and reporting. The DSM’s own legal note is American (possession of child sexual images even for diagnosis, p. 795); apply local law and hospital policy, and document carefully." },
            { type: "callout", kind: "caution", title: "Tone and safety in the interview (app guidance)", text: "Use neutral, non-judgmental language (“a person who has offended”, “sexual interest in children”), explain the limits of confidentiality **before** asking about offending, ask about **victim access** and **current risk** directly, and record facts rather than inferences. The manual’s own markers for pedophilic disorder in a person who has offended (self-reported interest, child pornography, multiple, boy or unrelated victims, p. 793) are the facts to establish." }
          ]
        }
      ]
    }
  ]
});
