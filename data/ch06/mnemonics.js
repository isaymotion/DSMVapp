/* Chapter 6 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch06", "mnemonics", [
  {
    id: "m6-01", short: "Most people have symptoms in more than one", name: "CHeST", original: true, dx: "ocd", sec: "s6-ocd-features",
    "for": "OCD: the four common symptom dimensions",
    letters: [
      ["C", "Cleaning", "Contamination obsessions → washing and cleaning compulsions"],
      ["H", "Harm", "Fear of harming self or others (fire, accidents) → checking"],
      ["S", "Symmetry", "Need for exactness, “just right” → ordering, repeating, counting"],
      ["T", "Taboo thoughts", "Forbidden aggressive, sexual or religious obsessions → mental rituals, reassurance, avoidance"]
    ],
    caveat: "These dimensions are common across cultures but are **not** criteria. OCD needs obsessions and/or compulsions that are **time-consuming (>1 hour a day) or cause distress or impairment**."
  },
  {
    id: "m6-02", short: "Plus distress or impairment; not weight concerns in an eating disorder", name: "CAMERA", original: true, dx: "bdd", sec: "s6-bdd-criteria",
    "for": "Body dysmorphic disorder: common repetitive behaviors and mental acts (Criterion B)",
    letters: [
      ["C", "Comparing", "Comparing one’s appearance with others’: a mental act"],
      ["A", "Asking for reassurance", "“Does my nose look crooked?”"],
      ["M", "Mirror checking", "Also windows and phone screens, and excessive selfies"],
      ["E", "Excessive grooming or exercise", "Combing, plucking, makeup, weight lifting (muscle dysmorphia)"],
      ["R", "Remodeling attempts", "Cosmetic procedures, dermatology, even self-surgery; usually unhelpful"],
      ["A", "Appearance camouflage", "Hats, makeup, clothing, hair arranged to hide the “flaw”; skin picking to fix it"]
    ],
    caveat: "BDD needs a preoccupation with flaws **not observable or slight** to others plus repetitive behaviors or mental acts **at some point**. Without any repetitive behaviors, it is other specified OCRD (BDD-like without repetitive behaviors)."
  },
  {
    id: "m6-03", short: "Specify excessive acquisition and insight", name: "SAVED", original: true, dx: "hoarding", sec: "s6-hoard-criteria",
    "for": "Hoarding disorder: the criteria",
    letters: [
      ["S", "Saving need", "A perceived need to save items, with distress at discarding them (B)"],
      ["A", "Active living areas cluttered", "Use compromised; or clear only because third parties intervened (C)"],
      ["V", "Value regardless", "Difficulty discarding, whatever the items’ actual value (A)"],
      ["E", "Excluded causes", "Not a medical condition (brain injury, Prader-Willi) or another disorder (OCD, MDD, psychosis, dementia, autism) (E–F)"],
      ["D", "Distress or danger", "Distress or impairment, including keeping a safe environment (D)"]
    ],
    caveat: "Excessive acquisition (80%–90%) is a **specifier**, not a requirement. Hoarding driven by obsessions, or of bizarre items, points to OCD."
  },
  {
    id: "m6-04", short: "Same blueprint for trichotillomania and excoriation", name: "LASER", original: true, dx: "trichotillomania", sec: "s6-skin-ddx",
    "for": "Trichotillomania and excoriation disorder: the five criteria",
    letters: [
      ["L", "Loss or lesions", "Recurrent pulling with hair loss, or picking with skin lesions (A)"],
      ["A", "Attempts to stop", "Repeated attempts to decrease or stop (B)"],
      ["S", "Suffering", "Distress (shame, loss of control) or impairment (C)"],
      ["E", "Exclude medical causes", "Dermatological conditions; for picking, also substances such as cocaine and conditions such as scabies (D)"],
      ["R", "Rule out other disorders", "BDD (appearance), psychosis (parasites), stereotypies, OCD, nonsuicidal self-injury (E)"]
    ],
    caveat: "Tension before and relief after are **associated features, not criteria**: many people pull or pick automatically, without full awareness."
  },
  {
    id: "m6-05", short: "F42.8, with the reason recorded", name: "BBB-OOKS (“books”)", original: true, dx: "other-specified-ocrd", sec: "s6-other",
    "for": "Other specified OCRD: the seven named examples",
    letters: [
      ["B", "BDD-like with actual flaws", "Flaws clearly observable, preoccupation excessive"],
      ["B", "BDD-like without behaviors", "Never any repetitive behaviors or mental acts"],
      ["B", "BFRB, other", "Nail biting, lip biting, cheek chewing, with attempts to stop"],
      ["O", "Obsessional jealousy", "Nondelusional preoccupation with a partner’s infidelity"],
      ["O", "Olfactory reference disorder", "Belief one emits a foul body odor (jikoshu-kyofu)"],
      ["K", "Koro", "Fear the genitals will retract into the body, possibly causing death"],
      ["S", "Shubo-kyofu", "Taijin kyofusho variant: fear of having a bodily deformity"]
    ],
    caveat: "These are **examples**: any presentation that does not meet a specific OCRD can be recorded as other specified with its reason, or as unspecified (F42.9)."
  }
]);
