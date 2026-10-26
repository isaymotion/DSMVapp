/* Chapter 14 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code). F64.0, F64.2, F64.8 and F64.9 unchanged
             through October 2026; F64.A (added October 1, 2026) is an ICD-10-CM code, not a DSM diagnosis.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var DX = ["Gender dysphoria in children", "Gender dysphoria in adolescents and adults", "Other specified gender dysphoria", "Unspecified gender dysphoria", "No gender dysphoria diagnosis"];
  var SPEC = ["None", "With a disorder/difference of sex development", "Posttransition", "With a DSD and posttransition"];

  SP.add("ch14", "dxline", [
    {
      id: "w14-01", tag: "Children",
      "case": "A 7-year-old assigned male at birth has insisted for 18 months that she is a girl. She wears her sister’s dresses whenever allowed, always plays the mother or a princess, chooses dolls and girls as friends, avoids rough games and says her penis is “yucky.” She cries before school, where she is teased, and has started refusing to go. No medical condition is recorded.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifier", options: SPEC, answer: 0 },
        { label: "Code", options: ["F64.0", "F64.2", "F64.8", "F64.9", "F64.2 + E25.0"], answer: 1 }
      ],
      line: "**F64.2** Gender dysphoria in children",
      why: "A1 (insists she is a girl) plus A2, A3, A4, A5, A6 and A7: well over **6 of 8 including A1**, for more than 6 months, with distress and school impairment (p. 512). No documented DSD, so no specifier."
    },
    {
      id: "w14-02", tag: "Children + DSD",
      "case": "A 9-year-old assigned female at birth has classical congenital adrenal hyperplasia, documented in the chart since infancy. For 2 years he has said he is a boy, wears only boys’ clothes and refuses skirts, prefers boys as friends and rough sports, rejects dolls, says he does not want breasts and says he wants a penis. He is withdrawn and distressed at school.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 0 },
        { label: "Specifier", options: SPEC, answer: 1 },
        { label: "Code", options: ["F64.2", "F64.0 + E25.0", "F64.2 + E25.0", "F64.8", "F64.0 + E34.50"], answer: 2 }
      ],
      line: "**F64.2** Gender dysphoria in children, with a disorder/difference of sex development; **E25.0** congenital adrenal hyperplasia",
      why: "A child (child criteria set) with A1 and at least five other items for over 6 months, plus distress. The DSD is specific, codable and **documented**, so the specifier applies and the DSD is **coded as well** (pp. 512–513)."
    },
    {
      id: "w14-03", tag: "Children, below count",
      "case": "A 7-year-old assigned male at birth has insisted for a year that she is a girl. She dresses up in her sister’s skirts and drapes towels as long hair whenever she can, always plays the mother in pretend games, chooses dolls over cars, and plays only with girls. She joins in rough play without complaint and has said nothing about her body. She is clearly distressed when corrected as a boy and has become withdrawn at school. The clinician judges the picture clinically significant and records why full criteria are not met.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: ["F64.2", "F64.9", "F64.0", "F64.8", "F64.A"], answer: 3 }
      ],
      line: "**F64.8** Other specified gender dysphoria (below the 6-of-8 count)",
      why: "A1 (insists she is a girl) plus A2, A3, A4 and A5 = **5 of 8**: A1 is present, but the child set needs **at least 6 of 8** (p. 512). The symptoms are characteristic of gender dysphoria, with clear distress and impairment, and the clinician states the reason, so **other specified** fits, reason “below the 6-of-8 count” (p. 520)."
    },
    {
      id: "w14-04", tag: "Adolescents",
      "case": "A 14-year-old assigned female at birth has for a year described himself as a boy, binds his chest, asks friends to use his new name, and says he dreads periods and wants a deeper voice and a flat chest. He has stopped swimming and his grades have dropped.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: SPEC, answer: 0 },
        { label: "Code", options: ["F64.2", "F64.8", "F64.0", "F64.9", "F64.0 + E25.0"], answer: 2 }
      ],
      line: "**F64.0** Gender dysphoria in adolescents and adults",
      why: "Adolescent set: A1, A2, A3, A4 and A5 (at least **2 of 6**), for 12 months, with impairment (pp. 512–513). Not posttransition: no full-time living with medical treatment done or planned."
    },
    {
      id: "w14-05", tag: "Posttransition",
      "case": "A 34-year-old woman assigned male at birth has lived full time as a woman for 6 years, has taken prescribed estradiol for 5 years and is scheduled for vulvovaginoplasty. She remains distressed by her voice and facial hair, which make her a target of harassment at work, and she wants the surgery to feel at home in her body.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: SPEC, answer: 2 },
        { label: "Code", options: ["F64.A", "F64.0", "F64.8", "F64.2", "F64.0 + E34.50"], answer: 1 }
      ],
      line: "**F64.0** Gender dysphoria in adolescents and adults, posttransition",
      why: "Criteria still met (incongruence with remaining characteristics, wish for surgery, distress). Full-time living **plus** hormones and a planned procedure = **posttransition** (p. 513). The specifier does **not** change the code; F64.A is for dysphoria in remission, which this is not."
    },
    {
      id: "w14-06", tag: "No medical step",
      "case": "A 27-year-old man assigned female at birth has lived full time as a man for 3 years and has legally changed his name. He has not taken hormones, had surgery or planned either, for cost reasons. He feels intense discomfort with his chest and voice, is often taken for a woman, and has quit two jobs because of it.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: SPEC, answer: 0 },
        { label: "Code", options: ["F64.8", "F64.9", "F64.2", "F64.0", "F64.A"], answer: 3 }
      ],
      line: "**F64.0** Gender dysphoria in adolescents and adults",
      why: "Criteria met with distress and occupational impairment. Posttransition needs full-time living **and** at least one gender-affirming medical procedure or regimen **done or being prepared for** (p. 513); a legal name change and social transition alone do not meet it."
    },
    {
      id: "w14-07", tag: "Adults + DSD",
      "case": "A 24-year-old assigned female at birth has androgen insensitivity syndrome, documented in the chart (no subtype recorded) after an inguinal hernia repair in infancy. For 4 years he has identified as a man, wants to be treated as one, feels his breasts do not belong to him and wants chest surgery. He is depressed and has stopped attending university.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 1 },
        { label: "Specifier", options: SPEC, answer: 1 },
        { label: "Code", options: ["F64.0", "F64.2 + E34.50", "F64.0 + E25.0", "F64.8", "F64.0 + E34.50"], answer: 4 }
      ],
      line: "**F64.0** Gender dysphoria in adolescents and adults, with a disorder/difference of sex development; **E34.50** androgen insensitivity syndrome",
      why: "Adult set met (A1 breasts do not belong to him, A2 wants chest surgery to be rid of them, A4, A5) with distress and impairment. The DSD is documented and codable, so add the specifier and **code the DSD too** (pp. 512–513). E34.50 is AIS unspecified; a documented complete form would be E34.51 (ICD-10-CM, outside the DSM). Not posttransition: no full-time living with treatment under way."
    },
    {
      id: "w14-08", tag: "Brief",
      "case": "A 19-year-old assigned male at birth has, for the past 4 months, felt strongly that she is a woman, wants to be rid of her facial hair and genitals and to be treated as a woman. She is distressed and has stopped going to classes.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 2 },
        { label: "Code", options: ["F64.0", "F64.8", "F64.9", "F64.2", "F64.A"], answer: 1 }
      ],
      line: "**F64.8** Other specified gender dysphoria, brief gender dysphoria",
      why: "Every criterion is met except the **6-month** duration. This is the manual’s only example for the other specified category: **brief gender dysphoria** (p. 520)."
    },
    {
      id: "w14-09", tag: "Insufficient information",
      "case": "A 16-year-old is brought to the emergency room after a fight at home about gender expression. The adolescent is tearful and says “my body is wrong,” then declines to say more. No family or history is available before transfer.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 3 },
        { label: "Code", options: ["F64.8", "F64.0", "F64.2", "F64.9", "F64.A"], answer: 3 }
      ],
      line: "**F64.9** Unspecified gender dysphoria",
      why: "Symptoms with distress, but **not enough information** to establish duration or the item count: **unspecified** (p. 520). Revise once the history is known, and assess suicide risk now."
    },
    {
      id: "w14-10", tag: "Identity, not disorder",
      "case": "A 30-year-old transgender woman transitioned socially 8 years ago, takes no hormones by choice, is content with her body, is accepted by family and colleagues and works well. She attends clinic for insomnia after a job change.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "DSM-5-TR code", options: ["F64.0", "No gender dysphoria code", "F64.8", "F64.9"], answer: 1 }
      ],
      line: "No gender dysphoria diagnosis: **transgender identity without distress or impairment**",
      why: "The manual places the clinical problem in the dysphoria, not in identity (p. 512); a transgender identity without distress or impairment does not meet criteria. Without clinically significant **distress or impairment** from incongruence, Criterion B is not met and there is no diagnosis. Assess the insomnia on its own terms."
    },
    {
      id: "w14-11", tag: "Transvestic arousal",
      "case": "A 40-year-old married man attracted to women has, since his teens, become sexually aroused by wearing women’s lingerie in private. He is ashamed and his wife is upset. He has never wanted to be a woman, is comfortable with his body and being seen as a man.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "DSM-5-TR code", options: ["F64.8", "F64.0", "No gender dysphoria code", "F64.9"], answer: 2 }
      ],
      line: "No gender dysphoria diagnosis: assess for **transvestic disorder** (Chapter 19)",
      why: "Arousal from cross-dressing with distress, and **no doubt about his gender**, points to transvestic disorder, not gender dysphoria. Both are diagnosed only when both sets of criteria are met (p. 519)."
    },
    {
      id: "w14-12", tag: "Remitted",
      "case": "A 38-year-old man assigned female at birth was diagnosed with gender dysphoria at 25. He transitioned years ago and has lived as a man for 12 years. He had chest surgery 10 years ago and stopped testosterone several years ago; he takes no gender-affirming treatment now and plans none. He is comfortable in his body and with how he is treated, reports no distress about his gender, and functions well at work and at home. He attends for insomnia after a change in shift work.",
      parts: [
        { label: "Diagnosis", options: DX, answer: 4 },
        { label: "DSM-5-TR code", options: ["F64.0", "F64.8", "F64.9", "No gender dysphoria code"], answer: 3 }
      ],
      line: "No current gender dysphoria diagnosis: **criteria no longer met** (no distress or impairment)",
      why: "Criterion B is not met, so there is no current diagnosis. **Posttransition** does not come into it: the manual says it may be used in the context of continuing treatment that supports the new gender assignment (p. 513), and he has no treatment under way or planned. Assess the insomnia on its own terms. DSM-5-TR has **no remission specifier**. Outside the DSM: from **October 1, 2026**, ICD-10-CM has **F64.A** (gender identity disorder, in remission) for administrative coding of a resolved dysphoria; it is **not** a DSM diagnosis, so check local coding guidance before using it."
    }
  ]);

  SP.add("ch14", "counting", [
    {
      id: "n14-01", tag: "Children Criterion A",
      "case": "A 6-year-old assigned male at birth, seen over 10 months. The record already documents A7 (calls her penis disgusting) and A8 (wants a vagina).",
      ask: "Mark the findings that count toward Criterion A. With A7 and A8 already counted, are at least four more present, including A1?",
      items: [
        ["Says “I am a girl” and corrects anyone who calls her a boy", true, "A1: insistence on being another gender."],
        ["Wears towels as long hair and scarves as skirts every day", true, "A2: simulating female attire."],
        ["Always takes the role of the mother or a female princess in pretend play", true, "A3: cross-gender roles in fantasy play."],
        ["Plays almost only with girls at school", true, "A5: playmates of the other gender."],
        ["Likes drawing and painting", false, "Not gender-specific; not an item."],
        ["Was briefly sad when a pet died", false, "Unrelated to gender incongruence."]
      ],
      need: 4,
      met: true,
      why: "A1 plus A2, A3, A5, A7 and A8 = **6 of 8 including A1**: Criterion A is met (p. 512), provided duration and distress are also established."
    },
    {
      id: "n14-02", tag: "Children: the A1 rule",
      "case": "A 7-year-old assigned female at birth, for over a year. She says she is a girl and likes being one.",
      ask: "Mark the findings that are Criterion A items. Is Criterion A met, given that A1 must be among them?",
      items: [
        ["Wears only boys’ clothes and refuses every dress", true, "A2 for an assigned girl."],
        ["Plays the father or a male superhero in pretend games", true, "A3."],
        ["Prefers football, trucks and rough games", true, "A4."],
        ["Chooses boys as playmates", true, "A5."],
        ["Strongly rejects dolls and dress-up", true, "A6 for an assigned girl."],
        ["Says she wishes she had a penis", true, "A8."]
      ],
      need: 6,
      met: false,
      why: "Six items, but **A1 is missing**: she does not want to be, or say she is, another gender. The children’s count must include **A1**, so F64.2 criteria are **not met** (p. 512). Without a wish to be another gender this is usually **nonconformity to gender roles** (p. 519); assess distress before considering a residual category. The reverse also fails: A1 with only four other items is **5 of 8**, still short."
    },
    {
      id: "n14-03", tag: "Adolescents/adults Criterion A",
      "case": "A 22-year-old assigned female at birth, for 2 years.",
      ask: "Mark the findings that count toward Criterion A. Are at least 2 present?",
      items: [
        ["Feels that his breasts and hips do not match who he is", true, "A1: incongruence with sex characteristics."],
        ["Wants to be rid of his breasts and periods", true, "A2."],
        ["Wants to be seen and treated as a man by others", true, "A5."],
        ["Prefers short hair", false, "Appearance preference alone is not an item."],
        ["Is attracted to women", false, "Sexual orientation is not a criterion."]
      ],
      need: 2,
      met: true,
      why: "Three of the six items: Criterion A is met (**2 of 6**, no item compulsory) (pp. 512–513)."
    },
    {
      id: "n14-04", tag: "Adolescents/adults: one item",
      "case": "A 30-year-old assigned male at birth, for a year.",
      ask: "Mark the findings that count toward Criterion A. Are at least 2 present?",
      items: [
        ["Has a strong conviction that she feels and reacts the way women do", true, "A6."],
        ["Is content with her body and wants no change to it", false, "No anatomic item (A1–A3)."],
        ["Is comfortable being called by her male name at work", false, "Argues against A5."],
        ["Enjoys cooking and fashion", false, "Interests are not items."]
      ],
      need: 2,
      met: false,
      why: "Only **one** item (A6). Criterion A needs **2 of 6**: not met (p. 512). If she is distressed, other specified gender dysphoria with the reason recorded is possible (p. 520)."
    },
    {
      id: "n14-05", tag: "Criterion B",
      "case": "Adults who meet Criterion A for over 6 months:",
      ask: "Mark the findings that satisfy Criterion B. Is it met in at least one?",
      items: [
        ["Avoids mirrors, cannot bear his chest and has left his job because of it", true, "Distress and occupational impairment from the incongruence."],
        ["Is miserable because she cannot get the hormones she wants", true, "The manual notes distress when desired treatment is unavailable (p. 512)."],
        ["Upset only by neighbors’ insults, otherwise comfortable and working well", false, "Distress from **stigma** alone is not gender dysphoria (p. 511)."],
        ["Content, functioning well, wants nothing changed", false, "No distress or impairment: identity, not disorder."]
      ],
      need: 1,
      met: true,
      why: "Criterion B is **clinically significant distress or impairment** arising from the incongruence. Stigma-related distress is clinically important but separate (pp. 511–513)."
    },
    {
      id: "n14-06", tag: "Duration",
      "case": "Histories of marked incongruence with distress:",
      ask: "Mark the histories that reach the 6-month duration. Do at least two?",
      items: [
        ["A 12-year-old who has insisted she is a girl since age 4", true, "Years."],
        ["An adult whose wish to be another gender began 7 months ago and has been constant", true, "Over 6 months."],
        ["A 17-year-old with 4 months of intense dysphoria", false, "Under 6 months: brief gender dysphoria (F64.8)."],
        ["An adult with two separate 2-month episodes a year apart", false, "Not a continuous 6 months."]
      ],
      need: 2,
      met: true,
      why: "Both criteria sets need **at least 6 months** (p. 512). Full criteria for less than that = other specified, **brief gender dysphoria** (p. 520)."
    },
    {
      id: "n14-07", tag: "Posttransition",
      "case": "A 29-year-old who has lived full time in her experienced gender for 2 years:",
      ask: "Mark the findings that satisfy the medical part of the posttransition specifier. Is at least one present?",
      items: [
        ["Takes prescribed estradiol regularly", true, "Regular gender-affirming hormone treatment."],
        ["Has a date booked for breast augmentation", true, "Preparing for a procedure counts."],
        ["Has a new legal name and gender marker", false, "Legal change is neither required nor sufficient."],
        ["Wears women’s clothing and uses her chosen pronouns", false, "That is the social part, already met."],
        ["Took a friend’s hormones twice last year", false, "Not a regular regimen."]
      ],
      need: 1,
      met: true,
      why: "Posttransition = **full-time living** plus at least one gender-affirming **medical** procedure or regimen **done or being prepared for**; legal change is not required (p. 513)."
    },
    {
      id: "n14-08", tag: "DSD specifier",
      "case": "Patients who meet criteria for gender dysphoria:",
      ask: "Mark the findings that justify the specifier “with a disorder/difference of sex development.” Is it justified in at least one?",
      items: [
        ["Congenital adrenal hyperplasia diagnosed and recorded in infancy", true, "Specific, codable, documented (E25.0)."],
        ["Androgen insensitivity syndrome confirmed in the chart", true, "Specific, codable, documented (E34.50)."],
        ["A resident suspects an intersex condition but no workup was done", false, "Suspicion is not documentation."],
        ["Mildly raised testosterone in a person assigned female, no DSD", false, "The manual describes this in gender dysphoria without a DSD (p. 517)."],
        ["Strongly gender-nonconforming play in early childhood", false, "Behavior is not a DSD."]
      ],
      need: 1,
      met: true,
      why: "Use the specifier only for a DSD that is **specific, codable and documented in the medical record**, and code the DSD as well (pp. 512–513)."
    },
    {
      id: "n14-09", tag: "Differential",
      "case": "Findings in people referred for a gender assessment:",
      ask: "Mark the findings that point away from gender dysphoria. Are at least three present?",
      items: [
        ["Sexual arousal from wearing women’s clothes, with no doubt about being a man", true, "Transvestic disorder pattern (p. 519)."],
        ["A bizarre belief of being a queen from another planet, present only during psychotic relapses", true, "Gender-themed delusion in schizophrenia (p. 520)."],
        ["A man wanting genital surgery for appearance while keeping a male identity", true, "Does not meet criteria (p. 520)."],
        ["A stable female identity across psychotic and well periods in a woman with schizophrenia", false, "Not a delusion; both diagnoses can apply."],
        ["A nonbinary person wanting to be rid of male characteristics", false, "An emasculinization wish with a nonbinary identity can meet criteria (p. 520)."]
      ],
      need: 3,
      met: true,
      why: "Arousal without gender doubt, bizarre episodic delusions and an aesthetic surgery wish with an unchanged identity point **away**."
    },
    {
      id: "n14-10", tag: "Suicide risk",
      "case": "A transgender adolescent is assessed after disclosing suicidal thoughts.",
      ask: "Mark the risk factors for suicidality that the manual names. Are at least four present in this list?",
      items: [
        ["Past maltreatment", true, "Named (p. 518)."],
        ["Gender-related victimization", true, "Named (p. 518)."],
        ["Depression", true, "Named (p. 518)."],
        ["Substance abuse", true, "Named (p. 518)."],
        ["Younger age", true, "Named: younger, not older, age raises risk (p. 518)."],
        ["Older age at presentation", false, "That predicts persistence of childhood dysphoria (p. 517), not suicidality."]
      ],
      need: 4,
      met: true,
      why: "The manual cites **30%–80%** suicidality in transgender individuals and names **past maltreatment, gender victimization, depression, substance abuse and younger age** (p. 518). Risk is raised **before** gender-affirming treatment and legal change and may persist after it (pp. 515, 518)."
    }
  ]);
})();
