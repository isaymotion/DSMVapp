/* Chapter 14 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  orientation to assessment and care, clearly labeled as outside the DSM; no Stahl links for this chapter
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var OPEN = "Ask in **private**, use the person’s **name and pronouns**, explain why you are asking (app guidance), and separate distress about the **body and role** from distress caused by **how others treat them** (the manual separates incongruence from stigma, p. 511).";
  var CARE = {
    asOf: "October 2026",
    first: "Outside the DSM: **assessment** (criteria, differential, comorbidity, suicide risk, family support), treatment of **comorbid** disorders, and a **multidisciplinary** decision about any gender-affirming treatment under the guidelines and laws that apply where you practice (WPATH SOC-8, 2022; Endocrine Society, 2017, update in development).",
    points: [
      OPEN,
      "**Suicide risk** at every visit: the manual cites 30%–80% suicidality in transgender individuals and an 8.6-fold risk of self-harm or attempts in gender-referred children (pp. 518–519).",
      "Treat **depression, anxiety, PTSD and substance use** with standard care; they are the common comorbidities (p. 520). Screen for **autism spectrum disorder** (p. 520).",
      "Work with the **family**: acceptance and support go with fewer psychological problems (p. 515).",
      "Ask about **unsupervised** hormones, GnRH agonists or spironolactone and arrange medical review (pp. 514–515).",
      "Policies on gender-affirming care for **minors** differ by country and have changed since 2024 (England restricted puberty blockers to research after the Cass Review; the US Supreme Court upheld Tennessee’s ban (United States v. Skrmetti, 2025), allowing similar state laws to stand, and federal rules followed, some blocked by courts). The Philippines has no specific national law or DOH guideline: follow hospital policy and present the landscape to families **neutrally**.",
      "Document the diagnosis, specifiers and codes accurately; access to care often depends on it, and the manual notes that lack of access to desired treatment is itself a source of distress (p. 512)."
    ],
    stahl: []
  };

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "gender-dysphoria-children",
      ask: [
        ["A1 Identity", "To the child: “Do you feel like a boy, a girl, or something else? Do you wish you were a different one?” To parents: “Has your child said they are, or want to be, another gender? Since when, how often?”", "A1 is required; distinguish a wish to be from an insistence that one is."],
        ["A2 Clothes", "“What does your child insist on wearing? What happens when they are asked to wear other clothes?”", "Assigned girls: only masculine clothing plus resistance to feminine clothing."],
        ["A3–A5 Play", "“Who do they pretend to be in make-believe? Which toys and games? Who are their friends?”", "Roles, toys and playmates of the other gender."],
        ["A6 Rejection", "“Which toys, games or activities do they refuse? Do they avoid rough play?”", "Rejection of own-gender play."],
        ["A7–A8 Body", "“Has your child said anything about their body or private parts: disliking them, or wanting the other kind?”", "Anatomic dysphoria is less common in young children and grows approaching puberty (pp. 515–516)."],
        ["Duration", "“When did this start, and has it been steady for at least 6 months?”"],
        ["B Impact", "“Is your child unhappy about this, or about how others react? Any problems at school or with friends, or refusing to go?”", "Distress may appear only when others interfere (pp. 515–516)."],
        ["Context", "“How does the family feel about it? Has anyone teased or hurt your child? Any thoughts of self-harm?”", "Support predicts fewer problems; self-harm risk is raised (pp. 515, 519)."],
        ["DSD", "“Were there any medical questions about your child’s sex at birth or since?”", "Specifier only with a documented, codable DSD."]
      ],
      tx: CARE
    },
    {
      id: "gender-dysphoria-adults",
      ask: [
        ["Open", "“How do you describe your gender? How long have you felt this way?”", OPEN],
        ["A1–A2 Body", "“How do you feel about your body’s sex characteristics (or the changes puberty is bringing)? Do you wish you did not have them, or could stop them?”", "In young adolescents, ask about anticipated changes."],
        ["A3 Wish", "“Do you want the body characteristics of another gender?”"],
        ["A4–A5 Role", "“Do you want to live as, and be treated by others as, another gender? Which?”", "Includes alternative, nonbinary genders."],
        ["A6 Conviction", "“Do you feel your reactions and feelings are those of another gender?”"],
        ["Duration", "“Has this been constant for at least 6 months?”"],
        ["B Impact", "“How much does this distress you? Has it affected school, work, relationships or sex?”", "Separate incongruence distress from stigma distress."],
        ["Transition", "“Are you living full time as your gender? Have you started, or planned, hormones or surgery? Anything taken without a prescription?”", "Posttransition needs both parts; ask about unsupervised use."],
        ["Risk", "“Have you had thoughts of ending your life or of hurting yourself? Anyone mistreated or attacked you?”", "Victimization, depression, substance use and younger age raise risk (p. 518)."],
        ["Differential", "“Does wearing certain clothes arouse you sexually? Any part of your body you see as deformed? Any unusual experiences or beliefs?”", "Transvestic disorder, BDD, psychosis (pp. 519–520)."]
      ],
      tx: CARE
    },
    {
      id: "other-specified-gender-dysphoria",
      ask: [
        ["Reason", "“How long has this been going on, and which parts of the picture are present?”", "Record why full criteria are not met (e.g., brief gender dysphoria under 6 months)."],
        ["Impact", "“How much does it distress you or get in the way?”", "Distress or impairment is required."]
      ]
    },
    {
      id: "unspecified-gender-dysphoria",
      ask: [
        ["Information", "“Who else knows your history? When can we talk again at length?”", "Revise once the history is available."]
      ]
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "gender-distress", title: "Distress about gender or about one’s sex characteristics",
      intro: "First ask whether the person is **distressed or impaired** by the incongruence itself, or only by **how others treat them**: identity alone is not a diagnosis. Then choose the **criteria set** by age (children 6 of 8 with A1; adolescents and adults 2 of 6), confirm **6 months**, and rule out look-alikes. Always assess **suicide risk**.",
      ask: ["How do you describe your gender, and since when?", "What about this upsets you most: your body, how you are seen, or how you are treated?", "What, if anything, would you like to change?", "Has it affected school, work or relationships?", "Any thoughts of self-harm or suicide? Anyone hurt or harassed you?", "Any hormones or blockers taken without a prescription?", "Does wearing certain clothes arouse you? Any part of your body you see as deformed?"],
      mustNotMiss: ["**Suicide and self-harm risk**, raised in younger people, after victimization and before treatment (pp. 518–519).", "**Unsupervised** hormones, GnRH agonists or spironolactone (pp. 514–515).", "**Psychosis** with a gender-themed delusion, or **autism** with a gender preoccupation (p. 520).", "**Depression, anxiety, PTSD** and substance use (p. 520)."],
      helpers: ["gender"],
      items: [
        { ch: "ch14", dx: "gender-dysphoria-children", when: "Prepubertal child: 6 of 8 manifestations including the wish to be another gender, 6 months, distress or impairment." },
        { ch: "ch14", dx: "gender-dysphoria-adults", when: "Adolescent or adult: 2 of 6, 6 months, distress or impairment; posttransition if living full time with hormones or surgery done or planned." },
        { ch: "ch14", dx: "other-specified-gender-dysphoria", when: "Full picture under 6 months (brief gender dysphoria), or below the count, with distress." },
        { ch: "ch14", dx: "unspecified-gender-dysphoria", when: "Not enough information yet." },
        { ch: "ch06", dx: "bdd", when: "A body part seen as ugly or deformed, not as the wrong gender." },
        { ch: "ch02", dx: "schizophrenia", when: "A bizarre gender belief that comes and goes with psychotic episodes." },
        { ch: "ch01", dx: "asd", when: "Concrete, rigid preoccupation with gender rules; assess carefully, both can be diagnosed." },
        { ch: "ch04", dx: "mdd", when: "Low mood, anhedonia or suicidal thoughts alongside the gender distress." },
        { ch: "ch07", dx: "ptsd", when: "Harassment or violence followed by re-experiencing and avoidance." },
        { ch: "ch07", dx: "adjustment", when: "Distress mainly from a recent rejection, outing or discrimination, without the incongruence criteria." }
      ]
    },
    {
      id: "school-refusal", title: "A child who won’t go to school or won’t speak there",
      items: [
        { ch: "ch14", dx: "gender-dysphoria-children", when: "Refusing school or events that require clothes of the assigned gender, with a persistent wish to be another gender (p. 514)." }
      ]
    },
    {
      id: "social-differences", title: "Social difficulties, narrow interests or rigid routines",
      items: [
        { ch: "ch14", dx: "gender-dysphoria-adults", when: "Gender diversity is more common in autism; separate true dysphoria from a rigid preoccupation (pp. 515, 520)." }
      ]
    },
    {
      id: "suicidal", title: "Suicidal thoughts",
      items: [
        { ch: "ch14", dx: "gender-dysphoria-adults", when: "Gender incongruence with distress: suicidality 30%–80% in the manual’s cited range, raised in younger people, after victimization and before treatment (pp. 518–519)." },
        { ch: "ch14", dx: "gender-dysphoria-children", when: "Gender-referred children were 8.6 times as likely to self-harm or attempt suicide, especially in later childhood (p. 519)." }
      ]
    },
    {
      id: "unstable", title: "Emotional storms, self-harm and unstable relationships",
      items: [
        { ch: "ch14", dx: "gender-dysphoria-adults", when: "Self-harm or suicidal behavior in a young person distressed by gender incongruence; risk is high before treatment and after victimization (pp. 518–519)." }
      ]
    }
  ]);
})();
