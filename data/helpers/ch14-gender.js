/*
 * Diagnostic helper for Chapter 14 (Gender Dysphoria), DSM-5-TR pp. 511–520.
 * "gender": from a gender-related presentation to gender dysphoria in children or in adolescents and adults
 * (with specifiers and code), a residual category, a look-alike, or no diagnosis.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "gender",
    chapter: "ch14",
    title: "Gender dysphoria: is it the diagnosis, and which criteria set?",
    summary: "Start from a gender-related presentation, separate identity from dysphoria and look-alikes, then apply the child or the adolescent/adult criteria set with its count, duration and distress rule, and finish with specifiers and the code.",
    caution: "A teaching aid built from DSM-5-TR pp. 511–520. The manual places the clinical problem in the dysphoria, not in identity (p. 512); a transgender identity without distress or impairment does not meet criteria. The diagnosis requires clinically significant distress or impairment from the incongruence. Codes are unchanged through October 2026 (F64.A, added October 1, 2026, is an ICD-10-CM code for dysphoria in remission, not a DSM diagnosis). Use the code set in force on the date of service.",
    start: "distress",
    nodes: {
      distress: {
        q: "Is there clinically significant distress or impairment, and does it come from the incongruence between experienced/expressed gender and assigned gender?",
        help: "Distress that comes only from stigma, rejection or discrimination is a separate (and real) problem, but it is not what the diagnosis measures (p. 511). Impairment may show as school refusal, work problems, withdrawal, depression or anxiety.",
        options: [
          { label: "Yes: distress or impairment linked to the incongruence", to: "lookalike", note: "Criterion B possible." },
          { label: "No: the person is comfortable and functioning; or the distress is from stigma alone", to: "r:identity", note: "No gender dysphoria diagnosis." },
          { label: "Not known: too little information", to: "r:unspecified", note: "Insufficient information." }
        ]
      },
      lookalike: {
        q: "Does another explanation fit better?",
        help: "Sexual arousal from cross-dressing in a man who does not doubt his gender (transvestic disorder); a wish to change a body part because it looks abnormal (BDD); a bizarre, episode-linked belief in a person with psychosis; a wish for genital surgery for aesthetic reasons or to remove androgen effects while keeping a male identity; an autistic preoccupation with gender rules (pp. 519–520).",
        options: [
          { label: "No: the core is a wish to be, or conviction of being, another gender, with distress", to: "age", note: "Proceed." },
          { label: "Yes: arousal from women’s clothing, without doubting his assigned gender", to: "r:transvestic", note: "Transvestic disorder." },
          { label: "Yes: a body part seen as ugly or deformed, not as the wrong gender", to: "r:bdd", note: "Body dysmorphic disorder." },
          { label: "Yes: a bizarre gender belief that comes and goes with psychotic episodes", to: "r:psychosis", note: "Gender-themed delusion." },
          { label: "Yes: wants genital surgery for appearance or to remove androgen effects, identity stays male", to: "r:other-presentation", note: "Criteria not met." },
          { label: "Possibly: autism spectrum disorder with concrete, rigid thinking about gender", to: "age", note: "Both may be diagnosed after careful assessment (p. 520)." }
        ]
      },
      age: {
        q: "Is the person a prepubertal child, or an adolescent or adult?",
        help: "The manual has separate criteria sets because expression changes with age (p. 515). Puberty usually begins at 9–13 in individuals assigned female and 11–14 in individuals assigned male (p. 514). For a young adolescent, use the adolescent/adult set and read the body items for the anticipated changes.",
        options: [
          { label: "Prepubertal child", to: "ca1", note: "Child criteria set (F64.2)." },
          { label: "Adolescent or adult", to: "acount", note: "Adolescent/adult criteria set (F64.0)." }
        ]
      },
      ca1: {
        q: "Does the child have a strong desire to be another gender, or insist that they are another gender (Criterion A1)?",
        help: "The other gender may be an alternative, nonbinary gender. A1 is compulsory in the child set (p. 512).",
        options: [
          { label: "Yes", to: "ccount", note: "A1 present." },
          { label: "No: strong gender-nonconforming preferences, but no wish to be another gender", to: "r:nonconformity", note: "A1 absent." }
        ]
      },
      ccount: {
        q: "Counting A1, are at least 6 of the 8 manifestations present?",
        help: "A2 clothing; A3 cross-gender roles in play; A4 toys, games and activities of the other gender; A5 playmates of the other gender; A6 rejection of own-gender toys and games (and of rough-and-tumble play in assigned boys); A7 dislike of own sexual anatomy; A8 wish for the sex characteristics of the experienced gender (p. 512).",
        options: [
          { label: "Yes: 6 or more, including A1", to: "cdur", note: "Criterion A count met." },
          { label: "No: A1 plus fewer than 5 others", to: "r:otherspec-count", note: "Below the count." }
        ]
      },
      cdur: {
        q: "Has this lasted at least 6 months?",
        help: "Count from when the manifestations became marked and persistent, not from the first comment.",
        options: [
          { label: "Yes", to: "cdsd", note: "Duration met." },
          { label: "No: full picture but under 6 months", to: "r:brief", note: "Brief gender dysphoria." }
        ]
      },
      cdsd: {
        q: "Is there a specific, codable disorder/difference of sex development documented in the medical record?",
        help: "For example congenital adrenal hyperplasia (E25.0) or androgen insensitivity syndrome (E34.50). Suspicion is not enough (p. 513).",
        options: [
          { label: "Yes", to: "r:child-dsd", note: "Specifier applies; code the DSD too." },
          { label: "No", to: "r:child", note: "No specifier." }
        ]
      },
      acount: {
        q: "Are at least 2 of the 6 manifestations present?",
        help: "A1 incongruence with primary/secondary sex characteristics (or the anticipated ones); A2 wish to be rid of them (or to prevent them); A3 wish for the other gender’s characteristics; A4 wish to be another gender; A5 wish to be treated as another gender; A6 conviction of having that gender’s typical feelings and reactions (pp. 512–513). No item is compulsory.",
        options: [
          { label: "Yes: 2 or more", to: "adur", note: "Criterion A count met." },
          { label: "No: only one, with distress", to: "r:otherspec-count", note: "Below the count." }
        ]
      },
      adur: {
        q: "Has this lasted at least 6 months?",
        help: "Ask when the incongruence and the wishes became marked and persistent.",
        options: [
          { label: "Yes", to: "adsd", note: "Duration met." },
          { label: "No: full picture but under 6 months", to: "r:brief", note: "Brief gender dysphoria." }
        ]
      },
      adsd: {
        q: "Is there a specific, codable disorder/difference of sex development documented in the medical record?",
        help: "Code the DSD as well as the gender dysphoria when this specifier applies (p. 513).",
        options: [
          { label: "Yes", to: "atrans", note: "DSD specifier applies." },
          { label: "No", to: "atrans", note: "No DSD specifier." }
        ]
      },
      atrans: {
        q: "Is the person living full time in the experienced gender AND has had, or is preparing for, at least one gender-affirming medical treatment (regular hormones or surgery)?",
        help: "Both parts are needed. A legal gender change is not required. Full-time living without any medical step does not qualify (p. 513).",
        options: [
          { label: "Yes: both parts", to: "r:adult-post", note: "Posttransition." },
          { label: "No: not living full time, or no medical treatment done or planned", to: "r:adult", note: "No posttransition specifier." }
        ]
      }
    },
    results: {
      "identity": { label: "No diagnosis", dx: "Gender diversity without gender dysphoria", line: "A transgender or gender-diverse person who is not distressed or impaired by the incongruence does not meet Criterion B; distress from stigma alone is a different problem (pp. 511–512).", points: ["Offer support for stigma, family conflict or discrimination without a gender dysphoria diagnosis.", "Screen for depression, anxiety and suicide risk as for anyone under social stress.", "Outside the DSM: for a person whose earlier gender dysphoria has resolved, ICD-10-CM F64.A (in remission) exists from October 1, 2026."], link: { ch: "ch14", sec: "s14-terms", label: "The language of sex and gender" } },
      "unspecified": { dx: "Unspecified gender dysphoria", line: "Symptoms of gender dysphoria with distress or impairment when there is not enough information for a specific diagnosis, or the clinician chooses not to specify the reason.", points: ["Code: F64.9.", "Revise once the history is available."], link: { ch: "ch14", sec: "s14-residual", label: "Residual categories" }, dxId: "unspecified-gender-dysphoria" },
      "transvestic": { label: "Not gender dysphoria", dx: "Consider transvestic disorder (Chapter 19)", line: "Sexual arousal from women’s clothing with distress or impairment, in a man who does not question his assigned gender (p. 519).", points: ["Gender dysphoria can be diagnosed as well if its own criteria are met.", "In some postpubertal-onset cases in assigned males attracted to women, sexualized cross-dressing precedes gender dysphoria: keep reviewing."], link: { ch: "ch14", sec: "s14-differential", label: "Differential diagnosis" } },
      "bdd": { label: "Not gender dysphoria", dx: "Consider body dysmorphic disorder", line: "The person wants a body part changed or removed because it looks abnormal, not because it represents a rejected assigned gender (p. 519).", points: ["Both diagnoses can be given when both sets of criteria are met.", "A wish to amputate a healthy limb is usually not about gender."], link: { ch: "ch14", sec: "s14-differential", label: "Differential diagnosis" }, dxId: "bdd" },
      "psychosis": { label: "Not gender dysphoria", dx: "Gender-themed delusion in a psychotic disorder", line: "Bizarre content that waxes and wanes with psychotic episodes points to a delusion; gender-themed delusions occur in up to 20% of people with schizophrenia (p. 520).", points: ["A stable gender identity that persists between episodes is not a delusion; schizophrenia and gender dysphoria can co-occur.", "Reassess the gender history when the psychosis is treated."], link: { ch: "ch14", sec: "s14-differential", label: "Differential diagnosis" }, dxId: "schizophrenia" },
      "other-presentation": { label: "Not gender dysphoria", dx: "Criteria not met: surgery wish without gender incongruence", line: "A male who wants genital surgery for aesthetic reasons or to remove the effects of androgens, while keeping a male identity, does not meet criteria (p. 520).", points: ["Contrast an emasculinization wish with a nonmale/nonfemale identity, which can meet criteria.", "Consider body dysmorphic disorder and other explanations."], link: { ch: "ch14", sec: "s14-differential", label: "Differential diagnosis" } },
      "nonconformity": { label: "Usually no diagnosis", dx: "Nonconformity to gender roles", line: "F64.2 criteria are not met because A1 is required (p. 512); without a wish to be another gender this is usually nonconformity to gender roles (p. 519); assess distress before considering a residual category.", points: ["“Tomboy” or “girly-boy” behavior is not the diagnosis.", "Assess distress before considering a residual category: F64.8 (reason stated) needs symptoms characteristic of gender dysphoria with clinically significant distress or impairment (p. 520); recheck A1 and Criterion B first.", "Reassess over time; expression can change approaching puberty."], link: { ch: "ch14", sec: "s14-children", label: "Children: the criteria" } },
      "otherspec-count": { dx: "Other specified gender dysphoria (below the count)", line: "Symptoms of gender dysphoria with distress or impairment that fall short of the required count (6 of 8 with A1 in children; 2 of 6 in adolescents and adults); record the reason (p. 520).", points: ["Code: F64.8.", "Recount carefully: adolescents and adults need only two items.", "Reassess over time."], link: { ch: "ch14", sec: "s14-residual", label: "Residual categories" }, dxId: "other-specified-gender-dysphoria" },
      "brief": { dx: "Other specified gender dysphoria, brief gender dysphoria", line: "Full criteria but a duration under 6 months: the manual’s own example of the other specified category (p. 520).", points: ["Code: F64.8.", "Reassess at 6 months for the full diagnosis."], link: { ch: "ch14", sec: "s14-residual", label: "Residual categories" }, dxId: "other-specified-gender-dysphoria" },
      "child": { dx: "Gender dysphoria in children", line: "Marked incongruence for at least 6 months, 6 of 8 manifestations including A1, with distress or impairment (p. 512).", points: ["Code: F64.2.", "Assess family support, school, peer problems and self-harm risk (pp. 515, 519).", "Persistence into adolescence ranged from 2%–39% (assigned male) to 12%–50% (assigned female) in follow-up studies (p. 516)."], link: { ch: "ch14", sec: "s14-children", label: "Children: the criteria" }, dxId: "gender-dysphoria-children" },
      "child-dsd": { dx: "Gender dysphoria in children, with a disorder/difference of sex development", line: "Full child criteria plus a documented, codable DSD (p. 513).", points: ["Code: F64.2 plus the DSD code (e.g., E25.0 congenital adrenal hyperplasia, E34.50 androgen insensitivity syndrome).", "Course and risk differ with a DSD; many feel uncertain rather than firmly convinced about gender (p. 517)."], link: { ch: "ch14", sec: "s14-specifiers", label: "The two specifiers" }, dxId: "gender-dysphoria-children" },
      "adult": { dx: "Gender dysphoria in adolescents and adults", line: "Marked incongruence for at least 6 months, 2 of 6 manifestations, with distress or impairment (pp. 512–513).", points: ["Code: F64.0 (plus the DSD code if that specifier applies).", "Assess suicide risk, depression, anxiety, substance use and autism spectrum traits (pp. 515, 518–520).", "Ask about unsupervised hormone or blocker use (pp. 514–515)."], link: { ch: "ch14", sec: "s14-adults", label: "Adolescents and adults: the criteria" }, dxId: "gender-dysphoria-adults" },
      "adult-post": { dx: "Gender dysphoria in adolescents and adults, posttransition", line: "Criteria met (as worked through above) in a person living full time in the experienced gender who has had, or is preparing for, gender-affirming hormones or surgery (p. 513).", points: ["Code: F64.0; the specifier does not change the code (add the DSD code if that specifier applies).", "The manual says the specifier may be used in the context of continuing treatment that supports the new gender assignment (p. 513); it does not say whether full criteria must still be met, so reading it as requiring current criteria is an interpretation.", "Adjustment after transition varies; suicide risk may persist (pp. 515, 518)."], link: { ch: "ch14", sec: "s14-specifiers", label: "The two specifiers" }, dxId: "gender-dysphoria-adults" }
    }
  }
]);
