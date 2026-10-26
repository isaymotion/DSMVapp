/* Chapter 19 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch19", "mnemonics", [
  {
    id: "m19-01", short: "The eight: VEF · MS · PFT", name: "Very Eager Flirts, Many Sufferings, Picky Fixed Targets", original: true, dx: "voyeuristic-disorder", sec: "s19-map",
    "for": "The eight listed paraphilic disorders in the manual's order and classification",
    letters: [
      ["V", "Voyeuristic (F65.3)", "Courtship group: watching an unsuspecting person"],
      ["E", "Exhibitionistic (F65.2)", "Courtship group: exposing the genitals to an unsuspecting person"],
      ["F", "Frotteuristic (F65.81)", "Courtship group: touching or rubbing against a nonconsenting person"],
      ["M", "Masochism (F65.51)", "Algolagnic group: being humiliated, beaten, bound or made to suffer"],
      ["S", "Sadism (F65.52)", "Algolagnic group: another person's physical or psychological suffering"],
      ["P", "Pedophilic (F65.4)", "Target group, aimed at other humans: prepubescent children"],
      ["F", "Fetishistic (F65.0)", "Target group, aimed elsewhere: nonliving objects or a specific nongenital body part"],
      ["T", "Transvestic (F65.1)", "Target group, aimed elsewhere: cross-dressing"]
    ],
    caveat: "DSM check: VEF and MS are **anomalous activity** preferences (courtship and algolagnic); PFT are **anomalous target** preferences. The eight are listed because they are relatively common and some are crimes; dozens of other paraphilias exist (p. 779)."
  },
  {
    id: "m19-02", short: "Shared rules: 6-FUB-B-5", name: "Six months, FUB, two-pronged B, Five years out", original: true, dx: "pedophilic-disorder", sec: "s19-shared-rules",
    "for": "The rules every listed paraphilic disorder shares",
    letters: [
      ["6", "Six months", "Criterion A in all eight lasts at least 6 months"],
      ["FUB", "Fantasies, Urges, Behaviors", "Criterion A can be shown by any of the three"],
      ["B", "Criterion B = consequences", "A alone = the paraphilia; A + B = the disorder"],
      ["5", "Five years (remission)", "No distress or impairment and no acting on urges with a nonconsenting person, for 5 years in an uncontrolled environment"]
    ],
    caveat: "DSM check: 'in full remission' says nothing about whether the paraphilia itself is still present. Pedophilic disorder has **no remission or controlled-environment specifier** (pp. 780–781, 783, 786, 793)."
  },
  {
    id: "m19-03", short: "B arms: 'Victims Exist For Sadists'", name: "Victims Exist For Sadists; My Fetish Troubles me", original: true, dx: "sexual-sadism-disorder", sec: "s19-shared-rules",
    "for": "Which disorders have a 'nonconsenting person' arm in Criterion B and which require distress or impairment only",
    letters: [
      ["V", "Voyeuristic", "Acted on with a nonconsenting person, or distress/impairment"],
      ["E", "Exhibitionistic", "Acted on with a nonconsenting person, or distress/impairment"],
      ["F", "Frotteuristic", "Acted on with a nonconsenting person, or distress/impairment"],
      ["S", "Sadism", "Acted on with a nonconsenting person, or distress/impairment"],
      ["M", "Masochism", "Distress or impairment only"],
      ["F", "Fetishistic", "Distress or impairment only"],
      ["T", "Transvestic", "Distress or impairment only"],
      ["P", "Pedophilic (its own wording)", "Has acted on the urges, or marked distress or interpersonal difficulty"]
    ],
    caveat: "DSM check: pedophilic Criterion B does not say 'with a nonconsenting person' and uses 'interpersonal difficulty' rather than the usual functioning wording (pp. 780, 783, 785, 788, 790, 792, 796, 798)."
  },
  {
    id: "m19-04", short: "Pedophilic: 16-5, E/N, M/F/B, I", name: "Sixteen and Five; Exclusive or Not; Males, Females or Both; Incest", original: true, dx: "pedophilic-disorder", sec: "s19-pedophilic-criteria",
    "for": "Pedophilic disorder Criterion C and specifiers",
    letters: [
      ["16", "At least 16", "Minimum age of the person"],
      ["5", "Five years older", "At least 5 years older than the child; a late adolescent in an ongoing relationship with a 12- or 13-year-old is excluded"],
      ["E/N", "Exclusive / nonexclusive", "Attracted only to children, or not"],
      ["M/F/B", "Males / females / both", "Sex of the children the person is attracted to"],
      ["I", "Limited to incest", "Focus confined to the family"],
      ["0", "No remission", "No 'in full remission' and no 'in a controlled environment'"]
    ],
    caveat: "DSM check: 'prepubescent' is generally age 13 or younger and is approximate because puberty timing varies. Compare voyeuristic disorder (18) and exhibitionistic/frotteuristic (no minimum age) (pp. 780, 784, 787, 792–793)."
  },
  {
    id: "m19-05", short: "Offender clues: S-C-M-B-U", name: "Self-report, Child images, Many victims, Boys, Unrelated", original: true, dx: "pedophilic-disorder", sec: "s19-pedophilic-features",
    "for": "Factors suggesting pedophilic disorder in a person who has offended against a child",
    letters: [
      ["S", "Self-reported interest", "Acknowledges sexual interest in children"],
      ["C", "Child pornography", "Use of sexual images of prepubescent children"],
      ["M", "Multiple victims", "A history of more than one child victim"],
      ["B", "Boy victims", "Victims who are boys"],
      ["U", "Unrelated victims", "Victims outside the family"]
    ],
    caveat: "DSM check: child sexual images inform Criterion A but **without in-person acting do not meet Criterion B**. Emotional congruence with children is also linked to pedophilic interest and reoffending (pp. 793–794)."
  },
  {
    id: "m19-06", short: "Disinhibition rule-outs: MINIPS", name: "MINIPS: when disinhibition, not desire, explains it", original: true, dx: "frotteuristic-disorder", sec: "s19-courtship-compare",
    "for": "Conditions that can cause disinhibited sexual behavior and block a paraphilic diagnosis unless the behavior also occurs outside them",
    letters: [
      ["M", "Manic episode", "Disinhibition and poor judgment during the episode"],
      ["I", "Intellectual developmental disorder", "Impaired judgment or impulse control"],
      ["N", "Neurocognitive disorder (major)", "New disinhibited behavior with cognitive decline"],
      ["I", "Intoxication (substance)", "Disinhibiting effects; also raises the chance of approaching a child"],
      ["P", "Personality change due to another medical condition", "Disinhibited personality change"],
      ["S", "Schizophrenia", "Disinhibition or impaired judgment"]
    ],
    caveat: "DSM check: diagnose the paraphilic disorder only if the behavior **also happens outside** these conditions. Conduct disorder and ASPD are a separate heading: broad norm-breaking, specific sexual interest usually lacking (pp. 782, 785, 787, 796)."
  },
  {
    id: "m19-07", short: "Other specified: 'The Nurse Zapped Clinic Keys Upstairs'", name: "Telephone, Necro, Zoo, Copro, Klisma, Uro", original: true, dx: "other-specified-paraphilic", sec: "s19-residual",
    "for": "The manual's examples for other specified paraphilic disorder (F65.89)",
    letters: [
      ["T", "Telephone scatologia", "Obscene phone calls"],
      ["N", "Necrophilia", "Corpses"],
      ["Z", "Zoophilia", "Animals; the recording example"],
      ["C", "Coprophilia", "Feces"],
      ["K", "Klismaphilia", "Enemas"],
      ["U", "Urophilia", "Urine"]
    ],
    caveat: "DSM check: record 'other specified paraphilic disorder' plus the reason, e.g., **'other specified paraphilic disorder, zoophilia'** (F65.89). Examples need at least 6 months and marked distress or impairment; 'in remission' and 'in a controlled environment' may be added. Unspecified is **F65.9** (p. 801)."
  },
  {
    id: "m19-08", short: "Transvestic: Fabric Falls, Woman Wins", name: "Fabric Falls, Woman Wins", original: true, dx: "transvestic-disorder", sec: "s19-fetish-transvestic-gd",
    "for": "Transvestic disorder specifiers and the likelihood of gender dysphoria",
    letters: [
      ["F", "With fetishism", "Arousal from fabrics, materials or garments: gender dysphoria less likely"],
      ["W", "With autogynephilia", "Arousal from thoughts or images of oneself as a woman: gender dysphoria more likely"],
      ["GD", "Gender dysphoria check", "Incongruence, a wish to be another gender and a childhood cross-gender history point to gender dysphoria; both can be diagnosed"]
    ],
    caveat: "DSM check: some cases progress to gender dysphoria, usually with less arousal from cross-dressing; middle-aged and older men with transvestism more often present with gender dysphoria. 'Purging and acquisition' signals distress (pp. 798–800; see [[ch:ch14|Chapter 14]], pp. 519–520)."
  }
]);
