/* Disorder library: Chapter 24, Culture and Psychiatric Diagnosis (DSM-5-TR Section III, pp. 859–879; p. 880 is blank).
   NOTHING in this file is a diagnosis. The first entry is an assessment tool (the Outline for Cultural Formulation and
   the Cultural Formulation Interview); the other ten are the manual’s examples of cultural concepts of distress, which it
   offers as illustrations of the diagnostic process (p. 873). None has a DSM or ICD-10-CM code. The `criteria` field
   holds the manual’s DESCRIPTION as labeled items, in the app’s own words, never a criteria set. The chart records the
   DSM-5-TR disorder that is met, or an other specified category, with the cultural term named in the case formulation
   (p. 873); when no disorder is met, a Chapter 22 code may apply. Every recording statement beyond p. 873 is app guidance.
   The CFI is an APA instrument: entries describe what it covers and never reprint its questions. Philippine idioms,
   treatment and exam strategy are outside the DSM and labeled. Self-harm content stays at the manual’s general wording. */
(function () {
  var REC = "Record the DSM-5-TR disorder that is met, or an other specified category, with the concept named in the formulation (p. 873); if no disorder, a Chapter 22 code may apply (Z60.3 acculturation difficulty, Z62.820 parent-child relational problem, Z65.8 religious or spiritual problem; app guidance)";
  var CODE = "No code (cultural concept of distress)";
  function rec(extra) {
    var rows = [["—", REC, "App guidance"]];
    if (extra) rows.push(extra);
    return rows;
  }
  function upd(name, text) {
    return [{ kind: "post", year: "2026", title: "Not a diagnosis: how to record", source: "DSM-5-TR p. 873; app guidance",
      text: "**App guidance**: " + name + " is a **cultural concept of distress**, not a diagnosis, and **no ICD-10-CM code exists** for it. The manual’s route is to decide whether the presentation meets criteria for a **specified DSM-5-TR disorder** or fits an **other specified** category, and to name the cultural term and its explanation in the **case formulation** (p. 873). If no disorder is met, the person may still need care, decided case by case (p. 873), and a **Chapter 22** code may fit. " + text }];
  }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "cultural-formulation", ch: "ch24", sec: "s24-outline", pages: "860–871", critPages: "860–863",
      name: "Cultural formulation (Outline for Cultural Formulation and CFI)", code: "No code (assessment tool)",
      codes: [["—", "An assessment tool, not a diagnosis: its findings go into the case formulation beside whatever Section II disorder or Chapter 22 code applies (p. 873; app guidance)", "App guidance"]],
      aka: ["Outline for Cultural Formulation (OCF)", "Cultural Formulation Interview (CFI)", "core CFI", "CFI Informant version", "CFI supplementary modules", "cultural assessment"],
      essence: "The **Outline for Cultural Formulation** (introduced in DSM-IV, expanded in DSM-5-TR) organizes a person’s cultural context under **five categories**, and it is meant for **every** patient, not only those from unfamiliar backgrounds (pp. 860–862). The **CFI** puts it into practice with **three components**: a **16-question core interview** in **four domains**, a **17-question Informant version**, and **online supplementary modules** (pp. 862–871). It is person-centered, has no right or wrong answers, and feeds the diagnosis and plan rather than replacing them (pp. 862–863).",
      duration: "Not applicable",
      functioning: "Functioning, disability and resilience are judged against the person’s own cultural background (Outline category 3, p. 861); the CFI is especially useful when severity or impairment is hard to judge (p. 863)",
      mood: "Not applicable: a tool for any presentation (p. 863)",
      criteria: [
        ["Type", "An assessment framework and interview, not a disorder or a criteria set (pp. 860–863)."],
        ["Outline: five categories", "(1) The person’s **cultural identity**, including intersectionality, migration and language needs; (2) **cultural concepts of distress**; (3) **psychosocial stressors** and cultural features of **vulnerability and resilience**; (4) cultural features of the **relationship with the clinician, team and institution**; (5) an **overall cultural assessment** for diagnosis and care (pp. 861–862)."],
        ["CFI: three components", "The **core CFI** (16 questions, any individual), the **Informant version** for collateral history, and **supplementary modules** that deepen each domain or serve specific groups (pp. 862–863)."],
        ["Core CFI: four domains", "Cultural definition of the problem (**Q1–3**); cultural perceptions of cause, context and support (**Q4–10**); cultural factors in self-coping and past help seeking (**Q11–13**); cultural factors in current help seeking (**Q14–16**) (p. 863)."],
        ["Culture, as the CFI defines it", "Four parts: how people make meaning through their social groups; background and social position (age, gender, class, origin and migration, language, religion, sexual orientation, disability, ethnic or racialized background); the influence of family, friends and community; and the culture of the clinicians and the health system itself (p. 862)."],
        ["When it helps most", "Seven situations: big background differences that make assessment hard; unclear fit of distinctive symptoms to criteria; hard-to-judge severity; divergent views of illness or care shaped by other healing systems; disagreement about the plan; possible mistrust rooted in collective trauma and oppression; weak engagement or adherence (p. 863)."],
        ["Informant version", "For someone who knows the person well; adds an opening question on the relationship, then mirrors the core (17 questions). It supplements the core CFI, or **replaces** it when the person cannot answer: children or adolescents, florid psychosis, cognitive impairment (pp. 868–871)."],
        ["Format", "Two columns: instructions and goals on the left, illustrative (not exhaustive) questions on the right; rephrase and follow up freely; gather demographic details first; usable at any age, in any setting, whole or in parts (p. 863)."],
        ["Modules", "Expand each domain and cover children and adolescents, older adults, caregivers, and immigrants and refugees; named in parentheses under the core subheadings and available online, not printed (pp. 863–867)."],
        ["Chart", "Findings go into the formulation; the diagnosis is still made on Section II criteria (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Field testing", "Tested with clinicians, patients and accompanying relatives: feasible, acceptable and useful (p. 861)"],
        ["Numbers to know", "5 Outline categories; 3 CFI components; 16 core questions in 4 domains; 17 informant questions; 7 situations (pp. 861–868)"]
      ],
      risk: [
        "Not applicable as risk factors; the Outline asks the clinician to record stressors such as racism, discrimination, institutional stigmatization and structural violence, alongside supports and resilience (p. 861).",
        "Experiences of racism in wider society can undermine trust in the clinical encounter (Outline category 4, pp. 861–862)."
      ],
      differential: [
        { id: "other-specified-mental-disorder", how: "Not a competitor but a destination: when a culturally shaped picture is clinically significant yet fits no specific disorder, an other specified category is used, with the concept in the formulation (p. 873; app guidance)." },
        { id: "social-environment-problem", how: "Concerns the CFI brings out, such as acculturation difficulty (Z60.3), may be coded here when they are the focus and no disorder explains them (p. 873; Chapter 22)." },
        { id: "parent-child-relational", how: "Generational or family conflict elicited by the identity questions may be the focus of care (p. 873; Chapter 22)." },
        { id: "religious-spiritual-problem", how: "Faith-related distress surfaced by the CFI is coded Z65.8 when it is the focus (p. 873; Chapter 22)." },
        { id: "delusional-disorder", how: "The CFI helps separate a culturally shared belief or socially warranted suspicion from a delusion; the manual warns of both misreadings (p. 872)." }
      ],
      pearls: [
        "The Outline is for **everyone**, not only for patients who seem culturally different (p. 860).",
        "Category 4, the **clinician-patient relationship**, is the one most often forgotten; core question 16 covers it (pp. 861–862, 867).",
        "Use the person’s **own word** for the problem in every later question (p. 864).",
        "Informant version = **17** questions; it can **replace** the core CFI in children, florid psychosis or cognitive impairment (p. 868).",
        "Modules are **online**, not printed (p. 863).",
        "No right or wrong answers: that is how the CFI avoids stereotyping (p. 862)."
      ],
      cmp: {
        symptoms: "Not applicable: a five-category outline and a 16-question interview in 4 domains",
        exclusions: "Not a diagnosis; does not replace Section II criteria",
        prevalence: "Not applicable",
        course: "Used at initial assessment and whenever cultural issues complicate care"
      },
      clues: [
        ["Core picture", "A clinician unsure whether a patient’s suspicion of clinics is paranoia or earned mistrust"],
        ["Key test", "Ask, in four domains, how the person and their network see the problem"],
        ["Recording (app guidance)", "Findings go in the formulation"]
      ],
      updates: [{ kind: "post", year: "2026", title: "Not a diagnosis: how to record", source: "DSM-5-TR p. 873; app guidance", text: "**App guidance**: the Outline and the CFI are **assessment tools** and carry **no code**. What they reveal is written into the **case formulation**; the diagnosis line holds the DSM-5-TR disorder that is met, an other specified category, or a Chapter 22 code (p. 873). The CFI is an APA instrument: use the printed or online version (www.psychiatry.org/dsm5, pp. 862–863); the app only describes it." }]
    },
    {
      id: "ataque-de-nervios", ch: "ch24", sec: "s24-ataque", pages: "874", critPages: "874",
      name: "Ataque de nervios", code: CODE,
      codes: rec(),
      aka: ["attack of nerves", "ataque", "indisposition (Haiti; related)", "blacking out (West Indies and Caribbean; related)", "falling out (Southern United States; related)"],
      essence: "A **cultural syndrome** of **Latinx** contexts: an acute burst of **anxiety, anger or grief** with screaming, crying, trembling, heat rising to the head and aggression, sometimes with dissociation, fainting or seizure-like episodes, and at its core a feeling of being **out of control** (p. 874). It usually follows a **family stressor** (p. 874). It has **no one-to-one match** with a disorder, overlaps with panic, dissociative and functional neurological presentations, and can be **normative**, as at a funeral (p. 874).",
      duration: "Not applicable",
      functioning: "Linked to disability and outpatient mental health use even after adjusting for diagnoses and trauma (p. 874); some episodes are normative with no lasting effects (p. 874)",
      mood: "Acute anxiety, anger or grief during the episode (p. 874); found alongside nearly all psychiatric disorders in U.S. Latinx communities (p. 873)",
      criteria: [
        ["Type", "A cultural syndrome; the term is also an idiom for any fit-like outburst of emotion, even uncontrolled laughing (p. 874)."],
        ["Context", "Latinx cultural contexts; “attack of nerves” (p. 874)."],
        ["Core picture", "Screaming or shouting that cannot be stopped, crying attacks, trembling, heat rising from the chest into the head, verbal and physical aggression; in some, depersonalization, derealization or amnesia, seizure-like or fainting spells, or suicidal behavior (p. 874)."],
        ["Explanation", "The shared thread is a sense of losing control (p. 874)."],
        ["Triggers", "Usually a stressful family event (news that a relative has died, conflict with a spouse or children, seeing a relative hurt in an accident); a minority have no trigger, with vulnerability built from accumulated suffering (p. 874)."],
        ["Course", "Episodic; some ataques are normative expressions of acute distress without sequelae (p. 874)."],
        ["Figures", "7%–15% of U.S. Latinx adults and 4%–9% of youth in community samples, varying by region and subgroup (p. 874)."],
        ["Related elsewhere", "Indisposition (Haiti), blacking out (West Indies and Caribbean), falling out (Southern United States); these are not substance blackouts (p. 874)."],
        ["Related DSM-5-TR", "Panic attack, panic disorder, other specified or unspecified dissociative disorder, functional neurological symptom disorder, intermittent explosive disorder, other specified or unspecified anxiety disorder, other specified or unspecified trauma- and stressor-related disorder (p. 874)."],
        ["Chart", "The disorder that is met, or an other specified category, with “ataque de nervios” in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["U.S. Latinx adults (community)", "7%–15% (p. 874)"],
        ["U.S. Latinx youth (community)", "4%–9% (p. 874)"],
        ["Associations after adjustment", "Suicidal thoughts, disability, outpatient psychiatric use (p. 874)"],
        ["Comorbidity", "Found with nearly all psychiatric disorders in U.S. Latinx communities (p. 873)"]
      ],
      risk: [
        "Usually set off by a family-related stressor (p. 874).",
        "Accumulated suffering can make a person vulnerable without a clear trigger (p. 874).",
        "Region and subgroup affect how often it is reported (p. 874)."
      ],
      differential: [
        { id: "panic-attack", how: "Shares the paroxysmal surge; ataque is usually provoked and dominated by anger, grief and loss of control rather than fear (p. 874; Chapter 5)." },
        { id: "panic-disorder", how: "Needs recurrent unexpected attacks with a month of worry or behavior change; a stressor-bound ataque pattern usually does not meet it (Chapter 5; app guidance)." },
        { id: "other-specified-dissociative", how: "Depersonalization, derealization or amnesia during attacks may make this the fitting category (p. 874)." },
        { id: "unspecified-dissociative", how: "When dissociative features are prominent but the reason is not specified (p. 874)." },
        { id: "fnd", how: "Seizure-like or fainting episodes overlap with functional neurological symptoms (p. 874)." },
        { id: "ied", how: "Verbal and physical aggression overlap, but ataque is bound to distress and a family trigger (p. 874; app guidance)." },
        { id: "other-specified-anxiety", how: "A clinically significant anxious picture below full criteria (p. 874)." },
        { id: "unspecified-anxiety", how: "Listed among the related conditions (p. 874)." },
        { id: "other-specified-trauma", how: "When the episodes follow a stressor and fit no specific trauma disorder (p. 874)." },
        { id: "unspecified-trauma", how: "Listed among the related conditions (p. 874)." },
        { name: "Alcohol- or substance-induced blackout", how: "“Blacking out” and “falling out” here are cultural concepts, not substance amnesia (p. 874)." }
      ],
      pearls: [
        "An **event**, not a state: compare nervios, which is chronic vulnerability (pp. 874, 877).",
        "Feeling **out of control** is the common thread (p. 874).",
        "Can be **normative**, for example at a funeral (p. 874).",
        "The manual’s example of phenomenological overlap: ataque and **panic disorder** (pp. 873–874).",
        "Never write “ataque de nervios” on the diagnosis line (p. 873; app guidance)."
      ],
      cmp: {
        symptoms: "Acute anger, grief or anxiety; screaming, crying, trembling, aggression; sometimes dissociation or fainting; loss of control",
        exclusions: "Not a diagnosis; substance blackouts are a different thing",
        prevalence: "7%–15% of U.S. Latinx adults, 4%–9% of youth",
        course: "Episodes, usually after a family stressor; some normative"
      },
      clues: [
        ["Core picture", "Screaming, shaking and striking out minutes after news of a mother’s death, then feeling detached"],
        ["Key test", "Provoked by a family event; loss of control"],
        ["Recording (app guidance)", "The disorder met, ataque in the formulation"]
      ],
      updates: upd("Ataque de nervios", "When episodes meet panic attack criteria, the panic attack specifier or panic disorder is used if its criteria are met; dissociative features may point to an other specified dissociative disorder (p. 874; app guidance).")
    },
    {
      id: "dhat-syndrome", ch: "ch24", sec: "s24-dhat", pages: "874–875", critPages: "874–875",
      name: "Dhat syndrome", code: CODE,
      codes: rec(["Z55.9", "Educational problem (Chapter 22: other problems related to education and literacy), when that is the focus and no disorder is met (listed among related conditions, p. 875)", "App guidance; Chapter 22"]),
      aka: ["dhat", "semen-loss anxiety", "koro (Southeast Asia; related)", "shen-k’uei (kidney deficiency, China; related)"],
      essence: "Despite its name, **not a discrete syndrome** but a **cultural explanation**: young men in **South Asia** attribute anxiety, fatigue, weakness, weight loss, erectile problems, somatic complaints and low mood to **semen loss** (pp. 874–875). The cardinal feature is **distress about losing dhat** (a white discharge noticed on urination or defecation) with **no physiological dysfunction**, rooted in the Ayurvedic idea of **dhatu** (pp. 874–875).",
      duration: "Not applicable",
      functioning: "Not described in the text (pp. 874–875)",
      mood: "Depressed mood is among the symptoms attributed to semen loss (p. 874)",
      criteria: [
        ["Type", "A cultural explanation, not a discrete syndrome; also used as an idiom and explanation for sexually transmitted infections such as gonorrhea or chlamydia without psychological distress (pp. 874–875)."],
        ["Context", "Named in South Asia a little over 50 years ago; most often young men from lower socioeconomic backgrounds, though middle-aged men are affected too (pp. 874–875)."],
        ["Core picture", "Anxiety, fatigue, weakness, weight loss, erectile dysfunction, many somatic complaints and depressed mood, blamed on semen loss (p. 874)."],
        ["Explanation", "Dhatu (semen) is one of seven essential bodily fluids in Ayurveda whose balance keeps a person healthy; losing it is feared to harm the body (pp. 874–875)."],
        ["Triggers", "Noticing a white discharge on urination or defecation (p. 874)."],
        ["Course", "Not described; beliefs about the harm of semen loss are widespread in the general population (p. 875)."],
        ["Figures", "64% of men at Indian psychiatric clinics for sexual complaints; 30% of men at Pakistani general medical clinics (p. 875)."],
        ["Related elsewhere", "Koro (Southeast Asia, especially Singapore); shen-k’uei, “kidney deficiency” (China); a female variant centers on white vaginal discharge (leukorrhea) (p. 875)."],
        ["Related DSM-5-TR", "Major depressive disorder, persistent depressive disorder, generalized anxiety disorder, somatic symptom disorder, illness anxiety disorder, erectile disorder, early (premature) ejaculation, other specified or unspecified sexual dysfunction, educational problems (p. 875)."],
        ["Chart", "The disorder that is met, with the dhat attribution in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Men at psychiatric clinics in India with sexual complaints", "64% (p. 875)"],
        ["Men at general medical clinics in Pakistan", "30% (p. 875)"],
        ["Typical person", "Young men of lower socioeconomic background; middle-aged men also (p. 875)"]
      ],
      risk: [
        "Widespread general-population beliefs about the harm of semen loss (p. 875).",
        "Younger age and lower socioeconomic background (p. 875)."
      ],
      differential: [
        { id: "mdd", how: "Pervasive low mood and loss of interest blamed on dhat may meet major depressive disorder (p. 875; app guidance)." },
        { id: "pdd", how: "A long-standing low-grade depressive picture (p. 875)." },
        { id: "gad", how: "Wide-ranging worry beyond the dhat concern (p. 875)." },
        { id: "ssd", how: "Distressing somatic complaints with excessive thoughts and behavior about them (p. 875)." },
        { id: "iad", how: "Preoccupation with having a serious illness with few or no somatic symptoms (p. 875)." },
        { id: "erectile-disorder", how: "Erectile difficulty is among the attributed symptoms; assess it on its own criteria (p. 875)." },
        { id: "premature-ejaculation", how: "Listed among the related sexual dysfunctions (p. 875)." },
        { id: "other-specified-sexual", how: "Sexual complaints that fit no specific dysfunction (p. 875)." },
        { id: "unspecified-sexual", how: "Listed among the related conditions (p. 875)." },
        { id: "educational-problem", how: "Listed among the related conditions; a Chapter 22 focus rather than a disorder (p. 875)." },
        { name: "Sexually transmitted infection", how: "“Dhat” can be a lay word for an STI such as gonorrhea or chlamydia without distress: examine and test (p. 875; app guidance)." },
        { name: "Koro (cultural concept)", how: "A related genital-focused concept of Southeast Asia (p. 875)." }
      ],
      pearls: [
        "“Syndrome” is in the name, but the manual calls it an **explanation** (p. 874).",
        "Cardinal feature: distress about dhat loss with **no physiological dysfunction** (p. 874).",
        "Rooted in **Ayurveda**: dhatu is one of **seven** essential fluids (pp. 874–875).",
        "64% (India, psychiatric clinics) vs 30% (Pakistan, medical clinics) (p. 875).",
        "Rule out an STI before treating it as psychological (app guidance)."
      ],
      cmp: {
        symptoms: "Fatigue, weakness, anxiety, low mood, erectile complaints blamed on semen loss",
        exclusions: "Not a diagnosis; check for an STI",
        prevalence: "64% (Indian psychiatric clinics, sexual complaints); 30% (Pakistani medical clinics)",
        course: "Not described"
      },
      clues: [
        ["Core picture", "A young South Asian man blaming months of fatigue and low mood on losing semen in his urine; tests normal"],
        ["Key test", "A cause attributed, not a symptom cluster"],
        ["Recording (app guidance)", "The depressive, anxiety, somatic or sexual disorder met"]
      ],
      updates: upd("Dhat syndrome", "Despite the word “syndrome,” the manual treats it as a cultural explanation (p. 874).")
    },
    {
      id: "hikikomori", ch: "ch24", sec: "s24-hikikomori", pages: "875", critPages: "875",
      name: "Hikikomori", code: CODE,
      codes: rec(),
      aka: ["protracted social withdrawal", "primary hikikomori", "secondary hikikomori", "hiku + moru (pull back + seclude oneself)"],
      essence: "A **cultural syndrome** first described in **Japan**: protracted, severe **social withdrawal**, typically an adolescent or young adult man who stays in his room in his parents’ home with **no in-person contact**, often with heavy **Internet** use and no interest in school or work (p. 875). It may start out **ego-syntonic** but usually becomes distressing; it is **secondary** when it occurs within an established disorder and **primary** when it stands alone (p. 875). The **6-month** figure comes from a **2010 Japanese ministry guideline**, not from the DSM (p. 875).",
      duration: "6 months by the 2010 Japanese ministry guideline, not a DSM figure (p. 875)",
      functioning: "No school or work; moderate functional impairment, high loneliness and limited networks in samples from Japan, India, South Korea and the United States (p. 875)",
      mood: "Usually becomes distressing over time; depressive and anxiety disorders are among the related conditions (p. 875)",
      criteria: [
        ["Type", "A cultural syndrome (p. 875)."],
        ["Context", "Observed in Japan; the name joins hiku (to pull back) and moru (to seclude oneself) (p. 875)."],
        ["Core picture", "Severe, long-lasting withdrawal that may end all face-to-face contact; typically a teenage or young adult man who keeps to his room in the family home; heavy Internet use and online exchange; no wish to go to school or work (p. 875)."],
        ["Explanation", "Primary when it occurs independently; secondary when it arises within an established DSM disorder (p. 875)."],
        ["Course", "May feel acceptable at first (ego-syntonic) but tends to become distressing (p. 875)."],
        ["Figures", "Japan’s Ministry of Health, Labor, and Welfare guideline (2010) requires 6 months of withdrawal (p. 875)."],
        ["Related elsewhere", "Prolonged withdrawal of young people is reported in 14 other countries, among them Australia, Bangladesh, Brazil, China, France, India and Iran, plus Italy, Oman, South Korea, Spain, Taiwan, Thailand and the United States (p. 875)."],
        ["Related DSM-5-TR", "Social anxiety disorder, major depressive disorder, generalized anxiety disorder, posttraumatic stress disorder, autism spectrum disorder, schizoid personality disorder, avoidant personality disorder, schizophrenia or other psychotic disorder; also linked with Internet gaming disorder and, in adolescents, school refusal (p. 875)."],
        ["Chart", "Secondary: the underlying disorder. Primary with distress or impairment: the closest Section II category (often an other specified one) or a Chapter 22 code, with the term in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Duration threshold", "6 months (Japanese ministry guideline, 2010; p. 875)"],
        ["Where reported", "Japan and at least 14 other countries listed in the text (p. 875)"],
        ["Typical person", "Adolescent or young adult male living with parents (p. 875)"]
      ],
      risk: [
        "Heavy Internet use and virtual social exchange often accompany it (p. 875).",
        "An established mental disorder makes it secondary (p. 875)."
      ],
      differential: [
        { id: "social-anxiety", how: "Withdrawal driven by fear of scrutiny; ask what the person fears outside the room (p. 875; app guidance)." },
        { id: "mdd", how: "Withdrawal from loss of interest and energy with pervasive low mood (p. 875)." },
        { id: "gad", how: "Listed among the related conditions (p. 875)." },
        { id: "ptsd", how: "Avoidance after trauma may underlie the withdrawal (p. 875)." },
        { id: "asd", how: "Lifelong social-communication differences with restricted interests point here (p. 875; app guidance)." },
        { id: "schizoid-pd", how: "A pervasive, lifelong lack of desire for relationships, often without distress (p. 875; app guidance)." },
        { id: "avoidant-pd", how: "Withdrawal from fear of rejection with longing for contact (p. 875; app guidance)." },
        { id: "schizophrenia", how: "Withdrawal can be a negative or prodromal feature; screen for psychotic symptoms (p. 875)." },
        { id: "internet-gaming-disorder", how: "Associated with hikikomori; a Section III proposal, not a codable diagnosis (pp. 875; Chapter 25)." },
        { name: "School refusal (adolescents)", how: "Associated in adolescents; not a DSM diagnosis itself (p. 875; app guidance)." }
      ],
      pearls: [
        "The only one of the ten examples with a **duration figure**, and it is not the DSM’s: **6 months**, Japanese ministry, **2010** (p. 875).",
        "**Primary** = stands alone; **secondary** = inside an established disorder (p. 875).",
        "Often **ego-syntonic at first**, distressing later (p. 875).",
        "Reported far beyond Japan (p. 875).",
        "New to the DSM-5-TR list of examples (app comparison with DSM-5)."
      ],
      cmp: {
        symptoms: "Months of staying in one’s room, no in-person contact, heavy Internet use, no school or work",
        exclusions: "Not a diagnosis; secondary when another disorder explains it",
        prevalence: "Not given; reported in many countries",
        course: "≥6 months by the Japanese guideline; ego-syntonic at first, then distressing"
      },
      clues: [
        ["Core picture", "A young man who has not left his bedroom in 14 months, gaming all day"],
        ["Key test", "Screen for the listed disorders: primary vs secondary"],
        ["Recording (app guidance)", "The underlying disorder, or the closest other specified category"]
      ],
      updates: upd("Hikikomori", "The 6-month threshold belongs to Japan’s 2010 ministry guideline, not to DSM-5-TR (p. 875).")
    },
    {
      id: "khyal-cap", ch: "ch24", sec: "s24-khyal", pages: "875–876", critPages: "875–876",
      name: "Khyâl cap", code: CODE,
      codes: rec(),
      aka: ["khyâl attacks", "wind attacks", "khyal cap", "pen lom (Laos; related)", "hwa byung (Korea; related)"],
      essence: "A **cultural syndrome** of **Cambodian** contexts: attacks with **panic symptoms** (dizziness, palpitations, breathlessness, cold extremities) plus **tinnitus** and **neck soreness**, driven by the **catastrophic belief** that khyâl, a windlike substance, will rise with the blood and compress the lungs or enter the skull (pp. 875–876). Attacks often follow **worry, standing up, odors** or **agoraphobic cues**, usually **meet panic attack criteria**, and cause considerable disability (p. 876).",
      duration: "Not applicable",
      functioning: "Considerable disability (p. 876)",
      mood: "Anxiety during attacks; the khyâl idea can color how other anxiety disorders and trauma-related disorders are experienced (p. 876)",
      criteria: [
        ["Type", "A cultural syndrome (p. 875)."],
        ["Context", "Cambodian cultural contexts, in Cambodia and abroad; “wind attacks” (p. 875)."],
        ["Core picture", "Panic-type symptoms (dizziness, palpitations, shortness of breath, cold hands and feet) with other anxiety and autonomic symptoms, especially ringing ears and a sore neck (p. 875)."],
        ["Explanation", "Khyâl rising in the body with the blood: squeezing the lungs (breathlessness, asphyxia) or entering the cranium (tinnitus, dizziness, blurred vision, fatal fainting) (pp. 875–876)."],
        ["Triggers", "Can come unprompted, but often follows worrying thoughts, standing up (orthostasis), unpleasant smells with bad associations, or crowds and car rides (p. 876)."],
        ["Course", "Attacks usually meet panic attack criteria and may color other anxiety and trauma disorders (p. 876)."],
        ["Related elsewhere", "Pen lom (Laos), srog rlung gi nad (Tibet), vata (Sri Lanka), hwa byung (Korea) (p. 876)."],
        ["Related DSM-5-TR", "Panic attack, panic disorder, generalized anxiety disorder, agoraphobia, posttraumatic stress disorder, illness anxiety disorder (p. 876)."],
        ["Chart", "Panic attack specifier or panic disorder (and PTSD or agoraphobia if met), with khyâl cap in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Relation to panic attacks", "Usually meet panic attack criteria (p. 876)"],
        ["Prevalence", "Not given in the chapter (pp. 875–876)"]
      ],
      risk: [
        "The khyâl belief itself turns ordinary sensations into catastrophic ones (pp. 875–876).",
        "Cues: worry, orthostasis, negatively charged odors, crowds, riding in a car (p. 876)."
      ],
      differential: [
        { id: "panic-attack", how: "Khyâl attacks usually meet panic attack criteria; the specifier can be added to another disorder (p. 876; Chapter 5)." },
        { id: "panic-disorder", how: "Recurrent unexpected attacks with a month of worry or behavior change (p. 876; Chapter 5)." },
        { id: "agoraphobia", how: "Avoiding crowds or car rides because of attacks (p. 876)." },
        { id: "gad", how: "Persistent worry, which is itself a trigger (p. 876)." },
        { id: "ptsd", how: "Khyâl may shape trauma-related presentations; assess trauma history (p. 876)." },
        { id: "iad", how: "Fear of a fatal bodily event can become illness preoccupation (p. 876)." },
        { name: "Hwa byung (cultural concept)", how: "A related Korean concept named by the manual (p. 876)." }
      ],
      pearls: [
        "Panic symptoms **plus tinnitus and neck soreness** (p. 875).",
        "The manual’s model of **catastrophic cognitions** escalating into panic, the “therapeutic efficacy” reason (pp. 872, 876).",
        "**Standing up** is a classic trigger: orthostatic dizziness reread as rising wind (p. 876).",
        "Usually **meets panic attack criteria** (p. 876)."
      ],
      cmp: {
        symptoms: "Panic symptoms plus tinnitus and neck soreness; fear of wind rising with the blood",
        exclusions: "Not a diagnosis; check medical causes of dizziness (app guidance)",
        prevalence: "Not given",
        course: "Recurrent attacks; considerable disability"
      },
      clues: [
        ["Core picture", "A Cambodian refugee dizzy on standing, ears ringing, neck sore, afraid the wind will rise and stop her breath"],
        ["Key test", "Meets panic attack criteria?"],
        ["Recording (app guidance)", "Panic disorder or the panic attack specifier, khyâl in the formulation"]
      ],
      updates: upd("Khyâl cap", "Because attacks usually meet panic attack criteria (p. 876), the panic attack specifier or panic disorder is the usual Section II route.")
    },
    {
      id: "kufungisisa", ch: "ch24", sec: "s24-kufungisisa", pages: "876", critPages: "876",
      name: "Kufungisisa", code: CODE,
      codes: rec(),
      aka: ["thinking too much", "brain fag (Nigeria; related)"],
      essence: "“**Thinking too much**” in **Shona** (Zimbabwe): both an **idiom of distress** and a **cultural explanation** (p. 876). As an explanation it is said to cause anxiety, depression and bodily complaints; as an idiom it signals **interpersonal and social troubles** such as marital strain, money for the children or joblessness (p. 876). It involves rumination on worries and is tied to anxiety, panic, depressive symptoms, irritability and PTSD (p. 876).",
      duration: "Not applicable",
      functioning: "Not described in the text (p. 876)",
      mood: "Depressive symptoms, irritability and anxiety are associated (p. 876)",
      criteria: [
        ["Type", "An idiom of distress and a cultural explanation at once (p. 876)."],
        ["Context", "Shona of Zimbabwe; “thinking too much” (p. 876)."],
        ["Core picture", "Dwelling on upsetting thoughts, above all worries, including worry about chronic illness such as HIV-related disease (p. 876)."],
        ["Explanation", "Too much thinking is believed to bring on anxiety, depression and somatic problems, as in a heart that hurts from it (p. 876)."],
        ["Triggers", "As an idiom, it points to marital problems, lacking money for the children, unemployment (p. 876)."],
        ["Course", "In some contexts thought to progress to severe disorder, psychosis, suicidal thoughts or death (p. 876)."],
        ["Figures", "Present in two-thirds of the cases a general psychopathology measure picked up in a random community sample (p. 876)."],
        ["Related elsewhere", "“Thinking too much” across Africa, Asia, the Caribbean and Latin America, the Middle East and indigenous groups, with wide variation; a core part of brain fag in Nigeria (excess study, heat or crawling feelings in the head) (p. 876)."],
        ["Related DSM-5-TR", "Major depressive disorder, persistent depressive disorder, generalized anxiety disorder, posttraumatic stress disorder, obsessive-compulsive disorder, prolonged grief disorder (p. 876)."],
        ["Chart", "The disorder that is met, with “thinking too much” and its perceived effects in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Random community sample (Zimbabwe)", "Two-thirds of cases identified by a general psychopathology measure had the complaint (p. 876)"],
        ["Worldwide", "A common idiom and explanation in many regions (p. 876)"]
      ],
      risk: [
        "Social and interpersonal stressors: marriage, money, work (p. 876).",
        "Chronic illness such as HIV as a focus of worry (p. 876)."
      ],
      differential: [
        { id: "gad", how: "Excessive, hard-to-control worry about many things (p. 876)." },
        { id: "mdd", how: "Rumination with pervasive low mood or loss of interest (p. 876)." },
        { id: "pdd", how: "Chronic low-grade depression (p. 876)." },
        { id: "ptsd", how: "The manual’s example of a disorder often attributed to the idiom; intrusive thoughts about a trauma (pp. 874, 876)." },
        { id: "ocd", how: "Intrusive, unwanted thoughts with neutralizing acts (p. 876)." },
        { id: "pgd", how: "Persistent thoughts of a person who died, 12 months or more after the death (p. 876; Chapter 7)." },
        { name: "Brain fag (cultural concept)", how: "A Nigerian concept in which excess study harms the brain; thinking too much is central (p. 876)." }
      ],
      pearls: [
        "One phrase, two types: **idiom and explanation** (p. 876).",
        "The manual’s example of a disorder **attributed** to an idiom: **PTSD and kufungisisa** (p. 874).",
        "Two-thirds of community cases had it (p. 876).",
        "Ask what the person thinks the thinking is doing to them (app guidance)."
      ],
      cmp: {
        symptoms: "Rumination and worry; anxiety, depressive symptoms, irritability, somatic complaints",
        exclusions: "Not a diagnosis",
        prevalence: "Two-thirds of community cases on a general measure",
        course: "Feared to lead to worse illness in some contexts"
      },
      clues: [
        ["Core picture", "A Zimbabwean man whose heart hurts “because I think too much” about debts and his HIV"],
        ["Key test", "Idiom and explanation; assess the disorder underneath"],
        ["Recording (app guidance)", "Depressive, anxiety or trauma disorder met"]
      ],
      updates: upd("Kufungisisa", "“Thinking too much” is both how the person describes distress and what they think caused it (p. 876).")
    },
    {
      id: "maladi-dyab", ch: "ch24", sec: "s24-maladi-dyab", pages: "876–877", critPages: "876–877",
      name: "Maladi dyab", code: CODE,
      codes: rec(["Z60.9 / Z55.9", "Problem related to the social environment or educational problem, the subsyndromal afflictions the manual lists (p. 877)", "App guidance; Chapter 22"]),
      aka: ["maladi satan", "devil illness", "Satan illness", "sent sickness", "evil eye (mal de ojo, mal’occhiu; related)"],
      essence: "A **cultural explanation** in **Haitian** communities: illness and misfortune are **sent** by sorcerers at the request of people moved by **envy and malice**, often after a victim’s visible success (pp. 876–877). It is applied to medical and psychiatric conditions alike, and the label rests more on **mode of onset, social status and treatment response** than on symptoms (p. 877). Its supernatural content risks **misdiagnosis** as delusional disorder or schizophrenia (p. 877).",
      duration: "Not applicable",
      functioning: "Social or academic failure and inability to manage daily activities are among the sent illnesses (p. 876)",
      mood: "Depression is among the illnesses attributed (p. 876)",
      criteria: [
        ["Type", "A cultural explanation (p. 876)."],
        ["Context", "Haitian communities; also “maladi satan” or “sent sickness” (p. 876)."],
        ["Core picture", "No set symptoms: psychosis, depression, social or academic failure, or inability to carry on with daily life can all be attributed (p. 876)."],
        ["Explanation", "Envious, malicious people have sorcerers send illness; forms are named for how they are sent (ekspedisyon, mòvè zespri, kout poud); one person’s gain is felt as another’s loss (pp. 876–877)."],
        ["Triggers", "Visible success such as a new job or a costly purchase provokes envy; attractive, intelligent or wealthy people and even healthy young children are seen as vulnerable (pp. 876–877)."],
        ["Course", "Acute onset or a sudden change in behavior raises suspicion of spiritual attack (p. 877)."],
        ["Related elsewhere", "Illness blamed on envy or social conflict, often as the evil eye (mal de ojo in Spanish, mal’occhiu in Italian) (p. 877)."],
        ["Related DSM-5-TR", "Subsyndromal affliction (problems related to the social environment, educational problems) and many psychiatric disorders; risk of misdiagnosis as delusional disorder, persecutory type, or schizophrenia (p. 877)."],
        ["Chart", "The disorder that is met, if any, with the sent-sickness explanation in the formulation; a shared belief is not written as a delusion (pp. 873, 877; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Prevalence", "Not given in the chapter (pp. 876–877)"],
        ["Worldwide parallels", "Envy-based illness explanations are common (p. 877)"]
      ],
      risk: [
        "Visible success, attractiveness, intelligence or wealth are seen as making a person a target (p. 877).",
        "Acute onset or abrupt change prompts the attribution (p. 877)."
      ],
      differential: [
        { id: "delusional-disorder", how: "Listed as a misdiagnosis to avoid: a culturally shared belief in sent illness is not a persecutory delusion (p. 877)." },
        { id: "schizophrenia", how: "Also a possible misdiagnosis; diagnose it only on Section II criteria independent of the shared explanation (p. 877)." },
        { id: "social-environment-problem", how: "A subsyndromal affliction the manual names; Chapter 22 code when it is the focus (p. 877)." },
        { id: "educational-problem", how: "Also named among the subsyndromal afflictions (p. 877)." },
        { id: "mdd", how: "Depression is one of the illnesses commonly attributed; assess it on its own criteria (p. 876)." },
        { id: "brief-psychotic-disorder", how: "A sudden psychotic onset may be read as spiritual attack; a true psychosis still needs its Section II diagnosis (p. 877; app guidance)." }
      ],
      pearls: [
        "The chapter’s clearest case of **socially warranted belief mistaken for paranoia** (pp. 872, 877).",
        "Label driven by **onset, social status and what treatment works**, not symptoms (p. 877).",
        "**Success** makes a person vulnerable: one person’s gain is another’s loss (p. 877).",
        "Philippine parallels such as kulam or usog are outside the DSM; handle them the same way (app guidance)."
      ],
      cmp: {
        symptoms: "Any illness or misfortune blamed on sorcery sent out of envy",
        exclusions: "Not a diagnosis; a shared belief is not a delusion",
        prevalence: "Not given",
        course: "Suspected with acute onset or abrupt behavior change"
      },
      clues: [
        ["Core picture", "A Haitian man sure a cousin had a sorcerer make him ill after he bought a car; family agrees"],
        ["Key test", "Is the belief shared by his community?"],
        ["Recording (app guidance)", "The disorder met (e.g., depression), not delusional disorder"]
      ],
      updates: upd("Maladi dyab", "Section II already excludes beliefs ordinarily accepted in the person’s culture from the definition of a delusion (Chapter 2; app reading).")
    },
    {
      id: "nervios", ch: "ch24", sec: "s24-nervios", pages: "877", critPages: "877",
      name: "Nervios", code: CODE,
      codes: rec(),
      aka: ["nerves", "being nervous since childhood", "being ill with nerves", "nevra (Greek North Americans; related)", "nierbi (Sicilian North Americans; related)", "tension (South Asian idiom; related)"],
      essence: "“**Nerves**”: a common **idiom of distress** that is also a **causal explanation** in **Latinx** contexts of the United States and Latin America, naming a general **vulnerability** to stress and hard circumstances (p. 877). Typical complaints are headaches and “brain aches,” irritability, stomach upset, poor sleep, nervousness, easy tears, poor concentration, trembling, tingling and **mareos** (p. 877). It spans everything from **no disorder** to pictures resembling adjustment, anxiety, depressive, dissociative, somatic symptom or psychotic disorders (p. 877).",
      duration: "Not applicable",
      functioning: "Inability to function is part of the range the term covers (p. 877)",
      mood: "Easy tearfulness, irritability and nervousness are common (p. 877); “being ill with nerves” is closer to depression and dissociation (p. 877)",
      criteria: [
        ["Type", "An idiom of distress and a causal explanation (p. 877)."],
        ["Context", "Latinx cultural contexts in the United States and Latin America (p. 877)."],
        ["Core picture", "Headaches and “brain aches” (tension at the back of the neck), irritability, gastrointestinal upset, trouble sleeping, nervousness, crying easily, poor concentration, trembling, tingling, and mareos (dizziness with occasional vertigo-like flares) (p. 877)."],
        ["Explanation", "Explains many kinds of distress, especially weakness, enervation and anxiety; refers literally to the anatomical nerves, with regional variation (p. 877)."],
        ["Triggers", "Stressful life events and difficult circumstances, to which nervios is a general vulnerability (p. 877)."],
        ["Course", "Puerto Rican forms: “being nervous since childhood” is trait-like and may come before social anxiety disorder; “being ill with nerves” is more tied to dissociation and depression (p. 877)."],
        ["Related elsewhere", "Nevra (Greeks in North America), nierbi (Sicilians in North America), “nerves” (Whites in Appalachia and Newfoundland); “tension” among South Asians (p. 877)."],
        ["Related DSM-5-TR", "Major depressive disorder, persistent depressive disorder, generalized anxiety disorder, social anxiety disorder, other specified or unspecified dissociative disorder, somatic symptom disorder, schizophrenia (p. 877)."],
        ["Chart", "The disorder that is met, if any, with nervios in the formulation; normative distress needs no diagnosis (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Prevalence", "Not given; described as common (p. 877)"],
        ["Severity range", "From no mental disorder to psychotic-looking presentations (p. 877)"]
      ],
      risk: [
        "Stressful experiences and difficult life circumstances (p. 877).",
        "A childhood-onset, trait-like form may precede social anxiety disorder (p. 877)."
      ],
      differential: [
        { id: "gad", how: "Six months of excessive, hard-to-control worry with its physical symptoms (p. 877; Chapter 5)." },
        { id: "mdd", how: "Pervasive low mood or anhedonia; “ill with nerves” leans toward depression (p. 877)." },
        { id: "pdd", how: "Chronic low-grade depression framed as nerves (p. 877)." },
        { id: "social-anxiety", how: "“Nervous since childhood” may precede it (p. 877)." },
        { id: "other-specified-dissociative", how: "“Ill with nerves” leans toward dissociation (p. 877)." },
        { id: "unspecified-dissociative", how: "Listed among the related conditions (p. 877)." },
        { id: "ssd", how: "Distressing bodily symptoms with excessive concern (p. 877)." },
        { id: "schizophrenia", how: "Listed among the related conditions; nervios can describe even psychotic-looking presentations (p. 877)." },
        { id: "adjustment", how: "Nervios can resemble an adjustment disorder after a stressor (p. 877)." },
        { id: "ataque-de-nervios", how: "Nervios is a chronic state; ataque is an acute paroxysm (pp. 874, 877; app comparison)." }
      ],
      pearls: [
        "A **state**, not an attack: compare ataque de nervios (pp. 874, 877).",
        "Spans **no disorder to psychosis**: the second key feature in action (pp. 872, 877).",
        "**Mareos** = dizziness with vertigo-like flares (p. 877).",
        "Two Puerto Rican forms: **nervous since childhood** (trait) vs **ill with nerves** (p. 877)."
      ],
      cmp: {
        symptoms: "Headaches, brain aches, irritability, GI upset, poor sleep, tearfulness, trembling, tingling, mareos",
        exclusions: "Not a diagnosis; may be normative",
        prevalence: "Not given; common",
        course: "Chronic vulnerability; trait-like form from childhood"
      },
      clues: [
        ["Core picture", "A woman who has “had nerves all my life,” with trembling, tingling and neck headaches"],
        ["Key test", "State, not attack; which disorder, if any, is met?"],
        ["Recording (app guidance)", "The disorder met, or none"]
      ],
      updates: upd("Nervios", "Because the idiom also covers people with no disorder (p. 877), naming it in the formulation without any diagnosis can be the right answer.")
    },
    {
      id: "shenjing-shuairuo", ch: "ch24", sec: "s24-shenjing", pages: "877–879", critPages: "877–878",
      name: "Shenjing shuairuo", code: CODE,
      codes: rec(),
      aka: ["weakness of the nervous system", "neurasthenia (related construct)", "ashaktapanna (India; related)", "yadargaa (Mongolia; related)", "shinkei-suijaku (Japan; related)"],
      essence: "“**Weakness of the nervous system**” in Mandarin: a **cultural syndrome** joining **Traditional Chinese Medicine** with the Western idea of **neurasthenia** (p. 877). The CCMD-2-R defined it as **three of five** symptom clusters (weakness, emotions, excitement, nervous pain, sleep), and **CCMD-3** kept it as a somatoform diagnosis of exclusion before China adopted ICD-10 in **2011** (pp. 877–878). Its use has fallen, and **up to 45%** of patients with it in Chinese medical clinics meet no DSM-IV disorder (p. 878).",
      duration: "Not applicable",
      functioning: "Not described in the text (pp. 877–879)",
      mood: "Fan nao (feeling vexed): irritability mixed with worry over conflicting thoughts and unmet wishes (p. 878); mood and anxiety disorders are associated (p. 878)",
      criteria: [
        ["Type", "A cultural syndrome (p. 877)."],
        ["Context", "Chinese; “weakness of the nervous system” in Mandarin (p. 877)."],
        ["Core picture", "CCMD-2-R: three of five clusters, namely weakness (mental fatigue), emotions (feeling vexed), excitement (more recollections), nervous pain (headache) and sleep (insomnia) (pp. 877–878)."],
        ["Explanation", "Traditional weakness (xu) and imbalance of vital essence: qi depleted by overstraining or stagnant from worry; channels (jing) carrying vital forces (shen) thrown off by social stressors (p. 878)."],
        ["Triggers", "Work or family stress, loss of face (mianzi, lianzi), an acute sense of failure such as in school (p. 878)."],
        ["Course", "CCMD-3 kept it as a somatoform diagnosis of exclusion; China adopted ICD-10 in 2011; ICD-10 has neurasthenia, ICD-11 does not; use has fallen, replaced in cities by depression and anxiety idioms; clinicians may still use it with traditional patients to ease communication and reduce stigma (p. 878)."],
        ["Figures", "Up to 45% of patients with it in Chinese medical clinics meet no DSM-IV disorder (p. 878)."],
        ["Related elsewhere", "Neurasthenia-spectrum concepts in India (ashaktapanna), Mongolia (yadargaa) and Japan (shinkei-suijaku); brain fag, burnout syndrome and chronic fatigue syndrome are closely related (p. 879)."],
        ["Related DSM-5-TR", "Major depressive disorder, persistent depressive disorder, generalized anxiety disorder, somatic symptom disorder, social anxiety disorder, specific phobia, posttraumatic stress disorder (p. 879)."],
        ["Chart", "The disorder that is met, if any, with the concept in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Chinese medical clinics", "Up to 45% with shenjing shuairuo meet criteria for no DSM-IV disorder (p. 878)"],
        ["Trend", "Use has decreased substantially, at least in urban areas (p. 878)"]
      ],
      risk: [
        "Work or family stressors (p. 878).",
        "Loss of face and acute failure, for example academic (p. 878).",
        "A chronically frustrating situation one cannot change (p. 878)."
      ],
      differential: [
        { id: "mdd", how: "Fatigue, poor sleep and vexation with pervasive low mood or anhedonia (p. 879)." },
        { id: "pdd", how: "Long-standing low-grade depression (p. 879)." },
        { id: "gad", how: "Worry and tension with fatigue, poor sleep and poor concentration (p. 879)." },
        { id: "ssd", how: "Headaches and fatigue with excessive concern about them (p. 879)." },
        { id: "social-anxiety", how: "Listed among the related conditions (p. 879)." },
        { id: "specific-phobia", how: "Listed among the related conditions (p. 879)." },
        { id: "ptsd", how: "Listed among the related conditions (p. 879)." },
        { name: "Chronic fatigue syndrome (outside the DSM)", how: "Closely related per the manual; a medical diagnosis, not a DSM category (p. 879; app guidance)." },
        { name: "Burnout syndrome (outside the DSM)", how: "Closely related per the manual; not a DSM diagnosis (p. 879)." }
      ],
      pearls: [
        "The only example with a **formal criteria set in another system**: three of five clusters, CCMD-2-R (p. 877).",
        "Classification history: **CCMD-3 → ICD-10 adopted in 2011 → ICD-11 has no neurasthenia** (p. 878).",
        "**Up to 45%** meet no DSM-IV disorder: concepts apply across all severity (pp. 872, 878).",
        "**Fan nao** = feeling vexed (p. 878)."
      ],
      cmp: {
        symptoms: "Three of five: mental fatigue, vexation, excess recollections, headache, insomnia",
        exclusions: "Not a diagnosis; up to 45% meet no DSM-IV disorder",
        prevalence: "Up to 45% without a DSM-IV disorder in Chinese medical clinics",
        course: "Declining use; replaced by depression and anxiety idioms in cities"
      },
      clues: [
        ["Core picture", "A Chinese-Filipino shop owner with exhaustion, headaches, poor sleep and vexation after losing face"],
        ["Key test", "Assess mood, anxiety and somatic disorders; may meet none"],
        ["Recording (app guidance)", "The disorder met, or no diagnosis"]
      ],
      updates: upd("Shenjing shuairuo", "The chapter itself notes that ICD-10 included neurasthenia and ICD-11 does not (p. 878).")
    },
    {
      id: "susto", ch: "ch24", sec: "s24-susto", pages: "879", critPages: "879",
      name: "Susto", code: CODE,
      codes: rec(),
      aka: ["fright", "espanto (Andes; related)", "soul loss (South and Southeast Asia; related)", "cibih (Zapotec; the three types)"],
      essence: "“**Fright**”: a **cultural explanation** in some **Latinx** contexts of North, Central and South America (but **not** among Caribbean Latinx) in which a frightening event makes the **soul leave the body**, bringing unhappiness, sickness and trouble in social roles (p. 879). Symptoms can begin **days to years** after the fright and have **no defining set** (p. 879). Three types point to different disorders: **interpersonal** (MDD), **traumatic** (PTSD) and **recurrent somatic** (somatic symptom disorder) (p. 879).",
      duration: "Not applicable",
      functioning: "Difficulty functioning in key social roles (p. 879)",
      mood: "Sadness and low self-worth are often reported; the interpersonal type includes suicidal thoughts (p. 879)",
      criteria: [
        ["Type", "A cultural explanation (p. 879)."],
        ["Context", "Some Latinx contexts in North, Central and South America; not an illness category among Caribbean Latinx (p. 879)."],
        ["Core picture", "No specific symptoms. Often reported: appetite change, sleeping too little or too much, troubled sleep or dreams, sadness, low self-worth or a sense of dirtiness, interpersonal sensitivity, no motivation; bodily: muscle aches, cold extremities, pallor, headache, stomachache, diarrhea (p. 879)."],
        ["Explanation", "A fright drives the soul from the body (p. 879)."],
        ["Triggers", "Natural phenomena, animals, interpersonal situations, supernatural agents, among others (p. 879)."],
        ["Course", "Onset any time from days to years after the fright; in extreme cases fatal (p. 879)."],
        ["Three types", "Three syndromic types (cibih in Zapotec): interpersonal (loss, abandonment, feeling unloved; sadness, poor self-image, suicidal thoughts) close to MDD; trauma-shaped closer to PTSD; recurrent somatic with many practitioners resembling somatic symptom disorder (p. 879)."],
        ["Related elsewhere", "Espanto in the Andes; soul loss in South and Southeast Asia, where a fright may cost the soul, part of it, or one of several souls (p. 879)."],
        ["Related DSM-5-TR", "Major depressive disorder, posttraumatic stress disorder, other specified or unspecified trauma and stressor-related disorder, somatic symptom disorder (p. 879)."],
        ["Chart", "The disorder the type points to, if met, with the soul-loss explanation in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Prevalence", "Not given in the chapter (p. 879)"],
        ["Where not recognized", "Among Latinx from the Caribbean (p. 879)"]
      ],
      risk: [
        "A frightening event of many kinds (p. 879).",
        "Loss, abandonment or feeling unloved by family (interpersonal type, p. 879)."
      ],
      differential: [
        { id: "mdd", how: "Interpersonal susto, with sadness, poor self-image and suicidal thoughts, is closely related (p. 879)." },
        { id: "ptsd", how: "When a traumatic fright shapes the symptoms and their processing (p. 879)." },
        { id: "other-specified-trauma", how: "A trauma-linked picture that fits no specific disorder (p. 879)." },
        { id: "unspecified-trauma", how: "Listed among the related conditions (p. 879)." },
        { id: "ssd", how: "Recurrent somatic susto with visits to several practitioners (p. 879)." },
        { id: "ataque-de-nervios", how: "Geography check: ataque is reported in Caribbean Latinx contexts, where susto is not recognized (pp. 874, 879; app guidance)." }
      ],
      pearls: [
        "**Explanation**, not syndrome; **no defining symptoms** (p. 879).",
        "**Not** recognized among **Caribbean** Latinx (p. 879).",
        "Onset **days to years** after the fright (p. 879).",
        "Three types → **MDD, PTSD, somatic symptom disorder** (p. 879)."
      ],
      cmp: {
        symptoms: "No defining set; sadness, sleep and appetite change, low self-worth, somatic aches",
        exclusions: "Not a diagnosis; not recognized among Caribbean Latinx",
        prevalence: "Not given",
        course: "Onset days to years after the fright; extreme cases fatal"
      },
      clues: [
        ["Core picture", "A Guatemalan farm worker who feels “something left me” after nearly drowning, with nightmares and avoidance"],
        ["Key test", "Which of the three types?"],
        ["Recording (app guidance)", "MDD, PTSD or somatic symptom disorder if met"]
      ],
      updates: upd("Susto", "The three syndromic types tell you which Section II disorder to assess first (p. 879).")
    },
    {
      id: "taijin-kyofusho", ch: "ch24", sec: "s24-taijin", pages: "879", critPages: "879",
      name: "Taijin kyofusho", code: CODE,
      codes: rec(),
      aka: ["interpersonal fear disorder", "TKS", "sensitive type", "offensive type", "sekimen-kyofu", "jiko-shu-kyofu", "jiko-shisen-kyofu", "shubo-kyofu", "taein kong po (Korea; related)"],
      essence: "“**Interpersonal fear disorder**”: a **cultural syndrome** of **Japanese** contexts in which a person fears and avoids social situations because they think, feel or are convinced that their **appearance or actions are inadequate or offensive to others** (p. 879). It has a **sensitive** and an **offensive** type and four named variants (blushing, body odor, gaze, stiff expression or deformity) (p. 879). It is **broader than social anxiety disorder**, reaching into body dysmorphic, olfactory reference and **delusional** presentations (p. 879).",
      duration: "Not applicable",
      functioning: "Avoidance of interpersonal situations (p. 879)",
      mood: "Anxiety about interactions; not described further (p. 879)",
      criteria: [
        ["Type", "A cultural syndrome (p. 879)."],
        ["Context", "Japanese cultural contexts; “interpersonal fear disorder” (p. 879)."],
        ["Core picture", "Anxiety about and avoidance of social encounters, from the thought, feeling or conviction that how one looks or acts is inadequate or offends others (p. 879)."],
        ["Forms", "Sensitive type: extreme social sensitivity; offensive type: the main worry is causing offense (p. 879)."],
        ["Variants", "Sekimen-kyofu (blushing), jiko-shu-kyofu (body odor), jiko-shisen-kyofu (too much or too little eye contact), shubo-kyofu (stiff or awkward face or movements, or body deformity) (p. 879)."],
        ["Related elsewhere", "Taein kong po (Korea) and other societies that stress self-conscious correct behavior in hierarchical relationships; an interdependent self-construal may be a risk factor across cultures; the offensive-type concern is described in the United States, Australia, Indonesia and New Zealand (p. 879)."],
        ["Related DSM-5-TR", "Social anxiety disorder, body dysmorphic disorder, delusional disorder, obsessive-compulsive disorder, olfactory reference syndrome (a type of other specified obsessive-compulsive and related disorder), related specifically to the jikoshu-kyofu variant and seen outside Japan (p. 879)."],
        ["Chart", "Social anxiety disorder, BDD, an other specified OCRD (olfactory reference syndrome) or delusional disorder as met, with the concept in the formulation (p. 873; app guidance)."]
      ],
      specifiers: [],
      epi: [
        ["Prevalence", "Not given in the chapter (p. 879)"],
        ["Where described", "Japan and Korea; offensive-type concerns also in the United States, Australia, Indonesia, New Zealand (p. 879)"]
      ],
      risk: [
        "An interdependent self-construal, defining the self through social roles and relationships, may be a risk factor across cultures (p. 879).",
        "Societies that emphasize correct behavior in hierarchical relationships (p. 879)."
      ],
      differential: [
        { id: "social-anxiety", how: "Fear of scrutiny or of offending others with insight kept; taijin kyofusho is the broader construct (p. 879)." },
        { id: "bdd", how: "Preoccupation with a perceived defect in appearance, as in shubo-kyofu (p. 879)." },
        { id: "delusional-disorder", how: "Consider when the concern has a delusional quality and does not yield to reassurance or counterexample (p. 879)." },
        { id: "ocd", how: "Listed among the related conditions (p. 879)." },
        { id: "other-specified-ocrd", how: "Home of olfactory reference syndrome, tied to the jiko-shu-kyofu (body odor) variant (p. 879)." },
        { name: "Olfactory reference syndrome", how: "Preoccupation with emitting an offensive odor; recorded as an other specified OCRD (p. 879; Chapter 6)." }
      ],
      pearls: [
        "Fear of **offending others**, not only of being embarrassed: the offensive type (p. 879).",
        "**Broader** than social anxiety disorder (p. 879).",
        "Poor response to **reassurance or counterexample** → think delusional disorder (p. 879).",
        "Body odor variant (**jiko-shu-kyofu**) ↔ **olfactory reference syndrome** (p. 879)."
      ],
      cmp: {
        symptoms: "Fear that one’s appearance or behavior offends or is inadequate; blushing, odor, gaze or deformity variants",
        exclusions: "Not a diagnosis; delusional conviction points to delusional disorder",
        prevalence: "Not given",
        course: "Not described"
      },
      clues: [
        ["Core picture", "A Japanese engineer avoiding colleagues, sure his gaze and body odor offend them"],
        ["Key test", "Insight kept, or delusional conviction?"],
        ["Recording (app guidance)", "Social anxiety, BDD, other specified OCRD or delusional disorder"]
      ],
      updates: upd("Taijin kyofusho", "Olfactory reference syndrome, linked to the body-odor variant, is itself recorded as an other specified obsessive-compulsive and related disorder (p. 879).")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Ataque de nervios vs khyâl cap vs panic disorder", ids: ["ataque-de-nervios", "khyal-cap", "panic-disorder"] },
    { label: "Ataque de nervios vs nervios", ids: ["ataque-de-nervios", "nervios"] },
    { label: "Taijin kyofusho vs social anxiety disorder vs BDD", ids: ["taijin-kyofusho", "social-anxiety", "bdd"] },
    { label: "Dhat syndrome vs somatic symptom disorder vs illness anxiety disorder", ids: ["dhat-syndrome", "ssd", "iad"] },
    { label: "Susto vs MDD vs PTSD", ids: ["susto", "mdd", "ptsd"] },
    { label: "Shenjing shuairuo vs MDD vs GAD", ids: ["shenjing-shuairuo", "mdd", "gad"] },
    { label: "Hikikomori vs social anxiety disorder vs avoidant PD", ids: ["hikikomori", "social-anxiety", "avoidant-pd"] },
    { label: "Kufungisisa vs GAD vs PTSD", ids: ["kufungisisa", "gad", "ptsd"] },
    { label: "Maladi dyab vs delusional disorder", ids: ["maladi-dyab", "delusional-disorder"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 24: durations the chapter mentions", ticks: [[0, "0"], [10, "1 day"], [50, "6 mo"], [100, "years"]], rows: [
      { label: "Khyâl attack", dx: "khyal-cap", from: 0, to: 1, color: "guide", span: "minutes" },
      { label: "Ataque", dx: "ataque-de-nervios", from: 0, to: 2, color: "case", span: "one episode" },
      { label: "Hikikomori", dx: "hikikomori", from: 0, to: 50, color: "hy", span: "≥6 mo (Japan)" },
      { label: "Susto onset", dx: "susto", from: 10, to: 100, color: "clin", span: "days to years" }
    ], note: "None of these is a DSM criterion; the concepts are not diagnoses (p. 873). Khyâl attacks usually meet panic attack criteria (p. 876), so the minutes-long bar follows the panic attack pattern (Chapter 5; app guidance). The manual gives no length for an ataque, only that it usually follows a family stressor (p. 874). The 6 months for hikikomori is the 2010 Japanese ministry guideline (p. 875). Susto symptoms can start days to years after the fright (p. 879). The scale is not linear." }
  ]);
})();
