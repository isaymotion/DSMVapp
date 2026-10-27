/* Chapter 21 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app;
   a published mnemonic carries `source` instead. Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch21", "mnemonics", [
  {
    id: "m21-01", short: "NMS: FARM-CD", name: "FARM-CD: the picture of neuroleptic malignant syndrome", original: true, dx: "nms", sec: "s21-nms",
    "for": "The features the manual describes for neuroleptic malignant syndrome",
    letters: [
      ["F", "Fever with sweating", "Oral temperature above 38.0 °C (100.4 °F) on at least two readings, with profuse diaphoresis; the feature that sets NMS apart"],
      ["A", "Autonomic instability", "Heart rate more than 25% above baseline; blood pressure 25% or more above baseline or swings of 25 mm Hg systolic / 20 mm Hg diastolic within 24 h; incontinence, pallor; breathing rate more than 50% above baseline"],
      ["R", "Rigidity", "Generalized, lead-pipe at worst, usually not helped by antiparkinsonian drugs; may come with tremor, drooling, dystonia, trismus, myoclonus"],
      ["M", "Mental status change", "Delirium, stupor or coma, or an alert but dazed, catatonic-looking state; often an early sign"],
      ["C", "CK up", "Creatine kinase at least 4 times the upper limit of normal is common; leukocytosis, acidosis and low serum iron may also appear"],
      ["D", "Dopamine blocker in the last 72 hours", "Exposure to an antipsychotic or other DRBA within 72 hours before symptoms"]
    ],
    caveat: "DSM check: NMS has **no criteria set**; these are the manual's described features (p. 810). **No single lab result is specific**, CSF and imaging are usually normal and the EEG shows generalized slowing (p. 810). Mental status and neurological signs usually come **before** the systemic signs (p. 811)."
  },
  {
    id: "m21-02", short: "EPS ladder: DAPT", name: "DAPT: hours, days, weeks, months", original: true, dx: "medication-induced-acute-dystonia", sec: "s21-timeline",
    "for": "The usual order in which drug-induced movement problems appear after a DRBA is started or raised",
    letters: [
      ["D", "Dystonia: hours", "At least half within 24–48 hours, about 90% within 5 days"],
      ["A", "Akathisia: days", "Typically within 4 weeks, and it can come on very quickly"],
      ["P", "Parkinsonism: weeks", "Typically 2–4 weeks after starting a DRBA, usually by 3 months (a second peak near 1 year mainly with calcium channel blockers)"],
      ["T", "Tardive dyskinesia: months to years", "At least 3 months of exposure (1 month at age 60 or older); can also appear after the drug is stopped"]
    ],
    caveat: "DSM check: these are **typical** windows, not strict cutoffs, except for TD's exposure and duration rules (pp. 808, 812, 813, 815–816). Dystonia, akathisia and MIP can also follow **lowering an anticholinergic** given against EPS (pp. 808, 812, 813). NMS sits apart: DRBA exposure **within 72 hours**, most cases in the first week, virtually all within 30 days (pp. 810–811)."
  },
  {
    id: "m21-03", short: "DRBAs: 1, 2, Gut, Amox", name: "1, 2, Gut, Amox: the dopamine receptor blocking agents", original: true, dx: "medication-induced-parkinsonism", sec: "s21-intro",
    "for": "The drug families the manual groups as antipsychotics and other dopamine receptor blocking agents",
    letters: [
      ["1", "First-generation antipsychotics", "e.g., chlorpromazine, haloperidol, fluphenazine"],
      ["2", "Second-generation antipsychotics", "e.g., clozapine, risperidone, olanzapine, quetiapine"],
      ["Gut", "Antiemetic and promotility drugs", "prochlorperazine, promethazine, trimethobenzamide, thiethylperazine, metoclopramide"],
      ["Amox", "Amoxapine", "An antidepressant that also blocks dopamine receptors"]
    ],
    caveat: "DSM check: the list is on p. 807. Newer antipsychotics may cause some movement disorders less often, but **they still occur** (p. 807). G21.11 applies to these agents; MIP from other drugs (calcium channel blockers, valproate, lithium, SSRIs, dopamine depleters) is **G21.19** (pp. 807–808)."
  },
  {
    id: "m21-04", short: "TD numbers: 4-3-1-4-8", name: "4-3-1-4-8: the tardive dyskinesia time rules", original: true, dx: "tardive-dyskinesia", sec: "s21-td",
    "for": "The duration, exposure and post-withdrawal windows the manual gives for tardive dyskinesia",
    letters: [
      ["4", "4 weeks of movements", "The movements are present for at least 4 weeks"],
      ["3", "3 months of exposure", "The offending agent was used for at least 3 months"],
      ["1", "1 month if 60 or older", "The minimum exposure falls to 1 month at age 60 years or older"],
      ["4", "4 weeks after an oral agent", "Onset may come during exposure or within 4 weeks of stopping an oral drug"],
      ["8", "8 weeks after a depot", "Or within 8 weeks of stopping a long-acting injectable"]
    ],
    caveat: "DSM check: pp. 814–815. Withdrawal dyskinesia may remit; TD is considered once it lasts **at least 4 weeks** (p. 816). The differential section phrases the 1-month rule as 'middle-age and elderly' (p. 816), while the description says **60 or older** (p. 815). Any dyskinesia on an antipsychotic is **not automatically** TD (p. 815)."
  },
  {
    id: "m21-05", short: "Discontinuation: FINISH", name: "FINISH: antidepressant discontinuation symptoms (Berber 1998)", source: "Berber MJ. FINISH: remembering the discontinuation syndrome. J Clin Psychiatry. 1998;59(5):255.", dx: "antidepressant-discontinuation", sec: "s21-discontinuation",
    "for": "A published memory aid for the common symptoms after stopping an antidepressant (outside the DSM)",
    letters: [
      ["F", "Flu-like symptoms", "Aches, tiredness, chills"],
      ["I", "Insomnia", "Poor sleep, sometimes vivid dreams"],
      ["N", "Nausea", "Gastrointestinal upset"],
      ["I", "Imbalance", "Dizziness and unsteadiness"],
      ["S", "Sensory disturbances", "'Electric shock' sensations, tingling, tinnitus"],
      ["H", "Hyperarousal", "Anxiety, irritability, agitation"]
    ],
    caveat: "DSM check: the manual says there are **no pathognomonic symptoms** and names, for SSRIs, **dizziness, tinnitus, 'electric shock' sensations, insomnia and acute anxiety**; for tricyclics, **cramping (cholinergic rebound) and rebound hypomania** (p. 818). Onset is usually **2–4 days** after the last dose, lasting **up to 2 weeks**, seldom beyond 3 (pp. 818–819). FINISH is Berber's published mnemonic, not a DSM list."
  },
  {
    id: "m21-06", short: "Lithium tremor worse: SAFA + 3 Hs + P", name: "SAFA, three Hs and a P: what makes lithium tremor worse", original: true, dx: "medication-induced-postural-tremor", sec: "s21-tremor",
    "for": "The factors the manual lists as able to worsen a medication-induced postural tremor",
    letters: [
      ["S", "Stress", ""],
      ["A", "Anxiety", ""],
      ["F", "Fatigue", ""],
      ["A", "Alcohol withdrawal", ""],
      ["H", "Hypoglycemia", "Low blood sugar"],
      ["H", "Hyperthyroidism", "The manual says thyrotoxicosis"],
      ["H", "Hypothermia", "Low body temperature"],
      ["P", "Pheochromocytoma", "Catecholamine-secreting tumor"]
    ],
    caveat: "DSM check: p. 817. Each of these can also **cause tremor by itself**, independent of the drug (p. 817). Do not confuse with the **risk factors** for lithium tremor: older age, high serum level, added antidepressant or DRBA, heavy caffeine, personal or family history of tremor, alcohol use disorder and anxiety (p. 817). A **coarse** tremor with twitching, fasciculations or ataxia suggests a level near toxicity (p. 817)."
  },
  {
    id: "m21-07", short: "NMS risk: DIRE PATH", name: "DIRE PATH: what raises the risk of neuroleptic malignant syndrome", original: true, dx: "nms", sec: "s21-nms-course",
    "for": "Risk factors for NMS named in the manual",
    letters: [
      ["D", "Dehydration", ""],
      ["I", "Iron deficiency", ""],
      ["R", "Rapid titration", "Fast dose increases"],
      ["E", "Exhaustion", ""],
      ["P", "Prior episode; Parenteral route", "A previous episode is found in 15%–20% of index cases; injected drugs raise risk"],
      ["A", "Agitation", ""],
      ["T", "Total dose high", "Higher total dosage"],
      ["H", "High-potency agent", "Greater risk than low-potency and atypical antipsychotics"]
    ],
    caveat: "DSM check: p. 811. NMS can follow **any** antipsychotic or other DRBA, including metoclopramide and prochlorperazine, in people with or without a mental disorder, and it **usually occurs within the therapeutic dose range**. Genetic receptor findings have **not** been consistently replicated (p. 811)."
  },
  {
    id: "m21-08", short: "Akathisia signs: FRPS", name: "Fidget, Rock, Pace, can't Stay: what the examiner sees in akathisia", original: true, dx: "medication-induced-acute-akathisia", sec: "s21-akathisia",
    "for": "The observed movements, at least one of which accompanies the subjective restlessness of acute akathisia",
    letters: [
      ["F", "Fidget", "Fidgety or swinging legs while seated"],
      ["R", "Rock", "When standing, shifting weight from one foot to the other or marking time ('walking on the spot')"],
      ["P", "Pace", "Pacing to relieve the restlessness"],
      ["S", "can't Stay still", "Unable to sit or stand still for at least several minutes; at worst, unable to hold any position for more than a few seconds"]
    ],
    caveat: "DSM check: p. 813. The manual's description needs the **subjective** complaint (inner restlessness, mostly in the legs, urge to move, distress if asked to stay still) **plus at least one** observed movement, typically within **4 weeks** of starting or raising the drug. A dose **increase** tends to worsen akathisia but temporarily relieve TD (p. 814)."
  }
]);
