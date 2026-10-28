/* Chapter 25 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable.
   All seven conditions are Section III proposals for research, not clinical use (p. 903); each caveat names the Section II
   category or Chapter 22 code used in the chart. */
SP.add("ch25", "mnemonics", [
  {
    id: "m25-01", short: "APS: A WYDE fence", name: "A WYDE fence: attenuated symptoms that stay below the psychosis line", original: true, dx: "attenuated-psychosis-syndrome", sec: "s25-aps-criteria",
    "for": "The six proposed criteria (A–F) for attenuated psychosis syndrome",
    letters: [
      ["A", "Attenuated symptoms", "At least one of attenuated delusions, attenuated hallucinations or attenuated disorganized speech, enough to warrant attention"],
      ["W", "Weekly", "Present at least once a week over the past month"],
      ["Y", "Year", "Began or got worse within the past year (a state, not a lifelong trait)"],
      ["D", "Distress or disability", "Troubling or disabling enough to need clinical attention"],
      ["E", "Explained otherwise? No", "Not better explained by another disorder (including mood disorders with psychotic features), a substance or a medical condition"],
      ["Fence", "Fence never crossed", "Criteria for any psychotic disorder have never been met"]
    ],
    caveat: "DSM check: pp. 903–904. 'Weekly' means at least once per week for the past month, and 'Year' means onset **or worsening** in the past year (Criteria B–C). Insight is relatively kept: doubt can be raised (p. 904). Proposed set only; in the chart record **other specified schizophrenia spectrum and other psychotic disorder (F28), attenuated psychosis syndrome** (app guidance on recording)."
  },
  {
    id: "m25-02", short: "Short hypomania: 1-2-3-4", name: "The 1-2-3-4 ladder for depressive episodes with short-duration hypomania", original: true, dx: "short-duration-hypomania", sec: "s25-sdh-criteria",
    "for": "The minimum history for the proposed depressive episodes with short-duration hypomania, and the point where it becomes bipolar II",
    letters: [
      ["1", "One MDE", "At least one lifetime major depressive episode with full criteria"],
      ["2", "Two periods", "At least two lifetime hypomanic periods"],
      ["2–3", "Two to three days", "Each lasts at least 2 but fewer than 4 consecutive days"],
      ["3 (4)", "Three symptoms", "Three hypomanic symptoms, or four if the mood is only irritable, plus observable change without marked impairment"],
      ["4", "Four days ends it", "One hypomania of 4 or more days with a lifetime MDE = bipolar II, permanently"]
    ],
    caveat: "DSM check: pp. 907–910. The ladder skips the remaining hypomanic criteria: unequivocal change seen by others, no marked impairment or hospitalization, not substance-induced, and **psychotic features make it manic** (p. 908). The short periods occur at **different times** from the depression; concurrent symptoms suggest mixed features (p. 910). Proposed set only; record **other specified bipolar and related disorder (F31.89)** (app guidance on recording)."
  },
  {
    id: "m25-03", short: "Caffeine: the 3 Cs gate", name: "The 3 Cs gate: Can't cut down, Carries on despite harm, Crashes without it", original: true, dx: "caffeine-use-disorder", sec: "s25-cud-criteria",
    "for": "The three criteria that must all be present for the proposed caffeine use disorder",
    letters: [
      ["C", "Can't cut down", "Persistent desire or failed efforts to cut down or control caffeine"],
      ["C", "Carries on despite harm", "Keeps using despite knowing of a physical or psychological problem caffeine likely caused or worsened"],
      ["C", "Crashes without it", "Withdrawal: the caffeine withdrawal syndrome, or caffeine taken to relieve or avoid it"],
      ["+6", "Optional extras", "More than intended, role failure, social problems, tolerance, time spent, craving: may be present but cannot replace the 3 Cs"]
    ],
    caveat: "DSM check: pp. 910–911. Rule: **at least the first three** of nine criteria within **12 months**, with distress or impairment. The higher bar is meant to **prevent overdiagnosis** (p. 911); tolerance plus withdrawal alone is **not enough** (p. 913). Proposed set only: there is no Section II caffeine use disorder; Section II has caffeine intoxication (F15.920), caffeine withdrawal (F15.93) and unspecified caffeine-related disorder (F15.99) (Ch 16; choice of F15.99 is app guidance)."
  },
  {
    id: "m25-04", short: "Gaming: Players Who Try Unplugging…", name: "'Players Who Try Unplugging Lose Control, Deceive, Escape, Jeopardize'", original: true, dx: "internet-gaming-disorder", sec: "s25-igd-criteria",
    "for": "The nine proposed items for Internet gaming disorder, in the manual's order",
    letters: [
      ["P", "Preoccupation", "Gaming dominates thoughts and daily life"],
      ["W", "Withdrawal", "Irritable, anxious or sad when gaming is removed; no physical signs"],
      ["T", "Tolerance", "Needs more and more time gaming"],
      ["U", "Unsuccessful control", "Cannot cut back on gaming"],
      ["L", "Lost interests", "Gives up earlier hobbies and entertainment, except games"],
      ["C", "Continued despite problems", "Keeps playing excessively despite knowing of psychosocial problems"],
      ["D", "Deceives", "Lies to family, therapists or others about how much they play"],
      ["E", "Escape", "Games to relieve a bad mood such as helplessness, guilt or anxiety"],
      ["J", "Jeopardized", "Risked or lost a relationship, job, or school or career opportunity"]
    ],
    caveat: "DSM check: pp. 913–914. Rule: **five or more of nine** within **12 months**, with distress or impairment; severity mild, moderate or severe by disruption (p. 914). **Nongambling** games only: online gambling → gambling disorder; social media and pornography are not analogous (pp. 913–914, 916). Proposed set only; no Section II category names it. If a diagnosis must be recorded, **other specified mental disorder (F99)** is app guidance. Outside the DSM: ICD-11 lists gaming disorder (6C51)."
  },
  {
    id: "m25-05", short: "ND-PAE: 1 of 5, 1 of 3, 2 of 4 (talk)", name: "Brain 1 of 5, Control 1 of 3, Daily life 2 of 4 with a Talker", original: true, dx: "nd-pae", sec: "s25-ndpae-criteria",
    "for": "The counting rules for ND-PAE Criteria B, C and D",
    letters: [
      ["B", "Brain: 1 of 5", "IQ or standard score of 70 or below; executive function; learning; memory; visual-spatial reasoning"],
      ["C", "Control: 1 of 3", "Mood or behavior regulation; attention; impulse control"],
      ["D", "Daily life: 2 of 4", "Communication; social communication and interaction; daily living skills; motor skills"],
      ["T", "Talker required", "At least one of the two adaptive areas must be communication or social communication"]
    ],
    caveat: "DSM check: pp. 916–917. The mnemonic omits A (**more than minimal** exposure: more than 13 drinks a month or more than 2 on one occasion, p. 918), E (childhood onset), F (distress or impairment) and G (not better explained by postnatal substances, medical conditions, other teratogens, genetic syndromes or neglect) (p. 917). FAS facial features are **not required** (p. 917); defer in children **3 and younger** (p. 918). Proposed set only; record **other specified neurodevelopmental disorder (F88)**, where ND-PAE is the manual's example (app guidance on recording)."
  },
  {
    id: "m25-06", short: "Suicidal behavior: ABCDE on a 24-month clock", name: "ABCDE on a 24-month clock (12 current, 12–24 early remission)", original: true, dx: "suicidal-behavior-disorder", sec: "s25-sbd-criteria",
    "for": "The five proposed criteria for suicidal behavior disorder and its two specifiers",
    letters: [
      ["A", "Attempt in 24 months", "A suicide attempt within the last 24 months, judged from the time the behavior began"],
      ["B", "Body-surface relief is NSSI", "Not an act that meets nonsuicidal self-injury"],
      ["C", "Contemplation and preparation don't count", "Not applied to suicidal ideation or preparatory acts"],
      ["D", "Delirium excluded", "Not begun during delirium or confusion"],
      ["E", "Exclusively political or religious excluded", "Not done solely for a political or religious aim"],
      ["12 / 24", "Clock", "Current: 12 months or less since the last attempt; early remission: 12–24 months"]
    ],
    caveat: "DSM check: pp. 920–921. Fine print the mnemonic skips: an attempt **stopped after it began** still counts; being dissuaded **before** starting does not; **injury is not required** and medical consequences are not weighed; deliberate intoxication beforehand does **not** exclude (p. 921). Proposed set only; record the Chapter 22 codes **T14.91XA/T14.91XD** (current; printed as T14.91A/D on p. 920, corrected by the APA) or **Z91.51** (history)."
  },
  {
    id: "m25-07", short: "NSSI: Five days, A to F", name: "Five days A–F: Above the skin, Because, Context, Doesn't count if sanctioned, Effects, Filter", original: true, dx: "nssi-disorder", sec: "s25-nssi-criteria",
    "for": "The six proposed criteria for nonsuicidal self-injury disorder",
    letters: [
      ["A", "Above the skin, 5 days", "Intentional surface self-injury on 5 or more days in the past year, expecting only minor or moderate harm, with no suicidal intent (stated or inferred)"],
      ["B", "Because (1 of 3)", "Expected to bring relief from a negative state, resolve an interpersonal difficulty, or induce a positive feeling"],
      ["C", "Context (1 of 3)", "Negative feelings or interpersonal trouble just before; hard-to-control preoccupation beforehand; frequent thoughts of self-injury"],
      ["D", "Doesn't count", "Not socially sanctioned (piercing, tattooing, ritual) and not just scab picking or nail biting"],
      ["E", "Effects", "Clinically significant distress or interference in functioning"],
      ["F", "Filter", "Not only during psychosis, delirium, intoxication or withdrawal; not stereotypies; not better explained by another disorder such as ASD, IDD, Lesch-Nyhan, trichotillomania or excoriation"]
    ],
    caveat: "DSM check: p. 923. The count is **days**, not acts: 5 or more days in the last year (Criterion A). NSSI is told from suicidal behavior by its goal, relief vs a wish to die (p. 926), and is **not pathognomonic** of borderline PD (p. 925). Every person with NSSI needs suicide risk assessment (p. 925). Proposed set only; record **R45.88** (current NSSI) or **Z91.52** (history) (pp. 923–924; Ch 22)."
  }
]);
