/* Chapter 16 study guide. Source: DSM-5-TR, Substance-Related and Addictive Disorders (pp. 543–665).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch16", "guide", {
  intro: "The largest chapter in the manual covers **10 substance classes** and one behavioral addiction, **gambling disorder**. For every class it uses the same building blocks: a **use disorder** defined by the same **11 criteria** (2 or more in 12 months; mild, moderate or severe), class-specific **intoxication** and **withdrawal** syndromes, and **substance-induced mental disorders** whose criteria live in the other chapters. ICD-10-CM folds the use disorder into the code of the intoxication, withdrawal or induced disorder, so **one code** describes both. Exams test four things above all: the **general rules** (what counts, remission, the medical-supervision exception, the 1-month rule for induced disorders), the **class hallmarks** (pupils, nystagmus, seizures, what has no withdrawal), the **codes**, and the **exceptions** (no caffeine use disorder, no tobacco intoxication, mild tobacco use disorder is Z72.0, gambling needs four criteria). The [[helper:substance|substance helper]] and the [[helper:induced|induced or independent helper]] walk you through the reasoning.",
  objectives: [
    "Apply the **11 substance use disorder criteria**, the severity levels, the remission and maintenance specifiers, and the rule excluding tolerance and withdrawal from prescribed medicines.",
    "Recognize **intoxication and withdrawal** for each class, with their thresholds, timing and hallmark signs.",
    "Decide whether a psychiatric syndrome is **substance-induced or independent** (timing, the 1-month rule, delirium).",
    "Use the **F1x coding** logic: one combined code, the 4th character for the use disorder, and the exceptions for tobacco and caffeine.",
    "Know which classes have **no withdrawal** (phencyclidine, hallucinogens, inhalants), **no use disorder** (caffeine) and **no intoxication** (tobacco), and what goes in **other (or unknown)**.",
    "Diagnose **gambling disorder** (4 of 9, F63.0) and separate it from mania and social gambling.",
    "Recall prevalence, course, markers, medical consequences and **suicide risk** for alcohol, opioids, stimulants, cannabis, tobacco and gambling."
  ],
  parts: [
    {
      title: "The chapter and the general rules",
      sections: [
        {
          id: "s16-map",
          title: "How the chapter is built",
          pages: "543–545",
          blocks: [
            { type: "p", text: "The chapter covers **10 substance classes**: **alcohol; caffeine; cannabis; hallucinogens** (phencyclidine and other hallucinogens); **inhalants; opioids; sedatives, hypnotics or anxiolytics; stimulants** (amphetamine-type, cocaine, other); **tobacco**; and **other (or unknown)** substances, plus one behavioral addiction, **gambling disorder**. All drugs taken in excess **directly activate the brain reward system** so intensely that normal activities may be neglected (p. 543)." },
            { type: "defs", title: "Key ideas (pp. 543–544)", items: [
              ["“Addiction”", "Not a DSM diagnostic term (uncertain definition, negative connotation). The neutral term is **substance use disorder**, from mild to severe."],
              ["Two groups", "**Substance use disorders** and **substance-induced disorders** (intoxication, withdrawal and substance/medication-induced mental disorders)."],
              ["Behavioral addictions", "Only **gambling disorder** is included. Internet gaming disorder is a condition for further study; “sex,” “exercise” and “shopping addiction” are **not** included (insufficient evidence)."],
              ["Medication-induced", "Substance/medication-induced disorders include drugs of abuse, psychotropics, other medicines (e.g., **steroids**) and **toxins** (e.g., organophosphates)."],
              ["Where criteria live", "Induced psychotic, bipolar, depressive, anxiety, OCD-related, sleep, sexual, delirium and neurocognitive disorders are defined in **their own chapters**."]
            ] },
            { type: "table", caption: "Which induced disorders each class can cause (Table 1, p. 545). I = with onset during intoxication; W = during withdrawal", head: ["Class", "Psychotic", "Bipolar", "Depressive", "Anxiety", "OCD-related", "Sleep", "Sexual", "Delirium", "NCD"], rows: [
              ["Alcohol", "I/W", "I/W", "I/W", "I/W", "", "I/W", "I/W", "I/W", "Major/mild (persisting)"],
              ["Caffeine", "", "", "", "I", "", "I/W", "", "", ""],
              ["Cannabis", "I", "", "", "I", "", "I/W", "", "I", ""],
              ["Phencyclidine", "I", "I", "I", "I", "", "", "", "I", ""],
              ["Other hallucinogens", "I*", "I", "I", "I", "", "", "", "I", ""],
              ["Inhalants", "I", "", "I", "I", "", "", "", "I", "Major/mild (persisting)"],
              ["Opioids", "", "", "I/W", "W", "", "I/W", "I/W", "I/W", ""],
              ["Sedatives, hypnotics, anxiolytics", "I/W", "I/W", "I/W", "W", "", "I/W", "I/W", "I/W", "Major/mild (persisting)"],
              ["Stimulants", "I", "I/W", "I/W", "I/W", "I/W", "I/W", "I", "I", "Mild (persisting)"],
              ["Tobacco", "", "", "", "", "", "W", "", "", ""],
              ["Other (or unknown)", "I/W", "I/W", "I/W", "I/W", "I/W", "I/W", "I/W", "I/W", "Major/mild"]
            ] },
            { type: "p", text: "*Other hallucinogens also cause **hallucinogen persisting perception disorder** (flashbacks). Delirium and neurocognitive columns summarize the full Table 1; confirm cells against the manual. Note that **tobacco** causes only withdrawal-onset sleep disorder, **caffeine** only anxiety and sleep disorders, and **opioids** never cause psychosis in Table 1." },
            { type: "callout", kind: "exam", title: "Pattern to remember", text: "**Sedating** drugs (alcohol, sedatives) → **depression during intoxication**, **anxiety during withdrawal**. **Stimulating** drugs (cocaine, amphetamines) → **psychosis and anxiety during intoxication**, **depression during withdrawal**. Both groups cause temporary **sleep and sexual** problems (p. 551)." }
          ]
        },
        {
          id: "s16-sud",
          title: "Substance use disorder: the 11 criteria",
          pages: "545–547",
          blocks: [
            { type: "criteria", title: "Substance use disorder (generic template)", code: "Code by class and severity", pages: "545–547", items: [
              ["A", "A problematic pattern of use causing significant impairment or distress, with **at least 2 of 11** within a **12-month** period:", [
                "**Impaired control (1–4)**: larger amounts or longer than intended; persistent desire or failed efforts to cut down; much time obtaining, using or recovering; **craving**.",
                "**Social impairment (5–7)**: failure to fulfill major role obligations; continued use despite social or interpersonal problems; important activities given up.",
                "**Risky use (8–9)**: use in **physically hazardous** situations; continued use despite knowing of a physical or psychological problem it causes or worsens.",
                "**Pharmacological (10–11)**: **tolerance**; **withdrawal** (characteristic syndrome, or the substance taken to relieve or avoid it)."
              ]]
            ], specifiers: [["Severity", "**Mild** 2–3 · **Moderate** 4–5 · **Severe** 6 or more"], ["In early remission", "No criteria (except **craving**) for **≥3 but <12 months**"], ["In sustained remission", "No criteria (except craving) for **≥12 months**"], ["In a controlled environment", "Access restricted (substance-free jail, therapeutic community, locked unit)"], ["On maintenance therapy", "Opioid and tobacco use disorders only (agonist or partial agonist therapy, e.g., methadone, buprenorphine, nicotine replacement)"]] },
            { type: "callout", kind: "mnemonic", title: "Four groups, 11 items", text: "**Control, Social, Risky, Pharmacology**: 4 + 3 + 2 + 2 = 11. Two items in 12 months make the diagnosis. The 11 items are identical across classes, except that **withdrawal does not apply** to phencyclidine, other hallucinogens and inhalants, and **caffeine has no use disorder** in Section II." },
            { type: "defs", title: "Rules that trip people up (pp. 546–547)", items: [
              ["Prescribed medicines", "**Tolerance and withdrawal from appropriately taken prescribed medicines** (opioid analgesics, sedatives, stimulants) are **not counted**. A use disorder needs other signs of compulsive, drug-seeking behavior."],
              ["Neither required", "Tolerance and withdrawal are **not necessary**; a past withdrawal history predicts a **more severe course**."],
              ["Criterion 9", "The point is **failure to abstain** despite knowing the problem, not the problem itself."],
              ["Craving", "An intense urge, often cue-triggered (classical conditioning); used as a **treatment outcome** because it signals relapse. Craving is **allowed during remission**."],
              ["Tolerance by labs", "High blood levels with little sign of intoxication suggest tolerance; distinguish from **innate low sensitivity**."],
              ["Brain changes", "Circuit changes may **persist beyond detoxification**, explaining relapse and cue-induced craving; long-term treatment approaches may help."]
            ] }
          ]
        },
        {
          id: "s16-induced",
          title: "Intoxication, withdrawal and induced mental disorders",
          pages: "548–553",
          blocks: [
            { type: "defs", title: "Intoxication and withdrawal (pp. 548–549)", items: [
              ["Intoxication", "A **reversible, substance-specific syndrome** from recent use, with **problematic** behavioral or psychological changes (belligerence, lability, impaired judgment). Tachycardia alone is a physiological effect, **not** the diagnosis. **Does not apply to tobacco.**"],
              ["Acute vs chronic", "Effects can change with sustained use (cocaine: gregarious at first, withdrawn after days of use)."],
              ["Withdrawal", "A substance-specific syndrome after **stopping or reducing heavy, prolonged** use, causing distress or impairment. Usually but not always with a use disorder."],
              ["Route", "IV, smoked and snorted routes give faster, more intense effects and more escalation."],
              ["Half-life", "**Short-acting** drugs: more likely withdrawal, earlier and more intense. **Long-acting**: later onset, longer but milder withdrawal."],
              ["Multiple substances", "Record **each** intoxication or withdrawal separately."],
              ["Lab tests", "A positive test does not make a diagnosis, and a negative test does not rule one out; normal function with high levels suggests **tolerance**."],
              ["Age", "Use of almost every substance peaks at **18–24**; intoxication is usually the first disorder, often in the teens."]
            ] },
            { type: "criteria", title: "Substance/medication-induced mental disorder: shared features", code: "See each chapter", pages: "550–551", items: [
              ["A", "Symptoms typical of the relevant disorder (psychotic, depressive, anxiety and so on) **predominate**."],
              ["B", "Evidence that **(1)** symptoms began during or soon after intoxication, withdrawal or medication exposure, and **(2)** the substance **can** produce them."],
              ["C", "Not better explained by an **independent** disorder: e.g., symptoms **preceded** the substance, or **persist ≥1 month** after acute withdrawal or severe intoxication ends (except neurocognitive disorders and HPPD)."],
              ["D", "Not exclusively during **delirium**."],
              ["E", "Distress or impairment."]
            ] },
            { type: "callout", kind: "key", title: "The 1-month rule", text: "Most induced disorders **improve within days to weeks** and are unlikely to last more than **1 month** after abstinence. Symptoms that came **before** the substance, or **persist beyond about a month** of abstinence, point to an **independent** disorder. Exceptions that persist by nature: **neurocognitive disorders** (alcohol, inhalant, sedative) and **hallucinogen persisting perception disorder** (pp. 551–552)." },
            { type: "defs", title: "More rules (pp. 551–553)", items: [
              ["Induced vs intoxication", "Diagnose the induced disorder **instead of** intoxication or withdrawal only when its symptoms are **in excess**, predominate and warrant independent attention."],
              ["Delirium", "Symptoms seen only during a substance delirium (e.g., alcohol withdrawal delirium) are part of the **delirium**; do not diagnose them separately."],
              ["Medications", "Steroids, antihypertensives, **disulfiram**, anticholinergics and cardiovascular drugs can cause mood, psychotic, anxiety, sleep and sexual syndromes."],
              ["Preexisting disorders", "Substances tend to **intensify** a preexisting mental disorder."],
              ["Recording", "With a comorbid use disorder, give **one** combined diagnosis (e.g., cocaine-induced psychotic disorder **with severe cocaine use disorder**). After one-time use, record only the induced disorder (e.g., corticosteroid-induced depressive disorder)."]
            ] }
          ]
        },
        {
          id: "s16-coding",
          title: "How the F1x codes work",
          pages: "547–550",
          blocks: [
            { type: "p", text: "ICD-10-CM **combines** the use disorder and the induced disorder into **one code**. So when intoxication, withdrawal or an induced disorder is present, you do **not** code the use disorder separately: its severity sits in the **4th character** of the induced disorder’s code. Always record the **specific substance** by name (e.g., “F13.20 moderate **alprazolam** use disorder,” “F15.10 mild **methamphetamine** use disorder”)." },
            { type: "table", caption: "The class digit (F1x)", head: ["Code", "Class"], rows: [
              ["F10", "Alcohol"], ["F11", "Opioids"], ["F12", "Cannabis"], ["F13", "Sedatives, hypnotics or anxiolytics"], ["F14", "Cocaine"], ["F15", "Amphetamine-type and other stimulants; also **caffeine**"], ["F16", "Hallucinogens, including phencyclidine"], ["F17", "Tobacco (nicotine)"], ["F18", "Inhalants"], ["F19", "Other (or unknown) substances, e.g., anabolic steroids"], ["F63.0", "Gambling disorder (not an F1x code)"]
            ] },
            { type: "table", caption: "The 4th character tells the use disorder (examples from alcohol)", head: ["Situation", "Pattern", "Alcohol example"], rows: [
              ["Use disorder alone, mild", "F1x.10", "F10.10"],
              ["Use disorder alone, moderate or severe", "F1x.20", "F10.20"],
              ["In early or sustained remission", "F1x.11 / F1x.21", "F10.11 (mild) · F10.21 (moderate/severe)"],
              ["Intoxication + mild use disorder", "F1x.12-", "F10.120"],
              ["Intoxication + moderate/severe use disorder", "F1x.22-", "F10.220"],
              ["Intoxication, no use disorder", "F1x.92-", "F10.920"],
              ["Withdrawal (mild / mod–severe / none)", "F1x.13- · F1x.23- · F1x.93-", "F10.130 · F10.230 · F10.930"],
              ["Unspecified [class]-related disorder", "F1x.99", "F10.99"]
            ] },
            { type: "callout", kind: "caution", title: "Watch for the exceptions", text: "Intoxication **with perceptual disturbances** ends in **2** (e.g., F10.920 → F12.922 for cannabis); alcohol withdrawal with perceptual disturbances is F10.**132/232/932**. **Moderate and severe** share one code (the 4th character is 2 for both). Some withdrawal codes have only four or five characters (F11.13, F12.13, F15.93 caffeine withdrawal). The full code grid for each class is in its section and on the codes page." },
            { type: "case", title: "Coding vignette: heroin withdrawal", text: "A man with moderate heroin use disorder presents in withdrawal.", point: "One code covers both: **F11.23 heroin withdrawal** (with moderate heroin use disorder). Do not add F11.20." }
          ]
        }
      ]
    },
    {
      title: "Alcohol",
      sections: [
        {
          id: "s16-aud",
          title: "Alcohol use disorder",
          pages: "553–561",
          blocks: [
            { type: "table", caption: "Alcohol use disorder codes (pp. 554–555)", head: ["Severity", "Current", "Early or sustained remission"], rows: [
              ["Mild (2–3)", "**F10.10**", "F10.11"],
              ["Moderate (4–5)", "**F10.20**", "F10.21"],
              ["Severe (6+)", "**F10.20**", "F10.21"]
            ] },
            { type: "defs", title: "Features (pp. 555–556)", items: [
              ["Withdrawal timing", "Begins about **4–12 hours** after heavy drinking is reduced; sleep problems and other symptoms can persist at low levels for **months** and drive relapse."],
              ["Medical toll", "Gastritis and ulcers; **cirrhosis or pancreatitis in about 15%** of heavy drinkers; GI cancers; **low-grade hypertension**; cardiomyopathy; raised triglycerides and LDL; peripheral neuropathy; cerebellar degeneration."],
              ["Brain", "Thiamine deficiency and **Wernicke-Korsakoff syndrome** (now alcohol-induced major neurocognitive disorder, amnestic-confabulatory type)."],
              ["Suicide", "Contributes to suicide during severe intoxication and during induced depressive or bipolar disorders."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 556–558)", head: ["Topic", "Detail"], rows: [
              ["US lifetime prevalence (DSM-5)", "**29.1%** (8.6% mild, 6.6% moderate, 13.9% severe); men 36.0%, women 22.7%"],
              ["12-month (DSM-IV)", "4.6% at 12–17; **16.2% at 18–29**; 1.5% at 65+"],
              ["Onset", "First intoxication mid-teens; use disorder peaks late teens to mid-20s; most by late 30s; about **10%** begin later"],
              ["Course", "Remission and relapse; once drinking resumes, it **escalates rapidly**. Most people with the disorder have a **better prognosis** than treatment samples suggest"],
              ["Genetics", "**40%–60%** of risk; 3–4 times higher in relatives and in adopted-away children of affected parents"],
              ["Protective", "**Flushing** from ALDH/ADH variants (up to 40% of Japanese, Chinese and Korean people)"],
              ["High risk", "**Low level of response** (low sensitivity) to alcohol; impulsivity; schizophrenia or bipolar disorder; conduct disorder"],
              ["Older adults", "More sensitive brain, slower metabolism, less body water: problems at **lower intake**"],
              ["Women", "Higher blood levels per drink; more vulnerable to **blackouts and liver disease**; gender gap narrowing"],
              ["Global", "2.8 million deaths a year; 237 million men and 46 million women affected"]
            ] },
            { type: "table", caption: "Diagnostic markers (pp. 558–559)", head: ["Marker", "What it shows"], rows: [
              ["Blood alcohol 150 mg/dL without signs of intoxication", "**Tolerance** (at 200 mg/dL most nontolerant people are severely intoxicated)"],
              ["**GGT** >35 units", "Sensitive marker; ≥70% with high GGT drink 8+ drinks daily; returns toward normal in days to weeks"],
              ["**CDT** ≥20 units", "Similar or better sensitivity and specificity; GGT + CDT together are best; **rising** values signal relapse"],
              ["**MCV** high-normal", "Helps identify heavy drinking but **poor for monitoring** (long red-cell life)"],
              ["Other", "ALT, alkaline phosphatase, triglycerides, HDL, uric acid"]
            ] },
            { type: "callout", kind: "pearl", title: "Suicide and alcohol", text: "Acute alcohol use is linked to a nearly **sevenfold** increase in suicide attempts, and each drink raises the risk by about **30%** in emergency department data. Alcohol plus sedatives is worse still, and drinkers are **4–6 times** more likely to die by suicide with a gun (pp. 559–560, 563)." },
            { type: "defs", title: "Differential and comorbidity (pp. 560–561)", items: [
              ["Nonpathological drinking", "Fewer than **20%** of drinkers ever develop the disorder; daily low-dose drinking or occasional intoxication is not enough."],
              ["Sedative use disorder", "Similar picture, but the course and medical problems differ."],
              ["Conduct disorder and antisocial PD", "Seen in most people with antisocial PD; establish both (earlier onset, worse prognosis)."],
              ["Comorbidity", "Bipolar disorder, schizophrenia, antisocial PD, most anxiety and depressive disorders; part of the depression link is **alcohol-induced**."],
              ["In hospital", "**Unanticipated withdrawal** in an inpatient whose disorder was missed adds risk and cost; one in five ICU admissions in some urban hospitals is alcohol-related."]
            ] }
          ]
        },
        {
          id: "s16-alcohol-iw",
          title: "Alcohol intoxication, withdrawal and induced disorders",
          pages: "561–569",
          blocks: [
            { type: "criteria", title: "Alcohol intoxication in brief", code: "F10.120 / F10.220 / F10.920", pages: "561", items: [
              ["A", "Recent ingestion of alcohol."],
              ["B", "Clinically significant **problematic behavioral or psychological changes** (inappropriate sexual or aggressive behavior, lability, impaired judgment)."],
              ["C", "**One or more** of: **slurred speech, incoordination, unsteady gait, nystagmus, impaired attention or memory, stupor or coma**."],
              ["D", "Not due to a medical condition or better explained by another mental disorder or substance."]
            ] },
            { type: "defs", title: "Intoxication facts (pp. 562–564)", items: [
              ["Rate", "About **one drink an hour** is metabolized; blood alcohol falls **15–20 mg/dL per hour**. A standard drink (10–12 g) raises it about 20 mg/dL."],
              ["Rising vs falling", "Stimulation while levels **rise**; depression, withdrawal and cognitive impairment while they **fall**."],
              ["Levels", "200–300 mg/dL: nontolerant people fall asleep; **>300–400 mg/dL**: respiratory depression and death."],
              ["Blackouts", "Amnesia for events during intoxication, linked to high and rapidly rising levels."],
              ["Onset", "First intoxication about **15**; peak 18–25. Earlier regular intoxication predicts use disorder."],
              ["Differential", "Diabetic ketoacidosis, cerebellar ataxia, multiple sclerosis; **sedative intoxication** (no smell, positive toxicology)."]
            ] },
            { type: "criteria", title: "Alcohol withdrawal in brief", code: "F10.130 / F10.230 / F10.930", pages: "564–565", items: [
              ["A", "Cessation or reduction of **heavy, prolonged** alcohol use."],
              ["B", "**Two or more** within several hours to a few days:", ["**Autonomic hyperactivity** (sweating, pulse >100).", "Increased **hand tremor**.", "**Insomnia.**", "**Nausea or vomiting.**", "Transient visual, tactile or auditory **hallucinations or illusions**.", "**Psychomotor agitation.**", "**Anxiety.**", "**Generalized tonic-clonic seizures.**"]],
              ["C", "Distress or impairment."],
              ["D", "Not due to a medical condition or better explained by another disorder or substance."]
            ], specifiers: [["With perceptual disturbances", "Hallucinations with **intact reality testing**, or illusions, **without delirium**: F10.132 / F10.232 / F10.932"]] },
            { type: "steps", title: "Alcohol withdrawal over time (pp. 565–566)", items: [
              ["4–12 hours", "Symptoms begin as blood alcohol falls sharply"],
              ["Day 2", "Peak intensity"],
              ["Days 4–5", "Marked improvement; acute episode usually lasts 4–5 days"],
              ["3–6 months", "Low-level anxiety, insomnia and autonomic symptoms may persist"]
            ] },
            { type: "defs", title: "Withdrawal facts (pp. 565–567)", items: [
              ["Severe forms", "Fewer than **10%** develop dramatic symptoms or **delirium tremens**; **seizures in fewer than 3%**."],
              ["Delirium tremens", "Coded as **alcohol withdrawal delirium** (Neurocognitive Disorders); usually means a **medical condition** too (liver failure, pneumonia, GI bleeding, head trauma, hypoglycemia, electrolytes, surgery)."],
              ["Prevalence", "About **50%** of functional, middle-class people with AUD have had full withdrawal; **>80%** of hospitalized or homeless people."],
              ["Age", "Rare **under 30**; risk and severity increase with age."],
              ["Severity predictors", "Prior withdrawal delirium or severe withdrawal, **low potassium**, **low platelets**, **systolic hypertension**, other sedative dependence; drinking more than about 8 drinks a day."],
              ["Treatment hint", "Relieved by alcohol or **benzodiazepines** (e.g., diazepam)."],
              ["Differential", "Hypoglycemia, diabetic ketoacidosis, **essential tremor**, sedative withdrawal (very similar)."]
            ] },
            { type: "defs", title: "Alcohol-induced mental disorders (pp. 567–569)", items: [
              ["Which ones", "Psychotic, bipolar, depressive, anxiety, sleep, sexual, delirium and major or mild neurocognitive disorder."],
              ["Depression", "Lifetime major depressive episodes in about **40%** with AUD, but only **one-third to one-half** are independent."],
              ["Psychosis", "Alcohol-induced psychotic episodes in **fewer than 5%**."],
              ["Course", "All except the **amnestic-confabulatory neurocognitive disorder** improve within days to **1 month** of abstinence, even without medication."],
              ["Unspecified", "Unspecified alcohol-related disorder: **F10.99**."]
            ] },
            { type: "case", title: "Clinical vignette: day 2 after surgery", text: "A 56-year-old man is 2 days after a hip replacement. He is sweating, tremulous, pulse 118, sleepless and anxious, and sees insects on the wall but knows they are not real. He is oriented. His wife says he drinks a bottle of wine and several beers daily and has failed to cut down, drinks every morning, and has had two DUIs.", point: "Withdrawal with perceptual disturbances and intact reality testing, no delirium, plus a moderate to severe use disorder → **F10.232 alcohol withdrawal, with perceptual disturbances, with moderate (or severe) alcohol use disorder**. Monitor for seizures and delirium." }
          ]
        }
      ]
    },
    {
      title: "Caffeine and cannabis",
      sections: [
        {
          id: "s16-caffeine",
          title: "Caffeine intoxication and withdrawal",
          pages: "569–575",
          blocks: [
            { type: "criteria", title: "Caffeine intoxication in brief", code: "F15.920", pages: "569–570", items: [
              ["A", "Recent caffeine, usually **well over 250 mg**."],
              ["B", "**Five or more** of: restlessness, nervousness, excitement, insomnia, flushed face, diuresis, GI disturbance, muscle twitching, rambling thought and speech, tachycardia or arrhythmia, periods of inexhaustibility, psychomotor agitation."],
              ["C–D", "Distress or impairment; not better explained by a medical condition, another disorder (e.g., anxiety) or substance."]
            ] },
            { type: "criteria", title: "Caffeine withdrawal in brief", code: "F15.93", pages: "571–572", items: [
              ["A", "**Prolonged daily** caffeine use."],
              ["B", "Abrupt cessation or reduction followed **within 24 hours** by **three or more** of: **headache**; marked fatigue or drowsiness; dysphoric or depressed mood or irritability; difficulty concentrating; flu-like symptoms (nausea, vomiting, muscle pain or stiffness)."],
              ["C–D", "Distress or impairment; not due to a medical condition (migraine, viral illness) or another disorder."]
            ] },
            { type: "table", caption: "Caffeine facts (pp. 569–574)", head: ["Topic", "Detail"], rows: [
              ["Use", "**>85%** of US children and adults; average adult intake about **280 mg/day**"],
              ["No use disorder", "**Caffeine use disorder** is not a Section II diagnosis (Section III condition for further study)"],
              ["Dose for symptoms", "Restlessness, insomnia and GI symptoms at **200 mg** in vulnerable people; twitching, arrhythmia, rambling speech above **1 g/day**"],
              ["Lethal", "**5–10 g** can be fatal"],
              ["Half-life", "About **4–6 hours**; intoxication remits within a day"],
              ["Intoxication prevalence", "About **7%** of the US population"],
              ["Risk", "Infrequent users, recent increases, **oral contraceptives** (slower elimination), energy drinks with alcohol in youth"],
              ["Withdrawal timing", "Begins **12–24 h**, peaks **1–2 days**, lasts **2–9 days** (headache up to **21 days**); remits **30–60 minutes** after caffeine"],
              ["Withdrawal frequency", "**Headache in about 50%** of abstinence; can follow cessation of only **100 mg/day**; triggered by fasting before procedures, travel, religious fasts"],
              ["Pregnancy", "Metabolism slows in later pregnancy; doses <300 mg/day are unlikely to harm reproduction"]
            ] },
            { type: "defs", title: "Differential (pp. 571, 574)", items: [
              ["Intoxication", "Mania, panic disorder, GAD, amphetamine intoxication, sedative or tobacco withdrawal, sleep disorders, **akathisia**."],
              ["Withdrawal", "Migraine and other headaches, viral illness, sinus disease, other drug withdrawal. A **caffeine challenge** that relieves symptoms confirms it."],
              ["Induced disorders", "**Caffeine-induced anxiety** and **sleep** disorders only, when symptoms exceed intoxication or withdrawal. Unspecified: **F15.99**."]
            ] }
          ]
        },
        {
          id: "s16-cannabis",
          title: "Cannabis use disorder",
          pages: "575–582",
          blocks: [
            { type: "table", caption: "Cannabis use disorder codes", head: ["Severity", "Current", "Remission"], rows: [
              ["Mild", "**F12.10**", "F12.11"],
              ["Moderate or severe", "**F12.20**", "F12.21"]
            ] },
            { type: "defs", title: "Features (pp. 576–578)", items: [
              ["The drug", "**Delta-9-THC** acting on **CB1 and CB2** receptors. Potency: about 10%–15% in plant material, 30%–40% hashish, 50%–55% hash oil; legal extracts up to **68%**."],
              ["Routes", "Smoking, vaping, **dabbing** (butane hash oil), edibles; inhalation acts faster."],
              ["Synthetic cannabinoids", "K2, Spice: unpredictable, with **seizures, cardiac events, psychosis and death**."],
              ["Medical use", "When taken as indicated, tolerance and withdrawal **should not be the primary basis** for diagnosis."],
              ["Pattern", "People with the disorder use on average **4 or more days a week**; many do not see their symptoms as cannabis-related."],
              ["Signs", "Red eyes, odor, yellow fingertips, chronic cough, incense, odd-hour food cravings; chronic use can look like **persistent depressive disorder** (amotivation)."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 578–580)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence (DSM-5)", "About **2.5%** of adults (1.4% mild, 0.6% moderate, 0.6% severe); **6.9% at 18–29**"],
              ["Among users", "**20%–30%** of users develop the disorder (DSM-IV: 20.4% of youth, 30.6% of adult users)"],
              ["Sex", "Men 3.5% vs women 1.7%; gap narrowing"],
              ["Treatment gap", "Only **7%–8%** receive cannabis-specific treatment"],
              ["Onset", "Usually adolescence or young adulthood; since about 2010 cannabis has displaced alcohol and tobacco as the **first** drug used"],
              ["Early use", "Use **before 15** robustly predicts substance use and other mental disorders"],
              ["Genetics", "**30%–80%** of variance"],
              ["Legalization", "Living in a state with legal recreational use **raises** adult risk"],
              ["Pregnancy", "7.0% of pregnant women used in the past month; most resume after delivery"]
            ] },
            { type: "defs", title: "Markers, suicide and comorbidity (pp. 580–582)", items: [
              ["Urine test", "**THCCOOH** stays positive for **weeks** in frequent users, so it is poor for judging remission."],
              ["Suicide", "**Chronic** (not acute) use is linked to suicidal thoughts and behavior."],
              ["Functional", "Dose-dependent executive deficits even when not intoxicated; impaired driving; “**amotivational syndrome**.”"],
              ["Other SUDs", "Multiplies the risk of any other substance use disorder about **ninefold**; 63% of treated adults misuse other drugs; **64%** have tobacco use disorder; cannabis is the primary drug for **76%** of adolescents in treatment."],
              ["Psychosis", "Use in critical periods is linked to a **threefold** increase in psychosis risk; high-potency daily use may explain regional variation."],
              ["Medical", "**Cannabinoid hyperemesis syndrome** (cyclic vomiting with regular use); respiratory and cardiovascular disease."]
            ] }
          ]
        },
        {
          id: "s16-cannabis-iw",
          title: "Cannabis intoxication, withdrawal and induced disorders",
          pages: "582–587",
          blocks: [
            { type: "criteria", title: "Cannabis intoxication in brief", code: "F12.120 / F12.220 / F12.920", pages: "582–583", items: [
              ["A", "Recent use of cannabis."],
              ["B", "Problematic changes (impaired coordination, euphoria, anxiety, **sensation of slowed time**, impaired judgment, social withdrawal)."],
              ["C", "**Two or more within 2 hours**: **conjunctival injection, increased appetite, dry mouth, tachycardia**."],
              ["D", "Not due to a medical condition or better explained by another disorder or substance."]
            ], specifiers: [["With perceptual disturbances", "Hallucinations with intact reality testing, or illusions, without delirium: **F12.122 / F12.222 / F12.922**"]] },
            { type: "callout", kind: "mnemonic", title: "Cannabis intoxication signs: RAD T", text: "**R**ed eyes (conjunctival injection) · **A**ppetite up · **D**ry mouth · **T**achycardia. Two or more within 2 hours." },
            { type: "criteria", title: "Cannabis withdrawal in brief", code: "F12.13 / F12.23 / F12.93", pages: "584", items: [
              ["A", "Cessation of **heavy, prolonged** use (usually daily or almost daily for at least a few months)."],
              ["B", "**Three or more within about 1 week**: irritability, anger or aggression; nervousness or anxiety; **sleep difficulty** (insomnia, disturbing dreams); **decreased appetite** or weight loss; restlessness; depressed mood; at least one physical symptom (abdominal pain, tremor, sweating, fever, chills, headache)."],
              ["C–D", "Distress or impairment; not better explained by another condition or substance."]
            ] },
            { type: "table", caption: "Intoxication and withdrawal facts (pp. 583–586)", head: ["Topic", "Detail"], rows: [
              ["Intoxication onset", "Minutes when smoked; **hours** when eaten; lasts **3–4 hours** (longer orally); may recur for 12–24 hours (fat stores)"],
              ["Intoxication differential", "Alcohol and sedatives **reduce** appetite and cause aggression, nystagmus, ataxia; **PCP** also smoked and perceptual, but more ataxia and aggression"],
              ["Withdrawal timing", "Onset **24–48 hours**, peak **2–5 days**, resolves in **1–2 weeks**; sleep problems last longer"],
              ["Withdrawal prevalence", "12% of regular users in the community; **50%–95%** of treated or heavy users"],
              ["Withdrawal profile", "**Emotional and behavioral** symptoms more common than physical (unlike opioids, alcohol, sedatives); women have more severe withdrawal"],
              ["Relapse driver", "**Sleep difficulty** is the withdrawal symptom most linked to relapse"],
              ["Coding without use disorder", "F12.93, e.g., in a patient taking cannabis **only under medical supervision**"]
            ] },
            { type: "defs", title: "Cannabis-induced disorders (p. 587)", items: [
              ["Which ones", "**Psychotic, anxiety and sleep** disorders, plus cannabis intoxication delirium and delirium from **pharmaceutical cannabinoid agonists** taken as prescribed."],
              ["Unspecified", "**F12.99**."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Hallucinogens and inhalants",
      sections: [
        {
          id: "s16-hallucinogen",
          title: "Phencyclidine and other hallucinogen use disorders",
          pages: "587–595",
          blocks: [
            { type: "p", text: "Hallucinogens have **two use disorders**: **phencyclidine use disorder** (PCP, ketamine and similar dissociative anesthetics) and **other hallucinogen use disorder** (specify the drug). Both use **F16** codes (mild **F16.10**, moderate or severe **F16.20**, remission F16.11/F16.21), and both have only **10 criteria**: **withdrawal is not established** in humans and does not apply. There is **no hallucinogen withdrawal diagnosis**." },
            { type: "table", caption: "The two groups (pp. 588–592)", head: ["", "Phencyclidine-like", "Other hallucinogens"], rows: [
              ["Drugs", "PCP (“angel dust”), **ketamine**, cyclohexamine, dizocilpine", "Phenylalkylamines (**mescaline, DOM, MDMA**); indoleamines (**psilocybin**, DMT); ergolines (**LSD**, morning glory seeds); **salvia**, jimsonweed. Cannabis is **excluded**"],
              ["Action", "Dissociative anesthetics: separation of mind and body; stupor and coma at high doses", "Altered perception, mood and cognition"],
              ["Duration", "Effects for hours; elimination **8 days or more**; urine positive up to **8 days**; psychosis may last weeks", "Salvia and DMT short; **LSD and MDMA** hours to days"],
              ["Prevalence", "Hallucinogen use disorder overall about **0.1%** (age 12+); PCP the primary drug in 0.3% of treatment admissions (62% men)", "About **0.1%** (0.4% at 18–25); **90%** of adults with it are 18–29; 60% men"],
              ["Notes", "Violence (feels attacked), analgesia, nystagmus, hypertension; ketamine is also an antidepressant", "**MDMA** carries the highest risk of use disorder and possible withdrawal; persisting neurotoxicity (memory, serotonin)"]
            ] },
            { type: "defs", title: "Other points (pp. 589–595)", items: [
              ["Common criteria", "Tolerance, hazardous use, use despite problems, giving up activities, much time spent."],
              ["Risk", "Sensation seeking (ecstasy, salvia); higher income, lower education, never married, urban; genetics 26%–79% in male twins."],
              ["Culture", "Religious use: **peyote** (Native American Church), psilocybin, **ayahuasca** (Santo Daime, União do Vegetal)."],
              ["Testing", "LSD is potent at **75 micrograms**, so routine toxicology may miss it."],
              ["Complications", "Hyperthermia, arrhythmias, hyponatremia, seizures, rhabdomyolysis, renal and hepatic failure, stroke."],
              ["Differential", "PCP can be added to cannabis or cocaine; rule out schizophrenia (people with paranoia may wrongly blame drugs)."]
            ] }
          ]
        },
        {
          id: "s16-hallucinogen-intox",
          title: "Hallucinogen intoxication and HPPD",
          pages: "595–601",
          blocks: [
            { type: "compare", title: "Two intoxications", items: [
              { title: "Phencyclidine intoxication (F16.120/220/920)", color: "clin", points: ["B: **belligerence, assaultiveness**, impulsiveness, unpredictability, agitation.", "C: **two or more within 1 hour**: **vertical or horizontal nystagmus**, hypertension or tachycardia, **numbness or reduced pain response**, ataxia, dysarthria, **muscle rigidity**, seizures or coma, **hyperacusis**.", "Confusion **without** hallucinations is common; CK and AST may rise.", "Clues: **nystagmus with bizarre violence**."] },
              { title: "Other hallucinogen intoxication (F16.120/220/920)", color: "case", points: ["B: marked anxiety or depression, ideas of reference, fear of “losing one’s mind,” paranoia.", "C: **perceptual changes in full wakefulness**: intensified perception, depersonalization, derealization, illusions, hallucinations, **synesthesias**.", "D: **two or more**: **pupillary dilation**, tachycardia, sweating, palpitations, blurred vision, tremors, incoordination.", "Minutes (salvia) to hours (LSD, MDMA)."] }
            ] },
            { type: "callout", kind: "mnemonic", title: "PCP signs: RAGE NASH", text: "**R**igidity · **A**taxia · **G**rand mal seizures or coma · **E**levated BP or pulse · **N**ystagmus · **A**nalgesia (numbness) · **S**lurred speech (dysarthria) · **H**yperacusis. Two or more within 1 hour, with belligerence." },
            { type: "criteria", title: "Hallucinogen persisting perception disorder in brief", code: "F16.983", pages: "598", items: [
              ["A", "After stopping a hallucinogen, **reexperiencing perceptual symptoms** felt while intoxicated: geometric hallucinations, false movement in peripheral fields, flashes or intensified colors, **trails**, positive afterimages, **halos**, macropsia, micropsia."],
              ["B", "Distress or impairment."],
              ["C", "Not due to a medical condition (brain lesions, infections, visual epilepsy) or better explained by delirium, neurocognitive disorder, schizophrenia or **hypnopompic** hallucinations."]
            ] },
            { type: "defs", title: "HPPD facts (pp. 598–600)", items: [
              ["Insight", "**Reality testing intact**: the person knows it is a drug effect. If not, consider psychosis."],
              ["Drug", "Mainly after **LSD**; not linked to the number of uses (can follow minimal exposure)."],
              ["Triggers", "Cannabis, alcohol, dark environments, exercise, noise."],
              ["Course", "Episodic or near-continuous for **weeks to years**; many suppress it and function. Prevalence among users about **4.2%**."],
              ["Differential", "Intoxication (HPPD persists weeks after); migraine aura, seizures, stroke, tumor; imaging usually normal."]
            ] },
            { type: "defs", title: "Suicide and induced disorders (pp. 597, 600–601)", items: [
              ["Suicide", "Intoxication may increase suicidal thoughts, but large surveys find **no independent link** between lifetime psychedelic use and suicidality; the relationship is **uncertain**."],
              ["Induced disorders", "PCP and other hallucinogens: **psychotic, bipolar, depressive, anxiety** disorders and intoxication delirium (also delirium from **ketamine** or other hallucinogens taken as prescribed)."],
              ["Unspecified", "Unspecified phencyclidine-related and hallucinogen-related disorders: both **F16.99**."]
            ] }
          ]
        },
        {
          id: "s16-inhalant",
          title: "Inhalant use disorder and intoxication",
          pages: "601–608",
          blocks: [
            { type: "defs", title: "Inhalant use disorder (pp. 601–605)", items: [
              ["What counts", "Volatile **hydrocarbons**: glues, fuels, paints, solvents (**toluene**, gasoline, butane). Name the substance when possible."],
              ["What does not", "**Nitrous oxide** and **amyl, butyl or isobutyl nitrite** are coded as **other (or unknown) substance**."],
              ["Criteria", "**10 criteria** (no withdrawal criterion; withdrawal-like symptoms do occur). Tolerance in about 10%."],
              ["Codes", "Mild **F18.10**; moderate or severe **F18.20**; remission F18.11/F18.21."],
              ["Clues", "Recurrent intoxication with **negative drug screens**; odor; **perioral or perinasal “glue-sniffer’s rash”**; paraphernalia; white matter disease; rhabdomyolysis."],
              ["Medical", "Pernicious anemia, **subacute combined degeneration**, neurocognitive disorder, leukoencephalopathy, liver and kidney damage, **methemoglobinemia**."],
              ["Fatal", "Anoxia (bag over the head), **“sudden sniffing death”** from arrhythmia, butane and propane toxicity."],
              ["Unintentional exposure", "Industrial accidents do **not** make a use disorder (but can cause intoxication)."]
            ] },
            { type: "table", caption: "Epidemiology (pp. 603–604)", head: ["Group", "12-month use", "Use disorder"], rows: [
              ["Age 12–17", "**2.3%**", "0.1%"],
              ["Adults", "0.21%", "0.04%"],
              ["Peak", "Poison-control calls peak at **age 14**", "Usually **remits** in early adulthood"],
              ["Sex", "Adolescent girls equal to or slightly above boys", "Very rare in **adult women**"],
              ["Risk", "Sensation seeking, impulsivity, maltreatment, **behavioral disinhibition**, isolated Indigenous communities, street children", ""]
            ] },
            { type: "criteria", title: "Inhalant intoxication in brief", code: "F18.120 / F18.220 / F18.920", pages: "605–606", items: [
              ["A", "Recent intended or **unintended** short-term high-dose exposure."],
              ["B", "Problematic changes (belligerence, assaultiveness, **apathy**, impaired judgment)."],
              ["C", "**Two or more** of: dizziness, nystagmus, incoordination, slurred speech, unsteady gait, lethargy, **depressed reflexes**, psychomotor retardation, tremor, generalized muscle weakness, blurred vision or diplopia, stupor or coma, euphoria."],
              ["D", "Not due to a medical condition or another disorder or substance."]
            ] },
            { type: "defs", title: "Intoxication facts (pp. 606–607)", items: [
              ["Duration", "Clears within **minutes to a few hours**; recurs with further use."],
              ["Differential", "Alcohol and sedatives (toxicology positive); toxic, metabolic, traumatic or infectious brain disorders."],
              ["Suicide", "Inhalant use is linked to suicidal thoughts and behavior, especially with anxiety, depression and trauma."],
              ["Induced disorders", "**Psychotic, depressive, anxiety**, delirium and **major or mild neurocognitive** disorder. Unspecified: **F18.99**."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Opioids",
      sections: [
        {
          id: "s16-oud",
          title: "Opioid use disorder",
          pages: "608–615",
          blocks: [
            { type: "table", caption: "Opioid use disorder codes and specifiers (pp. 609–610)", head: ["Severity", "Current", "Remission"], rows: [
              ["Mild", "**F11.10**", "F11.11"],
              ["Moderate or severe", "**F11.20**", "F11.21"],
              ["Extra specifiers", "**On maintenance therapy** (methadone, buprenorphine, or an antagonist such as **oral or depot naltrexone**); in a controlled environment", ""]
            ] },
            { type: "callout", kind: "key", title: "The medical-supervision rule", text: "Criteria **10 (tolerance)** and **11 (withdrawal)** are **not met** for people taking opioids **solely under appropriate medical supervision**. A pain patient on a stable prescribed dose with tolerance and withdrawal does not have opioid use disorder; one who takes **much more than prescribed**, not only for pain, may (pp. 609–610)." },
            { type: "defs", title: "Features (pp. 610–612)", items: [
              ["The class", "Natural (morphine, codeine), semisynthetic (**heroin**, oxycodone, hydrocodone, hydromorphone), synthetic (**methadone**, meperidine, tramadol, **fentanyl**, carfentanil); mixed agonist-antagonists (pentazocine, **buprenorphine**)."],
              ["Conditioning", "**Cue-reactive craving** persists long after withdrawal and drives relapse."],
              ["Sources", "Family and friends, exaggerated complaints, multiple prescribers, illegal market; clinicians may self-prescribe or divert."],
              ["Overdose", "**Unconsciousness, respiratory depression, pinpoint pupils**. Overdoses: prescribed opioids until 2009, heroin from 2010, and **fentanyl-type synthetics** outnumbering prescription deaths **since 2015**."],
              ["Associated", "Drug-related crime, licensing problems for clinicians, marital and work problems."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 611–612)", head: ["Topic", "Detail"], rows: [
              ["Nonmedical prescription opioid use (adults)", "4.1%–4.7%; heroin use 0.3%–0.4%"],
              ["Use disorder (adults)", "Prescription opioid **0.6%–0.9%**; heroin 0.1%–0.3%; adolescents 0.4% (prescription)"],
              ["Higher in", "Men, young adults, lower income or education"],
              ["Global", "26.8 million with opioid dependence (2016)"],
              ["Onset", "Late teens or early 20s; longer lag for prescription opioids than for heroin"],
              ["Course", "Often continues for years; **long-term abstinence only in a minority**"],
              ["Vietnam exception", "**Over 90%** of soldiers dependent in Vietnam stayed abstinent after returning home"],
              ["Women", "More often start after **sexual abuse or violence** or via a partner; **telescoping** (faster progression)"]
            ] },
            { type: "table", caption: "Markers and medical consequences (pp. 612–614)", head: ["Topic", "Detail"], rows: [
              ["Urine", "Most opioids positive for **12–36 hours**. **Fentanyl and oxycodone** are missed by standard tests; **methadone and buprenorphine** need specific tests"],
              ["Infections", "**Hepatitis C in up to 90%** of people who inject; HIV up to 60% in some areas; endocarditis; **tuberculosis**; tetanus, botulism"],
              ["Skin and veins", "Tracks, **skin-popping** with abscesses and round scars; nasal septum perforation from snorting"],
              ["Other", "Dry mouth and nose, severe **constipation**, miosis, sexual dysfunction, **opioid-induced hyperalgesia**"],
              ["Neonates", "Physiological dependence in about **half** of infants of mothers with OUD"],
              ["Mortality", "**6–20 times** the general population"],
              ["Suicide", "Higher risk of attempts and suicide; after an overdose the **standardized mortality ratio for suicide is 25.9** (higher in women); risk rises with higher prescribed doses"]
            ] },
            { type: "defs", title: "Differential and comorbidity (pp. 614–615)", items: [
              ["Alcohol or sedative intoxication", "**No miosis** and **no response to naloxone**; with co-ingestion, naloxone reverses only part."],
              ["Sedative withdrawal", "Anxiety and restlessness, but **no rhinorrhea, lacrimation or mydriasis**."],
              ["Independent disorders", "Opioids produce mental symptoms **less often** than most other drugs."],
              ["Comorbidity", "Tobacco, alcohol, cannabis, stimulant and **benzodiazepine** use disorders; PDD and MDD; bipolar I; PTSD; antisocial, borderline and schizotypal PD; childhood conduct disorder."]
            ] }
          ]
        },
        {
          id: "s16-opioid-iw",
          title: "Opioid intoxication and withdrawal",
          pages: "615–620",
          blocks: [
            { type: "criteria", title: "Opioid intoxication in brief", code: "F11.120 / F11.220 / F11.920", pages: "615–616", items: [
              ["A", "Recent use of an opioid."],
              ["B", "Problematic changes: **initial euphoria then apathy**, dysphoria, psychomotor agitation or retardation, impaired judgment."],
              ["C", "**Pupillary constriction** (or dilation from anoxia in severe overdose) **plus one or more**: **drowsiness or coma** (“on the nod”), **slurred speech**, **impaired attention or memory**."],
              ["D", "Not due to a medical condition or another disorder or substance."]
            ], specifiers: [["With perceptual disturbances", "Rare; F11.122 / F11.222 / F11.922"]] },
            { type: "criteria", title: "Opioid withdrawal in brief", code: "F11.13 / F11.23 / F11.93", pages: "617", items: [
              ["A", "Either **(1)** cessation or reduction after **heavy, prolonged** use (several weeks or longer), or **(2)** an **opioid antagonist** given after a period of opioid use."],
              ["B", "**Three or more** within minutes to several days: **dysphoric mood**; **nausea or vomiting**; **muscle aches**; **lacrimation or rhinorrhea**; **pupillary dilation, piloerection or sweating**; **diarrhea**; **yawning**; **fever**; **insomnia**."],
              ["C–D", "Distress or impairment; not better explained otherwise."]
            ] },
            { type: "callout", kind: "mnemonic", title: "Opioid withdrawal is the opposite of intoxication", text: "Intoxication: **pinpoint pupils, drowsy, constipated, dry**. Withdrawal: **dilated pupils, insomnia, diarrhea, running nose and eyes, yawning, gooseflesh, aches**. Clinically, it is miserable but rarely life-threatening in healthy adults, unlike alcohol and sedative withdrawal, which can cause **seizures**." },
            { type: "table", caption: "Withdrawal facts (pp. 617–619)", head: ["Topic", "Detail"], rows: [
              ["Precipitated withdrawal", "From antagonists (**naloxone, naltrexone, nalmefene**) or a partial agonist (**buprenorphine**) given to someone on a full agonist"],
              ["Short-acting (heroin)", "Begins **6–12 hours**, peaks **1–3 days**, subsides over **5–7 days**"],
              ["Long-acting (methadone, buprenorphine)", "Begins **2–4 days**"],
              ["Protracted", "Anxiety, dysphoria, **anhedonia, craving**, insomnia for weeks to months; cortisol and temperature changes up to 6 months"],
              ["First symptoms", "Anxiety, restlessness, an **“achy feeling” in back and legs**, irritability, pain sensitivity; **piloerection and fever** mean severe withdrawal"],
              ["Prevalence", "60% of people who used heroin in the past year"],
              ["Not a use disorder", "Withdrawal alone does **not** make OUD; craving and drug seeking suggest it. Pain patients can be tapered slowly"],
              ["Coding without OUD", "**F11.93**, e.g., a patient on prescribed opioids under medical supervision"]
            ] },
            { type: "defs", title: "Differential and induced disorders (pp. 616–619)", items: [
              ["Naloxone", "A response supports opioid intoxication; **no response** may mean co-ingestion (benzodiazepines, alcohol) or a high dose of a potent opioid such as **fentanyl**."],
              ["Dilated pupils", "Also in hallucinogen and stimulant intoxication, but without nausea, diarrhea, cramps, rhinorrhea and lacrimation."],
              ["Induced disorders", "**Depressive, anxiety (withdrawal), sleep and sexual** disorders and intoxication or withdrawal delirium (also delirium from opioids taken as prescribed). No opioid-induced psychotic disorder in Table 1. Unspecified: **F11.99**."]
            ] },
            { type: "case", title: "Clinical vignette: the emergency department", text: "A 27-year-old man is found unresponsive in a restaurant bathroom with a respiratory rate of 6 and pinpoint pupils. Two doses of naloxone produce only partial arousal. His friend says he snorted “heroin” and had taken alprazolam earlier. He has used heroin daily for 2 years, cannot stop despite losing his job, and needs more to get high.", point: "Opioid intoxication with a moderate or severe use disorder (**F11.220**). The poor naloxone response suggests **fentanyl** in the supply and/or **benzodiazepine co-ingestion**. Code the sedative intoxication separately; after recovery, offer **buprenorphine or methadone** and take-home naloxone." }
          ]
        }
      ]
    },
    {
      title: "Sedatives, hypnotics and anxiolytics",
      sections: [
        {
          id: "s16-sedative",
          title: "Sedative, hypnotic or anxiolytic use disorder",
          pages: "620–627",
          blocks: [
            { type: "defs", title: "The class (pp. 620–623)", items: [
              ["Included", "**Benzodiazepines**, “Z-drugs” (**zolpidem, zaleplon**), carbamates (meprobamate), **barbiturates**, barbiturate-like hypnotics (methaqualone, propofol): most prescription sleeping and antianxiety drugs."],
              ["Excluded", "**Buspirone** and gepirone (no significant misuse)."],
              ["Codes", "Mild **F13.10**; moderate or severe **F13.20**; remission F13.11/F13.21."],
              ["Prescribed use", "Tolerance and withdrawal from medicines **taken as prescribed** do **not** count; the diagnosis needs other criteria. Check for **falsified symptoms, extra doses or multiple prescribers**."],
              ["With other drugs", "Used to “**come down**” from cocaine or amphetamines, or to “**boost**” methadone."],
              ["Danger", "Tolerance to sedation develops faster than to **brainstem depression**, so escalating doses can cause sudden **respiratory depression**. Benzodiazepines are fairly safe alone but dangerous **with opioids or alcohol**."]
            ] },
            { type: "compare", title: "Two routes into the disorder (pp. 623–624)", items: [
              { title: "Recreational (more common)", color: "clin", points: ["Teens or 20s.", "Occasional party use escalates to daily use and high tolerance.", "Often with alcohol, opioid or stimulant use disorders."] },
              { title: "Prescription (less common)", color: "drug", points: ["Starts with a prescription for **anxiety, insomnia or somatic complaints**.", "Gradual dose escalation, justified by the original symptoms.", "Doctor shopping; high tolerance; withdrawal can include **seizures and delirium**.", "Also seen in people in their **40s and older**."] }
            ] },
            { type: "table", caption: "Epidemiology and markers (pp. 623–625)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence", "About **0.3%** (adolescents and adults); highest at **18–29 (0.5%)**, lowest at 65+ (0.04%)"],
              ["Sex", "No consistent US difference; higher in women in other countries"],
              ["Older adults", "Slower metabolism, more cognitive impairment and **falls** even at prescribed doses; intoxication can look like **progressive dementia**"],
              ["Risk", "Availability (own or family prescriptions), impulsivity, novelty seeking, personality disorders, **alcohol use disorder** (repeated prescriptions for alcohol-related anxiety or insomnia)"],
              ["Urine", "Long-acting drugs (diazepam, flurazepam) positive up to about **1 week**"],
              ["Suicide", "Hypnotics are linked to suicide, possibly through depression and insomnia"],
              ["Exam", "Slightly slower pulse and breathing, mild postural hypotension"]
            ] },
            { type: "defs", title: "Differential (pp. 625–626)", items: [
              ["Alcohol use disorder", "Mostly by history; liver damage and cardiomyopathy favor alcohol."],
              ["Medical", "Multiple sclerosis, **subdural hematoma**."],
              ["Appropriate long-term use", "Many people on long-term prescribed benzodiazepines have tolerance and withdrawal but **no use disorder**: no preoccupation, no role impairment."]
            ] }
          ]
        },
        {
          id: "s16-sedative-iw",
          title: "Sedative intoxication and withdrawal",
          pages: "627–632",
          blocks: [
            { type: "criteria", title: "Sedative, hypnotic or anxiolytic intoxication in brief", code: "F13.120 / F13.220 / F13.920", pages: "627", items: [
              ["A", "Recent use."],
              ["B", "Maladaptive changes (inappropriate sexual or aggressive behavior, lability, impaired judgment)."],
              ["C", "**One or more**: **slurred speech, incoordination, unsteady gait, nystagmus, impaired cognition, stupor or coma**."],
              ["D", "Not due to a medical condition or another disorder or substance."]
            ] },
            { type: "callout", kind: "exam", text: "Sedative and alcohol intoxication share the **same C list** (slurred speech, incoordination, unsteady gait, nystagmus, cognitive impairment, stupor or coma). Only the **smell of alcohol** or toxicology separates them. Sedative intoxication often brings **anterograde amnesia** like alcoholic blackouts, and people with neurocognitive disorder or TBI become intoxicated at **low doses** (pp. 627–628)." },
            { type: "criteria", title: "Sedative, hypnotic or anxiolytic withdrawal in brief", code: "F13.130 / F13.230 / F13.930", pages: "628–629", items: [
              ["A", "Cessation or reduction after **prolonged** use."],
              ["B", "**Two or more** within hours to a few days: autonomic hyperactivity; hand tremor; insomnia; nausea or vomiting; transient hallucinations or illusions; psychomotor agitation; anxiety; **grand mal seizures**."],
              ["C–D", "Distress or impairment; not better explained otherwise."]
            ], specifiers: [["With perceptual disturbances", "F13.132 / F13.232 / F13.932"]] },
            { type: "table", caption: "Withdrawal facts (pp. 629–631)", head: ["Topic", "Detail"], rows: [
              ["Seizures", "**Grand mal seizures in up to 20%–30%** of untreated withdrawal"],
              ["Short-acting (≤10 h: lorazepam, oxazepam, temazepam)", "Begins **6–8 hours**, peaks **day 2**, improves by days 4–5 (triazolam within hours)"],
              ["Long-acting (diazepam)", "May not begin for **more than 1 week**, peaks in **week 2**, eases in weeks 3–4"],
              ["Dose", "Can follow **15 mg diazepam** daily for months; likely at **40 mg**; seizures or delirium more likely at **100 mg**"],
              ["Delirium", "Can be life-threatening; diagnose **withdrawal delirium instead** of withdrawal when present"],
              ["Without use disorder", "**F13.930**, e.g., after stopping long-term prescribed benzodiazepines abruptly"],
              ["Differential", "Alcohol withdrawal (almost identical), hypoglycemia, DKA, **essential tremor**, other seizure causes, **return of an anxiety disorder** (but seizures and delirium tremens are never part of an anxiety disorder)"]
            ] },
            { type: "defs", title: "Induced disorders (pp. 631–632)", items: [
              ["Which ones", "**Psychotic, bipolar, depressive, anxiety (withdrawal), sleep, sexual**, delirium (intoxication, withdrawal, or as prescribed) and **major or mild neurocognitive** disorder."],
              ["Unspecified", "**F13.99**."]
            ] },
            { type: "case", title: "Clinical vignette: the abrupt stop", text: "A 62-year-old woman has taken alprazolam 4 mg daily for 10 years, as prescribed for panic disorder, without dose escalation. She ran out 2 days ago because her psychiatrist retired. She is tremulous, sweating, sleepless and anxious, and had a generalized seizure this morning.", point: "**F13.930 sedative, hypnotic or anxiolytic withdrawal** without a use disorder: tolerance and withdrawal from a drug taken as prescribed do not count toward a use disorder. Restart a benzodiazepine and taper slowly." }
          ]
        }
      ]
    },
    {
      title: "Stimulants",
      sections: [
        {
          id: "s16-stimulant",
          title: "Stimulant use disorder",
          pages: "632–640",
          blocks: [
            { type: "table", caption: "Stimulant use disorder codes (pp. 633–634): name the drug", head: ["Severity", "Amphetamine-type or other stimulant", "Cocaine"], rows: [
              ["Mild", "**F15.10**", "**F14.10**"],
              ["Moderate or severe", "**F15.20**", "**F14.20**"],
              ["Remission (mild / mod–sev)", "F15.11 / F15.21", "F14.11 / F14.21"]
            ] },
            { type: "defs", title: "The class (pp. 635–636)", items: [
              ["Amphetamine-type", "Amphetamine, dextroamphetamine, **methamphetamine**; also **methylphenidate, modafinil, armodafinil**; plant **khat** and synthetic **cathinones** (“bath salts”)."],
              ["Cocaine", "Leaves, paste, **hydrochloride powder** (snorted or injected), **freebase and crack** (smoked, very rapid)."],
              ["Elsewhere", "Caffeine, nicotine and **MDMA** (other hallucinogens) are classified separately."],
              ["Speed", "A use disorder can develop in as little as **1 week**; smoking and injecting progress over **weeks to months**, snorting and oral use over months to years."],
              ["Pattern", "Amphetamines act longer, so fewer doses a day. **Binges** (“runs”) end when supplies or energy run out, then a **crash**. Some users show **sensitization**."],
              ["High doses", "Aggression and violence; panic-like and GAD-like anxiety; **paranoid psychosis resembling schizophrenia**, tactile hallucinations usually recognized as drug effects."],
              ["Conditioning", "Craving at the sight of **any white powder**; persists after detoxification."],
              ["Most serious", "**Depression with suicidal thoughts during withdrawal**."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 636–638)", head: ["Topic", "Detail"], rows: [
              ["Amphetamine-type use disorder (12-month)", "**0.4%** (age 12+); 0.5% at 18–25; men 0.5%, women 0.2%"],
              ["Cocaine use disorder (12-month)", "**0.4%**; **0.7% at 18–25**; men 0.5%, women 0.2%"],
              ["Prescription stimulants", "6.6% of adults used; 1.9% misused; **0.2%** have a use disorder"],
              ["Age", "First regular use about **23**; treatment entry: methamphetamine 34, smoked cocaine 44, other cocaine 37"],
              ["Why started", "Weight control, performance; diverted ADHD medicine"],
              ["Methamphetamine route", "61% smoke, 26% inject, 9% snort"],
              ["Risk", "Bipolar disorder, schizophrenia, **antisocial PD**, Cluster B traits, conduct disorder, other SUDs, male sex; **men who have sex with men** (methamphetamine); prenatal cocaine exposure, community violence, partner violence"],
              ["Women", "More depression and PTSD with cocaine use disorder; higher progesterone lowers craving"]
            ] },
            { type: "table", caption: "Markers and medical consequences (pp. 638–640)", head: ["Topic", "Detail"], rows: [
              ["Cocaine urine", "**Benzoylecgonine** for **1–3 days** after one dose; **7–12 days** after repeated high doses"],
              ["Methamphetamine", "Urine **1–3 (up to 4) days**; **hair up to 90 days**"],
              ["Route-specific", "Snorting: sinusitis, **septal perforation**. Smoking: cough, bronchitis, pneumonitis, **pneumothorax**. Injecting: tracks, HIV, hepatitis C"],
              ["Cardiovascular", "**Chest pain** (most common), MI, arrhythmia, sudden death, **stroke** in young healthy people; methamphetamine and **pulmonary arterial hypertension**"],
              ["Brain", "Deficits in attention, memory, executive function; hyperthermia; dopaminergic neurotoxicity; seizures"],
              ["Mouth", "“**Meth mouth**”: gum disease, decay, sores, bruxism"],
              ["Pregnancy (cocaine)", "Placental abruption, preterm labor, **very low birth weight**"],
              ["Adulterants", "**Levamisole** in cocaine: **agranulocytosis**, febrile neutropenia"],
              ["Suicide", "Cocaine and amphetamine use disorders linked to suicidal thoughts and **suicide deaths**"],
              ["Hospital", "A stimulant use disorder raises 30-day readmission by 20%"]
            ] },
            { type: "defs", title: "Differential and comorbidity (pp. 639–640)", items: [
              ["PCP and “bath salts”", "Synthetic cathinones such as **mephedrone** and PCP can look identical; only **toxicology** separates them."],
              ["Independent disorders", "Schizophrenia, MDD: establish whether symptoms **preceded** use."],
              ["Comorbidity", "Sedating drugs taken to ease insomnia and nervousness (cocaine with heroin, PCP or alcohol; amphetamines with cannabis, heroin or alcohol); **PTSD, antisocial PD, ADHD, gambling disorder**."]
            ] }
          ]
        },
        {
          id: "s16-stimulant-iw",
          title: "Stimulant intoxication and withdrawal",
          pages: "640–645",
          blocks: [
            { type: "criteria", title: "Stimulant intoxication in brief", code: "F15.120/220/920 · F14.120/220/920", pages: "640–641", items: [
              ["A", "Recent use of an amphetamine-type substance, cocaine or other stimulant."],
              ["B", "Problematic changes: euphoria or **affective blunting**; changes in sociability; **hypervigilance**; interpersonal sensitivity; anxiety, tension or anger; **stereotyped behaviors**; impaired judgment."],
              ["C", "**Two or more**: tachycardia **or bradycardia**; **pupillary dilation**; elevated **or lowered** blood pressure; perspiration or chills; nausea or vomiting; weight loss; psychomotor agitation or retardation; muscle weakness, respiratory depression, **chest pain** or arrhythmia; confusion, **seizures**, dyskinesias, dystonias or coma."],
              ["D", "Not due to a medical condition or another disorder or substance."]
            ], specifiers: [["Specify the drug", "Amphetamine-type, cocaine or other stimulant"], ["With perceptual disturbances", "F15.122/222/922 · F14.122/222/922"]] },
            { type: "callout", kind: "exam", title: "Why some signs go both ways", text: "Stimulant effects (euphoria, tachycardia, hypertension, agitation) are usual. **Depressant effects** (sadness, **bradycardia**, low blood pressure, retardation) appear mainly with **chronic high-dose** use. Severe intoxication can cause convulsions, arrhythmias, **hyperpyrexia** and death (pp. 641–642)." },
            { type: "criteria", title: "Stimulant withdrawal in brief", code: "F15.13/23/93 · F14.13/23/93", pages: "643", items: [
              ["A", "Cessation or reduction of **prolonged** stimulant use."],
              ["B", "**Dysphoric mood** plus **two or more** within hours to several days: **fatigue**; **vivid, unpleasant dreams**; **insomnia or hypersomnia**; **increased appetite**; psychomotor retardation or agitation."],
              ["C–D", "Distress or impairment; not better explained otherwise."]
            ] },
            { type: "defs", title: "Withdrawal facts (pp. 643–644)", items: [
              ["The crash", "After binges: lassitude, depression, hunger, several days of rest; **suicidal thoughts** are the gravest risk."],
              ["Bradycardia", "Often present and a **reliable sign** of stimulant withdrawal."],
              ["Not in criteria", "**Anhedonia and craving** are common but not criteria."],
              ["Course", "Depressive symptoms usually resolve within **1 week**; cocaine-related mental disturbances usually clear in hours to days but can last **1 month**."],
              ["Without use disorder", "F15.93 (e.g., amphetamine taken under medical supervision) or F14.93."]
            ] },
            { type: "compare", title: "Intoxication vs withdrawal at a glance", items: [
              { title: "Intoxication (“up”)", color: "clin", points: ["Euphoria, vigor, talkative, grandiose, hypervigilant, paranoid.", "Dilated pupils, tachycardia, hypertension, sweating.", "Stereotypies; seizures and arrhythmia when severe."] },
              { title: "Withdrawal (“crash”)", color: "drug", points: ["Dysphoria, fatigue, hypersomnia, hunger, vivid dreams.", "Bradycardia.", "Suicidal depression; anhedonia and craving."] }
            ] },
            { type: "defs", title: "Induced disorders (pp. 644–645)", items: [
              ["Which ones", "**Psychotic, bipolar, depressive, anxiety, obsessive-compulsive, sleep, sexual**, delirium (intoxication or as prescribed) and **mild neurocognitive** disorder."],
              ["Unspecified", "**F15.99** (amphetamine-type or other) or **F14.99** (cocaine)."]
            ] },
            { type: "case", title: "Clinical vignette: the 3-day run", text: "A 31-year-old man brought in by police after 3 days of smoking methamphetamine without sleep is pacing, hypervigilant and convinced neighbors are filming him; he has dilated pupils, pulse 128, BP 168/100. He has used heavily for a year, injecting more for the same effect, and lost his job. Two days later, in the unit, he sleeps 16 hours, eats ravenously, is flat and tearful, and says life is pointless.", point: "First **amphetamine-type substance intoxication** (with a moderate or severe use disorder, F15.220), and if the paranoia lacks insight and predominates, consider **amphetamine-induced psychotic disorder** instead. Then **stimulant withdrawal (F15.23)**: assess suicide risk." }
          ]
        }
      ]
    },
    {
      title: "Tobacco and other substances",
      sections: [
        {
          id: "s16-tobacco",
          title: "Tobacco use disorder and withdrawal",
          pages: "645–652",
          blocks: [
            { type: "table", caption: "Tobacco codes are different (pp. 646, 649–651)", head: ["Diagnosis", "Code"], rows: [
              ["Tobacco use disorder, **mild**", "**Z72.0** (tobacco use, not an F code)"],
              ["Moderate or severe", "**F17.200**; in early or sustained remission **F17.201**"],
              ["**Tobacco withdrawal**", "**F17.203** only: withdrawal is coded as occurring with a **moderate or severe** use disorder"],
              ["Tobacco-induced sleep disorder", "F17.208 (a mild use disorder **cannot** be coded with it)"],
              ["Unspecified tobacco-related disorder", "**F17.209**"],
              ["Specifiers", "In remission; **on maintenance therapy** (e.g., nicotine replacement); in a controlled environment"]
            ] },
            { type: "callout", kind: "exam", title: "What tobacco does not have", text: "**No tobacco intoxication** diagnosis (intoxication is very rare). The only tobacco-induced disorder is **sleep disorder with onset during withdrawal**. DSM-5 renamed the class from “nicotine” to **“tobacco”** because harms come mostly from tobacco, not nicotine (pp. 545, 646)." },
            { type: "defs", title: "Features (pp. 646–647)", items: [
              ["Products", "Cigarettes, smokeless tobacco, pipes, cigars, **e-cigarettes**, nicotine gum and patch; addictiveness follows speed of delivery (smoked > oral > transdermal) and nicotine content."],
              ["Common criteria", "Withdrawal relief, craving, use despite disease, chain-smoking. Role failure is **rare**; hazardous use (smoking in bed) and social problems are intermediate but signal severity."],
              ["Tolerance", "Loss of nausea and dizziness; the first cigarette of the day is strongest."],
              ["Markers of dependence", "Smoking **within 30 minutes of waking**, daily use, more cigarettes, **waking at night** to smoke."],
              ["Biomarkers", "Breath **carbon monoxide**, nicotine and **cotinine**: measure use, weakly linked to the disorder."]
            ] },
            { type: "table", caption: "Epidemiology (pp. 647–649)", head: ["Topic", "Detail"], rows: [
              ["12-month tobacco use disorder", "**20%** of US adults; about **50% of daily smokers**"],
              ["Use", "19% used tobacco last year; 14% cigarettes; **24% of smokers are nondaily**"],
              ["Onset", "Starting **after 21 is rare**; most monthly adolescent smokers become daily"],
              ["Genetics", "About **50%** heritable"],
              ["Sex", "Men to women about **1.4:1** in the US"],
              ["Mental illness", "People with a psychiatric disorder are **3 times** more likely to have tobacco use disorder; smoking is about **twice** as common with MDD"],
              ["Suicide", "Past-year smoking: **2–3 times** the risk of suicidal thoughts and behavior; sixfold risk in discordant identical twins"],
              ["Mortality", "**Half** of smokers who do not stop die early from tobacco; secondhand smoke raises heart disease and cancer risk by 30%; long-term **nicotine medication** appears medically safe"]
            ] },
            { type: "criteria", title: "Tobacco withdrawal in brief", code: "F17.203", pages: "649–650", items: [
              ["A", "**Daily** tobacco use for at least **several weeks**."],
              ["B", "Abrupt stop or reduction followed **within 24 hours** by **four or more**: **irritability, frustration or anger; anxiety; difficulty concentrating; increased appetite; restlessness; depressed mood; insomnia**."],
              ["C–D", "Distress or impairment; not better explained otherwise."]
            ] },
            { type: "defs", title: "Withdrawal facts (pp. 650–651)", items: [
              ["Course", "Begins **within 24 hours**, peaks **2–3 days**, lasts **2–3 weeks**; over 1 month is uncommon."],
              ["Physiology", "Heart rate falls **5–12 bpm**; weight rises **2–3 kg (4–7 lb)** in the first year."],
              ["Frequency", "About **50%** of daily smokers who quit for 2+ days have four or more symptoms; anxiety, irritability and poor concentration are most common, depression and insomnia least."],
              ["Drug levels", "Smoking (not nicotine) **induces metabolism** of many psychotropics (via other compounds in tobacco); stopping can **raise blood levels** (e.g., clozapine, olanzapine)."],
              ["On the ward", "Admission to a **smoke-free unit** can cause withdrawal that mimics or masks other disorders or akathisia; **nicotine relief confirms** it."]
            ] }
          ]
        },
        {
          id: "s16-other",
          title: "Other (or unknown) substance-related disorders",
          pages: "652–661",
          blocks: [
            { type: "defs", title: "What belongs here (pp. 653–654)", items: [
              ["Other substances", "**Anabolic steroids**, NSAIDs, **corticosteroids**, antiparkinsonian drugs, antihistamines, **nitrous oxide**, **amyl, butyl and isobutyl nitrites** (“poppers”), **betel nut**, **kava**. Name the substance (e.g., “nitrous oxide use disorder”)."],
              ["Unknown substances", "Unidentified drugs, new black-market drugs, or familiar drugs sold under false names; reclassify when identified."],
              ["Not here", "**Synthetic cannabinoids** → cannabis; **propofol** → sedatives; **cathinones and khat** → stimulants; hydrocarbon gases → inhalants."],
              ["Codes", "Use disorder F19.10 / F19.20 (remission F19.11 / F19.21); intoxication F19.120/220/920; withdrawal F19.130/230/930 (perceptual disturbances: last digit 2); unspecified **F19.99**."]
            ] },
            { type: "defs", title: "Clinical points (pp. 654–660)", items: [
              ["Nitrous oxide", "Misused by **medical and dental staff** and **food service workers** (whipped-cream chargers); heavy use causes **myeloneuropathy, subacute combined degeneration**, peripheral neuropathy and psychosis. Lifetime use 4.6%."],
              ["Nitrites", "Lifetime use 2.5%; more common among gay men and adolescents with conduct disorder."],
              ["Intoxication criteria", "A reversible **substance-specific** syndrome with problematic CNS changes; **no symptom count**: clinical judgment, history of the same street name or source, or clusters of ED cases help."],
              ["Hit-and-run toxins", "**MPTP**, a contaminant of synthetic opioid production, kills dopamine cells and causes **permanent parkinsonism**; some mushrooms act only after days."],
              ["Withdrawal", "Must match the known withdrawal syndrome of the drug; severity ranges from mild discomfort to fatal."],
              ["Medication examples", "Corticosteroid-induced bipolar or anxiety disorder; **venlafaxine-induced anxiety disorder, with onset during withdrawal**."],
              ["Testing", "Routine screens miss truly novel drugs; specialized laboratories may be needed."],
              ["Lethargy", "Can mean withdrawal from one drug **or** intoxication with another."]
            ] }
          ]
        }
      ]
    },
    {
      title: "Gambling disorder and putting it together",
      sections: [
        {
          id: "s16-gambling",
          title: "Gambling disorder",
          pages: "661–665",
          blocks: [
            { type: "criteria", title: "Gambling disorder in brief", code: "F63.0", pages: "661", items: [
              ["A", "Persistent, recurrent problematic gambling with **four or more** in **12 months**:", [
                "Needs **increasing amounts** to get the desired excitement.",
                "**Restless or irritable** when cutting down.",
                "Repeated **unsuccessful efforts** to control or stop.",
                "**Preoccupied** with gambling.",
                "Gambles when **distressed**.",
                "Returns to get even: **“chasing” losses**.",
                "**Lies** to conceal gambling.",
                "Has **jeopardized or lost** a relationship, job or opportunity.",
                "Relies on others for **bailouts**."
              ]],
              ["B", "Not better explained by a **manic episode**."]
            ], specifiers: [["Course", "**Episodic** (symptoms subside for several months between periods) or **persistent** (continuous for multiple years)"], ["Remission", "Early (3 to <12 months) or sustained (≥12 months); **no craving exception**"], ["Severity", "**Mild 4–5** · **Moderate 6–7** · **Severe 8–9**"]] },
            { type: "callout", kind: "mnemonic", title: "Gambling’s own items", text: "Remember the four items that have no substance counterpart: **chasing losses**, **lying**, **bailouts**, **gambling when distressed**. The other five mirror substance use (tolerance-like escalation, withdrawal-like restlessness, failed control, preoccupation, lost opportunities). Note the threshold is **4**, not 2." },
            { type: "defs", title: "Features (pp. 662)", items: [
              ["Only one", "Gambling is the **only behavioral addiction** with enough data for Section II. **Internet gaming disorder** is in Section III."],
              ["Dopaminergic drugs", "Gambling caused by **dopamine agonists** (e.g., for Parkinson’s disease) **is still diagnosed** as gambling disorder."],
              ["Severity clues", "Preoccupation and chasing are endorsed most in mild cases; **jeopardizing relationships** and **bailouts** mark severe cases."],
              ["Thinking", "Denial, superstition, illusion of control; money seen as both cause and cure."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 662–664)", head: ["Topic", "Detail"], rows: [
              ["Past-year prevalence", "**0.2%–0.3%** (US); 0.1%–0.7% internationally"],
              ["Lifetime", "0.4%–1.0%; women about 0.2%, men 0.6%"],
              ["Onset", "Adolescence to older age; **young men (18–21)** early; **women more often in mid or later life**"],
              ["Course", "Develops over years; **spontaneous long-term remissions** occur; past problems predict future problems"],
              ["Types", "Young people: **sports betting**, internet; older adults: **slots and bingo**; women: slots and bingo; men: cards, sports, horses"],
              ["Gaming", "**Loot boxes** overlap with gambling"],
              ["Treatment seeking", "**Under 10%**"],
              ["Risk", "Childhood gambling, antisocial PD, mood disorders, **alcohol use disorder** (also in relatives), ADHD and anxiety (persistence); some Indigenous communities"],
              ["Suicide", "Up to **half** in treatment have suicidal thoughts and **17%** attempts; **15-fold** suicide mortality in Sweden"],
              ["Comorbidity", "About **three-quarters** have another disorder that **preceded** the gambling; poor health, tachycardia and angina"]
            ] },
            { type: "defs", title: "Differential (p. 665)", items: [
              ["Professional gambling", "Risks limited, **discipline** central."],
              ["Social gambling", "With friends, limited time, **acceptable losses**."],
              ["Manic episode", "Diagnose gambling disorder only if gambling also occurs **outside** mania; gambling can produce **manic-like** behavior that fades away from gambling."],
              ["Personality disorders", "Antisocial and others: diagnose both if both are met."]
            ] }
          ]
        },
        {
          id: "s16-compare",
          title: "Comparing the classes",
          pages: "543–665",
          blocks: [
            { type: "table", caption: "Intoxication and withdrawal: thresholds and hallmarks", head: ["Class", "Intoxication (C count)", "Withdrawal (B count)", "Hallmark"], rows: [
              ["Alcohol", "≥1 of 6", "≥2 of 8, hours–days", "Withdrawal **seizures and delirium tremens**"],
              ["Caffeine", "**≥5 of 12**", "≥3 of 5, within 24 h", "**Headache**"],
              ["Cannabis", "≥2 of 4, within 2 h", "≥3 of 7, within about a week", "Red eyes, munchies; withdrawal is mostly **emotional**"],
              ["Phencyclidine", "≥2 of 8, within 1 h", "None", "**Nystagmus**, violence, analgesia"],
              ["Other hallucinogens", "≥2 of 7 + perceptual changes", "None", "Mydriasis; **HPPD**"],
              ["Inhalants", "≥2 of 13", "None", "Negative screens, glue-sniffer’s rash"],
              ["Opioids", "Miosis + ≥1 of 3", "≥3 of 9", "**Pinpoint pupils**; withdrawal **yawning, rhinorrhea**"],
              ["Sedatives", "≥1 of 6 (as alcohol)", "≥2 of 8 (as alcohol)", "Seizures in up to **20%–30%** untreated"],
              ["Stimulants", "≥2 of 9", "Dysphoria + ≥2 of 5", "Paranoia; withdrawal **crash** with bradycardia"],
              ["Tobacco", "**None**", "≥4 of 7, within 24 h", "Withdrawal only F17.203"]
            ] },
            { type: "table", caption: "Classes without some diagnoses", head: ["Missing", "Classes"], rows: [
              ["No withdrawal diagnosis or criterion", "**Phencyclidine, other hallucinogens, inhalants**"],
              ["No use disorder", "**Caffeine** (Section III only)"],
              ["No intoxication", "**Tobacco**"],
              ["Only these induced disorders", "Caffeine: anxiety, sleep · Tobacco: sleep · Opioids: no psychosis, no bipolar"]
            ] },
            { type: "compare", title: "Pupils and pulse", items: [
              { title: "Small pupils", color: "drug", points: ["**Opioid intoxication** (dilated if anoxic overdose)."] },
              { title: "Large pupils", color: "clin", points: ["**Stimulant** intoxication.", "**Hallucinogen** intoxication.", "**Opioid withdrawal**."] },
              { title: "Nystagmus", color: "case", points: ["Alcohol, sedatives, inhalants.", "**PCP** (vertical or horizontal)."] }
            ] }
          ]
        },
        {
          id: "s16-approach",
          title: "A practical approach and the classic traps",
          pages: "543–665",
          blocks: [
            { type: "steps", title: "Six steps for a patient who uses substances", items: [
              ["1. Which substances?", "History from the patient and others, toxicology (know what tests miss: fentanyl, synthetic drugs, inhalants, LSD), and the substance named in the diagnosis."],
              ["2. Is there a use disorder?", "Count the 11 criteria (10 for hallucinogens and inhalants) in the past 12 months; exclude tolerance and withdrawal from medicines taken as prescribed; rate severity and remission."],
              ["3. Intoxication or withdrawal now?", "Apply the class-specific criteria; note perceptual disturbances; record each substance separately."],
              ["4. Is there an induced mental disorder?", "Symptoms in excess of usual intoxication or withdrawal; timing; the 1-month rule; not only during delirium."],
              ["5. Code once", "One combined code: the induced disorder or intoxication or withdrawal with the use disorder in the 4th character; do not add a separate use-disorder code."],
              ["6. Safety and comorbidity", "Overdose, suicide (especially alcohol, opioids, gambling), withdrawal seizures and delirium; infections; other mental disorders."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) **Two** of 11 criteria in 12 months, not one. 2) Tolerance and withdrawal from **prescribed** medicines do not count. 3) Remission allows **craving**. 4) Moderate and severe share **one code**. 5) Don’t add the use-disorder code when an induced disorder is coded. 6) No withdrawal diagnosis for **PCP, hallucinogens, inhalants**. 7) No **caffeine use disorder**; no **tobacco intoxication**. 8) Mild tobacco use disorder is **Z72.0**; tobacco withdrawal is **F17.203**. 9) Opioid intoxication needs **miosis**. 10) Nitrous oxide and nitrites are **other (or unknown)**, not inhalants. 11) **Gambling** needs **4** of 9 and is **F63.0**; dopamine-agonist gambling still counts. 12) Independent disorders **precede** use or **persist beyond about 1 month** of abstinence." },
            { type: "p", text: "Practice with the [[helper:substance|substance helper]] and the [[helper:induced|induced or independent helper]]." }
          ]
        }
      ]
    }
  ]
});
