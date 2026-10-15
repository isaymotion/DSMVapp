/*
 * Diagnostic helpers for Chapter 4 (Depressive Disorders), DSM-5-TR pp. 177–214.
 * "depressive": choose among DMDD, MDD, PDD, PMDD, substance/medical causes, other specified and unspecified.
 * "grief": separate normal grief, a major depressive episode, prolonged grief disorder, adjustment disorder and demoralization.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "depressive",
    chapter: "ch04",
    title: "Which depressive disorder?",
    summary: "Work through cause, bipolarity, age, the menstrual cycle, the major depressive episode and chronicity to reach the depressive disorder that fits, with its code.",
    caution: "A teaching aid built from DSM-5-TR pp. 177–214. Always assess suicide risk, take collateral history for past mania or hypomania, and confirm against the full criteria.",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a substance, medication or medical condition be causing the depressive symptoms?",
        help: "Classic causes: alcohol or sedatives (intoxication), cocaine or amphetamines (withdrawal), steroids, interferon, L-dopa, methyldopa, reserpine, hormonal agents; stroke, Parkinson’s, Huntington’s, TBI, hypothyroidism, Cushing’s, pancreatic cancer.",
        options: [
          { label: "No", to: "bipolar", note: "No substance, medication or medical cause is evident." },
          { label: "A substance or medication: depression began during or soon after use, withdrawal or a new medication", to: "subind", note: "A substance or medication is a candidate cause." },
          { label: "A medical condition with a plausible mechanism and a close time link", to: "r:medical", note: "A medical condition is the likely physiological cause." },
          { label: "Both are possible, or the evidence is insufficient", to: "r:unclearcause", note: "Cannot tell whether a substance, a medical condition or neither is responsible." }
        ]
      },
      subind: {
        q: "Is there evidence of an independent depression?",
        help: "Depression that preceded the substance use, persists for a substantial time (about 1 month) after withdrawal or intoxication ends, or has recurred without substances is independent.",
        options: [
          { label: "No: it began with the substance and is clearing with abstinence", to: "r:substance", note: "Onset with the substance, no independent history." },
          { label: "Yes: it preceded use, persists ≈1 month after stopping, or has recurred without substances", to: "bipolar", note: "Evidence of an independent depressive disorder." }
        ]
      },
      bipolar: {
        q: "Has there ever been a manic or hypomanic episode?",
        help: "Ask the patient and an informant. Episodes caused only by substances or a medical condition do not count against a depressive diagnosis.",
        options: [
          { label: "No", to: "child", note: "No lifetime mania or hypomania." },
          { label: "Only substance-induced or medically caused manic-like episodes", to: "child", note: "Manic-like episodes were all substance- or medically induced, so the exclusion does not apply." },
          { label: "Yes", to: "r:bipolar", note: "A lifetime manic or hypomanic episode." }
        ]
      },
      child: {
        q: "Is this a child or adolescent with severe, frequent temper outbursts and irritable mood between them?",
        help: "DMDD is first diagnosed between ages 6 and 18.",
        options: [
          { label: "Yes", to: "dmdd", note: "A young person with outbursts and chronic irritability." },
          { label: "No", to: "menses", note: "Not a DMDD presentation." }
        ]
      },
      dmdd: {
        q: "Are all the DMDD rules met?",
        help: "Outbursts ≥3 times a week; irritable or angry mood between them most of the day, nearly every day; ≥12 months with no 3-month break; at least two settings, severe in one; onset before 10; first diagnosed between 6 and 18; never a manic-like period lasting more than 1 day.",
        options: [
          { label: "Yes, all of them", to: "dmddctx", note: "All DMDD criteria A–I are met." },
          { label: "Outbursts, but mood is normal between them", to: "r:ied", note: "Outbursts without persistent irritability between them." },
          { label: "Not all (too short, wrong age, one setting, too infrequent)", to: "menses", note: "DMDD criteria are not fully met." }
        ]
      },
      dmddctx: {
        q: "Do the outbursts and irritability occur only in a narrower context?",
        help: "DMDD is not diagnosed if they occur only during a major depressive episode, only during an anxiety flare, or only when an autistic child’s routines are disturbed.",
        options: [
          { label: "No: they are persistent across contexts", to: "r:dmdd", note: "Persistent across contexts, not confined to another disorder." },
          { label: "Only during a major depressive episode", to: "mde", note: "Irritability is confined to a major depressive episode." },
          { label: "Only with anxiety, or when an autistic child’s routines change", to: "r:dmddother", note: "Outbursts are confined to anxiety or autism contexts." }
        ]
      },
      menses: {
        q: "Are the symptoms tied to the menstrual cycle?",
        help: "PMDD symptoms are present in the final week before menses, improve within a few days after menses begin, and are minimal or absent the week after.",
        options: [
          { label: "Yes: premenstrual, with a symptom-free week after menses", to: "pmdd", note: "Symptoms are confined to the premenstrual phase." },
          { label: "Worse premenstrually, but never symptom-free after menses", to: "r:exacerbation", note: "Premenstrual worsening without a symptom-free postmenstrual week." },
          { label: "No link to the cycle", to: "mde", note: "Not tied to the menstrual cycle." }
        ]
      },
      pmdd: {
        q: "How many symptoms, and what kind?",
        help: "PMDD needs five or more in most cycles of the past year, at least one affective: lability, irritability or anger, depressed mood or hopelessness, anxiety or tension.",
        options: [
          { label: "Five or more, at least one affective, with impairment", to: "pmddconf", note: "Five or more symptoms including an affective one." },
          { label: "Fewer than five, or physical and behavioral symptoms only", to: "r:pms", note: "Below the PMDD threshold or no affective symptom." }
        ]
      },
      pmddconf: {
        q: "Has this been confirmed by prospective daily ratings over two symptomatic cycles?",
        help: "Retrospective reports are unreliable. Also ask whether symptoms began after starting hormonal treatment.",
        options: [
          { label: "Yes", to: "r:pmdd", note: "Confirmed by two cycles of prospective ratings." },
          { label: "Not yet", to: "r:pmddprov", note: "Not yet confirmed by prospective ratings." },
          { label: "Symptoms began with hormonal contraception and stop when it stops", to: "r:substance", note: "Symptoms follow exogenous hormone use." }
        ]
      },
      mde: {
        q: "Have full criteria for a major depressive episode been met?",
        help: "Five or more of nine symptoms for 2 weeks, one being depressed mood or loss of interest or pleasure, with distress or impairment. Thoughts of death must recur; one attempt or plan is enough.",
        options: [
          { label: "Yes", to: "psych", note: "Full major depressive episode criteria are met." },
          { label: "No", to: "chronic", note: "Full major depressive episode criteria have never been met." }
        ]
      },
      psych: {
        q: "Is there a psychotic disorder?",
        help: "MDD Criterion D: at least one episode must not be better explained by schizoaffective disorder or superimposed on schizophrenia, schizophreniform, delusional or other psychotic disorders.",
        options: [
          { label: "No (psychosis, if any, occurs only during the depressive episodes)", to: "mddchronic", note: "No separate psychotic disorder." },
          { label: "The episode is superimposed on schizophrenia, schizophreniform or delusional disorder", to: "r:osdpsych", note: "A major depressive episode on top of a primary psychotic disorder." },
          { label: "Delusions or hallucinations for ≥2 weeks without a mood episode", to: "r:schizoaffective", note: "Psychosis has occurred for 2 weeks or more without a mood episode." }
        ]
      },
      mddchronic: {
        q: "Has depressed mood been present more days than not for at least 2 years (1 year in youth)?",
        help: "If so, persistent depressive disorder is diagnosed as well.",
        options: [
          { label: "Yes", to: "r:mddpdd", note: "Chronic depressed mood for 2 years or more." },
          { label: "No", to: "recur", note: "Not chronic." }
        ]
      },
      recur: {
        q: "How many episodes?",
        help: "Episodes are separate only with at least 2 consecutive months between them in which episode criteria were not met.",
        options: [
          { label: "One (or episodes less than 2 months apart)", to: "r:mddsingle", note: "A single episode." },
          { label: "Two or more, separated by at least 2 months", to: "r:mddrecurrent", note: "Recurrent episodes." }
        ]
      },
      chronic: {
        q: "Has depressed mood been present more days than not for at least 2 years (1 year in youth, mood may be irritable)?",
        help: "Persistent depressive disorder also needs two of: appetite change, sleep change, low energy, low self-esteem, poor concentration, hopelessness, and never being well for more than 2 months.",
        options: [
          { label: "Yes, with two or more of the six symptoms, never well >2 months", to: "cyclo", note: "Chronic depressed mood meeting PDD criteria A–C." },
          { label: "Yes, but the symptoms are not PDD symptoms (e.g., only anhedonia and suicidal thoughts)", to: "r:osdchronic", note: "Chronic depression that fits neither PDD nor MDD." },
          { label: "No", to: "stressor", note: "Not chronic." }
        ]
      },
      cyclo: {
        q: "During those years, were there numerous periods of hypomanic symptoms (below a full hypomanic episode)?",
        help: "Cyclothymic disorder precludes persistent depressive disorder.",
        options: [
          { label: "No", to: "r:pdd", note: "No hypomanic-symptom periods." },
          { label: "Yes", to: "r:cyclothymic", note: "Numerous subthreshold hypomanic periods." }
        ]
      },
      stressor: {
        q: "Did the symptoms begin after a death or another identifiable stressor?",
        help: "Grief and adjustment disorder come before the other specified categories.",
        options: [
          { label: "After a death, with a grief reaction", to: "r:grief", note: "Depressive symptoms after a bereavement, short of an episode." },
          { label: "Within 3 months of another stressor, with distress out of proportion or impairment", to: "r:adjustment", note: "A stressor-related reaction short of an episode." },
          { label: "No clear stressor", to: "sub", note: "No stressor explains the symptoms." }
        ]
      },
      sub: {
        q: "Which best describes the subthreshold depression?",
        help: "All other specified examples require that the person has never met criteria for another depressive or bipolar disorder and is not currently psychotic.",
        options: [
          { label: "Depressed mood + four symptoms for 2–13 days, at least monthly, for 12 months", to: "r:rbd", note: "Monthly brief episodes of five symptoms for a year." },
          { label: "Depressed affect + four symptoms for 4–13 days", to: "r:sde", note: "One short episode of five symptoms." },
          { label: "Depressed affect + one to three symptoms for 2 weeks or more", to: "r:insuff", note: "Two weeks or more, too few symptoms." },
          { label: "Too little information, or no reason to specify (e.g., the emergency room)", to: "r:unspec", note: "The reason is not specified." },
          { label: "Mood symptoms, but cannot tell whether bipolar or depressive (e.g., acute agitation)", to: "r:f39", note: "Polarity cannot be determined." }
        ]
      }
    },
    results: {
      substance: { dx: "Substance/medication-induced depressive disorder", line: "Coded by substance and use disorder: 4th character 1 (mild), 2 (moderate/severe), 9 (none), e.g., F10.24, F14.24, F19.94.", points: ["Specify onset during intoxication, during withdrawal or after medication use.", "Diagnose instead of intoxication or withdrawal only if the mood symptoms predominate.", "Persistence about 1 month after stopping would point to an independent depression."], link: { ch: "ch04", sec: "s4-substance", label: "Substance/medication-induced depression" }, dxId: "substance-induced-depressive" },
      medical: { dx: "Depressive disorder due to another medical condition", line: "F06.31 with depressive features · F06.32 with major depressive–like episode · F06.34 with mixed features.", points: ["Code the medical condition first (e.g., E03.9 hypothyroidism).", "Not diagnosed if the depression occurs only during delirium.", "Consider whether the treatment (steroids, interferon) rather than the illness is the cause."], link: { ch: "ch04", sec: "s4-medical", label: "Depression due to a medical condition" }, dxId: "depressive-due-to-amc" },
      unclearcause: { dx: "Other specified or unspecified depressive disorder", line: "When it is unclear whether a substance, a medical condition or neither is responsible: F32.89 (reason recorded) or F32.A.", points: ["If both a medical condition and a substance contribute, both diagnoses may be given.", "A medication change may show whether the drug is causal."], link: { ch: "ch04", sec: "s4-substance", label: "Differential diagnosis" }, dxId: "other-specified-depressive" },
      bipolar: { label: "Not a depressive disorder", dx: "A bipolar and related disorder", line: "Any lifetime manic episode → bipolar I; hypomania with a major depressive episode → bipolar II; hypomania with chronic subthreshold depression → cyclothymic or other specified bipolar.", points: ["Depressive episodes in bipolar disorder use the same specifiers.", "A child with any manic-like period longer than 1 day cannot have DMDD."], link: { ch: "ch03", sec: "s3-map", label: "Chapter 3: bipolar disorders" }, also: { href: "#/helpers/bipolar", label: "Which bipolar disorder?" } },
      dmdd: { dx: "Disruptive mood dysregulation disorder (F34.81)", line: "Chronic irritability with frequent outbursts, ≥12 months, two settings, onset before 10, first diagnosed 6–18.", points: ["If ODD or IED criteria are also met, diagnose only DMDD.", "MDD, ADHD, conduct disorder and substance use disorders can be added.", "Usual adult outcome: depression and anxiety, not bipolar disorder."], link: { ch: "ch04", sec: "s4-dmdd-criteria", label: "DMDD criteria" }, dxId: "dmdd" },
      ied: { label: "Not DMDD", dx: "Consider intermittent explosive disorder", line: "Recurrent outbursts without persistent irritable mood between them; diagnosable after 3 months (F63.81, Chapter 15).", points: ["IED and DMDD are never diagnosed together.", "With persistent irritability between outbursts, diagnose only DMDD."], link: { ch: "ch04", sec: "s4-dmdd-ddx", label: "DMDD differential diagnosis" } },
      dmddother: { label: "Not DMDD", dx: "Diagnose the underlying disorder", line: "Outbursts only during anxiety, or only when an autistic child’s routines are disturbed, belong to the anxiety disorder or autism spectrum disorder.", points: ["DMDD can still be diagnosed with an anxiety disorder if irritability also occurs outside anxiety flares."], link: { ch: "ch04", sec: "s4-dmdd-ddx", label: "DMDD differential diagnosis" } },
      exacerbation: { label: "Not PMDD", dx: "Premenstrual exacerbation of another disorder", line: "Without a symptom-free postmenstrual week, diagnose the ongoing disorder (e.g., MDD, PDD, bipolar disorder) and note premenstrual worsening.", points: ["PMDD can be added only if premenstrual symptoms are characteristic of PMDD and markedly different from the ongoing disorder."], link: { ch: "ch04", sec: "s4-pmdd-features", label: "PMDD differential diagnosis" } },
      pms: { label: "Not PMDD", dx: "Premenstrual syndrome (not a DSM disorder)", line: "Premenstrual symptoms without five symptoms or without an affective symptom.", points: ["About 20% prevalence; milder than PMDD.", "Rule out dysmenorrhea (pain beginning with menses)."], link: { ch: "ch04", sec: "s4-pmdd-features", label: "PMDD vs PMS" } },
      pmdd: { dx: "Premenstrual dysphoric disorder (F32.81)", line: "Five or more premenstrual symptoms, one affective, confirmed by two cycles of prospective ratings.", points: ["Rule out thyroid disease and anemia.", "Symptoms stop after menopause."], link: { ch: "ch04", sec: "s4-pmdd-criteria", label: "PMDD criteria" }, dxId: "pmdd" },
      pmddprov: { dx: "Premenstrual dysphoric disorder, provisional (F32.81)", line: "Record “provisional” until two symptomatic cycles of prospective daily ratings confirm it.", points: ["Use a validated tool such as the Daily Rating of Severity of Problems.", "Charting often reveals that MDD or PDD is not cycle-linked."], link: { ch: "ch04", sec: "s4-pmdd-criteria", label: "PMDD criteria" }, dxId: "pmdd" },
      osdpsych: { dx: "Other specified depressive disorder (F32.89), with the psychotic disorder", line: "A major depressive episode superimposed on schizophrenia, schizophreniform, delusional or another psychotic disorder.", points: ["Not used for episodes that are part of schizoaffective disorder."], link: { ch: "ch04", sec: "s4-other", label: "Other specified depressive disorder" }, dxId: "other-specified-depressive" },
      schizoaffective: { label: "Not MDD", dx: "Consider schizoaffective disorder, depressive type", line: "Psychosis for at least 2 weeks without a major mood episode, with mood episodes present for most of the illness (F25.1).", points: ["MDD with psychotic features has psychosis only during the episodes."], link: { ch: "ch02", sec: "s2-schizoaffective", label: "Schizoaffective disorder" }, dxId: "schizoaffective-disorder" },
      mddpdd: { dx: "Major depressive disorder and persistent depressive disorder", line: "Diagnose both, and add the PDD course specifier.", points: ["Episode now, with stretches of ≥8 weeks below threshold in the last 2 years: “with intermittent major depressive episodes, with current episode.”", "Episode throughout the last 2 years: “with persistent major depressive episode.”", "Early onset (<21) predicts personality and substance use comorbidity."], link: { ch: "ch04", sec: "s4-pdd-course", label: "PDD course specifiers" }, dxId: "pdd" },
      mddsingle: { dx: "Major depressive disorder, single episode (F32.x)", line: "F32.0 mild · F32.1 moderate · F32.2 severe · F32.3 with psychotic features · F32.4/F32.5 partial/full remission.", points: ["Add uncoded specifiers: anxious distress, mixed, melancholic, atypical, catatonia (+F06.1), peripartum onset.", "Assess suicide risk now.", "Keep asking about hypomania: adolescent onset, psychosis and bipolar family history raise the chance of a later bipolar diagnosis."], link: { ch: "ch04", sec: "s4-mdd-coding", label: "MDD coding" }, dxId: "mdd" },
      mddrecurrent: { dx: "Major depressive disorder, recurrent episode (F33.x)", line: "F33.0 mild · F33.1 moderate · F33.2 severe · F33.3 with psychotic features · F33.41/F33.42 partial/full remission.", points: ["Consider “with seasonal pattern” if two seasonal episodes in the last 2 years and none nonseasonal.", "Leftover symptoms between episodes strongly predict further recurrence."], link: { ch: "ch04", sec: "s4-mdd-coding", label: "MDD coding" }, dxId: "mdd" },
      osdchronic: { dx: "Other specified (F32.89) or unspecified (F32.A) depressive disorder", line: "Chronic depression whose symptoms are MDE-only ones (anhedonia, psychomotor change, suicidality) and that never met full MDE criteria.", points: ["If full MDE criteria were ever met during this illness, diagnose MDD instead."], link: { ch: "ch04", sec: "s4-pdd-criteria", label: "What PDD leaves out" }, dxId: "other-specified-depressive" },
      pdd: { dx: "Persistent depressive disorder (F34.1)", line: "Depressed mood more days than not for ≥2 years (1 in youth) with two of six symptoms.", points: ["Course specifier: “with pure dysthymic syndrome” if no MDE in the last 2 years.", "Specify early (<21) or late onset; anxious distress or atypical features if present.", "Personality disorders often co-occur and can be diagnosed too."], link: { ch: "ch04", sec: "s4-pdd-criteria", label: "PDD criteria" }, dxId: "pdd" },
      cyclothymic: { label: "Not a depressive disorder", dx: "Cyclothymic disorder (F34.0)", line: "Two years of numerous subthreshold hypomanic and depressive periods, never a full episode.", points: ["Cyclothymic disorder precludes persistent depressive disorder."], link: { ch: "ch03", sec: "s3-cyclothymic", label: "Cyclothymic disorder" }, dxId: "cyclothymic" },
      grief: { label: "Not a depressive disorder", dx: "Grief (no diagnosis), or consider the grief helper", line: "Depressive symptoms after a death that do not meet episode criteria are usually normal grief.", points: ["Reassess if worthlessness, pervasive anhedonia or self-focused suicidal thoughts appear.", "After 12 months (6 in youth), consider prolonged grief disorder."], link: { ch: "ch04", sec: "s4-grief", label: "Grief and depression" }, also: { href: "#/helpers/grief", label: "Grief, depression or something else?" } },
      adjustment: { label: "Not a depressive disorder", dx: "Adjustment disorder with depressed mood (F43.21)", line: "Onset within 3 months of a stressor, full criteria for another disorder not met; ends within 6 months after the stressor ends.", points: ["If full major depressive episode criteria are met, diagnose MDD instead, even with a clear stressor."], link: { ch: "ch04", sec: "s4-grief", label: "Look-alikes" } },
      rbd: { dx: "Other specified depressive disorder (F32.89): recurrent brief depression", line: "Depressed mood + four symptoms for 2–13 days, at least monthly for 12 months, not menstrual.", points: ["Rule out PMDD (cycle-linked) and bipolar disorder."], link: { ch: "ch04", sec: "s4-other", label: "Other specified depressive disorder" }, dxId: "other-specified-depressive" },
      sde: { dx: "Other specified depressive disorder (F32.89): short-duration depressive episode", line: "Depressed affect + four of the other eight symptoms for more than 4 but less than 14 days.", points: ["If symptoms reach 2 weeks, reassess for a major depressive episode."], link: { ch: "ch04", sec: "s4-other", label: "Other specified depressive disorder" }, dxId: "other-specified-depressive" },
      insuff: { dx: "Other specified depressive disorder (F32.89): depressive episode with insufficient symptoms", line: "Depressed affect + at least one other symptom for 2 weeks or more, below five symptoms.", points: ["Check first for adjustment disorder if a stressor is present."], link: { ch: "ch04", sec: "s4-other", label: "Other specified depressive disorder" }, dxId: "other-specified-depressive" },
      unspec: { dx: "Unspecified depressive disorder (F32.A)", line: "Depressive symptoms with distress or impairment, reason not specified or information insufficient.", points: ["F32.A is not F32.9 (MDD, single episode, unspecified).", "Revisit as history becomes available."], link: { ch: "ch04", sec: "s4-other", label: "Catch-all categories" }, dxId: "unspecified-depressive" },
      f39: { dx: "Unspecified mood disorder (F39)", line: "Mood symptoms where it is difficult to choose between unspecified bipolar and unspecified depressive disorder (e.g., acute agitation).", points: ["Listed in both mood chapters."], link: { ch: "ch04", sec: "s4-other", label: "Catch-all categories" }, dxId: "unspecified-mood" }
    }
  },
  {
    id: "grief",
    chapter: "ch04",
    title: "Grief, depression or something else?",
    summary: "After a death or another loss, separate normal grief, a major depressive episode, prolonged grief disorder, adjustment disorder, demoralization and ordinary sadness.",
    caution: "A teaching aid built from DSM-5-TR pp. 177, 183, 192, 209, 214, 319 and 322. Grief norms vary across cultures; assess suicide risk whatever the result.",
    start: "loss",
    nodes: {
      loss: {
        q: "What kind of loss is the person reacting to?",
        help: "Bereavement is the death of someone close. Other losses include divorce, job loss, financial ruin, disaster, and serious illness or disability.",
        options: [
          { label: "The death of someone close", to: "since", note: "A bereavement." },
          { label: "Another loss or stressor", to: "mdeOther", note: "A non-bereavement loss or stressor." }
        ]
      },
      since: {
        q: "How long ago was the death?",
        help: "Prolonged grief disorder can be diagnosed only after 12 months (6 months for children and adolescents).",
        options: [
          { label: "Less than 12 months (less than 6 for a child or adolescent)", to: "mdeEarly", note: "Too soon for prolonged grief disorder." },
          { label: "12 months or more (6 or more for a child or adolescent)", to: "pgd", note: "Long enough to consider prolonged grief disorder." }
        ]
      },
      mdeEarly: {
        q: "Are full criteria for a major depressive episode met?",
        help: "Five of nine symptoms for 2 weeks, one being depressed mood or loss of interest. DSM-5-TR asks that an episode in addition to grief be carefully considered. Features favoring depression: pervasive depressed mood and anhedonia, worthlessness, self-critical rumination, suicidal thoughts about one’s own worthlessness or pain.",
        options: [
          { label: "Yes", to: "r:mdeGrief", note: "Full major depressive episode criteria are met during bereavement." },
          { label: "No", to: "r:grief", note: "Below the threshold for a major depressive episode." }
        ]
      },
      pgd: {
        q: "Since the death, has there been intense yearning for, or preoccupation with, the deceased nearly every day for at least the last month, plus three or more other grief symptoms?",
        help: "Identity disruption, marked disbelief, avoidance of reminders, intense emotional pain, difficulty reintegrating, emotional numbness, feeling life is meaningless, intense loneliness. The reaction must clearly exceed cultural and religious norms and cause distress or impairment.",
        options: [
          { label: "Yes", to: "pgdBetter", note: "Persistent yearning or preoccupation plus three grief symptoms." },
          { label: "No", to: "mdeLate", note: "Prolonged grief disorder criteria are not met." }
        ]
      },
      pgdBetter: {
        q: "Is the picture better explained by another disorder?",
        help: "Prolonged grief disorder Criterion F excludes presentations better explained by major depressive disorder or PTSD.",
        options: [
          { label: "No: yearning and grief symptoms dominate", to: "r:pgd", note: "Not better explained by MDD or PTSD." },
          { label: "Pervasive depression, worthlessness and anhedonia not focused on the deceased", to: "r:mdeGrief", note: "Better explained by a major depressive episode." },
          { label: "The death was traumatic, with intrusions, avoidance and hyperarousal about the event", to: "r:ptsd", note: "Trauma symptoms about the death itself predominate." }
        ]
      },
      mdeLate: {
        q: "Are full criteria for a major depressive episode met?",
        help: "Five of nine symptoms for 2 weeks, one being depressed mood or loss of interest.",
        options: [
          { label: "Yes", to: "r:mdeGrief", note: "Full major depressive episode criteria are met." },
          { label: "No", to: "r:grief", note: "Below the threshold for a disorder." }
        ]
      },
      mdeOther: {
        q: "Are full criteria for a major depressive episode met?",
        help: "A clear stressor does not prevent a diagnosis of a major depressive episode.",
        options: [
          { label: "Yes", to: "r:mde", note: "Full major depressive episode criteria are met." },
          { label: "No", to: "illness", note: "Below the threshold for a major depressive episode." }
        ]
      },
      illness: {
        q: "Is the person chronically or seriously ill, feeling helpless, hopeless and incompetent, and wanting to give up, while still able to enjoy things?",
        help: "Demoralization typically lacks the anhedonia of depression.",
        options: [
          { label: "Yes", to: "r:demoral", note: "Helplessness and hopelessness with pleasure preserved." },
          { label: "No", to: "adjust", note: "Not demoralization." }
        ]
      },
      adjust: {
        q: "Did the symptoms begin within 3 months of the stressor, with distress out of proportion or significant impairment?",
        help: "Adjustment disorder also requires that another disorder’s criteria are not met and that symptoms end within 6 months after the stressor and its consequences end.",
        options: [
          { label: "Yes", to: "r:adjustment", note: "A stressor-related reaction with disproportionate distress or impairment." },
          { label: "No", to: "r:sadness", note: "Neither out of proportion nor impairing." }
        ]
      }
    },
    results: {
      grief: { label: "No mental disorder", dx: "Normal grief", line: "Emptiness and loss in waves tied to reminders, with self-esteem preserved and positive moments possible.", points: ["Bereavement can cause great suffering without causing a major depressive episode.", "Reassess if worthlessness, pervasive anhedonia or self-focused suicidal thoughts emerge, or if grief remains intense past 12 months.", "Grief norms vary by culture and religion."], link: { ch: "ch04", sec: "s4-grief", label: "Grief vs a major depressive episode" } },
      mdeGrief: { dx: "Major depressive episode, in addition to grief", line: "Diagnose major depressive disorder (or the relevant bipolar disorder if there has been mania or hypomania) when full criteria are met, even after a death.", points: ["Bereavement-related episodes occur mostly in people with other vulnerabilities, such as past depression.", "With grief, they bring more severe symptoms and impairment and a worse prognosis.", "Assess suicide risk: in depression, thoughts of death focus on one’s own worthlessness or pain."], link: { ch: "ch04", sec: "s4-grief", label: "Grief and depression" }, dxId: "mdd", also: { href: "#/helpers/depressive", label: "Which depressive disorder?" } },
      pgd: { dx: "Prolonged grief disorder (F43.8)", line: "At least 12 months (6 in youth) after the death, with intense yearning or preoccupation and three or more grief symptoms beyond cultural norms.", points: ["New in DSM-5-TR, in the trauma- and stressor-related disorders chapter (p. 322).", "Not diagnosed if better explained by MDD or PTSD; MDD can be diagnosed alongside when its criteria are separately met."], link: { ch: "ch04", sec: "s4-grief", label: "Grief look-alikes" } },
      ptsd: { label: "Consider", dx: "Posttraumatic stress disorder (F43.10)", line: "A violent or accidental death can be a traumatic event; intrusions, avoidance, negative cognitions and hyperarousal about the event suggest PTSD.", points: ["PTSD centers on fear and threat linked to the event; prolonged grief centers on yearning for the person.", "Covered in Chapter 7."], link: { ch: "ch04", sec: "s4-grief", label: "Grief look-alikes" } },
      mde: { dx: "Major depressive episode", line: "Full criteria are met; a stressor does not prevent the diagnosis.", points: ["Then decide between MDD and a bipolar disorder, and add the specifiers."], link: { ch: "ch04", sec: "s4-mdd-criteria", label: "Major depressive episode criteria" }, dxId: "mdd", also: { href: "#/helpers/depressive", label: "Which depressive disorder?" } },
      demoral: { label: "Not a depressive disorder", dx: "Demoralization", line: "Subjective incompetence, helplessness, hopelessness and a wish to give up, common in chronic illness, but pleasure is preserved.", points: ["Reassess if anhedonia develops: depressive disorder due to the medical condition or MDD may follow."], link: { ch: "ch04", sec: "s4-medical", label: "Depression due to a medical condition" } },
      adjustment: { dx: "Adjustment disorder with depressed mood (F43.21)", line: "Low mood, tearfulness or hopelessness within 3 months of a stressor, out of proportion or impairing, not meeting another disorder’s criteria.", points: ["Symptoms should end within 6 months after the stressor and its consequences end.", "Use “with mixed anxiety and depressed mood” (F43.23) if anxiety is also prominent."], link: { ch: "ch04", sec: "s4-grief", label: "Look-alikes" } },
      sadness: { label: "No mental disorder", dx: "Normal sadness", line: "Sadness is part of human experience and is not diagnosed without the severity, duration and impairment of a disorder.", points: ["Impairing depressed mood that falls short of duration or severity can be other specified depressive disorder."], link: { ch: "ch04", sec: "s4-mdd-ddx", label: "MDD differential diagnosis" } }
    }
  }
]);
