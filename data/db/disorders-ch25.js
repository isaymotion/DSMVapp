/* Disorder library: Chapter 25, Conditions for Further Study (DSM-5-TR Section III, pp. 903–927).
   These seven are PROPOSED criteria sets for research. The manual says they are not intended for clinical use and
   that only Section II disorders are officially recognized (p. 903). None has a DSM code: each entry’s `code` is
   “No code (Section III)”, and `codes` lists the recording route. Every statement that a presentation “is recorded
   as” a Section II category is app guidance built from the manual’s own Section II examples (F28, F31.89, F88) or,
   for suicidal behavior disorder and NSSI disorder, from the manual’s notes pointing to the Chapter 22 codes
   (pp. 920, 923–924). The printed T14.91A/D is read as T14.91XA/XD (APA correction; Chapter 22). Codes checked
   October 27, 2026: no change was found for the codes checked; confirm against the official tabular list.
   Self-harm content stays at the level of the manual’s general wording: nothing about methods beyond naming them. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code pages (secondary references; official tabular list not consulted directly); APA DSM-5-TR coding corrections and updates, September 2022–2025; checked October 27, 2026";
  var REC = "App guidance: Section III condition with no code of its own; record the Section II category or Chapter 22 code";
  var NCU = "No change was found for the codes checked; confirm against the official tabular list";
  var NOTCLIN = " The proposed criteria set itself is a **research** tool: the manual states that Section III sets are **not intended for clinical use** and that only Section II disorders are officially recognized (p. 903).";
  var CONFIRM = " No change was found for the codes checked (October 27, 2026); confirm against the official tabular list in force on the date of service.";
  function upd(title, text) { return [{ kind: "post", year: "2026", title: title, source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "attenuated-psychosis-syndrome", ch: "ch25", sec: "s25-aps-criteria", pages: "903–907", critPages: "903–904",
      name: "Attenuated psychosis syndrome", code: "No code (Section III)",
      codes: [["F28", "Other specified schizophrenia spectrum and other psychotic disorder (Section II example: attenuated psychosis syndrome)", REC]],
      aka: ["APS", "clinical high-risk state for psychosis (outside the DSM)", "ultra-high risk (UHR) state (outside the DSM)", "psychosis risk syndrome", "prodromal psychosis (older term)"],
      essence: "A **proposed** syndrome (not for clinical use, p. 903): at least **one** attenuated psychotic symptom (delusion-like ideas, hallucination-like perceptions or disorganized speech) that is **below the psychotic threshold** with **insight relatively kept**, present **at least weekly for the past month**, **new or worse within the past year**, distressing or disabling, and in a person who has **never** met criteria for any psychotic disorder (pp. 903–904).",
      duration: "Symptoms at least once a week for the past month; began or worsened within the past year (pp. 903–904)",
      functioning: "Distress and/or disability in social or role functioning enough to warrant clinical attention (Criterion D, p. 903); modest-to-moderate social and role impairment can last after the symptoms fade (p. 906)",
      mood: "Comorbid depression in 41% and anxiety in 15% (p. 907); a depressive or bipolar disorder with psychotic features that better explains the symptoms excludes the syndrome (Criterion E, p. 903)",
      criteria: [
        ["A", "One or more of these, in attenuated form with fairly intact reality testing, and severe or frequent enough to call for clinical attention: (1) delusion-like ideas, (2) hallucination-like perceptions, (3) disorganized speech."],
        ["B", "The symptom or symptoms have been present at least once a week over the past month."],
        ["C", "The symptoms started, or became clearly worse, within the past year."],
        ["D", "The symptoms are distressing and/or disabling enough that the person or others see a need for care."],
        ["E", "They are not better accounted for by some other mental disorder (a mood disorder with psychotic features among them), nor caused by a substance or a medical condition."],
        ["F", "Criteria for a psychotic disorder of any kind have never been met."]
      ],
      specifiers: [],
      epi: [
        ["Swiss non-help-seeking sample, ages 16–40", "0.3% met the criteria; another 2.3% had Criterion A symptoms that failed Criterion C (p. 905)"],
        ["General population acknowledging attenuated delusions or hallucinations", "Up to 7% across countries; higher in migrants (p. 905)"],
        ["3-year cumulative risk of psychosis", "Up to 22% in help-seekers who met criteria vs 1.54% in those who did not (p. 905)"],
        ["Diagnosis among those who convert", "73% schizophrenia spectrum; 11% affective psychosis (p. 905)"],
        ["Transition over 10 years", "34.9%; highest risk in the first 2 years (p. 905)"],
        ["Outcome thirds", "About one-third psychosis, one-third remission, one-third persistent disability (p. 905)"],
        ["Ages with validation", "12–35, with little evidence at the youngest ages (p. 905)"],
        ["Comorbidity", "Depression 41%, anxiety 15% (p. 907)"]
      ],
      risk: [
        "Onset usually in mid-to-late adolescence or early adulthood (p. 905).",
        "Predictors of transition: male sex, lifetime stress or trauma, unemployment, living alone, more severe positive, negative, disorganized and cognitive symptoms, and poor functioning (p. 905).",
        "Temperamental prognostic factors are not yet characterized (p. 906).",
        "A family history of psychosis does not add transition risk over 4 years; imaging findings are associated with transition but not validated for clinical use (p. 906).",
        "Migrants, racialized and oppressed groups and trauma survivors are at higher risk of misdiagnosis: adaptive wariness is not paranoia (p. 906)."
      ],
      differential: [
        { id: "brief-psychotic-disorder", how: "Early attenuated symptoms can look similar, but in APS the delusions, hallucinations or disorganized speech never reach psychotic severity (p. 906)." },
        { id: "schizotypal-pd", how: "A stable, long-standing trait pattern with a broader set of features; it lacks the recent onset or worsening that Criterion C demands (p. 906)." },
        { id: "mdd", how: "Feeling worthless or disregarded during depression is a reality distortion of the mood disorder; if it occurs only in the episode, no added APS (p. 906)." },
        { id: "social-anxiety", how: "Feeling watched or the focus of unwanted attention belongs to the anxiety disorder when confined to it (p. 906)." },
        { id: "bipolar-i", how: "Inflated self-esteem with pressured speech and less sleep belongs to the mood episode (bipolar I or II); no added APS when confined to it (p. 906)." },
        { id: "borderline-pd", how: "Distorted experiences in the setting of abandonment fears and self-injury are part of the personality disorder when confined to it (p. 906)." },
        { name: "Adjustment reaction of adolescence", how: "Mild, passing symptoms typical of development and in proportion to stress do not qualify (p. 907)." },
        { name: "The far end of normal perceptual aberration and magical thinking", how: "Strongly consider when there is no distress, impairment or need for care (p. 907)." },
        { id: "substance-induced-psychotic", how: "Attenuated symptoms can occur with cannabis, hallucinogen, phencyclidine, inhalant or stimulant intoxication, or alcohol or sedative withdrawal; if confined to use, the substance-related diagnosis is preferred (p. 907)." },
        { id: "adhd", how: "Prior attention problems do not exclude APS; they may be prodromal or a comorbid ADHD (p. 907)." },
        { id: "other-specified-psychotic", how: "The Section II home for a matching presentation: F28 with “attenuated psychosis syndrome” as the reason (Chapter 2 example; app guidance)." }
      ],
      pearls: [
        "**Inducible doubt** is the hallmark: the person can entertain another explanation (p. 904).",
        "**State, not trait**: a change noticed by the person or others, within the past year (p. 904).",
        "Criterion F is a one-way gate: one past psychotic disorder and APS can never apply (p. 903).",
        "Thirds rule: psychosis, remission, persistent disability, about one-third each (p. 905).",
        "Most converters develop a **schizophrenia spectrum** disorder, not an affective psychosis (p. 905).",
        "In the chart (app guidance): F28 other specified psychotic disorder with the reason stated, never “APS” as if it were an official code."
      ],
      cmp: { symptoms: "≥1 of attenuated delusions, hallucinations or disorganized speech with insight kept; weekly for 1 month; new or worse within 1 year; distress or disability", exclusions: "Any psychotic disorder ever; better explained by another disorder (mood disorder with psychotic features), a substance or a medical condition", prevalence: "0.3% (Swiss sample, ages 16–40); up to 7% report attenuated experiences", course: "Onset mid-to-late teens or early adulthood; up to 22% psychosis in 3 years, 34.9% in 10 years; thirds rule" },
      clues: [["Core picture", "A 19-year-old student whose family notices 8 months of new suspiciousness several times a week; he admits it is probably not true but cannot shake it"], ["Key test", "Doubt can be elicited; never psychotic"], ["Recording (app guidance)", "F28, other specified psychotic disorder (attenuated psychosis syndrome)"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: a presentation that matches this proposed set is recorded as **F28, other specified schizophrenia spectrum and other psychotic disorder**, with “attenuated psychosis syndrome” as the reason, as Chapter 2’s own example allows. ICD-10-CM title of F28: “Other psychotic disorder not due to a substance or known physiological condition”." + NOTCLIN + CONFIRM)
    },
    {
      id: "short-duration-hypomania", ch: "ch25", sec: "s25-sdh-criteria", pages: "907–910", critPages: "907–908",
      name: "Depressive episodes with short-duration hypomania", code: "No code (Section III)",
      codes: [["F31.89", "Other specified bipolar and related disorder (Section II example: short-duration hypomanic episodes (2–3 days) and major depressive episodes)", REC]],
      aka: ["DESDH", "short-duration hypomania", "subthreshold hypomania", "bipolar II with brief hypomania (informal)", "soft bipolar spectrum (outside the DSM)"],
      essence: "A **proposed** set (not for clinical use, p. 903): at least one **lifetime major depressive episode** plus at least **two lifetime** periods that meet the full hypomanic **symptom** criteria but last **2–3 days** (at least 2, fewer than 4 consecutive days). One 4-day hypomania makes it **bipolar II** for good (pp. 907–910).",
      duration: "At least two lifetime periods of ≥2 but <4 consecutive days of hypomanic symptoms, plus a lifetime MDE of at least 2 weeks (pp. 907–908)",
      functioning: "Each brief period is an unequivocal, observable change in functioning but not severe enough for marked impairment or hospitalization (p. 908); global functioning scores resemble those with full-duration hypomania (p. 909)",
      mood: "Defined by a lifetime MDE plus brief hypomanic periods occurring at different times; hypomanic features during the depression point instead to MDD with mixed features (pp. 907–910)",
      criteria: [
        ["MDE", "At least one lifetime major depressive episode: five or more of the nine depressive symptoms over the same 2 weeks, one being depressed mood or loss of interest or pleasure; with distress or impairment; not due to a substance or medical condition; not better explained by a schizophrenia spectrum or other psychotic disorder (pp. 907–908)."],
        ["Periods", "At least two lifetime periods of hypomanic symptoms that meet the symptom criteria below but last at least 2 and fewer than 4 consecutive days (p. 908)."],
        ["A", "A clear-cut period of abnormally and persistently raised, expansive or irritable mood with abnormally and persistently increased activity or energy."],
        ["B", "Three or more of the seven mania symptoms (four if the mood is only irritable), present to a marked degree and clearly different from usual: grandiosity or inflated self-esteem; less need for sleep; talkativeness or pressured speech; flight of ideas or racing thoughts; distractibility; more goal-directed activity or psychomotor agitation; excess involvement in risky activities with painful consequences."],
        ["C", "An unmistakable change in functioning that is not typical of the person."],
        ["D", "Others can see the change in mood and functioning."],
        ["E", "Not severe enough for marked impairment or hospitalization; any psychotic features make the episode manic."],
        ["F", "Not attributable to a substance (drug of abuse, medication or other treatment)."]
      ],
      specifiers: [],
      epi: [
        ["Prevalence with this definition", "Unclear; no epidemiological study has used it yet (p. 909)"],
        ["U.S. MDD with subthreshold hypomania", "Up to 6.7%, more common than bipolar I or II (p. 909)"],
        ["Clinical settings", "About one-fourth as common as depression with full-duration hypomania (p. 909)"],
        ["Sex", "May be more common in women, who may show more atypical depressive features (p. 909)"],
        ["Family history of bipolar disorder", "3–4 times more common than in MDD; similar to full-duration hypomania (p. 909)"],
        ["Suicide attempts", "Higher than in MDD; similar to bipolar II (p. 909)"]
      ],
      risk: [
        "A family history of bipolar disorder is 3–4 times more common than in MDD (p. 909).",
        "Compared with MDD, the group shows more comorbidity, earlier onset, more recurrent depression and more suicide attempts, resembling bipolar disorder (p. 909).",
        "Suicide (app note): attempt rates resemble bipolar II, so screen for suicidal behavior as in any bipolar presentation (p. 909)."
      ],
      differential: [
        { id: "bipolar-ii", how: "Needs a hypomanic episode of 4 days or more; once one has occurred with a lifetime MDE, the diagnosis becomes and stays bipolar II, whatever the length of later periods (pp. 909–910)." },
        { id: "mdd", how: "Shares the lifetime MDE; two or more lifetime 2–3-day hypomanic periods move the picture to this set (p. 910)." },
        { name: "MDD with mixed features", how: "Hypomanic features occur during the depressive episode; in DESDH the brief hypomania and the depression occur at different times (p. 910)." },
        { id: "bipolar-i", how: "A manic episode lasts a week or more, or any length with hospitalization; psychotic features at any length make the episode manic (p. 910)." },
        { id: "cyclothymic", how: "Hypomanic and depressive symptom periods without full episodes; any lifetime MDE rules cyclothymic disorder out (p. 910)." },
        { id: "other-specified-bipolar", how: "The Section II home: F31.89, whose first example is short-duration hypomanic episodes (2–3 days) with MDEs (Chapter 3; app guidance)." },
        { id: "other-specified-depressive", how: "Only one brief hypomanic period with an MDE does not meet this set; depending on the picture it stays MDD or Chapter 4 territory (app guidance)." }
      ],
      pearls: [
        "Everything is full-strength **except the clock**: 2–3 days instead of 4 (p. 908).",
        "Count **two** lifetime brief periods, not one (p. 908).",
        "Mixed features = **same time**; DESDH = **different times** (p. 910).",
        "A single 4-day hypomania converts the diagnosis to **bipolar II permanently** (pp. 909–910).",
        "Ask families: the change must be **observable by others** (Criterion D).",
        "In the chart (app guidance): F31.89 other specified bipolar and related disorder, with the reason stated."
      ],
      cmp: { symptoms: "Lifetime MDE + ≥2 lifetime periods of full hypomanic symptoms lasting 2–3 days", exclusions: "Any ≥4-day hypomania (bipolar II); any mania or psychosis (bipolar I); substance cause", prevalence: "Up to 6.7% (U.S., subthreshold hypomania broadly)", course: "Resembles bipolar disorder: earlier onset, recurrent depression, more suicide attempts than MDD" },
      clues: [["Core picture", "A 31-year-old nurse with two MDEs and three 2–3-day stretches of little sleep, nonstop talk and overspending, noticed by her husband"], ["Key number", "2–3 days, at least twice"], ["Recording (app guidance)", "F31.89, other specified bipolar and related disorder"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: a presentation that matches this proposed set is recorded as **F31.89, other specified bipolar and related disorder**, with “short-duration hypomanic episodes (2–3 days) and major depressive episodes” as the reason, which is Chapter 3’s own first example. F31.89 was not individually rechecked for this chapter; see the Chapter 3 entry." + NOTCLIN + CONFIRM)
    },
    {
      id: "caffeine-use-disorder", ch: "ch25", sec: "s25-cud-criteria", pages: "910–913", critPages: "910–911",
      name: "Caffeine use disorder", code: "No code (Section III)",
      codes: [
        ["F15.93", "Caffeine withdrawal (Section II diagnosis, Chapter 16), when its criteria are met", REC],
        ["F15.920", "Caffeine intoxication (Section II diagnosis, Chapter 16), when its criteria are met", REC],
        ["F15.99", "Unspecified caffeine-related disorder (Section II residual, Chapter 16), when neither is met", REC]
      ],
      aka: ["CUD (caffeine)", "caffeine dependence (informal)", "problematic caffeine use", "coffee or energy-drink dependence (informal)"],
      essence: "A **proposed** set (not for clinical use, p. 903): a problematic pattern of caffeine use with distress or impairment in which the person has **all three of the first criteria** within **12 months**: failed efforts or a persistent wish to cut down, use **despite a known physical or psychological problem**, and **withdrawal**. The stricter gate exists to prevent **overdiagnosis** of common daily use (pp. 910–911).",
      duration: "Within a 12-month period (p. 910)",
      functioning: "Clinically significant impairment or distress (p. 910); in one U.S. survey, those meeting criteria had more caffeine-related distress, guilt, sleep problems, anxiety, depression and stress (p. 913)",
      mood: "Features may be associated with MDD, GAD and panic disorder; chronic heavy use can mimic GAD and acute use can mimic panic attacks (p. 913)",
      criteria: [
        ["Stem", "Caffeine use that has become a problem, causing clinically significant distress or impairment, with at least the first three items below present within one 12-month period."],
        ["1", "A persistent wish, or failed attempts, to cut down or control caffeine use. (required)"],
        ["2", "Ongoing use despite knowing of a persistent or recurring physical or psychological problem that caffeine probably caused or made worse. (required)"],
        ["3", "Withdrawal: either the typical caffeine withdrawal syndrome, or caffeine (or a closely related substance) taken to relieve or avoid it. (required)"],
        ["4", "Using more caffeine, or for longer, than intended."],
        ["5", "Repeatedly failing in major duties at work, school or home because of use, for example lateness or absence tied to use or withdrawal."],
        ["6", "Ongoing use despite persistent or recurring social or interpersonal problems caused or worsened by caffeine."],
        ["7", "Tolerance: a marked increase in amount needed for the effect, or a markedly smaller effect from the same amount."],
        ["8", "Much time spent getting, using or recovering from caffeine."],
        ["9", "Craving: a strong urge or desire to use caffeine."]
      ],
      specifiers: [],
      epi: [
        ["General population prevalence", "Unclear (p. 912)"],
        ["Vermont population study", "9% endorsed the three required criteria plus tolerance (p. 912)"],
        ["U.S. demographic-quota sample (n = 1,006 consumers)", "8% endorsed all three required criteria (p. 912)"],
        ["Boston hospital adolescents who use caffeine", "3.9% (p. 912)"],
        ["Hungarian convenience sample", "13.9%, of whom 4.3% reported significant distress (p. 912)"],
        ["U.S. caffeine users endorsing single criteria", "Use despite problems 14%–17%; desire or failed efforts 34%–45%; withdrawal 18%–27% (p. 911)"],
        ["Treatment seekers (Baltimore)", "Withdrawal 97%; desire or failed efforts 91%–94%; use despite problems 75%–91%; 88% had made serious attempts to change (p. 911)"],
        ["Heritability (heavy use, tolerance, withdrawal)", "35%–77%; 28%–41% of heritable effects shared with alcohol and tobacco (p. 912)"]
      ],
      risk: [
        "Genetic: heritability 35%–77%, with a common polysubstance factor linking caffeine, alcohol and smoking (p. 912).",
        "Associated with daily smoking, with cannabis use disorder, and with alcohol use disorder in the person or the family (p. 913).",
        "Higher rates among treatment seekers, tobacco users, high school and college students, and people with past alcohol or drug misuse (p. 913).",
        "Energy-drink use in adolescents and young adults is a growing concern; U.S. consumption rises with age (p. 912).",
        "Culture: beverage type and preparation (tea, coffee, soda, mate) change the caffeine per “cup” (p. 912)."
      ],
      differential: [
        { name: "Nonproblematic caffeine use", how: "Regular heavy use with tolerance and withdrawal is common and is not, by itself, enough; problems are hard to attribute to caffeine alone (p. 913)." },
        { id: "caffeine-withdrawal", how: "A Section II diagnosis in its own right (F15.93); in the proposed set it is only one of the three required criteria (pp. 910–911)." },
        { id: "caffeine-intox", how: "An acute Section II syndrome (F15.920) after recent heavy intake; describes an episode, not a pattern of use (Chapter 16; app guidance)." },
        { id: "stimulant-use", how: "Problems from other stimulant drugs or medications can resemble the picture; identify the substance (p. 913)." },
        { id: "gad", how: "Chronic heavy caffeine use can mimic generalized anxiety disorder (p. 913)." },
        { id: "panic-attack", how: "Acute caffeine intake can provoke and mimic panic attacks (p. 913)." }
      ],
      pearls: [
        "Not “any three”: the **first three** (cut-down, harm, withdrawal) are all required (p. 910).",
        "Compare every other substance: any **2 of 11** (Chapter 16).",
        "Tolerance + craving + time spent = three items but **does not** meet the set (p. 910).",
        "Tolerance and withdrawal alone are **not enough** (p. 913).",
        "Ask about energy drinks, 3-in-1 coffee sachets and night-shift work (app guidance; Philippine practice).",
        "In the chart (app guidance): caffeine withdrawal or intoxication if met; otherwise unspecified caffeine-related disorder, F15.99."
      ],
      cmp: { symptoms: "The first three of 9 criteria (cut-down, use despite harm, withdrawal) within 12 months, with distress or impairment", exclusions: "Heavy use with tolerance and withdrawal alone; other stimulant use disorder; anxiety disorders", prevalence: "8% (U.S. quota sample) to 9% (Vermont, plus tolerance); 3.9% adolescents; 13.9% Hungary", course: "No lifespan research; seen in adolescents and adults; predicts stronger reinforcement and worse withdrawal" },
      clues: [["Core picture", "A 24-year-old call-center agent on energy drinks who cannot cut down, gets headaches on days off and keeps going despite palpitations"], ["Gate", "Criteria 1, 2 and 3 all required"], ["Recording (app guidance)", "F15.93 if withdrawal is met; else F15.99"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: Section II has **no caffeine use disorder**. Record what Chapter 16 provides: **caffeine withdrawal (F15.93)** or **caffeine intoxication (F15.920)** when their criteria are met, and otherwise **unspecified caffeine-related disorder (F15.99)**; ICD-10-CM title of F15.99: “Other stimulant use, unspecified with unspecified stimulant-induced disorder”. Outside the DSM, ICD-11 has no caffeine dependence category." + NOTCLIN + CONFIRM)
    },
    {
      id: "internet-gaming-disorder", ch: "ch25", sec: "s25-igd-criteria", pages: "913–916", critPages: "913–914",
      name: "Internet gaming disorder", code: "No code (Section III)",
      codes: [["F99", "Other specified mental disorder (Chapter 20 residual; no Section II example names gaming)", REC + "; many clinicians describe the problem without a code"]],
      aka: ["IGD", "gaming disorder (ICD-11 6C51, outside the DSM)", "Internet use disorder", "Internet addiction", "gaming addiction"],
      essence: "A **proposed** behavioral addiction (not for clinical use, p. 903): persistent, recurrent use of the Internet for **nongambling games**, often with other players, with distress or impairment and **five or more of nine** features in **12 months**. Online **gambling** belongs to gambling disorder (pp. 913–914).",
      duration: "Within a 12-month period (p. 913)",
      functioning: "School failure, job loss or marriage failure; gaming displaces social, school and family life (p. 916)",
      mood: "Gaming to escape a negative mood is a criterion (item 8); MDD is a listed comorbidity (pp. 914, 916)",
      criteria: [
        ["Stem", "Ongoing, repeated use of the Internet for games, often with others, causing clinically significant impairment or distress, shown by five or more of the following within 12 months."],
        ["1", "Preoccupation: thinking about earlier play or looking forward to the next game; gaming dominates daily life. (Internet gambling is not included here.)"],
        ["2", "Withdrawal when gaming is removed, felt as irritability, anxiety or sadness, without the physical signs of drug withdrawal."],
        ["3", "Tolerance: needing to spend more and more time gaming."],
        ["4", "Failed attempts to control how much one games."],
        ["5", "Loss of interest in former hobbies and entertainment, as a result of gaming and apart from it."],
        ["6", "Continued excessive gaming despite knowing it causes psychosocial problems."],
        ["7", "Misleading family, therapists or others about how much one games."],
        ["8", "Gaming to escape or ease a negative mood (helplessness, guilt, anxiety)."],
        ["9", "Putting at risk or losing an important relationship, job, or school or career opportunity because of gaming."]
      ],
      specifiers: ["Current severity: mild, moderate or severe, rated by how much normal activities are disrupted; milder cases have fewer symptoms and less disruption, severe cases more hours online and greater loss of relationships, career or school (p. 914)"],
      epi: [
        ["Mean 12-month prevalence across countries", "4.7% (range 0.7%–15.6%) (p. 915)"],
        ["Asia vs the West", "Similar with DSM-5 criteria (p. 915)"],
        ["United States, large Internet surveys", "1% or lower (p. 915)"],
        ["Adolescents, meta-analysis of 16 studies", "Pooled 4.6%: boys 6.8%, girls 1.3% (p. 915)"],
        ["Typical time spent", "8–10 hours or more a day; at least 30 hours a week (p. 915)"],
        ["European students (n = 8,807)", "3.62% IGD; 3.11% pathological non-gaming Internet use, with similar emotional and suicidal risks (p. 916)"],
        ["Literature reviewed by the work group", "More than 240 articles, with no standard definition (p. 914)"]
      ],
      risk: [
        "Environmental: having a computer with an Internet connection (p. 915).",
        "Highest risk group: adolescent males; boys aged 12–15 face more adverse effects (p. 915).",
        "Action, fighting, strategy and role-playing games may carry greater addictive potential than puzzle or social games (p. 915).",
        "Associated traits: negative affectivity, detachment, antagonism, disinhibition, psychoticism (p. 915).",
        "Suicide: problematic Internet and gaming behavior has been linked to suicidal thoughts and attempts in Australian, Taiwanese and European youth; sleep may mediate the effect (p. 916)."
      ],
      differential: [
        { id: "gambling", how: "Online gambling for money is assessed as gambling disorder, a Section II diagnosis, not IGD (pp. 913–914, 916)." },
        { name: "Excessive social media or pornography use", how: "Not considered analogous; work or professional Internet use and other recreational use are excluded (pp. 914, 916)." },
        { name: "Heavy but unimpairing gaming", how: "Long hours without five of nine features and without distress or impairment do not meet the set (pp. 913, 915; app guidance)." },
        { id: "mdd", how: "A listed comorbidity; gaming to escape low mood may mask a depressive disorder that should be diagnosed in its own right (p. 916)." },
        { id: "adhd", how: "A listed comorbidity; screen for it (p. 916)." },
        { id: "ocd", how: "A listed comorbidity; preoccupation with gaming is pleasurable and sought, unlike ego-dystonic obsessions (p. 916; app guidance)." },
        { id: "other-specified-mental-disorder", how: "If a code is required, F99 with the reason stated is the residual; no DSM example names gaming (Chapter 20; app guidance)." }
      ],
      pearls: [
        "**5 of 9** in **12 months**: a deliberately conservative threshold (p. 915).",
        "Withdrawal is **psychological only**: irritability, anxiety, sadness (p. 913).",
        "**Nongambling** games only; money on the line means gambling disorder (pp. 913–914).",
        "Gambling disorder is still the **only** behavioral addiction in Section II (p. 914).",
        "ICD-11 lists gaming disorder; the DSM does not, yet (p. 914; ICD-11 6C51 is outside the DSM).",
        "Ask about computer shops, “pisonet” and mobile MOBA games (app guidance; Philippine practice)."
      ],
      cmp: { symptoms: "≥5 of 9 (preoccupation, withdrawal, tolerance, failed control, lost interests, use despite problems, deception, escape, jeopardized roles) in 12 months", exclusions: "Online gambling (gambling disorder); social media, pornography, work use", prevalence: "Mean 4.7% (0.7%–15.6%); U.S. ≤1%; adolescent boys 6.8%", course: "Adolescent and young adult males most affected; school, job and marriage failure" },
      clues: [["Core picture", "A 16-year-old who games 8–10 hours a day at a computer shop, lies to his parents and has failed two subjects"], ["Key number", "5 of 9, 12 months"], ["Recording (app guidance)", "No DSM code; F99 only if a code is needed"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: no Section II category names Internet gaming, and the manual gives no recording example. Record any comorbid Section II diagnosis that is met (depression, ADHD, OCD; p. 916) and describe the gaming in the formulation; if a code for the gaming itself is unavoidable, **F99, other specified mental disorder**, with the reason stated, is the residual (Chapter 20). F99 was not individually rechecked for this chapter. Outside the DSM, **ICD-11** lists **gaming disorder (6C51)**, which the manual acknowledges (p. 914)." + NOTCLIN + CONFIRM)
    },
    {
      id: "nd-pae", ch: "ch25", sec: "s25-ndpae-criteria", pages: "916–920", critPages: "916–917",
      name: "Neurobehavioral disorder associated with prenatal alcohol exposure", code: "No code (Section III)",
      codes: [["F88", "Other specified neurodevelopmental disorder (Section II example: neurodevelopmental disorder associated with prenatal alcohol exposure)", REC]],
      aka: ["ND-PAE", "fetal alcohol spectrum disorder (FASD; related framework, outside the DSM)", "alcohol-related neurodevelopmental disorder (ARND; outside the DSM)", "fetal alcohol syndrome with neurobehavioral impairment (when facial features are present)"],
      essence: "A **proposed** set (not for clinical use, p. 903): **more than minimal** alcohol exposure in gestation plus childhood-onset impairment in three domains, **neurocognitive (1 of 5)**, **self-regulation (1 of 3)** and **adaptive functioning (2 of 4, one being communication or social communication)**, not better explained by postnatal substances, a medical or genetic condition, another teratogen or neglect. It applies **with or without** the facial features of fetal alcohol syndrome (pp. 916–917).",
      duration: "Onset of the B, C and D impairments in childhood (Criterion E, p. 917); defer the diagnosis at age 3 years or younger (p. 918)",
      functioning: "Clinically significant distress or impairment (Criterion F, p. 917); lifelong adaptive deficits, disrupted schooling, poor employment, legal trouble, legal or psychiatric confinement and dependent living (p. 919)",
      mood: "Mood or behavioral dysregulation (lability, negative affect, outbursts) is one self-regulation option (p. 917); bipolar and depressive symptoms are described as comorbid (p. 920)",
      criteria: [
        ["A", "Alcohol exposure during pregnancy that was more than minimal, including drinking before the pregnancy was known; confirmed by the mother’s report, medical or other records, or clinical observation."],
        ["B", "Neurocognitive impairment in one or more of: (1) global intellectual performance (IQ, or a standard score on a comprehensive developmental assessment, of 70 or below); (2) executive functioning; (3) learning; (4) memory; (5) visual-spatial reasoning."],
        ["C", "Self-regulation impairment in one or more of: (1) mood or behavioral regulation; (2) attention; (3) impulse control."],
        ["D", "Adaptive impairment in two or more of the following, at least one being (1) or (2): (1) communication; (2) social communication and interaction; (3) daily living skills; (4) motor skills."],
        ["E", "The B, C and D impairments begin in childhood."],
        ["F", "The picture causes marked distress or impairs social, school, work or other key areas of life."],
        ["G", "Not better explained by postnatal substance effects (medication, alcohol, other drugs), a medical condition (traumatic brain injury, delirium, dementia), another known teratogen (fetal hydantoin syndrome), a genetic condition (Williams, Down, Cornelia de Lange syndromes) or environmental neglect."]
      ],
      specifiers: [],
      epi: [
        ["United States (including fetal alcohol spectrum disorders)", "15.2 per 1,000 (range 11.3–50.0) (p. 918)"],
        ["U.S. children with full evaluations only", "31.1–98.5 per 1,000 (p. 918)"],
        ["Children in care settings (multinational meta-analysis)", "251.5 per 1,000 (p. 918)"],
        ["Global FASD prevalence, 2012", "7.7 per 1,000; Americas 8.8 per 1,000 (p. 918)"],
        ["“More than minimal” exposure", "More than 13 drinks in a month of pregnancy, or more than 2 drinks on one occasion (p. 918)"],
        ["Exposed young children with marked delay in the first 3 years", "About one-half; others show signs only at preschool or school age (p. 918)"],
        ["Drinking in pregnancy worldwide", "0.2% (Eastern Mediterranean region) to 25.2% (European region) (p. 919)"],
        ["Mental health problems after significant exposure", "More than 90% (p. 920)"]
      ],
      risk: [
        "Environmental: low maternal socioeconomic status and education, acting through social determinants such as a high density of liquor stores in poor, segregated communities (p. 919).",
        "Exposure factors that shape outcome: stage of prenatal development, smoking in pregnancy, maternal and fetal genetics, and maternal age, health and obstetric problems (p. 918).",
        "Groups with more of certain aldehyde dehydrogenase 2 alleles may show fewer effects of exposure (p. 919).",
        "Often present: parental alcohol or drug misuse, parental mental illness, violence, neglect or abuse, disrupted caregiving and repeated out-of-home placements (p. 918).",
        "Suicide: a high-risk outcome that rises in late adolescence and early adulthood; impaired affect regulation marks higher risk, and 15% of premature deaths in an Alberta registry of people with fetal alcohol syndrome were suicides; family factors may contribute (p. 919)."
      ],
      differential: [
        { id: "adhd", how: "The most common comorbidity; people with ND-PAE differ in neuropsychological profile and in how they respond to medication, so record both when both are met (p. 920; app guidance)." },
        { id: "idd", how: "An IQ of 70 or below is only one of five B options; ND-PAE adds the exposure, self-regulation and adaptive pattern, and the two can co-occur (pp. 916–917; app guidance)." },
        { id: "oppositional-defiant", how: "A likely comorbidity, but weigh whether the defiance reflects the intellectual and executive impairments of exposure (p. 920)." },
        { id: "conduct-disorder", how: "Also a likely comorbidity; the same caution about intellectual and executive impairment applies (p. 920)." },
        { id: "ncd-tbi", how: "A medical cause named in Criterion G; head injury, delirium and dementia must not explain the deficits better (pp. 917, 919)." },
        { name: "Genetic syndromes (Williams, Down, Cornelia de Lange)", how: "Can share physical and behavioral features; a clinical geneticist may be needed (pp. 917, 919–920)." },
        { name: "Other teratogens (fetal hydantoin syndrome, maternal phenylketonuria) and other prenatal substances", how: "A careful prenatal exposure history identifies the agent; poor prenatal care is also considered (pp. 919–920)." },
        { name: "Environmental neglect and postnatal substance effects", how: "Both are named exclusions in Criterion G (p. 917)." },
        { id: "other-specified-nd", how: "The Section II home: F88, whose example in Chapter 1 is this very presentation (app guidance)." }
      ],
      pearls: [
        "Counts to memorize: **1 of 5**, **1 of 3**, **2 of 4** (pp. 916–917).",
        "Criterion D needs **communication or social communication** among its two (p. 917).",
        "No face needed: diagnosable **with or without** fetal alcohol syndrome features (p. 917).",
        "“More than minimal” = **>13 drinks a month** or **>2 on one occasion** (p. 918).",
        "**Defer** at 3 years and younger; diagnosis is most likely in the **school years** (pp. 918–919).",
        "In the chart (app guidance): F88 other specified neurodevelopmental disorder, with the reason stated."
      ],
      cmp: { symptoms: "More-than-minimal prenatal alcohol exposure + neurocognitive (1 of 5), self-regulation (1 of 3) and adaptive (2 of 4) impairment; childhood onset", exclusions: "Postnatal substances; TBI, delirium, dementia; other teratogens; genetic syndromes; environmental neglect", prevalence: "U.S. 15.2 per 1,000; care settings 251.5 per 1,000; global FASD 7.7 per 1,000", course: "Half of exposed young children delayed by age 3; others show at school age; school years most likely for diagnosis; lifelong consequences" },
      clues: [["Core picture", "An 8-year-old adopted boy whose birth mother drank through pregnancy, with executive and memory deficits, outbursts, delayed language and indiscriminate friendliness"], ["Key rule", "D must include communication or social communication"], ["Recording (app guidance)", "F88, other specified neurodevelopmental disorder (ND-PAE)"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: a presentation that matches this proposed set is recorded as **F88, other specified neurodevelopmental disorder**, with “neurodevelopmental disorder associated with prenatal alcohol exposure” as the reason, which is Chapter 1’s own example. ICD-10-CM title of F88: “Other disorders of psychological development”. F88 was not individually rechecked for this chapter; see the Chapter 1 entry. Outside the DSM, pediatric fetal alcohol spectrum disorder frameworks use growth, facial and exposure criteria." + NOTCLIN + CONFIRM)
    },
    {
      id: "suicidal-behavior-disorder", ch: "ch25", sec: "s25-sbd-criteria", pages: "920–923", critPages: "920",
      name: "Suicidal behavior disorder", code: "No code (Section III)",
      codes: [
        ["T14.91XA", "Current suicidal behavior, initial encounter (Chapter 22 code; printed in the Section III note as T14.91A)", REC + "; X placeholder per the APA correction (Chapter 22)"],
        ["T14.91XD", "Current suicidal behavior, subsequent encounter (Chapter 22 code; printed in the Section III note as T14.91D)", REC + "; X placeholder per the APA correction (Chapter 22)"],
        ["Z91.51", "History of suicidal behavior (Chapter 22 code)", REC]
      ],
      aka: ["SBD", "suicide attempt disorder (informal)", "suicidal behavior (Chapter 22 code; not this entry)"],
      essence: "A **proposed** set (not for clinical use, p. 903): a **suicide attempt** within the last **24 months**, meaning a self-started sequence of acts that the person, **when beginning to apply the method**, expected to end in death. Excluded: NSSI, ideation and preparatory acts alone, acts begun in delirium or confusion, and acts done only for a political or religious aim. **Current** if the last attempt was within 12 months, **in early remission** at 12–24 months (p. 920).",
      duration: "Attempt within the last 24 months; current ≤12 months, in early remission 12–24 months (p. 920)",
      functioning: "No impairment criterion; the defining feature is the act itself, which may or may not cause injury (pp. 920–921)",
      mood: "Seen most often with bipolar disorder and MDD (p. 923); genetic risk for depression raises attempt risk across diagnoses (p. 922)",
      criteria: [
        ["A", "A suicide attempt within the last 24 months: a self-started sequence of acts that, at the moment of starting (when a behavior applying the method took place), the person expected would bring about their death."],
        ["B", "The act does not meet the definition of nonsuicidal self-injury, that is, body-surface injury done to relieve a negative state or to bring on a positive one."],
        ["C", "Not given for suicidal ideation or for preparatory acts."],
        ["D", "The act did not begin during delirium or confusion."],
        ["E", "The act was not done only for a political or religious goal."]
      ],
      specifiers: [
        "Current: the last attempt was no more than 12 months ago (p. 920)",
        "In early remission: the last attempt was 12–24 months ago (pp. 920–921)",
        "Descriptive dimensions in the text, not formal specifiers: violent vs nonviolent method; medical consequences, with high lethality meaning hospital admission beyond an emergency department visit; planning vs impulsiveness (pp. 920–921)"
      ],
      epi: [
        ["Prevalence", "Not given for the proposed disorder (pp. 920–923)"],
        ["Age", "Any age; rare before age 5 (p. 921)"],
        ["Reattempts", "About 25%–30% of people who attempt make further attempts (p. 921)"],
        ["Sex and gender", "Suicide about twice as common in men; nonfatal suicidal behavior more common in women, who average more attempts (p. 922)"],
        ["Transgender people", "High suicide rates and higher risk of suicidal behavior than cisgender people (p. 922)"],
        ["Prediction tools", "No clinical instrument has a positive predictive value useful for the individual patient; no robust biomarker (p. 921)"]
      ],
      risk: [
        "Markers the text names: planning, including choosing a time and place that limit rescue; acute agitation; recent discharge from inpatient care; recent stopping of lithium, or of clozapine in schizophrenia (p. 921).",
        "Triggers the text names: news of a potentially fatal illness, sudden loss of a partner or close relative, job loss, losing one’s housing (p. 921).",
        "Less reliable reassurance: talk about future plans and willingness to sign a safety contract (p. 921).",
        "Genetic: in the largest genome-wide study (Psychiatric Genomics Consortium), depression risk alleles raised attempt risk across MDD, bipolar disorder and schizophrenia (p. 922).",
        "Culture: stressors such as family breakdown, loss of dignity or status, acculturation conflict, stigma and structural inequity; in one U.S. multigenerational sample, parental religious belief was protective (p. 922).",
        "Safety (app guidance): a full risk assessment and safety plan are needed at every encounter whatever is recorded; the proposed set does not replace them."
      ],
      differential: [
        { id: "suicidal-behavior", how: "The Chapter 22 code records the act (T14.91XA/XD current, Z91.51 history) and is what goes in the chart; the Section III set adds a 24-month window, exclusions and remission specifiers (pp. 920–921; app guidance)." },
        { id: "nssi", how: "Body-surface injury done for relief or a positive state, without suicidal intent, is excluded by Criterion B; the stated goal (death vs relief) separates them (pp. 920, 926)." },
        { name: "Suicidal ideation or preparatory acts only", how: "Excluded by Criterion C; a person dissuaded, or who changes their mind, before starting has not made an attempt (pp. 920–921)." },
        { id: "delirium", how: "An act begun only in delirium or confusion is excluded; deliberate intoxication taken beforehand to steady oneself does not exclude it (pp. 920–921)." },
        { name: "Political or religious acts", how: "Acts undertaken only for a political or religious objective are excluded (Criterion E, p. 920)." },
        { id: "mdd", how: "A common setting; diagnose the mood disorder in its own right (p. 923)." },
        { id: "bipolar-i", how: "Bipolar disorder is among the most common comorbidities (p. 923)." },
        { id: "schizophrenia", how: "A listed comorbidity, as is schizoaffective disorder; stopping clozapine is a named risk marker (pp. 921, 923)." },
        { id: "borderline-pd", how: "A listed comorbidity, with antisocial PD, substance (especially alcohol), eating, anxiety (panic with catastrophic content, PTSD flashbacks) and adjustment disorders (p. 923)." }
      ],
      pearls: [
        "The clock is **24 months**; **current** ≤12, **early remission** 12–24 (p. 920).",
        "The attempt dates from the **time of initiation**, when the method was applied (p. 920).",
        "**No injury needed**, and medical outcome factors (poor planning, chance rescue, ambivalence) are **not considered** in assigning it (p. 921).",
        "Stopped **after** starting = counts; dissuaded **before** starting = does not (p. 921).",
        "Write **T14.91XA / XD**, not the printed T14.91A / D (APA correction; Chapter 22).",
        "In the chart (app guidance): the Chapter 22 codes plus any Section II diagnosis, never “suicidal behavior disorder” as if it were official."
      ],
      cmp: { symptoms: "At least one suicide attempt (initiated, with expectation of death) within 24 months", exclusions: "NSSI; ideation or preparation alone; acts begun in delirium or confusion; solely political or religious acts", prevalence: "Not given; 25%–30% of attempters reattempt", course: "Any age, rare under 5; current ≤12 months, early remission 12–24 months" },
      clues: [["Core picture", "A man brought to the emergency department after starting an attempt that his wife interrupted, 10 months after an earlier attempt"], ["Key test", "Method applied with expectation of death, within 24 months"], ["Recording (app guidance)", "T14.91XA (initial encounter); Z91.51 for past attempts"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: there is no code for the proposed disorder. The manual’s note (p. 920) points to the **Chapter 22** codes: **T14.91XA** (current, initial encounter), **T14.91XD** (current, subsequent encounter) and **Z91.51** (history), usable with any diagnosis or on their own. The Section III note prints **T14.91A / T14.91D**; the **APA’s post-publication correction** (September 2022) added the X placeholder, giving T14.91XA / T14.91XD (see the Chapter 22 entry). Outside the DSM: risk formulation, means safety and safety planning are clinical practice, not part of the criteria." + NOTCLIN + CONFIRM)
    },
    {
      id: "nssi-disorder", ch: "ch25", sec: "s25-nssi-criteria", pages: "923–926", critPages: "923",
      name: "Nonsuicidal self-injury disorder", code: "No code (Section III)",
      codes: [
        ["R45.88", "Current nonsuicidal self-injury (Chapter 22 code)", REC],
        ["Z91.52", "History of nonsuicidal self-injury (Chapter 22 code)", REC]
      ],
      aka: ["NSSI disorder", "NSSID", "deliberate self-injury without suicidal intent", "nonsuicidal self-injury (Chapter 22 code; not this entry)"],
      essence: "A **proposed** set (not for clinical use, p. 903): on **5 or more days in the last year**, deliberate injury to the **body surface** likely to bleed, bruise or hurt, expected to cause only minor or moderate harm, with **no suicidal intent** (stated, or inferred from repetition of a behavior the person knows is not lethal); done for **relief**, to **resolve an interpersonal difficulty** or to **feel good**; preceded by distress, hard-to-control preoccupation or frequent thoughts of it; not a sanctioned practice and not better explained by another condition (p. 923).",
      duration: "5 or more days within the last year (p. 923)",
      functioning: "Marked distress, or interference with relationships, schooling or other key areas of life (Criterion E, p. 923); burns, infection, permanent scarring and blood-borne infection from shared implements (p. 925)",
      mood: "Negative feelings (depression, anxiety, tension, anger, distress, self-criticism) just before the act are one C option (p. 923); frequent comorbidity with depressive disorders (p. 925)",
      criteria: [
        ["A", "On 5 or more days in the last year, deliberate self-inflicted damage to the body surface that would be expected to bleed, bruise or hurt (the manual’s examples: cutting, burning, stabbing, hitting, excessive rubbing), expected to cause only minor or moderate harm, with no suicidal intent. Absence of intent is stated by the person or inferred from repeated use of a behavior known not to be lethal."],
        ["B", "Done with one or more of these expectations: (1) relief from a negative feeling or thought; (2) resolving an interpersonal difficulty; (3) bringing on a positive feeling. The effect comes during or soon after the act, and the pattern may suggest dependence on it."],
        ["C", "Linked to at least one of: (1) interpersonal difficulty or negative feelings or thoughts just before the act; (2) a hard-to-control period of preoccupation with the intended act; (3) frequent thoughts of self-injury even when not acted on."],
        ["D", "Not socially sanctioned (body piercing, tattooing, a religious or cultural ritual) and not limited to scab picking or nail biting."],
        ["E", "The self-injury or what follows from it brings marked distress or gets in the way of relationships, school or other key areas of life."],
        ["F", "Not only during psychotic episodes, delirium, intoxication or withdrawal; not part of repetitive stereotypies in a neurodevelopmental disorder; not better explained by another mental disorder or medical condition (psychotic disorder, autism spectrum disorder, intellectual developmental disorder, Lesch-Nyhan syndrome, stereotypic movement disorder with self-injury, trichotillomania, excoriation disorder)."]
      ],
      specifiers: [],
      epi: [
        ["Sex and gender (international meta-analysis)", "Modestly higher in girls and women; a much smaller gap than for suicidal behavior; larger in clinical samples (p. 924)"],
        ["Variation across settings", "More common in girls among rural Chinese high school students; in boys among Jordanian youth aged 11–19 (pp. 924–925)"],
        ["Sexual minorities", "Substantially more common, especially in people who identify as bisexual (p. 925)"],
        ["Onset and peak", "Early to mid-teens; peaks in late adolescence and the early 20s, then declines (p. 925)"],
        ["NSSI before suicide attempts", "Onset typically about 1–2 years before attempts (clinical and community samples, three high-income countries) (p. 925)"],
        ["Help seeking", "Many, possibly most, never come to clinical attention (p. 924)"]
      ],
      risk: [
        "Maintained mainly by negative reinforcement: quick relief of negative emotion and arousal; some report reduced dissociation or suicidal ideation; social reinforcement can also sustain it (p. 924).",
        "Earlier onset goes with more severe manifestations (p. 925).",
        "Learning and contagion: the behavior is picked up from others, from media and social media, and through exposure in inpatient, school, correctional and community settings (p. 925).",
        "Predictors of suicidal ideation and attempts: multiple methods, high frequency, younger onset, and use for relief of inner distress or self-punishment (p. 925).",
        "Safety (app guidance and p. 925): people with NSSI can and do attempt suicide; assess suicide risk at each contact and get third-party information about recent stress and mood."
      ],
      differential: [
        { id: "nssi", how: "The Chapter 22 code records the behavior (R45.88 current, Z91.52 history) and is what goes in the chart; the Section III set adds the 5-day threshold, expectations, antecedents and exclusions (pp. 923–924; app guidance)." },
        { id: "suicidal-behavior", how: "Separated by the stated goal: a wish to die vs a wish for relief; frequent self-injury is short-term benign, and some use it to avoid a suicide attempt (p. 926)." },
        { id: "borderline-pd", how: "NSSI is not pathognomonic: it often co-occurs with borderline PD, but many with NSSI disorder do not meet its criteria (p. 925)." },
        { id: "trichotillomania", how: "Self-injury confined to hair pulling, often in long sessions during relaxation or distraction, is trichotillomania instead (p. 926)." },
        { id: "excoriation", how: "Picking confined to skin felt to be blemished, usually face or scalp, is excoriation disorder instead (p. 926)." },
        { id: "stereotypic-movement", how: "Repetitive, driven, apparently purposeless movements that can injure, often with a medical, genetic or neurodevelopmental condition (Lesch-Nyhan, IDD, intrauterine alcohol exposure): if SMD criteria are met, diagnose SMD instead (p. 926)." },
        { id: "asd", how: "Self-injury better explained by autism spectrum disorder or intellectual developmental disorder is excluded (Criterion F, p. 923)." },
        { name: "Sanctioned practices and group belonging", how: "Piercing, tattooing, ritual or collective religious self-flagellation, and self-injury that expresses membership of a youth subculture are not diagnosed (pp. 923, 925)." },
        { id: "mdd", how: "NSSI disorder frequently co-occurs with depressive, eating and substance disorders; diagnose them as well (p. 925)." }
      ],
      pearls: [
        "Count **days**, not acts: **5 or more days** in the last year (p. 923).",
        "Intent decides, not method: **no suicidal intent**, stated or inferred (p. 923).",
        "B is about **expected effect** (relief, interpersonal, positive feeling); C is about **what comes before** (p. 923).",
        "Not **pathognomonic** of borderline PD (p. 925).",
        "Onset precedes attempts by about **1–2 years**: always assess suicide risk (p. 925).",
        "In the chart (app guidance): R45.88 (or Z91.52) plus any Section II diagnosis, never “NSSI disorder” as if it were official."
      ],
      cmp: { symptoms: "Body-surface self-injury on ≥5 days in the last year, no suicidal intent; done for relief, interpersonal resolution or a positive feeling; preceded by distress or preoccupation", exclusions: "Sanctioned practices; scab picking, nail biting; only in psychosis, delirium, intoxication or withdrawal; stereotypies; trichotillomania, excoriation, SMD, ASD, IDD", prevalence: "Modestly higher in girls/women; much higher in sexual minorities", course: "Onset early to mid-teens; peak late teens and early 20s, then declines; precedes attempts by about 1–2 years" },
      clues: [["Core picture", "A 15-year-old who self-injures superficially on a few days each month after family arguments to ease tension, and is clear she has never wanted to die"], ["Key number", "5 days in the last year"], ["Recording (app guidance)", "R45.88 (current); Z91.52 for history"]],
      updates: upd("Recording route checked October 2026", "**App guidance**: there is no code for the proposed disorder. The manual’s note (pp. 923–924) points to the **Chapter 22** codes **R45.88** (current nonsuicidal self-injury) and **Z91.52** (history), usable with any diagnosis or on their own; see the Chapter 22 entry. Outside the DSM: safety planning and evidence-based psychotherapies are clinical practice, not part of the criteria." + NOTCLIN + CONFIRM)
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Attenuated psychosis syndrome vs brief psychotic disorder vs schizotypal PD", ids: ["attenuated-psychosis-syndrome", "brief-psychotic-disorder", "schizotypal-pd"] },
    { label: "Short-duration hypomania vs bipolar II vs cyclothymic vs MDD", ids: ["short-duration-hypomania", "bipolar-ii", "cyclothymic", "mdd"] },
    { label: "Caffeine use disorder (proposed) vs caffeine withdrawal", ids: ["caffeine-use-disorder", "caffeine-withdrawal"] },
    { label: "Internet gaming disorder (proposed) vs gambling disorder", ids: ["internet-gaming-disorder", "gambling"] },
    { label: "ND-PAE vs ADHD vs intellectual developmental disorder", ids: ["nd-pae", "adhd", "idd"] },
    { label: "Suicidal behavior disorder (proposed) vs suicidal behavior (Chapter 22 code)", ids: ["suicidal-behavior-disorder", "suicidal-behavior"] },
    { label: "NSSI disorder (proposed) vs NSSI (Chapter 22 code) vs borderline PD", ids: ["nssi-disorder", "nssi", "borderline-pd"] },
    { label: "NSSI disorder vs trichotillomania vs excoriation vs stereotypic movement disorder", ids: ["nssi-disorder", "trichotillomania", "excoriation", "stereotypic-movement"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 25: conditions for further study", ticks: [[0, "0"], [8, "1 mo"], [50, "12 mo"], [100, "24 mo"]], rows: [
      { label: "APS: weekly", dx: "attenuated-psychosis-syndrome", from: 0, to: 8, color: "guide", span: "past month" },
      { label: "APS: onset", dx: "attenuated-psychosis-syndrome", from: 0, to: 50, color: "guide", span: "began or worse ≤1 yr" },
      { label: "DESDH", dx: "short-duration-hypomania", from: 0, to: 1, color: "guide", span: "2–3 days, ≥2 times" },
      { label: "Caffeine use", dx: "caffeine-use-disorder", from: 0, to: 50, color: "case", span: "12 months" },
      { label: "Gaming", dx: "internet-gaming-disorder", from: 0, to: 50, color: "case", span: "12 months" },
      { label: "NSSI disorder", dx: "nssi-disorder", from: 0, to: 50, color: "hy", span: "≥5 days, last year" },
      { label: "SBD: current", dx: "suicidal-behavior-disorder", from: 0, to: 50, color: "clin", span: "≤12 months" },
      { label: "SBD: early remission", dx: "suicidal-behavior-disorder", from: 50, to: 100, color: "clin", span: "12–24 months" }
    ], note: "Proposed research criteria, not official diagnoses (p. 903). DESDH counts lifetime periods of at least 2 but fewer than 4 days, so its bar is a sliver near zero (p. 908). ND-PAE has no time window: impairment begins in childhood, and diagnosis is deferred at 3 years and younger (pp. 917–918)." }
  ]);
})();
