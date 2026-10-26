/* Chapter 13 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch13", "mnemonics", [
  {
    id: "m13-01", short: "Shared frame: 75-6-D-X", name: "Nearly always, half a year, distressing, nothing else explains it", original: true, dx: "erectile-disorder", sec: "s13-frame",
    "for": "The criteria frame shared by the seven specific sexual dysfunctions (Criteria A–D)",
    letters: [
      ["75", "Almost all occasions (A)", "About 75–100% of occasions: delayed ejaculation, erectile disorder, FOD, FSIAD items A4 and A6, and premature ejaculation (in its Criterion B)"],
      ["6", "About 6 months (B)", "All seven specific disorders; PE says at least 6 months"],
      ["D", "Distress (C)", "Clinically significant distress in the individual; impairment is not required"],
      ["X", "Exclusions (D)", "Not better explained by a nonsexual mental disorder, severe relationship distress or other stressors, a substance/medication, or another medical condition"]
    ],
    caveat: "DSM check: **GPPPD** and **male hypoactive sexual desire disorder** use 'persistent or recurrent' rather than a 75–100% figure. FOD, FSIAD and GPPPD name **partner violence** in Criterion D. Substance/medication-induced sexual dysfunction has **no 6-month rule** (pp. 478–502)."
  },
  {
    id: "m13-02", short: "FSIAD: any 3 of 6", name: "Into The Idea? Excitement Comes Slowly", original: true, dx: "fsiad", sec: "s13-fsiad",
    "for": "Female sexual interest/arousal disorder: the six indicators of Criterion A (at least 3 needed)",
    letters: [
      ["I", "Interest (A1)", "Absent or reduced interest in sexual activity; the old single criterion of hypoactive sexual desire disorder"],
      ["T", "Thoughts and fantasies (A2)", "Absent or reduced sexual or erotic thoughts; allow for normal decline with age"],
      ["I", "Initiation and receptivity (A3)", "Rarely starts sex and is typically unreceptive to a partner's attempts"],
      ["E", "Excitement or pleasure (A4)", "Absent or reduced during sex in about 75–100% of encounters"],
      ["C", "Cues (A5)", "Little interest or arousal in response to internal or external erotic cues (lack of responsive desire)"],
      ["S", "Sensations (A6)", "Absent or reduced genital or nongenital sensations in about 75–100% of encounters; self-report is enough"]
    ],
    caveat: "DSM check: **≥3 of 6** for **~6 months** with distress (pp. 489–490). A **desire discrepancy** alone is not enough, and lifelong low desire explained by **asexual self-identification** is not diagnosed. Men: desire and arousal stay separate (MHSDD and erectile disorder)."
  },
  {
    id: "m13-03", short: "PE severity 60-30-15", name: "Count down the seconds: 60, 30, 15", original: true, dx: "premature-ejaculation", sec: "s13-premature",
    "for": "Premature (early) ejaculation: the latency cutoffs in Criterion A and the severity specifier",
    letters: [
      ["60", "Mild", "Ejaculation about 30 seconds to 1 minute after vaginal penetration; 1 minute is also the Criterion A threshold"],
      ["30", "Moderate", "About 15–30 seconds after penetration"],
      ["15", "Severe", "Within about 15 seconds, or before or at the start of sexual activity"],
      ["120", "Expert view", "Expert consensus now regards 60 seconds as too brief for lifelong PE and recommends 120 seconds"]
    ],
    caveat: "DSM check: PE severity is by **latency**, not distress. Criterion B needs **≥6 months** and **~75–100%** of occasions. The man's **own estimate** is accepted; no duration rules exist for nonvaginal sex. Episodic early ejaculation (e.g., new partner) and normal latency with a wish for longer are **not** PE (pp. 501–504)."
  },
  {
    id: "m13-04", short: "GPPPD: 2 P's, F, T", name: "Penetration, Pain, Fear, Tension", original: true, dx: "gppd", sec: "s13-gppd",
    "for": "Genito-pelvic pain/penetration disorder: the four symptom dimensions of Criterion A",
    letters: [
      ["P", "Penetration difficulty (A1)", "From total inability (intercourse, gynecological exams, tampons) to difficulty only in some situations"],
      ["P", "Pain (A2)", "Marked vulvovaginal or pelvic pain with intercourse or attempts; superficial or deep, provoked or spontaneous"],
      ["F", "Fear (A3)", "Marked fear or anxiety about pain before, during or after penetration; may resemble a phobia"],
      ["T", "Tensing (A4)", "Marked pelvic floor tightening, from reflex-like spasm to voluntary guarding"]
    ],
    caveat: "DSM check: **one dimension is enough**, but **assess all four**. Physiological measures exist for **A2** (cotton-swab test, vulvalgesiometer, tampon test) and **A4** (EMG, dynamometer, 4D ultrasound), **none for A1 or A3**. Given only to females; males with pelvic pain → other specified or unspecified (pp. 493–497)."
  },
  {
    id: "m13-05", short: "Specifiers: GPPPD has no G/S", name: "Pain doesn't pick its place", original: true, dx: "gppd", sec: "s13-specifiers",
    "for": "Which specifiers each sexual dysfunction carries",
    letters: [
      ["L/A", "Lifelong or acquired", "All seven specific disorders"],
      ["G/S", "Generalized or situational", "Six of seven: every specific disorder except GPPPD"],
      ["D", "Severity by distress", "DE, ED, FOD, FSIAD, GPPPD and MHSDD: mild, moderate or severe distress"],
      ["L", "Severity by latency", "Premature ejaculation: 30–60 s, 15–30 s, under ~15 s"],
      ["F", "Severity by frequency", "Substance/medication-induced: 25–50%, 50–75%, ≥75% of occasions"],
      ["N", "Never", "FOD only: never experienced an orgasm under any situation"]
    ],
    caveat: "DSM check: GPPPD lists only **lifelong/acquired** and **severity** (p. 494). For GPPPD, the lifelong versus acquired call is aided by asking about **any consistent period of pain-, fear- and tension-free intercourse** (p. 496)."
  },
  {
    id: "m13-06", short: "Induced codes 1-2-9", name: "One for mild, two for more, nine for none", original: true, dx: "substance-sexual", sec: "s13-induced-coding",
    "for": "Substance/medication-induced sexual dysfunction: the 4th character of the ICD-10-CM code",
    letters: [
      ["1", "Mild use disorder", "F1x.181, e.g., F14.181 for cocaine with a mild cocaine use disorder"],
      ["2", "Moderate or severe use disorder", "F1x.281, e.g., F10.281 for alcohol with a severe alcohol use disorder"],
      ["9", "No use disorder", "F1x.981, e.g., after one-time heavy use or with a prescribed drug"],
      ["19", "Other or unknown class", "Drugs that fit no class use F19: F19.981 fluoxetine-induced sexual dysfunction"]
    ],
    caveat: "DSM check: **no separate use-disorder diagnosis** is given; the use disorder is named first. Table rows: alcohol, opioid, sedative-hypnotic-anxiolytic, amphetamine-type, cocaine, other/unknown (**no cannabis or tobacco row**). Two contributing substances are **listed separately** (pp. 505–506)."
  },
  {
    id: "m13-07", short: "Exclusion order: Mood Spoils My Romance", name: "Mental disorder, Substance, Medical, Relationship", original: true, dx: "substance-sexual", sec: "s13-differential",
    "for": "What to diagnose when something else explains the sexual problem (the hierarchy on p. 478)",
    letters: [
      ["M", "Mental disorder (nonsexual)", "Depressive, bipolar, anxiety, PTSD or psychotic disorder explains it: give only that diagnosis"],
      ["S", "Substance or medication", "Use, misuse or stopping a drug explains it: substance/medication-induced sexual dysfunction"],
      ["M", "Medical condition", "E.g., peripheral neuropathy or pelvic nerve damage explains it: no psychiatric diagnosis"],
      ["R", "Relationship or stressors", "Severe relationship distress, partner violence or major stressors explain it: no sexual dysfunction; a Z code such as Z63.0 may be listed"]
    ],
    caveat: "DSM check: a sexual dysfunction **can coexist** with a medical condition, mental disorder or substance use when they do not fully explain it, and several sexual dysfunctions are **all diagnosed**. Another sexual dysfunction does not exclude one. Inadequate stimulation → **no diagnosis** (pp. 477–478)."
  },
  {
    id: "m13-08", short: "Kinder antidepressants: B-M-N-V", name: "Bupropion, Mirtazapine, Nefazodone, Vilazodone", original: true, dx: "substance-sexual", sec: "s13-induced-agents",
    "for": "Antidepressants the DSM says have lower rates of sexual side effects",
    letters: [
      ["B", "Bupropion", "Lower rate of sexual side effects"],
      ["M", "Mirtazapine", "Lower rate of sexual side effects"],
      ["N", "Nefazodone", "Lower rate; outside the DSM, it carries a boxed warning for liver failure, which limits its use"],
      ["V", "Vilazodone", "Lower rate of sexual side effects"]
    ],
    caveat: "DSM check: highest rates with **citalopram, fluoxetine, fluvoxamine, paroxetine, sertraline and venlafaxine**; overall **25–80%** on MAOIs, TCAs, serotonergic and SNRI-type drugs. Onset can be within **8 days**; about **30%** with mild–moderate orgasm delay remit within 6 months; SSRI effects may **persist after stopping** (pp. 507–508)."
  }
]);
