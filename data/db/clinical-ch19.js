/* Chapter 19 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  orientation to assessment and care, clearly labeled as outside the DSM, with Stahl links where a drug page exists
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var OPEN = "Ask in **private**, explain the **limits of confidentiality** before asking about behavior that may be an offense (app guidance), use neutral words (“a person who has offended”, “sexual interest in”), and record **facts** (dates, occasions, who, consent) rather than inferences.";
  var SAFETY = "Screen every patient for **depression, anxiety, substance use, ADHD and antisocial traits** (the manual’s recurrent comorbidities, pp. 783, 785, 788, 796) and for **suicidal thoughts**, which were linked to stigma-related shame and guilt in BDSM practitioners (pp. 789, 791). Ask directly about **asphyxiophilia** and autoerotic asphyxia whenever masochistic or transvestic interests appear (pp. 789, 800).";
  var WFSBP = "Outside the DSM: the **WFSBP** guidelines (Thibaut et al., 2010; updated 2020) grade treatment by **risk of harm to others** and severity: psychological treatment (**CBT, relapse prevention**) for everyone; **SSRIs** for lower-risk presentations; **antiandrogens** (cyproterone acetate, not approved in the US; medroxyprogesterone acetate) for higher risk; **GnRH agonists** (leuprolide, triptorelin) for the most severe or highest-risk cases, with informed consent and monitoring of bone density, liver and metabolic measures. Sources number the levels differently; learn the order.";
  var LAW = "Outside the DSM, Philippine frame: **RA 11648** (2022) sets the age of sexual consent at **16** (close-in-age exemption of 3 years or less, never under 13); **RA 7610** governs child abuse and reporting. Know your hospital’s policy on confidentiality and reporting before the first interview; the manual’s own legal warning about sexual images of children is American (p. 795).";
  var STAHL_SSRI = [["Fluoxetine", "drugs/fluoxetine"], ["Sertraline", "drugs/sertraline"], ["Paroxetine", "drugs/paroxetine"], ["Impulsivity and compulsivity", "c/ch13/guide/s13-impulse"]];

  function care(first, extra, stahl) {
    return { asOf: "October 2026", first: first, points: [OPEN].concat(extra || []).concat([SAFETY, WFSBP]), stahl: stahl || [] };
  }
  var VICTIM_CARE = care(
    "Outside the DSM: a paraphilic disorder with a **nonconsenting** person is treated as a **forensic and clinical** problem together: establish the facts and the diagnosis, assess **risk** (actuarial tools such as Static-99R are outside the DSM), treat comorbidity, and apply the WFSBP framework by risk level.",
    [LAW],
    STAHL_SSRI
  );
  var DISTRESS_CARE = care(
    "Outside the DSM: a paraphilic disorder diagnosed on **distress or impairment alone** is treated like any other distressing condition: **psychological treatment** first (CBT, couple work where the partner is affected), treatment of comorbid depression or anxiety, and **SSRIs** when the urges are intrusive or compulsive; antiandrogens are not indicated for consensual or solitary patterns without risk to others.",
    [],
    STAHL_SSRI
  );

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "voyeuristic-disorder",
      ask: [
        ["A Content", "“Have you found yourself watching people who did not know they were being watched, while they were undressing, naked or having sex, or wanting to?”", "Watching a partner who agrees is not voyeurism."],
        ["A Duration and intensity", "“How long has this been going on? How often do you think about it, and how strong is the urge compared with other sexual interests?”", "6 months; fantasies, urges or behaviors."],
        ["B Acts", "“Have you ever done it? How many times, and how many different people?”", "Multiple victims on separate occasions support both A and B even if urges are denied (p. 781)."],
        ["B Distress", "“Does this interest trouble you, or has it caused problems with work, relationships or the law?”"],
        ["C Age", "Confirm the person is at least 18 (p. 781).", "No diagnosis under 18."],
        ["Rule-outs", "“Did this happen only when you were drunk, high, unusually elated, or unwell in some other way?”", "Disinhibition rule-out (p. 782)."],
        ["Comorbidity", "“Any other sexual interests of this kind, such as exposing yourself? Mood, attention, alcohol or drug problems?”", "Exhibitionistic disorder and hypersexuality are the commonest companions (p. 783)."]
      ],
      tx: VICTIM_CARE
    },
    {
      id: "exhibitionistic-disorder",
      ask: [
        ["A Content", "“Have you exposed your genitals to someone who was not expecting it, or had strong urges or fantasies about doing so?”"],
        ["A Duration", "“For how long, and how often?”", "6 months."],
        ["Subtype", "“Who do you imagine or choose when this happens: adults, children, or both?”", "The subtype exists so that a co-occurring pedophilic disorder is not missed (p. 783)."],
        ["B Acts", "“How many times, with how many different people? Did any of them agree?”", "Acting on urges with a nonconsenting person meets Criterion B."],
        ["B Distress", "“Does it bother you? Any trouble at work, at home or with the police because of it?”"],
        ["Rule-outs", "“Only while intoxicated, elated or unwell?”", "Disinhibition rule-out (p. 785)."],
        ["Risk", "“Any alcohol problems? Earlier trouble with the law? Any sexual interest in children?”", "ASPD, alcohol misuse and pedophilic interest raise recidivism risk (p. 785)."]
      ],
      tx: VICTIM_CARE
    },
    {
      id: "frotteuristic-disorder",
      ask: [
        ["A Content", "“Have you touched or pressed yourself against people who had not agreed to it, for example in crowds, or wanted to?”", "The manual’s example is a crowded subway car (p. 787)."],
        ["A Duration", "“Since when, and how often?”", "6 months."],
        ["B Acts", "“How many times, and with how many people?”", "Multiple occasions with nonconsenting people support both A and B (p. 786)."],
        ["B Distress", "“Does the urge distress you, or has it caused problems?”"],
        ["Rule-outs", "“Only when intoxicated, elated or unwell? Is this one of many rules you break?”", "Disinhibition and conduct disorder/ASPD rule-outs (p. 787)."],
        ["Comorbidity", "“Any urges to watch or expose yourself as well? Mood or substance problems?”", "Exhibitionistic and voyeuristic disorders co-occur (p. 788)."]
      ],
      tx: VICTIM_CARE
    },
    {
      id: "sexual-masochism-disorder",
      ask: [
        ["A Content", "“Are you sexually aroused by being humiliated, tied up, hit or made to suffer, in fantasy or in practice?”", "The criteria are written for people who admit the interest (p. 788)."],
        ["A Duration", "“For how long? How central is it to your arousal?”", "6 months."],
        ["Asphyxiophilia", "“Have you ever restricted your breathing, or had it restricted, for arousal? Alone or with someone? Ever lost consciousness?”", "Specifier; risk of accidental death (p. 789)."],
        ["B Distress", "“Does this interest trouble you, or get in the way of relationships, work or safety?”", "Criterion B is distress or impairment only."],
        ["Context", "“Is this something you do with a consenting partner, in a community, or alone?”", "Consensual practice without distress is not a disorder (p. 792)."],
        ["Safety", "“Any shame or guilt about it? Thoughts of ending your life?”", "Stigma-related shame linked to suicidal ideation (p. 789)."],
        ["Comorbidity", "“Any arousal from cross-dressing, objects or other interests?”", "Transvestic fetishism and other paraphilic disorders co-occur (p. 790)."]
      ],
      tx: DISTRESS_CARE
    },
    {
      id: "sexual-sadism-disorder",
      ask: [
        ["A Content", "“Are you sexually aroused by another person’s pain, fear or humiliation, in fantasy or in practice?”"],
        ["A Duration", "“Since when, and how strongly compared with other sexual interests?”", "6 months."],
        ["B Consent", "“Has anyone been hurt without agreeing to it? How many times, how many people?”", "Acting on urges with a nonconsenting person meets Criterion B (p. 790)."],
        ["B Distress", "“Does the interest trouble you, or has it caused problems?”"],
        ["Instrumental versus sadistic", "In a forensic case: Was the violence beyond what the act required? Is there sadistic pornography? Any admission that the suffering itself was arousing?", "The manual’s three markers (p. 792)."],
        ["Rule-outs", "“Only when intoxicated, elated or unwell? Is cruelty part of a wider pattern?”", "Disinhibition; conduct disorder/ASPD, both may be diagnosed (p. 792)."],
        ["Comorbidity", "“Any masochistic, voyeuristic, cross-dressing or exposing interests?”", "Finnish co-occurrence: masochism 68.8%, voyeurism 33.3% (p. 792)."]
      ],
      tx: VICTIM_CARE
    },
    {
      id: "pedophilic-disorder",
      ask: [
        ["Frame", "Explain confidentiality and reporting duties before asking (RA 7610 in the Philippines; app guidance).", OPEN],
        ["A Content", "“Have you had sexual fantasies, urges or contact involving children who have not reached puberty? Boys, girls, or both? Related to you or not?”", "Prepubescent, generally 13 or younger; pubertal status matters more than age (p. 793)."],
        ["A Intensity", "“Compared with your interest in adults, how strong is it: less, equal, or greater?”", "Equal or greater interest marks a disclosing presentation (p. 793)."],
        ["A Duration", "“Since when?”", "6 months; awareness often dates from puberty (p. 794)."],
        ["B Acts", "“Has there been any sexual contact or sexual behavior with a child, including exposing yourself? How many children, on how many occasions?”", "Acting on the urges meets B; use of sexual images of children alone does not (p. 793)."],
        ["B Distress", "“Does this cause you distress, or problems in relationships?”", "Marked distress or interpersonal difficulty."],
        ["C Age", "Confirm the person is 16 or older and at least 5 years older than the child; apply the late-adolescent note (p. 793)."],
        ["Markers", "“Do you prefer the company of children to adults? Have you chosen work or volunteer roles to be near children?”", "Emotional congruence with children (p. 794)."],
        ["Rule-outs", "“Only while intoxicated? Is this part of a wider pattern of breaking rules? Do these thoughts disgust you and come against your will?”", "Intoxication, ASPD, OCD (pp. 795–796)."],
        ["Risk", "Victim access, current contact with children, antisocial traits, substance use.", "Outside the DSM: risk assessment and treatment planning."]
      ],
      tx: care(
        "Outside the DSM: pedophilic disorder is managed as a **clinical and child-protection** problem together: establish the facts and the diagnosis, clarify **reporting duties**, assess **risk** (victim access, antisocial traits, substance use; actuarial tools such as Static-99R are outside the DSM), treat comorbidity, and apply the **WFSBP** framework: psychological treatment for all, SSRIs for lower risk, antiandrogens or GnRH agonists for the highest risk. People who are distressed by the interest and have never offended can and do seek help; receive them without judgment.",
        [LAW],
        STAHL_SSRI
      )
    },
    {
      id: "fetishistic-disorder",
      ask: [
        ["A Content", "“Is there an object, material or part of the body (other than the genitals) that is central to your arousal?”", "Undergarments, footwear, rubber, leather; feet, hair (p. 797)."],
        ["A Duration", "“Since when? Can you become aroused without it?”", "6 months; obligatory for a minority (p. 797)."],
        ["Specifier", "“Objects, a body part, or both?”", "Body part(s), nonliving object(s), other; combinations are common."],
        ["C Exclusions", "“Do you wear the clothing yourself? Is the object a sex toy?”", "Cross-dressing clothing → transvestic; genital-stimulation devices excluded (p. 796)."],
        ["Forced scenarios", "“In fantasy, is the arousal about the object, or about being dominated or humiliated?”", "Domination/humiliation → sexual masochism disorder (p. 798)."],
        ["B Distress", "“Does it trouble you, or cause problems in your sexual relationship?”", "Sexual dysfunction when the object is unavailable is the typical impairment (p. 798)."]
      ],
      tx: DISTRESS_CARE
    },
    {
      id: "transvestic-disorder",
      ask: [
        ["A Content", "“Is wearing clothing of the other sex sexually exciting for you, always or often?”", "Habitual cross-dressing without arousal is not the disorder (p. 799)."],
        ["A Duration", "“Since when? One garment or a full outfit?”", "6 months."],
        ["Specifiers", "“Is it the fabric or garment that excites you, or the idea of yourself as a woman?”", "With fetishism (lowers gender dysphoria likelihood); with autogynephilia (raises it) (p. 799)."],
        ["B Distress", "“Have you ever thrown away your clothes to stop, then bought them again? Has it harmed a relationship?”", "Purging and acquisition signals distress (p. 799)."],
        ["Gender", "“Do you feel you are, or wish to be, a woman? As a child, did you behave like a girl?”", "Incongruence and a childhood cross-gender history point to gender dysphoria; both can be diagnosed (p. 800)."],
        ["Course", "“Has the sexual excitement faded over the years while the wish to dress has stayed or grown?”", "Fading arousal with a persisting wish; some progress to gender dysphoria (pp. 799–800)."],
        ["Safety", "“Ever restricted your breathing during these sessions?”", "Autoerotic asphyxia is linked to transvestic behavior in many fatal cases (p. 800)."]
      ],
      tx: DISTRESS_CARE
    },
    {
      id: "other-specified-paraphilic",
      ask: [
        ["Content", "“What is the focus of the arousal?”", "Telephone scatologia, necrophilia, zoophilia, coprophilia, klismaphilia, urophilia are the manual’s examples (p. 801)."],
        ["Duration", "“For how long?”", "6 months."],
        ["Consequences", "“Does it distress you, cause problems, or involve anyone who has not agreed, or any animal?”", "Distress or impairment required; harm to others counts in the general definition (p. 780)."],
        ["Record", "Write the reason after the name: “other specified paraphilic disorder, zoophilia.”"]
      ],
      tx: care("Outside the DSM: manage by the same logic as the listed disorders: psychological treatment, SSRIs for intrusive urges, and the WFSBP risk-based ladder where others are harmed.", [], STAHL_SSRI)
    },
    {
      id: "unspecified-paraphilic",
      ask: [
        ["Content", "“Can you tell me what the sexual interest is, and since when?”", "Use when the information is not yet enough to specify (p. 801)."],
        ["Consequences", "“Is it distressing, or has it caused problems?”"],
        ["Follow-up", "Revise the diagnosis once the history and collateral are available."]
      ],
      tx: care("Outside the DSM: gather the history and collateral, then revise; management follows the specific disorder once known.", [], [])
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "unusual-sexual-interest", title: "An unusual, intense or troubling sexual interest or behavior",
      intro: "First separate the **interest** from the **disorder**: a paraphilia becomes a diagnosis only when it causes **distress or impairment**, or when acting on it has **harmed or risked harming someone else** (p. 780). Confirm **6 months**, rule out **disinhibition** (mania, intoxication, psychosis, neurocognitive disorder, intellectual developmental disorder, personality change) and a broad **antisocial** pattern, then identify the paraphilia by activity or target and apply its own **Criterion B** and **age** rules. Clarify **confidentiality limits** before asking about possible offenses.",
      ask: ["What is the focus of the arousal, and since when?", "How does it compare with your other sexual interests?", "Have you acted on it? With whom, how many times, and did they agree?", "Does it distress you, or has it caused problems at work, at home or with the law?", "Did it happen only while drunk, high, elated or unwell?", "Have you ever restricted your breathing for arousal?", "Any sexual interest in children? (ask with the reporting frame explained)", "Any low mood, thoughts of self-harm, alcohol or drug use?"],
      mustNotMiss: ["**Harm or risk to others**, including children: reporting duties and risk assessment (outside the DSM).", "**Asphyxiophilia** and autoerotic asphyxia, with risk of accidental death (pp. 789, 800).", "**Suicidal ideation** linked to stigma-related shame and guilt (pp. 789, 791).", "**Disinhibition** from mania, intoxication, psychosis or a neurocognitive disorder (pp. 782, 785, 787, 796).", "**OCD** with ego-dystonic sexual obsessions mistaken for a paraphilia (p. 796)."],
      helpers: ["paraphilic"],
      items: [
        { ch: "ch19", dx: "voyeuristic-disorder", when: "Watching unsuspecting people naked, undressing or having sex, 6 months, acted on or distressing; age 18 or older." },
        { ch: "ch19", dx: "exhibitionistic-disorder", when: "Exposing the genitals to unsuspecting people, 6 months, acted on or distressing; note the target-age subtype." },
        { ch: "ch19", dx: "frotteuristic-disorder", when: "Touching or rubbing against nonconsenting people, 6 months, acted on or distressing." },
        { ch: "ch19", dx: "sexual-masochism-disorder", when: "Arousal from being humiliated, bound or made to suffer, 6 months, with distress or impairment; ask about asphyxiophilia." },
        { ch: "ch19", dx: "sexual-sadism-disorder", when: "Arousal from another person’s suffering, 6 months, acted on with a nonconsenting person or distressing." },
        { ch: "ch19", dx: "pedophilic-disorder", when: "Sexual focus on prepubescent children, 6 months, acted on or causing marked distress or interpersonal difficulty; person 16 or older and 5 years older than the child." },
        { ch: "ch19", dx: "fetishistic-disorder", when: "Nonliving objects or a nongenital body part, 6 months, with distress or impairment; not cross-dressing clothes or sex toys." },
        { ch: "ch19", dx: "transvestic-disorder", when: "Arousing cross-dressing, 6 months, with distress or impairment; with fetishism or with autogynephilia." },
        { ch: "ch19", dx: "other-specified-paraphilic", when: "Another paraphilia (obscene calls, animals, corpses, feces, enemas, urine) with distress or impairment; record the reason." },
        { ch: "ch19", dx: "unspecified-paraphilic", when: "Not enough information yet." },
        { ch: "ch14", dx: "gender-dysphoria-adults", when: "A wish to be, and live as, the other gender with distress from the incongruence, rather than arousal from clothing." },
        { ch: "ch06", dx: "ocd", when: "Unwanted, abhorrent sexual thoughts with no arousal and no behavior." },
        { ch: "ch18", dx: "antisocial-pd", when: "The sexual act is one of many antisocial acts with no specific erotic interest." },
        { ch: "ch03", dx: "bipolar-i", when: "Sexual disinhibition confined to a manic episode." },
        { ch: "ch17", dx: "major-ncd", when: "New sexual disinhibition in a person with cognitive decline." },
        { ch: "ch16", dx: "alcohol-intox", when: "Behavior only while intoxicated." }
      ]
    },
    {
      id: "sexual-problems", title: "Sexual problems: low desire, erections or orgasm",
      items: [
        { ch: "ch19", dx: "fetishistic-disorder", when: "Arousal fails in a relationship when a needed object or body part is absent." },
        { ch: "ch19", dx: "transvestic-disorder", when: "Arousal depends on cross-dressing or cross-dressing fantasies." }
      ]
    },
    {
      id: "gender-distress", title: "Distress about gender or about one’s sex characteristics",
      items: [
        { ch: "ch19", dx: "transvestic-disorder", when: "Sexual arousal from cross-dressing with distress, without incongruence; both can be diagnosed when both are met." }
      ]
    },
    {
      id: "rule-breaking", title: "Rule-breaking, aggression or law-breaking",
      items: [
        { ch: "ch19", dx: "exhibitionistic-disorder", when: "Repeated indecent exposure with a specific sexual interest in it." },
        { ch: "ch19", dx: "frotteuristic-disorder", when: "Repeated sexual touching of nonconsenting people in crowds." },
        { ch: "ch19", dx: "sexual-sadism-disorder", when: "Sexual assault with violence beyond what the act required, or arousal from suffering." },
        { ch: "ch19", dx: "pedophilic-disorder", when: "Sexual offenses against prepubescent children with a persistent interest, multiple or unrelated victims." }
      ]
    },
    {
      id: "intrusive", title: "Intrusive thoughts, obsessions or compulsions",
      items: [
        { ch: "ch19", dx: "pedophilic-disorder", when: "Only if the thoughts are arousing, wanted and linked to sexual behavior; ego-dystonic worries about attraction to children are OCD, not a paraphilia (p. 796)." }
      ]
    },
    {
      id: "suicidal", title: "Suicidal thoughts or self-harm",
      items: [
        { ch: "ch19", dx: "sexual-masochism-disorder", when: "Stigma-related shame and guilt about BDSM interests were linked to suicidal ideation; ask about asphyxiophilia (p. 789)." }
      ]
    }
  ]);
})();
