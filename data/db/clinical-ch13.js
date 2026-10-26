/* Chapter 13 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   Treatment content checked October 2026: AUA ED guideline (2018); AUA/SMSNA ejaculation guideline (2020);
   Global Consensus on testosterone for women (2019); Cochrane CD003382 (2022); FDA flibanserin label expansion
   (December 2025); AAFP FP Essentials no. 547 (2024). */
(function () {
  var OPEN = "Ask in a **private, unhurried** setting, explain why you are asking, use plain words, and do not assume the partner’s gender or the type of sex.";
  var MEDS = "Review **every medication** (SSRIs, SNRIs, antipsychotics, benzodiazepines, lithium, anticonvulsants, antihypertensives, hormonal contraceptives, 5-α-reductase inhibitors, opioids) and **alcohol, nicotine and drugs**.";
  var SAFETY = "Screen for **depression and suicidal thoughts** (elevated in some groups, e.g., men with erectile disorder or early ejaculation and depression) and for **intimate partner violence**.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "male-hsdd",
      ask: [
        ["A Fantasies", "“How often do you have sexual thoughts or fantasies, on your own, without anything prompting them?”", "Both parts of Criterion A are needed."],
        ["A Desire", "“How often do you want to have sex, alone or with a partner? Has that changed?”"],
        ["A Receptivity", "“When your partner starts things, how do you usually respond?”", "Many men prefer the partner to initiate; judge receptivity, not only initiation."],
        ["A Context", "“Is the difference mainly that your partner wants sex more often than you do?”", "A desire discrepancy alone is not enough."],
        ["B Duration", "“When did this start? Was there anything going on then, such as job loss or money worries?”", "About 6 months, beyond a temporary reaction."],
        ["C Distress", "“How much does this bother you personally?”"],
        ["D Mood and body", "“How has your mood been? Any problems with erections? Any breast changes, headaches or vision problems?”", "Depression; erectile problems; hyperprolactinemia."],
        ["Identity", "“Have you always felt little or no sexual attraction? How do you see that?”", "Low desire explained by asexual identity is not diagnosed."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Treat what is treatable: **documented hypogonadism** (testosterone replacement), **hyperprolactinemia**, depression and offending medications; then **couples and sex therapy**. No drug is approved for low desire in men with normal hormones.",
        points: [
          OPEN,
          "Check **morning total testosterone** (repeat if low), **prolactin** and **TSH**.",
          MEDS,
          "Address erectile problems, which often feed low desire (p. 499).",
          SAFETY
        ],
        stahl: [["Prolactin", "c/ch05/guide/s5-prolactin"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "fsiad",
      ask: [
        ["A1 Interest", "“How interested are you in sex these days, compared with before?”"],
        ["A2 Fantasies", "“Do sexual thoughts or fantasies come to mind, or memories of good sexual experiences?”"],
        ["A3 Initiation", "“Who usually starts sex? When your partner does, how do you usually respond?”", "Consider the couple’s preferences about who initiates."],
        ["A4 Pleasure", "“During sex, how often do you feel excited or enjoy it?”", "Needs most encounters (about 75%–100%)."],
        ["A5 Cues", "“Do things like a touch, a romantic scene or something you read ever spark interest?”", "Responsive desire."],
        ["A6 Sensations", "“During sex, do you notice the usual body and genital feelings, such as warmth, tingling or wetness?”", "Self-report is enough."],
        ["Distress", "“How much does this bother you, apart from how your partner feels?”"],
        ["Context", "“How are things in the relationship? Do you ever feel unsafe or pressured? Is there any pain with sex?”", "Partner violence excludes the diagnosis; pain may cause low desire."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Sex therapy, CBT and mindfulness-based approaches**, with education and couples work. For hypoactive sexual desire, **flibanserin** (daily at bedtime; premenopausal women and, since December 2025, postmenopausal women under 65) or **bremelanotide** (injection before sex; premenopausal) where available; **transdermal testosterone** for postmenopausal women (Global Consensus 2019).",
        points: [
          OPEN,
          "Treat **depression, thyroid disease, pain and vaginal dryness**; consider stress, fatigue and relationship factors.",
          MEDS + " If an SSRI is the cause, consider [[stahl:drugs/bupropion|bupropion]] augmentation or a switch.",
          "Flibanserin: warnings about **alcohol** with low blood pressure and fainting; stop after 8 weeks if no benefit.",
          SAFETY
        ],
        stahl: [["Bupropion", "drugs/bupropion"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "erectile-disorder",
      ask: [
        ["A Symptoms", "“Is the trouble getting an erection, keeping it, or it not being firm enough?”", "One of three is enough."],
        ["A Frequency", "“Out of every 4 times you try, how many times does this happen?”", "75%–100% of occasions."],
        ["Situational", "“Does it happen with every partner and with masturbation? Do you wake with erections?”", "Preserved morning or nocturnal erections suggest a psychological cause."],
        ["Onset", "“Did it start suddenly or gradually? What was happening in your life then?”", "Sudden onset after a stressor points to psychological factors."],
        ["B Duration", "“How long has this been going on?”"],
        ["C Distress", "“How much does it bother you?”"],
        ["Medical", "“Do you smoke? Any diabetes, heart problems, high blood pressure or cholesterol, prostate surgery or urinary symptoms?”", "Erectile disorder over 40 predicts coronary disease."],
        ["Mood", "“How has your mood been since this started?”", "Depression risk is highest in the first year."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**PDE5 inhibitors** (sildenafil, tadalafil, vardenafil, avanafil) are first-line oral treatment, **never with nitrates**; combine with **psychosexual therapy** for performance anxiety and relationship factors (AUA 2018). Second-line: vacuum devices, intraurethral or intracavernosal **alprostadil**; then penile prosthesis.",
        points: [
          "Screen **cardiovascular risk**: glucose, lipids, blood pressure, smoking (p. 484).",
          "Check **testosterone** when desire is low, in diabetes, or after PDE5 failure.",
          MEDS,
          "Lifestyle: stop smoking, exercise, weight loss.",
          SAFETY
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["Prolactin", "c/ch05/guide/s5-prolactin"]]
      }
    },
    {
      id: "delayed-ejaculation",
      ask: [
        ["A Pattern", "“With a partner, how long does it take to ejaculate, if at all? How often does that happen?”", "Partnered sex; 75%–100% of occasions."],
        ["A Wish", "“Would you like it to happen sooner?”", "The delay must be unwanted."],
        ["Situational", "“Can you ejaculate when you masturbate? How do you usually masturbate, and how often?”", "Idiosyncratic or very frequent masturbation is associated."],
        ["Orgasm vs ejaculation", "“Is the problem the ejaculation itself, or the pleasure of the orgasm?”", "Normal ejaculation with reduced pleasure is other specified."],
        ["Fertility", "“Are you trying to have a baby?”", "Often found during a fertility work-up."],
        ["Medical", "“Any diabetes, nerve problems, prostate or pelvic surgery? Do you take tamsulosin or an antidepressant?”"],
        ["C Distress", "“How much does this bother you, apart from your partner?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**No drug is approved.** Reduce or switch **serotonergic** drugs; **sex therapy** (changing masturbation patterns, aligning fantasy and partnered sex, reducing performance pressure); treat hypogonadism and depression.",
        points: [
          MEDS,
          "If an antidepressant is needed, consider [[stahl:drugs/bupropion|bupropion]] or [[stahl:drugs/mirtazapine|mirtazapine]], which have lower rates of sexual effects (p. 507).",
          "Refer to urology for **retrograde ejaculation** or **anejaculation** and fertility options.",
          SAFETY
        ],
        stahl: [["Bupropion", "drugs/bupropion"], ["Mirtazapine", "drugs/mirtazapine"]]
      }
    },
    {
      id: "premature-ejaculation",
      ask: [
        ["A Latency", "“From penetration, about how long until you ejaculate? Under a minute?”", "His estimate is enough."],
        ["A Control", "“Does it happen before you want it to? Do you feel any control?”"],
        ["B Frequency", "“How often does this happen, and since when?”", "75%–100% of occasions for at least 6 months."],
        ["Onset", "“Has it always been like this, or did it start after a period of lasting longer?”", "Acquired: look for thyroid disease, prostatitis, drug withdrawal."],
        ["Context", "“Is it only with a new partner or the first time with someone?”", "Episodic early ejaculation is not a disorder."],
        ["Erections", "“Do you rush because you worry about losing your erection?”", "Erectile problems often coexist."],
        ["Anxiety", "“Do you get anxious in social situations or generally?”", "Lifelong PE is linked to social anxiety."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Behavioral methods** (stop–start, squeeze) plus **daily SSRIs** ([[stahl:drugs/paroxetine|paroxetine]], [[stahl:drugs/sertraline|sertraline]], [[stahl:drugs/fluoxetine|fluoxetine]]) or [[stahl:drugs/clomipramine|clomipramine]], on-demand **dapoxetine** where approved, or **topical anesthetics** (AUA/SMSNA 2020). None is FDA-approved for PE; combined behavioral and drug treatment may work best.",
        points: [
          "Treat coexisting **erectile disorder** first if he rushes to ejaculate before losing the erection.",
          "Acquired PE: check **thyroid**, **prostatitis** and recent **opioid** discontinuation.",
          "Warn about SSRI side effects and discontinuation symptoms.",
          SAFETY
        ],
        stahl: [["Paroxetine", "drugs/paroxetine"], ["Clomipramine", "drugs/clomipramine"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "female-orgasmic",
      ask: [
        ["A Orgasm", "“How often do you reach orgasm during sex? Does it take much longer than you would like, or feel much weaker than before?”", "75%–100% of occasions."],
        ["Stimulation", "“Do you reach orgasm with clitoral touching, alone or with a partner? Does your partner know what works for you?”", "Orgasm only with clitoral stimulation does not count; check stimulation is adequate."],
        ["Never", "“Have you ever had an orgasm, in any situation?”", "Specifier."],
        ["B Duration", "“How long has this been a problem?”"],
        ["C Distress", "“How much does this bother you?”", "Many women are satisfied despite rare orgasm."],
        ["Medications", "“Did this start after any new medication, such as an antidepressant?”", "SSRIs delay or block orgasm."],
        ["Context", "“How is the relationship? Do you feel safe? Any vaginal dryness or pain?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Directed masturbation** (the best-supported approach), **sensate focus**, CBT and couples work; education about effective stimulation.",
        points: [
          OPEN,
          "If an SSRI is the cause: wait, lower the dose, switch to [[stahl:drugs/bupropion|bupropion]], [[stahl:drugs/mirtazapine|mirtazapine]] or [[stahl:drugs/vortioxetine|vortioxetine]], or add bupropion.",
          "Treat **vulvovaginal atrophy** and low interest or arousal.",
          SAFETY
        ],
        stahl: [["Bupropion", "drugs/bupropion"], ["Vortioxetine", "drugs/vortioxetine"]]
      }
    },
    {
      id: "gppd",
      ask: [
        ["A1 Penetration", "“Can you have vaginal penetration at all: intercourse, a tampon, a speculum examination?”"],
        ["A2 Pain", "“Where is the pain: at the entrance or deep inside? What does it feel like? Does it happen only with touch, or on its own too? Does it linger afterward?”", "Superficial vs deep; provoked vs spontaneous."],
        ["A3 Fear", "“Do you feel afraid or anxious before or during attempts at penetration?”"],
        ["A4 Tension", "“Do you notice your muscles tightening when penetration is tried?”"],
        ["Onset", "“Was there ever a time when penetration was pain-free and comfortable?”", "If yes, acquired."],
        ["History", "“Any vaginal infections, endometriosis, skin conditions, childbirth, or menopause symptoms such as dryness?”"],
        ["Safety", "“Have you ever been forced or hurt sexually? Do you feel safe with your partner?”", "Abuse history is more common; partner violence excludes."],
        ["Partner", "“How does your partner respond when you have pain?”", "Solicitous, negative or facilitative responses."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Pelvic floor physical therapy** and **CBT** (first line for vulvodynia, AAFP 2024), with graded exposure and **vaginal dilators**, couples work and treatment of any medical cause.",
        points: [
          "Gynecological assessment for **lichen sclerosus, endometriosis, infection, genitourinary syndrome of menopause** (local estrogen) and vulvodynia.",
          "Approach examinations gently, with the woman in control; treat fear like a phobia.",
          "Treat comorbid **anxiety, depression** and chronic pain.",
          SAFETY
        ],
        stahl: []
      }
    },
    {
      id: "substance-sexual",
      ask: [
        ["B Timing", "“When did the sexual problem start compared with when you started, changed or stopped the medicine or drug?”", "During or soon after; onset can be as early as 8 days with antidepressants."],
        ["C Before", "“Did you have this problem before you started it?”", "If so, consider an independent dysfunction."],
        ["C Persistence", "“If you stopped it, how long did the problem last afterward?”", "More than about a month suggests an independent disorder."],
        ["Rechallenge", "“Did it come back when you restarted the same drug?”", "Clinches the diagnosis."],
        ["Use disorder", "“How much do you drink or use? Have you tried to cut down?”", "Sets the 4th character: 1, 2 or 9."],
        ["Severity", "“Out of every 4 times you have sex, how many times does this happen?”", "25%–50% mild, 50%–75% moderate, 75%+ severe."],
        ["Adherence", "“Have you skipped or stopped your medicine because of this?”", "Common, and a cause of treatment failure."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Ask early and often.** Options: watchful waiting, **dose reduction**, switching to an agent with fewer sexual effects ([[stahl:drugs/bupropion|bupropion]], [[stahl:drugs/mirtazapine|mirtazapine]], [[stahl:drugs/vortioxetine|vortioxetine]], [[stahl:drugs/vilazodone|vilazodone]]), or adding **sildenafil** (men) or **bupropion** (women) (Cochrane 2022).",
        points: [
          "Antipsychotics: switch to a **prolactin-sparing** agent such as [[stahl:drugs/aripiprazole|aripiprazole]], or check and treat **hyperprolactinemia**.",
          "Opioid treatment: sexual problems are seldom reported with [[stahl:drugs/buprenorphine|buprenorphine]] compared with [[stahl:drugs/methadone|methadone]] (p. 508).",
          "Avoid sudden stops that cause withdrawal; plan changes with the patient.",
          "SSRI-related dysfunction can **persist after stopping** (p. 508); EMA labels for SSRIs and SNRIs mention it.",
          SAFETY
        ],
        stahl: [["SSRIs", "c/ch07/guide/s7-ssri"], ["Vortioxetine", "c/ch07/guide/s7-vortioxetine"], ["Bupropion", "c/ch07/guide/s7-ndri"], ["Prolactin", "c/ch05/guide/s5-prolactin"]]
      }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "sexual-problems", title: "Sexual problems: low desire, erections or orgasm",
      intro: "Name the **phase** (desire, arousal, orgasm or ejaculation), then check the shared frame: **most occasions**, about **6 months**, **distress** in the person. Rule out a nonsexual mental disorder, a **substance or medication**, a **medical condition** and **severe relationship distress** before diagnosing. Several dysfunctions can coexist.",
      ask: ["Which part is the problem: wanting sex, getting aroused or erect, reaching orgasm or ejaculating?", "How often, and for how long?", "Always, or only with certain partners, situations or kinds of stimulation?", "Since first sexual experiences, or after a period of normal function?", "How much does it bother you?", "Any new medicines, alcohol or drugs?", "Diabetes, heart disease, surgery, hormone problems?", "Mood, anxiety, the relationship, and safety at home?"],
      mustNotMiss: ["**Depression** and suicidal thoughts.", "**Medication side effects** leading to stopping treatment.", "**Cardiovascular disease** behind erectile problems in men over 40.", "**Hypogonadism, hyperprolactinemia** or thyroid disease.", "**Intimate partner violence**."],
      helpers: ["sexual-cause", "sexual"],
      items: [
        { ch: "ch13", dx: "male-hsdd", when: "Both low desire and few sexual thoughts or fantasies, about 6 months." },
        { ch: "ch13", dx: "fsiad", when: "3 of 6 indicators of low interest or arousal." },
        { ch: "ch13", dx: "erectile-disorder", when: "Trouble getting or keeping an erection, or less rigidity, on most occasions." },
        { ch: "ch13", dx: "premature-ejaculation", when: "Ejaculation within about 1 minute of penetration, before wished." },
        { ch: "ch13", dx: "delayed-ejaculation", when: "Unwanted delay or absence of ejaculation with a partner." },
        { ch: "ch13", dx: "female-orgasmic", when: "Delayed, infrequent, absent or weak orgasm despite adequate stimulation." },
        { ch: "ch13", dx: "substance-sexual", when: "Began with a drug, medication or withdrawal." },
        { ch: "ch13", dx: "other-specified-sexual", when: "Distressing but below a specific disorder’s threshold; record why." },
        { ch: "ch04", dx: "mdd", when: "Loss of interest in almost everything: diagnose depression alone if it explains the problem." }
      ]
    },
    {
      id: "painful-sex", title: "Pain or difficulty with penetration",
      intro: "Assess all **four dimensions**: difficulty with penetration, pain (superficial or deep, provoked or spontaneous), fear of pain, and pelvic floor tightening. Arrange a **gentle gynecological assessment** for medical causes, and ask about **abuse and safety**.",
      ask: ["Can you use tampons or have a speculum examination?", "Where is the pain, and what is it like?", "Does it happen only with touch or also on its own?", "Fear before or during attempts? Muscles tightening?", "Was penetration ever comfortable?", "Infections, endometriosis, skin conditions, childbirth, menopause?", "Has anyone hurt you sexually? Do you feel safe now?"],
      mustNotMiss: ["**Medical causes**: lichen sclerosus, endometriosis, pelvic inflammatory disease, genitourinary syndrome of menopause.", "**Sexual abuse** history and current **partner violence**.", "Coexisting **depression and anxiety**."],
      helpers: ["sexual"],
      items: [
        { ch: "ch13", dx: "gppd", when: "Persistent difficulty with 1 of 4 dimensions for about 6 months, with distress." },
        { ch: "ch13", dx: "fsiad", when: "Low desire often follows pain; both can be diagnosed." },
        { ch: "ch13", dx: "other-specified-sexual", when: "Genito-pelvic pain in a man." },
        { ch: "ch09", dx: "ssd", when: "Excessive thoughts, worry or time devoted to the pain; may coexist." },
        { ch: "ch05", dx: "specific-phobia", when: "Fear of penetration out of step with pain; may coexist." }
      ]
    },
    {
      id: "sexual-side-effects", title: "Sexual side effects of a medication or drug",
      intro: "Link the timing: onset **during or soon after** starting, changing or stopping the drug, clearing within **days to weeks** of stopping, and ideally **recurring on rechallenge**. Code medications without a class as **F19.981**; for substances, the **4th character** reflects any use disorder.",
      ask: ["What changed, and when, relative to the drug?", "Was sexual function normal before?", "What happened when the dose was lowered or the drug stopped?", "Has the patient skipped doses because of it?", "Alcohol, opioids, stimulants, sedatives?", "Out of every 4 occasions, how many are affected?"],
      mustNotMiss: ["**Stopping medication** without telling anyone.", "**Relapse** of the underlying illness.", "**Hyperprolactinemia** on antipsychotics.", "Sexual problems from the **illness itself** (depression, psychosis)."],
      helpers: ["sexual-cause"],
      items: [
        { ch: "ch13", dx: "substance-sexual", when: "Onset with the drug; not before it, and not persisting beyond about a month after stopping." },
        { ch: "ch04", dx: "mdd", when: "Low desire and pleasure from the depression itself, before treatment." },
        { ch: "ch16", dx: "opioid-use", when: "Common on methadone and heroin; early ejaculation after stopping opioids." },
        { ch: "ch16", dx: "alcohol-use", when: "Erectile problems with chronic heavy drinking." }
      ]
    },
    {
      id: "anhedonia", title: "Loss of interest or pleasure",
      items: [
        { ch: "ch13", dx: "fsiad", when: "Loss of interest confined to sex, with other pleasures intact (3 of 6 indicators)." },
        { ch: "ch13", dx: "male-hsdd", when: "Low sexual desire and fantasies only, with other interests intact." }
      ]
    },
    {
      id: "after-substance", title: "Mood change after a new medicine or drug",
      items: [
        { ch: "ch13", dx: "substance-sexual", when: "Sexual side effects that began with the drug; a common reason for stopping antidepressants." }
      ]
    }
  ]);
})();
