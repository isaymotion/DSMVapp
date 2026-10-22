/* Chapter 9 study guide. Source: DSM-5-TR, Somatic Symptom and Related Disorders (pp. 349–370).
   Written in the app’s own words from the manual, with page references. Criteria are paraphrased: confirm exact
   wording, specifiers and codes against the manual. */
SP.add("ch09", "guide", {
  intro: "Every disorder in this chapter shares **prominent somatic symptoms and/or illness anxiety** with significant distress and impairment, and most patients are seen in **primary care and medical settings**, not psychiatry (p. 349). DSM-5 replaced the confusing DSM-IV “somatoform disorders” with diagnoses based on **positive symptoms** rather than on the **absence of a medical explanation**, which was unreliable, reinforced mind–body dualism and felt dismissive. **Somatic symptom disorder** needs distressing symptoms **plus excessive thoughts, feelings or behaviors** about them, typically for **6 months**. **Illness anxiety disorder** is fear of having a serious illness with **no or mild** symptoms. **Functional neurological symptom disorder** is a **rule-in** diagnosis, based on examination findings **incompatible** with neurological disease, and no longer requires a stressor. **Psychological factors affecting other medical conditions** reverses the arrow: the mind worsens a medical illness. **Factitious disorder** is **deceptive** falsification without obvious external reward, imposed on self or on another. The [[helper:somatic|somatic symptom helper]] and the [[helper:deception|feigned or genuine helper]] walk you through the reasoning.",
  objectives: [
    "Explain why DSM-5 moved from “medically unexplained” symptoms to **positive** criteria, and why a medical illness does not exclude these diagnoses.",
    "State the criteria for **somatic symptom disorder**, with the **predominant pain** and **persistent** specifiers and the **severity** rule based on Criterion B.",
    "Diagnose **illness anxiety disorder** (no or mild symptoms, ≥6 months), with **care-seeking** and **care-avoidant** types, and separate it from somatic symptom disorder, GAD, panic, OCD and delusional disorder.",
    "Diagnose **functional neurological symptom disorder** from **positive signs** (Hoover’s sign, tremor entrainment, features of functional seizures), code it by symptom type (F44.4–F44.7), and know the limits of la belle indifférence and secondary gain.",
    "Apply **psychological factors affecting other medical conditions** (F54) and its severity levels, and separate it from adjustment disorder and mental disorders due to another medical condition.",
    "Diagnose **factitious disorder imposed on self** (F68.10) and **on another** (F68.A), know who receives the diagnosis, and separate it from malingering and somatic symptom disorder.",
    "Use the **other specified** examples (brief somatic symptom or illness anxiety disorder, illness anxiety without health behaviors, **pseudocyesis**).",
    "Recall prevalence, course, risk, suicide association and comorbidity for each disorder."
  ],
  parts: [
    {
      title: "Overview",
      sections: [
        {
          id: "s9-map",
          title: "How the chapter is built",
          pages: "349–351",
          blocks: [
            { type: "table", caption: "Diagnoses in this chapter (codes as listed in DSM-5-TR)", head: ["Diagnosis", "Code", "Core idea", "Page"], rows: [
              ["[[dx:ssd|Somatic symptom disorder]]", "F45.1", "Distressing symptoms + excessive thoughts, feelings or behaviors, typically >6 months", "351–357"],
              ["[[dx:iad|Illness anxiety disorder]]", "F45.21", "Preoccupation with having a serious illness, no or mild symptoms, ≥6 months", "357–360"],
              ["[[dx:fnd|Functional neurological symptom disorder (conversion disorder)]]", "F44.4–F44.7 by symptom", "Motor or sensory symptoms incompatible with recognized neurological disease", "360–364"],
              ["[[dx:pfamc|Psychological factors affecting other medical conditions]]", "F54", "Psychological or behavioral factors worsen a medical condition", "364–367"],
              ["[[dx:factitious|Factitious disorder]]", "F68.10 self · F68.A another", "Deceptive falsification of illness, without obvious external rewards", "367–370"],
              ["[[dx:other-specified-somatic|Other specified somatic symptom and related disorder]]", "F45.8", "Brief forms, illness anxiety without behaviors, pseudocyesis", "370"],
              ["[[dx:unspecified-somatic|Unspecified somatic symptom and related disorder]]", "F45.9", "Only in decidedly unusual situations with insufficient information", "370"]
            ] },
            { type: "compare", title: "From DSM-IV to DSM-5 (pp. 349–351)", items: [
              { title: "DSM-IV somatoform disorders", color: "clin", points: ["Centered on symptoms **unexplained** by a medical condition.", "Overlapping, unclear categories: somatization disorder, hypochondriasis, pain disorder, undifferentiated somatoform disorder.", "Seen as **pejorative**, implying symptoms were not “real.”"] },
              { title: "DSM-5 somatic symptom and related disorders", color: "drug", points: ["Based on **positive** features: distress plus excessive thoughts, feelings and behaviors.", "Can coexist with a **recognized medical condition**.", "About **two-thirds to three-quarters** of former hypochondriasis now fit somatic symptom disorder; the rest, with no symptoms, fit **illness anxiety disorder**.", "Factitious disorder moved here because it, too, centers on illness perception and identity."] }
            ] },
            { type: "callout", kind: "key", title: "Never diagnose by exclusion", text: "It is **not** appropriate to give a mental disorder diagnosis **solely because** a medical cause cannot be found, and a recognized medical condition does **not** exclude a somatic symptom and related disorder. Only functional neurological symptom disorder and pseudocyesis require positive evidence of **incompatibility** with recognized pathophysiology (pp. 349–350)." }
          ]
        },
        {
          id: "s9-principles",
          title: "Contributing factors and overlaps",
          pages: "350–351",
          blocks: [
            { type: "list", title: "What contributes (p. 350)", items: [
              "**Genetic and biological** vulnerability, such as heightened pain sensitivity.",
              "**Early trauma**: violence, abuse, deprivation.",
              "**Medical iatrogenesis**: reinforcing the sick role, excessive referrals and testing.",
              "**Learning**: little reinforcement for expressing distress in nonsomatic ways.",
              "**Sociocultural** norms that stigmatize psychological suffering more than physical suffering."
            ] },
            { type: "list", title: "Overlaps to keep in mind (p. 350)", items: [
              "Major depression and panic disorder often **present with somatic symptoms**; they may explain the symptoms or coexist.",
              "Somatic symptoms make depression and anxiety **more severe, more impairing and more treatment-refractory**.",
              "Medical comorbidity is common.",
              "Rarely, preoccupation reaches **delusional** intensity: consider delusional disorder, somatic type."
            ] },
            { type: "table", caption: "One-line comparison", head: ["Disorder", "Symptoms", "Worry or behavior", "Deception"], rows: [
              ["Somatic symptom disorder", "**Distressing** somatic symptoms", "**Excessive** thoughts, feelings or behaviors", "No"],
              ["Illness anxiety disorder", "**None or mild**", "Fear of having a disease; checking or avoidance", "No"],
              ["Functional neurological symptom disorder", "Motor or sensory **loss or change**, incompatible with disease", "Not required", "No"],
              ["Psychological factors affecting other medical conditions", "A **medical condition**", "Psychological factors **worsen** it", "No"],
              ["Factitious disorder", "Falsified or induced", "Presents as ill", "**Yes**, without obvious external reward"],
              ["Malingering (not a mental disorder)", "Falsified or exaggerated", "—", "**Yes**, for external reward"]
            ] },
            { type: "update", kind: "tr", title: "Name and code changes in the text revision", text: "DSM-5-TR leads with the name **functional neurological symptom disorder**, keeping “conversion disorder” in parentheses, and expanded the description of **positive examination signs**. Factitious disorder imposed on another now has its own code, **F68.A** (imposed on self stays F68.10). Suicide sections were added for somatic symptom and functional neurological symptom disorders." }
          ]
        }
      ]
    },
    {
      title: "Somatic symptom disorder",
      sections: [
        {
          id: "s9-ssd-criteria",
          title: "Somatic symptom disorder: criteria",
          pages: "351–352",
          blocks: [
            { type: "criteria", title: "Somatic symptom disorder in brief", code: "F45.1", pages: "351", items: [
              ["A", "One or more somatic symptoms that are **distressing** or significantly **disrupt daily life**."],
              ["B", "**Excessive** thoughts, feelings or behaviors about the symptoms or health concerns, with **at least one** of:", [
                "**Disproportionate and persistent thoughts** about the seriousness of the symptoms.",
                "**Persistently high anxiety** about health or symptoms.",
                "**Excessive time and energy** devoted to the symptoms or health concerns."
              ]],
              ["C", "Any one symptom may come and go, but the **state of being symptomatic is persistent** (typically **more than 6 months**)."]
            ], specifiers: [["With predominant pain", "Somatic symptoms mainly involve pain (previously **pain disorder**)"], ["Persistent", "Severe symptoms, marked impairment and long duration (>6 months)"], ["Severity", "**Mild**: one B symptom · **Moderate**: two or more · **Severe**: two or more plus multiple somatic complaints (or one very severe symptom)"]] },
            { type: "defs", title: "Reading the criteria (pp. 351–352)", items: [
              ["Symptoms", "Usually several, sometimes one severe symptom, most often **pain**; specific (localized pain) or nonspecific (fatigue); sometimes normal bodily sensations."],
              ["Not “unexplained”", "Symptoms without a medical explanation are **not enough**, and the suffering is **authentic** whether or not medically explained."],
              ["With medical illness", "It can coexist with a medical condition: someone disabled by somatic symptom disorder after an **uncomplicated myocardial infarction**. If a medical condition or high risk is present, the reaction must be **excessive**."],
              ["The core", "Appraising symptoms as threatening and thinking the worst; health concerns may become central to **identity** and relationships."],
              ["Health care use", "High use that rarely reassures; many doctors for the same symptoms; poor response to treatment; sensitivity to side effects; feeling inadequately assessed."]
            ] },
            { type: "case", title: "Clinical vignette: the chest that hurts", text: "A 48-year-old woman had an uncomplicated myocardial infarction 18 months ago, with a normal ejection fraction and normal stress tests since. She has daily chest tightness and fatigue, checks her pulse and blood pressure many times a day, has visited the emergency department nine times, has stopped walking and working, and is convinced she will have another heart attack despite her cardiologist’s reassurance.", point: "Distressing symptoms with **persistent disproportionate thoughts**, **high health anxiety** and **excessive time and energy** (three B symptoms) for more than 6 months: **F45.1 somatic symptom disorder, persistent, severe**. A real medical illness does not exclude it." }
          ]
        },
        {
          id: "s9-ssd-features",
          title: "Somatic symptom disorder: features, prevalence and course",
          pages: "352–355",
          blocks: [
            { type: "defs", title: "Associated features (p. 352)", items: [
              ["Cognitive", "Attention focused on symptoms, catastrophic attribution of normal sensations, illness worry, a self-concept of **bodily weakness**, intolerance of bodily complaints."],
              ["Emotional", "Health anxiety, negative affectivity, desperation and demoralization."],
              ["Behavioral", "Repeated **body checking**, repeated reassurance and help seeking, **avoidance of physical activity**."],
              ["In the clinic", "Hard to redirect; reassurance is short-lived or felt as not being taken seriously; referral to mental health may be met with **surprise or refusal**."]
            ] },
            { type: "table", caption: "Prevalence (p. 353)", head: ["Setting", "Estimate"], rows: [
              ["General adult population (Europe, North America)", "About **4%–6%**"],
              ["Questionnaire studies (adults and adolescents)", "6.7%–17.4%"],
              ["Primary care (12-month, SSD and related)", "**10%–20%**"],
              ["Psychosomatic or functional specialty clinics", "**40%–60%**"],
              ["Comparison", "Above DSM-IV somatization disorder (<1%), below undifferentiated somatoform disorder (≈19%)"],
              ["Sex", "Women report more symptoms; prevalence likely higher in women"]
            ] },
            { type: "list", title: "Development and course (p. 353)", items: [
              "Course likely **chronic and fluctuating**, shaped by number of symptoms, age, impairment and comorbidity; **less harm avoidance and more cooperativeness** predict faster remission.",
              "**Children**: recurrent abdominal pain, headache, fatigue, nausea; a **single** prominent symptom is more common than in adults. About one-fifth of Danish 5–7-year-olds with functional symptoms had impairing symptoms. Parents’ interpretations shape distress and testing.",
              "**Older adults**: pain in several regions is most common; may be **underdiagnosed** because pain, fatigue and illness worry are seen as normal for age; focus on **Criterion B**."
            ] },
            { type: "defs", title: "Risk and course modifiers (pp. 353–354)", items: [
              ["Temperamental", "**Negative affectivity (neuroticism)**; comorbid anxiety or depression."],
              ["Environmental", "Fewer years of education, low socioeconomic status, recent stressful or health-related events, **childhood sexual abuse** and other adversity."],
              ["Persistence", "Women, older age, low education and income, unemployment, abuse history, chronic illness, depression, anxiety, panic, social stress, and **reinforcing factors such as illness benefits**."],
              ["Cognitive", "Pain sensitization, heightened attention to bodily sensations, attributing symptoms to illness rather than normal sensations or stress."]
            ] },
            { type: "callout", kind: "culture", title: "Idioms of distress", text: "Heaviness, “gas,” heat in the body or burning in the head are common in some cultures and rare in others. Explanations vary: work stress (“burnout”), suppressed anger, or specific beliefs such as **semen loss**. **Shenjing shuairuo** in China links “weakness of nerves” and hot–cold imbalance with fatigue and low energy. Depression often presents somatically in many cultural contexts (pp. 354–355)." },
            { type: "p", text: "**Sex** (pp. 354–355): childhood adverse experiences especially raise symptom expression in women, and women are more likely to develop persistent symptoms. **Suicide** (p. 355): linked with suicidal thoughts and attempts, partly through depression, but **illness perceptions and symptom severity** are independent risks. **Function**: health status often more than **2 standard deviations** below population norms." }
          ]
        },
        {
          id: "s9-ssd-ddx",
          title: "Somatic symptom disorder: differential diagnosis",
          pages: "355–357",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 355–356)", head: ["Condition", "How it differs"], rows: [
              ["Other medical conditions", "Unclear symptoms alone are not enough; many with **IBS or fibromyalgia** do not meet Criterion B. Clues to SSD: analgesics don’t help, mental health history, no clear provoking or relieving factors, persistence without break, stress"],
              ["[[dx:pfamc|Psychological factors affecting other medical conditions]]", "Requires a medical condition worsened by psychological factors; thoughts need not be excessive"],
              ["[[dx:panic-disorder|Panic disorder]]", "Symptoms and health anxiety come in **acute episodes**"],
              ["[[dx:gad|GAD]]", "Worry about many things, health being only one"],
              ["[[dx:mdd|Depressive disorders]]", "Require depressed mood or anhedonia; may present with idiomatic somatic complaints (“heavy heart”)"],
              ["[[dx:iad|Illness anxiety disorder]]", "Health worry with **no or minimal** symptoms"],
              ["[[dx:fnd|Functional neurological symptom disorder]]", "Presents with **loss of function**; SSD centers on the **distress** symptoms cause. Both can be diagnosed"],
              ["Delusional disorder, somatic type", "Conviction of serious illness held with **delusional** intensity"],
              ["[[dx:bdd|BDD]]", "Concern about **appearance**, not illness"],
              ["[[dx:ocd|OCD]]", "Intrusive ideas with repetitive neutralizing behaviors"],
              ["[[dx:factitious|Factitious disorder and malingering]]", "Symptoms are **falsified**; in SSD suffering is authentic"]
            ] },
            { type: "p", text: "If criteria for both SSD and another mental disorder (such as panic disorder) are met, **diagnose both**. **Comorbidity** (p. 356): anxiety and depressive disorders, each in up to **50%**; also PTSD, OCD, and sexual dysfunction in men. With a medical illness, impairment exceeds what the illness explains, and somatization worsens outcomes, adherence and health care use." },
            { type: "callout", kind: "exam", text: "Three classic SSD points: **(1)** the diagnosis rests on **Criterion B** (excessive thoughts, feelings or behaviors), not on missing explanations; **(2)** it can be made **alongside** a real medical illness; **(3)** severity is set by the **number of B symptoms** plus how many or how severe the somatic complaints are." }
          ]
        }
      ]
    },
    {
      title: "Illness anxiety disorder",
      sections: [
        {
          id: "s9-iad-criteria",
          title: "Illness anxiety disorder: criteria and features",
          pages: "357–359",
          blocks: [
            { type: "criteria", title: "Illness anxiety disorder in brief", code: "F45.21", pages: "357", items: [
              ["A", "**Preoccupation with having or acquiring a serious illness**."],
              ["B", "Somatic symptoms are **absent or only mild**. With a medical condition or high risk (strong family history), the preoccupation is **clearly excessive**."],
              ["C", "**High anxiety** about health; easily alarmed about personal health."],
              ["D", "**Excessive health-related behaviors** (repeated body checking) or **maladaptive avoidance** (avoiding doctors and hospitals)."],
              ["E", "Present for **at least 6 months**; the feared illness may **change** over that time."],
              ["F", "Not better explained by **somatic symptom disorder, panic disorder, GAD, BDD, OCD** or **delusional disorder, somatic type**."]
            ], specifiers: [["Care-seeking type", "Medical care, visits, tests and procedures are **frequently** used"], ["Care-avoidant type", "Medical care is **rarely** used"]] },
            { type: "defs", title: "What it looks like (pp. 357–358)", items: [
              ["Former hypochondriasis", "About **one-third** of people formerly diagnosed with hypochondriasis now fit illness anxiety disorder; the rest fit somatic symptom disorder."],
              ["Sensations", "Any physical sign is usually a normal sensation (orthostatic dizziness), a benign self-limited problem (transient tinnitus) or a discomfort not indicative of disease (belching). Distress comes from its **meaning**, not the sensation."],
              ["Reassurance fails", "Negative tests, reassurance and benign course **do not** relieve the concern and may heighten it; easily alarmed by news stories or others’ illness."],
              ["Behaviors", "Repeated self-examination (looking at the throat in a mirror), **internet research**, seeking reassurance; or avoiding sick relatives and exercise."],
              ["Identity", "Illness becomes central to self-image and social conversation; it can lead to invalidism and family strain."],
              ["Care", "Mostly seen in medical settings; extensive but unsatisfying care, iatrogenic complications; a minority avoid care entirely. Dismissive doctors can **miss real illness**."]
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 358–359)", head: ["Topic", "Detail"], rows: [
              ["Community (1–2 year)", "Health anxiety or disease conviction **1.3%–10%**"],
              ["Ambulatory medical (6–12 month)", "2.2%–8%; weighted mean about **3%**"],
              ["Specialty clinics", "About **one-fifth** report illness anxiety"],
              ["Sex", "**Similar** in men and women"],
              ["Course", "Chronic, episodic, relapsing; onset in **early and middle adulthood**; rare in children"],
              ["Older adults", "Worry often about **memory loss** and sensory loss"],
              ["Transient form", "One-third to one-half; less psychiatric and more medical comorbidity, milder"]
            ] },
            { type: "p", text: "**Risk** (pp. 358–359): major life stress or a serious but benign health scare; childhood abuse, serious childhood illness, a parent’s serious illness or death. **Culture**: be cautious when disease ideas match widely held cultural beliefs. **Function**: substantial role impairment, strained relationships and work." },
            { type: "case", title: "Clinical vignette: the lump that isn’t", text: "A 34-year-old teacher has spent 2 years convinced she has cancer: first leukemia after a bruise, now lymphoma after feeling a normal lymph node. She has no significant symptoms. She checks her neck dozens of times a day, reads cancer forums nightly and has had three ultrasounds and two blood panels this year, each briefly reassuring. She knows the tests are normal but says “they could have missed it.”", point: "Preoccupation with a serious illness, **no or mild symptoms**, high health anxiety, excessive checking and testing, more than 6 months, with the feared disease changing over time: **F45.21 illness anxiety disorder, care-seeking type**. She acknowledges the disease may be absent, so it is not delusional." }
          ]
        },
        {
          id: "s9-iad-ddx",
          title: "Illness anxiety disorder: differential diagnosis",
          pages: "359–360",
          blocks: [
            { type: "table", caption: "Differential diagnosis (pp. 359–360)", head: ["Condition", "How it differs"], rows: [
              ["Medical conditions", "The **first** consideration: neurological, endocrine, occult malignancy, multisystem disease. A medical condition does not exclude IAD if the anxiety is clearly disproportionate; transient preoccupation is not IAD"],
              ["Adjustment disorder", "Health anxiety in serious illness is normal and time-limited; if impairing, adjustment disorder. Disproportionate anxiety **beyond 6 months** may be IAD"],
              ["[[dx:ssd|Somatic symptom disorder]]", "Requires **distressing** somatic symptoms; in IAD symptoms are absent or mild"],
              ["[[dx:gad|GAD]]", "Many worries, health only one"],
              ["[[dx:panic-disorder|Panic disorder]]", "Health anxiety is **acute and episodic**; IAD is persistent (and may bring panic attacks triggered by illness worries)"],
              ["[[dx:ocd|OCD]]", "OCD thoughts are intrusive and usually about **getting** a disease in the future, with other obsessions; IAD is about **having** a disease now"],
              ["[[dx:bdd|BDD]]", "Concern limited to appearance"],
              ["[[dx:mdd|Major depressive disorder]]", "Health worry only during depressive episodes; if it persists after remission, consider IAD"],
              ["Psychotic disorders", "IAD ideas are **plausible**, not delusional; the person can acknowledge the disease may be absent. Somatic delusions are more bizarre (an organ rotting)"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 360): anxiety disorders (especially **GAD** and **panic disorder**), OCD and depression; about **two-thirds** have at least one other major mental disorder; personality disorders may be more common." },
            { type: "compare", title: "Somatic symptom disorder or illness anxiety disorder?", items: [
              { title: "Somatic symptom disorder", color: "drug", points: ["**Distressing somatic symptoms** are the focus.", "Excessive thoughts, feelings or behaviors about them.", "Typically >6 months (persistent state).", "Specifiers: predominant pain, persistent, severity."] },
              { title: "Illness anxiety disorder", color: "case", points: ["**No or mild** symptoms.", "Fear of **having or getting** a serious disease.", "At least 6 months; the feared disease may change.", "Specifiers: care-seeking or care-avoidant."] }
            ] }
          ]
        }
      ]
    },
    {
      title: "Functional neurological symptom disorder",
      sections: [
        {
          id: "s9-fnd-criteria",
          title: "Functional neurological symptom disorder: criteria and coding",
          pages: "360–361",
          blocks: [
            { type: "criteria", title: "Functional neurological symptom disorder (conversion disorder) in brief", code: "F44.4–F44.7", pages: "360", items: [
              ["A", "One or more symptoms of altered **voluntary motor or sensory** function."],
              ["B", "Clinical findings show **incompatibility** between the symptom and recognized neurological or medical conditions."],
              ["C", "Not better explained by another medical or mental disorder."],
              ["D", "Clinically significant distress or impairment, **or warrants medical evaluation**."]
            ], specifiers: [["Duration", "**Acute episode**: <6 months · **Persistent**: ≥6 months"], ["Stressor", "**With** psychological stressor (specify) or **without** psychological stressor"]] },
            { type: "table", caption: "Coding by symptom type (p. 360)", head: ["Code", "Symptom type"], rows: [
              ["**F44.4**", "With weakness or paralysis"],
              ["**F44.4**", "With abnormal movement (tremor, dystonia, myoclonus, gait disorder)"],
              ["**F44.4**", "With swallowing symptoms"],
              ["**F44.4**", "With speech symptom (dysphonia, slurred speech)"],
              ["**F44.5**", "With attacks or seizures"],
              ["**F44.6**", "With anesthesia or sensory loss"],
              ["**F44.6**", "With special sensory symptom (visual, olfactory, hearing)"],
              ["**F44.7**", "With mixed symptoms"]
            ] },
            { type: "callout", kind: "mnemonic", title: "4–5–6–7", text: "**F44.4** = motor (weakness, movement, swallowing, speech). **F44.5** = seizures. **F44.6** = sensory (anesthesia, special senses). **F44.7** = mixed. Think “4 moves, 5 shakes, 6 feels, 7 does it all.”" },
            { type: "defs", title: "Key principles (pp. 361–362)", items: [
              ["Rule-in diagnosis", "Based on **positive clinical findings** of incompatibility, made by a clinician with neurological expertise; **not** a diagnosis of exclusion, and not made because tests are normal or a symptom looks “bizarre.”"],
              ["Coexists with disease", "Can be diagnosed in people who **also** have epilepsy, multiple sclerosis or other neurological disease."],
              ["No stressor required", "DSM-5 dropped the requirement for a preceding psychological stressor: one is **absent in up to 50%**."],
              ["The old name", "“Conversion” comes from psychoanalytic theory (unconscious conflict converted into physical symptoms)."]
            ] }
          ]
        },
        {
          id: "s9-fnd-signs",
          title: "Functional neurological symptom disorder: positive signs",
          pages: "361–362",
          blocks: [
            { type: "table", caption: "Examination findings incompatible with neurological disease (pp. 361–362)", head: ["Symptom", "Positive finding"], rows: [
              ["Limb weakness", "**Hoover’s sign**: weak hip extension returns to normal with contralateral hip flexion against resistance. **Hip abductor sign**: weak abduction returns to normal with contralateral abduction. Discrepancy between bed testing (weak plantar flexion) and tasks (walking on tiptoes)"],
              ["Tremor", "**Entrainment test**: the tremor changes, adopts the rhythm, or stops when copying a rhythm with the other limb (or the person cannot copy it). Variable frequency or direction"],
              ["Dystonia", "Fixed **inverted ankle**, **clenched fist**, unilateral platysma contraction, often with sudden onset"],
              ["Seizures or syncope", "**Persistent eye closure** (sometimes resisting opening), **bilateral movements with preserved awareness**, duration **>5 minutes**; supported by a normal ictal EEG (which alone does not exclude all epilepsy or syncope)"],
              ["Speech", "Internal inconsistencies in articulation and phonation"],
              ["Vision", "**Tubular (tunnel) visual field**; inconsistent acuity, e.g., the **fogging test**"]
            ] },
            { type: "callout", kind: "caution", title: "Base it on the whole picture", text: "The diagnosis should rest on the **overall clinical picture**, not a single sign. **La belle indifférence** (lack of concern) and **secondary gain** are **not specific** and should not be used to make the diagnosis (pp. 362)." },
            { type: "case", title: "Clinical vignette: the weak leg", text: "A 32-year-old warehouse worker has had a weak right leg for 3 months after a minor fall. Lying down, he cannot push his right heel into the bed, but when asked to lift his left leg against resistance, the examiner feels strong right hip extension. He can stand on his right tiptoes when distracted. MRI of brain and spine is normal. He is distressed and has been unable to work.", point: "Weakness with a **positive Hoover’s sign** and task inconsistency, causing impairment, not explained by another disorder: **F44.4 functional neurological symptom disorder, with weakness or paralysis, acute episode** (under 6 months). The normal MRI supports but does not make the diagnosis; the positive signs do." }
          ]
        },
        {
          id: "s9-fnd-features",
          title: "Functional neurological symptom disorder: features, course and differential",
          pages: "362–364",
          blocks: [
            { type: "list", title: "Associated features (p. 362)", items: [
              "Other functional symptoms, especially **pain and fatigue**.",
              "Onset may follow **psychological or physical** stress or trauma, but this is absent in up to half.",
              "**Dissociative** symptoms (depersonalization, derealization, amnesia), especially at onset or during attacks."
            ] },
            { type: "table", caption: "Epidemiology and course (pp. 362–363)", head: ["Topic", "Detail"], rows: [
              ["Incidence of persistent symptoms", "**4–12 per 100,000** a year (US, northern Europe); transient symptoms are common"],
              ["Neurology clinics", "About **5%–15%** of patients (Scotland, Australia)"],
              ["Onset", "Nonepileptic attacks peak at **20–29**; motor symptoms at **30–39**"],
              ["Sex", "**2–3 times** more common in women"],
              ["Prognosis", "Better in younger children. **Good**: short duration, agreeing with the diagnosis. **Poor**: maladaptive personality traits, comorbid physical disease, disability benefits"],
              ["Neurological disease", "A risk factor: about **1 in 5** people with functional seizures also have **epilepsy**"]
            ] },
            { type: "p", text: "**Risk**: emotional instability and other maladaptive traits; childhood abuse and neglect; stressful events including physical injury. **Culture**: unresponsiveness and motor symptoms are commonest everywhere; similar changes in sanctioned rituals are not a disorder if fully explained by context. **Suicide**: higher rates of suicidal thoughts and attempts than in recognized neurological disease, linked to risky alcohol use, childhood maltreatment and dissociation. **Disability** can equal that of comparable neurological diseases (p. 363)." },
            { type: "table", caption: "Differential diagnosis (pp. 363–364)", head: ["Condition", "How it differs"], rows: [
              ["Recognized neurological disease", "The main differential; an unexpected neurological cause is **rarely found** at follow-up, but reassess if symptoms progress. FND can coexist with disease or be a **prodrome**"],
              ["[[dx:ssd|Somatic symptom disorder]]", "Symptoms usually cannot be shown to be incompatible with disease; both can be diagnosed"],
              ["[[dx:factitious|Factitious disorder and malingering]]", "Definite evidence of **feigning** (reported vs observed function); FND symptoms are genuinely experienced"],
              ["[[dx:did|Dissociative disorders]]", "Dissociation is common in FND; diagnose **both** if both are present"],
              ["[[dx:bdd|BDD]]", "Appearance concerns without sensory or motor complaints"],
              ["[[dx:mdd|Depressive disorders]]", "General heaviness of limbs, not focal weakness; core depressive symptoms"],
              ["[[dx:panic-disorder|Panic disorder]]", "Tremor or tingling with cardiorespiratory symptoms and **retained awareness**; functional seizures can bring **loss of awareness and amnesia**"]
            ] },
            { type: "p", text: "**Comorbidity** (p. 364): anxiety (especially panic disorder) and depressive disorders, somatic symptom disorder, personality disorders, and neurological or other medical conditions." }
          ]
        }
      ]
    },
    {
      title: "Psychological factors and factitious disorder",
      sections: [
        {
          id: "s9-pfamc",
          title: "Psychological factors affecting other medical conditions",
          pages: "364–367",
          blocks: [
            { type: "criteria", title: "Psychological factors affecting other medical conditions in brief", code: "F54", pages: "364–365", items: [
              ["A", "A **medical symptom or condition** (other than a mental disorder) is present."],
              ["B", "Psychological or behavioral factors **adversely affect** it in one of these ways:", [
                "Influencing its **course** (close temporal link with development, worsening or delayed recovery).",
                "Interfering with **treatment** (e.g., poor adherence).",
                "Adding **well-established health risks**.",
                "Influencing **pathophysiology**, precipitating or worsening symptoms or requiring medical attention."
              ]],
              ["C", "Not better explained by another mental disorder (panic disorder, MDD, PTSD)."]
            ], specifiers: [["Severity", "**Mild**: increases medical risk (inconsistent antihypertensive adherence) · **Moderate**: aggravates the condition (anxiety worsening asthma) · **Severe**: hospitalization or emergency visit · **Extreme**: life-threatening (ignoring heart attack symptoms)"]] },
            { type: "defs", title: "Reading the criteria (pp. 365–366)", items: [
              ["Factors", "Distress, interpersonal patterns, coping styles, maladaptive health behaviors (denial, nonadherence), depression or anxiety symptoms, stressful events, personality traits."],
              ["Classic examples", "Anxiety worsening **asthma**; **denial** of acute chest pain; a person with diabetes **manipulating insulin** to lose weight; **Takotsubo** cardiomyopathy after acute stress; chronic work stress raising blood pressure."],
              ["Affected conditions", "Clear pathophysiology (diabetes, cancer, coronary disease), functional syndromes (migraine, IBS, fibromyalgia) or idiopathic symptoms (pain, fatigue, dizziness)."],
              ["Threshold", "Reserve for when the effect is **evident** and **clinically significant**; direct causality need not be proved."],
              ["Culture", "Consulting faith or traditional healers in culturally sanctioned ways is **not** pathologized, even if it delays medical care."]
            ] },
            { type: "table", caption: "Which way does the arrow point? (pp. 366–367)", head: ["Diagnosis", "Relationship"], rows: [
              ["**Psychological factors affecting other medical conditions**", "Psychological factors → **worsen** the medical condition (angina triggered whenever he is enraged)"],
              ["Mental disorder due to another medical condition", "Medical condition → **causes** the mental disorder physiologically"],
              ["Adjustment disorder", "Medical condition → **psychological reaction** to it as a stressor (anticipatory anxiety about angina)"],
              ["[[dx:ssd|Somatic symptom disorder]]", "Emphasis on **excessive** thoughts and behaviors (constantly checking blood pressure, restricting activity)"],
              ["[[dx:iad|Illness anxiety disorder]]", "Worry about **having** a disease, usually without serious disease"],
              ["A major mental disorder that harms health (e.g., alcohol use disorder)", "Diagnose the mental disorder and the medical condition; F54 is for traits or behaviors **below** a mental disorder threshold"]
            ] },
            { type: "p", text: "**Prevalence** is unclear; in US private insurance data, it was more common than DSM-IV somatoform diagnoses. It occurs across the lifespan (e.g., caregiver stress in older adults). By definition it requires a **comorbid medical condition**." }
          ]
        },
        {
          id: "s9-factitious",
          title: "Factitious disorder",
          pages: "367–370",
          blocks: [
            { type: "criteria", title: "Factitious disorder imposed on self", code: "F68.10", pages: "367", items: [
              ["A", "**Falsification** of physical or psychological signs or symptoms, or **induction** of injury or disease, associated with **identified deception**."],
              ["B", "Presents **himself or herself** as ill, impaired or injured."],
              ["C", "The deception is evident **even without obvious external rewards**."],
              ["D", "Not better explained by another disorder (delusional or other psychotic disorder)."]
            ], specifiers: [["Course", "**Single episode** or **recurrent episodes** (two or more events of falsification or induction)"]] },
            { type: "criteria", title: "Factitious disorder imposed on another (previously by proxy)", code: "F68.A", pages: "367", items: [
              ["A", "Falsification or induction of illness or injury **in another**, with identified deception."],
              ["B", "Presents **another person (victim)** as ill, impaired or injured."],
              ["C", "Deception evident even without obvious external rewards."],
              ["D", "Not better explained by another disorder."]
            ], specifiers: [["Course", "Single episode or recurrent episodes"]], note: "The **perpetrator**, not the victim, receives the diagnosis. The victim may receive an **abuse** code (e.g., T74.12X). If the perpetrator also falsifies their own illness, **both** factitious diagnoses can be given." },
            { type: "defs", title: "Reading the criteria (pp. 368–369)", items: [
              ["Objective evidence", "The diagnosis rests on **demonstrating falsification**, not on inferring motives."],
              ["Methods", "**Exaggeration, fabrication, simulation, induction**: false reports of bereavement and suicidality, feigned seizures, blood added to urine, falsified records, ingesting **insulin or warfarin**, injecting **feces** to cause abscesses or sepsis."],
              ["Real illness too", "A true medical condition may coexist (someone with diabetes manipulating glucose)."],
              ["Online", "Some deceive communities in person or online without involving health care."],
              ["Crime and illness", "Imposed on another is **abuse**; criminal behavior and mental illness are not mutually exclusive."]
            ] },
            { type: "table", caption: "Epidemiology and course (p. 369)", head: ["Topic", "Detail"], rows: [
              ["Prevalence", "Unknown; almost **1%** of US general hospital inpatients referred for psychiatric consultation"],
              ["Setting", "More often in **tertiary** care"],
              ["Course", "Usually **intermittent episodes**; can become lifelong"],
              ["Onset", "**Early adulthood**, often after a hospitalization (one’s own, or one’s child’s for imposed on another)"],
              ["Sex", "About **two-thirds women**"]
            ] },
            { type: "table", caption: "Differential diagnosis (pp. 369–370)", head: ["Condition", "How it differs"], rows: [
              ["**Malingering**", "Deception for **external rewards** (money, time off work, avoiding legal duties). Factitious disorder is not fully explained by external rewards; the two can coexist and motives can shift"],
              ["Lying to avoid legal liability", "A caregiver who lies about a child’s injuries **only to protect themselves** has an external reward; lying beyond what self-protection needs suggests factitious disorder imposed on another"],
              ["[[dx:ssd|Somatic symptom disorder]] and illness anxiety (care-seeking)", "Excessive care seeking **without deception**"],
              ["[[dx:fnd|Functional neurological symptom disorder]]", "Genuine symptoms; factitious neurological symptoms show evidence of **deceptive falsification**"],
              ["Borderline personality disorder", "Self-harm without suicidal intent can occur, but factitious disorder requires **deception**"]
            ] },
            { type: "callout", kind: "exam", title: "Factitious vs malingering vs somatic", text: "Ask two questions. **Is there deception?** No → somatic symptom, illness anxiety or functional neurological disorder. Yes → **why**? An **obvious external reward** (money, drugs, avoiding prison or work) → **malingering** (a V-code, Z76.5, not a mental disorder). **No obvious external reward** → **factitious disorder**." }
          ]
        }
      ]
    },
    {
      title: "Residual categories and putting it together",
      sections: [
        {
          id: "s9-other",
          title: "Other specified and unspecified somatic symptom and related disorder",
          pages: "370",
          blocks: [
            { type: "table", caption: "Other specified (F45.8): the four named examples (p. 370)", head: ["Example", "What it is"], rows: [
              ["**Brief somatic symptom disorder**", "Somatic symptom disorder lasting **less than 6 months**"],
              ["**Brief illness anxiety disorder**", "Illness anxiety disorder lasting **less than 6 months**"],
              ["**Illness anxiety disorder without excessive health-related behaviors**", "Criterion D not met: no checking and no maladaptive avoidance"],
              ["**Pseudocyesis**", "A **false belief of being pregnant** with objective signs and reported symptoms of pregnancy"]
            ] },
            { type: "p", text: "**Unspecified (F45.9)** should **not** be used except in **decidedly unusual situations** with insufficient information for a more specific diagnosis (p. 370). This wording is stricter than in most other chapters." }
          ]
        },
        {
          id: "s9-approach",
          title: "A practical approach and the classic traps",
          pages: "349–370",
          blocks: [
            { type: "steps", title: "Six steps for a patient with bodily complaints", items: [
              ["1. Medical assessment", "Take the symptoms seriously and assess them; a medical illness does not rule out these disorders, and they do not rule out illness."],
              ["2. Deception?", "Evidence of falsification → factitious disorder (no external reward) or malingering (external reward)."],
              ["3. Incompatible neurological signs?", "Positive signs (Hoover’s, entrainment, functional seizure features) → functional neurological symptom disorder (code by type)."],
              ["4. Symptoms or worry?", "Distressing symptoms + excessive response → somatic symptom disorder. No or mild symptoms + fear of disease → illness anxiety disorder."],
              ["5. Mind worsening body?", "Psychological factors worsening a medical condition, below a mental disorder threshold → F54, with severity."],
              ["6. Other disorders and safety", "Depression, panic, GAD, OCD, BDD, psychosis; ask about suicidal thoughts; consider duration (<6 months → other specified)."]
            ] },
            { type: "callout", kind: "key", title: "Twelve traps", text: "1) “Medically unexplained” is **not** a criterion for SSD. 2) SSD can coexist with **real disease**. 3) SSD severity = number of **B symptoms** (+ complaints). 4) IAD = **no or mild** symptoms; SSD = distressing symptoms. 5) IAD needs **6 months**, and the feared disease may change. 6) Former hypochondriasis is mostly **SSD** now. 7) FND is **rule-in** by positive signs, not exclusion. 8) FND needs **no stressor**. 9) **La belle indifférence** and **secondary gain** are nonspecific. 10) FND codes: **F44.4** motor, **F44.5** seizures, **F44.6** sensory, **F44.7** mixed. 11) Factitious imposed on another: the **perpetrator** is diagnosed (F68.A). 12) External reward = **malingering**, not factitious disorder." },
            { type: "p", text: "Practice with the [[helper:somatic|somatic symptom helper]] and the [[helper:deception|feigned or genuine helper]], then compare [[dx:ssd|somatic symptom disorder]] with [[dx:iad|illness anxiety disorder]] side by side in the library." }
          ]
        }
      ]
    }
  ]
});
