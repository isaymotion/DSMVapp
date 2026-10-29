/*
 * Diagnostic helper for Chapter 24 (Culture and Psychiatric Diagnosis), DSM-5-TR pp. 859–879.
 * "cultural": from a presentation that carries a cultural concept of distress to (1) whether the CFI should be used,
 * (2) which kind of concept it is, (3) the Section II conditions the manual lists for it, and (4) the recording
 * route on p. 873: the disorder that is met, an other specified category, a Chapter 22 code, or no diagnosis, with
 * the cultural term named in the formulation. No concept in the chapter is a diagnosis; the routes are app guidance
 * built on p. 873 and the app's Chapter 22 material.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "cultural",
    chapter: "ch24",
    title: "A cultural concept of distress: what to assess, and what goes in the chart",
    summary: "Start from a patient or family who describe the problem with a cultural idiom, explanation or syndrome. Decide whether the Cultural Formulation Interview should be used, sort the concept into the manual’s three types, go to the Section II conditions the manual lists for that concept, then record the disorder that is met (or an other specified category, a Chapter 22 code, or nothing) with the concept in the formulation.",
    caution: "A teaching aid built from DSM-5-TR pp. 859–879. None of the ten examples is a diagnosis and none has an ICD-10-CM code; the chart gets a Section II diagnosis or a Chapter 22 code, and the cultural term goes in the case formulation (p. 873). A belief shared by the person’s community is not a delusion (Chapter 2; see the maladi dyab misdiagnosis warning, p. 877). Philippine concepts are outside the manual and labeled. The Section II criteria named in the results are from their own chapters.",
    start: "cfi",
    nodes: {
      cfi: {
        q: "Is this one of the situations in which the CFI is especially helpful?",
        help: "The manual lists seven: a large cultural, religious or socioeconomic gap between clinician and patient; uncertainty whether culturally distinctive symptoms fit the criteria; difficulty judging severity or impairment; divergent views of symptoms or of care from other healing systems; disagreement on the plan; possible mistrust of mainstream services from a collective history of trauma and oppression; and poor engagement or adherence (p. 863). The CFI can be used with anyone, in whole or in parts (p. 863).",
        options: [
          { label: "Yes, at least one applies", to: "who", note: "Use the CFI; its 16 questions take the person’s own view of the problem, its causes, supports, stressors, identity, coping, past help and preferences (pp. 863–867)." },
          { label: "No, but the person uses a cultural idiom, explanation or syndrome", to: "type", note: "Bring in the parts of the CFI you need (p. 863) and go on." },
          { label: "Not sure", to: "who", note: "The CFI is brief and semistructured and has no right or wrong answers (p. 862); when in doubt, use it." }
        ]
      },
      who: {
        q: "Can the person answer for themselves?",
        help: "The Informant version collects collateral from someone who knows the person’s problems and circumstances; it supplements the core CFI, or replaces it when the person cannot provide the information: children or adolescents, florid psychosis, cognitive impairment (p. 868).",
        options: [
          { label: "Yes", to: "type", note: "Core CFI, 16 questions in four domains (p. 863)." },
          { label: "Partly: a child or adolescent, or someone acutely psychotic or cognitively impaired", to: "type", note: "Informant version (17 questions) with the family member or caregiver, alongside or instead of the core CFI (p. 868)." },
          { label: "There is no one to ask and the person cannot answer", to: "r:defer", note: "Gather what you can; return to the CFI when the person can take part (app guidance)." }
        ]
      },
      type: {
        q: "What kind of cultural concept is it?",
        help: "Three types (p. 871): an idiom of distress (a shared way of talking about suffering; need not involve specific symptoms), a cultural explanation or perceived cause (an attribution or explanatory model), or a cultural syndrome (a locally recognized cluster of symptoms and attributions). The same term can be more than one type (p. 872).",
        options: [
          { label: "An idiom: a word or phrase for distress (“nerves,” “thinking too much,” “stress”)", to: "idiom", note: "Idioms span everything from no disorder to severe psychopathology (p. 872)." },
          { label: "An explanation: what the person or family believe caused it (fright, semen loss, a sent sickness, sorcery)", to: "explain", note: "Attributions, not symptom clusters (p. 871)." },
          { label: "A syndrome: a recognizable local pattern of symptoms (an ataque, a wind attack, taijin kyofusho, hikikomori, shenjing shuairuo)", to: "syndrome", note: "Clusters that co-occur and are recognized locally (p. 871)." },
          { label: "The problem is mainly a mismatch between the patient and the service (language, mistrust, disagreement about care)", to: "r:relationship", note: "The Outline’s fourth category and CFI question 16 (pp. 861–862, 867)." }
        ]
      },
      idiom: {
        q: "Which idiom, or which pattern?",
        help: "The manual’s idioms: nervios (“nerves,” Latinx; also an explanation), kufungisisa (“thinking too much,” Shona; also an explanation), and ataque de nervios used loosely for any fit-like outburst (pp. 874, 876–877). Everyday U.S. idioms such as “burnout” or “feeling depressed” often meet no criteria (p. 859). Philippine idioms (nerbyos, masyadong nag-iisip, sumpong, tampo) are outside the manual (app guidance).",
        options: [
          { label: "“Nerves” or nerbyos: chronic vulnerability, headaches, poor sleep, trembling, tearfulness, dizziness", to: "r:nervios", note: "Nervios (p. 877)." },
          { label: "“Thinking too much”: rumination on worries, money, illness, loss", to: "r:kufungisisa", note: "Kufungisisa and its cousins worldwide (p. 876)." },
          { label: "An everyday idiom (“stress,” “burnout,” “nervous breakdown,” “depressed”) with no clear syndrome", to: "threshold", note: "May not indicate a disorder (p. 859); assess on Section II criteria." }
        ]
      },
      explain: {
        q: "Which explanation?",
        help: "The manual’s explanations: dhat (semen loss, South Asia), susto (fright and soul loss, Latinx outside the Caribbean), maladi dyab (sent sickness, Haiti); nervios and kufungisisa also serve as explanations (pp. 874–879). Kulam, barang, usog and sapi are Philippine explanations outside the manual (app guidance).",
        options: [
          { label: "Semen loss (dhat), or a white discharge, blamed for fatigue, weakness, anxiety, sexual problems", to: "r:dhat", note: "Dhat (pp. 874–875)." },
          { label: "A fright after which the person has been unwell (susto, espanto, soul loss)", to: "susto", note: "Susto (p. 879)." },
          { label: "Illness sent by another person out of envy or malice (maladi dyab, evil eye; kulam or barang in the Philippines)", to: "sent", note: "Maladi dyab (pp. 876–877)." },
          { label: "Possession by a spirit (sapi and similar; outside the manual)", to: "r:possession", note: "Dissociative and psychotic disorders to assess (app guidance; the manual notes possession in DID criteria, p. 873)." },
          { label: "Any other culturally shared cause", to: "threshold", note: "Assess on Section II criteria; name the explanation in the formulation (p. 873)." }
        ]
      },
      syndrome: {
        q: "Which syndrome?",
        help: "The manual’s syndromes: ataque de nervios (p. 874), hikikomori (p. 875), khyâl cap (pp. 875–876), shenjing shuairuo (pp. 877–878), taijin kyofusho (p. 879).",
        options: [
          { label: "An acute paroxysm after a family stressor: shouting, crying, trembling, heat rising, aggression, sometimes dissociation or fainting", to: "ataque", note: "Ataque de nervios (p. 874)." },
          { label: "Panic-like attacks with dizziness, palpitations, tinnitus, neck soreness and fear of wind rising in the body", to: "r:khyal", note: "Khyâl cap (pp. 875–876)." },
          { label: "A young person who has stayed in their room for months with no in-person contact", to: "hiki", note: "Hikikomori (p. 875)." },
          { label: "Weak nerves: mental fatigue, vexation, headache, insomnia after loss of face or failure", to: "r:shenjing", note: "Shenjing shuairuo (pp. 877–878)." },
          { label: "Fear that one’s gaze, blushing, odor, expression or body offends others", to: "taijin", note: "Taijin kyofusho (p. 879)." }
        ]
      },
      ataque: {
        q: "What does the ataque picture most resemble?",
        help: "No one-to-one match exists; the manual lists panic attack and panic disorder, the other specified and unspecified dissociative disorders, functional neurological symptom disorder, intermittent explosive disorder, and other specified or unspecified anxiety and trauma- and stressor-related disorders (p. 874). Some ataques are normative, for example at a funeral (p. 874).",
        options: [
          { label: "Recurrent unexpected attacks with a month of worry or avoidance (Chapter 5)", to: "r:ataque-panic", note: "Panic disorder." },
          { label: "Prominent depersonalization, derealization or amnesia, or seizure-like episodes", to: "r:ataque-dissoc", note: "Dissociative or functional neurological presentations." },
          { label: "Mainly explosive anger and aggression out of proportion to the trigger, recurrently", to: "r:ataque-ied", note: "Intermittent explosive disorder to assess." },
          { label: "A single episode of acute distress at a funeral or after bad news, with no sequelae", to: "r:normative", note: "Normative expression (p. 874)." },
          { label: "Clinically significant attacks that fit none of these fully", to: "r:ataque-os", note: "Other specified anxiety, dissociative, or trauma- and stressor-related disorder (p. 874)." }
        ]
      },
      hiki: {
        q: "Does an established DSM-5-TR disorder explain the withdrawal?",
        help: "Hikikomori may be secondary (within an established disorder) or primary (independent). The manual lists social anxiety disorder, major depressive disorder, GAD, PTSD, autism spectrum disorder, schizoid and avoidant personality disorders, schizophrenia or another psychotic disorder, and notes associations with Internet gaming disorder and school refusal (p. 875). The 6-month figure is a Japanese ministry guideline, not a DSM criterion (p. 875).",
        options: [
          { label: "Yes: a mood, anxiety, psychotic, neurodevelopmental or personality disorder is met", to: "r:hiki-secondary", note: "Secondary hikikomori." },
          { label: "No disorder is met; withdrawal of 6 months or more with distress or impairment", to: "r:hiki-primary", note: "Primary hikikomori." },
          { label: "Withdrawal under 6 months, or without distress or impairment", to: "r:hiki-watch", note: "Below the guideline; keep assessing (app guidance)." }
        ]
      },
      taijin: {
        q: "What is the quality of the concern?",
        help: "Taijin kyofusho is broader than social anxiety disorder; it also covers presentations that look like body dysmorphic disorder, like olfactory reference syndrome, or like delusional disorder. Delusional disorder is considered when the concern is held with delusional conviction and resists reassurance or counterexample (p. 879).",
        options: [
          { label: "Fear of being judged or of offending others in social situations, with insight", to: "r:taijin-sad", note: "Social anxiety disorder (sensitive type and most offensive-type presentations)." },
          { label: "Preoccupation with a perceived defect in appearance (shubo-kyofu)", to: "r:taijin-bdd", note: "Body dysmorphic disorder." },
          { label: "Conviction of emitting an offensive odor (jiko-shu-kyofu), with some doubt possible", to: "r:taijin-ors", note: "Olfactory reference syndrome, an other specified OCRD." },
          { label: "The belief is fixed and does not yield to reassurance or counterexample", to: "r:taijin-delusional", note: "Delusional disorder (p. 879)." }
        ]
      },
      susto: {
        q: "Which of the three susto types fits?",
        help: "An interpersonal susto (loss, abandonment, feeling unloved; sadness, poor self-image, suicidal thoughts) is close to major depressive disorder; susto after a traumatic event that shapes the symptoms fits PTSD; recurrent somatic susto, with help sought from several practitioners, resembles somatic symptom disorder (p. 879).",
        options: [
          { label: "Loss, abandonment, sadness, low self-worth", to: "r:susto-mdd", note: "Interpersonal type." },
          { label: "A traumatic fright with re-experiencing, avoidance, arousal", to: "r:susto-ptsd", note: "Trauma type." },
          { label: "Recurrent bodily symptoms and repeated consultations", to: "r:susto-ssd", note: "Somatic type." },
          { label: "Distress after a fright that meets no criteria", to: "r:susto-os", note: "Other specified trauma- and stressor-related disorder if clinically significant (p. 879)." }
        ]
      },
      sent: {
        q: "Is the belief that someone sent the illness shared by the person’s family or community?",
        help: "Maladi dyab is a cultural explanation; the manual warns that the supernatural attribution may lead to misdiagnosis of delusional disorder, persecutory type, or schizophrenia (p. 877), and that socially warranted suspicion can be mistaken for paranoia (p. 872). A delusion is not a belief ordinarily accepted by the person’s culture or subculture (Chapter 2).",
        options: [
          { label: "Yes: the family share it, the belief is confined to the illness, and thinking is otherwise organized", to: "r:sent-shared", note: "A cultural explanation, not a delusion." },
          { label: "The belief has grown beyond what the community holds, with hallucinations, disorganization or a persecutory system", to: "r:sent-psychosis", note: "Assess for a psychotic disorder on its own merits." },
          { label: "Unsure", to: "r:sent-cfi", note: "Use the CFI, questions 4–5 (p. 864), and the Informant version." }
        ]
      },
      threshold: {
        q: "On Section II criteria, where does the presentation fall?",
        help: "Determine whether criteria for a specified disorder are met or the picture is best classified as other specified; include the cultural terms in the formulation; people who meet no criteria may still need treatment, case by case (p. 873). Some concerns match a Chapter 22 condition: acculturation, parent-child relational, religious or spiritual problems (p. 873).",
        options: [
          { label: "A specified disorder is met", to: "r:disorder", note: "Diagnose it; the concept goes in the formulation." },
          { label: "Clinically significant but below threshold", to: "r:other-specified", note: "Other specified category." },
          { label: "No disorder; the problem is a life circumstance", to: "r:z-code", note: "A Chapter 22 code may fit." },
          { label: "No disorder and normative distress", to: "r:normative", note: "No diagnosis; support as needed." }
        ]
      }
    },
    results: {
      defer: { label: "Cannot assess yet", dx: "Assessment deferred", line: "The core CFI needs the person’s own views and the Informant version needs someone who knows them (pp. 862, 868); record what is observed and return to the cultural assessment when either is possible (app guidance).", points: ["Section II diagnosis proceeds on the clinical findings available.", "Ask the social worker or barangay health worker to identify an informant (app guidance)."], link: { ch: "ch24", sec: "s24-cfi-informant", label: "The Informant version" }, dxId: "cultural-formulation" },
      relationship: { label: "Patient–service mismatch", dx: "Cultural features of the clinician–patient relationship", line: "Differences in background, language, education and social status, and experiences of racism or discrimination, can block trust and distort assessment (pp. 861–862). CFI question 16 asks the person directly about this and what the clinic can do (p. 867).", points: ["Arrange an interpreter when language patterns suggest the need (p. 861).", "No code; if a specific problem is the focus, Chapter 22 has codes for social exclusion and discrimination (app guidance)."], link: { ch: "ch24", sec: "s24-outline", label: "The Outline’s fourth category" }, dxId: "cultural-formulation" },
      nervios: { dx: "Nervios: assess the listed disorders", line: "An idiom and explanation that spans no disorder to psychotic-looking presentations (p. 877). The manual lists major depressive disorder, persistent depressive disorder, GAD, social anxiety disorder, the other specified and unspecified dissociative disorders, somatic symptom disorder and schizophrenia (p. 877).", points: ["“Nervous since childhood” is trait-like and may precede social anxiety disorder; “ill with nerves” leans to dissociation and depression (p. 877).", "Chart: the Section II disorder met, or other specified, with “nervios” in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-nervios", label: "Nervios" }, dxId: "nervios" },
      kufungisisa: { dx: "Thinking too much: assess the listed disorders", line: "Kufungisisa is both an idiom and an explanation (p. 876). The manual lists major depressive disorder, persistent depressive disorder, GAD, PTSD, OCD and prolonged grief disorder (p. 876).", points: ["Ask what the thinking is about (worries, illness, money, a loss) and what the person believes it is doing to them (p. 876).", "Chart: the disorder met or other specified, with the idiom in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-kufungisisa", label: "Kufungisisa" }, dxId: "kufungisisa" },
      dhat: { dx: "Dhat: assess the listed disorders", line: "A cultural explanation, not a syndrome (p. 874). The manual lists major depressive disorder, persistent depressive disorder, GAD, somatic symptom disorder, illness anxiety disorder, erectile disorder, early ejaculation, other specified or unspecified sexual dysfunction and educational problems (p. 875).", points: ["Dhat can also be a lay word for a sexually transmitted infection without distress: examine and test (p. 875; app guidance).", "Chart: the disorder met, with the semen-loss explanation in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-dhat", label: "Dhat syndrome" }, dxId: "dhat-syndrome" },
      khyal: { dx: "Khyâl cap: usually a panic attack", line: "Khyâl attacks usually meet panic attack criteria and may shape other anxiety and trauma- and stressor-related disorders (p. 876). The manual lists panic attack, panic disorder, GAD, agoraphobia, PTSD and illness anxiety disorder (p. 876).", points: ["The catastrophic cognition (wind rising with the blood) is the mechanism treatment must address (p. 872; app reading).", "Chart: panic disorder, or the anxiety or trauma disorder met, with khyâl cap in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-khyal", label: "Khyâl cap" }, dxId: "khyal-cap" },
      shenjing: { dx: "Shenjing shuairuo: assess the listed disorders", line: "A syndrome blending Traditional Chinese Medicine with neurasthenia; up to 45% of patients in Chinese medical clinics meet no DSM-IV disorder (p. 878). The manual lists major depressive disorder, persistent depressive disorder, GAD, somatic symptom disorder, social anxiety disorder, specific phobia and PTSD (p. 879).", points: ["Neurasthenia is not an ICD-11 category (p. 878).", "Chart: the disorder met or other specified, with the neurasthenic framing and the precipitant (loss of face, failure) in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-shenjing", label: "Shenjing shuairuo" }, dxId: "shenjing-shuairuo" },
      "ataque-panic": { dx: "Panic disorder, with ataque de nervios in the formulation", line: "Recurrent unexpected attacks plus a month of worry or behavior change meet panic disorder (Chapter 5); ataque overlaps with panic symptomatically but usually follows a family stressor (p. 874).", points: ["Panic attacks that are always expected argue for an anxiety or trauma- and stressor-related category instead (Chapter 5; app guidance).", "Associations: suicidal thoughts, disability and service use (p. 874)."], link: { ch: "ch24", sec: "s24-ataque", label: "Ataque de nervios" }, dxId: "ataque-de-nervios" },
      "ataque-dissoc": { dx: "Dissociative or functional neurological presentation", line: "Depersonalization, derealization, amnesia and seizure-like or fainting episodes are prominent in some ataques (p. 874); other specified or unspecified dissociative disorder and functional neurological symptom disorder are on the manual’s list (p. 874).", points: ["Functional neurological symptom disorder needs incompatibility with recognized conditions (Chapter 9; app guidance).", "Chart the Section II diagnosis with the ataque in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-ataque", label: "Ataque de nervios" }, dxId: "ataque-de-nervios" },
      "ataque-ied": { dx: "Intermittent explosive disorder to assess", line: "Recurrent aggressive outbursts out of proportion to the trigger are assessed on Chapter 15 criteria; intermittent explosive disorder is on the manual’s list for ataque (p. 874).", points: ["The frequency and duration rules are in Chapter 15 (app guidance).", "Ataque in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-ataque", label: "Ataque de nervios" }, dxId: "ataque-de-nervios" },
      "ataque-os": { dx: "Other specified anxiety, dissociative, or trauma- and stressor-related disorder", line: "Clinically significant attacks that match no full criteria set are recorded as an other specified category, which the manual itself lists for ataque (p. 874), with the ataque named (p. 873).", points: ["Chapter 5’s own example for other specified anxiety disorder is ataque de nervios (Chapter 5; app note).", "Choose the chapter by the dominant feature: anxiety, dissociation or a stressor (app guidance)."], link: { ch: "ch24", sec: "s24-ataque", label: "Ataque de nervios" }, dxId: "ataque-de-nervios" },
      "hiki-secondary": { dx: "Secondary hikikomori: diagnose the underlying disorder", line: "Withdrawal within an established disorder is secondary hikikomori (p. 875); the chart carries that disorder, with hikikomori in the formulation (p. 873).", points: ["Screen for Internet gaming disorder (a Section III proposal, Chapter 25) and, in adolescents, school refusal (p. 875).", "Autism spectrum disorder and schizoid or avoidant personality disorder are on the list as well as mood, anxiety and psychotic disorders (p. 875)."], link: { ch: "ch24", sec: "s24-hikikomori", label: "Hikikomori" }, dxId: "hikikomori" },
      "hiki-primary": { dx: "Primary hikikomori: no code; record through the nearest Section II category", line: "Withdrawal that is independent of any established disorder is primary hikikomori (p. 875). It has no code; if distress or impairment is clinically significant, record an other specified category that fits the dominant feature, or a Chapter 22 problem, and name hikikomori in the formulation (p. 873; app guidance).", points: ["The 6-month threshold is the Japanese ministry guideline, not a DSM criterion (p. 875).", "High loneliness, limited networks and moderate impairment are typical (p. 875)."], link: { ch: "ch24", sec: "s24-hikikomori", label: "Hikikomori" }, dxId: "hikikomori" },
      "hiki-watch": { dx: "Below the guideline: keep assessing", line: "Less than 6 months of withdrawal, or withdrawal without distress or impairment, does not reach the ministry guideline the manual cites (p. 875); it may still be the start of a disorder on the manual’s list (app guidance).", points: ["Reassess social anxiety, depression, autism spectrum and psychosis over time (p. 875).", "School refusal in adolescents is an associated problem (p. 875)."], link: { ch: "ch24", sec: "s24-hikikomori", label: "Hikikomori" }, dxId: "hikikomori" },
      "taijin-sad": { dx: "Social anxiety disorder, with taijin kyofusho in the formulation", line: "Fear of being judged or of offending others, with insight, is assessed on Chapter 5 criteria; social anxiety disorder heads the manual’s list for taijin kyofusho (p. 879).", points: ["The sensitive type and most offensive-type presentations land here (p. 879; app reading).", "Taijin kyofusho is broader than social anxiety disorder (p. 879)."], link: { ch: "ch24", sec: "s24-taijin", label: "Taijin kyofusho" }, dxId: "taijin-kyofusho" },
      "taijin-bdd": { dx: "Body dysmorphic disorder to assess", line: "The shubo-kyofu variant (perceived deformity, stiff or awkward expression or movement) overlaps with body dysmorphic disorder, on the manual’s list (p. 879).", points: ["Chapter 6 criteria apply (app guidance).", "Record the variant name in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-taijin", label: "Taijin kyofusho" }, dxId: "taijin-kyofusho" },
      "taijin-ors": { dx: "Olfactory reference syndrome (other specified OCRD)", line: "The jiko-shu-kyofu variant corresponds specifically to olfactory reference syndrome (an other specified obsessive-compulsive and related disorder), seen in cultures outside Japan too (p. 879).", points: ["If the odor conviction becomes fixed and resists counterexample, reconsider delusional disorder (p. 879).", "Record the variant in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-taijin", label: "Taijin kyofusho" }, dxId: "taijin-kyofusho" },
      "taijin-delusional": { dx: "Delusional disorder to consider", line: "When the concern has a delusional quality and responds poorly to simple reassurance or counterexample, the manual says to consider delusional disorder (p. 879).", points: ["Chapter 2 criteria, including the 1-month rule, apply (app guidance).", "Taijin kyofusho in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-taijin", label: "Taijin kyofusho" }, dxId: "taijin-kyofusho" },
      "susto-mdd": { dx: "Major depressive disorder to assess", line: "The interpersonal type of susto (loss, abandonment, feeling unloved, sadness, poor self-image, suicidal thoughts) is close to major depressive disorder (p. 879).", points: ["Chapter 4 criteria decide; the fright and soul-loss explanation go in the formulation (p. 873).", "Susto is not recognized among Caribbean Latinx (p. 879)."], link: { ch: "ch24", sec: "s24-susto", label: "Susto" }, dxId: "susto" },
      "susto-ptsd": { dx: "Posttraumatic stress disorder to assess", line: "When a traumatic fright shapes the symptoms and their emotional processing, PTSD is the better fit (p. 879).", points: ["Chapter 7 criteria decide (app guidance).", "The healer’s cleansing ritual is part of past help seeking, CFI question 12 (p. 866)."], link: { ch: "ch24", sec: "s24-susto", label: "Susto" }, dxId: "susto" },
      "susto-ssd": { dx: "Somatic symptom disorder to assess", line: "Recurrent somatic susto, with care sought from several practitioners, resembles somatic symptom disorder (p. 879).", points: ["Chapter 9 criteria decide (app guidance).", "Soul-loss explanation in the formulation (p. 873)."], link: { ch: "ch24", sec: "s24-susto", label: "Susto" }, dxId: "susto" },
      "susto-os": { dx: "Other specified trauma- and stressor-related disorder, if clinically significant", line: "The manual lists other specified or unspecified trauma- and stressor-related disorder for susto (p. 879); use it for significant distress after a fright that meets no full criteria set, with susto in the formulation (p. 873).", points: ["If distress is normative and brief, no diagnosis is needed (p. 873).", "Treatment may still be wanted and needed (p. 873)."], link: { ch: "ch24", sec: "s24-susto", label: "Susto" }, dxId: "susto" },
      "sent-shared": { dx: "A cultural explanation, not a delusion: assess the disorder being explained", line: "A sent-sickness belief shared by the family and community is maladi dyab, an explanation for whatever disorder or problem is present (pp. 876–877); diagnosing delusional disorder or schizophrenia on that belief alone is the misdiagnosis the manual warns against (p. 877).", points: ["Depression, psychosis, social or academic failure and functional decline are among the things attributed to it (p. 876).", "Subsyndromal problems may fit Chapter 22 codes for the social environment or education (p. 877)."], link: { ch: "ch24", sec: "s24-maladi-dyab", label: "Maladi dyab" }, dxId: "maladi-dyab" },
      "sent-psychosis": { dx: "Assess for a psychotic disorder on its own merits", line: "When the belief goes beyond what the community holds and comes with hallucinations, disorganization or a spreading persecutory system, a psychotic disorder is assessed on Chapter 2 criteria; the cultural explanation still belongs in the formulation (p. 873; app guidance).", points: ["Section II defines a delusion as a belief not ordinarily accepted by the person’s culture (Chapter 2).", "Use the Informant version when the person cannot give the history (p. 868)."], link: { ch: "ch24", sec: "s24-maladi-dyab", label: "Maladi dyab" }, dxId: "maladi-dyab" },
      "sent-cfi": { dx: "Use the CFI before deciding", line: "Questions 4 and 5 ask what the person, and then their family and community, think is causing the problem (p. 864); the answers show whether the attribution is shared or idiosyncratic (app guidance).", points: ["Socially warranted suspicion is not paranoia (p. 872).", "Return to this helper with the answers."], link: { ch: "ch24", sec: "s24-cfi-domains", label: "The four domains" }, dxId: "cultural-formulation" },
      possession: { label: "Outside the manual", dx: "Possession explanation: assess dissociative and psychotic disorders", line: "Possession is not one of the chapter’s ten examples; the manual notes that DSM-5 added possession to the dissociative identity disorder criteria as an example of research guided by cultural concepts (p. 873). Assess possession-form dissociative identity disorder, other specified dissociative disorder, psychotic disorders and seizures on their own criteria (app guidance).", points: ["A possession state that is a normal part of a broadly accepted practice is excluded from DID (Chapter 8; app note).", "Philippine sapi is outside the manual (app guidance)."], link: { ch: "ch24", sec: "s24-philippines", label: "Philippine concepts (outside the DSM)" }, dxId: "cultural-formulation" },
      disorder: { dx: "The specified disorder that is met", line: "Diagnose the Section II disorder, and include the cultural terms and explanations in the case formulation, where they clarify symptoms and attributions (p. 873).", points: ["The concept has no code of its own (app guidance).", "Plan treatment around the explanatory model and the help-seeking pattern the CFI elicited (pp. 866–867; app guidance)."], link: { ch: "ch24", sec: "s24-concepts-practice", label: "The recording rule" }, dxId: "cultural-formulation" },
      "other-specified": { dx: "An other specified category", line: "When the presentation is clinically significant but does not meet full criteria, the manual directs the clinician to an other specified diagnosis, with the cultural concept named (p. 873).", points: ["Pick the chapter by the dominant feature (anxiety, depressive, dissociative, trauma, somatic; app guidance).", "Several of the manual’s own lists include other specified categories (pp. 874–879)."], link: { ch: "ch24", sec: "s24-concepts-practice", label: "The recording rule" }, dxId: "cultural-formulation" },
      "z-code": { dx: "A Chapter 22 condition", line: "Some concerns the CFI surfaces match a condition in Other Conditions That May Be a Focus of Clinical Attention, with an ICD-10-CM code; the manual’s examples are acculturation problems, parent-child relational problems and religious or spiritual problems (p. 873).", points: ["Codes from the app’s Chapter 22 material: Z60.3 acculturation difficulty, Z62.820 parent-child relational problem, Z65.8 religious or spiritual problem (app guidance; confirm against the tabular list).", "A person who meets no criteria may still need treatment (p. 873)."], link: { ch: "ch22", sec: "s22-social-legal", label: "Chapter 22: social environment" }, dxId: "cultural-formulation" },
      normative: { dx: "No diagnosis: normative distress", line: "Cultural concepts apply across the whole range of severity, including distress that meets no DSM criteria (p. 872); an ataque at a funeral is the manual’s example of a normative expression without sequelae (p. 874).", points: ["Document the concept and the context; offer support as needed (p. 873).", "If an evaluation found nothing to treat, Chapter 20’s no-diagnosis code is available (app guidance)."], link: { ch: "ch24", sec: "s24-concepts-features", label: "The four key features" }, dxId: "cultural-formulation" }
    }
  }
]);
