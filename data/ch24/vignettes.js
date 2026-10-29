/* Chapter 24 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   This is a non-disorder chapter (Section III, pp. 859–879). The ten cultural concepts of distress are illustrations, never
   diagnoses: every keyed answer is the DSM-5-TR disorder that is met (with the cultural term named in the formulation), an
   "other specified" category, a Chapter 22 code (app guidance on the code), no disorder, or a CFI step (p. 873). Criteria
   applied from other chapters are tagged "(Ch N)". The CFI is described in the app's own words, never reprinted. Every stem
   states the duration, triggers, insight, sharing of beliefs, impairment, substance use and trauma history the `why` relies on.
   Philippine idioms appear only as labeled color (outside the DSM; app guidance). Self-harm content stays brief and general. */
SP.add("ch24", "vignettes", [
  {
    "id": "v24-01",
    "tag": "An ataque, and seven weeks before it",
    "sec": "s24-ataque",
    "dx": "ataque-de-nervios",
    "stem": "During a U.S. elective at an outpatient clinic in Orlando, a resident sees a 46-year-old woman who grew up in Puerto Rico. Ten days ago, after a bitter argument with her adult daughter, she had what her family calls an ataque de nervios: she screamed, wept, shook, felt heat climbing from her chest into her head and said she wanted to die, and her sister held her until it passed after about 30 minutes. She was not injured. On questioning, for the 7 weeks before that episode she had felt sad nearly every day, lost pleasure in church and cooking, slept about 4 hours a night, lost 5 kg without trying, felt worthless and could not concentrate at work, where she has missed several shifts. She still thinks about death most days but has no plan. She has had no other such episodes and does not worry about having more. She drinks no alcohol and uses no drugs; thyroid tests and examination are normal. She has never had a period of elevated mood, and she has no trauma history.",
    "q": "What is the best formulation?",
    "choices": [
      "Ataque de nervios as the diagnosis, since the episode matches the syndrome her family names",
      "Major depressive disorder; the ataque named in the cultural formulation, with a full suicide risk assessment",
      "Panic disorder, because the episode included trembling, heat and fear",
      "No mental disorder: ataques are normative expressions of distress after family conflict",
      "Intermittent explosive disorder"
    ],
    "answer": 1,
    "why": "For 7 weeks she has had **five or more depressive symptoms nearly every day**, including depressed mood and loss of pleasure, with impairment, no substance or medical cause and no elevated-mood episode: that meets **major depressive disorder** (Ch 4). The chapter says a cultural concept can **occur alone or alongside any disorder**, and that in U.S. Latinx communities ataque can be comorbid with **nearly all psychiatric disorders** (p. 873). The rule is to diagnose the disorder that is met and put the cultural term in the **case formulation** (p. 873). Her wish to die during the ataque and her daily thoughts of death call for a full suicide risk assessment today (app guidance).",
    "whyNot": [
      "The ten concepts are illustrations, not diagnoses; the chart gets the disorder that is met, and the cultural term goes in the formulation (p. 873).",
      "Correct.",
      "One cued episode with no later worry about further attacks does not meet panic disorder, which needs recurrent unexpected attacks and a month of concern or behavior change (Ch 5).",
      "Some ataques are normative, for example at a funeral (p. 874), but 7 weeks of daily depressive symptoms with missed work is a disorder, not a normative reaction.",
      "A single episode of distress is not the recurrent, out-of-proportion aggressive outbursts that intermittent explosive disorder requires (Ch 15); it is on ataque’s related list because some ataques include aggression (p. 874)."
    ],
    "then": {
      "q": "Her daughter says the ataque was “just nerves” and asks why the team keeps asking about it now that it is over. Which point from the chapter best supports exploring it further?",
      "choices": [
        "Ataque is a DSM-5-TR syndrome with its own criteria, so it must be documented separately",
        "Ataque occurs only in people with a dissociative disorder, so one must be ruled out",
        "Ataque has a one-to-one link with panic disorder, so the episode predicts panic disorder",
        "Exploring ataque is needed mainly to complete the demographic part of the CFI",
        "In U.S. Latinx community samples, ataque is tied to suicidal thoughts, disability and outpatient psychiatric care even when diagnoses and trauma are taken into account, so it carries information about risk"
      ],
      "answer": 4,
      "why": "One reason cultural concepts matter is that they can yield **useful clinical information** about risk, resilience and outcome (p. 872). Ataque in particular is associated with **suicidal thoughts, disability and outpatient psychiatric use**, even when psychiatric diagnoses, trauma exposure and other factors are taken into account (p. 874). In her case it came with a stated wish to die, so it belongs in the risk formulation.",
      "whyNot": [
        "The ten concepts are examples chosen to illustrate how culture affects diagnosis, not DSM-5-TR diagnoses; the chart records the disorder that is met (p. 873).",
        "Dissociative features are prominent in some ataques and absent in others (p. 874).",
        "The manual found no one-to-one link between ataque and any single disorder (p. 874).",
        "Demographic information is gathered before the CFI to tailor it (p. 863); the reason to explore ataque here is clinical risk.",
        "Correct."
      ]
    },
    "discuss": [
      "How would you ask what happened during the ataque without implying it was “only nerves” or a sign of being “crazy” (app guidance)?",
      "Which of the chapter’s seven reasons for attending to cultural concepts does this case show best (pp. 872–873)?"
    ]
  },
  {
    "id": "v24-02",
    "tag": "What goes on the diagnosis line",
    "sec": "s24-concepts-practice",
    "dx": "ataque-de-nervios",
    "stem": "On a U.S. elective in Queens, New York, a resident evaluates a 33-year-old Colombian woman who works as a home health aide. Over 4 months she has had six sudden surges of intense fear that peak within minutes, with pounding heart, sweating, shaking, shortness of breath, chest tightness and fear of dying. Two followed quarrels with her husband; four came while she was calm, one of them waking her from sleep. For the past 2 months she has worried almost daily about the next attack and has stopped riding the subway alone; other places do not frighten her. She and her mother call the attacks “ataques de nervios.” ECG, thyroid tests and glucose are normal; she drinks one cup of coffee a day and uses no alcohol or drugs. She has no lasting dissociative symptoms, aggression, depressed mood or trauma history. The attending asks the resident to write the diagnosis line.",
    "q": "Which entry follows the chapter’s recording rule?",
    "choices": [
      "Ataque de nervios (F41.0)",
      "Other specified anxiety disorder (ataque de nervios)",
      "Unspecified anxiety disorder, because the attacks are culturally shaped",
      "Panic disorder on the diagnosis line, with ataque de nervios and the family’s understanding of it in the cultural formulation",
      "No diagnosis until every CFI question has been asked"
    ],
    "answer": 3,
    "why": "She has **recurrent unexpected panic attacks** (some cued, several not) followed by **more than a month of worry and avoidance**, with no substance or medical cause: that meets **panic disorder** (Ch 5). The chapter asks whether a presentation meets criteria for a **specified disorder** or is best classed as **other specified**; once a disorder is diagnosed, the **cultural terms and explanations go into the case formulation**, where they help clarify symptoms and attributions (p. 873). Panic disorder is also the first related condition the manual lists for ataque (p. 874).",
    "whyNot": [
      "No cultural concept carries a code; F41.0 belongs to panic disorder (app guidance), and the concept goes in the formulation (p. 873).",
      "Other specified is for presentations that do not meet a specified disorder; hers does (p. 873; Ch 5).",
      "Cultural shaping does not move a met disorder into an unspecified category (p. 873).",
      "Correct.",
      "The CFI can be used whole or in parts and alongside other clinical material (p. 863); it does not hold up a diagnosis whose criteria are already met."
    ],
    "discuss": [
      "Panic disorder overlaps with ataque because both are paroxysmal and share symptoms; why is the overlap still not one-to-one (pp. 873–874)?",
      "What would you write in the formulation so the next clinician knows what “ataque” means to her and her mother (app guidance)?"
    ]
  },
  {
    "id": "v24-03",
    "tag": "Strength draining away",
    "sec": "s24-dhat",
    "dx": "dhat-syndrome",
    "stem": "A 23-year-old medical student from a village in Uttar Pradesh, India, who is studying in Manila, comes to the university clinic. For 8 months he has been unable to keep an erection on nearly every attempt at intercourse with his girlfriend, which distresses him greatly; before that he had no difficulty. He is sure the cause is a whitish discharge he notices after urinating, which he believes is semen draining his strength, and he calls this dhat. He says many men in his village, including his older brother, hold the same view, and he accepts that the tests are normal while still worrying about the discharge. He feels tired in exam weeks but sleeps and eats well, enjoys his classes and friends, and has no persistent worry about other topics or about having a serious illness. The couple get along well. Examination, fasting glucose, lipids, hormone tests and urinalysis are normal; he takes no medicines, does not smoke and rarely drinks alcohol. He has no trauma history.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "Erectile disorder, acquired; dhat named in the formulation as his cultural explanation",
      "Dhat syndrome, recorded as the principal diagnosis",
      "Illness anxiety disorder",
      "Delusional disorder, somatic type",
      "Major depressive disorder"
    ],
    "answer": 0,
    "why": "He has had difficulty **keeping an erection on nearly all occasions** for **8 months** (the criterion is about 6 months), with marked distress, after a period of normal function, and no medical, substance, relationship or other mental-disorder explanation: that meets **erectile disorder, acquired** (Ch 13). The chapter calls dhat **not a discrete syndrome but a cultural explanation** that young men attach to varied complaints, erectile dysfunction among them, and lists erectile disorder among its related conditions (pp. 874–875). The explanation belongs in the formulation (p. 873).",
    "whyNot": [
      "Correct.",
      "Dhat is a cultural explanation, not a diagnosis; the chart records the disorder that is met (pp. 873–874).",
      "His concern is tied to the erectile problem and the discharge, not a standing preoccupation with having or getting a serious illness (Ch 9).",
      "The idea he holds is widely shared in his cultural setting (p. 875), not an idiosyncratic fixed false belief (Ch 2).",
      "He has no depressed mood or loss of interest and enjoys his classes and friends (Ch 4)."
    ],
    "then": {
      "q": "On rounds, a junior resident calls the belief about losing strength through semen “bizarre” and wants it charted as a psychotic symptom. What is the best reply?",
      "choices": [
        "Agree, because any belief that contradicts physiology is a delusion",
        "Agree, but only if he keeps doubting the normal urinalysis",
        "Disagree: ideas that semen loss is harmful are widespread in the general population of his cultural setting, so the belief is a cultural explanation, not evidence of psychosis",
        "Disagree, because dhat applies only to women with leukorrhea",
        "Disagree, because the belief should be coded as a Chapter 22 educational problem instead"
      ],
      "answer": 2,
      "why": "Dhat began as a clinical category in South Asia, but related ideas about the **harm of semen loss are widespread in the general population**, pointing to a **cultural disposition** to explain symptoms this way (p. 875). A belief one’s community holds is weighed differently from an idiosyncratic one, and treating an unfamiliar explanation as psychosis is the kind of **misdiagnosis** the chapter warns about (p. 872).",
      "whyNot": [
        "Conflict with biomedical physiology does not by itself make a belief delusional; cultural context must be weighed (pp. 872, 875; Ch 2).",
        "Disagreeing with a test result does not turn a culturally shared explanation into a delusion (p. 875; app guidance).",
        "Correct.",
        "Concerns about white vaginal discharge are a variant described for women (p. 875); the concept is most often seen in young men.",
        "Educational problems are on dhat’s related list (p. 875), but nothing here points to one, and a Z code would not answer whether the belief is psychotic."
      ]
    },
    "discuss": [
      "How would you explain the normal urinalysis while respecting his explanation (app guidance)?",
      "Which related concepts in other cultural contexts does the manual link to dhat, and what do they share (p. 875)?"
    ]
  },
  {
    "id": "v24-04",
    "tag": "Nine months in his room",
    "sec": "s24-hikikomori",
    "dx": "hikikomori",
    "stem": "During an elective at a youth mental health clinic in Nagoya, Japan, a resident meets a 19-year-old man whose mother is Filipina and whose father is Japanese. For 9 months he has stayed in his room in his parents’ apartment, coming out at night to eat, and has seen no one in person except his parents. He says he wants to go back to university but is terrified that classmates will judge him as stupid. Since age 15 he has dreaded speaking in class or eating in front of others, blushes and trembles in these situations and avoided them whenever he could; these situations almost always make him anxious, and his parents and former teachers say his fear is far beyond what such situations call for; he stopped attending after classmates laughed at him during a presentation. As a child he had close friends and easy back-and-forth conversation, and he still chats warmly with two friends online. His mood is mostly fine, he enjoys games and music, and he has no unusual beliefs or perceptual experiences. He uses no alcohol or drugs and has no trauma history beyond the teasing. His parents call it hikikomori.",
    "q": "Which diagnosis should be recorded?",
    "choices": [
      "Hikikomori, primary type, as the diagnosis, because withdrawal has lasted more than 6 months",
      "Schizoid personality disorder",
      "Social anxiety disorder; hikikomori named in the formulation as secondary withdrawal",
      "Autism spectrum disorder",
      "Major depressive disorder"
    ],
    "answer": 2,
    "why": "Four years of marked fear of **scrutiny and negative evaluation** in social and performance situations, almost always provoking anxiety, avoided, out of proportion and impairing, with no substance cause, meets **social anxiety disorder** (Ch 5). The manual separates withdrawal within an established disorder (**secondary**) from withdrawal that stands on its own (**primary**), and social anxiety disorder heads hikikomori’s related list (p. 875). The 6-month figure comes from a **2010 guideline of Japan’s Ministry of Health, Labor and Welfare**, not from DSM-5-TR criteria (p. 875).",
    "whyNot": [
      "Hikikomori is a cultural concept, not a DSM-5-TR diagnosis (p. 873), and his withdrawal arises from a disorder, so it would be secondary, not primary (p. 875).",
      "He wants relationships and keeps two close online friends; schizoid personality disorder is marked by detachment from relationships (Ch 18).",
      "Correct.",
      "He had close friendships and normal reciprocity as a child, so there is no early social communication deficit (Ch 1).",
      "His mood is mostly fine and he still enjoys games and music (Ch 4)."
    ],
    "then": {
      "q": "He games about 8 hours a day. His mother asks whether he also has internet gaming disorder. What is accurate?",
      "choices": [
        "Internet gaming disorder is a Section III condition for further study, not an official diagnosis; describe the gaming in the formulation and keep assessing it, since the manual notes that hikikomori may be associated with it",
        "Internet gaming disorder must be coded whenever withdrawal lasts 6 months",
        "Heavy Internet use rules out hikikomori",
        "Internet gaming disorder replaces social anxiety disorder as the principal diagnosis",
        "Because hikikomori is distressing from its first day, any gaming during it is a disorder"
      ],
      "answer": 0,
      "why": "Hikikomori often comes with **intense Internet use and online social contact**, and the condition **may be associated with Internet gaming disorder** (p. 875). Internet gaming disorder sits in **Section III, Conditions for Further Study**, whose proposed criteria are not for clinical use (Ch 25). The chart keeps the Section II disorder that is met; the gaming is described and followed (app guidance).",
      "whyNot": [
        "Correct.",
        "The 6-month figure is the Japanese guideline for hikikomori (p. 875), unrelated to gaming, and the gaming proposal is not an official diagnosis (Ch 25).",
        "Heavy Internet use is a common feature of hikikomori (p. 875).",
        "A Section III proposal cannot replace an official diagnosis (Ch 25).",
        "The withdrawal may start out ego-syntonic and usually becomes distressing over time (p. 875); neither point makes gaming a disorder."
      ]
    },
    "discuss": [
      "What would make his withdrawal “primary” rather than “secondary” (p. 875)?",
      "Which CFI domain would you use to explore how each parent’s cultural background shapes their view of the withdrawal (p. 863)?"
    ]
  },
  {
    "id": "v24-05",
    "tag": "Wind rising to the head",
    "sec": "s24-khyal",
    "dx": "khyal-cap",
    "stem": "During a U.S. elective, a resident in a Long Beach, California, emergency department sees a 63-year-old woman who came to the United States from Cambodia as a refugee 38 years ago. For 5 months she has had episodes of dizziness, palpitations, shortness of breath, cold hands, ringing in the ears and a sore neck that build to a peak within minutes. Through a Khmer interpreter she explains that wind is rising in her body along with the blood and could reach her head and make her faint and die; she calls these khyâl attacks. Her daughter says the idea is familiar to their Cambodian relatives and neighbors. Between episodes her speech is organized, she has no hallucinations and no other unusual beliefs, and she accepts that her ECG and bloodwork are normal while still fearing the wind. She uses no alcohol or drugs. The intern has written “somatic delusion; rule out schizophrenia.”",
    "q": "What is the best response to the intern’s note?",
    "choices": [
      "Agree, and start an antipsychotic",
      "Agree, because a belief about wind in the body cannot be tested",
      "Disagree, because the symptoms are imagined and need no further assessment",
      "Record khyâl cap as the diagnosis and discharge her",
      "Revise it: the wind belief is a culturally shared catastrophic interpretation inside panic-type attacks, and reading an unfamiliar presentation as psychosis is a misdiagnosis the chapter warns about"
    ],
    "answer": 4,
    "why": "Khyâl attacks combine **panic-attack symptoms** with tinnitus and neck soreness and with **catastrophic cognitions** about a windlike substance rising in the body (pp. 875–876), and they **usually meet panic attack criteria** (p. 876). Her belief is shared in her community and confined to the attacks, and she has no other psychotic features. The chapter names **unfamiliar symptom presentations misdiagnosed as psychosis** as one way cultural variation leads to error (p. 872).",
    "whyNot": [
      "There is no psychotic disorder to treat; the belief is a culturally shared interpretation of the attacks (pp. 872, 876).",
      "Untestability is not what makes a belief delusional; this one is shared by her community and tied to the attacks (pp. 872, 876; Ch 2).",
      "The symptoms are real; khyâl attacks may bring considerable disability (p. 876).",
      "Khyâl cap is a cultural concept, not a diagnosis; she still needs a full assessment against Section II criteria (p. 873).",
      "Correct."
    ],
    "then": {
      "q": "Later she describes the Khmer Rouge years, when her husband and brother were killed in front of her. Since resettling she has had weekly nightmares of the killings, intrusive images, intense distress at the smell of smoke, avoidance of Cambodian news and of talk about the past, persistent fear and guilt, detachment from her grandchildren, an exaggerated startle and poor sleep, all worse this year and keeping her from caring for her grandchildren. Every attack has followed a reminder, a worrying thought or standing up quickly; none came out of nowhere, and between attacks she does not worry about the next one. She has no depressive episode and uses no substances. Which diagnosis best fits?",
      "choices": [
        "Panic disorder",
        "Agoraphobia",
        "Illness anxiety disorder",
        "Posttraumatic stress disorder, with panic attacks; khyâl cap named in the formulation",
        "Other specified anxiety disorder (khyâl cap)"
      ],
      "answer": 3,
      "why": "She meets **PTSD** (Ch 7): witnessed violent deaths, then intrusions, avoidance, negative changes in mood and cognition, and arousal, lasting far more than a month, with impairment. Her attacks are all cued, so they are recorded with the **“with panic attacks” specifier** (Ch 5), not as panic disorder, which needs **unexpected** attacks. The manual says khyâl attacks may **shape the experience of trauma- and stressor-related disorders** and lists PTSD among the related conditions; their triggers include worrisome thoughts, standing up, odors with negative associations and agoraphobic cues (p. 876).",
      "whyNot": [
        "Panic disorder needs recurrent unexpected attacks and a month of worry or behavior change; hers are all cued and she does not worry about them (Ch 5).",
        "She avoids reminders of the trauma, not crowds, transport or being outside alone for fear that escape would be hard (Ch 5).",
        "Her fear arises during the attacks and with trauma reminders, not as a standing preoccupation with having a serious illness (Ch 9).",
        "Correct.",
        "Other specified is for presentations that miss a specified disorder; she meets PTSD (p. 873)."
      ]
    },
    "discuss": [
      "How could explaining the attacks in terms that respect her wind model improve engagement and treatment (p. 872; app guidance)?",
      "Why does the manual list standing up and odors as triggers, and how would you ask about them (p. 876)?"
    ]
  },
  {
    "id": "v24-06",
    "tag": "Thinking too much, sixteen months on",
    "sec": "s24-kufungisisa",
    "dx": "kufungisisa",
    "stem": "A 44-year-old Shona woman from Zimbabwe who teaches at an international school in Manila is referred by the school nurse. Her husband died of a stroke in Harare 16 months ago; she was in Manila and did not witness it. She says she has kufungisisa, “thinking too much.” Nearly every day for the past several months she has longed intensely for him and thought about him for hours, feels that part of herself died with him, still cannot believe he is gone, avoids photos and songs that remind her of him, and feels intensely lonely and that life has lost its meaning. She has missed work and dropped out of her church group. Her sister and the elders of her church in Harare say her grief has gone far beyond what their community expects. She does not feel worthless, still enjoys calls with her nieces, has no thoughts of suicide, has no other trauma history and uses no substances.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "Generalized anxiety disorder, with kufungisisa as the worry",
      "Prolonged grief disorder; kufungisisa named in the formulation as her idiom and explanation",
      "Major depressive disorder",
      "Posttraumatic stress disorder",
      "No disorder: thinking too much is an expected reaction to loss in her culture"
    ],
    "answer": 1,
    "why": "More than **12 months** after the death she has **intense yearning and preoccupation** nearly every day, with **at least three** of identity disruption, disbelief, avoidance of reminders, intense loneliness and a sense that life is meaningless, plus impairment, and **her own community judges the grief to exceed its norms**: that meets **prolonged grief disorder** (Ch 7). Kufungisisa is both an **idiom of distress and a cultural explanation** among the Shona, and prolonged grief disorder is on its related list (p. 876).",
    "whyNot": [
      "Her thoughts center on the person she lost, not on excessive worry across many everyday matters (Ch 5).",
      "Correct.",
      "Pervasive low mood with worthlessness and loss of pleasure across activities is not described; her distress centers on longing for him (Ch 4; Ch 7).",
      "A natural death she learned of at a distance is not a qualifying PTSD exposure, and she has no trauma intrusions (Ch 7).",
      "The prolonged grief criteria require the grief to exceed cultural norms, and her own community says it does (Ch 7)."
    ],
    "discuss": [
      "In some settings “thinking too much” is believed to lead to psychosis, suicidal thoughts or death; how would you ask what she fears it will lead to (p. 876)?",
      "Which CFI questions would help you learn what her church and family think would help now (pp. 863, 866)?"
    ]
  },
  {
    "id": "v24-07",
    "tag": "A sent sickness, and voices",
    "sec": "s24-maladi-dyab",
    "dx": "maladi-dyab",
    "stem": "On a U.S. elective in Brooklyn, New York, a resident sees a 24-year-old Haitian man brought by his parents. Soon after he started a well-paid job and bought a car 9 months ago, he began to withdraw. For the past 7 months he has heard two voices commenting on his actions every day, has believed that television presenters broadcast his thoughts, and speaks in loosely connected fragments; he lost the job, stopped bathing and sits idle for hours. His parents and their church community believe a jealous relative had a sorcerer send him a sickness (maladi dyab). They say that explanation is common among them, but that his voices and his ideas about television are not something anyone in their community shares. Urine drug screens are negative, he uses no substances, examination and brain imaging are normal, he has no trauma history, and he has had no depressive or manic episode.",
    "q": "What is the best formulation?",
    "choices": [
      "No psychiatric disorder: maladi dyab is a culturally shared explanation, so the symptoms are not psychotic",
      "Delusional disorder, persecutory type, based on the family’s belief in sorcery",
      "Brief psychotic disorder",
      "Schizophrenia; maladi dyab named in the formulation as the family’s explanation of the illness",
      "Religious or spiritual problem (Z65.8) only"
    ],
    "answer": 3,
    "why": "He has daily hallucinations, delusions of thought broadcasting and disorganized speech, with **negative symptoms and loss of function** and continuous signs for **more than 6 months**, and no mood, substance or medical cause: that meets **schizophrenia** (Ch 2). Maladi dyab is a **cultural explanation** in Haitian communities for many illnesses, psychosis among them (p. 876). The family’s shared belief is not his symptom, and the manual warns that the supernatural explanation can lead to **misdiagnosis of delusional disorder or schizophrenia** (p. 877); here the diagnosis rests on symptoms his own community does not share.",
    "whyNot": [
      "The explanation is shared, but his voices, thought broadcasting and disorganized speech are not; a cultural explanation can coexist with any disorder (pp. 873, 877).",
      "The sorcery belief is the family’s and the community’s, not his symptom, and his picture includes hallucinations and disorganized speech (p. 877; Ch 2).",
      "Brief psychotic disorder lasts less than 1 month; his symptoms have lasted months (Ch 2).",
      "Correct.",
      "A Chapter 22 code may be added if a religious or spiritual problem becomes a focus, but it cannot replace a disorder that is met (p. 873; app guidance)."
    ],
    "discuss": [
      "What questions help you separate a belief his community shares from one it does not (app guidance)?",
      "How might the family’s explanation shape their preferences for help, and which CFI domain captures this (p. 863)?"
    ]
  },
  {
    "id": "v24-08",
    "tag": "Torn between two answers",
    "sec": "s24-maladi-dyab",
    "dx": "maladi-dyab",
    "stem": "On a U.S. elective in Boston, a resident sees a 41-year-old Haitian woman, a hospital pharmacist who came to the United States at age 10 and moves easily between Haitian and American settings. Since her promotion 2 months ago she has had a minor car accident and lost her apartment lease. Her mother and aunts say an envious colleague has sent her a sickness of misfortune (maladi dyab) and urge her to see a traditional healer for a protective ritual. Two years ago she joined a Pentecostal church that forbids such rituals, and she is torn: she has begun to question whether her new faith is enough and feels guilty whichever way she leans. She is unsure whether she believes the family’s explanation. She sleeps 7 hours, eats normally, works fully, enjoys her children and has no persistent worry outside this conflict; she and her doctor both see her distress as in proportion to the family pressure. She has no trauma history and uses no substances.",
    "q": "What is the best formulation?",
    "choices": [
      "No mental disorder; Z65.8 religious or spiritual problem, with maladi dyab described in the formulation",
      "Adjustment disorder with anxiety",
      "Delusional disorder, persecutory type",
      "Z60.3 acculturation difficulty",
      "Other specified anxiety disorder (maladi dyab)"
    ],
    "answer": 0,
    "why": "She meets **no disorder**: her distress is **proportionate**, she is functioning, and there are no anxiety, mood or psychotic symptoms. The focus is a **conflict of faith and questioning of spiritual values** after a conversion, which the app’s Chapter 22 material codes **Z65.8 religious or spiritual problem** (Ch 22; app guidance on the code). The chapter notes that concerns found by the CFI may match Chapter 22 conditions, naming **religious or spiritual problems** among them (p. 873), and that maladi dyab can explain **negative experiences and problems in functioning**, not only illness (p. 876).",
    "whyNot": [
      "Correct.",
      "Adjustment disorder needs distress out of proportion to the stressor or significant impairment; she has neither (Ch 7).",
      "The sorcery explanation is her family’s shared cultural view, which the manual warns can be misread as a persecutory delusion (p. 877).",
      "She has lived in the United States since childhood and moves easily between both settings; the problem is a conflict of faith, not difficulty adjusting to a new culture (Ch 22).",
      "There is no clinically significant anxiety syndrome, and a cultural concept is never the diagnosis label (p. 873)."
    ],
    "discuss": [
      "How would you explore both her family’s and her church’s views of what would help without taking sides (p. 866)?",
      "What decides whether a misfortune is labeled a sent sickness, more than the symptoms themselves (p. 877)?"
    ]
  },
  {
    "id": "v24-09",
    "tag": "Three years of nervios",
    "sec": "s24-nervios",
    "dx": "nervios",
    "stem": "On a U.S. elective in Los Angeles, a resident sees a 39-year-old Salvadoran woman who cleans offices at night. She says she has suffered from nervios for 3 years. Over that time she has felt down more days than not, with low energy, poor concentration, poor sleep and a sense that things will not get better; she has not had a stretch of more than a few weeks feeling well. She has never had 2 weeks with enough symptoms for a major depressive episode, never had a period of elevated mood and never had psychotic symptoms. She also has tension headaches, occasional dizziness and easy tearfulness, which she puts down to nervios, but they do not occupy much of her thought or time. She has missed shifts and stopped attending her prayer group. Thyroid tests, blood count and neurological examination are normal; she uses no alcohol or drugs and has no trauma history.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "No disorder: nervios is a general state of vulnerability to hard circumstances",
      "Somatic symptom disorder",
      "Persistent depressive disorder; nervios named in the formulation as her idiom and explanation",
      "Major depressive disorder, recurrent",
      "Generalized anxiety disorder"
    ],
    "answer": 2,
    "why": "Depressed mood **more days than not for at least 2 years** with **two or more** of low energy, poor concentration, poor sleep and hopelessness, never free of symptoms for more than 2 months, no mania, psychosis, substance or medical cause, and impairment: that meets **persistent depressive disorder** (Ch 4). Nervios is a broad **idiom of distress and causal explanation** in Latinx cultural contexts whose severity ranges from no disorder at all to pictures resembling depressive and other disorders, and persistent depressive disorder is on its related list (p. 877).",
    "whyNot": [
      "Nervios can describe distress without a disorder (p. 877), but 3 years of low mood with impairment meets a depressive disorder.",
      "Her headaches and dizziness do not take up excessive thought, time or anxiety (Ch 9).",
      "Correct.",
      "She has never had a full major depressive episode (Ch 4).",
      "Excessive, hard-to-control worry about many matters is not described; her picture is chronic low mood (Ch 5)."
    ],
    "discuss": [
      "The manual describes Puerto Rican forms of nervios such as “being nervous since childhood” and “being ill with nerves”; why ask her what nervios means to her rather than assume (p. 877; app guidance)?",
      "Which of her complaints match the symptoms the manual lists for nervios (p. 877)?"
    ]
  },
  {
    "id": "v24-10",
    "tag": "Nervios after every argument",
    "sec": "s24-nervios",
    "dx": "nervios",
    "stem": "On a U.S. elective in Houston, a resident sees a 48-year-old Honduran woman who has lived in Texas for 22 years, manages a school cafeteria and is comfortable in English and Spanish. She says her nervios have been acting up for 4 months: headaches with tightness at the back of the neck, irritability and some restless nights, all on the days after arguments with her 16-year-old biological daughter, who has started skipping Sunday Mass and dating against the family’s wishes. Their talks end in shouting, and the two now avoid each other at home. Between arguments she sleeps well, works fully, enjoys her friends and feels her reactions match the situation. She has no low mood most of the day, no loss of interest, no panic attacks and no persistent worry about other matters. A separate assessment finds no disorder in her daughter, no one has been harmed, nobody in the family uses substances, and there is no trauma history.",
    "q": "What best captures the focus of clinical attention?",
    "choices": [
      "Adjustment disorder with mixed anxiety and depressed mood",
      "Z60.3 acculturation difficulty",
      "Generalized anxiety disorder",
      "Other specified anxiety disorder (nervios)",
      "No mental disorder; Z62.820 parent-child relational problem, with nervios named in the formulation as her idiom of distress"
    ],
    "answer": 4,
    "why": "Her symptoms are proportionate, tied to the arguments and not impairing, so **no disorder is met**. The focus is the **quality of the parent-child relationship**, which the app’s Chapter 22 material codes **Z62.820** for a biological child (Ch 22; app guidance on the code). The chapter names **parent-child relational problems** among the Chapter 22 conditions a cultural assessment may bring to light (p. 873). Nervios here works as an **idiom of distress**, one that can be used even when no mental disorder is present (p. 877), and people who meet no criteria may still need help, judged case by case (p. 873).",
    "whyNot": [
      "Adjustment disorder needs distress out of proportion to the stressor or significant impairment; she has neither (Ch 7).",
      "Acculturation difficulty is difficulty adjusting to a new culture, for example after migration (Ch 22). She has lived in Texas for 22 years and moves easily between both cultures; the focus is the quality of the mother-daughter relationship.",
      "There is no excessive worry across many matters, and 4 months is short of the 6 that GAD needs (Ch 5).",
      "No clinically significant anxiety syndrome is present, and a cultural term is never the diagnosis label (p. 873).",
      "Correct."
    ],
    "discuss": [
      "Generational differences in cultural identity may feed this conflict; which CFI identity question probes conflict across generations (p. 865)?",
      "What new facts would move your formulation toward a disorder (app guidance)?"
    ]
  },
  {
    "id": "v24-11",
    "tag": "Loss of face in Binondo",
    "sec": "s24-shenjing",
    "dx": "shenjing-shuairuo",
    "stem": "A 54-year-old woman who moved from Fujian, China, to Binondo, Manila, 20 years ago runs a hardware store with her husband. Ten weeks ago a supplier publicly accused her of cheating at a trade association dinner, and she felt she had lost face before the whole community. Within 2 weeks she developed mental fatigue, irritability mixed with worry over what she should have done (she calls it fan nao), headaches, poor sleep and low mood on some days. She now leaves the store to her husband every afternoon. She says she has shenjing shuairuo, the term a doctor in Fujian once used with her. She has no loss of interest, appetite change, guilt or thoughts of death, and her worry concerns this event only. She has never had a manic or major depressive episode. Thyroid tests and examination are normal; she drinks no alcohol, uses no other substances and has no trauma history.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "Major depressive disorder",
      "Adjustment disorder with mixed anxiety and depressed mood; shenjing shuairuo named in the formulation",
      "Generalized anxiety disorder",
      "Shenjing shuairuo, recorded as a somatoform diagnosis of exclusion",
      "No mental disorder, since up to 45% of people with shenjing shuairuo meet no criteria"
    ],
    "answer": 1,
    "why": "Emotional symptoms began **within 3 months of an identifiable stressor**, cause **impairment** (she has given up afternoon work) and do not meet another disorder: low mood on some days with fatigue and poor sleep falls short of a major depressive episode, and 10 weeks of worry about one event is not GAD. That meets **adjustment disorder with mixed anxiety and depressed mood** (Ch 7). The manual lists **loss of face (mianzi, lianzi)** and work or family stressors among the salient precipitants of shenjing shuairuo and links it to mood, anxiety and somatic symptom disorders (p. 878).",
    "whyNot": [
      "Low mood on some days plus fatigue and poor sleep is short of five symptoms nearly every day for 2 weeks (Ch 4).",
      "Correct.",
      "Her worry concerns one event and has lasted 10 weeks; GAD requires excessive worry about many matters for 6 months (Ch 5).",
      "That was its status in the third edition of the CCMD (p. 878); in DSM-5-TR it is a cultural syndrome, not a diagnosis (p. 873).",
      "The 45% figure describes Chinese medical clinic samples (p. 878); it does not decide her case, and she has impairing symptoms after a stressor."
    ],
    "then": {
      "q": "Her son, a nurse, asks why the doctor in Fujian used shenjing shuairuo rather than a depression or anxiety term. Which statement fits the manual?",
      "choices": [
        "Because shenjing shuairuo is the ICD-11 diagnosis that replaced neurasthenia",
        "Because clinicians in China may still use the term with traditional patients to ease communication and lessen the stigma of a psychiatric label, even though its use has declined",
        "Because the CCMD is still China’s official classification",
        "Because shenjing shuairuo corresponds one-to-one with generalized anxiety disorder",
        "Because the term is used only for people with no mood or anxiety symptoms"
      ],
      "answer": 1,
      "why": "Use of shenjing shuairuo has **fallen sharply**, giving way to idioms of depression and anxiety at least in cities, but clinicians may still invoke it with **traditional patients** to **ease communication and limit stigma** (p. 878). China adopted **ICD-10 in 2011**, displacing the CCMD; ICD-10 included neurasthenia, and **ICD-11 does not** (p. 878).",
      "whyNot": [
        "ICD-11 has no neurasthenia category (p. 878).",
        "Correct.",
        "China adopted ICD-10 as its official system in 2011, displacing the CCMD (p. 878).",
        "Its related conditions span depressive, anxiety, somatic, phobic and trauma disorders, with no one-to-one match (pp. 872, 879).",
        "It is associated with mood, anxiety and somatic symptom disorders (p. 878)."
      ]
    },
    "discuss": [
      "How could you use her own term to build rapport without letting it replace the diagnosis (pp. 872–873)?",
      "Which traditional ideas about qi and xu does the manual connect with shenjing shuairuo, and how would you ask about them (p. 878)?"
    ]
  },
  {
    "id": "v24-12",
    "tag": "The night he left",
    "sec": "s24-susto",
    "dx": "susto",
    "stem": "On a U.S. elective in Phoenix, Arizona, a resident sees a 37-year-old woman from Puebla, Mexico. Her husband left her for another woman 5 months ago. Since then she has felt abandoned and unloved by her family, and for the past 6 weeks she has been sad nearly every day, lost interest in everything, eaten little and lost weight, slept poorly, felt worthless and “dirty,” had trouble concentrating at her packing job and thought her children would be better off without her, though she has no plan or intent. Her mother says she has susto, caused by the fright of the night he left, and has taken her to a healer for a cleansing. She has no nightmares, flashbacks or avoidance tied to that night, which involved no violence or threat to her life, and no other trauma history. She has never had an elevated-mood period, uses no substances, and her thyroid tests are normal.",
    "q": "What is the best formulation?",
    "choices": [
      "No disorder: susto is a recognized explanation, and the healer’s cleansing is enough",
      "Posttraumatic stress disorder",
      "Somatic symptom disorder",
      "Major depressive disorder; susto named in the formulation as the family’s explanation, with suicide risk assessed",
      "Adjustment disorder with depressed mood"
    ],
    "answer": 3,
    "why": "Six weeks of depressed mood, loss of interest, appetite and weight loss, insomnia, worthlessness, poor concentration and thoughts that others would be better off without her, with impairment, is **five or more symptoms for at least 2 weeks**: **major depressive disorder** (Ch 4). The manual describes an **interpersonal susto**, built on a sense of loss and abandonment and of being unloved by family, with sadness, a poor self-image and suicidal thoughts, that seems closely related to **major depressive disorder** (p. 879).",
    "whyNot": [
      "Susto is an explanation, not a finding that no disorder exists; she meets a depressive disorder (pp. 873, 879). Traditional healing can sit within the plan she prefers (app guidance).",
      "Being left by her husband is not a qualifying traumatic exposure, and she has no intrusions or avoidance; the PTSD-like type of susto follows a traumatic event that shapes the symptoms (p. 879; Ch 7).",
      "Recurrent somatic complaints with care sought from several practitioners are not her picture; that is the type of susto that resembles somatic symptom disorder (p. 879).",
      "Correct.",
      "Adjustment disorder is not used when another disorder, here major depressive disorder, is met (Ch 7)."
    ],
    "discuss": [
      "Susto is not recognized as an illness category among Latinx people from the Caribbean; why does that matter when you ask a patient about it (p. 879)?",
      "How would you ask about suicidal thoughts in a way that fits her family’s explanation (app guidance)?"
    ]
  },
  {
    "id": "v24-13",
    "tag": "A face that feels twisted",
    "sec": "s24-taijin",
    "dx": "taijin-kyofusho",
    "stem": "A 22-year-old Japanese exchange student at a university in Manila comes to the student health clinic. For 18 months she has been preoccupied with the idea that her jaw is crooked and her face looks stiff and twisted when she talks, so that classmates find her ugly and uncomfortable to look at. Friends, a dermatologist and the clinic physician see nothing unusual. She checks mirrors and her phone camera for 3 to 4 hours a day, compares her face with classmates’ and covers her mouth with a hand or a mask in seminars. She has stopped presenting in class and is failing a course. She says the flaw may or may not really be there and that her anxiety could be exaggerating it. She has no concern about weight or body fat, no low mood most days, no other unusual beliefs, no substance use and no trauma history. She calls her problem taijin kyofusho.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "Body dysmorphic disorder, with good or fair insight; the taijin kyofusho variant named in the formulation",
      "Social anxiety disorder",
      "Delusional disorder, somatic type",
      "Olfactory reference syndrome (other specified obsessive-compulsive and related disorder)",
      "Taijin kyofusho, offensive type, as the diagnosis"
    ],
    "answer": 0,
    "why": "Preoccupation with a **perceived flaw others cannot see**, **repetitive checking and comparing**, distress and impairment, and no eating-disorder explanation meet **body dysmorphic disorder** (Ch 6); because she allows the belief may or may not be true, insight is **good or fair** (Ch 6). The manual includes a taijin kyofusho variant centered on stiff or awkward expression or **body deformity (shubo-kyofu)** and says the concept takes in syndromes with **features of body dysmorphic disorder** (p. 879).",
    "whyNot": [
      "Correct.",
      "Her fear is about a specific perceived defect with mirror checking; social anxiety disorder is not diagnosed when the fear is better explained by such a concern (Ch 5; Ch 6).",
      "She allows the flaw may not be real; delusional disorder is considered when the concern has a delusional quality and resists reassurance and counterexample (p. 879).",
      "Olfactory reference syndrome concerns a perceived body odor, the jiko-shu-kyofu variant (p. 879).",
      "Taijin kyofusho, of either type, is a cultural concept and not a diagnosis; the chart records the Section II disorder that is met (p. 873)."
    ],
    "discuss": [
      "What answers about conviction would move her insight specifier to “absent insight/delusional beliefs” (Ch 6)?",
      "Why might an interdependent self-construal matter for her concern (p. 879)?"
    ]
  },
  {
    "id": "v24-14",
    "tag": "Blushing that might offend",
    "sec": "s24-taijin",
    "dx": "taijin-kyofusho",
    "stem": "A 31-year-old Japanese engineer posted to a Japanese-owned factory in the Freeport Area of Bataan in Mariveles is referred by the company nurse. For 3 years he has feared that his blushing in meetings makes his Filipino and Japanese colleagues uncomfortable and offends his superiors. He dreads nearly every meeting, sits at the back, eats lunch alone, has turned down a promotion that would require presentations and often calls in sick on review days. When colleagues reassure him that his blushing is barely noticeable and has upset no one, he feels relieved for a while and agrees his fear is far greater than the situation warrants. He has no concern about a body flaw, odor or gaze. His mood is normal, he drinks a little only at company events, uses no other substances, has no trauma history, and examination is normal.",
    "q": "Which diagnosis best fits?",
    "choices": [
      "Delusional disorder, because fear of offending others is a taijin kyofusho feature",
      "Body dysmorphic disorder",
      "Social anxiety disorder; taijin kyofusho (offensive type, blushing variant) named in the formulation",
      "No disorder: concern about offending superiors is normative in hierarchical workplaces",
      "Agoraphobia"
    ],
    "answer": 2,
    "why": "Three years of marked fear of being observed, with the fear that a visible sign of anxiety (blushing) will **offend others**, nearly always triggered, avoided or endured, out of proportion and impairing his work: that meets **social anxiety disorder** (Ch 5), whose criteria include the fear of **offending others**. Taijin kyofusho has a sensitive type and an **offensive type**, with **blushing (sekimen-kyofu)** among its variants, and it is a **broader construct than social anxiety disorder** (p. 879). Delusional disorder comes into play only when the concern has a delusional quality and **resists reassurance** (p. 879); his eases with reassurance.",
    "whyNot": [
      "His concern eases with reassurance and he sees it as excessive; the manual keeps delusional disorder for concerns that do not yield to reassurance or counterexample (p. 879).",
      "He has no preoccupation with a perceived flaw in appearance; blushing is a sign of anxiety, not a defect he checks (Ch 6).",
      "Correct.",
      "Ordinary deference to superiors does not produce 3 years of avoidance, sick days and a declined promotion; by his own account the fear is out of proportion (Ch 5).",
      "He fears scrutiny in social situations, not places where escape might be hard if panic struck (Ch 5)."
    ],
    "discuss": [
      "The offensive-type concern has also been described outside Japan; which countries does the manual name (p. 879)?",
      "How would you ask about a fear of offending others in a Filipino workplace without suggesting the answer (app guidance)?"
    ]
  },
  {
    "id": "v24-15",
    "tag": "What comes next in the CFI",
    "sec": "s24-cfi-domains",
    "dx": "cultural-formulation",
    "stem": "In the Mariveles outpatient clinic, a resident uses the core CFI with a 50-year-old woman who has had 2 months of low mood. So far she has described the problem in her own words (“mabigat ang loob,” a heavy heart; a Filipino idiom, outside the DSM; app guidance), what she and her husband think is causing it, what helps and what makes it worse, which parts of her identity matter most, what she has done on her own (prayer and a parish novena), whom she has consulted (an albularyo, a Filipino folk healer; outside the DSM; app guidance; and her parish priest) and what got in the way of earlier care (the fare to Balanga and fear of gossip). The resident now wants to learn what kind of help she thinks would be most useful at this point and what her family has suggested.",
    "q": "Which CFI domain does the resident move to next?",
    "choices": [
      "Cultural Definition of the Problem (Q1–3)",
      "Cultural Perceptions of Cause, Context, and Support (Q4–10)",
      "Cultural Factors Affecting Self-Coping and Past Help Seeking (Q11–13)",
      "The demographic section of the CFI",
      "Cultural Factors Affecting Current Help Seeking (Q14–16)"
    ],
    "answer": 4,
    "why": "The core CFI runs through **four domains** in order: questions **1–3** define the problem in the person’s terms, **4–10** cover perceived causes, context and support, **11–13** cover self-coping and past help seeking, and **14–16** cover **current help seeking** (p. 863). Her present preferences for help and her family’s suggestions belong to the preferences subtopic, **questions 14–15** (p. 866).",
    "whyNot": [
      "Already covered: her own description of the problem (pp. 863–864).",
      "Already covered: causes, stressors and supports, and cultural identity (pp. 863–865).",
      "Already covered: self-coping, past help seeking and barriers (pp. 863, 865–866).",
      "Demographic information is collected before the CFI to tailor it; it is not one of the CFI domains (p. 863).",
      "Correct."
    ],
    "then": {
      "q": "She then says her last doctor scolded her for seeing the albularyo, and she is unsure whether doctors will respect her choices. Which part of the CFI addresses this?",
      "choices": [
        "Barriers, question 13, in the past help-seeking domain",
        "Cultural identity, questions 8–10",
        "The clinician-patient relationship, question 16, the last question of the current help-seeking domain",
        "The Informant version, because she is distrustful",
        "None; the CFI ends with preferences"
      ],
      "answer": 2,
      "why": "The final subtopic, the **clinician-patient relationship (question 16)**, explores concerns about the clinic or the clinician, including perceived racism, language barriers or cultural differences, and what the team can do about them (p. 867). It belongs to **cultural factors affecting current help seeking (14–16)** (p. 863). Her experience also fits the Outline’s category on the **relationship between the individual and the clinician** (pp. 861–862).",
      "whyNot": [
        "Question 13 asks what has kept her from help in the past; her concern is about the relationship with clinicians now, which question 16 covers (pp. 866–867). Question 16 is also where the CFI returns to relationship concerns raised earlier (p. 867).",
        "The identity questions ask which parts of her background matter and how; they come earlier (p. 865).",
        "Correct.",
        "The Informant version collects collateral from family or caregivers, or replaces the core CFI when the person cannot answer (p. 868); she can answer.",
        "Question 16 follows the preferences questions (p. 867)."
      ]
    },
    "discuss": [
      "Phrase the resident’s next question in Filipino in your own words, keeping the domain’s aim; the manual allows questions to be rephrased (p. 863; app guidance).",
      "The CFI tells patients there are no right or wrong answers; how would you respond to her albularyo visits in that spirit (pp. 862, 864; app guidance)?"
    ]
  },
  {
    "id": "v24-16",
    "tag": "He cannot answer tonight",
    "sec": "s24-cfi-informant",
    "dx": "cultural-formulation",
    "stem": "In the Balanga emergency room at night, a 27-year-old man is brought by his aunt, who has raised him since he was 8 while both parents work in Saudi Arabia. For 10 days he has not slept, shouts at people no one else can see and speaks in fragments; he cannot follow questions or give any account of himself. His aunt sees him every day and knows his history well. She says the family believes a rival in the barangay cursed him (kulam; outside the DSM; app guidance). Toxicology is pending and the medical workup has begun. The resident wants to start the cultural assessment tonight.",
    "q": "What is the best approach?",
    "choices": [
      "Use the CFI Informant version with the aunt, beginning with her relationship to him, and add the core CFI with him once he can take part",
      "Defer all cultural assessment until the psychosis has fully resolved",
      "Give him the core CFI and record his fragmented replies as his explanatory model",
      "Use the supplementary module for immigrants and refugees with the aunt",
      "Phone his parents in Saudi Arabia and give them the core CFI as though they were the patient"
    ],
    "answer": 0,
    "why": "The **Informant version** gathers collateral from someone who knows the person’s problems and circumstances, and it can be used **instead of the core CFI** when the person cannot give information, for example in **florid psychosis**, in children or adolescents, or with cognitive impairment (p. 868). It opens by clarifying the **informant’s relationship** with the person, then covers the same domains (p. 868). The core CFI can be added when he is able (app guidance).",
    "whyNot": [
      "Correct.",
      "The manual provides the Informant version for exactly this situation (p. 868).",
      "The core CFI depends on his own account, which he cannot give now (p. 868).",
      "Supplementary modules expand the core CFI domains for particular populations (p. 863); they do not solve the problem tonight, which is that he cannot answer. The Informant version is the tool for that (p. 868).",
      "The core CFI is for the identified person; relatives give collateral through the Informant version (p. 868), and the aunt, who sees him daily, is the knowledgeable informant here."
    ],
    "discuss": [
      "How would you record the family’s belief in a curse so that it is not mistaken for his own delusion (pp. 872, 877; app guidance)?",
      "What could his parents add later, and through which version (p. 868)?"
    ]
  },
  {
    "id": "v24-17",
    "tag": "“We share the same culture”",
    "sec": "s24-cfi-when",
    "dx": "cultural-formulation",
    "stem": "A resident in Balanga sees a 35-year-old Kapampangan Catholic public-school teacher with bipolar I disorder. The resident is also a Kapampangan Catholic of about the same age and plans to skip the CFI because “we share the same culture.” The patient has stopped her mood stabilizer twice in the past year and missed follow-ups, and she says her family would rather she rely on prayer and a faith healer than on the clinic.",
    "q": "Which statement best guides the resident?",
    "choices": [
      "Skip the CFI: it is meant only for patients whose background differs from the clinician’s",
      "Skip the CFI: it is designed for immigrants and refugees",
      "Use the CFI only after the diagnosis is settled, since it plays no part in diagnostic assessment",
      "Use the CFI: it can be used whatever the backgrounds of patient and clinician, people who seem to share a background may still differ in ways that matter, and limited adherence and divergent expectations of care are among the situations where it may help most",
      "Use only the Informant version, because her family’s views drive the nonadherence"
    ],
    "answer": 3,
    "why": "The CFI can be used at any age, in **any setting, regardless of the cultural background** of patient or clinician, and people who **appear to share a background may still differ** in ways relevant to care (p. 863). Among the **seven situations** in which it may be especially helpful are **limited engagement and adherence** and **divergent views or expectations of care** shaped by other healing systems (p. 863).",
    "whyNot": [
      "The manual says the opposite: an apparently shared background can hide differences that matter (p. 863).",
      "A supplementary module exists for immigrants and refugees, but the CFI itself is for anyone (p. 863).",
      "Its information is meant to strengthen the cultural validity of diagnostic assessment as well as treatment planning (p. 863).",
      "Correct.",
      "The Informant version supplements the core CFI or replaces it when the person cannot answer; she can answer (p. 868)."
    ],
    "discuss": [
      "Name the other five situations listed on p. 863 and give a Bataan example of each (app guidance).",
      "Which CFI questions would bring out her family’s preference for the faith healer (p. 866)?"
    ]
  },
  {
    "id": "v24-18",
    "tag": "Men at the gate",
    "sec": "s24-concepts-features",
    "dx": "cultural-formulation",
    "stem": "A 34-year-old woman in Olongapo came home 3 months ago from domestic work in Kuwait after filing a complaint against an unlicensed recruiter who had taken her fees. Since then she has been sure the recruiter’s associates are watching her house. She is guarded with the resident and keeps checking the window. Her brother confirms that two men have come to their gate asking for her and shows threatening text messages the family has received; the barangay captain has logged the reports. She has no hallucinations, no other unusual beliefs and organized speech, and her mood is normal apart from fear. She sleeps poorly some nights but keeps working at the family sari-sari store and caring for her son. She has never had a psychiatric illness and uses no substances.",
    "q": "What is the best formulation of her suspicion?",
    "choices": [
      "Delusional disorder, persecutory type",
      "Socially warranted suspicion, not paranoia: corroborated threats explain it, no psychotic disorder is present, and her safety and stressors are explored further",
      "Paranoid personality disorder",
      "Brief psychotic disorder",
      "Schizophrenia, prodromal phase"
    ],
    "answer": 1,
    "why": "Her fear rests on **corroborated threats**, she has no other psychotic features, and she is functioning. The chapter names **socially warranted suspicion misread as paranoia** as one way cultural and social context can produce **misdiagnosis** (p. 872). The Outline asks clinicians to weigh **psychosocial stressors** and how a person’s experiences shape **trust in the clinician and the institution** (pp. 861–862). Safety planning and legal or welfare referral are app guidance.",
    "whyNot": [
      "A delusion is a fixed false belief; hers is supported by threats that her brother and the barangay confirm (p. 872; Ch 2).",
      "Correct.",
      "Paranoid personality disorder is a long-standing, pervasive pattern of unwarranted distrust; hers began 3 months ago with a real threat (Ch 18).",
      "She has no delusions, hallucinations or disorganized speech (Ch 2).",
      "A prodromal phase is not a DSM-5-TR diagnosis, and nothing here suggests an emerging psychosis (Ch 2)."
    ],
    "discuss": [
      "Which CFI questions would let her describe the threats and what makes her fear worse (p. 865)?",
      "How can guardedness born of real danger affect rapport, and what can the team do about it (pp. 862, 867)?"
    ]
  }
]);
