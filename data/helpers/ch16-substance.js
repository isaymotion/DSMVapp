/*
 * Diagnostic helpers for Chapter 16 (Substance-Related and Addictive Disorders), DSM-5-TR pp. 543–665.
 * "substance": rate a use disorder, identify an intoxication or withdrawal syndrome, or assess gambling, with codes.
 * "induced": decide whether a psychiatric syndrome is substance-induced or independent.
 */
(function () {
  var L = function (sec, label) { return { ch: "ch16", sec: sec, label: label }; };
  SP.helpers = (SP.helpers || []).concat([
    {
      id: "substance",
      chapter: "ch16",
      title: "Which substance diagnosis?",
      summary: "Rate a substance use disorder, recognize the intoxication or withdrawal syndrome in front of you, or assess gambling, and get the code.",
      caution: "A teaching aid built from DSM-5-TR pp. 543–665. Intoxication and withdrawal can be emergencies: check airway, breathing, glucose, vital signs and co-ingestions first, and assess suicide risk. Confirm codes against the manual.",
      start: "what",
      nodes: {
        what: {
          q: "What are you assessing?",
          help: "A use disorder describes the pattern over 12 months; intoxication and withdrawal describe the current state. ICD-10-CM combines them into one code.",
          options: [
            { label: "The pattern of use over the past year", to: "count", note: "Use disorder." },
            { label: "The patient’s current state after using or stopping", to: "state", note: "Intoxication or withdrawal." },
            { label: "Gambling", to: "gamble", note: "Gambling disorder." }
          ]
        },
        count: {
          q: "How many of the 11 criteria have been met in the past 12 months?",
          help: "Do not count tolerance or withdrawal from medicines taken as prescribed. Hallucinogen and inhalant use disorders have only 10 criteria (no withdrawal).",
          options: [
            { label: "0–1", to: "r:nouse", note: "Below threshold." },
            { label: "2–3", to: "r:mild", note: "Mild." },
            { label: "4–5", to: "r:moderate", note: "Moderate." },
            { label: "6 or more", to: "r:severe", note: "Severe." },
            { label: "Full criteria in the past, none now (except craving) for 3–12 months", to: "r:early", note: "Early remission." },
            { label: "Full criteria in the past, none now (except craving) for 12 months or more", to: "r:sustained", note: "Sustained remission." }
          ]
        },
        state: {
          q: "Which picture fits best?",
          help: "Look at pupils, vital signs, gait and speech, the timing since last use, and toxicology.",
          options: [
            { label: "Pinpoint pupils, drowsy or “on the nod,” slurred speech", to: "r:opintox", note: "Opioid intoxication." },
            { label: "Yawning, runny nose and eyes, dilated pupils, gooseflesh, aches, diarrhea", to: "r:opwd", note: "Opioid withdrawal." },
            { label: "Slurred speech, unsteady gait, nystagmus, impaired judgment", to: "depress", note: "Depressant intoxication." },
            { label: "Tremor, sweating, tachycardia, anxiety, insomnia, possibly seizures, hours to days after stopping", to: "depwd", note: "Depressant withdrawal." },
            { label: "Euphoria or paranoia, hypervigilance, dilated pupils, tachycardia, hypertension", to: "r:stimintox", note: "Stimulant intoxication." },
            { label: "Dysphoria, exhaustion, hypersomnia, hunger, vivid dreams after a binge", to: "r:stimwd", note: "Stimulant withdrawal." },
            { label: "Violence, nystagmus, numbness to pain, rigidity, hyperacusis", to: "r:pcp", note: "Phencyclidine." },
            { label: "Perceptual changes in clear consciousness, synesthesias, dilated pupils, tremor", to: "r:hall", note: "Hallucinogen." },
            { label: "Red eyes, hunger, dry mouth, tachycardia, slowed time", to: "r:cannintox", note: "Cannabis intoxication." },
            { label: "Irritable, anxious, sleepless and off food days after stopping daily cannabis", to: "r:cannwd", note: "Cannabis withdrawal." },
            { label: "Dizzy, slurred, euphoric, solvent smell, negative drug screen", to: "r:inh", note: "Inhalant." },
            { label: "Restless, nervous, flushed, diuresis, twitching after much coffee or energy drinks", to: "r:cafintox", note: "Caffeine intoxication." },
            { label: "Headache and fatigue after missing usual caffeine", to: "r:cafwd", note: "Caffeine withdrawal." },
            { label: "Irritable, anxious, hungry, restless after stopping daily smoking", to: "r:tobwd", note: "Tobacco withdrawal." },
            { label: "Intoxication from a drug outside these classes or unidentified", to: "r:other", note: "Other or unknown." }
          ]
        },
        depress: {
          q: "Alcohol or a sedative?",
          help: "The signs are identical. Breath alcohol and toxicology decide; both can be present.",
          options: [
            { label: "Alcohol on the breath or positive breath or blood alcohol", to: "r:alcintox", note: "Alcohol." },
            { label: "No alcohol; benzodiazepine, Z-drug or barbiturate use or positive toxicology", to: "r:sedintox", note: "Sedative." }
          ]
        },
        depwd: {
          q: "Which drug was stopped?",
          help: "Alcohol withdrawal peaks on day 2; short-acting benzodiazepines on day 2; diazepam may not start for over a week.",
          options: [
            { label: "Alcohol", to: "r:alcwd", note: "Alcohol." },
            { label: "A benzodiazepine, Z-drug or barbiturate", to: "r:sedwd", note: "Sedative." }
          ]
        },
        gamble: {
          q: "How many of the nine gambling criteria in the past 12 months?",
          help: "Increasing stakes, restlessness when cutting down, failed control, preoccupation, gambling when distressed, chasing losses, lying, jeopardized relationships or work, bailouts.",
          options: [
            { label: "Four or more, outside manic episodes", to: "r:gambling", note: "Gambling disorder." },
            { label: "Four or more, but only during manic episodes", to: "r:mania", note: "Mania." },
            { label: "Fewer than four", to: "r:subgamble", note: "Below threshold." }
          ]
        }
      },
      results: {
        nouse: { label: "Below threshold", dx: "No substance use disorder", line: "At least 2 criteria in 12 months are needed.", points: ["Hazardous use still deserves brief intervention.", "Reassess over time."], link: L("s16-sud", "Use disorder criteria") },
        mild: { dx: "Mild substance use disorder", line: "2–3 criteria: F1x.10 (e.g., F10.10 alcohol; tobacco mild = Z72.0).", points: ["If intoxication, withdrawal or an induced disorder is present, code that instead with the 4th character 1.", "Name the specific substance."], link: L("s16-coding", "Coding") },
        moderate: { dx: "Moderate substance use disorder", line: "4–5 criteria: F1x.20 (same code as severe).", points: ["With an induced disorder or intoxication, the 4th character is 2.", "Consider maintenance therapy for opioid use disorder."], link: L("s16-coding", "Coding") },
        severe: { dx: "Severe substance use disorder", line: "6 or more criteria: F1x.20.", points: ["Moderate and severe share one code; record the severity in words.", "Screen for withdrawal risk, overdose and suicide."], link: L("s16-coding", "Coding") },
        early: { dx: "In early remission", line: "No criteria except craving for ≥3 but <12 months: F1x.11 or F1x.21.", points: ["Add “in a controlled environment” or “on maintenance therapy” where they apply."], link: L("s16-sud", "Remission") },
        sustained: { dx: "In sustained remission", line: "No criteria except craving for ≥12 months: F1x.11 or F1x.21.", points: ["Craving is allowed.", "Tobacco mild remission has no separate F code."], link: L("s16-sud", "Remission") },
        opintox: { dx: "Opioid intoxication (F11.120 / F11.220 / F11.920)", line: "Miosis plus drowsiness, slurred speech or impaired attention.", points: ["Give naloxone; a partial response suggests fentanyl or co-ingestion.", "Standard screens miss fentanyl, oxycodone, methadone and buprenorphine."], link: L("s16-opioid-iw", "Opioid intoxication"), dxId: "opioid-intox" },
        opwd: { dx: "Opioid withdrawal (F11.13 / F11.23 / F11.93)", line: "Three or more of nine signs after stopping or after an antagonist.", points: ["Withdrawal alone is not opioid use disorder.", "Offer buprenorphine or methadone when OUD is present."], link: L("s16-opioid-iw", "Opioid withdrawal"), dxId: "opioid-withdrawal" },
        alcintox: { dx: "Alcohol intoxication (F10.120 / F10.220 / F10.920)", line: "Behavioral change plus one of six signs.", points: ["Check glucose and for head injury.", "Watch for withdrawal as levels fall in heavy drinkers."], link: L("s16-alcohol-iw", "Alcohol intoxication"), dxId: "alcohol-intox" },
        sedintox: { dx: "Sedative, hypnotic or anxiolytic intoxication (F13.120 / F13.220 / F13.920)", line: "Same signs as alcohol, without alcohol.", points: ["Dangerous with opioids or alcohol.", "People with dementia or TBI become intoxicated at low doses."], link: L("s16-sedative-iw", "Sedative intoxication"), dxId: "sedative-intox" },
        alcwd: { dx: "Alcohol withdrawal (F10.130 / F10.230 / F10.930)", line: "Two or more of eight signs; peaks on day 2.", points: ["With hallucinations and insight, no delirium: “with perceptual disturbances” (F10.x32).", "Delirium is coded as alcohol withdrawal delirium; look for a medical cause."], link: L("s16-alcohol-iw", "Alcohol withdrawal"), dxId: "alcohol-withdrawal" },
        sedwd: { dx: "Sedative, hypnotic or anxiolytic withdrawal (F13.130 / F13.230 / F13.930)", line: "Like alcohol withdrawal; seizures in up to 20%–30% untreated.", points: ["F13.930 after stopping prescribed benzodiazepines without a use disorder.", "Restart and taper."], link: L("s16-sedative-iw", "Sedative withdrawal"), dxId: "sedative-withdrawal" },
        stimintox: { dx: "Stimulant intoxication (F15.x20 or F14.x20)", line: "Behavioral change plus two of nine signs; name the drug.", points: ["Cocaine is F14; amphetamine-type F15.", "If psychosis lacks insight and predominates, consider stimulant-induced psychotic disorder."], link: L("s16-stimulant-iw", "Stimulant intoxication"), dxId: "stimulant-intox" },
        stimwd: { dx: "Stimulant withdrawal (F15.13/23/93 or F14.13/23/93)", line: "Dysphoria plus two of five changes.", points: ["Assess suicide risk.", "Bradycardia supports the diagnosis."], link: L("s16-stimulant-iw", "Stimulant withdrawal"), dxId: "stimulant-withdrawal" },
        pcp: { dx: "Phencyclidine intoxication (F16.120 / F16.220 / F16.920)", line: "Two of eight signs within 1 hour with belligerence.", points: ["Nystagmus and bizarre violence are the clues.", "Minimize stimulation; protect from injury."], link: L("s16-hallucinogen-intox", "PCP intoxication"), dxId: "pcp-intox" },
        hall: { dx: "Other hallucinogen intoxication (F16.120 / F16.220 / F16.920)", line: "Perceptual changes in full wakefulness plus two of seven signs.", points: ["If perceptions recur weeks later with insight: HPPD (F16.983)."], link: L("s16-hallucinogen-intox", "Hallucinogen intoxication"), dxId: "hallucinogen-intox" },
        cannintox: { dx: "Cannabis intoxication (F12.120 / F12.220 / F12.920)", line: "Two of four signs within 2 hours.", points: ["With hallucinations and insight: F12.x22.", "Without insight: cannabis-induced psychotic disorder."], link: L("s16-cannabis-iw", "Cannabis intoxication"), dxId: "cannabis-intox" },
        cannwd: { dx: "Cannabis withdrawal (F12.13 / F12.23 / F12.93)", line: "Three of seven within about a week of stopping heavy use.", points: ["Sleep problems drive relapse."], link: L("s16-cannabis-iw", "Cannabis withdrawal"), dxId: "cannabis-withdrawal" },
        inh: { dx: "Inhalant intoxication (F18.120 / F18.220 / F18.920)", line: "Two of 13 signs after hydrocarbon exposure.", points: ["Nitrous oxide and nitrites are other (or unknown) substances.", "Risk of sudden sniffing death."], link: L("s16-inhalant", "Inhalant intoxication"), dxId: "inhalant-intox" },
        cafintox: { dx: "Caffeine intoxication (F15.920)", line: "Five of 12 signs after heavy caffeine.", points: ["5–10 g can be lethal.", "Exclude panic disorder, mania, stimulants and akathisia."], link: L("s16-caffeine", "Caffeine"), dxId: "caffeine-intox" },
        cafwd: { dx: "Caffeine withdrawal (F15.93)", line: "Three of five within 24 hours, headache the hallmark.", points: ["Caffeine relieves it within 30–60 minutes."], link: L("s16-caffeine", "Caffeine"), dxId: "caffeine-withdrawal" },
        tobwd: { dx: "Tobacco withdrawal (F17.203)", line: "Four of seven within 24 hours.", points: ["Coded only with moderate or severe tobacco use disorder.", "Nicotine replacement relieves it; review psychotropic levels."], link: L("s16-tobacco", "Tobacco withdrawal"), dxId: "tobacco-withdrawal" },
        other: { dx: "Other (or unknown) substance intoxication (F19.120 / F19.220 / F19.920)", line: "A reversible substance-specific syndrome from an unlisted or unknown drug.", points: ["Name the substance if known.", "Specialized testing may be needed."], link: L("s16-other", "Other substances"), dxId: "other-substance-intox" },
        gambling: { dx: "Gambling disorder (F63.0)", line: "Four or more of nine, not explained by mania.", points: ["Severity: mild 4–5, moderate 6–7, severe 8–9; episodic or persistent.", "Ask about suicide (15-fold mortality) and debts.", "Dopamine-agonist gambling still counts."], link: L("s16-gambling", "Gambling disorder"), dxId: "gambling" },
        mania: { label: "Not gambling disorder", dx: "A manic episode", line: "Gambling only during mania is part of the episode.", points: ["Diagnose gambling disorder only if it also occurs outside episodes."], link: L("s16-gambling", "Differential"), dxId: "bipolar-i" },
        subgamble: { label: "Below threshold", dx: "Problem gambling without the disorder", line: "Social or professional gambling, or short-term problems, below four criteria.", points: ["Reassess; brief advice on limits."], link: L("s16-gambling", "Differential") }
      }
    },
    {
      id: "induced",
      chapter: "ch16",
      title: "Induced or independent?",
      summary: "Decide whether psychotic, mood, anxiety, sleep or other symptoms in someone who uses substances are substance-induced, part of intoxication or withdrawal, part of a delirium, or an independent disorder.",
      caution: "A teaching aid built from DSM-5-TR pp. 548–553 and the induced-disorder sections of each chapter. Induced syndromes can be as dangerous as independent ones: assess suicide and safety regardless.",
      start: "before",
      nodes: {
        before: {
          q: "Did the symptoms begin before the substance or medication use?",
          help: "Build a timeline with the patient and informants. Past episodes during long abstinence also count against an induced cause.",
          options: [
            { label: "Yes, or there are episodes during abstinence", to: "r:independent", note: "Preceded use." },
            { label: "No: they began during or soon after use, intoxication, withdrawal or a new medication", to: "capable", note: "Temporal link." }
          ]
        },
        capable: {
          q: "Can this substance cause this kind of syndrome?",
          help: "Check Table 1: for example, opioids do not cause psychosis; caffeine causes only anxiety and sleep disorders; tobacco only sleep disorders during withdrawal.",
          options: [
            { label: "Yes", to: "delirium", note: "Plausible." },
            { label: "No", to: "r:independent", note: "Not plausible." }
          ]
        },
        delirium: {
          q: "Do the symptoms occur only during a delirium (fluctuating attention and awareness)?",
          help: "Hallucinations during delirium tremens belong to the delirium.",
          options: [
            { label: "Yes", to: "r:delirium", note: "Delirium." },
            { label: "No: clear sensorium", to: "excess", note: "No delirium." }
          ]
        },
        excess: {
          q: "Are the symptoms in excess of usual intoxication or withdrawal, predominant, and severe enough to need attention on their own?",
          help: "Mild anxiety in cocaine intoxication is part of intoxication; days of severe panic are not. Hallucinations with insight are a specifier, not psychosis.",
          options: [
            { label: "No: typical of intoxication or withdrawal", to: "r:intoxwd", note: "Part of the syndrome." },
            { label: "Yes", to: "persist", note: "Induced disorder possible." }
          ]
        },
        persist: {
          q: "Have the symptoms persisted for a substantial period (about 1 month or more) after acute withdrawal or severe intoxication ended?",
          help: "Most induced disorders improve within days to weeks of abstinence.",
          options: [
            { label: "No: still using, or less than about a month since stopping, or improving", to: "r:induced", note: "Induced." },
            { label: "Yes: persisting beyond about a month", to: "lasting", note: "Persisting." }
          ]
        },
        lasting: {
          q: "Is it a neurocognitive disorder or hallucinogen persisting perception disorder?",
          help: "These are the exceptions that persist by nature.",
          options: [
            { label: "Yes", to: "r:persisting", note: "Persisting induced disorder." },
            { label: "No", to: "r:independent", note: "Independent." }
          ]
        }
      },
      results: {
        independent: { dx: "An independent mental disorder", line: "Symptoms preceded use, occur during abstinence, persist beyond about a month, or the substance cannot cause them.", points: ["Diagnose the disorder (e.g., MDD) and the use disorder separately.", "Substances often intensify a preexisting disorder."], link: L("s16-induced", "Induced vs independent") },
        delirium: { dx: "Substance intoxication or withdrawal delirium", line: "Symptoms seen only during a delirium are part of it.", points: ["Search for a medical cause too (infection, bleeding, electrolytes, liver failure).", "Code the delirium with the use disorder in one code."], link: L("s16-induced", "Delirium rule") },
        intoxwd: { dx: "Intoxication or withdrawal alone", line: "Symptoms are typical of the syndrome.", points: ["Hallucinations with insight and no delirium: add “with perceptual disturbances.”"], link: L("s16-induced", "Induced vs intoxication") },
        induced: { dx: "Substance/medication-induced mental disorder", line: "Began during or soon after exposure, the substance can cause it, in excess of intoxication or withdrawal, no delirium.", points: ["Record with onset during intoxication or withdrawal (or after medication use).", "One code combines it with any use disorder (e.g., F14.259).", "Reassess after a month of abstinence."], link: L("s16-induced", "Induced disorders") },
        persisting: { dx: "Persisting substance-induced disorder", line: "Alcohol, inhalant, sedative or stimulant neurocognitive disorder, or HPPD, can persist beyond a month.", points: ["Alcohol-induced amnestic-confabulatory type (Korsakoff) may be permanent."], link: L("s16-induced", "The 1-month rule") }
      }
    }
  ]);
})();
