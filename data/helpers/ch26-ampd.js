/*
 * Diagnostic helper for Chapter 26 (Alternative DSM-5 Model for Personality Disorders), DSM-5-TR Section III, pp. 881–902.
 * "ampd": from the Level of Personality Functioning rating (Criterion A) through the trait review (Criterion B) to one of
 * the six proposed criteria sets, PD-TS or no personality disorder, with the C–G checks. Nothing here is an official
 * diagnosis: the model is a Section III alternative (p. 881), so every result points to the Section II personality
 * disorder and code (Chapter 18) for the chart and keeps the level and trait profile for the formulation (app guidance).
 * The LPFS (Table 2) and the trait taxonomy (Table 3) are described in condensed own words, never reprinted. Routes beyond
 * the text are app guidance built on pp. 881–894 and Section I pp. 22–24.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "ampd",
    chapter: "ch26",
    title: "From functioning and traits to a personality disorder of the alternative model",
    summary: "Rate the level of personality functioning first, then review all five trait domains, then ask whether the pattern matches one of the six proposed sets or is better described as PD-TS, and finish with the pervasiveness, stability and alternative-explanation checks (C–G). Each result names the Section II disorder and code to chart and what to write in the formulation.",
    caution: "A teaching aid built from DSM-5-TR pp. 881–894. The alternative model is a Section III proposal: the diagnosis line carries the Section II personality disorder and its ICD-10-CM code (Chapter 18), and the model’s level and trait profile belong in the formulation (app guidance). Level descriptions below are the app’s condensed paraphrases of Table 2; confirm a formal rating against the manual.",
    start: "level",
    nodes: {
      level: {
        q: "Rate the Level of Personality Functioning: which level most closely captures the person’s current overall impairment in identity, self-direction, empathy and intimacy?",
        help: "Self functioning is identity and self-direction; interpersonal functioning is empathy and intimacy (Table 1, p. 883). Choose one overall level, the one that fits best now (p. 892); the four columns are not added up (app reading). Moderate or greater impairment is required for a diagnosis, a threshold chosen because it best helps clinicians identify personality pathology accurately and efficiently (p. 882).",
        options: [
          { label: "Level 0 or 1: clear sense of self, realistic goals, can take others’ perspectives, enduring reciprocal relationships; at most some blurring under stress", to: "r:nopd", note: "Little or no, or some, impairment (pp. 882, 895): below the threshold." },
          { label: "Level 2: identity leans on others’ approval, goals serve external approval, empathy only where relevant to the self, relationships superficial or for personal gain", to: "domains", note: "Moderate impairment, the diagnostic threshold (pp. 882, 896)." },
          { label: "Level 3: weak sense of agency or emptiness, fragile self-esteem, unclear or contradictory standards, cannot take other perspectives, relationships built on absolute need or expected abandonment", to: "domains", note: "Severe impairment (p. 897)." },
          { label: "Level 4: sense of self virtually absent or organized around persecution, incoherent goals, attention to others only for need or harm avoidance, relationships only as comfort or pain", to: "domains", note: "Extreme impairment (p. 898)." }
        ]
      },
      domains: {
        q: "Review all five trait domains. Which domains hold elevated facets?",
        help: "An initial inquiry reviews every domain, like a review of systems (p. 894). A facet counts as elevated when testing and/or interview findings back up the clinician’s judgment, which may rest on population norms and/or clinical judgment (p. 894). Pick the pattern that best fits; each path then checks the set’s A areas and B threshold.",
        options: [
          { label: "Antagonism and Disinhibition (manipulative, callous, deceitful, hostile, risk-taking, impulsive, irresponsible)", to: "antisocial", note: "The antisocial set draws on these two domains (p. 884)." },
          { label: "Negative Affectivity with Antagonism and/or Disinhibition (lability, anxiousness, separation insecurity, depressivity; impulsivity, risk taking, hostility)", to: "borderline", note: "The borderline set (p. 886)." },
          { label: "Negative Affectivity and Detachment (anxiousness with withdrawal, anhedonia, intimacy avoidance)", to: "avoidant", note: "The avoidant set (p. 885)." },
          { label: "Antagonism alone (grandiosity, attention seeking)", to: "narcissistic", note: "The narcissistic set (p. 887)." },
          { label: "Rigid perfectionism with perseveration, intimacy avoidance or restricted affectivity", to: "ocpd", note: "The obsessive-compulsive set (p. 888)." },
          { label: "Psychoticism and Detachment (odd thinking, unusual beliefs, eccentricity; restricted affect, withdrawal, suspiciousness)", to: "schizotypal", note: "The schizotypal set (p. 889)." },
          { label: "Another pattern: suspiciousness and hostility; pure Detachment; attention seeking with lability; submissiveness and separation insecurity; or a mix", to: "r:pdts", note: "PD-TS covers paranoid-, schizoid-, histrionic- and dependent-like profiles and mixed or atypical pictures (p. 891)." }
        ]
      },
      antisocial: {
        q: "Antisocial set: at least 18 years old, 2 or more of the 4 A areas impaired in the characteristic way, and 6 or more of the 7 traits?",
        help: "A areas: egocentric identity with self-esteem from gain, power or pleasure; self-direction without prosocial standards; no concern or remorse (empathy); exploitation and dominance in place of intimacy (p. 884). B: manipulativeness, callousness, deceitfulness, hostility, risk taking, impulsivity, irresponsibility (pp. 884–885). Age note: at least 18 (p. 885).",
        options: [
          { label: "Yes, all three", to: "psychopathic", note: "Set met; now consider the specifier." },
          { label: "Under 18, or a pattern that may be normal for the developmental stage", to: "r:young", note: "The age note (p. 885) and Criterion G (p. 881)." },
          { label: "Fewer than 6 traits, or fewer than 2 A areas", to: "r:pdts", note: "Subthreshold for the set: PD-TS (p. 891)." }
        ]
      },
      psychopathic: {
        q: "Is anxiousness low, withdrawal low and attention seeking high?",
        help: "The psychopathic variant: low anxiousness (Negative Affectivity) and low withdrawal (Detachment) with high attention seeking (Antagonism); the first two capture stress immunity and social potency (p. 885).",
        options: [
          { label: "Yes", to: "r:antisocialpsy", note: "Specify “with psychopathic features” (p. 885)." },
          { label: "No", to: "r:antisocial", note: "Antisocial set without the specifier; other traits and the level can still be specified (p. 885)." }
        ]
      },
      borderline: {
        q: "Borderline set: 2 or more A areas impaired in the characteristic way, and 4 or more of the 7 traits, at least one of them impulsivity, risk taking or hostility?",
        help: "A areas: unstable or impoverished self-image with emptiness and dissociative states under stress; unstable goals; hypersensitive, negatively biased empathy; intense, unstable relationships with abandonment fears (p. 886). B: emotional lability, anxiousness, separation insecurity, depressivity, impulsivity, risk taking, hostility (pp. 886–887).",
        options: [
          { label: "Yes, with at least one of impulsivity, risk taking or hostility", to: "r:borderline", note: "Set met (p. 886)." },
          { label: "Four or more traits, but none of those three", to: "r:pdts", note: "The must-have rule is not met: PD-TS with the Negative Affectivity traits (pp. 886, 891)." },
          { label: "Fewer than 4 traits, or fewer than 2 A areas", to: "r:pdts", note: "Subthreshold: PD-TS (p. 891)." }
        ]
      },
      avoidant: {
        q: "Avoidant set: 2 or more A areas impaired in the characteristic way, and 3 or more of the 4 traits including anxiousness?",
        help: "A areas: low self-esteem with shame; reluctance to pursue goals or new activities involving people; preoccupation with criticism or rejection; involvement only when sure of being liked (p. 885). B: anxiousness (required), withdrawal, anhedonia, intimacy avoidance (pp. 885–886).",
        options: [
          { label: "Yes, anxiousness included", to: "r:avoidant", note: "Set met (p. 885)." },
          { label: "Three traits, but anxiousness absent", to: "r:pdts", note: "Anxiousness is compulsory (p. 885): PD-TS with Detachment traits, or consider the schizotypal or obsessive-compulsive sets if their defining facets are present (app guidance)." },
          { label: "Fewer than 3 traits, or fewer than 2 A areas", to: "r:pdts", note: "Subthreshold: PD-TS (p. 891)." }
        ]
      },
      narcissistic: {
        q: "Narcissistic set: 2 or more A areas impaired in the characteristic way, and both grandiosity and attention seeking?",
        help: "A areas: self-esteem regulated by others with inflated, deflated or vacillating appraisal; goals set by approval; empathy only where relevant to the self; superficial relationships for self-esteem (p. 887). B: both grandiosity and attention seeking (pp. 887–888). Grandiosity may be overt or covert (pp. 883, 887).",
        options: [
          { label: "Yes, both", to: "r:narcissistic", note: "Set met; specify further Antagonism traits (malignant) or Negative Affectivity traits (vulnerable) if present (p. 888)." },
          { label: "Only one of the two", to: "r:pdts", note: "Both are required (p. 887): PD-TS with the traits present (p. 891)." }
        ]
      },
      ocpd: {
        q: "Obsessive-compulsive set: 2 or more A areas impaired in the characteristic way, and 3 or more of the 4 traits including rigid perfectionism?",
        help: "A areas: identity from work or productivity with constricted emotion; goals blocked by rigid standards and moralism; difficulty appreciating others’ views; relationships secondary to work (p. 888). B: rigid perfectionism (required; the extreme Conscientiousness pole), perseveration, intimacy avoidance, restricted affectivity (p. 888).",
        options: [
          { label: "Yes, rigid perfectionism included", to: "r:ocpd", note: "Set met (p. 888)." },
          { label: "Rigid perfectionism absent", to: "r:pdts", note: "It is compulsory (p. 888): PD-TS, or the avoidant or schizotypal sets if their facets fit (app guidance)." },
          { label: "Fewer than 3 traits, or fewer than 2 A areas", to: "r:pdts", note: "Subthreshold: PD-TS (p. 891)." }
        ]
      },
      schizotypal: {
        q: "Schizotypal set: 2 or more A areas impaired in the characteristic way, and 4 or more of the 6 traits; and did the features exist outside any episode of schizophrenia?",
        help: "A areas: confused self–other boundaries and incongruent affect; incoherent goals; misreading others and own impact; mistrustful, anxious intimacy (p. 889). B: cognitive and perceptual dysregulation, unusual beliefs and experiences, eccentricity, restricted affectivity, withdrawal, suspiciousness (p. 889). Criterion E: features present only in the context of schizophrenia do not count (p. 883).",
        options: [
          { label: "Yes, 4 or more, and the pattern is not just an expression of schizophrenia", to: "r:schizotypal", note: "Set met (p. 889)." },
          { label: "The features appeared only with a psychotic disorder", to: "r:another", note: "Criterion E (p. 883)." },
          { label: "Fewer than 4 traits, or fewer than 2 A areas", to: "r:pdts", note: "Subthreshold: PD-TS (p. 891)." }
        ]
      }
    },
    results: {
      nopd: { label: "No personality disorder by this model", dx: "Level 0–1: Criterion A not met", line: "Moderate or greater impairment is required (p. 882). The LPFS may still serve as a global indicator of personality functioning without a diagnosis, or when impairment is subthreshold (p. 892).", points: ["Elevated traits can still be recorded; functioning and traits may be relevant to treatment whether or not a personality disorder is present (p. 894).", "Re-rate the level at a later point in time if the picture changes (p. 892).", "Chart: no personality disorder; note the level and any traits in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-rating", label: "Rating the LPFS" }, dxId: "lpfs" },
      young: { label: "Age and developmental stage", dx: "Under 18, or possibly normal for the stage", line: "The antisocial set requires age 18 or older (p. 885), and every set requires that the pattern is not better understood as normal for the developmental stage (Criterion G, p. 881) and can be traced back at least to adolescence or early adulthood (Criterion D).", points: ["Teenagers are generally higher on trait impulsivity than older adults (p. 892).", "In Section II, antisocial personality disorder also needs age 18 and conduct disorder before 15 (Ch 18, p. 748); consider conduct disorder for the under-18 (app guidance).", "Reassess later; record the level and traits as a profile, not a disorder (app guidance)."], link: { ch: "ch26", sec: "s26-cdefg", label: "Criteria C–G" }, dxId: "ampd-general" },
      another: { label: "Better explained by another disorder", dx: "Criterion E not met", line: "A personality disorder is not diagnosed when its manifestations are clearly an expression of another mental disorder; schizotypal features only during schizophrenia is the manual’s example (p. 883).", points: ["Personality disorders can be diagnosed alongside disorders such as major depressive disorder, and patients with other disorders should be assessed for them (p. 883).", "If a schizotypal pattern clearly preceded the psychosis, Section II records schizotypal personality disorder (premorbid) (Ch 2; app guidance).", "Chart the primary disorder; keep the level and trait profile in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-cdefg", label: "Criteria E, F and G" }, dxId: "ampd-general" },
      antisocial: { label: "Antisocial personality disorder (alternative model)", dx: "Antisocial set met", line: "Two or more A areas and 6 of 7 traits in Antagonism and Disinhibition, age 18 or older (pp. 884–885). Check C–G: pervasive, stable since at least adolescence, not another disorder, substance or medical condition, not normal for stage or setting (p. 881).", points: ["Other traits (anxiousness is the example) and the level of functioning can be specified (p. 885).", "Chart: Section II antisocial personality disorder, F60.2, if its own criteria are met (3 of 7 since 15, conduct disorder before 15; Ch 18, p. 748); otherwise other specified personality disorder, F60.89, with the features named; the level and traits go in the formulation (app guidance).", "No change was found for the codes checked; confirm against the official tabular list (app guidance)."], link: { ch: "ch26", sec: "s26-antisocial", label: "Antisocial PD" }, dxId: "ampd-antisocial" },
      antisocialpsy: { label: "Antisocial PD, with psychopathic features", dx: "Antisocial set met, psychopathic variant", line: "Low anxiousness, low withdrawal and high attention seeking mark the psychopathic variant: a bold interpersonal style that may mask maladaptive behavior such as fraudulence (p. 885).", points: ["High attention seeking and low withdrawal capture social potency; low anxiousness captures stress immunity (p. 885).", "The level of functioning can also be specified (p. 885).", "Chart: Section II antisocial personality disorder, F60.2, if its own criteria are met (Ch 18); write “with psychopathic features (alternative model)” in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-antisocial", label: "The psychopathic features specifier" }, dxId: "ampd-antisocial" },
      borderline: { label: "Borderline personality disorder (alternative model)", dx: "Borderline set met", line: "Two or more A areas and 4 of 7 traits, at least one of impulsivity, risk taking or hostility (pp. 886–887). Check C–G (p. 881).", points: ["Psychoticism traits such as cognitive and perceptual dysregulation can be specified, as can the level (p. 887).", "Depressivity includes thoughts of suicide and suicidal behavior, and impulsivity includes self-harming behavior under distress (p. 887): ask directly and plan for safety (app guidance).", "Chart: Section II borderline personality disorder, F60.3, if 5 of 9 are met (Ch 18, p. 752); otherwise F60.89 with the features named; level and traits in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-borderline", label: "Borderline PD" }, dxId: "ampd-borderline" },
      avoidant: { label: "Avoidant personality disorder (alternative model)", dx: "Avoidant set met", line: "Two or more A areas and 3 of 4 traits including anxiousness (pp. 885–886). Check C–G (p. 881).", points: ["Other Negative Affectivity traits (depressivity, separation insecurity, submissiveness, suspiciousness, hostility) and the level can be specified; the manual notes considerable heterogeneity (p. 886).", "Chart: Section II avoidant personality disorder, F60.6, if 4 of 7 are met (Ch 18, p. 763); otherwise F60.89; level and traits in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-avoidant", label: "Avoidant PD" }, dxId: "ampd-avoidant" },
      narcissistic: { label: "Narcissistic personality disorder (alternative model)", dx: "Narcissistic set met", line: "Two or more A areas and both grandiosity and attention seeking (pp. 887–888). Check C–G (p. 881).", points: ["Further Antagonism traits (manipulativeness, deceitfulness, callousness) can be specified for more pervasive antagonism, the manual’s “malignant narcissism”; depressivity and anxiousness for “vulnerable” presentations; and the level (p. 888).", "Chart: Section II narcissistic personality disorder, F60.81, if 5 of 9 are met (Ch 18, p. 760); otherwise F60.89; level and traits in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-narcissistic", label: "Narcissistic PD" }, dxId: "ampd-narcissistic" },
      ocpd: { label: "Obsessive-compulsive personality disorder (alternative model)", dx: "Obsessive-compulsive set met", line: "Two or more A areas and 3 of 4 traits including rigid perfectionism (pp. 888–889). Check C–G (p. 881).", points: ["Other Negative Affectivity traits (anxiousness) and the level can be specified (p. 889).", "Chart: Section II obsessive-compulsive personality disorder, F60.5, if 4 of 8 are met (Ch 18, p. 771); otherwise F60.89; level and traits in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-ocpd", label: "Obsessive-compulsive PD" }, dxId: "ampd-ocpd" },
      schizotypal: { label: "Schizotypal personality disorder (alternative model)", dx: "Schizotypal set met", line: "Two or more A areas and 4 of 6 traits in Psychoticism and Detachment (pp. 889–890). Check C–G, above all E (pp. 881, 883).", points: ["Negative Affectivity traits (depressivity, anxiousness) and the level can be specified (pp. 889–890).", "Chart: Section II schizotypal personality disorder, F21, if 5 of 9 are met (Ch 2, p. 744); otherwise F60.89; level and traits in the formulation (app guidance)."], link: { ch: "ch26", sec: "s26-schizotypal", label: "Schizotypal PD" }, dxId: "ampd-schizotypal" },
      pdts: { label: "Personality disorder—trait specified", dx: "PD-TS: moderate or greater impairment with a pattern that fits none of the six sets", line: "PD-TS needs 2 or more A areas and one or more elevated domains or facets after reviewing all five domains (p. 890). It covers subthreshold, mixed and atypical presentations and the paranoid, schizoid, histrionic and dependent patterns (p. 891).", points: ["No subtypes: the recorded traits are the specifiers; specify the level with the LPFS and the traits with Table 3 (pp. 890–891).", "Chart: the Section II type if its own criteria are met (paranoid F60.0, schizoid F60.1, histrionic F60.4, dependent F60.7, or one of the six); otherwise other specified personality disorder, F60.89, with the features named, or unspecified, F60.9 (Section I pp. 22–23; app guidance).", "Write the level and the trait list in the formulation; they are the model’s specifiers (app guidance)."], link: { ch: "ch26", sec: "s26-pdts", label: "PD-TS" }, dxId: "ampd-pd-ts" }
    }
  }
]);
