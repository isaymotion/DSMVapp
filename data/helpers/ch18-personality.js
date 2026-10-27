/*
 * Diagnostic helpers for Chapter 18 (Personality Disorders), DSM-5-TR pp. 733–778.
 * "personality": decide whether a personality disorder is present, then which one.
 * "pdpair": separate the classic look-alikes by motive and time course.
 */
(function () {
  var L = function (sec, label) { return { ch: "ch18", sec: sec, label: label }; };
  SP.helpers = (SP.helpers || []).concat([
    {
      id: "personality",
      chapter: "ch18",
      title: "Which personality disorder?",
      summary: "Check that the pattern is enduring and not explained by another disorder, a substance or a medical condition, apply the age rules, then choose the cluster and the disorder.",
      caution: "A teaching aid built from DSM-5-TR pp. 733–778. Personality disorders are diagnosed from the long-term pattern, often over several interviews and with informants. Check the full criteria count, consider culture and gender bias, and assess suicide and violence risk.",
      start: "onset",
      nodes: {
        onset: {
          q: "Has the pattern been present since adolescence or early adulthood, stable over time and across many situations?",
          help: "Ask how the person was at school, in early jobs and relationships; ask an informant. A personality disorder is not a change from a previously different personality.",
          options: [
            { label: "Yes: long-standing and pervasive", to: "episode", note: "Enduring pattern." },
            { label: "No: a change from a previously different personality", to: "cause", note: "Personality change." },
            { label: "Only in one setting or relationship", to: "r:notpervasive", note: "Not pervasive." }
          ]
        },
        cause: {
          q: "What accompanies the change?",
          help: "New personality change in middle or late life always needs a medical and substance evaluation.",
          options: [
            { label: "A medical condition with a direct effect on the brain (head injury, tumor, stroke, epilepsy, Huntington’s, HIV, lupus, endocrine)", to: "r:change", note: "Medical cause." },
            { label: "Long-standing substance use", to: "r:substance", note: "Substance-related." },
            { label: "It followed an extreme traumatic event", to: "r:ptsd", note: "After trauma." },
            { label: "It appears only during a mood, anxiety or psychotic episode", to: "r:episode", note: "Episode-bound." }
          ]
        },
        episode: {
          q: "Are the features confined to an episode of another disorder or to substance use?",
          help: "Depression can look dependent or borderline; mania can look narcissistic or antisocial; intoxication and drug seeking can look antisocial. Judge the pattern outside episodes.",
          options: [
            { label: "No: present outside any episode", to: "age", note: "Not episode-bound." },
            { label: "Yes", to: "r:episode", note: "Explained by another disorder." }
          ]
        },
        age: {
          q: "How old is the person?",
          help: "Under 18, a personality disorder needs pervasive, persistent features for at least 1 year that are not limited to a developmental stage; antisocial PD is never diagnosed under 18.",
          options: [
            { label: "18 or older", to: "cluster", note: "Adult." },
            { label: "Under 18, features present at least 1 year", to: "cluster", note: "Youth, ≥1 year (not antisocial)." },
            { label: "Under 18, features present less than 1 year", to: "r:tooearly", note: "Too early." }
          ]
        },
        cluster: {
          q: "Which overall picture fits best?",
          help: "If features from several clusters are present, follow the most prominent first, then come back: all personality disorders that are met are diagnosed.",
          options: [
            { label: "Odd or eccentric: suspicious, detached or peculiar", to: "clA", note: "Cluster A." },
            { label: "Dramatic, emotional or erratic", to: "clB", note: "Cluster B." },
            { label: "Anxious or fearful", to: "clC", note: "Cluster C." },
            { label: "General criteria met, traits of several disorders, none fully met", to: "r:mixed", note: "Mixed." }
          ]
        },
        clA: {
          q: "What dominates?",
          help: "Separate by the core: malice, indifference or oddness.",
          options: [
            { label: "Distrust: others mean harm; grudges, hidden meanings, jealousy", to: "r:paranoid", note: "Suspicion." },
            { label: "Detachment: no desire for relationships, cold, solitary", to: "r:schizoid", note: "Indifference." },
            { label: "Oddness: magical thinking, ideas of reference, unusual perceptions, eccentric speech and dress", to: "r:schizotypal", note: "Eccentricity." }
          ]
        },
        clB: {
          q: "What dominates?",
          help: "Ask what the behavior is for: gain, care, attention or admiration.",
          options: [
            { label: "Violating others’ rights: crime, deceit, aggression, no remorse", to: "asp", note: "Antisocial pattern." },
            { label: "Instability: abandonment fear, idealize–devalue, self-harm, emptiness, anger", to: "r:borderline", note: "Instability." },
            { label: "Attention seeking: center stage, seductive, theatrical, shallow", to: "r:histrionic", note: "Attention." },
            { label: "Grandiosity: specialness, entitlement, need for admiration, no empathy", to: "r:narcissistic", note: "Grandiosity." }
          ]
        },
        asp: {
          q: "Is the person at least 18, with evidence of conduct disorder before age 15?",
          help: "Look for aggression to people or animals, destruction of property, deceitfulness or theft, or serious rule violations before 15. Exclude behavior only during schizophrenia or mania, or only in service of a substance begun in adulthood.",
          options: [
            { label: "Yes, both", to: "r:antisocial", note: "Antisocial PD." },
            { label: "Under 18", to: "r:conduct", note: "Too young." },
            { label: "18 or older, but no conduct disorder before 15", to: "r:aab", note: "No childhood onset." }
          ]
        },
        clC: {
          q: "What dominates?",
          help: "Separate by the fear: humiliation, being left alone, or loss of control.",
          options: [
            { label: "Avoids people despite wanting them, fearing criticism and rejection; feels inferior", to: "r:avoidant", note: "Avoidant." },
            { label: "Clings and submits; can’t decide or be alone; urgently replaces lost relationships", to: "r:dependent", note: "Dependent." },
            { label: "Perfectionism, rules, control, workaholism, rigidity, miserliness", to: "r:ocpd", note: "OCPD." }
          ]
        }
      },
      results: {
        notpervasive: { label: "Not a personality disorder", dx: "A situational or relational problem", line: "Personality disorder requires a pattern that is inflexible and pervasive across many situations.", points: ["Consider adjustment disorder or a relational problem.", "Reassess with informants over time."], link: L("s18-general", "General criteria") },
        change: { dx: "Personality change due to another medical condition (F07.0)", line: "A persistent change from previous personality, caused directly by a medical condition.", points: ["Code the medical condition first (e.g., G40.209 temporal lobe epilepsy; F07.0 personality change due to temporal lobe epilepsy).", "Specify the subtype: labile, disinhibited, aggressive, apathetic, paranoid, other, combined.", "Not if only during delirium or a psychological reaction to disability."], link: L("s18-change-amc", "Personality change due to AMC"), dxId: "personality-change-amc" },
        substance: { label: "Consider", dx: "Personality change related to substance use", line: "Use the other specified category for the substance (e.g., other specified stimulant-related disorder, with personality change).", points: ["Do not diagnose a personality disorder from intoxication, withdrawal or drug-seeking behavior.", "Reassess after sustained abstinence."], link: L("s18-change-amc", "Differential") },
        ptsd: { label: "Consider", dx: "Posttraumatic stress disorder", line: "Personality changes that emerge and persist after extreme stress suggest PTSD.", points: ["Screen for intrusions, avoidance, negative cognitions and arousal."], link: { ch: "ch07", sec: "s7-ptsd-criteria", label: "PTSD" }, dxId: "ptsd" },
        episode: { label: "Not yet", dx: "The episode, not a personality disorder", line: "Features confined to a mood, anxiety or psychotic episode or to substance use do not establish a personality disorder.", points: ["Do not diagnose borderline or dependent PD from a cross-section during depression.", "Reassess the long-term pattern once the episode resolves; diagnose both if both are met."], link: L("s18-general-ddx", "General differential") },
        tooearly: { label: "Not yet", dx: "No personality disorder diagnosis yet", line: "Under 18, features must be present at least 1 year and not limited to a developmental stage.", points: ["Consider an identity problem, adjustment disorder, conduct or anxiety disorders.", "Traits in youth often do not persist unchanged."], link: L("s18-general", "Age rules") },
        mixed: { dx: "Other specified personality disorder (F60.89): mixed personality features", line: "General criteria met, with traits of several disorders and full criteria for none.", points: ["Record the reason after the name.", "If no reason is given or information is insufficient: unspecified (F60.9)."], link: L("s18-other", "Other specified"), dxId: "other-specified-pd" },
        paranoid: { dx: "Paranoid personality disorder (F60.0)", line: "Pervasive distrust and suspiciousness; four or more of seven.", points: ["Not only during psychosis; add “(premorbid)” if it preceded schizophrenia.", "Consider discrimination, migration and hearing loss before labeling.", "Very brief psychotic episodes can occur under stress."], link: L("s18-paranoid", "Paranoid PD"), dxId: "paranoid-pd" },
        schizoid: { dx: "Schizoid personality disorder (F60.1)", line: "Detachment and restricted emotional expression; four or more of seven.", points: ["Exclude autism spectrum disorder (stereotyped interests).", "Not avoidant: no wish for relationships."], link: L("s18-schizoid", "Schizoid PD"), dxId: "schizoid-pd" },
        schizotypal: { dx: "Schizotypal personality disorder (F21)", line: "Discomfort with closeness, cognitive-perceptual distortions and eccentricity; five or more of nine.", points: ["Ideas of reference, not delusions.", "Only a small proportion develop schizophrenia; add “(premorbid)” if they do."], link: L("s18-schizotypal", "Schizotypal PD"), dxId: "schizotypal-pd" },
        antisocial: { dx: "Antisocial personality disorder (F60.2)", line: "Three or more of seven since age 15, age ≥18, conduct disorder before 15.", points: ["Not only during schizophrenia or bipolar disorder.", "Diagnose a co-occurring substance use disorder too.", "Use collateral sources; assess violence and suicide risk."], link: L("s18-antisocial", "Antisocial PD"), dxId: "antisocial-pd" },
        conduct: { label: "Not antisocial PD", dx: "Conduct disorder", line: "Antisocial personality disorder cannot be diagnosed before age 18.", points: ["Reassess at 18; childhood onset with ADHD raises the risk of progression."], link: L("s18-antisocial", "Antisocial PD rules") },
        aab: { label: "Not antisocial PD", dx: "Adult antisocial behavior (Z72.811) or another disorder", line: "Without conduct disorder before 15, antisocial PD is not diagnosed.", points: ["Consider substance use, mania, psychosis or another personality disorder (paranoid revenge, narcissistic exploitation).", "Crime for gain without personality features: adult antisocial behavior."], link: L("s18-antisocial", "Differential"), dxId: "antisocial-behavior" },
        borderline: { dx: "Borderline personality disorder (F60.3)", line: "Instability of relationships, self-image and affect with impulsivity; five or more of nine.", points: ["Self-harm counts only once (Criterion 5).", "Separate from bipolar disorder: hours-long reactive shifts, not episodes of days.", "Assess suicide risk; screen for depression, PTSD, substance use, eating disorders and ADHD."], link: L("s18-borderline", "Borderline PD"), dxId: "borderline-pd" },
        histrionic: { dx: "Histrionic personality disorder (F60.4)", line: "Excessive emotionality and attention seeking; five or more of eight.", points: ["Separate from narcissistic (admiration) and borderline (self-destructiveness, emptiness).", "Screen for somatic symptom and functional neurological disorders."], link: L("s18-histrionic", "Histrionic PD"), dxId: "histrionic-pd" },
        narcissistic: { dx: "Narcissistic personality disorder (F60.81)", line: "Grandiosity, need for admiration and lack of empathy; five or more of nine.", points: ["Exclude hypomania or mania.", "Watch for depression and high-lethality suicide attempts after failure or humiliation."], link: L("s18-narcissistic", "Narcissistic PD"), dxId: "narcissistic-pd" },
        avoidant: { dx: "Avoidant personality disorder (F60.6)", line: "Social inhibition, inadequacy and hypersensitivity to negative evaluation; four or more of seven.", points: ["Social anxiety disorder often coexists; both can be diagnosed.", "Not schizoid: wants relationships."], link: L("s18-avoidant", "Avoidant PD"), dxId: "avoidant-pd" },
        dependent: { dx: "Dependent personality disorder (F60.7)", line: "Excessive need to be taken care of; five or more of eight.", points: ["Exclude realistic fear of retribution and dependency explained by illness, depression or culture.", "Ask about abuse and safety."], link: L("s18-dependent", "Dependent PD"), dxId: "dependent-pd" },
        ocpd: { dx: "Obsessive-compulsive personality disorder (F60.5)", line: "Orderliness, perfectionism and control at the expense of flexibility; four or more of eight.", points: ["Check for true obsessions and compulsions (OCD) and extreme hoarding: diagnose both if present.", "Moderate traits can be adaptive."], link: L("s18-ocpd", "OCPD"), dxId: "ocpd" }
      }
    },
    {
      id: "pdpair",
      chapter: "ch18",
      title: "Personality look-alikes",
      summary: "Separate the classic look-alike pairs by asking why the person behaves as they do and how long the states last.",
      caution: "A teaching aid built from the differential sections of DSM-5-TR pp. 733–778. When criteria for more than one disorder are met, diagnose all of them.",
      start: "pair",
      nodes: {
        pair: {
          q: "Which feature are you trying to explain?",
          help: "Many personality disorders share behaviors; the motive and the time course separate them.",
          options: [
            { label: "Social isolation", to: "isolation", note: "Alone." },
            { label: "Fear of abandonment", to: "abandon", note: "Abandonment." },
            { label: "Attention seeking or manipulation", to: "attention", note: "Attention." },
            { label: "Mood swings", to: "mood", note: "Mood." },
            { label: "Perfectionism and order", to: "perfect", note: "Perfectionism." },
            { label: "Suspiciousness", to: "suspicion", note: "Suspicion." }
          ]
        },
        isolation: {
          q: "Why is the person alone?",
          help: "Ask whether they want relationships and what stops them.",
          options: [
            { label: "Has no desire for closeness; indifferent", to: "r:schizoid", note: "Indifference." },
            { label: "Wants closeness but fears criticism and rejection", to: "r:avoidant", note: "Fear of humiliation." },
            { label: "Believes others will harm or exploit them", to: "r:paranoid", note: "Fear of malice." },
            { label: "Feels different; odd beliefs; anxiety grows with suspicion", to: "r:schizotypal", note: "Oddness." },
            { label: "Too absorbed in work; uncomfortable with emotion", to: "r:ocpd", note: "Devotion to work." },
            { label: "Lifelong poor social reciprocity with stereotyped interests", to: "r:asd", note: "Autism." }
          ]
        },
        abandon: {
          q: "How does the person react to a threatened or actual loss of a relationship?",
          help: "All three fear separation; their reactions differ.",
          options: [
            { label: "Rage, emptiness, demands, self-harm", to: "r:borderline", note: "Borderline." },
            { label: "Appeasement and submission; urgently finds a replacement caregiver", to: "r:dependent", note: "Dependent." },
            { label: "Worry about harm coming to the attachment figure; no identity or impulsivity problems", to: "r:sepanx", note: "Separation anxiety." }
          ]
        },
        attention: {
          q: "What does the person want from others?",
          help: "The manual’s styles: histrionic coquettish, antisocial callous, borderline needy; narcissistic grandiose.",
          options: [
            { label: "Admiration for their superiority", to: "r:narcissistic", note: "Admiration." },
            { label: "Any attention, even as fragile or ill; theatrical and seductive", to: "r:histrionic", note: "Attention." },
            { label: "Care and nurturance, with self-destructiveness and emptiness", to: "r:borderline", note: "Nurturance." },
            { label: "Money, power, sex or other material gain, without remorse", to: "r:antisocial", note: "Gain." }
          ]
        },
        mood: {
          q: "What is the time course of the mood changes?",
          help: "Borderline affective shifts are reactive and last hours. Mood episodes last days to weeks and include neurovegetative change.",
          options: [
            { label: "Hours, triggered by interpersonal events, on a background of emptiness", to: "r:borderline", note: "Reactivity." },
            { label: "Distinct episodes of days with elevated mood and decreased need for sleep", to: "r:bipolar", note: "Episodes." },
            { label: "Two weeks or more of depressed mood or anhedonia with neurovegetative symptoms", to: "r:mdd", note: "Depressive episode." }
          ]
        },
        perfect: {
          q: "What form does the perfectionism take?",
          help: "Ask whether there are intrusive thoughts and rituals, and whether the person is self-critical.",
          options: [
            { label: "Intrusive obsessions and time-consuming compulsions", to: "r:ocd", note: "OCD." },
            { label: "A lifelong, self-critical style of rules, control and rigidity", to: "r:ocpd", note: "OCPD." },
            { label: "Believes they have already achieved perfection; standards for appearance and performance", to: "r:narcissistic", note: "Narcissistic." },
            { label: "Saving so extreme that rooms are unusable or a fire hazard", to: "r:hoarding", note: "Hoarding." }
          ]
        },
        suspicion: {
          q: "What is the suspiciousness like?",
          help: "Separate conviction, pervasiveness, oddness, transience and context.",
          options: [
            { label: "Fixed false beliefs held with delusional conviction", to: "r:delusional", note: "Delusion." },
            { label: "Pervasive, lifelong distrust without delusion", to: "r:paranoid", note: "Paranoid PD." },
            { label: "With magical thinking, ideas of reference or perceptual oddities", to: "r:schizotypal", note: "Schizotypal." },
            { label: "Transient, under stress, often after a perceived abandonment", to: "r:borderline", note: "Borderline." },
            { label: "Guardedness in response to discrimination, migration or unfamiliar systems", to: "r:culture", note: "Context." }
          ]
        }
      },
      results: {
        schizoid: { dx: "Schizoid personality disorder", line: "No desire for relationships; restricted emotional expression.", points: ["No cognitive-perceptual distortions or paranoid ideation."], link: L("s18-schizoid", "Schizoid PD"), dxId: "schizoid-pd" },
        avoidant: { dx: "Avoidant personality disorder", line: "Wants relationships but fears humiliation and rejection; feels inferior.", points: ["Often with social anxiety disorder."], link: L("s18-avoidant", "Avoidant PD"), dxId: "avoidant-pd" },
        paranoid: { dx: "Paranoid personality disorder", line: "Pervasive distrust and suspiciousness without delusion.", points: ["Add “(premorbid)” if it preceded schizophrenia."], link: L("s18-paranoid", "Paranoid PD"), dxId: "paranoid-pd" },
        schizotypal: { dx: "Schizotypal personality disorder", line: "Discomfort with closeness, distortions and eccentricity.", points: ["Enduring psychotic-like features less tied to mood than in borderline PD."], link: L("s18-schizotypal", "Schizotypal PD"), dxId: "schizotypal-pd" },
        ocpd: { dx: "Obsessive-compulsive personality disorder", line: "Pervasive perfectionism, rules and control; usually self-critical.", points: ["Has a capacity for intimacy, unlike schizoid PD.", "Diagnose OCD or hoarding disorder too if present."], link: L("s18-ocpd", "OCPD"), dxId: "ocpd" },
        asd: { label: "Consider", dx: "Autism spectrum disorder", line: "Social communication deficits with restricted, repetitive behaviors and interests from early childhood.", points: ["Mild autism and schizoid PD can be very hard to separate."], link: L("s18-schizoid", "Schizoid differential") },
        borderline: { dx: "Borderline personality disorder", line: "Reacts to abandonment with rage, emptiness and self-harm; manipulates for care; affect shifts over hours.", points: ["Both borderline PD and a mood disorder can be diagnosed when both are met."], link: L("s18-borderline-course", "Borderline differential"), dxId: "borderline-pd" },
        dependent: { dx: "Dependent personality disorder", line: "Reacts to loss with appeasement and urgently finds a replacement caregiver.", points: ["Relationships are clinging, not unstable."], link: L("s18-dependent", "Dependent PD"), dxId: "dependent-pd" },
        sepanx: { label: "Consider", dx: "Separation anxiety disorder", line: "Fear of separation and of harm to attachment figures, without the identity, impulsivity and relationship instability of borderline PD.", points: ["Can begin in adulthood."], link: { ch: "ch05", sec: "s5-sad-criteria", label: "Separation anxiety" }, dxId: "separation-anxiety" },
        narcissistic: { dx: "Narcissistic personality disorder", line: "Needs admiration; grandiose; believes they are already perfect.", points: ["Exclude hypomania or mania."], link: L("s18-narcissistic", "Narcissistic PD"), dxId: "narcissistic-pd" },
        histrionic: { dx: "Histrionic personality disorder", line: "Seeks any attention, theatrical and seductive; shallow emotion.", points: ["No self-destructiveness or emptiness (borderline)."], link: L("s18-histrionic", "Histrionic PD"), dxId: "histrionic-pd" },
        antisocial: { dx: "Antisocial personality disorder", line: "Manipulates for profit, power or gain; callous, without remorse.", points: ["Needs age ≥18 and conduct disorder before 15."], link: L("s18-antisocial", "Antisocial PD"), dxId: "antisocial-pd" },
        bipolar: { label: "Consider", dx: "A bipolar disorder", line: "Distinct episodes of days with elevated mood and decreased need for sleep.", points: ["Diagnose borderline PD too only if the long-term pattern exists outside episodes."], link: { ch: "ch03", sec: "s3-bp2-criteria", label: "Bipolar II disorder" }, dxId: "bipolar-ii" },
        mdd: { label: "Consider", dx: "A depressive episode", line: "Two weeks or more of depressed mood or anhedonia with neurovegetative symptoms.", points: ["Do not diagnose a personality disorder from the cross-section during the episode."], link: { ch: "ch04", sec: "s4-mdd-criteria", label: "Major depressive disorder" }, dxId: "mdd" },
        ocd: { label: "Consider", dx: "Obsessive-compulsive disorder", line: "True obsessions and compulsions; usually ego-dystonic.", points: ["Most with OCD do not have OCPD; diagnose both when both are met."], link: { ch: "ch06", sec: "s6-ocd-criteria", label: "OCD" }, dxId: "ocd" },
        hoarding: { label: "Consider", dx: "Hoarding disorder", line: "Persistent difficulty discarding with clutter that compromises living areas.", points: ["Diagnose both with OCPD when both are met."], link: { ch: "ch06", sec: "s6-hoard-criteria", label: "Hoarding disorder" }, dxId: "hoarding" },
        delusional: { label: "Consider", dx: "Delusional disorder, persecutory type", line: "Fixed persecutory delusions for at least 1 month.", points: ["Paranoid PD can be its premorbid antecedent."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
        culture: { label: "Not a disorder", dx: "Contextual mistrust", line: "Guardedness after discrimination, migration or unfamiliar systems should not be mistaken for paranoid traits.", points: ["Use informants familiar with the person’s background; avoid a cycle of mutual mistrust."], link: L("s18-paranoid", "Culture and paranoid PD") }
      }
    }
  ]);
})();
