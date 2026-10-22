/* Chapter 8 study guide. Source: DSM-5-TR, Dissociative Disorders (pp. 329–348).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch08", "guide", {
  intro: "Dissociative disorders are a **disruption or discontinuity in the normal integration** of consciousness, memory, identity, emotion, perception, body representation, motor control and behavior (p. 329). They follow trauma so often that DSM-5 placed them **next to**, but not inside, the trauma- and stressor-related disorders. Symptoms are **positive** (unbidden intrusions: divided identity, depersonalization, derealization) or **negative** (inability to access information or control functions: amnesia). **Dissociative identity disorder** combines **two or more personality states** (or possession) with **recurrent amnesia**. **Dissociative amnesia** is an inability to recall important autobiographical information, usually traumatic, inconsistent with ordinary forgetting, sometimes with **fugue**. **Depersonalization/derealization disorder** is persistent detachment from oneself or the surroundings with **intact reality testing**. The **other specified** category covers mixed syndromes, identity disturbance from **coercive persuasion**, **acute dissociative reactions** under 1 month, and **dissociative trance**. The [[helper:dissociative|dissociative disorders helper]] and the [[helper:memoryloss|memory gap helper]] walk you through the reasoning.",
  objectives: [
    "Define dissociation and distinguish **positive** from **negative** dissociative symptoms.",
    "State the criteria for **dissociative identity disorder**, including the **possession** form, the cultural exclusion and the note on **imaginary playmates**.",
    "Recognize how DID usually presents: **covert** switching, voices, time loss, unexplained possessions, high suicide risk, and frequent misdiagnosis as bipolar disorder, psychosis or borderline personality disorder.",
    "Distinguish DID from **schizophrenia** (ego-alien intrusions, high hypnotizability, amnesia) and from **feigned** DID.",
    "Diagnose **dissociative amnesia** and its forms (localized, selective, systematized, generalized, continuous), code it with or without **fugue** (F44.0 / F44.1), and separate it from TBI, seizures, blackouts, ECT and neurocognitive disorders.",
    "Diagnose **depersonalization/derealization disorder**, with **intact reality testing**, and know its onset (mean **16**; onset after 40 suggests a medical cause) and its common drug triggers.",
    "Use the **other specified** examples: mixed syndromes without amnesia, coercive persuasion, acute dissociative reactions (<1 month) and dissociative trance.",
    "Recall prevalence, course, risk factors, suicide risk and comorbidity for each disorder."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s8-map",
          title: "How the chapter is built",
          pages: "329–330",
          blocks: [
            { type: "p", text: "Dissociative symptoms can disrupt **every area** of psychological functioning. “Traumatic experiences” in this chapter means events with **psychological** sequelae, not the physical impact that causes traumatic brain injury. Acute stress disorder and PTSD also include dissociative symptoms (amnesia, flashbacks, numbing, depersonalization/derealization), which is why the two chapters sit side by side (p. 329)." },
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:did|Dissociative identity disorder]]", "F44.81", "Two or more personality states (or possession) + recurrent amnesia", "330–337"],
              ["[[dx:dissociative-amnesia|Dissociative amnesia]]", "F44.0 · F44.1 with fugue", "Inability to recall important autobiographical information, inconsistent with ordinary forgetting", "337–343"],
              ["[[dx:dpdr|Depersonalization/derealization disorder]]", "F48.1", "Persistent or recurrent detachment from self or surroundings, reality testing intact", "343–347"],
              ["[[dx:other-specified-dissociative|Other specified dissociative disorder]]", "F44.89", "Named atypical presentations, reason recorded", "347–348"],
              ["[[dx:unspecified-dissociative|Unspecified dissociative disorder]]", "F44.9", "Reason not recorded or information insufficient", "348"]
            ] },
            { type: "compare", title: "Positive and negative dissociative symptoms (p. 329)", items: [
              { title: "Positive symptoms", color: "case", points: ["**Unbidden intrusions** into awareness and behavior, with loss of continuity in experience.", "Division of identity, depersonalization, derealization.", "Voices, intrusive thoughts, emotions or actions that feel “not mine.”"] },
              { title: "Negative symptoms", color: "drug", points: ["**Inability to access** information or to control mental functions that are normally accessible.", "Amnesia.", "Loss of skills, “time loss,” gaps in autobiographical memory."] }
            ] },
            { type: "callout", kind: "key", title: "Risk factors across cultures (p. 329)", text: "**Earlier onset** of trauma; **neglect** and sexual, physical and emotional **abuse by parents**; **cumulative** early life trauma and adversity; and **repeated, sustained trauma or torture in captivity** (prisoners of war, victims of trafficking)." }
          ]
        },
        {
          id: "s8-principles",
          title: "Three disorders in one view",
          pages: "329–330",
          blocks: [
            { type: "table", caption: "What each disorder involves", head: ["Feature", "DID", "Dissociative amnesia", "Depersonalization/derealization"], rows: [
              ["Identity states or possession", "**Yes** (Criterion A)", "No", "No"],
              ["Amnesia", "**Recurrent**, for everyday events too", "**Core**: usually traumatic or stressful information", "Not typical"],
              ["Depersonalization/derealization", "Common", "Common", "**Core**"],
              ["Reality testing", "Usually intact; transient psychotic episodes possible", "Intact", "**Intact by definition**"],
              ["Trauma history", "About **90%** report early abuse and neglect", "Common, especially child abuse", "Emotional abuse and neglect most typical"]
            ] },
            { type: "callout", kind: "pearl", title: "Hidden by design", text: "Most people with DID or dissociative amnesia are **initially unaware** of their amnesia or **minimize and rationalize** it. They notice only when they cannot recall their identity, or when they find evidence of events they do not remember. Ask directly about time loss, unexplained possessions and being told about things they did (pp. 329–330)." },
            { type: "update", kind: "tr", title: "Suicide sections in the text revision", text: "DSM-5-TR added **Association With Suicidal Thoughts or Behavior** sections. For DID, more than **70%** of outpatients have attempted suicide; for dissociative amnesia, suicidal risk rises when the amnesia **remits suddenly** and overwhelms the person with memories (pp. 334, 340)." }
          ]
        }
      ]
    },
    {
      title: "Dissociative identity disorder",
      sections: [
        {
          id: "s8-did-criteria",
          title: "Dissociative identity disorder: criteria",
          pages: "330–332",
          blocks: [
            { type: "criteria", title: "Dissociative identity disorder in brief", code: "F44.81", pages: "330", items: [
              ["A", "Disruption of identity with **two or more distinct personality states**, which some cultures describe as **possession**. It involves marked discontinuity in **sense of self and sense of agency**, with related changes in affect, behavior, consciousness, memory, perception, cognition or sensory-motor functioning, **observed by others or reported** by the person."],
              ["B", "**Recurrent gaps** in recall of everyday events, important personal information and/or traumatic events, **inconsistent with ordinary forgetting**."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not a normal part of a broadly accepted **cultural or religious practice**.", [], "In children, not better explained by **imaginary playmates** or other fantasy play."],
              ["E", "Not due to a **substance** (blackouts or chaotic behavior during alcohol intoxication) or **medical condition** (complex partial seizures)."]
            ] },
            { type: "defs", title: "Reading Criterion A (p. 331)", items: [
              ["Mostly covert", "Most people with non-possession DID show their identity discontinuity **subtly or not at all**; only a minority present with obvious alternation. Separate names, wardrobes, handwriting and accents occur in **only a minority** and are **not required**."],
              ["When states cannot be seen", "Infer them from **sudden discontinuities in sense of self and agency** (Criterion A) plus **recurrent amnesia** (Criterion B)."],
              ["Loss of agency", "Feeling like a depersonalized observer of one’s own speech and actions; emotions, impulses, thoughts or actions that suddenly appear (or vanish) without a sense of ownership; body feels like a child’s, another gender or several ages."],
              ["Voices", "A child’s voice, commentary, persecutory or **command** voices; or multiple independent thought streams. Hallucinations can occur in **any sensory modality**."],
              ["Switching", "Usually **subtle**; more overt in possession-form DID. People experience themselves as multiple, **overlapping and interfering** states."]
            ] },
            { type: "defs", title: "Reading Criterion B: three domains of amnesia (pp. 331–332)", items: [
              ["Autobiographical gaps", "Important life events (a wedding, giving birth) or whole periods (all schooling before high school)."],
              ["Lapses in recent events or skills", "Forgetting how to do one’s job, use a computer, cook or drive; “time loss,” “coming to” in the middle of doing something."],
              ["Unexplained possessions", "Clothing, tools, weapons, writings or drawings they do not remember acquiring or making."],
              ["Fugue", "Amnesia for travel is common: finding oneself in another city, at work, or in a closet or under the bed. Unlike dissociative amnesia, DID amnesia is **not limited to stressful events**."]
            ] },
            { type: "callout", kind: "culture", title: "Possession-form DID", text: "An identity that appears as a **spirit, supernatural being or outside person** taking control (for example, the “ghost” of a girl who died by suicide years earlier). It is DID when the possession is **recurrent, unwanted, involuntary and distressing**, causes conflict with family or community, and occurs at times and places that **violate cultural or religious norms**. Most possession states worldwide are part of **accepted practice** and are not DID (Criterion D) (pp. 332, 334)." }
          ]
        },
        {
          id: "s8-did-features",
          title: "Dissociative identity disorder: features, prevalence and course",
          pages: "332–334",
          blocks: [
            { type: "list", title: "Associated features (pp. 332–333)", items: [
              "Presents with **depression, anxiety, substance use, self-injury** or another common complaint; dissociative symptoms are often concealed.",
              "**Nonepileptic seizures** and other functional neurological symptoms are prominent in some presentations (especially non-Western settings); some present with refractory headaches, seizures or MS-like symptoms.",
              "**Dissociative flashbacks**: sensory reliving with a change of identity, loss of contact with the present, and amnesia for the flashback afterward.",
              "Histories of **multiple types of maltreatment**; long, painful early medical procedures.",
              "**Nonsuicidal self-injury** is frequent; **hypnotizability** and dissociation scores are the highest of any clinical group; transient psychotic episodes can occur.",
              "Personality features: **avoidant** rates highest; borderline features when decompensated (but usually no frantic efforts to avoid abandonment); obsessional more than histrionic; some narcissistic or antisocial features."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 333–334)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence", "**1.5%** (small US community study)"],
              ["Lifetime", "1.1% in community women in mid-eastern Turkey"],
              ["Sex", "Women predominate in **adult clinical** settings, not in child clinics or the general population"],
              ["Onset", "Any age, early childhood to late life"],
              ["Children", "Rarely show identity shifting; present with **independently acting imaginary companions**, personified mood states, memory and attachment problems, traumatic play"],
              ["Adolescents", "Externalizing behavior, self-harm, rapid behavioral shifts misattributed to **ADHD** or pediatric **bipolar disorder**"],
              ["Older adults", "May look like late-life mood disorder, OCD, paranoia, psychotic depression or cognitive disorder"]
            ] },
            { type: "defs", title: "Risk and course modifiers (pp. 333–334)", items: [
              ["Environmental", "Early trauma (neglect; physical, sexual, emotional abuse), usually **before age 5–6**, within family and attachment pathology. About **90%** report multiple types of early neglect and abuse. Also bullying, painful medical procedures, war, terrorism, child trafficking, or prolonged dysfunctional family dynamics."],
              ["Genetic and physiological", "Genetics explain about **45%–50%** of variance in dissociative symptoms. Brain regions: **orbitofrontal cortex, hippocampus, parahippocampal gyrus, amygdala**."],
              ["Triggers of overt alteration", "New trauma (sexual assault), even a minor car accident; one’s child reaching the age at which one was abused; the **death or fatal illness of the abuser**."],
              ["Revictimization", "High risk of rape, intimate partner violence, sexual exploitation, ongoing incest and trafficking in adulthood."],
              ["Poor outcome", "Ongoing abuse, revictimization, refractory substance use, eating disorders, severe medical illness, enmeshment with the abusive family, criminal involvement."]
            ] },
            { type: "callout", kind: "caution", title: "Suicide risk is very high", text: "More than **70%** of outpatients with DID have **attempted suicide**, often repeatedly, with frequent self-injury and high-risk behavior. Risk factors pile up: severe cumulative trauma, comorbid PTSD, depression and substance use, and personality features. **Dissociation itself** independently predicts multiple attempts (p. 334)." },
            { type: "p", text: "**Function** (pp. 334–335) ranges from apparently minimal (high-functioning professionals, whose relationships and parenting suffer more than work) to that of chronic, persistent mental illness. Some children do poorly at school; others find school a respite. Many improve over time." }
          ]
        },
        {
          id: "s8-did-ddx",
          title: "Dissociative identity disorder: differential diagnosis",
          pages: "335–337",
          blocks: [
            { type: "table", caption: "DID or a look-alike? (pp. 335–337)", head: ["Condition", "How to tell"], rows: [
              ["[[dx:dissociative-amnesia|Dissociative amnesia]]", "Amnesia **without** identity disruption into two or more states"],
              ["[[dx:dpdr|Depersonalization/derealization disorder]]", "No identity states, no altered agency, no typical amnesia"],
              ["[[dx:mdd|Major depressive disorder]]", "No dissociative shifts in self or amnesia. Lifelong posttraumatic low mood and **anniversary reactions** can mimic MDD with seasonal pattern; check whether **all** identity states share the mood"],
              ["[[dx:bipolar-ii|Bipolar disorders]]", "DID is often misdiagnosed as **bipolar II with mixed features**. DID shifts take **minutes to hours**, tied to specific identity states; sleep is broken by **nightmares and nocturnal flashbacks**, not reduced need for sleep"],
              ["[[dx:ptsd|PTSD]]", "Most with DID also meet PTSD. PTSD amnesia is limited to **specific traumatic events**; dissociative-subtype depersonalization is tied to **trauma reminders**"],
              ["[[dx:schizophrenia|Schizophrenia]]", "Voices and experiences resembling **first-rank symptoms** (commentary, insertion, withdrawal) occur in DID, but are felt as **ego-alien and frightening** without delusional explanations; hallucinations are often visual, tactile, olfactory; **amnesia** is present; hypnotic capacity is the **highest** of any group (low in schizophrenia)"],
              ["Substance-related disorders", "Blackouts linked to a substance are not dissociative amnesia"],
              ["Personality disorders (especially borderline)", "Identities may each look like a personality disorder, but DID shows **longitudinal variability** across identities rather than pervasive, persistent dysfunction"],
              ["Neurocognitive disorder after TBI", "Loss of consciousness, confusion, neurological signs; immediate onset; deficits in attention, executive function and memory; no discontinuity of self and agency"],
              ["Functional neurological symptom disorder", "No identity states; amnesia is circumscribed (e.g., for a nonepileptic seizure)"]
            ] },
            { type: "compare", title: "Genuine or feigned DID? (p. 337)", items: [
              { title: "Genuine DID", color: "case", points: ["**Ashamed**, overwhelmed, denies the diagnosis.", "**Underreports** and minimizes symptoms and trauma.", "Subtle intrusion symptoms; depression acknowledged.", "Switching not staged for an audience."] },
              { title: "Feigned DID (factitious or malingering)", color: "drug", points: ["Overreports **media-based** features: dramatic amnesia, melodramatic switching.", "Underreports depression; seems undisturbed or even to **enjoy** the diagnosis; asks the clinician to “find” memories.", "Limited, stereotyped identities; amnesia only for events tied to gain; switching only when observed.", "“All-good” and “all-bad” identities seeking **exculpation** for a crime."] }
            ] },
            { type: "p", text: "**Comorbidity** (p. 337): PTSD, depressive disorders, substance-related disorders, eating disorders, OCD, antisocial personality disorder and other specified personality disorder (avoidant, obsessive-compulsive or borderline traits). Common functional neurological symptoms: **nonepileptic seizures** (often like grand mal or complex partial seizures), gait disturbance and paralysis." },
            { type: "case", title: "Clinical vignette: the shoes she never bought", text: "A 34-year-old nurse is referred after her third overdose. She has been treated for “rapid-cycling bipolar II” without benefit. Her moods change within an hour. She finds clothes in her closet she does not remember buying, colleagues mention conversations she cannot recall, and she sometimes “comes to” in her car without knowing how she got there. She hears a child crying and a harsh voice criticizing her, which frighten her and which she knows come from inside her head. She reports severe abuse from age 4 and sleeps poorly because of nightmares.", point: "Discontinuities in self and agency with internal voices, plus **recurrent everyday amnesia** (time loss, unexplained possessions, fugue episodes): **F44.81 dissociative identity disorder**, likely with comorbid PTSD. The **minutes-to-hours** shifts and nightmare-broken sleep argue against bipolar disorder. Suicide risk is high." }
          ]
        }
      ]
    },
    {
      title: "Dissociative amnesia",
      sections: [
        {
          id: "s8-amnesia-criteria",
          title: "Dissociative amnesia: criteria and forms",
          pages: "337–339",
          blocks: [
            { type: "criteria", title: "Dissociative amnesia in brief", code: "F44.0 (F44.1 with fugue)", pages: "337", items: [
              ["A", "Inability to recall **important autobiographical information**, usually **traumatic or stressful**, **inconsistent with ordinary forgetting**.", [], "Most often **localized or selective** for an event or events, or **generalized** for identity and life history."],
              ["B", "Clinically significant **distress or impairment**."],
              ["C", "Not due to a **substance** (alcohol, drugs, medication) or a **neurological or medical condition** (complex partial seizures, **transient global amnesia**, sequelae of head injury)."],
              ["D", "Not better explained by **DID, PTSD, acute stress disorder, somatic symptom disorder** or **major or mild neurocognitive disorder**."]
            ], specifiers: [["With dissociative fugue (F44.1)", "Apparently **purposeful travel** or **bewildered wandering** with amnesia for identity or other important autobiographical information"]] },
            { type: "table", caption: "Forms of dissociative amnesia (p. 338)", head: ["Form", "What is lost", "Example"], rows: [
              ["**Localized**", "A circumscribed period of time (the most common form)", "No memory of the day of an assault"],
              ["**Selective**", "Some, but not all, events during a period", "Recalls the drive home but not the crash"],
              ["**Systematized**", "A category of information", "No recall of a violent older sibling, or of one room of the childhood home"],
              ["**Generalized**", "Most or all of life history, often identity; sometimes knowledge of the world or skills", "Found wandering, not knowing her name. **Rare**, acute onset"],
              ["**Continuous** (anterograde)", "Each new event as it occurs", "Rare; can be confused with delirium"]
            ] },
            { type: "defs", title: "Reading the criteria (pp. 338–339)", items: [
              ["What is lost", "Information that **should be stored** and **would ordinarily be freely recalled**."],
              ["Reversible retrieval deficit", "Dissociative amnesia is a potentially **reversible retrieval** problem, unlike amnesia from brain damage or toxicity, which impairs storage."],
              ["Retrograde", "Usually **retrograde**; ongoing amnesia for current life is rare (except continuous amnesia). Lost memories include everyday events, not only trauma."],
              ["Unawareness", "People are often **unaware** or only partly aware of their amnesia, recall some traumatic events but not others of the same type, and **minimize** the loss."],
              ["Fugue", "Commonly accompanies **generalized** amnesia; may be more common in combat veterans, sexual assault victims and people in extreme conflict."]
            ] },
            { type: "case", title: "Clinical vignette: found at the bus station", text: "A 29-year-old man is brought to the emergency department after being found at a bus station 400 km from home. He is calm but cannot say his name, where he lives or how he got there. He has no head injury, his neurological examination, glucose, toxicology, EEG and MRI are normal, and he can read, use a phone and discuss current events. His family later reports that his business collapsed and he faced arrest for fraud the week before.", point: "Generalized loss of identity and life history with **travel**, normal workup, after intense psychological conflict: **F44.1 dissociative amnesia, with dissociative fugue**. Consider malingering given the legal problems, but feigning and true amnesia can coexist." }
          ]
        },
        {
          id: "s8-amnesia-features",
          title: "Dissociative amnesia: features, course and risk",
          pages: "338–340",
          blocks: [
            { type: "list", title: "Associated features (pp. 338–339)", items: [
              "Chronic difficulty forming and keeping relationships; histories of **trauma**, especially child abuse.",
              "Dissociative flashbacks, **nonsuicidal self-injury, suicide attempts**, high-risk behavior.",
              "Depression, functional neurological symptoms, depersonalization, **high hypnotizability**, sexual dysfunction.",
              "**Mild TBI** may precede it."
            ] },
            { type: "table", caption: "Epidemiology and course (p. 339)", head: ["Topic", "Detail"], rows: [
              ["12-month prevalence", "**1.8%** (small US community study)"],
              ["Age", "Children through older adults; hardest to assess under **12** (confused with inattention, daydreaming, anxiety, opposition, learning disorders): use several informants"],
              ["Generalized amnesia", "**Sudden** onset; can recur; may resolve quickly when removed from combat or stress; a substantial subgroup develops **chronic, debilitating** memory deficits that relearning does not fix"],
              ["Fugue", "Memory loss may be **particularly refractory**; in children, limited by life space (cycling to an unfamiliar neighborhood)"],
              ["Breakdown of old amnesia", "Later trauma or loss can unmask long-standing gaps, with acute PTSD, mood disorders, substance use and danger to self or others"]
            ] },
            { type: "defs", title: "Risk factors (pp. 339–340)", items: [
              ["Environmental", "**Severe acute or chronic trauma**. In childhood: cumulative abuse, especially severe or repeated sexual abuse by a **relative** with betrayal by an attachment figure. In adults: repeated combat, trafficking, captivity. Generalized amnesia: recent extreme trauma (combat, rape, torture without escape), displacement, refugee status, or profound **psychological conflict**."],
              ["Genetic", "About **50%** of variance in dissociative symptoms; gene–environment interplay with early chronic trauma."]
            ] },
            { type: "callout", kind: "culture", text: "Where possession is normative, amnesia and fugue may be read as pathological **possession**. Where people feel highly **constrained** by social circumstances or tradition, amnesia often follows **conflict or oppression** (marital conflict, family disturbance) rather than frank trauma (p. 340)." },
            { type: "callout", kind: "caution", title: "Danger when memory returns", text: "Suicidal thoughts and behavior are common, and risk may peak when the amnesia **remits suddenly** and floods the person with intolerable memories (p. 340)." }
          ]
        },
        {
          id: "s8-amnesia-ddx",
          title: "Dissociative amnesia: differential diagnosis",
          pages: "340–343",
          blocks: [
            { type: "table", caption: "Memory loss: dissociative or something else? (pp. 340–343)", head: ["Condition", "How it differs"], rows: [
              ["[[dx:did|DID]]", "Pervasive discontinuities of self and agency; **ongoing time loss** for everyday events, unexplained possessions, fluctuating skills, brief gaps in conversations"],
              ["[[dx:ptsd|PTSD]]", "Amnesia limited to the **trauma** (e.g., the day of a rape). If it extends beyond, add dissociative amnesia"],
              ["Major neurocognitive disorder", "Neural damage, global cognitive decline; **identity preserved until late**; retrograde amnesia almost always with **anterograde** amnesia"],
              ["Substance blackouts", "Amnesia **only during intoxication**; follow after detoxification. Long-term use may cause a substance-induced neurocognitive disorder"],
              ["Posttraumatic amnesia after TBI", "Head impact, loss of consciousness, confusion, neurological signs (imaging abnormalities, new seizures, field cuts, anosmia). Mild TBI can precede dissociative amnesia, but then the memory loss is **out of proportion**"],
              ["Seizure disorders", "Wandering limited to the seizure, **nonpurposive**; EEG abnormalities. Fugue behavior is **purposeful**, complex and may last days to weeks. Both can coexist"],
              ["ECT", "Memory loss mostly for the **day** of treatment, unrelated to stressful periods, and remits after the series; ECT does not worsen dissociation"],
              ["Catatonic stupor", "Mutism without failure of recall, with rigidity, posturing, negativism; memory loss only for the episode"],
              ["Acute dissociative reaction (other specified)", "Many dissociative symptoms together, lasting **under a month**, with **micro-amnesias**"],
              ["Factitious disorder and malingering", "**No test** reliably distinguishes them. Suspect with florid acute amnesia, financial, sexual or legal problems, a wish to escape, or litigation over “recovered memories.” Many confess when confronted; feigning and true amnesia can coexist"],
              ["Aging and mild neurocognitive disorder", "Trouble **learning and retaining new** information on word-list or story recall, not loss of autobiographical memory"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 343): as amnesia remits, dysphoria, grief, rage, shame and guilt may surface, with self-injury and high-risk behavior. Depressive disorders, **PTSD** (often the dissociative subtype), **functional neurological symptom disorder**, substance-related disorders, eating disorders and sexual dysfunctions are common. The most common personality diagnosis is other specified personality disorder with mixed (avoidant, obsessive-compulsive, dependent, borderline) features." },
            { type: "callout", kind: "exam", title: "Transient global amnesia is not dissociative", text: "**Transient global amnesia** (sudden **anterograde** amnesia for hours in an older adult who repeatedly asks the same questions, identity preserved) is a **neurological** condition excluded by Criterion C. Dissociative amnesia is usually **retrograde**, autobiographical, and may include loss of identity." }
          ]
        }
      ]
    },
    {
      title: "Depersonalization/derealization disorder",
      sections: [
        {
          id: "s8-dpdr-criteria",
          title: "Depersonalization/derealization disorder: criteria",
          pages: "343–344",
          blocks: [
            { type: "criteria", title: "Depersonalization/derealization disorder in brief", code: "F48.1", pages: "343", items: [
              ["A", "Persistent or recurrent **depersonalization**, **derealization**, or both:", [
                "**Depersonalization**: unreality, detachment, or being an **outside observer** of one’s thoughts, feelings, sensations, body or actions (perceptual changes, distorted time, unreal or absent self, emotional or physical numbing).",
                "**Derealization**: unreality or detachment from **surroundings** (people or objects unreal, dreamlike, foggy, lifeless or visually distorted)."
              ]],
              ["B", "**Reality testing remains intact** during the experiences."],
              ["C", "Clinically significant **distress or impairment**."],
              ["D", "Not due to a **substance** or **medical condition** (e.g., seizures)."],
              ["E", "Not better explained by **schizophrenia, panic disorder, MDD, acute stress disorder, PTSD** or another **dissociative disorder**."]
            ] },
            { type: "defs", title: "What it feels like (pp. 343–344)", items: [
              ["Depersonalization", "“I am no one,” “I have no self.” **Hypoemotionality** (“I know I have feelings, but I don’t feel them”), thoughts not feeling one’s own, “head filled with cotton,” numb body or sensations (touch, hunger, thirst, libido), feeling **robotic**, a split self (one part observing, one participating), at the extreme an **out-of-body** experience."],
              ["Its components", "Anomalous body experiences; emotional or physical **numbing**; temporal distortions with anomalous recall."],
              ["Derealization", "In a **fog, dream or bubble**, a **veil or glass wall** between self and world; surroundings artificial, colorless or lifeless; **visual distortions** (blurriness, heightened acuity, flatness, **macropsia or micropsia**); sounds muted or heightened."],
              ["Either or both", "No meaningful distinction has been shown between predominantly depersonalization and predominantly derealization presentations (p. 329)."]
            ] },
            { type: "case", title: "Clinical vignette: behind glass", text: "A 19-year-old university student has felt for 8 months as if she were watching herself in a film and the world were behind a pane of glass, colorless and flat. She knows the world is real but says “it doesn’t feel real,” fears she is going crazy or has brain damage, and checks her reflection to see whether she exists. It began after a frightening episode while smoking cannabis; she has not used since. Her neurological examination and EEG are normal.", point: "Persistent depersonalization and derealization with **intact reality testing**, distress and impairment, persisting long after the triggering substance: **F48.1 depersonalization/derealization disorder**. Cannabis precipitates about 15% of cases; persistence without further use allows the diagnosis." }
          ]
        },
        {
          id: "s8-dpdr-features",
          title: "Depersonalization/derealization disorder: features, course and differential",
          pages: "344–347",
          blocks: [
            { type: "list", title: "Associated features (p. 344)", items: [
              "Difficulty describing symptoms; fear of **“going crazy”** or of **irreversible brain damage**.",
              "Altered sense of **time**; difficulty recalling memories vividly and owning them.",
              "Vague somatic symptoms (head fullness, tingling, lightheadedness).",
              "**Obsessional** rumination about whether one exists, or checking perceptions.",
              "Anxiety and depression; physiological **hyporeactivity** to emotional stimuli. Substrates: HPA axis, inferior parietal lobule, prefrontal-limbic circuits.",
              "A flattened, robotic demeanor that seems at odds with the intense distress they report."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 344–345)", head: ["Topic", "Detail"], rows: [
              ["Transient symptoms", "Common: about **half of adults** have had at least one episode"],
              ["Disorder (1-month, UK)", "About **1%–2%**"],
              ["Mean onset", "**16 years**; under 20% begin after 20, **5% after 25**; onset in the 40s or later is **highly unusual** → look for a medical cause (brain lesion, seizures, sleep apnea)"],
              ["Course", "Often persistent: about **one-third** episodic, one-third continuous from the start, one-third episodic then continuous"],
              ["Triggers of worsening", "Stress, worse mood or anxiety, **novel or overstimulating settings**, lighting, lack of sleep"]
            ] },
            { type: "defs", title: "Risk factors (p. 345)", items: [
              ["Temperamental", "**Harm avoidance**, immature defenses (idealization/devaluation, projection, acting out), disconnection and overconnection schemata."],
              ["Environmental", "Childhood interpersonal trauma, less extreme than in DID; **emotional abuse and emotional neglect** most consistently. Also physical abuse, witnessing domestic violence, a seriously ill parent, sudden death or suicide of someone close; sexual abuse is less common."],
              ["Precipitants", "Severe stress, depression, anxiety (especially **panic attacks**) and drugs: **THC, hallucinogens, ketamine, MDMA, salvia**. Cannabis may trigger panic and depersonalization together."]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 346–347)", head: ["Condition", "How to tell"], rows: [
              ["Illness anxiety disorder", "DPDR may bring fears of brain damage, but its typical symptom constellation is present and other illness-anxiety features are absent"],
              ["[[dx:mdd|Major depressive disorder]]", "Numbness and deadness occur in depression; diagnose DPDR if it **precedes** the episode or **continues after** it resolves"],
              ["[[dx:ocd|OCD]]", "Rituals limited to checking one’s DPDR experiences; no other OCD symptoms"],
              ["Other dissociative disorders", "Not diagnosed if symptoms occur within **DID**"],
              ["[[dx:panic-attack|Panic attacks]]", "Not diagnosed if DPDR occurs **only during panic attacks**. Diagnose it if DPDR was prominent from the start, **exceeding** the attacks, or **persists after** panic disorder remits"],
              ["Psychotic disorders", "**Intact reality testing** is the key. Nihilistic delusions (“I am dead,” “the world isn’t real”) held with conviction point to psychosis"],
              ["Substance-induced", "Not diagnosed during intoxication or withdrawal; about **15%** of cases are precipitated by drugs, and DPDR is diagnosed if symptoms **persist without further use** (most avoid the drug afterward)"],
              ["Traumatic brain injury", "Symptoms begin **after** the TBI, without the other features of DPDR"],
              ["Medical conditions", "Onset after **40**, atypical symptoms or course: labs, viral titers, **EEG** (ambulatory if needed; temporal, parietal or frontal lobe epilepsy), vestibular and visual testing, sleep studies, imaging"]
            ] },
            { type: "p", text: "**Culture** (p. 345): depersonalization or derealization induced **volitionally** in meditation is not a disorder, unless the person loses control of it. Spiritual explanations may reduce fear of “losing one’s mind.” **Comorbidity** (p. 347): high lifetime rates of unipolar depression and anxiety disorders; **PTSD comorbidity is low**; avoidant, borderline and obsessive-compulsive personality disorders are the most common." },
            { type: "callout", kind: "exam", text: "The single phrase that defines DPDR is **intact reality testing**: “It feels **as if** the world isn’t real, but I know it is.” If the person believes the world truly is unreal or that they are dead, think psychosis (nihilistic delusions)." }
          ]
        }
      ]
    },
    {
      title: "Residual categories and putting it together",
      sections: [
        {
          id: "s8-other",
          title: "Other specified and unspecified dissociative disorder",
          pages: "347–348",
          blocks: [
            { type: "p", text: "Dissociative symptoms that cause distress or impairment and predominate, without meeting a specific disorder. **Other specified (F44.89)** records the reason (e.g., “other specified dissociative disorder, dissociative trance”); **unspecified (F44.9)** is used when the reason is not given or information is insufficient, such as in the emergency department (pp. 347–348)." },
            { type: "table", caption: "The four named examples (pp. 347–348)", head: ["Example", "Key features"], rows: [
              ["**1. Chronic and recurrent syndromes of mixed dissociative symptoms**", "Identity disturbance with **less-than-marked** discontinuities of self and agency, or identity alterations or possession episodes **without dissociative amnesia**"],
              ["**2. Identity disturbance due to prolonged and intense coercive persuasion**", "Brainwashing, thought reform, indoctrination in captivity, torture, long political imprisonment, recruitment by **sects, cults or terror organizations**: prolonged changes in, or questioning of, identity"],
              ["**3. Acute dissociative reactions to stressful events**", "Acute, transient, typically **less than 1 month** (sometimes hours or days): constricted consciousness, depersonalization, derealization, perceptual changes (time slowing, macropsia), **micro-amnesias**, transient stupor, sensory-motor changes (analgesia, paralysis)"],
              ["**4. Dissociative trance**", "Acute narrowing or loss of awareness of surroundings, with profound **unresponsiveness**; minor stereotyped movements, transient paralysis or loss of consciousness; **not** part of accepted collective cultural or religious practice"]
            ] },
            { type: "callout", kind: "mnemonic", title: "Remembering the four", text: "**M**ixed syndromes (no amnesia) · **C**oercive persuasion · **A**cute reactions (<1 month) · **T**rance: “**M-CAT**.” See the [[page:mnemonics|Mnemonics]] page." }
          ]
        },
        {
          id: "s8-compare",
          title: "The chapter side by side",
          pages: "329–348",
          blocks: [
            { type: "table", caption: "Which dissociative diagnosis?", head: ["Presentation", "Diagnosis"], rows: [
              ["Two or more identity states (or unwanted possession) + recurrent amnesia", "DID (F44.81)"],
              ["Identity alterations or possession **without** amnesia", "Other specified (mixed syndromes)"],
              ["Gaps in autobiographical memory, no identity states", "Dissociative amnesia (F44.0)"],
              ["Amnesia for identity with travel or wandering", "Dissociative amnesia with fugue (F44.1)"],
              ["Detachment from self or world, reality testing intact", "DPDR (F48.1)"],
              ["Dissociative symptoms for days after a stressor, under a month", "Other specified (acute dissociative reaction) or acute stress disorder if its criteria are met"],
              ["Changed identity after cult or captivity", "Other specified (coercive persuasion)"],
              ["Unresponsive trance outside accepted practice", "Other specified (dissociative trance)"],
              ["Amnesia only for a trauma, with PTSD", "PTSD (dissociative subtype if DPDR symptoms)"],
              ["Amnesia only during intoxication", "Substance-related blackout"]
            ] },
            { type: "table", caption: "The few numbers in this chapter", head: ["Rule", "Value"], rows: [
              ["Acute dissociative reaction (other specified)", "Hours to **less than 1 month**"],
              ["DPDR mean onset", "**16**; under 20% after 20; **5% after 25**"],
              ["DPDR onset after **40**", "Highly unusual: look for a medical cause"],
              ["DID, dissociative amnesia, DPDR duration", "**No duration criterion** (DPDR must be persistent or recurrent)"],
              ["DID suicide attempts (outpatients)", "**Over 70%**"],
              ["DPDR precipitated by drugs", "About **15%**"]
            ] }
          ]
        },
        {
          id: "s8-approach",
          title: "A practical approach and the classic traps",
          pages: "329–348",
          blocks: [
            { type: "steps", title: "Six steps", items: [
              ["1. Screen", "Ask about time loss, unexplained possessions, being told of things you did, finding yourself somewhere without knowing how, voices inside the head, feeling detached or unreal. Use a dissociation screening scale if available."],
              ["2. Rule out medical and substance causes", "Seizures (EEG), TBI, transient global amnesia, sleep apnea, intoxication blackouts, ketamine and other drugs; onset of DPDR after 40."],
              ["3. Identity", "Two or more states or possession with agency changes? With recurrent amnesia → DID; without amnesia → other specified."],
              ["4. Memory", "Autobiographical gaps without identity states → dissociative amnesia; travel → with fugue."],
              ["5. Detachment", "Depersonalization or derealization with intact reality testing, not only during panic, depression, PTSD or another dissociative disorder → DPDR."],
              ["6. Comorbidity and safety", "PTSD, depression, substance use, eating disorders, functional neurological symptoms; ask about **suicide** and self-injury and about **current abuse**."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) DID does **not** require dramatic, visible alters: most switching is subtle. 2) DID needs **recurrent amnesia** too. 3) Possession within accepted **religious practice** is not DID. 4) **Imaginary playmates** in children are not DID. 5) DID voices are not schizophrenia: ego-alien, multimodal, with amnesia and high hypnotizability. 6) Minute-to-hour shifts are not **rapid-cycling bipolar**. 7) Amnesia limited to a trauma is part of **PTSD**. 8) Dissociative amnesia is usually **retrograde**; TGA is neurological. 9) Fugue is a **specifier** (F44.1), not a separate disorder. 10) DPDR requires **intact reality testing**. 11) DPDR only during panic attacks is not DPDR. 12) DPDR or DID **onset late in life** calls for a medical workup." },
            { type: "p", text: "Practice with the [[helper:dissociative|dissociative disorders helper]] and the [[helper:memoryloss|memory gap helper]], then compare [[dx:did|DID]] with [[dx:schizophrenia|schizophrenia]] and [[dx:bipolar-ii|bipolar II disorder]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
