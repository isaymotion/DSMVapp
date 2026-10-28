/* Chapter 25 practice drills.
   dxline:   write what goes in the chart. The seven Section III sets are proposed criteria for research and are not
             official diagnoses (p. 903), so the model answer is the Section II category or the Chapter 22 code, with a
             note that the presentation matches the proposed set. Which category to use is app guidance built on the
             manual’s own Section II examples (F28, F31.89, F88) and the Chapter 22 notes (pp. 920, 923–924). Codes checked
             against ICD-10-CM through FY2027 and the APA’s DSM-5-TR updates (no change found for the codes checked;
             confirm against the official tabular list). T14.91XA/XD include the APA’s September 2022 correction; the
             chapter prints T14.91A/D (p. 920).
   counting: decide which findings count toward one proposed criterion or rule, then whether the threshold is reached.
   Self-harm vignettes are brief and clinical. Ids are stable keys for progress. */
(function () {
  SP.add("ch25", "dxline", [
    {
      id: "w25-01", tag: "Attenuated psychosis, recorded",
      "case": "A 17-year-old Grade 12 student in Balanga is brought by her parents. For the past 5 months, two or three times a week, she has heard faint whispering at night and wondered whether classmates were talking about her online. Asked whether there could be another explanation, she says it is probably the electric fan and her own nerves, but the experiences frighten her and her grades have dropped. She has never had a fixed delusion, clear hallucinations or disorganized behavior, uses no substances, and has no depressive or bipolar episode.",
      parts: [
        { label: "Record as", options: ["Other specified schizophrenia spectrum and other psychotic disorder (attenuated psychosis syndrome)", "Brief psychotic disorder", "Schizotypal personality disorder", "Attenuated psychosis syndrome, as a stand-alone diagnosis"], answer: 0 },
        { label: "Code", options: ["F28", "F23", "F21", "F29", "No code: Section III"], answer: 0 }
      ],
      line: "**F28** Other specified schizophrenia spectrum and other psychotic disorder (attenuated psychosis syndrome)",
      why: "One attenuated symptom type is enough (A), it occurs **at least weekly** and has done so for well over a month (B), it is **new within the year** (C), it causes distress and a fall in grades (D), and no psychotic disorder has **ever** been met (F) (pp. 903–904). Doubt about the whispering can be elicited, which is what keeps it **attenuated** (p. 904). The proposed set is not for clinical use (p. 903), so the chart takes the Section II residual whose examples include this syndrome (Chapter 2, p. 138; app guidance). F23 needs frank psychotic symptoms; schizotypal PD is a **stable trait**, not a change within a year (p. 906)."
    },
    {
      id: "w25-02", tag: "Short hypomanias, twice",
      "case": "A 28-year-old teacher in Mariveles has had two major depressive episodes. On three occasions over the past 5 years she has had 2- or 3-day stretches of euphoria with little need for sleep, fast speech, racing thoughts and a burst of new projects; her husband noticed the change each time. None lasted 4 days, none involved psychotic symptoms or a hospital stay, and she kept working. She takes no medicines or drugs. She is not depressed today.",
      parts: [
        { label: "Record as", options: ["Bipolar II disorder", "Other specified bipolar and related disorder (short-duration hypomanic episodes and major depressive episodes)", "Cyclothymic disorder", "Major depressive disorder, recurrent, in full remission"], answer: 1 },
        { label: "Code", options: ["F31.81", "F31.89", "F34.0", "F33.42"], answer: 1 }
      ],
      line: "**F31.89** Other specified bipolar and related disorder (short-duration hypomanic episodes and major depressive episodes)",
      why: "A lifetime major depressive episode plus **two or more** lifetime periods that meet every hypomanic criterion except duration, lasting **at least 2 but fewer than 4** consecutive days, matches the proposed set for depressive episodes with short-duration hypomania (pp. 907–908). The set is not an official diagnosis (p. 903); Chapter 3 lists this exact picture as an example of other specified bipolar and related disorder (pp. 168–169; app guidance). Bipolar II needs a **4-day** hypomanic episode (p. 910), and a lifetime MDE rules out cyclothymic disorder (p. 910)."
    },
    {
      id: "w25-03", tag: "Then a 5-day hypomania",
      "case": "The teacher from the previous drill (two past major depressive episodes and three past hypomanic stretches of 2–3 days) returns. Four months ago she had 5 consecutive days of euphoria, 3 hours of sleep a night, pressured speech, racing thoughts and impulsive spending, noticed by her family; she kept working, had no psychotic symptoms and was not admitted. She now meets criteria for a major depressive episode of moderate severity. No substance or medication was involved.",
      parts: [
        { label: "Record as", options: ["Other specified bipolar and related disorder (short-duration hypomanic episodes)", "Bipolar II disorder, current episode depressed, moderate severity", "Bipolar I disorder, current episode depressed, moderate", "Major depressive disorder with mixed features"], answer: 1 },
        { label: "Code", options: ["F31.89", "F31.81", "F31.32", "F33.1"], answer: 1 }
      ],
      line: "**F31.81** Bipolar II disorder, current episode depressed, moderate severity",
      why: "This is a **Section II** answer. One hypomanic episode of **4 days or more** with a lifetime MDE is bipolar II, and the diagnosis **stays** bipolar II whatever the length of later or earlier short periods (pp. 909–910). The proposed short-duration set no longer applies. Bipolar I would need a manic episode: a week or more, marked impairment, hospitalization or psychotic features (p. 910). Mixed features would require hypomanic symptoms **during** the depression (p. 910)."
    },
    {
      id: "w25-04", tag: "Coffee stopped on a retreat",
      "case": "A 35-year-old bank officer drinks about five mugs of brewed coffee every working day and has never tried to cut down; she has no health problem that she or her doctor links to caffeine. At a 3-day company retreat with no coffee available, within a day she developed a pounding headache, marked fatigue, irritability and trouble concentrating, and she left a planning session early because of them. She asks whether she is “addicted.”",
      parts: [
        { label: "Record as", options: ["Caffeine withdrawal", "Caffeine use disorder (proposed criteria met)", "Caffeine intoxication", "Unspecified caffeine-related disorder"], answer: 0 },
        { label: "Code", options: ["F15.93", "F15.920", "F15.99", "F15.10"], answer: 0 }
      ],
      line: "**F15.93** Caffeine withdrawal",
      why: "Abrupt stopping after long daily use, followed by **three or more** typical withdrawal symptoms with distress or impairment, is the Section II diagnosis of caffeine withdrawal (Chapter 16, pp. 571–572). She does **not** match the proposed caffeine use disorder: it needs **all of the first three** criteria (failed efforts to cut down, use despite a caffeine-related problem, and withdrawal) within 12 months, and she has only withdrawal (pp. 910–911). Regular heavy use with withdrawal is common and is **not enough** on its own (p. 913). F15.10 is a stimulant use disorder code; caffeine has no use disorder in Section II (app note)."
    },
    {
      id: "w25-05", tag: "Energy drinks, the first three",
      "case": "A 23-year-old call-center agent in Clark drinks several energy drinks and coffees every night shift. Over the past year he has repeatedly tried and failed to cut down; he keeps drinking despite palpitations and insomnia that his physician has told him are caused by caffeine; and on days off he gets headaches and exhaustion that he relieves by drinking coffee. He is distressed about it. Today, mid-week, he is neither intoxicated nor in withdrawal, and no other mental disorder is found.",
      parts: [
        { label: "What the presentation matches", options: ["The proposed criteria for caffeine use disorder", "Caffeine intoxication", "Stimulant use disorder", "Nothing: heavy use is normal"], answer: 0 },
        { label: "What goes in the chart", options: ["F15.99 Unspecified caffeine-related disorder", "F15.93 Caffeine withdrawal", "F15.920 Caffeine intoxication", "Caffeine use disorder with its own code"], answer: 0 }
      ],
      line: "**F15.99** Unspecified caffeine-related disorder (presentation matches the Section III proposed criteria for caffeine use disorder)",
      why: "He has **all three required** criteria within 12 months: failed efforts to cut down (1), use despite a physical problem caused by caffeine (2), and withdrawal relieved by more caffeine (3) (pp. 910–911). The set is for research only (p. 903) and Section II has **no** caffeine use disorder, only intoxication, withdrawal, the induced disorders and the unspecified category (Chapter 16). With no withdrawal syndrome or intoxication today, the unspecified category is the chart’s home (app guidance). Withdrawal would be coded F15.93 if present at the visit."
    },
    {
      id: "w25-06", tag: "Gaming and ADHD",
      "case": "A 15-year-old boy in Olongapo has, for the past 14 months, played an online team battle game for most of every day at a pisonet shop. He thinks about it constantly, has dropped basketball and his friends, lies to his parents about where he goes, is irritable and tearful when he cannot play, keeps failing to cut back, and has failed three subjects. No money is wagered. A full evaluation also confirms ADHD, combined presentation: inattentive and hyperactive-impulsive symptoms since age 6, reported by his school and his parents. No other disorder is found.",
      parts: [
        { label: "Section II diagnosis to record", options: ["F90.2 ADHD, combined presentation", "F63.0 Gambling disorder", "F99 Other specified mental disorder, instead of ADHD", "None: the gaming explains everything"], answer: 0 },
        { label: "The gaming problem", options: ["Described in the formulation as matching the proposed criteria for Internet gaming disorder, without a code", "Coded as gambling disorder", "Coded with an Internet gaming disorder code", "Left out of the record"], answer: 0 }
      ],
      line: "**F90.2** Attention-deficit/hyperactivity disorder, combined presentation; gaming problem described (matches the Section III proposed criteria for Internet gaming disorder; no DSM code)",
      why: "Preoccupation, withdrawal, failed control, loss of other interests, deception and a jeopardized education are **six of nine** in 12 months; **five** are needed (pp. 913–914). No Section II category names the condition; the manual notes its inclusion in **ICD-11** (p. 914), which is outside the DSM. ADHD is a named comorbidity and is diagnosed in its own right (p. 916; Chapter 1, pp. 68–70). Use **F99** other specified mental disorder only if a code for the gaming itself is truly required, and say why (Chapter 20, p. 805; app guidance). There is no gambling, so F63.0 does not apply (p. 914)."
    },
    {
      id: "w25-07", tag: "Betting online is gambling",
      "case": "A 38-year-old OFW on leave in Pampanga has, for the past year, bet on online cockfighting and casino apps on his phone every night. He needs bigger bets to feel the thrill, becomes restless and irritable when he tries to stop, has failed to stop several times, returns the next day to win back losses, lies to his wife about the amounts, and has borrowed from relatives to cover debts. There is no other gaming. No manic episode explains the betting.",
      parts: [
        { label: "Record as", options: ["Internet gaming disorder", "Gambling disorder", "Other specified mental disorder (Internet gambling)", "Other specified impulse-control disorder"], answer: 1 },
        { label: "Code and severity", options: ["F63.0, moderate", "F63.0, mild", "F99", "No code: Section III"], answer: 0 }
      ],
      line: "**F63.0** Gambling disorder, moderate",
      why: "Gambling for money online is **not** Internet gaming disorder: the proposed set covers **nongambling** games only, and Internet gambling falls under the Section II diagnosis of **gambling disorder** (pp. 913–914, 916). He shows needing larger bets, restlessness when cutting down, failed efforts to stop, chasing losses, lying and relying on others to relieve debts: **six** criteria in 12 months, where four are needed; 6–7 criteria grade **moderate** (Chapter 16, p. 661)."
    },
    {
      id: "w25-08", tag: "Adopted boy, prenatal alcohol",
      "case": "An 8-year-old boy, adopted at age 2, is referred for school failure. Records confirm that his birth mother drank heavily throughout the pregnancy. His IQ is 84, but testing shows marked problems with planning and memory; he has daily outbursts and cannot wait his turn; his language is delayed and he is overly friendly with strangers. The problems began in early childhood. There is no head injury, genetic syndrome, other prenatal exposure or neglect since adoption, and his face shows no fetal alcohol syndrome features.",
      parts: [
        { label: "Record as", options: ["Other specified neurodevelopmental disorder (neurobehavioral disorder associated with prenatal alcohol exposure)", "Intellectual developmental disorder, mild", "Nothing, because there are no facial features", "Neurobehavioral disorder associated with prenatal alcohol exposure, as a stand-alone diagnosis"], answer: 0 },
        { label: "Code", options: ["F88", "F70", "F89", "No code: Section III"], answer: 0 }
      ],
      line: "**F88** Other specified neurodevelopmental disorder (neurobehavioral disorder associated with prenatal alcohol exposure)",
      why: "Documented heavy exposure meets A; executive and memory impairment meet B (**one of five** is enough, so an IQ above 70 does not exclude); outbursts and impulsivity meet C (**one of three**); delayed language and indiscriminate friendliness meet D (**two of four**, with communication or social communication among them); onset is in childhood (pp. 916–917). The diagnosis can be made **without** fetal alcohol syndrome features (p. 917). The set is not official (p. 903); Chapter 1 gives this condition as its other specified example (p. 99; app guidance). An IQ of 84 is well above the range for intellectual developmental disorder (Chapter 1)."
    },
    {
      id: "w25-09", tag: "Attempt in the emergency room",
      "case": "A 45-year-old farmer is brought to the provincial hospital emergency department after taking a toxic substance this morning; he told his wife the night before that the family would be better off without him, and he confirms he meant to die. He is now medically stable, alert and oriented. The psychiatrist seeing him for the first time finds a first major depressive episode, severe, without psychotic features, over the past 2 months. He has no earlier attempts.",
      parts: [
        { label: "Principal diagnosis", options: ["F32.2 Major depressive disorder, single episode, severe", "F33.2 Major depressive disorder, recurrent episode, severe", "Suicidal behavior disorder, current", "None needed beside the suicide code"], answer: 0 },
        { label: "Suicide code", options: ["T14.91A", "T14.91XA", "T14.91XD", "Z91.51", "R45.88"], answer: 1 }
      ],
      line: "**F32.2** Major depressive disorder, single episode, severe; **T14.91XA** Current suicidal behavior, initial encounter (matches the Section III proposed criteria for suicidal behavior disorder, current)",
      why: "He began a self-initiated act expecting it to end his life, within the last 24 months (A), and none of the exclusions applies; the last attempt is within 12 months, so **current** (p. 920). The proposed set has no code; the chapter’s note points to the Chapter 22 codes, which can accompany any diagnosis (p. 920). The chapter prints **T14.91A**; the APA’s correction made it **T14.91XA**, with A as the seventh character (APA coding update; labeled). The depressive disorder is diagnosed in its own right and listed first (app guidance). Safety assessment and a supervised plan come before discharge (outside the DSM)."
    },
    {
      id: "w25-10", tag: "Attempt 18 months ago",
      "case": "A 26-year-old woman attends a routine outpatient follow-up for major depressive disorder, now in full remission. She made one suicide attempt 18 months ago and was treated at the time; she has had no suicidal behavior since and reports no suicidal thoughts today. The resident wants to record the attempt.",
      parts: [
        { label: "Code for the attempt", options: ["T14.91XA", "T14.91XD", "Z91.51", "Z91.52"], answer: 2 },
        { label: "Proposed specifier the presentation matches", options: ["Current", "In early remission", "In sustained remission", "Not met: the attempt is too old"], answer: 1 }
      ],
      line: "**Z91.51** History of suicidal behavior (with the depressive disorder recorded; the presentation matches the Section III proposed criteria for suicidal behavior disorder, in early remission)",
      why: "An attempt within **24 months** meets Criterion A, and **12–24 months** since the last attempt is the proposed **in early remission** specifier (pp. 920–921). The behavior is not part of today’s presentation, so the Chapter 22 **history** code applies, Z91.51 (p. 920; Chapter 22). T14.91XA/XD are for suicidal behavior that is part of the **current** presentation; Z91.52 is history of nonsuicidal self-injury. Note that the proposed “current” (within 12 months) is not the same as the Chapter 22 “current” code (app guidance). The proposed set has no “sustained remission” specifier."
    },
    {
      id: "w25-11", tag: "Self-injury for relief",
      "case": "A 16-year-old student is referred after a teacher sees healing superficial cuts on her forearm. Over the past 7 months she has cut herself on about 15 separate days, after arguments at home, to make unbearable tension go away; the relief comes within minutes. She says she has never wanted to die and knows the cuts are not dangerous. She thinks about it most days and has withdrawn from friends. A full evaluation finds no psychotic, substance-related or other mental disorder.",
      parts: [
        { label: "Condition to code", options: ["Current nonsuicidal self-injury", "Current suicidal behavior, initial encounter", "History of nonsuicidal self-injury", "Borderline personality disorder"], answer: 0 },
        { label: "Code", options: ["R45.88", "T14.91XA", "Z91.52", "F60.3"], answer: 0 }
      ],
      line: "**R45.88** Current nonsuicidal self-injury (matches the Section III proposed criteria for nonsuicidal self-injury disorder)",
      why: "Self-injury on **5 or more days** in the last year, without suicidal intent, done for **relief** from a negative state, preceded by distress and with frequent thoughts of it, causing interference, matches the proposed set (p. 923). The chapter’s note points to **R45.88** for current self-injury and **Z91.52** for a history (pp. 923–924). Borderline PD is not implied: self-injury is **not pathognomonic** of it, and its criteria are not met here (p. 925). Suicide risk is still assessed, with collateral information (p. 925)."
    },
    {
      id: "w25-12", tag: "Hair pulling only",
      "case": "A 19-year-old college student has, for 2 years, pulled out hair from her scalp, mostly in long sessions while studying or watching videos in bed, leaving visible bald patches. She has tried many times to stop and is upset by the patches. She does not injure herself in any other way, has no wish to die, and pulls for no appearance-related reason.",
      parts: [
        { label: "Record as", options: ["Trichotillomania (hair-pulling disorder)", "Current nonsuicidal self-injury (proposed disorder met)", "Excoriation (skin-picking) disorder", "Stereotypic movement disorder, with self-injurious behavior"], answer: 0 },
        { label: "Code", options: ["F63.3", "R45.88", "L98.1", "F98.4"], answer: 0 }
      ],
      line: "**F63.3** Trichotillomania (hair-pulling disorder)",
      why: "This is a **Section II** answer. Self-injury **confined to hair pulling**, in sessions, often during relaxation or distraction, is trichotillomania, not NSSI disorder (p. 926); the proposed set also excludes behavior better explained by trichotillomania (p. 923). Recurrent pulling with hair loss, repeated attempts to stop and distress meet the Section II criteria (Chapter 6, p. 281). Picking at blemished skin would be excoriation disorder; repetitive, driven, purposeless movements would be stereotypic movement disorder (p. 926)."
    }
  ]);

  SP.add("ch25", "counting", [
    {
      id: "n25-01", tag: "APS: weekly, and within a year",
      "case": "Young people who each have attenuated (doubt-preserving) suspicious ideas or perceptual changes, with distress, no substance cause and no past psychotic disorder:",
      ask: "Mark the people who satisfy both the frequency rule (Criterion B) and the onset rule (Criterion C). Are at least three eligible?",
      items: [
        ["Twice a week for the past 6 weeks; it started 5 months ago", true, "At least weekly for the past month, and new within the year (pp. 903–904)."],
        ["Every day, but only for the past 3 weeks; it started 3 weeks ago", false, "Frequent enough, but not yet for a full **month** (B) (p. 903)."],
        ["Several times a week for 2 months; mild since age 14 (he is now 22), clearly worse over the past 4 months", true, "**Worsening** within the past year satisfies C (p. 903)."],
        ["Weekly for years, unchanged since age 15 (he is now 21)", false, "Fails C: neither new nor worse within the year; a stable pattern raises schizotypal PD instead (pp. 905–906)."],
        ["Once every 2 or 3 weeks for 6 months; it began this year", false, "Fails B: less often than **once a week** (p. 903)."],
        ["Every few days for the past 5 weeks; it began 2 months ago", true, "Weekly for more than a month, new within the year (p. 903)."]
      ],
      need: 3,
      met: true,
      why: "Criterion B is **at least once a week for the past month**; Criterion C is **began or worsened in the past year** (p. 903). In one Swiss study, a further **2.3%** had Criterion A symptoms that failed C (p. 905). A, D, E and F must also be met before the picture matches the proposed set."
    },
    {
      id: "n25-02", tag: "Irritable-only hypomania",
      "case": "A 34-year-old man with a past major depressive episode describes a 3-day period last year in which his mood was **only irritable**, never elevated or expansive, with raised energy. His wife noticed the change; he kept working; there were no psychotic symptoms and no substance use. During those days:",
      ask: "Mark the findings that count as hypomanic symptoms (Criterion B of the short-duration hypomania periods).",
      metLabel: "His mood was only irritable. Does this period reach the symptom count?",
      items: [
        ["He needed only 3 hours of sleep and felt rested", true, "Decreased need for sleep (p. 908)."],
        ["His thoughts raced", true, "Racing thoughts or flight of ideas (p. 908)."],
        ["He was easily pulled off task by trivial noises", true, "Distractibility (p. 908)."],
        ["He was snappish and short-tempered all day", false, "That is the **mood** itself (Criterion A), not an extra B symptom (p. 908)."],
        ["He felt more energetic than usual", false, "Raised energy is part of Criterion A, not one of the seven B symptoms (p. 908)."]
      ],
      need: 4,
      met: false,
      why: "B needs **three** symptoms, or **four if the mood is only irritable** (p. 908). He has three, so this period does not count toward the **two or more** lifetime periods of 2–3 days (pp. 907–908). The same rule applies to full hypomania in Chapter 3."
    },
    {
      id: "n25-03", tag: "Which periods count",
      "case": "A 27-year-old woman with a past major depressive episode lists earlier periods of high mood. Each had elevated mood plus at least three hypomanic symptoms, unless stated otherwise. None ever lasted 4 days or more, and none involved psychotic symptoms or hospitalization.",
      ask: "Mark the periods that count toward the requirement of at least two lifetime periods of short-duration hypomania.",
      metLabel: "Does she have at least two qualifying periods?",
      items: [
        ["A 3-day period that her sister noticed and found unlike her", true, "2 to fewer than 4 days, symptomatic, a change observable by others (p. 908)."],
        ["A 2-day period during which her coworkers commented on how different she was", true, "Two days is the minimum (p. 908)."],
        ["A single day of euphoria after passing the board exam", false, "Shorter than **2 days** (p. 908)."],
        ["A 3-day period while taking high-dose prednisone", false, "Excluded when caused by a medication or other treatment (Criterion F, p. 908)."],
        ["A 3-day period of feeling great that no one around her noticed and that changed nothing in how she acted", false, "Needs an unequivocal change in functioning **observable by others** (Criteria C and D, p. 908)."]
      ],
      need: 2,
      met: true,
      why: "The set needs a lifetime MDE plus **at least two** periods of **2 to fewer than 4 consecutive days** that otherwise meet hypomanic criteria (pp. 907–908). One period of 4 days or more would make the diagnosis bipolar II instead (p. 910)."
    },
    {
      id: "n25-04", tag: "Caffeine: the first three",
      "case": "A 40-year-old IT manager has, over the past 12 months, drunk more coffee than he planned most days, needed far more to feel any effect, craved it every morning, spent much of the day getting and drinking it, failed every attempt to cut down, and had headaches and fatigue whenever he skipped it. He reports no physical or psychological problem that he or his doctor links to caffeine.",
      ask: "Mark the findings that are among the three **required** criteria (items 1–3).",
      metLabel: "Does he match the proposed caffeine use disorder?",
      items: [
        ["Failed every attempt to cut down", true, "Item 1, required (p. 910)."],
        ["Headaches and fatigue whenever he skips it", true, "Item 3, withdrawal, required (p. 910)."],
        ["Needs far more for the same effect", false, "Item 7, tolerance; not one of the first three (p. 911)."],
        ["Craves it every morning", false, "Item 9, craving (p. 911)."],
        ["Drinks more than he planned", false, "Item 4 (p. 910)."],
        ["Spends much of the day getting and drinking it", false, "Item 8 (p. 911)."]
      ],
      need: 3,
      met: false,
      why: "He has **six** of nine criteria, but the set needs **the first three**: unsuccessful efforts to cut down (1), use despite a caffeine-related physical or psychological problem (2), and withdrawal (3) (pp. 910–911). Item 2 is missing, so the proposed set is not met. The higher bar is deliberate, to avoid **overdiagnosis** (p. 911)."
    },
    {
      id: "n25-05", tag: "Gaming: five of nine",
      "case": "A 14-year-old boy has, for the past 12 months, played online role-playing games 9 hours a day. He thinks about the game all day, gets irritable and sulky (with no physical symptoms) when his phone is taken away, needs ever longer sessions to feel satisfied, and lies to his mother about how long he plays. He also scrolls social media for hours at night and spends his allowance on in-game outfits. His grades are steady, he still plays football and he has no money at stake.",
      ask: "Mark the findings that count toward the nine proposed criteria for Internet gaming disorder.",
      metLabel: "Does he reach the proposed threshold?",
      items: [
        ["Thinks about the game all day", true, "Preoccupation, item 1 (p. 913)."],
        ["Irritable and sulky when the phone is taken away, with no physical symptoms", true, "Withdrawal, item 2; physical signs are not expected (p. 913)."],
        ["Needs ever longer sessions", true, "Tolerance, item 3 (p. 913)."],
        ["Lies to his mother about his playing time", true, "Deception, item 7 (p. 914)."],
        ["Plays 9 hours a day", false, "A typical pattern the text describes (p. 915), but **hours are not a criterion**."],
        ["Scrolls social media for hours", false, "Non-gaming Internet use is **not analogous** and does not count (p. 916)."],
        ["Spends his allowance on in-game outfits", false, "Not one of the nine; no money is wagered, so not gambling either."]
      ],
      need: 5,
      met: false,
      why: "He has **four** of nine; the proposed set needs **five or more** within 12 months, a deliberately conservative threshold (pp. 913, 915). His grades and sport are intact, so items 5 and 9 are absent. He still warrants follow-up and a talk with the family (app guidance)."
    },
    {
      id: "n25-06", tag: "More than minimal exposure",
      "case": "Drinking histories from five mothers, each describing a single pregnancy:",
      ask: "Mark the histories that meet the text’s definition of more than minimal prenatal alcohol exposure. Are at least three present?",
      items: [
        ["Three drinks at a party in week 5, before she knew she was pregnant; none afterward", true, "More than **2 drinks on one occasion**; exposure before the pregnancy was recognized counts (pp. 916, 918)."],
        ["One drink with dinner almost every day in the second month (about 25 that month)", true, "More than **13 drinks in a month** (p. 918)."],
        ["Two drinks on each of four weekends in one month; never more than two at a time", false, "8 drinks that month and never more than 2 at once (p. 918)."],
        ["One drink on two occasions during the whole pregnancy", false, "Below both thresholds (p. 918)."],
        ["Four drinks at a family fiesta in the seventh month, otherwise none", true, "More than 2 on one occasion (p. 918)."]
      ],
      need: 3,
      met: true,
      why: "The text defines more than minimal as **more than 13 drinks per month** of pregnancy **or more than 2 drinks on any one occasion** (p. 918). The manual adds that the true threshold for harm is still unclear and depends on factors such as developmental stage, smoking and genetics (p. 918). Advising no alcohol in pregnancy is public health guidance outside the DSM."
    },
    {
      id: "n25-07", tag: "ND-PAE adaptive rule",
      "case": "A 9-year-old girl with confirmed heavy prenatal alcohol exposure and problems since early childhood. Her language and her reading of social cues are normal for her age.",
      ask: "Mark the findings that count toward Criterion D (adaptive functioning).",
      metLabel: "Is Criterion D met?",
      items: [
        ["Cannot bathe or dress herself without step-by-step help", true, "Daily living skills, D3 (p. 917)."],
        ["Clumsy, with poor handwriting and balance", true, "Motor skills, D4 (p. 917)."],
        ["Severe trouble planning and organizing schoolwork", false, "Executive function belongs to **B**, neurocognitive (p. 916)."],
        ["Frequent outbursts and mood swings", false, "Mood or behavioral regulation belongs to **C**, self-regulation (p. 917)."],
        ["Cannot wait her turn in games", false, "Impulse control, also **C** (p. 917)."]
      ],
      need: 2,
      met: false,
      why: "D needs **two of four** adaptive areas **with at least one being communication (D1) or social communication and interaction (D2)** (p. 917). She has two (daily living and motor), but neither is D1 or D2, so D is **not met**. B (**one of five**) and C (**one of three**) are satisfied by her executive and self-regulation problems (pp. 916–917)."
    },
    {
      id: "n25-08", tag: "Suicide attempt: what counts",
      "case": "Adults seen today in a psychiatric outpatient clinic, each describing one event (method details omitted):",
      ask: "Mark the events that satisfy Criterion A of the proposed suicidal behavior disorder (an attempt within the last 24 months, with the exclusions applied). Are at least three present?",
      items: [
        ["8 months ago began swallowing tablets meaning to die, then stopped partway on his own", true, "Initiated with intent; stopping after starting still counts (p. 921). Within 12 months: **current** (p. 920)."],
        ["20 months ago took an overdose meaning to die; no injury resulted", true, "Injury is not required (p. 921). 12–24 months: **in early remission** (pp. 920–921)."],
        ["30 months ago made an attempt meaning to die", false, "Outside the **24-month** window (p. 920)."],
        ["3 months ago gathered tablets and wrote a note, but her sister talked her out of it before she took any", false, "Dissuaded **before initiating**: preparatory acts do not count (pp. 920–921)."],
        ["Cuts her arm on many days to relieve tension, with no wish to die", false, "Nonsuicidal self-injury is excluded (Criterion B, p. 920)."],
        ["6 months ago took an overdose, saying she wanted to die, while acutely delirious after surgery", false, "Not initiated during **delirium or confusion** (Criterion D, p. 920)."]
      ],
      need: 3,
      met: false,
      why: "Only **two** events qualify. A suicide attempt is a self-initiated act expected to cause death **at the time it was begun**; the window is **24 months**; ideation, preparation, NSSI, acts begun in delirium and purely political or religious acts are excluded (pp. 920–921). Specify **current** if the last attempt was within 12 months and **in early remission** if 12–24 months (p. 920). Every one of these people still needs a risk assessment (app guidance)."
    },
    {
      id: "n25-09", tag: "NSSI: five days",
      "case": "A 17-year-old describes her self-injury. She has never wanted to die, does it to relieve tension, thinks about it often, and is distressed by it. Today is 1 November.",
      ask: "Mark the entries that add a **new qualifying day** of self-injury within the last year.",
      metLabel: "Does she reach the 5-day threshold?",
      items: [
        ["Superficial cuts on 2 February", true, "One day within the last year (p. 923)."],
        ["Superficial cuts three times on the evening of 14 May", true, "Several acts on one day count as **one day** (p. 923)."],
        ["Another episode later on the night of 14 May", false, "Same day, already counted."],
        ["Hit her thighs hard enough to bruise on 30 July", true, "Damage likely to bruise counts; a different method is still self-injury (p. 923)."],
        ["Superficial cuts on 9 October", true, "One day (p. 923)."],
        ["Cuts on several days in August of the year before last", false, "More than a year ago (p. 923)."],
        ["Got a second ear piercing with friends on 20 August", false, "Socially sanctioned behavior is excluded (Criterion D, p. 923)."],
        ["Picks at scabs while studying", false, "Scab picking alone is excluded (Criterion D, p. 923)."]
      ],
      need: 5,
      met: false,
      why: "She has self-injured on **four** days in the last year; the proposed set needs **5 or more days** (p. 923). The behavior is still recorded with the Chapter 22 code **R45.88** current nonsuicidal self-injury (pp. 923–924), and suicide risk is assessed, because NSSI often precedes attempts by about **1–2 years** (p. 925)."
    }
  ]);
})();
