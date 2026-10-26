/* Disorder library: Chapter 13, Sexual Dysfunctions (DSM-5-TR pp. 477–510).
   Codes as printed in the 2022 manual; checked against ICD-10-CM through FY2027 (October 1, 2026): unchanged.
   Relationship distress is a Z code (Z63.0, p. 478), not a sexual dysfunction; it has no entry here. */
(function () {
  var SRC = "ICD-10-CM FY2025–FY2027 code tables; APA DSM-5-TR coding updates through September 2025";
  var NC = "Unchanged through October 2026";
  function upd(text) { return [{ kind: "post", year: "2026", title: "Codes checked through October 2026", source: SRC, text: text }]; }

  SP.disorders = (SP.disorders || []).concat([
    {
      id: "male-hsdd", ch: "ch13", sec: "s13-mhsdd", pages: "498–501", critPages: "498–499",
      name: "Male hypoactive sexual desire disorder", code: "F52.0",
      codes: [["F52.0", "Male hypoactive sexual desire disorder", NC]],
      aka: ["male HSDD", "MHSDD", "low libido in men", "low sexual desire (male)", "hypoactive sexual desire disorder"],
      essence: "For about **6 months**, **both** deficient or absent **sexual/erotic thoughts or fantasies** **and** low **desire for sexual activity**, judged by the **clinician** with **age and life context** in mind, causing **distress**; a **desire discrepancy** with a partner is not enough, and low desire explained by **asexual** identity is not diagnosed (pp. 498–501).",
      duration: "≈6 months (guards against a temporary reaction to stressors, p. 499)",
      functioning: "Distress is required (not impairment); men may stop initiating and respond little when a partner initiates (p. 499)",
      mood: "Mood and anxiety symptoms strongly predict low desire; depression is a common comorbidity and may explain it instead (pp. 500–501)",
      criteria: [
        ["A", "Persistent or recurrent deficiency or absence of both sexual/erotic thoughts or fantasies and desire for sexual activity. The clinician makes the judgment, weighing age and the general and sociocultural context."],
        ["B", "Present for at least approximately 6 months."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired", "Generalized / situational", "Severity by distress: mild, moderate, severe"],
      epi: [["Representative samples", "3%–17% (p. 500)"], ["By age", "16–24: 3%–14%; 60–74: 16%–28%"], ["Persistent ≥6 months", "About 6%"], ["With clinically significant distress", "Under 2%"], ["Sought help (any sexual problem, past year)", "10.5%"], ["Regional range, ages 40–80", "12.5% (Northern Europe) to 28% (Southeast Asia)"]],
      risk: ["Mood and anxiety symptoms; up to half of men with past psychiatric symptoms report moderate or severe loss of desire vs 15% without (p. 500).", "Restrictive or conservative sexual beliefs; few erotic thoughts; worry about erections and low erectile confidence.", "Alcohol use; strained relationships, less attraction to the partner, long-term relationships, sexual boredom, work stress.", "Hyperprolactinemia and hypogonadism; age. Testosterone may matter only below a threshold (p. 500)."],
      differential: [
        { id: "mdd", how: "Loss of interest across nearly all activities can explain low desire: then diagnose depression only (p. 501)." },
        { id: "substance-sexual", how: "Low desire starts with a substance or medication and fades when it is stopped or reduced (p. 501)." },
        { name: "Another medical condition", how: "Hypogonadism, diabetes, thyroid disease or CNS disease better explains it: no MHSDD (p. 501)." },
        { name: "Relationship distress or major stressors", how: "Severe relationship distress or significant stressors explain the loss of desire: use a Z code instead (pp. 478, 501)." },
        { name: "Desire discrepancy", how: "Simply wanting sex less often than the partner does not qualify (p. 499)." },
        { name: "Asexual self-identification", how: "Low desire explained by identifying as asexual is not a disorder (p. 501)." },
        { id: "erectile-disorder", how: "Up to half of men with low desire also have erectile difficulty; both can be diagnosed (p. 501)." },
        { id: "premature-ejaculation", how: "Slightly fewer have early ejaculation; another dysfunction does not rule out MHSDD (p. 501)." },
        { id: "fsiad", how: "In men desire and arousal stay separate diagnoses; in women they merge into FSIAD (p. 501)." }
      ],
      pearls: ["Needs BOTH low desire AND deficient fantasies: one alone is not enough.", "No 75%–100% rule: “persistently or recurrently” instead.", "Rarely the only sexual diagnosis: look for ED, DE and PE.", "Low desire reported more by gay (19%) than heterosexual (9%) men (p. 501).", "If a stressor such as job loss lasts beyond 6 months with low desire, it is a judgment call (p. 499)."],
      cmp: { symptoms: "Deficient sexual thoughts/fantasies AND low desire for sex", exclusions: "Nonsexual mental disorder, substance, medical condition, severe relationship distress; asexual identity; desire discrepancy", prevalence: "3%–17%; under 2% with distress", course: "Normative decline with age (about 5.2% at 27 to 18.5% at 50)" },
      clues: [["Core picture", "A 45-year-old with almost no sexual thoughts and no wish for sex for 9 months, bothered by it, not depressed, normal labs"], ["Duration rule", "≈6 months"], ["Code", "F52.0"]],
      updates: upd("**F52.0** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "fsiad", ch: "ch13", sec: "s13-fsiad", pages: "489–493", critPages: "489",
      name: "Female sexual interest/arousal disorder", code: "F52.22",
      codes: [["F52.22", "Female sexual interest/arousal disorder", NC]],
      aka: ["FSIAD", "female sexual arousal disorder", "hypoactive sexual desire disorder (female, older term)", "low libido in women", "lack of responsive desire"],
      essence: "Absent or clearly reduced sexual interest/arousal shown by **at least 3 of 6** indicators (interest, fantasies, initiation/receptivity, pleasure, response to cues, sensations) for about **6 months**, with **distress**; a **desire discrepancy** alone does not count, and lifelong low desire explained by **asexual** identity is not diagnosed (pp. 489–490).",
      duration: "≈6 months; judgment allowed when the exact duration is unclear (p. 490)",
      functioning: "Distress required; linked to lower relationship satisfaction (p. 492)",
      mood: "Mood disorders and chronic stress are common associated features; MDD with pervasive anhedonia may explain it instead (pp. 490, 492)",
      criteria: [
        ["A", "Lack of, or clearly reduced, sexual interest/arousal with ≥3 of: (1) little or no interest in sexual activity; (2) few or no sexual/erotic thoughts or fantasies; (3) little or no initiation, and usually unreceptive to a partner’s initiation; (4) little or no excitement/pleasure during sex on about 75%–100% of encounters; (5) little or no interest/arousal in response to any internal or external erotic cues (written, verbal, visual); (6) little or no genital or nongenital sensation during sex on about 75%–100% of encounters."],
        ["B", "Present for at least approximately 6 months."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress (e.g., partner violence) or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired (for A3, A4, A6, lifelong means since first sexual experiences)", "Generalized / situational", "Severity by distress: mild, moderate, severe"],
      epi: [["Chronic low desire", "About 30% of women (p. 491)"], ["Of these, partner-related distress", "About half"], ["Of these, personal distress", "About a quarter"], ["Regional range of low desire", "26%–43% (p. 492)"], ["Age", "Low desire rises with age, but related distress falls"]],
      risk: ["Negative thoughts and attitudes about sex; past mental disorders; differences in sexual excitation vs inhibition (p. 491).", "Relationship problems, partner’s sexual function, early caregiver relationships and childhood stressors.", "Diabetes and thyroid dysfunction; strong genetic influence (p. 492).", "Vaginal photoplethysmography does not separate women with and without perceived low arousal (p. 492)."],
      differential: [
        { id: "mdd", how: "Markedly diminished interest in nearly all activities can fully account for it: no FSIAD (p. 492)." },
        { id: "substance-sexual", how: "Onset with a drug or medication, fading on stopping or dose cut: diagnose the induced form (p. 492)." },
        { name: "Another medical condition", how: "Almost entirely due to diabetes, endothelial disease, thyroid or CNS disease: no FSIAD (pp. 492–493)." },
        { name: "Relationship distress, partner violence or stressors", how: "Interpersonal or contextual factors explain it: no FSIAD; consider a Z code (p. 493)." },
        { name: "Desire discrepancy", how: "Wanting sex less than the partner is not sufficient (p. 489)." },
        { name: "Inadequate or absent sexual stimulation", how: "Care may help, but no diagnosis; brief adaptive dips after life events are also excluded (p. 493)." },
        { name: "Asexual self-identification", how: "Lifelong lack of desire explained by asexual identity: no diagnosis (p. 490)." },
        { id: "gppd", how: "Chronic genital pain can drive down desire; both can be diagnosed (p. 493)." },
        { id: "female-orgasmic", how: "Low interest and arousal can impair orgasm; another dysfunction does not exclude FSIAD (p. 493)." },
        { id: "male-hsdd", how: "The parallel desire diagnosis in men, where arousal (erection) is diagnosed separately (p. 492)." }
      ],
      pearls: ["3 of 6, and only A4 and A6 carry the 75%–100% rule.", "A1 alone was the old hypoactive sexual desire disorder.", "Women who lose desire are about 9 times more likely to lose arousal too (p. 490).", "Self-report of reduced sensations is enough; genital measures do not discriminate.", "Two proposed types: low sensitivity to cues vs overactive inhibition (p. 490)."],
      cmp: { symptoms: "≥3 of 6 desire and arousal indicators", exclusions: "Nonsexual mental disorder, substance, medical condition, relationship distress or partner violence; asexual identity; desire discrepancy; inadequate stimulation", prevalence: "About 30% chronic low desire; far fewer with distress", course: "Normative change across life; longer relationships: sex often begins without initial desire" },
      clues: [["Core picture", "A 38-year-old with no sexual interest, no fantasies and little pleasure during sex for 8 months, upset by it, relationship otherwise good"], ["Duration rule", "≈6 months, 3 of 6"], ["Code", "F52.22"]],
      updates: upd("**F52.22** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "erectile-disorder", ch: "ch13", sec: "s13-erectile", pages: "481–485", critPages: "481–482",
      name: "Erectile disorder", code: "F52.21",
      codes: [["F52.21", "Erectile disorder", NC]],
      aka: ["ED", "erectile dysfunction (descriptive term)", "impotence (older term)", "psychogenic erectile dysfunction"],
      essence: "On **about 75%–100%** of sexual occasions, at least **1 of 3**: marked difficulty **getting** an erection, **keeping** it until the end of sexual activity, or a marked drop in **rigidity**, for about **6 months**, with **distress**; erectile **dysfunction** is the broad descriptive term, erectile **disorder** the DSM diagnosis (pp. 481–482).",
      duration: "≈6 months",
      functioning: "Distress, fear and avoidance of sex that can block new relationships; may affect fertility (p. 484)",
      mood: "Low self-esteem, guilt, sense of failure, depressed mood; depression risk markedly higher, especially in the first year after onset (pp. 482, 485)",
      criteria: [
        ["A", "On almost all or all (≈75%–100%) sexual occasions, ≥1 of: (1) marked difficulty obtaining an erection; (2) marked difficulty maintaining it until sexual activity is complete; (3) marked decrease in erectile rigidity."],
        ["B", "Present for at least approximately 6 months."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired", "Generalized / situational", "Severity by distress: mild, moderate, severe"],
      epi: [["Men 40–80 (international)", "About 13%–21% (p. 483)"], ["Under 40", "Under 10%"], ["In their 60s", "About 20%–40%"], ["Over 70", "50%–75%; 80% at 70+ in an Australian study"], ["First sexual experience", "About 20% feared erectile problems; about 8% had problems that prevented penetration"]],
      risk: ["Age, smoking, little physical exercise, diabetes and decreased desire (p. 483).", "Acquired ED: diabetes and cardiovascular disease, usually persistent.", "Lifelong ED: psychological factors, often self-limiting or responsive to therapy.", "Surgery (e.g., TURP), hypogonadism, MS, diabetic neuropathy (pp. 482–483)."],
      differential: [
        { id: "mdd", how: "If severe depression better explains the erectile problem, ED is not diagnosed (p. 484)." },
        { name: "Normal erectile function with excessive expectations", how: "No disorder when function is normal but expectations are unrealistic (p. 484)." },
        { id: "substance-sexual", how: "Starts with a substance or medication and settles when it is stopped or reduced (p. 484)." },
        { name: "Another medical condition (especially vascular disease)", how: "Organic ED is usually generalized and gradual (except nerve injury such as SCI); consider it over 40–50 or with medical illness (p. 485)." },
        { id: "premature-ejaculation", how: "Common comorbidity; it can be hard to tell which came first (pp. 485, 504)." },
        { id: "male-hsdd", how: "Comorbid; persistent erectile failure can lead to loss of interest (pp. 485, 499)." },
        { id: "ptsd", how: "Erectile problems are common in PTSD; diagnose both only if ED is not explained by it (p. 485)." },
        { id: "fsiad", how: "Distressing arousal problems in women belong under FSIAD (p. 484)." }
      ],
      pearls: ["Situational, inconsistent, sudden onset after a stressor, or under 40: think psychological (p. 485).", "A medical disease known to cause ED does not prove it caused this ED (diabetic man under stress).", "Adequate REM erections on nocturnal penile tumescence testing suggest a psychological cause (p. 484).", "ED in men 40+ predicts coronary artery disease: check lipids, glucose, testosterone, thyroid.", "Distress about ED is lower in older men."],
      cmp: { symptoms: "Difficulty obtaining or maintaining erection, or reduced rigidity (1 of 3, 75%–100%)", exclusions: "Nonsexual mental disorder, substance, medical condition, relationship distress; normal function with excessive expectations", prevalence: "13%–21% of men 40–80; rises steeply after 50", course: "First-attempt failures usually remit; acquired ED persists in most" },
      clues: [["Core picture", "A 32-year-old who loses his erection with his new wife on most attempts for 7 months but wakes with erections"], ["Duration rule", "≈6 months, 75%–100% of occasions"], ["Code", "F52.21"]],
      updates: upd("**F52.21** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "delayed-ejaculation", ch: "ch13", sec: "s13-delayed", pages: "478–481", critPages: "478–479",
      name: "Delayed ejaculation", code: "F52.32",
      codes: [["F52.32", "Delayed ejaculation", NC]],
      aka: ["DE", "retarded ejaculation (older term)", "inhibited ejaculation", "male orgasmic disorder (ICD title)"],
      essence: "On **about 75%–100%** of **partnered** sexual occasions, and **without wanting the delay**, a marked **delay** in ejaculation or marked **infrequency or absence** of it, for about **6 months**, with **distress**; often he can ejaculate with **self-stimulation**, and dissatisfaction due **only to unrealistic expectations** is excluded (pp. 478–479).",
      duration: "≈6 months",
      functioning: "Distress in one or both partners; may surface during a fertility workup (p. 481)",
      mood: "Depression and relationship dissatisfaction are the main psychosocial contributors; may be more common in severe MDD (pp. 480–481)",
      criteria: [
        ["A", "On almost all or all (≈75%–100%) occasions of partnered sexual activity, and without desiring delay, either: (1) marked delay in ejaculation; or (2) marked infrequency or absence of ejaculation."],
        ["B", "Present for at least approximately 6 months."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired", "Generalized / situational", "Severity by distress: mild, moderate, severe"],
      epi: [["United States", "1%–5% (p. 480)"], ["International studies", "Up to 11%"], ["Age", "Rises with age"], ["Typical intravaginal latency (IELT)", "Most men about 4–10 minutes (p. 479)"]],
      risk: ["Depression and relationship dissatisfaction (p. 480).", "Radical prostatectomy, spinal cord injury, stroke, MS, pelvic surgery, severe diabetes, epilepsy, hormonal problems, sleep apnea.", "Alcohol abuse, cannabis; α-blockers such as tamsulosin, antihypertensives, SSRIs, antipsychotics.", "Very frequent masturbation, techniques a partner cannot reproduce, fantasy–reality gap (p. 479).", "Aging: slower sensory nerves, falling sex steroids and androgens."],
      differential: [
        { name: "Another medical condition, injury or its treatment", how: "Fully explained by a medical cause or treatment: no DE (p. 481)." },
        { name: "Retrograde ejaculation, anejaculation, duct obstruction", how: "Urological ejaculatory disorders with hormonal, neurological or anatomical causes (p. 481)." },
        { id: "substance-sexual", how: "Antidepressants, antipsychotics, α-sympathetic drugs, alcohol or opioids: diagnose the induced form instead (p. 481)." },
        { id: "other-specified-sexual", how: "Normal ejaculation with reduced pleasure (anhedonic ejaculation) is not DE (p. 481)." },
        { id: "female-orgasmic", how: "Distressing orgasm difficulty in women goes under FOD (p. 480)." },
        { id: "mdd", how: "DE may be more common in severe depression; diagnose DE only if not better explained by it (p. 481)." },
        { id: "premature-ejaculation", how: "The opposite problem: too early, within about 1 minute (p. 501)." }
      ],
      pearls: ["Partnered activity includes manual, oral, coital or anal stimulation.", "No agreed cutoff for “delay”: clinical judgment, history, age.", "Often it is the partner’s distress that brings him in.", "Ask directly: men rarely volunteer it, even at fertility clinics.", "Ejaculation (genital) and orgasm (subjective) usually, but not always, occur together."],
      cmp: { symptoms: "Marked delay, infrequency or absence of ejaculation in partnered sex (75%–100%)", exclusions: "Nonsexual mental disorder, substance, medical condition, relationship distress; unrealistic expectations alone", prevalence: "1%–5% (US); up to 11% internationally", course: "Lifelong from first experiences or acquired; rises with age" },
      clues: [["Core picture", "A 35-year-old who can ejaculate alone but rarely with his partner despite long intercourse, for a year, and the couple want a baby"], ["Duration rule", "≈6 months, 75%–100% of partnered occasions"], ["Code", "F52.32"]],
      updates: upd("**F52.32** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "premature-ejaculation", ch: "ch13", sec: "s13-premature", pages: "501–504", critPages: "501–502",
      name: "Premature (early) ejaculation", code: "F52.4",
      codes: [["F52.4", "Premature (early) ejaculation", NC]],
      aka: ["PE", "early ejaculation", "rapid ejaculation", "premature ejaculation"],
      essence: "A persistent pattern of ejaculating during partnered sex **within about 1 minute** of vaginal penetration and **before he wants to**, for **at least 6 months** and on **about 75%–100%** of occasions, with **distress**; severity is graded by **latency**, not distress (pp. 501–502).",
      duration: "At least 6 months (no “approximately”)",
      functioning: "Lower self-esteem, sense of lost control, partner dissatisfaction; single men more bothered; ejaculation before penetration can hinder conception (p. 504)",
      mood: "Apprehension about future encounters; with comorbid depression, raised suicidal thoughts or behavior (pp. 502, 504)",
      criteria: [
        ["A", "A persistent or recurrent pattern of ejaculating during partnered sexual activity within about 1 minute after vaginal penetration and before the man wishes. Note: can apply to nonvaginal activity, but no duration criteria exist for it."],
        ["B", "Present for at least 6 months and on almost all or all (≈75%–100%) occasions of sexual activity."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired", "Generalized / situational", "Mild: about 30 seconds to 1 minute after penetration", "Moderate: about 15–30 seconds", "Severe: before sexual activity, at its start, or within about 15 seconds"],
      epi: [["International, all ages", "8%–30% (p. 503)"], ["Ages 18–30 (Switzerland, Turkey)", "About 9%–11%"], ["US men 50–59 with concern", "Up to 55%"], ["Using the ~1-minute definition", "Only 1%–3%"]],
      risk: ["Anxiety disorders, especially social anxiety disorder (p. 503).", "Moderate genetic contribution to lifelong PE; dopamine and serotonin transporter gene polymorphisms.", "Acquired PE: thyroid disease, prostatitis, drug withdrawal (e.g., opioid withdrawal).", "Arranged marriages: family pressure and little premarital experience (p. 503)."],
      differential: [
        { id: "substance-sexual", how: "Early ejaculation due only to substance use, intoxication or withdrawal (p. 504)." },
        { name: "Normal latency, wants longer", how: "Normal ejaculatory timing with a wish to last longer is not PE (p. 504)." },
        { name: "Episodic early ejaculation", how: "E.g., first encounter with a new partner: common and not PE, even if distressing (p. 504)." },
        { id: "erectile-disorder", how: "Often co-occurs; which began first can be unclear (p. 504)." },
        { id: "social-anxiety", how: "PE may be more common with anxiety disorders, especially social anxiety disorder; lifelong PE is associated with certain anxiety disorders (pp. 503–504)." },
        { id: "opioid-withdrawal", how: "Acquired PE can appear during opioid withdrawal or after stopping opioids (pp. 504, 508)." },
        { id: "delayed-ejaculation", how: "The opposite timing problem, without a latency cutoff (p. 479)." }
      ],
      pearls: ["The only Chapter 13 disorder graded by seconds.", "The man’s own latency estimate is accepted; no stopwatch needed (p. 504).", "Experts now favor 120 seconds over 60 for lifelong PE (p. 502).", "Acquired PE usually starts in or after the fourth decade.", "Same latency estimates are assumed for men who have sex with men."],
      cmp: { symptoms: "Ejaculation within ~1 minute of penetration, before wished (75%–100%)", exclusions: "Nonsexual mental disorder, substance, medical condition, relationship distress; normal latency; episodic new-partner events", prevalence: "8%–30% by broad definitions; 1%–3% with the 1-minute rule", course: "Lifelong is stable; acquired starts later; persistence beyond 6 months decides" },
      clues: [["Core picture", "A 26-year-old who ejaculates about 20 seconds after penetration on nearly every occasion since his first sexual experiences, distressed"], ["Duration rule", "≥6 months, 75%–100% of occasions"], ["Code", "F52.4 (moderate: 15–30 s)"]],
      updates: upd("**F52.4** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "female-orgasmic", ch: "ch13", sec: "s13-orgasmic", pages: "485–489", critPages: "485–486",
      name: "Female orgasmic disorder", code: "F52.31",
      codes: [["F52.31", "Female orgasmic disorder", NC]],
      aka: ["FOD", "anorgasmia", "inhibited female orgasm", "orgasmic dysfunction (female)"],
      essence: "On **about 75%–100%** of sexual occasions, marked **delay, infrequency or absence** of orgasm or markedly **reduced intensity** of orgasmic sensations, for about **6 months**, with **distress**; orgasm with **clitoral stimulation but not intercourse** does not qualify, nor does **inadequate stimulation** (pp. 485–486).",
      duration: "≈6 months; “approximately” allows judgment when slightly shorter (p. 486)",
      functioning: "Functional consequences unclear; strongly tied to relationship problems, direction unknown (p. 488)",
      mood: "No specific personality pattern; MDD can lower interest and arousal and indirectly impair orgasm (pp. 486, 489)",
      criteria: [
        ["A", "On almost all or all (≈75%–100%) sexual occasions, either: (1) marked delay, infrequency or absence of orgasm; or (2) markedly reduced intensity of orgasmic sensations."],
        ["B", "Present for at least approximately 6 months."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress (e.g., partner violence) or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired", "Generalized / situational", "Never experienced an orgasm under any situation", "Severity by distress: mild, moderate, severe"],
      epi: [["Orgasm problems, premenopausal women", "8%–72% (distress not counted) (p. 487)"], ["Never orgasm in lifetime", "About 10% internationally"], ["Regional variation", "Twofold range in inability to reach orgasm (p. 488)"]],
      risk: ["Anxiety and worry about pregnancy (p. 487).", "Relationship problems, physical and mental health; gender-role and religious norms.", "MS, pelvic nerve damage from radical hysterectomy, spinal cord injury; SSRIs delay or block orgasm.", "Vulvovaginal atrophy; possible genetic contribution. Menopausal status is not consistently linked."],
      differential: [
        { id: "mdd", how: "Orgasm problems better explained by depression: no FOD (p. 488)." },
        { id: "substance-sexual", how: "Starts with a substance or medication and settles when stopped or reduced (p. 488)." },
        { name: "Another medical condition", how: "E.g., MS or spinal cord injury explains it: no FOD (p. 488)." },
        { name: "Relationship distress, partner violence or stressors", how: "Interpersonal or contextual factors account for it: no FOD (p. 488)." },
        { name: "Orgasm with clitoral stimulation only", how: "Orgasm through clitoral stimulation but not intercourse is not FOD (p. 486)." },
        { name: "Inadequate sexual stimulation", how: "Care may help, but no diagnosis (p. 486)." },
        { name: "Occasional, short-term difficulty", how: "Brief or infrequent problems without significant distress are not FOD (p. 488)." },
        { id: "fsiad", how: "Often co-occurs; another sexual dysfunction does not exclude FOD (pp. 488–489)." },
        { id: "delayed-ejaculation", how: "Distressing orgasm difficulty in men goes under DE (p. 488)." }
      ],
      pearls: ["Extra specifier unique to FOD: never experienced an orgasm under any situation.", "Diagnosis rests on the woman’s self-report.", "Many women are satisfied despite rare or no orgasm.", "First orgasm can come any time from before puberty to well into adulthood.", "Orgasm is more consistent with masturbation than with a partner."],
      cmp: { symptoms: "Delayed, infrequent or absent orgasm, or reduced intensity (75%–100%)", exclusions: "Nonsexual mental disorder, substance, medical condition, relationship distress or partner violence; inadequate stimulation; clitoral-only orgasm", prevalence: "8%–72% (no distress requirement); ~10% never", course: "Reports of orgasm increase with age and experience" },
      clues: [["Core picture", "A 30-year-old who has never reached orgasm alone or with a partner, with good stimulation, and is distressed"], ["Duration rule", "≈6 months, 75%–100% of occasions"], ["Code", "F52.31 (specify: never experienced an orgasm under any situation)"]],
      updates: upd("**F52.31** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "gppd", ch: "ch13", sec: "s13-gppd", pages: "493–498", critPages: "493–494",
      name: "Genito-pelvic pain/penetration disorder", code: "F52.6",
      codes: [["F52.6", "Genito-pelvic pain/penetration disorder", NC]],
      aka: ["GPPPD", "dyspareunia (older term)", "vaginismus (older term)", "painful intercourse", "genito-pelvic pain"],
      essence: "Persistent or recurrent difficulty with **1 or more of 4**: vaginal **penetration**, marked vulvovaginal or pelvic **pain** with penetration, marked **fear or anxiety** about that pain, or marked **pelvic floor tensing**, for about **6 months**, with **distress**; it has **no generalized/situational** subtype (pp. 493–494).",
      duration: "≈6 months; after that, spontaneous remission becomes less likely (p. 496)",
      functioning: "Avoidance of sex and gynecological exams; strain on starting and keeping relationships; may present only when trying to conceive (pp. 495, 497)",
      mood: "Prior mood or anxiety disorders raise risk fourfold; shame and feeling less feminine (pp. 496–497)",
      criteria: [
        ["A", "Persistent or recurrent difficulty with ≥1 of: (1) penetration of the vagina in intercourse; (2) marked vulvovaginal or pelvic pain when intercourse or penetration is attempted; (3) marked fear or anxiety about such pain before, during or after penetration; (4) marked tightening of the pelvic floor muscles when penetration is attempted."],
        ["B", "Present for at least approximately 6 months."],
        ["C", "Clinically significant distress in the individual."],
        ["D", "Not better explained by a nonsexual mental disorder or by severe relationship distress (e.g., partner violence) or other major stressors; not due to a substance/medication or another medical condition."]
      ],
      specifiers: ["Lifelong / acquired (acquired if there was a consistent period of pain-, fear- and tension-free intercourse)", "Severity by distress: mild, moderate, severe", "No generalized / situational subtype"],
      epi: [["Prevalence of the disorder", "Unknown (p. 495)"], ["US women of reproductive age with recurrent pain at intercourse", "About 10%–28%"], ["International", "8%–28%"], ["Male urological chronic pelvic pain", "2.2%–9.7% worldwide (not diagnosed as GPPPD) (p. 497)"], ["Peaks", "Early adulthood and peri/postmenopause; possible postpartum rise"]],
      risk: ["Antecedent mood or anxiety disorders (4×); pain catastrophizing, low pain self-efficacy, avoidance, negative mood (p. 496).", "Insecure attachment, negative partner responses; history of sexual or physical abuse.", "Superficial pain after vaginal infections; pain with or inability to insert tampons before any sexual contact.", "Early puberty, inflammation, early oral contraceptive use, more and sensitized vulvar pain receptors, low touch and pain thresholds; pelvic floor hypertonicity."],
      differential: [
        { name: "Another medical condition", how: "Lichen sclerosus, endometriosis, PID, genitourinary syndrome of menopause; often co-diagnosed, and which is primary cannot be determined reliably (p. 497)." },
        { id: "ssd", how: "Some women also meet somatic symptom disorder; reliable separation is not yet established (p. 498)." },
        { id: "specific-phobia", how: "Some also receive a specific phobia diagnosis; A3 fear resembles a phobia of penetration or pain (pp. 494, 498)." },
        { name: "Inadequate stimulation or partner dysfunction", how: "Too little foreplay or arousal, or a partner’s ED or PE, can cause penetration problems: GPPPD may not fit (p. 498)." },
        { id: "fsiad", how: "Reduced desire commonly accompanies the pain; both can be diagnosed (p. 495)." },
        { id: "other-specified-sexual", how: "Men with a similar pelvic pain pattern receive other specified or unspecified sexual dysfunction (p. 497)." }
      ],
      pearls: ["One dimension is enough, but assess all four.", "Absorbs the old terms dyspareunia and vaginismus.", "Vulvodynia (idiopathic vulvar pain ≥3 months) and provoked vestibulodynia usually meet criteria (p. 495).", "No 75%–100% rule and no generalized/situational subtype.", "Tampon difficulty is an early warning sign; pelvic floor PT can assess A4."],
      cmp: { symptoms: "Penetration difficulty, pain, fear of pain, pelvic floor tensing (≥1 of 4)", exclusions: "Nonsexual mental disorder, substance, medical condition, relationship distress or partner violence; inadequate stimulation", prevalence: "Unknown; 10%–28% report recurrent painful intercourse (US)", course: "Lifelong vs acquired often hard to establish; peaks early adulthood and around menopause" },
      clues: [["Core picture", "A 27-year-old married for a year who has never managed intercourse or a tampon, with pelvic muscle tightening and dread of pain"], ["Duration rule", "≈6 months"], ["Code", "F52.6"]],
      updates: upd("**F52.6** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "substance-sexual", ch: "ch13", sec: "s13-induced", pages: "504–509", critPages: "504–506",
      name: "Substance/medication-induced sexual dysfunction", code: "F10–F19 (by substance)",
      codes: [
        ["F10.181 / F10.281 / F10.981", "Alcohol-induced sexual dysfunction: mild / moderate or severe / no alcohol use disorder", NC],
        ["F11.181 / F11.281 / F11.981", "Opioid-induced sexual dysfunction: mild / moderate or severe / no use disorder", NC],
        ["F13.181 / F13.281 / F13.981", "Sedative-, hypnotic- or anxiolytic-induced sexual dysfunction: mild / moderate or severe / no use disorder", NC],
        ["F15.181 / F15.281 / F15.981", "Amphetamine-type substance (or other stimulant)-induced sexual dysfunction: mild / moderate or severe / no use disorder", NC],
        ["F14.181 / F14.281 / F14.981", "Cocaine-induced sexual dysfunction: mild / moderate or severe / no use disorder", NC],
        ["F19.181 / F19.281 / F19.981", "Other (or unknown) substance-induced sexual dysfunction: mild / moderate or severe / no use disorder (e.g., F19.981 fluoxetine-induced)", NC]
      ],
      aka: ["SSRI-induced sexual dysfunction", "antidepressant-induced sexual dysfunction", "drug-induced erectile dysfunction", "medication-induced sexual side effects", "antipsychotic-induced sexual dysfunction"],
      essence: "A **predominant**, clinically significant **sexual disturbance** that began **during or soon after intoxication, withdrawal, or starting or stopping a medication**, from an agent **able to cause it**, not better explained by an **independent** sexual dysfunction, not only during **delirium**, with **distress**; severity is graded by **frequency** (pp. 504–506).",
      duration: "Onset with the agent; persistence of about 1 month after acute withdrawal or severe intoxication points to an independent dysfunction (p. 505)",
      functioning: "Can lead to stopping or skipping medication, undermining antidepressant efficacy (p. 508)",
      mood: "Antidepressant sexual effects occur regardless of depression level; the underlying depressive, bipolar, anxiety or psychotic disorder can itself impair sex (pp. 507, 508)",
      criteria: [
        ["A", "A clinically significant disturbance in sexual function dominates the clinical picture."],
        ["B", "History, examination or laboratory evidence of both: (1) onset during or soon after intoxication or withdrawal, or after a medication was started or stopped; and (2) the agent is capable of producing it."],
        ["C", "Not better explained by an independent sexual dysfunction (e.g., symptoms came before use, persist about 1 month after acute withdrawal or severe intoxication ends, or there are prior non-substance episodes)."],
        ["D", "Not only during a delirium."],
        ["E", "Clinically significant distress."]
      ],
      specifiers: ["With onset during intoxication", "With onset during withdrawal", "With onset after medication use (start, change or withdrawal of the medication)", "Mild: 25%–50% of sexual occasions", "Moderate: 50%–75%", "Severe: 75% or more", "Code combines substance and use disorder severity: 4th character 1 (mild), 2 (moderate or severe), 9 (no use disorder); no separate use disorder diagnosis"],
      epi: [["Overall", "Unclear; underreported (p. 507)"], ["MAOIs, TCAs, serotonergic and SNRI antidepressants", "About 25%–80% report sexual side effects"], ["Highest rates", "Citalopram, fluoxetine, fluvoxamine, paroxetine, sertraline, venlafaxine (p. 508)"], ["Antipsychotics", "About 50%"], ["Heroin", "About 60%–70% (higher than amphetamine-type or MDMA)"]],
      risk: ["Antidepressants: orgasm/ejaculation problems in men, arousal problems in women most often; lower with bupropion, mirtazapine, nefazodone, vilazodone (p. 507).", "Antipsychotics, typical or atypical; fewer with prolactin-sparing or non-dopamine-blocking agents.", "Lithium and anticonvulsants (lamotrigine possibly spared) may lower desire; gabapentin (orgasm); benzodiazepines (erection, orgasm); not reported with buspirone.", "Cardiovascular, cytotoxic, GI and hormonal drugs; 5-α-reductase inhibitors (finasteride, dutasteride); hormonal contraceptives.", "Methadone (seldom buprenorphine), high-dose opioids for pain, chronic alcohol or nicotine (erectile problems); risk rises with age (pp. 507–508)."],
      differential: [
        { id: "mdd", how: "Depressive disorders impair sex on their own; a clear tie to starting or stopping the agent points to the induced form (pp. 508–509)." },
        { id: "bipolar-i", how: "Bipolar disorders are also associated with sexual disturbance; establish timing with the medication (p. 508)." },
        { id: "gad", how: "Anxiety disorders can disturb sexual function independently (p. 508)." },
        { id: "schizophrenia", how: "Psychotic disorders affect sex too; antipsychotic timing helps separate them (p. 508)." },
        { id: "erectile-disorder", how: "Onset before the substance, or persistence beyond about 1 month after stopping, supports the primary disorder (pp. 505, 507)." },
        { id: "delayed-ejaculation", how: "Serotonergic and other agents that delay ejaculation give the induced diagnosis instead (p. 481)." },
        { id: "alcohol-intox", how: "Diagnose the induced form instead of intoxication only when the sexual problem predominates and warrants attention (p. 505)." },
        { id: "opioid-withdrawal", how: "Same rule for withdrawal; PE can follow opioid cessation (pp. 505, 508)." },
        { id: "delirium", how: "Sexual disturbance only during a delirium is not diagnosed separately (p. 505)." }
      ],
      pearls: ["Proof: onset after starting, fading on stopping, recurring on rechallenge (p. 509).", "Withdrawal onset applies to alcohol, opioids, sedatives and other, not stimulants (p. 507).", "No cannabis or tobacco row in the coding table.", "Antidepressant onset as early as 8 days; about 30% with mild–moderate orgasm delay remit within 6 months; SSRI effects may persist after stopping (p. 508).", "Two agents: list each separately, e.g., F14.181 plus F19.981 fluoxetine (p. 506)."],
      cmp: { symptoms: "Any sexual dysfunction tied to a substance or medication", exclusions: "Independent sexual dysfunction; delirium only", prevalence: "25%–80% on many antidepressants; ~50% on antipsychotics", course: "Usually improves within days to several weeks after stopping, by half-life" },
      clues: [["Core picture", "A 29-year-old woman who cannot reach orgasm since starting sertraline 3 weeks ago, on nearly every occasion, and wants to stop it"], ["Duration rule", "Onset with the agent; ~1 month persistence after stopping suggests independent"], ["Code", "e.g., F19.981 sertraline-induced sexual dysfunction, with onset after medication use, severe"]],
      updates: upd("The induced sexual dysfunction codes (**F10.181–F19.981**) are unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "other-specified-sexual", ch: "ch13", sec: "s13-residual", pages: "509", critPages: "509",
      name: "Other specified sexual dysfunction", code: "F52.8",
      codes: [["F52.8", "Other sexual dysfunction not due to a substance or known physiological condition", NC]],
      aka: ["sexual aversion", "anhedonic ejaculation", "male genito-pelvic pain", "subthreshold sexual dysfunction"],
      essence: "Sexual dysfunction symptoms causing **distress** that **predominate** without meeting full criteria for any disorder in the class, with the **reason recorded**, e.g., **sexual aversion** (p. 509).",
      duration: "Varies",
      functioning: "Distress required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of a sexual dysfunction with clinically significant distress predominate but full criteria for no disorder in the class are met; record “other specified sexual dysfunction” and the specific reason (e.g., sexual aversion)."]],
      specifiers: ["Record the reason after the name"],
      epi: [["Prevalence", "Not given in DSM-5-TR"]],
      risk: ["As for the specific disorders."],
      differential: [
        { id: "delayed-ejaculation", how: "Normal ejaculation with reduced pleasure (anhedonic ejaculation) goes here, not to DE (p. 481)." },
        { id: "gppd", how: "Men with a genito-pelvic pain pattern cannot receive GPPPD; use this or unspecified (p. 497)." },
        { id: "unspecified-sexual", how: "When the reason is not stated or information is insufficient." }
      ],
      pearls: ["The manual’s example: sexual aversion.", "Text-named uses: anhedonic ejaculation (p. 481) and male genito-pelvic pain (p. 497).", "Distress is still required."],
      cmp: { symptoms: "Subthreshold or atypical sexual dysfunction, reason stated", exclusions: "Full criteria for a specific disorder", prevalence: "Not given", course: "Varies" },
      clues: [["Core picture", "A man with normal ejaculatory timing who feels little or no pleasure at orgasm and is distressed"], ["Code", "F52.8"]],
      updates: upd("**F52.8** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    },
    {
      id: "unspecified-sexual", ch: "ch13", sec: "s13-residual", pages: "509", critPages: "509",
      name: "Unspecified sexual dysfunction", code: "F52.9",
      codes: [["F52.9", "Unspecified sexual dysfunction not due to a substance or known physiological condition", NC]],
      aka: [],
      essence: "Sexual dysfunction symptoms with **distress**, short of full criteria, when the clinician **does not state the reason** or there is **insufficient information** for a more specific diagnosis (p. 509).",
      duration: "Not specified",
      functioning: "Distress required",
      mood: "Varies",
      criteria: [["", "Symptoms typical of a sexual dysfunction with clinically significant distress predominate without meeting full criteria; the clinician chooses not to specify why, including when information is insufficient."]],
      specifiers: ["None"],
      epi: [["Prevalence", "Not established"]],
      risk: ["Not applicable."],
      differential: [
        { id: "other-specified-sexual", how: "Use when the reason can be stated." },
        { id: "gppd", how: "Males fitting the pelvic pain pattern may receive this or other specified (p. 497)." }
      ],
      pearls: ["Revise once a fuller sexual and medical history is available.", "Like every Chapter 13 category, it needs distress."],
      cmp: { symptoms: "Sexual dysfunction symptoms; insufficient information", exclusions: "Specific diagnoses", prevalence: "Unknown", course: "Unknown" },
      clues: [["Core picture", "A brief consult note mentioning distressing sexual problems with no details on timing or type"], ["Code", "F52.9"]],
      updates: upd("**F52.9** is unchanged in the October 2024, 2025 and 2026 ICD-10-CM updates.")
    }
  ]);

  SP.comparePresets = (SP.comparePresets || []).concat([
    { label: "Male HSDD vs FSIAD", ids: ["male-hsdd", "fsiad"] },
    { label: "Erectile disorder vs FSIAD vs male HSDD", ids: ["erectile-disorder", "fsiad", "male-hsdd"] },
    { label: "Delayed vs premature ejaculation", ids: ["delayed-ejaculation", "premature-ejaculation"] },
    { label: "Delayed ejaculation vs female orgasmic disorder", ids: ["delayed-ejaculation", "female-orgasmic"] },
    { label: "GPPPD vs FSIAD", ids: ["gppd", "fsiad"] },
    { label: "GPPPD vs specific phobia vs somatic symptom disorder", ids: ["gppd", "specific-phobia", "ssd"] },
    { label: "Induced vs primary: erectile disorder", ids: ["substance-sexual", "erectile-disorder"] },
    { label: "Induced vs primary: female orgasmic disorder", ids: ["substance-sexual", "female-orgasmic"] },
    { label: "Male HSDD vs major depressive disorder", ids: ["male-hsdd", "mdd"] },
    { label: "Other specified vs unspecified sexual dysfunction", ids: ["other-specified-sexual", "unspecified-sexual"] }
  ]);

  SP.timeLadders = (SP.timeLadders || []).concat([
    { type: "ladder", title: "Chapter 13: duration windows", ticks: [[0, "0"], [16.7, "1 mo"], [50, "3 mo"], [100, "6 mo"]], rows: [
      { label: "Male HSDD", dx: "male-hsdd", from: 0, to: 100, color: "guide", span: "≈6 months" },
      { label: "FSIAD", dx: "fsiad", from: 0, to: 100, color: "guide", span: "3 of 6, ≈6 months" },
      { label: "Erectile disorder", dx: "erectile-disorder", from: 0, to: 100, color: "case", span: "75%–100%, ≈6 months" },
      { label: "Delayed ejaculation", dx: "delayed-ejaculation", from: 0, to: 100, color: "hy", span: "75%–100%, ≈6 months" },
      { label: "Premature ejaculation", dx: "premature-ejaculation", from: 0, to: 100, color: "hy", span: "≥6 months (not “about”)" },
      { label: "Female orgasmic disorder", dx: "female-orgasmic", from: 0, to: 100, color: "clin", span: "75%–100%, ≈6 months" },
      { label: "GPPPD", dx: "gppd", from: 0, to: 100, color: "mech", span: "≈6 months" },
      { label: "Induced: persistence test", dx: "substance-sexual", from: 0, to: 16.7, color: "drug", span: "~1 mo after stopping" }
    ], note: "If an induced picture persists about 1 month past acute withdrawal or severe intoxication, think independent dysfunction. Vulvodynia’s own definition is pain for at least 3 months (p. 495)." }
  ]);
})();
