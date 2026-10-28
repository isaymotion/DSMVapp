/*
 * Diagnostic helper for Chapter 25 (Section III, Conditions for Further Study), DSM-5-TR pp. 903–927.
 * "further-study": from a presentation that resembles one of the seven proposed criteria sets to the question that
 * matters in the clinic: is a Section II diagnosis met instead, is the proposed threshold reached, and what is actually
 * recorded (a Section II residual category or a Chapter 22 code). None of the seven is an official diagnosis (p. 903).
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "further-study",
    chapter: "ch25",
    title: "Conditions for further study: is a proposed set matched, and what is recorded?",
    summary: "Start from the presenting picture, rule out the Section II diagnosis next door (psychosis, bipolar II, caffeine withdrawal alone, gambling disorder, a genetic syndrome, an attempt that never started, a self-injury pattern that belongs to another disorder), test the proposed threshold, then record the Section II category or Chapter 22 code that the manual’s own examples support.",
    caution: "A teaching aid built from DSM-5-TR pp. 903–927. The proposed criteria sets are for research and are not intended for clinical use; only Section II is official (p. 903). The recording routes (F28, F31.89, F15.99, F99, F88; T14.91XA/XD, Z91.51, R45.88, Z91.52) are app guidance built on the manual’s Section II examples and Chapter 22; use the code set in force on the date of service. Suicide risk assessment and treatment are outside the DSM.",
    start: "entry",
    nodes: {
      entry: {
        q: "Which picture is in front of you?",
        help: "The seven proposed sets each sit beside a Section II diagnosis. Pick the family first; the next questions test the boundary with that neighbor, then the proposed threshold (pp. 903–927).",
        options: [
          { label: "Psychosis-like experiences with insight, new or worse this year", to: "aps-threshold", note: "Attenuated psychosis syndrome, pp. 903–907." },
          { label: "Depressive episodes plus short bursts of hypomanic symptoms", to: "sdh-four", note: "Short-duration hypomania, pp. 907–910." },
          { label: "Caffeine use the person cannot control or stop", to: "cud-gate", note: "Caffeine use disorder, pp. 910–913." },
          { label: "Gaming or Internet use that has taken over", to: "igd-type", note: "Internet gaming disorder, pp. 913–916." },
          { label: "A child with developmental problems and prenatal alcohol exposure", to: "nd-age", note: "ND-PAE, pp. 916–920." },
          { label: "A suicide attempt, or something like one", to: "sbd-initiated", note: "Suicidal behavior disorder, pp. 920–923." },
          { label: "Self-injury without a wish to die", to: "nssi-intent", note: "NSSI disorder, pp. 923–926." }
        ]
      },
      "aps-threshold": {
        q: "Has the person ever had a symptom of full psychotic severity: a fixed belief that doubt cannot touch, a hallucination accepted as real, or speech that stays disorganized without redirection?",
        help: "“Attenuated” means below the psychotic threshold: insight is reasonable, doubt can be elicited, skepticism about perceptions can be induced, and reorienting questions restore structure (p. 904). Criterion F excludes anyone who has ever met criteria for a psychotic disorder (p. 904).",
        options: [
          { label: "Yes, now or in the past", to: "r:aps-psychotic", note: "Chapter 2, not Section III." },
          { label: "No: symptoms are attenuated, and no psychotic disorder has ever been met", to: "aps-state", note: "Proceed." }
        ]
      },
      "aps-state": {
        q: "Did the attenuated symptoms begin or worsen within the past year, and have they been present at least weekly for the past month?",
        help: "Criteria B and C make this a state, not a trait: a lifelong pattern of odd beliefs and unusual perceptions that has not changed points to schizotypal personality disorder, which also needs a broader array of symptoms (p. 906).",
        options: [
          { label: "Yes: a change within the year, weekly for a month", to: "aps-cause", note: "B and C met." },
          { label: "No: stable since early adulthood", to: "r:aps-trait", note: "Consider schizotypal personality disorder." },
          { label: "No: present but less often than weekly, or not new or worse this year", to: "r:aps-sub", note: "Threshold not met." }
        ]
      },
      "aps-cause": {
        q: "Do the symptoms occur only during substance use, only during another mental disorder, or without distress or impairment?",
        help: "Attenuated symptoms confined to intoxication with cannabis, hallucinogens, phencyclidine, inhalants or stimulants, or to withdrawal from alcohol or sedatives, favor a substance-induced diagnosis; distortions that occur only inside depression, social anxiety, bipolar disorder or borderline personality disorder get no additional diagnosis; distortions without distress, impairment or need for care are the extreme of normal perceptual aberration (pp. 906–907). Trauma, persecution and discrimination can produce fears that are not paranoia (p. 906).",
        options: [
          { label: "Only during substance use", to: "r:aps-substance", note: "Substance-induced." },
          { label: "Only during another mental disorder", to: "r:aps-other", note: "No additional diagnosis." },
          { label: "No distress, no impairment, no need for care", to: "r:aps-normal", note: "Not a syndrome." },
          { label: "None of these: distressing, impairing, and not explained by anything else", to: "r:aps", note: "Matches the proposed set." }
        ]
      },
      "sdh-four": {
        q: "Has there ever been a hypomanic period lasting 4 days or more, or any manic episode?",
        help: "One syndromal hypomanic episode (4 days or more) with a lifetime MDE is bipolar II, permanently, whatever the length of later periods (pp. 909–910). An episode of any length with psychotic features or hospitalization is manic, which makes bipolar I (p. 910).",
        options: [
          { label: "Yes: a 4-day hypomania, with a lifetime MDE", to: "r:sdh-bipolar2", note: "Bipolar II disorder." },
          { label: "Yes: a manic episode (psychosis, hospitalization, or a week or more with marked impairment)", to: "r:sdh-bipolar1", note: "Bipolar I disorder." },
          { label: "No: never 4 days, never manic", to: "sdh-mde", note: "Proceed." }
        ]
      },
      "sdh-mde": {
        q: "Has the person had at least one lifetime major depressive episode, and at least two lifetime periods of 2–3 days that met the full hypomanic symptom count (3 symptoms, or 4 if only irritable) with an observable, uncharacteristic change?",
        help: "Both halves are needed: the lifetime MDE and at least two short periods (at least 2 but fewer than 4 consecutive days) at full symptom strength (pp. 907–909). Hypomanic features that occur at the same time as the depression are mixed features, not this set (p. 910).",
        options: [
          { label: "Yes: an MDE and two or more 2–3-day periods, at different times from the depression", to: "r:sdh", note: "Matches the proposed set." },
          { label: "An MDE, but only one short period, or periods with too few symptoms", to: "r:sdh-mdd", note: "MDD, or other specified." },
          { label: "Hypomanic symptoms only during the depressive episode", to: "r:sdh-mixed", note: "MDD with mixed features." },
          { label: "Depressive and hypomanic symptoms for 2 years without ever reaching an MDE", to: "r:sdh-cyclo", note: "Consider cyclothymic disorder." }
        ]
      },
      "cud-gate": {
        q: "Within 12 months, are all three gate criteria present: a persistent desire or failed efforts to cut down; continued use despite a physical or psychological problem the person knows caffeine likely causes or worsens; and withdrawal (the syndrome, or use to relieve or avoid it)?",
        help: "The proposed set requires the first three of nine criteria, not any three, to avoid overdiagnosing a habit that most of the population shares (pp. 910–911). Regular heavy use with tolerance and withdrawal is common and is not, by itself, a disorder (p. 913).",
        options: [
          { label: "Yes, all three, with clinically significant distress or impairment", to: "cud-anxiety", note: "Gate met." },
          { label: "No: only tolerance, craving, time spent or amount, without the gate", to: "r:cud-not", note: "Threshold not met." },
          { label: "The problem is an acute overdose picture, or a withdrawal syndrome after stopping", to: "r:cud-section2", note: "Chapter 16 diagnoses." }
        ]
      },
      "cud-anxiety": {
        q: "Could the anxiety, insomnia or palpitations be another stimulant, or an anxiety disorder that caffeine is mimicking?",
        help: "Other stimulant drugs or medications can mimic the picture; chronic heavy caffeine use can mimic generalized anxiety disorder and acute use can produce panic attacks (p. 913). Identify the substance and watch what happens to the anxiety when caffeine falls.",
        options: [
          { label: "No: the pattern is caffeine-specific and persists as described", to: "r:cud", note: "Matches the proposed set." },
          { label: "Another stimulant is the main substance", to: "r:cud-stimulant", note: "Stimulant use disorder." },
          { label: "The anxiety stands on its own once caffeine is accounted for", to: "r:cud-anx", note: "Chapter 5." }
        ]
      },
      "igd-type": {
        q: "What is the person doing online?",
        help: "Only nongambling Internet games count. Online gambling is gambling disorder; social media, pornography and work use are excluded and are not considered analogous (pp. 913–914, 916).",
        options: [
          { label: "Playing games, often with other players, with no money at stake", to: "igd-count", note: "Proceed." },
          { label: "Gambling online for money", to: "r:igd-gambling", note: "Gambling disorder, Chapter 16." },
          { label: "Social media, streaming, pornography or work-related use", to: "r:igd-other", note: "Not this set." }
        ]
      },
      "igd-count": {
        q: "Over 12 months, how many of the nine features are present: preoccupation, withdrawal (irritability, anxiety or sadness without physical signs), tolerance, failed control, loss of other interests, continued use despite psychosocial problems, deception about gaming, gaming to escape a negative mood, and a jeopardized relationship, job or educational opportunity?",
        help: "The conservative threshold is five or more of nine, with clinically significant impairment or distress; severity is rated by the degree of disruption of normal activities (pp. 913–915). Screen for depression, ADHD and OCD, the associated diagnoses (p. 916).",
        options: [
          { label: "Five or more, with impairment or distress", to: "r:igd", note: "Matches the proposed set." },
          { label: "Fewer than five, or heavy play without impairment", to: "r:igd-sub", note: "Threshold not met." }
        ]
      },
      "nd-age": {
        q: "How old is the child, and is there documented more-than-minimal prenatal alcohol exposure?",
        help: "More than minimal exposure means more than 13 drinks in a month of pregnancy or more than 2 drinks on any one occasion, confirmed by maternal report, records or clinical observation, including before the pregnancy was recognized (pp. 916, 918). A fetal alcohol syndrome diagnosis can serve as evidence of exposure. Because neurocognitive assessment is unreliable in the very young, defer the diagnosis at age 3 and under (p. 918).",
        options: [
          { label: "Over 3 years old, exposure documented", to: "nd-domains", note: "Proceed." },
          { label: "3 years old or younger", to: "r:nd-defer", note: "Defer and follow." },
          { label: "Exposure cannot be established as more than minimal", to: "r:nd-noexposure", note: "Criterion A not met." }
        ]
      },
      "nd-domains": {
        q: "Are all three impairment domains met with childhood onset: neurocognitive (1 of 5: IQ 70 or below, executive, learning, memory, visual-spatial), self-regulation (1 of 3: mood or behavior regulation, attention, impulse control), and adaptive (2 of 4, one of which is communication or social communication and interaction)?",
        help: "Fetal alcohol syndrome facial features are not required (p. 917). IQ 70 or below is only one of five neurocognitive options, so a child with average IQ can qualify through executive or memory deficits (p. 916). Two adaptive deficits confined to daily living and motor skills do not satisfy D (p. 917).",
        options: [
          { label: "Yes: B, C and D met, onset in childhood, with distress or impairment", to: "nd-exclude", note: "Proceed to exclusions." },
          { label: "No: one domain is short, or the adaptive rule fails", to: "r:nd-sub", note: "Threshold not met." }
        ]
      },
      "nd-exclude": {
        q: "Is there a better explanation: postnatal substance effects, a medical condition such as TBI, delirium or dementia, another teratogen (fetal hydantoin syndrome, maternal phenylketonuria), a genetic condition (Williams, Down, Cornelia de Lange syndromes), or environmental neglect?",
        help: "Criterion G and the differential section list these; a careful prenatal exposure history and, where physical features suggest it, a clinical geneticist help separate them (pp. 917, 919–920). ADHD is the commonest comorbidity and does not exclude ND-PAE (p. 920).",
        options: [
          { label: "No better explanation", to: "r:nd", note: "Matches the proposed set." },
          { label: "Yes: another cause explains the picture", to: "r:nd-other", note: "Diagnose that condition." }
        ]
      },
      "sbd-initiated": {
        q: "Did the person actually start a behavior that applied the method, expecting at the time that it would lead to death?",
        help: "A suicide attempt is a self-initiated sequence of behaviors expected, at the time of initiation, to lead to death; initiation is when a behavior applying the method took place (p. 920). An attempt stopped by the person or by someone else after it started still counts; being dissuaded or changing one’s mind before starting does not (p. 921). Injury is not required, and poor planning, low lethality or ambivalence do not argue against the diagnosis (p. 921).",
        options: [
          { label: "Yes: initiated, whether completed, stopped or interrupted", to: "sbd-exclusions", note: "An attempt." },
          { label: "No: ideation, a plan, or preparation without initiation; or dissuaded before starting", to: "r:sbd-ideation", note: "Not an attempt." },
          { label: "The injury was done for relief, not with a wish to die", to: "nssi-intent", note: "Go to the NSSI branch." }
        ]
      },
      "sbd-exclusions": {
        q: "Was the act begun during delirium or confusion, or undertaken solely for a political or religious objective?",
        help: "Criteria D and E exclude these. Deliberate intoxication beforehand to reduce anticipatory anxiety does not exclude the diagnosis (p. 921).",
        options: [
          { label: "No", to: "sbd-timing", note: "Proceed." },
          { label: "Yes: during delirium or confusion", to: "r:sbd-delirium", note: "Excluded; treat the delirium." },
          { label: "Yes: solely political or religious", to: "r:sbd-political", note: "Excluded." }
        ]
      },
      "sbd-timing": {
        q: "When was the most recent attempt?",
        help: "The proposed set needs an attempt within the last 24 months: current if 12 months or less, in early remission if 12–24 months (p. 920). Older attempts are recorded as a history (Z91.51) (p. 920).",
        options: [
          { label: "Within the last 12 months", to: "r:sbd-current", note: "Current." },
          { label: "12 to 24 months ago", to: "r:sbd-remission", note: "Early remission." },
          { label: "More than 24 months ago", to: "r:sbd-history", note: "History only." }
        ]
      },
      "nssi-intent": {
        q: "Was the self-injury done without suicidal intent, with the expectation of only minor or moderate harm, as the person states or as repeated nonlethal behavior implies?",
        help: "NSSI disorder is defined by the absence of suicidal intent, stated or inferred (p. 923). The deciding feature against suicidal behavior is the stated goal: relief versus a wish to die (p. 926). People with NSSI can and do attempt suicide, so assess suicide risk either way (p. 925).",
        options: [
          { label: "Yes: no wish to die; done for relief, to resolve a difficulty, or to feel something", to: "nssi-exclude", note: "Proceed." },
          { label: "No: there was at least some intent to die", to: "sbd-initiated", note: "Go to the suicidal behavior branch." }
        ]
      },
      "nssi-exclude": {
        q: "Is the behavior socially sanctioned, confined to one of the disorders that takes precedence, or limited to psychosis, delirium, intoxication or withdrawal?",
        help: "Not diagnosed when it is a widely accepted cultural practice or expresses group belonging (p. 925); injury confined to hair pulling is trichotillomania, to skin picking is excoriation disorder, and stereotypies in a neurodevelopmental disorder are stereotypic movement disorder (p. 926); scab picking and nail biting do not count (p. 923).",
        options: [
          { label: "No: none of these apply", to: "nssi-count", note: "Proceed." },
          { label: "Yes: a cultural ritual or group practice", to: "r:nssi-cultural", note: "Not diagnosed." },
          { label: "Yes: confined to hair pulling, skin picking or stereotypies", to: "r:nssi-other", note: "The Section II diagnosis." },
          { label: "Yes: only during psychosis, delirium, intoxication or withdrawal", to: "r:nssi-state", note: "Diagnose that condition." }
        ]
      },
      "nssi-count": {
        q: "In the last year, on how many days did the self-injury occur, and are the function (relief, resolving a difficulty, or a positive state), the preceding distress or preoccupation, and distress or interference present?",
        help: "Five or more days in the last year, counted as days rather than acts; at least one of the three expectations (B); at least one of preceding negative feelings, preoccupation or frequent thinking (C); and clinically significant distress or interference (E) (p. 923).",
        options: [
          { label: "Five or more days with B, C and E", to: "r:nssi", note: "Matches the proposed set." },
          { label: "Fewer than 5 days, or an isolated episode", to: "r:nssi-sub", note: "Record the Chapter 22 code only." }
        ]
      }
    },
    results: {
      "aps": { label: "Matches the proposed set", dx: "Attenuated psychosis syndrome (research criteria)", line: "At least one attenuated symptom, weekly for the past month, new or worse within the year, distressing and impairing, not explained by another disorder, substance or medical condition, and no psychotic disorder ever (pp. 903–904). Not an official diagnosis (p. 903).", points: ["Record as other specified schizophrenia spectrum and other psychotic disorder, F28, with “attenuated psychosis syndrome” as the reason, which Chapter 2 lists as an example (app guidance).", "Up to 22% convert within 3 years and 34.9% within 10 years; about a third remit and a third stay disabled (p. 905).", "Screen for the common comorbid depression (41%) and anxiety (15%) (p. 907). Treatment is outside the DSM."], link: { ch: "ch25", sec: "s25-aps-criteria", label: "Attenuated psychosis syndrome: the proposed criteria" }, dxId: "attenuated-psychosis-syndrome" },
      "aps-psychotic": { label: "Not attenuated", dx: "A psychotic disorder, Chapter 2", line: "A symptom of full psychotic severity now, or a psychotic disorder at any time in the past, excludes the syndrome (Criterion F, p. 904).", points: ["Use the psychosis helper to place the episode by duration and content.", "A past brief psychotic disorder closes the door to attenuated psychosis syndrome permanently (p. 904)."], link: { ch: "ch25", sec: "s25-aps-features", label: "Attenuated psychosis syndrome: features, course and differential" }, dxId: "brief-psychotic-disorder" },
      "aps-trait": { label: "Trait, not state", dx: "Consider schizotypal personality disorder", line: "A stable, long-standing pattern lacks the state quality of Criterion C and schizotypal personality disorder needs a broader array of symptoms (p. 906).", points: ["Ask whether anything changed within the past year; a recent worsening on a trait baseline can be both (app guidance).", "Schizotypal personality disorder is coded F21 in Chapter 2 and described in Chapter 18."], link: { ch: "ch25", sec: "s25-aps-features", label: "Attenuated psychosis syndrome: features, course and differential" }, dxId: "schizotypal-pd" },
      "aps-sub": { label: "Threshold not met", dx: "Attenuated symptoms below the proposed threshold", line: "Criterion A symptoms that are not weekly, or that neither began nor worsened in the past year, do not meet the set; in a Swiss sample another 2.3% of people had such symptoms (p. 905).", points: ["Describe the symptoms, review the distress and impairment, and reassess over time.", "Up to 7% of the general population acknowledge attenuated delusions or hallucinations (p. 905)."], link: { ch: "ch25", sec: "s25-aps-criteria", label: "Attenuated psychosis syndrome: the proposed criteria" } },
      "aps-substance": { label: "Substance-related", dx: "Consider substance/medication-induced psychotic disorder", line: "Attenuated symptoms confined to intoxication or withdrawal are not attenuated psychosis syndrome; the induced diagnosis may be preferred (p. 907).", points: ["Cannabis, hallucinogens, phencyclidine, inhalants and stimulants in intoxication; alcohol and sedatives in withdrawal (p. 907).", "Reassess after a period of abstinence (app guidance)."], link: { ch: "ch25", sec: "s25-aps-features", label: "Attenuated psychosis syndrome: features, course and differential" }, dxId: "substance-induced-psychotic" },
      "aps-other": { label: "Explained by another disorder", dx: "No additional attenuated psychosis diagnosis", line: "Reality distortions that occur only during depression, social anxiety, bipolar disorder or borderline personality disorder are part of that disorder (pp. 906–907).", points: ["Treat the primary disorder and watch whether the distortions outlast it (app guidance)."], link: { ch: "ch25", sec: "s25-aps-features", label: "Attenuated psychosis syndrome: features, course and differential" } },
      "aps-normal": { label: "Not a syndrome", dx: "The extreme end of normal perceptual aberration and magical thinking", line: "Strongly consider this when the distortions carry no distress, no impairment and no need for care (p. 907); mild transient adolescent symptoms proportionate to stress also do not qualify (p. 907).", points: ["Weigh cultural and religious context before calling an experience odd (p. 906).", "The distress and impairment criterion is the safeguard against overdiagnosis (p. 906)."], link: { ch: "ch25", sec: "s25-aps-features", label: "Attenuated psychosis syndrome: features, course and differential" } },
      "sdh": { label: "Matches the proposed set", dx: "Depressive episodes with short-duration hypomania (research criteria)", line: "A lifetime major depressive episode plus at least two lifetime periods of 2–3 days meeting the hypomanic symptom criteria (pp. 907–909). Not an official diagnosis (p. 903).", points: ["Record as other specified bipolar and related disorder, F31.89, with the reason “short-duration hypomanic episodes (2–3 days) and major depressive episodes”, Chapter 3’s first example (app guidance).", "These people resemble bipolar patients: more family history of bipolar disorder (3–4 times MDD), earlier onset, more recurrences, more suicide attempts (p. 909).", "A single 4-day hypomania in the future changes the diagnosis to bipolar II permanently (p. 910)."], link: { ch: "ch25", sec: "s25-sdh-criteria", label: "Short-duration hypomania: the proposed criteria" }, dxId: "short-duration-hypomania" },
      "sdh-bipolar2": { label: "Section II diagnosis", dx: "Bipolar II disorder", line: "One syndromal hypomanic episode of 4 days or more with a lifetime MDE is bipolar II, and it stays bipolar II whatever the duration of later hypomanic periods (pp. 909–910).", points: ["Code F31.81 with the Chapter 3 specifiers."], link: { ch: "ch25", sec: "s25-sdh-features", label: "Short-duration hypomania: features and differential" }, dxId: "bipolar-ii" },
      "sdh-bipolar1": { label: "Section II diagnosis", dx: "Bipolar I disorder", line: "A manic episode (1 week or more with marked impairment, or any length with psychosis or hospitalization) makes bipolar I (p. 910).", points: ["Use the bipolar helper for the episode specifiers and code."], link: { ch: "ch25", sec: "s25-sdh-features", label: "Short-duration hypomania: features and differential" }, dxId: "bipolar-i" },
      "sdh-mdd": { label: "Threshold not met", dx: "Major depressive disorder (or other specified depressive disorder)", line: "A lifetime MDE with only one short hypomanic period, or periods with too few symptoms, does not reach the set; the depressive diagnosis stands (p. 910).", points: ["Subthreshold hypomania defined more loosely (shorter than 4 days or fewer than three symptoms) occurs in up to 6.7% of the U.S. population with MDD (p. 909).", "Keep asking about short high periods at each visit; the second one changes the picture (app guidance)."], link: { ch: "ch25", sec: "s25-sdh-features", label: "Short-duration hypomania: features and differential" }, dxId: "mdd" },
      "sdh-mixed": { label: "Concurrent, not sequential", dx: "Major depressive disorder with mixed features", line: "Hypomanic features inside the depressive episode are mixed features; this set needs subsyndromal hypomania and full depression at different times (p. 910).", points: ["Code the depressive disorder with the mixed features specifier (Chapter 4)."], link: { ch: "ch25", sec: "s25-sdh-features", label: "Short-duration hypomania: features and differential" }, dxId: "mdd" },
      "sdh-cyclo": { label: "No MDE", dx: "Consider cyclothymic disorder", line: "Two years of depressive and hypomanic symptoms without an MDE points to cyclothymic disorder; a lifetime MDE would exclude it (p. 910).", points: ["Check the Chapter 3 rules: 2 years (1 in youth), never symptom-free for more than 2 months."], link: { ch: "ch25", sec: "s25-sdh-features", label: "Short-duration hypomania: features and differential" }, dxId: "cyclothymic" },
      "cud": { label: "Matches the proposed set", dx: "Caffeine use disorder (research criteria)", line: "The first three criteria (failed cut-down, use despite harm, withdrawal) within 12 months with clinically significant distress or impairment, usually with more of the remaining six (pp. 910–911). Not an official diagnosis (p. 903).", points: ["Section II has no use disorder for caffeine: record caffeine withdrawal (F15.93) when the syndrome is present, caffeine intoxication (F15.920) when that is the picture, and otherwise unspecified caffeine-related disorder, F15.99 (app guidance).", "Estimated in about 8% of U.S. caffeine consumers and 3.9% of adolescents in one clinic sample (p. 912).", "Comorbid tobacco, cannabis and alcohol problems are common (p. 913)."], link: { ch: "ch25", sec: "s25-cud-criteria", label: "Caffeine use disorder: the proposed criteria" }, dxId: "caffeine-use-disorder" },
      "cud-not": { label: "Threshold not met", dx: "Heavy caffeine use without the disorder", line: "Tolerance, craving, time spent and larger amounts cannot replace the three gate criteria; regular heavy use with tolerance and withdrawal is common and is not by itself a disorder (pp. 911, 913).", points: ["Advise on gradual reduction if the person wants it; graded reduction avoids withdrawal (outside the DSM)."], link: { ch: "ch25", sec: "s25-cud-criteria", label: "Caffeine use disorder: the proposed criteria" } },
      "cud-section2": { label: "Section II diagnoses", dx: "Caffeine intoxication or caffeine withdrawal", line: "The acute syndromes are official Chapter 16 diagnoses with codes: intoxication F15.920, withdrawal F15.93.", points: ["Withdrawal needs abrupt cessation or reduction after prolonged daily use and three or more of headache, fatigue, dysphoria, poor concentration and flu-like symptoms (Chapter 16).", "Withdrawal is also the third gate criterion of the proposed use disorder (p. 910)."], link: { ch: "ch25", sec: "s25-cud-features", label: "Caffeine use disorder: features, numbers and differential" }, dxId: "caffeine-withdrawal" },
      "cud-stimulant": { label: "Another substance", dx: "Consider stimulant use disorder", line: "Problems from other stimulant drugs or medications can approximate the picture (p. 913).", points: ["Identify the substance and apply the 2-of-11 Chapter 16 criteria."], link: { ch: "ch25", sec: "s25-cud-features", label: "Caffeine use disorder: features, numbers and differential" }, dxId: "stimulant-use" },
      "cud-anx": { label: "An anxiety disorder", dx: "Consider generalized anxiety disorder or panic disorder", line: "Chronic heavy caffeine use can mimic GAD and acute consumption can produce panic attacks; when the anxiety stands on its own after caffeine is accounted for, diagnose the anxiety disorder (p. 913).", points: ["Caffeine use disorder and anxiety disorders also co-occur (p. 913)."], link: { ch: "ch25", sec: "s25-cud-features", label: "Caffeine use disorder: features, numbers and differential" }, dxId: "gad" },
      "igd": { label: "Matches the proposed set", dx: "Internet gaming disorder (research criteria)", line: "Five or more of nine features in 12 months with impairment or distress; severity by the degree of disruption (pp. 913–915). Not an official diagnosis (p. 903).", points: ["No Section II category names it; the manual notes its inclusion in ICD-11 (p. 914). If a code is needed, other specified mental disorder (F99) is the honest residual; many clinicians describe the problem in the formulation instead (app guidance).", "Typical pattern: 8–10 hours or more a day, at least 30 hours a week, anger when prevented, missed food and sleep (p. 915).", "Screen for depression, ADHD and OCD, and for suicidal thoughts, which problematic Internet use is linked to, possibly through sleep (p. 916)."], link: { ch: "ch25", sec: "s25-igd-criteria", label: "Internet gaming disorder: the proposed criteria" }, dxId: "internet-gaming-disorder" },
      "igd-gambling": { label: "Section II diagnosis", dx: "Gambling disorder", line: "Internet gambling is excluded from the gaming set and belongs to gambling disorder, the one behavioral addiction in Section II (pp. 913–914, 916).", points: ["Apply the Chapter 16 gambling criteria (4 of 9 in 12 months) and code F63.0."], link: { ch: "ch25", sec: "s25-igd-features", label: "Internet gaming disorder: features, numbers and differential" }, dxId: "gambling" },
      "igd-other": { label: "Not this set", dx: "Other excessive Internet use", line: "Social media, pornography and work-related use are not considered analogous to Internet gaming disorder, and research on them would need its own definitions (pp. 914, 916).", points: ["Look for the disorder that drives the behavior (depression, anxiety, ADHD, a paraphilic or compulsive sexual pattern) and treat that (app guidance)."], link: { ch: "ch25", sec: "s25-igd-features", label: "Internet gaming disorder: features, numbers and differential" } },
      "igd-sub": { label: "Threshold not met", dx: "Heavy gaming below the proposed threshold", line: "Fewer than five features, or heavy play without impairment or distress, does not meet the conservative definition the manual asks for (p. 915).", points: ["Reassess the nine features and functioning over time; adolescent boys are the highest-risk group (p. 915)."], link: { ch: "ch25", sec: "s25-igd-criteria", label: "Internet gaming disorder: the proposed criteria" } },
      "nd": { label: "Matches the proposed set", dx: "Neurobehavioral disorder associated with prenatal alcohol exposure (research criteria)", line: "More than minimal prenatal exposure, impairment in the neurocognitive, self-regulation and adaptive domains with childhood onset, not better explained (pp. 916–917). Not an official diagnosis (p. 903).", points: ["Record as other specified neurodevelopmental disorder, F88, with ND-PAE as the reason, the example Chapter 1 gives (app guidance).", "Fetal alcohol syndrome features are not required (p. 917); ADHD is the commonest comorbidity but responds differently to medication (p. 920).", "Suicide risk rises in late adolescence; mental health problems affect more than 90% (pp. 919–920)."], link: { ch: "ch25", sec: "s25-ndpae-criteria", label: "ND-PAE: the proposed criteria" }, dxId: "nd-pae" },
      "nd-defer": { label: "Too young to decide", dx: "Defer the diagnosis", line: "Accurate neurocognitive assessment is difficult in very young children, so it is appropriate to defer in children 3 years and younger (p. 918).", points: ["About half of exposed children show marked delay in the first 3 years; others show nothing until school age, when the diagnosis is most likely (pp. 918–919).", "Document the exposure now and arrange developmental follow-up (app guidance)."], link: { ch: "ch25", sec: "s25-ndpae-criteria", label: "ND-PAE: the proposed criteria" } },
      "nd-noexposure": { label: "Criterion A not met", dx: "Neurodevelopmental problems without established exposure", line: "Without documented more-than-minimal exposure (more than 13 drinks in a month or more than 2 on an occasion) the set cannot be applied (pp. 916, 918).", points: ["Diagnose the Chapter 1 disorder that is met (IDD, ADHD, specific learning disorder, communication disorder) and keep the exposure question open (app guidance)."], link: { ch: "ch25", sec: "s25-ndpae-criteria", label: "ND-PAE: the proposed criteria" }, dxId: "other-specified-nd" },
      "nd-sub": { label: "Threshold not met", dx: "Domains incomplete", line: "All three domains are required: neurocognitive 1 of 5, self-regulation 1 of 3, adaptive 2 of 4 with one being communication or social communication (pp. 916–917).", points: ["Deficits often become clearer in the school years as demands rise; reassess (p. 919).", "Diagnose whatever Chapter 1 disorder is met in the meantime (app guidance)."], link: { ch: "ch25", sec: "s25-ndpae-criteria", label: "ND-PAE: the proposed criteria" } },
      "nd-other": { label: "Better explained", dx: "Another cause of the neurodevelopmental picture", line: "Postnatal substances, TBI, delirium or dementia, another teratogen, a genetic syndrome or environmental neglect explains the picture better (Criterion G, pp. 917, 919–920).", points: ["A clinical geneticist may be needed to separate Williams, Down and Cornelia de Lange syndromes and fetal hydantoin syndrome from alcohol effects (p. 920)."], link: { ch: "ch25", sec: "s25-ndpae-features", label: "ND-PAE: features, numbers and differential" } },
      "sbd-current": { label: "Matches the proposed set: current", dx: "Suicidal behavior disorder, current (research criteria)", line: "A suicide attempt within the last 12 months, not NSSI, not ideation or preparation, not in delirium, not solely political or religious (p. 920). Not an official diagnosis (p. 903).", points: ["Record the Chapter 22 code: T14.91XA for the initial encounter, T14.91XD for subsequent encounters (the manual prints T14.91A/D; the APA corrected the placeholder), with any Section II diagnosis that is met (pp. 920–921; app guidance).", "About 25%–30% of attempters attempt again; recent discharge, agitation, planning to avoid rescue and stopping lithium or clozapine are risk markers (p. 921).", "Risk assessment, means safety and safety planning are outside the DSM; see the library page."], link: { ch: "ch25", sec: "s25-sbd-criteria", label: "Suicidal behavior disorder: the proposed criteria" }, dxId: "suicidal-behavior-disorder" },
      "sbd-remission": { label: "Matches the proposed set: early remission", dx: "Suicidal behavior disorder, in early remission (research criteria)", line: "The last attempt was 12–24 months ago (pp. 920–921). Not an official diagnosis (p. 903).", points: ["Record Z91.51, personal history of suicidal behavior, with the current diagnosis (app guidance).", "Risk does not end at 12 months; keep the history in every formulation (app guidance)."], link: { ch: "ch25", sec: "s25-sbd-criteria", label: "Suicidal behavior disorder: the proposed criteria" }, dxId: "suicidal-behavior-disorder" },
      "sbd-history": { label: "Outside the 24-month window", dx: "History of suicidal behavior", line: "An attempt more than 24 months ago does not meet the proposed set; it is recorded as a history with Z91.51 (p. 920).", points: ["A past attempt remains one of the strongest risk factors; document it (app guidance)."], link: { ch: "ch25", sec: "s25-sbd-features", label: "Suicidal behavior disorder: features, risk and comorbidity" }, dxId: "suicidal-behavior" },
      "sbd-ideation": { label: "Not an attempt", dx: "Suicidal ideation, plan or preparation", line: "The set is not applied to ideation or preparatory acts, nor to a person dissuaded or changing their mind before initiating the behavior (pp. 920–921).", points: ["No T code; document the ideation and plan, assess risk and act on it (outside the DSM).", "If the behavior had started and was then stopped or interrupted, it is an attempt: go back one step (p. 921)."], link: { ch: "ch25", sec: "s25-sbd-criteria", label: "Suicidal behavior disorder: the proposed criteria" } },
      "sbd-delirium": { label: "Excluded", dx: "An act begun during delirium or confusion", line: "Criterion D excludes acts initiated in a state of delirium or confusion (p. 920); deliberate intoxication beforehand to steady the nerves does not (p. 921).", points: ["Diagnose and treat the delirium (Chapter 17) and reassess intent once the person is clear (app guidance)."], link: { ch: "ch25", sec: "s25-sbd-criteria", label: "Suicidal behavior disorder: the proposed criteria" }, dxId: "delirium" },
      "sbd-political": { label: "Excluded", dx: "An act undertaken solely for a political or religious objective", line: "Criterion E excludes acts undertaken solely for a political or religious objective (p. 920).", points: ["Any mental disorder present is still diagnosed in its own right (app guidance)."], link: { ch: "ch25", sec: "s25-sbd-criteria", label: "Suicidal behavior disorder: the proposed criteria" } },
      "nssi": { label: "Matches the proposed set", dx: "Nonsuicidal self-injury disorder (research criteria)", line: "Self-injury on 5 or more days in the last year without suicidal intent, for relief, to resolve a difficulty or to feel something, with preceding distress or preoccupation, not sanctioned, impairing and not better explained (p. 923). Not an official diagnosis (p. 903).", points: ["Record the Chapter 22 code R45.88 (current), or Z91.52 for a history, with any Section II diagnosis met (pp. 923–924; app guidance).", "Assess suicide risk and get third-party information: self-injury precedes attempts by about 1–2 years, and multiple methods, high frequency, early onset and relief or self-punishment functions predict attempts (p. 925).", "Do not assume borderline personality disorder; many do not meet its criteria (p. 925)."], link: { ch: "ch25", sec: "s25-nssi-criteria", label: "NSSI disorder: the proposed criteria" }, dxId: "nssi-disorder" },
      "nssi-sub": { label: "Threshold not met", dx: "Nonsuicidal self-injury below the proposed threshold", line: "Fewer than 5 days in the last year, or an isolated or experimental episode, does not meet the set; children and adolescents may try the behavior, find it painful rather than relieving, and stop (pp. 923–924).", points: ["Record R45.88 when self-injury is a focus of the visit, or Z91.52 for a history (Chapter 22; app guidance).", "Still assess suicide risk (p. 925)."], link: { ch: "ch25", sec: "s25-nssi-criteria", label: "NSSI disorder: the proposed criteria" }, dxId: "nssi" },
      "nssi-cultural": { label: "Not diagnosed", dx: "A sanctioned or group practice", line: "Self-injury that is a widely accepted cultural practice, even among a minority (collective self-flagellation at religious festivals), or that expresses group belonging rather than distress, is not NSSI disorder (p. 925); piercing, tattooing and rituals are excluded by Criterion D (p. 923).", points: ["Ask about the meaning of the act before applying the criteria (p. 925)."], link: { ch: "ch25", sec: "s25-nssi-features", label: "NSSI disorder: features, course and differential" } },
      "nssi-other": { label: "A Section II diagnosis takes precedence", dx: "Trichotillomania, excoriation disorder or stereotypic movement disorder", line: "Injury confined to hair pulling is trichotillomania; confined to skin picking, excoriation disorder; repetitive driven stereotypies that injure, often with a medical, genetic or neurodevelopmental condition, are stereotypic movement disorder (p. 926).", points: ["These are coded Section II diagnoses (F63.3, F42.4, F98.4); NSSI disorder is not diagnosed alongside them when the injury is confined to that behavior (p. 926)."], link: { ch: "ch25", sec: "s25-nssi-features", label: "NSSI disorder: features, course and differential" }, dxId: "excoriation" },
      "nssi-state": { label: "Explained by a state", dx: "Self-injury only during psychosis, delirium, intoxication or withdrawal", line: "Criterion F excludes behavior that occurs exclusively during these states (p. 923).", points: ["Diagnose and treat the psychotic disorder, delirium or substance state; reassess the self-injury once it has cleared (app guidance)."], link: { ch: "ch25", sec: "s25-nssi-criteria", label: "NSSI disorder: the proposed criteria" } }
    }
  }
]);
