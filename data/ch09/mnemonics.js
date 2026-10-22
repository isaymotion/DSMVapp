/* Chapter 9 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch09", "mnemonics", [
  {
    id: "m9-01", short: "One is enough", name: "TAT", original: true, dx: "ssd", sec: "s9-ssd-criteria",
    "for": "Somatic symptom disorder: the three Criterion B options",
    letters: [
      ["T", "Thoughts, disproportionate", "Persistent thoughts about the seriousness of one’s symptoms (B1)"],
      ["A", "Anxiety, persistently high", "About health or symptoms (B2)"],
      ["T", "Time and energy, excessive", "Devoted to the symptoms or health concerns (B3)"]
    ],
    caveat: "**One** of the three meets Criterion B (mild); **two or more** is moderate; two or more with **multiple complaints** (or one very severe) is severe. Distressing symptoms (A) and persistence, typically **>6 months** (C), are also required."
  },
  {
    id: "m9-02", short: "A to F in order", name: "HEALTH", original: true, dx: "iad", sec: "s9-iad-criteria",
    "for": "Illness anxiety disorder: Criteria A–F",
    letters: [
      ["H", "Having or acquiring a serious illness", "Preoccupation (A)"],
      ["E", "Excessive, with no or mild symptoms", "Symptoms absent or mild; if illness or high risk is present, concern is clearly excessive (B)"],
      ["A", "Anxiety high, easily alarmed", "About personal health (C)"],
      ["L", "Looking or leaving", "Excessive checking and reassurance seeking, or maladaptive avoidance of care (D)"],
      ["T", "Time: 6 months", "The specific illness feared may change (E)"],
      ["H", "Hand off to others first", "Not better explained by SSD, panic, GAD, BDD, OCD or delusional disorder (F)"]
    ],
    caveat: "Specify **care-seeking** or **care-avoidant** type. Without the behaviors of Criterion D, or under 6 months, use **other specified (F45.8)**."
  },
  {
    id: "m9-03", short: "Rule it in", name: "HEFTS", original: true, dx: "fnd", sec: "s9-fnd-signs",
    "for": "Functional neurological symptom disorder: positive examination signs",
    letters: [
      ["H", "Hoover’s sign", "Weak hip extension returns with contralateral hip flexion against resistance (also the hip abductor sign)"],
      ["E", "Entrainment", "A functional tremor adopts or stops with a rhythm copied by the other hand"],
      ["F", "Fixed dystonia", "Inverted ankle, clenched fist, sudden onset"],
      ["T", "Tubular field", "Tunnel vision and inconsistent acuity (fogging test)"],
      ["S", "Shut eyes in seizures", "Eye closure, bilateral shaking with preserved awareness, more than 5 minutes"]
    ],
    caveat: "The diagnosis rests on the **overall picture**, not one sign. **La belle indifférence** and **secondary gain** are nonspecific and should not be used."
  },
  {
    id: "m9-04", short: "F44.4 to F44.7", name: "Move, Shake, Sense, Mix", original: true, dx: "fnd", sec: "s9-fnd-criteria",
    "for": "Functional neurological symptom disorder: codes by symptom type",
    letters: [
      ["M", "Move: F44.4", "Weakness or paralysis, abnormal movement, swallowing, speech"],
      ["S", "Shake: F44.5", "Attacks or seizures"],
      ["S", "Sense: F44.6", "Anesthesia or sensory loss, special sensory symptoms"],
      ["M", "Mix: F44.7", "Mixed symptoms"]
    ],
    caveat: "Add **acute episode** (<6 months) or **persistent** (≥6 months), and **with** or **without** psychological stressor."
  },
  {
    id: "m9-05", short: "Ways to falsify", name: "EFSI", original: true, dx: "factitious", sec: "s9-factitious",
    "for": "Factitious disorder: the four methods",
    letters: [
      ["E", "Exaggeration", "Overstating real symptoms"],
      ["F", "Fabrication", "Inventing symptoms or history (false bereavement, falsified records)"],
      ["S", "Simulation", "Producing false signs (blood added to urine)"],
      ["I", "Induction", "Causing disease (insulin, warfarin, injecting contaminants)"]
    ],
    caveat: "The diagnosis rests on **objective** evidence of falsification, evident **without obvious external rewards**. Deception for external reward is **malingering**."
  },
  {
    id: "m9-06", short: "Four severity levels", name: "MMSE", original: true, dx: "pfamc", sec: "s9-pfamc",
    "for": "Psychological factors affecting other medical conditions: severity",
    letters: [
      ["M", "Mild", "Increases medical risk (inconsistent antihypertensive adherence)"],
      ["M", "Moderate", "Aggravates the medical condition (anxiety worsening asthma)"],
      ["S", "Severe", "Leads to hospitalization or an emergency visit"],
      ["E", "Extreme", "Severe, life-threatening risk (ignoring heart attack symptoms)"]
    ],
    caveat: "Not the Mini-Mental State Examination: just a hook. F54 requires a **medical condition** adversely affected by psychological or behavioral factors."
  }
]);
