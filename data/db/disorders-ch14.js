/* Disorder library: Chapter 14, Gender Dysphoria (DSM-5-TR pp. 511–520).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): F64.0, F64.2,
   F64.8 and F64.9 unchanged; F64.A added (an ICD-10-CM code, not a DSM diagnosis or specifier; see s14-coding).
   The diagnosis is about distress or impairment from incongruence, not about identity (p. 512). */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables; APA DSM-5-TR coding updates page, checked October 26, 2026";
  var NC = "Unchanged through October 2026";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }
  var F64A = "The October 1, 2026 (FY2027) ICD-10-CM update added **F64.A**, “gender identity disorder, in remission,” to the F64 block. ";
  var F64A_END = "The APA has issued **no DSM-5-TR coding update** for this chapter, and **F64.A is not a DSM diagnosis or specifier**: DSM-5-TR has no remission specifier for gender dysphoria. Do not use F64.A for someone who currently meets criteria; see the coding section.";

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "gender-dysphoria-children", ch: "ch14", sec: "s14-children", pages: "512–520", critPages: "512",
      name: "Gender dysphoria in children", code: "F64.2",
      codes: [["F64.2", "Gender identity disorder of childhood (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["childhood gender dysphoria", "gender identity disorder of childhood (DSM-IV and ICD-10 term)", "gender incongruence of childhood (ICD-11, outside the DSM)", "GD in children"],
      essence: "A **marked incongruence** between a child’s **experienced/expressed** gender and the **assigned** gender for **at least 6 months**, shown by **6 of 8** manifestations with **A1** (a strong wish to be, or insistence on being, another gender) **required**, plus **clinically significant distress or impairment**. Being gender diverse is not the disorder; the distress or impairment is.",
      duration: "At least 6 months",
      functioning: "Distress or impairment socially, at school or elsewhere; may appear only when parents or others interfere with the child’s gender expression; school refusal and peer teasing are common",
      mood: "Anxiety, depressive and disruptive/impulse-control disorders are the usual comorbidities in referred children; supported children may show few or no problems",
      criteria: [
        ["A", "Marked incongruence between experienced/expressed and assigned gender for at least 6 months, shown by at least 6 of the following 8, one of which must be A1:"],
        ["A1", "A strong desire to be another gender, or insistence that one is another gender (or an alternative gender different from the assigned one)."],
        ["A2", "Assigned boys: strong preference for cross-dressing or simulating female clothing. Assigned girls: strong preference for wearing only typically masculine clothes, with strong resistance to feminine clothes."],
        ["A3", "Strong preference for cross-gender roles in pretend or fantasy play."],
        ["A4", "Strong preference for the toys, games or activities stereotypically linked to the other gender."],
        ["A5", "Strong preference for playmates of the other gender."],
        ["A6", "Assigned boys: strong rejection of typically masculine toys, games and activities and strong avoidance of rough-and-tumble play. Assigned girls: strong rejection of typically feminine toys, games and activities."],
        ["A7", "Strong dislike of one’s own sexual anatomy."],
        ["A8", "Strong wish for the primary and/or secondary sex characteristics that match the experienced gender."],
        ["B", "Distress or impairment of clinical significance, whether social, at school or in another important area."]
      ],
      specifiers: ["With a disorder/difference of sex development (only a specific, codable DSD documented in the record; code the DSD too, e.g., E25.0, E34.50)"],
      epi: [["Diagnosis in treatment-seeking samples", "Under 1 in 1,000 (<0.1%) for both assigned sexes; likely an underestimate"], ["Referral sex ratio", "Assigned male : assigned female 1.25:1 to 4.3:1"], ["Onset (clinic samples, no DSD)", "Usually ages 2–4; some at school entry"], ["Persistence into adolescence", "Assigned male 2%–39%; assigned female 12%–50%"], ["Trend", "More referrals, younger ages, more early social transition"]],
      risk: ["Greater intensity of gender nonconformity and older age at presentation make persistence more likely.", "Greater severity at the childhood assessment correlates modestly with persistence; early social transition may also play a part.", "Assigned males without a DSD more often have older brothers.", "Some heritability: monozygotic twin concordance exceeds dizygotic.", "With a DSD: prenatal androgen exposure grossly out of line with the assigned gender."],
      differential: [
        { name: "Nonconformity to gender roles", how: "A “tomboy” or a “girly” boy can collect play and clothing items, but without the strong wish to be, or insistence on being, another gender (A1) and without pervasive variance and distress, there is no diagnosis." },
        { id: "gender-dysphoria-adults", how: "Same diagnosis, different criteria set: switch to the 2-of-6 set once the young person enters adolescence." },
        { id: "asd", how: "Rigid, concrete thinking about gender roles can look like dysphoria; take time to confirm it, then both may be given." },
        { id: "oppositional-defiant", how: "Disruptive behavior is a common comorbidity in referred children; it does not explain the incongruence." },
        { id: "gad", how: "Anxiety disorders are frequent comorbidities, partly linked to stigma; diagnose both when criteria are met." },
        { id: "mdd", how: "Depression may accompany the dysphoria and worsens with age in unsupportive settings." },
        { id: "other-specified-gender-dysphoria", how: "Full picture but under 6 months, or below the 6-of-8 count: other specified, with the reason recorded." }
      ],
      pearls: ["A1 is compulsory: six or more items without it do not meet Criterion A.", "A2–A6 are about clothes, play, toys and playmates; A7–A8 are about the body.", "Young children rarely show strong, persistent anatomic dysphoria.", "Distress may show only when others say the child is “really” the assigned gender.", "Many children brought to clinics have already socially transitioned.", "No posttransition specifier in this set."],
      cmp: { symptoms: "6 of 8 incongruence items (A1 required) for ≥6 months, with distress or impairment", exclusions: "Ordinary gender nonconformity; distress from stigma alone", prevalence: "<0.1% in clinic-based samples; referred assigned males > assigned females", course: "Persists into adolescence in a minority (2%–39% assigned male, 12%–50% assigned female)" },
      clues: [["Core picture", "A 7-year-old assigned male who has said for a year that she is a girl, wears improvised skirts, plays only with girls and is miserable when told she is a boy"], ["Count", "6 of 8, A1 required"], ["Code", "F64.2"]],
      updates: upd("**F64.2** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates. " + F64A + "**F64.2 and F64.0 are unchanged**, so DSM-5-TR gender dysphoria in children still maps to F64.2. " + F64A_END)
    },
    {
      id: "gender-dysphoria-adults", ch: "ch14", sec: "s14-adults", pages: "512–520", critPages: "512–513",
      name: "Gender dysphoria in adolescents and adults", code: "F64.0",
      codes: [["F64.0", "Transsexualism (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["adult gender dysphoria", "adolescent gender dysphoria", "gender identity disorder (DSM-IV term)", "transsexualism (ICD-10 title)", "gender incongruence of adolescence or adulthood (ICD-11, outside the DSM)", "GD in adults"],
      essence: "A **marked incongruence** between **experienced/expressed** and **assigned** gender for **at least 6 months**, shown by **2 of 6** manifestations about the **body** (A1–A3) or about **being and being treated as** another gender (A4–A6), with **clinically significant distress or impairment**. A transgender person who is not distressed or impaired has no diagnosis.",
      duration: "At least 6 months",
      functioning: "Distress or impairment socially, at work or elsewhere; relationship and sexual problems, school or work difficulties, and harm from stigma and discrimination",
      mood: "Anxiety and depressive disorders are the most common comorbidities; suicidal thoughts and attempts are frequent, especially before gender-affirming treatment",
      criteria: [
        ["A", "Marked incongruence between experienced/expressed and assigned gender for at least 6 months, shown by at least 2 of the following 6:"],
        ["A1", "Marked incongruence between the experienced/expressed gender and one’s primary and/or secondary sex characteristics (in young adolescents, the expected secondary characteristics)."],
        ["A2", "Strong desire to be rid of one’s sex characteristics because of that incongruence (in young adolescents, to stop the expected changes)."],
        ["A3", "Strong wish to have the sex characteristics (primary and/or secondary) of the other gender."],
        ["A4", "Strong desire to be the other gender (or an alternative gender different from the assigned one)."],
        ["A5", "Strong desire to be treated as the other gender (or an alternative gender)."],
        ["A6", "Strong conviction of having the feelings and reactions typical of the other gender (or an alternative gender)."],
        ["B", "Distress or impairment of clinical significance, whether social, at work or in another important area."]
      ],
      specifiers: ["With a disorder/difference of sex development (only a specific, codable DSD documented in the record; code the DSD too, e.g., E25.0, E34.50)", "Posttransition: living full time in the experienced gender (legal change not needed) and has had, or is preparing for, at least one gender-affirming medical procedure or regimen (regular hormones or surgery); does not change the code"],
      epi: [["Diagnosis in treatment-seeking samples", "Under 1 in 1,000 (<0.1%) for both assigned sexes; likely an underestimate"], ["Self-identify as transgender (US/Europe surveys)", "0.5%–0.6%"], ["Incongruent gender identity (surveys)", "0.6%–1.1%"], ["Want medical treatment (surveys)", "0.2%–0.6%"], ["Adult treatment-seekers", "Assigned male : assigned female 1:1 to 6.1:1; adolescents and young adults now shifting toward more assigned females"], ["Suicidality and attempts (transgender individuals)", "Reported 30%–80%"]],
      risk: ["Early (prepubertal) onset: met the child criteria earlier; puberty or its approach can sharpen the dysphoria.", "Late (pubertal or postpubertal) onset: in some assigned males, a history of transvestism that may develop into autogynephilia is discussed as a temperamental factor.", "Some heritability: higher monozygotic than dizygotic concordance; possible polygenic basis.", "With a DSD: prenatal androgens grossly discordant with the assigned gender, especially with prolonged postnatal virilization.", "Suicide risk factors: past maltreatment, gender victimization, depression, substance use, younger age."],
      differential: [
        { name: "Nonconformity to gender roles", how: "Occasional cross-dressing or gender-atypical interests without a strong wish to be another gender, and without distress or impairment, is not the diagnosis." },
        { name: "Transvestic disorder", how: "Sexual arousal from cross-dressing with distress, in a person who does not question the assigned gender (Chapter 19); both can be diagnosed when both are met." },
        { id: "bdd", how: "Wants a body part altered because it looks defective, not because it signals a rejected assigned gender; both can be diagnosed." },
        { name: "Wish for amputation of a healthy limb", how: "Some call it body integrity identity disorder: the wish is to live as an amputee or disabled person, usually with no wish to change gender." },
        { id: "asd", how: "Concrete, rigid preoccupation with gender roles can mimic dysphoria; ASD is over-represented, so take time and give both when confirmed." },
        { id: "schizophrenia", how: "Gender-themed delusions occur in up to 20% of schizophrenia and are bizarre and episode-linked; a stable gender identity outside psychosis is not a delusion, and both can co-occur." },
        { id: "delusional-disorder", how: "Insistence on being another gender is not a delusion in the absence of psychosis." },
        { id: "mdd", how: "A common comorbidity; treat it, but it does not explain the incongruence." },
        { id: "ptsd", how: "May follow harassment and violence; diagnose it as well." },
        { id: "gender-dysphoria-children", how: "Use the child set (6 of 8, A1 required) before puberty." },
        { id: "other-specified-gender-dysphoria", how: "Full criteria for under 6 months, or only 1 of 6 with distress: other specified, reason recorded." }
      ],
      pearls: ["Only 2 of 6 and no compulsory item.", "Wanting hormones or surgery is common but not required: A4–A6 can carry the diagnosis.", "In young adolescents, A1 and A2 refer to expected changes (assigned females ~9–13, assigned males ~11–14).", "Posttransition needs full-time living plus hormones or surgery done or planned; legal change is not required.", "A nonbinary person seeking emasculinization can meet criteria; a man wanting genital surgery for aesthetic reasons while keeping a male identity does not.", "Ask about unsupervised GnRH agonists, spironolactone or hormones.", "Assess suicide risk at every visit."],
      cmp: { symptoms: "2 of 6 incongruence items (body, or being and being treated as another gender) for ≥6 months, with distress or impairment", exclusions: "Nonconformity alone; distress from stigma alone; aesthetic genital surgery wish with a retained male identity", prevalence: "<0.1% in clinic-based samples; 0.5%–0.6% identify as transgender in surveys", course: "Early-onset or late-onset trajectory; posttransition specifier for continuing affirming treatment" },
      clues: [["Core picture", "A 19-year-old assigned female who binds her chest, wants to be called by a male name and to start testosterone, and has stopped attending classes because of distress"], ["Count", "2 of 6, none compulsory"], ["Code", "F64.0"]],
      updates: upd("**F64.0** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates. " + F64A + "**F64.2 and F64.0 are unchanged**, so DSM-5-TR gender dysphoria in adolescents and adults still maps to F64.0, posttransition or not. " + F64A_END)
    },
    {
      id: "other-specified-gender-dysphoria", ch: "ch14", sec: "s14-residual", pages: "520", critPages: "520",
      name: "Other specified gender dysphoria", code: "F64.8",
      codes: [["F64.8", "Other gender identity disorders (ICD-10-CM title; record the DSM name)", NC]],
      aka: ["brief gender dysphoria", "subthreshold gender dysphoria"],
      essence: "Gender dysphoria symptoms causing **distress or impairment** without full criteria, **with the reason recorded**; the manual’s one example is **brief gender dysphoria** (full criteria for **under 6 months**).",
      duration: "Any; under 6 months in the brief example",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "Symptoms characteristic of gender dysphoria with clinically significant distress or impairment, not meeting full criteria; the clinician records the reason (e.g., brief gender dysphoria: full criteria met for less than 6 months)."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for gender dysphoria in children and in adolescents and adults."],
      differential: [
        { id: "gender-dysphoria-children", how: "Recount: 6 of 8 with A1, for 6 months." },
        { id: "gender-dysphoria-adults", how: "Only 2 of 6 are needed, so check full criteria first." },
        { id: "unspecified-gender-dysphoria", how: "When the reason is not stated or information is insufficient." }
      ],
      pearls: ["Brief gender dysphoria is the only example the manual gives.", "Below-count presentations (e.g., one of six in an adult) can also be recorded here with the reason.", "Revisit at 6 months: it may become full criteria."],
      cmp: { symptoms: "Subthreshold or brief gender dysphoria with distress", exclusions: "Full criteria for either set", prevalence: "Not given", course: "Varies; brief cases may meet full criteria later" },
      clues: [["Core picture", "A distressed 16-year-old meeting the adolescent criteria for 4 months"], ["Code", "F64.8"]],
      updates: upd("**F64.8** is unchanged through the October 2026 ICD-10-CM update. The new code F64.A (in remission) added that year is not a substitute for this category.")
    },
    {
      id: "unspecified-gender-dysphoria", ch: "ch14", sec: "s14-residual", pages: "520", critPages: "520",
      name: "Unspecified gender dysphoria", code: "F64.9",
      codes: [["F64.9", "Gender identity disorder, unspecified (ICD-10-CM title; record the DSM name)", NC]],
      aka: [],
      essence: "Gender dysphoria symptoms causing **distress or impairment** without full criteria, when the reason is **not specified** or information is **insufficient**.",
      duration: "Not specified",
      functioning: "Distress or impairment required",
      mood: "Varies",
      criteria: [["", "The clinician chooses not to give the reason full criteria are not met, or there is not enough information for a more specific diagnosis."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [{ id: "other-specified-gender-dysphoria", how: "Use when the reason can be stated (e.g., brief gender dysphoria)." }],
      pearls: ["Typical setting: a single emergency or consult visit without a history.", "Revise once the picture is clear."],
      cmp: { symptoms: "Gender dysphoria symptoms; insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Core picture", "A distressed adolescent seen once in the emergency room, history unavailable"], ["Code", "F64.9"]],
      updates: upd("**F64.9** is unchanged through the October 2026 ICD-10-CM update.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Gender dysphoria: children vs adolescents and adults", ids: ["gender-dysphoria-children", "gender-dysphoria-adults"] },
    { label: "Other specified vs unspecified gender dysphoria", ids: ["other-specified-gender-dysphoria", "unspecified-gender-dysphoria"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 14: gender dysphoria", ticks: [[0, "0"], [50, "3 mo"], [100, "6 mo"]], rows: [
      { label: "Children", dx: "gender-dysphoria-children", from: 0, to: 100, color: "guide", span: "≥6 months; 6 of 8, A1 required" },
      { label: "Adolescents and adults", dx: "gender-dysphoria-adults", from: 0, to: 100, color: "case", span: "≥6 months; 2 of 6" }
    ], note: "Full criteria met for less than 6 months: other specified gender dysphoria, recorded as brief gender dysphoria (F64.8)." }
  ]);
})();
