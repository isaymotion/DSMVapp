/* Disorder library: Chapter 19, Paraphilic Disorders (DSM-5-TR pp. 779–801).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): every F65 code the
   DSM uses is unchanged (secondary code references agree; confirm against the official tabular list). No APA DSM-5-TR
   update touches this chapter (checked October 27, 2026). A paraphilia alone is not a diagnosis: Criterion B (distress,
   impairment, or harm or risk of harm to others) makes the disorder (p. 780). Treatment lives in the clinical file. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables (secondary references agreeing; official tabular list to confirm); APA DSM-5-TR updates, September 2022–2025; checked October 27, 2026";
  var NC = "Unchanged through October 2026";
  function upd(code) {
    return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC,
      text: "**" + code + "** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates, and **no APA DSM-5-TR update** touches the paraphilic disorders chapter (checked October 27, 2026). Confirm against the official tabular list in force on the date of service." }];
  }
  var CE = "In a controlled environment: mainly for people living in an institution or similar setting where the chance to act is restricted (words only; code unchanged)";
  var FR_ACT = "In full remission: for at least 5 years in an uncontrolled environment, no acting on the urges with a nonconsenting person and no clinically significant distress or impairment (words only)";
  var FR_DIS = "In full remission: for at least 5 years in an uncontrolled environment, no clinically significant distress or impairment (words only)";
  var NOFX = { name: "Sexual disinhibition in another condition", how: "Peeping, exposing or touching that happens only during mania, major neurocognitive disorder, intellectual developmental disorder, a medical personality change, intoxication or schizophrenia is not a paraphilic disorder unless it also occurs outside those states." };

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "voyeuristic-disorder", ch: "ch19", sec: "s19-voyeuristic", pages: "780–783", critPages: "780",
      name: "Voyeuristic disorder", code: "F65.3",
      codes: [["F65.3", "Voyeurism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["voyeurism", "peeping", "voyeuristic paraphilia", "covert filming (behavioral description)"],
      essence: "For **at least 6 months**, recurrent intense arousal from **secretly watching an unsuspecting person** who is naked, undressing or having sex, **acted on with a nonconsenting person** or causing **distress or impairment**, in someone **18 or older**: the only courtship disorder with an age floor (pp. 780–781).",
      duration: "At least 6 months",
      functioning: "Criterion B is met either by acting on the urges with a nonconsenting person or by clinically significant distress or impairment; legal consequences are common (p. 780)",
      mood: "Depressive, bipolar and anxiety disorders are listed comorbidities, mostly from men suspected or convicted of voyeuristic acts (pp. 782–783)",
      criteria: [
        ["A", "Over a span of at least 6 months, the person has had recurrent, intense sexual arousal from observing someone who does not know they are being watched while naked, undressing or in sexual activity; the arousal shows as fantasies, urges or behaviors."],
        ["B", "The person has acted on these urges with someone who did not consent, or the urges or fantasies produce clinically significant distress or impairment in social, work or other key areas."],
        ["C", "The person who has the arousal or acts on it is 18 years old or older."]
      ],
      specifiers: [CE, FR_ACT],
      epi: [["Prevalence of the disorder", "Unknown (p. 781)"], ["Voyeuristic acts", "The most common potentially law-breaking sexual behavior (p. 781)"], ["Quebec survey, lifetime voyeuristic behavior", "34.5% (men 50.3%, women 21.2%); intense desire 9.6%, persistent behavior 2.1% (p. 781)"], ["Male : female (acts)", "About 2:1 (Quebec) to 3:1 (Sweden) (p. 781)"], ["Incarcerated sex offenders, Austria (n = 1,346)", "3.7% (p. 782)"], ["Women in clinical settings", "Very uncommon (p. 782)"]],
      risk: ["Childhood sexual abuse, substance misuse and sexual preoccupation/hypersexuality are suggested risk factors; causality and specificity are uncertain (p. 782).", "Anything that raises the chance of voyeurism raises the chance of the disorder.", "Awareness of the interest usually begins in adolescence; the age-18 rule avoids labeling ordinary pubertal curiosity (p. 781)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Voyeuristic interest that has never been acted on with an unsuspecting person and causes no distress or impairment: describe it, do not diagnose (p. 782)." },
        { id: "bipolar-i", how: "Peeping only during a manic episode reflects disinhibition; no voyeuristic disorder unless it also happens outside mania (p. 782)." },
        { id: "major-ncd", how: "New voyeuristic acts confined to cognitive decline are disinhibition, not a paraphilic disorder (p. 782)." },
        { id: "idd", how: "Poor judgment and limited social understanding can produce watching others; diagnose the paraphilic disorder only if the behavior occurs outside that context (p. 782)." },
        { id: "personality-change-amc", how: "Disinhibited sexual behavior after a brain injury or other medical condition is coded there (p. 782)." },
        { id: "alcohol-intox", how: "Acts occurring only while intoxicated do not by themselves establish the paraphilia (p. 782)." },
        { id: "schizophrenia", how: "Impaired judgment in psychosis can produce the behavior; look for the pattern outside psychotic episodes (p. 782)." },
        { id: "conduct-disorder", how: "Broad rule-breaking in which the specific sexual interest in secretly watching is usually missing (p. 782)." },
        { id: "antisocial-pd", how: "A general pattern of violating others, again without a specific voyeuristic interest; a listed comorbidity when both are present (pp. 782–783)." },
        { id: "exhibitionistic-disorder", how: "The most often co-occurring paraphilic disorder; diagnose both when each causes harm or distress (pp. 780, 782–783)." }
      ],
      pearls: ["Age floor of 18: unique among the courtship disorders.", "“Unsuspecting” is the key word: a partner who agrees to be watched is not a victim.", "A man who denies any urge but has secretly watched several people on separate occasions can still be diagnosed (p. 781).", "Remission describes behavior and distress, not whether the interest has gone (p. 781).", "Ask about phone and camera recording: modern voyeuristic acts often leave digital evidence (app guidance)."],
      cmp: { symptoms: "≥6 months of arousal from secretly watching an unsuspecting person; acted on with a nonconsenting person, or distress/impairment; age ≥18", exclusions: "Interest without B; behavior confined to mania, NCD, IDD, intoxication or psychosis; age under 18", prevalence: "Disorder unknown; lifetime behavior 34.5% in a Quebec survey", course: "Awareness in adolescence; preference and behavior decline with age" },
      clues: [["Core picture", "A 29-year-old man caught three times in a year filming two different neighbors’ bathrooms, denying any sexual interest"], ["Age rule", "18 or older"], ["Code", "F65.3"]],
      updates: upd("F65.3")
    },
    {
      id: "exhibitionistic-disorder", ch: "ch19", sec: "s19-exhibitionistic", pages: "783–785", critPages: "783",
      name: "Exhibitionistic disorder", code: "F65.2",
      codes: [["F65.2", "Exhibitionism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["exhibitionism", "indecent exposure (legal term)", "flashing"],
      essence: "For **at least 6 months**, recurrent intense arousal from **exposing the genitals to an unsuspecting person**, **acted on with a nonconsenting person** or causing **distress or impairment**. It is subtyped by the **age of the people targeted** so that a co-occurring **pedophilic disorder is not missed**, and it has **no minimum age** (pp. 783–784).",
      duration: "At least 6 months",
      functioning: "Criterion B by acting on the urges with a nonconsenting person, or by distress or impairment; a person can meet B through distress alone without ever exposing (p. 783)",
      mood: "Depressive, bipolar and anxiety disorders appear among the comorbidities, chiefly in convicted men (p. 785)",
      criteria: [
        ["A", "Across at least 6 months, recurrent, intense sexual arousal from showing one’s genitals to a person who is not expecting it, expressed through fantasies, urges or behaviors."],
        ["B", "The urges have been acted on with someone who did not consent, or the urges or fantasies cause clinically significant distress or impairment in social, work or other key areas."]
      ],
      specifiers: ["Specify whether (target): sexually aroused by exposing genitals to prepubertal children / to physically mature individuals / to prepubertal children and to physically mature individuals", CE, FR_ACT],
      epi: [["Prevalence of the disorder", "Unknown; highly unusual in women (p. 784)"], ["Single arousing exhibitionistic acts in women", "Up to half as often as in men (p. 784)"], ["Quebec survey, lifetime exhibitionistic behavior", "30.9% (men 32.6%, women 29.4%); intense desire 4.8%, persistent behavior 0.8% (p. 784)"], ["Sweden, lifetime disorder estimate", "4.1% of men, 2.1% of women (p. 784)"]],
      risk: ["In men with the preference, antisocial history or antisocial personality disorder, alcohol misuse and a pedophilic sexual preference raise the risk of sexual recidivism and so of the disorder (p. 784).", "Childhood sexual and emotional abuse and sexual preoccupation/hypersexuality are suggested environmental factors, with causality unclear (p. 784).", "Awareness often begins in adolescence, somewhat later than typical sexual interest (p. 784)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Exhibitionistic interest that is admitted, never acted on with an unsuspecting person and not distressing: exhibitionistic sexual interest, no diagnosis (p. 784)." },
        { id: "pedophilic-disorder", how: "Exposing only to prepubescent children may mean both disorders; exposing to anyone regardless of age usually means exhibitionistic disorder alone (p. 795)." },
        { id: "ncd-frontotemporal", how: "New exposure in a person with frontotemporal decline and no earlier history is disinhibition, an application of the major NCD rule: no exhibitionistic disorder (p. 785)." },
        { id: "bipolar-i", how: "Exposure confined to a manic episode does not count (p. 785)." },
        { id: "idd", how: "Exposure stemming from limited judgment or social understanding is not diagnosed unless it occurs apart from that (p. 785)." },
        { id: "alcohol-intox", how: "Exposure only while intoxicated is not sufficient; alcohol misuse is, however, a recidivism risk factor (pp. 784–785)." },
        { id: "conduct-disorder", how: "In adolescents, exposure as one of many rule-breaking acts without a specific sexual interest; no minimum age makes this distinction important (pp. 784–785)." },
        { id: "antisocial-pd", how: "Broad norm-breaking without the specific interest in exposing; as a comorbidity it predicts reoffending (pp. 784–785)." }
      ],
      pearls: ["No minimum age, unlike voyeuristic disorder, but adolescent curiosity is hard to separate from the disorder (p. 784).", "The target-age subtype is a safety prompt: exposing to children does not rule out pedophilic disorder (p. 783).", "Repeated “accidental” exposure to multiple strangers on separate occasions supports the diagnosis despite denial (p. 784).", "A self-referred man with distressing urges who has never exposed can still meet B."],
      cmp: { symptoms: "≥6 months of arousal from exposing genitals to an unsuspecting person; acted on with a nonconsenting person, or distress/impairment", exclusions: "Interest without B; exposure confined to disinhibiting states; nonspecific conduct problems", prevalence: "Disorder unknown; 4.1% of men and 2.1% of women (Swedish lifetime estimate)", course: "Awareness in adolescence; persistence little known; declines with age" },
      clues: [["Core picture", "A 34-year-old man with a year of daily, shameful urges to expose himself to women at a bus terminal, who now avoids it and arrives late for work"], ["Subtype", "Target age: children, mature individuals, or both"], ["Code", "F65.2"]],
      updates: upd("F65.2")
    },
    {
      id: "frotteuristic-disorder", ch: "ch19", sec: "s19-frotteuristic", pages: "785–788", critPages: "785–786",
      name: "Frotteuristic disorder", code: "F65.81",
      codes: [["F65.81", "Frotteurism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["frotteurism", "frottage", "toucherism", "groping on public transport (behavioral description)"],
      essence: "For **at least 6 months**, recurrent intense arousal from **touching or rubbing against a nonconsenting person**, **acted on** with such a person or causing **distress or impairment**. The word is **nonconsenting**, not unsuspecting, and there is **no minimum age** (pp. 785–787).",
      duration: "At least 6 months",
      functioning: "Criterion B by acting on the urges with a nonconsenting person, or by distress or impairment (p. 786)",
      mood: "Depressive, bipolar and anxiety disorders are listed comorbidities (pp. 787–788)",
      criteria: [
        ["A", "During at least 6 months, recurrent, intense sexual arousal from touching or rubbing up against a person who has not consented, shown in fantasies, urges or behaviors."],
        ["B", "The person has acted on the urges with someone who did not consent, or the urges or fantasies lead to clinically significant distress or impairment in social, work or other key areas."]
      ],
      specifiers: [CE, FR_ACT + "; the descriptive text calls it the “in remission” specifier (p. 786)"],
      epi: [["Prevalence of the disorder", "Unknown (p. 786)"], ["Frotteuristic acts, adult men (US and Canada)", "Up to 30%; intense desire 3.8%, persistent behavior 0.7% (p. 786)"], ["Outpatient men with paraphilic disorders and hypersexuality", "About 10%–14% meet criteria (p. 787)"], ["Women", "Likely lower (p. 787)"]],
      risk: ["Nonsexual antisocial behavior and sexual preoccupation/hypersexuality are nonspecific risk factors, with causality uncertain (p. 787).", "Awareness often begins in late adolescence or emerging adulthood (p. 787)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Admitted frotteuristic interest, never acted on with a nonconsenting person and not distressing: sexual interest only (p. 786)." },
        { id: "conduct-disorder", how: "At younger ages, touching unwilling others can be conduct-disordered behavior without a sexual motive; the specific sexual interest is usually missing (p. 787)." },
        { id: "antisocial-pd", how: "Broad violation of others’ rights without a specific interest in touching; diagnose both when both are met (p. 787)." },
        { id: "bipolar-i", how: "Touching confined to manic disinhibition does not count (p. 787)." },
        { id: "major-ncd", how: "Behavior arising only with cognitive decline is disinhibition (p. 787)." },
        { id: "stimulant-intox", how: "Disinhibited touching only during intoxication is not frotteuristic disorder (p. 787)." },
        { id: "exhibitionistic-disorder", how: "Exhibitionistic and voyeuristic disorders are the most linked paraphilic comorbidities (pp. 787–788)." },
        { id: "voyeuristic-disorder", how: "Often co-occurs; give separate diagnoses when each causes harm or distress (pp. 780, 787–788)." },
        { name: "Hypersexuality", how: "Not a DSM diagnosis; a frequent comorbidity term, and 10%–14% of outpatient men with paraphilic disorders and hypersexuality meet frotteuristic criteria (p. 787)." }
      ],
      pearls: ["“Nonconsenting,” not “unsuspecting”: the person touched may notice, typically in a crowd (p. 787).", "No age criterion, but in young people it overlaps with conduct problems (p. 787).", "Lack of distress is irrelevant once the urges have been acted on with nonconsenting people.", "The text says “in remission”; the criteria box says “in full remission” (p. 786)."],
      cmp: { symptoms: "≥6 months of arousal from touching or rubbing against a nonconsenting person; acted on, or distress/impairment", exclusions: "Interest without B; disinhibiting states; nonsexual conduct problems", prevalence: "Disorder unknown; acts in up to 30% of adult men", course: "Onset late adolescence/emerging adulthood; declines with age" },
      clues: [["Core picture", "A 26-year-old man reported by three women on different days for pressing against them on crowded jeepneys, with 2 years of urges"], ["Key word", "Nonconsenting"], ["Code", "F65.81"]],
      updates: upd("F65.81")
    },
    {
      id: "sexual-masochism-disorder", ch: "ch19", sec: "s19-masochism", pages: "788–790", critPages: "788",
      name: "Sexual masochism disorder", code: "F65.51",
      codes: [["F65.51", "Sexual masochism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["sexual masochism", "masochism", "algolagnia (receptive)", "breath play (asphyxiophilia)"],
      essence: "For **at least 6 months**, recurrent intense arousal from **being humiliated, beaten, bound or otherwise made to suffer**, with **distress or impairment only**: there is no nonconsenting-person arm. Add **with asphyxiophilia** when arousal is sought through **restricted breathing**, the practice tied to **accidental death** (pp. 788–789).",
      duration: "At least 6 months",
      functioning: "Distress or impairment required; asphyxiophilia is linked to more sexual distress and psychological maladjustment (p. 789)",
      mood: "Suicide link unknown; in 321 BDSM adults, stigma-related shame and guilt were associated with suicidal ideation (p. 789)",
      criteria: [
        ["A", "For a period of at least 6 months, recurrent, intense sexual arousal from being humiliated, beaten, tied up or made to suffer in some other way, appearing as fantasies, urges or behaviors."],
        ["B", "These fantasies, urges or behaviors cause clinically significant distress or impairment in social, work or other key areas."]
      ],
      specifiers: ["With asphyxiophilia: the person engages in obtaining sexual arousal through restriction of breathing", CE, FR_DIS],
      epi: [["Prevalence of the disorder", "Unknown (p. 789)"], ["Australia, BDSM in the past 12 months", "2.2% of men, 1.3% of women (p. 789)"], ["Mean onset (community paraphilia sample)", "19.3 years; earlier onsets, even in childhood, reported (p. 789)"]],
      risk: ["The commonly assumed link to childhood sexual abuse lacks sufficient supporting evidence (p. 789).", "Heavy use of pornography with masochistic themes is sometimes associated (p. 788).", "People who practice sadomasochism may have reduced pain sensitivity; whether this applies to the disorder is unknown (p. 788).", "Asphyxiophilia and other autoerotic procedures carry a risk of accidental death (p. 789)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Masochistic interest, including consensual BDSM, without distress or impairment: no diagnosis (p. 789)." },
        { name: "Community BDSM practice", how: "Restraint, spanking, sensory deprivation and dominance–submission role play among consenting adults is a practice, not a diagnosis, unless Criterion B is met (pp. 788, 792)." },
        { name: "Religious self-mortification rituals", how: "Collective hook suspension, self-flagellation and similar rituals must be distinguished from sadomasochism for sexual arousal; whether arousal plays any part is unknown (p. 789)." },
        { id: "sexual-sadism-disorder", how: "The other algolagnic disorder: arousal from another person’s suffering, with a nonconsenting-person arm in B; the two often co-occur (pp. 790, 792)." },
        { id: "fetishistic-disorder", how: "“Forced cross-dressing” in which the arousal comes from domination or humiliation is masochism, not fetishism (p. 798)." },
        { id: "transvestic-disorder", how: "Transvestic fetishism is a listed comorbidity; decide whether arousal comes from the clothing or from being humiliated (pp. 789–790, 800)." },
        { id: "borderline-pd", how: "Some association reported, but only from a small clinical sample of women (pp. 789–790)." }
      ],
      pearls: ["Distress or impairment only: no victim, so no acting-on route to Criterion B.", "Written for people who freely admit the interest; there is no nondisclosing route (p. 788).", "Asphyxiophilia is the only disorder-specific specifier: always ask about breath restriction.", "Remission is 5 years without distress or impairment outside a controlled setting."],
      cmp: { symptoms: "≥6 months of arousal from being humiliated, beaten, bound or made to suffer, with distress/impairment", exclusions: "Consensual masochistic interest without B; religious self-mortification", prevalence: "Disorder unknown; BDSM in past year 2.2% of men, 1.3% of women (Australia)", course: "Mean onset 19.3 years; declines with age" },
      clues: [["Core picture", "A frightened 24-year-old man who has fainted twice while restricting his breathing during masochistic fantasies and has stopped dating"], ["Specifier", "With asphyxiophilia"], ["Code", "F65.51"]],
      updates: upd("F65.51")
    },
    {
      id: "sexual-sadism-disorder", ch: "ch19", sec: "s19-sadism", pages: "790–792", critPages: "790",
      name: "Sexual sadism disorder", code: "F65.52",
      codes: [["F65.52", "Sexual sadism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["sexual sadism", "sadism", "algolagnia (active)", "coercive sexual sadism (ICD-11 term, outside the DSM)"],
      essence: "For **at least 6 months**, recurrent intense arousal from **another person’s physical or psychological suffering**, **acted on with a nonconsenting person** or causing **distress or impairment**. **Consent is the hinge**: most people in community BDSM networks do not meet criteria, and pain used **instrumentally** in an assault is not by itself sadism (pp. 790–792).",
      duration: "At least 6 months",
      functioning: "Criterion B by acting on the urges with a nonconsenting person, or by distress or impairment; legal status varies by country, so distress and impairment vary with it (p. 791)",
      mood: "Suicide link unknown; stigma-related shame and guilt linked to suicidal ideation in a BDSM sample (p. 791)",
      criteria: [
        ["A", "Over at least 6 months, recurrent, intense sexual arousal from the physical or psychological suffering of someone else, shown through fantasies, urges or behaviors."],
        ["B", "The person has acted on these urges with someone who did not consent, or the urges or fantasies produce clinically significant distress or impairment in social, work or other key areas."]
      ],
      specifiers: [CE, FR_ACT],
      epi: [["Prevalence of the disorder", "Unknown; data mostly forensic (p. 791)"], ["Civilly committed sexual offenders, US", "Less than 10% (p. 791)"], ["Sexually motivated homicides", "Sadistic behavior in about one-third (p. 791)"], ["Finland, lifetime sadistic behavior", "2.7% of men, 2.3% of women (p. 791)"], ["Forensic samples", "Almost exclusively men (p. 791)"]],
      risk: ["The sadistic preference is probably lifelong; the disorder fluctuates with distress and with the propensity to harm nonconsenting people (p. 791).", "Many BDSM participants became aware of the interest in their teens (p. 791).", "Advancing age tends to reduce the preference and behavior."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Admitted sadistic interest, never acted on with a nonconsenting person and not distressing: no diagnosis (p. 792)." },
        { name: "Community BDSM practice", how: "Most people active in community BDSM networks are not dissatisfied with their interests and would not meet criteria (p. 792)." },
        { name: "Instrumental pain during a sexual assault", how: "Pain caused while forcing or restraining a victim does not show sadism unless there is evidence the suffering itself arouses: an admission, a preference for sadistic pornography, or violence beyond what the assault required (p. 792)." },
        { id: "conduct-disorder", how: "Cruelty and forced sex can occur without an arousal pattern tied to suffering; when both criteria sets are met, give both (p. 792)." },
        { id: "antisocial-pd", how: "Callous violence without sexual arousal from the suffering; diagnose both when both are met (p. 792)." },
        { id: "sexual-masochism-disorder", how: "The receptive counterpart; masochism co-occurred in 68.8% of Finns with sadistic behavior (p. 792)." },
        { id: "voyeuristic-disorder", how: "Voyeurism co-occurred in 33.3% in the same Finnish data (p. 792)." }
      ],
      pearls: ["Applies to admitting and to denying individuals; recurrent acts against nonconsenting people can establish it despite denial (p. 791).", "“Recurrent” may mean multiple victims on separate occasions, but fewer victims can qualify with corroborating evidence (p. 791).", "Finnish co-occurrence order: masochism 68.8%, voyeurism 33.3%, transvestic fetishism 9.2%, exhibitionism 6.4% (p. 792).", "Outside the DSM: ICD-11 keeps only coercive sexual sadism disorder."],
      cmp: { symptoms: "≥6 months of arousal from another’s physical or psychological suffering; acted on with a nonconsenting person, or distress/impairment", exclusions: "Consensual sadism without B; instrumental pain in an assault without evidence of arousal by suffering", prevalence: "Disorder unknown; <10% of US civilly committed sexual offenders", course: "Preference probably lifelong; disorder fluctuates" },
      clues: [["Core picture", "A man convicted of two assaults with injuries far beyond what was needed and a collection of pornography focused on suffering victims, who denies any such interest"], ["Hinge", "Consent; arousal from the suffering itself"], ["Code", "F65.52"]],
      updates: upd("F65.52")
    },
    {
      id: "pedophilic-disorder", ch: "ch19", sec: "s19-pedophilic-criteria", pages: "792–796", critPages: "792–793",
      name: "Pedophilic disorder", code: "F65.4",
      codes: [["F65.4", "Pedophilia (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["pedophilia", "pedophilic paraphilia", "sexual interest in prepubescent children"],
      essence: "For **at least 6 months**, recurrent intense sexual fantasies, urges or behaviors involving a **prepubescent child** (generally **13 or younger**), **acted on** or causing **marked distress or interpersonal difficulty**, in a person **at least 16** and **at least 5 years older** than the child. It is the one disorder in the chapter with **no remission or controlled-environment specifier** (pp. 792–793).",
      duration: "At least 6 months",
      functioning: "Criterion B is worded differently: acted on the urges, or marked distress or interpersonal difficulty (p. 792)",
      mood: "Depressive, bipolar and anxiety disorders are listed comorbidities, mostly from men convicted of offenses against children (p. 796)",
      criteria: [
        ["A", "For at least 6 months, recurrent, intense sexually arousing fantasies, urges or behaviors centered on sexual activity with one or more children who have not reached puberty (as a rule, age 13 or under)."],
        ["B", "The person has acted on these urges, or the urges or fantasies cause marked distress or difficulty in relationships with others."],
        ["C", "The person is aged 16 or more and is 5 or more years older than any child described in Criterion A."],
        ["Note", "Do not include someone in late adolescence who is in a continuing sexual relationship with a 12- or 13-year-old."]
      ],
      specifiers: ["Type: exclusive (attraction to children only) or nonexclusive", "Specify if: sexually attracted to males / to females / to both", "Specify if: limited to incest", "No “in a controlled environment” and no “in full remission” specifier"],
      epi: [["Prevalence of the disorder", "Unknown; likely under 3% of men in international studies (p. 794)"], ["Women", "Even less certain; probably a small fraction of the male rate (p. 794)"], ["Onset of awareness", "Around puberty (p. 794)"]],
      risk: ["Antisocial traits (callousness, impulsivity, risk-taking) interact with pedophilia: men with both are more likely to act, so antisocial personality disorder is a risk factor (pp. 794–795).", "Some men report childhood sexual abuse; causality is unclear (p. 795).", "Neurodevelopmental perturbation in utero may raise the probability of pedophilic interest (p. 795).", "Emotional congruence with children is linked to pedophilic interest and to reoffending (p. 794).", "Factors pointing to the disorder in a person who has offended: self-reported interest, child pornography use, multiple, male or unrelated child victims (p. 793)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Pedophilic interest never acted on and causing no marked distress or interpersonal difficulty: pedophilia, not the disorder (pp. 793, 795)." },
        { id: "exhibitionistic-disorder", how: "Exposure exclusively to prepubescent children may warrant both diagnoses; exposure regardless of age usually exhibitionistic disorder alone (p. 795)." },
        { id: "antisocial-pd", how: "A man mainly attracted to adults may approach an accessible child; add pedophilic disorder only with 6 months of fantasies, urges or behaviors focused on prepubescent children (p. 795)." },
        { id: "alcohol-intox", how: "Intoxication can disinhibit a person attracted to adults; without a sustained pattern, no pedophilic disorder (p. 796)." },
        { id: "ocd", how: "Ego-dystonic worry about being attracted to children, with no positive feeling, no link to sexual behavior and often other intrusive sexual themes, is OCD (p. 796)." }
      ],
      pearls: ["Memory hook 6-13-16-5: 6 months, child 13 or under, person 16 or older, 5 years older.", "The age of 13 is approximate: pubertal status is what matters, and puberty has been starting earlier (p. 793).", "Child sexual abuse material supports Criterion A but alone does not satisfy Criterion B (p. 793).", "Noncontact behavior, such as exposing to children, counts as acting on the urges (p. 793).", "Diagnostic markers (penile plethysmography, viewing time) rest on the response to child relative to adult stimuli; US law may bar using images, so audio stimuli are an option (p. 795).", "Outside the DSM: risk tools such as Static-99R estimate reoffending and do not diagnose; treatment framework is in the clinical file."],
      cmp: { symptoms: "≥6 months of sexual fantasies, urges or behaviors involving prepubescent children; acted on, or marked distress/interpersonal difficulty; age ≥16 and ≥5 years older", exclusions: "Late adolescent in an ongoing relationship with a 12–13-year-old; ego-dystonic OCD worries; access-driven ASPD acts or intoxication without a sustained interest", prevalence: "Disorder unknown; pedophilia likely <3% of men", course: "Pedophilia appears lifelong; the disorder fluctuates; behavior declines with advanced age" },
      clues: [["Core picture", "A 31-year-old man tormented by long-standing sexual attraction to prepubescent boys who has never had contact with a child or used images, and has withdrawn socially"], ["Age rule", "16 or older and 5 years older"], ["Missing specifiers", "No remission, no controlled environment"], ["Code", "F65.4"]],
      updates: upd("F65.4")
    },
    {
      id: "fetishistic-disorder", ch: "ch19", sec: "s19-fetishistic", pages: "796–798", critPages: "796",
      name: "Fetishistic disorder", code: "F65.0",
      codes: [["F65.0", "Fetishism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["fetishism", "partialism (body-part focus)", "object fetish", "foot fetish"],
      essence: "For **at least 6 months**, recurrent intense arousal from **nonliving objects** or a **highly specific focus on nongenital body parts**, with **distress or impairment only**; the objects are **not limited to cross-dressing clothing** (transvestic disorder) or **devices made for genital stimulation**. Partialism was folded back in with DSM-5 (pp. 796–797).",
      duration: "At least 6 months",
      functioning: "Distress or impairment required; sexual dysfunction with a partner when the object is unavailable, or a preference for solitary fetish activity (p. 798)",
      mood: "Not specifically described; comorbidity is mainly other paraphilic disorders and hypersexuality (p. 798)",
      criteria: [
        ["A", "Across at least 6 months, recurrent, intense sexual arousal from using objects that are not alive or from a very specific focus on one or more body parts other than the genitals, appearing as fantasies, urges or behaviors."],
        ["B", "The fantasies, urges or behaviors cause clinically significant distress or impairment in social, work or other key areas."],
        ["C", "The objects are not confined to clothes worn when cross-dressing (as in transvestic disorder) or to devices built for tactile genital stimulation, such as a vibrator."]
      ],
      specifiers: ["Specify: body part(s) / nonliving object(s) / other (any combination may apply)", CE, FR_DIS],
      epi: [["Prevalence of the disorder", "Not established in the text"], ["Sex", "More often reported in men; gap smaller for fantasy than behavior; clinical samples nearly all men (p. 797)"]],
      risk: ["Fetishistic interests can begin before adolescence; once established, the course is continuous with fluctuating intensity (p. 797).", "Rarely, fetishism occurs with neurological conditions (p. 798).", "Common objects include undergarments, footwear, rubber, leather and diapers; common body parts include feet, toes and hair (p. 797)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Using a fetish object without distress, impairment or other harm, such as a partner who happily includes it: fetishism, no diagnosis (p. 798)." },
        { id: "transvestic-disorder", how: "The nearest neighbor: if the objects are only garments worn while cross-dressing, it is transvestic disorder; ask about thoughts of being a woman and other fetishes (pp. 798, 800)." },
        { id: "sexual-masochism-disorder", how: "“Forced cross-dressing” in which arousal comes from domination or humiliation is masochism (p. 798)." },
        { id: "gender-dysphoria-adults", how: "Gender dysphoria concerns incongruence of gender identity, not arousal by an object (Chapter 14)." },
        { name: "Hypersexuality", how: "Not a DSM diagnosis; a listed comorbidity term (p. 798)." }
      ],
      pearls: ["Criterion C draws two borders: cross-dressing clothing and sex toys are excluded.", "Partialism: a paraphilia NOS in DSM-IV-TR, part of fetishism before DSM-III, re-incorporated in DSM-5 (p. 797).", "Object and body-part fetishes often combine (socks, shoes and feet).", "For a minority the object is obligatory; many enjoy sex without it too (p. 797).", "Weigh cultural norms for sexual behavior before diagnosing (p. 797)."],
      cmp: { symptoms: "≥6 months of arousal from nonliving objects or specific nongenital body parts, with distress/impairment", exclusions: "Cross-dressing clothing only; genital stimulation devices; fetishism without B", prevalence: "Not established; mostly men in clinics", course: "Can start before adolescence; continuous, fluctuating" },
      clues: [["Core picture", "A 36-year-old man who collects stockings, cannot sustain an erection with his wife without them, and whose marriage is failing; no wish to wear them"], ["Specifier", "Body part / nonliving object / other"], ["Code", "F65.0"]],
      updates: upd("F65.0")
    },
    {
      id: "transvestic-disorder", ch: "ch19", sec: "s19-transvestic", pages: "798–800", critPages: "798",
      name: "Transvestic disorder", code: "F65.1",
      codes: [["F65.1", "Transvestic fetishism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["transvestism", "transvestic fetishism (ICD-10 title)", "fetishistic transvestism (ICD-10 term)", "arousing cross-dressing"],
      essence: "For **at least 6 months**, recurrent intense **sexual arousal from cross-dressing**, with **distress or impairment only**. Not every cross-dresser qualifies. **With fetishism** makes later gender dysphoria **less** likely and **with autogynephilia** makes it **more** likely; the person does **not** report gender incongruence (pp. 798–800).",
      duration: "At least 6 months",
      functioning: "Distress or impairment required; the purge-and-acquire cycle signals distress; peak conflict with relationships and marriage in adulthood (pp. 799–800)",
      mood: "Distress follows the return of urges after temporary abatement (p. 800)",
      criteria: [
        ["A", "During at least 6 months, recurrent, intense sexual arousal from dressing in clothing of another gender, shown through fantasies, urges or behaviors."],
        ["B", "The fantasies, urges or behaviors cause clinically significant distress or impairment in social, work or other key areas."]
      ],
      specifiers: ["With fetishism: arousal by fabrics, materials or garments", "With autogynephilia: arousal by thoughts or images of oneself as a woman", CE, FR_DIS],
      epi: [["Prevalence of the disorder", "Unknown; far more common in men (p. 799)"], ["Sweden", "Fewer than 3% of men ever aroused by wearing women’s clothing (p. 799)"]],
      risk: ["Childhood fascination with a garment, arousal at puberty, then severity peaks in adulthood (pp. 799–800).", "Arousal fades with age while the wish to cross-dress stays or grows (p. 800).", "Some progress to gender dysphoria, usually with reduced arousal; middle-aged and older men with transvestism more often present with gender dysphoria (p. 800).", "Autoerotic asphyxia is associated with transvestic behavior in a substantial share of fatal cases (p. 800)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "Arousing cross-dressing with no distress or impairment: transvestism, no diagnosis (p. 800)." },
        { id: "fetishistic-disorder", how: "A man who masturbates with women’s underwear may have either; thoughts of being, or being dressed as, a woman point to transvestic disorder; other fetishes point to fetishistic (p. 800)." },
        { id: "gender-dysphoria-adults", how: "No incongruence, no wish to be another gender and usually no childhood cross-gender history in transvestic disorder; give both when both are met (p. 800; Chapter 14)." },
        { id: "sexual-masochism-disorder", how: "When “forced” cross-dressing arouses through humiliation, think masochism; masochistic interests are frequent comorbidities (pp. 798, 800)." }
      ],
      pearls: ["Arousal must be always or often present with cross-dressing (p. 798).", "Fetishism lowers, autogynephilia raises, the likelihood of later gender dysphoria (p. 799).", "Purging and reacquiring clothes is the classic sign of distress (p. 799).", "Interest often dips when a man first falls in love, usually temporarily (p. 800).", "Ask about breath restriction: autoerotic asphyxia link in fatal cases (p. 800).", "Outside the DSM: ICD-11 dropped fetishistic transvestism as a diagnosis."],
      cmp: { symptoms: "≥6 months of sexual arousal from cross-dressing, with distress/impairment", exclusions: "Cross-dressing without B; gender incongruence (gender dysphoria) unless both are met", prevalence: "Unknown; <3% of Swedish men ever aroused by cross-dressing", course: "Arousal fades with age; some progress to gender dysphoria" },
      clues: [["Core picture", "A married 45-year-old man who has thrown out and rebuilt a women’s wardrobe three times, whose wife has left, and who has never wanted to be a woman"], ["Specifiers", "With fetishism / with autogynephilia"], ["Code", "F65.1"]],
      updates: upd("F65.1")
    },
    {
      id: "other-specified-paraphilic", ch: "ch19", sec: "s19-residual", pages: "801", critPages: "801",
      name: "Other specified paraphilic disorder", code: "F65.89",
      codes: [["F65.89", "Other paraphilias (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["telephone scatologia", "necrophilia", "zoophilia", "coprophilia", "klismaphilia", "urophilia", "paraphilia NOS (DSM-IV term)"],
      essence: "Symptoms of a paraphilic disorder with **distress or impairment** that do not meet criteria for any of the eight, **with the reason recorded**, e.g., “other specified paraphilic disorder, **zoophilia**.” The manual’s examples are recurrent, intense arousal for **at least 6 months** with **marked distress or impairment** (p. 801).",
      duration: "At least 6 months in the manual’s examples",
      functioning: "Clinically significant distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of a paraphilic disorder, with clinically significant distress or impairment, predominate without meeting full criteria for a specific paraphilic disorder; the clinician records the reason, naming the paraphilia (e.g., telephone scatologia, necrophilia, zoophilia, coprophilia, klismaphilia, urophilia)."]],
      specifiers: ["Record the specific paraphilia after the name", "May be specified as in remission and/or occurring in a controlled environment (words only)"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["Dozens of paraphilias exist; any can become a disorder through its consequences (p. 779)."],
      differential: [
        { name: "The paraphilia without the disorder", how: "An unusual interest without distress, impairment or harm to others: describe it, do not diagnose (p. 780)." },
        { id: "unspecified-paraphilic", how: "Use when the reason is not stated or information is insufficient (p. 801)." },
        { id: "fetishistic-disorder", how: "Check first whether the focus is a nonliving object or nongenital body part, which has its own criteria (p. 796)." },
        { id: "exhibitionistic-disorder", how: "Obscene calls are telephone scatologia (other specified), not exposure (p. 801)." }
      ],
      pearls: ["The six examples are not an exhaustive list.", "Unlike pedophilic disorder, this category can carry the remission and controlled-environment specifiers (p. 801).", "Code a separate diagnosis for each paraphilia that causes suffering or harm (p. 780)."],
      cmp: { symptoms: "Paraphilic disorder symptoms with distress/impairment, reason recorded", exclusions: "Full criteria for one of the eight; interest without B", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A 30-year-old man who has made obscene calls to strangers for 2 years and is ashamed and in legal trouble"], ["Recording", "Other specified paraphilic disorder, telephone scatologia"], ["Code", "F65.89"]],
      updates: upd("F65.89")
    },
    {
      id: "unspecified-paraphilic", ch: "ch19", sec: "s19-residual", pages: "801", critPages: "801",
      name: "Unspecified paraphilic disorder", code: "F65.9",
      codes: [["F65.9", "Paraphilia, unspecified (ICD-10-CM title; record the DSM name)", NC]],
      aka: [],
      essence: "Paraphilic disorder symptoms with **distress or impairment**, short of full criteria, when the clinician **does not state the reason** or there is **insufficient information** for a more specific diagnosis (p. 801).",
      duration: "Not specified",
      functioning: "Clinically significant distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of a paraphilic disorder with clinically significant distress or impairment predominate without meeting full criteria; the clinician chooses not to give the reason, including when information is too limited for a more specific diagnosis."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-paraphilic", how: "Use when the specific paraphilia can be named (p. 801)." }],
      pearls: ["Typical setting: a single forensic or emergency contact without collateral history.", "Revise once records or a fuller sexual history are available."],
      cmp: { symptoms: "Paraphilic disorder symptoms; insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Core picture", "A brief jail consult note describing distressing, unusual sexual urges with no detail about their focus"], ["Code", "F65.9"]],
      updates: upd("F65.9")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "The courtship disorders: voyeuristic vs exhibitionistic vs frotteuristic", ids: ["voyeuristic-disorder", "exhibitionistic-disorder", "frotteuristic-disorder"] },
    { label: "Sexual masochism vs sexual sadism disorder", ids: ["sexual-masochism-disorder", "sexual-sadism-disorder"] },
    { label: "Fetishistic vs transvestic disorder vs gender dysphoria", ids: ["fetishistic-disorder", "transvestic-disorder", "gender-dysphoria-adults"] },
    { label: "Pedophilic vs exhibitionistic disorder", ids: ["pedophilic-disorder", "exhibitionistic-disorder"] },
    { label: "Pedophilic disorder vs OCD", ids: ["pedophilic-disorder", "ocd"] },
    { label: "Sexual sadism disorder vs antisocial personality disorder", ids: ["sexual-sadism-disorder", "antisocial-pd"] },
    { label: "Other specified vs unspecified paraphilic disorder", ids: ["other-specified-paraphilic", "unspecified-paraphilic"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 19: paraphilic disorders", ticks: [[0, "0"], [10, "6 mo"], [100, "5 yr"]], rows: [
      { label: "Voyeuristic", dx: "voyeuristic-disorder", from: 0, to: 10, color: "guide", span: "≥6 months; age ≥18" },
      { label: "Exhibitionistic", dx: "exhibitionistic-disorder", from: 0, to: 10, color: "guide", span: "≥6 months" },
      { label: "Frotteuristic", dx: "frotteuristic-disorder", from: 0, to: 10, color: "guide", span: "≥6 months" },
      { label: "Sexual masochism", dx: "sexual-masochism-disorder", from: 0, to: 10, color: "case", span: "≥6 months" },
      { label: "Sexual sadism", dx: "sexual-sadism-disorder", from: 0, to: 10, color: "case", span: "≥6 months" },
      { label: "Pedophilic", dx: "pedophilic-disorder", from: 0, to: 10, color: "hy", span: "≥6 months; no remission specifier" },
      { label: "Fetishistic", dx: "fetishistic-disorder", from: 0, to: 10, color: "clin", span: "≥6 months" },
      { label: "Transvestic", dx: "transvestic-disorder", from: 0, to: 10, color: "clin", span: "≥6 months" },
      { label: "In full remission (all but pedophilic)", from: 0, to: 100, color: "mech", span: "≥5 years, uncontrolled environment" }
    ], note: "All eight need 6 months for Criterion A. Full remission needs 5 years without acting on urges or distress/impairment, counted only in an uncontrolled environment, and says nothing about whether the interest itself has gone. Pedophilic disorder has neither the remission nor the controlled-environment specifier." }
  ]);
})();
