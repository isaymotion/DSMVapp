/* Chapter 6 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var HRT = "**Habit reversal training** (awareness training, a competing response, stimulus control) or its comprehensive behavioral form (ComB) is first-line.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "ocd",
      ask: [
        ["A Obsessions", "“Do you have thoughts, images or urges that keep coming back even though you don’t want them, and that upset you?”", "Normalize: “Many people have thoughts that seem strange or upsetting; I won’t judge you.” Patients often hide taboo thoughts."],
        ["Dimensions", "“Worries about germs or dirt? About harming someone, or something bad happening if you don’t check? About things being even or just right? Thoughts about sex, violence or religion that feel wrong?”", "Ask about all four dimensions."],
        ["A Compulsions", "“Do you feel you have to wash, check, count, repeat, arrange or say something in your head until it feels right?”"],
        ["Neutralizing", "“What do you do to make the thought go away? What would happen if you didn’t?”"],
        ["B Time", "“How much time do these take on a typical day? What do they stop you doing?”", "More than an hour a day, or distress or impairment."],
        ["Insight", "“How likely is it that something bad would really happen if you didn’t do it?”", "Good or fair, poor, or absent insight."],
        ["Tics", "“Have you ever had blinking, sniffing, throat clearing or other movements you couldn’t control?”", "Tic-related specifier."],
        ["Family", "“Does your family help with the rituals or answer the same questions again and again?”", "Accommodation."],
        ["Safety", "“Have the thoughts ever made you feel hopeless or think about ending your life?”", "Suicide risk is elevated, especially with taboo thoughts and depression."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT with exposure and response prevention (ERP)**, and/or an [[stahl:c/ch07/guide/s7-ssri|SSRI]], usually at **higher doses** and for longer trials (8–12 weeks) than for depression. FDA-approved: [[stahl:drugs/fluoxetine|fluoxetine]], [[stahl:drugs/fluvoxamine|fluvoxamine]], [[stahl:drugs/paroxetine|paroxetine]], [[stahl:drugs/sertraline|sertraline]] and [[stahl:drugs/clomipramine|clomipramine]].",
        points: [
          "Clomipramine is effective but has more side effects (anticholinergic, seizures at high doses, cardiac); usually used after SSRIs.",
          "Partial response: augment with a low-dose antipsychotic, best evidence for [[stahl:drugs/risperidone|risperidone]] and [[stahl:drugs/aripiprazole|aripiprazole]], especially with tics; or add ERP if not already used.",
          "Refractory OCD: **deep TMS** is FDA-cleared (2018); **deep brain stimulation** is available under a humanitarian device exemption; specialist programs.",
          "Children: ERP with family involvement to reduce accommodation; sertraline, fluoxetine and fluvoxamine are approved for pediatric OCD.",
          "As of October 2026 there is no newly approved OCD drug; the glutamate modulator troriluzole failed its phase 3 trials and was dropped."
        ],
        stahl: [["Obsessive-compulsive and related disorders", "c/ch13/guide/s13-ocd"], ["Ventral and dorsal loops", "c/ch13/guide/s13-circuits"], ["SSRIs", "c/ch07/guide/s7-ssri"], ["Tricyclics", "c/ch07/guide/s7-tca"]]
      }
    },
    {
      id: "bdd",
      ask: [
        ["A Preoccupation", "“Are you worried about how you look? Which part? How much time a day do you spend thinking about it?”", "Patients are often ashamed: ask directly."],
        ["B Behaviors", "“Do you check mirrors, compare yourself with others, take many selfies, groom, cover it up or ask others how you look?”"],
        ["Insight", "“Do you think it really looks the way you see it, or could your view be distorted?”", "One-third or more are completely convinced."],
        ["Muscle dysmorphia", "To men: “Do you worry you are too small or not muscular enough? Any supplements or steroids?”"],
        ["Cosmetic treatment", "“Have you had or asked for cosmetic procedures? Did they help?”"],
        ["D Eating", "“Is the worry mainly about your weight or being fat?”", "If an eating disorder explains it, it is not BDD."],
        ["Safety", "“Has it ever made you feel life isn’t worth living?”", "Suicidality is high."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT for BDD** (exposure, response prevention, perceptual retraining, cognitive work) and/or an [[stahl:c/ch07/guide/s7-ssri|SSRI]] at relatively **high doses**; SSRIs work even with delusional insight.",
        points: [
          "Antipsychotic augmentation has weak evidence; consider [[stahl:drugs/clomipramine|clomipramine]] if SSRIs fail.",
          "Avoid cosmetic and surgical procedures for BDD concerns: they rarely help and can worsen symptoms.",
          "Monitor suicide risk closely."
        ],
        stahl: [["Obsessive-compulsive and related disorders", "c/ch13/guide/s13-ocd"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "hoarding",
      ask: [
        ["A Discarding", "“How hard is it for you to throw things away, give them away or recycle them?”"],
        ["B Reasons", "“What goes through your mind when you try? What would happen if you threw it out?”", "Useful, valuable, sentimental → hoarding disorder; harm or contamination → OCD."],
        ["C Clutter", "“Can you use your kitchen, bed, bathroom and couch? Can you walk through the rooms?”", "Ask for photos; use a clutter image rating scale."],
        ["Acquisition", "“How often do you buy, pick up free things or bring things home you don’t need?”"],
        ["D Safety", "“Any fire risks, falls, pests, broken appliances, problems with neighbors or landlords?”"],
        ["Insight", "“Do you see the amount of things as a problem?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**CBT for hoarding** (motivational work, skills for organizing and decision-making, graded discarding and non-acquiring exposure), often delivered at home or in groups.",
        points: [
          "Medication evidence is limited; SSRIs are used mainly for comorbid depression or anxiety.",
          "Forced clean-outs without treatment lead to quick re-accumulation and great distress; coordinate with family, fire and housing services when safety demands.",
          "Screen for a neurocognitive disorder in older adults."
        ],
        stahl: [["Obsessive-compulsive and related disorders", "c/ch13/guide/s13-ocd"]]
      }
    },
    {
      id: "trichotillomania",
      ask: [
        ["A Pulling", "“Do you pull out hair from your scalp, eyebrows, eyelashes or elsewhere? How much hair loss has it caused?”"],
        ["B Stopping", "“Have you tried to stop or cut down? What happened?”"],
        ["Style", "“Do you pull on purpose to relieve tension, or find you’ve done it without noticing, while reading or on your phone?”", "Focused vs automatic."],
        ["Rituals", "“What do you do with the hair afterward? Do you ever bite or swallow it?”", "Trichophagia → trichobezoar."],
        ["E Purpose", "“Do you remove hair to make yourself look better or more even?”", "If so, consider BDD."]
      ],
      tx: {
        asOf: "October 2026",
        first: HRT,
        points: [
          "No FDA-approved medication. **N-acetylcysteine** has mixed trial evidence; SSRIs help mainly comorbid depression or anxiety.",
          "Treat complications: refer if abdominal symptoms suggest a trichobezoar."
        ],
        stahl: [["Obsessive-compulsive and related disorders", "c/ch13/guide/s13-ocd"]]
      }
    },
    {
      id: "excoriation",
      ask: [
        ["A Picking", "“Do you pick, squeeze or scratch your skin? Where? Has it left marks, scars or infections?”"],
        ["B Stopping", "“Have you tried to stop? What happened?”"],
        ["Style", "“Do you pick to relieve tension, or without realizing?”"],
        ["E Purpose", "“Is it to make your skin look better? To hurt yourself? Because you feel something crawling under your skin?”", "BDD, self-injury or psychosis."],
        ["D Causes", "“Any skin conditions? Do you use stimulants, cocaine or methamphetamine?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: HRT,
        points: ["No FDA-approved medication; N-acetylcysteine and SSRIs have limited or mixed evidence.", "Treat infections and the underlying skin condition."],
        stahl: [["Obsessive-compulsive and related disorders", "c/ch13/guide/s13-ocd"]]
      }
    },
    {
      id: "substance-induced-ocrd",
      ask: [
        ["Timeline", "“Did this start after you began using stimulants, cocaine or a new medicine?”"],
        ["Medications", "“Are you taking medicines for Parkinson’s disease or restless legs, such as ropinirole or pramipexole?”", "Dopamine agonists also cause impulse-control problems."],
        ["Persistence", "After stopping: “Have the behaviors settled?”", "Persistence about 1 month suggests a primary disorder."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Stop or reduce the substance or medication; treat the substance use disorder.",
        points: ["With dopamine agonists, reduce the dose or switch, in coordination with the neurologist."],
        stahl: [["Stimulants", "c/ch13/guide/s13-stimulants"]]
      }
    },
    {
      id: "ocrd-due-to-amc",
      ask: [
        ["Onset", "“Did this start suddenly? Was there an illness, sore throat or fever beforehand?”", "Acute onset in a child: think Sydenham’s chorea or PANS."],
        ["Neurological", "Look for chorea, tics, other movements, focal signs; ask about strokes or head injury."],
        ["Workup", "Throat culture and antistreptolysin O titer, cardiac assessment, brain imaging in late or atypical onset."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat the underlying condition (e.g., antibiotics and secondary prophylaxis for rheumatic fever).",
        points: ["Symptomatic treatment of OCD symptoms with CBT and SSRIs.", "PANS: specialist assessment; immunomodulatory treatments remain debated."],
        stahl: []
      }
    },
    {
      id: "other-specified-ocrd",
      tx: { asOf: "October 2026", first: "Treat by analogy with the nearest disorder: habit reversal for nail biting and other BFRBs; CBT and SSRIs for obsessional jealousy and olfactory reference disorder.", points: [], stahl: [] }
    },
    {
      id: "unspecified-ocrd",
      tx: { asOf: "October 2026", first: "Clarify the driver of the behavior, exclude substances and medical causes, and reassess.", points: [], stahl: [] }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "intrusive", title: "Unwanted thoughts or rituals",
      intro: "Ask whether the thoughts are **unwanted and resisted** (obsessions), what the person does to neutralize them, and how much time they take. Taboo thoughts are often hidden, so ask directly and without judgment.",
      ask: ["What thoughts or images keep coming back against your will?", "What do you do to make them go away?", "How long do these take each day?", "How sure are you that something bad would happen if you didn’t do it?", "Any tics, now or in the past?"],
      mustNotMiss: ["**Suicidal thoughts**, especially with taboo obsessions and depression.", "**Psychosis**: thought insertion or delusions beyond OCD content.", "**Sudden onset in a child** after infection (Sydenham’s chorea, PANS)."],
      helpers: ["ocd", "repetitive"],
      items: [
        { ch: "ch06", dx: "ocd", when: "Unwanted obsessions neutralized by compulsions, over an hour a day or impairing." },
        { ch: "ch06", dx: "bdd", when: "Thoughts and rituals focused only on appearance." },
        { ch: "ch06", dx: "other-specified-ocrd", when: "Nondelusional doubts about a partner’s fidelity, or about body odor." },
        { ch: "ch05", dx: "gad", when: "Worries about real-life problems, without rituals." },
        { ch: "ch04", dx: "mdd", when: "Mood-congruent rumination about failures and guilt." },
        { ch: "ch02", dx: "delusional-disorder", when: "Fixed beliefs without obsessions or compulsions." },
        { ch: "ch06", dx: "ocrd-due-to-amc", when: "Late or sudden onset with a neurological or infectious cause." }
      ]
    },
    {
      id: "appearance", title: "Preoccupied with appearance",
      intro: "Find out whether the flaw is visible, how much time the preoccupation takes, what the person does about it, and how convinced they are.",
      ask: ["Which part of your appearance worries you, and how much time a day do you spend on it?", "Do you check, compare, groom, cover up or ask for reassurance?", "Have you had cosmetic treatment?", "Is the worry about weight or being fat?", "Has it made you think life isn’t worth living?"],
      mustNotMiss: ["**Suicide risk** (high in BDD).", "An **eating disorder**.", "**Anabolic steroid** use in muscle dysmorphia."],
      helpers: ["ocd"],
      items: [
        { ch: "ch06", dx: "bdd", when: "Slight or unobservable flaws, repetitive behaviors, distress or impairment." },
        { ch: "ch06", dx: "other-specified-ocrd", when: "Clearly visible flaws, no repetitive behaviors, body odor, or koro." },
        { ch: "ch05", dx: "social-anxiety", when: "Fear of judgment for behaving awkwardly, not for looking ugly." },
        { ch: "ch10", name: "Anorexia or bulimia nervosa", when: "Concern about weight and shape." },
        { ch: "ch14", name: "Gender dysphoria", when: "Distress about sex characteristics." }
      ]
    },
    {
      id: "clutter", title: "Can’t throw things away; a cluttered home",
      intro: "Hoarding is rarely volunteered. Ask why items are kept, whether living spaces can be used, and whether there are safety risks.",
      ask: ["Can you use your kitchen, bed and couch?", "What happens when you try to throw something out?", "Do you keep acquiring things?", "Any fire risks, falls or pests?", "Any memory problems?"],
      mustNotMiss: ["**Fire and fall** risk, especially in older adults.", "**Neurocognitive disorder** with squalor.", "**Self-neglect** or animal neglect."],
      helpers: ["ocd", "repetitive"],
      items: [
        { ch: "ch06", dx: "hoarding", when: "Difficulty discarding items that feel useful or precious; cluttered living areas." },
        { ch: "ch06", dx: "ocd", when: "Saving to prevent harm or out of incompleteness; bizarre items." },
        { ch: "ch04", dx: "mdd", when: "Clutter from low energy, no trouble discarding." },
        { ch: "ch17", name: "Major neurocognitive disorder", when: "Accumulation and squalor after cognitive decline." },
        { ch: "ch02", dx: "schizophrenia", when: "Accumulation from delusions or negative symptoms." }
      ]
    },
    {
      id: "picking-pulling", title: "Picking skin, pulling hair or biting nails",
      intro: "Ask why the person does it. The same behavior belongs to different disorders depending on its purpose.",
      ask: ["Where, how often, and what damage has it caused?", "Have you tried to stop?", "Do you do it to look better, to hurt yourself, or because something is crawling under your skin?", "Do you swallow hair or skin?", "Any stimulant use or skin disease?"],
      mustNotMiss: ["**Infection** and scarring.", "**Trichobezoar** (abdominal pain, vomiting, anemia).", "**Self-harm** and suicide risk."],
      helpers: ["repetitive"],
      items: [
        { ch: "ch06", dx: "trichotillomania", when: "Hair pulling with hair loss and repeated attempts to stop." },
        { ch: "ch06", dx: "excoriation", when: "Skin picking with lesions and repeated attempts to stop." },
        { ch: "ch06", dx: "other-specified-ocrd", when: "Nail biting, lip biting or cheek chewing." },
        { ch: "ch06", dx: "bdd", when: "Picking or plucking to fix perceived appearance flaws." },
        { ch: "ch06", dx: "substance-induced-ocrd", when: "Only during stimulant or cocaine use." },
        { ch: "ch22", name: "Nonsuicidal self-injury", when: "Intent to hurt oneself." },
        { ch: "ch02", dx: "delusional-disorder", when: "Picking out “parasites” (somatic delusions)." }
      ]
    }
  ]);
})();
