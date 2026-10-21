/* Chapter 6 study guide. Source: DSM-5-TR, Obsessive-Compulsive and Related Disorders (pp. 263–294).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch06", "guide", {
  intro: "The obsessive-compulsive and related disorders share **preoccupations** and **repetitive behaviors or mental acts**, or recurrent **body-focused repetitive behaviors** that the person repeatedly tries to stop (p. 263). **OCD** is defined by **obsessions** (intrusive, unwanted thoughts, urges or images) and **compulsions** (repetitive acts the person feels driven to perform), taking **more than an hour a day** or causing distress or impairment. **Body dysmorphic disorder** and **hoarding disorder** have a cognitive core: a perceived flaw in appearance, or a perceived need to save possessions. **Trichotillomania** and **excoriation disorder** are body-focused repetitive behaviors, not driven by obsessions. The three disorders with a cognitive core carry an **insight specifier** running from good or fair to **absent insight/delusional beliefs**, and delusional conviction **does not** turn them into a psychotic disorder. Substance-induced and medically caused presentations (including **Sydenham’s chorea** and **PANS**) and the other specified category (nail biting, **obsessional jealousy**, **olfactory reference disorder**, koro) complete the chapter. The [[helper:ocd|OCD and related disorders helper]] and the [[helper:repetitive|repetitive behavior helper]] walk you through the reasoning.",
  objectives: [
    "Define **obsessions** and **compulsions** exactly, and apply OCD Criterion B (**more than 1 hour a day** or distress or impairment).",
    "Use the **insight** specifier (good or fair, poor, absent/delusional) and the **tic-related** specifier, and explain why delusional OCD is not diagnosed as a psychotic disorder.",
    "Recognize the four common OCD **symptom dimensions**, sensory phenomena, dysfunctional beliefs and **family accommodation**.",
    "Separate OCD from GAD worry, depressive rumination, tics, **obsessive-compulsive personality disorder**, delusional disorder and “compulsive” gambling, sex or substance use.",
    "Diagnose **body dysmorphic disorder**, including **muscle dysmorphia** and BDD by proxy, and know its suicide risk and response to cosmetic treatment.",
    "Diagnose **hoarding disorder** (difficulty discarding, distress, cluttered **active living areas**), with the **excessive acquisition** specifier, and separate it from collecting, OCD, dementia and brain injury.",
    "Diagnose **trichotillomania** and **excoriation disorder** (behavior, lesions or hair loss, repeated attempts to stop), and know their medical complications.",
    "Code **substance/medication-induced** (F1x.x88) and **medically caused** (F06.8) presentations, including **Sydenham’s chorea**, **PANDAS** and **PANS**.",
    "Use the **other specified** examples: BDD-like with actual flaws or without repetitive behaviors, other BFRBs, obsessional jealousy, olfactory reference disorder, shubo-kyofu and koro.",
    "Recall the key epidemiology, onset, course, suicide risk and comorbidity of each disorder."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s6-map",
          title: "How the chapter is built",
          pages: "263–265",
          blocks: [
            { type: "p", text: "DSM-5 created this chapter because of growing evidence that these disorders are related across diagnostic validators, and because grouping them is clinically useful: **screen for the others** when you see one. They still differ in validators and treatment. The chapter follows the anxiety disorders because of their close relationship, especially for OCD (p. 263)." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:ocd|Obsessive-compulsive disorder]]", "F42.2", "Obsessions and/or compulsions, >1 hour a day or distressing or impairing", "265–271"],
              ["[[dx:bdd|Body dysmorphic disorder]]", "F45.22", "Preoccupation with a slight or unobservable appearance flaw + repetitive behaviors", "271–277"],
              ["[[dx:hoarding|Hoarding disorder]]", "F42.3", "Difficulty discarding, distress at discarding, cluttered living areas", "277–281"],
              ["[[dx:trichotillomania|Trichotillomania (hair-pulling disorder)]]", "F63.3", "Recurrent hair pulling with hair loss and repeated attempts to stop", "281–284"],
              ["[[dx:excoriation|Excoriation (skin-picking) disorder]]", "F42.4", "Recurrent skin picking with lesions and repeated attempts to stop", "284–287"],
              ["[[dx:substance-induced-ocrd|Substance/medication-induced OCRD]]", "F15/F14/F19.x88", "Symptoms caused by a stimulant, cocaine or other substance", "287–290"],
              ["[[dx:ocrd-due-to-amc|OCRD due to another medical condition]]", "F06.8", "Symptoms as the direct effect of a medical condition (e.g., striatal stroke, Sydenham’s chorea)", "291–293"],
              ["[[dx:other-specified-ocrd|Other specified OCRD]]", "F42.8", "Named atypical presentations, reason recorded", "293–294"],
              ["[[dx:unspecified-ocrd|Unspecified OCRD]]", "F42.9", "Reason not recorded or information insufficient", "294"]
            ] },
            { type: "flow", title: "Three families in one chapter", steps: [
              ["Obsessions and compulsions", "OCD: intrusive thoughts, urges or images, neutralized by rituals", "case"],
              ["Cognitive preoccupation + repetitive acts", "Body dysmorphic disorder (appearance) · hoarding disorder (saving possessions)", "drug"],
              ["Body-focused repetitive behaviors", "Trichotillomania · excoriation disorder · other BFRBs (nail biting, lip biting, cheek chewing)", "mech"]
            ], note: "Body-focused repetitive behaviors are **not triggered by obsessions**. They may follow anxiety, boredom or rising tension, may bring pleasure or relief, and range from **focused** to **automatic** (without full awareness) (p. 264)." },
            { type: "callout", kind: "key", title: "Questions that sort the chapter", text: "**1. Is it driven by an intrusive, unwanted thought?** Then think OCD. **2. Is the concern only about appearance?** BDD. **3. Is it about saving and not discarding?** Hoarding. **4. Is it a body-focused habit the person keeps trying to stop?** Trichotillomania, excoriation or another BFRB. **5. Did a drug, a medical illness or a sudden infection start it?** The induced or medically caused categories. The [[helper:ocd|helper]] asks exactly these." }
          ]
        },
        {
          id: "s6-principles",
          title: "Rules that apply across the chapter",
          pages: "263–265",
          blocks: [
            { type: "list", title: "What makes it a disorder (p. 263)", items: [
              "Preoccupations and rituals are **excessive** or persist **beyond developmentally appropriate periods**: young children’s bedtime rituals and “just so” routines are normal.",
              "The line between subclinical symptoms and a disorder depends on **distress** and **impairment**.",
              "Clinicians are encouraged to **screen for the related disorders** when one is present, because they overlap."
            ] },
            { type: "table", caption: "The insight specifier (OCD, BDD, hoarding disorder)", head: ["Level", "OCD and BDD", "Hoarding"], rows: [
              ["**Good or fair insight**", "Beliefs are definitely or probably not true, or may or may not be true", "Recognizes hoarding beliefs and behaviors are problematic"],
              ["**Poor insight**", "Thinks the beliefs are **probably true**", "Mostly convinced they are **not** problematic despite evidence"],
              ["**Absent insight/delusional beliefs**", "**Completely convinced** the beliefs are true", "Completely convinced they are not problematic despite evidence"]
            ] },
            { type: "callout", kind: "exam", title: "Delusional, but not psychotic", text: "A person whose OCD, BDD or hoarding beliefs are held with **complete conviction** receives the **absent insight/delusional beliefs** specifier, **not** a psychotic disorder diagnosis. A psychotic disorder is added only if delusions extend **beyond** the disorder’s typical content, such as a person with BDD who is convinced their food is poisoned (p. 265)." },
            { type: "update", kind: "tr", title: "Codes and names updated in the text revision", text: "DSM-5-TR lists the ICD-10-CM codes adopted after the 2013 printing: **F42.2** for OCD (formerly F42), **F42.3** for hoarding disorder, **F42.4** for excoriation disorder (formerly L98.1), with **F42.8** and **F42.9** for the residual categories. The other specified example once called jikoshu-kyofu now appears as **olfactory reference disorder (olfactory reference syndrome)**, and DSM-5-TR added a suicide section for OCD and BDD." }
          ]
        }
      ]
    },
    {
      title: "Obsessive-compulsive disorder",
      sections: [
        {
          id: "s6-ocd-criteria",
          title: "OCD: criteria",
          pages: "265–266",
          blocks: [
            { type: "criteria", title: "Obsessive-compulsive disorder in brief", code: "F42.2", pages: "265–266", items: [
              ["A", "Obsessions, compulsions, or both.", [
                "**Obsessions** (1 and 2): recurrent, persistent thoughts, urges or images experienced at some point as **intrusive and unwanted**, usually causing marked anxiety or distress; and the person tries to **ignore, suppress or neutralize** them (for example, by a compulsion).",
                "**Compulsions** (1 and 2): repetitive **behaviors** (washing, ordering, checking) or **mental acts** (praying, counting, repeating words silently) the person feels **driven** to perform in response to an obsession or by **rigid rules**; and they aim to reduce distress or prevent a dreaded event but are **not realistically connected** to it or are **clearly excessive**."
              ], "Young children may not be able to say what the behaviors are for."],
              ["B", "**Time-consuming** (e.g., **more than 1 hour a day**) or clinically significant **distress or impairment**."],
              ["C", "Not due to a **substance** or **medical condition**."],
              ["D", "Not better explained by another disorder: worries (**GAD**), appearance (**BDD**), discarding (**hoarding**), hair pulling, skin picking, **stereotypies**, ritualized eating, substances or gambling, illness (**illness anxiety**), sexual urges (**paraphilias**), impulses, guilty ruminations (**MDD**), thought insertion or delusions (**psychosis**), repetitive behavior (**autism**)."]
            ], specifiers: [["Insight", "With good or fair insight · with poor insight · with absent insight/delusional beliefs"], ["Tic-related", "Current or past history of a tic disorder"]] },
            { type: "defs", title: "Reading the criteria (pp. 266–267)", items: [
              ["Obsessions", "Thoughts (contamination), images (violent scenes) or urges (to stab someone). **Not pleasurable, not voluntary**: they are intrusive and unwanted."],
              ["Neutralizing", "Avoiding triggers, suppressing the thought, or performing a compulsion."],
              ["Compulsions", "Done to reduce distress or prevent a feared event, **not for pleasure**, though they bring temporary relief. Either **unrealistic** (arranging items symmetrically to protect a loved one) or **excessive** (showering for hours)."],
              ["Both together", "**Most** people have both, usually **thematically linked** (contamination → washing; harm → checking)."],
              ["Criterion B", "Separates OCD from the occasional intrusive thought or double-check that is common in everyone. Severity ranges from 1–3 hours a day to near-constant, incapacitating symptoms."]
            ] },
            { type: "case", title: "Clinical vignette: the stove", text: "A 23-year-old graduate student leaves for class 2 hours late most days. Each time she leaves her apartment she has an image of it burning down and feels compelled to touch each stove knob and outlet in a fixed sequence, restarting if interrupted. She knows the fire is unlikely but “can’t risk it.” She also washes her hands after touching doorknobs until they crack. She has no tics.", point: "Intrusive, unwanted images neutralized by **checking** and **washing** rituals that are excessive and not realistically connected to the danger, taking **more than 1 hour a day**: **F42.2 OCD, with good or fair insight**." }
          ]
        },
        {
          id: "s6-ocd-specifiers",
          title: "OCD: the insight and tic-related specifiers",
          pages: "266",
          blocks: [
            { type: "table", caption: "Insight in OCD: “Will the house burn down if I don’t check the stove 30 times?” (p. 266)", head: ["Specifier", "The person believes…", "How common"], rows: [
              ["Good or fair insight", "It definitely or probably **won’t**, or **may or may not**", "Most"],
              ["Poor insight", "It **probably will**", "Some"],
              ["Absent insight/delusional beliefs", "It **certainly will**", "**4% or less**"]
            ] },
            { type: "list", title: "Points to remember", items: [
              "Insight can **change** within a person over the course of the illness.",
              "**Poorer insight** predicts a worse long-term outcome.",
              "**Tic-related**: up to **30%** of people with OCD have a lifetime tic disorder, most often **men with childhood onset**. They differ in symptom themes, comorbidity, course and familial transmission.",
              "A childhood triad of **OCD, tic disorder and ADHD** can occur."
            ] }
          ]
        },
        {
          id: "s6-ocd-features",
          title: "OCD: symptom dimensions and associated features",
          pages: "266–267",
          blocks: [
            { type: "table", caption: "The four common symptom dimensions (pp. 264, 266)", head: ["Dimension", "Obsessions", "Compulsions"], rows: [
              ["**Cleaning**", "Contamination (germs, bodily fluids, chemicals)", "Washing, cleaning"],
              ["**Symmetry**", "Need for symmetry, exactness, “just right”", "Repeating, ordering, arranging, counting"],
              ["**Forbidden or taboo thoughts**", "Aggressive, sexual, religious", "Mental rituals, praying, reassurance seeking, avoidance"],
              ["**Harm**", "Fear of harming self or others (fire, accidents)", "Checking"]
            ] },
            { type: "p", text: "These dimensions occur **across cultures**, are fairly stable in adults, may involve different neural substrates, and **often co-occur** in one person. Some people accumulate objects because of typical obsessions (fear of harm, incompleteness); this is OCD, not hoarding disorder (pp. 266–267)." },
            { type: "defs", title: "Associated features (p. 267)", items: [
              ["Sensory phenomena", "Physical sensations, **“just-right”** sensations and feelings of **incompleteness** that precede compulsions; reported by up to **60%**."],
              ["Affect", "Marked anxiety (sometimes **panic attacks**), strong **disgust**, or uneasiness until things look, feel or sound “just right.”"],
              ["Avoidance", "Avoiding restaurants and public restrooms (contamination) or people (harm thoughts)."],
              ["Dysfunctional beliefs", "Inflated **responsibility** and threat; **perfectionism** and **intolerance of uncertainty**; **overimportance of thoughts** (“thinking it is as bad as doing it”) and the need to control them. Not specific to OCD."],
              ["Accommodation", "Family or friends joining in rituals or giving reassurance; it **maintains** symptoms and is a key **treatment target**, especially in children."]
            ] },
            { type: "callout", kind: "pearl", title: "Ego-dystonic thoughts", text: "A mother with intrusive images of drowning her baby, who is horrified by them and avoids bathing the infant, is **not** dangerous because of those thoughts: harm obsessions are unwanted and resisted. Distinguish them from psychotic or homicidal ideation, which the person does not experience as alien. Peripartum onset or worsening of OCD is described (p. 269)." }
          ]
        },
        {
          id: "s6-ocd-course",
          title: "OCD: prevalence, course and risk",
          pages: "267–269",
          blocks: [
            { type: "table", caption: "Prevalence and onset (p. 267)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence (US)", "**1.2%**; internationally 1.1%–1.8%"],
              ["Sex", "Slightly more **women** in adulthood; more **boys** in childhood"],
              ["Mean onset (US)", "**19.5 years**; 25% by age 14; onset after **35** is unusual"],
              ["Men", "Earlier onset: nearly **25% before age 10**; more tic disorders"],
              ["Women", "Onset typically in adolescence; peripartum and premenstrual worsening"]
            ] },
            { type: "list", title: "Course (pp. 267–268)", items: [
              "Onset is usually **gradual**, but acute onset occurs.",
              "Untreated, usually **chronic, waxing and waning**; some episodic; a minority deteriorate.",
              "Without treatment, adult remission is **low**: about **20%** at 40-year follow-up.",
              "Childhood or adolescent onset can mean lifelong OCD, but **40%** remit by early adulthood.",
              "**Compulsions** are easier to diagnose in children because they are observable; most children have both. Children have more **harm** obsessions; adolescents more **sexual and religious** ones."
            ] },
            { type: "defs", title: "Risk factors (p. 268)", items: [
              ["Temperamental", "Internalizing symptoms, negative emotionality, behavioral inhibition in childhood."],
              ["Environmental", "Adverse perinatal events, **prematurity**, maternal **smoking** in pregnancy, childhood physical and sexual abuse, other trauma. **Sudden onset** in children has been linked with infections and a **postinfectious autoimmune** syndrome."],
              ["Genetic and physiological", "First-degree relatives of adults with OCD have about **2×** the risk; relatives of those with **childhood or adolescent onset**, **10×**. MZ concordance **0.57** vs DZ **0.22**; additive genetic effects about **40%**. Circuits: **orbitofrontal cortex, anterior cingulate and striatum** (cortico-striato-thalamo-cortical loops)."]
            ] },
            { type: "callout", kind: "culture", text: "OCD occurs worldwide with similar sex ratio, onset, comorbidity and symptom structure. Culture shapes **content**: fewer sexual obsessions in some religious groups, more aggressive ones where urban violence is common. Attributions (physical, social, spiritual, supernatural) can reinforce particular compulsions and help-seeking. **Women** more often have cleaning symptoms; **men** more often forbidden-thought and symmetry symptoms (pp. 268–269)." }
          ]
        },
        {
          id: "s6-ocd-suicide",
          title: "OCD: suicide risk and functional consequences",
          pages: "269–270",
          blocks: [
            { type: "table", caption: "Suicide in OCD (p. 269)", head: ["Finding", "Figure"], rows: [
              ["Lifetime suicide attempts (clinical samples)", "Mean **14.2%**"],
              ["Lifetime suicidal ideation", "Mean **44.1%**"],
              ["Current suicidal ideation", "Mean **25.9%**"],
              ["Swedish registry: suicide death", "**OR 9.8**"],
              ["Swedish registry: suicide attempt", "**OR 5.5**, still high after adjusting for comorbidity"]
            ] },
            { type: "list", title: "Who is at highest risk (p. 269)", items: [
              "Greater **OCD severity** and the **unacceptable (taboo) thoughts** dimension.",
              "Severe comorbid **depression and anxiety**; past suicidality.",
              "Comorbid **MDD** and **PTSD** (all aspects of suicidal behavior), impulse-control and **substance use** disorders, and **personality disorders**.",
              "Protective in the Swedish data: female sex, higher parental education and, surprisingly, a comorbid anxiety disorder."
            ] },
            { type: "p", text: "**Functional consequences** (pp. 269–270): reduced quality of life and high social and occupational impairment, from time spent on rituals and from avoidance. Harm obsessions can make relationships feel dangerous; symmetry obsessions can derail projects that never feel “just right.” Contamination fears may lead to avoiding doctors or to **dermatitis** from washing, and may even make medication seem contaminated. Childhood onset can bring few relationships outside the family and **lack of autonomy**. Some impose rules on the family (no visitors), causing family dysfunction." }
          ]
        },
        {
          id: "s6-ocd-ddx",
          title: "OCD: differential diagnosis and comorbidity",
          pages: "270–271",
          blocks: [
            { type: "table", caption: "OCD or something that looks like it? (pp. 270–271)", head: ["Condition", "How it differs from OCD"], rows: [
              ["[[dx:gad|Generalized anxiety disorder]]", "Worries are about **real-life concerns**; OCD obsessions are often odd, irrational or magical and are linked to compulsions"],
              ["[[dx:specific-phobia|Specific phobia]]", "A more **circumscribed** feared object, and **no rituals**"],
              ["[[dx:social-anxiety|Social anxiety disorder]]", "Fears limited to social situations; reassurance seeking aims to reduce embarrassment"],
              ["[[dx:mdd|Major depressive disorder]]", "**Rumination** is mood-congruent, not experienced as intrusive, and not linked to compulsions"],
              ["[[dx:bdd|BDD]], [[dx:trichotillomania|trichotillomania]], [[dx:hoarding|hoarding]]", "Limited to appearance; hair pulling without obsessions; difficulty discarding. Accumulating because of OCD obsessions (incompleteness, harm) is **OCD**"],
              ["Anorexia nervosa", "Obsessions and compulsions limited to **weight and food**"],
              ["Tics and stereotypies", "Simpler, not aimed at neutralizing obsessions; tics are preceded by **premonitory sensory urges**. Both OCD and a tic disorder can be diagnosed"],
              ["Psychotic disorders", "OCD has obsessions and compulsions and **no** hallucinations or disorganization; delusional OCD beliefs take the **absent insight** specifier"],
              ["“Compulsive” sex, gambling, substance use", "The activity is **pleasurable**; the person resists it only because of its consequences"],
              ["Obsessive-compulsive personality disorder", "No intrusive thoughts or rituals; a pervasive pattern of **perfectionism and rigid control**. Both can be diagnosed"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 271), lifetime in US adults with OCD: **anxiety disorders 76%**; depressive or bipolar disorders **63%** (MDD **41%**); **impulse-control disorders 56%**; **substance use disorders 39%**. OCD usually starts **after** most comorbid anxiety disorders (except separation anxiety) and PTSD but often **before** depression. **OCPD** in 23%–32%. Tic disorders in up to **30%**. BDD, trichotillomania and excoriation disorder are more common. Screen for OCD in **schizophrenia or schizoaffective disorder (about 12%)**, bipolar disorder, eating disorders, BDD and **Tourette’s disorder**." },
            { type: "callout", kind: "exam", title: "OCD vs OCPD", text: "**OCD**: ego-dystonic intrusive thoughts and rituals the person wants to stop. **OCPD**: an ego-syntonic, lifelong style of perfectionism, orderliness and control, with no true obsessions or compulsions. Similar names, different disorders; **both can be diagnosed** (about a quarter to a third of people with OCD also have OCPD)." }
          ]
        }
      ]
    },
    {
      title: "Body dysmorphic disorder",
      sections: [
        {
          id: "s6-bdd-criteria",
          title: "Body dysmorphic disorder: criteria and specifiers",
          pages: "271–273",
          blocks: [
            { type: "criteria", title: "Body dysmorphic disorder in brief", code: "F45.22", pages: "271–272", items: [
              ["A", "Preoccupation with one or more perceived **defects or flaws in appearance** that are **not observable or appear slight** to others."],
              ["B", "At some point, **repetitive behaviors** (mirror checking, excessive grooming, skin picking, reassurance seeking) or **mental acts** (comparing one’s appearance with others’) in response to the concerns."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not better explained by concerns with **body fat or weight** in someone who meets criteria for an **eating disorder**."]
            ], specifiers: [["With muscle dysmorphia", "Preoccupied with the idea that the body build is **too small or insufficiently muscular**; used even if other body areas are also a focus"], ["Insight", "Good or fair · poor · absent insight/delusional beliefs (about beliefs such as “I look ugly” or “I look deformed”)"]] },
            { type: "defs", title: "What it looks like (pp. 272–273)", items: [
              ["Focus", "Most often **skin** (acne, scars, wrinkles, paleness), **hair** (thinning, excess body hair) and **nose**, but any area, including perceived **asymmetry**. Concerns range from “not right” to “hideous” or “like a monster.”"],
              ["Time", "Preoccupations are intrusive, unwanted and take on average **3–8 hours a day**."],
              ["Repetitive acts", "**Comparing**, **mirror checking**, excessive “selfies,” grooming, **reassurance seeking**, touching, excessive exercise or weight lifting, tanning, changing clothes, compulsive shopping, **skin picking** to “fix” flaws, and **camouflaging** with makeup, hats, clothing or hair."],
              ["Insight", "On average **poor**; **one-third or more** currently have **absent insight/delusional** beliefs."],
              ["BDD by proxy", "Preoccupation with perceived flaws in **another person’s** appearance, most often a partner."],
              ["Muscle dysmorphia", "Almost exclusively **men and boys**, with a normal or very muscular body; excessive dieting, exercise and weight lifting, and **anabolic-androgenic steroid** use."]
            ] },
            { type: "case", title: "Clinical vignette: the nose", text: "A 22-year-old man has spent 5 hours a day for 3 years examining his nose in mirrors and car windows, comparing it with other men’s, and asking his sister whether it looks “crooked.” He photographs it from every angle and has consulted three surgeons, one of whom declined to operate because the nose looked normal. He has dropped out of university because he believes classmates stare at it. He is completely certain that his nose is deformed.", point: "Preoccupation with a flaw others cannot see, with **checking, comparing and reassurance seeking**, impairment, and **complete conviction**: **F45.22 body dysmorphic disorder, with absent insight/delusional beliefs**. Not delusional disorder, and cosmetic surgery is unlikely to help." }
          ]
        },
        {
          id: "s6-bdd-features",
          title: "Body dysmorphic disorder: features, prevalence, course and suicide",
          pages: "273–275",
          blocks: [
            { type: "list", title: "Associated features (p. 273)", items: [
              "**Ideas or delusions of reference**: others notice or mock them because of how they look.",
              "High anxiety, **social anxiety** and avoidance, depressed mood, neuroticism, **rejection sensitivity**, perfectionism, low self-esteem; elevated hostility and aggression; **shame** and reluctance to disclose.",
              "Most seek **cosmetic treatment** (dermatology and surgery most often; some operate on themselves). BDD **responds poorly** and may worsen; some sue or become violent toward the surgeon.",
              "Bias toward **negative and threatening** interpretations of faces and ambiguous scenes; visual processing focused on **details** rather than the whole."
            ] },
            { type: "table", caption: "Prevalence (p. 273)", head: ["Setting", "Point prevalence"], rows: [
              ["US adults", "**2.4%** (women 2.5%, men 2.2%)"],
              ["Outside the US (e.g., Germany)", "1.7%–2.9%"],
              ["Dermatology patients", "11%–13%"],
              ["General cosmetic surgery", "13%–15%"],
              ["**Rhinoplasty** patients", "**20%**"],
              ["Jaw correction surgery", "11%"],
              ["Orthodontia or cosmetic dentistry", "5%–10%"]
            ] },
            { type: "list", title: "Development and course (p. 274)", items: [
              "Mean onset **16–17**, median **15**, most common **12–13**; **two-thirds** begin before 18. Subclinical symptoms start around 12–13.",
              "Usually **gradual**, sometimes abrupt; usually **chronic**, but improves with evidence-based treatment.",
              "Onset before 18 brings more comorbidity and gradual onset.",
              "Risk: childhood **neglect, abuse, trauma** and **teasing**; more common in relatives of people with OCD; heritability **37%–49%**, with genetic overlap with OCD."
            ] },
            { type: "callout", kind: "caution", title: "Suicide risk is high", text: "In a meta-analysis, people with BDD were about **four times** more likely to have suicidal thoughts (OR 3.87) and **2.6 times** more likely to attempt suicide (OR 2.57) than healthy people **and** people with eating disorders, OCD or anxiety disorders. German population studies found suicidal thoughts in 19%–31% (vs 3%–3.5%). The link is **independent of comorbidity**, rises with severity, and many attribute their suicidality to their appearance. About **20%** of affected youth drop out of school, and a high proportion have been hospitalized (pp. 274–275)." },
            { type: "callout", kind: "culture", text: "Core features are similar across cultures, but concerns can follow local standards: **eyelids** in Japan, **muscle dysmorphia** in Western countries. In collectivistic contexts the fear may be of **offending others** with the deformity. Japanese **taijin kyofusho** includes **shubo-kyofu**, “the phobia of a deformed body” (p. 274). **Men** more often focus on genitals, body build and thinning hair and have more substance use; **women** on weight, breasts, buttocks, legs, hips and body hair, with more eating disorders." }
          ]
        },
        {
          id: "s6-bdd-ddx",
          title: "Body dysmorphic disorder: differential diagnosis",
          pages: "275–277",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 275–277)", items: [
              ["Normal concerns and visible defects", "BDD is excessive, time-consuming and impairing. **Clearly noticeable** defects are not BDD (consider other specified OCRD, “BDD-like with actual flaws”), but scars from BDD-driven picking still count as BDD."],
              ["Eating disorders", "Fat or weight concerns in an eating disorder belong to the eating disorder. **Both** can be diagnosed if BDD concerns go beyond weight."],
              ["OCD", "BDD focuses **only on appearance**, with poorer insight, more depression and more suicidal ideation."],
              ["Excoriation and trichotillomania", "Picking skin or removing hair **to improve appearance** is BDD, not excoriation or trichotillomania."],
              ["Illness anxiety disorder", "No fear of having a serious illness."],
              ["Major depressive disorder", "Depression is common and often **secondary**; diagnose BDD in depressed people when its criteria are met."],
              ["Social anxiety, agoraphobia, avoidant PD", "In BDD, avoidance stems from fear of being seen as **ugly**, with prominent appearance preoccupation and rituals."],
              ["Psychotic disorders", "Delusional appearance beliefs and appearance-related **ideas of reference** = BDD with absent insight, **not** delusional disorder. No disorganization or other psychotic symptoms."],
              ["Gender dysphoria", "Discomfort with or wish to be rid of **sex characteristics** is not BDD."],
              ["Olfactory reference disorder", "Belief that one emits a **foul body odor**: an other specified OCRD."],
              ["Body integrity dysphoria", "Desire to become an amputee because a limb **should not be there**, not because it is ugly (in ICD-11, not DSM-5)."],
              ["Koro", "Fear that the genitals or nipples will **retract** into the body, often with fear of **death**; occurs in epidemics in Southeast Asia."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 277): **major depressive disorder** is most common and usually starts after BDD. Social anxiety disorder, OCD and substance-related disorders (including **anabolic steroids** in muscle dysmorphia) are also common." },
            { type: "callout", kind: "exam", text: "Three classic BDD answers: **(1)** Complete conviction = **BDD with absent insight/delusional beliefs**, not delusional disorder, somatic type. **(2)** Picking acne to make the skin look better = **BDD**, not excoriation disorder. **(3)** The best response to a BDD patient requesting rhinoplasty is to treat the BDD: cosmetic procedures rarely help and can make it worse." }
          ]
        }
      ]
    },
    {
      title: "Hoarding disorder",
      sections: [
        {
          id: "s6-hoard-criteria",
          title: "Hoarding disorder: criteria and specifiers",
          pages: "277–279",
          blocks: [
            { type: "criteria", title: "Hoarding disorder in brief", code: "F42.3", pages: "277", items: [
              ["A", "Persistent **difficulty discarding** or parting with possessions, **regardless of their actual value**."],
              ["B", "Due to a **perceived need to save** the items and **distress** associated with discarding them."],
              ["C", "Results in possessions that **congest and clutter active living areas** and substantially compromise their intended use. If areas are clear, it is only because of **third parties** (family, cleaners, authorities)."],
              ["D", "Clinically significant **distress or impairment**, including maintaining a **safe environment**."],
              ["E", "Not due to a **medical condition** (brain injury, cerebrovascular disease, **Prader-Willi syndrome**)."],
              ["F", "Not better explained by another disorder: obsessions (**OCD**), low energy (**MDD**), delusions (**psychosis**), cognitive deficits (**major neurocognitive disorder**), restricted interests (**autism**)."]
            ], specifiers: [["With excessive acquisition", "Difficulty discarding plus excessive acquisition of items not needed or with no space for them"], ["Insight", "Good or fair · poor · absent insight/delusional beliefs (recognizing that hoarding beliefs and behaviors are problematic)"]] },
            { type: "defs", title: "Reading the criteria (pp. 278–279)", items: [
              ["Persistent", "Long-standing, not a transient situation such as inheriting a house."],
              ["Discarding", "Any form: throwing away, selling, giving away, recycling."],
              ["Reasons for saving", "Perceived **usefulness** or **beauty**, **sentimental** attachment, responsibility for the items’ fate, avoiding waste, fear of losing **information**. Commonly newspapers, magazines, clothing, bags, books, mail and papers, mixed with valuable things."],
              ["Intentional saving", "Saving is **purposeful** and discarding causes **distress**: this separates it from passive accumulation."],
              ["Active living areas", "Kitchen, bedroom, living room, not garages or attics. The person may be unable to cook, sleep in the bed or sit in a chair. Clutter may spill into cars, yards, the workplace and relatives’ homes."],
              ["Collecting", "Normative collecting is **organized and selective** and causes no clutter, distress or impairment."],
              ["Excessive acquisition", "Present in about **80%–90%**: mostly **buying**, then free items; **stealing** is less common. May be denied at first."]
            ] },
            { type: "case", title: "Clinical vignette: the newspapers", text: "A 68-year-old retired librarian is referred after a fire inspector found her house unsafe. Stacks of newspapers, mail and unused shopping bags fill the hallway, couch and bed; she sleeps in a recliner and cannot use her stove. She says each paper “might have something I need” and becomes tearful when her son tries to throw any away. She still buys several newspapers daily. She believes the clutter is “a bit much but under control.”", point: "Difficulty discarding from a perceived need to save, distress at discarding, cluttered **active living areas** and a **safety** risk: **F42.3 hoarding disorder, with excessive acquisition, with poor insight**. Rule out a neurocognitive disorder, depression and OCD." }
          ]
        },
        {
          id: "s6-hoard-features",
          title: "Hoarding disorder: features, prevalence and course",
          pages: "279–280",
          blocks: [
            { type: "list", title: "Associated features (p. 279)", items: [
              "**Indecisiveness**, perfectionism, avoidance, procrastination, poor planning and organizing, distractibility.",
              "Some live in **unsanitary** conditions.",
              "**Animal hoarding**: many animals with failure to provide minimal nutrition, sanitation and veterinary care, and failure to act on their decline; more unsanitary conditions and **poorer insight** than object hoarding.",
              "With poor insight, distress may not be reported, but any attempt by others to clear the possessions causes **high distress**."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 279–280)", head: ["Topic", "Detail"], rows: [
              ["Point prevalence", "**1.5%–6%** (US and Europe surveys); meta-analysis **2.5%**"],
              ["Sex", "**No difference** in the community; clinical samples mostly women; women show more excessive buying"],
              ["Age", "Almost **3×** more prevalent over 65 than at 30–40 (Netherlands)"],
              ["Onset", "Symptoms **15–19** years; interfere by the **mid-20s**; clinically significant by the **mid-30s**; research participants usually in their **50s**"],
              ["Course", "**Chronic**, worsening each decade, especially after 30; rarely waxes and wanes"]
            ] },
            { type: "list", title: "Risk, culture and consequences (pp. 279–280)", items: [
              "Indecisiveness in patients and their relatives; stressful or traumatic events before onset or worsening.",
              "**Familial**: over 50% have a relative who hoards; about **50%** of variability is additive genetic.",
              "In children, parents may keep spaces usable, so consider their intervention.",
              "Where **thrift** is highly valued, base the diagnosis on distress and impairment.",
              "Consequences: risk of **fire**, **falls** (especially older adults), poor sanitation, broken appliances and disconnected utilities, family strain, conflict with neighbors and authorities, and **eviction**."
            ] }
          ]
        },
        {
          id: "s6-hoard-ddx",
          title: "Hoarding disorder: differential diagnosis and comorbidity",
          pages: "280–281",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 280–281)", items: [
              ["Medical conditions", "Traumatic brain injury, tumor or epilepsy surgery, cerebrovascular disease, herpes simplex encephalitis, **Prader-Willi syndrome**. Damage to the **anterior ventromedial prefrontal and cingulate cortices** is linked to accumulation, which begins **after** the injury; some do not care if items are discarded."],
              ["Neurodevelopmental disorders", "Accumulation as a direct consequence of autism or intellectual disability."],
              ["Psychotic disorders", "Accumulation from **delusions** or **negative symptoms**."],
              ["Major depressive episode", "Accumulation from psychomotor retardation, fatigue or low energy."],
              ["OCD", "Saving driven by **obsessions** (contamination, harm, incompleteness such as needing to document all life experiences) or by avoiding onerous rituals. In OCD hoarding is **unwanted**, with no pleasure, rarely with excessive acquisition, and often involves **bizarre items** (trash, feces, urine, nail clippings, hair, rotten food). Diagnose **both** if severe hoarding is independent of other OCD symptoms."],
              ["Neurocognitive disorders", "Frontotemporal degeneration or Alzheimer’s disease: gradual accumulation **after** cognitive decline, with self-neglect and **squalor**, disinhibition and stereotypies."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 281): about **75%** have a mood or anxiety disorder, most commonly **MDD (30%–50%)**, social anxiety disorder and GAD; about **20%** also meet OCD criteria. Comorbid conditions are often the reason for consultation, because people rarely volunteer hoarding and clinicians rarely ask." },
            { type: "callout", kind: "exam", text: "**Hoarding vs OCD**: hoarding disorder = saving because items feel **useful, valuable or precious**, with distress at discarding and often pleasure in acquiring. OCD = saving because of an **obsession** (fear of harm, contamination, incompleteness), unwanted, with no reward, and sometimes bizarre items." }
          ]
        }
      ]
    },
    {
      title: "Body-focused repetitive behaviors",
      sections: [
        {
          id: "s6-trich",
          title: "Trichotillomania (hair-pulling disorder)",
          pages: "281–283",
          blocks: [
            { type: "criteria", title: "Trichotillomania in brief", code: "F63.3", pages: "281", items: [
              ["A", "Recurrent **pulling out of one’s hair**, resulting in **hair loss**."],
              ["B", "**Repeated attempts** to decrease or stop."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not due to a **medical (dermatological) condition**."],
              ["E", "Not better explained by another disorder (e.g., improving a perceived appearance flaw in **BDD**)."]
            ] },
            { type: "defs", title: "What it looks like (pp. 281–282)", items: [
              ["Sites", "Most often **scalp, eyebrows and eyelids**; less often axillary, facial, pubic and perirectal. Sites shift over time."],
              ["Pattern", "Brief episodes through the day, or sustained sessions for hours. Hair loss may not be obvious if single hairs are pulled widely; people camouflage with makeup, scarves or wigs."],
              ["Rituals", "Searching for a particular hair, pulling so the **root** comes out, examining, rolling, biting or **swallowing** hair (**trichophagia**)."],
              ["Emotions", "Triggered by **anxiety or boredom**; rising **tension** before or when resisting; **gratification or relief** after. **Focused** vs **automatic** pulling; many have both. An itch-like sensation may precede it. Usually painless."],
              ["Hair loss", "Complete alopecia or thinning; crown or parietal predilection; **tonsure trichotillomania** (bald except a rim at the margins, especially the nape); absent eyebrows and lashes."],
              ["Context", "Usually not in front of others except family. Some pull hair from others, pets, dolls or carpets. Most also have other BFRBs (skin picking, nail biting, lip chewing)."]
            ] },
            { type: "table", caption: "Epidemiology, course and markers (pp. 282–283)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence", "**1%–2%** (adults and adolescents); 1.7% in a representative US online survey"],
              ["Sex", "Clinical samples **≥10:1** female; community closer to **2:1**; children equal; the US survey found no difference"],
              ["Onset", "Usually at or after **puberty**; infant hair pulling usually resolves"],
              ["Course", "**Chronic**, waxing and waning; may worsen premenstrually; few remit without relapse"],
              ["Genetics", "More common in people with **OCD** and their relatives"],
              ["Markers", "Most admit pulling. **Dermoscopy (trichoscopy)** shows reduced density, short vellus hairs and broken hairs of different lengths; biopsy rarely needed"]
            ] },
            { type: "callout", kind: "caution", title: "Medical complications", text: "Irreversible damage to hair growth; digit purpura; musculoskeletal injury (carpal tunnel syndrome; back, shoulder, neck pain); blepharitis; dental damage from biting hair. Swallowed hair can form a **trichobezoar**, causing anemia, abdominal pain, hematemesis, vomiting, **bowel obstruction** or perforation (p. 283)." }
          ]
        },
        {
          id: "s6-trich-ddx",
          title: "Trichotillomania: differential diagnosis",
          pages: "283–284",
          blocks: [
            { type: "defs", title: "Differential diagnosis (pp. 283–284)", items: [
              ["Normal hair removal or play", "Cosmetic removal, twisting or playing with hair, and **biting** rather than pulling do not qualify."],
              ["OCD", "Pulling hairs as part of **symmetry** rituals."],
              ["BDD", "Removing hair perceived as **ugly, asymmetrical or abnormal**."],
              ["Stereotypic movement disorder", "Hair pulling with head banging or biting in a child with intellectual disability or autism, when frustrated or excited."],
              ["Psychotic disorders", "Removing hair in response to a delusion or hallucination."],
              ["Medical conditions", "Dermatological inflammation; **alopecia areata**, androgenic alopecia, telogen effluvium; scarring alopecias (discoid lupus, lichen planopilaris and others). Use **biopsy or dermoscopy** if pulling is denied."],
              ["Substances", "Stimulants can worsen pulling but are rarely the primary cause."]
            ] },
            { type: "p", text: "**Comorbidity** (p. 284): most commonly **major depressive disorder** and **excoriation disorder**. Other BFRBs (nail biting) occur in most and may warrant **other specified OCRD (other body-focused repetitive behavior disorder)**." }
          ]
        },
        {
          id: "s6-skin",
          title: "Excoriation (skin-picking) disorder",
          pages: "284–286",
          blocks: [
            { type: "criteria", title: "Excoriation disorder in brief", code: "F42.4", pages: "284", items: [
              ["A", "Recurrent **skin picking** resulting in **skin lesions**."],
              ["B", "**Repeated attempts** to decrease or stop."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not due to a **substance** (e.g., **cocaine**) or **medical condition** (e.g., **scabies**)."],
              ["E", "Not better explained by another disorder: delusions or **tactile hallucinations** (psychosis), improving appearance (**BDD**), **stereotypies**, or intent to harm oneself (**nonsuicidal self-injury**)."]
            ] },
            { type: "defs", title: "What it looks like (p. 285)", items: [
              ["Sites and methods", "Most often **face, arms and hands**, often several sites; healthy skin, minor irregularities, pimples, calluses or scabs; fingernails, tweezers or pins; also rubbing, squeezing, lancing and biting."],
              ["Time", "Often hours a day, for months or years; most spend **at least an hour a day** picking, thinking about it or resisting."],
              ["Rituals and emotions", "Searching for a particular scab, examining or **mouthing or swallowing** skin; anxiety, boredom, tension and relief, as in trichotillomania; **focused** and **automatic** styles."],
              ["Concealment", "Makeup and clothing; usually not in front of others except family."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 285–286)", head: ["Topic", "Detail"], rows: [
              ["Prevalence", "**2.1%** current, **3.1%** lifetime (representative US online survey)"],
              ["Sex", "**Three-quarters or more** are women"],
              ["Onset", "Usually **adolescence**, around **puberty**; often begins with a skin condition such as **acne**"],
              ["Course", "**Chronic**, waxing and waning"],
              ["Genetics", "More common in people with OCD and their relatives"],
              ["Complications", "Tissue damage, scarring, **infection** (often needing antibiotics, sometimes surgery), rarely synovitis of the wrists; can be life-threatening"]
            ] },
            { type: "case", title: "Clinical vignette: the scabs", text: "A 19-year-old nursing student spends about 2 hours most evenings picking at scabs and small bumps on her arms and face with tweezers, often without noticing until she sees blood. She has tried bandaging her fingers and setting phone reminders to stop. She wears long sleeves in summer and has skipped beach trips. She does not think her skin is ugly, has no wish to hurt herself, and uses no stimulants.", point: "Recurrent picking causing **lesions**, **repeated attempts to stop**, and distress and avoidance, not driven by appearance concerns, self-harm intent, substances or a skin disease: **F42.4 excoriation (skin-picking) disorder**, with an **automatic** style." }
          ]
        },
        {
          id: "s6-skin-ddx",
          title: "Excoriation disorder: differential diagnosis",
          pages: "286–287",
          blocks: [
            { type: "table", caption: "Why is the person picking? (pp. 286–287)", head: ["Reason", "Diagnosis"], rows: [
              ["A delusion of **parasites** or tactile hallucinations (**formication**)", "Psychotic disorder (or delusional disorder, somatic type)"],
              ["To make perceived skin flaws **look better**", "**Body dysmorphic disorder**"],
              ["Skin damage from **washing** for contamination fears", "OCD"],
              ["To **hurt oneself** (relief from emotional pain)", "Nonsuicidal self-injury"],
              ["Early-onset self-injurious stereotypy (e.g., **Prader-Willi syndrome**)", "Stereotypic movement disorder"],
              ["Tics causing self-injury", "Tourette’s disorder (not tic-like in excoriation)"],
              ["Lesions with **deception** about their cause", "Factitious disorder (no external reward) or malingering (external incentive); “dermatitis artefacta”"],
              ["Itch of **scabies**", "The skin disease, not a mental disorder"],
              ["Picking during **cocaine** or stimulant use", "Substance/medication-induced OCRD"],
              ["Picking acne that has become **independent** of the acne", "Excoriation disorder (acne excoriée)"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 287): OCD, **trichotillomania** and **major depressive disorder** (depression more common in women). Other BFRBs such as nail biting are common and may deserve **other specified OCRD (other body-focused repetitive behavior disorder)**." },
            { type: "callout", kind: "pearl", title: "Trichotillomania and excoriation: the same blueprint", text: "Both criteria sets have the same five parts: **A** the behavior with a visible result (hair loss, lesions); **B** **repeated attempts to stop**; **C** distress or impairment; **D** not due to a medical condition (or, for skin picking, a substance); **E** not better explained by another disorder. Neither requires tension before or relief after: those are associated features, not criteria." }
          ]
        }
      ]
    },
    {
      title: "Substance, medical and residual categories",
      sections: [
        {
          id: "s6-substance",
          title: "Substance/medication-induced obsessive-compulsive and related disorder",
          pages: "287–290",
          blocks: [
            { type: "criteria", title: "Substance/medication-induced OCRD in brief", code: "By substance", pages: "287–288", items: [
              ["A", "**Obsessions, compulsions, skin picking, hair pulling, other BFRBs** or other OCRD symptoms predominate."],
              ["B", "Developed **during or soon after** intoxication, withdrawal or medication exposure, from a substance able to cause them."],
              ["C", "Not better explained by an **independent** OCRD (preceded use; persists **about 1 month** after acute withdrawal or severe intoxication; recurrent non-substance episodes)."],
              ["D", "Not only during **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], note: "Diagnose this instead of intoxication or withdrawal only when the symptoms **predominate** and need clinical attention. Specify onset during intoxication, during withdrawal or after medication use." },
            { type: "table", caption: "ICD-10-CM codes (p. 288)", head: ["Substance", "Mild use disorder", "Moderate or severe", "No use disorder"], rows: [
              ["Amphetamine-type (or other stimulant)", "F15.188", "F15.288", "F15.988"],
              ["Cocaine", "F14.188", "F14.288", "F14.988"],
              ["Other (or unknown), e.g., ropinirole", "F19.188", "F19.288", "F19.988"]
            ] },
            { type: "list", title: "Recording and features (pp. 289–290)", items: [
              "Only **three** classes are listed: stimulants, cocaine and other or unknown. Every code ends in **.x88**.",
              "Examples: “**F14.288** severe cocaine use disorder with cocaine-induced obsessive-compulsive and related disorder, with onset during intoxication” (repetitive skin picking); “**F15.988** amphetamine-induced OCRD, with onset during intoxication.”",
              "Medications outside the classes, such as the dopamine agonist **ropinirole**, use **F19.x88**.",
              "Heavy metals and toxins can also cause symptoms.",
              "With a prescribed drug, symptoms usually improve within **days to weeks** of stopping. Very rare in the general population.",
              "Atypical age at onset suggests a substance cause; persistence about 1 month after intoxication, or a prior history, suggests a primary disorder. If both a medical condition and a substance contribute, give both diagnoses; if unclear, use other specified or unspecified OCRD."
            ] }
          ]
        },
        {
          id: "s6-medical",
          title: "OCRD due to another medical condition: Sydenham’s chorea, PANDAS and PANS",
          pages: "291–293",
          blocks: [
            { type: "criteria", title: "Obsessive-compulsive and related disorder due to another medical condition in brief", code: "F06.8", pages: "291", items: [
              ["A", "Obsessions, compulsions, appearance preoccupation, hoarding, skin picking, hair pulling, other BFRBs or other OCRD symptoms **predominate**."],
              ["B", "Evidence of a **direct pathophysiological consequence** of a medical condition."],
              ["C", "Not better explained by another mental disorder."],
              ["D", "Not only during **delirium**."],
              ["E", "Clinically significant **distress or impairment**."]
            ], specifiers: [["With OCD-like symptoms", ""], ["With appearance preoccupations", ""], ["With hoarding symptoms", ""], ["With hair-pulling symptoms", ""], ["With skin-picking symptoms", ""]], note: "Code the condition first: “**I69.398** cerebral infarction; **F06.8** obsessive-compulsive and related disorder due to cerebral infarction.”" },
            { type: "steps", title: "Judging a medical cause (p. 292)", items: [
              ["Present at onset", "The medical condition must be present when the symptoms begin."],
              ["Timing", "A clear temporal link between onset, worsening or remission of the illness and the symptoms."],
              ["Atypical features", "Atypical age at onset or course; **acute onset**, late onset or atypical symptoms call for a workup."],
              ["Mechanism", "A known pathophysiology, such as **striatal damage** from a stroke or **Huntington’s disease**."]
            ] },
            { type: "compare", title: "Streptococcus and sudden-onset OCD in children (p. 292)", items: [
              { title: "Sydenham’s chorea", color: "case", points: ["Neurological manifestation of **rheumatic fever** after group A streptococcal infection.", "Motor symptoms (chorea) plus obsessions, compulsions, attention problems and emotional lability.", "May have carditis or arthritis.", "OCD-like presentation → **OCRD due to another medical condition**."] },
              { title: "PANDAS and PANS", color: "drug", points: ["**PANDAS**: sudden obsessions, compulsions and/or **tics** with other acute neuropsychiatric symptoms after **group A strep**, without chorea, carditis or arthritis.", "Because other infections and insults can do the same, the broader term **PANS** (pediatric acute-onset neuropsychiatric syndrome) is used.", "PANS: **abrupt, dramatic** onset of OCD symptoms or **severely restricted food intake**, plus other neuropsychiatric symptoms. Assessment guidelines exist."] }
            ] },
            { type: "defs", title: "Differential diagnosis (pp. 292–293)", items: [
              ["Delirium; major neurocognitive disorder", "Not given if symptoms occur only in delirium; **can** be added to dementia if the same pathology causes prominent OCD symptoms."],
              ["Mixed presentations", "The **predominant** symptoms decide which “due to another medical condition” diagnosis applies."],
              ["Substance/medication-induced", "Consider recent or prolonged use, withdrawal or toxins; symptoms within **4 weeks** of intoxication, withdrawal or medication use suggest a substance cause."],
              ["Primary OCRDs", "No demonstrable mechanism. Acute onset, late onset or atypical symptoms need a thorough workup."],
              ["Illness anxiety disorder", "Preoccupation with having an illness, not OCD symptoms caused by one."],
              ["Other mental disorders", "OCD-like symptoms can be part of schizophrenia or anorexia nervosa."]
            ] }
          ]
        },
        {
          id: "s6-other",
          title: "Other specified and unspecified obsessive-compulsive and related disorder",
          pages: "293–294",
          blocks: [
            { type: "p", text: "Both categories cover OCRD symptoms that predominate and cause distress or impairment without meeting full criteria for a specific disorder. **Other specified (F42.8)** records the reason; **unspecified (F42.9)** is used when the clinician chooses not to, or information is insufficient (e.g., the emergency department) (pp. 293–294)." },
            { type: "table", caption: "The seven named examples of other specified OCRD (p. 294)", head: ["Example", "What it is"], rows: [
              ["**BDD-like disorder with actual flaws**", "Like BDD, but the flaws are **clearly observable**; preoccupation is clearly excessive and impairing"],
              ["**BDD-like disorder without repetitive behaviors**", "Meets BDD except there have **never** been repetitive behaviors or mental acts"],
              ["**Other body-focused repetitive behavior disorder**", "**Nail biting, lip biting, cheek chewing**, with repeated attempts to stop and distress or impairment"],
              ["**Obsessional jealousy**", "**Nondelusional** preoccupation with a partner’s perceived infidelity, with repetitive behaviors or mental acts; not delusional disorder, jealous type, or paranoid personality disorder"],
              ["**Olfactory reference disorder** (olfactory reference syndrome)", "Preoccupation with emitting a **foul body odor** others cannot notice; repeated checking, showering, reassurance seeking, camouflage. Japanese **jikoshu-kyofu**, a variant of taijin kyofusho"],
              ["**Shubo-kyofu**", "A taijin kyofusho variant like BDD: excessive fear of having a **bodily deformity**"],
              ["**Koro**", "Sudden, intense anxiety that the **penis** (or vulva and nipples) will **recede into the body**, possibly causing death; related to dhat syndrome"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Remembering the seven", text: "Two **BDD-likes** (actual flaws; no rituals), one **BFRB** (nails, lips, cheeks), one **relationship** (obsessional jealousy), and three **culture-linked** body fears (olfactory reference, shubo-kyofu, koro)." }
          ]
        }
      ]
    },
    {
      title: "Putting it together",
      sections: [
        {
          id: "s6-compare",
          title: "The chapter side by side",
          pages: "263–294",
          blocks: [
            { type: "table", caption: "What drives the repetitive behavior?", head: ["Disorder", "Driver", "Repetitive behavior", "Insight specifier"], rows: [
              ["[[dx:ocd|OCD]]", "Intrusive, unwanted obsessions (or rigid rules)", "Washing, checking, ordering, counting, mental rituals", "Yes (+ tic-related)"],
              ["[[dx:bdd|BDD]]", "Perceived flaw in appearance", "Mirror checking, comparing, grooming, camouflage, picking, reassurance", "Yes (+ muscle dysmorphia)"],
              ["[[dx:hoarding|Hoarding disorder]]", "Perceived need to save; distress at discarding", "Saving, acquiring", "Yes (+ excessive acquisition)"],
              ["[[dx:trichotillomania|Trichotillomania]]", "Urge, tension, boredom or automatic habit", "Hair pulling", "No"],
              ["[[dx:excoriation|Excoriation disorder]]", "Urge, tension, boredom or automatic habit", "Skin picking", "No"]
            ] },
            { type: "table", caption: "One behavior, several diagnoses", head: ["Behavior", "Reason", "Diagnosis"], rows: [
              ["Skin picking", "To fix how acne looks", "BDD"],
              ["Skin picking", "A habit she keeps trying to stop", "Excoriation disorder"],
              ["Skin picking", "To get rid of “parasites”", "Psychotic disorder"],
              ["Skin picking", "During a cocaine binge", "Cocaine-induced OCRD"],
              ["Hair pulling", "To make eyebrows symmetrical", "OCD (symmetry) or BDD (appearance)"],
              ["Saving newspapers", "They “might be useful”", "Hoarding disorder"],
              ["Saving newspapers", "Throwing them away might cause harm", "OCD"],
              ["Checking the mirror", "To confirm the nose is deformed", "BDD"],
              ["Checking the stove", "To prevent a fire she pictures", "OCD"]
            ] },
            { type: "callout", kind: "pearl", title: "Time rules in this chapter", text: "Only two numbers matter: OCD Criterion B gives **more than 1 hour a day** as an example of “time-consuming,” and substance-induced symptoms that persist **about 1 month** after stopping suggest a primary disorder. BDD preoccupations take on average **3–8 hours a day**." }
          ]
        },
        {
          id: "s6-approach",
          title: "A practical approach and the classic traps",
          pages: "263–294",
          blocks: [
            { type: "steps", title: "Six steps", items: [
              ["1. Cause", "Stimulants, cocaine, dopamine agonists (ropinirole); strokes or other striatal lesions, Huntington’s disease; sudden onset in a child after strep or another infection (Sydenham’s chorea, PANS). Be suspicious of acute or late onset."],
              ["2. Driver", "Intrusive thought (OCD), appearance (BDD), saving (hoarding), urge or habit (trichotillomania, excoriation)."],
              ["3. Threshold", "OCD: >1 hour a day or distress or impairment. Hoarding: cluttered active living areas. BFRBs: hair loss or lesions plus repeated attempts to stop."],
              ["4. Insight", "Good or fair, poor, or absent/delusional. Delusional conviction stays within the OCRD."],
              ["5. Exclusions", "Eating disorder (weight concerns), psychosis (delusions beyond the disorder), depression (rumination, inertia), neurocognitive disorder, autism, tics, stereotypies, nonsuicidal self-injury, OCPD."],
              ["6. Comorbidity and safety", "Screen for the related disorders, depression, tics and substance use. Ask about **suicide**, especially in BDD and in OCD with taboo thoughts or depression."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) Obsessions are **unwanted**; pleasurable urges are not obsessions. 2) “More than 1 hour a day” **or** distress or impairment. 3) Delusional OCD or BDD is **not** a psychotic disorder. 4) **Tic-related** OCD: men, childhood onset, up to 30%. 5) OCPD is **not** OCD; both can be diagnosed. 6) Rumination in depression is not an obsession. 7) Weight concerns in an eating disorder are not BDD. 8) Picking or plucking **to improve appearance** = BDD. 9) Hoarding means cluttered **active living areas**; cleared by others still counts. 10) Hoarding of bizarre items (trash, feces, nails) suggests **OCD**. 11) Trichotillomania and excoriation need **repeated attempts to stop**. 12) Substance-induced OCRD codes end in **.x88**; medically caused is **F06.8**." },
            { type: "p", text: "Practice with the [[helper:ocd|OCD and related disorders helper]] and the [[helper:repetitive|repetitive behavior helper]], then compare [[dx:ocd|OCD]] with [[dx:bdd|BDD]] and [[dx:hoarding|hoarding disorder]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
