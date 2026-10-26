/* Chapter 14 study guide. Source: DSM-5-TR, Gender Dysphoria (pp. 511–520).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. Codes checked against ICD-10-CM through FY2027 (October 1, 2026):
   F64.0, F64.2, F64.8 and F64.9 are unchanged; F64.A was added (see the coding section). Everything about treatment,
   guidelines, law and ICD-11 is outside the DSM and labeled as such. */
SP.add("ch14", "guide", {
  intro: "This chapter has **one diagnosis**, gender dysphoria, with **two criteria sets**: one for **children** (F64.2) and one for **adolescents and adults** (F64.0), plus the usual other specified (F64.8) and unspecified (F64.9) categories (p. 511). The core idea is a **marked incongruence** between the gender a person **experiences or expresses** and the gender they were **assigned**, lasting **at least 6 months**, together with **clinically significant distress or impairment** (pp. 512–513). Children need **6 of 8** manifestations, and the first (**a strong desire to be, or insistence that one is, another gender**) must be among them; adolescents and adults need **2 of 6**. The diagnosis is about the **dysphoria**, not about identity: being transgender or gender diverse is **not** a disorder, and distress caused by **stigma** is not what the diagnosis measures (pp. 511–512). The [[helper:gender|gender dysphoria helper]] walks you through the reasoning.",
  objectives: [
    "Define the chapter’s terms the way the manual uses them: **sex**, **gender**, **gender assignment**, **experienced/expressed gender**, **gender dysphoria** (descriptive and diagnostic), **transgender**, **cisgender**, **gender-affirming treatment** and **disorder/difference of sex development**.",
    "State the criteria for gender dysphoria in **children** (**6 of 8**, with **A1** required, for **6 months**, plus distress or impairment) and in **adolescents and adults** (**2 of 6**, for **6 months**, plus distress or impairment).",
    "Apply the two specifiers: **with a disorder/difference of sex development** (code the DSD too) and, for adolescents and adults, **posttransition**.",
    "Describe how the picture differs by age, including the **anticipated** secondary sex characteristics of young adolescents and the **two trajectories** (early/prepubertal onset and late/postpubertal onset).",
    "Recall the prevalence, sex-ratio, persistence and **suicide-risk** figures the manual gives, and the comorbidity pattern.",
    "Separate gender dysphoria from **nonconformity to gender roles**, **transvestic disorder**, **body dysmorphic disorder**, **autism spectrum disorder**, **schizophrenia** and other presentations, and know when two diagnoses are given together.",
    "Code correctly: **F64.2**, **F64.0**, **F64.8**, **F64.9**, the DSD code when the specifier applies, and know what the new ICD-10-CM code **F64.A** (October 2026) is and is not."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s14-map",
          title: "How the chapter is built",
          pages: "511–520",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as printed in DSM-5-TR, 2022; unchanged through October 2026)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:gender-dysphoria-children|Gender dysphoria in children]]", "F64.2", "Marked incongruence for **≥6 months**, **6 of 8** manifestations including **A1**, plus distress or impairment", "512"],
              ["[[dx:gender-dysphoria-adults|Gender dysphoria in adolescents and adults]]", "F64.0", "Marked incongruence for **≥6 months**, **2 of 6** manifestations, plus distress or impairment; may be **posttransition**", "512–513"],
              ["[[dx:other-specified-gender-dysphoria|Other specified gender dysphoria]]", "F64.8", "Distressing symptoms short of full criteria, **reason recorded** (e.g., **brief** gender dysphoria under 6 months)", "520"],
              ["[[dx:unspecified-gender-dysphoria|Unspecified gender dysphoria]]", "F64.9", "Reason not given, or not enough information", "520"]
            ] },
            { type: "callout", kind: "key", title: "One diagnosis, two criteria sets, four ideas", text: "1) The problem being diagnosed is **dysphoria** (distress from incongruence), **not identity**: the manual says the current name moves the focus away from identity, which is where DSM-IV’s “gender identity disorder” sat (p. 512). 2) Distress from **stigma** is a different thing, which may co-occur but is not the diagnosis (p. 511). 3) The **children’s** criteria are **concrete and behavioral**; the **adolescent/adult** criteria are about the body and about being treated as one’s gender (p. 515). 4) Many people with incongruence are **not** distressed; many become distressed when the **hormones or surgery they want are unavailable** (p. 512)." },
            { type: "update", kind: "tr", title: "What the text revision changed", text: "The criteria, specifiers and codes are the same as in DSM-5 (2013). The text revision updated the **vocabulary**: it speaks of **individuals assigned male/female at birth** and **experienced/expressed gender**, calls “biological sex” and “natal gender” **historical** terms, uses **gender-affirming** rather than “sex reassignment” for hormones and surgery (while keeping the latter as a historical name), and reworked the descriptive text on prevalence, course, culture, sex and gender, suicide risk and functional consequences (pp. 511–519). The posttransition specifier’s examples now name **vulvovaginoplasty**, **transmasculine chest surgery**, **phalloplasty** and **metoidioplasty** (p. 513). Confirm details against pp. 511–520." },
            { type: "p", text: "Read the terminology section first: most exam errors in this chapter come from mixing up **sex**, **gender**, **gender identity** and **gender dysphoria**." }
          ]
        },
        {
          id: "s14-terms",
          title: "The language of sex and gender",
          pages: "511–512",
          blocks: [
            { type: "p", text: "The manual opens by admitting that this field is **controversial** and that its terms change over time and between disciplines, and that in English “sex” means both male/female and sexuality (p. 511). It then fixes its own definitions, which is what the exam tests." },
            { type: "defs", title: "The manual’s definitions (pp. 511–512)", items: [
              ["Sex, sexual", "The **biological** markers of male and female, understood through reproductive capacity: sex **chromosomes**, **gonads**, **sex hormones** and unambiguous internal and external **genitalia**."],
              ["Disorder/difference of sex development (DSD)", "Somatic **intersex** conditions; the older words were hermaphroditism and pseudohermaphroditism. Examples: **ambiguous genitalia** (clitoromegaly, micropenis), a mismatch of internal and external anatomy (**complete androgen insensitivity**), incomplete development (**gonadal agenesis**), sex chromosome anomalies (**Turner**, **Klinefelter**) and disorders of gonadal development (**ovotestes**)."],
              ["Gender", "The **lived role** in society, usually also recognized in law, as boy or girl, man or woman, or another gender. Biology contributes, interacting with social and psychological factors."],
              ["Gender assignment", "Being assigned male or female, usually **at birth from phenotypic sex**: the **birth-assigned gender** (historically “biological sex” or “natal gender”). **Assigned sex/gender** also covers assignments and reassignments made in **infancy or early childhood**, usually with intersex conditions."],
              ["Gender-atypical", "Bodily features or behavior that are **statistically** unusual for the assigned gender in a given society and era. **Gender-nonconforming**, **gender variant** and **gender diverse** are the nondiagnostic alternatives."],
              ["Gender reassignment", "An **official**, sometimes legal, change of gender."],
              ["Gender-affirming treatment", "**Hormones**, **surgery** or both, intended to bring the body into line with the **experienced gender**."],
              ["Gender identity", "A **social identity**: male, female, something **in between** (gender fluid) or **other than** male or female (gender neutral). The manual notes a recent proliferation of identities."],
              ["Gender dysphoria (descriptive)", "The **distress** that **may** accompany incongruence between experienced/expressed and assigned gender. As a **diagnosis** it is defined more narrowly by the criteria. It does **not** mean distress from **stigma**."],
              ["Transgender", "The broad group whose gender identity **differs** from their birth-assigned gender."],
              ["Cisgender", "Gender expression **matches** the birth-assigned gender (also “nontransgender”)."],
              ["Transsexual", "A **historical** term for someone who seeks, is undergoing or has completed a **social transition** from male to female or female to male, in many but not all cases with hormones and genital, breast or other surgery (historically “sex reassignment surgery”)."]
            ] },
            { type: "compare", title: "Four words that are not interchangeable", items: [
              { title: "Sex", color: "mech", points: ["Chromosomes, gonads, hormones, genitalia.", "**Assigned** at birth from the phenotype."] },
              { title: "Gender", color: "guide", points: ["The lived, social, usually legal **role**.", "Boy/girl, man/woman, or another gender."] },
              { title: "Gender identity", color: "hy", points: ["The person’s **own** sense of being male, female, in between or other.", "Transgender when it differs from the assigned gender; cisgender when it matches."] },
              { title: "Gender dysphoria", color: "case", points: ["**Distress** from the incongruence.", "Only a **diagnosis** when the criteria, including duration and distress or impairment, are met."] }
            ] },
            { type: "callout", kind: "exam", title: "The exam sentence", text: "Transgender identity is **not** a mental disorder. Gender dysphoria is diagnosed when the incongruence produces **clinically significant distress or impairment**, has lasted **6 months** and meets the count of manifestations (pp. 512–513). A transgender adult who is comfortable, functioning well and wants nothing changed does **not** have gender dysphoria." },
            { type: "callout", kind: "culture", title: "Why the manual chose these words", text: "The chapter says it uses terms as **clinicians who specialize in gender dysphoria** use them (p. 511), and that the current name is more **descriptive** than DSM-IV’s “gender identity disorder,” putting the clinical problem on the **dysphoria**, not on identity as such (p. 512). In clinical notes, use the person’s **name and pronouns**, and record the assigned sex only where it is medically relevant (teaching point written for this app)." }
          ]
        },
        {
          id: "s14-coding",
          title: "Codes and how to record them",
          pages: "512–513, 520",
          blocks: [
            { type: "table", caption: "ICD-10-CM codes for the chapter", head: ["Diagnosis", "Code", "ICD-10-CM title (not the DSM name)"], rows: [
              ["Gender dysphoria in children", "**F64.2**", "Gender identity disorder of childhood"],
              ["Gender dysphoria in adolescents and adults", "**F64.0**", "Transsexualism"],
              ["Other specified gender dysphoria", "**F64.8**", "Other gender identity disorders"],
              ["Unspecified gender dysphoria", "**F64.9**", "Gender identity disorder, unspecified"],
              ["Specifier: with a DSD", "**Add the DSD code**", "e.g., **E25.0** congenital adrenal hyperplasia, **E34.50** androgen insensitivity syndrome (p. 512)"]
            ] },
            { type: "callout", kind: "exam", title: "The coding pattern", text: "The code follows the **criteria set**, which follows **age and pubertal status**: children **F64.2**, adolescents and adults **F64.0**. The **posttransition** specifier does **not** change the code. The DSD specifier adds a **second code** for the DSD itself; the manual’s coding note says to code **both** (pp. 512–513). The ICD-10-CM titles still use older ICD-10 language (“transsexualism,” “gender identity disorder”); write the **DSM name** in the record." },
            { type: "steps", title: "Recording the diagnosis", items: [
              ["1. Name and set", "Gender dysphoria in children, or gender dysphoria in adolescents and adults."],
              ["2. Specifiers", "With a disorder/difference of sex development (only if it is **specific, codable and documented** in the record, p. 513); posttransition (adolescents and adults)."],
              ["3. Codes", "F64.2 or F64.0; **plus** the DSD code when that specifier applies."],
              ["4. Residual reason", "Other specified: name, then the reason, e.g., “other specified gender dysphoria, brief gender dysphoria” (p. 520)."]
            ] },
            { type: "update", kind: "post", year: "2026", title: "New ICD-10-CM code F64.A (October 1, 2026)", source: "ICD-10-CM FY2027 code tables (effective October 1, 2026), as listed by AAPC and other code references; CDC ICD-10-CM Coordination and Maintenance Committee meetings of September 2025 and March 2026 (topic “Gender identity disorder, in remission”); APA DSM-5-TR coding updates page, checked October 26, 2026", text: "The FY2027 update added **F64.A, “Gender identity disorder, in remission,”** with the inclusion term **“gender dysphoria, in remission (desistance).”** It is the first change in the F64 block in years. **F64.0, F64.2, F64.8 and F64.9 are unchanged**, and the APA has **not** issued a DSM-5-TR coding update for this chapter, so the DSM diagnoses still map to F64.2 and F64.0. DSM-5-TR has **no remission specifier** for gender dysphoria: F64.A is an ICD-10-CM administrative code for a person whose previously diagnosed gender dysphoria has **resolved**, not a DSM diagnosis, and it should not be used for someone who currently meets criteria. The proposal came from an advocacy group, and companion **personal-history Z codes** for gender transition and detransition were also reported for FY2027; check the official FY2027 tabular list and your institution’s coding guidance before using any of them. Use the code set in force on the date of service." },
            { type: "callout", kind: "caution", title: "Outside the DSM: ICD-11 is different", text: "In **ICD-11** (in effect since 2022) the WHO moved this condition **out of the mental disorders chapter**: **gender incongruence of adolescence or adulthood (HA60)**, **of childhood (HA61)** and **unspecified (HA6Z)** sit in **“Conditions related to sexual health.”** ICD-11 does **not** require distress, and the WHO’s stated reason is that transgender and gender-diverse identities are not mental ill-health and that classifying them as such adds stigma. The Philippines and many other countries still code with **ICD-10** (ICD-10-CM in the United States), so the DSM-5-TR codes above are what you will record." }
          ]
        }
      ]
    },
    {
      title: "The diagnosis",
      sections: [
        {
          id: "s14-children",
          title: "Gender dysphoria in children: the criteria",
          pages: "512",
          blocks: [
            { type: "criteria", title: "Gender dysphoria in children, in brief", code: "F64.2", pages: "512", items: [
              ["A", "A **marked incongruence** between the child’s **experienced/expressed** gender and the **assigned** gender, lasting **at least 6 months**, shown by **at least 6 of 8** manifestations, **one of which must be A1**:", [
                "**A1** A strong desire to **be** another gender, or an **insistence** that one **is** another gender (or an alternative gender different from the assigned one).",
                "**A2** Assigned boys: a strong preference for **cross-dressing** or simulating female attire. Assigned girls: a strong preference for **only** typically masculine clothing **and** strong resistance to feminine clothing.",
                "**A3** A strong preference for **cross-gender roles** in make-believe or fantasy play.",
                "**A4** A strong preference for the **toys, games or activities** stereotypically used by the other gender.",
                "**A5** A strong preference for **playmates** of the other gender.",
                "**A6** Assigned boys: strong **rejection** of typically masculine toys, games and activities and strong **avoidance of rough-and-tumble play**. Assigned girls: strong rejection of typically feminine toys, games and activities.",
                "**A7** A strong **dislike of one’s sexual anatomy**.",
                "**A8** A strong **wish to have the primary and/or secondary sex characteristics** of the experienced gender."
              ]],
              ["B", "**Distress or impairment** that is clinically significant, whether social, at **school** or in another important area."]
            ], specifiers: [["With a DSD", "With a **disorder/difference of sex development** (e.g., E25.0 congenital adrenal hyperplasia, E34.50 androgen insensitivity syndrome). **Code the DSD too.**"]] },
            { type: "defs", title: "Reading the criteria", items: [
              ["The count", "**6 of 8**, and **A1 is compulsory**. A child with seven behavioral and anatomic items but **no** stated wish to be, or insistence on being, another gender does **not** meet Criterion A."],
              ["What A1 allows", "A **desire** to be another gender **or** an **insistence** that one already **is**; and the other gender may be an **alternative** (nonbinary) gender, not only the “opposite” one."],
              ["Two kinds of item", "**A2–A6** are about **clothes, play, toys and playmates** (preferences and rejections). **A7–A8** are about the **body** (dislike of one’s anatomy; wish for the other anatomy). Young children are less likely to show persistent anatomic dysphoria (p. 515)."],
              ["Duration and impact", "**6 months**, and Criterion B: **distress or impairment** (at school or socially). Distress may show only when others **interfere** with the child’s gender expression (pp. 515–516)."],
              ["Not required", "Social transition, a request for treatment, or any particular sexual orientation."]
            ] },
            { type: "callout", kind: "exam", title: "Why A1 is mandatory", text: "The differential with **ordinary gender nonconformity** turns on the **strong desire to be another gender** and on how **pervasive** the gender-variant behavior is (p. 519). A “tomboy” who loves football, boys’ clothes and boys as friends but is happy being a girl can collect A2, A4, A5 and A6 and still have **no diagnosis**, because A1 is missing (and usually B is too)." },
            { type: "case", title: "Clinical vignette: the child who will not wear the dress", text: "A 6-year-old assigned female at birth has said for over a year that she is a boy and will be a man when grown. He (the child’s chosen pronoun) wears only boys’ clothes, screams when made to wear a dress, plays rough games with boys, refuses dolls, and asks when his penis will grow. He is miserable at a school that insists on a girls’ uniform and has started refusing to go.", point: "A1 (insists he is a boy) plus A2, A4, A5, A6 and A8: **6 of 8 including A1**, for more than 6 months, with distress and school impairment: **gender dysphoria in children (F64.2)**. The DSD specifier does not apply unless a documented, codable DSD is in the record." }
          ]
        },
        {
          id: "s14-adults",
          title: "Gender dysphoria in adolescents and adults: the criteria",
          pages: "512–513",
          blocks: [
            { type: "criteria", title: "Gender dysphoria in adolescents and adults, in brief", code: "F64.0", pages: "512–513", items: [
              ["A", "A **marked incongruence** between experienced/expressed and assigned gender, lasting **at least 6 months**, shown by **at least 2 of 6**:", [
                "**A1** A marked incongruence between the experienced/expressed gender and the **primary and/or secondary sex characteristics** (in young adolescents, the **anticipated** secondary characteristics).",
                "**A2** A strong desire to **be rid of** one’s sex characteristics because of the incongruence (in young adolescents, a desire to **prevent** the anticipated changes).",
                "**A3** A strong desire **for** the sex characteristics of the other gender.",
                "**A4** A strong desire to **be** the other gender (or an alternative gender).",
                "**A5** A strong desire to be **treated as** the other gender (or an alternative gender).",
                "**A6** A strong **conviction** of having the **feelings and reactions** typical of the other gender (or an alternative gender)."
              ]],
              ["B", "**Distress or impairment** that is clinically significant, whether social, **occupational** or in another important area."]
            ], specifiers: [["With a DSD", "With a **disorder/difference of sex development**; **code the DSD too**."], ["Posttransition", "Living **full time** in the experienced gender (legal change or not) **and** has had, or is preparing for, at least one **gender-affirming medical** procedure or regimen: regular hormone treatment, or surgery such as breast augmentation or vulvovaginoplasty for someone assigned male, or chest surgery, phalloplasty or metoidioplasty for someone assigned female."]] },
            { type: "defs", title: "Reading the criteria", items: [
              ["The count", "Only **2 of 6**, and **none is compulsory**. Most people who qualify meet several."],
              ["Body items", "**A1–A3** concern the sex characteristics: incongruence with them, wanting to be **rid** of them, wanting the **other** gender’s. Together they describe **anatomic dysphoria** (p. 516)."],
              ["Identity and role items", "**A4–A6**: wanting to **be**, to be **treated as**, and feeling one **reacts like** the other (or an alternative) gender. Someone who wants no medical change can still qualify through these (p. 514)."],
              ["Young adolescents", "Secondary sex characteristics may not have developed yet, so A1 and A2 are read for the **anticipated** changes and the wish to **prevent** them (pp. 513–514)."],
              ["Duration and impact", "**6 months** and **distress or impairment**. Support and the knowledge that treatment exists can **lessen** distress (p. 516); if distress and impairment are absent, Criterion B is not met."]
            ] },
            { type: "compare", title: "Children versus adolescents and adults", items: [
              { title: "Children (F64.2)", color: "guide", points: ["**6 of 8**; **A1 required**.", "Items are **behavioral**: clothes, play, toys, playmates, plus anatomy.", "Impairment at **school**.", "Specifier: **DSD** only."] },
              { title: "Adolescents and adults (F64.0)", color: "case", points: ["**2 of 6**; no required item.", "Items are about the **body** and about being the other gender and **treated** as such.", "Impairment at **work** or socially.", "Specifiers: **DSD** and **posttransition**."] }
            ], note: "Both: marked incongruence, at least 6 months, clinically significant distress or impairment." },
            { type: "callout", kind: "exam", title: "Which criteria set?", text: "The manual separates the sets because expression **changes with age** (p. 515). Use the **child** set for **prepubertal** children and the **adolescent/adult** set from adolescence on; the young-adolescent wording about **anticipated** changes exists precisely for the child entering puberty (assigned females from about **9–13**, assigned males about **11–14**, p. 514)." },
            { type: "case", title: "Clinical vignette: the 15-year-old before the next growth spurt", text: "A 15-year-old assigned male at birth has felt for 3 years that she is a girl. She is distressed by her deepening voice and facial hair, shaves daily and wears baggy clothes to hide her body, asks to be called by a girl’s name, and wants hormone treatment. Her grades have fallen and she avoids physical education and friends.", point: "A1 (incongruence with developing characteristics), A2 (wants to stop them), A4 and A5 (wants to be and to be treated as a girl): well over **2 of 6**, for more than 6 months, with distress and impairment: **gender dysphoria in adolescents and adults (F64.0)**. Not posttransition: she is not living full time in the experienced gender with treatment under way or planned." }
          ]
        },
        {
          id: "s14-specifiers",
          title: "The two specifiers",
          pages: "512–513",
          blocks: [
            { type: "table", caption: "Specifiers (pp. 512–513)", head: ["Specifier", "Applies to", "Rule", "Coding"], rows: [
              ["**With a disorder/difference of sex development**", "Children; adolescents and adults", "Only when the DSD is **specific, codable** and **documented in the medical record** (p. 513)", "Code the **DSD** as well as the gender dysphoria (e.g., **E25.0**, **E34.50**)"],
              ["**Posttransition**", "Adolescents and adults only", "Living **full time** in the experienced gender (with or without a **legal** change) **and** at least one gender-affirming medical procedure or regimen completed **or being prepared for**", "No change to **F64.0**"]
            ] },
            { type: "defs", title: "What counts for posttransition (p. 513)", items: [
              ["Social part", "Full-time living in the experienced gender. A **legal** gender change is **not** required."],
              ["Medical part", "At least one of: **regular** gender-affirming **hormone** treatment, or **surgery** that confirms the experienced gender. Examples: for someone assigned male at birth, breast augmentation and/or **vulvovaginoplasty**; for someone assigned female at birth, **chest surgery** (transmasculine), **phalloplasty** or **metoidioplasty**."],
              ["“Preparing to have”", "Being on the way to the first procedure also qualifies."],
              ["Purpose", "The specifier marks people in **continuing treatment** that supports the new gender assignment (p. 513), who may still meet criteria (for example, distress about remaining characteristics) and still need a diagnosis for care."]
            ] },
            { type: "callout", kind: "exam", title: "Posttransition traps", text: "1) It exists **only** in the adolescent/adult set. 2) Full-time living **alone** is not enough; hormones or surgery must be done or planned. 3) Legal recognition is **not** needed. 4) Someone who has transitioned and is **no longer distressed or impaired** does not meet Criterion B; the specifier does not rescue the diagnosis. (Outside the DSM: for such a person, ICD-10-CM now offers **F64.A**, gender identity disorder in remission; see the coding section.)" },
            { type: "callout", kind: "caution", title: "The DSD specifier is about documentation", text: "Suspicion of an intersex condition is not enough: the manual limits the specifier to a **codable DSD recorded in the chart** (p. 513). Gender dysphoria **with** a DSD also has a different natural history and risk profile (pp. 517–518), which is why the manual keeps it visible." }
          ]
        },
        {
          id: "s14-features",
          title: "Diagnostic features by age",
          pages: "513–514",
          blocks: [
            { type: "p", text: "The diagnostic core is the **incongruence** between the assigned gender (usually from phenotypic sex at birth) and the experienced/expressed gender, plus **distress** about it. The experienced gender can be **nonbinary**: an intermediate or alternative gender, not only the “other” binary one (p. 513). The behavioral examples below may be **less prominent** in children raised with fewer gender stereotypes (p. 513)." },
            { type: "compare", title: "Prepubertal children (p. 514)", items: [
              { title: "Assigned female at birth", color: "guide", points: ["Persistent conviction of **being a boy**, or that they will **grow up to be a man**; aversion to the idea of being a girl.", "**Boys’ clothes and hairstyles**; may be taken for a boy by strangers; may ask for a **boy’s name**.", "Intense reactions to being made to wear **dresses**; may refuse school or events that require them.", "Prefers **contact sports**, rough-and-tumble play, boys’ games and **boys as playmates**; little interest in dolls or dress-up.", "May refuse to **urinate sitting down**; may say they have or will grow a **penis**; may not want **breasts or periods**."] },
              { title: "Assigned male at birth", color: "case", points: ["Persistent conviction of **being a girl**, or that they will **grow up to be a woman**; aversion to being a boy.", "Prefers **girls’ or women’s clothes**, or improvises them (towels, aprons, scarves as hair or skirts).", "Role-plays **female figures** (“mother”), loves **female fantasy characters**, “playing house,” drawing feminine pictures, female-type dolls.", "**Girls as playmates**; avoids rough-and-tumble play; little interest in cars and trucks.", "May call the penis or testes **disgusting**, wish them gone, or say they have or want a **vagina**."] }
            ] },
            { type: "callout", kind: "pearl", title: "A changing clinic population", text: "More and more, parents bring a child who has **already socially transitioned** (p. 514). The manual also notes that a child entering puberty (assigned females ~**9–13**, assigned males ~**11–14**) may not yet dislike characteristics that have not appeared, but may be very distressed by the changes that are **about to come** (p. 514)." },
            { type: "list", title: "Adolescents and adults (p. 514)", items: [
              "The gap between experienced gender and the body is **often, not always**, joined by a wish to be **rid of** primary or secondary sex characteristics and/or to **acquire** those of another gender.",
              "They may adopt the **behavior, clothing and mannerisms** of the experienced gender, to varying degrees.",
              "They feel uncomfortable being **seen or functioning** as members of the assigned gender.",
              "Some have an **inner certainty** of being, feeling and reacting as the experienced gender **without** seeking any medical change.",
              "Some resolve the incongruence by living **partly** in the desired role, or by adopting a role that is **neither** conventionally male nor female."
            ] },
            { type: "callout", kind: "key", title: "Teaching point", text: "Wanting hormones or surgery is **common but not required** for the diagnosis (A4–A6 can carry it), and having had them does not remove it. What is required in every case: **incongruence**, **6 months**, and **distress or impairment**." }
          ]
        },
        {
          id: "s14-associated",
          title: "Associated features",
          pages: "514–515",
          blocks: [
            { type: "table", caption: "Associated features (pp. 514–515)", head: ["Group", "What the manual describes"], rows: [
              ["Adolescents assigned male", "**Shave** facial, body and leg hair as soon as it appears; may **bind the genitals** so erections show less"],
              ["Adolescents assigned female", "**Bind the breasts**, walk with a **stoop**, wear **loose sweaters**"],
              ["Adolescents in general", "Increasingly **request**, or obtain **without prescription or supervision**, drugs that suppress gonadal steroids (**GnRH agonists**) or block their action (**spironolactone**); clinic-referred adolescents usually want **hormones** and many want **surgery**"],
              ["Adolescents in accepting settings", "Openly express the wish to be and be treated as their gender; **dress and hairstyle** of the experienced gender; friendships with peers of another gender; a **new first name**"],
              ["Sexual behavior", "Older adolescents who are sexually active often do not **show** their genitals or let partners **touch** them; adults with genital aversion keep their genitals **unseen and untouched** by partners"],
              ["Adults", "Not infrequently seek **hormones** (sometimes unsupervised) and **surgery**; others are satisfied with hormones **or** surgery alone, or with **no** medical treatment"]
            ] },
            { type: "list", title: "Autism, mental health and age (p. 515)", items: [
              "**Autism spectrum traits** are over-represented in children, adolescents and adults with gender dysphoria, and people with **ASD** are more likely to be gender diverse.",
              "**Before** gender-affirming treatment and legal gender change, adolescents and adults have a raised risk of **suicidal ideation, attempts and suicide**; after reassignment, adjustment **varies** and risk and mental health problems **may persist**.",
              "In prepubertal children, **older age** goes with **more** behavioral and emotional problems, because others accept gender nonconformity **less** as the child grows.",
              "Children and adolescents who feel **supported and accepted** may show **few or no** psychological problems."
            ] },
            { type: "callout", kind: "caution", title: "Ask about unsupervised medication", text: "The manual itself notes that adolescents and adults may be taking **GnRH agonists**, **spironolactone** or **sex hormones** without prescription or monitoring (pp. 514–515). Ask directly and nonjudgmentally; outside the DSM, unsupervised use raises concerns such as hyperkalemia with spironolactone, thromboembolism with estrogens and bone health with puberty suppression, which belong to the endocrinologist." }
          ]
        }
      ]
    },
    {
      title: "Clinical picture",
      sections: [
        {
          id: "s14-epi",
          title: "Prevalence, sex ratio and culture",
          pages: "515, 518",
          blocks: [
            { type: "table", caption: "Prevalence (p. 515)", head: ["Basis", "Figure"], rows: [
              ["Populations seeking gender-affirming treatment (the **diagnosis**)", "**Under 1 in 1,000** (**<0.1%**) for people assigned male and for people assigned female at birth; probably an **underestimate**, because many adults never attend specialty programs"],
              ["Self-report surveys, US and Europe: identify as **transgender**", "**0.5%–0.6%**"],
              ["Self-report: **incongruent gender identity**", "**0.6%–1.1%**"],
              ["Self-report: feel they are a person of a **different sex**", "**2.1%–2.6%**"],
              ["Self-report: **want medical treatment**", "**0.2%–0.6%**"]
            ] },
            { type: "callout", kind: "key", title: "Read the table from narrow to broad", text: "The **diagnosis** (clinic-based) is rare, under 0.1%. **Identity** and **feelings** in the general population are several times more common, and the ranges widen as the question gets broader. There are **no large population studies of the disorder itself**, and survey methods differ, so the figures are not directly comparable (p. 515)." },
            { type: "table", caption: "Sex ratio of referrals (p. 518)", head: ["Age group", "Assigned male : assigned female"], rows: [
              ["Children", "**1.25:1 to 4.3:1** (more assigned males)"],
              ["Adolescents and young adults", "A recent **shift**: now **more assigned females** than assigned males"],
              ["Adults", "More assigned males seek treatment: **1:1 to 6.1:1** in most US and European studies"]
            ] },
            { type: "list", title: "Trends the manual records (p. 518)", items: [
              "**Rising numbers** of children and adolescents at specialty clinics.",
              "Presentation at **younger ages**.",
              "More frequent **early social transition**.",
              "Among adolescents and young adults, a shift toward **more individuals assigned female at birth**."
            ] },
            { type: "callout", kind: "culture", title: "Culture (p. 518)", text: "Gender dysphoria is reported in many countries and cultures. Some societies have **institutionalized gender categories** other than man/woman that sanction gender-nonconforming development, among them **Thailand, India, Samoa, Sri Lanka, Oman, Myanmar** and **Indigenous Peoples of North America**; whether people in those roles would meet the **criteria** is unclear. Rates of coexisting mental health problems differ between cultures, partly with attitudes to nonconformity, yet **anxiety** is relatively common even in accepting cultures. (Teaching note written for this app: Philippine culture has long had visible gender-diverse communities; do not assume a cultural role is either protective or pathological. Ask about the person’s own distress.)" }
          ]
        },
        {
          id: "s14-course",
          title: "Development and course",
          pages: "515–517",
          blocks: [
            { type: "list", title: "Why two criteria sets, and how distress shows (pp. 515–516)", items: [
              "Expression **varies with age**, so the child criteria are more **concrete and behavioral**; in adolescents and adults the **incongruence** itself is central.",
              "Young children are **less likely** to show extreme, persistent **anatomic dysphoria**.",
              "A very young child may show distress (**intense crying**) only when parents say the child is “really” not the other gender but only wishes to be.",
              "Distress may be **absent in supportive settings** and appear only when there is **parental or social interference**; in adolescents and adults, support and knowing that **treatments exist** can soften it.",
              "Impairment may show as **school refusal, depression, anxiety, peer and behavioral problems and substance abuse**."
            ] },
            { type: "flow", title: "Onset and course without a DSD (p. 516)", vertical: true, steps: [
              ["Ages 2–4", "Gender-nonconforming behavior usually begins (clinic samples from Canada and the Netherlands), when most children start showing gendered interests; some preschoolers already say they are, or want to be, another gender", "guide"],
              ["School entry", "In other children the gender expression appears later, usually at the start of elementary school", "hy"],
              ["Approaching puberty", "“Anatomic dysphoria” (discomfort with the sexual anatomy, wish for the anatomy of the experienced gender) becomes more common", "mech"],
              ["Puberty", "Its onset, or its anticipation, can sharply worsen the incongruence whatever the later trajectory", "case"],
              ["Adolescence and adulthood", "Dysphoria persists, or desists (sometimes to recur later)", "drug"]
            ] },
            { type: "table", caption: "Persistence from childhood into adolescence (p. 516)", head: ["Group", "Persistence", "Note"], rows: [
              ["Assigned male at birth", "**2%–39%**", "North American and Dutch follow-up studies"],
              ["Assigned female at birth", "**12%–50%**", "Same studies"],
              ["What predicts persistence", "**Greater severity** at the childhood assessment (modest correlation); **early social transition** may also be a factor; greater **intensity** of nonconformity and **older age at presentation** (p. 517)", "No general-population outcome studies exist"]
            ] },
            { type: "list", title: "Sexual orientation findings (p. 516)", items: [
              "Children who stop wanting another gender by puberty often report a **nonheterosexual** orientation and marked gender-nonconforming behavior, but **not necessarily** a transgender identity.",
              "Attraction to people of the **birth-assigned gender** is common, whichever way the childhood dysphoria goes.",
              "When dysphoria **persists**, most people identify as **heterosexual**; when it **desists**, most identify as **gay, lesbian or bisexual**.",
              "Childhood dysphoria that remits in adolescence can **recur** in adulthood."
            ] },
            { type: "compare", title: "The two trajectories (pp. 516–517)", items: [
              { title: "Early (prepubertal) onset", color: "guide", points: ["Met the **child** criteria (unlike merely gender-nonconforming children).", "May **continue** into adolescence and adulthood, or go through a period in which the dysphoria **desists or is denied**, during which the person may identify as gay or lesbian, or as heterosexual and cisgender; it may **recur** later.", "Often presents for care in **childhood, adolescence or young adulthood**, possibly reflecting **more intense** dysphoria."] },
              { title: "Late (pubertal or postpubertal) onset", color: "case", points: ["Begins **around puberty or much later** in life.", "Some recall a childhood wish they **never voiced**, or nonconformity that fell **short of criteria**; others remember **no** childhood signs.", "**Parents are often surprised**, having seen nothing in childhood.", "Distress tends to be **more variable and less intense**."] }
            ] },
            { type: "list", title: "Course with a DSD (p. 517)", items: [
              "Comes to attention **early**, because the DSD needs medical decisions, including gender assignment.",
              "Some have been **gonadectomized** before puberty (cancer risk), so **exogenous hormones** induce puberty; **infertility** is common; **genital surgery** may have been done in infancy or childhood to affirm the assigned gender.",
              "Gender-nonconforming behavior may start early and is fairly **predictable** from the syndrome and the assignment.",
              "Thresholds for supporting social and medical transition in minors have traditionally been **lower** with a DSD than without.",
              "Many feel **uncertain** about their gender on learning their history, rather than firmly convinced of being another gender; how many develop dysphoria and transition **varies greatly** by syndrome and assignment."
            ] }
          ]
        },
        {
          id: "s14-risk",
          title: "Risk and prognostic factors",
          pages: "517–518",
          blocks: [
            { type: "table", caption: "Risk and prognostic factors (pp. 517–518)", head: ["Domain", "What the manual says"], rows: [
              ["Temperamental", "Gender-variant behavior can start in **early preschool**; **more intense** nonconformity and **older age at presentation** make persistence more likely. In **postpubertal-onset** cases, a history of **transvestism** that may develop into **autogynephilia** (arousal to the thought or image of oneself as a woman) is under consideration as a predisposing factor"],
              ["Environmental", "Assigned males with dysphoria (no DSD) more often have **older brothers** than cisgender males"],
              ["Genetic", "Weak **familiality** among nontwin siblings; higher concordance in **monozygotic** than dizygotic same-sex twins; some **heritability**; a **polygenic** basis that may affect prenatal brain differentiation (assigned males)"],
              ["Endocrine", "**46,XY**: no systemic sex-hormone abnormality. **46,XX**: androgens mildly **raised** (the range seen in hirsute women, far below male levels). Evidence is **insufficient** to call dysphoria without a DSD a brain-limited intersex condition"]
            ] },
            { type: "defs", title: "When a DSD raises the risk (pp. 517–518)", items: [
              ["The principle", "Dysphoria is more likely when **prenatal androgen** production or action was grossly **out of line** with the assigned gender."],
              ["Example 1", "**46,XY** with a normal male prenatal hormone milieu but a **nonhormonal genital defect** (**cloacal bladder exstrophy**, **penile agenesis**), **assigned female**."],
              ["Example 2", "Risk is **further raised** by prolonged **postnatal** virilization: 46,XY individuals raised female and not castrated who have **5-alpha-reductase-2 deficiency**, or who have **17-beta-hydroxysteroid dehydrogenase-3 deficiency**; female-raised 46,XX individuals with classical **congenital adrenal hyperplasia** and long **nonadherence to glucocorticoids**."],
              ["The limit", "Prenatal androgens shape **gendered behavior** more than **gender identity**; **many** people with a DSD and strongly variant behavior **never** develop dysphoria, so nonconforming behavior alone is **not** a marker of present or future dysphoria."],
              ["Direction", "Among those exposed prenatally to a full masculinizing hormonal milieu, dysphoria and patient-initiated change are more often **assigned female → male** than the reverse."]
            ] },
            { type: "callout", kind: "exam", title: "Two numbers and one word", text: "**Older brothers** (environmental, assigned males). **Monozygotic > dizygotic** concordance (genetic). And the word **autogynephilia**, which the manual places in the **temperamental** row for **postpubertal-onset** dysphoria (p. 517)." }
          ]
        },
        {
          id: "s14-suicide",
          title: "Suicide risk, functioning and comorbidity",
          pages: "514–515, 518–520",
          blocks: [
            { type: "table", caption: "Suicidal thoughts and behavior (pp. 518–519)", head: ["Finding", "Figure or detail"], rows: [
              ["Suicidality and attempts in transgender individuals", "Reported range **30%–80%**"],
              ["Risk factors named", "Past **maltreatment**, **gender victimization**, **depression**, **substance abuse**, **younger age**"],
              ["Clinic-referred transgender adolescents", "**Substantially higher** rates than nonreferred adolescents"],
              ["Before gender-affirming treatment and legal reassignment", "**Increased** risk of suicidal thoughts and attempts; afterwards adjustment **varies**, coexisting symptoms often improve, but some keep prominent anxiety and affective symptoms and **remain at increased risk**"],
              ["Canadian study of **572** gender-referred children", "self-harm or a suicide attempt was **8.6 times** as likely as in the comparison children (siblings, other referred and nonreferred children), after adjustment for behavior and peer problems, especially in the **second half of childhood**"],
              ["Among adolescents", "Highest attempt rate in **transgender young men**, then those identifying as **neither male nor female**"]
            ] },
            { type: "callout", kind: "caution", title: "Assess suicide risk at every visit", text: "The manual’s figures make suicide risk assessment part of **every** encounter with a gender-dysphoric patient, especially one who is young, has been victimized or maltreated, is depressed or uses substances, and before treatment or legal recognition (pp. 515, 518–519). Outside the DSM: family and social **acceptance** is the protective factor the manual itself points to (p. 515)." },
            { type: "list", title: "Functional consequences (p. 519)", items: [
              "Gender nonconformity may appear after the first **2–3 years** of life and interfere with daily activities.",
              "Older children: **peer problems**, isolation, distress, **teasing and harassment**, pressure to dress according to the birth-assigned sex, worst in nonsupportive settings.",
              "Adolescents and adults: **relationship** problems including **sexual** ones; impaired **school or work** functioning.",
              "**Stigma, discrimination and victimization** lead to negative self-concept, depression, suicidality, other disorders, **school dropout** and **economic marginalization** including unemployment, especially without family or social support.",
              "**Structural barriers** to health and mental health care: institutional discomfort, inexperience or hostility."
            ] },
            { type: "table", caption: "Comorbidity (p. 520)", head: ["Group", "Common comorbidities"], rows: [
              ["Clinically referred **children**", "**Anxiety**, **disruptive, impulse-control** and **depressive** disorders"],
              ["Clinically referred **adolescents and adults**", "**Anxiety and depressive disorders** most common; **autism spectrum disorder** more prevalent than in the general population"],
              ["After harassment and violence", "**PTSD**"]
            ] },
            { type: "p", text: "Link to the other chapters: [[dx:asd|autism spectrum disorder]], [[dx:mdd|major depressive disorder]], [[dx:gad|generalized anxiety disorder]], [[dx:ptsd|PTSD]], [[dx:oppositional-defiant|oppositional defiant disorder]]." }
          ]
        },
        {
          id: "s14-differential",
          title: "Differential diagnosis",
          pages: "519–520",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 519–520)", head: ["Look-alike", "How to tell", "Both diagnoses?"], rows: [
              ["**Nonconformity to gender roles**", "Dysphoria needs the **strong desire to be another gender** and **pervasive** gender-variant interests; “tomboy” girls, “girly” boys and occasional cross-dressing in adult men are **not** the diagnosis. Limit the diagnosis to those meeting the **distress and impairment** criteria", "Not applicable"],
              ["**Transvestic disorder** (Ch 19)", "Heterosexual or bisexual adolescent and adult **males** (rarely females) **sexually aroused** by women’s clothing, with distress or impairment, **without** questioning their assigned gender", "**Yes**, when both sets of criteria are met; in some postpubertal-onset assigned males attracted to women, sexualized cross-dressing comes **first**"],
              ["[[dx:bdd|Body dysmorphic disorder]]", "Wants a body part changed or removed because it looks **abnormal**, not because it stands for a **rejected assigned gender**", "**Yes**, when both are met"],
              ["Wish for amputation of a healthy limb (“body integrity identity disorder”)", "Wants to live as an **amputee or disabled person**; usually **no** wish to change gender", "Not gender dysphoria"],
              ["[[dx:asd|Autism spectrum disorder]]", "Hard to separate true co-occurring dysphoria from an **autistic preoccupation**, given **concrete, rigid thinking** about gender roles and poor grasp of social relationships", "**Yes**, once the dysphoria is confirmed"],
              ["[[dx:schizophrenia|Schizophrenia]] and other psychoses", "Rarely, **delusions** of being another gender; gender-themed delusions occur in **up to 20%** of schizophrenia and are **bizarre** and **wax and wane** with psychotic episodes. Without psychosis, insistence on being another gender is **not** a delusion", "**Yes**, they can co-occur"],
              ["Other presentations", "An **emasculinization** wish with a **nonmale/nonfemale** identity **can** meet criteria. A male wanting genital surgery for **aesthetic** reasons or to remove **androgen effects** while keeping a male identity does **not**", "—"]
            ] },
            { type: "callout", kind: "exam", title: "The three “both diagnoses” pairs", text: "Gender dysphoria can be diagnosed **together with** transvestic disorder, body dysmorphic disorder and schizophrenia when each set of criteria is met (pp. 519–520). The exam likes the reverse trap too: a transgender person’s insistence on their gender is **not** a delusion, and distress about sex characteristics is **not** BDD." },
            { type: "case", title: "Clinical vignette: the clothes and the arousal", text: "A 32-year-old man attracted to women has, since adolescence, become sexually aroused by wearing women’s underwear and dresses, which he does in private several times a month. He is ashamed and his marriage is strained. He has no wish to be a woman, likes his body and is comfortable being treated as a man.", point: "Arousal from cross-dressing with distress and no doubt about his gender: **transvestic disorder** (Chapter 19), **not** gender dysphoria. If a strong, persistent wish to **be** and be **treated as** a woman later developed with distress, **both** could be diagnosed (p. 519)." },
            { type: "case", title: "Clinical vignette: the conviction that comes and goes", text: "A 28-year-old man with schizophrenia says during a relapse that aliens have replaced his body with a woman’s and that he is now the queen of a hidden planet. Between episodes he describes himself as a man and has no discomfort with his body or his role.", point: "A **bizarre**, episode-linked, **waxing and waning** gender-themed **delusion** in schizophrenia, not gender dysphoria (p. 520). Contrast a transgender patient with schizophrenia whose gender identity is **stable across** psychotic and well periods: both diagnoses." }
          ]
        },
        {
          id: "s14-residual",
          title: "Other specified and unspecified gender dysphoria",
          pages: "520",
          blocks: [
            { type: "p", text: "Both categories are for people whose **gender dysphoria symptoms** cause **clinically significant distress or impairment** without meeting full criteria for either criteria set (p. 520)." },
            { type: "compare", title: "Which residual category?", items: [
              { title: "Other specified (F64.8)", color: "guide", points: ["The clinician **states the reason** full criteria are not met.", "Record the name, then the reason.", "The manual’s only example: **brief gender dysphoria**, full criteria but **under 6 months**."] },
              { title: "Unspecified (F64.9)", color: "case", points: ["The clinician **chooses not to specify** the reason, or there is **insufficient information** (e.g., a single emergency visit).", "Revise once the history is clear."] }
            ] },
            { type: "table", caption: "Examples (the manual gives only “brief gender dysphoria”; the others are written for this app)", head: ["Presentation", "Category"], rows: [
              ["Full criteria for **4 months**, with distress", "**Other specified**, brief gender dysphoria (**F64.8**)"],
              ["A child with **A1 and four** other items for a year, distressed", "**Other specified**, reason: below the 6-of-8 count (**F64.8**)"],
              ["A distressed adult with **one** of the six items", "**Other specified**, reason: below the 2-of-6 count (**F64.8**)"],
              ["A distressed adolescent seen once in the emergency room, history unavailable", "**Unspecified** (**F64.9**)"]
            ] },
            { type: "callout", kind: "exam", title: "Check full criteria first", text: "Before reaching for F64.8, recount. Adolescents and adults need only **2 of 6**, so a residual category is unusual once distress is present. For children, remember the **A1 rule**: six items **without A1** is not full criteria, and whether the picture even qualifies as “symptoms characteristic of gender dysphoria” depends on the clinician’s judgment and on Criterion B." }
          ]
        }
      ]
    },
    {
      title: "Approach",
      sections: [
        {
          id: "s14-care",
          title: "Beyond the DSM: assessment and care",
          blocks: [
            { type: "callout", kind: "caution", title: "Outside the DSM", text: "DSM-5-TR describes and classifies; it does not cover treatment. This section orients you to the **assessment** a psychiatrist is asked for and to the **guidelines and policy landscape** as of October 2026, which differ by country and have changed quickly. It is not a treatment protocol. Follow your hospital’s policy and the law where you practice, and refer to the multidisciplinary team." },
            { type: "steps", title: "The psychiatric assessment", items: [
              ["1. The person’s account", "Experienced gender, since when, how expressed; what the person **wants** (nothing, social steps, hormones, surgery); the **distress** and what drives it (the body, how others treat them, stigma, family conflict). Use the person’s name and pronouns."],
              ["2. The criteria", "Which set (child, or adolescent/adult), which items, **6 months**, Criterion B. Note whether distress reflects **incongruence** or **stigma** (p. 511), both of which matter clinically."],
              ["3. Differential", "Nonconformity alone, transvestic disorder, body dysmorphic disorder, autism-related preoccupation, psychosis (pp. 519–520)."],
              ["4. Comorbidity and risk", "Depression, anxiety, PTSD, substance use, autism spectrum disorder; a **suicide risk assessment** every time (pp. 518–520)."],
              ["5. Context", "Family response and **acceptance**, school or work, safety, victimization; any **unsupervised** hormone or blocker use (pp. 514–515)."],
              ["6. Role", "Diagnose and document, treat comorbidity, support the person and family, and give the gender team an informed opinion on **capacity and readiness** where that is asked for. The decision about medical treatment is multidisciplinary."]
            ] },
            { type: "table", caption: "Guidelines and reference documents (outside the DSM; status as of October 2026)", head: ["Document", "Year", "Status"], rows: [
              ["**WPATH Standards of Care, version 8**", "2022", "The most widely cited international standard; WPATH announced in 2024 that it is setting up a revision committee, with no new version yet"],
              ["**Endocrine Society** clinical practice guideline on gender-dysphoric/gender-incongruent persons", "2017", "An update is listed as **in development** (2026)"],
              ["**ICD-11**", "In effect 2022", "Gender incongruence under conditions related to sexual health, not mental disorders"],
              ["**Cass Review** (England), with the University of York systematic reviews", "April 2024", "Found the evidence base for puberty suppression and hormones in minors **weak**; the UK restricted puberty blockers for gender dysphoria in minors to a **research** setting, and an NHS-linked trial was being set up through 2025–2026"],
              ["**United States v. Skrmetti**, US Supreme Court", "June 2025", "Upheld a Tennessee law banning puberty blockers and hormones for minors (6–3); state laws now differ widely"],
              ["**US HHS** review and declaration on pediatric gender-dysphoria treatment", "2025", "A federal review (May 2025, final November 2025) and a December 2025 declaration that these treatments for minors are not safe or effective; a federal court **vacated** the declaration in April 2026, and related federal funding rules (2026) were under legal challenge"]
            ] },
            { type: "update", kind: "post", year: "2026", title: "Where things stand, in one paragraph", source: "WPATH SOC-8 (2022) and WPATH SOC-8 history page (2024); Endocrine Society guidelines-in-development page (2026); Cass Review final report (April 2024) and Taylor et al., Arch Dis Child 2024; United States v. Skrmetti (June 18, 2025); US HHS reports (May and November 2025) and declaration (December 2025), vacated by the US District Court for Oregon (April 2026); CMS final rule on Medicaid/CHIP funding (August 2026); WHO ICD-11 FAQ; checked October 26, 2026", text: "International professional bodies (WPATH, the Endocrine Society and, in the United States, the American Academy of Pediatrics and the American Psychiatric Association) continue to describe **gender-affirming care** in a staged, multidisciplinary model: social support first, with **puberty suppression**, **hormones** and **surgery** considered at defined ages and stages after assessment. Since 2024 several governments have moved the other way for **minors**: England restricted puberty blockers to research after the Cass Review, and in the United States the Supreme Court allowed state bans (2025) while the federal administration issued reports, a declaration and funding rules against pediatric treatment, some of which courts have blocked. Systematic reviews agree that the **evidence on long-term outcomes in minors is limited**; they disagree on what follows from that. For adults, access depends on the country and the payer rather than on dispute about the science. In the **Philippines** there is no national law or Department of Health guideline specific to gender dysphoria care (the SOGIE Equality Bill had not passed as of 2026), so practice follows hospital policy and the professional guidelines above. Present this landscape to patients and families **neutrally**, and check the current position before advising." },
            { type: "list", title: "What a psychiatrist can always do", items: [
              "Treat **depression, anxiety, PTSD and substance use** with the usual evidence-based care; the DSM notes these are the common comorbidities (p. 520).",
              "**Assess and manage suicide risk** (30%–80% lifetime suicidality in the manual’s cited range, p. 518).",
              "Work with the **family**: the manual links acceptance and support to fewer psychological problems (p. 515).",
              "Screen for **autism spectrum disorder** when the history suggests it, and take time over the differential (p. 520).",
              "Ask about **unsupervised** hormones, blockers or spironolactone and arrange medical review (pp. 514–515).",
              "Document the diagnosis and specifiers accurately; a diagnosis is often what payers and gender teams need to proceed, and the manual notes that lack of access to desired treatment is itself a source of distress (p. 512)."
            ] },
            { type: "callout", kind: "pearl", title: "Language in the record", text: "Record the **assigned sex at birth** only where it is medically relevant (anatomy, hormones, screening), and the person’s **name, pronouns and experienced gender** throughout. The DSM itself treats “biological sex” and “natal gender” as historical terms (p. 511). Treatment bridges for the common comorbidities are on the disorder pages." }
          ]
        },
        {
          id: "s14-approach",
          title: "Putting it together: the approach and the classic traps",
          pages: "511–520",
          blocks: [
            { type: "steps", title: "Five steps for a gender-related presentation", items: [
              ["1. Identity or dysphoria?", "A transgender or gender-diverse person who is **not distressed or impaired** has **no diagnosis**. Distress from **stigma alone** is not gender dysphoria either (p. 511)."],
              ["2. Which criteria set?", "**Prepubertal child** → F64.2 set (6 of 8, A1 required). **Adolescent or adult** → F64.0 set (2 of 6); read A1 and A2 for **anticipated** changes in young adolescents."],
              ["3. Long enough, impairing enough?", "**6 months**; **clinically significant distress or impairment**. Full criteria but **under 6 months** → other specified, **brief gender dysphoria** (F64.8)."],
              ["4. Something else, or as well?", "Nonconformity alone (no); transvestic disorder, BDD, schizophrenia (**both** possible); autistic preoccupation (take time); aesthetic or anti-androgen surgery wish with a male identity (no)."],
              ["5. Specifiers and codes", "**With a DSD** → add the DSD code. **Posttransition** (adolescents/adults) → full-time living **plus** hormones or surgery done or planned. F64.2 / F64.0 / F64.8 / F64.9."]
            ] },
            { type: "callout", kind: "key", title: "Ten traps", text: "1) Children **6 of 8**; adolescents and adults **2 of 6**. 2) In children **A1 is mandatory**. 3) Both sets need **6 months** and **distress or impairment**. 4) The two sets share **one** diagnosis but **different codes**: F64.2 (children), F64.0 (adolescents and adults). 5) **Posttransition** is adolescent/adult only and needs **medical** treatment done or planned, not just full-time living; legal change is **not** required. 6) The DSD specifier needs a **documented, codable** DSD, and you **code the DSD too**. 7) A transgender person’s insistence on their gender is **not a delusion**; gender delusions in schizophrenia are **bizarre and episodic**. 8) Distress about sex characteristics is **not BDD**; both can be diagnosed. 9) Transvestic disorder is **arousal** from cross-dressing **without** doubting one’s gender; both can be diagnosed. 10) **F64.A** (October 2026) is an ICD-10-CM code for dysphoria **in remission**, not a DSM diagnosis or specifier." },
            { type: "p", text: "Practice with the [[helper:gender|gender dysphoria helper]], then compare [[dx:gender-dysphoria-children|gender dysphoria in children]] with [[dx:gender-dysphoria-adults|gender dysphoria in adolescents and adults]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
