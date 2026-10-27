/* Disorder library: Chapter 15, Disruptive, Impulse-Control, and Conduct Disorders (DSM-5-TR pp. 521–541).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): unchanged.
   Antisocial personality disorder is cross-listed in this chapter; its entry lives in disorders-ch18.js. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables; APA DSM-5-TR coding updates through September 2025";
  var NC = "Unchanged through October 2026";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "oppositional-defiant", ch: "ch15", sec: "s15-odd-criteria", pages: "522–527", critPages: "522–523",
      name: "Oppositional defiant disorder", code: "F91.3",
      codes: [["F91.3", "Oppositional defiant disorder", NC]],
      aka: ["ODD", "oppositional disorder", "defiant child", "oppositional behavior"],
      essence: "For at least **6 months**, at least **4 of 8** symptoms of **angry/irritable mood, argumentative/defiant behavior or vindictiveness**, shown with **at least one person who is not a sibling**, causing distress or impairment; not only during a psychotic, substance use or mood disorder, and **not given if DMDD criteria are met**.",
      duration: "≥6 months (symptom 8: at least twice in 6 months)",
      functioning: "Frequent conflict with parents, teachers, supervisors, peers and partners; lower educational attainment; home-only ODD still impairs",
      mood: "Angry, irritable, touchy mood in some; defiant behavior can occur without it; raised suicide-attempt risk even after controlling for comorbidity",
      criteria: [
        ["A", "For ≥6 months, a pattern of angry/irritable mood, argumentative/defiant behavior or vindictiveness, with ≥4 of the following, shown with at least one person other than a sibling. Angry/irritable mood: (1) often loses temper; (2) often touchy or easily annoyed; (3) often angry and resentful. Argumentative/defiant: (4) often argues with authority figures (adults, for youth); (5) often actively defies or refuses requests or rules; (6) often annoys others on purpose; (7) often blames others for own mistakes or misbehavior. Vindictiveness: (8) spiteful or vindictive at least twice in the past 6 months. Frequency guide: under 5, most days; from 5, at least weekly."],
        ["B", "Linked to distress in the person or those close to them, or harms social, educational, occupational or other functioning."],
        ["C", "Not confined to the course of a psychotic, substance use, depressive or bipolar disorder; criteria for disruptive mood dysregulation disorder are not met."]
      ],
      specifiers: ["Mild: one setting only (home, school, work or peers)", "Moderate: some symptoms in two settings", "Severe: some symptoms in three or more settings"],
      epi: [["Prevalence", "1%–11% across countries; average about 3.3%"], ["Sex", "Boys 1.59:1 before adolescence; not consistent in teens or adults"], ["Onset", "Preschool years; rarely later than early adolescence"], ["Normal comparison", "Daily tantrums in only about 10% of preschoolers"]],
      risk: ["Temperament: poor emotion regulation, high reactivity, low frustration tolerance.", "Harsh, inconsistent or neglectful parenting (two-way link); a succession of caregivers.", "Lower heart rate and skin conductance reactivity, reduced basal cortisol reactivity; prefrontal and amygdala differences.", "Irritability shares genetic influences with depression and generalized anxiety disorder."],
      differential: [
        { id: "conduct-disorder", how: "CD adds aggression, destruction, theft or deceit and lacks ODD’s angry mood; both can be diagnosed." },
        { id: "dmdd", how: "Severe outbursts with persistent irritability between them, onset before 10: if DMDD is met, ODD is not given." },
        { id: "adhd", how: "Add ODD only if noncompliance is not limited to tasks needing sustained effort, attention or sitting still." },
        { id: "mdd", how: "Irritability confined to depressive episodes does not count toward ODD." },
        { id: "bipolar-i", how: "Irritability and negativity only during mood episodes: no separate ODD." },
        { id: "ied", how: "IED involves serious aggression toward others; can be added if outbursts need separate attention." },
        { id: "adjustment", how: "Linked to a stressor; settles within 6 months after the stressor ends." },
        { id: "ptsd", how: "Under 6, trauma can present as tantrums and opposition; look for the trauma and traumatic play." },
        { id: "idd", how: "ODD only if opposition is markedly greater than usual for mental age." },
        { id: "language-disorder", how: "Not following directions because of poor comprehension (or hearing loss) is not defiance." },
        { id: "social-anxiety", how: "Refusal driven by fear of negative evaluation." }
      ],
      pearls: ["Severity counts settings, not symptoms.", "Under 5: most days; 5 and older: weekly.", "Symptoms may not show in the clinic: ask parents and teachers.", "Defiant/vindictive symptoms predict CD; angry/irritable mood predicts mood and anxiety disorders.", "Since DSM-5, ODD and CD can both be diagnosed."],
      cmp: { symptoms: "Angry/irritable mood, arguing and defiance, vindictiveness (4 of 8)", exclusions: "Only during psychotic, substance, depressive or bipolar disorder; DMDD criteria met", prevalence: "About 3.3% (1%–11%)", course: "Preschool onset; may precede childhood-onset CD; many never develop CD" },
      clues: [["Core picture", "A 9-year-old who loses his temper, argues, refuses chores and blames his brother weekly for 8 months, only at home"], ["Duration rule", "4 of 8 for ≥6 months"], ["Code", "F91.3"]],
      updates: upd("**F91.3** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "ied", ch: "ch15", sec: "s15-ied-criteria", pages: "527–530", critPages: "527",
      name: "Intermittent explosive disorder", code: "F63.81",
      codes: [["F63.81", "Intermittent explosive disorder", NC]],
      aka: ["IED", "explosive outbursts", "rage attacks", "impulsive aggression", "road rage"],
      essence: "Recurrent **impulsive, out-of-proportion** aggressive outbursts, either verbal or harmless physical aggression **about twice a week for 3 months (A1)** or **three damaging or injuring outbursts in 12 months (A2)**, not premeditated or for gain, from **age 6**, not better explained by another disorder, a medical condition or a substance.",
      duration: "A1: about twice weekly for 3 months; A2: 3 outbursts within 12 months",
      functioning: "Lost friendships, marital instability, demotion or job loss, cost of destroyed objects, civil suits and assault charges",
      mood: "Normal mood between outbursts; outbursts last under 30 minutes; IED with PTSD: 41% lifetime suicide attempts",
      criteria: [
        ["A", "Recurrent behavioral outbursts showing failure to control aggressive impulses, as either (A1) verbal aggression or physical aggression toward property, animals or people about twice weekly for 3 months, without damage or injury; or (A2) three outbursts in 12 months involving damage or destruction of property and/or physical assault injuring animals or people."],
        ["B", "Aggression grossly out of proportion to the provocation or any stressor."],
        ["C", "Outbursts are not premeditated (impulsive or anger-based) and do not aim at a tangible goal (money, power, intimidation)."],
        ["D", "Marked distress, impaired occupational or interpersonal functioning, or financial or legal consequences."],
        ["E", "Age at least 6 years (or equivalent developmental level)."],
        ["F", "Not better explained by another mental disorder, not due to a medical condition or substance; for ages 6–18, aggression within an adjustment disorder does not count."]
      ],
      specifiers: ["None", "Note: can be added to ADHD, CD, ODD or ASD when outbursts exceed what those disorders usually show and need independent attention"],
      epi: [["US 1-year", "About 2.6%"], ["US lifetime", "4.0%"], ["Age", "Higher under 35–40 than over 50"], ["Education", "Higher with high school or less"], ["Sex", "Differences inconsistent"]],
      risk: ["Physical and emotional trauma in the first 20 years of life.", "First-degree relatives at higher risk; substantial genetic influence on impulsive aggression.", "Serotonergic abnormalities; greater amygdala response to anger stimuli.", "History of ADHD, CD or ODD; antisocial or borderline personality disorder."],
      differential: [
        { id: "dmdd", how: "Persistent irritable or angry mood between outbursts, onset before 10, not first diagnosed after 18; mutually exclusive with IED." },
        { id: "antisocial-pd", how: "Impulsive aggression occurs but at a lower level than in IED." },
        { id: "borderline-pd", how: "Impulsive aggression occurs but at a lower level than in IED." },
        { id: "conduct-disorder", how: "Aggression is typically proactive and predatory, with nonaggressive symptoms too." },
        { id: "oppositional-defiant", how: "Tantrums and arguments with authority figures, not assault." },
        { id: "adhd", how: "Outbursts can occur; add IED if they need independent attention." },
        { id: "asd", how: "Outbursts can occur; add IED if they need independent attention." },
        { id: "delirium", how: "Outbursts due to a diagnosable medical condition exclude IED." },
        { id: "major-ncd", how: "Aggression from neurocognitive disease excludes IED." },
        { id: "personality-change-amc", how: "Aggressive type after brain injury or other medical cause: not IED." },
        { name: "Substance intoxication or withdrawal", how: "Outbursts nearly always while intoxicated or withdrawing exclude IED; enough sober outbursts may still qualify." },
        { id: "mdd", how: "Outbursts only during a depressive episode do not count." },
        { id: "adjustment", how: "Ages 6–18: aggression within an adjustment disorder does not count." }
      ],
      pearls: ["“Two a week for three months, or three in a year.”", "Damage to any object counts for A2, whatever its value.", "Outbursts come fast, with little prodrome, often after a minor slight by someone close.", "Soft neurological signs and nonspecific EEG changes are compatible with IED.", "Ask about PTSD and suicide attempts."],
      cmp: { symptoms: "Impulsive, out-of-proportion verbal or physical aggression", exclusions: "Premeditated or instrumental aggression; DMDD; mood or psychotic episodes; medical or substance causes; age under 6", prevalence: "2.6% 1-year; 4.0% lifetime (US)", course: "Onset late childhood or adolescence, rarely after 40; chronic, may be episodic" },
      clues: [["Core picture", "A 28-year-old who shouts at co-workers twice a week for 5 months over trivial slights, calm between, never breaks anything"], ["Duration rule", "A1: ~2×/week for 3 months; A2: 3 in 12 months"], ["Code", "F63.81"]],
      updates: upd("**F63.81** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "conduct-disorder", ch: "ch15", sec: "s15-cd-criteria", pages: "530–537", critPages: "530–532",
      name: "Conduct disorder", code: "F91.1 / F91.2 / F91.9",
      codes: [
        ["F91.1", "Conduct disorder, childhood-onset type", NC],
        ["F91.2", "Conduct disorder, adolescent-onset type", NC],
        ["F91.9", "Conduct disorder, unspecified (unspecified onset; same code as unspecified disruptive, impulse-control, and conduct disorder)", NC]
      ],
      aka: ["CD", "juvenile delinquency", "callous-unemotional traits", "socialized or unsocialized conduct disorder (older terms)"],
      essence: "A **repetitive, persistent** pattern violating **others’ basic rights** or **major age-appropriate rules**: **3 of 15** behaviors in **4 groups** in the past **12 months**, at least **1 in the past 6 months**, with impairment; if **18 or older**, **antisocial personality disorder** criteria are not met.",
      duration: "≥3 behaviors in 12 months, ≥1 in the past 6 months",
      functioning: "Suspension or expulsion, legal trouble, STIs, unplanned pregnancy, injuries; more severe and chronic impairment than other referred children",
      mood: "Not a criterion; irritability, temper and low frustration tolerance are common; raised suicidal behavior",
      criteria: [
        ["A", "≥3 of 15 in the past 12 months, ≥1 in the past 6 months. Aggression to people and animals: (1) bullies, threatens or intimidates; (2) starts physical fights; (3) used a weapon that can cause serious harm; (4) physically cruel to people; (5) physically cruel to animals; (6) stole while confronting a victim; (7) forced someone into sex. Destruction of property: (8) deliberate fire setting meant to cause serious damage; (9) deliberately destroyed property in other ways. Deceitfulness or theft: (10) broke into a house, building or car; (11) often lies (“cons”) for goods or favors or to avoid obligations; (12) stole nontrivial items without confronting a victim. Serious rule violations: (13) often stays out at night against parents’ rules, from before 13; (14) ran away overnight at least twice, or once for a long period; (15) often truant, from before 13."],
        ["B", "Clinically significant impairment in social, academic or occupational functioning."],
        ["C", "If 18 or older, criteria for antisocial personality disorder are not met."]
      ],
      specifiers: ["Childhood-onset type (F91.1): ≥1 symptom before age 10", "Adolescent-onset type (F91.2): no symptom before 10", "Unspecified onset (F91.9): onset age cannot be determined", "With limited prosocial emotions: ≥2 of 4 (no remorse or guilt; callous, lacking empathy; unconcerned about performance; shallow or deficient affect) for ≥12 months in multiple relationships and settings", "Severity: mild, moderate, severe"],
      epi: [["1-year prevalence", "2% to >10%; median 4%"], ["US lifetime", "Men 12.0%, women 7.1%"], ["Onset", "Middle childhood to middle adolescence; rare after 16"], ["Outcome", "Most remit by adulthood"], ["Sex", "Boys: fighting, stealing, vandalism; girls: lying, truancy, running away"]],
      risk: ["Difficult, undercontrolled infant temperament; lower verbal IQ.", "Parental rejection, neglect, harsh or inconsistent discipline, abuse, poor supervision, frequent caregiver changes, parental criminality.", "Delinquent peers, neighborhood disadvantage, exposure to violence.", "Family history (biological or adoptive parents, siblings); slower resting heart rate and low skin conductance (not diagnostic).", "Persistence: childhood onset with limited prosocial emotions; co-occurring ADHD and substance abuse."],
      differential: [
        { id: "oppositional-defiant", how: "Milder, no aggression, destruction, theft or deceit; adds angry mood; both can be diagnosed." },
        { id: "adhd", how: "Disruptive but does not itself violate rights or norms; give both when met." },
        { id: "mdd", how: "Conduct problems occurring outside mood episodes support CD; both allowed." },
        { id: "bipolar-i", how: "Check course: CD behavior before the mood disturbance or premeditated in calm periods." },
        { id: "dmdd", how: "Both can be given when both are met." },
        { id: "ied", how: "Impulsive aggression only, no nonaggressive symptoms; add IED only if outbursts need separate attention." },
        { id: "adjustment", how: "Conduct problems tied to a clear stressor, not a persistent pattern; choose one." },
        { id: "antisocial-pd", how: "From 18, if ASPD criteria are met, do not diagnose CD; ASPD requires CD before 15." }
      ],
      pearls: ["Staying out at night and truancy count only if they began before 13.", "Runaways that directly result from abuse usually do not count.", "Onset split at 10 decides F91.1 vs F91.2.", "F91.9 is also the unspecified residual code: write the full name.", "Get collateral history: youth tend to minimize."],
      cmp: { symptoms: "Aggression, property destruction, deceit or theft, serious rule violations (3 of 15)", exclusions: "ASPD criteria met at 18 or older", prevalence: "Median 4% (1-year)", course: "Rarely starts after 16; most remit; childhood onset persists more" },
      clues: [["Core picture", "A 15-year-old who shoplifts, cons her parents for money and has skipped school since age 12"], ["Duration rule", "3 in 12 months, 1 in last 6"], ["Code", "F91.1 (before 10), F91.2 (no symptom before 10), F91.9 (unknown)"]],
      updates: upd("**F91.1**, **F91.2** and **F91.9** are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "pyromania", ch: "ch15", sec: "s15-pyromania", pages: "537–539", critPages: "537",
      name: "Pyromania", code: "F63.1",
      codes: [["F63.1", "Pyromania", NC]],
      aka: ["pathological fire setting", "compulsive fire setting"],
      essence: "**Deliberate** fire setting on **more than one** occasion, with **tension or arousal before**, **fascination with fire** and **pleasure or relief** in setting or watching fires; not for **gain, ideology, hiding a crime, anger, better living conditions**, not from **delusions** or **impaired judgment**, and not better explained by **conduct disorder, mania or antisocial PD**.",
      duration: "None; more than one fire",
      functioning: "Harm to life and property, legal consequences",
      mood: "Tension before; pleasure, gratification or relief during and after",
      criteria: [
        ["A", "Sets fires deliberately and on purpose, more than once."],
        ["B", "Tension or emotional arousal beforehand."],
        ["C", "Strong interest in and attraction to fire and everything around it (equipment, uses, consequences)."],
        ["D", "Pleasure, gratification or relief when setting fires, witnessing them or taking part in their aftermath."],
        ["E", "Not for money, sociopolitical ideology, hiding crime, anger or vengeance, better living circumstances, delusion or hallucination, or from impaired judgment (major NCD, intellectual developmental disorder, intoxication)."],
        ["F", "Conduct disorder, a manic episode or antisocial personality disorder does not account for it better."]
      ],
      specifiers: ["None"],
      epi: [["Pyromania", "Population prevalence unknown"], ["Fire-setting behavior (lifetime)", "1.0%–1.1%"], ["Sex (fire setting)", "Men 1.7%, women 0.4%"], ["Recidivist fire setters (Finland)", "3.3% met criteria"], ["US adult inpatients", "3.4% current pyromania"]],
      risk: ["Alcohol use disorder is common in impulsive fire setters.", "Fire setting co-occurs with antisocial PD, substance use, bipolar and gambling disorders."],
      differential: [
        { name: "Intentional fire setting for other motives", how: "Profit, sabotage, revenge, hiding a crime, political statement, or wanting to discover the fire and be the hero." },
        { name: "Developmental experimentation", how: "Children playing with matches, lighters or fire." },
        { id: "conduct-disorder", how: "Fire setting as part of a wider antisocial pattern (A8)." },
        { id: "bipolar-i", how: "Fire setting during a manic episode." },
        { id: "antisocial-pd", how: "Fire setting within an adult antisocial pattern." },
        { id: "schizophrenia", how: "Fire set in response to delusions or hallucinations." },
        { id: "major-ncd", how: "Impaired judgment; IDD and intoxication likewise exclude." },
        { name: "Medical condition (e.g., epilepsy)", how: "Fire setting due to the physiological effects of the condition." }
      ],
      pearls: ["Fire setting is common; pyromania is rare.", "Over 40% of US arson arrests are under 18, but childhood pyromania is rare.", "Juvenile fire setting usually means CD, ADHD or adjustment disorder.", "May watch fires, set false alarms, or be drawn to firefighting.", "Shares the CD / mania / ASPD exclusion with kleptomania."],
      cmp: { symptoms: "Repeated deliberate fire setting; tension, fascination, relief", exclusions: "Gain, anger, ideology, delusions, impaired judgment; CD, mania, ASPD", prevalence: "Unknown; fire setting 1.0%–1.1% lifetime", course: "Possibly late-adolescent onset; episodic" },
      clues: [["Core picture", "A man who feels mounting tension, sets small fires, watches the fire crews with delight, with no profit or grudge"], ["Code", "F63.1"]],
      updates: upd("**F63.1** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "kleptomania", ch: "ch15", sec: "s15-kleptomania", pages: "539–541", critPages: "539",
      name: "Kleptomania", code: "F63.2",
      codes: [["F63.2", "Kleptomania", NC]],
      aka: ["pathological stealing", "compulsive stealing", "compulsive shoplifting"],
      essence: "Recurrent **failure to resist urges to steal** objects **not needed** for use or their **money value**, with **rising tension before** and **pleasure or relief during** the theft; not out of **anger or revenge** or **delusions**, and not better explained by **conduct disorder, mania or antisocial PD**.",
      duration: "None; recurrent",
      functioning: "Legal, family, career and personal difficulties; may continue despite convictions",
      mood: "Guilt, shame and depression after thefts; raised suicide-attempt risk",
      criteria: [
        ["A", "Recurrent failure to resist urges to steal items not needed for personal use or monetary value."],
        ["B", "Rising tension immediately before the theft."],
        ["C", "Pleasure, gratification or relief at the time of the theft."],
        ["D", "Not done to express anger or vengeance, and not a response to a delusion or hallucination."],
        ["E", "Conduct disorder, a manic episode or antisocial personality disorder does not account for it better."]
      ],
      specifiers: ["None"],
      epi: [["Arrested shoplifters (US, Canada)", "About 4%–24%"], ["US general population", "About 0.3%–0.6%"], ["Sex", "Women 3:1"], ["Onset", "Often adolescence; can begin at any age"]],
      risk: ["Higher rate of alcohol use disorder in first-degree relatives.", "Serotonin, dopamine and opioid pathways tied to behavioral addictions appear involved."],
      differential: [
        { name: "Ordinary theft or shoplifting", how: "Motivated by the object’s use or worth, planned or impulsive; or a dare, rebellion or rite of passage." },
        { id: "malingering", name: "Malingering", how: "Feigns kleptomania to avoid prosecution." },
        { id: "conduct-disorder", how: "A general pattern of antisocial behavior." },
        { id: "antisocial-pd", how: "A general pattern of antisocial behavior." },
        { id: "bipolar-i", how: "Stealing during a manic episode." },
        { id: "schizophrenia", how: "Stealing in response to delusions or hallucinations." },
        { id: "major-ncd", how: "Stealing from neurocognitive impairment." },
        { id: "bulimia", how: "A common comorbidity, not an explanation." }
      ],
      pearls: ["The only disorder in the chapter more common in women (3:1).", "Items are often given away, discarded, hoarded or secretly returned.", "Steals alone, usually unplanned, but avoids stealing in front of police.", "Comorbid compulsive buying, MDD, bulimia and alcohol use are common.", "Ask about suicide attempts."],
      cmp: { symptoms: "Unresisted urges to steal unneeded items; tension then relief", exclusions: "Anger, delusions; CD, mania, ASPD", prevalence: "0.3%–0.6% (US); 4%–24% of arrested shoplifters", course: "Sporadic, episodic or chronic; may persist for years" },
      clues: [["Core picture", "A 34-year-old who takes lipsticks she could easily buy, feels relief, keeps them unopened in a drawer and feels ashamed"], ["Code", "F63.2"]],
      updates: upd("**F63.2** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "other-specified-disruptive", ch: "ch15", sec: "s15-residual", pages: "541", critPages: "541",
      name: "Other specified disruptive, impulse-control, and conduct disorder", code: "F91.8",
      codes: [["F91.8", "Other conduct disorders", NC]],
      aka: ["subthreshold IED", "infrequent outbursts", "subthreshold ODD", "subthreshold conduct disorder"],
      essence: "Disruptive, impulse-control or conduct symptoms with distress or impairment that **predominate** without meeting full criteria for any disorder in the class, with the **reason recorded**, e.g., **recurrent behavioral outbursts of insufficient frequency**.",
      duration: "Varies",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of the class with clinically significant distress or impairment predominate but full criteria for no disorder in the class are met; record the specific reason (e.g., recurrent behavioral outbursts of insufficient frequency)."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for the specific disorders."],
      differential: [
        { id: "ied", how: "Check A1 (about twice weekly for 3 months) and A2 (3 destructive outbursts in 12 months)." },
        { id: "oppositional-defiant", how: "Needs 4 of 8 symptoms for 6 months." },
        { id: "conduct-disorder", how: "Needs 3 of 15 behaviors in 12 months." },
        { id: "unspecified-disruptive", how: "When no reason is recorded or information is insufficient." }
      ],
      pearls: ["The manual’s example: outbursts too infrequent for IED.", "Subthreshold and the vignette states why: F91.8."],
      cmp: { symptoms: "Subthreshold disruptive, impulse-control or conduct symptoms", exclusions: "Full criteria for a specific disorder", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "Impulsive, out-of-proportion verbal outbursts about twice a month for a year, with job warnings"], ["Code", "F91.8"]],
      updates: upd("**F91.8** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "unspecified-disruptive", ch: "ch15", sec: "s15-residual", pages: "541", critPages: "541",
      name: "Unspecified disruptive, impulse-control, and conduct disorder", code: "F91.9",
      codes: [["F91.9", "Conduct disorder, unspecified (shared with conduct disorder, unspecified onset)", NC]],
      aka: [],
      essence: "Disruptive, impulse-control or conduct symptoms with distress or impairment, short of full criteria, when the clinician **does not state the reason** or information is **insufficient** (e.g., the **emergency room**). Uses **F91.9**, the **same code** as **conduct disorder, unspecified onset**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of the class with distress or impairment predominate without meeting full criteria; the clinician chooses not to specify why, including when there is not enough information for a more specific diagnosis."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [
        { id: "other-specified-disruptive", how: "Use when the reason can be stated." },
        { id: "conduct-disorder", how: "Full CD with unknown onset age also codes F91.9: write the full name." }
      ],
      pearls: ["F91.9 has two meanings: always record the written diagnosis, not just the code.", "Revise once collateral history is available."],
      cmp: { symptoms: "Disruptive symptoms; insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Core picture", "A teen brought to the emergency room after a fight, with no collateral history"], ["Code", "F91.9 (same as conduct disorder, unspecified onset)"]],
      updates: upd("**F91.9** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "ODD vs conduct disorder", ids: ["oppositional-defiant", "conduct-disorder"] },
    { label: "ODD vs IED vs DMDD", ids: ["oppositional-defiant", "ied", "dmdd"] },
    { label: "IED vs conduct disorder", ids: ["ied", "conduct-disorder"] },
    { label: "Conduct disorder vs antisocial personality disorder", ids: ["conduct-disorder", "antisocial-pd"] },
    { label: "Pyromania vs kleptomania", ids: ["pyromania", "kleptomania"] },
    { label: "Other specified vs unspecified disruptive disorder", ids: ["other-specified-disruptive", "unspecified-disruptive"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 15: duration windows", ticks: [[0, "0"], [25, "3 mo"], [50, "6 mo"], [100, "12 mo"]], rows: [
      { label: "ODD", dx: "oppositional-defiant", from: 0, to: 50, color: "guide", span: "4 of 8 for 6 months" },
      { label: "IED, A1", dx: "ied", from: 0, to: 25, color: "hy", span: "~2×/week for 3 months" },
      { label: "IED, A2", dx: "ied", from: 0, to: 100, color: "hy", span: "3 destructive in 12 months" },
      { label: "Conduct disorder", dx: "conduct-disorder", from: 0, to: 100, color: "case", span: "3 of 15 in 12 months" },
      { label: "CD: recent symptom", dx: "conduct-disorder", from: 50, to: 100, color: "case", span: "1 in last 6 months" },
      { label: "LPE specifier", dx: "conduct-disorder", from: 0, to: 100, color: "clin", span: "2 of 4 for 12 months" }
    ], note: "Pyromania and kleptomania have no minimum duration: more than one fire, or recurrent failure to resist stealing." }
  ]);
})();
