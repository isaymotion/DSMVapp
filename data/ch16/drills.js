/* Chapter 16 practice drills.
   dxline:   build the full diagnosis line (diagnosis, specifier, code).
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var SEV = ["Mild", "Moderate", "Severe"];
  var REM = ["Current", "In early remission", "In sustained remission"];
  var UD = ["Alcohol use disorder", "Opioid use disorder", "Cannabis use disorder", "Stimulant use disorder (cocaine)", "Stimulant use disorder (amphetamine-type)", "Sedative, hypnotic or anxiolytic use disorder", "Tobacco use disorder", "Other (or unknown) substance use disorder"];
  var SYN = ["Intoxication", "Intoxication, with perceptual disturbances", "Withdrawal", "Withdrawal, with perceptual disturbances", "Withdrawal delirium"];
  var COM = ["With mild use disorder", "With moderate or severe use disorder", "Without use disorder"];

  SP.add("ch16", "dxline", [
    {
      id: "w16-01", tag: "Alcohol",
      "case": "A 44-year-old woman meets five alcohol use disorder criteria. No intoxication or withdrawal is present today.",
      parts: [
        { label: "Diagnosis", options: UD, answer: 0 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Status", options: REM, answer: 0 },
        { label: "Code", options: ["F10.10", "F10.20", "F10.21", "F10.11"], answer: 1 }
      ],
      line: "**F10.20** Alcohol use disorder, moderate",
      why: "Four or five criteria = moderate. Moderate and severe share F10.20."
    },
    {
      id: "w16-02", tag: "Alcohol withdrawal",
      "case": "A man with severe alcohol use disorder, day 2 after his last drink: tremor, sweating, pulse 118, insomnia, and visual hallucinations he knows are not real. He is oriented.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 3 },
        { label: "Use disorder", options: COM, answer: 1 },
        { label: "Code", options: ["F10.230", "F10.232", "F10.932", "F10.20 + F10.230", "F10.121"], answer: 1 }
      ],
      line: "**F10.232** Alcohol withdrawal, with perceptual disturbances, with severe alcohol use disorder",
      why: "Insight and no delirium → with perceptual disturbances. One code includes the use disorder."
    },
    {
      id: "w16-03", tag: "Opioid",
      "case": "A 30-year-old with moderate heroin use disorder arrives in withdrawal: yawning, rhinorrhea, dilated pupils, diarrhea, aches.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 2 },
        { label: "Use disorder", options: COM, answer: 1 },
        { label: "Code", options: ["F11.13", "F11.23", "F11.93", "F11.20 + F11.23", "F11.220"], answer: 1 }
      ],
      line: "**F11.23** Opioid withdrawal, with moderate opioid use disorder",
      why: "Do not add F11.20; the use disorder is in the 4th character."
    },
    {
      id: "w16-04", tag: "Opioid remission",
      "case": "A man with past severe opioid use disorder has taken methadone for 2 years with no criteria except craving.",
      parts: [
        { label: "Diagnosis", options: UD, answer: 1 },
        { label: "Status", options: REM, answer: 2 },
        { label: "Extra specifier", options: ["On maintenance therapy", "In a controlled environment", "None"], answer: 0 },
        { label: "Code", options: ["F11.20", "F11.21", "F11.11", "F11.93"], answer: 1 }
      ],
      line: "**F11.21** Opioid use disorder, severe, in sustained remission, on maintenance therapy",
      why: "≥12 months without criteria (craving allowed); agonist treatment = on maintenance therapy."
    },
    {
      id: "w16-05", tag: "Cannabis",
      "case": "A daily cannabis user with mild cannabis use disorder is intoxicated: red eyes, dry mouth, tachycardia, anxiety; she hears music that isn’t there but knows it is the drug. No delirium.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 1 },
        { label: "Use disorder", options: COM, answer: 0 },
        { label: "Code", options: ["F12.120", "F12.122", "F12.222", "F12.922", "F12.10 + F12.122"], answer: 1 }
      ],
      line: "**F12.122** Cannabis intoxication, with perceptual disturbances, with mild cannabis use disorder",
      why: "Perceptual disturbances change the last digit to 2; mild use disorder makes the 4th character 1."
    },
    {
      id: "w16-06", tag: "Cocaine",
      "case": "A man with severe cocaine use disorder is euphoric, hypervigilant and hypertensive with dilated pupils after smoking crack. No hallucinations.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 0 },
        { label: "Use disorder", options: COM, answer: 1 },
        { label: "Code", options: ["F15.220", "F14.220", "F14.120", "F14.920", "F14.20"], answer: 1 }
      ],
      line: "**F14.220** Cocaine intoxication, with severe cocaine use disorder",
      why: "Cocaine is **F14** (amphetamine-type is F15)."
    },
    {
      id: "w16-07", tag: "Methamphetamine",
      "case": "Two days after a methamphetamine binge, a woman with mild methamphetamine use disorder is dysphoric, exhausted, hypersomnic and hungry.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 2 },
        { label: "Use disorder", options: COM, answer: 0 },
        { label: "Code", options: ["F15.13", "F15.23", "F14.13", "F15.93", "F15.10"], answer: 0 }
      ],
      line: "**F15.13** Amphetamine-type substance (methamphetamine) withdrawal, with mild use disorder",
      why: "Name the drug; amphetamine-type is F15; mild = 4th character 1."
    },
    {
      id: "w16-08", tag: "Benzodiazepine",
      "case": "A woman taking prescribed clonazepam as directed for years stops abruptly and has tremor, sweating, insomnia and a seizure. No use disorder criteria.",
      parts: [
        { label: "Syndrome", options: SYN, answer: 2 },
        { label: "Use disorder", options: COM, answer: 2 },
        { label: "Code", options: ["F13.230", "F13.930", "F13.130", "F13.20", "F10.930"], answer: 1 }
      ],
      line: "**F13.930** Sedative, hypnotic or anxiolytic (clonazepam) withdrawal, without use disorder",
      why: "Withdrawal from prescribed use: 4th character 9."
    },
    {
      id: "w16-09", tag: "Tobacco",
      "case": "A man with moderate tobacco use disorder stopped smoking yesterday and now has irritability, anxiety, poor concentration, restlessness and hunger.",
      parts: [
        { label: "Diagnosis", options: ["Tobacco withdrawal", "Tobacco intoxication", "Tobacco use disorder only", "Caffeine withdrawal"], answer: 0 },
        { label: "Code", options: ["F17.203", "F17.200", "Z72.0", "F17.209"], answer: 0 }
      ],
      line: "**F17.203** Tobacco withdrawal (with moderate tobacco use disorder)",
      why: "Four or more of seven within 24 hours; tobacco withdrawal has a single code."
    },
    {
      id: "w16-10", tag: "Tobacco mild",
      "case": "A woman smoking 8 cigarettes daily meets two tobacco use disorder criteria.",
      parts: [
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["Z72.0", "F17.200", "F17.210", "F17.203"], answer: 0 }
      ],
      line: "**Z72.0** Tobacco use disorder, mild",
      why: "Mild tobacco use disorder is coded Z72.0, not an F code."
    },
    {
      id: "w16-11", tag: "Caffeine",
      "case": "After 1.2 g of caffeine, a student has five intoxication symptoms and misses an exam.",
      parts: [
        { label: "Diagnosis", options: ["Caffeine intoxication", "Caffeine use disorder", "Stimulant intoxication, amphetamine-type", "Caffeine withdrawal"], answer: 0 },
        { label: "Code", options: ["F15.920", "F15.93", "F15.120", "F15.99"], answer: 0 }
      ],
      line: "**F15.920** Caffeine intoxication",
      why: "Caffeine shares the F15 class with amphetamine-type stimulants; there is no caffeine use disorder."
    },
    {
      id: "w16-12", tag: "Hallucinogens",
      "case": "Months after stopping LSD, a man has trails, halos and intensified colors with insight and distress.",
      parts: [
        { label: "Diagnosis", options: ["Hallucinogen persisting perception disorder", "Other hallucinogen intoxication", "Hallucinogen withdrawal", "Hallucinogen-induced psychotic disorder"], answer: 0 },
        { label: "Code", options: ["F16.983", "F16.920", "F16.99", "F16.159"], answer: 0 }
      ],
      line: "**F16.983** Hallucinogen persisting perception disorder",
      why: "There is no hallucinogen withdrawal diagnosis."
    },
    {
      id: "w16-13", tag: "Gambling",
      "case": "A woman meets seven gambling disorder criteria continuously for 3 years, never during mania.",
      parts: [
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Course", options: ["Episodic", "Persistent"], answer: 1 },
        { label: "Code", options: ["F63.0", "F63.81", "Z72.6", "F19.20"], answer: 0 }
      ],
      line: "**F63.0** Gambling disorder, persistent, moderate",
      why: "Mild 4–5, **moderate 6–7**, severe 8–9; continuous for years = persistent."
    },
    {
      id: "w16-14", tag: "Induced",
      "case": "A man with severe cocaine use disorder develops persecutory delusions without insight during a binge, persisting several days.",
      parts: [
        { label: "Diagnosis", options: ["Cocaine-induced psychotic disorder", "Cocaine intoxication, with perceptual disturbances", "Schizophrenia", "Brief psychotic disorder"], answer: 0 },
        { label: "Onset", options: ["With onset during intoxication", "With onset during withdrawal"], answer: 0 },
        { label: "Code", options: ["F14.259", "F14.159", "F14.959", "F14.20 + F14.959"], answer: 0 }
      ],
      line: "**F14.259** Cocaine-induced psychotic disorder, with onset during intoxication, with severe cocaine use disorder",
      why: "No insight → induced psychotic disorder; one code including the use disorder."
    }
  ]);

  SP.add("ch16", "counting", [
    {
      id: "n16-01", tag: "Use disorder criteria",
      "case": "A 35-year-old man over the past year:",
      ask: "Mark the findings that count toward alcohol use disorder. Is the threshold of 2 met?",
      items: [
        ["Drinks more than planned at most parties", true, "Larger amounts than intended (1)."],
        ["Drinks two glasses of wine with dinner nightly without problems", false, "Low-dose daily drinking alone is not a criterion."],
        ["Drove after drinking several times", true, "Hazardous use (8)."],
        ["Hangovers made him miss work repeatedly", true, "Role failure (5)."],
        ["Got drunk once at a wedding", false, "Occasional intoxication is not a criterion."]
      ],
      need: 2,
      met: true,
      why: "Three criteria = mild alcohol use disorder (F10.10)."
    },
    {
      id: "n16-02", tag: "Prescribed medicines",
      "case": "A woman on prescribed oxycodone for cancer pain:",
      ask: "Mark the findings that count toward opioid use disorder. Is the threshold met?",
      items: [
        ["Needs higher doses for the same pain relief", false, "Tolerance under medical supervision does not count."],
        ["Gets sick when a dose is late", false, "Withdrawal under medical supervision does not count."],
        ["Takes doses exactly as prescribed", false, "Appropriate use."],
        ["Worries about addiction", false, "Not a criterion."]
      ],
      met: false,
      why: "No criteria count: tolerance and withdrawal from supervised use are excluded."
    },
    {
      id: "n16-03", tag: "Remission",
      "case": "A man with past severe cocaine use disorder, abstinent 5 months:",
      ask: "Which findings are compatible with early remission? Is he in early remission?",
      items: [
        ["Strong craving when he passes his old neighborhood", true, "Craving is allowed in remission."],
        ["No use or problems for 5 months", true, "No criteria for ≥3 but <12 months."],
        ["Lives in a supervised sober house", true, "Add “in a controlled environment” only if access is restricted."],
        ["Used cocaine once last month and missed work", false, "That meets criteria again."]
      ],
      met: false,
      why: "The relapse last month with role failure breaks remission. Without it, he would be in early remission."
    },
    {
      id: "n16-04", tag: "Alcohol withdrawal",
      "case": "Thirty hours after stopping heavy drinking, a man has:",
      ask: "Mark the alcohol withdrawal signs. Are two or more present?",
      items: [
        ["Pulse 116 and sweating", true, "Autonomic hyperactivity."],
        ["Hand tremor", true, "Tremor."],
        ["Pinpoint pupils", false, "Points to opioid intoxication."],
        ["Yawning and runny nose", false, "Opioid withdrawal signs."],
        ["Insomnia", true, "Insomnia."]
      ],
      need: 2,
      met: true,
      why: "Three alcohol withdrawal signs; yawning, rhinorrhea and miosis belong to opioids."
    },
    {
      id: "n16-05", tag: "Opioid withdrawal",
      "case": "A woman 10 hours after her last heroin dose:",
      ask: "Mark the opioid withdrawal signs. Are three or more present?",
      items: [
        ["Yawning", true, "Yawning."],
        ["Lacrimation and rhinorrhea", true, "Lacrimation or rhinorrhea."],
        ["Pupillary dilation and gooseflesh", true, "Mydriasis or piloerection."],
        ["Grand mal seizure", false, "Not an opioid withdrawal sign (alcohol, sedatives)."],
        ["Pinpoint pupils", false, "Intoxication sign."]
      ],
      need: 3,
      met: true,
      why: "Three opioid withdrawal signs."
    },
    {
      id: "n16-06", tag: "Cannabis intoxication",
      "case": "Within an hour of smoking, a man has:",
      ask: "Mark the cannabis intoxication signs (Criterion C). Are two or more present?",
      items: [
        ["Conjunctival injection", true, "Red eyes."],
        ["Increased appetite", true, "Munchies."],
        ["Nystagmus", false, "Suggests alcohol, sedatives, inhalants or PCP."],
        ["Dry mouth", true, "Dry mouth."],
        ["Pinpoint pupils", false, "Opioid sign."]
      ],
      need: 2,
      met: true,
      why: "Three of four cannabis signs within 2 hours."
    },
    {
      id: "n16-07", tag: "Stimulant withdrawal",
      "case": "Two days after a cocaine binge:",
      ask: "Stimulant withdrawal requires dysphoric mood plus two physiological changes. Mark those present. Is it met?",
      items: [
        ["Dysphoric mood", true, "Required."],
        ["Hypersomnia", true, "Insomnia or hypersomnia."],
        ["Increased appetite", true, "Increased appetite."],
        ["Craving", false, "Common but not a criterion."],
        ["Anhedonia", false, "Common but not a criterion."]
      ],
      met: true,
      why: "Dysphoria plus two changes; craving and anhedonia are not criteria."
    },
    {
      id: "n16-08", tag: "Tobacco withdrawal",
      "case": "The day after stopping smoking:",
      ask: "Mark the tobacco withdrawal symptoms. Are four or more present?",
      items: [
        ["Irritability", true, "Irritability, frustration or anger."],
        ["Difficulty concentrating", true, ""],
        ["Increased appetite", true, ""],
        ["Headache", false, "Caffeine withdrawal hallmark; not a tobacco criterion."],
        ["Fatigue", false, "Not a tobacco criterion."]
      ],
      need: 4,
      met: false,
      why: "Only three tobacco symptoms; four are required."
    },
    {
      id: "n16-09", tag: "Gambling",
      "case": "A man over the past year:",
      ask: "Mark the gambling disorder criteria. Are four or more met?",
      items: [
        ["Returns the next day to win back losses", true, "Chasing (6)."],
        ["Lies to his partner about gambling", true, "Lying (7)."],
        ["Plays poker monthly with friends with a fixed budget", false, "Social gambling."],
        ["Gambles when he feels depressed", true, "Gambles when distressed (5)."],
        ["Asked his brother to pay his gambling debts", true, "Bailout (9)."]
      ],
      need: 4,
      met: true,
      why: "Four criteria = mild gambling disorder (F63.0)."
    },
    {
      id: "n16-10", tag: "Induced vs independent",
      "case": "A woman with alcohol use disorder and depression:",
      ask: "Mark the findings that point to an independent (not induced) depressive disorder. Do they establish an independent disorder?",
      items: [
        ["Depressive episodes during 3 years of sobriety", true, "Episodes during abstinence."],
        ["Depression began 2 years before she started drinking", true, "Symptoms preceded use."],
        ["Depression persists 2 months after detoxification", true, "Persistence beyond about 1 month."],
        ["Mood lifted within 10 days of stopping alcohol", false, "Suggests an induced disorder."]
      ],
      met: true,
      why: "Onset before use, episodes in sobriety and persistence beyond a month point to independent MDD (diagnose both)."
    }
  ]);
})();
