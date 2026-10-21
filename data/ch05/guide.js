/* Chapter 5 study guide. Source: DSM-5-TR, Anxiety Disorders (pp. 215–261).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch05", "guide", {
  intro: "The anxiety disorders share **excessive fear and anxiety** and the **avoidance** that goes with them (p. 215). **Fear** is the response to a real or perceived **imminent** threat; **anxiety** is anticipation of a **future** one. The disorders differ in **what is feared or avoided** and **what the person thinks will happen**, so the key clinical skill is to ask about both. The chapter runs in order of **typical age at onset**: separation anxiety disorder and selective mutism in early childhood, specific phobia by about 10, social anxiety disorder in early adolescence, panic disorder and agoraphobia in early adulthood, and generalized anxiety disorder latest, around 35. Most need symptoms for **about 6 months**, though children need only **4 weeks** for separation anxiety and **1 month** for selective mutism. The **panic attack** is a specifier that can be added to any mental disorder, and **agoraphobia** is diagnosed whether or not panic disorder is present. Substance-induced and medically caused anxiety, and the other specified and unspecified categories, complete the chapter. The [[helper:anxiety|anxiety disorders helper]] and the [[helper:panic|panic attack helper]] walk you through the reasoning.",
  objectives: [
    "Define **fear** and **anxiety**, and explain how anxiety disorders differ from normal, developmentally expected or transient fear.",
    "State the criteria for **separation anxiety disorder** (3 of 8, **4 weeks** in youth, typically 6 months in adults) and recognize it in adults with no childhood history.",
    "Diagnose **selective mutism** (≥1 month, not the first month of school) and separate it from a second-language **silent period** and communication disorders.",
    "Diagnose and code **specific phobia** by stimulus type, coding **every** type present, and recall the **vasovagal** response in blood-injection-injury phobia.",
    "Apply the **social anxiety disorder** criteria, including the **peer-setting** rule for children and the **performance only** specifier, and distinguish it from shyness, avoidant personality disorder and autism.",
    "List the **13 panic attack symptoms**, the **4-symptom** threshold and the **minutes-to-peak** rule; tell **expected** from **unexpected** attacks; use “with panic attacks” as a specifier.",
    "Diagnose **panic disorder** (recurrent unexpected attacks plus **≥1 month** of worry or behavior change) and recall the **medical red flags** (onset after 45, atypical symptoms).",
    "Diagnose **agoraphobia** (**2 of 5** situations, feared because escape or help may be unavailable) and explain why it is coded separately from panic disorder.",
    "Diagnose **generalized anxiety disorder** (**6 months**, hard-to-control worry, **3 of 6** symptoms, **1** in children) and separate worry from obsessions and other focused fears.",
    "Recognize **substance/medication-induced** and **medically caused** anxiety, with their codes and typical causes, and use the **other specified** and **unspecified** categories.",
    "Recall the key epidemiology, onset, course, suicide risk and comorbidity of each disorder."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s5-map",
          title: "How the chapter is built",
          pages: "215–216",
          blocks: [
            { type: "p", text: "Anxiety disorders share **excessive fear and anxiety** and related behavioral disturbances. The two states overlap but differ. **Fear** goes with surges of **autonomic arousal** for fight or flight, thoughts of **immediate danger** and **escape**. **Anxiety** goes with **muscle tension** and **vigilance** in preparation for future danger, and with **cautious or avoidant** behavior. Pervasive avoidance can make the fear or anxiety look lower than it is (p. 215)." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:separation-anxiety|Separation anxiety disorder]]", "F93.0", "Fear of separation from attachment figures: 3 of 8, ≥4 weeks in youth, typically ≥6 months in adults", "217–222"],
              ["[[dx:selective-mutism|Selective mutism]]", "F94.0", "Consistent failure to speak where speech is expected, despite speaking elsewhere, ≥1 month", "222–224"],
              ["[[dx:specific-phobia|Specific phobia]]", "F40.2xx by stimulus", "Marked, immediate fear of a circumscribed object or situation, typically ≥6 months", "224–229"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "F40.10", "Fear of scrutiny and negative evaluation in social situations, typically ≥6 months", "229–235"],
              ["[[dx:panic-disorder|Panic disorder]]", "F41.0", "Recurrent unexpected panic attacks + ≥1 month of worry or behavior change", "235–242"],
              ["[[dx:panic-attack|Panic attack specifier]]", "Not coded", "4 of 13 symptoms peaking within minutes; added to any disorder", "242–246"],
              ["[[dx:agoraphobia|Agoraphobia]]", "F40.00", "Fear of 2 of 5 situations because escape or help may be unavailable", "246–250"],
              ["[[dx:gad|Generalized anxiety disorder]]", "F41.1", "Hard-to-control worry about many things, ≥6 months, 3 of 6 symptoms", "250–255"],
              ["[[dx:substance-induced-anxiety|Substance/medication-induced anxiety disorder]]", "By substance (e.g., F10.280)", "Panic or anxiety caused by intoxication, withdrawal or a medication", "255–258"],
              ["[[dx:anxiety-due-to-amc|Anxiety disorder due to another medical condition]]", "F06.4", "Anxiety as the direct physiological effect of a medical condition", "258–261"],
              ["[[dx:other-specified-anxiety|Other specified anxiety disorder]]", "F41.8", "Subthreshold or culturally framed presentations, reason recorded", "261"],
              ["[[dx:unspecified-anxiety|Unspecified anxiety disorder]]", "F41.9", "Subthreshold, reason not recorded or information insufficient", "261"]
            ] },
            { type: "flow", title: "Ordered by typical age at onset", steps: [
              ["Early childhood", "Separation anxiety disorder (preschool onward) · selective mutism (usually before 5)", "case"],
              ["Childhood", "Specific phobia (median 7–11, mostly before 10)", "drug"],
              ["Adolescence", "Social anxiety disorder (median 13; 75% between 8 and 15)", "hy"],
              ["Early adulthood", "Panic disorder (US median 20–24) · agoraphobia (mean 21)", "mech"],
              ["Mid-adulthood", "Generalized anxiety disorder (North American mean 35)", "guide"]
            ], note: "The order is a study aid in itself: an anxiety disorder that **first appears late in life**, especially panic after **45**, should prompt a search for a **medical or substance cause**." },
            { type: "callout", kind: "key", title: "Two questions sort almost every case", text: "**1. What is feared or avoided?** Separation from attachment figures, a circumscribed object, social scrutiny, the panic attacks themselves, places where escape is hard, or many everyday things. **2. What does the person think will happen?** Harm to a loved one, being directly harmed (bitten, crashing), being judged, having a heart attack or going crazy, being trapped without help, or a string of future misfortunes. The disorders are **highly comorbid**, but close examination of situations and cognitions separates them (p. 215)." }
          ]
        },
        {
          id: "s5-principles",
          title: "Rules that apply to every anxiety disorder",
          pages: "215–216",
          blocks: [
            { type: "list", title: "What makes anxiety a disorder (p. 215)", items: [
              "It is **excessive** or persists **beyond developmentally appropriate periods**; normal childhood fears (the dark, monsters, strangers around age 1) are not disorders.",
              "It is **persistent**, typically **6 months or more**, to separate it from transient, often stress-induced, fear. The duration is a **general guide** with some flexibility, and is **shorter in children** for separation anxiety disorder (4 weeks) and selective mutism (1 month).",
              "People with anxiety disorders **overestimate danger**, so the **clinician**, not the patient, judges whether the fear is out of proportion, taking **cultural context** into account. Since DSM-5, adults no longer have to recognize that their fear is excessive.",
              "Many anxiety disorders **begin in childhood** and **persist if untreated**.",
              "Most are about **twice as common in girls and women** (roughly 2:1).",
              "Each is diagnosed only when the symptoms are **not due to a substance, a medication or another medical condition** and not better explained by another mental disorder."
            ] },
            { type: "defs", title: "Building blocks used throughout the chapter", items: [
              ["Panic attack", "An abrupt surge of intense fear or discomfort that **peaks within minutes**, with **4 or more of 13** symptoms. It can be **expected** (cued) or **unexpected** (out of the blue), and it can be added as a specifier to any anxiety disorder and to other mental disorders (p. 216)."],
              ["Limited-symptom attack", "A panic-like surge with **fewer than four** symptoms."],
              ["Avoidance", "Behavior designed to prevent or minimize contact with what is feared. It can be obvious (refusing to fly), subtle (sitting by the exit, overpreparing a speech) or cognitive (distraction)."],
              ["“Endured with intense fear”", "The alternative to avoidance in most criteria sets: the person faces the situation but suffers through it."],
              ["Almost always provokes fear", "Phobias, social anxiety and agoraphobia need fear **nearly every time**: anxiety on one flight in five is not specific phobia."]
            ] },
            { type: "p", text: "**Severity scales.** DSM-5-TR offers disorder-specific severity measures in a common format across the anxiety disorders, rating behavioral, cognitive and physical symptoms, so that a person with several anxiety disorders can be followed with similar tools (p. 216)." },
            { type: "update", kind: "tr", title: "Suicide risk is now addressed disorder by disorder", text: "DSM-5-TR added **“Association With Suicidal Thoughts or Behavior”** sections across the manual. The chapter overview notes that people with anxiety are more likely to have suicidal thoughts, attempt suicide and die by suicide, and that **panic disorder, generalized anxiety disorder and specific phobia** are the anxiety disorders most strongly linked with the **transition from suicidal thoughts to a suicide attempt** (p. 216)." },
            { type: "callout", kind: "key", title: "How DSM-5 reshaped this chapter", text: "Compared with DSM-IV: **separation anxiety disorder** and **selective mutism** moved in from the childhood disorders; **OCD** and **PTSD/acute stress disorder** moved out to their own chapters; **agoraphobia** became a diagnosis of its own, no longer tied to panic disorder; the **panic attack** became a specifier usable with any disorder; social phobia became **social anxiety disorder**, with the “generalized” specifier replaced by **performance only**; and the 6-month guide now applies to adults as well as children." }
          ]
        }
      ]
    },
    {
      title: "Separation anxiety disorder",
      sections: [
        {
          id: "s5-sad-criteria",
          title: "Separation anxiety disorder: criteria",
          pages: "217–218",
          blocks: [
            { type: "criteria", title: "Separation anxiety disorder in brief", code: "F93.0", pages: "217", items: [
              ["A", "Developmentally inappropriate and excessive fear or anxiety about **separation from attachment figures**, with **at least three** of:", [
                "Recurrent **excessive distress** when anticipating or experiencing separation from home or attachment figures.",
                "Persistent worry about **losing** attachment figures or **harm** befalling them (illness, injury, disaster, death).",
                "Persistent worry about an **untoward event** to oneself (getting lost, kidnapped, an accident, illness) that would cause separation.",
                "Reluctance or refusal to **go out**, away from home, to school or work, because of fear of separation.",
                "Fear of or reluctance about **being alone** or without attachment figures at home or elsewhere.",
                "Reluctance or refusal to **sleep away from home** or to go to sleep without being near an attachment figure.",
                "Repeated **nightmares** about separation.",
                "Repeated **physical complaints** (headaches, stomachaches, nausea, vomiting) when separation occurs or is anticipated."
              ]],
              ["B", "Persistent: **at least 4 weeks** in children and adolescents (under 18), and **typically 6 months or more** in adults.", [], "The adult duration is a general guide, applied with some flexibility."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not better explained by another disorder: resistance to change in **autism**, delusions or hallucinations about separation in **psychosis**, refusal to go out without a companion in **agoraphobia**, worry about others’ health in **GAD**, or concern about having an illness in **illness anxiety disorder**."]
            ] },
            { type: "callout", kind: "mnemonic", title: "Counting the eight", text: "Think of the eight as **two worries** (harm to them, harm to me that would separate us), **three refusals** (going out, being alone, sleeping away), and **three body signals** (distress at separation, nightmares, physical complaints). Three of the eight are needed. See the [[page:mnemonics|Mnemonics]] page for a letter mnemonic." },
            { type: "defs", title: "What the symptoms look like (pp. 217–218)", items: [
              ["Shadowing", "Young children may be unable to stay in a room alone, follow the parent around the house, or need someone with them to go to another room (A5)."],
              ["Bedtime", "They insist that someone stay until they fall asleep and may make their way to the parents’ bed during the night (A6). They may refuse camp, sleepovers or errands."],
              ["Nightmares", "Content expresses the fear: destruction of the family by fire, murder or other catastrophe (A7)."],
              ["Physical complaints", "Headaches, abdominal complaints, nausea, vomiting. Palpitations, dizziness and faintness are **rare in young children** but can occur in adolescents and adults (A8)."],
              ["Adults", "Uncomfortable traveling independently (a hotel room away from home); they text or phone attachment figures throughout the day and repeatedly check where they are."]
            ] },
            { type: "case", title: "Clinical vignette: the morning stomachache", text: "An 8-year-old girl has vomited on four school mornings in the past 6 weeks. She cries at the school gate, phones her mother from the nurse’s office asking whether she is safe, and sleeps on her parents’ floor because she dreams that the house burns down. On weekends at home with her mother she is cheerful and well. The family moved cities 2 months ago.", point: "Distress at separation, worry about harm to her mother, refusal to sleep alone, separation nightmares and physical complaints: **five of eight**, for **more than 4 weeks** in a child, with impairment. **F93.0 separation anxiety disorder**. The move is a typical precipitant, and she is well when her attachment figure is present." }
          ]
        },
        {
          id: "s5-sad-features",
          title: "Separation anxiety disorder: features, prevalence and course",
          pages: "218–220",
          blocks: [
            { type: "list", title: "Associated features (p. 218)", items: [
              "Social withdrawal, apathy, sadness or poor concentration when separated.",
              "Fears of animals, monsters, the dark, burglars, kidnappers, car accidents or plane travel: anything seen as a danger to the family.",
              "**School refusal**, leading to academic problems and social isolation; anger or occasional aggression toward whoever forces the separation.",
              "When alone at night, young children may report **unusual perceptual experiences** (people peering into the room, creatures reaching for them).",
              "Children may seem demanding and in need of constant attention; as adults they may be **dependent and overprotective parents**. The demands breed family frustration and conflict."
            ] },
            { type: "table", caption: "Prevalence (pp. 218–219)", head: ["Group", "Figure"], rows: [
              ["Children (6–12-month)", "About **4%**; decreases from childhood through adolescence and adulthood"],
              ["US adolescents (12-month)", "**1.6%**"],
              ["US adults (12-month)", "**0.9%–1.9%**"],
              ["18 countries, adults", "Mean **1.0%** (range <0.1% to 2.7%); women 1.3% vs men 0.8%"],
              ["Sex", "Toddlers equal; school-age girls higher in the community; clinic samples equal"]
            ] },
            { type: "list", title: "Development and course (p. 219)", items: [
              "Heightened separation anxiety is **normal** in early development and can signal secure attachment (stranger anxiety around **age 1**).",
              "Onset can be as early as **preschool** and at any time in childhood and adolescence. Adults across 18 countries report a median onset in **late adolescence** (high-income countries) or the **mid-20s** (lower-income countries).",
              "**Adult onset without a childhood history is possible.** Most adults report a fluctuating course.",
              "Periods of exacerbation and remission are typical, but **most children** with the disorder are **free of impairing anxiety disorders** over their lifetimes.",
              "**Younger children** show anxiety only when separation happens and may not voice specific worries; **older children** worry about specific dangers (accidents, kidnapping, death); **adults** worry about offspring, spouses, parents and pets, and struggle with moving or marrying."
            ] },
            { type: "defs", title: "Risk and prognostic factors (p. 219)", items: [
              ["Environmental", "Often follows **life stress, especially a loss**: death of a relative or pet, illness, change of schools, divorce, a move, **immigration**, a disaster with separation. **Being bullied** is a risk factor. In young adults: leaving home, a new relationship, becoming a parent. **Parental overprotection and intrusiveness**."],
              ["Genetic and physiological", "Heritability about **73%** in 6-year-old twins (higher in girls). Children show **enhanced sensitivity to CO₂-enriched air**, a link they share with panic disorder. It aggregates in families."]
            ] },
            { type: "callout", kind: "culture", text: "Cultures differ in how much separation is expected and at what age offspring leave home. Taiwanese youth endorse more separation anxiety symptoms than US youth. Distinguish the disorder from the **high value some communities place on interdependence** among family members (p. 220)." },
            { type: "p", text: "**Suicide** (p. 220): separation anxiety disorder in youth may be linked with increased suicide risk, though the link is not specific and is seen in other anxiety disorders with heavy comorbidity. Being bullied in childhood predicted suicidal thoughts in young adulthood in a large twin study. **Functional consequences**: limited independent activity (school, camp, college, work outside the home); adults may reorganize work schedules to stay near or in contact with attachment figures. Reported impairment is greater in higher-income countries." }
          ]
        },
        {
          id: "s5-sad-ddx",
          title: "Separation anxiety disorder: differential diagnosis and comorbidity",
          pages: "220–222",
          blocks: [
            { type: "table", caption: "Same behavior, different fear", head: ["Disorder", "Why the person avoids or worries", "Clue"], rows: [
              ["**Separation anxiety disorder**", "Being away from attachment figures; harm befalling them", "Comfortable when the attachment figure is present"],
              ["[[dx:gad|GAD]]", "Many topics, not only separation", "Other worries are also excessive"],
              ["[[dx:panic-disorder|Panic disorder]]", "Unexpected attacks; fear of dying or going crazy", "Attacks in separation anxiety come with anticipated separation"],
              ["[[dx:agoraphobia|Agoraphobia]]", "Being trapped without help if panic-like symptoms strike", "Separation anxiety fears being away from **places of safety with attachment figures**"],
              ["Conduct disorder", "Truancy, not anxiety", "The child stays **away from** home rather than returning to it"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Fear of being judged", "School refusal driven by evaluation, not separation"],
              ["PTSD", "Intrusions and avoidance of trauma memories", "Separation fears are common after disasters; check what dominates"],
              ["Illness anxiety disorder", "One’s **own** illness", "Separation anxiety worries about the **health of attachment figures**"],
              ["Prolonged grief disorder", "Yearning for someone who **has died**", "Separation anxiety fears **possible** separation"],
              ["Depressive and bipolar disorders", "Low motivation to engage with the world", "Depression may also follow separation"],
              ["Oppositional defiant disorder", "Defiance in general", "Opposition only when forced to separate does not count"],
              ["Psychotic disorders", "Hallucinations", "Night-time misperceptions in separation anxiety are **reversed by the attachment figure’s presence**"],
              ["Dependent personality disorder", "**Indiscriminate** reliance on others", "Separation anxiety centers on **specific** attachment figures"],
              ["Borderline personality disorder", "Fear of abandonment **plus** identity, impulsivity and interpersonal problems", "Those extra features are not central to separation anxiety"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 221): in **children**, highly comorbid with **GAD and specific phobia**. In **adults**: specific phobia, PTSD, panic disorder, GAD, social anxiety disorder, agoraphobia, OCD, prolonged grief disorder, and personality disorders, especially the **Cluster C** group (dependent, avoidant, obsessive-compulsive). Depressive and bipolar disorders are also comorbid in adults." },
            { type: "callout", kind: "exam", text: "Two exam favorites: **adults can have separation anxiety disorder** (even without a childhood history), and the **4-week** rule applies only to people **under 18**. School refusal has at least three different engines: separation (separation anxiety), evaluation (social anxiety) and defiance or truancy (conduct disorder)." }
          ]
        }
      ]
    },
    {
      title: "Selective mutism",
      sections: [
        {
          id: "s5-sm",
          title: "Selective mutism: criteria, features and course",
          pages: "222–223",
          blocks: [
            { type: "criteria", title: "Selective mutism in brief", code: "F94.0", pages: "222", items: [
              ["A", "**Consistent failure to speak** in specific social situations where speech is expected (e.g., school), **despite speaking in other situations**."],
              ["B", "Interferes with **educational or occupational achievement** or with **social communication**."],
              ["C", "Lasts **at least 1 month**, **not limited to the first month of school**."],
              ["D", "Not due to **lack of knowledge of, or comfort with, the language** required."],
              ["E", "Not better explained by a **communication disorder** (e.g., childhood-onset fluency disorder), and not only during **autism spectrum disorder, schizophrenia or another psychotic disorder**."]
            ] },
            { type: "list", title: "What it looks like (pp. 222–223)", items: [
              "The child neither starts speech nor answers when spoken to, with children or adults.",
              "Speaks at home with **immediate family**, often not even with close friends or grandparents and cousins.",
              "Usually marked by **high social anxiety**; teachers struggle to assess skills such as reading.",
              "May communicate by **grunting, pointing or writing**, and may happily take part when speech is not needed (nonverbal parts in a school play).",
              "Associated: excessive shyness, fear of embarrassment, isolation, clinging, compulsive traits, negativism, tantrums or mild oppositional behavior. Language skills are **generally normal**.",
              "In clinics, almost always given **another anxiety diagnosis**, most often **social anxiety disorder**."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 222–223)", head: ["Topic", "Detail"], rows: [
              ["Prevalence", "**0.03%–1.9%** (clinic or school samples); rare; more common in young children"],
              ["Sex", "Roughly equal, with some evidence of more girls"],
              ["Higher risk", "Children who must speak a **non-native language** (e.g., immigrant families)"],
              ["Onset", "Usually **before age 5**, often noticed only at **school entry**"],
              ["Course", "Variable; many “outgrow” it, but **social anxiety symptoms often remain**"]
            ] },
            { type: "defs", title: "Risk factors (p. 223)", items: [
              ["Temperamental", "Negative affectivity or **behavioral inhibition**; parental shyness, isolation or social anxiety; subtle **receptive language** weaknesses that are still within the normal range."],
              ["Environmental", "Parental social inhibition as a **model**; parents described as **overprotective or controlling**."],
              ["Genetic and physiological", "Shared genetic factors with social anxiety disorder; abnormal **auditory efferent activity** during vocalization may make one’s own voice sound strange."]
            ] },
            { type: "p", text: "**Functional consequences** (p. 223): social isolation that grows with age, academic impairment (not asking for help, not asking to use the restroom), and teasing by peers. In some children the mutism works as a **compensatory strategy** that lowers arousal in social encounters." }
          ]
        },
        {
          id: "s5-sm-ddx",
          title: "Selective mutism: differential diagnosis",
          pages: "223–224",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 223–224)", items: [
              ["Silent period in second-language learners", "A **normal** phase in young children acquiring a new language. Consider selective mutism only if comprehension is adequate and refusal to speak persists **in both languages**, in several unfamiliar settings, for a prolonged period. Children who refuse to speak a language they do not know are **excluded** (Criterion D)."],
              ["Communication disorders", "Language disorder, speech sound disorder, childhood-onset fluency disorder (stuttering), social (pragmatic) communication disorder: the speech problem is **not restricted to particular social situations**."],
              ["Autism, psychosis, severe intellectual disability", "Social communication problems occur across settings. Selective mutism needs an **established capacity to speak** in some situations, typically at home."],
              ["Social anxiety disorder", "Often present as well: **give both diagnoses**."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 224): most often other anxiety disorders, chiefly **social anxiety disorder**, then separation anxiety disorder and specific phobia. In clinics, **autism spectrum disorder** co-occurs frequently. A substantial minority show **oppositional behavior**, sometimes only where speech is demanded. Communication delays occur in some." },
            { type: "case", title: "Clinical vignette: silent at school, chatty at home", text: "A 6-year-old girl has not said a word at school since starting first grade 4 months ago, though she nods, points and draws. Videos from home show her chatting and singing with her parents and brother. Her family speaks English at home, and her receptive language tested normal. She freezes and looks away when the teacher asks her a question.", point: "Consistent failure to speak at school despite fluent speech at home, beyond the first month, impairing learning and not explained by language knowledge or a communication disorder: **F94.0 selective mutism**. Assess for **social anxiety disorder**, which is common and can be diagnosed alongside." },
            { type: "callout", kind: "exam", text: "The **first month of school** does not count: many children are quiet when they start school. And a recently immigrated child who does not yet speak the new language does **not** have selective mutism." }
          ]
        }
      ]
    },
    {
      title: "Specific phobia",
      sections: [
        {
          id: "s5-phobia-criteria",
          title: "Specific phobia: criteria and coding",
          pages: "224–226",
          blocks: [
            { type: "criteria", title: "Specific phobia in brief", code: "F40.2xx (by stimulus)", pages: "224–225", items: [
              ["A", "**Marked** fear or anxiety about a **specific object or situation** (flying, heights, animals, injections, blood).", [], "In children: crying, tantrums, freezing or clinging."],
              ["B", "The object or situation **almost always** provokes **immediate** fear or anxiety."],
              ["C", "It is **actively avoided** or **endured with intense fear**."],
              ["D", "Fear is **out of proportion** to the actual danger and to the sociocultural context."],
              ["E", "Persistent, **typically 6 months or more**."],
              ["F", "Clinically significant **distress or impairment**."],
              ["G", "Not better explained by another disorder: panic-like symptoms in situations (**agoraphobia**), obsessions (**OCD**), trauma reminders (**PTSD**), separation (**separation anxiety disorder**) or social situations (**social anxiety disorder**)."]
            ], specifiers: [["Code by phobic stimulus", "Animal, natural environment, blood-injection-injury, situational or other (table below); code **every** type present"]] },
            { type: "table", caption: "Coding by stimulus type (pp. 224–225)", head: ["Code", "Type", "Examples"], rows: [
              ["**F40.218**", "Animal", "Spiders, insects, dogs"],
              ["**F40.228**", "Natural environment", "Heights, storms, water"],
              ["**F40.230**", "Blood-injection-injury: fear of **blood**", ""],
              ["**F40.231**", "Blood-injection-injury: fear of **injections and transfusions**", "Needles"],
              ["**F40.232**", "Blood-injection-injury: fear of **other medical care**", "Invasive procedures"],
              ["**F40.233**", "Blood-injection-injury: fear of **injury**", ""],
              ["**F40.248**", "Situational", "Airplanes, elevators, enclosed places"],
              ["**F40.298**", "Other", "Choking or vomiting; in children, loud sounds or costumed characters"]
            ] },
            { type: "callout", kind: "key", title: "Several phobias, several codes", text: "The average person with specific phobia fears **three** objects or situations, and about **75%** fear more than one. Give a separate diagnosis and code for each stimulus type: fear of snakes and flying is **F40.218** specific phobia, animal, **and F40.248** specific phobia, situational (p. 225)." },
            { type: "list", title: "Reading the criteria (pp. 225–226)", items: [
              "**Marked** means intense or severe, unlike the normal, transient fears common in the population.",
              "Fear can come in **anticipation** or in the **presence** of the stimulus, and may take the form of a full or limited-symptom **expected panic attack**. It scales with proximity.",
              "**Almost always and immediately**: someone anxious on only one flight in five does not qualify; the degree of fear can still vary between occasions.",
              "**Avoidance** may be obvious (refusing to see a doctor for fear of blood), subtle (refusing to look at pictures resembling snakes), or built into life choices (moving to an area without the feared animal, turning down jobs that need flying). Such avoidance can confirm the diagnosis even when the person no longer feels fear day to day.",
              "People often recognize their fear as excessive but still **overestimate danger**, so the **clinician** judges proportion, with context: fear of the dark may be reasonable amid ongoing violence."
            ] }
          ]
        },
        {
          id: "s5-phobia-features",
          title: "Specific phobia: physiology, prevalence and course",
          pages: "226–228",
          blocks: [
            { type: "compare", title: "Two physiological responses (p. 226)", items: [
              { title: "Animal, natural environment, situational", color: "drug", points: ["**Sympathetic** arousal: heart rate and blood pressure rise.", "Fight-or-flight response."] },
              { title: "Blood-injection-injury", color: "case", points: ["**Vasovagal** fainting or near-fainting.", "Brief rise in heart rate and blood pressure, then a **fall** in both.", "Affects women and men **nearly equally**.", "People avoid medical care even when ill."] }
            ] },
            { type: "p", text: "Neuroimaging links specific phobia with abnormal activity in the **amygdala, anterior cingulate cortex, thalamus and insula** in response to the phobic stimulus (p. 226)." },
            { type: "table", caption: "Prevalence (p. 226)", head: ["Group", "12-month prevalence"], rows: [
              ["United States", "About **8%–12%**"],
              ["Europe", "Similar (e.g., about 6%)"],
              ["Asia, Africa, Latin America", "Lower, **2%–4%**"],
              ["Children", "About **5%** (3%–9%)"],
              ["US adolescents 13–17", "About **16%**"],
              ["Older adults", "About **3%–5%**"],
              ["Sex", "Women about **2:1** across subtypes; blood-injection-injury nearly equal"]
            ] },
            { type: "list", title: "Development and course (pp. 226–227)", items: [
              "Can follow a **traumatic event** (attacked by an animal, stuck in an elevator), **observing** one (watching someone drown), an **unexpected panic attack** in the later-feared situation, or **informational transmission** (media coverage of a crash). Many people cannot recall how it started.",
              "Usually begins in **early childhood**, mostly **before 10**; median onset **7–11**, mean about **10**. **Situational** phobias start later than the other types.",
              "Childhood phobias wax and wane; those that **persist into adulthood rarely remit**.",
              "In children: fear may show as crying, tantrums, freezing or clinging, and young children cannot grasp avoidance, so gather information from parents and teachers. Transient, mildly impairing fears are **developmentally normal**.",
              "Phobia of **choking** almost always follows a near-choking event, at any age."
            ] },
            { type: "defs", title: "Older adults (p. 227)", items: [
              ["Common stimuli", "Natural environment phobias and **fear of falling**."],
              ["Medical overlap", "Co-occurs with coronary heart disease, COPD and Parkinson’s disease; older adults may attribute anxiety to medical illness."],
              ["Atypical forms", "Mixed anxiety and depression may warrant **unspecified anxiety disorder**."],
              ["Consequences", "Lower quality of life; may be a risk factor for **major neurocognitive disorder**. Fear of falling reduces mobility and can lead to needing home support."]
            ] },
            { type: "defs", title: "Risk factors (p. 227)", items: [
              ["Temperamental", "Negative affectivity (neuroticism), behavioral inhibition: shared with other anxiety disorders."],
              ["Environmental", "Parental overprotection, parental loss and separation, physical and sexual abuse; sometimes a negative encounter with the stimulus."],
              ["Genetic", "Type-specific familial risk (a relative with animal phobia raises the risk of animal phobia). Heritability: animal about **32%**, blood-injection-injury **33%**, situational **25%**."]
            ] },
            { type: "p", text: "**Suicide** (p. 228): specific phobia is linked with suicidal thoughts and attempts and with the **transition from ideation to attempt**; in a German 10-year study of people aged 14–24, **30%** of first suicide attempts were attributable to specific phobia. **Impairment** rises with the **number** of feared stimuli. Fear of vomiting or choking can substantially reduce food intake." }
          ]
        },
        {
          id: "s5-phobia-ddx",
          title: "Specific phobia: differential diagnosis",
          pages: "228–229",
          blocks: [
            { type: "compare", title: "Situational phobia or agoraphobia? (p. 228)", items: [
              { title: "Specific phobia, situational", color: "drug", points: ["Fear limited to **one** agoraphobic situation (airplanes and elevators both fall under public transportation).", "Fear of **direct harm** from the situation: the plane crashing, the elevator falling."] },
              { title: "Agoraphobia", color: "mech", points: ["Fear of **two or more** agoraphobic situations (airplanes, elevators **and** crowds).", "Fear that **escape is difficult or help unavailable** if panic-like or embarrassing symptoms occur."] }
            ] },
            { type: "defs", title: "Other differentials (pp. 228–229)", items: [
              ["Social anxiety disorder", "Situations feared because of **negative evaluation**."],
              ["Separation anxiety disorder", "Situations feared because of **separation** from an attachment figure."],
              ["Panic disorder", "Panic attacks **only** in response to the phobic stimulus → specific phobia. **Unexpected** attacks too → consider panic disorder."],
              ["OCD", "Fear driven by **obsessions**: blood feared because of contamination with HIV, driving feared because of images of harming others."],
              ["PTSD", "If the fear followed a trauma and **all PTSD criteria** are met, diagnose PTSD; specific phobia only if PTSD criteria are not met."],
              ["Eating disorders", "Avoidance limited to **food and food cues** suggests anorexia or bulimia nervosa."],
              ["Psychotic disorders", "Fear and avoidance due to **delusions**."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 229): rarely seen alone in medical settings. Because it starts early, specific phobia is usually the **temporally primary** disorder and raises the risk of other anxiety, depressive, bipolar, substance-related, somatic symptom and personality disorders (especially **dependent personality disorder**)." },
            { type: "case", title: "Clinical vignette: the fainting nursing student", text: "A 20-year-old nursing student fainted twice during her phlebotomy class and has skipped her own vaccinations for years. Seeing blood makes her heart race for a moment, then she goes pale, sweaty and lightheaded and slumps to the floor. She has no fear of flying, animals or crowds.", point: "Immediate, consistent fear with a **vasovagal** response, avoidance of injections and medical care, and impairment of her training: **specific phobia, blood-injection-injury type**. Code each feared stimulus: **F40.230** (blood) and **F40.231** (injections and transfusions)." }
          ]
        }
      ]
    },
    {
      title: "Social anxiety disorder",
      sections: [
        {
          id: "s5-social-criteria",
          title: "Social anxiety disorder: criteria",
          pages: "229–231",
          blocks: [
            { type: "criteria", title: "Social anxiety disorder in brief", code: "F40.10", pages: "229–230", items: [
              ["A", "Marked fear or anxiety about social situations involving **possible scrutiny**: social interactions (conversation, meeting strangers), being **observed** (eating, drinking) and **performing** (giving a speech).", [], "In children, the anxiety must occur in **peer settings**, not just with adults."],
              ["B", "Fear of acting in a way, or showing anxiety symptoms, that will be **negatively evaluated**: humiliating, embarrassing, leading to rejection or **offending others**."],
              ["C", "Social situations **almost always** provoke fear or anxiety.", [], "In children: crying, tantrums, freezing, clinging, shrinking or failing to speak."],
              ["D", "Situations are **avoided** or **endured with intense fear**."],
              ["E", "Fear is **out of proportion** to the actual threat and to the sociocultural context."],
              ["F", "Persistent, **typically 6 months or more**."],
              ["G", "Clinically significant **distress or impairment**."],
              ["H", "Not due to a **substance or medical condition**."],
              ["I", "Not better explained by another disorder, such as **panic disorder, body dysmorphic disorder or autism spectrum disorder**."],
              ["J", "If a medical condition is present (Parkinson’s disease, obesity, disfigurement from burns), the fear is **clearly unrelated or excessive**."]
            ], specifiers: [["Performance only", "Fear restricted to **speaking or performing in public**"]] },
            { type: "defs", title: "The specifier and the core fear (pp. 230–231)", items: [
              ["Performance only", "Fears most impairing in professional life (musicians, dancers, athletes, people who must speak publicly). They **do not fear or avoid nonperformance** social situations. DSM-5 replaced DSM-IV’s “generalized” specifier with this one."],
              ["Feared judgments", "Being seen as anxious, weak, crazy, stupid, boring, intimidating, dirty or unlikable."],
              ["Feared symptoms", "**Blushing** (a hallmark), trembling, sweating, stumbling over words, staring. A person who fears trembling may avoid eating, drinking, writing or pointing in public."],
              ["Offending others", "May be the predominant fear in cultures with strong **collectivistic** orientation (e.g., offending by one’s gaze)."],
              ["Paruresis", "“Shy bladder”: fear of urinating in public restrooms with others present; more common in men."]
            ] },
            { type: "list", title: "Reading the criteria (pp. 230–231)", items: [
              "**Anticipatory anxiety** can start far ahead: worrying for weeks before a party, rehearsing a speech for days.",
              "Avoidance may be **extensive** (no parties, school refusal) or **subtle** (overpreparing, diverting attention to others, limiting eye contact).",
              "Fear is not excessive if it reflects **actual danger** (being bullied). Some behavior that looks socially anxious is a sign of **respect** in certain cultures.",
              "Impairment: fear of public speaking does not qualify if the person never has to speak and is not distressed, but **passing up the job or course one wants** does."
            ] },
            { type: "case", title: "Clinical vignette: the resident who will not present", text: "A 27-year-old resident has swapped every case-conference slot for a year. Days before a presentation he cannot sleep, rehearses constantly and imagines colleagues noticing his shaking hands and red face. He eats lunch alone in his car because he fears trembling while holding a fork. He is calm at home and with his partner. His thyroid tests are normal.", point: "Fear of **scrutiny** and **negative evaluation** across performance and observation situations, almost always provoked, avoided, out of proportion, for over 6 months, with impairment: **F40.10 social anxiety disorder**. Because he also fears **being observed eating**, the **performance only** specifier does not apply." }
          ]
        },
        {
          id: "s5-social-features",
          title: "Social anxiety disorder: features, prevalence and course",
          pages: "231–233",
          blocks: [
            { type: "list", title: "Associated features (p. 231)", items: [
              "Inadequately assertive or excessively submissive, or (less often) controlling of the conversation; rigid posture, poor eye contact, an overly soft voice.",
              "Disclose little about themselves; may choose jobs without social contact (not true of **performance only**) and live at home longer. Men may marry late; women may never work outside the home.",
              "**Self-medication** is common, such as drinking before a party.",
              "In older adults, social anxiety may worsen medical symptoms such as tremor or tachycardia."
            ] },
            { type: "table", caption: "Prevalence (p. 231)", head: ["Group", "Figure"], rows: [
              ["United States (12-month)", "About **7%**; rising in the US and East Asia"],
              ["Much of the world", "0.5%–2.0%; Europe median 2.3%"],
              ["Adolescents 13–17", "Roughly **half** the adult rate"],
              ["Older adults", "2%–5%; prevalence falls after 65"],
              ["Sex", "Women more often (odds ratios 1.5–2.2), most marked in adolescents and young adults; equal or slightly more men in **clinical** samples"]
            ] },
            { type: "list", title: "Development and course (pp. 231–232)", items: [
              "US median onset **13 years**; **75%** begin between **8 and 15**.",
              "May grow out of childhood **social inhibition or shyness**, follow a **humiliating experience** (bullying, vomiting during a speech), or develop insidiously.",
              "**First onset in adulthood is relatively rare**, usually after a humiliating event or a new social role (a promotion, marrying into a different social class). It can fade after someone who feared dating marries and return after divorce.",
              "**Adolescents** fear and avoid more situations, including dating. **Older adults** report lower levels across a broader range of situations, often tied to sensory decline, tremor, incontinence or forgetting names.",
              "Remission varies: short, fluctuating and chronic trajectories exist. Among people who reach clinical care it tends to be **persistent**."
            ] },
            { type: "defs", title: "Risk factors (p. 232)", items: [
              ["Temperamental", "**Behavioral inhibition**, fear of negative evaluation, harm avoidance; high negative affectivity and **low extraversion**."],
              ["Environmental", "Peer victimization; childhood maltreatment and adversity; among African American and Caribbean Black people in the US, everyday **discrimination and racism**."],
              ["Genetic", "First-degree relatives have a **2–6 times** higher risk. Behavioral inhibition is strongly genetic, with gene-environment interaction (inhibited children are more affected by socially anxious parental modeling). Genetic influence is higher in children than adults."]
            ] },
            { type: "callout", kind: "culture", title: "Taijin kyofusho", text: "In Japan and Korea, **taijin kyofusho** involves social-evaluative concern centered on the fear of **making others uncomfortable** (“My gaze upsets people so they look away”), sometimes held with delusional intensity. It often meets social anxiety disorder criteria; other forms meet criteria for **body dysmorphic disorder** or **delusional disorder** (p. 233). Immigrant status is linked with lower rates in Latinx and non-Latinx White groups." },
            { type: "list", title: "Sex, suicide and consequences (pp. 233)", items: [
              "Age at onset does not differ by gender. **Women** report more social fears and more depression and other anxiety disorders; **men** more often fear dating, have ODD, conduct disorder or antisocial personality disorder, and use **alcohol and drugs** to cope.",
              "Among US adolescents, social anxiety disorder raised the risk of suicidal thoughts and attempts in **Latinx** youth, independent of depression and income.",
              "Linked with school dropout, lower employment, productivity, income and quality of life, being single or childless (especially men), and less close friendships.",
              "Only about **half** ever seek treatment in high-income countries, typically after **15–20 years** of symptoms. Unemployment predicts persistence."
            ] }
          ]
        },
        {
          id: "s5-social-ddx",
          title: "Social anxiety disorder: differential diagnosis and comorbidity",
          pages: "233–235",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 233–235)", items: [
              ["Normative shyness", "A common trait, valued in some societies. Only **12%** of self-identified shy people in the US meet criteria. Diagnose when full criteria and real impairment are present."],
              ["Agoraphobia", "Social situations feared because **escape or help** may be unavailable; people with social anxiety disorder are usually **calm when entirely alone**, unlike many with agoraphobia."],
              ["Panic disorder", "Panic attacks in social anxiety are **always cued** by social situations; the person fears the **evaluation** a visible attack would bring more than the attack itself."],
              ["GAD", "Social worries focus on **ongoing relationships**, and performance worries extend to nonsocial tasks and to times when no one is evaluating."],
              ["Separation anxiety disorder", "Comfortable socially when the attachment figure is present; social anxiety can persist **at home or with the attachment figure**."],
              ["Specific phobia", "May fear embarrassment (fainting at a blood draw) but not evaluation in other social situations."],
              ["Selective mutism", "Fails to speak from fear of evaluation, but has no fear when **no speaking** is required. Both can be diagnosed."],
              ["Major depressive disorder", "Fears evaluation because the person feels **bad or unworthy**; in social anxiety, the fear is about **particular behaviors or symptoms**."],
              ["Body dysmorphic disorder", "If social fears stem **only** from beliefs about appearance, do not add social anxiety disorder."],
              ["Delusional disorder", "Nonbizarre delusions of being rejected or offending others; most people with social anxiety have **good insight**."],
              ["Autism spectrum disorder", "Social communication deficits are core; people with social anxiety usually have **adequate social relationships and skills**, even if they seem awkward with strangers."],
              ["Avoidant personality disorder", "Broader avoidance, more impairment, a pervasively **negative self-concept** and a lifelong sense of not fitting in. The two are highly comorbid with each other."],
              ["Other disorders", "Schizophrenia (psychotic symptoms present); eating disorders and OCD (diagnose social anxiety only if its fears are **independent** of the eating or obsessional focus); ODD (refusal to speak out of **opposition**, not fear)."],
              ["Medical conditions", "Embarrassing symptoms (tremor in Parkinson’s disease) warrant the diagnosis only if the fear is **excessive**."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 235): other anxiety disorders, **major depressive disorder** and **substance use disorders**. Social anxiety disorder usually **precedes** them, except specific phobia and separation anxiety disorder. Chronic isolation can lead to depression. Substance intoxication or withdrawal (tremor) can feed further social fear. Frequent comorbidity with **body dysmorphic disorder** and **avoidant personality disorder**; in children, with high-functioning autism and selective mutism." },
            { type: "callout", kind: "exam", text: "Ask **“What would happen if people saw you?”** The social anxiety answer is about **being judged** (“they’d think I’m stupid”). The agoraphobia answer is about **being trapped without help**; the panic disorder answer is about **the attack itself** (“I’d die”); the depression answer is about **being worthless**; the avoidant personality answer is a **global** sense of being inferior and unlikable." }
          ]
        }
      ]
    },
    {
      title: "Panic disorder and panic attacks",
      sections: [
        {
          id: "s5-panic-attack",
          title: "The panic attack specifier",
          pages: "242–246",
          blocks: [
            { type: "criteria", title: "Panic attack (specifier, not a disorder)", code: "Not coded", pages: "242", items: [
              ["", "An **abrupt surge** of intense fear or discomfort that **peaks within minutes**, with **four or more** of:", [
                "Palpitations, pounding heart or fast heart rate",
                "Sweating",
                "Trembling or shaking",
                "Shortness of breath or smothering",
                "Feelings of choking",
                "Chest pain or discomfort",
                "Nausea or abdominal distress",
                "Dizziness, unsteadiness, light-headedness or faintness",
                "Chills or heat sensations",
                "Paresthesias (numbness or tingling)",
                "Derealization or depersonalization",
                "Fear of losing control or “going crazy”",
                "Fear of dying"
              ], "The surge can start from a **calm or an anxious** state. **Culture-specific** symptoms (tinnitus, neck soreness, headache, uncontrollable screaming or crying) can occur but **do not count** toward the four."]
            ], note: "Record it as a specifier: “posttraumatic stress disorder **with panic attacks**.” It is **not** added to panic disorder, where panic attacks are part of the criteria." },
            { type: "callout", kind: "mnemonic", title: "11 physical, 2 cognitive", text: "Of the 13 symptoms, **11 are physical** and only **2 are cognitive**: fear of losing control or going crazy, and fear of dying (p. 242). Derealization and depersonalization count among the physical group in the manual’s tally. Fewer than four symptoms = a **limited-symptom attack**. The [[page:mnemonics|Mnemonics]] page has a letter mnemonic for all 13." },
            { type: "defs", title: "Key distinctions (pp. 242–243)", items: [
              ["Within minutes", "Time to peak is literally a **few minutes**, measured from the **abrupt increase** in discomfort, not from when anxiety first began. An attack can subside to calm or anxiety and peak again."],
              ["Panic attack vs ongoing anxiety", "Distinguished by **time to peak**, its **discrete** nature and its usually **greater severity**."],
              ["Expected", "An **obvious cue or trigger**, such as a situation where attacks usually happen."],
              ["Unexpected", "**No obvious cue** at the time: while relaxing, or waking from sleep (**nocturnal panic attack**)."],
              ["Who decides?", "The **clinician**, from careful questioning about what happened just before the attack, together with the person’s own sense of whether it came out of the blue. **Cultural interpretations** can shape this (see below)."],
              ["Nocturnal panic", "Waking from sleep **in** a state of panic, not panicking **after** fully waking. Occurs at least once in a quarter to a third of people with panic disorder, most of whom also have daytime attacks; they tend to have more severe illness."]
            ] },
            { type: "table", caption: "Panic attacks: the numbers (pp. 243–244)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence (adults)", "**9.5%–11.2%** (Spain and US)"],
              ["Lifetime, cross-national", "**13.2%**"],
              ["Mean age at onset (US)", "About **22–23**"],
              ["Children", "Uncommon before puberty; **unexpected** attacks are **rare** in preadolescent children"],
              ["Older adults", "Less frequent; may say “discomfort” rather than “fear”; may retrospectively attribute attacks to a trigger"],
              ["Sex", "More common in women; women report more breathlessness and nausea, men more sweating"]
            ] },
            { type: "callout", kind: "culture", title: "Cultural concepts of distress", text: "**Khyâl attacks** (Cambodian: “wind” attacks with dizziness, **tinnitus** and **neck soreness**), **trúng gió** (Vietnamese: “hit by the wind,” with headaches) and **ataque de nervios** (Latin American: trembling, uncontrollable screaming or crying, aggressive or suicidal behavior, depersonalization, sometimes lasting longer than a few minutes). Cultural explanations can make an attack seem **expected** (a panic attack after walking into wind is “caused” by the wind) and can make certain symptoms seem dangerous, fueling catastrophic thinking. Symptom frequency varies too: more paresthesias among African Americans, dizziness in several Asian groups, trembling among non-Latinx Whites (pp. 238, 244)." },
            { type: "list", title: "Why the specifier matters (pp. 244–245)", items: [
              "Panic attacks occur across **anxiety, depressive, bipolar, eating, obsessive-compulsive, personality, psychotic and substance use** disorders, and in some medical conditions (cardiac, respiratory, vestibular, gastrointestinal). **Most never meet criteria for panic disorder.**",
              "They mark **greater severity, comorbidity and poorer treatment response**, and more severe attacks predict panic disorder and other conditions.",
              "They are linked with **suicide attempts and suicidal thoughts**, even after accounting for comorbidity.",
              "Physiologically: abrupt surges of arousal (usually heart rate) that peak and subside **within minutes**, with rises in heart rate and tidal volume and a **drop in pCO₂**.",
              "Risk factors: negative affectivity, **anxiety sensitivity**, behavioral inhibition, harm avoidance, prior **fearful spells**, **smoking**, separation from parents, overprotective parenting and parental rejection. In COPD, low perceived control over breathlessness raises risk."
            ] },
            { type: "defs", title: "Differential diagnosis of a panic attack (p. 245)", items: [
              ["Other paroxysmal episodes", "“Anger attacks” or surges of grief are **not** panic attacks: the essential feature is a surge of **fear or discomfort**."],
              ["Medical conditions", "Hyperthyroidism, **hyperparathyroidism**, **pheochromocytoma**, vestibular dysfunction, seizures, arrhythmias (including SVT), asthma, COPD."],
              ["Substances", "Stimulant intoxication (cocaine, amphetamine, **caffeine**), **cannabis** intoxication, and **withdrawal** from CNS depressants (alcohol, barbiturates)."],
              ["Panic disorder", "Repeated unexpected attacks are **necessary but not sufficient**: Criterion B must also be met."]
            ] }
          ]
        },
        {
          id: "s5-panic-criteria",
          title: "Panic disorder: criteria",
          pages: "235–237",
          blocks: [
            { type: "criteria", title: "Panic disorder in brief", code: "F41.0", pages: "235–236", items: [
              ["A", "**Recurrent unexpected panic attacks** (4 or more of the 13 symptoms, peaking within minutes)."],
              ["B", "At least one attack followed by **1 month or more** of one or both:", [
                "Persistent **concern or worry** about more attacks or their consequences (losing control, a heart attack, “going crazy”).",
                "A significant **maladaptive change in behavior** related to the attacks (avoiding exercise or unfamiliar situations)."
              ]],
              ["C", "Not due to a **substance** or **medical condition** (e.g., hyperthyroidism, cardiopulmonary disorders)."],
              ["D", "Not better explained by another disorder: attacks **only** in feared social situations (social anxiety disorder), with phobic objects (specific phobia), with obsessions (OCD), with trauma reminders (PTSD) or with separation (separation anxiety disorder)."]
            ], note: "If agoraphobia is also present, diagnose **both** (F41.0 + F40.00)." },
            { type: "defs", title: "Reading the criteria (pp. 236–237)", items: [
              ["Recurrent", "**More than one** unexpected **full-symptom** attack. Limited-symptom attacks alone are not enough."],
              ["Expected attacks too", "About **half** of people with panic disorder in the US and Europe also have expected attacks; these do **not** rule out the diagnosis."],
              ["Frequency", "From weekly for months, to bursts of daily attacks separated by weeks or months, to a couple a month for years. People with infrequent attacks resemble those with frequent ones."],
              ["The worries", "**Physical** (heart disease, seizures), **social** (embarrassment at visible symptoms) and **mental** (going crazy, losing control). Fear of dying goes with more severe presentations."],
              ["The behavior change", "Avoiding exertion, reorganizing life so help is always available, restricting activities, avoiding agoraphobic situations (if agoraphobia is present, diagnose it separately)."]
            ] },
            { type: "list", title: "Associated features (p. 237)", items: [
              "Broader anxiety about health and mental health: **catastrophic** readings of mild symptoms or side effects (a headache means a brain tumor).",
              "Often **intolerant of medication side effects**.",
              "Use of alcohol, prescribed medications or illicit drugs to control attacks; extreme behaviors such as food restriction or avoiding medications that cause bodily sensations."
            ] },
            { type: "case", title: "Clinical vignette: the third trip to the emergency department", text: "A 24-year-old accountant has had five episodes in 2 months of sudden pounding heart, chest tightness, tingling hands, shaking and terror that she is dying, peaking within 10 minutes. The first came while she was watching television. Her ECG, troponin, thyroid tests and urine drug screen were normal each time. For the past 6 weeks she has stopped going to the gym, carries a pulse oximeter and checks her heart rate many times a day.", point: "**Recurrent unexpected** full-symptom attacks plus **more than a month** of worry and behavior change, with medical and substance causes excluded: **F41.0 panic disorder**. Ask about avoidance of crowds, transport or being alone outside: if two agoraphobic situations are feared, add **F40.00 agoraphobia**." }
          ]
        },
        {
          id: "s5-panic-features",
          title: "Panic disorder: prevalence, course and risk",
          pages: "237–240",
          blocks: [
            { type: "table", caption: "Prevalence (pp. 237–238)", head: ["Group", "Figure"], rows: [
              ["US and Europe, adults and adolescents (12-month)", "About **2%–3%**"],
              ["Global lifetime", "**1.7%** (projected lifetime risk 2.7%)"],
              ["Asia, Africa, Latin America", "0.1%–0.8%"],
              ["American Indians", "2.6%–4.1%"],
              ["Before age 14", "**<0.4%**"],
              ["Older adults", "1.2% over 55; 0.7% over 64"],
              ["Sex", "Women about **2:1**, emerging before age 14"]
            ] },
            { type: "list", title: "Development and course (p. 238)", items: [
              "Median onset **20–24** in the US (32 cross-nationally); mean **34.7**. A few cases start in childhood; onset **after 55** is unusual.",
              "Untreated, the course is **chronic but waxing and waning**: some have episodic outbreaks with years of remission, others continuous symptoms. In a Dutch study, about **a quarter** relapsed within 2 years; **full remission without relapse is a minority outcome**.",
              "Complicated by other anxiety, depressive and substance use disorders. African American adults may have a more chronic course, possibly because of racism, stigma and limited access to care.",
              "“**Fearful spells**” are often dated back to childhood. Adolescents may worry less about further attacks and may be **reluctant to talk** about them.",
              "**Older adults**: autonomic “dampening,” hybrid limited-symptom attacks with generalized anxiety, and a tendency to explain attacks after the fact, which can hide unexpected attacks. Ask carefully whether an attack was expected **before** entering the situation."
            ] },
            { type: "defs", title: "Risk and prognostic factors (pp. 238–239)", items: [
              ["Temperamental", "Negative affectivity, **anxiety sensitivity** (believing anxiety symptoms are harmful), behavioral inhibition, harm avoidance; a history of **fearful spells**, especially when the first panic is appraised negatively. Childhood separation anxiety may precede panic disorder but is **not a consistent** risk factor."],
              ["Environmental", "Identifiable **stressors** in the months before the first attack; chronic stress raises severity. **10%–60%** report past trauma. Parental overprotection and low warmth; few economic resources; **smoking**."],
              ["Genetic and physiological", "Multiple genes, not yet identified; higher risk in children of parents with anxiety, depressive and bipolar disorders. **Hypersensitivity to CO₂-enriched air**. Respiratory disturbance such as **asthma** is linked by history, comorbidity and family history."]
            ] },
            { type: "list", title: "Sex, markers, suicide and impairment (pp. 239–240)", items: [
              "Women relapse more often and lose more quality of life, possibly from greater anxiety sensitivity or comorbid agoraphobia and depression. A **MAOA-uVNTR** variant may be a female-specific risk factor.",
              "**Attentional bias** to threat. Attacks are provoked far more easily than in controls by **sodium lactate, caffeine, isoproterenol, yohimbine, CO₂ and cholecystokinin**. Chronic **hyperventilation and frequent sighing** may occur. **None of these is diagnostic.**",
              "Panic attacks and panic disorder in the past year are tied to **suicidal thoughts and behavior**, even after accounting for comorbidity and abuse history. About **25%** of primary care patients with panic disorder report suicidal thoughts. Panic disorder may raise the risk of suicidal **behavior** but not of suicide **deaths**. Cognitive symptoms (derealization) go with suicidal thoughts; physical ones (dizziness, nausea) with suicidal behavior.",
              "High social, occupational and physical disability and the **most medical visits of any anxiety disorder**, strongest when agoraphobia is present."
            ] }
          ]
        },
        {
          id: "s5-panic-ddx",
          title: "Panic disorder: differential diagnosis and comorbidity",
          pages: "240–242",
          blocks: [
            { type: "callout", kind: "caution", title: "Red flags for a medical or substance cause", text: "**Onset after age 45**, or **atypical symptoms** during an attack: **vertigo, loss of consciousness, loss of bladder or bowel control, slurred speech, amnesia** (pp. 240–241). Useful tests include **serum calcium** (hyperparathyroidism) and a **Holter monitor** (arrhythmias)." },
            { type: "table", caption: "Causes to exclude (pp. 240–241)", head: ["Group", "Examples"], rows: [
              ["Endocrine", "**Hyperthyroidism**, **hyperparathyroidism**, **pheochromocytoma**"],
              ["Neurological", "**Vestibular** dysfunction, **seizure** disorders"],
              ["Cardiopulmonary", "Arrhythmias, **supraventricular tachycardia**, **asthma**, **COPD**"],
              ["Intoxication", "Cocaine, amphetamine-type stimulants, **caffeine**, **cannabis**"],
              ["Withdrawal", "Alcohol, barbiturates and other CNS depressants"]
            ] },
            { type: "defs", title: "Differential diagnosis (pp. 240–241)", items: [
              ["Only limited-symptom attacks", "Never a full unexpected attack → **other specified** or **unspecified anxiety disorder**, not panic disorder."],
              ["Substance/medication-induced anxiety disorder", "If attacks continue **long after** intoxication or withdrawal ends, or **preceded** heavy substance use, consider panic disorder, plus a substance use disorder if present. Self-medication is common."],
              ["Other anxiety and psychotic disorders", "Attacks triggered only by social situations, phobic objects, agoraphobic situations, worry (GAD) or separation are **expected**: diagnose only the relevant disorder. An unexpected attack may mark the onset of another anxiety disorder before attacks become cued. Add panic disorder only if there are also **unexpected** attacks with Criterion B worry or behavior change."]
            ] },
            { type: "p", text: "**Comorbidity** (pp. 241–242): rarely alone in clinics; **80%** of people with panic disorder in the community have a lifetime comorbid diagnosis, especially **agoraphobia**, other anxiety disorders, **major depressive disorder**, bipolar I and II and possibly mild alcohol use disorder. Panic disorder often begins **after** the comorbid disorder and can mark its severity. Lifetime comorbidity with MDD ranges from **10% to 65%**; in about **one-third** depression comes first, in two-thirds it begins with or after panic disorder. Some develop substance-related disorders from self-medication. Medical associations include dizziness, arrhythmias, hyperthyroidism, asthma, COPD and **irritable bowel syndrome**; mitral valve prolapse and thyroid disease are more common, inconsistently." },
            { type: "callout", kind: "exam", text: "“Panic attack” is **not** “panic disorder.” A depressed man who panics only when thinking about his debts has **major depressive disorder with panic attacks**. Panic disorder needs **recurrent unexpected** attacks **plus a month** of worry or behavior change." }
          ]
        }
      ]
    },
    {
      title: "Agoraphobia",
      sections: [
        {
          id: "s5-agora-criteria",
          title: "Agoraphobia: criteria",
          pages: "246–247",
          blocks: [
            { type: "criteria", title: "Agoraphobia in brief", code: "F40.00", pages: "246", items: [
              ["A", "Marked fear or anxiety about **two or more** of five situations:", [
                "Using **public transportation** (cars, buses, trains, ships, planes).",
                "Being in **open spaces** (parking lots, marketplaces, bridges).",
                "Being in **enclosed places** (shops, theaters, cinemas).",
                "**Standing in line** or being in a **crowd**.",
                "Being **outside the home alone**."
              ]],
              ["B", "Feared or avoided because **escape might be difficult** or **help might not be available** if panic-like or other incapacitating or embarrassing symptoms occur (e.g., **falling** in older adults, **incontinence**)."],
              ["C", "The situations **almost always** provoke fear or anxiety."],
              ["D", "They are **actively avoided**, **require a companion**, or are **endured with intense fear**."],
              ["E", "Fear is **out of proportion** to the actual danger and the sociocultural context."],
              ["F", "Persistent, **typically 6 months or more**."],
              ["G", "Clinically significant **distress or impairment**."],
              ["H", "If a medical condition is present (inflammatory bowel disease, Parkinson’s disease), the fear is **clearly excessive**."],
              ["I", "Not better explained by another disorder: not confined to **one** situational phobia, not only **social** situations, not only about **obsessions**, **appearance flaws**, **trauma reminders** or **separation**."]
            ], note: "Agoraphobia is diagnosed **irrespective of panic disorder**. If both are met, **assign both**." },
            { type: "callout", kind: "mnemonic", title: "The five places", text: "**Transport, Open, Enclosed, Line or crowd, Alone outside.** Two of the five are needed. See the [[page:mnemonics|Mnemonics]] page for a letter version." },
            { type: "defs", title: "Reading the criteria (pp. 246–247)", items: [
              ["The cognition", "“I can’t get out of here,” “There is nobody to help me.” **Panic-like symptoms** means any of the 13 panic symptoms; **other incapacitating or embarrassing symptoms** include vomiting, bowel symptoms, falling (older adults) and disorientation or getting lost (children)."],
              ["Almost always", "Anxiety in only one queue in five does not qualify."],
              ["Avoidance", "Behavioral (a job close to home, food delivery) or cognitive (distraction). It can become so severe that the person is **completely homebound**. A **companion** (partner, friend, health professional) and **safety behaviors** (sitting near exits) help them cope."],
              ["Proportion and culture", "Not agoraphobia if the fear is reasonable (a storm, a high-crime parking lot) or culturally expected (in some places it is normative for some women not to leave the house alone). Older adults may blame fears on age-related limits; people with agoraphobia **overestimate** danger from bodily symptoms."],
              ["Duration", "“Typically 6 months or more” excludes short-lived, transient problems."]
            ] },
            { type: "case", title: "Clinical vignette: the shopper who stopped shopping", text: "A 34-year-old man has not taken the train or entered a supermarket alone for 8 months. In both places he fears he will get dizzy and collapse with no way out and no one to help. He manages the supermarket only if his wife comes along and stands near the exit. He has never had an unexpected panic attack, and he is not worried about what others think of him.", point: "Fear of **two** agoraphobic situations (public transportation, enclosed places) because **escape or help** may be unavailable if he becomes incapacitated, needing a companion, for over 6 months: **F40.00 agoraphobia**, which does **not** require panic disorder." }
          ]
        },
        {
          id: "s5-agora-features",
          title: "Agoraphobia: prevalence, course and risk",
          pages: "247–249",
          blocks: [
            { type: "table", caption: "Prevalence and onset (pp. 247–248)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence", "About **1%–1.7%** of adolescents and adults worldwide"],
              ["Sex", "Women **twice** as likely"],
              ["Older adults", "0.4% (US, over 65); 0.5% (Europe and North America, over 55)"],
              ["Without panic disorder", "0.2%–0.8% of adults"],
              ["Preceded by panic", "Panic attacks or panic disorder precede onset in **30%** (community) to **over 50%** (clinic)"],
              ["Onset", "Two-thirds before **35**; mean **21**; **25–29** when no prior panic; a second incidence peak **after 40**; about 10% of older adults with it report first onset after 65"]
            ] },
            { type: "list", title: "Course (p. 248)", items: [
              "Usually **persistent and chronic**. **Complete remission is rare (10%)** without treatment.",
              "With comorbid panic disorder, **onset before 20** predicts recurrence after remission. More severe agoraphobia means less remission and more relapse.",
              "About **36%** of those who remit eventually **relapse**.",
              "Long-term risk of secondary **major depressive disorder**, **persistent depressive disorder** and **substance use disorders**.",
              "Situations and cognitions shift with age: **children** fear being outside alone and **getting lost**; **adults** fear panic-like symptoms; **older adults** fear shops, lines and open spaces, and **falling**. Children and adolescent boys may underreport, so use several informants."
            ] },
            { type: "defs", title: "Risk factors (pp. 248–249)", items: [
              ["Temperamental", "Behavioral inhibition, negative affectivity, trait anxiety and especially **anxiety sensitivity**."],
              ["Environmental", "Childhood adversity (separation, death of a parent), being attacked or mugged; families described as low in **warmth** and high in **overprotection**."],
              ["Genetic", "Heritability **61%**: of all the phobias, agoraphobia has the strongest and most specific link with the genetic factor for **proneness to phobias**. A family history of anxiety disorders predicts onset before 27; family history of panic disorder is specifically linked."]
            ] },
            { type: "p", text: "**Sex** (p. 249): men with agoraphobia have more comorbid **substance use disorders**. **Suicide**: about **15%** report suicidal thoughts or behavior, and in panic disorder, agoraphobic symptoms may be a risk factor for suicidal thoughts. **Consequences**: severity of agoraphobia drives disability **independently** of panic disorder; people may be homebound or unable to work, and those with panic disorder plus agoraphobia that began before 20 are less likely to marry." }
          ]
        },
        {
          id: "s5-agora-ddx",
          title: "Agoraphobia: differential diagnosis and comorbidity",
          pages: "249–250",
          blocks: [
            { type: "table", caption: "Agoraphobia or something else? (pp. 249–250)", head: ["Alternative", "How to tell"], rows: [
              ["[[dx:specific-phobia|Specific phobia, situational]]", "Fear limited to **one** agoraphobic situation, or fear of **direct harm** (the plane crashing)"],
              ["[[dx:separation-anxiety|Separation anxiety disorder]]", "Thoughts are about being **detached from attachment figures** and home, not about panic-like symptoms"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Situations cluster around **evaluation**; the fear is of being judged"],
              ["[[dx:panic-disorder|Panic disorder]]", "If avoidance does **not** extend to two or more agoraphobic situations, diagnose panic disorder alone"],
              ["Acute stress disorder and PTSD", "Fear and avoidance only of **trauma reminders**, not two or more agoraphobic situations"],
              ["[[dx:mdd|Major depressive disorder]]", "Staying home from **apathy**, low energy, low self-esteem or anhedonia, not fear"],
              ["Medical conditions", "Realistic fears (fainting with transient ischemic attacks, diarrhea with Crohn’s disease): diagnose only if fear is **clearly in excess**"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 250): about **90%** have another mental disorder, most often other anxiety disorders (specific phobia, panic disorder, social anxiety disorder), **major depressive disorder**, **PTSD** and **alcohol use disorder**. Other anxiety disorders usually come **before** agoraphobia; depression and substance use disorders usually come **after** (sometimes substance use comes first). Comorbid MDD makes agoraphobia more **treatment-resistant**." },
            { type: "callout", kind: "exam", title: "Why agoraphobia was split from panic disorder", text: "In DSM-IV, agoraphobia was mostly a feature of “panic disorder with agoraphobia.” DSM-5 made it a separate diagnosis because a substantial number of people have agoraphobia **without** panic symptoms, and agoraphobia predicts disability on its own. Today a patient with both receives **two codes**: F41.0 and F40.00." }
          ]
        }
      ]
    },
    {
      title: "Generalized anxiety disorder",
      sections: [
        {
          id: "s5-gad-criteria",
          title: "Generalized anxiety disorder: criteria",
          pages: "250–251",
          blocks: [
            { type: "criteria", title: "Generalized anxiety disorder in brief", code: "F41.1", pages: "250–251", items: [
              ["A", "Excessive anxiety and worry (**apprehensive expectation**), **more days than not** for **at least 6 months**, about **a number of** events or activities (work or school performance)."],
              ["B", "The worry is **difficult to control**."],
              ["C", "**Three or more** of six symptoms (some present more days than not for 6 months):", [
                "Restlessness or feeling keyed up or on edge",
                "Being easily fatigued",
                "Difficulty concentrating or mind going blank",
                "Irritability",
                "Muscle tension",
                "Sleep disturbance (trouble falling or staying asleep, or restless, unsatisfying sleep)"
              ], "**Only one** is required in **children**."],
              ["D", "Clinically significant **distress or impairment**."],
              ["E", "Not due to a **substance** or **medical condition** (e.g., hyperthyroidism)."],
              ["F", "Not better explained by another disorder: worry about **panic attacks** (panic disorder), **negative evaluation** (social anxiety), **contamination** or other obsessions (OCD), **separation** (separation anxiety), **trauma reminders** (PTSD), **gaining weight** (anorexia nervosa), **physical complaints** (somatic symptom disorder), **appearance** (body dysmorphic disorder), **having a serious illness** (illness anxiety disorder), or **delusional content** (schizophrenia, delusional disorder)."]
            ] },
            { type: "compare", title: "Pathological worry or everyday worry? (p. 251)", items: [
              { title: "Generalized anxiety disorder", color: "case", points: ["**Excessive**, hard to control, interferes with functioning.", "**Pervasive**, pronounced, distressing, long-lasting; often **without a precipitant**.", "Covers **many** life areas: the wider the range, the likelier the diagnosis.", "Comes with **physical** symptoms (restlessness, tension)."] },
              { title: "Everyday worry", color: "drug", points: ["Not excessive; feels manageable.", "Can be **put off** when more pressing matters arise.", "Usually tied to a real situation.", "Rarely accompanied by physical symptoms."] }
            ] },
            { type: "list", title: "What the worry looks like (pp. 251–252)", items: [
              "Adults worry about **everyday** things: job duties, health and finances, family members’ health, misfortune to children, **minor matters** (chores, being late). The focus **shifts** from one concern to another.",
              "**Children** worry about their **competence** or the quality of their performance, at school or in sport, even when no one is evaluating them; about **punctuality**; about catastrophes such as earthquakes or nuclear war. They may be **perfectionistic**, overly conforming, redo tasks and seek **excessive reassurance**.",
              "Associated: trembling, twitching, shakiness, muscle aches; sweating, nausea, diarrhea; an **exaggerated startle**. **Autonomic hyperarousal** (racing heart, breathlessness, dizziness) is **less prominent** than in panic disorder. Irritable bowel syndrome and headaches often accompany it."
            ] },
            { type: "case", title: "Clinical vignette: the worried bookkeeper", text: "A 41-year-old bookkeeper has worried “about everything” for years, and especially for the past 9 months: whether her son will crash his car, whether the company will close, whether she paid the electricity bill, whether she will be late for church. She cannot switch the worry off, sleeps badly, feels tense across her shoulders, tires easily and snaps at her husband. She has no panic attacks, drinks one coffee a day, and her thyroid tests are normal.", point: "Excessive, uncontrollable worry about **many** topics, more days than not for **over 6 months**, with **four** of six physical symptoms (sleep, tension, fatigue, irritability) and impairment: **F41.1 generalized anxiety disorder**." }
          ]
        },
        {
          id: "s5-gad-features",
          title: "Generalized anxiety disorder: prevalence, course and risk",
          pages: "251–253",
          blocks: [
            { type: "table", caption: "Prevalence (pp. 251–252)", head: ["Group", "Figure"], rows: [
              ["US adults (12-month)", "**2.9%**"],
              ["US adolescents (12-month)", "**0.9%**"],
              ["Worldwide (12-month)", "Mean **1.3%** (0.2%–4.3%)"],
              ["US lifetime morbid risk", "**9.0%**"],
              ["Older adults, incl. 75+", "2.8%–3.1% (US, Israel, Europe)"],
              ["Sex", "Women at least **twice** as likely; about two-thirds of community cases and 55%–60% of clinical cases are women"],
              ["Higher in", "People of European descent; high-income countries"]
            ] },
            { type: "list", title: "Development and course (p. 252)", items: [
              "Many say they have felt anxious **all their lives**; early on it may look like an **anxious temperament**.",
              "Mean onset in North America **35 years**, **later than any other anxiety disorder**, and rare before adolescence; onset spreads over a broad range and is older in lower-income countries.",
              "Course is **chronic**, waxing and waning between syndromal and subsyndromal forms. **Full remission is very rare.**",
              "Earlier onset brings more comorbidity and impairment; younger adults have more severe symptoms than older adults.",
              "The **content** of worry changes with age (performance in children, chronic disease and **falling** in older adults), but the clinical picture is consistent."
            ] },
            { type: "defs", title: "Risk factors (p. 252)", items: [
              ["Temperamental", "Behavioral inhibition, negative affectivity (neuroticism), harm avoidance, reward dependence and **attentional bias to threat**."],
              ["Environmental", "Childhood adversity; parenting marked by **overprotection, overcontrol** and reinforcement of avoidance."],
              ["Genetic", "About **one-third** of the risk is genetic, overlapping with neuroticism and shared with other anxiety and mood disorders, especially **major depressive disorder**."]
            ] },
            { type: "callout", kind: "culture", text: "In some cultural contexts **somatic** symptoms dominate the presentation; in others **cognitive** symptoms do, a difference clearest at first presentation. The topics of worry can be culturally specific, so judge excessiveness in context. In the US, higher prevalence is linked with exposure to **racism and discrimination** (p. 253)." },
            { type: "list", title: "Sex, suicide and consequences (p. 253)", items: [
              "Women’s comorbidity is mostly other anxiety disorders and unipolar depression; men’s extends to **substance use disorders**.",
              "GAD is linked with more suicidal thoughts and behavior, even after adjustment for comorbidity and stress. **Psychological autopsy studies show it is the anxiety disorder most often diagnosed in people who die by suicide.** Subthreshold GAD in the past year is also linked with suicidal thoughts.",
              "Worry slows people down and drains time and energy; it can undermine their ability to build **confidence in their children**.",
              "Most noninstitutionalized adults with GAD are **moderately to seriously disabled**; GAD accounts for **110 million disability days a year** in the US and raises medical resource use and **coronary** risk."
            ] }
          ]
        },
        {
          id: "s5-gad-ddx",
          title: "Generalized anxiety disorder: differential diagnosis",
          pages: "253–254",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 253–254)", items: [
              ["Anxiety disorder due to another medical condition", "Anxiety judged to be a physiological effect of a condition such as **pheochromocytoma** or **hyperthyroidism**."],
              ["Substance/medication-induced anxiety disorder", "A substance or toxin is etiologically related: anxiety only during heavy **coffee** drinking is **caffeine-induced anxiety disorder**."],
              ["Social anxiety disorder", "Anticipatory anxiety about **being evaluated**; GAD worry occurs whether or not anyone is evaluating."],
              ["Separation anxiety disorder", "Worry **only** about separation; GAD adds many other worries."],
              ["Panic disorder", "Panic attacks triggered by worry do not count; add panic disorder only for **unexpected** attacks with Criterion B."],
              ["Illness anxiety and somatic symptom disorders", "If the **only** fear is having an illness → illness anxiety disorder; worry centered on **somatic symptoms** → somatic symptom disorder. In GAD, health is one worry among many."],
              ["Obsessive-compulsive disorder", "GAD worry is about **forthcoming real-life problems** and is abnormal in its excess. Obsessions are **intrusive, unwanted** thoughts, urges or images, often inappropriate in content."],
              ["PTSD and adjustment disorders", "Not GAD if the anxiety is better explained by PTSD. Adjustment disorder is a residual category: within **3 months** of a stressor, gone within **6 months** after it ends, and only if no other disorder (including GAD) is met."],
              ["Depressive, bipolar and psychotic disorders", "Anxiety and worry are common features; diagnose GAD as well **if the anxiety is severe enough** to warrant clinical attention."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 254): most people with GAD have had or have **other anxiety disorders** and **unipolar depression**, a pattern rooted in shared **negative affectivity** and shared genetic and environmental risk. Comorbidity with substance use, conduct, psychotic, neurodevelopmental and neurocognitive disorders is less common." },
            { type: "callout", kind: "exam", text: "GAD is the worry disorder with the **most exclusions**: in Criterion F, almost every other anxious preoccupation (panic, evaluation, contamination, separation, trauma, weight, symptoms, appearance, illness, delusions) belongs to another diagnosis. The positive features are **many topics**, **hard to control**, **6 months**, and **3 of 6** (1 in children)." }
          ]
        }
      ]
    },
    {
      title: "Substance, medical and residual categories",
      sections: [
        {
          id: "s5-substance",
          title: "Substance/medication-induced anxiety disorder",
          pages: "255–258",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced anxiety disorder in brief", code: "By substance", pages: "255–256", items: [
              ["A", "**Panic attacks or anxiety** predominate in the clinical picture."],
              ["B", "Evidence of both: (1) symptoms began **during or soon after** intoxication or withdrawal, or after exposure to or withdrawal from a **medication**; and (2) the substance can **produce** them."],
              ["C", "Not better explained by an **independent** anxiety disorder: symptoms that **preceded** use, persist for a substantial time (**about 1 month**) after acute withdrawal or severe intoxication, or other evidence such as recurrent non-substance episodes."],
              ["D", "Not only during **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], note: "Diagnose this **instead of** intoxication or withdrawal only when the anxiety **predominates** and is severe enough to need clinical attention. Specify onset **during intoxication**, **during withdrawal** or **after medication use**." },
            { type: "table", caption: "ICD-10-CM codes (p. 256)", head: ["Substance", "Mild use disorder", "Moderate or severe use disorder", "No use disorder"], rows: [
              ["Alcohol", "F10.180", "F10.280", "F10.980"],
              ["Caffeine", "NA", "NA", "**F15.980**"],
              ["Cannabis", "F12.180", "F12.280", "F12.980"],
              ["Phencyclidine; other hallucinogen", "F16.180", "F16.280", "F16.980"],
              ["Inhalant", "F18.180", "F18.280", "F18.980"],
              ["Opioid", "**F11.188**", "**F11.288**", "**F11.988**"],
              ["Sedative, hypnotic or anxiolytic", "F13.180", "F13.280", "F13.980"],
              ["Amphetamine-type (or other stimulant)", "F15.180", "F15.280", "F15.980"],
              ["Cocaine", "F14.180", "F14.280", "F14.980"],
              ["Other (or unknown), e.g., salbutamol", "F19.180", "F19.280", "F19.980"]
            ] },
            { type: "steps", title: "Recording the diagnosis (pp. 256–257)", items: [
              ["4th character", "**1** = comorbid mild use disorder; **2** = moderate or severe; **9** = no use disorder (e.g., one-time heavy use). The use disorder is folded into the code and **not diagnosed separately**."],
              ["Name order", "Use disorder first, then the induced disorder, then onset: “**F13.280** severe lorazepam use disorder with lorazepam-induced anxiety disorder, with onset during withdrawal.”"],
              ["No use disorder", "“**F16.980** psilocybin-induced anxiety disorder, with onset during intoxication.”"],
              ["Unclassified drugs", "Medications outside the classes, or an unknown substance, use **other (or unknown)**: “**F19.980** salbutamol-induced anxiety disorder, with onset after medication use.”"],
              ["Several substances", "List each one separately with its own code."]
            ] },
            { type: "callout", kind: "exam", title: "Two coding oddities", text: "**Caffeine** has only a “without use disorder” code (**F15.980**), because DSM-5-TR has no caffeine use disorder (it is a condition for further study). **Opioid**-induced anxiety ends in **.188/.288/.988**, not .x80. Every other class ends in **.x80**." },
            { type: "defs", title: "What causes it (p. 257)", items: [
              ["During intoxication", "Alcohol, **caffeine**, **cannabis**, phencyclidine, other hallucinogens, inhalants, **stimulants (including cocaine)**, other or unknown substances."],
              ["During withdrawal", "**Alcohol**; **opioids**; **sedatives, hypnotics and anxiolytics**; stimulants (including cocaine); other or unknown substances."],
              ["Medications", "Anesthetics and analgesics, **sympathomimetics and bronchodilators**, anticholinergics, **insulin**, **thyroid preparations**, oral contraceptives, antihistamines, antiparkinsonian drugs, **corticosteroids**, antihypertensive and cardiovascular drugs, anticonvulsants, lithium, antipsychotics (akathisia can masquerade as anxiety) and antidepressants."],
              ["Toxins", "Heavy metals, organophosphate insecticides, nerve gases, **carbon monoxide**, CO₂, gasoline and paint."]
            ] },
            { type: "list", title: "Course, prevalence and differential (pp. 257–258)", items: [
              "With a prescribed drug, onset is during treatment (or its withdrawal); after stopping, symptoms usually **improve within days to a month**, depending on half-life and withdrawal.",
              "Do not diagnose if anxiety **began before** the substance, or persists **beyond about 1 month** after severe intoxication or withdrawal: look for other causes.",
              "Rare in the community (about **0.002%** in the US), more common in clinical settings. **Urine toxicology** helps.",
              "**Intoxication or withdrawal** alone usually suffices (anxiety is characteristic of **alcohol withdrawal**); use this diagnosis only when anxiety predominates.",
              "**Independent anxiety disorder**: symptoms occur at other times, before use or long after it.",
              "**Delirium**: anxiety only during delirium is part of the delirium.",
              "**Medical condition**: if the illness, not its treatment, causes the anxiety, diagnose anxiety disorder due to another medical condition; a **medication change** can settle which. **Both** can be given if both contribute; if unclear, use **other specified or unspecified anxiety disorder**."
            ] }
          ]
        },
        {
          id: "s5-medical",
          title: "Anxiety disorder due to another medical condition",
          pages: "258–261",
          blocks: [
            { type: "criteria", title: "Anxiety disorder due to another medical condition in brief", code: "F06.4", pages: "258–259", items: [
              ["A", "**Panic attacks or anxiety** predominate."],
              ["B", "History, examination or laboratory evidence that it is the **direct pathophysiological consequence** of another medical condition."],
              ["C", "Not better explained by another mental disorder (especially **adjustment disorder with anxiety**, in which the illness is the stressor)."],
              ["D", "Not only during **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], note: "Name the condition in the diagnosis and code it **first**: “**D35.00** pheochromocytoma; **F06.4** anxiety disorder due to pheochromocytoma.”" },
            { type: "steps", title: "Three tests for a medical cause (p. 259)", items: [
              ["Timing", "A clear **temporal link** between onset, worsening or remission of the illness and the anxiety."],
              ["Atypical features", "Features unusual for a primary anxiety disorder: **atypical age at onset** or course."],
              ["Mechanism", "Literature evidence that the condition can cause anxiety **physiologically** (e.g., hyperthyroidism)."]
            ] },
            { type: "table", caption: "Medical conditions that can cause anxiety (p. 259)", head: ["System", "Examples"], rows: [
              ["Endocrine", "**Hyperthyroidism**, **pheochromocytoma**, **hypoglycemia**, hyperadrenocortisolism"],
              ["Cardiovascular", "Congestive heart failure, **pulmonary embolism**, arrhythmia (atrial fibrillation)"],
              ["Respiratory", "**COPD**, **asthma**, pneumonia"],
              ["Metabolic", "**Vitamin B12 deficiency**, **porphyria**"],
              ["Neurological", "Neoplasms, **vestibular dysfunction**, encephalitis, **seizure disorders**"]
            ] },
            { type: "defs", title: "Differential diagnosis (pp. 260–261)", items: [
              ["Delirium; major or mild neurocognitive disorder", "Not diagnosed if anxiety occurs **only during delirium**. **Can** be added to a neurocognitive disorder if the same pathology causes prominent anxiety."],
              ["Mixed presentations", "If mood and anxiety symptoms mix, the **predominant** symptoms decide which “due to another medical condition” diagnosis applies."],
              ["Substance/medication-induced", "Consider recent or prolonged substance use, withdrawal or toxins. **Corticosteroids, estrogens and metoclopramide** are known to raise anxiety. **Both** diagnoses can be given."],
              ["Primary anxiety disorders", "No direct physiological mechanism can be shown. **Late onset**, **atypical symptoms** and **no personal or family history** call for a thorough medical workup. Anxiety that **raises** cardiovascular risk is not anxiety due to the cardiac disease."],
              ["Illness anxiety disorder", "Worry about illness and bodily preoccupation; any medical condition is **not physiologically** causing the anxiety."],
              ["Adjustment disorder with anxiety", "A maladaptive response to the **meaning or consequences** of the diagnosis. Anxiety due to a medical condition has **prominent physical symptoms** (shortness of breath) and focuses less on the stress of being ill."]
            ] },
            { type: "p", text: "**Course** (p. 259): follows the underlying illness. Prevalence is unclear; anxiety disorders are more common in people with asthma, hypertension, ulcers and arthritis, but not necessarily as a direct effect. The diagnosis does **not** cover primary anxiety disorders that arise in the context of chronic illness, which matters especially in **older adults**. **Laboratory tests and examination** are needed to confirm the medical condition." },
            { type: "case", title: "Clinical vignette: the late-onset “panic”", text: "A 52-year-old man with no psychiatric history has had six episodes in a month of pounding headache, drenching sweat, palpitations and terror, with blood pressure readings of 210/120 during two of them. Between episodes he feels well and is not worried about having more. His 24-hour urine metanephrines are markedly raised, and an adrenal mass is found.", point: "First onset **after 45**, paroxysmal hypertension and a demonstrated mechanism: **D35.00 pheochromocytoma; F06.4 anxiety disorder due to pheochromocytoma**. He also lacks the Criterion B worry of panic disorder, which in any case is excluded by Criterion C." }
          ]
        },
        {
          id: "s5-other",
          title: "Other specified and unspecified anxiety disorder",
          pages: "261",
          blocks: [
            { type: "p", text: "Both categories cover anxiety symptoms that cause distress or impairment and **predominate**, but do not meet full criteria for any anxiety disorder **or for adjustment disorder** with anxiety or with mixed anxiety and depressed mood (p. 261)." },
            { type: "compare", title: "The two residual categories", items: [
              { title: "Other specified anxiety disorder (F41.8)", color: "guide", points: ["The clinician **records the reason**: “other specified anxiety disorder, generalized anxiety occurring less often than ‘more days than not.’”", "Listed examples: **limited-symptom attacks**; **generalized anxiety less often than more days than not**; **khyâl cap** (wind attacks); **ataque de nervios** (attack of nerves)."] },
              { title: "Unspecified anxiety disorder (F41.9)", color: "clin", points: ["The clinician **chooses not to** give the reason.", "Includes cases with **insufficient information**, such as in the **emergency department**.", "Also suits atypical mixed anxiety and depression in older adults (p. 227)."] }
            ] },
            { type: "callout", kind: "culture", title: "Cultural syndromes in the residual category", text: "**Khyâl cap** and **ataque de nervios** are named examples of other specified anxiety disorder when they do not meet another disorder’s criteria. Some presentations of ataque de nervios meet criteria for other conditions, such as **functional neurological symptom disorder** or **other specified dissociative disorder**. See “Culture and Psychiatric Diagnosis” in Section III." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s5-cognition",
          title: "What is feared, and why: the master comparison",
          pages: "215–261",
          blocks: [
            { type: "table", caption: "The anxiety disorders side by side", head: ["Disorder", "What is feared or avoided", "The feared outcome", "Duration"], rows: [
              ["[[dx:separation-anxiety|Separation anxiety]]", "Separation from attachment figures", "Harm to them, or an event that separates us", "4 wk (youth); ~6 mo (adults)"],
              ["[[dx:selective-mutism|Selective mutism]]", "Speaking where speech is expected", "Usually social: being heard and judged", "1 mo (not the first month of school)"],
              ["[[dx:specific-phobia|Specific phobia]]", "A circumscribed object or situation", "Direct harm (bite, crash, fall), disgust, fainting", "~6 mo"],
              ["[[dx:social-anxiety|Social anxiety]]", "Situations with possible scrutiny", "Negative evaluation: humiliation, rejection, offending", "~6 mo"],
              ["[[dx:panic-disorder|Panic disorder]]", "The attacks themselves", "Heart attack, dying, losing control, going crazy", "1 mo of worry or behavior change"],
              ["[[dx:agoraphobia|Agoraphobia]]", "2 of 5: transport, open, enclosed, lines or crowds, outside alone", "Trapped or helpless if panic-like or embarrassing symptoms strike", "~6 mo"],
              ["[[dx:gad|GAD]]", "Many everyday matters", "A shifting series of future misfortunes", "6 mo, more days than not"]
            ] },
            { type: "ladder", title: "Chapter 5: time rules", ticks: [[4, "min"], [22, "1 mo"], [38, "3 mo"], [55, "6 mo"]], rows: [
              { label: "Panic attack", dx: "panic-attack", from: 0, to: 4, color: "case", span: "Peak within minutes" },
              { label: "Separation anxiety disorder (under 18)", dx: "separation-anxiety", from: 22, to: 100, color: "guide", open: true, span: "≥4 weeks" },
              { label: "Selective mutism", dx: "selective-mutism", from: 22, to: 100, color: "guide", open: true, span: "≥1 month, not the first month of school" },
              { label: "Panic disorder, Criterion B", dx: "panic-disorder", from: 22, to: 100, color: "drug", open: true, span: "≥1 month of worry or behavior change" },
              { label: "Substance-induced: persistence that suggests independence", dx: "substance-induced-anxiety", from: 0, to: 22, color: "clin", span: "≈1 month after stopping" },
              { label: "Separation anxiety disorder (adults)", dx: "separation-anxiety", from: 55, to: 100, color: "hy", open: true, span: "Typically ≥6 months" },
              { label: "Specific phobia · social anxiety · agoraphobia", dx: "specific-phobia", from: 55, to: 100, color: "mech", open: true, span: "Typically ≥6 months" },
              { label: "Generalized anxiety disorder", dx: "gad", from: 55, to: 100, color: "drug", open: true, span: "≥6 months, more days than not" }
            ], note: "Only **GAD** states 6 months as a firm requirement (“at least 6 months”). For phobias, social anxiety, agoraphobia and adult separation anxiety, 6 months is **“typically”**: a guide applied with some flexibility. Adjustment disorder with anxiety starts within **3 months** of a stressor." },
            { type: "callout", kind: "pearl", title: "Same panic attack, different diagnosis", text: "Panic in a crowd because escape is hard → **agoraphobia**. Panic when giving a talk → **social anxiety disorder**. Panic at the sight of a needle → **specific phobia**. Panic when the parent leaves → **separation anxiety disorder**. Panic triggered by worry → **GAD**. Panic **out of the blue**, followed by a month of dread → **panic disorder**. In every case but the last, add “**with panic attacks**.”" }
          ]
        },
        {
          id: "s5-approach",
          title: "A practical approach and the classic traps",
          pages: "215–261",
          blocks: [
            { type: "steps", title: "Seven steps for an anxious patient", items: [
              ["1. Cause", "Substances (caffeine, stimulants, cannabis, alcohol or benzodiazepine withdrawal), medications (bronchodilators, steroids, thyroid hormone) and medical conditions (thyroid, pheochromocytoma, arrhythmia, hypoglycemia, COPD). Be most suspicious with onset **after 45** or **atypical** symptoms."],
              ["2. Panic attacks?", "If yes: expected or unexpected? Unexpected and recurrent with a month of worry → **panic disorder**. Otherwise add **“with panic attacks”** to whatever disorder explains them."],
              ["3. What is feared?", "Separation, an object, scrutiny, being trapped, or many things."],
              ["4. Why is it feared?", "Harm to loved ones, direct harm, judgment, incapacity without help, or a stream of worries. This settles phobia vs agoraphobia vs social anxiety."],
              ["5. How many situations?", "One agoraphobic situation → situational phobia; two or more → agoraphobia."],
              ["6. Duration and impairment", "Apply the time rule for that disorder and confirm distress or impairment and proportion, in cultural context."],
              ["7. Exclusions and comorbidity", "OCD, PTSD, body dysmorphic disorder, illness anxiety, depression, psychosis, autism. Then list every disorder that is met: comorbidity is the rule. Screen for **suicidal thoughts**."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) **Adults** can have separation anxiety disorder; the 4-week rule is for under-18s. 2) The **first month of school** never counts for selective mutism. 3) A child learning a **new language** does not have selective mutism. 4) Code **every** phobia type present. 5) **Blood-injection-injury** phobia causes **fainting**, not just racing heart. 6) Social anxiety in children must occur with **peers**. 7) Performance only means **no** fear of other social situations. 8) The panic attack is a **specifier**, never coded, and never added to panic disorder. 9) **Culture-specific** symptoms do not count toward the four. 10) Agoraphobia does **not** need panic disorder, and both are coded when present. 11) GAD needs **3 of 6** in adults, **1** in children. 12) Caffeine-induced anxiety is **F15.980**; opioid-induced ends in **.x88**." },
            { type: "p", text: "Practice with the [[helper:anxiety|anxiety disorders helper]] and the [[helper:panic|panic attack helper]], then compare [[dx:panic-disorder|panic disorder]] with [[dx:agoraphobia|agoraphobia]], and [[dx:social-anxiety|social anxiety disorder]] with [[dx:agoraphobia|agoraphobia]], side by side in the library." }
          ]
        }
      ]
    }
  ]
});
