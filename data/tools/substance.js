/* Case tools: substance use assessment data (DSM-5-TR Chapter 16, pp. 543–665).
   Criteria are paraphrased in the app's own words; codes follow the DSM-5-TR (2022) listing.
   {d} is replaced with the substance noun, {v} with the verb ("drink", "use", "smoke"). */
SP.tools = SP.tools || {};
SP.tools.sudCriteria = [
  { n: 1, short: "Larger amounts or longer", text: "Takes the substance in larger amounts or over a longer period than intended.", ask: "“When you start to {v}, do you often {v} more, or for longer, than you planned?”" },
  { n: 2, short: "Can’t cut down", text: "Persistent desire or unsuccessful efforts to cut down or control use.", ask: "“Have you wanted to cut down or tried to stop? What happened?”" },
  { n: 3, short: "Time spent", text: "A great deal of time spent obtaining, using or recovering from the substance.", ask: "“How much of your day goes into getting {d}, using it, or getting over it?”" },
  { n: 4, short: "Craving", text: "Craving, or a strong desire or urge to use.", ask: "“Do you get strong urges to {v}? What sets them off?”", tip: "The only criterion allowed during remission." },
  { n: 5, short: "Role failure", text: "Recurrent use resulting in failure to fulfill major obligations at work, school or home.", ask: "“Has {d} made you miss work or school, or neglect things at home?”" },
  { n: 6, short: "Social problems", text: "Continued use despite persistent or recurrent social or interpersonal problems caused or worsened by it.", ask: "“Has it caused arguments or fights with family or friends? Did you keep going anyway?”" },
  { n: 7, short: "Activities given up", text: "Important social, occupational or recreational activities given up or reduced because of use.", ask: "“Have you given up things you used to enjoy or do because of {d}?”" },
  { n: 8, short: "Hazardous use", text: "Recurrent use in physically hazardous situations.", ask: "“Have you driven, worked with machines, or done risky things while under the influence?”" },
  { n: 9, short: "Despite harm", text: "Continued use despite knowing it causes or worsens a physical or psychological problem.", ask: "“Has it hurt your health, mood or mental illness? Did you keep {v}ing?”", tip: "In psychosis, ask whether use precedes relapses." },
  { n: 10, short: "Tolerance", text: "Tolerance: markedly increased amounts needed for the effect, or markedly diminished effect with the same amount.", ask: "“Do you need much more than before to feel the effect?”", rx: true },
  { n: 11, short: "Withdrawal", text: "Withdrawal: the substance’s characteristic withdrawal syndrome, or use to relieve or avoid withdrawal.", ask: "“What happens when you stop or cut down? Do you {v} to stop feeling sick?”", rx: true }
];

/* Withdrawal sign lists (Criterion B or C of each withdrawal syndrome). */
var _AW = ["Autonomic hyperactivity (sweating, pulse >100)", "Increased hand tremor", "Insomnia", "Nausea or vomiting", "Transient visual, tactile or auditory hallucinations or illusions", "Psychomotor agitation", "Anxiety", "Generalized tonic-clonic seizures"];

