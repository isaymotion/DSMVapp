/* Chapter 25 board vignettes: longer single-best-answer cases, some in two parts (`then`).
   `answer` is the zero-based index of the correct choice; `whyNot` explains every option in order.
   Card ids are the key for each card's review schedule: keep them stable.
   The seven conditions in this chapter are Section III proposals, not official diagnoses: the proposed criteria sets are
   for research and are not meant for clinical use (p. 903). Keyed answers therefore say "matches (or does not match)
   the proposed criteria" and name what goes in the chart: a Section II residual category (F28, F31.89, F88, F99),
   a Section II caffeine diagnosis, or the Chapter 22 codes (T14.91XA/XD, Z91.51, R45.88, Z91.52). Several keyed
   answers are a Section II diagnosis that the presentation actually meets. Every stem states the time course,
   thresholds, exclusions and functioning that the `why` relies on. Suicidal behavior and self-injury stay brief and
   clinical, with methods named only in the manual's general terms. Coding routes, ICD-11, treatment and clinical
   advice beyond the text are tagged "(app guidance)" or "(outside the DSM)". Disorders are named in plain text. */
SP.add("ch25", "vignettes", [
  {
    "id": "v25-01",
    "tag": "Shadows, and a name being called",
    "sec": "s25-aps-criteria",
    "dx": "attenuated-psychosis-syndrome",
    "stem": "A 17-year-old Grade 12 student from a barangay in Orani is brought to the provincial hospital clinic by his parents. Over the past 5 months, several times a week, he has seen fleeting shadows at the corner of his eye and heard a faint murmur that sometimes sounds like his name. When the resident asks whether there could be another explanation, he says it might be his tired eyes or the neighbors’ radio, but the experiences puzzle and frighten him. His grades have fallen and he has stopped joining his barkada after class; his parents are worried. He has never had a period in which he was convinced of something false or heard clear voices. Urine drug screen is negative, he uses no substances, and there is no depressive or manic episode. Physical examination is unremarkable.",
    "q": "What is the best formulation for today’s chart?",
    "choices": [
      "Schizophrenia, prodromal phase",
      "Brief psychotic disorder, because the perceptual changes are recent",
      "Matches the proposed Section III criteria for attenuated psychosis syndrome; record as other specified schizophrenia spectrum and other psychotic disorder (F28), naming attenuated psychosis syndrome as the reason",
      "No diagnosis or follow-up is warranted, because insight is preserved",
      "Attenuated psychosis syndrome entered as the official diagnosis, without a code"
    ],
    "answer": 2,
    "why": "He has **attenuated hallucinations** that are unformed and that he can doubt (A2; p. 904), at least **weekly for more than a month** (B), **beginning within the past year** (C), with distress and falling function that bring him to care (D), no substance or mood disorder to explain them (E), and **no psychotic disorder ever** (F) (pp. 903–904). That matches the proposed set. Because these sets are **not intended for clinical use** (p. 903), the chart uses a Section II category: Chapter 2 lists attenuated psychosis syndrome as an example of **other specified schizophrenia spectrum and other psychotic disorder, F28** (app guidance on the route).",
    "whyNot": [
      "Schizophrenia needs symptoms at the psychotic threshold; his experiences are unformed and open to doubt, so no psychotic disorder can be diagnosed (pp. 904, 906).",
      "Brief psychotic disorder needs frank delusions, hallucinations or disorganized speech; his symptoms stay below the psychosis threshold (p. 906).",
      "Correct.",
      "Preserved insight is a defining feature of attenuated symptoms, not a reason to dismiss them; he has distress and decline that call for care (pp. 904–905).",
      "Section III conditions are not official diagnoses (p. 903); a Section II category carries the code (app guidance)."
    ],
    "then": {
      "q": "Fourteen months later he returns. For 6 weeks he has been certain that neighbors are poisoning his food, hears two voices discussing him every day and cannot be talked out of either. He has stopped school. What happens to the earlier formulation?",
      "choices": [
        "It continues, because attenuated psychosis syndrome is a lifelong label once given",
        "It continues, because his symptoms began more than a year ago",
        "It becomes depressive episodes with short-duration hypomania",
        "It no longer applies: he has crossed the psychosis threshold, so a Section II psychotic disorder is now evaluated and diagnosed",
        "It no longer applies, and no diagnosis is needed until 6 months have passed"
      ],
      "answer": 3,
      "why": "The proposed set requires that criteria for **any psychotic disorder have never been met** (Criterion F; p. 904). Fixed beliefs and hallucinations he can no longer doubt are at the psychotic threshold, so the attenuated label ends and the full Section II psychotic disorder that fits is diagnosed. Among people with attenuated psychosis syndrome who progress, about **73%** develop a schizophrenia spectrum disorder and **11%** an affective psychosis (p. 905). The 3-year risk of transition is **up to 22%**, highest in the first 2 years (p. 905).",
      "whyNot": [
        "Criterion F makes it impossible once any psychotic disorder has been met (p. 904).",
        "The time rule (began or worsened in the past year) is not the issue; Criterion F is (pp. 903–904).",
        "That proposal concerns depressive and short hypomanic periods (pp. 907–908); he has psychosis.",
        "Correct.",
        "Section II psychotic disorders have their own duration rules, and one of them (for example, schizophreniform disorder or schizophrenia, depending on the course) is diagnosed now, not deferred (app guidance)."
      ]
    },
    "discuss": [
      "How would you ask about attenuated symptoms in Filipino without suggesting a supernatural or psychotic explanation (app guidance)?",
      "Which of his features, if any, are among the predictors of transition the manual lists (p. 905)?"
    ]
  },
  {
    "id": "v25-02",
    "tag": "The same for ten years",
    "sec": "s25-aps-features",
    "dx": "attenuated-psychosis-syndrome",
    "stem": "A 26-year-old woman who sells herbal remedies in a public market in Balanga is referred after a coworker complains that she is strange. Her sister says she has been the same since her mid-teens: she believes she can sense what customers are thinking, often feels that strangers’ conversations are about her, dresses in mismatched layers, speaks in vague, roundabout phrases, has no close friends outside the family and is wary of neighbors. None of this has begun or worsened in the past several years. She has never held a belief with full conviction or heard voices, and she has no mood episode or substance use. She keeps her stall going and is not distressed about herself.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Schizotypal personality disorder",
      "Attenuated psychosis syndrome, recorded as F28",
      "Brief psychotic disorder",
      "Delusional disorder",
      "No disorder: these are culturally accepted beliefs"
    ],
    "answer": 0,
    "why": "Her odd beliefs, ideas of reference, eccentric dress and speech, lack of close friends and suspiciousness are a **long-standing, stable pattern**, which points to the Section II diagnosis of **schizotypal personality disorder**. Attenuated psychosis syndrome requires **state** psychopathology that has **begun or worsened in the past year** (Criterion C), and the manual separates it from schizotypal personality disorder on exactly this point; schizotypal personality disorder also needs a broader range of features (pp. 903–904, 906).",
    "whyNot": [
      "Correct.",
      "Nothing has begun or worsened in the past year, so Criterion C fails; the proposal is about a change in state, not a lifelong trait (pp. 904, 906).",
      "There have never been psychotic-level symptoms (p. 906).",
      "She has never held a belief with full conviction (app reading of the stem).",
      "Culture matters, and the manual warns that some beliefs are accepted in some settings (p. 906), but her pattern spans several domains and draws complaints from others; selling remedies does not explain ideas of reference and a lack of friends (app guidance)."
    ],
    "discuss": [
      "What questions separate a culturally shared belief from an idiosyncratic one in a Bataan market community (app guidance)?",
      "Why does the manual describe attenuated psychosis syndrome as a state rather than a trait (p. 904)?"
    ]
  },
  {
    "id": "v25-03",
    "tag": "Nine days after the funeral",
    "sec": "s25-aps-features",
    "dx": "attenuated-psychosis-syndrome",
    "stem": "A 23-year-old call-center agent in Clark is brought in by his roommates two days after his father’s sudden death. For those two days he has been certain that coworkers planted cameras to film him, has heard a clear voice commenting on his actions, and his speech jumps between topics so that he cannot be followed. He uses no substances and has no medical illness. He is admitted, and by day 9 after onset he is fully back to his usual self, with no symptoms at all. He had no unusual experiences before this.",
    "q": "Which diagnosis fits best after recovery?",
    "choices": [
      "Attenuated psychosis syndrome, because the symptoms were brief",
      "Attenuated psychosis syndrome, because insight returned",
      "Adjustment disorder",
      "Schizotypal personality disorder",
      "Brief psychotic disorder, with marked stressor"
    ],
    "answer": 4,
    "why": "His delusion, hallucination and disorganized speech were at **full psychotic intensity**, lasted more than a day and less than a month, and resolved completely after a major stressor: that is the Section II diagnosis of **brief psychotic disorder, with marked stressor** (Chapter 2). The manual notes that early attenuated symptoms can resemble brief psychotic disorder, but in attenuated psychosis syndrome the symptoms **never cross the psychosis threshold** (p. 906), and once any psychotic disorder has been met the proposal is ruled out (Criterion F; p. 904).",
    "whyNot": [
      "Brevity is not the test; the symptoms were psychotic in intensity, which excludes the proposal (pp. 904, 906).",
      "Insight returned after the episode, but during it he was certain and could not be reoriented; Criterion F now excludes attenuated psychosis syndrome (p. 904).",
      "Psychotic symptoms after a stressor are classified with the psychotic disorders, not as adjustment disorder (Chapter 2; app guidance).",
      "There is no stable lifelong pattern; he had no unusual experiences before (p. 906).",
      "Correct."
    ],
    "discuss": [
      "What follow-up would you arrange after a single brief psychotic episode (app guidance)?",
      "How does grief shape the content of psychotic symptoms in Filipino families (outside the DSM)?"
    ]
  },
  {
    "id": "v25-04",
    "tag": "Three days of energy, twice",
    "sec": "s25-sdh-criteria",
    "dx": "short-duration-hypomania",
    "stem": "A 29-year-old public school teacher in Limay had a major depressive episode last year that lasted 3 months and kept her from work for 4 weeks. On two separate occasions in the past 3 years, both while she was not depressed, she had exactly 3 days of feeling unusually cheerful and energetic, sleeping 3 hours and feeling rested, talking much more than usual, starting several lesson projects at once and buying gadgets she did not need. Her coworkers noticed the change both times. She was never hospitalized, never psychotic, kept working, and was taking no medication or substances. She has never had such a period last 4 days or more.",
    "q": "Which formulation fits?",
    "choices": [
      "Bipolar II disorder",
      "Matches the proposed criteria for depressive episodes with short-duration hypomania; record as other specified bipolar and related disorder (F31.89), short-duration hypomanic episodes and major depressive episodes",
      "Cyclothymic disorder",
      "Major depressive disorder with mixed features",
      "Major depressive disorder only, since the high periods were short"
    ],
    "answer": 1,
    "why": "She has **at least one major depressive episode** and **at least two** periods of full hypomanic symptoms (elevated mood with increased energy plus at least three B symptoms, a visible change, no marked impairment or hospitalization) lasting **at least 2 but fewer than 4 days** (pp. 907–908). That matches the proposed set. Since it is not an official diagnosis (p. 903), Chapter 3’s **other specified bipolar and related disorder, F31.89**, which lists short-duration hypomanic episodes with major depressive episodes as an example, carries the code (app guidance on the route).",
    "whyNot": [
      "Bipolar II needs a hypomanic episode of at least 4 consecutive days; hers lasted 3 (p. 910).",
      "Correct.",
      "A lifetime major depressive episode rules out cyclothymic disorder (p. 910).",
      "Mixed features means hypomanic symptoms during the depressive episode; hers came at different times (p. 910).",
      "Two or more lifetime short hypomanic periods move the picture out of major depressive disorder (p. 910)."
    ],
    "then": {
      "q": "Eight months later she has 4 consecutive days of the same symptoms, again without psychosis, hospitalization or marked impairment, and not caused by a substance or medication. Two years after that she has another period of only 2 days. What is her diagnosis at that later visit?",
      "choices": [
        "Bipolar II disorder, which remains her diagnosis whatever the length of later hypomanic periods",
        "Depressive episodes with short-duration hypomania again, because the latest period lasted only 2 days",
        "Bipolar I disorder",
        "Cyclothymic disorder",
        "Other specified bipolar and related disorder, because the episodes vary in length"
      ],
      "answer": 0,
      "why": "Once a full hypomanic episode of **4 days or more** has occurred in someone with lifetime major depressive episodes, the diagnosis **becomes and stays bipolar II disorder**, regardless of how long future hypomanic periods last (pp. 909–910).",
      "whyNot": [
        "Correct.",
        "The manual says the diagnosis does not go back once a 4-day hypomania has happened (p. 910).",
        "Bipolar I needs a manic episode (at least a week, or marked impairment, hospitalization or psychosis); none occurred (p. 910).",
        "A major depressive episode excludes cyclothymic disorder (p. 910).",
        "A residual category is not used when full criteria for a named disorder (bipolar II) are met (app guidance)."
      ]
    },
    "discuss": [
      "The manual reports a family history of bipolar disorder 3–4 times more often in this group than in major depressive disorder (p. 909). How would that change your history taking?",
      "What would you tell her about antidepressant use while she carries the F31.89 label (outside the DSM)?"
    ]
  },
  {
    "id": "v25-05",
    "tag": "Racing thoughts in the middle of the low",
    "sec": "s25-sdh-features",
    "dx": "short-duration-hypomania",
    "stem": "A 41-year-old seaman’s wife in Mariveles has a 5-week major depressive episode with low mood, poor sleep, guilt and hopelessness. During this same episode, on most days, she also has racing thoughts, talks rapidly and feels driven to reorganize the house. She has never had a period of elevated or irritable mood with increased energy outside her depressive episodes; her family confirms this. She uses no substances and takes no medication.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Depressive episodes with short-duration hypomania, recorded as F31.89",
      "Bipolar II disorder",
      "Cyclothymic disorder",
      "Major depressive disorder, with mixed features",
      "Bipolar I disorder, current episode depressed"
    ],
    "answer": 3,
    "why": "Her hypomanic symptoms occur **at the same time as** the major depressive episode. The manual separates the two pictures this way: in **major depressive disorder with mixed features** the hypomanic features happen during the depressive episode, whereas in the short-duration hypomania proposal the subthreshold hypomania and the full depression occur **at different times** (p. 910). With no separate high periods, the Section II diagnosis is major depressive disorder with the mixed features specifier.",
    "whyNot": [
      "The proposal needs at least two separate short hypomanic periods (pp. 908, 910); she has none outside depression.",
      "Bipolar II needs a hypomanic episode of 4 days or more (p. 910).",
      "A major depressive episode excludes cyclothymic disorder (p. 910).",
      "Correct.",
      "There is no manic episode (p. 910)."
    ],
    "discuss": [
      "Which questions draw out the timing of hypomanic symptoms relative to depressive episodes (app guidance)?",
      "Why might people in this group resemble bipolar disorder more than major depression in course and family history (p. 909)?"
    ]
  },
  {
    "id": "v25-06",
    "tag": "Three days, then the ward",
    "sec": "s25-sdh-features",
    "dx": "short-duration-hypomania",
    "stem": "A 33-year-old jeepney dispatcher in Dinalupihan has had two major depressive episodes. Last month, over 3 days, he became elated, slept 2 hours a night, talked without stopping and announced that he had been chosen by God to lead the nation; he held this belief with full conviction. His family brought him to the provincial hospital and he was admitted. He was well again within a week. He uses no substances and was on no antidepressant at the time. He has had no other high periods.",
    "q": "What is the diagnosis?",
    "choices": [
      "Depressive episodes with short-duration hypomania, because the high period lasted only 3 days",
      "Bipolar II disorder",
      "Bipolar I disorder",
      "Brief psychotic disorder",
      "Major depressive disorder with mixed features"
    ],
    "answer": 2,
    "why": "Any mood-elevated episode that has **psychotic features** or **needs hospitalization** is, by definition, a **manic** episode, **whatever its duration** (pp. 908, 910). One manic episode gives the Section II diagnosis of **bipolar I disorder**. The short-duration proposal is limited to periods that do not cause marked impairment or require admission (Criterion E of the hypomanic periods; p. 908).",
    "whyNot": [
      "Short duration does not matter once there is psychosis or admission; the episode counts as manic (p. 910).",
      "A hypomanic episode cannot include psychosis or hospitalization (pp. 908, 910).",
      "Correct.",
      "The grandiose delusion arose within an episode of elevated mood, energy and reduced sleep; a mood episode with psychotic features is classified with the mood disorders (p. 910; app guidance).",
      "The elevated period occurred apart from his depressive episodes, and it reached mania (p. 910)."
    ],
    "discuss": [
      "Why does the manual let psychosis or admission override the 1-week duration rule for mania (p. 910)?",
      "How would you explain the change from a depressive diagnosis to bipolar I disorder to his family (app guidance)?"
    ]
  },
  {
    "id": "v25-07",
    "tag": "Coffee all shift, and she can’t stop",
    "sec": "s25-cud-criteria",
    "dx": "caffeine-use-disorder",
    "stem": "A 30-year-old BPO team leader in San Fernando, Pampanga, drinks three cans of energy drink and four sachets of 3-in-1 coffee across each night shift. Over the past year she has tried at least five times to cut down and each time went back within days. Her internist told her that her palpitations and acid reflux are made worse by caffeine; she knows this but continues. On rest days, if she skips caffeine, she gets a pounding headache, sleepiness and trouble concentrating, and she drinks coffee to make them go away. She now needs more to feel alert. She feels ashamed and wants help. She uses no other stimulants and her thyroid tests are normal.",
    "q": "Which statement best describes this presentation?",
    "choices": [
      "It matches the proposed Section III criteria for caffeine use disorder; there is no caffeine use disorder in Section II, so the chart uses a Section II caffeine category (for example, unspecified caffeine-related disorder, F15.99) and notes the pattern",
      "Stimulant use disorder, mild, coded for caffeine",
      "It cannot match the proposal, because she has no role failure at work",
      "It matches the proposal only if she meets at least five of the nine items",
      "Generalized anxiety disorder, because caffeine causes the palpitations"
    ],
    "answer": 0,
    "why": "The proposal needs **the first three** items within 12 months: persistent desire or failed attempts to cut down, continued use despite a physical or psychological problem likely caused or worsened by caffeine, and withdrawal or use to relieve it (pp. 910–911). She has all three, plus tolerance, and is distressed. The proposed sets are not for clinical use (p. 903), and Chapter 16 has caffeine intoxication and caffeine withdrawal but **no caffeine use disorder**, so the residual **unspecified caffeine-related disorder, F15.99**, is one honest route (app guidance).",
    "whyNot": [
      "Correct.",
      "Chapter 16 gives caffeine its own section, with intoxication and withdrawal but no use disorder, so caffeine is not coded as a stimulant use disorder (app guidance). The manual lists other stimulant use disorder as a differential, not a home for caffeine (p. 913).",
      "Role failure is item 5, not one of the three required items (pp. 910–911).",
      "There is no count of five; the rule is that the first three must all be present (p. 910).",
      "Physical symptoms with a clear caffeine link do not make an anxiety disorder; chronic heavy use can mimic generalized anxiety disorder (p. 913)."
    ],
    "then": {
      "q": "She stops all caffeine abruptly on a Monday. By Tuesday morning she has a severe headache, marked fatigue, irritability and poor concentration, and she calls in sick because she cannot work. What Section II diagnosis now applies?",
      "choices": [
        "Caffeine use disorder, severe",
        "Caffeine intoxication",
        "Caffeine withdrawal",
        "Major depressive episode",
        "None: withdrawal symptoms are expected and are not diagnosed"
      ],
      "answer": 2,
      "why": "After long daily use, stopping abruptly and developing headache, fatigue, low or irritable mood and poor concentration within a day, with clear impairment, fits the Section II diagnosis of **caffeine withdrawal (F15.93)**. The Section III text sends readers to that Chapter 16 description for the withdrawal item (p. 911), and notes that habitual users can develop a well-defined withdrawal syndrome on stopping (p. 911).",
      "whyNot": [
        "There is no official caffeine use disorder, and the proposal has no severity specifier (pp. 903, 910–911).",
        "Intoxication follows recent heavy intake; she has stopped (Chapter 16; app guidance).",
        "Correct.",
        "One day of symptoms after stopping caffeine is explained by withdrawal (Chapter 16; app guidance).",
        "When withdrawal causes clinically significant distress or impairment, caffeine withdrawal is an official diagnosis (Chapter 16; p. 911)."
      ]
    },
    "discuss": [
      "How would you plan a gradual taper that fits her night-shift schedule (outside the DSM)?",
      "Why did the work group set a higher threshold for caffeine than for other substances (p. 911)?"
    ]
  },
  {
    "id": "v25-08",
    "tag": "Five cups and no complaints",
    "sec": "s25-cud-features",
    "dx": "caffeine-use-disorder",
    "stem": "A 52-year-old barangay captain in Hermosa asks at a check-up whether he is “addicted to coffee.” He drinks five mugs of brewed coffee a day and says one cup no longer wakes him up as it once did. If he misses his morning coffee on a busy Sunday he gets a mild headache by noon, which he does not mind. He has never wanted to cut down or tried to, has no health problem that he or his doctor links to coffee, and is not distressed by his habit. His work and family life are unaffected.",
    "q": "How should the resident answer?",
    "choices": [
      "His pattern matches the proposed criteria for caffeine use disorder because he has tolerance and withdrawal",
      "Record caffeine withdrawal, F15.93",
      "Record unspecified caffeine-related disorder, F15.99",
      "His pattern matches the proposal if a family member objects to the cost",
      "His pattern does not match the proposal: he lacks the first two required items, and tolerance plus mild withdrawal alone are common in heavy daily use and not enough"
    ],
    "answer": 4,
    "why": "The proposal requires **the first three** items: desire or failed efforts to cut down, use despite a caffeine-related problem, and withdrawal (p. 910). He has only withdrawal (and tolerance). The manual warns that regular heavy use producing **tolerance and withdrawal is common and is not enough** for a diagnosis (p. 913), and the high threshold exists **to prevent overdiagnosis** given how common nonproblematic daily use is (p. 911).",
    "whyNot": [
      "Tolerance and withdrawal alone are not sufficient (p. 913).",
      "His headache is mild and he does not mind it; without clinically significant distress or impairment, caffeine withdrawal is not diagnosed (Chapter 16; app guidance).",
      "There is no disorder to record (p. 913).",
      "An interpersonal problem is item 6, which does not replace the first two items (pp. 910–911).",
      "Correct."
    ],
    "discuss": [
      "Barako and 3-in-1 coffee differ a lot in caffeine per cup. Why does the manual ask you to consider preparation when estimating intake (p. 912)?",
      "What advice, if any, would you give him (outside the DSM)?"
    ]
  },
  {
    "id": "v25-09",
    "tag": "Palpitations at the review center",
    "sec": "s25-cud-features",
    "dx": "caffeine-use-disorder",
    "stem": "A 22-year-old nursing board reviewee in Manila has had four sudden episodes of pounding heartbeat, tremor, sweating and fear that she was dying, each peaking within minutes. Each episode came within an hour of drinking two or more large energy drinks during late-night study; she has had none on days without them. Between episodes she does not worry about having another and has not changed her routine. ECG and thyroid tests are normal. She uses no other substances.",
    "q": "What should the resident consider first?",
    "choices": [
      "Panic disorder",
      "That acute caffeine intake can produce attacks that look like panic attacks; a Section II caffeine-related diagnosis (such as caffeine intoxication or caffeine-induced anxiety disorder) fits better than panic disorder",
      "Caffeine use disorder, because energy drinks are involved",
      "Generalized anxiety disorder",
      "Internet gaming disorder, because she studies online at night"
    ],
    "answer": 1,
    "why": "Every attack followed heavy energy-drink intake and none occurred without it. The manual notes that **acute caffeine use can produce and mimic panic attacks**, while chronic heavy use can mimic generalized anxiety disorder (p. 913). Panic disorder needs recurrent **unexpected** attacks followed by a month of worry or behavior change (Chapter 5); hers are tied to a substance and she has no persistent worry. A caffeine-related Section II diagnosis is considered first (Chapter 16; app guidance).",
    "whyNot": [
      "Her attacks are cued by caffeine and she lacks the month of worry or avoidance that panic disorder needs (Chapter 5; p. 913).",
      "Correct.",
      "Nothing in the stem shows failed efforts to cut down, use despite known harm, or withdrawal, the three required items (p. 910); and the proposal is not an official diagnosis (p. 903).",
      "She has no chronic worry; the attacks are acute and caffeine-linked (p. 913).",
      "She studies; she does not game, and the gaming proposal excludes non-gaming use (p. 914)."
    ],
    "then": {
      "q": "She stops all caffeine. Over the next 2 months she has three more sudden attacks with no caffeine, alcohol or other substance, including one that woke her from sleep, and for the past month she has avoided the review center for fear of another attack. What is the diagnosis now?",
      "choices": [
        "Caffeine-induced anxiety disorder, because the attacks began with caffeine",
        "Caffeine withdrawal",
        "Caffeine use disorder in early remission",
        "Agoraphobia only",
        "Panic disorder"
      ],
      "answer": 4,
      "why": "Unexpected attacks that continue **without** the substance, followed by at least a month of avoidance of situations because of fear of further attacks, meet the Section II criteria for **panic disorder** (Chapter 5). A substance-induced anxiety diagnosis no longer explains attacks that persist well after the substance has stopped (Chapter 16; app guidance).",
      "whyNot": [
        "Symptoms that persist without caffeine for 2 months are no longer explained by caffeine (Chapter 16; app guidance).",
        "Withdrawal begins within about a day of stopping and does not take the form of recurrent panic attacks months later (Chapter 16; app guidance).",
        "She never matched the proposal, and it has no remission specifier (pp. 910–911).",
        "Her avoidance follows from the attacks; panic disorder explains the whole picture (Chapter 5; app guidance).",
        "Correct."
      ]
    },
    "discuss": [
      "How much caffeine is in the energy drinks sold in Philippine convenience stores, and how would you ask about it (outside the DSM)?",
      "Why does the manual list anxiety disorders in the differential of caffeine use disorder (p. 913)?"
    ]
  },
  {
    "id": "v25-10",
    "tag": "The guild leader who lost his scholarship",
    "sec": "s25-igd-criteria",
    "dx": "internet-gaming-disorder",
    "stem": "A 20-year-old IT student in Malolos leads a guild in an online role-playing game. Over the past 12 months he has thought about the game during every class and planned his next raid all day; he has needed longer and longer sessions to feel satisfied and now plays about 10 hours a day; he has lied to his parents about how much he plays; he logs in to escape feeling like a failure; and he lost his scholarship after failing three subjects. When his laptop broke for a week he was bored but not irritable or sad, he has never tried to cut down, he still plays basketball on weekends, and he says he would stop if his grades required it. He does not gamble and uses no substances.",
    "q": "Which statement is correct?",
    "choices": [
      "He does not match the proposal, because withdrawal is required",
      "He matches the proposal only if he also has a comorbid depressive disorder",
      "He meets the official DSM-5-TR criteria for Internet gaming disorder, which should be coded",
      "He endorses five of the nine proposed items in 12 months, which matches the proposed Section III criteria for Internet gaming disorder; it is not an official DSM-5-TR diagnosis",
      "He does not match, because playing with a team is a social use of the Internet and is excluded"
    ],
    "answer": 3,
    "why": "He endorses **preoccupation (1), tolerance (3), deceiving family (7), gaming to escape a negative mood (8)** and **losing an educational opportunity (9)**: five items in a 12-month period, which is the proposed threshold (pp. 913–914). The manual calls five of nine a deliberately **conservative** cut-off (p. 915). The condition remains a Section III proposal (p. 903); it is included in ICD-11 (p. 914), and ICD-11’s gaming disorder sits outside the DSM.",
    "whyNot": [
      "No single item is mandatory; any five of the nine count (p. 913).",
      "Comorbidity is not a criterion (p. 916).",
      "It is a Section III proposal, not an official diagnosis (p. 903).",
      "Correct.",
      "Multiplayer team play is typical of the condition; the exclusion is for business or professional use, other recreational or social Internet use, and sexual sites (pp. 914–915)."
    ],
    "then": {
      "q": "His parents ask how severe the problem is. On what does the proposed severity rating depend?",
      "choices": [
        "The exact number of hours played per week",
        "The degree of disruption of normal activities, including lost relationships and school or career opportunities",
        "Whether the game is played online or offline",
        "The number of criteria endorsed, with five mild and nine severe",
        "Whether he has comorbid ADHD"
      ],
      "answer": 1,
      "why": "The proposal grades severity as **mild, moderate or severe by the degree of disruption** of normal activities; severe cases show more time on the computer and greater loss of relationships or school and career opportunities (p. 914). Losing a scholarship is a substantial disruption (app reading).",
      "whyNot": [
        "Hours are part of the picture, but the manual ties severity to disruption, not to an hour count (p. 914).",
        "Correct.",
        "Offline games are less researched, but this is not how severity is graded (pp. 914–915).",
        "The manual does not set severity by item count for this proposal (p. 914).",
        "Comorbidity is not part of the severity rating (pp. 914, 916)."
      ]
    },
    "discuss": [
      "If a code must be entered, why is other specified mental disorder (F99) the honest residual, and what would you write as the reason (app guidance)?",
      "Sleep may mediate the link between problematic Internet use and suicidal thoughts (p. 916). How would you ask about it?"
    ]
  },
  {
    "id": "v25-11",
    "tag": "“Games” on his phone",
    "sec": "s25-igd-features",
    "dx": "internet-gaming-disorder",
    "stem": "A 25-year-old tricycle driver in Orion is brought by his wife, who says he is “addicted to online games.” On further questioning, the “games” are online slot and card apps where he bets real money, daily, for the past year. He needs larger bets to feel the same excitement, has tried to stop several times, becomes restless when he cannot play, borrows from relatives to win back his losses and has lied about the money. He does not play any video game that lacks wagering.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Gambling disorder",
      "Matches the proposed criteria for Internet gaming disorder; record as F99",
      "Internet gaming disorder plus gambling disorder",
      "No diagnosis, because his betting is done on a phone",
      "Unspecified impulse-control disorder"
    ],
    "answer": 0,
    "why": "The gaming proposal is limited to **nongambling** Internet games, and the manual states that **Internet gambling belongs to gambling disorder** (pp. 913–914, 916). His betting with escalating stakes, failed attempts to stop, restlessness, chasing losses, borrowing and lying fit the Section II diagnosis of **gambling disorder** (Chapter 16). Asking what the “game” involves, and whether money is staked, decides the route (app guidance).",
    "whyNot": [
      "Correct.",
      "Gambling is expressly excluded from the gaming proposal (pp. 913–914).",
      "He plays no nongambling games, so there is nothing for the gaming proposal to describe (p. 914).",
      "The device does not matter; online gambling can qualify for gambling disorder (p. 916).",
      "Gambling disorder is the named Section II diagnosis for this pattern (Chapter 16; app guidance)."
    ],
    "discuss": [
      "How would you ask a family about online betting without shaming the patient (app guidance)?",
      "Gambling disorder is the only non-substance disorder in Section II’s addiction chapter (p. 914). What evidence would gaming need to join it?"
    ]
  },
  {
    "id": "v25-12",
    "tag": "Ten hours a day, on contract",
    "sec": "s25-igd-criteria",
    "dx": "internet-gaming-disorder",
    "stem": "A 23-year-old man in Pasig is a salaried player on a professional esports team. Under his contract he trains on a competitive online game about 10 hours a day, 6 days a week, alongside his teammates and coach. His mother worries because he “games all day.” He sleeps 7 hours, eats regularly, sees his girlfriend on his day off, has no wish to cut down, does not hide his schedule, and is not distressed. Outside training he rarely plays. He does not gamble.",
    "q": "Which statement is most accurate?",
    "choices": [
      "His hours alone match the proposed criteria, because the manual describes 8–10 hours a day",
      "He matches the proposal because his mother is concerned",
      "He does not match the proposal: gaming that is required for his job falls under the exclusion for business or professional use, and he endorses none of the nine items",
      "He matches the proposal at mild severity",
      "Record other specified mental disorder (F99), Internet gaming disorder"
    ],
    "answer": 2,
    "why": "The proposal excludes Internet use for **required activities in a business or profession** (p. 914); his play is his paid work (app reading of the exclusion). He also endorses **none** of the nine items: no preoccupation beyond work, no withdrawal, no failed control, no deception, no loss of interests, no harm to relationships or school, and no distress, whereas the proposal needs **five or more** with clinically significant impairment or distress (pp. 913–914). Long hours are typical of affected people (p. 915) but do not make the diagnosis on their own.",
    "whyNot": [
      "The 8–10 hours a day figure describes affected people; it is not a criterion (pp. 913–915).",
      "Concern from others is not one of the items (pp. 913–914).",
      "Correct.",
      "Severity is rated only once the proposal is matched (p. 914).",
      "There is no disorder here to record (pp. 913–914; app guidance)."
    ],
    "discuss": [
      "What would make you reconsider: which changes in his life would turn professional play into a problem (app guidance)?",
      "Why does the manual exclude social media and pornography from the gaming proposal (p. 916)?"
    ]
  },
  {
    "id": "v25-13",
    "tag": "Lola’s grandson",
    "sec": "s25-ndpae-criteria",
    "dx": "nd-pae",
    "stem": "A 10-year-old boy in Pilar has been raised since infancy by his grandmother, who gives him stable, attentive care. His mother told the municipal social worker, as recorded in his file, that she drank three to four glasses of gin most Saturdays throughout her pregnancy. Since preschool he has forgotten lessons learned the day before and repeats the same mistakes despite correction; he has frequent angry outbursts and fast mood shifts; he is overly friendly with strangers and misses social cues; and he cannot manage a daily routine such as bathing and preparing his school bag without step-by-step help. His full-scale IQ is 86. He is failing Grade 4. He has no facial features of fetal alcohol syndrome, no history of head injury, no postnatal substance exposure, and a genetics consult found no syndrome.",
    "q": "Which formulation is best?",
    "choices": [
      "The proposal cannot be considered without the facial features of fetal alcohol syndrome",
      "Intellectual developmental disorder, mild",
      "Defer the diagnosis until adolescence, when executive deficits are easier to test",
      "Specific learning disorder only",
      "Matches the proposed criteria for neurobehavioral disorder associated with prenatal alcohol exposure (ND-PAE); record as other specified neurodevelopmental disorder (F88), with ND-PAE as the reason"
    ],
    "answer": 4,
    "why": "Exposure is **more than minimal**: more than 2 drinks on one occasion counts (p. 918), and the mother’s own report confirms it (A; p. 916). He shows a **memory** impairment (B4), **mood and behavioral regulation** problems (C1), and adaptive deficits in **social communication** (D2) and **daily living** (D3), with one of the two being D1 or D2 as required (p. 917). Onset was in childhood (E), there is impairment (F), and the stem rules out the alternatives in G (p. 917). ND-PAE can be diagnosed **with or without** the physical features of fetal alcohol syndrome (p. 917). Since the proposal is not official (p. 903), Chapter 1’s **other specified neurodevelopmental disorder, F88**, which gives ND-PAE as its example, carries the code (app guidance on the route).",
    "whyNot": [
      "The manual says the proposal applies both with and without the physical effects of prenatal alcohol (p. 917).",
      "An IQ of 86 does not support intellectual developmental disorder; the neurocognitive item he meets is memory (pp. 916–917).",
      "Deferral is advised for children 3 years and younger (p. 918); he is 10, and school age is when the diagnosis is most often made (pp. 918–919).",
      "Learning problems are one possible B item, but his picture also includes self-regulation and adaptive deficits linked to documented exposure (pp. 916–917).",
      "Correct."
    ],
    "discuss": [
      "How would you ask a mother about drinking in pregnancy without blame, in a barangay health center (app guidance)?",
      "The manual lists suicide as a high-risk outcome in late adolescence for people with FASD (p. 919). What would you plan for his teenage years?"
    ]
  },
  {
    "id": "v25-14",
    "tag": "Is it just ADHD?",
    "sec": "s25-ndpae-features",
    "dx": "nd-pae",
    "stem": "An 8-year-old girl in Bagac was born to a mother whose hospital record documents heavy daily drinking through pregnancy. She meets full criteria for ADHD, combined presentation, with symptoms in school and at home since age 5. Testing also shows academic achievement well below her intellectual level (IQ 88) in reading and arithmetic. Her speech developed late and she still struggles to understand spoken instructions, and her fine motor skills are poor. Her difficulties began in early childhood and are causing school failure. She has no genetic syndrome, head injury or postnatal substance exposure, and her care has been consistent.",
    "q": "How should her problems be formulated?",
    "choices": [
      "ADHD alone, because ADHD explains the attention problems",
      "ADHD as a co-occurring Section II diagnosis, plus a presentation matching the proposed ND-PAE criteria, recorded as other specified neurodevelopmental disorder (F88)",
      "ND-PAE alone, because ADHD cannot be diagnosed when prenatal alcohol exposure is known",
      "Intellectual developmental disorder",
      "Defer all diagnoses until age 12"
    ],
    "answer": 1,
    "why": "Exposure is documented in records (A; pp. 916, 918). She has a **learning** impairment (B3), an **attention** deficit and impulse problems (C2–C3), and adaptive deficits in **communication** (D1) and **motor skills** (D4), with childhood onset and impairment (pp. 916–917). ADHD is the **most common co-occurring diagnosis** in ND-PAE (p. 920), so both are named: ADHD as the Section II diagnosis, and the ND-PAE picture through F88 (app guidance on the route).",
    "whyNot": [
      "ADHD does not account for her documented exposure, learning, language and motor deficits, which the proposal gathers together (pp. 916–917, 920).",
      "Correct.",
      "The manual treats ADHD as a common comorbidity, not as excluded (p. 920).",
      "Her IQ of 88 does not support intellectual developmental disorder (p. 916).",
      "Deferral applies to children 3 and younger (p. 918)."
    ],
    "then": {
      "q": "Her aunt asks whether ADHD medicine will work for her the way it works for other children. What does the manual say?",
      "choices": [
        "Response is identical, because the attention symptoms are the same",
        "Stimulants are contraindicated in ND-PAE",
        "The manual makes no comment on medication",
        "People with ND-PAE differ from those with ADHD alone in neuropsychological profile and in how they respond to medication",
        "ND-PAE responds better to medication than ADHD alone"
      ],
      "answer": 3,
      "why": "Although ADHD is the most frequent co-occurring diagnosis, studies find that people with ND-PAE have a **different neuropsychological profile** and **respond differently to medication** (p. 920). The manual does not say which way the difference runs; specific drug choices are outside the DSM.",
      "whyNot": [
        "The manual says responses differ (p. 920).",
        "The manual gives no contraindication; drug selection is outside the DSM.",
        "The comorbidity section does comment on pharmacological response (p. 920).",
        "Correct.",
        "The manual does not say response is better (p. 920)."
      ]
    },
    "discuss": [
      "Why should a diagnosis of oppositional defiant or conduct disorder be weighed carefully in a child with ND-PAE (p. 920)?",
      "Which school supports in a DepEd public school would help her most (outside the DSM)?"
    ]
  },
  {
    "id": "v25-15",
    "tag": "One glass, and a heart murmur",
    "sec": "s25-ndpae-features",
    "dx": "nd-pae",
    "stem": "A 6-year-old girl in Balanga is referred for developmental delay. She is unusually friendly with strangers, has poor visual-spatial skills and attention problems, and her pediatric cardiologist has found narrowing above the aortic valve. Her mother says she had one glass of wine at a wedding before she knew she was pregnant and drank nothing else. A clinical geneticist’s testing has just confirmed Williams syndrome.",
    "q": "Which statement is correct?",
    "choices": [
      "She matches the proposed ND-PAE criteria, because any alcohol in pregnancy counts",
      "She matches the proposal, because Williams syndrome and ND-PAE always co-occur",
      "She matches the proposal, with the genetic syndrome recorded as a specifier",
      "She does not match the proposal: exposure was not more than minimal (Criterion A), and her presentation is better explained by a genetic condition (Criterion G)",
      "She should be recorded as F88 with ND-PAE as the reason until she is older"
    ],
    "answer": 3,
    "why": "The text defines **more than minimal** exposure as more than **13 drinks a month** or more than **2 drinks on any one occasion** (p. 918); a single glass does not reach it. Criterion G also excludes presentations better explained by a **genetic condition**, and **Williams syndrome** is one of the manual’s named examples, along with Down and Cornelia de Lange syndromes (p. 917). The manual notes that a clinical geneticist may be needed to sort out these look-alikes (pp. 919–920).",
    "whyNot": [
      "Criterion A needs more than minimal exposure (pp. 916, 918).",
      "The manual lists Williams syndrome as a differential, not a companion (pp. 917, 919).",
      "There is no such specifier; G excludes the proposal when a genetic condition explains the picture (p. 917).",
      "Correct.",
      "She does not match the proposal, so there is no ND-PAE reason to record (app guidance)."
    ],
    "discuss": [
      "Which other teratogens and conditions does the manual list in this differential (pp. 917, 919–920)?",
      "Which Section II diagnoses might still apply to her, and how would you decide (app guidance)?"
    ]
  },
  {
    "id": "v25-16",
    "tag": "Four months after the pesticide",
    "sec": "s25-sbd-criteria",
    "dx": "suicidal-behavior-disorder",
    "stem": "A 36-year-old rice farmer in Abucay, treated for major depressive disorder, made a suicide attempt 4 months ago after a failed harvest: he swallowed a farm pesticide expecting to die and spent 5 days in the hospital’s intensive care unit. He has made no attempt since. He is now seen by his regular psychiatrist for routine follow-up of his recovery, with an antidepressant adjustment. He was not delirious or confused at the time of the attempt.",
    "q": "How is the attempt described in Section III terms, and what is coded today?",
    "choices": [
      "His history matches the proposed criteria for suicidal behavior disorder, current; in the chart, his depressive disorder is coded with T14.91XD (current suicidal behavior, subsequent encounter)",
      "Suicidal behavior disorder, in early remission; Z91.51 only",
      "Nonsuicidal self-injury disorder; R45.88",
      "No code, because the attempt was months ago",
      "Suicidal behavior disorder, current, entered as his principal diagnosis in place of the depressive disorder"
    ],
    "answer": 0,
    "why": "He began a self-initiated act expecting to die (Criterion A; p. 920), within 24 months, outside delirium (D), for no political or religious goal (E). It was **4 months** ago, so the **current** specifier applies (**12 months or less**; p. 920). An admission beyond the emergency department marks a **high-lethality** attempt in the manual’s specifier discussion (p. 920). The proposal is not an official diagnosis (p. 903); the note on p. 920 points to the Chapter 22 codes, which can accompany any diagnosis. Routine recovery-phase follow-up takes **T14.91XD** (printed T14.91D; the APA’s 2022 correction added the X; app guidance on phase of care).",
    "whyNot": [
      "Correct.",
      "Early remission starts 12 months after the last attempt (p. 920); it has been 4.",
      "He expected to die; NSSI requires the absence of suicidal intent (pp. 920, 923).",
      "The attempt is still part of his current clinical picture (p. 920; app guidance).",
      "The proposal is not an official diagnosis and does not replace his depressive disorder (pp. 903, 920)."
    ],
    "then": {
      "q": "He is seen again 16 months after the attempt. He has had no further suicidal behavior. Which Section III specifier would describe this history?",
      "choices": [
        "Current",
        "In full remission",
        "In sustained remission",
        "No specifier: the proposal ends at 12 months",
        "In early remission"
      ],
      "answer": 4,
      "why": "The proposal’s specifiers are **current** (no more than 12 months since the last attempt) and **in early remission** (**12–24 months**) (pp. 920–921). At 16 months he is in early remission. In the chart the attempt is recorded with **Z91.51**, history of suicidal behavior (p. 920; app guidance on when the current code gives way to the history code).",
      "whyNot": [
        "More than 12 months have passed (p. 920).",
        "The proposal has no full remission specifier (p. 920).",
        "That term belongs to the Section II substance use disorders, not to this proposal (app guidance).",
        "The window is 24 months, with early remission between 12 and 24 (p. 920).",
        "Correct."
      ]
    },
    "discuss": [
      "About 25–30% of people who attempt suicide make further attempts (p. 921). What would his safety plan include (app guidance)?",
      "Access to pesticides is a known method in low-income settings (p. 922). What means-restriction steps are realistic on a Bataan farm (outside the DSM)?"
    ]
  },
  {
    "id": "v25-17",
    "tag": "Gin first, “so I would not lose my nerve”",
    "sec": "s25-sbd-features",
    "dx": "suicidal-behavior-disorder",
    "stem": "A 44-year-old fisherman in Mariveles lost his boat in a storm. Last night he drank most of a bottle of gin “so I would not lose my nerve,” then took an overdose of his mother’s tablets, expecting to die. His son found him and brought him to the emergency department, where he needed only observation and had no lasting harm. This morning he is sober, oriented and remembers the events. The psychiatry resident who has just met him is doing the first evaluation. He has never attempted suicide before.",
    "q": "Which statement is correct?",
    "choices": [
      "The proposed suicidal behavior disorder is excluded, because he was intoxicated when he acted",
      "The proposal is excluded, because the overdose caused no lasting harm",
      "His act matches the proposed criteria for suicidal behavior disorder, current; deliberate drinking beforehand to blunt anxiety does not exclude it, and today’s chart takes T14.91XA (initial encounter)",
      "His act is nonsuicidal self-injury, because he survived",
      "His act is suicidal ideation with a preparatory act"
    ],
    "answer": 2,
    "why": "He initiated the act expecting to die (Criterion A; p. 920). The manual states that if a person **deliberately becomes intoxicated beforehand to reduce anticipatory anxiety**, the diagnosis **can still be made** (p. 921). Injury or medical severity is **not required**, and factors that shape medical outcome are **not considered** in assigning it (p. 921). The proposal is not an official diagnosis (p. 903); an emergency visit and a first evaluation by a new clinician are active treatment, so the Chapter 22 code is **T14.91XA** (printed T14.91A; APA 2022 correction; app guidance).",
    "whyNot": [
      "Exclusion applies to acts initiated during delirium or confusion; deliberate intoxication to steady oneself does not exclude (pp. 920–921).",
      "An attempt need not cause injury (p. 921).",
      "Correct.",
      "Survival does not define intent; he expected to die (pp. 920, 926).",
      "He went beyond ideation and preparation: he applied the method (p. 920)."
    ],
    "discuss": [
      "Which risk markers named in the manual are present, such as a sudden loss (p. 921)?",
      "Why does the manual call a willingness to sign a safety contract a less reliable indicator (p. 921)?"
    ]
  },
  {
    "id": "v25-18",
    "tag": "Climbing out of the window",
    "sec": "s25-sbd-features",
    "dx": "suicidal-behavior-disorder",
    "stem": "A 68-year-old retired teacher is on day 2 after hip surgery in a provincial hospital in Bataan. Since the operation his attention has fluctuated, he has been disoriented to place and time, and he has seen “men with knives” in the room. Last night he tried to climb out of the ward window to escape them and was stopped by a nurse. Two days later, when his thinking has cleared, he is upset by what happened, says he has never wanted to die, and has never had suicidal thoughts.",
    "q": "Which statement is correct?",
    "choices": [
      "His act matches the proposed criteria for suicidal behavior disorder, current; code T14.91XA",
      "His act matches the proposal, in early remission",
      "His act is nonsuicidal self-injury; code R45.88",
      "His act is excluded only because it was stopped before he was injured",
      "His act does not match the proposal: it was initiated during delirium and without any expectation of death; the Section II diagnosis is delirium"
    ],
    "answer": 4,
    "why": "The proposal excludes acts **initiated during delirium or confusion** (Criterion D; pp. 920–921), and a suicide attempt needs an **expectation of death** at the time of initiation (p. 920); he was escaping hallucinated attackers. His fluctuating attention and disorientation after surgery fit the Section II diagnosis of **delirium** (Chapter 17).",
    "whyNot": [
      "Delirium and the absence of suicidal intent both exclude the proposal (pp. 920–921).",
      "There was no suicide attempt to place on the time line (p. 920).",
      "He did not intend to injure himself for relief or any other expectation; NSSI is excluded during delirium (p. 923).",
      "Interrupted attempts can count (p. 921); the reasons here are delirium and no intent.",
      "Correct."
    ],
    "discuss": [
      "Which ward safety steps would you put in place for a patient with delirium and frightening hallucinations (outside the DSM)?",
      "How does the manual treat an act carried out solely for a political or religious goal (p. 920)?"
    ]
  },
  {
    "id": "v25-19",
    "tag": "Long sleeves in a Manila dorm",
    "sec": "s25-nssi-criteria",
    "dx": "nssi-disorder",
    "stem": "A 19-year-old college freshman living in a dormitory in Manila sees the university psychiatrist. On about 20 days in the past 8 months she has made superficial cuts on her forearms and thighs. She does it after arguments with her boyfriend, when tension builds, and says it brings relief within minutes. She thinks about cutting often, even on days she does not do it. She says she does not want to die and knows these injuries will not kill her. She hides the marks with long sleeves, is ashamed and has begun missing classes. She has no psychotic symptoms, does not use alcohol or drugs, and the cuts are not part of any religious or group practice.",
    "q": "Which formulation fits best?",
    "choices": [
      "Borderline personality disorder, because self-injury is pathognomonic of it",
      "Her pattern matches the proposed criteria for nonsuicidal self-injury disorder; the chart records current nonsuicidal self-injury, R45.88, with any Section II diagnosis she meets",
      "Suicidal behavior disorder, current",
      "No formulation, because the injuries are superficial",
      "Her pattern matches the proposal only if she has injured herself on 10 or more days"
    ],
    "answer": 1,
    "why": "She injured the surface of her body on **5 or more days in the last year**, expecting only minor harm and with no suicidal intent (A); she seeks **relief from a negative state** (B1); the acts follow **interpersonal difficulty and tension** and she has **frequent thoughts** of it (C1, C3); the behavior is not socially sanctioned (D); it causes distress and missed classes (E); and it is not confined to psychosis or intoxication (F) (p. 923). The proposal is not an official diagnosis (p. 903); the note on pp. 923–924 points to **R45.88** for current nonsuicidal self-injury.",
    "whyNot": [
      "The manual says NSSI is **not pathognomonic** of borderline personality disorder; many people with the proposal do not have it (p. 925).",
      "Correct.",
      "She has no intent to die; the stated goal is relief (pp. 920, 926).",
      "The proposal is defined by expected minor-to-moderate harm (p. 923).",
      "The threshold is 5 or more days (p. 923)."
    ],
    "then": {
      "q": "What does the manual advise as the next step in her assessment?",
      "choices": [
        "Evaluate her suicide risk, and with her consent obtain information from someone close to her about recent changes in stress and mood",
        "No suicide risk assessment is needed, because she has said she does not want to die",
        "Ask her to sign a no-harm contract and discharge her",
        "Wait until she has an attempt before assessing suicide risk",
        "Refer her for skin grafting before any psychiatric assessment"
      ],
      "answer": 0,
      "why": "Because people with NSSI **can and do attempt suicide**, the manual advises evaluating suicide risk and getting **third-party information** about recent stress and mood change (p. 925). Self-injury onset typically precedes suicide attempts by about **1–2 years**, and high frequency, use for relief from inner distress, multiple methods, early onset and self-punishment strongly predict suicidal ideation and attempts (p. 925). Consent and confidentiality for an adult student are handled under local practice (outside the DSM).",
      "whyNot": [
        "Correct.",
        "Her denial matters, but the manual still calls for a suicide risk evaluation (p. 925).",
        "The manual calls a willingness to sign a safety contract a less reliable indicator (p. 921).",
        "The manual asks for risk evaluation now, since NSSI often precedes attempts (p. 925).",
        "Nothing in the stem suggests wounds needing surgery; the psychiatric assessment comes now (app guidance)."
      ]
    },
    "discuss": [
      "How would you respond to her disclosure in a way that reduces shame (app guidance)?",
      "Contagion of self-injury in dormitories and schools is described in the manual (p. 925). What, if anything, should the university do (outside the DSM)?"
    ]
  },
  {
    "id": "v25-20",
    "tag": "Head banging since he was a toddler",
    "sec": "s25-nssi-features",
    "dx": "nssi-disorder",
    "stem": "A 7-year-old boy in Morong with moderate intellectual developmental disorder is brought by his parents. Since he was a toddler he has banged his head against the wall and bitten the back of his hand many times a day, in a rhythmic, repetitive way, more when he is bored or excited. The behavior seems driven and has no purpose that his parents or teachers can identify, and it leaves bruises and calluses. He shows social interest appropriate to his developmental level, and an autism evaluation was negative. His mother drank heavily during pregnancy.",
    "q": "Which diagnosis fits best?",
    "choices": [
      "Nonsuicidal self-injury disorder, recorded as R45.88",
      "Excoriation disorder",
      "Suicidal behavior disorder",
      "Stereotypic movement disorder, with self-injurious behavior",
      "Autism spectrum disorder"
    ],
    "answer": 3,
    "why": "Repetitive, **seemingly driven and purposeless** motor behavior such as head banging and self-biting that can injure, often linked to a neurodevelopmental, medical or environmental factor (including **intellectual developmental disorder** and **intrauterine alcohol exposure**), is the Section II diagnosis of **stereotypic movement disorder**; if the behavior meets those criteria, it is diagnosed **instead of** the NSSI proposal (p. 926). The proposal also excludes repetitive stereotypies in neurodevelopmental disorders (Criterion F; p. 923).",
    "whyNot": [
      "The NSSI proposal excludes stereotypies in people with neurodevelopmental disorders (pp. 923, 926).",
      "Excoriation disorder involves picking at skin, usually a perceived blemish on the face or scalp (p. 926).",
      "There is no attempt and no intent to die (p. 920).",
      "Correct.",
      "An autism evaluation was negative and his social interest fits his developmental level (app reading of the stem)."
    ],
    "discuss": [
      "Which other conditions does the NSSI differential name that confine self-injury to one behavior (p. 926)?",
      "How would you protect him from injury while assessment continues (outside the DSM)?"
    ]
  },
  {
    "id": "v25-21",
    "tag": "Three days, and she wants to stop",
    "sec": "s25-nssi-criteria",
    "dx": "nssi-disorder",
    "stem": "A 15-year-old Grade 9 student in Bagac tells the school guidance counselor, and later a resident at the rural health unit, that on 3 days in the past year, most recently 2 weeks ago, she scratched her arm until it bled to calm herself after fights at home. She says she has never wanted to die. She found it painful and upsetting and says she does not want to do it again. She has no other self-injury, no psychotic symptoms and no substance use.",
    "q": "Which statement is correct?",
    "choices": [
      "Her pattern does not match the proposed NSSI disorder, which needs 5 or more days in the past year; current nonsuicidal self-injury (R45.88) can still be recorded, and her risk and home stress are still assessed",
      "Her pattern matches the proposed NSSI disorder, because she sought relief",
      "Nothing can be recorded, because no disorder is present",
      "Suicidal behavior disorder, because blood was drawn",
      "Borderline personality disorder"
    ],
    "answer": 0,
    "why": "The proposal requires self-injury on **5 or more days in the last year** (p. 923); she reports 3. The note on pp. 923–924 explains that the Chapter 22 codes **can be used with any diagnosis or with none**, so recent self-injury can be recorded as **R45.88** (current nonsuicidal self-injury). The manual also notes that young people may experiment with self-injury, find it painful or distressing and stop (p. 924); a risk evaluation is still advised for anyone with NSSI (p. 925).",
    "whyNot": [
      "Correct.",
      "Motive alone does not meet the frequency criterion (p. 923).",
      "The Chapter 22 codes can be recorded without a DSM diagnosis (pp. 923–924).",
      "She had no suicidal intent; bleeding does not define an attempt (pp. 920, 923).",
      "Nothing in the stem describes a pervasive personality pattern, and NSSI is not pathognomonic of borderline personality disorder (p. 925)."
    ],
    "discuss": [
      "Which questions about the fights at home would you ask, and when would child protection come in (outside the DSM)?",
      "What would make you re-evaluate her in 6 months (app guidance)?"
    ]
  },
  {
    "id": "v25-22",
    "tag": "The chart audit",
    "sec": "s25-recording",
    "dx": "nd-pae",
    "stem": "During a residency chart audit, five discharge diagnosis entries are pulled from five different patients. In each case the history in the chart matches the Section III proposed criteria for the condition named in the entry, and each patient has any Section II diagnoses already listed separately where they apply.",
    "q": "Which entry follows DSM-5-TR’s rules for these conditions?",
    "choices": [
      "“Caffeine use disorder, moderate”",
      "“F88 Other specified neurodevelopmental disorder (neurobehavioral disorder associated with prenatal alcohol exposure)”",
      "“F63.0 Internet gaming disorder”",
      "“Suicidal behavior disorder, current” entered in place of the patient’s major depressive disorder",
      "“F20.9 Attenuated psychosis syndrome”"
    ],
    "answer": 1,
    "why": "The Section III sets are **for research and not for clinical use**; only Section II diagnoses are official (p. 903). The chart therefore names a Section II category and gives the Section III condition as the reason. Chapter 1 lists ND-PAE as an example for **other specified neurodevelopmental disorder, F88** (app guidance on the route). The other conditions are recorded through **F28** (attenuated psychosis), **F31.89** (short-duration hypomania), a Section II caffeine diagnosis (**F15.93**, **F15.920** or **F15.99**), **F99** for gaming if a code is needed, and the Chapter 22 codes **T14.91XA/XD, Z91.51, R45.88, Z91.52** for suicidal behavior and self-injury (pp. 920, 923–924; app guidance).",
    "whyNot": [
      "There is no official caffeine use disorder, and the proposal has no severity levels (pp. 903, 910–911).",
      "Correct.",
      "F63.0 is the code for gambling disorder; the gaming proposal is distinct from gambling (pp. 913–914; app guidance).",
      "The note says the suicidal behavior codes accompany a diagnosis; they do not replace it, and the proposal is not official (pp. 903, 920).",
      "F20.9 is a schizophrenia code; attenuated psychosis syndrome requires that no psychotic disorder has been met, and its route is F28 (p. 904; app guidance)."
    ],
    "discuss": [
      "When would you choose to record no diagnosis at all and describe the presentation in the note instead (app guidance)?",
      "Why did prolonged grief disorder leave Section III while these conditions stayed (p. 903)?"
    ]
  }
]);
