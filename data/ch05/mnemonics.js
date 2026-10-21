/* Chapter 5 mnemonics. letters: [letter, word, detail]. `original: true` marks mnemonics written for this app.
   Each mnemonic is also a card in the chapter's Mnemonics deck: keep ids stable. */
SP.add("ch05", "mnemonics", [
  {
    id: "m5-01", short: "3 of 8; ≥4 weeks under 18, typically ≥6 months in adults", name: "SEPARATE", original: true, dx: "separation-anxiety", sec: "s5-sad-criteria",
    "for": "Separation anxiety disorder: the eight Criterion A symptoms",
    letters: [
      ["S", "Sleeping away refused", "Or going to sleep without an attachment figure nearby (A6)"],
      ["E", "Excessive distress at separation", "When separation is anticipated or happens (A1)"],
      ["P", "Physical complaints", "Headaches, stomachaches, nausea, vomiting at separation (A8)"],
      ["A", "Alone, afraid to be", "At home or elsewhere without attachment figures; “shadowing” (A5)"],
      ["R", "Refuses to go out", "To school, work or elsewhere, for fear of separation (A4)"],
      ["A", "Accident to me", "Worry that an untoward event (getting lost, kidnapped, ill) will separate them (A3)"],
      ["T", "Terrible dreams", "Repeated nightmares about separation (A7)"],
      ["E", "Endangered loved ones", "Worry about losing attachment figures or harm befalling them (A2)"]
    ],
    caveat: "**Three** of the eight are needed, for at least **4 weeks** in children and adolescents and **typically 6 months** in adults. Adults can have the disorder with no childhood history."
  },
  {
    id: "m5-02", short: "4 of 13, peaking within minutes", name: "STUDENTS FEAR the 3 C’s", dx: "panic-attack", sec: "s5-panic-attack",
    "for": "Panic attack: all 13 symptoms",
    letters: [
      ["S", "Sweating", ""],
      ["T", "Trembling", "Or shaking"],
      ["U", "Unsteadiness", "Dizziness, light-headedness or faintness"],
      ["D", "Depersonalization", "Or derealization"],
      ["E", "Elevated heart rate", "Palpitations or pounding heart"],
      ["N", "Nausea", "Or abdominal distress"],
      ["T", "Tingling", "Paresthesias (numbness or tingling)"],
      ["S", "Shortness of breath", "Or smothering"],
      ["FEAR", "FEARs of dying and of losing control", "Fear of dying; fear of losing control or “going crazy” (the two cognitive symptoms)"],
      ["C", "Chest pain", "Or discomfort"],
      ["C", "Chills", "Or heat sensations"],
      ["C", "Choking", "Feelings of choking"]
    ],
    caveat: "A panic attack needs **4 of 13**, with an abrupt surge that **peaks within minutes**. Culture-specific symptoms (tinnitus, neck soreness, headache, uncontrollable screaming or crying) **do not count**. Fewer than four = limited-symptom attack."
  },
  {
    id: "m5-03", short: "2 of 5; feared because escape or help may be unavailable", name: "COAST", original: true, dx: "agoraphobia", sec: "s5-agora-criteria",
    "for": "Agoraphobia: the five situations",
    letters: [
      ["C", "Crowds or lines", "Standing in line or being in a crowd"],
      ["O", "Open spaces", "Parking lots, marketplaces, bridges"],
      ["A", "Alone outside the home", "The most common feared situation in children"],
      ["S", "Shut-in places", "Enclosed places: shops, theaters, cinemas"],
      ["T", "Transport", "Public transportation: cars, buses, trains, ships, planes"]
    ],
    caveat: "Fear of **2 of 5**, because **escape might be difficult or help unavailable** if panic-like, incapacitating or embarrassing symptoms occur. Fear of only one situation is specific phobia, situational type. Diagnosed **irrespective of panic disorder**."
  },
  {
    id: "m5-04", short: "+ hard-to-control worry ≥6 months; 3 of 6 (1 in children)", name: "C-FIRST", original: true, dx: "gad", sec: "s5-gad-criteria",
    "for": "Generalized anxiety disorder: the six Criterion C symptoms (“worry comes first”)",
    letters: [
      ["C", "Concentration, poor", "Or mind going blank"],
      ["F", "Fatigue", "Easily fatigued"],
      ["I", "Irritability", ""],
      ["R", "Restlessness", "Or feeling keyed up or on edge"],
      ["S", "Sleep disturbance", "Trouble falling or staying asleep, or restless, unsatisfying sleep"],
      ["T", "Tension, muscle", ""]
    ],
    caveat: "Criterion C needs **3 of the 6** in adults and **only 1** in children, alongside excessive worry about **a number of** things, **more days than not** for **at least 6 months**, that is **difficult to control**."
  },
  {
    id: "m5-05", short: "Code every type present", name: "Big Animals Naturally Scare Others", original: true, dx: "specific-phobia", sec: "s5-phobia-criteria",
    "for": "Specific phobia: the five stimulus types and their codes",
    letters: [
      ["B", "Blood-injection-injury", "F40.230 blood · F40.231 injections and transfusions · F40.232 other medical care · F40.233 injury"],
      ["A", "Animal", "F40.218: spiders, insects, dogs"],
      ["N", "Natural environment", "F40.228: heights, storms, water"],
      ["S", "Situational", "F40.248: airplanes, elevators, enclosed places"],
      ["O", "Other", "F40.298: choking or vomiting; in children, loud sounds or costumed characters"]
    ],
    caveat: "About **75%** of people with specific phobia fear more than one stimulus. Give a separate code for **each** type: snakes and flying = F40.218 + F40.248."
  },
  {
    id: "m5-06", short: "Everything else in the chapter: typically 6 months", name: "4 · 1 · 1 · 6", original: true, dx: "separation-anxiety", sec: "s5-cognition",
    "for": "Chapter 5 time rules",
    letters: [
      ["4", "Weeks: separation anxiety in youth", "At least 4 weeks under 18 (typically 6 months in adults)"],
      ["1", "Month: selective mutism", "Not limited to the first month of school"],
      ["1", "Month: panic disorder Criterion B", "Worry or behavior change after an attack (also ≈1 month of persistence suggests an independent disorder after a substance)"],
      ["6", "Months: everything else", "Specific phobia, social anxiety, agoraphobia (typically); GAD (at least, more days than not)"]
    ],
    caveat: "Only GAD says “**at least** 6 months.” For the phobias, social anxiety, agoraphobia and adult separation anxiety, 6 months is “**typically**”: a guide applied with some flexibility."
  }
]);
