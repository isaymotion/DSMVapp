/*
 * Diagnostic helpers for Chapter 15 (Disruptive, Impulse-Control, and Conduct Disorders), DSM-5-TR pp. 521–541.
 * "disruptive":  from defiance, anger outbursts or rule-breaking to ODD, IED, conduct disorder (with onset subtype),
 *                DMDD, antisocial personality disorder, another cause, or a residual category, with the code.
 * "firesetting": from repeated fire setting or stealing to pyromania, kleptomania, or the better explanation.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "disruptive",
    chapter: "ch15",
    title: "Which disruptive behavior disorder?",
    summary: "Start from defiance, angry outbursts or rule-breaking. Rule out mood, psychotic, substance and medical causes, then DMDD, then count conduct disorder behaviors, IED outbursts and ODD symptoms to reach a diagnosis with its code.",
    caution: "A teaching aid built from DSM-5-TR pp. 521–541. Get collateral history from parents, teachers and others, judge behavior against what is normal for age, gender and culture, and screen for abuse, suicide risk and ADHD. Codes are unchanged through October 2026; use the code set in force on the date of service.",
    start: "cause",
    nodes: {
      cause: {
        q: "Does the behavior occur only during a mood episode, psychosis, substance intoxication or withdrawal, or because of a medical condition?",
        help: "Mood episodes (depression, mania), psychotic disorders, intoxication or withdrawal (alcohol, stimulants, PCP), delirium, dementia, brain injury, epilepsy. Also ask whether outbursts in a 6- to 18-year-old arose only within an adjustment disorder.",
        options: [
          { label: "No, it also occurs outside any of these", to: "dmdd", note: "Continue." },
          { label: "Yes, only during a mood or psychotic episode", to: "r:mood", note: "Exclusion." },
          { label: "Yes, only with intoxication or withdrawal", to: "r:substance", note: "Exclusion." },
          { label: "Yes, a medical or neurocognitive condition explains it", to: "r:medical", note: "Exclusion." },
          { label: "Yes, a stressor began it, in a child or adolescent", to: "r:adjust", note: "Consider adjustment disorder." }
        ]
      },
      dmdd: {
        q: "Is the person aged 6–18 with severe temper outbursts about 3 or more times a week AND a persistently irritable or angry mood most of the day, nearly every day, for 12 months, in at least two settings, starting before age 10?",
        help: "These are the DMDD criteria from Chapter 4. If they are met, neither ODD nor IED is diagnosed, even if their criteria are met.",
        options: [
          { label: "Yes", to: "r:dmdd", note: "DMDD takes precedence." },
          { label: "No", to: "conduct", note: "Continue." }
        ]
      },
      conduct: {
        q: "In the past 12 months, have there been at least 3 of the 15 conduct disorder behaviors, with at least 1 in the past 6 months, causing impairment?",
        help: "Aggression to people or animals (bullying, fights, weapon, cruelty to people or animals, theft with confrontation, forced sex); destruction of property (fire setting to cause serious damage, vandalism); deceit or theft (breaking in, conning, stealing without confrontation); serious rule violations (staying out at night or truancy beginning before 13; running away overnight twice, or once for a long time).",
        options: [
          { label: "Yes", to: "age18", note: "Conduct disorder pattern." },
          { label: "No, fewer behaviors", to: "outbursts", note: "Not conduct disorder." }
        ]
      },
      age18: {
        q: "Is the person 18 or older and meets criteria for antisocial personality disorder (including conduct disorder before age 15)?",
        help: "Conduct disorder can be diagnosed in an adult only if antisocial personality disorder criteria are not met.",
        options: [
          { label: "Yes", to: "r:aspd", note: "Criterion C excludes conduct disorder." },
          { label: "No (under 18, or ASPD not met)", to: "onset", note: "Conduct disorder." }
        ]
      },
      onset: {
        q: "Did any conduct disorder symptom appear before age 10?",
        help: "One symptom before 10 is enough for childhood onset. Use school records and parents; if no one can say, choose unspecified onset.",
        options: [
          { label: "Yes, at least one before 10", to: "r:cd-child", note: "Childhood-onset." },
          { label: "No, none before 10", to: "r:cd-adol", note: "Adolescent-onset." },
          { label: "Not enough information", to: "r:cd-unsp", note: "Unspecified onset." }
        ]
      },
      outbursts: {
        q: "Are there recurrent impulsive aggressive outbursts, out of proportion to the trigger, not planned and not used to get something, in a person aged 6 or older?",
        help: "A1: verbal aggression or physical aggression without damage or injury, about twice a week for 3 months. A2: three outbursts with property damage or injury within 12 months. The outbursts must cause distress, impairment, or financial or legal consequences.",
        options: [
          { label: "Yes, meeting A1 or A2", to: "pd", note: "Possible IED." },
          { label: "Outbursts like this, but too infrequent", to: "r:other-spec", note: "Subthreshold." },
          { label: "No, or not the main problem", to: "odd", note: "Continue." }
        ]
      },
      pd: {
        q: "Are the outbursts better explained by antisocial or borderline personality disorder?",
        help: "Both often include impulsive aggression, but at a lower level than in IED. If the outbursts exceed what those disorders usually show and need attention of their own, IED can still be considered.",
        options: [
          { label: "No", to: "r:ied", note: "IED." },
          { label: "Yes", to: "r:pd", note: "Personality disorder." }
        ]
      },
      odd: {
        q: "For at least 6 months, have there been at least 4 of the 8 ODD symptoms (temper, touchy, angry and resentful, arguing with authority, defying rules, annoying on purpose, blaming others, spitefulness twice in 6 months), with someone who is not a sibling, at the frequency expected for age?",
        help: "Under 5: most days. From 5: at least weekly. The symptoms must cause distress or impairment. Check that refusal is not only during tasks needing sustained effort (ADHD), not from poor comprehension (language disorder), and not from fear of evaluation (social anxiety).",
        options: [
          { label: "Yes", to: "settings", note: "ODD." },
          { label: "Fewer than 4, or under 6 months, with impairment", to: "r:other-spec", note: "Subthreshold." },
          { label: "Not enough information to decide", to: "r:unspec", note: "Unspecified." },
          { label: "No", to: "r:none", note: "No disorder from this chapter." }
        ]
      },
      settings: {
        q: "In how many settings do the ODD symptoms appear (home, school, work, with peers)?",
        help: "Severity is graded by pervasiveness, not by the number of symptoms.",
        options: [
          { label: "One setting", to: "r:odd-mild", note: "Mild." },
          { label: "Two settings", to: "r:odd-mod", note: "Moderate." },
          { label: "Three or more", to: "r:odd-sev", note: "Severe." }
        ]
      }
    },
    results: {
      mood: { label: "Not a disorder from this chapter", dx: "The mood or psychotic disorder", line: "ODD and IED are not diagnosed when the behavior occurs only during a depressive, bipolar or psychotic disorder.", points: ["For conduct problems, look at the course: conduct disorder shows problems outside mood episodes and premeditated acts during calm periods; if so, both can be diagnosed."], link: { ch: "ch15", sec: "s15-odd-ddx", label: "ODD differential" } },
      substance: { label: "Not IED", dx: "Substance intoxication or withdrawal", line: "Outbursts that occur nearly always with intoxication or withdrawal do not count toward IED.", points: ["If enough outbursts also occur sober and need attention, IED may still be diagnosed.", "Assess for a substance use disorder (Chapter 16)."], link: { ch: "ch15", sec: "s15-ied-ddx", label: "IED differential" } },
      medical: { label: "Not IED", dx: "The medical or neurocognitive condition", line: "Aggression from brain injury, epilepsy, delirium or dementia is attributed to that condition (e.g., personality change due to another medical condition, aggressive type).", points: ["Soft neurological signs and nonspecific EEG changes alone do not exclude IED."], link: { ch: "ch15", sec: "s15-ied-ddx", label: "IED differential" }, dxId: "personality-change-amc" },
      adjust: { label: "Consider", dx: "Adjustment disorder with disturbance of conduct", line: "Conduct or outbursts that begin with a stressor and do not outlast it by more than 6 months fit adjustment disorder (Chapter 7).", points: ["In ages 6–18, outbursts within an adjustment disorder do not count toward IED.", "Reassess if the pattern persists."], link: { ch: "ch07", sec: "s7-adjust", label: "Adjustment disorders" }, dxId: "adjustment" },
      dmdd: { dx: "Disruptive mood dysregulation disorder (F34.81)", line: "Chronic irritability between severe outbursts, onset before 10, first diagnosed between 6 and 18.", points: ["Do not add ODD or IED.", "Conduct disorder can still be diagnosed alongside."], link: { ch: "ch04", sec: "s4-dmdd-criteria", label: "DMDD criteria" }, dxId: "dmdd" },
      aspd: { dx: "Antisocial personality disorder (F60.2)", line: "From 18, with conduct disorder before 15, antisocial PD replaces conduct disorder.", points: ["Criteria are in Chapter 18.", "Without conduct disorder before 15, ASPD cannot be diagnosed; conduct disorder itself can be diagnosed in an adult."], link: { ch: "ch15", sec: "s15-aspd", label: "Antisocial PD (cross-listed)" }, dxId: "antisocial-pd" },
      "cd-child": { dx: "Conduct disorder, childhood-onset type", line: "At least one symptom before 10; more aggression, more ADHD, and more persistence into adulthood.", points: ["Code: F91.1.", "Specify limited prosocial emotions (2 of 4 traits for 12 months, several informants) and severity.", "Add ODD and ADHD if their criteria are met."], link: { ch: "ch15", sec: "s15-cd-specifiers", label: "Onset subtypes" }, dxId: "conduct-disorder" },
      "cd-adol": { dx: "Conduct disorder, adolescent-onset type", line: "No symptom before 10; more normal peer relationships and better adult outcome.", points: ["Code: F91.2.", "Specify limited prosocial emotions and severity.", "Consider stressors such as discrimination."], link: { ch: "ch15", sec: "s15-cd-specifiers", label: "Onset subtypes" }, dxId: "conduct-disorder" },
      "cd-unsp": { dx: "Conduct disorder, unspecified onset", line: "Criteria are met, but the age of the first symptom cannot be determined.", points: ["Code: F91.9 (also the code for the unspecified disruptive category).", "Update the subtype when history becomes available."], link: { ch: "ch15", sec: "s15-cd-specifiers", label: "Onset subtypes" }, dxId: "conduct-disorder" },
      ied: { dx: "Intermittent explosive disorder", line: "Impulsive, out-of-proportion outbursts meeting A1 or A2, age 6 or older.", points: ["Code: F63.81.", "Can be added to ADHD, conduct disorder, ODD or autism when outbursts exceed what those disorders show and need separate attention.", "Ask about PTSD and suicide risk."], link: { ch: "ch15", sec: "s15-ied-criteria", label: "IED criteria" }, dxId: "ied" },
      pd: { label: "Not IED", dx: "Antisocial or borderline personality disorder", line: "Impulsive aggression is part of these disorders, usually at a lower level than in IED.", points: ["Under 18, a personality disorder needs traits lasting at least 1 year; antisocial PD is never diagnosed before 18."], link: { ch: "ch15", sec: "s15-ied-ddx", label: "IED differential" }, dxId: "borderline-pd" },
      "odd-mild": { dx: "Oppositional defiant disorder, mild", line: "Symptoms confined to one setting, most often home.", points: ["Code: F91.3.", "Home-only ODD can still be impairing.", "Screen for ADHD, anxiety and depression."], link: { ch: "ch15", sec: "s15-odd-criteria", label: "ODD criteria" }, dxId: "oppositional-defiant" },
      "odd-mod": { dx: "Oppositional defiant disorder, moderate", line: "Some symptoms in two settings.", points: ["Code: F91.3."], link: { ch: "ch15", sec: "s15-odd-criteria", label: "ODD criteria" }, dxId: "oppositional-defiant" },
      "odd-sev": { dx: "Oppositional defiant disorder, severe", line: "Some symptoms in three or more settings.", points: ["Code: F91.3.", "Pervasive ODD carries more risk; check for emerging conduct disorder."], link: { ch: "ch15", sec: "s15-odd-criteria", label: "ODD criteria" }, dxId: "oppositional-defiant" },
      "other-spec": { dx: "Other specified disruptive, impulse-control, and conduct disorder", line: "Clinically significant symptoms that fall short of a specific disorder; record the reason.", points: ["Code: F91.8.", "Manual’s example: recurrent behavioral outbursts of insufficient frequency."], link: { ch: "ch15", sec: "s15-residual", label: "Residual categories" }, dxId: "other-specified-disruptive" },
      unspec: { dx: "Unspecified disruptive, impulse-control, and conduct disorder", line: "Clinically significant symptoms with not enough information to be specific (e.g., in the emergency room).", points: ["Code: F91.9 (shared with conduct disorder, unspecified onset)."], link: { ch: "ch15", sec: "s15-residual", label: "Residual categories" }, dxId: "unspecified-disruptive" },
      none: { label: "No diagnosis", dx: "No disorder from this chapter", line: "Behavior within the normal range for age, gender and culture, or explained elsewhere.", points: ["Consider ADHD, language disorder, learning problems, social anxiety, trauma or a parent–child relational problem."], link: { ch: "ch15", sec: "s15-odd-ddx", label: "ODD differential" } }
    }
  },
  {
    id: "firesetting",
    chapter: "ch15",
    title: "Fire setting or stealing: which disorder?",
    summary: "Start from repeated fire setting or stealing, then work through motive, other mental disorders and the tension–relief pattern to reach pyromania, kleptomania or the better explanation.",
    caution: "A teaching aid built from DSM-5-TR pp. 537–541. Pyromania and kleptomania are rare; most fire setting and stealing has another explanation. Codes are unchanged through October 2026.",
    start: "act",
    nodes: {
      act: {
        q: "Which behavior brings the person in?",
        help: "Pick the main behavior; you can run the helper again for the other.",
        options: [
          { label: "Repeated, deliberate fire setting", to: "fmotive", note: "Fire." },
          { label: "Repeated stealing", to: "smotive", note: "Theft." }
        ]
      },
      fmotive: {
        q: "Is there an external motive: money (insurance), sabotage, revenge or anger, hiding a crime, a political statement, improving living conditions, or getting attention by ‘discovering’ the fire?",
        help: "These motives exclude pyromania (Criterion E and the differential diagnosis, pp. 537, 539).",
        options: [
          { label: "No external motive", to: "fjudg", note: "Continue." },
          { label: "Yes", to: "r:arson", note: "Not pyromania." },
          { label: "A young child experimenting with matches or lighters", to: "r:experiment", note: "Developmental." }
        ]
      },
      fjudg: {
        q: "Is the fire setting driven by a delusion or hallucination, or by impaired judgment from major NCD, intellectual developmental disorder or intoxication?",
        options: [
          { label: "No", to: "fother", note: "Continue." },
          { label: "Yes, psychosis", to: "r:psychosis", note: "Excluded." },
          { label: "Yes, impaired judgment", to: "r:judgment", note: "Excluded." }
        ]
      },
      fother: {
        q: "Does conduct disorder, a manic episode or antisocial personality disorder account better for the fire setting?",
        help: "Look for a wider pattern of aggression, theft and rule-breaking, or for elevated mood and grandiosity at the time.",
        options: [
          { label: "No", to: "fcore", note: "Continue." },
          { label: "Yes, conduct disorder or antisocial PD", to: "r:cd", note: "Excluded." },
          { label: "Yes, a manic episode", to: "r:mania", note: "Excluded." }
        ]
      },
      fcore: {
        q: "Is there tension or arousal before, fascination with fire and its context, and pleasure, gratification or relief when setting or watching fires, on more than one occasion?",
        options: [
          { label: "Yes, all of these", to: "r:pyromania", note: "Pyromania." },
          { label: "Not all", to: "r:other-spec", note: "Subthreshold." }
        ]
      },
      smotive: {
        q: "Are the stolen objects wanted for their use or money value, or is the stealing done on a dare, as rebellion, or out of anger or revenge?",
        help: "Ordinary theft (planned or impulsive) is motivated by the object’s usefulness or worth. Kleptomania involves objects the person does not need and could afford.",
        options: [
          { label: "No: unneeded, low-value items, often discarded or given away", to: "sother", note: "Continue." },
          { label: "Yes, for use or money", to: "r:theft", note: "Ordinary theft." },
          { label: "Yes, anger or revenge", to: "r:theft", note: "Excluded by Criterion D." }
        ]
      },
      sother: {
        q: "Is the stealing explained by conduct disorder, antisocial PD, a manic episode, delusions or hallucinations, major NCD, or faked to avoid prosecution?",
        options: [
          { label: "No", to: "score", note: "Continue." },
          { label: "Conduct disorder or antisocial PD", to: "r:cd", note: "Excluded." },
          { label: "Mania, psychosis or major NCD", to: "r:stealother", note: "Excluded." },
          { label: "Faked to avoid prosecution", to: "r:malinger", note: "Malingering." }
        ]
      },
      score: {
        q: "Is there a rising tension just before the theft and pleasure, gratification or relief during it, with repeated failure to resist the urge?",
        options: [
          { label: "Yes", to: "r:kleptomania", note: "Kleptomania." },
          { label: "No", to: "r:other-spec", note: "Subthreshold or other." }
        ]
      }
    },
    results: {
      arson: { label: "Not pyromania", dx: "Fire setting with an external motive", line: "Fire setting for gain, revenge, concealment, ideology or attention is not pyromania.", points: ["Consider conduct disorder or antisocial PD if part of a wider pattern.", "Assess risk and legal issues."], link: { ch: "ch15", sec: "s15-motive", label: "Motive table" } },
      experiment: { label: "Not pyromania", dx: "Developmental experimentation", line: "Children playing with matches or lighters are experimenting, not showing pyromania.", points: ["Provide fire-safety education; reassess if fire setting recurs with other conduct problems."], link: { ch: "ch15", sec: "s15-motive", label: "Motive table" } },
      psychosis: { label: "Not pyromania or kleptomania", dx: "A psychotic disorder", line: "Acts in response to delusions or hallucinations are attributed to the psychosis.", points: ["Treat the psychosis; assess risk."], link: { ch: "ch15", sec: "s15-motive", label: "Motive table" }, dxId: "schizophrenia" },
      judgment: { label: "Not pyromania", dx: "Impaired judgment (major NCD, IDD or intoxication)", line: "Fire setting from impaired judgment is excluded by Criterion E.", points: ["Address safety and supervision."], link: { ch: "ch15", sec: "s15-pyromania", label: "Pyromania" }, dxId: "major-ncd" },
      cd: { label: "Not pyromania or kleptomania", dx: "Conduct disorder or antisocial personality disorder", line: "Fire setting or theft within a general pattern of antisocial behavior belongs to that diagnosis.", points: ["Fire setting meant to cause serious damage is conduct disorder symptom A8; theft is A6 or A12.", "Antisocial PD requires age 18 and conduct disorder before 15."], link: { ch: "ch15", sec: "s15-cd-criteria", label: "Conduct disorder criteria" }, dxId: "conduct-disorder" },
      mania: { label: "Not pyromania", dx: "Manic episode", line: "Fire setting during elevated mood and grandiosity is attributed to the manic episode.", points: ["Diagnose the bipolar disorder."], link: { ch: "ch15", sec: "s15-motive", label: "Motive table" }, dxId: "bipolar-i" },
      pyromania: { dx: "Pyromania", line: "Deliberate fire setting more than once, with tension, fascination and relief, and no other explanation.", points: ["Code: F63.1.", "Very rare; ask about alcohol use, gambling and mood disorders.", "Treatment (outside the DSM): CBT; little drug evidence."], link: { ch: "ch15", sec: "s15-pyromania", label: "Pyromania" }, dxId: "pyromania" },
      theft: { label: "Not kleptomania", dx: "Ordinary theft", line: "Stealing for an object’s use or value, on a dare or out of anger is not kleptomania.", points: ["Shoplifting is common; kleptomania is rare.", "Consider conduct disorder or antisocial PD if part of a pattern."], link: { ch: "ch15", sec: "s15-motive", label: "Motive table" } },
      stealother: { label: "Not kleptomania", dx: "Mania, psychosis or major NCD", line: "Stealing during a manic episode, in response to delusions or hallucinations, or from major NCD is attributed to that disorder.", points: ["Diagnose and treat the underlying condition."], link: { ch: "ch15", sec: "s15-kleptomania", label: "Kleptomania" } },
      malinger: { label: "Not kleptomania", dx: "Malingering", line: "Claiming irresistible urges to avoid prosecution.", points: ["Look for inconsistency, gain and a pattern of ordinary theft."], link: { ch: "ch15", sec: "s15-kleptomania", label: "Kleptomania" } },
      kleptomania: { dx: "Kleptomania", line: "Recurrent unresisted urges to steal unneeded items, tension before and relief during, done alone and usually unplanned.", points: ["Code: F63.2.", "Women outnumber men 3:1; ask about depression, bulimia, alcohol and suicide attempts.", "Treatment (outside the DSM): CBT; naltrexone has trial support."], link: { ch: "ch15", sec: "s15-kleptomania", label: "Kleptomania" }, dxId: "kleptomania" },
      "other-spec": { dx: "Other specified disruptive, impulse-control, and conduct disorder", line: "Clinically significant fire setting or stealing that does not meet full criteria; record the reason.", points: ["Code: F91.8.", "Use unspecified (F91.9) if there is not enough information."], link: { ch: "ch15", sec: "s15-residual", label: "Residual categories" }, dxId: "other-specified-disruptive" }
    }
  }
]);
