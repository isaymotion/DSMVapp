/* Disorder library: Chapter 10, Feeding and Eating Disorders (DSM-5-TR pp. 371–398).
   `code` follows the 2022 manual; `codes` adds the ICD-10-CM codes in force from October 1, 2024, and `updates`
   holds the labeled post-publication note. */
(function () {
  var SRC = "ICD-10-CM update effective October 1, 2024; APA DSM-5-TR coding update (September 2024)";
  function upd(text) { return [{ kind: "post", year: "2024", title: "New ICD-10-CM codes from October 1, 2024", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "pica", ch: "ch10", sec: "s10-pica", pages: "371–373", critPages: "371",
      name: "Pica", code: "F98.3 / F50.89",
      codes: [["F98.3", "Pica, in children", "Unchanged in 2024"], ["F50.89", "Pica, in adults", "As printed (2022); replaced by F50.83"], ["F50.83", "Pica, in adults", "From October 1, 2024"]],
      aka: ["geophagia", "pagophagia", "eating nonfood"],
      essence: "Persistent eating of **nonnutritive, nonfood** substances for at least **1 month**, inappropriate to **developmental level** and **not culturally sanctioned**; with another disorder or pregnancy, severe enough for extra attention.",
      duration: "At least 1 month",
      functioning: "Mainly physical harm; rarely the sole cause of social impairment",
      mood: "No typical mood change; no general aversion to food",
      criteria: [
        ["A", "Persistent eating of nonnutritive, nonfood substances for at least 1 month."],
        ["B", "Inappropriate to the developmental level."],
        ["C", "Not part of a culturally supported or socially normative practice."],
        ["D", "With another mental disorder or medical condition (including pregnancy), severe enough for additional clinical attention."]
      ],
      specifiers: ["In remission"],
      epi: [["School-age children", "About 5%"], ["Pregnancy", "About one-third; 28% in a meta-analysis (pregnancy or postpartum)"], ["Sex", "Both sexes"]],
      risk: ["Neglect, lack of supervision, developmental delay.", "Food insecurity and vitamin or mineral deficiency (iron, zinc).", "Autism and intellectual developmental disorder."],
      differential: [
        { id: "anorexia", how: "Nonfood eaten to control appetite or weight." },
        { id: "factitious", how: "Objects swallowed deceptively to feign illness." },
        { name: "Nonsuicidal self-injury", how: "Swallowing pins, needles or knives in crises." },
        { id: "arfid", how: "Restriction of food; can coexist with sensory-driven pica." },
        { id: "trichotillomania", how: "Pulled hair may be eaten; diagnose both if pica needs attention." },
        { name: "Kleine-Levin syndrome", how: "Episodic hypersomnia with abnormal eating." }
      ],
      pearls: ["Suggested minimum age about 2 years.", "Diet products with little nutrition are not “nonfood.”", "Look for lead poisoning, bezoars and parasitic infection.", "Do not assume cultural practice without evaluation."],
      cmp: { symptoms: "Eating nonfood substances", exclusions: "Developmentally normal mouthing; cultural practice", prevalence: "About 5% of school-age children", course: "Often childhood; can be protracted or fatal" },
      clues: [["Core picture", "A 6-year-old eating paint flakes and soil for 3 months, with high lead and iron deficiency"], ["Code", "F98.3 (child); adults F50.83 from Oct 2024"]],
      updates: upd("Pica in **adults** is coded **F50.83** (was F50.89). Pica in children stays **F98.3**.")
    },
    {
      id: "rumination", ch: "ch10", sec: "s10-rumination", pages: "374–375", critPages: "374",
      name: "Rumination disorder", code: "F98.21",
      codes: [["F98.21", "Rumination disorder", "As printed for all ages; from Oct 2024 children only"], ["F50.84", "Rumination disorder, in adults", "From October 1, 2024"]],
      aka: ["merycism", "regurgitation"],
      essence: "Repeated **effortless regurgitation** of food for at least **1 month**, re-chewed, re-swallowed or spat out, **not** due to a GI or medical condition and not only during another eating disorder.",
      duration: "At least 1 month (several times a week, typically daily)",
      functioning: "Malnutrition and growth delay in infants; social avoidance of eating in older people",
      mood: "Infants may seem satisfied; hungry and irritable between episodes",
      criteria: [
        ["A", "Repeated regurgitation of food for at least 1 month; re-chewed, re-swallowed or spat out."],
        ["B", "Not attributable to a GI or other medical condition (reflux, pyloric stenosis)."],
        ["C", "Not exclusively during anorexia, bulimia, binge-eating disorder or ARFID."],
        ["D", "With a neurodevelopmental disorder, severe enough for additional clinical attention."]
      ],
      specifiers: ["In remission"],
      epi: [["Grade-school children", "About 1%–2% (limited European data)"], ["Infant onset", "Usually 3–12 months"]],
      risk: ["Lack of stimulation, neglect, stressful life situations.", "Parent-child relationship problems.", "Intellectual developmental disorder."],
      differential: [
        { name: "Gastrointestinal conditions", how: "Reflux, gastroparesis, pyloric stenosis, hiatal hernia, Sandifer syndrome." },
        { id: "anorexia", how: "Regurgitation and spitting to dispose of calories." },
        { id: "bulimia", how: "Vomiting or spitting driven by weight concern." },
        { id: "gad", how: "Rumination only if it exceeds what the other disorder explains." }
      ],
      pearls: ["No nausea, retching or disgust.", "Infants arch the back and suck the tongue.", "Can be fatal in infancy.", "Self-soothing function in neurodevelopmental disorders."],
      cmp: { symptoms: "Effortless regurgitation", exclusions: "GI disease; only during other eating disorders", prevalence: "1%–2% of grade-school children", course: "Infants often remit; episodic or continuous" },
      clues: [["Core picture", "An infant arching her back and re-chewing milk, losing weight, with normal reflux workup"], ["Code", "F98.21; adults F50.84 from Oct 2024"]],
      updates: upd("Rumination disorder in **adults** now has its own code, **F50.84**. Children keep **F98.21**.")
    },
    {
      id: "arfid", ch: "ch10", sec: "s10-arfid", pages: "376–381", critPages: "376",
      name: "Avoidant/restrictive food intake disorder", code: "F50.82",
      aka: ["ARFID", "selective eating", "feeding disorder of infancy or early childhood", "food neophobia"],
      essence: "Food avoidance or restriction (**sensory**, **fear of aversive consequences**, or **low interest**) causing weight loss or faltering growth, nutritional deficiency, tube or supplement dependence, or marked psychosocial interference, **without** body image disturbance.",
      duration: "No minimum stated",
      functioning: "Growth and development in children; social and family disruption at meals",
      mood: "Often anxious; no fear of fatness",
      criteria: [
        ["A", "An eating or feeding disturbance with significant weight loss or faltering growth, nutritional deficiency, dependence on enteral feeding or supplements, or marked psychosocial interference."],
        ["B", "Not explained by lack of food or a culturally sanctioned practice."],
        ["C", "Not only during anorexia or bulimia; no disturbance in experiencing body weight or shape."],
        ["D", "Not due to a medical condition or another mental disorder, or exceeds what they usually cause."]
      ],
      specifiers: ["In remission"],
      epi: [["Australia, age ≥15", "0.3%"], ["Age", "More common in children and adolescents"], ["Sex", "About equal; male predominance with autism"]],
      risk: ["Anxiety disorders, autism, OCD, ADHD.", "Familial anxiety; mothers with eating disorders.", "GI conditions, reflux, vomiting and other medical problems."],
      differential: [
        { id: "anorexia", how: "Fear of fatness and body image disturbance; never diagnosed together." },
        { id: "specific-phobia", how: "Fear of choking or vomiting; ARFID when eating is the clinical focus." },
        { id: "social-anxiety", how: "Fear of being watched while eating." },
        { id: "ocd", how: "Food rituals or preoccupations; both if criteria met." },
        { id: "mdd", how: "Global appetite loss that resolves with mood." },
        { id: "rad", how: "Feeding disturbed by withdrawal from caregivers." },
        { name: "Autism spectrum disorder", how: "Rigid, sensory-driven eating without ARFID-level impairment." },
        { id: "factitious", how: "Exaggerated or caregiver-induced feeding problems." },
        { name: "Picky eating", how: "Transient and developmentally normal." }
      ],
      pearls: ["Replaces DSM-IV feeding disorder of infancy or early childhood; any age.", "Ask why the person avoids food.", "Medical complications can match anorexia.", "Improvement with a new caregiver suggests neglect or abuse."],
      cmp: { symptoms: "Restriction for sensory, fear or interest reasons", exclusions: "Body image disturbance; lack of food; cultural practice", prevalence: "0.3% (age ≥15, Australia)", course: "Often childhood onset; sensory type stable" },
      clues: [["Core picture", "A 10-year-old eating five foods, falling two weight percentiles, with iron deficiency and no weight worries"], ["Code", "F50.82"]]
    },
    {
      id: "anorexia", ch: "ch10", sec: "s10-an-criteria", pages: "381–387", critPages: "381",
      name: "Anorexia nervosa", code: "F50.01 / F50.02",
      codes: [
        ["F50.01", "Anorexia nervosa, restricting type", "As printed (2022); replaced by F50.010–F50.019"],
        ["F50.02", "Anorexia nervosa, binge-eating/purging type", "As printed (2022); replaced by F50.020–F50.029"],
        ["F50.010", "Anorexia nervosa, restricting type, mild", "From Oct 2024; .011 moderate, .012 severe, .013 extreme"],
        ["F50.014", "Anorexia nervosa, restricting type, in remission", "From Oct 2024; partial or full; .019 unspecified"],
        ["F50.020", "Anorexia nervosa, binge-eating/purging type, mild", "From Oct 2024; .021 moderate, .022 severe, .023 extreme"],
        ["F50.024", "Anorexia nervosa, binge-eating/purging type, in remission", "From Oct 2024; partial or full; .029 unspecified"]
      ],
      aka: ["AN", "atypical anorexia nervosa", "non–fat phobic anorexia nervosa"],
      essence: "**Restriction** leading to a **significantly low weight**, **intense fear** of weight gain or **behavior that interferes** with gain, and **disturbed experience** of weight or shape or denial of seriousness.",
      duration: "No minimum; subtype from the last 3 months",
      functioning: "From preserved work and social life to isolation and failure to reach potential",
      mood: "Depressive and obsessional features, often secondary to starvation",
      criteria: [
        ["A", "Restriction of energy intake leading to a significantly low body weight for age, sex, developmental trajectory and health."],
        ["B", "Intense fear of gaining weight or becoming fat, or persistent behavior interfering with weight gain."],
        ["C", "Disturbed experience of weight or shape, undue influence on self-evaluation, or lack of recognition of the seriousness of low weight."]
      ],
      specifiers: ["Restricting type or binge-eating/purging type (last 3 months)", "In partial remission (A not met; B or C met) or in full remission", "Severity by BMI: mild ≥17, moderate 16–16.99, severe 15–15.99, extreme <15"],
      epi: [["12-month", "0.0%–0.05%"], ["Lifetime", "0.60%–0.80% (women 0.9%–1.42%, men 0.12%–0.3%)"], ["Mortality", "About 5% per decade"], ["Suicide", "About 18 times expected; second leading cause of death"]],
      risk: ["Childhood anxiety disorders or obsessional traits.", "Cultures valuing thinness; modeling and elite athletics.", "Family history; genetic loci shared with metabolic traits."],
      differential: [
        { id: "bulimia", how: "Binges and compensation at normal or high weight." },
        { id: "arfid", how: "Restriction without fear of fatness or body image disturbance." },
        { name: "Medical conditions", how: "GI disease, hyperthyroidism, cancer, AIDS: weight loss without fear of gain." },
        { id: "mdd", how: "Weight loss without a wish for thinness." },
        { id: "schizophrenia", how: "Odd eating without body image disturbance." },
        { id: "stimulant-use", how: "Low weight from use; consider comorbid anorexia if fear of gain." },
        { id: "ocd", how: "Add only for obsessions unrelated to food, shape or weight." },
        { id: "bdd", how: "Add only for concerns unrelated to shape and size." },
        { id: "social-anxiety", how: "Add only for social fears beyond eating." }
      ],
      pearls: ["Adult BMI ≥19 or youth above the median: think atypical anorexia.", "Fear of fat can be inferred from behavior.", "Amenorrhea is no longer a criterion.", "Binges and purges at low weight are anorexia, not bulimia.", "Bone loss often does not reverse."],
      cmp: { symptoms: "Restriction, low weight, fear of fatness, body image disturbance", exclusions: "None stated; excludes bulimia during the episode", prevalence: "Lifetime 0.6%–0.8%", course: "Most remit within 5 years; mortality about 5% per decade" },
      clues: [["Core picture", "A 16-year-old runner with BMI 15.4 who thinks her thighs are fat and panics when she can’t run"], ["Code", "F50.01 (restricting) / F50.02 (binge-eating/purging); from Oct 2024 F50.01x / F50.02x"]],
      updates: upd("Anorexia nervosa codes now include severity and remission: restricting type **F50.010** mild, **F50.011** moderate, **F50.012** severe, **F50.013** extreme, **F50.014** in remission, **F50.019** unspecified; binge-eating/purging type **F50.020–F50.024** and **F50.029** in the same order.")
    },
    {
      id: "bulimia", ch: "ch10", sec: "s10-bn-criteria", pages: "387–392", critPages: "387",
      name: "Bulimia nervosa", code: "F50.2",
      codes: [
        ["F50.2", "Bulimia nervosa", "As printed (2022); replaced by F50.20–F50.25"],
        ["F50.21", "Bulimia nervosa, mild", "From Oct 2024; F50.22 moderate, F50.23 severe, F50.24 extreme"],
        ["F50.25", "Bulimia nervosa, in remission", "From Oct 2024; partial or full"],
        ["F50.20", "Bulimia nervosa, unspecified severity", "From Oct 2024"]
      ],
      aka: ["BN", "binge-purge"],
      essence: "Recurrent **binges** with recurrent **compensatory behaviors**, both at least **weekly for 3 months**, with self-evaluation unduly shaped by **body shape and weight**, not only during anorexia.",
      duration: "At least once a week for 3 months",
      functioning: "Reduced quality of life; social life most affected",
      mood: "Shame, dysphoria after binges; depressive disorders common",
      criteria: [
        ["A", "Recurrent binge eating: a definitely large amount in a discrete period, with loss of control."],
        ["B", "Recurrent compensatory behaviors: vomiting; laxatives, diuretics or other drugs; fasting; excessive exercise."],
        ["C", "Both at least once a week for 3 months."],
        ["D", "Self-evaluation unduly influenced by shape and weight."],
        ["E", "Not exclusively during anorexia nervosa."]
      ],
      specifiers: ["In partial remission or in full remission", "Severity by compensatory behaviors per week: mild 1–3, moderate 4–7, severe 8–13, extreme ≥14"],
      epi: [["12-month", "0.14%–0.3%"], ["Lifetime", "0.28%–1.0%; adolescents 1.3% girls, 0.5% boys"], ["Mortality", "Nearly 2% per decade"], ["Substance use", "At least 30% lifetime"]],
      risk: ["Weight concern, low self-esteem, depression, social anxiety, childhood GAD.", "Thin-ideal internalization; childhood sexual or physical abuse.", "Childhood obesity, early puberty, family history."],
      differential: [
        { id: "anorexia", how: "Binges and purges at significantly low weight." },
        { id: "bed", how: "Binges without regular compensation." },
        { name: "Kleine-Levin syndrome", how: "Overeating with hypersomnia, no shape concern." },
        { id: "mdd", how: "Atypical overeating without compensation; both if met." },
        { id: "borderline-pd", how: "Bingeing within impulsivity; both if met." }
      ],
      pearls: ["Usually normal or overweight.", "Severity counts compensatory behaviors.", "Vomiting causes hypokalemic alkalosis; laxatives acidosis.", "10%–15% cross over to anorexia.", "Diagnose by the last 3 months."],
      cmp: { symptoms: "Binges + compensation; shape-driven self-worth", exclusions: "Only during anorexia nervosa", prevalence: "Lifetime 0.28%–1.0%", course: "Chronic or intermittent; mortality nearly 2% per decade" },
      clues: [["Core picture", "A normal-weight law student bingeing and vomiting four nights a week with low potassium and swollen parotids"], ["Code", "F50.2; from Oct 2024 F50.20–F50.25"]],
      updates: upd("Bulimia nervosa codes now include severity and remission: **F50.21** mild, **F50.22** moderate, **F50.23** severe, **F50.24** extreme, **F50.25** in partial or full remission, **F50.20** unspecified.")
    },
    {
      id: "bed", ch: "ch10", sec: "s10-bed-criteria", pages: "392–396", critPages: "392",
      name: "Binge-eating disorder", code: "F50.81",
      codes: [
        ["F50.81", "Binge-eating disorder", "As printed (2022); replaced by F50.810–F50.819"],
        ["F50.810", "Binge-eating disorder, mild", "From Oct 2024; .811 moderate, .812 severe, .813 extreme"],
        ["F50.814", "Binge-eating disorder, in remission", "From Oct 2024; partial or full"],
        ["F50.819", "Binge-eating disorder, unspecified severity", "From Oct 2024"]
      ],
      aka: ["BED", "compulsive overeating"],
      essence: "Recurrent **binges** with **3 of 5** features (rapid, uncomfortably full, not hungry, alone, disgusted or guilty) and **marked distress**, at least **weekly for 3 months**, **without recurrent compensation**.",
      duration: "At least once a week for 3 months",
      functioning: "Poorer quality of life, more medical illness and health care use",
      mood: "Disgust, guilt, depression after binges",
      criteria: [
        ["A", "Recurrent binge eating: a definitely large amount in a discrete period, with loss of control."],
        ["B", "Three or more: eating rapidly, until uncomfortably full, when not hungry, alone from embarrassment, disgusted or guilty afterward."],
        ["C", "Marked distress about bingeing."],
        ["D", "At least once a week for 3 months."],
        ["E", "No recurrent compensation; not only during bulimia or anorexia."]
      ],
      specifiers: ["In partial remission (<1 binge/week) or in full remission", "Severity by binges per week: mild 1–3, moderate 4–7, severe 8–13, extreme ≥14"],
      epi: [["12-month", "0.44%–1.2%"], ["Lifetime", "0.85%–2.8%"], ["Sex", "2–3 times more common in women"], ["Suicidal ideation", "About 25%"]],
      risk: ["Runs in families (additive genetic influence).", "Loss-of-control eating in childhood.", "Comorbid MDD and alcohol use disorder."],
      differential: [
        { id: "bulimia", how: "Recurrent compensation and restriction between binges." },
        { name: "Obesity", how: "Not a mental disorder; most obese people do not binge." },
        { id: "mdd", how: "Increased appetite in episodes; both if met." },
        { id: "bipolar-i", how: "Binge eating in mood episodes; both if met." },
        { id: "borderline-pd", how: "Bingeing within impulsivity; both if met." },
        { id: "other-specified-eating", how: "Night eating syndrome; low-frequency BED." }
      ],
      pearls: ["No weight criterion.", "Dieting follows bingeing.", "Best remission of the three.", "Comorbidity tracks binge severity, not obesity."],
      cmp: { symptoms: "Binges with distress, no compensation", exclusions: "Recurrent compensation; only during BN or AN", prevalence: "Lifetime 0.85%–2.8%", course: "Higher remission; crossover uncommon" },
      clues: [["Core picture", "A nurse bingeing alone in her car three times a week, fast and until in pain, then disgusted, never compensating"], ["Code", "F50.81; from Oct 2024 F50.810–F50.819"]],
      updates: upd("Binge-eating disorder codes now include severity and remission: **F50.810** mild, **F50.811** moderate, **F50.812** severe, **F50.813** extreme, **F50.814** in partial or full remission, **F50.819** unspecified.")
    },
    {
      id: "other-specified-eating", ch: "ch10", sec: "s10-other", pages: "396", critPages: "396",
      name: "Other specified feeding or eating disorder", code: "F50.89", aka: ["OSFED", "atypical anorexia nervosa", "purging disorder", "night eating syndrome"],
      essence: "Feeding or eating symptoms causing distress or impairment without full criteria, **with the reason recorded**: atypical anorexia, low-frequency bulimia or binge-eating disorder, purging disorder, night eating syndrome.",
      duration: "Varies by example",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Atypical anorexia nervosa; bulimia nervosa or binge-eating disorder of low frequency and/or limited duration; purging disorder; night eating syndrome; or another stated reason."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Common in clinical samples; not given in DSM-5-TR"]],
      risk: ["As for the related full disorder."],
      differential: [
        { id: "anorexia", how: "Full criteria including significantly low weight." },
        { id: "bulimia", how: "Weekly for 3 months." },
        { id: "bed", how: "Weekly for 3 months." },
        { id: "unspecified-eating", how: "When no reason is given." }
      ],
      pearls: ["Atypical anorexia can be as medically dangerous as anorexia.", "Night eating has recall; sleep-related eating does not.", "Purging disorder has no binges."],
      cmp: { symptoms: "Subthreshold or atypical eating disorder", exclusions: "Full criteria for a specific disorder", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A teenager who lost 18 kg from obesity, fears fat, BMI 23"], ["Code", "F50.89"]]
    },
    {
      id: "unspecified-eating", ch: "ch10", sec: "s10-other", pages: "397", critPages: "397",
      name: "Unspecified feeding or eating disorder", code: "F50.9", aka: [],
      essence: "Feeding or eating symptoms causing distress or impairment without full criteria, when the reason is **not specified** or information is **insufficient** (e.g., the emergency room).",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "The clinician chooses not to specify the reason, or there is insufficient information for a more specific diagnosis."]],
      specifiers: [],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-eating", how: "Use when the reason can be stated." }],
      pearls: ["Revise once the picture is clear."],
      cmp: { symptoms: "Insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Code", "F50.9"]]
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Anorexia nervosa vs ARFID", ids: ["anorexia", "arfid"] },
    { label: "Bulimia nervosa vs binge-eating disorder", ids: ["bulimia", "bed"] },
    { label: "Anorexia vs bulimia nervosa", ids: ["anorexia", "bulimia"] },
    { label: "ARFID vs specific phobia", ids: ["arfid", "specific-phobia"] },
    { label: "Binge-eating disorder vs MDD", ids: ["bed", "mdd"] },
    { label: "Pica vs rumination disorder", ids: ["pica", "rumination"] }
  ]);
})();
