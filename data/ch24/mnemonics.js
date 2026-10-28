/* Chapter 24 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable.
   Nothing in this chapter is a diagnosis: the cultural concepts are illustrations, and the chart gets the DSM-5-TR disorder that
   is met (or an other specified diagnosis, or a Chapter 22 code), with the cultural term in the case formulation (p. 873). */
SP.add("ch24", "mnemonics", [
  {
    id: "m24-01", short: "OCF: I Can See Real Origins", name: "I Can See Real Origins: the five categories of the Outline for Cultural Formulation", original: true, dx: "cultural-formulation", sec: "s24-outline",
    "for": "The five categories the Outline for Cultural Formulation asks the clinician to assess, in order",
    letters: [
      ["I", "Identity", "Cultural identity of the individual: demographics, religion, class, migration, sexual orientation, intersectionality, language and interpreter need"],
      ["C", "Concepts of distress", "Idioms, explanations and syndromes; severity judged against the person's own norms; self-coping and help seeking, professional and traditional"],
      ["S", "Stressors and resilience", "Psychosocial stressors and cultural features of vulnerability and resilience: social determinants, discrimination, structural violence, family, faith and networks"],
      ["R", "Relationship", "Cultural features of the relationship between the person and the clinician, team and institution: differences in background and status, effects of racism on trust"],
      ["O", "Overall assessment", "Summary of what the first four mean for differential diagnosis and management"]
    ],
    caveat: "DSM check: pp. 860–862. The hook shortens the official category names; the third is **psychosocial stressors and cultural features of vulnerability and resilience** and the fourth covers the **treatment team and institution**, not only the clinician. The Outline is for **every** patient, not only those from unfamiliar backgrounds (p. 860)."
  },
  {
    id: "m24-02", short: "CFI: 3-7-3-3 = 16", name: "Define, Cause, Past, Present: the four core CFI domains as 3-7-3-3", original: true, dx: "cultural-formulation", sec: "s24-cfi-domains",
    "for": "The four domains of the core CFI and the question numbers in each",
    letters: [
      ["D", "Define (Q1–3)", "Cultural Definition of the Problem: what brings the person, how they describe it to others, what troubles them most"],
      ["C", "Cause and context (Q4–10)", "Cultural Perceptions of Cause, Context, and Support: causes (4–5), stressors and supports (6–7), role of cultural identity (8–10)"],
      ["P", "Past (Q11–13)", "Cultural Factors Affecting Self-Coping and Past Help Seeking: self-coping (11), past help (12), barriers (13)"],
      ["P", "Present (Q14–16)", "Cultural Factors Affecting Current Help Seeking: preferences now (14–15) and the clinician-patient relationship (16)"]
    ],
    caveat: "DSM check: p. 863 (domains and ranges) and pp. 864–867 (subheadings). **Barriers (Q13) belong to the past domain**, and the clinician-patient relationship (Q16) closes the current domain; it is not a fifth domain. The **Informant version has 17 questions** because it opens with the informant's relationship to the person, shifting every number by one (pp. 868–871). The app describes the questions; it does not reprint them."
  },
  {
    id: "m24-03", short: "CFI when: Different Unusual Severe Healers Clash, Mistrust, Exit", name: "Different Unusual Severe Healers Clash, Mistrust, Exit: seven times the CFI helps most", original: true, dx: "cultural-formulation", sec: "s24-cfi-when",
    "for": "The seven situations in which DSM-5-TR says the CFI may be especially helpful, in the manual's order",
    letters: [
      ["D", "Different backgrounds", "Assessment is hard because clinician and patient differ markedly in cultural, religious or socioeconomic background"],
      ["U", "Unusual symptoms", "Uncertain fit between culturally distinctive symptoms and the criteria"],
      ["S", "Severity", "Illness severity or impairment is hard to judge"],
      ["H", "Healers", "Views of symptoms or expectations of care differ because of experience with other healing and health systems"],
      ["C", "Clash on care", "Patient and clinician disagree about the course of care"],
      ["M", "Mistrust", "Possible mistrust of mainstream services among people with collective histories of trauma and oppression"],
      ["E", "Exit (engagement)", "Limited engagement in and adherence to treatment"]
    ],
    caveat: "DSM check: p. 863. These are situations where the CFI is **especially** useful, not limits on its use: it can be used with anyone, at any age, in any setting, and people who seem to share a background may still differ (p. 863)."
  },
  {
    id: "m24-04", short: "Three types: Say it, Cause it, Cluster it", name: "Say it, Cause it, Cluster it: the three types of cultural concepts of distress", original: true, dx: "cultural-formulation", sec: "s24-concepts-types",
    "for": "Telling apart cultural idioms of distress, cultural explanations and cultural syndromes",
    letters: [
      ["Say", "Idiom of distress", "A shared way of talking about distress that need not map onto specific symptoms, e.g., everyday 'nerves' or 'depression'; nervios and kufungisisa act as idioms"],
      ["Cause", "Explanation (perceived cause)", "A label or attribution giving symptoms a culturally recognized meaning or cause; dhat, maladi dyab and susto are explanations"],
      ["Cluster", "Syndrome", "A locally recognized cluster of symptoms and attributions; ataque de nervios, hikikomori, khyâl cap, shenjing shuairuo and taijin kyofusho are described as syndromes"]
    ],
    caveat: "DSM check: pp. 871–872. The boxes are not exclusive: **the same term often serves as more than one type** (the 'depression' example, p. 872), and nervios and kufungisisa are each described as both idiom and explanation (pp. 876–877). None of the types is a diagnosis (p. 873). The old term 'culture-bound syndrome' is retired (p. 871)."
  },
  {
    id: "m24-05", short: "Key features: MARC", name: "MARC: four key features of cultural concepts of distress", original: true, dx: "cultural-formulation", sec: "s24-concepts-features",
    "for": "The four features of cultural concepts of distress in relation to DSM nosology",
    letters: [
      ["M", "Mapping is one-to-many", "Seldom one concept to one DSM disorder; the correspondence runs one-to-many in either direction"],
      ["A", "Any severity", "Applies across a wide range of severity, including presentations meeting no criteria (acute grief, a social predicament)"],
      ["R", "Reused term", "One term often denotes more than one type, as 'depression' can be a syndrome, an idiom or an explanation"],
      ["C", "Change over time", "Concepts shift with local and global influences, as culture and the DSM do"]
    ],
    caveat: "DSM check: p. 872. These four features are separate from the **seven reasons** the manual gives for why concepts matter (better detection, avoiding misdiagnosis, useful clinical information, rapport and engagement, therapeutic efficacy, guiding research, cultural epidemiology; pp. 872–873)."
  },
  {
    id: "m24-06", short: "Ten examples: 3 Latinx, 2 Japan, 5 singles", name: "3-2-5: the ten example cultural concepts by cultural context", original: true, dx: "cultural-formulation", sec: "s24-concepts-practice",
    "for": "Placing each of the ten examples in the cultural context the manual names (a memory hook only)",
    letters: [
      ["3", "Latinx cultural contexts", "Ataque de nervios (syndrome), nervios (idiom and explanation), susto (explanation; not recognized among Caribbean Latinx)"],
      ["2", "Japan", "Hikikomori (social withdrawal) and taijin kyofusho (interpersonal fear)"],
      ["1", "South Asia", "Dhat syndrome (explanation: semen loss)"],
      ["1", "Cambodia", "Khyâl cap (wind attacks)"],
      ["1", "Zimbabwe (Shona)", "Kufungisisa (thinking too much)"],
      ["1", "Haiti", "Maladi dyab (sent sickness)"],
      ["1", "China", "Shenjing shuairuo (weakness of the nervous system)"]
    ],
    caveat: "DSM check: pp. 873–879. The hook ties each concept to one place, but the manual lists **related conditions in many other settings** (e.g., hikikomori-type withdrawal in 14 countries, p. 875; offensive-type concerns in the United States and elsewhere, p. 879), and the ten were chosen as **illustrations**; the principles apply to countless other concepts (p. 873). None is a diagnosis: record the disorder that is met and name the concept in the formulation (p. 873)."
  }
]);
