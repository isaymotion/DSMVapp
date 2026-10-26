/* Chapter 14 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch14", "mnemonics", [
  {
    id: "m14-01", short: "Child set: Identity + 7", name: "I Choose Roles, Toys, Pals; Reject, Dislike, Desire", original: true, dx: "gender-dysphoria-children", sec: "s14-children",
    "for": "Gender dysphoria in children: the eight items of Criterion A (at least 6, A1 required)",
    letters: [
      ["I", "Identity (A1)", "Strong wish to be, or insistence on being, another gender or an alternative gender; required"],
      ["C", "Clothes (A2)", "Assigned male: strong preference for female attire. Assigned female: only masculine clothing, strong resistance to feminine clothing"],
      ["R", "Roles (A3)", "Cross-gender roles in make-believe or fantasy play"],
      ["T", "Toys (A4)", "Toys, games or activities stereotyped for the other gender"],
      ["P", "Pals (A5)", "Playmates of the other gender"],
      ["R", "Reject (A6)", "Rejects toys and activities typical of the assigned gender; assigned males also avoid rough-and-tumble play"],
      ["D", "Dislike (A7)", "Strong dislike of one's own sexual anatomy"],
      ["D", "Desire (A8)", "Strong wish for the sex characteristics that match the experienced gender"]
    ],
    caveat: "DSM check: **at least 6 of 8**, one of which **must be A1**, for **6 months**, plus distress or impairment (Criterion B). Six behavioral and anatomic items **without A1** do not qualify (p. 512)."
  },
  {
    id: "m14-02", short: "Adult set: 2 of 6", name: "Incongruent body: Rid it, Want the other, Be, be Treated, Feel", original: true, dx: "gender-dysphoria-adults", sec: "s14-adults",
    "for": "Gender dysphoria in adolescents and adults: the six items of Criterion A (at least 2)",
    letters: [
      ["I", "Incongruence (A1)", "Marked mismatch between experienced gender and primary/secondary sex characteristics (young adolescents: anticipated ones)"],
      ["R", "Rid (A2)", "Strong wish to be rid of one's sex characteristics (young adolescents: to prevent anticipated ones)"],
      ["W", "Want (A3)", "Strong wish for the sex characteristics of the other gender"],
      ["B", "Be (A4)", "Strong wish to be the other or an alternative gender"],
      ["T", "Treated (A5)", "Strong wish to be treated as the other or an alternative gender"],
      ["F", "Feel (A6)", "Strong conviction of having the typical feelings and reactions of the other or an alternative gender"]
    ],
    caveat: "DSM check: **2 of 6** for **6 months** with distress or impairment. No single item is mandatory, so A4 + A5 alone can qualify without any wish to change the body (pp. 512–513)."
  },
  {
    id: "m14-03", short: "6-of-8 vs 2-of-6", name: "Kids 6 of 8, grown-ups 2 of 6, everyone 6 months", original: true, dx: "gender-dysphoria-children", sec: "s14-coding",
    "for": "Counts, duration and codes for the two criteria sets",
    letters: [
      ["6/8", "Children: F64.2", "At least 6 of 8 items, including A1"],
      ["2/6", "Adolescents and adults: F64.0", "At least 2 of 6 items; none is mandatory"],
      ["6 mo", "Both sets", "At least 6 months; full criteria for less time = other specified, brief gender dysphoria (F64.8)"],
      ["B", "Both sets", "Clinically significant distress or impairment (school in children, occupational in adults)"]
    ],
    caveat: "DSM check: unspecified gender dysphoria is **F64.9**. F64.A (outside the DSM) was added to ICD-10-CM on October 1, 2026; DSM-5-TR still lists F64.0/F64.2 (see the coding section)."
  },
  {
    id: "m14-04", short: "Differential: N-T-B-A-S-O", name: "Never Treat Bodies, Autism or Schizophrenia as Obvious", original: true, dx: "gender-dysphoria-adults", sec: "s14-differential",
    "for": "The six differential headings for gender dysphoria",
    letters: [
      ["N", "Nonconformity to gender roles", "Tomboy or 'girly-boy' behavior, occasional cross-dressing: no strong wish to be another gender; variance not pervasive"],
      ["T", "Transvestic disorder", "Sexual arousal from cross-dressing, assigned gender not in question; both can be diagnosed"],
      ["B", "Body dysmorphic disorder", "Body part seen as malformed, not as a sign of the rejected gender; both can be diagnosed"],
      ["A", "Autism spectrum disorder", "Rigid, concrete ideas about gender roles can resemble or coexist with gender dysphoria"],
      ["S", "Schizophrenia and other psychoses", "Gender-themed delusions in up to 20%: bizarre, fluctuate with episodes; both can co-occur"],
      ["O", "Other presentations", "Genital surgery wanted for aesthetics or to remove androgen effects, with male identity kept: criteria not met"]
    ],
    caveat: "DSM check: a wish to amputate a healthy limb (called body integrity identity disorder by some) is usually **not** about gender. Without psychosis, insisting on another gender is **not** a delusion (pp. 519–520)."
  },
  {
    id: "m14-05", short: "Posttransition = full-time + one procedure", name: "Full-time, Plus a Procedure (Paper optional)", original: true, dx: "gender-dysphoria-adults", sec: "s14-specifiers",
    "for": "The posttransition specifier (adolescents and adults)",
    letters: [
      ["F", "Full-time", "Living full-time in the experienced gender"],
      ["P", "Procedure", "At least one gender-affirming procedure or regimen done, or being prepared for: regular hormones or surgery"],
      ["P", "Paper optional", "A legal gender change is not required"]
    ],
    caveat: "DSM check: surgical examples are breast augmentation or vulvovaginoplasty (assigned male) and chest surgery, phalloplasty or metoidioplasty (assigned female). Used in the context of continuing treatment that supports the new gender assignment (p. 513)."
  },
  {
    id: "m14-06", short: "D for both, P for grown-ups", name: "D for both, P for grown-ups", original: true, dx: "gender-dysphoria-adults", sec: "s14-specifiers",
    "for": "Which specifiers belong to which criteria set",
    letters: [
      ["D", "With a disorder/difference of sex development", "Both sets; only for a specific, codable DSD documented in the record; code the DSD too (e.g., E25.0, E34.50)"],
      ["P", "Posttransition", "Adolescent and adult set only"]
    ],
    caveat: "DSM check: the child set (F64.2) has **only** the DSD specifier; the adolescent and adult set (F64.0) has both (pp. 512–513)."
  }
]);
