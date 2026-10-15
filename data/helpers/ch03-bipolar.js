/*
 * Diagnostic helpers for Chapter 3 (Bipolar and Related Disorders), DSM-5-TR pp. 139–176.
 * "episode": classify a period of elevated mood (manic, hypomanic, subthreshold).
 * "bipolar": choose among bipolar I, bipolar II, cyclothymic, substance/medical, other specified and unspecified.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "episode",
    chapter: "ch03",
    title: "Manic, hypomanic or neither?",
    summary: "Classify a period of elevated or irritable mood: check mood and energy, count the B symptoms, then apply the duration, impairment, hospitalization and psychosis rules that separate a manic from a hypomanic episode.",
    caution: "A teaching aid built from DSM-5-TR pp. 140–141. Always confirm with collateral history: people often do not recognize or report their own hypomania.",
    start: "aenergy",
    nodes: {
      aenergy: {
        q: "Was there a distinct period of abnormally and persistently elevated, expansive or irritable mood AND abnormally increased activity or energy?",
        help: "Both are required for Criterion A. Mood change alone, or energy change alone, is not enough.",
        options: [
          { label: "Yes: both mood and energy changed, most of the day, nearly every day", to: "cause", note: "Criterion A mood and energy change is present." },
          { label: "Mood changed but energy did not (or vice versa)", to: "r:notA", note: "Only one of mood or energy changed." }
        ]
      },
      cause: {
        q: "Could a substance, medication or medical condition be causing it?",
        help: "Drugs of abuse (stimulants, PCP), medications (steroids, L-dopa, antidepressants, stimulants) and medical conditions (Cushing’s, MS, stroke, TBI) do not count, except a full syndrome that persists beyond the effect of an antidepressant, ECT or light therapy.",
        options: [
          { label: "No", to: "mood", note: "No substance, medication or medical cause." },
          { label: "Started during antidepressant, ECT or light treatment, and a full syndrome persists beyond the treatment’s effect", to: "mood", note: "Treatment-emergent, but the full syndrome persists beyond the treatment’s physiological effect, so it counts." },
          { label: "Only one or two symptoms (edginess, irritability, agitation) after starting an antidepressant", to: "r:sideeffect", note: "One or two nonspecific symptoms after an antidepressant." },
          { label: "Yes: a substance, medication or medical condition explains it", to: "r:induced", note: "A substance, medication or medical condition explains the elevated mood." }
        ]
      },
      mood: {
        q: "Is the mood elevated or expansive, or only irritable?",
        help: "If mood is only irritable, four (not three) Criterion B symptoms are needed.",
        options: [
          { label: "Elevated or expansive (with or without irritability)", to: "b3", note: "Mood is elevated or expansive, so three B symptoms are needed." },
          { label: "Only irritable", to: "b4", note: "Mood is only irritable, so four B symptoms are needed." }
        ]
      },
      b3: {
        q: "How many Criterion B symptoms are present to a significant degree, as a clear change?",
        help: "Grandiosity; decreased need for sleep; talkativeness or pressured speech; flight of ideas or racing thoughts; distractibility; increased goal-directed activity or agitation; risky activities.",
        options: [
          { label: "Three or more", to: "psych", note: "At least three B symptoms." },
          { label: "One or two", to: "r:sub", note: "Too few B symptoms for an episode." }
        ]
      },
      b4: {
        q: "How many Criterion B symptoms are present to a significant degree, as a clear change?",
        help: "With only irritable mood, four are needed. Count carefully: irritability itself is Criterion A, not B.",
        options: [
          { label: "Four or more", to: "psych", note: "At least four B symptoms with irritable mood." },
          { label: "Three or fewer", to: "r:sub", note: "Too few B symptoms for irritable mood." }
        ]
      },
      psych: {
        q: "Were there psychotic features, or was hospitalization needed to prevent harm?",
        help: "Either one makes the episode manic, whatever its duration.",
        options: [
          { label: "Yes", to: "r:manic", note: "Psychotic features or hospitalization make the episode manic, whatever its length." },
          { label: "No", to: "impair", note: "No psychosis and no hospitalization." }
        ]
      },
      impair: {
        q: "Did it cause marked impairment in social or occupational functioning?",
        help: "Examples: financial ruin, job loss, school failure, divorce.",
        options: [
          { label: "Yes", to: "dur7", note: "Marked impairment is present." },
          { label: "No, but an unequivocal change in functioning that others noticed", to: "dur4", note: "A clear change in functioning, observable by others, without marked impairment." },
          { label: "No change others could see", to: "r:notobserved", note: "No change observable by others." }
        ]
      },
      dur7: {
        q: "How long did it last?",
        help: "A manic episode needs at least 1 week (any duration if hospitalized).",
        options: [
          { label: "At least 1 week", to: "r:manic", note: "At least 1 week with marked impairment." },
          { label: "Less than 1 week (no hospitalization)", to: "r:shortmanic", note: "Marked impairment, but under 1 week and no hospitalization." }
        ]
      },
      dur4: {
        q: "How long did it last?",
        help: "A hypomanic episode needs at least 4 consecutive days. Two to three days with full symptoms is short-duration hypomania.",
        options: [
          { label: "At least 4 consecutive days", to: "r:hypomanic", note: "At least 4 consecutive days." },
          { label: "2–3 days", to: "r:short", note: "Only 2–3 days." },
          { label: "Less than 2 days", to: "r:sub", note: "Under 2 days." }
        ]
      }
    },
    results: {
      manic: { dx: "Manic episode", line: "Criteria A–D met: this establishes bipolar I disorder (unless the mania is part of schizoaffective disorder or superimposed on a psychotic disorder).", points: ["One lifetime manic episode is enough for **bipolar I**; no depression is required.", "Add severity or **with psychotic features** to the code; consider **mixed features** if ≥3 depressive symptoms are present on most days.", "More than **90%** of people with one manic episode have further episodes."], link: { ch: "ch03", sec: "s3-manic", label: "The manic episode" }, also: { href: "#/helpers/bipolar", label: "Which bipolar disorder?" }, dxId: "bipolar-i" },
      hypomanic: { dx: "Hypomanic episode", line: "Criteria A–F met. With at least one major depressive episode and never mania, this is bipolar II.", points: ["Hypomania alone (never depressed) is **other specified bipolar disorder**, not bipolar II.", "In bipolar I, hypomanic episodes are common but not required.", "Psychotic features, hospitalization or marked impairment would make it **manic**."], link: { ch: "ch03", sec: "s3-hypomanic", label: "The hypomanic episode" }, also: { href: "#/helpers/bipolar", label: "Which bipolar disorder?" }, dxId: "bipolar-ii" },
      short: { label: "Subthreshold", dx: "Short-duration hypomania (2–3 days)", line: "Full symptoms but too short for a hypomanic episode.", points: ["Two or more such episodes plus major depressive episodes = **other specified bipolar disorder** (short-duration hypomanic episodes and MDEs).", "If they overlap a depressive episode, consider **MDE with mixed features**."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" }, dxId: "other-specified-bipolar" },
      shortmanic: { label: "Rethink", dx: "Marked impairment but under a week", line: "Mania needs at least 1 week unless hospitalized; hypomania excludes marked impairment.", points: ["Re-check the timeline with informants: episodes are often longer than first reported.", "If hospitalization was needed, the episode is manic regardless of duration.", "Otherwise consider **other specified** or **unspecified** bipolar disorder."], link: { ch: "ch03", sec: "s3-hypomanic", label: "Mania versus hypomania" } },
      sub: { label: "Subthreshold", dx: "Hypomanic symptoms below episode threshold", line: "Too few symptoms or too brief for a hypomanic episode.", points: ["With major depressive episodes: **hypomania with insufficient symptoms** (≥4 days, elevated mood + 1–2 symptoms, or irritable + 2–3) is other specified bipolar disorder.", "Chronic subthreshold highs and lows for 2 years suggest **cyclothymic disorder**.", "Isolated subthreshold symptoms are compatible with **MDD**."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" } },
      notA: { label: "Not an episode", dx: "Criterion A not met", line: "Both a mood change and an increase in activity or energy are required.", points: ["Consider ADHD (persistent energy and distractibility), anxiety (restlessness), personality traits, or depression with irritability."], link: { ch: "ch03", sec: "s3-manic", label: "Manic episode criteria" } },
      notobserved: { label: "Not an episode", dx: "Not a hypomanic episode", line: "Hypomania needs an unequivocal change in functioning that others can observe.", points: ["Get **collateral history**: people often fail to recognize their own hypomania.", "Do not mistake restored energy after depression remits for hypomania."], link: { ch: "ch03", sec: "s3-hypomanic", label: "The hypomanic episode" } },
      sideeffect: { label: "Not an episode", dx: "Antidepressant side effects, not hypomania", line: "One or two symptoms such as irritability, edginess or agitation are not enough.", points: ["They do not necessarily indicate a bipolar diathesis.", "Reassess if a full syndrome develops and persists beyond the drug’s effect."], link: { ch: "ch03", sec: "s3-antidepressant", label: "Treatment-emergent mania and hypomania" } },
      induced: { dx: "Substance/medication-induced or medically caused mood disturbance", line: "Elevated mood caused by a substance, medication or medical condition does not count toward bipolar I or II.", points: ["Consider **substance/medication-induced bipolar and related disorder** (stimulants, PCP, steroids) or **bipolar disorder due to another medical condition** (Cushing’s, MS, stroke, TBI).", "Persistence about a month after stopping a substance suggests an independent disorder."], link: { ch: "ch03", sec: "s3-substance", label: "Substance/medication-induced bipolar disorder" }, also: { href: "#/helpers/bipolar", label: "Which bipolar disorder?" } }
    }
  },
  {
    id: "bipolar",
    chapter: "ch03",
    title: "Which bipolar disorder?",
    summary: "Work through cause, psychosis, lifetime manic and hypomanic episodes and chronic subthreshold swings, in the order the DSM-5-TR reasons, to reach the most likely bipolar or related disorder.",
    caution: "A teaching aid built from DSM-5-TR Chapter 3. A bipolar diagnosis depends on the lifetime history: use records and informants, and always ask about past mania or hypomania in anyone presenting depressed.",
    start: "cause",
    nodes: {
      cause: {
        q: "Is the elevated or irritable mood explained by a substance, medication or medical condition, or does it occur only during a delirium?",
        help: "Stimulants and cocaine (minutes to an hour), PCP (hours to days), corticosteroids (after several days). Medical: Cushing’s, multiple sclerosis, stroke, TBI, anti-NMDA receptor encephalitis. New mania late in life calls for a workup (e.g., frontotemporal NCD).",
        options: [
          { label: "No: no substance, medication or medical explanation", to: "psychosis", note: "No substance, medication, medical cause or delirium explains the mood episodes." },
          { label: "A substance or medication caused it", to: "persist", note: "A substance or medication is temporally linked to the mood disturbance." },
          { label: "A medical condition caused it", to: "r:amc", note: "A medical condition directly causes the mood disturbance." },
          { label: "It occurs only during a delirium", to: "r:delirium", note: "Mood symptoms occur only during a delirium." }
        ]
      },
      persist: {
        q: "Was it an antidepressant, ECT or light therapy, with a full syndrome persisting beyond the treatment’s effect? Or does it persist about a month after the substance stopped?",
        help: "Persisting full antidepressant-emergent episodes count as true bipolar episodes. Persistence about 1 month after stopping a drug of abuse suggests an independent disorder.",
        options: [
          { label: "Yes: a full syndrome persists beyond the treatment or substance effect", to: "psychosis", note: "The episode persists beyond the substance or treatment effect, so it counts as a true bipolar episode." },
          { label: "No: it resolves as the substance or medication clears", to: "r:substance", note: "The mood disturbance resolves as the agent clears." }
        ]
      },
      psychosis: {
        q: "How does psychosis relate to the mood episodes?",
        help: "Schizoaffective disorder needs ≥2 weeks of delusions or hallucinations without a mood episode, with mood episodes for most of the illness.",
        options: [
          { label: "No psychosis, or psychosis only during mood episodes", to: "mania", note: "Any psychosis occurs only within mood episodes." },
          { label: "Psychosis ≥2 weeks without mood episodes, and mood episodes for most of the illness", to: "r:schizoaffective", note: "Psychosis without mood episodes for ≥2 weeks, mood for the majority: schizoaffective criteria." },
          { label: "A manic episode superimposed on schizophrenia, delusional disorder or another primary psychotic disorder", to: "r:superimposed", note: "Mania is superimposed on a primary psychotic disorder." }
        ]
      },
      mania: {
        q: "Has there ever been a manic episode?",
        help: "≥1 week (any length if hospitalized) of elevated, expansive or irritable mood and energy with three B symptoms (four if irritable) and marked impairment, hospitalization or psychosis. Use the episode helper if unsure.",
        options: [
          { label: "Yes", to: "bp1episode", note: "At least one lifetime manic episode." },
          { label: "No", to: "hypo", note: "No lifetime manic episode." },
          { label: "Not sure: classify the episode first", to: "r:useepisode", note: "The episode type is uncertain." }
        ]
      },
      bp1episode: {
        q: "What is the current (or most recent) episode?",
        help: "Bipolar I is coded by the current or most recent episode, then severity, psychotic features or remission.",
        options: [
          { label: "Manic", to: "r:bp1-manic", note: "Current or most recent episode manic." },
          { label: "Depressed", to: "r:bp1-dep", note: "Current or most recent episode depressed." },
          { label: "Hypomanic", to: "r:bp1-hypo", note: "Current or most recent episode hypomanic." },
          { label: "Unknown", to: "r:bp1-unspec", note: "Most recent episode unknown." }
        ]
      },
      hypo: {
        q: "Has there been at least one full hypomanic episode (≥4 consecutive days, three B symptoms or four if irritable, a change others noticed, no marked impairment or psychosis)?",
        help: "Ask relatives: hypomania is often enjoyed and not reported. Do not count restored energy after depression lifts.",
        options: [
          { label: "Yes", to: "mde", note: "At least one full hypomanic episode." },
          { label: "Only hypomanias of 2–3 days, or with too few symptoms", to: "submde", note: "Hypomanic periods were too short or had too few symptoms." },
          { label: "No hypomanic episodes", to: "chronic", note: "No full or near-full hypomanic episodes." }
        ]
      },
      mde: {
        q: "Has there been at least one major depressive episode (five of nine symptoms for 2 weeks)?",
        help: "Bipolar II needs both a hypomanic and a major depressive episode.",
        options: [
          { label: "Yes", to: "bp2episode", note: "At least one major depressive episode." },
          { label: "No, never depressed", to: "r:hypo-only", note: "Hypomania without any major depressive episode." }
        ]
      },
      bp2episode: {
        q: "What is the current (or most recent) episode?",
        help: "Bipolar II has one code, F31.81; the episode and specifiers are written out.",
        options: [
          { label: "Depressed", to: "r:bp2-dep", note: "Current or most recent episode depressed." },
          { label: "Hypomanic", to: "r:bp2-hypo", note: "Current or most recent episode hypomanic." }
        ]
      },
      submde: {
        q: "Have there also been major depressive episodes, and did the hypomanic periods occur separately from them?",
        help: "If hypomanic symptoms overlap a depressive episode, consider a major depressive episode with mixed features instead.",
        options: [
          { label: "Yes: MDEs, with separate short (2–3 day) full-symptom hypomanias, two or more", to: "r:short", note: "Major depressive episodes plus two or more separate 2–3-day hypomanias." },
          { label: "Yes: MDEs, with separate ≥4-day hypomanias that had too few symptoms", to: "r:insufficient", note: "Major depressive episodes plus separate hypomanias with too few symptoms." },
          { label: "The hypomanic symptoms overlapped a depressive episode", to: "r:mixed", note: "Hypomanic symptoms co-occurred with a depressive episode." },
          { label: "No major depressive episodes", to: "chronic", note: "No major depressive episodes." }
        ]
      },
      chronic: {
        q: "For at least 2 years (1 year in youth), have there been numerous subthreshold hypomanic and depressive periods, present at least half the time, never absent more than 2 months?",
        help: "Cyclothymic disorder requires that no full manic, hypomanic or major depressive episode has ever occurred.",
        options: [
          { label: "Yes, ≥2 years (≥1 in youth)", to: "r:cyclo", note: "≥2 years (1 in youth) of subthreshold highs and lows, never a full episode." },
          { label: "Yes, but less than 2 years (1 in youth)", to: "r:shortcyclo", note: "Cyclothymic pattern for less than the required duration." },
          { label: "No: only major depressive episodes, no hypomania", to: "r:mdd", note: "Only major depressive episodes, never hypomania or mania." },
          { label: "Unclear, not enough information, or polarity uncertain", to: "r:unspec", note: "Not enough information to classify." }
        ]
      }
    },
    results: {
      amc: { dx: "Bipolar and related disorder due to another medical condition", line: "F06.33 (manic features or manic/hypomanic-like episode) or F06.34 (mixed features), coded after the condition.", points: ["Usually begins within the first weeks or month of the condition.", "Not diagnosed if manic episodes clearly preceded the medical condition.", "Watch for steroids or interferon used to treat the condition as an alternative cause."], link: { ch: "ch03", sec: "s3-medical", label: "Bipolar disorder due to another medical condition" }, dxId: "bipolar-due-to-amc" },
      substance: { dx: "Substance/medication-induced bipolar and related disorder", line: "Coded by substance and use disorder (e.g., F15.94); specify onset during intoxication, withdrawal or after medication use.", points: ["Use it instead of intoxication or withdrawal only when mood symptoms predominate and need clinical attention.", "It may reveal an underlying bipolar diathesis: follow up."], link: { ch: "ch03", sec: "s3-substance", label: "Substance/medication-induced bipolar disorder" }, dxId: "substance-induced-bipolar" },
      delirium: { label: "Conclusion", dx: "Mood symptoms within a delirium", line: "No separate bipolar diagnosis while symptoms are confined to a delirium.", points: ["Treat the cause; reassess afterward.", "PCP and steroids can produce delirium before or alongside manic symptoms."], link: { ch: "ch03", sec: "s3-substance", label: "Substance-induced: course and differential" } },
      schizoaffective: { dx: "Schizoaffective disorder, bipolar type (F25.0)", line: "See Chapter 2: psychosis without mood episodes for ≥2 weeks, mood episodes for most of the illness.", points: ["If psychosis occurs only during mood episodes, it is bipolar I **with psychotic features** instead."], link: { ch: "ch02", sec: "s2-schizoaffective", label: "Schizoaffective disorder" }, dxId: "schizoaffective-disorder" },
      superimposed: { dx: "Other specified bipolar and related disorder (manic episode superimposed on a psychotic disorder)", line: "F31.89, in addition to the psychotic disorder.", points: ["Manic episodes that are part of schizoaffective disorder do **not** get this extra diagnosis."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" }, dxId: "other-specified-bipolar" },
      useepisode: { label: "Next step", dx: "Classify the episode first", line: "Use the episode helper to decide whether past periods were manic, hypomanic or subthreshold.", points: ["Hospitalization or psychosis makes any elevated episode manic.", "Irritable mood alone needs four B symptoms."], link: { ch: "ch03", sec: "s3-hypomanic", label: "Mania versus hypomania" }, also: { href: "#/helpers/episode", label: "Manic, hypomanic or neither?" } },
      "bp1-manic": { dx: "Bipolar I disorder, current or most recent episode manic", line: "Mild F31.11, moderate F31.12, severe F31.13, with psychotic features F31.2; partial remission F31.73, full remission F31.74.", points: ["Add uncoded specifiers: anxious distress, **mixed features**, rapid cycling, mood-congruent or incongruent psychotic features, catatonia (+F06.1), peripartum onset, seasonal pattern.", "Mixed features predict poorer outcome and lithium response."], link: { ch: "ch03", sec: "s3-bp1-criteria", label: "Bipolar I coding" }, dxId: "bipolar-i" },
      "bp1-dep": { dx: "Bipolar I disorder, current or most recent episode depressed", line: "Mild F31.31, moderate F31.32, severe F31.4, with psychotic features F31.5; partial remission F31.75, full remission F31.76.", points: ["Also consider melancholic, atypical, mixed features and anxious distress.", "The depressions dominate the long-term course of bipolar I."], link: { ch: "ch03", sec: "s3-bp1-criteria", label: "Bipolar I coding" }, dxId: "bipolar-i" },
      "bp1-hypo": { dx: "Bipolar I disorder, current or most recent episode hypomanic", line: "F31.0 if current; partial remission F31.71, full remission F31.72.", points: ["Severity and psychotic specifiers do not apply to hypomania.", "The earlier manic episode keeps the diagnosis bipolar I."], link: { ch: "ch03", sec: "s3-bp1-criteria", label: "Bipolar I coding" }, dxId: "bipolar-i" },
      "bp1-unspec": { dx: "Bipolar I disorder, current or most recent episode unspecified (F31.9)", line: "Use when the episode type is unknown.", points: ["Update the code once the episode is clarified."], link: { ch: "ch03", sec: "s3-bp1-criteria", label: "Bipolar I coding" }, dxId: "bipolar-i" },
      "bp2-dep": { dx: "Bipolar II disorder, current or most recent episode depressed (F31.81)", line: "Write out severity or remission and specifiers.", points: ["Psychotic features and catatonia apply only to the depressive episodes.", "Atypical features and mixed hypomanic symptoms are especially common.", "About one-third report a suicide attempt: assess risk."], link: { ch: "ch03", sec: "s3-bp2-criteria", label: "Bipolar II disorder" }, dxId: "bipolar-ii" },
      "bp2-hypo": { dx: "Bipolar II disorder, current or most recent episode hypomanic (F31.81)", line: "Write out remission status and specifiers (anxious distress, mixed features, rapid cycling, peripartum onset, seasonal pattern).", points: ["If the episode becomes manic (marked impairment, hospitalization or psychosis), the diagnosis changes to bipolar I permanently."], link: { ch: "ch03", sec: "s3-bp2-criteria", label: "Bipolar II disorder" }, dxId: "bipolar-ii" },
      "hypo-only": { dx: "Other specified bipolar and related disorder (hypomanic episode without prior major depressive episode)", line: "F31.89. Bipolar II needs a major depressive episode.", points: ["If a major depressive episode later occurs, the diagnosis becomes bipolar II."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" }, dxId: "other-specified-bipolar" },
      short: { dx: "Other specified bipolar and related disorder (short-duration hypomanic episodes and major depressive episodes)", line: "F31.89: two or more full-symptom hypomanias of 2–3 days plus MDEs.", points: ["The hypomanias must not overlap the depressions.", "Bipolar II would need a hypomanic episode of at least 4 days."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" }, dxId: "other-specified-bipolar" },
      insufficient: { dx: "Other specified bipolar and related disorder (hypomanic episodes with insufficient symptoms and major depressive episodes)", line: "F31.89: ≥4-day hypomanias with elevated mood + 1–2 symptoms, or irritable mood + 2–3, plus MDEs.", points: ["The hypomanias must not overlap the depressions."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" }, dxId: "other-specified-bipolar" },
      mixed: { dx: "Major depressive episode, with mixed features", line: "Three or more manic/hypomanic symptoms during a full depressive episode.", points: ["In a person with no prior mania or hypomania this is coded within major depressive disorder (Chapter 4).", "Mixed features in depression are a significant risk factor for later bipolar I or II."], link: { ch: "ch03", sec: "s3-spec-anxious-mixed", label: "With mixed features" } },
      cyclo: { dx: "Cyclothymic disorder (F34.0)", line: "≥2 years (1 in youth) of subthreshold highs and lows, never a full episode.", points: ["Only specifier: **with anxious distress**.", "15%–50% later develop bipolar I or II.", "If a full episode occurs later, the diagnosis changes and cyclothymia is dropped."], link: { ch: "ch03", sec: "s3-cyclothymic", label: "Cyclothymic disorder" }, dxId: "cyclothymic" },
      shortcyclo: { dx: "Other specified bipolar and related disorder (short-duration cyclothymia)", line: "F31.89: cyclothymic pattern for less than 24 months (12 in youth).", points: ["Re-evaluate once the duration requirement is reached."], link: { ch: "ch03", sec: "s3-other", label: "Other specified bipolar disorder" }, dxId: "other-specified-bipolar" },
      mdd: { label: "Not bipolar", dx: "Consider a depressive disorder", line: "Major depressive episodes without any lifetime mania or hypomania point to major depressive disorder (Chapter 4).", points: ["Keep asking about hypomania at each episode: about **12%** of people first diagnosed with MDD later show hypomania.", "Clues to hidden bipolarity: family history, early-20s onset, many episodes, psychosis, antidepressant non-response."], link: { ch: "ch03", sec: "s3-bp1-ddx", label: "Bipolar vs unipolar depression" } },
      unspec: { dx: "Unspecified bipolar and related disorder (F31.9) or unspecified mood disorder (F39)", line: "F31.9 when the picture is bipolar-type but information is insufficient; F39 when you cannot yet choose between bipolar and depressive.", points: ["Typical setting: the emergency room or acute agitation.", "Revisit as history and collateral information arrive."], link: { ch: "ch03", sec: "s3-other", label: "Residual categories" }, dxId: "unspecified-bipolar" }
    }
  }
]);
