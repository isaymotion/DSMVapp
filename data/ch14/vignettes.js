/* Chapter 14 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   No treatment items: every question stays inside the DSM, except v14-20 (next step: suicide risk assessment) and one `then` on the psychiatrist’s role, both clinical management rather than DSM text. */
SP.add("ch14", "vignettes", [
  {
    "id": "v14-01",
    "tag": "Child criteria met",
    "stem": "A 10-year-old assigned male at birth, still prepubertal on examination, is brought by her parents to a clinic in Balanga. For the past 18 months she has insisted that she is a girl and asks to be called Bea. She wears her older sister’s skirts whenever she can, always plays the princess or the mother in pretend games, plays almost only with girls, and refuses basketball, wrestling and the toy cars and action figures her cousins play with. She says her penis is “disgusting” and that she wants to have a girl’s body when she grows up. She has stopped joining the parish children’s choir because the boys must wear a barong, and her teacher reports that she has become withdrawn and tearful at school.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Other specified gender dysphoria (F64.8)",
      "Gender dysphoria in children (F64.2)",
      "Gender dysphoria in adolescents and adults (F64.0)",
      "No diagnosis: gender-role nonconformity",
      "Unspecified gender dysphoria (F64.9)"
    ],
    "answer": 1,
    "why": "She shows **7 of the 8** child items: **A1** (insists she is a girl), A2 (clothing), A3 (pretend roles), A5 (playmates), A6 (rejects masculine toys and games and avoids rough-and-tumble play), A7 (dislike of her anatomy) and A8 (wish for a girl’s body). A1 is among them, the duration is **over 6 months**, and there is **distress and impairment** at school and socially: **gender dysphoria in children (F64.2)** (p. 512).",
    "whyNot": [
      "Full criteria are met, so a residual category is not used.",
      "Correct.",
      "She is prepubertal; the child criteria set applies.",
      "A1 is present along with six other items, and there is distress and impairment; this is more than nonconformity.",
      "There is enough information to make the specific diagnosis."
    ],
    "then": {
      "q": "Her parents add that at home, where she may dress as she likes, she is calm and cheerful; she becomes distressed mainly when relatives tell her she is “really a boy.” How does this affect Criterion B?",
      "choices": [
        "Criterion B is not met, because distress must be present in every setting",
        "Criterion B is not met, because distress caused by relatives is stigma, not dysphoria",
        "Criterion B can still be met: in children, distress may show only when others interfere with their gender expression",
        "Criterion B can be met only if the child also dislikes school",
        "Criterion B is replaced by the A1 item in children"
      ],
      "answer": 2,
      "why": "The manual notes that a young child may show distress only when parents or others say the child is not really the other gender, and that distress may be absent in supportive settings and appear only with **parental or social interference** (pp. 515–516). Her school withdrawal and lost activities also show impairment."
    },
    "discuss": [
      "Which of the eight items are about behavior and which are about the body, and why are body items less common in young children?",
      "How would you record the child’s name and pronouns in the chart?"
    ]
  },
  {
    "id": "v14-02",
    "tag": "Child without A1",
    "stem": "A 7-year-old assigned male at birth has, for the past year, liked to wear his sister’s dresses during play at home, chooses to be the fairy or the princess in pretend games, prefers dolls and kitchen sets, plays mostly with girls, and avoids rough games and toy cars. Asked many times by his parents and by the clinician, he says clearly and consistently that he is a boy and is happy being one. He has never said he dislikes his body or wishes for a girl’s body. Classmates have started to tease him, and he comes home upset after school on those days. His parents ask whether he has gender dysphoria.",
    "q": "What is the most accurate conclusion?",
    "choices": [
      "Unspecified gender dysphoria (F64.9)",
      "Gender dysphoria in children (F64.2): five items with distress for a year are enough",
      "Other specified gender dysphoria (F64.8), reason: below the 6-of-8 count",
      "Gender dysphoria in children is not diagnosed: A1 is absent, and his upset comes from teasing rather than from incongruence",
      "Transvestic disorder"
    ],
    "answer": 3,
    "why": "He shows A2–A6 (clothing, pretend roles, toys, playmates, rejection of rough play), but he does not want to be, or insist he is, another gender, so **A1 is missing**, and the child set requires A1 among **at least 6 of 8** (p. 512). His distress comes from **teasing**, which is stigma, not distress from an incongruence (p. 511). Gender-nonconforming behavior without the strong desire to be another gender is **not** a diagnosis (p. 519).",
    "whyNot": [
      "The information is sufficient: the history is clear and does not suggest gender dysphoria.",
      "Only five items are present, and A1, which is required, is not one of them.",
      "A residual category still needs symptoms of gender dysphoria with distress from them; there is no incongruence here.",
      "Correct.",
      "Transvestic disorder involves sexual arousal from cross-dressing in adolescents and adults."
    ],
    "discuss": [
      "What would you tell the parents about the difference between gender nonconformity and gender dysphoria?",
      "How could the school help reduce the teasing, and why does that matter for his mental health?"
    ]
  },
  {
    "id": "v14-03",
    "tag": "Below the child count",
    "stem": "A 7-year-old assigned female at birth has said firmly for 14 months that he is a boy. He wears only boys’ clothes and fights hard against skirts, always takes male roles in pretend play, plays only with boys, and asks when he will grow a penis. He happily plays with dolls and kitchen sets as well as cars, does not avoid any games, and has never said he dislikes his body. He cries every morning before school, where he must wear a girl’s uniform, and has stopped going to birthday parties. The clinician has a full history from both parents and the teacher.",
    "q": "How is this best recorded, stating the reason?",
    "choices": [
      "Other specified gender dysphoria (F64.8), reason: below the 6-of-8 count",
      "Gender dysphoria in adolescents and adults (F64.0)",
      "No diagnosis, because the child criteria are not fully met",
      "Unspecified gender dysphoria (F64.9)",
      "Gender dysphoria in children (F64.2)"
    ],
    "answer": 0,
    "why": "A1 is present, with A2 (clothing), A3 (pretend roles), A5 (playmates) and A8 (wish for a penis): **five** items, one short of the **6 of 8** the child set requires (p. 512). Symptoms of gender dysphoria with clear **distress and impairment** that fall short of full criteria, with the reason known and stated: **other specified gender dysphoria (F64.8)** (p. 520).",
    "whyNot": [
      "Correct.",
      "He is a prepubertal child; the child criteria set applies.",
      "Distressing gender dysphoria symptoms short of full criteria are what the residual categories are for.",
      "The reason is known and can be recorded; unspecified is for an unstated reason or insufficient information.",
      "Only five of the eight items are present; six are required."
    ],
    "discuss": [
      "If a sixth item appeared at follow-up, what would change in the record?",
      "Why does the manual make A1 compulsory in the child set?"
    ]
  },
  {
    "id": "v14-04",
    "tag": "Brief gender dysphoria",
    "stem": "A 27-year-old office worker assigned female at birth comes to the outpatient clinic. Over the past 3 months he has felt strongly that he is a man: he wants to be addressed by a male name, wants his breasts removed, and feels that his body does not match who he is. He has started binding his chest, calls in sick on days when he cannot face being treated as a woman, and says he feels “stuck and miserable.” He recalls no such feelings before this year. There is no medical illness, substance use, mood or psychotic symptom.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0)",
      "No diagnosis can be made until 6 months have passed",
      "Unspecified gender dysphoria (F64.9)",
      "Adjustment disorder",
      "Other specified gender dysphoria (F64.8), brief gender dysphoria"
    ],
    "answer": 4,
    "why": "He meets the symptom count of the adolescent/adult set (A1 incongruence with his body, A2 wish to be rid of his breasts, A4 and A5 wishes to be and be treated as a man) with distress and impairment, but for only **3 months**. Full criteria short of the **6-month** duration is the manual’s own example of **other specified gender dysphoria: brief gender dysphoria (F64.8)** (p. 520).",
    "whyNot": [
      "The 6-month duration is not yet met.",
      "A residual category exists for distressing presentations that do not yet meet the duration.",
      "The reason is known (duration), so other specified is the more accurate choice; unspecified is for when the clinician chooses not to specify or lacks information.",
      "There is no stressor; the distress arises from the gender incongruence itself.",
      "Correct."
    ],
    "discuss": [
      "What would you review at the 6-month mark?",
      "Which trajectory would this be if it persists, given that he recalls no childhood signs?"
    ]
  },
  {
    "id": "v14-05",
    "tag": "Young adolescent",
    "stem": "An 11-year-old assigned male at birth is in early puberty: the pediatrician has documented testicular enlargement but no voice change or facial hair yet. For 10 months she has said she is a girl and has asked to be treated as one at home. She knows from her older brother that her voice will deepen and that she will grow a beard, and she says these coming changes are wrong for her and that she wants them stopped before they start. She has quit swimming lessons, cries at night, and her grades have fallen. There are no other psychiatric symptoms.",
    "q": "Which statement is correct?",
    "choices": [
      "No diagnosis is possible because her secondary sex characteristics have not developed",
      "The child criteria set must be used because she is under 12",
      "Gender dysphoria in adolescents and adults (F64.0) can be diagnosed, reading A1 and A2 for anticipated changes",
      "Body dysmorphic disorder is the best diagnosis, because her concern is about her body",
      "Other specified gender dysphoria (F64.8), because the body items cannot yet be met"
    ],
    "answer": 2,
    "why": "Puberty has begun, so the **adolescent/adult** set applies. For young adolescents, A1 and A2 refer to the **anticipated** secondary sex characteristics and the wish to **prevent** them (pp. 512–514). With A4 and A5 as well, for over **6 months**, with distress and impairment: **F64.0**.",
    "whyNot": [
      "The criteria explicitly allow anticipated characteristics in young adolescents.",
      "The manual sets no age cutoff; she is in puberty, and A1 and A2 are written to cover anticipated characteristics, so the adolescent/adult set fits (pp. 512–514).",
      "Correct.",
      "Her concern is about changes that do not fit her gender, not a perceived defect.",
      "Full criteria are met using the young-adolescent wording."
    ],
    "then": {
      "q": "Which items of the adolescent and adult set does she show?",
      "choices": [
        "A3 and A6 only",
        "A1 and A2 only",
        "A1, A2, A4 and A5",
        "A4 only",
        "A2, A3 and A6"
      ],
      "answer": 2,
      "why": "A1 (incongruence with anticipated characteristics), A2 (wish to prevent them), A4 (says she is a girl) and A5 (asks to be treated as one). The stem gives no wish for female characteristics (A3) or conviction about typical feelings (A6) (pp. 512–513)."
    },
    "discuss": [
      "At what ages does puberty usually begin in individuals assigned female and assigned male, according to the manual?",
      "Why might distress peak just before puberty rather than after it?"
    ]
  },
  {
    "id": "v14-06",
    "tag": "Nonbinary adolescent",
    "stem": "A 16-year-old assigned female at birth has, for over a year, felt strongly that they are neither a girl nor a boy. They want to be known as nonbinary, ask teachers and family to use “they,” and are convinced that their feelings and reactions are not those of a girl but of someone outside both genders. They are comfortable with their body and want no hormones or surgery. They have become distressed and have been skipping classes where the teacher lines students up as “girls” and “boys”; their grades have dropped from the honor roll. There are no other psychiatric symptoms.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis, because nonbinary identities fall outside the criteria",
      "Gender dysphoria in adolescents and adults (F64.0)",
      "Other specified gender dysphoria (F64.8), because no body item is met",
      "Gender dysphoria in children (F64.2)",
      "No diagnosis, because they want no medical treatment"
    ],
    "answer": 1,
    "why": "A4 (wish to be an **alternative** gender), A5 (wish to be **treated** as that gender) and A6 (conviction of that gender’s feelings and reactions): **3 of 6**, where 2 are required, for over **6 months**, with distress and school impairment: **F64.0** (pp. 512–513). The criteria explicitly include an alternative gender, and no body item is required.",
    "whyNot": [
      "Each of A4–A6 names an alternative gender different from the assigned one.",
      "Correct.",
      "No item is compulsory in the adolescent/adult set; full criteria are met.",
      "They are an adolescent; the adolescent/adult set applies.",
      "Wanting medical treatment is not a criterion."
    ],
    "discuss": [
      "Why is it important that the criteria allow an “alternative gender”?",
      "How would you separate distress from incongruence from distress caused by how the school treats them?"
    ]
  },
  {
    "id": "v14-07",
    "tag": "Inner certainty",
    "stem": "A 34-year-old public school teacher in Pampanga, assigned male at birth, has known inwardly since adolescence that she is a woman. She has a firm inner certainty about this but does not want hormones or surgery and has no plan to transition socially because of her family. For many years she has strongly wished to be a woman and to be treated as one. Over the past 2 years the strain has become marked: she cannot concentrate in class, has received two warnings from her principal, and avoids colleagues. She has no psychotic symptoms, does not use substances, and has no sexual interest in cross-dressing.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "No diagnosis, because she does not seek medical treatment",
      "Transvestic disorder",
      "Other specified gender dysphoria (F64.8), because she has not transitioned",
      "Gender dysphoria in adolescents and adults (F64.0)",
      "Delusional disorder"
    ],
    "answer": 3,
    "why": "A4 (strong desire to be a woman) and A5 (strong desire to be treated as one) are **2 of 6**, present for years, with clinically significant distress and occupational impairment: **F64.0** (pp. 512–513). The manual describes adults with an **inner certainty** of their gender who do not seek medical change (p. 514).",
    "whyNot": [
      "Seeking hormones or surgery is not required for the diagnosis.",
      "There is no sexual arousal from cross-dressing.",
      "Full criteria are met; social or medical transition is not part of them.",
      "Correct.",
      "A stable gender identity without psychosis is not a delusion."
    ],
    "then": {
      "q": "Outside the DSM, which best describes the psychiatrist’s role with her?",
      "choices": [
        "To decide alone whether she should begin hormones",
        "To assess her distress, comorbidity and suicide risk and to support her (and her family if she wishes), within a multidisciplinary approach",
        "To try to change her gender identity",
        "To withhold the diagnosis until she agrees to transition",
        "To discharge her, since she wants no medical treatment"
      ],
      "answer": 1,
      "why": "Outside the DSM: assessment is **multidisciplinary**; psychiatry’s part is to assess distress, **comorbidity** and **suicide risk**, and to support the person and family. Decisions about medical treatment are not the psychiatrist’s alone (see the care section)."
    },
    "discuss": [
      "Which parts of her distress come from incongruence, and which may come from family or workplace stigma?",
      "Why does the manual move the focus from identity to dysphoria?"
    ]
  },
  {
    "id": "v14-08",
    "tag": "No distress, no diagnosis",
    "stem": "A 41-year-old transgender man, assigned female at birth, has lived as a man for 15 years. He took testosterone for many years and had chest surgery a decade ago. He is married, works as a nurse, and says he is content with his body and with how others treat him. On interview he reports no distress about his gender, sleeps and functions well, and has no other symptoms. He has come only for a pre-employment medical clearance, and the form asks for any psychiatric diagnosis.",
    "q": "What is the correct conclusion?",
    "choices": [
      "No mental disorder: Criterion B is not met",
      "Other specified gender dysphoria (F64.8)",
      "Gender dysphoria in adolescents and adults, in remission",
      "Unspecified gender dysphoria (F64.9)",
      "Gender dysphoria in adolescents and adults, posttransition (F64.0)"
    ],
    "answer": 0,
    "why": "Being transgender is **not** a disorder. Without **clinically significant distress or impairment**, the criteria are not met (pp. 512–513). The posttransition specifier does not create a diagnosis in someone who no longer meets Criterion B.",
    "whyNot": [
      "Correct.",
      "Residual categories also require distress or impairment.",
      "DSM-5-TR has no remission specifier for gender dysphoria.",
      "There is no distress, and the history is complete.",
      "Posttransition is a specifier for someone who still meets the criteria; he has no distress or impairment."
    ],
    "discuss": [
      "How would you word the clearance form respectfully and accurately?",
      "What is the ICD-10-CM code F64.A, added in October 2026, and why is it not a DSM diagnosis?"
    ]
  },
  {
    "id": "v14-09",
    "tag": "Posttransition",
    "stem": "A 29-year-old transgender woman, assigned male at birth, has lived full time as a woman for 3 years and has taken regular estradiol under an endocrinologist for 2 years. Her birth certificate and identification cards still show her birth name and sex. She still meets criteria for gender dysphoria in adolescents and adults: she is markedly distressed by her facial hair and voice, and being misgendered by clients has led her to turn down work. There are no other psychiatric symptoms.",
    "q": "How should her diagnosis be recorded?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0), without a specifier, because no legal change has been made",
      "Gender dysphoria in adolescents and adults (F64.0), posttransition and with a DSD",
      "Other specified gender dysphoria (F64.8)",
      "No diagnosis, because she has already transitioned",
      "Gender dysphoria in adolescents and adults (F64.0), posttransition"
    ],
    "answer": 4,
    "why": "Posttransition = living **full time** in the experienced gender, **with or without a legal change**, plus at least one gender-affirming medical procedure or regimen, such as **regular hormone treatment** (p. 513). She still meets the criteria, so: **F64.0, posttransition**. The code does not change.",
    "whyNot": [
      "A legal change of gender is not required for the specifier.",
      "Nothing indicates a documented disorder/difference of sex development.",
      "Full criteria are met.",
      "She is still distressed and impaired, so the diagnosis stands.",
      "Correct."
    ],
    "then": {
      "q": "Her friend, 25 and assigned male at birth, has lived full time as a woman for 2 years but has had no hormones or surgery and has no plans for any. She also meets criteria, with distress. Does the posttransition specifier apply to her?",
      "choices": [
        "Yes: full-time living in the experienced gender is enough",
        "Yes, once she has lived full time for 3 years",
        "Yes, if her legal documents are changed",
        "No: she has neither had nor is preparing for a gender-affirming medical procedure or regimen",
        "No, because the specifier is only for children"
      ],
      "answer": 3,
      "why": "The specifier needs **both** parts: full-time living **and** at least one gender-affirming medical procedure or regimen done or being prepared for (p. 513). Full-time living alone does not qualify."
    },
    "discuss": [
      "Which procedures does the manual list as examples for individuals assigned male and assigned female at birth?",
      "Why would someone who is posttransition still need a diagnosis?"
    ]
  },
  {
    "id": "v14-10",
    "tag": "DSD specifier in a child",
    "stem": "A 7-year-old has 46,XX classical congenital adrenal hyperplasia, diagnosed on newborn screening and recorded in the chart, and takes hydrocortisone daily. The child was assigned female at birth. For the past year he has insisted he is a boy, wears only boys’ clothes and refuses dresses, plays boys’ roles in pretend play, prefers boys as playmates, strongly rejects dolls, dress-up and other typically feminine toys and games, and says he wants to grow up with a man’s body. He is prepubertal. He is miserable at school, where he is made to line up with the girls, and has started refusing to go.",
    "q": "How should this be coded?",
    "choices": [
      "F64.2 only; the CAH is recorded in the narrative",
      "E25.0 only, because a DSD excludes gender dysphoria",
      "F64.2 with the specifier “with a disorder/difference of sex development,” plus E25.0",
      "F64.0 with the DSD specifier, plus E25.0",
      "Other specified gender dysphoria (F64.8), because a DSD is present"
    ],
    "answer": 2,
    "why": "A1 plus A2, A3, A5, A6 and A8: **6 of 8** including A1, for a year, with distress and school refusal, in a **prepubertal child**: **F64.2**. The CAH is a **specific, codable DSD documented in the record**, so the specifier applies, and the coding note says to code the DSD **as well**: **E25.0** (pp. 512–513).",
    "whyNot": [
      "When the specifier applies, the DSD is coded too.",
      "A DSD does not exclude gender dysphoria; it is a specifier.",
      "Correct.",
      "He is prepubertal; the child set and F64.2 apply.",
      "Full criteria are met; a DSD is not a reason to use a residual category."
    ],
    "then": {
      "q": "Which statement about prenatal androgens and gender in people with a DSD fits the manual?",
      "choices": [
        "Prenatal androgens relate more to gendered behavior than to gender identity, and nonconforming behavior alone does not predict gender dysphoria",
        "Prenatal androgens determine gender identity in almost every case",
        "Gender-nonconforming behavior in CAH reliably predicts later gender dysphoria",
        "Gender dysphoria is less likely when prenatal androgens are discordant with the assigned gender",
        "Adherence to glucocorticoids has no relation to risk"
      ],
      "answer": 0,
      "why": "Prenatal androgens are more related to **gendered behavior** than to **identity**; many people with a DSD and markedly variant behavior never develop dysphoria. Risk rises when prenatal androgens are grossly discordant with the assigned gender, and further with prolonged postnatal virilization, such as long **nonadherence to glucocorticoids** in female-raised 46,XX CAH (pp. 517–518)."
    },
    "discuss": [
      "How does the course of gender dysphoria with a DSD differ from the course without one?",
      "Why does the manual limit the specifier to a documented, codable DSD?"
    ]
  },
  {
    "id": "v14-11",
    "tag": "DSD not documented",
    "stem": "A 22-year-old assigned female at birth meets full criteria for gender dysphoria in adolescents and adults: for 3 years he has wanted to be rid of his breasts, to be a man and to be treated as one, with marked distress and dropout from university. He mentions that his grandmother once said there was “something unusual” about him at birth. His birth records and the current hospital chart contain no diagnosis of any disorder/difference of sex development, and no endocrine testing has been done. His physical examination by the internist is unremarkable.",
    "q": "How should the diagnosis be recorded today?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0), with a disorder/difference of sex development",
      "Gender dysphoria in adolescents and adults (F64.0), without the DSD specifier",
      "Unspecified gender dysphoria (F64.9) until a karyotype is done",
      "Other specified gender dysphoria (F64.8)",
      "No diagnosis until a DSD has been ruled out"
    ],
    "answer": 1,
    "why": "Full criteria for **F64.0** are met. The DSD specifier is used only when a **specific, codable** DSD is **documented in the medical record** (p. 513); a family rumor is not enough. The specifier can be added later if a DSD is diagnosed and recorded.",
    "whyNot": [
      "A suspected or rumored DSD does not justify the specifier.",
      "Correct.",
      "The criteria are fully met; testing for a DSD does not change that.",
      "Full criteria are met, so a residual category is not used.",
      "The diagnosis does not depend on excluding a DSD; a DSD is a specifier, not an exclusion."
    ],
    "discuss": [
      "Which DSD examples does the manual give in its definitions?",
      "Who should decide whether endocrine testing is needed, and why?"
    ]
  },
  {
    "id": "v14-12",
    "tag": "Transvestic disorder",
    "stem": "A 38-year-old man, married to a woman, has since age 15 become sexually aroused by wearing women’s lingerie, usually while masturbating, about once a week. During sex he sometimes asks his wife to call him by a woman’s name, which excites him. When he is not aroused he has no interest in women’s clothing. He likes being a man, has no wish to change his body, and wants to be treated as a man at work and at home. His wife found his collection, and he is ashamed and worried about his marriage. He asks whether he is transgender.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0)",
      "Other specified gender dysphoria (F64.8)",
      "No diagnosis: occasional cross-dressing in adult men",
      "Transvestic disorder",
      "Body dysmorphic disorder"
    ],
    "answer": 3,
    "why": "Recurrent **sexual arousal** from cross-dressing with **distress** and relationship strain, while his assigned gender is **not in question**, describes **transvestic disorder** (Chapter 19), not gender dysphoria (p. 519). Being called a woman’s name only as part of sexual arousal is not a strong desire to be treated as a woman in daily life.",
    "whyNot": [
      "He has no wish to be, or be treated as, a woman, and no body-related items.",
      "There are no gender dysphoria symptoms to place in a residual category.",
      "The cross-dressing is recurrent, sexually arousing and distressing, not occasional and neutral.",
      "Correct.",
      "He has no concern about a perceived defect in his appearance."
    ],
    "discuss": [
      "How would you answer his question “Am I transgender?”",
      "What history would make you consider gender dysphoria as well?"
    ]
  },
  {
    "id": "v14-13",
    "tag": "Transvestic disorder and GD",
    "stem": "A 47-year-old assigned male at birth, attracted to women, has been sexually aroused by cross-dressing since adolescence. Over the past 3 years a strong and steady wish has grown to be a woman and to be treated as one in daily life. She now wants to be rid of her beard and her genitals and uses a woman’s name with friends. Intense sexual arousal from cross-dressing has continued throughout, several times a month over the past year, and it distresses and shames her. The conflict has ended her marriage, and she has taken leave from her job because of the distress.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0) together with transvestic disorder",
      "Gender dysphoria only, because it replaces transvestic disorder",
      "Other specified gender dysphoria (F64.8)",
      "Body dysmorphic disorder",
      "Transvestic disorder only, because the cross-dressing began as sexual"
    ],
    "answer": 0,
    "why": "She now meets the adolescent/adult set (A2 wish to be rid of sex characteristics, A4 and A5 wishes to be and be treated as a woman) for **3 years** with distress and impairment, and she still has recurrent, intense, distressing sexual arousal from cross-dressing, so transvestic disorder is also present. The manual says transvestic disorder is **occasionally accompanied** by gender dysphoria and that **both** can be diagnosed when both sets of criteria are met (p. 519).",
    "whyNot": [
      "Correct.",
      "Neither diagnosis replaces the other; both can be given.",
      "Full gender dysphoria criteria are met.",
      "Her body concerns stand for a rejected assigned gender, not a perceived defect.",
      "Her current wish to be and live as a woman meets gender dysphoria criteria too."
    ],
    "then": {
      "q": "Which developmental pattern does the manual describe that fits her history?",
      "choices": [
        "Early-onset dysphoria in which cross-dressing always appears first in childhood",
        "Brief dysphoria that usually resolves within 6 months",
        "In some postpubertal-onset individuals assigned male who are attracted to women, sexualized cross-dressing comes before the gender dysphoria",
        "Transvestic disorder that always turns into gender dysphoria",
        "Gender dysphoria that always leads to loss of sexual arousal"
      ],
      "answer": 2,
      "why": "The manual notes that in some individuals assigned male with **late (postpubertal) onset** who are attracted to women, **sexualized cross-dressing precedes** the gender dysphoria (p. 519); the risk section lists a history of transvestism in postpubertal onset (p. 517)."
    },
    "discuss": [
      "How would you ask about sexual arousal and cross-dressing respectfully?",
      "Why might she find it hard to talk about the arousal now that she identifies as a woman?"
    ]
  },
  {
    "id": "v14-14",
    "tag": "BDD, not GD",
    "stem": "A 20-year-old man, assigned male at birth, is convinced that his penis is abnormally shaped and much too small, although a urologist found it normal. He compares himself with other men in the gym locker room, checks it in the mirror for over 2 hours a day, and has asked three surgeons to “fix” it. He admits that it may look normal to others. He identifies firmly as a man, wants to be seen as a man, and has no wish to be another gender. He has stopped dating and is failing his classes.",
    "q": "What is the most likely diagnosis?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0)",
      "Unspecified gender dysphoria (F64.9)",
      "Other specified gender dysphoria (F64.8)",
      "Transvestic disorder",
      "Body dysmorphic disorder"
    ],
    "answer": 4,
    "why": "He wants a body part changed because he sees it as **malformed**, not because it stands for a **rejected assigned gender**. Preoccupation with a perceived defect, repetitive checking and comparing, with distress and impairment: **body dysmorphic disorder** (Chapter 6; p. 519).",
    "whyNot": [
      "He has no incongruence: he identifies as a man and wants to be seen as one.",
      "The information is sufficient, and it does not point to gender dysphoria.",
      "There are no gender dysphoria symptoms.",
      "There is no sexual arousal from cross-dressing.",
      "Correct."
    ],
    "discuss": [
      "Which question best separates body dysmorphic disorder from gender dysphoria when the concern is about the genitals?",
      "How would you record his level of insight?"
    ]
  },
  {
    "id": "v14-15",
    "tag": "BDD and GD",
    "stem": "A 26-year-old transgender woman, assigned male at birth, has for years met criteria for gender dysphoria in adolescents and adults, with marked distress about her facial hair and her genitals. Separately, for the past 2 years she has been convinced that her skin is covered with large, ugly pores and that her ears stick out; she says these worries have nothing to do with being a woman. Friends and her dermatologist see nothing abnormal. She checks mirrors about 4 hours a day, picks at her skin and avoids photographs. Her insight about the skin and ears is fair.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Gender dysphoria only, because her body concerns are part of it",
      "Body dysmorphic disorder only",
      "Gender dysphoria in adolescents and adults (F64.0) and body dysmorphic disorder",
      "Other specified gender dysphoria (F64.8)",
      "Delusional disorder, somatic type"
    ],
    "answer": 2,
    "why": "Her distress about facial hair and genitals reflects her rejected **assigned** gender (gender dysphoria). Her preoccupation with skin and ears is about **perceived defects** unrelated to gender, with repetitive checking and distress (BDD). The manual says **both** can be diagnosed when both sets of criteria are met (p. 519).",
    "whyNot": [
      "The skin and ear concerns are about perceived flaws, not about gender.",
      "Her gender dysphoria is long-standing and still meets criteria.",
      "Correct.",
      "Full gender dysphoria criteria are met.",
      "Her insight is fair, so the beliefs are not held with delusional conviction."
    ],
    "discuss": [
      "Why is it important not to fold all body concerns in a transgender patient into gender dysphoria?",
      "What would you ask to find out which body concerns relate to gender?"
    ]
  },
  {
    "id": "v14-16",
    "tag": "Gender delusion",
    "stem": "A 44-year-old woman with schizophrenia, assigned female at birth, is admitted after stopping her medication. She says a machine at the barangay hall has turned her into a man, that her womb was taken out by radio waves, and that a beard is growing on the inside of her face. She also hears voices commenting on her. Her records show that the same belief appeared in two earlier relapses and faded each time as the psychosis remitted. Between episodes she describes herself as a woman and has no discomfort with her body or her role.",
    "q": "What is the most accurate formulation?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0)",
      "A gender-themed delusion within schizophrenia; gender dysphoria is not diagnosed",
      "Schizophrenia and gender dysphoria",
      "Other specified gender dysphoria (F64.8)",
      "Body dysmorphic disorder"
    ],
    "answer": 1,
    "why": "Gender-themed delusions occur in **up to 20%** of people with schizophrenia. **Bizarre** content and a belief that **waxes and wanes** with psychotic episodes mark it as a delusion, not gender dysphoria; between episodes she has no incongruence (p. 520).",
    "whyNot": [
      "Her gender belief exists only during psychosis; she has no persistent incongruence.",
      "Correct.",
      "There is no gender dysphoria to diagnose alongside the schizophrenia.",
      "The belief is a psychotic symptom, not a gender dysphoria symptom.",
      "She is not preoccupied with a perceived flaw in her appearance."
    ],
    "discuss": [
      "Which two features does the manual use to tell a gender-themed delusion from gender dysphoria?",
      "How would you document this belief so it is not mistaken for a gender identity later?"
    ]
  },
  {
    "id": "v14-17",
    "tag": "Schizophrenia and GD",
    "stem": "A 27-year-old transgender man, assigned female at birth, has said he is a boy since age 6 and has lived as a man since 18. He binds his chest, wants it removed, and is distressed by being called by his birth name. At 22 he developed schizophrenia, with persecutory delusions that his neighbors are poisoning him and voices that insult him. Records from three admissions and the clinic show that his gender identity and his wishes about his body have stayed the same during psychotic episodes and in remission, and they contain nothing bizarre. His distress about his chest has kept him out of work even when his psychosis is controlled.",
    "q": "What is the most accurate diagnosis?",
    "choices": [
      "Schizophrenia only; his gender identity is part of the psychosis",
      "Gender dysphoria only; the psychosis is a reaction to stigma",
      "Schizophrenia; defer any gender assessment until the psychosis has been absent for years",
      "Schizophrenia and gender dysphoria in adolescents and adults (F64.0)",
      "Schizoaffective disorder"
    ],
    "answer": 3,
    "why": "His gender identity is **stable, long-standing and non-bizarre**, unchanged across psychotic and well periods, and he meets the adolescent/adult set (A1, A2, A4, A5) with distress and impairment. Without psychosis, insisting on being another gender is **not a delusion**, and the manual says gender dysphoria and schizophrenia **can co-occur** (p. 520).",
    "whyNot": [
      "His identity predates the psychosis and does not wax and wane with it.",
      "Persecutory delusions and voices are not explained by stigma.",
      "His gender history is clear and stable; there is no reason to defer the diagnosis.",
      "Correct.",
      "Nothing in the stem describes mood episodes."
    ],
    "discuss": [
      "What risks does a patient face if the team wrongly calls his gender identity a delusion?",
      "Which questions about timing help separate the two conditions?"
    ]
  },
  {
    "id": "v14-18",
    "tag": "Autism and GD",
    "stem": "A 15-year-old assigned female at birth was diagnosed with autism spectrum disorder at age 4. Over 18 months, a team saw him on six visits with his parents and teachers. Throughout, he has said steadily that he is a boy and wants to be treated as one, binds his chest, and is very distressed by menstruation. His identity is not tied to a rule about clothes, colors or activities: he still enjoys interests he calls “girly” and says that liking them does not change who he is. His distress has led him to stop attending school.",
    "q": "What is the most accurate conclusion after this assessment?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0) alongside autism spectrum disorder",
      "Gender dysphoria cannot be diagnosed in someone with autism spectrum disorder",
      "Other specified gender dysphoria (F64.8), because autism is present",
      "No conclusion is possible until he turns 18",
      "Autism spectrum disorder only: the gender statements are a restricted interest"
    ],
    "answer": 0,
    "why": "The manual warns that co-occurring gender dysphoria can be **hard to tell from an autistic preoccupation**, given concrete, rigid thinking about gender roles (pp. 519–520). Here a careful assessment over 18 months shows a **steady** identity not built on gender stereotypes, with A1, A2, A4 and A5, distress and impairment. Both diagnoses can be made; autism traits are **over-represented** in gender dysphoria (p. 515).",
    "whyNot": [
      "Correct.",
      "Autism does not exclude gender dysphoria; they often co-occur.",
      "Full criteria are met; autism is not a reason to use a residual category.",
      "The adolescent/adult set applies at his age; there is no lower limit of 18.",
      "His identity is consistent and not based on rigid rules about gender roles."
    ],
    "discuss": [
      "What would point instead toward an autistic preoccupation rather than gender dysphoria?",
      "Why does the assessment take longer when autism is present?"
    ]
  },
  {
    "id": "v14-19",
    "tag": "Other presentations",
    "stem": "A 36-year-old man, assigned male at birth, asks for removal of his testes. He dislikes his body hair and oily skin, which he blames on testosterone, and wants a “smoother, cleaner look.” He identifies firmly as a man, wants to be seen and treated as a man, and has no wish to be a woman or to be outside the categories of man and woman. He has no sexual interest in cross-dressing. He is frustrated that surgeons have refused him.",
    "q": "What is the correct conclusion about gender dysphoria?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0)",
      "Unspecified gender dysphoria (F64.9)",
      "Other specified gender dysphoria (F64.8)",
      "Transvestic disorder",
      "Criteria for gender dysphoria are not met"
    ],
    "answer": 4,
    "why": "The manual says males who want genital surgery for **aesthetic** reasons or to remove the **effects of androgens**, while keeping a **male identity**, do **not** meet criteria (p. 520).",
    "whyNot": [
      "He has no incongruence between his experienced gender and his assigned gender.",
      "The history is clear; it does not suggest gender dysphoria.",
      "There are no gender dysphoria symptoms to place in a residual category.",
      "There is no sexual arousal from cross-dressing.",
      "Correct."
    ],
    "then": {
      "q": "Two years later the same person says they no longer feel like a man or a woman, strongly want to be rid of their genitals and to be treated as neither, and have been distressed by this for over a year. What does the manual say?",
      "choices": [
        "Criteria can never be met after an aesthetic request",
        "Only body dysmorphic disorder can apply",
        "This must be transvestic disorder",
        "Criteria require a wish to be a woman specifically",
        "A wish for emasculinization with a nonmale/nonfemale identity can meet criteria for gender dysphoria"
      ],
      "answer": 4,
      "why": "An **emasculinization** wish together with a **nonmale/nonfemale** identity, with distress, can meet the criteria (p. 520); the criteria allow an alternative gender."
    },
    "discuss": [
      "Which part of the history decides whether gender dysphoria is present here?",
      "What else would you assess in a person seeking surgery that surgeons have refused?"
    ]
  },
  {
    "id": "v14-20",
    "tag": "Suicide risk",
    "stem": "A 17-year-old transgender girl, assigned male at birth, has had gender dysphoria in adolescents and adults diagnosed for a year. Her parents do not accept her identity, and classmates have harassed her online and at school. For 6 weeks she has felt hopeless and has stopped eating with her family. At today’s visit she says quietly that “everyone would be better off without me,” and her younger sister mentioned that she has been searching online about paracetamol overdose.",
    "q": "What is the most appropriate next step?",
    "choices": [
      "Recount the gender dysphoria criteria to confirm the diagnosis",
      "Schedule a routine review in 3 months to see whether acceptance improves",
      "Ask directly about suicidal thoughts, intent, plans, access to means and past attempts, and act on what you find today",
      "Advise her to stop expressing her gender at school to avoid harassment",
      "Refer her to endocrinology"
    ],
    "answer": 2,
    "why": "She carries several risk factors the manual lists: **younger age**, **gender victimization**, probable **depression** (p. 518), and she lacks the family support the manual links to better outcomes (p. 519), plus a passive death wish and research into a method (pp. 518–519). A direct **suicide risk assessment** now comes before anything else.",
    "whyNot": [
      "Her diagnosis is established; her immediate safety is the priority.",
      "Delay is unsafe with a death wish and research into overdose.",
      "Correct.",
      "This blames her for others’ harassment and is likely to add to her distress.",
      "This does not address her immediate risk."
    ],
    "discuss": [
      "What range of suicidality and attempts does the manual report in transgender individuals, and which risk factors does it name?",
      "How would you involve her parents while keeping her trust?"
    ]
  },
  {
    "id": "v14-21",
    "tag": "Comorbid depression",
    "stem": "A 23-year-old transgender man, assigned female at birth, has met criteria for gender dysphoria in adolescents and adults for several years, with distress about his chest and his voice. For the past 5 weeks he has felt depressed most of the day nearly every day, has lost interest in his music, sleeps only 4 hours a night, cannot concentrate at work and feels worthless. He does not use alcohol or drugs, and his thyroid tests are normal. He has never had a manic or hypomanic episode.",
    "q": "What is the most accurate diagnostic formulation?",
    "choices": [
      "Gender dysphoria only, because depression is part of it",
      "Gender dysphoria in adolescents and adults (F64.0) and major depressive disorder",
      "Major depressive disorder only, because the depression explains his distress",
      "Adjustment disorder with depressed mood",
      "Other specified gender dysphoria (F64.8)"
    ],
    "answer": 1,
    "why": "He has five depressive symptoms for over **2 weeks** with impairment: a **major depressive episode**, recorded separately. His gender dysphoria still meets criteria. The manual names **depressive and anxiety disorders** as the most common comorbidities in adolescents and adults (p. 520).",
    "whyNot": [
      "Depression is a separate, treatable disorder and is diagnosed when its criteria are met.",
      "Correct.",
      "His gender dysphoria predates the depression and still meets criteria.",
      "Full criteria for a major depressive episode are met.",
      "Full gender dysphoria criteria are met."
    ],
    "then": {
      "q": "Which disorders does the manual name as the most common comorbidities in clinically referred adolescents and adults with gender dysphoria?",
      "choices": [
        "Psychotic disorders",
        "Personality disorders",
        "Eating disorders",
        "Anxiety and depressive disorders",
        "Bipolar disorders"
      ],
      "answer": 3,
      "why": "**Anxiety and depressive disorders** are the most common; ASD is more prevalent than in the general population, and PTSD can follow harassment and violence (p. 520)."
    },
    "discuss": [
      "Which comorbidities does the manual list for clinically referred children?",
      "Why should a suicide risk assessment follow this diagnosis?"
    ]
  },
  {
    "id": "v14-22",
    "tag": "Unspecified",
    "stem": "A psychiatry resident does a telepsychiatry consult for a rural health unit in Bataan. The patient, a 30-year-old assigned male at birth, says she has been very distressed about her gender “for some time” and is struggling at work. After 10 minutes the connection fails, and the unit cannot reach her again that day. No records are available. The resident must record a working diagnosis for the referral note.",
    "q": "Which is the best working diagnosis?",
    "choices": [
      "Gender dysphoria in adolescents and adults (F64.0)",
      "Other specified gender dysphoria (F64.8), brief gender dysphoria",
      "No diagnosis can be recorded",
      "Unspecified gender dysphoria (F64.9)",
      "Gender dysphoria in children (F64.2)"
    ],
    "answer": 3,
    "why": "Distress and impairment related to gender are reported, but there is **insufficient information** to judge the criteria or the duration. That is what **unspecified gender dysphoria (F64.9)** is for (p. 520).",
    "whyNot": [
      "The items and the 6-month duration cannot be confirmed.",
      "Brief gender dysphoria needs full criteria shown for under 6 months; neither is established.",
      "A residual category exists for exactly this situation.",
      "Correct.",
      "She is an adult."
    ],
    "then": {
      "q": "At a full follow-up 2 weeks later she describes 2 years of a strong desire to have a woman’s body, to be a woman and to be treated as one, with distress and warnings at work. How should the record change?",
      "choices": [
        "Change to gender dysphoria in adolescents and adults (F64.0)",
        "Keep unspecified gender dysphoria (F64.9) permanently",
        "Change to other specified gender dysphoria (F64.8)",
        "Change to gender dysphoria in children (F64.2)",
        "Remove the diagnosis"
      ],
      "answer": 0,
      "why": "A3, A4 and A5 for **2 years** with distress and impairment meet full criteria: **F64.0**. Unspecified is revised once the history is clear."
    },
    "discuss": [
      "What information would you try to gather first at the follow-up?",
      "How is unspecified different from other specified gender dysphoria?"
    ]
  },
  {
    "id": "v14-23",
    "tag": "Late onset",
    "stem": "A 31-year-old transgender woman, assigned male at birth, has met criteria for gender dysphoria in adolescents and adults for several years. Her distress began at about 16, as her body changed. She recalls wishing to be a girl at about age 8 but never telling anyone, and as a child she showed no gender-nonconforming behavior that her family noticed. Her parents say they were completely surprised when she told them at 25. Her distress has varied over the years and has never been as intense as that of a friend who was seen at a gender clinic as a young child.",
    "q": "Which description fits her course best?",
    "choices": [
      "Late (pubertal or postpubertal)-onset gender dysphoria",
      "Early (prepubertal)-onset gender dysphoria that persisted",
      "Not gender dysphoria, because there was no childhood history",
      "Brief gender dysphoria",
      "Early (prepubertal)-onset gender dysphoria with desistance"
    ],
    "answer": 0,
    "why": "Onset **around puberty**, an unvoiced childhood wish, **surprised parents**, and distress that is **more variable and less intense** describe **late (pubertal/postpubertal)-onset** gender dysphoria (pp. 516–517).",
    "whyNot": [
      "Correct.",
      "An unvoiced wish without behavior does not meet the child criteria.",
      "A childhood history is not required for the diagnosis.",
      "Her dysphoria has lasted for years.",
      "She never met the child criteria, and her dysphoria has not desisted."
    ],
    "discuss": [
      "How does the manual describe the presentation of early-onset gender dysphoria in comparison?",
      "How would you respond to parents who doubt the diagnosis because they saw nothing in childhood?"
    ]
  },
  {
    "id": "v14-24",
    "tag": "Early onset, recurrence",
    "stem": "A 25-year-old assigned male at birth comes to the clinic. Records show that at age 7 she was diagnosed with gender dysphoria in children, having met the full child criteria. From about 13 to 21 she had no gender dysphoria and identified as a gay man. For the past 2 years she has strongly wanted to be a woman, to be treated as one, and to be rid of her facial hair, and she is distressed and has withdrawn from friends. There are no other psychiatric symptoms.",
    "q": "Which statement best describes her course?",
    "choices": [
      "Late-onset gender dysphoria, because the current period began in adulthood",
      "Brief gender dysphoria",
      "The childhood diagnosis must have been wrong, because it desisted",
      "Gender dysphoria cannot be diagnosed after a period of gay identity",
      "Early-onset gender dysphoria with a period of desistance and later recurrence"
    ],
    "answer": 4,
    "why": "In the **early (prepubertal)-onset** trajectory, dysphoria may **desist or be denied** for a time, during which the person may identify as gay or lesbian, and may **recur** later (p. 516). She now meets the adolescent/adult set (A2, A4, A5) for 2 years with distress: **F64.0**.",
    "whyNot": [
      "She met the child criteria at age 7, so the onset was early.",
      "The current dysphoria has lasted 2 years.",
      "The manual describes desistance followed by recurrence as part of the early-onset course.",
      "A period of gay identity is described within this trajectory; it does not rule out the diagnosis.",
      "Correct."
    ],
    "discuss": [
      "What persistence figures does the manual give for childhood gender dysphoria in individuals assigned male and assigned female?",
      "What does the manual say about sexual orientation in those whose dysphoria persists and those whose dysphoria desists?"
    ]
  },
  {
    "id": "v14-25",
    "tag": "Code by age",
    "stem": "An 8-year-old assigned female at birth, with no breast development or other sign of puberty, has insisted for 2 years that he is a boy. He wears only boys’ clothes and refuses dresses, plays male characters in pretend play, prefers boys’ games and boys as playmates, and says he hates his genitals and does not want to grow breasts. He is distressed and avoids school events that require a girl’s uniform. There is no disorder/difference of sex development.",
    "q": "Which code is correct?",
    "choices": [
      "F64.0",
      "F64.8",
      "F64.2",
      "F64.9",
      "F64.A"
    ],
    "answer": 2,
    "why": "A1 plus A2, A3, A4, A5 and A7: **6 of 8** including A1, for 2 years, with distress and impairment, in a **prepubertal** child: **gender dysphoria in children, F64.2** (p. 512).",
    "whyNot": [
      "F64.0 is for adolescents and adults.",
      "Full criteria are met, so the other specified code is not used.",
      "Correct.",
      "The information is sufficient for a specific diagnosis.",
      "F64.A, “gender identity disorder, in remission,” is an ICD-10-CM code added on October 1, 2026; it is not a DSM diagnosis and is not used when criteria are currently met."
    ],
    "then": {
      "q": "At 13, now in mid-puberty, he still meets criteria for gender dysphoria with distress. Which code applies now?",
      "choices": [
        "F64.2, because the diagnosis was first made in childhood",
        "F64.8",
        "F64.0",
        "F64.9",
        "F64.2 with the posttransition specifier"
      ],
      "answer": 2,
      "why": "Once in adolescence, he is assessed with the **adolescent/adult** set, coded **F64.0** (pp. 512–513). The code follows the current criteria set, not the age at first diagnosis; posttransition exists only in the adolescent/adult set and does not change the code."
    },
    "discuss": [
      "Which criteria items would you check at 13 that did not apply at 8?",
      "Why does the manual use separate criteria sets for children and for adolescents and adults?"
    ]
  }
]);
