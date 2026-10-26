/* Chapter 13 study guide. Source: DSM-5-TR, Sexual Dysfunctions (pp. 477–510).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026)
   and the APA DSM-5-TR updates of September 2022–2025: no changes for this chapter. Treatment notes and other
   clinical teaching are outside the DSM and labeled as such. */
SP.add("ch13", "guide", {
  intro: "Sexual dysfunctions are **clinically significant** problems in how a person **responds sexually** or **feels sexual pleasure** (p. 477). The chapter follows the phases of the sexual response: **desire** ([[dx:male-hsdd|male hypoactive sexual desire disorder]]; [[dx:fsiad|female sexual interest/arousal disorder]]), **arousal** ([[dx:erectile-disorder|erectile disorder]]; the arousal half of FSIAD), **orgasm and ejaculation** ([[dx:delayed-ejaculation|delayed ejaculation]], [[dx:premature-ejaculation|premature (early) ejaculation]], [[dx:female-orgasmic|female orgasmic disorder]]) and **pain** ([[dx:gppd|genito-pelvic pain/penetration disorder]]), plus [[dx:substance-sexual|substance/medication-induced sexual dysfunction]] and two residual categories. Almost every disorder shares one frame: symptoms on **about 75%–100% of occasions**, for **about 6 months**, causing **distress**, and **not better explained** by a nonsexual mental disorder, a substance, a medical condition or **severe relationship distress**. Learn the frame once, then learn each disorder’s exceptions. The [[helper:sexual|sexual dysfunction helper]] walks through the choices.",
  objectives: [
    "State the **shared frame**: symptoms on **approximately 75%–100%** of occasions (where it applies), for **approximately 6 months**, with **clinically significant distress**, and the four **Criterion D** exclusions.",
    "Apply the **subtypes**: **lifelong vs acquired** for all seven specific disorders; **generalized vs situational** for all except **genito-pelvic pain/penetration disorder**; severity by **distress**, except **premature ejaculation** (by **latency**) and **substance/medication-induced** dysfunction (by **frequency**).",
    "Use the **exclusion hierarchy**: a nonsexual mental disorder that explains the problem is diagnosed **alone**; a substance gives the **induced** diagnosis; a medical cause gets **no psychiatric diagnosis**; severe relationship distress or partner violence gets no sexual dysfunction diagnosis, and a **Z code** such as **Z63.0** may be listed.",
    "Recognize what is **not** a diagnosis: **inadequate stimulation**, a **desire discrepancy** alone, orgasm only with **clitoral stimulation**, **episodic** early ejaculation with a new partner, **unrealistic expectations**, and lifelong low desire explained by **asexual identity**.",
    "State the thresholds that are tested: **3 of 6** indicators in FSIAD; **both** low desire **and** deficient fantasies in male HSDD; **1 of 3** erectile symptoms; **1 of 4** GPPPD dimensions; ejaculation within **about 1 minute** of vaginal penetration in premature ejaculation, with severity at **30** and **15 seconds**.",
    "Tell **organic from psychogenic** erectile problems (gradual and generalized vs sudden, situational and after a stressor; age **under 40**; **nocturnal erections**), and list the medical screens the manual names.",
    "Code **substance/medication-induced sexual dysfunction**: the **4th character** is **1** (mild use disorder), **2** (moderate or severe) or **9** (no use disorder); medications without a class, such as **fluoxetine**, use **F19.981**.",
    "Name the antidepressants with **lower** sexual side-effect rates (**bupropion, mirtazapine, nefazodone, vilazodone**) and the effects of antipsychotics, mood stabilizers, opioids and **5-α-reductase inhibitors** described in the manual."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s13-map",
          title: "How the chapter is built",
          pages: "477–478",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              "Desire and arousal",
              ["[[dx:male-hsdd|Male hypoactive sexual desire disorder]]", "F52.0", "**Both** low desire for sex **and** deficient sexual thoughts or fantasies", "498–501"],
              ["[[dx:fsiad|Female sexual interest/arousal disorder]]", "F52.22", "**3 of 6** indicators of low interest or arousal", "489–493"],
              ["[[dx:erectile-disorder|Erectile disorder]]", "F52.21", "Trouble getting or keeping an erection, or reduced rigidity", "481–485"],
              "Orgasm and ejaculation",
              ["[[dx:delayed-ejaculation|Delayed ejaculation]]", "F52.32", "Marked delay, infrequency or absence of ejaculation in partnered sex", "478–481"],
              ["[[dx:premature-ejaculation|Premature (early) ejaculation]]", "F52.4", "Ejaculation within **about 1 minute** of vaginal penetration, before wished", "501–504"],
              ["[[dx:female-orgasmic|Female orgasmic disorder]]", "F52.31", "Delayed, infrequent or absent orgasm, or much weaker orgasms", "485–489"],
              "Pain",
              ["[[dx:gppd|Genito-pelvic pain/penetration disorder]]", "F52.6", "Difficulty with penetration, pain, fear of pain, or pelvic floor tensing (**1 of 4**)", "493–498"],
              "Other",
              ["[[dx:substance-sexual|Substance/medication-induced sexual dysfunction]]", "F1x.181 · F1x.281 · F1x.981", "Onset during or soon after intoxication, withdrawal or medication exposure", "504–509"],
              ["[[dx:other-specified-sexual|Other specified sexual dysfunction]]", "F52.8", "Subthreshold, **reason recorded** (e.g., sexual aversion)", "509"],
              ["[[dx:unspecified-sexual|Unspecified sexual dysfunction]]", "F52.9", "Subthreshold, reason not given or not enough information", "509"]
            ] },
            { type: "p", text: "A person can have **several** sexual dysfunctions at once, and **all of them are diagnosed** (p. 477). Low desire, arousal problems, orgasm difficulty and pain often travel together, and one rarely rules out another." },
            { type: "callout", kind: "exam", title: "The names and the ICD titles do not match", text: "ICD-10-CM calls **F52.32** “male orgasmic disorder” (DSM: delayed ejaculation), **F52.22** “female sexual arousal disorder” (DSM: female sexual interest/arousal disorder) and **F52.0** “hypoactive sexual desire disorder” (DSM: male hypoactive sexual desire disorder). Write the **DSM name** with the code; the billing title is just the code’s label. This detail is from the ICD-10-CM tabular list, not the manual." },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The criteria and codes are those of DSM-5 (2013). The text revision rewrote the descriptive text: a new paragraph on **gender-diverse people** (p. 478) saying the desire disorders can be applied regardless of sex or gender and that anatomy-linked diagnoses follow **current anatomy**, new **Association With Suicidal Thoughts or Behavior** sections (erectile disorder, female orgasmic disorder, FSIAD, premature ejaculation), expanded **culture-related** sections and updated prevalence figures. Confirm details against pp. 477–509." },
            { type: "update", kind: "post", year: "2026", title: "No code changes through FY2027", source: "ICD-10-CM FY2025, FY2026 and FY2027 code tables (effective October 1 of 2024, 2025 and 2026); APA DSM-5-TR coding updates (September 2022, 2023, 2024 and 2025)", text: "F52.0, F52.21, F52.22, F52.31, F52.32, F52.4, F52.6, F52.8, F52.9 and the F10–F19 “.181/.281/.981” sexual dysfunction codes were **not changed** in the October 2024, October 2025 or October 2026 ICD-10-CM updates, and the APA’s coding updates have not touched this chapter. The codes printed in the manual are still current. Check the code set in force on the date of service." },
            { type: "callout", kind: "pearl", title: "Historical note (outside the manual’s text)", text: "DSM-5 (2013) **merged** DSM-IV’s female hypoactive sexual desire disorder and female sexual arousal disorder into **FSIAD**, merged vaginismus and dyspareunia into **GPPPD**, dropped **sexual aversion disorder** (now only an example of the other specified category, p. 509), and added the **6-month** duration and **75%–100%** frequency rules. Older textbooks still use the DSM-IV names." }
          ]
        },
        {
          id: "s13-frame",
          title: "The shared criteria frame",
          pages: "477–478",
          blocks: [
            { type: "p", text: "Seven of the ten diagnoses are built on the same four-part frame. Once you know it, each disorder is just its **Criterion A** plus a few exceptions." },
            { type: "steps", title: "The four parts (each disorder’s Criteria A–D)", items: [
              ["A. The symptom, and how often. ", "The specific problem (low desire, erectile difficulty, delay, pain). For four disorders (delayed ejaculation, erectile disorder, female orgasmic disorder and, in Criterion B, premature ejaculation) it must occur on **almost all or all, about 75%–100%**, of sexual occasions, in the identified situations or, if generalized, in all; FSIAD applies this only to items A4 and A6."],
              ["B. How long. ", "At least **approximately 6 months**. The word “approximately” lets the clinician use judgment when the exact duration is uncertain (p. 486)."],
              ["C. Distress. ", "The symptoms cause **clinically significant distress in the individual**. Impairment alone is not listed: the criterion is about the person’s distress."],
              ["D. Not better explained. ", "Not better explained by a **nonsexual mental disorder** or by **severe relationship distress** (the female disorders add **partner violence** as an example) or **other significant stressors**, and not attributable to a **substance/medication** or **another medical condition**."]
            ] },
            { type: "table", caption: "Where the 75%–100% rule applies (pp. 478–502)", head: ["Disorder", "75%–100% of occasions?", "Duration"], rows: [
              ["Delayed ejaculation", "Yes, of **partnered** sexual activity", "~6 months"],
              ["Erectile disorder", "Yes", "~6 months"],
              ["Female orgasmic disorder", "Yes", "~6 months"],
              ["FSIAD", "Only for **A4** (excitement/pleasure) and **A6** (sensations)", "~6 months"],
              ["Premature ejaculation", "Yes (stated in Criterion B)", "**At least** 6 months"],
              ["Male HSDD", "No: “persistently or recurrently”", "~6 months"],
              ["GPPPD", "No: “persistent or recurrent”", "~6 months"]
            ], note: "Substance/medication-induced sexual dysfunction has no duration rule and uses frequency only for **severity** (25%–50%, 50%–75%, 75%+)." },
            { type: "callout", kind: "mnemonic", title: "Memory hook: 3-quarters, half a year, hurts, and nothing else explains it", text: "**¾** of occasions, **½** a year, it **hurts** the person (distress), and **nothing else** explains it (mental disorder, drug, medical condition, relationship crisis). Two disorders drop the ¾: the **pain** disorder and **male low desire**." },
            { type: "defs", title: "Why the thresholds exist (pp. 486, 490, 499)", items: [
              ["Frequency", "Occasional difficulty is common and normal. Requiring most occasions separates a **pattern** from a bad night."],
              ["Duration", "Short-term changes in desire or response are often **adaptive reactions** to life events (a new baby, a job loss). Six months screens these out."],
              ["Distress", "Many people with low desire or rare orgasm are **not bothered** by it. Without distress, there is no disorder (p. 486: many women report high satisfaction despite rare orgasm)."]
            ] },
            { type: "callout", kind: "caution", title: "Distress in whom?", text: "Criterion C is distress **in the individual**. A partner’s distress often brings the person to treatment (for example, in delayed ejaculation, p. 479), but if the person is not distressed, the criterion is not met." }
          ]
        },
        {
          id: "s13-specifiers",
          title: "Subtypes and severity",
          pages: "477",
          blocks: [
            { type: "defs", title: "The two subtype pairs (p. 477)", items: [
              ["Lifelong", "Present since the person’s **first sexual experiences** (since becoming sexually active)."],
              ["Acquired", "Began after a period of **relatively normal** sexual function."],
              ["Generalized", "Happens regardless of the type of stimulation, the situation or the partner."],
              ["Situational", "Occurs **only** with certain types of stimulation, situations or partners."]
            ] },
            { type: "p", text: "Onset matters because **lifelong and acquired problems often have different causes and treatments** (p. 477). For example, acquired erectile disorder is more often linked to diabetes and cardiovascular disease, while lifelong erectile problems are more often psychological (p. 483)." },
            { type: "table", caption: "Which specifiers each disorder takes", head: ["Disorder", "Lifelong / acquired", "Generalized / situational", "Severity graded by"], rows: [
              ["Delayed ejaculation", "Yes", "Yes", "Distress"],
              ["Erectile disorder", "Yes", "Yes", "Distress"],
              ["Female orgasmic disorder", "Yes", "Yes", "Distress, **plus** “never experienced an orgasm under any situation”"],
              ["FSIAD", "Yes", "Yes", "Distress"],
              ["GPPPD", "Yes", "**No**", "Distress"],
              ["Male HSDD", "Yes", "Yes", "Distress"],
              ["Premature ejaculation", "Yes", "Yes", "**Latency**: ~30–60 s mild, ~15–30 s moderate, before or within ~15 s severe"],
              ["Substance/medication-induced", "No (onset specifiers instead)", "No", "**Frequency**: 25%–50% mild, 50%–75% moderate, 75%+ severe"]
            ] },
            { type: "callout", kind: "exam", title: "The odd ones out", text: "**GPPPD** is the only specific disorder with **no generalized/situational** specifier. **Premature ejaculation** grades severity by **seconds**, and the **induced** disorder by **how often** it happens. Everything else is graded by **mild, moderate or severe distress**. Only **female orgasmic disorder** has the extra specifier for **never having had an orgasm** in any situation." },
            { type: "callout", kind: "pearl", title: "How to decide lifelong versus acquired in pain disorders", text: "In GPPPD the onset is often hard to date because women may not seek care until intercourse is attempted. The manual’s tip: if there was **any consistent period of pain-, fear- and tension-free intercourse**, call it **acquired** (p. 496)." }
          ]
        },
        {
          id: "s13-context",
          title: "Context: stimulation, culture, age and gender diversity",
          pages: "477–478",
          blocks: [
            { type: "list", title: "Five factors to assess in every case (p. 477)", ordered: true, items: [
              "**Partner** factors: the partner’s own sexual problems or health.",
              "**Relationship** factors: poor communication, different levels of desire.",
              "**Individual vulnerability**: poor body image, a history of sexual or emotional abuse; **psychiatric comorbidity** such as depression or anxiety; **stressors** such as job loss or bereavement.",
              "**Cultural or religious** factors: prohibitions against sexual activity or pleasure, attitudes about sexuality.",
              "**Medical** factors relevant to prognosis, course or treatment."
            ] },
            { type: "p", text: "These factors are **not exclusions**. They shape the formulation and treatment, and they may contribute in different amounts for different people (p. 477). Only when **severe** relationship distress, partner violence or major stressors **explain** the problem does Criterion D rule the diagnosis out." },
            { type: "defs", title: "Things that are not a sexual dysfunction (pp. 477, 479, 486, 490, 504)", items: [
              ["Inadequate stimulation", "If the difficulty comes from **not enough or not effective stimulation** (including not knowing what works), care may still help, but **no diagnosis** is made."],
              ["Unrealistic expectations", "Dissatisfaction **entirely** due to unrealistic expectations is not delayed ejaculation (p. 479); normal erections in a man with **excessive expectations** are not erectile disorder (p. 484)."],
              ["Normal aging", "Aging and **long relationships** can bring a **normative** decline in sexual response (p. 477)."],
              ["Desire discrepancy", "Having **less desire than one’s partner** is not, by itself, FSIAD or male HSDD (pp. 489, 499)."],
              ["Asexual identity", "Lifelong low desire better explained by **self-identification as asexual** is not diagnosed (pp. 490, 501)."]
            ] },
            { type: "callout", kind: "culture", text: "Cultural norms shape what people expect and what they are forbidden to enjoy (p. 477). Examples from the chapter: views that treat marital sex as a **duty** rather than a pleasure reduce help-seeking for orgasm problems (p. 488); premature ejaculation is reported more often in **arranged marriages** (p. 503); and some women describe genito-pelvic pain only as being **unhappy in the marriage** (p. 496)." },
            { type: "h", text: "Gender-diverse people (p. 478)" },
            { type: "list", items: [
              "Transgender, nonbinary and agender people may not fit the sex- and gender-based categories.",
              "Despite their names, **male hypoactive sexual desire disorder** and **female sexual interest/arousal disorder** describe experiences that do not depend on sex or gender; **either can be applied** to a gender-diverse person using clinical judgment.",
              "Diagnoses tied to **reproductive anatomy** (erectile disorder, premature and delayed ejaculation, GPPPD) follow the person’s **current anatomy**, not the sex assigned at birth."
            ] },
            { type: "callout", kind: "caution", title: "The “by definition” lines", text: "Each disorder’s text still says it is given only to men or only to women (for example, pp. 480, 484, 488, 492, 497), and that the matching problem in the other sex goes elsewhere: a woman’s orgasm difficulty is **female orgasmic disorder**, a man’s is **delayed ejaculation**; a woman’s arousal difficulty is **FSIAD**, a man’s is **erectile disorder**; a man’s low desire is **male HSDD**, a woman’s is **FSIAD**. Men with genito-pelvic pain get **other specified or unspecified** (p. 497)." }
          ]
        }
      ]
    },
    {
      title: "Desire and arousal",
      sections: [
        {
          id: "s13-mhsdd",
          title: "Male hypoactive sexual desire disorder",
          pages: "498–499",
          blocks: [
            { type: "criteria", title: "Male hypoactive sexual desire disorder in brief", code: "F52.0", pages: "498–499", items: [
              ["A", "**Persistently or recurrently** low or absent **sexual or erotic thoughts or fantasies** **and** low or absent **desire for sexual activity**. The **clinician** judges the deficiency, allowing for age and the person’s general and sociocultural circumstances."],
              ["B", "Present for **approximately 6 months** or more."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, severe relationship distress or other significant stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of relatively normal function"], ["Generalized / situational", "All contexts, or only certain stimulation, situations or partners"], ["Severity", "Mild, moderate or severe **distress**"]] },
            { type: "defs", title: "Reading the criteria (pp. 499–500)", items: [
              ["Both, not either", "A man needs **both** low desire for sex **and** deficient thoughts or fantasies. Compare FSIAD, where any **3 of 6** indicators will do."],
              ["Clinician judgment", "“Low” is judged against **age** and **context**, because desire normally declines with age (about **5.2% at 27** to **18.5% at 50**, p. 500)."],
              ["Desire discrepancy", "Wanting sex less often than a partner is **not enough** (p. 499)."],
              ["The 6-month guard", "Protects against diagnosing a **temporary reaction** to adversity, such as being fired or a business failing. If the stressor and the low desire both last past 6 months, the clinician decides (p. 499)."],
              ["Activity is not desire", "Masturbation or partnered sex may still happen despite low desire (p. 499)."],
              ["Initiation", "Many men prefer their partner to initiate; then judge **receptivity** to the partner’s approaches, not only how often he starts (p. 499)."]
            ] },
            { type: "callout", kind: "exam", title: "Desire and arousal: separate in men, merged in women", text: "DSM-5-TR keeps **desire (male HSDD)** and **arousal (erectile disorder)** as **separate** disorders in men, but merges desire and arousal into **one** disorder in women (**FSIAD**) (p. 501). The male criterion is also simpler: one item with two required parts, against FSIAD’s 3-of-6 count." },
            { type: "case", title: "Clinical vignette: the engineer who stopped thinking about sex", text: "A 44-year-old engineer comes with his wife. For about a year he has had almost no sexual thoughts or fantasies and no wish for sex, with her or alone; he rarely responds when she initiates. He is upset about it and worried about the marriage. Erections are normal when they do have sex. He has no depressive symptoms, takes no medications, drinks little, and his testosterone, prolactin and thyroid tests are normal. The couple describe a good relationship apart from this.", point: "Both parts of Criterion A for more than 6 months, with his own distress, and no mental, medical, substance or relationship explanation: **male hypoactive sexual desire disorder, acquired**. Specify generalized and the severity of distress." }
          ]
        },
        {
          id: "s13-mhsdd-clinical",
          title: "Male HSDD: features, course and differential",
          pages: "499–501",
          blocks: [
            { type: "table", caption: "Numbers from the text (pp. 499–501)", head: ["Measure", "Figure"], rows: [
              ["Prevalence in representative samples", "**3%–17%**"],
              ["Ages 16–24 vs 60–74", "**3%–14%** vs **16%–28%**"],
              ["Persistent lack of interest for 6 months or more", "**6%** of men"],
              ["With clinically significant distress", "**Under 2%**"],
              ["Sought help for a sexual problem in the past year", "**10.5%**"],
              ["Low desire at age 27 vs 50", "About **5.2%** vs **18.5%**"],
              ["Northern Europe vs Southeast Asia (ages 40–80)", "**12.5%** vs **28%**"],
              ["Gay vs heterosexual men reporting low desire", "**19%** vs **9%**"]
            ], note: "The steep drop from “low desire” to “low desire for 6 months with distress” is the whole point of Criteria B and C." },
            { type: "defs", title: "Risk factors (p. 500)", items: [
              ["Temperamental", "**Mood and anxiety symptoms** are strong predictors: up to **half** of men with past psychiatric symptoms have moderate or severe loss of desire, against **15%** without. Restrictive or conservative sexual attitudes; worry about erections and low erectile confidence; lack of erotic thoughts."],
              ["Environmental", "**Alcohol** use; problems in the relationship, less attraction to the partner, **long-term relationships**, sexual boredom, work stress. Cohort studies in some high-income countries show desire falling over recent decades."],
              ["Physiological", "**Hyperprolactinemia** and **hypogonadism**. It is unclear whether men with low desire have low testosterone; low desire is common in hypogonadal men, and there may be a **threshold** below which testosterone matters and above which it has little effect."]
            ] },
            { type: "table", caption: "Differential diagnosis (p. 501)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:mdd|Major depressive disorder]]", "Loss of interest in **almost all** activities. If depression explains the low desire, diagnose depression only."],
              ["[[dx:substance-sexual|Substance/medication-induced]]", "Low desire that **starts with** a drug and **clears** when it is stopped or reduced."],
              ["Another medical condition", "Hypogonadism, diabetes, thyroid disease, CNS disease: no psychiatric diagnosis if they explain it."],
              ["Interpersonal factors", "Severe relationship distress or major stressors that explain it: no diagnosis (consider a Z code)."],
              ["[[dx:erectile-disorder|Erectile disorder]] and [[dx:premature-ejaculation|early ejaculation]]", "Do **not** rule it out. Up to **half** of men with low desire also have erectile problems, and slightly fewer have early ejaculation; diagnose each."],
              ["Asexual identity", "Low desire explained by **self-identification as asexual**: not diagnosed."]
            ] },
            { type: "callout", kind: "pearl", title: "Rarely alone", text: "Male HSDD is **rarely the only** sexual diagnosis: erectile disorder, delayed ejaculation and premature ejaculation commonly accompany it, as do depression and endocrine problems (p. 501). Persistent erectile failure can itself erode interest (p. 499), so ask which came first." },
            { type: "callout", kind: "pearl", title: "Work-up (outside the manual’s text)", text: "The manual names hyperprolactinemia and hypogonadism as causes. In practice, check a **morning total testosterone** (repeat if low), **prolactin** and **TSH**, review medications (SSRIs, antipsychotics, opioids, 5-α-reductase inhibitors), and screen for depression and alcohol use." }
          ]
        },
        {
          id: "s13-fsiad",
          title: "Female sexual interest/arousal disorder",
          pages: "489–490",
          blocks: [
            { type: "criteria", title: "Female sexual interest/arousal disorder in brief", code: "F52.22", pages: "489", items: [
              ["A", "Absent or significantly reduced sexual interest or arousal, shown by **at least 3** of the following:", [
                "Absent or reduced **interest** in sexual activity.",
                "Absent or reduced sexual or erotic **thoughts or fantasies**.",
                "No or reduced **initiation** of sex, and usually **unreceptive** to a partner’s attempts.",
                "Absent or reduced sexual **excitement or pleasure** during sex in about **75%–100%** of encounters.",
                "Absent or reduced interest or arousal in response to **any internal or external** sexual cues (written, verbal, visual).",
                "Absent or reduced **genital or nongenital sensations** during sex in about **75%–100%** of encounters."
              ]],
              ["B", "Present for **approximately 6 months** or more."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, by severe relationship distress (e.g., **partner violence**) or by other major stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of relatively normal function"], ["Generalized / situational", "All contexts, or only certain stimulation, situations or partners"], ["Severity", "Mild, moderate or severe **distress**"]] },
            { type: "callout", kind: "mnemonic", title: "Memory hook: the six I’s (written for this app)", text: "**I**nterest, **I**magination (fantasies), **I**nitiation/receptivity, **I**ntercourse pleasure, **I**nvitation by cues, **I**nner sensations. Any **3 of 6** for ~6 months. *DSM check: items 4 and 6 need 75%–100% of encounters; the others do not.*" },
            { type: "defs", title: "Reading the criteria (pp. 489–490)", items: [
              ["Any three", "Profiles differ: one woman may have low interest, no fantasies and no initiation; another may have little excitement, no response to cues and few genital sensations (p. 490)."],
              ["A1 history", "Reduced interest (A1) was once the **single criterion** of the old hypoactive sexual desire disorder in women; it is now one item among six (p. 490)."],
              ["A2 and age", "Sexual thoughts normally decline with age; allow for that (p. 490)."],
              ["A3 is behavioral", "The couple’s beliefs about **who initiates** matter in judging it (p. 490)."],
              ["A5 responsive desire", "A5 asks whether interest or arousal in **response** to sexual cues is missing (a lack of “responsive desire”); women with low desire have fewer cues that work. Check the **adequacy** of the stimuli first (p. 490). *Outside the DSM: many models describe women’s desire as often responsive rather than spontaneous.*"],
              ["A6 self-report is enough", "Lubrication and genital blood flow measures **do not distinguish** women with and without arousal complaints, so her report of reduced sensation suffices (p. 490)."]
            ] },
            { type: "callout", kind: "exam", title: "Two types and a ninefold overlap", text: "Women who lose desire are about **nine times** more likely to also lose excitement or arousal (p. 490). The text describes at least **two types**: one with **low sensitivity to sexual cues** and one with **overactive sexual inhibition** (p. 490)." },
            { type: "case", title: "Clinical vignette: low desire after the second baby?", text: "A 34-year-old woman says that for the past 9 months she has rarely wanted sex, has almost no sexual thoughts, never initiates and usually turns her husband down. When they do have sex she enjoys it and has normal sensations. She is distressed and feels she is failing him. She is not depressed, the marriage is otherwise warm, and she takes no medications. Her son is 2 years old.", point: "Three indicators (A1, A2, A3) for more than 6 months with her own distress, and no better explanation: **FSIAD**. Excitement and sensation are preserved, which is allowed: only 3 of 6 are needed." }
          ]
        },
        {
          id: "s13-fsiad-clinical",
          title: "FSIAD: features, course and differential",
          pages: "490–493",
          blocks: [
            { type: "list", title: "Associated features (pp. 490–491)", items: [
              "Often comes with **orgasm problems**, **pain** during sex, infrequent sex and couple-level differences in desire.",
              "Relationship difficulties, chronic stress and **mood disorders** are frequent companions.",
              "Unrealistic expectations, poor technique and **lack of information** about sexuality may be present; consider normative gender-role beliefs.",
              "Women in **longer relationships** more often begin sex without feeling desire at the outset (p. 491)."
            ] },
            { type: "table", caption: "Numbers from the text (pp. 491–492)", head: ["Measure", "Figure"], rows: [
              ["Women with chronic low desire", "About **30%**"],
              ["…of whom have significant partner-related distress", "About **half**"],
              ["…of whom have personal distress", "About **a quarter**"],
              ["Low desire across world regions", "**26%–43%**"],
              ["Distress about low desire with age", "**Decreases**, even though low desire increases"]
            ] },
            { type: "defs", title: "Course and risk (pp. 491–492)", items: [
              ["Lifelong", "For the items about function **during** sex (A3, A4, A6), lifelong means present **since the first sexual experiences**."],
              ["Transient change", "Partner-related, interpersonal or personal events can cause **adaptive, temporary** changes; persistence for about 6 months makes it a dysfunction."],
              ["Temperamental", "Negative thoughts and attitudes about sex; past mental disorders; individual balance of **sexual excitation and inhibition**."],
              ["Environmental", "Relationship problems, the partner’s sexual function, early caregiver relationships and **childhood stressors**."],
              ["Physiological", "**Diabetes** and **thyroid dysfunction**; a strong genetic influence. Vaginal **photoplethysmography** finds no difference between women with and without perceived low genital arousal."],
              ["Vaginal dryness", "Related to **age and menopause** (p. 491)."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 492–493)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:mdd|Major depressive disorder]]", "Markedly diminished interest in **almost all** activities. If depression **completely** explains it, no FSIAD."],
              ["[[dx:substance-sexual|Substance/medication-induced]]", "Starts with the drug, settles with stopping or dose reduction."],
              ["Another medical condition", "Diabetes, endothelial disease, thyroid dysfunction, CNS disease that **almost exclusively** explain it."],
              ["Interpersonal factors", "Severe relationship distress, **partner violence** or major stressors."],
              ["Other sexual dysfunctions", "Do **not** exclude it: chronic genital pain can lead to low desire for painful sex; low arousal can impair orgasm. Diagnose all that apply."],
              ["Inadequate stimuli", "Care may help, but **no diagnosis**. Also exclude transient, adaptive changes after a major life event."]
            ] },
            { type: "callout", kind: "caution", title: "Suicidal thoughts", text: "Problems with sexual arousal and satisfaction have been linked to **suicidal thoughts** in female veterans and service members, even after adjusting for probable PTSD and depression (p. 492). Ask." },
            { type: "callout", kind: "pearl", title: "Comorbidity to screen for (p. 493)", text: "Distressing low desire is linked to **depression, anxiety, thyroid problems** and **urinary incontinence**; **arthritis** and inflammatory or irritable bowel disease are linked to **arousal** problems; low desire is also comorbid with adult **sexual and physical abuse** and **alcohol** use." }
          ]
        },
        {
          id: "s13-erectile",
          title: "Erectile disorder",
          pages: "481–482",
          blocks: [
            { type: "criteria", title: "Erectile disorder in brief", code: "F52.21", pages: "481–482", items: [
              ["A", "**At least 1 of 3** on almost all or all (about **75%–100%**) occasions of sexual activity (in the identified situations or, if generalized, in all):", [
                "Marked difficulty **obtaining** an erection during sexual activity.",
                "Marked difficulty **maintaining** an erection until sexual activity is completed.",
                "Marked decrease in erectile **rigidity**."
              ]],
              ["B", "Present for **approximately 6 months** or more."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, severe relationship distress or other significant stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of relatively normal function"], ["Generalized / situational", "All contexts, or only certain stimulation, situations or partners"], ["Severity", "Mild, moderate or severe **distress**"]] },
            { type: "compare", title: "Erectile disorder is not the same as erectile dysfunction (p. 482)", items: [
              { title: "Erectile dysfunction", color: "case", points: ["A **descriptive** term (used in ICD-10) for difficulty getting or keeping an erection.", "Says nothing about duration, frequency or distress.", "Often medical in origin (organic ED has its own N52 codes outside the F chapter; this code detail is outside the manual)."] },
              { title: "Erectile disorder", color: "guide", points: ["The **DSM-5 diagnosis**: dysfunction on 75%–100% of occasions for ~6 months, with distress.", "Not given if a medical condition **fully** explains the problem.", "Code **F52.21**."] }
            ] },
            { type: "list", title: "Associated features (pp. 482–483)", items: [
              "Low self-esteem and self-confidence, a decreased sense of masculinity, depressed mood.",
              "Guilt, self-blame, a sense of failure, anger, worry about disappointing the partner.",
              "**Fear and avoidance** of future sexual encounters.",
              "Less sexual satisfaction and **reduced desire in the partner**."
            ] },
            { type: "case", title: "Clinical vignette: only with a new partner", text: "A 29-year-old man has lost his erection during almost every attempt at sex with his new girlfriend over the past 7 months, and he now dreads seeing her. Morning erections are normal, and he has no trouble with masturbation. He is healthy, does not smoke and takes no medications. The problem began after he was criticized by a previous partner.", point: "Situational, sudden onset after a stressor, age under 40 and preserved morning erections all point to a **psychological** cause: **erectile disorder, acquired, situational**, with severity by his distress." }
          ]
        },
        {
          id: "s13-erectile-clinical",
          title: "Erectile disorder: course, markers and the organic question",
          pages: "483–485",
          blocks: [
            { type: "ladder", title: "Erectile disorder rises steeply with age (p. 483)", ticks: [[0, "0%"], [25, "25%"], [50, "50%"], [75, "75%"], [100, "100%"]], rows: [
              { label: "Under 40", from: 0, to: 10, color: "guide", span: "Under 10%" },
              { label: "Ages 40–80", from: 13, to: 21, color: "guide", span: "13%–21%" },
              { label: "In their 60s", from: 20, to: 40, color: "hy", span: "20%–40%" },
              { label: "Over 70", from: 50, to: 75, color: "case", span: "50%–75%" },
              { label: "70+, Australian study", from: 0, to: 80, color: "case", span: "80%" }
            ], note: "About **20%** of men fear erectile problems at their first sexual experience, and about **8%** have problems that prevent penetration then. No ethnoracial difference was found in a U.S. online survey. Prevalence of lifelong versus acquired is unknown." },
            { type: "compare", title: "Lifelong versus acquired (pp. 482–483)", items: [
              { title: "Lifelong", color: "guide", points: ["Linked to **psychological** factors that are often **self-limiting** or respond to psychological treatment.", "First-attempt failure is linked to an **unfamiliar partner**, drugs or alcohol, not wanting sex and **peer pressure**; most remit without treatment."] },
              { title: "Acquired", color: "case", points: ["Often linked to **biological** factors such as **diabetes** and **cardiovascular disease**.", "Likely to **persist** in most men.", "Risk factors: **age, smoking, lack of exercise, diabetes, decreased desire** (p. 483)."] }
            ] },
            { type: "table", caption: "Organic or psychogenic? Clues from the differential (pp. 484–485)", head: ["Points to a medical cause", "Points to a psychological cause"], rowHeads: false, rows: [
              ["**Gradual** onset", "**Acute** onset after a **stressful life event**"],
              ["**Generalized**: every situation, partner and type of stimulation", "**Situational** and **inconsistent**"],
              ["Age over **40–50** and/or other medical problems (think **vascular disease**)", "Age **under 40**"],
              ["Exception: sudden onset after **nerve injury** (e.g., spinal cord injury) is organic", "Adequate erections during **REM sleep** (nocturnal tumescence testing)"]
            ], note: "A known organic disease does **not** prove cause: a man with diabetes can develop erectile disorder in response to psychological stress (p. 485). Many cases are mixed." },
            { type: "list", title: "Diagnostic markers named in the manual (p. 484)", items: [
              "**Nocturnal penile tumescence** and rigidity during sleep: adequate REM erections suggest a **psychological** cause.",
              "**Doppler ultrasonography**, **intravascular injection** of vasoactive drugs and dynamic infusion **cavernosography** for vascular integrity.",
              "**Pudendal nerve conduction** studies and somatosensory evoked potentials when neuropathy is suspected.",
              "**Bioavailable or free testosterone**, especially with **diabetes**, **low desire**, or **no response to PDE5 inhibitors**; thyroid function.",
              "**Fasting glucose** to screen for diabetes and **serum lipids**: erectile disorder in men **40 and older** predicts future **coronary artery disease**."
            ] },
            { type: "callout", kind: "exam", title: "The heart test", text: "Erectile problems in a man **40 or older** are a warning sign for **coronary artery disease** (p. 484). Check lipids and glucose and ask about cardiovascular risk." },
            { type: "table", caption: "Differential diagnosis (pp. 484–485)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:mdd|Major depressive disorder]]", "Closely linked; erectile problems during severe depression. If depression better explains it, no erectile disorder."],
              ["Normal function", "A man with **excessive expectations** and normal erections."],
              ["[[dx:substance-sexual|Substance/medication-induced]]", "Onset **with** the start of the substance, clearing with stopping or dose reduction."],
              ["Another medical condition", "The **hardest** part of the differential; fully medical cases get no mental disorder diagnosis."]
            ] },
            { type: "list", title: "Comorbidity and consequences (pp. 484–485)", items: [
              "Other sexual diagnoses: **premature ejaculation** and **male HSDD**.",
              "**Anxiety and depression**: depression risk is markedly higher in the **first year** after onset. Erectile problems are common in **PTSD**.",
              "**Lower urinary tract symptoms** from prostatic hypertrophy; dyslipidemia, cardiovascular disease, hypogonadism, multiple sclerosis, diabetes.",
              "Fertility problems; fear and avoidance can prevent new relationships.",
              "**Suicidal thoughts**: elevated in men treated for erectile disorder with comorbid depression; elevated suicide in **prostate cancer** may partly reflect treatment-related ED and depression."
            ] },
            { type: "callout", kind: "culture", text: "Prevalence varies by country, partly because of different expectations and concerns about appearing weak (p. 483). In one online survey, erectile disorder was linked to concern about **genital size** in the United States and Middle East and to fears of **infertility** more often in the Middle East. Distress is **lower in older men** than younger men." }
          ]
        }
      ]
    },
    {
      title: "Orgasm and ejaculation",
      sections: [
        {
          id: "s13-delayed",
          title: "Delayed ejaculation",
          pages: "478–479",
          blocks: [
            { type: "criteria", title: "Delayed ejaculation in brief", code: "F52.32", pages: "478–479", items: [
              ["A", "On almost all or all (about **75%–100%**) occasions of **partnered** sexual activity, and **without wanting the delay**, either:", [
                "Marked **delay** in ejaculation, or",
                "Marked **infrequency or absence** of ejaculation."
              ]],
              ["B", "Present for **approximately 6 months** or more."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, severe relationship distress or other significant stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of relatively normal function"], ["Generalized / situational", "All contexts, or only certain stimulation, situations or partners"], ["Severity", "Mild, moderate or severe **distress**"]] },
            { type: "defs", title: "Reading the criteria (p. 479)", items: [
              ["Partnered", "The criterion counts **partnered** sex: manual, oral, coital or anal. Many men with delayed ejaculation **can ejaculate with self-stimulation** but not with a partner."],
              ["No stopwatch", "There is **no agreed cutoff** for “delay”. Most men’s intravaginal ejaculatory latency (IELT) is about **4–10 minutes**, but the diagnosis rests on clinical judgment of history, age, relationship and stimulation patterns."],
              ["Not wanted", "The delay must be **unwanted**; a man who prefers to last longer has no disorder."],
              ["Expectations", "Not diagnosed if the dissatisfaction is **entirely** due to unrealistic expectations."],
              ["Who seeks help", "In heterosexual couples it is often the **female partner’s distress** that brings him in, but Criterion C still requires his own distress."]
            ] },
            { type: "list", title: "Associated features (pp. 479–480)", items: [
              "**Prolonged thrusting** to the point of exhaustion, genital discomfort or injury before giving up; avoiding sex.",
              "Associated with **very frequent masturbation**, masturbation techniques a partner **cannot easily reproduce**, and a big gap between **masturbation fantasies** and real partnered sex.",
              "Less coital activity, more relationship distress, lower subjective arousal, performance anxiety, general health problems."
            ] },
            { type: "case", title: "Clinical vignette: the couple trying to conceive", text: "A 31-year-old man and his wife have been trying to conceive for a year. He says he almost never ejaculates during intercourse, even after a long time, although he does when masturbating alone, which he does daily with a particular technique. This has been true since his first relationship. He is frustrated and upset. He takes no medications, has normal neurological and hormonal findings, and the marriage is good.", point: "Lifelong, situational (partnered sex only) delayed ejaculation, discovered through a fertility problem. The manual notes that absent ejaculation is often **not volunteered** unless the doctor asks directly (p. 481)." }
          ]
        },
        {
          id: "s13-delayed-clinical",
          title: "Delayed ejaculation: course, risk and differential",
          pages: "480–481",
          blocks: [
            { type: "defs", title: "Prevalence and course (p. 480)", items: [
              ["Prevalence", "**1%–5%** in the United States; up to **11%** in some international studies, partly because definitions differ."],
              ["Age", "Prevalence **rises with age**: ejaculatory volume, force and sensation fall and the **refractory time** lengthens; surgery, illness and drugs lengthen it further."],
              ["Lifelong vs acquired", "Lifelong begins with early sexual experience and continues; acquired follows normal function. Either can be generalized or situational."]
            ] },
            { type: "table", caption: "Risk factors (p. 480)", head: ["Type", "Examples"], rows: [
              ["Psychosocial", "**Depression** and **relationship dissatisfaction** are the main contributors."],
              ["Surgery and injury", "**Radical prostatectomy** and other pelvic surgery; **spinal cord injury**."],
              ["Neurological and endocrine", "Stroke, **multiple sclerosis**, severe diabetes, epilepsy, hormonal abnormalities, **sleep apnea**; age-related loss of fast sensory nerves; falling sex steroids and androgens."],
              ["Substances", "**Alcohol**, **cannabis**."],
              ["Medications", "α-adrenergic blockers such as **tamsulosin**, antihypertensives, **SSRIs** and other antidepressants, **antipsychotics**."]
            ] },
            { type: "table", caption: "Differential diagnosis (p. 481)", head: ["Look-alike", "How to tell"], rows: [
              ["Another medical condition or its treatment", "Delay **fully** explained by illness, injury or surgery: no psychiatric diagnosis. The main challenge is separating this from mixed causes."],
              ["Urological ejaculatory disorders", "**Retrograde ejaculation** or **anejaculation** (hormonal, neurological or anatomical causes, **ejaculatory duct obstruction**)."],
              ["[[dx:substance-sexual|Substance/medication-induced]]", "Antidepressants, antipsychotics, α-sympathetic drugs, alcohol, opioids: diagnose the induced disorder **instead**."],
              ["Orgasm complaint", "Normal ejaculation with **reduced pleasure** (**anhedonic ejaculation**) is **not** delayed ejaculation; use **other specified or unspecified** sexual dysfunction."]
            ] },
            { type: "callout", kind: "exam", title: "Ejaculation is not orgasm", text: "Ejaculation happens in the genitals; orgasm is mainly **subjective**. They usually occur together but not always (p. 481). A complaint about the **feeling** with a normal ejaculatory pattern belongs in the **residual** categories, not here." },
            { type: "callout", kind: "pearl", title: "Comorbidity and consequences (p. 481)", text: "Delayed ejaculation may be more common in **severe major depression**. It causes considerable distress in one or both partners and can lead to a **fertility work-up**." }
          ]
        },
        {
          id: "s13-premature",
          title: "Premature (early) ejaculation",
          pages: "501–502",
          blocks: [
            { type: "criteria", title: "Premature (early) ejaculation in brief", code: "F52.4", pages: "501–502", items: [
              ["A", "A persistent or recurrent pattern of ejaculation during **partnered** sex within **approximately 1 minute** after **vaginal penetration** and **before the person wishes**.", [], "The diagnosis can be used for **nonvaginal** sexual activity, but **no duration criteria** have been set for it."],
              ["B", "Present for **at least 6 months**, on almost all or all (about **75%–100%**) occasions (in identified situations or, if generalized, in all)."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, severe relationship distress or other significant stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of normal latency"], ["Generalized / situational", "All contexts, or only certain stimulation, situations or partners"], ["Mild", "Within about **30 seconds to 1 minute** of vaginal penetration"], ["Moderate", "Within about **15–30 seconds**"], ["Severe", "**Before** sex, **at the start** of sex, or within about **15 seconds**"]] },
            { type: "ladder", title: "Severity is measured in seconds (p. 502)", ticks: [[0, "0 s"], [25, "15 s"], [50, "30 s"], [100, "60 s"]], rows: [
              { label: "Severe", from: 0, to: 25, color: "case", span: "Before or within ~15 s" },
              { label: "Moderate", from: 25, to: 50, color: "hy", span: "~15–30 s" },
              { label: "Mild", from: 50, to: 100, color: "guide", span: "~30–60 s" }
            ], note: "This is the **only** sexual dysfunction graded by **latency** (seconds); the induced disorder is graded by frequency, and the rest by distress. Beyond about 60 seconds the criterion is not met." },
            { type: "defs", title: "Reading the criteria (p. 502)", items: [
              ["Self-estimate is enough", "Estimated and measured latencies **agree well when latency is short**, so the man’s own estimate is accepted; a stopwatch is for research (p. 504)."],
              ["Other partners", "Similar latencies are assumed for **men who have sex with men** and other sexual behaviors."],
              ["The 60 vs 120 second debate", "A 60-second IELT was the old cutoff for lifelong premature ejaculation; expert consensus now considers it **too brief** and recommends **120 seconds**. The DSM-5-TR criterion itself still says about **1 minute**."],
              ["Lack of control", "Most men describe feeling **no control** and dread the next encounter."]
            ] },
            { type: "callout", kind: "exam", title: "Two words that differ from the others", text: "Premature ejaculation says **at least** 6 months (not “approximately”) and puts the **75%–100%** rule in **Criterion B** rather than A (p. 502)." },
            { type: "case", title: "Clinical vignette: ever since he started", text: "A 26-year-old man has ejaculated within about 20 seconds of penetration, before he wants to, on nearly every occasion since his first sexual experience at 19. He feels ashamed and has avoided dating. He has social anxiety in other settings but no depression. He takes no medications or drugs and has no medical problems.", point: "**Premature (early) ejaculation, lifelong, generalized, moderate** (15–30 seconds). PE may be more common with **anxiety disorders, especially social anxiety disorder** (p. 503), and lifelong PE is associated with certain anxiety disorders (p. 504)." }
          ]
        },
        {
          id: "s13-premature-clinical",
          title: "Premature ejaculation: course, risk and differential",
          pages: "502–504",
          blocks: [
            { type: "table", caption: "Prevalence depends on the definition (p. 503)", head: ["Definition or group", "Figure"], rows: [
              ["International, all ages, varied definitions", "**8%–30%**"],
              ["Men 18–30, Switzerland and Turkey", "About **9%–11%**"],
              ["U.S. men 50–59 concerned about how fast they ejaculate", "Up to **55%**"],
              ["Using the ~1-minute criterion", "Only **1%–3%**"]
            ] },
            { type: "compare", title: "Lifelong versus acquired (pp. 503–504)", items: [
              { title: "Lifelong", color: "guide", points: ["Starts with the first sexual experiences and stays **stable**.", "**Moderate genetic** contribution; dopamine and serotonin transporter polymorphisms.", "Associated with certain **anxiety disorders** (p. 504); PE overall may be more common with social anxiety disorder (p. 503)."] },
              { title: "Acquired", color: "case", points: ["Begins after normal latency, usually in or after the **fourth decade**.", "Associated with **thyroid disease**, **prostatitis** and **drug withdrawal** (e.g., **opioid withdrawal**).", "Much less studied."] }
            ] },
            { type: "table", caption: "Differential diagnosis (p. 504)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:substance-sexual|Substance/medication-induced]]", "Early ejaculation due **exclusively** to substance use, intoxication or withdrawal (it can follow **stopping opioids**, p. 508)."],
              ["Normal latency, wants longer", "Not a disorder, even if distressing."],
              ["Episodic early ejaculation", "For example, with a **new partner** at the first encounter, when short latency is common: not a disorder."],
              ["[[dx:erectile-disorder|Erectile disorder]]", "Often coexists; it can be hard to tell which came first. Diagnose both if both are met."]
            ] },
            { type: "list", title: "Consequences (p. 504)", items: [
              "Lower self-esteem and confidence, a sense of lost control, strain on relationships and less satisfaction for the partner.",
              "**Single men** are more bothered than partnered men, because it gets in the way of starting relationships.",
              "Ejaculation **before penetration** can make conception difficult.",
              "**Suicidal thoughts** are elevated in men treated for premature ejaculation who are also depressed; depression likely contributes."
            ] },
            { type: "callout", kind: "culture", text: "What counts as a normal latency differs across cultures, and measured latencies may differ by country. Reports were more common in **arranged marriages**, linked to family pressure and little premarital experience (p. 503). Women’s concern about early ejaculation in partners may be rising with changing attitudes (p. 503)." }
          ]
        },
        {
          id: "s13-orgasmic",
          title: "Female orgasmic disorder",
          pages: "485–486",
          blocks: [
            { type: "criteria", title: "Female orgasmic disorder in brief", code: "F52.31", pages: "485–486", items: [
              ["A", "On almost all or all (about **75%–100%**) occasions of sexual activity (in identified situations or, if generalized, in all), either:", [
                "Marked **delay** in, marked **infrequency** of, or **absence** of orgasm, or",
                "Markedly **reduced intensity** of orgasmic sensations."
              ]],
              ["B", "Present for **approximately 6 months** or more."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, by severe relationship distress (e.g., **partner violence**) or by other major stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of relatively normal function"], ["Generalized / situational", "All contexts, or only certain stimulation, situations or partners"], ["Never had orgasm", "Specify if she has **never experienced an orgasm** under any situation"], ["Severity", "Mild, moderate or severe **distress**"]] },
            { type: "defs", title: "Reading the criteria (p. 486)", items: [
              ["Wide normal range", "Women vary widely in the type and intensity of stimulation that brings orgasm, and in how orgasm feels."],
              ["Clitoral stimulation", "**Many women need clitoral stimulation**; orgasm with clitoral stimulation but **not during intercourse** does **not** meet criteria."],
              ["Inadequate stimulation", "If orgasm difficulty comes from inadequate stimulation, care may help but there is no diagnosis."],
              ["“Approximately”", "Lets the clinician diagnose when duration is a little under 6 months if the picture is clear."],
              ["Satisfaction", "Overall sexual satisfaction is **not strongly tied** to orgasm; many women are highly satisfied while rarely or never having orgasm. Without distress, no disorder."]
            ] },
            { type: "case", title: "Clinical vignette: never with her partner", text: "A 27-year-old woman has not had an orgasm during any sexual activity with her partner of 2 years, despite enjoying sex and feeling aroused, and she has never had one alone either. She is distressed and avoids talking about it. She is not depressed, takes no medications, and her gynecological examination is normal. She has never explored what kind of touch she enjoys.", point: "Consider first whether stimulation has been **adequate**. If the problem persists with adequate stimulation: **female orgasmic disorder, lifelong, generalized**, with the specifier **never experienced an orgasm under any situation**. If it was only lack of effective stimulation, care (education) is still offered but no diagnosis is made." }
          ]
        },
        {
          id: "s13-orgasmic-clinical",
          title: "Female orgasmic disorder: course, risk and differential",
          pages: "486–489",
          blocks: [
            { type: "defs", title: "Prevalence and course (p. 487)", items: [
              ["Orgasm problems", "**8%–72%** of premenopausal women in different studies, **without** accounting for distress; only some are distressed."],
              ["Never", "About **10%** of women internationally never experience orgasm in their lifetime."],
              ["First orgasm", "Anywhere from **before puberty** to well into adulthood; more variable than in men, and reports of having had orgasm **rise with age** as women learn about their bodies."],
              ["Consistency", "Higher with **masturbation** than with a partner."]
            ] },
            { type: "table", caption: "Risk factors (p. 487)", head: ["Type", "Examples"], rows: [
              ["Temperamental", "**Anxiety**, concerns about pregnancy."],
              ["Environmental", "**Relationship problems**, physical and mental health; gender-role expectations and religious norms."],
              ["Physiological", "**Multiple sclerosis**, pelvic nerve damage from **radical hysterectomy**, **spinal cord injury**; **SSRIs** delay or block orgasm; **vulvovaginal atrophy**. Menopause is **not consistently** linked. A possible genetic contribution."]
            ] },
            { type: "callout", kind: "caution", title: "No personality pattern", text: "Specific personality traits or psychopathology have **not** been shown to explain orgasm difficulty (p. 486). Some women find it harder to **communicate** about sex. Orgasm problems often occur alongside **interest and arousal** problems." },
            { type: "table", caption: "Differential diagnosis (pp. 488–489)", head: ["Look-alike", "How to tell"], rows: [
              ["[[dx:mdd|Major depressive disorder]]", "If depression better explains it, no FOD."],
              ["[[dx:substance-sexual|Substance/medication-induced]]", "Onset with the drug (classically an **SSRI**), settling with stopping or dose reduction."],
              ["Another medical condition", "Multiple sclerosis, spinal cord injury."],
              ["Interpersonal factors", "Severe relationship distress, **partner violence**, major stressors."],
              ["[[dx:fsiad|FSIAD]] and other dysfunctions", "Can coexist; another sexual dysfunction does **not** rule out FOD."],
              ["Occasional difficulty", "Short-term or infrequent problems without significant distress are **not** FOD; nor are problems from inadequate stimulation."]
            ] },
            { type: "callout", kind: "culture", text: "How much lack of orgasm is seen as a problem varies by culture (pp. 487–488). Views that downplay women’s sexual satisfaction or frame marital sex as a **duty** reduce help-seeking. Reported inability to reach orgasm varies about **twofold** across world regions. The diagnosis rests on the woman’s **self-report**; physiological measures vary too much (p. 488)." },
            { type: "callout", kind: "pearl", title: "Relationship: cause or effect?", text: "Relationship problems and orgasm difficulty are strongly linked, but it is unclear which causes which (p. 488). Dysfunctions of arousal and satisfaction have been linked to **suicidal thoughts** in female veterans and service members (p. 488)." }
          ]
        }
      ]
    },
    {
      title: "Pain",
      sections: [
        {
          id: "s13-gppd",
          title: "Genito-pelvic pain/penetration disorder",
          pages: "493–495",
          blocks: [
            { type: "criteria", title: "Genito-pelvic pain/penetration disorder in brief", code: "F52.6", pages: "493–494", items: [
              ["A", "**Persistent or recurrent** difficulty with **1 or more** of the following:", [
                "Vaginal **penetration** during intercourse.",
                "Marked vulvovaginal or pelvic **pain** during vaginal intercourse or attempts at penetration.",
                "Marked **fear or anxiety** about vulvovaginal or pelvic pain before, during or after vaginal penetration.",
                "Marked **tightening of the pelvic floor muscles** when vaginal penetration is attempted."
              ]],
              ["B", "Present for **approximately 6 months** or more."],
              ["C", "Causes **clinically significant distress** in the individual."],
              ["D", "Not better explained by a nonsexual mental disorder, by severe relationship distress (e.g., **partner violence**) or by other major stressors, and not due to a substance/medication or another medical condition."]
            ], specifiers: [["Lifelong / acquired", "Since becoming sexually active, or after a period of relatively normal function"], ["Severity", "Mild, moderate or severe **distress**"]], note: "No generalized/situational specifier, and no 75%–100% rule." },
            { type: "callout", kind: "mnemonic", title: "Memory hook: Penetration, Pain, Panic, Pelvic floor (written for this app)", text: "The **four P’s** are the four dimensions of Criterion A. **One** is enough for the diagnosis, but **assess all four**. *DSM check: the manual’s terms are difficulty with penetration, pain, fear or anxiety about pain, and pelvic floor tensing (pp. 493–494).*" },
            { type: "defs", title: "The four dimensions in practice (pp. 494–495)", items: [
              ["A1 Penetration", "Ranges from **no penetration in any situation** (intercourse, gynecological examination, **tampon** insertion) to easy penetration in one situation but not another."],
              ["A2 Pain", "Assess **location and intensity**: **superficial** (vulvovaginal, at entry) or **deep** (pelvic, with deeper penetration); **provoked** only or also spontaneous; burning, cutting, shooting or throbbing. It may persist after sex or occur with urination, and is usually **reproducible on gynecological examination**. Intensity does not track distress in a straight line."],
              ["A3 Fear", "Often a “normal” reaction after repeated pain, leading to **avoidance**; sometimes the fear is out of step with any pain and resembles a **phobia** of penetration or of pain."],
              ["A4 Pelvic floor", "From **reflex-like spasm** on attempted entry to **voluntary guarding** against expected pain; with guarding, penetration may be possible when relaxed. Best assessed by a specialist gynecologist or **pelvic floor physical therapist**."]
            ] },
            { type: "compare", title: "Old names and the medical conditions behind them (pp. 494–495)", items: [
              { title: "Former diagnoses", color: "guide", points: ["**Dyspareunia**: pain during sexual intercourse.", "**Vaginismus**: involuntary muscle contraction making penetration painful or impossible.", "Both are now folded into GPPPD."] },
              { title: "Medical conditions that may be the primary cause", color: "case", points: ["**Vulvodynia**: chronic idiopathic vulvar pain for **at least 3 months**.", "**Provoked vestibulodynia**: contact-induced pain localized to the **vulvar vestibule**.", "Women with these usually report significant distress and **meet criteria** for GPPPD too."] }
            ] },
            { type: "case", title: "Clinical vignette: the couple who came about a baby", text: "A 28-year-old woman and her husband have been married for 3 years and have never had complete intercourse. Whenever penetration is attempted, her pelvic muscles tighten and she feels intense fear of pain; she has never been able to use tampons and has avoided pelvic examinations. They now want a child, which is what brought them in. She is distressed. Her desire is intact for sexual activities that do not involve penetration.", point: "**Genito-pelvic pain/penetration disorder, lifelong** (A1, A3, A4). Coming to treatment only when wanting to **conceive**, tampon difficulty and avoidance of gynecological examinations are classic (pp. 495–496)." }
          ]
        },
        {
          id: "s13-gppd-clinical",
          title: "GPPPD: course, risk and differential",
          pages: "495–498",
          blocks: [
            { type: "defs", title: "Associated features (p. 495)", items: [
              ["Low desire", "Frequently comes with **reduced desire** (FSIAD); desire may be kept for sex that is not painful or does not require penetration."],
              ["Avoidance", "Behavioral avoidance of sex and of **gynecological examinations**, much like a phobia."],
              ["Presentation", "Women who have never had penetration often come only when they **want to conceive**."],
              ["Relationship", "Relationship and marital problems; many say it diminishes their **sense of femininity**."],
              ["Partner responses", "Assess whether the partner responds in a **solicitous, negative or facilitative** way to the pain."]
            ] },
            { type: "defs", title: "Prevalence and course (pp. 495–496)", items: [
              ["Prevalence", "Unknown for the disorder. About **10%–28%** of U.S. women of reproductive age report **recurrent pain with intercourse**; **8%–28%** internationally."],
              ["Early warning", "**Difficulty with or avoidance of tampons** predicts later problems."],
              ["Remission", "Once symptoms last about **6 months**, the chance of **spontaneous remission falls**."],
              ["Peaks", "Pain complaints peak in **early adulthood** and in the **peri- and postmenopausal** years; possibly more after **childbirth**."]
            ] },
            { type: "table", caption: "Risk factors (p. 496)", head: ["Type", "Examples"], rows: [
              ["Temperamental", "Women with prior **mood and anxiety disorders** are about **4 times** as likely to develop it. Pain catastrophizing, low pain self-efficacy, pain avoidance, negative mood; insecure attachment, negative partner responses."],
              ["Environmental", "More often a history of **sexual or physical abuse** and fear of abuse, though many have no such history."],
              ["Physiological", "Superficial pain starting after **vaginal infections** and persisting after they clear; pain or inability with **tampons** before any sexual contact; early puberty, inflammation, **early oral contraceptive** use, more and sensitized pain receptors, lower touch and pain thresholds; pelvic floor **hypertonicity** and poor control."]
            ] },
            { type: "list", title: "Diagnostic markers (p. 497)", items: [
              "For **pain (A2)**: the **cotton-swab test**, the **vulvalgesiometer** and the tampon test measure pain intensity in real time, though none reproduce the sexual context.",
              "For **pelvic floor tension (A4)**: electromyography, dynamometry, **4D ultrasound** by a qualified physical therapist.",
              "For **penetration difficulty (A1)** and **fear (A3)**: **no** validated physiological measures; psychometric inventories can help."
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 497–498)", head: ["Look-alike", "How to tell"], rows: [
              ["Another medical condition", "**Lichen sclerosus, endometriosis, pelvic inflammatory disease, genitourinary syndrome of menopause** often coexist. Treating them **sometimes** helps but often does not, and no test shows which came first. Postmenopausal pain may reflect dryness from falling estrogen."],
              ["[[dx:ssd|Somatic symptom disorder]]", "Some women meet both; it is not yet clear that they can be reliably separated."],
              ["[[dx:specific-phobia|Specific phobia]]", "Some women with GPPPD also have a specific phobia."],
              ["Inadequate stimulation", "Too little foreplay or arousal can cause penetration difficulty, pain or avoidance; the diagnosis may not fit."],
              ["Partner’s dysfunction", "A partner’s **erectile disorder or premature ejaculation** can make penetration difficult."]
            ] },
            { type: "callout", kind: "caution", title: "Only females; what to do for men", text: "By definition GPPPD is given only to females (p. 497). Research on **urological chronic pelvic pain syndrome** suggests men may have similar problems, and male genito-pelvic pain is estimated at **2.2%–9.7%** worldwide, but the research is too thin to extend the diagnosis: use **other specified or unspecified sexual dysfunction** for men who fit the pattern." },
            { type: "callout", kind: "culture", text: "Social narratives that prioritize **penetrative sex** and men’s desire, and portray sex as easy and natural, shape how women interpret pain and seek help (pp. 496–497). In the United States, **Hispanic** women report higher rates, including pain at first intercourse. In a Minneapolis survey only about **half** sought treatment, and many felt stigmatized; inequities in pain treatment may add to this." },
            { type: "callout", kind: "pearl", title: "Comorbidity (p. 498)", text: "Other sexual difficulties and **relationship distress** (usually from the lack of intimacy rather than the pain itself); pelvic and reproductive conditions such as **interstitial cystitis, constipation, vaginal infection, endometriosis, irritable bowel syndrome**; and chronic pain such as **fibromyalgia** and headaches, more so with more severe vulvar pain." }
          ]
        }
      ]
    },
    {
      title: "Substances, medications and residual categories",
      sections: [
        {
          id: "s13-induced",
          title: "Substance/medication-induced sexual dysfunction",
          pages: "504–505",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced sexual dysfunction in brief", code: "F1x.181 · F1x.281 · F1x.981", pages: "504–505", items: [
              ["A", "A clinically significant disturbance in sexual function **predominates** in the clinical picture."],
              ["B", "History, examination or laboratory findings show **both**:", [
                "The symptoms arose **during or shortly after** intoxication with or withdrawal from a substance, or after a medication was **taken or stopped**; **and**",
                "The substance or medication is **capable** of producing them."
              ]],
              ["C", "Not better explained by an **independent** sexual dysfunction. Evidence for one: symptoms **began before** the substance use; they **persist for a substantial time** (e.g., **about 1 month**) after acute withdrawal or severe intoxication ends; or other evidence such as a history of recurrent non-substance-related episodes."],
              ["D", "Does not occur **only during a delirium**."],
              ["E", "Causes **clinically significant distress** in the individual."]
            ], specifiers: [["Onset: intoxication", "Criteria for intoxication are met and symptoms begin during it"], ["Onset: withdrawal", "Criteria for withdrawal are met and symptoms begin during or shortly after it"], ["Onset: medication", "Symptoms began when a medication was **started, changed or withdrawn**"], ["Mild", "On **25%–50%** of occasions of sexual activity"], ["Moderate", "On **50%–75%** of occasions"], ["Severe", "On **75% or more** of occasions"]], note: "Give this diagnosis **instead of** intoxication or withdrawal only when the sexual symptoms predominate and are severe enough to need clinical attention (p. 505)." },
            { type: "defs", title: "Reading the criteria (pp. 505–507)", items: [
              ["No duration rule", "Unlike the primary disorders there is no 6-month requirement; the link is **timing** plus **plausibility**."],
              ["Prescribed medication", "Onset must be **while taking** it (or during its withdrawal). After stopping, the dysfunction usually improves or remits within **days to several weeks**, depending on half-life and withdrawal (p. 507)."],
              ["Too early or too late", "Not this diagnosis if the sexual problem **came first**, or if it lasts **longer than about 1 month** after severe intoxication or withdrawal."],
              ["Severity", "Graded by **how often** it happens, unlike the primary disorders, which are graded by distress."]
            ] },
            { type: "callout", kind: "exam", title: "The proof that clinches it", text: "A **clear** diagnosis is made when the problem starts **after** the drug is begun, **goes away** when it is stopped, and **comes back** when the same drug is restarted (p. 509). Effects that appear only after **years** of use (for example, nicotine or alcohol) are very hard to attribute with certainty." },
            { type: "callout", kind: "caution", title: "Which classes can do it, and when (p. 507)", text: "**Intoxication**: alcohol; opioids; sedatives, hypnotics or anxiolytics; stimulants (including cocaine); other or unknown substances. **Withdrawal**: alcohol; opioids; sedatives, hypnotics or anxiolytics; other or unknown. **Stimulants are not listed for withdrawal-onset sexual dysfunction.** The coding table has **no cannabis or tobacco row** (p. 505), although the text discusses both as possible contributors (p. 507)." }
          ]
        },
        {
          id: "s13-induced-coding",
          title: "Coding and recording the induced disorder",
          pages: "505–506",
          blocks: [
            { type: "table", caption: "ICD-10-CM codes for substance/medication-induced sexual dysfunction (p. 505)", head: ["Substance class", "With mild use disorder", "With moderate or severe use disorder", "Without use disorder"], rows: [
              ["Alcohol", "F10.181", "F10.281", "F10.981"],
              ["Opioid", "F11.181", "F11.281", "F11.981"],
              ["Sedative, hypnotic or anxiolytic", "F13.181", "F13.281", "F13.981"],
              ["Amphetamine-type (or other stimulant)", "F15.181", "F15.281", "F15.981"],
              ["Cocaine", "F14.181", "F14.281", "F14.981"],
              ["Other (or unknown) substance", "F19.181", "F19.281", "F19.981"]
            ] },
            { type: "flow", title: "Picking the 4th character", steps: [
              ["Is there a use disorder for the same class?", "If none (e.g., one heavy use, or a prescribed medication): **9**"],
              ["Mild use disorder", "4th character **1**; write “mild [substance] use disorder with…”"],
              ["Moderate or severe", "4th character **2**; write “moderate” or “severe [substance] use disorder with…”"]
            ], note: "The use disorder is **folded into** this one code. **Do not** give a separate use disorder diagnosis (p. 505)." },
            { type: "steps", title: "How to write it (p. 506)", items: [
              ["1. Comorbid use disorder first (if any), then “with”. ", "e.g., “severe alcohol use disorder with…”"],
              ["2. The induced disorder named for the substance. ", "“…alcohol-induced sexual dysfunction…”"],
              ["3. Onset. ", "“…with onset during intoxication” / “during withdrawal” / “with onset after medication use…”"],
              ["4. Severity. ", "“…, moderate.”"]
            ] },
            { type: "table", caption: "Recording examples (p. 506)", head: ["Situation", "Diagnosis"], rows: [
              ["Erectile problems during intoxication in a man with **severe** alcohol use disorder", "**F10.281** severe alcohol use disorder with alcohol-induced sexual dysfunction, with onset during intoxication, moderate"],
              ["After one heavy use of amphetamine, no use disorder", "**F15.981** amphetamine-induced sexual dysfunction, with onset during intoxication"],
              ["A medication with no class of its own", "**F19.981** fluoxetine-induced sexual dysfunction (name the drug)"],
              ["Cause is a substance, but which one is unknown", "**F19.981** unknown substance-induced sexual dysfunction"],
              ["Two substances both contribute", "List **each** separately: F14.181 mild cocaine use disorder with cocaine-induced sexual dysfunction, with onset during intoxication, moderate; F19.981 fluoxetine-induced sexual dysfunction, with onset after medication use, moderate"]
            ] },
            { type: "callout", kind: "exam", title: "SSRI coding trap", text: "Antidepressants and antipsychotics are **not** among the named classes, so a sexual side effect of **fluoxetine, paroxetine or risperidone** is coded **F19.981** with the drug’s name written in (p. 506). Benzodiazepines **are** a named class: **F13.981** if there is no sedative use disorder." }
          ]
        },
        {
          id: "s13-induced-agents",
          title: "Which drugs do what",
          pages: "507–509",
          blocks: [
            { type: "table", caption: "Medications and substances described in the manual (pp. 507–508)", head: ["Group", "What the manual says"], rows: [
              ["Antidepressants", "Most common: trouble with **orgasm or ejaculation in men** and **arousal in women**; desire and erection problems less often. Effects occur **regardless of depression level**. About **30%** of complaints are clinically significant. **25%–80%** of people on MAOIs, TCAs, serotonergic and combined serotonergic-adrenergic antidepressants report sexual effects; highest with **citalopram, fluoxetine, fluvoxamine, paroxetine, sertraline and venlafaxine**."],
              ["Lower-risk antidepressants", "[[stahl:drugs/bupropion|Bupropion]], [[stahl:drugs/mirtazapine|mirtazapine]], [[stahl:drugs/nefazodone|nefazodone]] and [[stahl:drugs/vilazodone|vilazodone]]."],
              ["Antipsychotics", "About **50%** have problems with desire, erection, lubrication, ejaculation or orgasm, with **typical and atypical** agents; less common with **prolactin-sparing** agents or those that do not block dopamine receptors."],
              ["Mood stabilizers", "Effects unclear; **lithium** and **anticonvulsants** may reduce desire, possibly **except lamotrigine**. **Gabapentin** may cause orgasm problems."],
              ["Anxiolytics", "**Benzodiazepines**: possibly more erectile and orgasm problems. None reported with **buspirone**."],
              ["Hormonal and other medications", "**Hormonal contraceptives**; cardiovascular, cytotoxic, gastrointestinal and hormonal drugs; **5-α-reductase inhibitors** (finasteride, dutasteride) can reduce erection, ejaculation and libido."],
              ["Opioids", "Common with **methadone** and high-dose opioids for pain; **seldom** reported with **buprenorphine**. **Heroin** users about **60%–70%**, more than amphetamine or MDMA users. Early ejaculation can follow **stopping** opioids."],
              ["Alcohol, nicotine, cannabis", "Chronic **alcohol** and **nicotine** use: erectile problems, possibly only after **years**. **Cannabis** is a CNS depressant and may be a risk factor, though some report better orgasm satisfaction."]
            ] },
            { type: "ladder", title: "Course of antidepressant-induced dysfunction (p. 508)", ticks: [[0, "0"], [4.4, "8 d"], [16.7, "1 mo"], [100, "6 mo"]], rows: [
              { label: "Earliest onset", from: 0, to: 4.4, color: "case", span: "As early as 8 days" },
              { label: "Spontaneous remission", from: 0, to: 100, color: "guide", span: "~30% with mild–moderate orgasm delay, within 6 months" }
            ], note: "In some people, **SSRI-induced** sexual dysfunction **persists after the drug is stopped** (p. 508). Sexual side effects increase with **age**. Men more often report desire and orgasm problems, women arousal problems." },
            { type: "callout", kind: "key", title: "Why it matters", text: "Sexual side effects lead people to **stop or skip** their medication, which can make antidepressants fail (p. 508). Ask about sexual function **before** starting a drug and at follow-up: underreporting is the reason prevalence is unclear (p. 507)." },
            { type: "update", kind: "post", year: "2019", title: "Persistent sexual dysfunction after SSRIs and SNRIs", source: "European Medicines Agency, PRAC review concluded May 2019", text: "The EMA’s safety committee recommended that product information for **all SSRIs and SNRIs** mention reports of **long-lasting sexual dysfunction** continuing after the drug is stopped. Often called post-SSRI sexual dysfunction (PSSD), it is **not** a DSM or ICD diagnosis; the manual only notes that SSRI-induced dysfunction may persist after discontinuation (p. 508)." },
            { type: "table", caption: "Differential diagnosis (pp. 508–509)", head: ["Look-alike", "How to tell"], rows: [
              ["The underlying mental disorder", "**Depressive, bipolar, anxiety and psychotic** disorders all disturb sexual function, so separating the drug effect from the illness is hard. A close link to starting or stopping the drug is the key."],
              ["An independent sexual dysfunction", "Began **before** the drug, or persists **more than about a month** after stopping."],
              ["Intoxication or withdrawal alone", "Use those diagnoses unless the sexual symptoms **predominate** and need attention."],
              ["[[dx:delirium|Delirium]]", "Sexual disturbance only during a delirium is not diagnosed separately."]
            ] }
          ]
        },
        {
          id: "s13-residual",
          title: "Other specified and unspecified sexual dysfunction",
          pages: "509",
          blocks: [
            { type: "compare", title: "The two residual categories (p. 509)", items: [
              { title: "Other specified (F52.8)", color: "guide", points: ["Distressing sexual symptoms that predominate but **do not meet full criteria** for any specific sexual dysfunction.", "The clinician **records the reason**: “other specified sexual dysfunction, sexual aversion”."] },
              { title: "Unspecified (F52.9)", color: "case", points: ["Same threshold problem.", "The clinician **chooses not to give** the reason, or there is **not enough information**."] }
            ] },
            { type: "list", title: "Presentations the chapter sends here", items: [
              "**Sexual aversion** (the manual’s example, p. 509).",
              "**Anhedonic ejaculation**: normal ejaculation with reduced pleasure (p. 481).",
              "**Genito-pelvic pain in males** fitting the GPPPD pattern (p. 497).",
              "Symptoms close to a specific disorder but **short of** its duration or frequency, with distress (the app’s application of the general rule, not an example the manual names)."
            ] },
            { type: "callout", kind: "caution", title: "Residual is not a dumping ground for non-disorders", text: "Both categories still require **clinically significant distress**. Desire discrepancy, inadequate stimulation or a one-off difficulty are not disorders at all, and get **no** diagnosis (though care or a **Z code** may still be appropriate)." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s13-differential",
          title: "The differential in five questions",
          pages: "477–478",
          blocks: [
            { type: "flow", title: "Work through these in order (pp. 477–478)", vertical: true, steps: [
              ["1. Is it a dysfunction at all?", "Adequate stimulation? Realistic expectations? Present on most occasions for about 6 months? Distressing to the person? A desire discrepancy, a new-partner episode or normal aging is not a disorder.", "hy"],
              ["2. Does a nonsexual mental disorder explain it?", "Depression, bipolar, anxiety, PTSD or psychotic disorder that **mostly explains** the problem: diagnose **only that disorder**.", "guide"],
              ["3. Does a substance or medication explain it?", "Onset with starting, changing or stopping a drug: **substance/medication-induced sexual dysfunction**.", "case"],
              ["4. Does a medical condition explain it?", "Fully explained (e.g., peripheral neuropathy, pelvic nerve damage): **no psychiatric diagnosis**; the medical condition is coded.", "clin"],
              ["5. Do severe relationship problems or stressors explain it?", "Severe relationship distress, **partner violence** or major stressors: **no sexual dysfunction**; list a **Z code** such as **Z63.0** relationship distress with spouse or intimate partner.", "hy"]
            ], note: "If none fully explains it, diagnose the specific dysfunction(s), **all** that apply, with subtypes and severity. Coexisting conditions are allowed: often no precise causal link can be established (p. 478)." },
            { type: "callout", kind: "key", title: "Explains versus coexists", text: "The rule-outs apply only when the other condition **better explains** the problem. A man with diabetes can still have erectile disorder from stress (p. 485); a woman with endometriosis can still have GPPPD (p. 497). Many cases are mixed, and **both** a medical condition and a sexual dysfunction can be recorded (p. 478)." },
            { type: "table", caption: "Classic confusions", head: ["If you see…", "Think…", "Not…"], rows: [
              ["Orgasm with clitoral stimulation but not in intercourse", "Normal variation", "Female orgasmic disorder"],
              ["A man who cannot ejaculate with a partner but can alone", "[[dx:delayed-ejaculation|Delayed ejaculation]], situational", "Erectile disorder"],
              ["Normal ejaculation, reduced pleasure", "[[dx:other-specified-sexual|Other specified]] / unspecified", "Delayed ejaculation"],
              ["A woman with low desire who enjoys sex once it starts", "Count the FSIAD items: 3 of 6 still possible", "Automatically excluded"],
              ["A man with low desire but frequent fantasies", "Not male HSDD (needs **both**)", "Male HSDD"],
              ["Sexual problems only during a major depressive episode", "[[dx:mdd|MDD]] alone", "A separate sexual dysfunction"],
              ["New anorgasmia 2 weeks after starting sertraline", "[[dx:substance-sexual|F19.981]] sertraline-induced", "Female orgasmic disorder"],
              ["Erectile failure on first night with a new partner", "Common, usually remits", "Erectile disorder"],
              ["Lifelong absent desire in a person who identifies as asexual", "No diagnosis", "Male HSDD or FSIAD"],
              ["Pelvic pain with penetration in a man", "[[dx:other-specified-sexual|Other specified]] / unspecified", "GPPPD"]
            ] },
            { type: "callout", kind: "pearl", title: "Use the helper", text: "The [[helper:sexual-cause|primary or secondary helper]] walks through the five questions, and the [[helper:sexual|sexual dysfunction helper]] picks the specific disorder and its specifiers." }
          ]
        },
        {
          id: "s13-numbers",
          title: "Numbers to know",
          pages: "478–508",
          blocks: [
            { type: "table", caption: "Thresholds and figures most likely to be tested", head: ["Item", "Number", "Page"], rows: [
              "Criteria",
              ["Frequency rule (where it applies)", "**~75%–100%** of occasions", "478–502"],
              ["Duration (all specific disorders)", "**~6 months** (premature ejaculation: **at least** 6 months)", "478–502"],
              ["FSIAD", "**3 of 6** indicators", "489"],
              ["Erectile disorder", "**1 of 3** symptoms", "481"],
              ["GPPPD", "**1 of 4** dimensions", "493"],
              ["Premature ejaculation", "Within **~1 minute** of vaginal penetration; mild **30–60 s**, moderate **15–30 s**, severe **<15 s** or before", "501–502"],
              ["Induced: independence clue", "Persisting **~1 month** after intoxication or withdrawal", "505"],
              ["Induced: severity", "**25%–50%**, **50%–75%**, **75%+** of occasions", "506"],
              "Figures",
              ["Typical IELT", "**~4–10 minutes**", "479"],
              ["Proposed lifelong PE cutoff", "**120 s** (old: 60 s)", "502"],
              ["Erectile disorder ages 40–80", "**13%–21%**; over 70: **50%–75%**", "483"],
              ["Delayed ejaculation (U.S.)", "**1%–5%**", "480"],
              ["Premature ejaculation by ~1-minute rule", "**1%–3%**", "503"],
              ["Women never experiencing orgasm", "**~10%**", "487"],
              ["Women with chronic low desire", "**~30%**", "491"],
              ["Loss of desire → loss of arousal in women", "**~9×** more likely", "490"],
              ["Recurrent pain with intercourse (U.S.)", "**10%–28%**", "495"],
              ["Mood/anxiety disorder → GPPPD", "**4×** risk", "496"],
              ["Vulvodynia duration", "**≥3 months**", "495"],
              ["Men with low desire and distress", "**<2%**", "500"],
              ["Antidepressant sexual effects", "**25%–80%**; onset as early as **8 days**", "507–508"],
              ["Antipsychotic sexual effects", "**~50%**", "508"],
              ["Heroin users with sexual problems", "**~60%–70%**", "508"]
            ] },
            { type: "ladder", title: "Chapter 13: time windows", ticks: [[0, "0"], [16.7, "1 mo"], [50, "3 mo"], [100, "6 mo"]], rows: [
              { label: "Specific disorders", from: 0, to: 100, color: "guide", span: "~6 months" },
              { label: "Vulvodynia (medical)", from: 0, to: 50, color: "clin", span: "≥3 months" },
              { label: "Induced: persisting past", from: 0, to: 16.7, color: "case", span: "~1 month → independent" },
              { label: "SSRI onset", from: 0, to: 4.4, color: "hy", span: "As early as 8 days" }
            ], note: "Spontaneous remission of mild–moderate antidepressant orgasm delay: about **30%** within **6 months** (p. 508)." }
          ]
        },
        {
          id: "s13-treatment",
          title: "Treatment bridge (outside the DSM)",
          blocks: [
            { type: "callout", kind: "caution", title: "Outside the DSM", text: "The manual does not cover treatment. This section summarizes guideline-level care as of **October 2026** for orientation; confirm doses, approvals and local availability (including in the Philippines) before prescribing." },
            { type: "table", caption: "First steps by disorder", head: ["Disorder", "Usual approach"], rows: [
              ["All", "Take a **sexual history** with the five factors; review **medications**, alcohol and drugs; screen for **depression**, anxiety and relationship violence; involve the partner when appropriate; give **education**."],
              ["Erectile disorder", "Shared decision-making among all suitable options (AUA 2018 dropped the stepwise first/second/third-line approach): **PDE5 inhibitors** (sildenafil, tadalafil, vardenafil, avanafil; **never with nitrates**), vacuum devices, intraurethral or intracavernosal **alprostadil**, or penile prosthesis; add psychosexual therapy where psychological factors contribute. In practice most men start with a PDE5 inhibitor. Assess **cardiovascular risk**."],
              ["Premature ejaculation", "Behavioral methods (stop–start, squeeze); **daily SSRIs** such as [[stahl:drugs/paroxetine|paroxetine]] or [[stahl:drugs/sertraline|sertraline]], or [[stahl:drugs/clomipramine|clomipramine]]; on-demand **dapoxetine** where approved (not in the United States); topical **anesthetic** sprays or creams (AUA/SMSNA 2020). None is FDA-approved for PE."],
              ["Delayed ejaculation", "No approved drug. Reduce or switch **serotonergic** drugs; sex therapy, including changing idiosyncratic masturbation habits; evaluate for hypogonadism and neuropathy."],
              ["Male HSDD", "Treat **documented hypogonadism** or **hyperprolactinemia**; review drugs; couples and sex therapy."],
              ["FSIAD (low desire)", "Sex therapy, CBT and **mindfulness**-based approaches; [[stahl:drugs/bupropion|bupropion]] off-label; **flibanserin** (daily, at bedtime) or **bremelanotide** (injection before sex) for HSDD where indicated; **transdermal testosterone** for postmenopausal women (Global Consensus 2019; off-label in many countries)."],
              ["Female orgasmic disorder", "**Directed masturbation**, sensate focus, CBT; adjust SSRIs; treat vulvovaginal atrophy."],
              ["GPPPD", "**Pelvic floor physical therapy** and **CBT** (first line for vulvodynia, AAFP 2024); graded **vaginal dilators** and exposure; treat medical causes such as **genitourinary syndrome of menopause** (local estrogen); multidisciplinary care."]
            ] },
            { type: "table", caption: "Managing medication-induced sexual dysfunction", head: ["Strategy", "Notes"], rows: [
              ["Ask early", "Ask before starting and at every follow-up; patients rarely volunteer it."],
              ["Wait", "Some improve on their own (about **30%** of mild–moderate orgasm delay within 6 months, p. 508)."],
              ["Lower the dose", "If the illness allows."],
              ["Switch", "To [[stahl:drugs/bupropion|bupropion]], [[stahl:drugs/mirtazapine|mirtazapine]], [[stahl:drugs/vortioxetine|vortioxetine]] or [[stahl:drugs/vilazodone|vilazodone]]; for antipsychotics, to a **prolactin-sparing** agent such as [[stahl:drugs/aripiprazole|aripiprazole]]."],
              ["Add", "**Sildenafil** for antidepressant-induced erectile dysfunction in men; **bupropion** augmentation helped women in trials (Cochrane review, 2022)."],
              ["Opioid treatment", "Sexual problems are seldom reported with [[stahl:drugs/buprenorphine|buprenorphine]] compared with [[stahl:drugs/methadone|methadone]] (p. 508)."]
            ] },
            { type: "update", kind: "post", year: "2025", title: "Flibanserin approved for postmenopausal women", source: "FDA approval reported December 15, 2025 (Urology Times; Contemporary OB/GYN); Vyleesi prescribing information", text: "The FDA expanded **flibanserin (Addyi)**, approved in 2015 for premenopausal women with hypoactive sexual desire disorder, to **postmenopausal women younger than 65**. Its warnings about **alcohol** with low blood pressure and fainting still apply. **Bremelanotide (Vyleesi)** remains indicated for **premenopausal** women with acquired, generalized HSDD. Both labels use the older term HSDD, which corresponds to the desire side of DSM-5-TR’s FSIAD." },
            { type: "update", kind: "post", year: "2026", title: "Guideline status in October 2026", source: "AUA Erectile Dysfunction guideline (Burnett et al., J Urol 2018); AUA/SMSNA Disorders of Ejaculation guideline (2020); Global Consensus Position Statement on the Use of Testosterone Therapy for Women (2019); Cochrane review CD003382 (2022); AAFP FP Essentials no. 547 (2024)", text: "No new drug for erectile disorder, premature or delayed ejaculation, orgasm or pain disorders has been approved in the United States since these guidelines. An updated AUA erectile dysfunction guideline may be in preparation; check for it." },
            { type: "callout", kind: "pearl", title: "Links to the Stahl app", text: "For mechanisms of antidepressant sexual side effects see Stahl’s [[stahl:c/ch07/guide/s7-ssri|SSRI section]]; for prolactin and antipsychotics see [[stahl:c/ch05/guide/s5-prolactin|prolactin]]." }
          ]
        }
      ]
    }
  ]
});
