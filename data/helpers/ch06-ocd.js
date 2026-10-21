/*
 * Diagnostic helpers for Chapter 6 (Obsessive-Compulsive and Related Disorders), DSM-5-TR pp. 263–294.
 * "ocd": choose among OCD, BDD, hoarding, trichotillomania, excoriation, induced, medical and residual categories.
 * "repetitive": decide what a repetitive behavior (picking, pulling, checking, saving) belongs to.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "ocd",
    chapter: "ch06",
    title: "Which obsessive-compulsive or related disorder?",
    summary: "Work through cause, what drives the behavior, threshold and insight to reach the obsessive-compulsive or related disorder that fits, with its code and specifiers.",
    caution: "A teaching aid built from DSM-5-TR pp. 263–294. These disorders overlap: after reaching one result, screen for the others, for tics and depression, and ask about suicidal thoughts (especially in BDD).",
    start: "cause",
    nodes: {
      cause: {
        q: "Could a substance, medication or medical condition be causing the symptoms?",
        help: "Stimulants, cocaine, dopamine agonists (ropinirole); a striatal stroke, Huntington’s disease; sudden onset in a child after strep throat or another infection (Sydenham’s chorea, PANDAS/PANS). Acute or late onset and atypical symptoms raise suspicion.",
        options: [
          { label: "No", to: "driver", note: "No substance, medication or medical cause is evident." },
          { label: "A substance or medication, with symptoms only during use", to: "r:substance", note: "A substance or medication is the likely cause." },
          { label: "A medical condition with a plausible mechanism and a close time link", to: "r:medical", note: "A medical condition is the likely cause." },
          { label: "Unclear whether primary, substance-induced or medical", to: "r:unspecified", note: "The cause cannot be determined." }
        ]
      },
      driver: {
        q: "What mainly drives the behavior?",
        help: "Ask: “What goes through your mind just before you do it? What would happen if you didn’t?”",
        options: [
          { label: "Intrusive, unwanted thoughts, urges or images, or rigid rules (contamination, harm, symmetry, taboo)", to: "ocdthreshold", note: "Obsessions or rule-driven compulsions." },
          { label: "A belief that a part of one’s appearance is flawed or ugly", to: "bddvisible", note: "Appearance preoccupation." },
          { label: "A need to save possessions and distress at discarding them", to: "hoardspace", note: "Difficulty discarding." },
          { label: "A body-focused habit (pulling hair, picking skin, biting nails) the person keeps trying to stop", to: "bfrb", note: "Body-focused repetitive behavior." },
          { label: "Something else: partner’s fidelity, body odor, genital retraction", to: "otherex", note: "A presentation listed under other specified OCRD." }
        ]
      },
      ocdthreshold: {
        q: "Do the obsessions or compulsions take more than about an hour a day, or cause clinically significant distress or impairment?",
        help: "Occasional intrusive thoughts and double-checking are common in everyone.",
        options: [
          { label: "Yes", to: "ocdexcl", note: "Criterion B is met." },
          { label: "No", to: "r:subclinical", note: "Below the OCD threshold." }
        ]
      },
      ocdexcl: {
        q: "Are the thoughts better explained by another disorder’s focus?",
        help: "Real-life worries (GAD), weight and food (eating disorder), guilty mood-congruent rumination (MDD), pleasurable urges (gambling, substances, paraphilias), thought insertion or other delusions (psychosis), repetitive patterns in autism.",
        options: [
          { label: "No: true obsessions and/or compulsions", to: "ocdinsight", note: "OCD content." },
          { label: "Yes: another disorder explains them", to: "r:otherdisorder", note: "Another disorder explains the symptoms." }
        ]
      },
      ocdinsight: {
        q: "How convinced is the person that the OCD beliefs are true (e.g., that the house will burn down if the stove is not checked)?",
        help: "Absent insight/delusional beliefs is recorded as a specifier, not as a psychotic disorder.",
        options: [
          { label: "Definitely or probably not true, or unsure", to: "tic", note: "Good or fair insight." },
          { label: "Probably true", to: "tic", note: "Poor insight." },
          { label: "Completely convinced", to: "tic", note: "Absent insight/delusional beliefs." }
        ]
      },
      tic: {
        q: "Is there a current or past tic disorder?",
        help: "Motor or vocal tics: blinking, grimacing, throat clearing, sniffing.",
        options: [
          { label: "Yes", to: "r:ocdtic", note: "Tic-related." },
          { label: "No", to: "r:ocd", note: "Not tic-related." }
        ]
      },
      bddvisible: {
        q: "Is the perceived flaw slight or not observable to others?",
        help: "A clearly noticeable defect does not qualify for BDD. Scars caused by BDD picking still count.",
        options: [
          { label: "Yes, slight or invisible", to: "bddweight", note: "Criterion A is met." },
          { label: "No, the flaw is clearly visible, but the preoccupation is excessive and impairing", to: "r:bddactual", note: "BDD-like with actual flaws." }
        ]
      },
      bddweight: {
        q: "Is the concern only about body fat or weight in someone with an eating disorder?",
        help: "Weight concerns in an eating disorder belong to it; BDD can coexist if there are other appearance concerns.",
        options: [
          { label: "No", to: "bddritual", note: "Not explained by an eating disorder." },
          { label: "Yes", to: "r:eating", note: "Weight concerns of an eating disorder." }
        ]
      },
      bddritual: {
        q: "Have there ever been repetitive behaviors or mental acts in response (mirror checking, comparing, grooming, camouflage, reassurance seeking, picking)?",
        help: "They need not be present now, only at some point in the disorder.",
        options: [
          { label: "Yes", to: "bddmuscle", note: "Criterion B is met." },
          { label: "Never", to: "r:bddnorituals", note: "No repetitive behaviors." }
        ]
      },
      bddmuscle: {
        q: "Is the person preoccupied with the body being too small or not muscular enough?",
        help: "Muscle dysmorphia is used even if other body areas are also a focus. It is almost exclusively seen in men.",
        options: [
          { label: "Yes", to: "r:bddmuscle", note: "Muscle dysmorphia." },
          { label: "No", to: "r:bdd", note: "No muscle dysmorphia." }
        ]
      },
      hoardspace: {
        q: "Does the clutter compromise active living areas (kitchen, bed, chairs), or are they clear only because others intervened?",
        help: "Garages, attics and basements do not count. Normative collecting is organized and selective.",
        options: [
          { label: "Yes", to: "hoardcause", note: "Criterion C is met." },
          { label: "No: organized collecting, or clutter only in storage areas", to: "r:collecting", note: "Not hoarding disorder." }
        ]
      },
      hoardcause: {
        q: "Is the saving better explained by something else?",
        help: "Obsessions (fear of harm, contamination, incompleteness) or bizarre items (trash, nail clippings) suggest OCD; low energy suggests depression; onset after cognitive decline suggests a neurocognitive disorder; onset after brain injury suggests a medical cause.",
        options: [
          { label: "No: items are saved because they feel useful, valuable or precious", to: "hoardacq", note: "Hoarding disorder pattern." },
          { label: "Obsessions or bizarre items", to: "r:ocdhoard", note: "OCD-driven accumulation." },
          { label: "Depression, dementia, psychosis, autism or brain injury", to: "r:otherdisorder", note: "Another condition explains it." }
        ]
      },
      hoardacq: {
        q: "Does the person also excessively buy, collect free items or steal things not needed or with no space for them?",
        help: "Present in 80%–90%; some deny it at first.",
        options: [
          { label: "Yes", to: "r:hoardacq", note: "With excessive acquisition." },
          { label: "No", to: "r:hoard", note: "Without excessive acquisition." }
        ]
      },
      bfrb: {
        q: "Which behavior, and has it caused hair loss or skin lesions despite repeated attempts to stop?",
        help: "Check first that the purpose is not to improve appearance (BDD), remove “parasites” (psychosis) or hurt oneself (nonsuicidal self-injury). The repetitive behavior helper covers this.",
        options: [
          { label: "Hair pulling with hair loss, and repeated attempts to stop", to: "r:trich", note: "Trichotillomania pattern." },
          { label: "Skin picking with lesions, and repeated attempts to stop", to: "r:skin", note: "Excoriation pattern." },
          { label: "Nail biting, lip biting or cheek chewing, with repeated attempts to stop", to: "r:otherbfrb", note: "Another BFRB." },
          { label: "No attempts to stop, or no hair loss or lesions", to: "r:subclinical", note: "Below threshold." }
        ]
      },
      otherex: {
        q: "Which best fits?",
        help: "These are named examples of other specified OCRD.",
        options: [
          { label: "Nondelusional preoccupation with a partner’s infidelity, with checking", to: "r:jealousy", note: "Obsessional jealousy." },
          { label: "Belief of emitting a foul body odor others cannot detect", to: "r:ord", note: "Olfactory reference disorder." },
          { label: "Sudden fear that the genitals will retract, possibly causing death", to: "r:koro", note: "Koro." }
        ]
      }
    },
    results: {
      substance: { dx: "Substance/medication-induced obsessive-compulsive and related disorder", line: "Codes end in .x88: stimulant F15.x88, cocaine F14.x88, other or unknown (e.g., ropinirole) F19.x88; 4th character 1 mild, 2 moderate/severe, 9 none.", points: ["Specify onset during intoxication, during withdrawal or after medication use.", "Persistence about 1 month after stopping suggests a primary OCRD."], link: { ch: "ch06", sec: "s6-substance", label: "Substance-induced OCRD" }, dxId: "substance-induced-ocrd" },
      medical: { dx: "OCRD due to another medical condition (F06.8)", line: "Code the condition first, e.g., I69.398 cerebral infarction; F06.8 OCRD due to cerebral infarction.", points: ["Specify OCD-like symptoms, appearance preoccupations, hoarding, hair pulling or skin picking.", "Sydenham’s chorea with OCD symptoms belongs here; consider PANS in a child with abrupt onset."], link: { ch: "ch06", sec: "s6-medical", label: "Medical causes" }, dxId: "ocrd-due-to-amc" },
      unspecified: { dx: "Other specified or unspecified OCRD", line: "When it is unclear whether symptoms are primary, substance-induced or medical: F42.8 (reason recorded) or F42.9.", points: ["A medication change can show whether a drug is responsible."], link: { ch: "ch06", sec: "s6-other", label: "Residual categories" }, dxId: "unspecified-ocrd" },
      ocd: { dx: "Obsessive-compulsive disorder (F42.2)", line: "Add the insight specifier you chose (good or fair, poor, or absent insight/delusional beliefs).", points: ["Ask about all four dimensions: cleaning, harm, symmetry, taboo thoughts.", "Screen for depression, BDD, hoarding, BFRBs and suicidal thoughts.", "Ask about family accommodation."], link: { ch: "ch06", sec: "s6-ocd-criteria", label: "OCD criteria" }, dxId: "ocd" },
      ocdtic: { dx: "Obsessive-compulsive disorder (F42.2), tic-related", line: "Add the insight specifier as well; diagnose the tic disorder separately.", points: ["Most common in boys and men with childhood onset.", "Look for the OCD–tic–ADHD triad in children."], link: { ch: "ch06", sec: "s6-ocd-specifiers", label: "Tic-related specifier" }, dxId: "ocd" },
      subclinical: { label: "No OCRD (yet)", dx: "Subclinical symptoms", line: "Occasional intrusive thoughts, checking or habits without the required time, distress, impairment, visible result or attempts to stop.", points: ["If impairing but atypical, other specified OCRD can be used.", "Reassess over time."], link: { ch: "ch06", sec: "s6-principles", label: "What makes it a disorder" } },
      otherdisorder: { label: "Not an OCRD", dx: "Another disorder explains the symptoms", line: "GAD (real-life worries), MDD (rumination or inertia), eating disorders, psychosis, neurocognitive disorder, autism, addictive disorders or paraphilias.", points: ["Diagnose the other disorder; OCD can be added only if true obsessions or compulsions are also present."], link: { ch: "ch06", sec: "s6-ocd-ddx", label: "OCD differential" } },
      bddactual: { dx: "Other specified OCRD (F42.8): BDD-like disorder with actual flaws", line: "Excessive, impairing preoccupation with a clearly observable flaw.", points: ["Record the reason after the diagnosis."], link: { ch: "ch06", sec: "s6-other", label: "Other specified OCRD" }, dxId: "other-specified-ocrd" },
      eating: { label: "Not BDD", dx: "An eating disorder", line: "Fat or weight concerns in someone with anorexia, bulimia or binge-eating disorder belong to the eating disorder.", points: ["Diagnose BDD as well if there are other appearance concerns (e.g., the nose)."], link: { ch: "ch06", sec: "s6-bdd-ddx", label: "BDD differential" } },
      bddnorituals: { dx: "Other specified OCRD (F42.8): BDD-like disorder without repetitive behaviors", line: "Meets BDD except that there have never been repetitive behaviors or mental acts.", points: ["Ask carefully: comparing is a mental act and counts."], link: { ch: "ch06", sec: "s6-other", label: "Other specified OCRD" }, dxId: "other-specified-ocrd" },
      bdd: { dx: "Body dysmorphic disorder (F45.22)", line: "Add the insight specifier (good or fair, poor, or absent insight/delusional beliefs).", points: ["Delusional conviction stays BDD, not delusional disorder.", "Assess suicide risk: thoughts ≈4×, attempts ≈2.6×.", "Cosmetic procedures rarely help."], link: { ch: "ch06", sec: "s6-bdd-criteria", label: "BDD criteria" }, dxId: "bdd" },
      bddmuscle: { dx: "Body dysmorphic disorder (F45.22), with muscle dysmorphia", line: "Add the insight specifier as well.", points: ["Ask about anabolic steroids and other substances.", "Excessive exercise may cause injury."], link: { ch: "ch06", sec: "s6-bdd-criteria", label: "Muscle dysmorphia" }, dxId: "bdd" },
      collecting: { label: "No disorder", dx: "Normative collecting or ordinary clutter", line: "Organized, selective collecting without clutter of active living areas, distress or impairment is not hoarding disorder.", points: ["Reassess if clutter spreads into living areas or discarding causes marked distress."], link: { ch: "ch06", sec: "s6-hoard-criteria", label: "Hoarding criteria" } },
      ocdhoard: { label: "Consider", dx: "OCD (accumulation driven by obsessions)", line: "Saving to prevent harm or to feel complete, or saving bizarre items, points to OCD; hoarding disorder is added only if severe hoarding is independent of other OCD symptoms.", points: ["OCD hoarding is unwanted and unrewarding, usually without excessive acquisition."], link: { ch: "ch06", sec: "s6-hoard-ddx", label: "Hoarding vs OCD" }, dxId: "ocd" },
      hoardacq: { dx: "Hoarding disorder (F42.3), with excessive acquisition", line: "Add the insight specifier (good or fair, poor, or absent insight/delusional beliefs).", points: ["Assess safety: fire, falls, sanitation.", "Screen for depression (30%–50%), anxiety and OCD."], link: { ch: "ch06", sec: "s6-hoard-criteria", label: "Hoarding criteria" }, dxId: "hoarding" },
      hoard: { dx: "Hoarding disorder (F42.3)", line: "Add the insight specifier; recheck for excessive acquisition later, as it is often denied at first.", points: ["Assess safety and screen for depression and OCD."], link: { ch: "ch06", sec: "s6-hoard-criteria", label: "Hoarding criteria" }, dxId: "hoarding" },
      trich: { dx: "Trichotillomania (hair-pulling disorder) (F63.3)", line: "Recurrent pulling with hair loss, repeated attempts to stop, distress or impairment.", points: ["Ask about swallowing hair (trichobezoar risk).", "Rule out alopecia areata and other dermatological causes; dermoscopy if pulling is denied.", "Screen for skin picking and depression."], link: { ch: "ch06", sec: "s6-trich", label: "Trichotillomania" }, dxId: "trichotillomania" },
      skin: { dx: "Excoriation (skin-picking) disorder (F42.4)", line: "Recurrent picking with lesions, repeated attempts to stop, distress or impairment.", points: ["Check for infection and scarring.", "Exclude stimulant use, scabies and other skin disease."], link: { ch: "ch06", sec: "s6-skin", label: "Excoriation disorder" }, dxId: "excoriation" },
      otherbfrb: { dx: "Other specified OCRD (F42.8): other body-focused repetitive behavior disorder", line: "Nail biting, lip biting or cheek chewing with repeated attempts to stop and distress or impairment.", points: ["Often comorbid with trichotillomania or excoriation disorder."], link: { ch: "ch06", sec: "s6-other", label: "Other specified OCRD" }, dxId: "other-specified-ocrd" },
      jealousy: { dx: "Other specified OCRD (F42.8): obsessional jealousy", line: "Nondelusional preoccupation with a partner’s infidelity, with repetitive behaviors or mental acts.", points: ["If held with delusional conviction, consider delusional disorder, jealous type.", "Rule out paranoid personality disorder."], link: { ch: "ch06", sec: "s6-other", label: "Other specified OCRD" }, dxId: "other-specified-ocrd" },
      ord: { dx: "Other specified OCRD (F42.8): olfactory reference disorder", line: "Preoccupation with emitting a foul body odor that others do not notice, with checking, washing and camouflage.", points: ["Japanese jikoshu-kyofu, a variant of taijin kyofusho.", "Not BDD, which concerns appearance."], link: { ch: "ch06", sec: "s6-other", label: "Other specified OCRD" }, dxId: "other-specified-ocrd" },
      koro: { dx: "Other specified OCRD (F42.8): koro", line: "Sudden intense anxiety that the genitals (or vulva and nipples) will retract into the body, possibly causing death; often epidemic in Southeast Asia.", points: ["Differs from BDD by its focus on death rather than ugliness."], link: { ch: "ch06", sec: "s6-other", label: "Other specified OCRD" }, dxId: "other-specified-ocrd" }
    }
  },
  {
    id: "repetitive",
    chapter: "ch06",
    title: "Why is this person picking, pulling, checking or saving?",
    summary: "The same behavior can belong to many disorders. Start from the behavior and ask about its purpose to reach the right diagnosis.",
    caution: "A teaching aid built from DSM-5-TR pp. 263–294 and the related differential sections. Always look for medical complications (infection, trichobezoar) and self-harm.",
    start: "behavior",
    nodes: {
      behavior: {
        q: "Which behavior are you trying to explain?",
        help: "Pick the behavior, then the reason the person gives.",
        options: [
          { label: "Skin picking or scratching", to: "skinwhy", note: "Skin picking." },
          { label: "Hair pulling or plucking", to: "hairwhy", note: "Hair pulling." },
          { label: "Checking, washing, counting or ordering", to: "checkwhy", note: "Rituals." },
          { label: "Saving possessions", to: "savewhy", note: "Saving." }
        ]
      },
      skinwhy: {
        q: "Why does the person pick?",
        help: "Ask what they were thinking just before and what they hoped would happen.",
        options: [
          { label: "A habit or urge they keep trying to stop, with lesions", to: "r:skin", note: "Habitual picking." },
          { label: "To make perceived skin flaws look better", to: "r:bdd", note: "Appearance-driven." },
          { label: "To remove insects or parasites felt under the skin", to: "r:psychosis", note: "Delusion or formication." },
          { label: "To hurt themselves or relieve emotional pain", to: "r:nssi", note: "Self-injury." },
          { label: "Only during cocaine or stimulant use", to: "r:substance", note: "Substance-related." },
          { label: "Because of intense itching from a skin disease (e.g., scabies)", to: "r:medicalskin", note: "Dermatological cause." },
          { label: "Denies causing the lesions despite evidence", to: "r:factitious", note: "Possible deception." }
        ]
      },
      hairwhy: {
        q: "Why does the person pull hair?",
        help: "Biting, twisting or playing with hair does not count as pulling.",
        options: [
          { label: "An urge or automatic habit they keep trying to stop, with hair loss", to: "r:trich", note: "Hair-pulling habit." },
          { label: "To remove hair they think is ugly, uneven or excessive", to: "r:bdd", note: "Appearance-driven." },
          { label: "To make things symmetrical or “just right” as part of OCD rituals", to: "r:ocd", note: "OCD-driven." },
          { label: "A child with intellectual disability or autism, when frustrated or excited", to: "r:stereotypy", note: "Stereotypic behavior." },
          { label: "In response to a delusion or hallucination", to: "r:psychosis", note: "Psychotic." }
        ]
      },
      checkwhy: {
        q: "What drives the rituals?",
        help: "Ask what would happen if the ritual were not done.",
        options: [
          { label: "Intrusive, unwanted thoughts of harm, contamination or incompleteness", to: "r:ocd", note: "Obsessions." },
          { label: "Checking how one looks", to: "r:bdd", note: "Appearance." },
          { label: "Checking the body for illness", to: "r:illness", note: "Health anxiety." },
          { label: "Pleasure or reward (gambling, shopping, sex)", to: "r:addictive", note: "Rewarding behavior." },
          { label: "Lifelong preference for order and perfection, with no intrusive thoughts", to: "r:ocpd", note: "Personality style." },
          { label: "Rigid routines and repetitive patterns since early childhood, with social communication deficits", to: "r:autism", note: "Autism." }
        ]
      },
      savewhy: {
        q: "Why does the person save things?",
        help: "Ask what would happen if an item were thrown away.",
        options: [
          { label: "Items feel useful, valuable or sentimental; discarding is distressing", to: "r:hoard", note: "Hoarding pattern." },
          { label: "Throwing things away might cause harm, or feels incomplete; bizarre items", to: "r:ocd", note: "Obsession-driven." },
          { label: "No energy to clear up; no trouble discarding", to: "r:depression", note: "Depressive inertia." },
          { label: "Began after cognitive decline or brain injury", to: "r:organic", note: "Neurocognitive or medical cause." },
          { label: "Organized, selective collection with no clutter of living areas", to: "r:collect", note: "Collecting." }
        ]
      }
    },
    results: {
      skin: { dx: "Excoriation (skin-picking) disorder (F42.4)", line: "Lesions, repeated attempts to stop, distress or impairment.", points: ["Acne picking that has become independent of the acne still counts."], link: { ch: "ch06", sec: "s6-skin", label: "Excoriation disorder" }, dxId: "excoriation" },
      trich: { dx: "Trichotillomania (F63.3)", line: "Hair loss, repeated attempts to stop, distress or impairment.", points: ["Ask about trichophagia."], link: { ch: "ch06", sec: "s6-trich", label: "Trichotillomania" }, dxId: "trichotillomania" },
      bdd: { dx: "Body dysmorphic disorder (F45.22)", line: "Picking, plucking or checking to fix or inspect a perceived appearance flaw.", points: ["Not excoriation disorder or trichotillomania.", "Assess insight and suicide risk."], link: { ch: "ch06", sec: "s6-bdd-ddx", label: "BDD differential" }, dxId: "bdd" },
      ocd: { dx: "Obsessive-compulsive disorder (F42.2)", line: "Rituals or saving driven by obsessions (harm, contamination, symmetry, incompleteness).", points: ["Specify insight and whether tic-related."], link: { ch: "ch06", sec: "s6-ocd-criteria", label: "OCD criteria" }, dxId: "ocd" },
      hoard: { dx: "Hoarding disorder (F42.3)", line: "If clutter compromises active living areas and causes distress or impairment.", points: ["Specify excessive acquisition and insight."], link: { ch: "ch06", sec: "s6-hoard-criteria", label: "Hoarding criteria" }, dxId: "hoarding" },
      psychosis: { label: "Not an OCRD", dx: "A psychotic disorder", line: "Picking or pulling in response to a delusion (parasitosis) or hallucination (formication).", points: ["Check for stimulant use, which can cause formication."], link: { ch: "ch06", sec: "s6-skin-ddx", label: "Excoriation differential" } },
      nssi: { label: "Not an OCRD", dx: "Nonsuicidal self-injury", line: "Skin damage intended to hurt oneself or relieve emotional states.", points: ["Assess suicide risk and borderline personality features."], link: { ch: "ch06", sec: "s6-skin-ddx", label: "Excoriation differential" } },
      substance: { dx: "Substance/medication-induced OCRD", line: "E.g., F14.288 severe cocaine use disorder with cocaine-induced OCRD, with onset during intoxication.", points: ["Codes end in .x88."], link: { ch: "ch06", sec: "s6-substance", label: "Substance-induced OCRD" }, dxId: "substance-induced-ocrd" },
      medicalskin: { label: "Not an OCRD", dx: "A dermatological condition", line: "Scratching from scabies or another itchy skin disease is not excoriation disorder.", points: ["Excoriation disorder can still develop if picking becomes independent of the skin condition."], link: { ch: "ch06", sec: "s6-skin-ddx", label: "Excoriation differential" } },
      factitious: { label: "Consider", dx: "Factitious disorder or malingering", line: "Self-induced lesions with deception: factitious disorder without external rewards, malingering with them (dermatitis artefacta).", points: ["Without deception and with attempts to stop, excoriation disorder can be diagnosed."], link: { ch: "ch06", sec: "s6-skin-ddx", label: "Excoriation differential" } },
      stereotypy: { label: "Consider", dx: "Stereotypic movement disorder", line: "Hair pulling, head banging or biting in a child with intellectual disability or autism, when frustrated, angry or excited.", points: ["Onset is in the early developmental period."], link: { ch: "ch06", sec: "s6-trich-ddx", label: "Trichotillomania differential" } },
      illness: { label: "Consider", dx: "Illness anxiety disorder", line: "Repeated body checking for signs of disease, driven by fear of having a serious illness.", points: ["Covered in Chapter 9."], link: { ch: "ch06", sec: "s6-medical", label: "Differential" } },
      addictive: { label: "Not an OCRD", dx: "An addictive or impulse-control disorder", line: "“Compulsive” gambling, shopping, sex or substance use is rewarding; the person resists only because of consequences.", points: ["Gambling disorder and substance use disorders are in Chapter 16."], link: { ch: "ch06", sec: "s6-ocd-ddx", label: "OCD differential" } },
      ocpd: { label: "Consider", dx: "Obsessive-compulsive personality disorder", line: "Pervasive perfectionism, orderliness and control without obsessions or compulsions.", points: ["OCD and OCPD can both be diagnosed."], link: { ch: "ch06", sec: "s6-ocd-ddx", label: "OCD vs OCPD" } },
      autism: { label: "Consider", dx: "Autism spectrum disorder", line: "Restricted, repetitive patterns of behavior with social communication deficits from early childhood.", points: ["OCD is diagnosed only if true obsessions drive the behavior."], link: { ch: "ch06", sec: "s6-ocd-ddx", label: "OCD differential" } },
      depression: { label: "Not hoarding disorder", dx: "A major depressive episode", line: "Clutter from fatigue, low energy or psychomotor retardation, without difficulty discarding.", points: ["Treat the depression and reassess."], link: { ch: "ch06", sec: "s6-hoard-ddx", label: "Hoarding differential" }, dxId: "mdd" },
      organic: { label: "Not hoarding disorder", dx: "Neurocognitive disorder or brain injury", line: "Accumulation after frontotemporal degeneration, Alzheimer’s disease, ventromedial prefrontal injury or Prader-Willi syndrome.", points: ["OCRD due to another medical condition may apply if hoarding is prominent."], link: { ch: "ch06", sec: "s6-hoard-ddx", label: "Hoarding differential" }, dxId: "ocrd-due-to-amc" },
      collect: { label: "No disorder", dx: "Normative collecting", line: "Organized and selective, without clutter of living areas, distress or impairment.", points: [], link: { ch: "ch06", sec: "s6-hoard-criteria", label: "Hoarding criteria" } }
    }
  }
]);
