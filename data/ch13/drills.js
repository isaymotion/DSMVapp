/* Chapter 13 practice drills.
   dxline:   build the full diagnosis line (diagnosis, subtypes, specifiers, severity, code). Codes unchanged through October 2026.
   counting: decide which findings count toward a criterion, then whether it is met.
   Ids are stable keys for progress. */
(function () {
  var SEV = ["Mild", "Moderate", "Severe"];
  var COURSE = ["Lifelong", "Acquired"];
  var SCOPE = ["Generalized", "Situational"];
  var ONSET = ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use"];
  var FOURTH = ["1: mild use disorder", "2: moderate or severe use disorder", "9: no use disorder"];
  var SEXDX = ["Male hypoactive sexual desire disorder", "Female sexual interest/arousal disorder", "Erectile disorder", "Delayed ejaculation", "Premature (early) ejaculation", "Female orgasmic disorder", "Genito-pelvic pain/penetration disorder"];

  SP.add("ch13", "dxline", [
    {
      id: "w13-01", tag: "Erectile disorder",
      "case": "A 36-year-old man reports that for the past 9 months he loses his erection before intercourse is finished on about 9 of every 10 occasions with his wife. It began after one evening when he could not keep an erection, and he has dreaded sex since. He still wakes with firm erections and has no difficulty when he masturbates alone. He has no medical illness, takes no medications or drugs, and has no depressive or anxiety disorder. The marriage is otherwise warm and there is no other stressor. He describes his distress as moderate.",
      parts: [
        { label: "Diagnosis", options: SEXDX, answer: 2 },
        { label: "Onset subtype", options: COURSE, answer: 1 },
        { label: "Context subtype", options: SCOPE, answer: 1 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["F52.21", "F52.0", "F52.4", "F52.8", "F52.22"], answer: 0 }
      ],
      line: "**F52.21** Erectile disorder, acquired, situational, moderate",
      why: "Difficulty **maintaining** an erection on about 75%–100% of partnered occasions for about 6 months, with distress, meets Criteria A–C (pp. 481–482). Normal function before = **acquired**; problems only with partnered sex, not alone = **situational**. Severity follows **distress** (p. 482). Situational, abrupt problems in a man under 40 point toward a psychological cause (p. 485)."
    },
    {
      id: "w13-02", tag: "FSIAD",
      "case": "A 29-year-old woman has had little interest in sex since her first relationship at 19. She almost never has sexual thoughts or fantasies, does not start sex and usually declines her partner’s approaches, and feels almost no excitement in nearly every encounter. She does not identify as asexual and says she wishes she felt desire. Stimulation from her partner is adequate. She has no depressive disorder, takes no medications, has a normal medical workup, and the relationship is stable. The pattern holds with every partner she has had. Her distress is mild.",
      parts: [
        { label: "Diagnosis", options: SEXDX, answer: 1 },
        { label: "Onset subtype", options: COURSE, answer: 0 },
        { label: "Context subtype", options: SCOPE, answer: 0 },
        { label: "Severity", options: SEV, answer: 0 },
        { label: "Code", options: ["F52.22", "F52.0", "F52.31", "F52.6", "F52.9"], answer: 0 }
      ],
      line: "**F52.22** Female sexual interest/arousal disorder, lifelong, generalized, mild",
      why: "Four indicators (A1 interest, A2 thoughts, A3 initiation and receptivity, A4 excitement on about 75%–100% of encounters) exceed the **three of six** needed (p. 489). Present since her first sexual experiences = **lifelong**; every partner = **generalized**. Because she does **not** self-identify as asexual, that exclusion does not apply (p. 490)."
    },
    {
      id: "w13-03", tag: "Two sexual dysfunctions",
      "case": "A 41-year-old woman had satisfying sex until about 10 months ago. Since then she has lost interest in sex, rarely has sexual thoughts, and responds to no erotic cues from her husband, books or films. Over the same period she has not reached orgasm on almost any occasion, alone or with her husband, despite stimulation that used to work. Her distress about both problems is moderate. She has no depressive disorder, no medical condition on workup, uses no substances or medications, and the marriage is free of violence or serious conflict.",
      parts: [
        { label: "Diagnoses", options: SEXDX, answer: [1, 5], multi: true },
        { label: "Onset subtype (both)", options: COURSE, answer: 1 },
        { label: "Context subtype (both)", options: SCOPE, answer: 0 },
        { label: "Severity (both)", options: SEV, answer: 1 },
        { label: "Codes", options: ["F52.22", "F52.31", "F52.0", "F52.32", "F52.6"], answer: [0, 1], multi: true }
      ],
      line: "**F52.22** Female sexual interest/arousal disorder, acquired, generalized, moderate; **F52.31** Female orgasmic disorder, acquired, generalized, moderate",
      why: "A1, A2 and A5 make three FSIAD indicators (p. 489), and near-absent orgasm on about 75%–100% of occasions meets FOD Criterion A1 (p. 485). When several sexual dysfunctions are present, **all of them** are diagnosed (p. 477), and one never rules out the other (pp. 488, 493)."
    },
    {
      id: "w13-04", tag: "Female orgasmic disorder",
      "case": "A 32-year-old woman has never had an orgasm: not with any partner, not with oral or manual stimulation, not with a vibrator, and not alone, though she has tried for years and reports adequate arousal. She has been sexually active since 18 and the difficulty has been the same throughout. She has no mental disorder, takes no medications, has a normal gynecological and neurological examination, and her relationship is supportive. Her distress is moderate.",
      parts: [
        { label: "Onset subtype", options: COURSE, answer: 0 },
        { label: "Context subtype", options: SCOPE, answer: 0 },
        { label: "Extra specifier", options: ["Never experienced an orgasm under any situation", "No extra specifier"], answer: 0 },
        { label: "Severity", options: SEV, answer: 1 },
        { label: "Code", options: ["F52.31", "F52.32", "F52.22", "F52.8"], answer: 0 }
      ],
      line: "**F52.31** Female orgasmic disorder, lifelong, generalized, never experienced an orgasm under any situation, moderate",
      why: "FOD is the only sexual dysfunction with the extra specifier **“never experienced an orgasm under any situation”** (p. 486). Stimulation has been varied and adequate, so the inadequate-stimulation exclusion does not apply. Present since she became sexually active = **lifelong**; every kind of stimulation = **generalized**."
    },
    {
      id: "w13-05", tag: "Delayed ejaculation",
      "case": "A 34-year-old man has never been able to ejaculate with a partner. Over 12 years and several partners, intercourse, oral and manual stimulation all fail on nearly every occasion, even after 40 minutes; he does not want the delay. He ejaculates easily and quickly when he masturbates alone. He has no medical or mental disorder, takes no medications or drugs, and his relationships have been good. He and his partner want a child, and his distress is severe.",
      parts: [
        { label: "Diagnosis", options: SEXDX, answer: 3 },
        { label: "Onset subtype", options: COURSE, answer: 0 },
        { label: "Context subtype", options: SCOPE, answer: 1 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: ["F52.32", "F52.4", "F52.31", "F52.21", "F52.0"], answer: 0 }
      ],
      line: "**F52.32** Delayed ejaculation, lifelong, situational, severe",
      why: "Absence of ejaculation on about 75%–100% of **partnered** occasions (manual, oral or coital), unwanted, for over 6 months, with distress, meets the criteria (pp. 478–479). Being able to ejaculate alone but not with a partner is common in DE (p. 479) and makes the pattern **situational**. Since his first experiences = **lifelong**."
    },
    {
      id: "w13-06", tag: "Premature ejaculation",
      "case": "A 25-year-old man has, since his first sexual experiences at 18, ejaculated about 20 seconds after vaginal penetration, before he wishes to, on almost every occasion with every partner. He estimates the time himself; no one has timed it. He is very distressed. He has no medical illness, uses no drugs or alcohol, has never used opioids, and has no anxiety or depressive disorder. His relationship is good.",
      parts: [
        { label: "Diagnosis", options: SEXDX, answer: 4 },
        { label: "Onset subtype", options: COURSE, answer: 0 },
        { label: "Context subtype", options: SCOPE, answer: 0 },
        { label: "Severity (graded by latency)", options: SEV, answer: 1 },
        { label: "Code", options: ["F52.4", "F52.32", "F52.21", "F52.8"], answer: 0 }
      ],
      line: "**F52.4** Premature (early) ejaculation, lifelong, generalized, moderate",
      why: "PE severity is graded by **latency**, not distress: about **15–30 seconds** after penetration is **moderate** (p. 502). His own estimate is enough; a stopwatch is not required clinically (pp. 502, 504). His severe distress meets Criterion C but does not change the grade."
    },
    {
      id: "w13-07", tag: "Premature ejaculation",
      "case": "A 44-year-old man had normal ejaculatory control for 20 years. For the past 8 months he has ejaculated during foreplay, before any penetration, on nearly every sexual occasion, whatever the setting. He estimates this himself and is moderately distressed. Thyroid tests and a urological examination are normal, he takes no medications, he has never used opioids or other drugs, and there is no relationship conflict.",
      parts: [
        { label: "Onset subtype", options: COURSE, answer: 1 },
        { label: "Context subtype", options: SCOPE, answer: 0 },
        { label: "Severity (graded by latency)", options: SEV, answer: 2 },
        { label: "Code", options: ["F52.4", "F52.8", "F52.21", "F52.9"], answer: 0 }
      ],
      line: "**F52.4** Premature (early) ejaculation, acquired, generalized, severe",
      why: "Ejaculating **before sexual activity, at its start, or within about 15 seconds** of penetration is **severe** (p. 502); moderate distress does not lower it. Onset after years of normal latency = **acquired**, which typically appears in or after the fourth decade (p. 503). Thyroid disease, prostatitis and drug withdrawal were checked because they are linked to acquired PE (p. 503)."
    },
    {
      id: "w13-08", tag: "GPPPD",
      "case": "A 27-year-old woman has never managed vaginal intercourse. Since her first attempt at 21 she has felt marked fear of pain before every attempt, and her pelvic floor muscles tighten whenever penetration is tried; she has also never been able to insert a tampon. Her gynecological examination shows no medical cause. She has no other mental disorder, takes no medications, and her partner is patient and supportive. She and her partner want to conceive. Her distress is severe.",
      parts: [
        { label: "Diagnosis", options: SEXDX, answer: 6 },
        { label: "Onset subtype", options: COURSE, answer: 0 },
        { label: "Generalized or situational?", options: ["Generalized", "Situational", "Not used for this disorder"], answer: 2 },
        { label: "Severity", options: SEV, answer: 2 },
        { label: "Code", options: ["F52.6", "F52.22", "F40.298", "F52.8", "F52.9"], answer: 0 }
      ],
      line: "**F52.6** Genito-pelvic pain/penetration disorder, lifelong, severe",
      why: "A1 (penetration difficulty), A3 (fear of pain) and A4 (pelvic floor tightening) are present; **one** dimension would be enough (p. 494). GPPPD takes only **lifelong/acquired** and **severity**; it has **no generalized/situational** specifier (p. 494). Women who have never achieved penetration often present when they want to conceive (p. 495)."
    },
    {
      id: "w13-09", tag: "Alcohol-induced",
      "case": "A 50-year-old man with severe alcohol use disorder (he meets 7 criteria) drinks to intoxication most nights. For 3 months he has been unable to get an erection on about 6 of every 10 sexual occasions, all while intoxicated; on the rare sober evenings his erections are normal. His erectile function was normal before his drinking became heavy. The problem is prominent, distresses him, and is the reason for his visit. He has no delirium and no medical cause on workup.",
      parts: [
        { label: "Diagnosis", options: ["Alcohol-induced sexual dysfunction", "Erectile disorder", "Alcohol intoxication only"], answer: 0 },
        { label: "4th character", options: FOURTH, answer: 1 },
        { label: "Onset", options: ONSET, answer: 0 },
        { label: "Severity (graded by frequency)", options: SEV, answer: 1 },
        { label: "Code", options: ["F10.181", "F10.281", "F10.981", "F52.21"], answer: 1 }
      ],
      line: "**F10.281** Severe alcohol use disorder with alcohol-induced sexual dysfunction, with onset during intoxication, moderate",
      why: "This mirrors the manual’s own recording example (p. 506). A **severe** use disorder makes the 4th character **2**; it is named first and **not diagnosed separately** (p. 505). Induced severity uses **frequency**: about 60% of occasions falls in the **50%–75%** band = **moderate** (p. 506)."
    },
    {
      id: "w13-10", tag: "Medication-induced",
      "case": "A 38-year-old woman started paroxetine for panic disorder 5 weeks ago. Within 2 weeks she lost the ability to become aroused and to reach orgasm on about 9 of every 10 sexual occasions; before the drug her sexual function was normal. Her panic attacks have improved and her mood is good. She has no substance use disorder, takes no other medications, has no medical illness, and is distressed enough to consider stopping the drug.",
      parts: [
        { label: "Substance class used for coding", options: ["Other (or unknown) substance", "Sedative, hypnotic or anxiolytic", "Amphetamine-type (or other stimulant)"], answer: 0 },
        { label: "Onset", options: ONSET, answer: 2 },
        { label: "Severity (graded by frequency)", options: SEV, answer: 2 },
        { label: "Code", options: ["F19.981", "F19.181", "F13.981", "F52.22"], answer: 0 }
      ],
      line: "**F19.981** Paroxetine-induced sexual dysfunction, with onset after medication use, severe",
      why: "Antidepressants have no class of their own, so the **other (or unknown) substance** code is used with the drug’s **name written in**; no use disorder = 4th character **9** (p. 506). **75% or more** of occasions = **severe** (p. 506). Paroxetine is among the antidepressants with the highest rates of sexual side effects (p. 508)."
    },
    {
      id: "w13-11", tag: "Opioid withdrawal",
      "case": "A 31-year-old man with mild opioid use disorder (he meets 3 criteria) stopped using heroin 5 days ago and meets criteria for opioid withdrawal. Since stopping he ejaculates within seconds of penetration on about 6 of every 10 occasions, which never happened before his opioid use. The problem is prominent, distresses him, and he asks for help with it specifically. He has no delirium, and thyroid and urological checks are normal.",
      parts: [
        { label: "Diagnosis", options: ["Opioid-induced sexual dysfunction", "Premature (early) ejaculation, acquired", "Opioid withdrawal only"], answer: 0 },
        { label: "4th character", options: FOURTH, answer: 0 },
        { label: "Onset", options: ONSET, answer: 1 },
        { label: "Severity (graded by frequency)", options: SEV, answer: 1 },
        { label: "Code", options: ["F11.181", "F11.281", "F11.981", "F52.4"], answer: 0 }
      ],
      line: "**F11.181** Mild opioid use disorder with opioid-induced sexual dysfunction, with onset during withdrawal, moderate",
      why: "Early ejaculation that occurs **only during withdrawal** is substance-induced, not PE (p. 504), and early ejaculation can follow stopping opioids (p. 508). Opioids allow **withdrawal onset** (p. 507). A **mild** use disorder = 4th character **1**. Severity uses frequency, not latency: about 60% = **moderate** (p. 506)."
    },
    {
      id: "w13-12", tag: "Sedative medication",
      "case": "A 47-year-old man was prescribed lorazepam for insomnia 6 weeks ago and takes it exactly as directed. Since starting it he has had difficulty getting an erection on about 4 of every 10 sexual occasions; his function was normal before, and on the evenings he skips a dose he has no trouble. He has no substance use disorder, no medical illness on workup, and no other mental disorder. He is distressed.",
      parts: [
        { label: "Substance class used for coding", options: ["Sedative, hypnotic or anxiolytic", "Other (or unknown) substance", "Opioid"], answer: 0 },
        { label: "Onset", options: ONSET, answer: 2 },
        { label: "Severity (graded by frequency)", options: SEV, answer: 0 },
        { label: "Code", options: ["F13.981", "F13.181", "F19.981", "F52.21"], answer: 0 }
      ],
      line: "**F13.981** Lorazepam-induced sexual dysfunction, with onset after medication use, mild",
      why: "Unlike antidepressants, benzodiazepines **are** a listed class (sedative, hypnotic or anxiolytic), so the code is **F13.981**; no use disorder = **9** (p. 505). They are linked to erectile and orgasm problems (p. 507). About 40% of occasions falls in the **25%–50%** band = **mild** (p. 506)."
    },
    {
      id: "w13-13", tag: "Other specified",
      "case": "A 52-year-old man reports that for the past year he ejaculates normally, with normal timing, force and volume, on every occasion, but feels almost no pleasure at the moment of ejaculation. His erections and desire are normal. He is clearly distressed. He has no depressive disorder, takes no medications or drugs, and has no medical cause on workup. His clinician wants to record exactly why no specific disorder fits.",
      parts: [
        { label: "Diagnosis", options: ["Delayed ejaculation", "Other specified sexual dysfunction", "Unspecified sexual dysfunction", "Male hypoactive sexual desire disorder"], answer: 1 },
        { label: "Reason recorded", options: ["Anhedonic ejaculation", "Sexual aversion", "No reason recorded"], answer: 0 },
        { label: "Code", options: ["F52.8", "F52.9", "F52.32", "F52.0"], answer: 0 }
      ],
      line: "**F52.8** Other specified sexual dysfunction, anhedonic ejaculation",
      why: "Normal ejaculation with reduced pleasure (**anhedonic ejaculation**) is **not** delayed ejaculation; it can be coded as other specified or unspecified sexual dysfunction (p. 481). Because the clinician states the reason, it is **other specified (F52.8)**, recorded with the reason after the name (p. 509)."
    },
    {
      id: "w13-14", tag: "Two sexual dysfunctions",
      "case": "A 46-year-old man has, for the past year, had almost no desire for sex and almost no sexual thoughts or fantasies, where before he had a normal sex life. Over the same year he has been unable to keep an erection on nearly every occasion, with his partner or alone. His distress about both problems is severe. Testosterone, thyroid tests, glucose and lipids are normal, he takes no medications or drugs, he has no depressive disorder, and the relationship is stable. He does not identify as asexual.",
      parts: [
        { label: "Diagnoses", options: SEXDX, answer: [0, 2], multi: true },
        { label: "Onset subtype (both)", options: COURSE, answer: 1 },
        { label: "Context subtype (both)", options: SCOPE, answer: 0 },
        { label: "Severity (both)", options: SEV, answer: 2 },
        { label: "Codes", options: ["F52.0", "F52.21", "F52.22", "F52.4"], answer: [0, 1], multi: true }
      ],
      line: "**F52.0** Male hypoactive sexual desire disorder, acquired, generalized, severe; **F52.21** Erectile disorder, acquired, generalized, severe",
      why: "MHSDD needs **both** low desire **and** deficient thoughts or fantasies (p. 499). In men, desire and arousal stay **separate** diagnoses (p. 501), unlike the merged female category, and up to half of men with low desire also have erectile difficulties (p. 501). Diagnose **both** (p. 477)."
    }
  ]);

  SP.add("ch13", "counting", [
    {
      id: "n13-01", tag: "FSIAD Criterion A",
      "case": "A 35-year-old woman describes the past 8 months:",
      ask: "Mark the findings that count as FSIAD indicators. Are at least three present?",
      items: [
        ["Almost no interest in sexual activity", true, "A1: absent or reduced interest."],
        ["Rarely has sexual thoughts or fantasies", true, "A2: absent or reduced thoughts or fantasies."],
        ["Wants sex less often than her husband does", false, "A **desire discrepancy** alone is not an indicator and is not enough for the diagnosis (p. 489)."],
        ["Feels little excitement or pleasure in about 9 of every 10 encounters", true, "A4, on about 75%–100% of encounters."],
        ["Reduced genital sensations in about half of encounters", false, "A6 needs about **75%–100%** of encounters; half is not enough."],
        ["Still starts sex sometimes and welcomes her husband’s approaches", false, "Initiation and receptivity are preserved, so A3 is absent."]
      ],
      need: 3,
      met: true,
      why: "Three indicators (A1, A2, A4) meet the **three of six** threshold (p. 489). Duration of about 6 months, distress and the exclusions still need checking."
    },
    {
      id: "n13-02", tag: "FSIAD Criterion A",
      "case": "A 58-year-old woman describes the past 9 months:",
      ask: "Mark the findings that count as FSIAD indicators. Are at least three present?",
      items: [
        ["No longer starts sex and usually turns down her partner’s approaches", true, "A3: initiation and receptivity both reduced."],
        ["Erotic films, words or her partner’s touch no longer spark any interest", true, "A5: no responsive interest to internal or external cues."],
        ["Reduced vaginal lubrication on about 6 of every 10 occasions", false, "A6 requires about **75%–100%** of encounters."],
        ["Fewer sexual fantasies than in her twenties, a drop she considers normal for her age", false, "The normal decline in fantasies with age must be taken into account for A2 (p. 490)."],
        ["Her partner wants sex far more often than she does", false, "A desire discrepancy is not an indicator."]
      ],
      need: 3,
      met: false,
      why: "Only two indicators count, so Criterion A is not met (p. 489). If distress is significant, other specified or unspecified sexual dysfunction could be considered (p. 509)."
    },
    {
      id: "n13-03", tag: "Erectile disorder Criterion A",
      "case": "A 49-year-old man kept a log of his last 10 sexual occasions over the past 7 months:",
      ask: "Mark each symptom that reaches the about 75%–100% frequency needed for Criterion A.",
      items: [
        ["Difficulty getting an erection: 5 of 10 occasions", false, "50% is below the 75% bar."],
        ["Losing the erection before sex was completed: 8 of 10 occasions", true, "80%: A2 at the required frequency."],
        ["Erection noticeably less firm than before: 6 of 10 occasions", false, "60% is below the 75% bar."],
        ["Lower desire than his partner on most occasions", false, "Desire is not an erectile symptom."]
      ],
      metLabel: "Is Criterion A met (at least one of the three symptoms on about 75%–100% of occasions)?",
      met: true,
      why: "**At least one** of the three symptoms (obtaining, maintaining, rigidity) on about 75%–100% of occasions is enough (p. 481). Maintaining at 80% qualifies; the duration, distress and exclusions are still to be checked (pp. 481–482)."
    },
    {
      id: "n13-04", tag: "PE severity",
      "case": "Severity of premature (early) ejaculation is graded by the man’s estimated latency after vaginal penetration.",
      ask: "Mark each description that falls in the **severe** band.",
      items: [
        ["Ejaculates while undressing, before any sexual contact", true, "Before sexual activity = severe."],
        ["Ejaculates within about 10 seconds of penetration", true, "Within about 15 seconds = severe."],
        ["Ejaculates about 25 seconds after penetration", false, "About 15–30 seconds = **moderate**."],
        ["Ejaculates about 45 seconds after penetration", false, "About 30 seconds to 1 minute = **mild**."],
        ["Ejaculates about 3 minutes after penetration and wants to last longer", false, "Normal latency with a wish for longer is **not** PE (p. 504)."]
      ],
      metLabel: "A man with PE usually ejaculates about 10 seconds after penetration and says his distress is only mild. Is his PE graded severe?",
      met: true,
      why: "PE is the one specific sexual dysfunction graded by **latency**, not distress (p. 502). About 10 seconds is within the 15-second limit, so it is **severe** whatever his distress level."
    },
    {
      id: "n13-05", tag: "Induced severity",
      "case": "Five patients with substance/medication-induced sexual dysfunction report how often the problem occurs:",
      ask: "Mark each patient whose dysfunction is graded **moderate**. Are at least two moderate?",
      items: [
        ["Problem on 3 of the last 10 occasions", false, "30% = **mild** (25%–50%)."],
        ["Problem on 6 of the last 10 occasions", true, "60% = moderate (50%–75%)."],
        ["Problem on 13 of the last 20 occasions", true, "65% = moderate."],
        ["Problem on 9 of the last 10 occasions", false, "90% = **severe** (75% or more)."],
        ["Problem on 4 of the last 10 occasions, with severe distress", false, "Induced severity uses **frequency**, not distress: 40% = mild."]
      ],
      need: 2,
      met: true,
      why: "Induced sexual dysfunction is graded by how often it occurs: mild **25%–50%**, moderate **50%–75%**, severe **75% or more** of occasions (p. 506)."
    },
    {
      id: "n13-06", tag: "GPPPD Criterion A",
      "case": "A 30-year-old woman describes the past 8 months:",
      ask: "Mark the findings that belong to one of the four GPPPD symptom dimensions in Criterion A.",
      items: [
        ["Deep pelvic pain felt only when penetration goes deeper", true, "A2 covers **deep** as well as superficial pain."],
        ["Marked fear of pain in the hours before intercourse", true, "A3: fear or anxiety in anticipation of penetration."],
        ["Her pelvic floor muscles tighten when her partner tries to enter", true, "A4: tensing or tightening of the pelvic floor."],
        ["Low interest in sex", false, "Common alongside GPPPD, but it is an FSIAD feature, not a GPPPD dimension (p. 495)."],
        ["Avoids gynecological examinations", false, "A frequent associated feature (p. 495), not one of the four dimensions."]
      ],
      metLabel: "Is Criterion A met?",
      met: true,
      why: "**One** dimension is enough for Criterion A, though all four should be assessed (p. 494). She has three. Unlike most of the chapter, GPPPD does not use the 75%–100% rule; it asks for **persistent or recurrent** difficulties (p. 493)."
    },
    {
      id: "n13-07", tag: "MHSDD Criterion A",
      "case": "A 40-year-old man is referred because his wife is unhappy with how rarely they have sex. Over the past 10 months:",
      ask: "Mark the findings that count toward MHSDD Criterion A.",
      items: [
        ["He rarely wants partnered sex", true, "Deficient desire for sexual activity."],
        ["He has sexual fantasies several times a week", false, "His fantasies are **not** deficient."],
        ["His wife wants sex more often than he does", false, "A desire discrepancy alone is not sufficient (p. 499)."],
        ["He masturbates about once a week", false, "Sexual activity can occur even with low desire (p. 499); it neither counts for nor against A."]
      ],
      metLabel: "Is Criterion A met?",
      met: false,
      why: "MHSDD requires **both** deficient desire **and** deficient sexual thoughts or fantasies (pp. 498–499). Frequent fantasies mean Criterion A is not met."
    },
    {
      id: "n13-08", tag: "Induced Criterion C",
      "case": "A 62-year-old man blames his erectile problems on a blood-pressure medication. The history shows:",
      ask: "Mark the findings that support a substance/medication-induced cause.",
      items: [
        ["The drug class is known to cause erectile problems", true, "Criterion B2: the medication is capable of the symptom."],
        ["The problems worsened after a dose increase", true, "Change in use of the medication fits “onset after medication use” (p. 506)."],
        ["The erectile problems began a year **before** the drug was started", false, "Symptoms that **precede** the medication point to an independent dysfunction (p. 505)."],
        ["They have persisted unchanged for 3 months since the drug was stopped", false, "Persistence beyond about **1 month** after stopping argues for an independent dysfunction (p. 505)."]
      ],
      metLabel: "Is Criterion C met (not better explained by an independent sexual dysfunction)?",
      met: false,
      why: "Onset before the drug and persistence for months after stopping are the manual’s examples of evidence for an **independent** dysfunction (p. 505). Assess for erectile disorder or a medical cause instead."
    },
    {
      id: "n13-09", tag: "Delayed ejaculation Criterion A",
      "case": "A 39-year-old man describes the past 7 months:",
      ask: "Mark the findings that count toward delayed ejaculation Criterion A.",
      items: [
        ["Unable to ejaculate during intercourse on about 8 of every 10 occasions", true, "Absence of ejaculation on about 75%–100% of partnered occasions."],
        ["Also unable with his partner’s oral or manual stimulation", true, "Partnered activity includes manual, oral, coital or anal stimulation (p. 479)."],
        ["Ejaculates easily when he masturbates alone", false, "Common in DE (p. 479), but Criterion A concerns **partnered** activity, so it does not count."],
        ["He does not want the delay and wishes he could finish", true, "Criterion A requires that he **not desire** the delay."]
      ],
      metLabel: "Is Criterion A met?",
      met: true,
      why: "Marked delay or absence of ejaculation on almost all partnered occasions, without wanting the delay, meets Criterion A (p. 478). The about 6-month duration, distress and exclusions follow."
    },
    {
      id: "n13-10", tag: "The 75% rule",
      "case": "Several sexual dysfunction criteria sets require the symptom on almost all or all (about 75%–100%) occasions.",
      ask: "Mark each disorder whose criteria use the about 75%–100% of occasions rule.",
      items: [
        ["Delayed ejaculation", true, "Criterion A (p. 478)."],
        ["Erectile disorder", true, "Criterion A (p. 481)."],
        ["Female orgasmic disorder", true, "Criterion A (p. 485)."],
        ["Premature (early) ejaculation", true, "Placed in **Criterion B**, with at least 6 months (p. 502)."],
        ["Male hypoactive sexual desire disorder", false, "Uses **persistently or recurrently** deficient desire and fantasies (p. 498)."],
        ["Genito-pelvic pain/penetration disorder", false, "Uses **persistent or recurrent** difficulties (p. 493)."]
      ],
      metLabel: "Does FSIAD apply the 75%–100% rule to all six of its indicators?",
      met: false,
      why: "In FSIAD only **A4** (excitement or pleasure) and **A6** (genital or nongenital sensations) carry the 75%–100% wording (p. 489). MHSDD and GPPPD do not use it at all."
    }
  ]);
})();