SP.tools.substances = [
  { id: "alcohol", name: "Alcohol", noun: "alcohol", verb: "drink", dx: "alcohol-use", sec: "s16-aud",
    ud: { mild: "F10.10", modsev: "F10.20", mildRem: "F10.11", modsevRem: "F10.21" },
    wd: { dx: "alcohol-withdrawal", need: 2, timing: "Within several hours to a few days after stopping or reducing heavy, prolonged use.", signs: _AW, perceptual: true, delirium: true,
      codes: { plain: ["F10.130", "F10.230", "F10.930"], perc: ["F10.132", "F10.232", "F10.932"], delirium: ["F10.131", "F10.231", "F10.931"] } },
    scales: ["audit", "ciwa"] },
  { id: "tobacco", name: "Tobacco", noun: "tobacco", verb: "smoke", dx: "tobacco-use", sec: "s16-tobacco",
    ud: { mild: "Z72.0", modsev: "F17.200", mildRem: "Z72.0", modsevRem: "F17.201" }, maint: "e.g., nicotine replacement",
    wd: { dx: "tobacco-withdrawal", need: 4, timing: "Within 24 hours of stopping or reducing daily use for at least several weeks.", signs: ["Irritability, frustration or anger", "Anxiety", "Difficulty concentrating", "Increased appetite", "Restlessness", "Depressed mood", "Insomnia"],
      codes: { plain: ["F17.203", "F17.203", "F17.203"] }, note: "Tobacco withdrawal has one code, F17.203; it occurs only with a moderate or severe tobacco use disorder." },
    scales: ["ftnd"] },
  { id: "amphetamine", name: "Methamphetamine or other amphetamine-type stimulant", short: "Amphetamine-type stimulant", noun: "the stimulant", verb: "use", dx: "stimulant-use", sec: "s16-stimulant", rx: true,
    ud: { mild: "F15.10", modsev: "F15.20", mildRem: "F15.11", modsevRem: "F15.21" },
    wd: { dx: "stimulant-withdrawal", need: 2, required: "Dysphoric mood (required)", timing: "Within a few hours to several days after stopping or reducing prolonged use.", signs: ["Fatigue", "Vivid, unpleasant dreams", "Insomnia or hypersomnia", "Increased appetite", "Psychomotor retardation or agitation"],
      codes: { plain: ["F15.13", "F15.23", "F15.93"] } } },
  { id: "cocaine", name: "Cocaine", noun: "cocaine", verb: "use", dx: "stimulant-use", sec: "s16-stimulant",
    ud: { mild: "F14.10", modsev: "F14.20", mildRem: "F14.11", modsevRem: "F14.21" },
    wd: { dx: "stimulant-withdrawal", need: 2, required: "Dysphoric mood (required)", timing: "Within a few hours to several days after stopping or reducing prolonged use.", signs: ["Fatigue", "Vivid, unpleasant dreams", "Insomnia or hypersomnia", "Increased appetite", "Psychomotor retardation or agitation"],
      codes: { plain: ["F14.13", "F14.23", "F14.93"] } } },
  { id: "cannabis", name: "Cannabis", noun: "cannabis", verb: "use", dx: "cannabis-use", sec: "s16-cannabis",
    ud: { mild: "F12.10", modsev: "F12.20", mildRem: "F12.11", modsevRem: "F12.21" },
    wd: { dx: "cannabis-withdrawal", need: 3, timing: "Within about 1 week after stopping heavy, prolonged use (daily or almost daily for at least a few months).", signs: ["Irritability, anger or aggression", "Nervousness or anxiety", "Sleep difficulty (insomnia, disturbing dreams)", "Decreased appetite or weight loss", "Restlessness", "Depressed mood", "Physical symptoms causing significant discomfort (abdominal pain, tremor, sweating, fever, chills, headache)"],
      codes: { plain: ["F12.13", "F12.23", "F12.93"] } } },
  { id: "opioid", name: "Opioids", noun: "opioids", verb: "use", dx: "opioid-use", sec: "s16-oud", rx: true, maint: "e.g., methadone, buprenorphine, naltrexone",
    ud: { mild: "F11.10", modsev: "F11.20", mildRem: "F11.11", modsevRem: "F11.21" },
    wd: { dx: "opioid-withdrawal", need: 3, timing: "Within minutes to several days after stopping or reducing heavy, prolonged use, or after an opioid antagonist.", signs: ["Dysphoric mood", "Nausea or vomiting", "Muscle aches", "Lacrimation or rhinorrhea", "Pupillary dilation, piloerection or sweating", "Diarrhea", "Yawning", "Fever", "Insomnia"], delirium: true,
      codes: { plain: ["F11.13", "F11.23", "F11.93"], delirium: ["F11.188", "F11.288", "F11.988"] } },
    scales: ["cows"] },
  { id: "sedative", name: "Sedatives, hypnotics or anxiolytics", short: "Sedative or benzodiazepine", noun: "the medicine", verb: "take", dx: "sedative-use", sec: "s16-sedative", rx: true,
    ud: { mild: "F13.10", modsev: "F13.20", mildRem: "F13.11", modsevRem: "F13.21" },
    wd: { dx: "sedative-withdrawal", need: 2, timing: "Within several hours to a few days after stopping or reducing prolonged use.", signs: _AW, perceptual: true, delirium: true,
      codes: { plain: ["F13.130", "F13.230", "F13.930"], perc: ["F13.132", "F13.232", "F13.932"], delirium: ["F13.131", "F13.231", "F13.931"] } } },
  { id: "hallucinogen", name: "Hallucinogens (LSD, psilocybin, MDMA)", short: "Hallucinogen", noun: "hallucinogens", verb: "use", dx: "hallucinogen-use", sec: "s16-hallucinogen", noWd: true,
    ud: { mild: "F16.10", modsev: "F16.20", mildRem: "F16.11", modsevRem: "F16.21" } },
  { id: "inhalant", name: "Inhalants", noun: "inhalants", verb: "use", dx: "inhalant-use", sec: "s16-inhalant", noWd: true,
    ud: { mild: "F18.10", modsev: "F18.20", mildRem: "F18.11", modsevRem: "F18.21" } },
  { id: "other", name: "Other or unknown substance", short: "Other substance", noun: "the substance", verb: "use", dx: "other-substance-use", sec: "s16-other",
    ud: { mild: "F19.10", modsev: "F19.20", mildRem: "F19.11", modsevRem: "F19.21" },
    wd: { dx: "other-substance-withdrawal", need: 0, timing: "A substance-specific syndrome soon after stopping or reducing heavy, prolonged use.", signs: ["A withdrawal syndrome that does not fit another class"], perceptual: true, delirium: true,
      codes: { plain: ["F19.130", "F19.230", "F19.930"], perc: ["F19.132", "F19.232", "F19.932"], delirium: ["F19.131", "F19.231", "F19.931"] } } }
];
