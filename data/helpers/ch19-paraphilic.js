/*
 * Diagnostic helper for Chapter 19 (Paraphilic Disorders), DSM-5-TR pp. 779–801.
 * "paraphilic": from an unusual, intense sexual interest or a sexual offense referral to the paraphilia-versus-disorder
 * decision, the disinhibition and antisocial look-alikes, the right disorder by activity or target, its Criterion B and
 * age rules, and the specifiers and code.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "paraphilic",
    chapter: "ch19",
    title: "Paraphilic disorders: interest, disorder, or something else?",
    summary: "Start from the sexual interest or the behavior that led to referral, confirm 6 months and rule out disinhibition and antisocial look-alikes, identify the paraphilia by activity or target, then apply its own Criterion B and age rules before adding specifiers and the code.",
    caution: "A teaching aid built from DSM-5-TR pp. 779–801. A paraphilia is necessary but not sufficient for a paraphilic disorder: the diagnosis needs distress or impairment, or harm or risk of harm to others (p. 780). Forensic conclusions, risk ratings and treatment are outside the DSM. Codes F65.0–F65.9 are unchanged through October 2026; use the code set in force on the date of service.",
    start: "interest",
    nodes: {
      interest: {
        q: "Is there a recurrent, intense sexual interest (fantasies, urges or behaviors) in something other than ordinary sexual activity with a physically mature, consenting partner, and has it been present for at least 6 months?",
        help: "All eight listed disorders require 6 months of recurrent, intense arousal shown by fantasies, urges or behaviors (pp. 780–798). In a person who denies any such interest, repeated behavior with multiple victims on separate occasions counts as evidence of the interest (pp. 781, 784, 786, 791, 793).",
        options: [
          { label: "Yes, for at least 6 months (admitted, or shown by repeated behavior)", to: "disinhibit", note: "A paraphilia may be present." },
          { label: "Yes, but for less than 6 months, or a single episode", to: "r:subthreshold", note: "Duration not met." },
          { label: "No: ordinary sexual interests; the problem is desire, arousal, orgasm or pain", to: "r:not-paraphilic", note: "Consider Chapter 13." },
          { label: "No: intrusive, unwanted thoughts about a sexual theme that the person finds abhorrent", to: "r:ocd", note: "Consider OCD." }
        ]
      },
      disinhibit: {
        q: "Does the sexual behavior occur only during a manic episode, substance intoxication, a psychotic illness, a major neurocognitive disorder, intellectual developmental disorder or a personality change due to another medical condition?",
        help: "These states loosen judgment and impulse control and can produce peeping, exposing, touching or approaching a child. The paraphilic disorder is diagnosed only if the behavior also occurs outside them (pp. 782, 785, 787, 796).",
        options: [
          { label: "No: the pattern exists outside any such state", to: "antisocial", note: "Proceed." },
          { label: "Yes: only in the context of one of these conditions", to: "r:disinhibition", note: "No paraphilic disorder." }
        ]
      },
      antisocial: {
        q: "Is the sexual behavior one part of a broad antisocial pattern (conduct disorder or antisocial personality disorder) with no specific erotic interest in the act itself?",
        help: "Conduct disorder and antisocial personality disorder bring wider norm-breaking; the specific sexual interest in watching, exposing or touching is usually lacking (pp. 782, 785, 787). Cruelty or coercion without arousal from suffering is not sadism (p. 792); a child approached because of access, by a person attracted to adults, is not pedophilic disorder (p. 795). Both diagnoses may be given when both sets of criteria are met.",
        options: [
          { label: "No: there is a specific, persistent erotic interest in the act or target", to: "type", note: "Proceed to the paraphilia." },
          { label: "Yes: antisocial pattern, no specific erotic interest", to: "r:antisocial", note: "Conduct disorder or antisocial PD." },
          { label: "Both: a broad antisocial pattern and a specific erotic interest", to: "type", note: "Both may be diagnosed." }
        ]
      },
      type: {
        q: "What is the paraphilic focus?",
        help: "Courtship disorders: looking, showing, touching. Algolagnic disorders: receiving or inflicting suffering. Target disorders: prepubescent children, objects or body parts, cross-dressing. Anything else goes to the other specified category (pp. 779, 801).",
        options: [
          { label: "Watching an unsuspecting person who is naked, undressing or having sex", to: "voy-age", note: "Voyeuristic." },
          { label: "Exposing the genitals to an unsuspecting person", to: "b-victim", note: "Exhibitionistic." },
          { label: "Touching or rubbing against a nonconsenting person", to: "b-victim", note: "Frotteuristic." },
          { label: "Being humiliated, beaten, bound or made to suffer", to: "b-distress", note: "Sexual masochism." },
          { label: "Another person’s physical or psychological suffering", to: "sad-consent", note: "Sexual sadism." },
          { label: "Sexual activity with a prepubescent child (generally 13 or younger)", to: "ped-age", note: "Pedophilic." },
          { label: "A nonliving object or a nongenital body part", to: "fet-c", note: "Fetishistic." },
          { label: "Wearing clothing of the other sex", to: "tv-gd", note: "Transvestic." },
          { label: "Something else (obscene calls, corpses, animals, feces, enemas, urine, other)", to: "b-distress-other", note: "Other specified." }
        ]
      },
      "voy-age": {
        q: "Is the person at least 18 years old?",
        help: "Voyeuristic disorder is the only courtship disorder with a minimum age; it protects normal adolescent curiosity from being pathologized (p. 781).",
        options: [
          { label: "Yes", to: "b-victim", note: "Criterion C met." },
          { label: "No: under 18", to: "r:voy-under18", note: "Criterion C not met." }
        ]
      },
      "b-victim": {
        q: "Has the person acted on the urges with an unsuspecting or nonconsenting person, OR do the urges or fantasies cause clinically significant distress or impairment?",
        help: "Either arm satisfies Criterion B for voyeuristic, exhibitionistic and frotteuristic disorder (pp. 780, 783, 785). Acting on the urges makes self-reported distress unnecessary. A person who admits the interest, is not distressed or impaired and has never acted on it has the paraphilia, not the disorder.",
        options: [
          { label: "Yes: has acted with a nonconsenting person", to: "spec-shared", note: "Criterion B met by behavior." },
          { label: "Yes: distress or impairment, without acting", to: "spec-shared", note: "Criterion B met by distress." },
          { label: "No: neither acted on nor distressed or impaired", to: "r:paraphilia-only", note: "Paraphilia without the disorder." }
        ]
      },
      "b-distress": {
        q: "Do the fantasies, urges or behaviors cause clinically significant distress or impairment?",
        help: "For sexual masochism, fetishistic and transvestic disorder, Criterion B is distress or impairment only; there is no nonconsenting-person arm (pp. 788, 796, 798). Consensual practice without distress is a sexual interest, not a disorder.",
        options: [
          { label: "Yes", to: "spec-shared", note: "Criterion B met." },
          { label: "No", to: "r:paraphilia-only", note: "Paraphilia without the disorder." }
        ]
      },
      "b-distress-other": {
        q: "Do the fantasies, urges or behaviors cause marked distress or impairment, or has the person acted on them in a way that harms or risks harming others?",
        help: "The other specified category needs the symptoms of a paraphilic disorder with clinically significant distress or impairment (p. 801); the general definition also counts harm or risk of harm to others (p. 780).",
        options: [
          { label: "Yes", to: "r:other-specified", note: "Other specified paraphilic disorder." },
          { label: "No", to: "r:paraphilia-only", note: "Paraphilia without the disorder." },
          { label: "Not enough information to say which paraphilia or why criteria are not met", to: "r:unspecified", note: "Unspecified." }
        ]
      },
      "sad-consent": {
        q: "Has the person acted on sadistic urges with a nonconsenting person, OR do the urges or fantasies cause distress or impairment?",
        help: "Pain inflicted instrumentally during a sexual assault is not sadism unless there is evidence that the suffering itself arouses: an admission, a preference for sadistic pornography, or violence beyond what the assault required (p. 792). Most people in community BDSM networks are not distressed and do not meet criteria.",
        options: [
          { label: "Yes: acted on with a nonconsenting person, with evidence that the suffering itself is arousing", to: "spec-shared", note: "Criterion B met by behavior." },
          { label: "Yes: distress or impairment, consensual activity only", to: "spec-shared", note: "Criterion B met by distress." },
          { label: "No: consensual, not distressed, not impaired", to: "r:paraphilia-only", note: "Sadistic interest without the disorder." },
          { label: "Pain during an assault with no evidence that suffering itself arouses", to: "r:instrumental", note: "Not sexual sadism disorder." }
        ]
      },
      "ped-age": {
        q: "Is the person at least 16 years old and at least 5 years older than the child or children, and NOT a late adolescent in a continuing relationship with a 12- or 13-year-old?",
        help: "Criterion C and its note (p. 793). The age guide of 13 or younger is approximate; pubertal status is what counts.",
        options: [
          { label: "Yes", to: "ped-b", note: "Criterion C met." },
          { label: "No: under 16, less than 5 years older, or covered by the late-adolescent note", to: "r:ped-c", note: "Criterion C not met." }
        ]
      },
      "ped-b": {
        q: "Has the person acted on the urges (sexual interaction with a child, with or without physical contact), OR do the urges or fantasies cause marked distress or interpersonal difficulty?",
        help: "Use of sexual images of children supports Criterion A but, on its own, does not satisfy Criterion B (p. 793). Exposing oneself to children counts as acting on the urges.",
        options: [
          { label: "Yes: has acted on the urges", to: "ped-spec", note: "Criterion B met by behavior." },
          { label: "Yes: marked distress or interpersonal difficulty, no acting", to: "ped-spec", note: "Criterion B met by distress." },
          { label: "No: neither; child sexual images at most", to: "r:paraphilia-only", note: "Pedophilia without the disorder." }
        ]
      },
      "ped-spec": {
        q: "Which specifiers apply?",
        help: "Exclusive type (attracted only to children) or nonexclusive; sexually attracted to males, females or both; limited to incest when it applies (p. 793). Pedophilic disorder has no remission or controlled-environment specifier.",
        options: [
          { label: "Exclusive type", to: "r:pedophilic", note: "Record sex attracted to, and incest if it applies." },
          { label: "Nonexclusive type", to: "r:pedophilic", note: "Record sex attracted to, and incest if it applies." }
        ]
      },
      "fet-c": {
        q: "Are the objects limited to clothing used in cross-dressing, or to devices designed for genital stimulation (for example a vibrator)?",
        help: "Criterion C excludes both (p. 796). Cross-dressing clothing belongs to transvestic disorder; a device that stimulates the genitals by design is not a fetish object.",
        options: [
          { label: "No: other objects (undergarments not worn, footwear, rubber, leather) or a body part such as feet or hair", to: "fet-forced", note: "Criterion C met." },
          { label: "Yes: only clothing that is worn while cross-dressing", to: "tv-gd", note: "Consider transvestic disorder." },
          { label: "Yes: only a device designed for genital stimulation", to: "r:not-fetish", note: "Criterion C not met." }
        ]
      },
      "fet-forced": {
        q: "Does the arousal come mainly from being dominated or humiliated (for example “forced cross-dressing”), rather than from the object itself?",
        help: "When domination or humiliation is the source of arousal, with distress or impairment, the diagnosis is sexual masochism disorder (p. 798).",
        options: [
          { label: "No: the object or body part itself is the focus", to: "b-distress", note: "Fetishistic disorder if Criterion B is met." },
          { label: "Yes: domination or humiliation is the point", to: "b-distress", note: "Sexual masochism disorder if Criterion B is met; record masochism." }
        ]
      },
      "tv-gd": {
        q: "Is the cross-dressing sexually arousing (always or often), or is the person reporting an incongruence between experienced and assigned gender and a wish to be the other gender?",
        help: "Transvestic disorder needs sexual arousal from cross-dressing (p. 799). Gender dysphoria is about incongruence, usually with a childhood history of cross-gender behavior and no arousal requirement; both can be diagnosed when both sets of criteria are met (p. 800). Some men with transvestic disorder later develop gender dysphoria as the arousal fades.",
        options: [
          { label: "Arousing cross-dressing; no incongruence or wish to be the other gender", to: "tv-spec", note: "Transvestic disorder if Criterion B is met." },
          { label: "Incongruence and a wish to live as the other gender, without arousal", to: "r:gender", note: "Consider gender dysphoria (Chapter 14)." },
          { label: "Both: arousing cross-dressing and incongruence with distress", to: "tv-spec", note: "Both diagnoses may apply." }
        ]
      },
      "tv-spec": {
        q: "What is the person aroused by?",
        help: "With fetishism: fabrics, materials or garments (lowers the likelihood of gender dysphoria). With autogynephilia: thoughts or images of himself as a woman (raises it) (p. 799). Both can be recorded.",
        options: [
          { label: "Fabrics, materials or garments", to: "b-distress", note: "With fetishism." },
          { label: "Thoughts or images of himself as a woman", to: "b-distress", note: "With autogynephilia." },
          { label: "Both, or neither clearly", to: "b-distress", note: "Record what applies." }
        ]
      },
      "spec-shared": {
        q: "Which shared specifier applies?",
        help: "In a controlled environment: living in an institution or other setting where the opportunity is restricted. In full remission: at least 5 years in an uncontrolled environment with no acting on urges with a nonconsenting person and no distress or impairment; the paraphilia itself may persist (pp. 780–781, 783, 786, 788, 790, 796, 798). Pedophilic disorder has neither.",
        options: [
          { label: "Neither: currently meets criteria in the community", to: "r:disorder", note: "No shared specifier." },
          { label: "In a controlled environment", to: "r:disorder", note: "Add the specifier." },
          { label: "In full remission (5 years, uncontrolled environment)", to: "r:disorder", note: "Add the specifier." }
        ]
      }
    },
    results: {
      "subthreshold": { label: "Not yet a listed disorder", dx: "Under 6 months, or a single episode", line: "Every listed paraphilic disorder requires at least 6 months of recurrent, intense arousal (pp. 780–798). A shorter pattern with distress or impairment can be recorded as other specified paraphilic disorder with the reason, or as unspecified when information is lacking (p. 801).", points: ["Reassess over time: persistence over months is what turns an episode into a paraphilia.", "A single act during intoxication or mania points to the disinhibition rule-out instead."], link: { ch: "ch19", sec: "s19-shared-rules", label: "Rules shared across the eight disorders" }, dxId: "other-specified-paraphilic" },
      "not-paraphilic": { label: "Not this chapter", dx: "Not a paraphilia", line: "Problems of sexual desire, arousal, orgasm or pain with ordinary sexual interests belong to the sexual dysfunctions (Chapter 13).", points: ["A paraphilia is an intense, persistent interest in something other than ordinary sexual activity with a mature, consenting partner (p. 779).", "Fetishistic disorder can present as sexual dysfunction in a relationship when the object is unavailable (p. 798): ask about the content of arousal, not only its failure."], link: { ch: "ch19", sec: "s19-paraphilia-vs-disorder", label: "Paraphilia versus paraphilic disorder" } },
      "ocd": { label: "Not a paraphilic disorder", dx: "Consider obsessive-compulsive disorder", line: "Ego-dystonic worries about a possible attraction, with no positive feelings about the thoughts, no connection to sexual behavior and often other intrusive sexual ideas, are obsessions, not a paraphilia (p. 796).", points: ["Ask whether the person has ever been aroused by the thoughts or acted on them.", "Look for other obsessions and compulsions; treat the OCD."], link: { ch: "ch19", sec: "s19-pedophilic-differential", label: "Pedophilic disorder: differential diagnosis" }, dxId: "ocd" },
      "disinhibition": { label: "No paraphilic disorder", dx: "Sexual disinhibition in another disorder", line: "Peeping, exposing, touching or approaching a child that occurs only in the context of a manic episode, substance intoxication, schizophrenia, major neurocognitive disorder, intellectual developmental disorder or a personality change due to another medical condition is explained by that condition (pp. 782, 785, 787, 796).", points: ["Diagnose and treat the underlying condition.", "Reassess once it is controlled: a pattern that persists outside these states may still be a paraphilic disorder."], link: { ch: "ch19", sec: "s19-courtship-compare", label: "The shared differential" } },
      "antisocial": { label: "No paraphilic disorder", dx: "Conduct disorder or antisocial personality disorder", line: "A broad pattern of norm-breaking in which the sexual act is one antisocial behavior among many, without a specific erotic interest in the act or target (pp. 782, 785, 787, 792, 795).", points: ["Code conduct disorder (Chapter 15) or antisocial personality disorder (Chapter 18).", "Add a paraphilic disorder only if its own Criterion A is met for 6 months; both can then be diagnosed."], link: { ch: "ch19", sec: "s19-courtship-compare", label: "The shared differential" }, dxId: "antisocial-pd" },
      "paraphilia-only": { label: "No diagnosis", dx: "Paraphilia without a paraphilic disorder", line: "Criterion A without Criterion B: the person has the sexual interest but it causes no distress or impairment and has not been acted on with a nonconsenting person (or, for pedophilia, has not been acted on and causes no marked distress or interpersonal difficulty) (p. 780).", points: ["Describe the interest in the history; do not diagnose a disorder.", "The manual says a paraphilia by itself does not require intervention; offer help if the person wants it.", "For pedophilic interest without the disorder, clinical management and risk questions are outside the DSM; follow local policy."], link: { ch: "ch19", sec: "s19-paraphilia-vs-disorder", label: "Paraphilia versus paraphilic disorder" } },
      "voy-under18": { label: "Criterion C not met", dx: "Voyeuristic behavior under age 18", line: "Voyeuristic disorder cannot be diagnosed before 18 because of the difficulty separating it from puberty-related sexual curiosity (p. 781).", points: ["Consider conduct disorder if the behavior is part of a wider pattern.", "Reassess after 18 if the interest persists and Criterion B is met."], link: { ch: "ch19", sec: "s19-voyeuristic", label: "Voyeuristic disorder" } },
      "instrumental": { label: "Not sexual sadism disorder", dx: "Instrumental pain during a sexual assault", line: "Pain inflicted while committing, subduing or restraining during a sexual assault does not indicate sexual sadism disorder unless there is evidence that the suffering itself is arousing (p. 792).", points: ["Look for an admission of arousal by pain, a preference for sadistic pornography, or violence beyond what the assault required.", "Consider conduct disorder or antisocial personality disorder; forensic risk assessment is outside the DSM."], link: { ch: "ch19", sec: "s19-sadism", label: "Sexual sadism disorder" } },
      "ped-c": { label: "Criterion C not met", dx: "Age criterion not met for pedophilic disorder", line: "The person must be at least 16 and at least 5 years older than the child; a late adolescent in a continuing relationship with a 12- or 13-year-old is excluded (p. 793).", points: ["Adolescent sexual interest in peers or slightly younger children is hard to separate from the paraphilia (p. 794).", "Whether an offense was committed is a legal question (outside the DSM: RA 11648 sets the Philippine age of consent at 16)."], link: { ch: "ch19", sec: "s19-pedophilic-criteria", label: "Pedophilic disorder: criteria and specifiers" } },
      "not-fetish": { label: "Criterion C not met", dx: "Device designed for genital stimulation", line: "An object that stimulates the genitals because it was designed to do so is excluded from fetishistic disorder by Criterion C (p. 796).", points: ["Ask about other objects or body parts that may be the real focus.", "If arousal depends on domination or humiliation, consider sexual masochism disorder."], link: { ch: "ch19", sec: "s19-fetishistic", label: "Fetishistic disorder" } },
      "gender": { label: "Not transvestic disorder", dx: "Consider gender dysphoria (Chapter 14)", line: "Incongruence between experienced and assigned gender with a wish to be the other gender, without sexual arousal from cross-dressing, points to gender dysphoria (p. 800).", points: ["Both diagnoses are given when both sets of criteria are met.", "Some men with transvestic disorder progress to gender dysphoria as arousal from cross-dressing fades (p. 800)."], link: { ch: "ch19", sec: "s19-fetish-transvestic-gd", label: "Fetishistic, transvestic and gender dysphoria compared" }, dxId: "gender-dysphoria-adults" },
      "pedophilic": { dx: "Pedophilic disorder", line: "At least 6 months of fantasies, urges or behaviors about sexual activity with a prepubescent child, acted on or causing marked distress or interpersonal difficulty, in a person at least 16 and 5 years older than the child (pp. 792–793).", points: ["Code: F65.4. Record exclusive or nonexclusive type, sexually attracted to males, females or both, and limited to incest when it applies.", "No remission or controlled-environment specifier exists for this disorder.", "Outside the DSM: clarify confidentiality and reporting duties (RA 7610) and arrange risk assessment and treatment under the WFSBP framework."], link: { ch: "ch19", sec: "s19-pedophilic-criteria", label: "Pedophilic disorder: criteria and specifiers" }, dxId: "pedophilic-disorder" },
      "other-specified": { dx: "Other specified paraphilic disorder", line: "Symptoms characteristic of a paraphilic disorder with clinically significant distress or impairment that do not meet full criteria for any listed disorder; record the reason, for example zoophilia (p. 801).", points: ["Code: F65.89.", "The manual’s examples: telephone scatologia, necrophilia, zoophilia, coprophilia, klismaphilia, urophilia.", "In remission and in a controlled environment can be added."], link: { ch: "ch19", sec: "s19-residual", label: "Other specified and unspecified paraphilic disorder" }, dxId: "other-specified-paraphilic" },
      "unspecified": { dx: "Unspecified paraphilic disorder", line: "Symptoms of a paraphilic disorder with distress or impairment when the clinician chooses not to state the reason criteria are not met, or there is not enough information (p. 801).", points: ["Code: F65.9.", "Revise once the history and collateral are available."], link: { ch: "ch19", sec: "s19-residual", label: "Other specified and unspecified paraphilic disorder" }, dxId: "unspecified-paraphilic" },
      "disorder": { dx: "The paraphilic disorder you identified, with its specifiers", line: "Criterion A (6 months) and this disorder’s own Criterion B are met, any age rule is satisfied, and the shared specifier, if any, has been chosen (pp. 780–801).", points: ["Codes: voyeuristic F65.3, exhibitionistic F65.2 (record the target-age subtype), frotteuristic F65.81, sexual masochism F65.51 (add with asphyxiophilia if it applies), sexual sadism F65.52, fetishistic F65.0 (record body part, object or other), transvestic F65.1 (record with fetishism or with autogynephilia).", "Specifiers do not change the code; write them after the name.", "Code each paraphilic disorder separately when more than one paraphilia causes suffering or harm (p. 780).", "Outside the DSM: screen for comorbidity and suicidal ideation, ask about asphyxiophilia, and plan treatment by risk (WFSBP)."], link: { ch: "ch19", sec: "s19-coding", label: "Coding and recording" } }
    }
  }
]);
