/*
 * Diagnostic helpers for Chapter 13 (Sexual Dysfunctions), DSM-5-TR pp. 477–510.
 * "sexual-cause": is a sexual complaint a disorder at all, and is it better explained by a nonsexual mental disorder,
 *                 a substance or medication (with the induced code), a medical condition or the relationship?
 * "sexual":       from the main complaint (desire, arousal/erection, ejaculation/orgasm, pain) to the specific
 *                 sexual dysfunction, with its code and specifiers.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "sexual-cause",
    chapter: "ch13",
    title: "Sexual problem: a dysfunction, or something else?",
    summary: "Start from any sexual complaint. Check that it is a persistent, distressing problem with adequate stimulation, then rule out a nonsexual mental disorder, a substance or medication, a medical condition and severe relationship distress, in the order the manual uses.",
    caution: "A teaching aid built from DSM-5-TR pp. 477–509. Take a full sexual and medical history, ask about medications, alcohol and drugs, and screen for depression and partner violence. Many cases have mixed causes; a sexual dysfunction can coexist with a medical condition. Codes are unchanged through October 2026.",
    start: "real",
    nodes: {
      real: {
        q: "Is this a real dysfunction rather than a normal variation?",
        help: "Not a disorder: inadequate or ineffective stimulation; dissatisfaction entirely from unrealistic expectations; wanting sex less often than a partner (desire discrepancy) and nothing more; orgasm with clitoral stimulation but not in intercourse; a one-off or new-partner episode; normal age-related change; lifelong low desire explained by asexual identity (pp. 477, 479, 486, 490, 504).",
        options: [
          { label: "Yes: a persistent problem despite adequate stimulation", to: "distress" },
          { label: "No: one of the normal variations above", to: "r:normal", note: "No diagnosis." }
        ]
      },
      distress: {
        q: "Does the problem cause clinically significant distress in the person?",
        help: "Criterion C of every disorder in the chapter. A partner’s distress often prompts the visit but does not satisfy the criterion.",
        options: [
          { label: "Yes", to: "mental" },
          { label: "No", to: "r:nodistress", note: "No diagnosis." }
        ]
      },
      mental: {
        q: "Is the problem mostly explained by a nonsexual mental disorder?",
        help: "For example, a major depressive episode with loss of interest in almost everything, a bipolar, anxiety or psychotic disorder, or PTSD. If the sexual problem occurs only as part of that disorder, diagnose that disorder alone (p. 478).",
        options: [
          { label: "Yes, it is part of that disorder", to: "r:mental", note: "That disorder only." },
          { label: "No, or the disorder does not explain it", to: "substance" }
        ]
      },
      substance: {
        q: "Did the problem begin during or soon after intoxication or withdrawal, or after a medication was started, changed or stopped, with a drug capable of causing it?",
        help: "Common culprits: SSRIs and SNRIs, antipsychotics, benzodiazepines, lithium and anticonvulsants, hormonal contraceptives, 5-α-reductase inhibitors, methadone and other opioids, alcohol, cocaine and stimulants. Against it: the problem began before the drug, or lasted more than about 1 month after intoxication or withdrawal ended (p. 505).",
        options: [
          { label: "Yes, a substance of abuse", to: "usedisorder" },
          { label: "Yes, a prescribed medication", to: "r:medication" },
          { label: "No", to: "medical" }
        ]
      },
      usedisorder: {
        q: "Does the person have a use disorder for that same substance class?",
        help: "The 4th character of the code carries the use disorder: 1 = mild, 2 = moderate or severe, 9 = none. Do not diagnose the use disorder separately.",
        options: [
          { label: "Mild use disorder", to: "r:sub-mild" },
          { label: "Moderate or severe use disorder", to: "r:sub-modsev" },
          { label: "No use disorder (e.g., a single heavy use)", to: "r:sub-none" }
        ]
      },
      medical: {
        q: "Is the problem fully explained by a medical condition or injury?",
        help: "For example, spinal cord injury, pelvic nerve damage after surgery, diabetic or other peripheral neuropathy, multiple sclerosis, hypogonadism, hyperprolactinemia, thyroid disease, vascular disease. A medical condition that is present but does not fully explain the problem does not rule out a sexual dysfunction (pp. 478, 485).",
        options: [
          { label: "Yes, fully explained", to: "r:medical", note: "No psychiatric diagnosis." },
          { label: "No, or only partly", to: "relationship" }
        ]
      },
      relationship: {
        q: "Is the problem better explained by severe relationship distress, partner violence or other major stressors?",
        help: "Ordinary relationship factors are part of the assessment, not an exclusion. Only severe distress, violence or major stressors that explain the problem rule out the diagnosis.",
        options: [
          { label: "Yes", to: "r:relationship", note: "Z code instead." },
          { label: "No", to: "r:primary" }
        ]
      }
    },
    results: {
      normal: { label: "No diagnosis", dx: "Normal variation or a non-disorder", line: "The problem does not reflect a sexual dysfunction.", points: ["Education, counseling or couples work may still help: the manual says care can be needed even when no diagnosis is made (p. 477).", "Reassess if the problem becomes persistent and distressing."], link: { ch: "ch13", sec: "s13-context", label: "What is not a dysfunction" } },
      nodistress: { label: "No diagnosis", dx: "No clinically significant distress", line: "Every sexual dysfunction requires distress in the individual (Criterion C).", points: ["Many people with low desire or rare orgasm are not bothered by it.", "A partner’s distress alone does not meet the criterion."], link: { ch: "ch13", sec: "s13-frame", label: "The shared frame" } },
      mental: { label: "Not a sexual dysfunction", dx: "The nonsexual mental disorder", line: "If depression, a bipolar, anxiety or psychotic disorder, or PTSD mostly explains the problem, diagnose only that disorder (p. 478).", points: ["Treat the underlying disorder and reassess sexual function afterward.", "If sexual symptoms began with the antidepressant, reconsider the induced diagnosis."], link: { ch: "ch13", sec: "s13-differential", label: "The differential in five questions" }, dxId: "mdd" },
      medication: { dx: "Medication-induced sexual dysfunction", line: "Code medications without a class of their own (antidepressants, antipsychotics) as F19.981 and write the drug’s name; benzodiazepines use F13.981.", points: ["Example: F19.981 fluoxetine-induced sexual dysfunction, with onset after medication use, moderate.", "Severity by frequency: 25%–50% mild, 50%–75% moderate, 75%+ severe.", "Usually improves within days to several weeks of stopping; SSRI effects sometimes persist (pp. 507–508)."], link: { ch: "ch13", sec: "s13-induced-coding", label: "Coding the induced disorder" }, dxId: "substance-sexual" },
      "sub-mild": { dx: "Mild [substance] use disorder with [substance]-induced sexual dysfunction", line: "4th character 1: F10.181 alcohol, F11.181 opioid, F13.181 sedative, F14.181 cocaine, F15.181 amphetamine-type, F19.181 other.", points: ["Add the onset (during intoxication or during withdrawal) and the severity.", "Do not list the use disorder separately."], link: { ch: "ch13", sec: "s13-induced-coding", label: "Coding the induced disorder" }, dxId: "substance-sexual" },
      "sub-modsev": { dx: "Moderate or severe [substance] use disorder with [substance]-induced sexual dysfunction", line: "4th character 2: F10.281, F11.281, F13.281, F14.281, F15.281, F19.281.", points: ["Example: F10.281 severe alcohol use disorder with alcohol-induced sexual dysfunction, with onset during intoxication, moderate.", "Stimulants and cocaine allow onset during intoxication only."], link: { ch: "ch13", sec: "s13-induced-coding", label: "Coding the induced disorder" }, dxId: "substance-sexual" },
      "sub-none": { dx: "[Substance]-induced sexual dysfunction", line: "4th character 9: F10.981, F11.981, F13.981, F14.981, F15.981, F19.981.", points: ["Example: F15.981 amphetamine-induced sexual dysfunction, with onset during intoxication.", "Give it instead of intoxication or withdrawal only when the sexual symptoms predominate and need attention."], link: { ch: "ch13", sec: "s13-induced-coding", label: "Coding the induced disorder" }, dxId: "substance-sexual" },
      medical: { label: "No psychiatric diagnosis", dx: "Sexual problem due to the medical condition", line: "A sexual problem fully explained by a medical condition is not diagnosed as a mental disorder (p. 478).", points: ["Code the medical condition.", "Erectile problems in men 40 and older warrant cardiovascular screening (p. 484).", "If psychological factors also contribute, a sexual dysfunction can still be diagnosed."], link: { ch: "ch13", sec: "s13-erectile-clinical", label: "Organic or psychogenic?" } },
      relationship: { label: "No sexual dysfunction", dx: "Relationship problem or stressor (Z code)", line: "Severe relationship distress, partner violence or major stressors that explain the problem: a Z code such as Z63.0 relationship distress with spouse or intimate partner may be listed (p. 478).", points: ["Screen for intimate partner violence and safety.", "Z codes are in the chapter on other conditions that may be a focus of clinical attention."], link: { ch: "ch13", sec: "s13-differential", label: "The differential in five questions" } },
      primary: { dx: "A primary sexual dysfunction", line: "Continue to the sexual dysfunction helper to name the disorder, its subtypes and severity.", points: ["Several dysfunctions can be diagnosed together.", "Open the next helper: Which sexual dysfunction?"], link: { ch: "ch13", sec: "s13-map", label: "Chapter map" } }
    }
  },
  {
    id: "sexual",
    chapter: "ch13",
    title: "Which sexual dysfunction?",
    summary: "Start from the main complaint (desire, erection or arousal, ejaculation or orgasm, pain). Check the threshold for that disorder and reach the diagnosis with its code and specifiers.",
    caution: "A teaching aid built from DSM-5-TR pp. 477–509. Use it after ruling out a nonsexual mental disorder, a substance or medication, a medical condition and severe relationship distress (see the companion helper). Every disorder also needs about 6 months and distress in the person. Diagnose all dysfunctions present. Codes are unchanged through October 2026.",
    start: "complaint",
    nodes: {
      complaint: {
        q: "What is the main complaint?",
        help: "Pick the one you are testing now; come back for the others, since several can coexist.",
        options: [
          { label: "Low desire or interest", to: "desire" },
          { label: "Erection problems", to: "erection" },
          { label: "Low arousal, excitement or genital sensation in a woman", to: "fsiad" },
          { label: "Ejaculation too early", to: "pe" },
          { label: "Ejaculation delayed or absent", to: "de" },
          { label: "Orgasm delayed, absent or weak in a woman", to: "fod" },
          { label: "Pain, fear of pain, or difficulty with penetration", to: "pain" }
        ]
      },
      desire: {
        q: "Is the person a man (or is male HSDD the better fit by clinical judgment)?",
        help: "Male HSDD and FSIAD describe experiences that do not depend on sex or gender; for gender-diverse people, choose by clinical judgment (p. 478).",
        options: [
          { label: "Man", to: "mhsdd" },
          { label: "Woman", to: "fsiad" }
        ]
      },
      mhsdd: {
        q: "Are BOTH low or absent desire for sexual activity AND deficient or absent sexual thoughts or fantasies present, persistently or recurrently, for about 6 months?",
        help: "Judge against age and context. Wanting sex less often than a partner is not enough. Low desire explained by asexual identity is not diagnosed (pp. 498–501).",
        options: [
          { label: "Yes, both", to: "r:mhsdd" },
          { label: "Only one of the two", to: "r:other-spec", note: "Below threshold: consider other specified or unspecified if distressing symptoms predominate, or no diagnosis." },
          { label: "Only less than the partner wants", to: "r:none" }
        ]
      },
      fsiad: {
        q: "Are at least 3 of these 6 present for about 6 months: low interest; few sexual thoughts or fantasies; little initiation and usually unreceptive; little excitement or pleasure (75%–100% of encounters); little response to sexual cues; reduced genital or nongenital sensation (75%–100%)?",
        help: "Any three, in any combination. A desire discrepancy alone does not count; check that stimulation is adequate (pp. 489–490).",
        options: [
          { label: "Yes, 3 or more", to: "r:fsiad" },
          { label: "Only 1 or 2", to: "r:other-spec", note: "Below threshold: consider other specified or unspecified if distressing symptoms predominate, or no diagnosis." }
        ]
      },
      erection: {
        q: "On about 75%–100% of occasions for about 6 months, is there marked difficulty getting an erection, keeping it until the end of sexual activity, or a marked decrease in rigidity?",
        help: "One of the three is enough. Gradual, generalized onset over 40–50 suggests a medical cause; sudden, situational onset after a stressor and age under 40 suggest a psychological one (pp. 481–485).",
        options: [
          { label: "Yes", to: "r:ed" },
          { label: "Only occasionally, or with a new partner", to: "r:none" }
        ]
      },
      pe: {
        q: "During partnered sex, does ejaculation occur within about 1 minute of vaginal penetration and before he wishes, on 75%–100% of occasions for at least 6 months?",
        help: "His own estimate of latency is enough. For nonvaginal activity the diagnosis can be used, but no duration criteria exist (pp. 501–502).",
        options: [
          { label: "Yes", to: "pesev" },
          { label: "Latency is normal but he wants longer", to: "r:none" },
          { label: "Only on a first encounter with a new partner", to: "r:none" }
        ]
      },
      pesev: {
        q: "How quickly does ejaculation occur?",
        help: "Severity is graded by latency, not distress (p. 502).",
        options: [
          { label: "About 30 seconds to 1 minute", to: "r:pe-mild" },
          { label: "About 15–30 seconds", to: "r:pe-mod" },
          { label: "Before sex, at the start, or within about 15 seconds", to: "r:pe-sev" }
        ]
      },
      de: {
        q: "On about 75%–100% of partnered occasions for about 6 months, and without wanting the delay, is there marked delay, infrequency or absence of ejaculation?",
        help: "Many can ejaculate alone but not with a partner (situational). Normal ejaculation with reduced pleasure is not delayed ejaculation. Rule out retrograde ejaculation and anejaculation (pp. 478–481).",
        options: [
          { label: "Yes", to: "r:de" },
          { label: "Ejaculation is normal but pleasure is reduced", to: "r:other-spec", note: "Anhedonic ejaculation." },
          { label: "He is dissatisfied only because of unrealistic expectations", to: "r:none" }
        ]
      },
      fod: {
        q: "On about 75%–100% of occasions for about 6 months, is orgasm markedly delayed, infrequent or absent, or much less intense, despite adequate stimulation?",
        help: "Orgasm with clitoral stimulation but not during intercourse does not count (p. 486).",
        options: [
          { label: "Yes", to: "never" },
          { label: "Orgasm only with clitoral stimulation", to: "r:none" }
        ]
      },
      never: {
        q: "Has she ever had an orgasm in any situation?",
        options: [
          { label: "Never", to: "r:fod-never" },
          { label: "Yes, at some time", to: "r:fod" }
        ]
      },
      pain: {
        q: "Is the person a woman (current anatomy)?",
        help: "GPPPD is given only to females; diagnoses tied to anatomy follow the person’s current anatomy (pp. 478, 497).",
        options: [
          { label: "Yes", to: "gppd" },
          { label: "No, a man with genito-pelvic pain", to: "r:other-spec", note: "Use other specified or unspecified." }
        ]
      },
      gppd: {
        q: "For about 6 months, is there persistent or recurrent difficulty with at least 1 of: vaginal penetration; marked pain with intercourse or attempts; marked fear of pain; marked pelvic floor tensing during attempts?",
        help: "One dimension is enough, but assess all four. No 75%–100% rule and no generalized/situational specifier (pp. 493–494).",
        options: [
          { label: "Yes", to: "r:gppd" },
          { label: "No, pain only with inadequate arousal or a partner’s erectile problem", to: "r:none" }
        ]
      }
    },
    results: {
      none: { label: "No diagnosis", dx: "Not a sexual dysfunction", line: "The pattern described is within the normal range or is better explained by context.", points: ["Education or couples work may still help.", "Reassess if the problem becomes persistent and distressing."], link: { ch: "ch13", sec: "s13-context", label: "What is not a dysfunction" } },
      "other-spec": { dx: "Other specified sexual dysfunction", line: "Distressing sexual symptoms that predominate but do not meet a specific disorder; record the reason (e.g., sexual aversion, anhedonic ejaculation, male genito-pelvic pain).", points: ["Code: F52.8.", "Use unspecified (F52.9) if you choose not to give the reason or information is insufficient."], link: { ch: "ch13", sec: "s13-residual", label: "Residual categories" }, dxId: "other-specified-sexual" },
      mhsdd: { dx: "Male hypoactive sexual desire disorder", line: "Low desire and deficient fantasies for about 6 months, with distress.", points: ["Code: F52.0.", "Specify lifelong or acquired, generalized or situational, and mild, moderate or severe distress.", "Check testosterone, prolactin and thyroid; ask about erectile and ejaculatory problems, which often coexist."], link: { ch: "ch13", sec: "s13-mhsdd", label: "Male HSDD" }, dxId: "male-hsdd" },
      fsiad: { dx: "Female sexual interest/arousal disorder", line: "At least 3 of 6 indicators for about 6 months, with distress.", points: ["Code: F52.22.", "Specify lifelong or acquired, generalized or situational, and severity of distress.", "Screen for depression, thyroid disease, pain and orgasm problems."], link: { ch: "ch13", sec: "s13-fsiad", label: "FSIAD" }, dxId: "fsiad" },
      ed: { dx: "Erectile disorder", line: "Difficulty obtaining or maintaining an erection, or reduced rigidity, on 75%–100% of occasions for about 6 months, with distress.", points: ["Code: F52.21.", "Specify lifelong or acquired, generalized or situational, and severity.", "In men 40 and older check glucose and lipids: erectile disorder predicts coronary artery disease (p. 484)."], link: { ch: "ch13", sec: "s13-erectile", label: "Erectile disorder" }, dxId: "erectile-disorder" },
      "pe-mild": { dx: "Premature (early) ejaculation, mild", line: "Ejaculation within about 30 seconds to 1 minute of vaginal penetration.", points: ["Code: F52.4.", "Specify lifelong or acquired, generalized or situational."], link: { ch: "ch13", sec: "s13-premature", label: "Premature ejaculation" }, dxId: "premature-ejaculation" },
      "pe-mod": { dx: "Premature (early) ejaculation, moderate", line: "Ejaculation within about 15–30 seconds of vaginal penetration.", points: ["Code: F52.4.", "PE may be more common with anxiety disorders, especially social anxiety disorder."], link: { ch: "ch13", sec: "s13-premature", label: "Premature ejaculation" }, dxId: "premature-ejaculation" },
      "pe-sev": { dx: "Premature (early) ejaculation, severe", line: "Ejaculation before sex, at its start, or within about 15 seconds of vaginal penetration.", points: ["Code: F52.4.", "Acquired forms: check for thyroid disease, prostatitis and drug (e.g., opioid) withdrawal."], link: { ch: "ch13", sec: "s13-premature", label: "Premature ejaculation" }, dxId: "premature-ejaculation" },
      de: { dx: "Delayed ejaculation", line: "Marked, unwanted delay, infrequency or absence of ejaculation in partnered sex on 75%–100% of occasions for about 6 months, with distress.", points: ["Code: F52.32.", "Specify lifelong or acquired, generalized or situational, and severity.", "Review serotonergic drugs, alcohol and cannabis; ask about masturbation patterns and depression."], link: { ch: "ch13", sec: "s13-delayed", label: "Delayed ejaculation" }, dxId: "delayed-ejaculation" },
      fod: { dx: "Female orgasmic disorder", line: "Delayed, infrequent, absent or much weaker orgasm on 75%–100% of occasions for about 6 months, with distress.", points: ["Code: F52.31.", "Specify lifelong or acquired, generalized or situational, and severity.", "Check SSRIs and other medications; ask about interest and arousal."], link: { ch: "ch13", sec: "s13-orgasmic", label: "Female orgasmic disorder" }, dxId: "female-orgasmic" },
      "fod-never": { dx: "Female orgasmic disorder, never experienced an orgasm under any situation", line: "Add the specifier for never having had an orgasm in any situation.", points: ["Code: F52.31.", "Usually lifelong and generalized; first make sure stimulation has been adequate."], link: { ch: "ch13", sec: "s13-orgasmic", label: "Female orgasmic disorder" }, dxId: "female-orgasmic" },
      gppd: { dx: "Genito-pelvic pain/penetration disorder", line: "Difficulty with penetration, pain, fear of pain or pelvic floor tensing for about 6 months, with distress.", points: ["Code: F52.6.", "Specify lifelong or acquired and severity only (no generalized or situational).", "Look for lichen sclerosus, endometriosis, infection and genitourinary syndrome of menopause; refer for pelvic floor assessment."], link: { ch: "ch13", sec: "s13-gppd", label: "GPPPD" }, dxId: "gppd" }
    }
  }
]);
