/*
 * Diagnostic helpers for Chapter 9 (Somatic Symptom and Related Disorders), DSM-5-TR pp. 349–370.
 * "somatic": choose among somatic symptom, illness anxiety, functional neurological, F54 and the residual categories.
 * "deception": is the illness feigned or genuine? Factitious disorder, malingering or a genuine somatic disorder.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "somatic",
    chapter: "ch09",
    title: "Which somatic symptom disorder?",
    summary: "Work from deception and positive neurological signs to symptoms versus illness worry, duration and the medical condition to reach the somatic symptom or related disorder that fits, with its code.",
    caution: "A teaching aid built from DSM-5-TR pp. 349–370. These are not diagnoses of exclusion: always assess the symptoms medically, and remember that a medical illness and a somatic symptom disorder can coexist. Ask about suicidal thoughts.",
    start: "deceive",
    nodes: {
      deceive: {
        q: "Is there objective evidence that signs or symptoms are being falsified, simulated or induced?",
        help: "For example, exogenous insulin (high insulin, low C-peptide), contaminated samples, falsified records, behavior that changes completely when unobserved. Suspicion alone is not evidence.",
        options: [
          { label: "No: the symptoms appear genuinely experienced", to: "neuro", note: "No deception." },
          { label: "Yes", to: "r:deceptive", note: "Deception identified." }
        ]
      },
      neuro: {
        q: "Is the main complaint altered voluntary motor or sensory function (weakness, abnormal movement, seizures, numbness, visual loss, speech or swallowing)?",
        help: "Functional neurological symptom disorder is diagnosed on positive findings, not on normal tests.",
        options: [
          { label: "Yes", to: "signs", note: "Neurological-type symptom." },
          { label: "No", to: "medical", note: "Other somatic symptoms or illness worry." }
        ]
      },
      signs: {
        q: "Does examination show findings incompatible with recognized neurological disease?",
        help: "Hoover’s or hip abductor sign; tremor entrainment; fixed dystonia with sudden onset; seizures with eye closure, bilateral shaking with preserved awareness or >5 minutes; tubular field or a positive fogging test. Base it on the whole picture, not on la belle indifférence or secondary gain.",
        options: [
          { label: "Yes: clear positive signs", to: "r:fnd", note: "Incompatibility demonstrated." },
          { label: "No: findings fit a neurological disease, or the exam is not yet done", to: "r:neurodx", note: "No incompatibility shown." }
        ]
      },
      medical: {
        q: "Is there a medical condition that psychological or behavioral factors are making worse (course, adherence, health risk or pathophysiology)?",
        help: "Anxiety triggering asthma, rage precipitating angina, omitting insulin, denying chest pain, stress-induced Takotsubo cardiomyopathy. The factor is below the threshold of a mental disorder.",
        options: [
          { label: "Yes: the psychological factor worsens the medical condition", to: "r:pfamc", note: "Mind worsens body." },
          { label: "No: the main issue is the person’s symptoms or fear of illness", to: "symptoms", note: "Symptom or worry focus." },
          { label: "No: the main issue is emotional distress in reaction to a medical illness", to: "r:adjustment", note: "Reaction to illness." }
        ]
      },
      symptoms: {
        q: "Are there distressing somatic symptoms, or is the focus fear of having a disease with no or mild symptoms?",
        help: "Pain, fatigue, gut, cardiac or other symptoms that disrupt life, versus normal sensations (a twitch, orthostatic dizziness) taken as signs of a serious disease.",
        options: [
          { label: "Distressing somatic symptoms", to: "excessive", note: "Symptoms in front." },
          { label: "Fear of having or getting a serious disease, no or mild symptoms", to: "otheriad", note: "Illness worry in front." },
          { label: "A false belief of being pregnant with objective signs", to: "r:pseudocyesis", note: "Pseudocyesis." }
        ]
      },
      excessive: {
        q: "Are there excessive thoughts, feelings or behaviors: disproportionate thoughts about seriousness, persistently high health anxiety, or excessive time and energy?",
        help: "Count them for severity. Many people with IBS, fibromyalgia or chronic disease cope well and do not qualify.",
        options: [
          { label: "Yes, at least one", to: "ssddur", note: "Criterion B met." },
          { label: "No", to: "r:nodx", note: "Criterion B not met." }
        ]
      },
      ssddur: {
        q: "Has the symptomatic state persisted, typically more than 6 months?",
        help: "Individual symptoms may come and go; the state of being symptomatic persists.",
        options: [
          { label: "Yes", to: "ssdother", note: "Persistent." },
          { label: "No: under 6 months", to: "r:briefssd", note: "Brief." }
        ]
      },
      ssdother: {
        q: "Are the symptoms and health fear better explained by attacks of panic, wide-ranging worry, depression or a delusion?",
        help: "Panic disorder (acute attacks), GAD (many worries), depression (low mood, anhedonia), delusional disorder (fixed conviction). If another disorder is present but does not explain everything, diagnose both.",
        options: [
          { label: "No", to: "r:ssd", note: "Somatic symptom disorder." },
          { label: "Yes", to: "r:otherdx", note: "Another disorder explains it." }
        ]
      },
      otheriad: {
        q: "Is the fear better explained by another disorder?",
        help: "Panic disorder (episodic fear during attacks), GAD (health is one of many worries), OCD (intrusive fears of getting a disease, with compulsions), BDD (appearance), MDD (only during episodes), or a bizarre somatic delusion.",
        options: [
          { label: "No", to: "iaddur", note: "Not better explained." },
          { label: "Yes", to: "r:otherdx", note: "Another disorder explains it." }
        ]
      },
      iaddur: {
        q: "Has the preoccupation lasted at least 6 months (the feared illness may have changed)?",
        help: "After a real serious diagnosis, time-limited worry is usually normal or an adjustment disorder.",
        options: [
          { label: "Yes", to: "iadbeh", note: "Duration met." },
          { label: "No: under 6 months", to: "r:briefiad", note: "Brief." }
        ]
      },
      iadbeh: {
        q: "Are there excessive health behaviors (checking, searching, reassurance seeking, repeated tests) or maladaptive avoidance of care?",
        help: "Frequent visits and tests point to care-seeking type; rarely using care points to care-avoidant type.",
        options: [
          { label: "Yes: frequent checking, visits or tests", to: "r:iadseek", note: "Care-seeking." },
          { label: "Yes: avoids doctors, hospitals or tests", to: "r:iadavoid", note: "Care-avoidant." },
          { label: "No: neither", to: "r:iadnobeh", note: "Criterion D not met." }
        ]
      }
    },
    results: {
      deceptive: { label: "Deception identified", dx: "Factitious disorder or malingering", line: "Use the feigned or genuine helper to decide whether an external reward explains the deception.", points: ["Factitious disorder: deception even without obvious external rewards (F68.10, F68.A).", "Malingering: external rewards (Z76.5), not a mental disorder.", "A real illness can coexist."], link: { ch: "ch09", sec: "s9-factitious", label: "Factitious disorder" }, dxId: "factitious" },
      fnd: { dx: "Functional neurological symptom disorder (F44.4–F44.7)", line: "Altered motor or sensory function with findings incompatible with recognized disease.", points: ["Code by type: F44.4 motor, F44.5 seizures, F44.6 sensory, F44.7 mixed.", "Specify acute (<6 months) or persistent, and with or without psychological stressor.", "It can coexist with epilepsy or other disease; diagnose dissociative or somatic symptom disorder too if criteria are met."], link: { ch: "ch09", sec: "s9-fnd-criteria", label: "FND criteria and codes" }, dxId: "fnd" },
      neurodx: { label: "Not yet", dx: "Continue the neurological assessment", line: "Functional neurological symptom disorder needs positive evidence of incompatibility; normal tests or a “bizarre” symptom are not enough.", points: ["Ask a clinician with neurological expertise to look for positive signs.", "Reassess if symptoms progress."], link: { ch: "ch09", sec: "s9-fnd-signs", label: "Positive signs" } },
      pfamc: { dx: "Psychological factors affecting other medical conditions (F54)", line: "Psychological or behavioral factors adversely affect a medical condition.", points: ["Rate severity: mild, moderate, severe (hospitalization or ED), extreme (life-threatening).", "If a full mental disorder (e.g., alcohol use disorder, MDD) is responsible, diagnose that instead.", "Culturally sanctioned healing is not pathologized."], link: { ch: "ch09", sec: "s9-pfamc", label: "F54" }, dxId: "pfamc" },
      adjustment: { label: "Consider", dx: "Adjustment disorder", line: "Emotional or behavioral reaction to a medical illness as a stressor.", points: ["Anticipatory anxiety about angina, distress after a cancer diagnosis.", "If disproportionate health anxiety lasts beyond 6 months, reconsider illness anxiety disorder."], link: { ch: "ch09", sec: "s9-iad-ddx", label: "IAD differential" }, dxId: "adjustment" },
      pseudocyesis: { dx: "Other specified somatic symptom and related disorder (F45.8): pseudocyesis", line: "A false belief of being pregnant with objective signs and reported symptoms of pregnancy.", points: ["Exclude pregnancy and endocrine causes.", "If the belief is held with delusional intensity without signs, consider a psychotic disorder."], link: { ch: "ch09", sec: "s9-other", label: "Other specified" }, dxId: "other-specified-somatic" },
      nodx: { label: "Not somatic symptom disorder", dx: "A medical condition without a somatic symptom disorder", line: "Distressing symptoms with a proportionate response do not meet Criterion B.", points: ["Treat the symptoms; watch for depression and anxiety.", "Many with fibromyalgia or IBS do not qualify."], link: { ch: "ch09", sec: "s9-ssd-ddx", label: "SSD differential" } },
      briefssd: { dx: "Other specified somatic symptom and related disorder (F45.8): brief somatic symptom disorder", line: "Somatic symptom disorder criteria met for under 6 months.", points: ["Reassess at 6 months.", "Record the reason after the diagnosis."], link: { ch: "ch09", sec: "s9-other", label: "Other specified" }, dxId: "other-specified-somatic" },
      ssd: { dx: "Somatic symptom disorder (F45.1)", line: "Distressing somatic symptoms with excessive thoughts, feelings or behaviors, typically >6 months.", points: ["Severity: mild (one B), moderate (two or more), severe (two or more plus multiple complaints).", "Add with predominant pain or persistent if they apply.", "Screen for depression and anxiety (each up to 50%) and suicidal thoughts."], link: { ch: "ch09", sec: "s9-ssd-criteria", label: "SSD criteria" }, dxId: "ssd" },
      otherdx: { label: "Consider", dx: "The disorder that better explains it", line: "Panic disorder, GAD, a depressive disorder, OCD, BDD or delusional disorder, somatic type.", points: ["If somatic symptom disorder criteria are also fully met and not explained, diagnose both."], link: { ch: "ch09", sec: "s9-ssd-ddx", label: "Differential diagnosis" } },
      briefiad: { dx: "Other specified somatic symptom and related disorder (F45.8): brief illness anxiety disorder", line: "Illness anxiety disorder criteria met for under 6 months.", points: ["After a real health scare, consider adjustment disorder or a normal reaction."], link: { ch: "ch09", sec: "s9-other", label: "Other specified" }, dxId: "other-specified-somatic" },
      iadseek: { dx: "Illness anxiety disorder (F45.21), care-seeking type", line: "Preoccupation with a serious illness, no or mild symptoms, high health anxiety, frequent checking and care.", points: ["Reassurance and repeated tests do not help; set regular scheduled visits.", "Do not dismiss new symptoms: real illness can be missed."], link: { ch: "ch09", sec: "s9-iad-criteria", label: "IAD criteria" }, dxId: "iad" },
      iadavoid: { dx: "Illness anxiety disorder (F45.21), care-avoidant type", line: "Preoccupation with a serious illness, high health anxiety, maladaptive avoidance of care.", points: ["Avoidance may delay needed screening.", "Explore what the person fears being told."], link: { ch: "ch09", sec: "s9-iad-criteria", label: "IAD criteria" }, dxId: "iad" },
      iadnobeh: { dx: "Other specified somatic symptom and related disorder (F45.8): illness anxiety disorder without excessive health-related behaviors", line: "Illness anxiety criteria met except Criterion D.", points: ["Record the reason after the diagnosis."], link: { ch: "ch09", sec: "s9-other", label: "Other specified" }, dxId: "other-specified-somatic" }
    }
  },
  {
    id: "deception",
    chapter: "ch09",
    title: "Feigned or genuine?",
    summary: "Separate factitious disorder, malingering and the genuine somatic disorders by asking whether there is deception, who is presented as ill, and whether an external reward explains it.",
    caution: "A teaching aid built from DSM-5-TR pp. 367–370 and related differential sections. Suspected illness induction in a child is a safeguarding emergency: follow child-protection procedures first.",
    start: "evidence",
    nodes: {
      evidence: {
        q: "Is there objective evidence of falsification, simulation or induction?",
        help: "Laboratory proof (exogenous insulin, warfarin), tampered samples or records, observed behavior inconsistent with reported disability outside the exam. Positive functional signs (Hoover’s) are not evidence of feigning.",
        options: [
          { label: "Yes", to: "who", note: "Deception identified." },
          { label: "No: suspicion only, or symptoms appear genuine", to: "genuine", note: "No deception shown." }
        ]
      },
      who: {
        q: "Who is presented as ill, injured or impaired?",
        help: "Imposed on another usually involves a child, but can be an adult dependent or a pet.",
        options: [
          { label: "Themselves", to: "rewardself", note: "Self." },
          { label: "Another person (child, dependent adult) or a pet", to: "rewardother", note: "Another." }
        ]
      },
      rewardself: {
        q: "Does an obvious external reward fully explain the deception?",
        help: "Money, disability payments, drugs, avoiding work, military duty, prosecution or prison.",
        options: [
          { label: "Yes", to: "r:malingering", note: "External reward." },
          { label: "No obvious external reward", to: "psychosis", note: "No reward." },
          { label: "Partly: both an external reward and deception beyond it", to: "r:both", note: "Mixed." }
        ]
      },
      rewardother: {
        q: "Is the caregiver lying only to protect themselves from blame or prosecution?",
        help: "A parent who lies about how a child was injured to avoid liability has an external reward. Falsifying beyond what self-protection needs points to factitious disorder imposed on another.",
        options: [
          { label: "No: deception without obvious external reward", to: "r:fdia", note: "Imposed on another." },
          { label: "Yes: only to avoid liability", to: "r:abuse", note: "Self-protection." }
        ]
      },
      psychosis: {
        q: "Is the behavior better explained by a delusional belief or another psychotic disorder?",
        help: "For example, self-injury driven by a delusion of infestation.",
        options: [
          { label: "No", to: "r:fdself", note: "Factitious disorder." },
          { label: "Yes", to: "r:psychotic", note: "Psychosis." }
        ]
      },
      genuine: {
        q: "Which pattern fits the genuinely experienced symptoms?",
        help: "Genuine symptoms are diagnosed on positive features, not by excluding feigning.",
        options: [
          { label: "Motor or sensory symptoms with positive incompatible signs", to: "r:fnd", note: "Functional neurological." },
          { label: "Distressing symptoms with excessive thoughts, feelings or behaviors", to: "r:ssd", note: "Somatic symptom." },
          { label: "Fear of illness with no or mild symptoms", to: "r:iad", note: "Illness anxiety." },
          { label: "Self-harm without suicidal intent, not presented as illness", to: "r:bpd", note: "Self-harm." }
        ]
      }
    },
    results: {
      malingering: { label: "Not a mental disorder", dx: "Malingering (Z76.5)", line: "Intentional false or exaggerated symptoms motivated by external rewards.", points: ["Document objective findings neutrally.", "Malingering and a genuine disorder can coexist."], link: { ch: "ch09", sec: "s9-factitious", label: "Factitious vs malingering" }, dxId: "malingering" },
      both: { dx: "Factitious disorder and malingering together", line: "The two can coexist, and motives can shift over time.", points: ["Diagnose factitious disorder when deception clearly exceeds what the external reward explains."], link: { ch: "ch09", sec: "s9-factitious", label: "Differential" }, dxId: "factitious" },
      fdself: { dx: "Factitious disorder imposed on self (F68.10)", line: "Deceptive falsification or induction of one’s own illness without obvious external reward.", points: ["Specify single or recurrent episodes.", "A real medical illness may coexist.", "Avoid unnecessary procedures; coordinate care across settings."], link: { ch: "ch09", sec: "s9-factitious", label: "Factitious disorder" }, dxId: "factitious" },
      fdia: { dx: "Factitious disorder imposed on another (F68.A), in the perpetrator", line: "Falsifying or inducing illness in another and presenting them as ill.", points: ["Protect the victim first: this is abuse.", "The victim may receive an abuse code (e.g., T74.12X).", "If the perpetrator also falsifies their own illness, diagnose both forms."], link: { ch: "ch09", sec: "s9-factitious", label: "Imposed on another" }, dxId: "factitious" },
      abuse: { label: "Not factitious disorder", dx: "Child or dependent abuse with lying to avoid liability", line: "Lying only to avoid blame has an external reward.", points: ["Follow child-protection procedures.", "Reconsider factitious disorder if falsification exceeds self-protection."], link: { ch: "ch09", sec: "s9-factitious", label: "Differential" } },
      psychotic: { label: "Not factitious disorder", dx: "A psychotic disorder", line: "Criterion D excludes deception better explained by a delusion.", points: ["Treat the psychosis; assess safety."], link: { ch: "ch02", sec: "s2-delusional", label: "Delusional disorder" }, dxId: "delusional-disorder" },
      fnd: { dx: "Functional neurological symptom disorder", line: "Genuinely experienced symptoms with findings incompatible with disease.", points: ["Not feigned: explain the diagnosis positively.", "Code by symptom type (F44.4–F44.7)."], link: { ch: "ch09", sec: "s9-fnd-criteria", label: "FND" }, dxId: "fnd" },
      ssd: { dx: "Somatic symptom disorder", line: "Authentic suffering with excessive thoughts, feelings or behaviors.", points: ["Heavy care seeking is not deception."], link: { ch: "ch09", sec: "s9-ssd-criteria", label: "SSD" }, dxId: "ssd" },
      iad: { dx: "Illness anxiety disorder", line: "Fear of having a disease, no or mild symptoms.", points: ["Care seeking without deception."], link: { ch: "ch09", sec: "s9-iad-criteria", label: "IAD" }, dxId: "iad" },
      bpd: { label: "Consider", dx: "Borderline personality disorder", line: "Deliberate self-harm without suicidal intent, without deceptive presentation as illness.", points: ["Factitious disorder requires deception about the cause."], link: { ch: "ch09", sec: "s9-factitious", label: "Differential" } }
    }
  }
]);
