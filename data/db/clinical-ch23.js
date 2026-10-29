/* Chapter 23 clinical extras (Section III, Assessment Measures, pp. 841–857; p. 858 is blank), merged into the disorder
   library when the app loads (js/practice.js).
   ask: [element, plain-language question or script, tip]   — "How to ask it" on each library page; every tip ends with its page
   tx:  "what to do with the result" orientation only, every line labeled as outside the DSM / app guidance; no Stahl pages
        exist for these tools
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   Nothing in this chapter is a diagnosis or a code. The Level 1 forms, the psychosis severity dimensions and the WHODAS 2.0
   are copyrighted instruments: the scripts below introduce each form and its purpose, or open a conversation about a domain
   the form flagged, in the app's own words; they never read out an item, an anchor or an instruction. A threshold score is a
   prompt for inquiry, and clinical judgment decides (pp. 846, 851, 855). Self-harm is handled in general clinical terms only. */
(function () {
  var ASOF = "October 2026";
  var NOTDX = "**A score is not a diagnosis**: a threshold or high score means the area **warrants further assessment**, and **clinical judgment** decides (pp. 846, 851, 855). Diagnose on the Section II criteria and keep the scores in the formulation and progress note, not on the diagnosis line (app guidance).";
  var SAMEINF = "At follow-up use the **same knowledgeable informant**, or the **same parent or guardian**, who answered the first time, so a change in score reflects the patient rather than the rater (p. 846).";
  var CRISIS = "If thoughts of self-harm come up, ask about them directly and plan for safety; the Philippine **NCMH Crisis Hotline** is **1553** (toll-free from landlines) or **1800-1888-1553**; **0919-057-1553** (Smart/TNT); **0917-899-8727** and **0966-351-4518** (Globe/TM) (outside the DSM; confirm before giving out).";
  function care(first, points) {
    return { asOf: ASOF, first: "Outside the DSM / app guidance: " + first, points: [NOTDX].concat(points), stahl: [] };
  }

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "level1-adult",
      ask: [
        ["Introducing the form", "“Before we talk, I’d like you to fill in a short checklist. It asks how much different problems have bothered you over the last two weeks, including some that may have nothing to do with why you came today. It helps me make sure I don’t miss anything.”", "Tagalog aside: “May maikling listahan ng tanong tungkol sa nakaraang dalawang linggo. Tutulong ito para walang makaligtaan.” Purpose: a review of mental systems that points to areas needing more questions (p. 843; Section I p. 15)."],
        ["Reading it together", "“If it’s easier, I can read the questions with you and you tell me which answer fits best.”", "Reading aloud for a person with limited literacy or a different first language is app guidance; record that you did it, and that no validated Filipino version was found (Philippine context, outside the DSM). The recall window stays the past 2 weeks (p. 843)."],
        ["Asking an informant", "To the relative: “She is finding this hard right now. Could you answer these based on what you have seen of her over the last two weeks? How are you related to her, and about how many hours a week do you spend together?”", "A knowledgeable adult informant may complete the form when capacity is impaired, for example in major neurocognitive disorder; the form has lines for the relationship and the weekly hours (pp. 843, 847)."],
        ["Opening the interview", "“Thank you for filling this in. I’ve looked through your answers, and I’d like to start with a few of the ones you marked.”", "Read the form before you walk in: scores seen before the encounter helped communication in the Field Trials. Scan the slight-threshold domains (substance use, suicidal ideation, psychosis) first (pp. 844, 846)."],
        ["A domain flagged at mild", "“You marked that this has bothered you on several days or more. Tell me what it has been like.”", "Mild (2) or greater on any one item of a domain calls for further inquiry, which may include its Level 2 measure: PROMIS short forms for depression, anger, anxiety and sleep; ASRM for mania; PHQ-15 for somatic symptoms; FOCI for repetitive thoughts and behaviors (pp. 844–846)."],
        ["Inside a multi-item domain", "“In this group of questions you marked one higher than the others. Let’s talk about that one first.”", "Look at each item, not only the domain’s highest score, to see which symptom is driving it, especially where no Level 2 exists (p. 845)."],
        ["Substance use flagged at slight", "“You marked some drinking, smoking or other use in the past two weeks. I ask everyone about this. What did you use, how much, and how often?”", "Tagalog aside: “Ilang beses ka uminom o gumamit nitong nakaraang dalawang linggo?” Slight (1) is enough here; the Level 2 is adapted from the NIDA-Modified ASSIST (pp. 844, 846)."],
        ["Psychosis flagged at slight", "“You marked one of the questions about unusual experiences. Can you tell me what happened, and when?”", "Slight (1) or greater on either psychosis item; there is no Level 2, so the follow-up is your own psychosis interview (Chapter 2) (pp. 844, 846)."],
        ["Thoughts of self-harm flagged", "“You marked the question about thoughts of harming yourself. I’m glad you told me. Can we talk about those thoughts now?”", "Tagalog aside: “Salamat sa pagsabi. Puwede ba nating pag-usapan ang mga naiisip mong saktan ang sarili?” Slight (1) is enough and no Level 2 exists: ask directly, the same day, and plan for safety (pp. 844, 846)."],
        ["Memory, dissociation or personality flagged", "“You marked a question about [memory / feeling detached / how you see yourself and others]. Can you give me a recent example?”", "These three domains have no adult Level 2 measure; the clinical interview is the follow-up, with an informant for memory complaints (p. 844)."],
        ["Planning to repeat it", "“I’d like you to fill in the same checklist at some of your next visits, so we can see together whether things are changing.”", "Repeat at regular intervals as clinically indicated, depending on how stable the symptoms and treatment are (p. 846)."]
      ],
      tx: care("treat the form as a **map of where to ask next**. List each domain at or above its threshold, then for each one either give the domain’s Level 2 measure or ask the questions yourself, and finish with a Section II interview.", [
        "Thresholds to apply: **mild (2) or greater on any item** for most domains; **slight (1) or greater** for **substance use, suicidal ideation and psychosis** (pp. 845–846). There is no total score; record the **highest item score** in each domain (p. 846).",
        "Five adult domains have **no Level 2**: suicidal ideation, psychosis, memory, dissociation and personality functioning; for these the follow-up is your own questions (p. 844).",
        "Use the flagged domains to widen the interview: a sleep or substance flag in someone who came for low mood changes the differential and the plan (app guidance; p. 843).",
        "Keep the first form as the **baseline** and repeat it to show change (Section I p. 20; p. 846). " + SAMEINF,
        "In the Field Trials the two **mania** items were the least reliable on retest (Narrow et al. 2013; research, outside the DSM), so check a mania flag with an informant (app guidance).",
        CRISIS
      ])
    },
    {
      id: "level1-child",
      ask: [
        ["Introducing the form to a parent", "“This form asks how your child has been over the past two weeks in many areas, not only the reason you came. Answer what you can from what you have seen.”", "Tagalog aside: “Tungkol ito sa nakita ninyo sa anak ninyo nitong nakaraang dalawang linggo.” Parent or guardian version for ages 6–17: 25 questions across 12 domains (p. 844)."],
        ["Permission not to know", "“For a few questions, about alcohol, drugs and thoughts of self-harm, you may not know the answer. It is fine to say so; that tells me what to ask your child.”", "Six items are answered Yes, No or Don’t Know; a Don’t Know, especially for ages 11–17, is the cue to probe with the child (p. 846)."],
        ["Adding the young person’s form (11–17)", "To the adolescent: “Your parent filled in one form. There’s a similar one just for you, about how you’ve been. Your answers help me understand your side.”", "The child-rated version is online only, has similar items and scoring, and has no Don’t Know option (pp. 842, 844, 846)."],
        ["Time alone with the adolescent", "“Some things are easier to talk about without parents in the room. Is it all right if we talk for a few minutes on our own?”", "Seeing the adolescent alone and explaining the limits of confidentiality is app guidance; it is the natural setting for probing a parent’s Don’t Know (p. 846)."],
        ["A child younger than 11", "To the parent of a 9-year-old: “I’ll also talk and play with your child in a way that fits their age.”", "No self-rated version exists below 11; the parent form plus your own age-appropriate interview are the tools (p. 844)."],
        ["Inattention flagged", "To the parent: “You noted some trouble paying attention. Is it at home, at school, or both? What do the teachers say?”", "Inattention is a slight (1) domain in the parent version; the Level 2 is the SNAP-IV. Asking about more than one setting is app guidance for the ADHD interview (pp. 845–846)."],
        ["Anger or irritability flagged", "To the parent: “You noted that your child gets angry or irritable. How often, how intense, and with whom?”", "Anger and irritability share two items; the Level 2 options are the PROMIS Calibrated Anger Measure—Parent and the Affective Reactivity Index (pp. 845, 849)."],
        ["Substance item: Yes or Don’t Know", "To the adolescent: “Your parent wasn’t sure about a few questions on alcohol and other substances. A lot of people your age have tried something. What is true for you?”", "Tagalog aside: “Hindi sigurado ang nanay mo sa ilang tanong. Ano ang totoo para sa iyo?” Yes → the parent Level 2 adapted from the NIDA-modified ASSIST; Don’t Know → the child-rated version of it for ages 11–17 (p. 845)."],
        ["Suicide items: Yes or Don’t Know", "To the child, in words that fit their age: “Sometimes when kids feel very bad, they think about hurting themselves or about not being alive. Has that happened to you?”", "Either suicide item answered Yes or Don’t Know means direct inquiry, since there is no Level 2; the attempt item covers the child’s whole life, not only the past 2 weeks (pp. 845, 850)."],
        ["Same parent at follow-up", "“At the next visit, could you be the one to fill this in again?”", "The same parent or guardian should complete the follow-up forms where possible (p. 846)."]
      ],
      tx: care("list the flagged domains, decide for each whether to give the parent (or child-rated) Level 2 or ask directly, and then interview the child and the parent against the Section II criteria.", [
        "Thresholds to apply: **mild (2) or greater** on the 0–4 items, **slight (1) or greater** for **inattention** and **psychosis**, and **Yes or Don’t Know** on the six substance and suicide items (pp. 845–846).",
        "Domains with **no Level 2** in the parent version: **psychosis, repetitive thoughts and behaviors, and suicidal ideation or attempts**; ask directly (p. 845).",
        "A **Don’t Know** is information, not a blank: it says the parent cannot see this area, so the young person becomes the informant (p. 846).",
        "Collateral from the **school** often settles an inattention or irritability flag; ask the parent’s permission before contacting teachers (app guidance).",
        SAMEINF,
        CRISIS
      ])
    },
    {
      id: "level2-measures",
      ask: [
        ["Explaining why there is a second form", "“Your answers on the first checklist showed that [sleep] has been bothering you. This next form looks at that one area more closely.”", "Level 2 gives in-depth information on a domain flagged by Level 1, to inform diagnosis, treatment planning and follow-up (p. 846)."],
        ["Choosing the adult form", "“This one takes a few minutes and asks only about worry and nervousness.”", "Adult Level 2: PROMIS short forms for depression, anger, anxiety and sleep; Altman Self-Rating Mania Scale; PHQ-15 for somatic symptoms; FOCI Severity Scale for repetitive thoughts and behaviors; a substance measure adapted from the NIDA-Modified ASSIST (p. 844)."],
        ["Choosing the parent form", "To the parent: “You noticed [trouble paying attention]. This form for parents asks more about it.”", "Parent Level 2: PHQ-15, PROMIS sleep, SNAP-IV for inattention, PROMIS parent depression and anxiety item banks, PROMIS Calibrated Anger Measure—Parent, ARI for irritability, ASRM for mania, adapted NIDA-modified ASSIST for substance use (p. 845)."],
        ["Giving the adolescent their own Level 2", "To a 15-year-old: “This short form is just for you, about [alcohol and other substances]. Answer for yourself, not for what your parents think.”", "Child-rated Level 2 versions exist for most domains for ages 11–17; a parent’s Don’t Know on a substance item points to the child-rated substance measure (pp. 845–846)."],
        ["When no Level 2 exists", "“There isn’t a separate form for this, so I’d like to ask you some questions myself.”", "Adult: suicidal ideation, psychosis, memory, dissociation, personality functioning. Parent version: psychosis, repetitive thoughts and behaviors, suicidal ideation or attempts (pp. 844–845)."],
        ["Checking a mania flag", "“You marked feeling unusually energetic or needing less sleep. Has anyone around you noticed a change?”", "The ASRM is the Level 2; the two mania items were the least reliable in the Field Trials (Narrow et al. 2013; research, outside the DSM), so an informant helps (pp. 844–845)."],
        ["Getting the forms", "To clinic staff: “Please print the Level 2 forms we use most and keep them with the Level 1 forms at the front desk.”", "All Level 2 measures are online at www.psychiatry.org/dsm5, not printed in the manual (p. 846)."],
        ["Repeating it", "“We’ll use this same form at follow-up to see whether the score moves.”", "The relevant Level 2 measures may be repeated at regular intervals as clinically indicated (p. 846)."]
      ],
      tx: care("a Level 2 score tells you **how much** of one domain is present; it still does not tell you **which disorder**. Use it to focus the interview, to set a baseline for that domain and to follow it over time.", [
        "Level 2 is **one way** to follow a flagged domain, not a requirement: further inquiry **may include** it (p. 846). Where none exists, your questions are the follow-up (p. 844).",
        "Match the measure to the rater and age: adult self-report, parent of a child 6–17, or child-rated for ages 11–17 (pp. 844–846).",
        "Once a diagnosis is made, a **disorder-specific severity measure** may track it more closely than the Level 2 (p. 842; app guidance).",
        "The manual does not print the Level 2 instruments or their scoring; check each instrument’s own scoring guide online before interpreting a number (p. 846; app guidance).",
        SAMEINF
      ])
    },
    {
      id: "severity-measures",
      ask: [
        ["Introducing it after the diagnosis", "“Now that we know what we are working on, I’d like you to fill in a form that measures how strong the [anxiety] symptoms are, so we can follow them.”", "Severity measures are disorder-specific and are given to people who meet criteria or who have a clinically significant syndrome short of full criteria (p. 842)."],
        ["Not a screen", "To a junior colleague: “We give this one after the interview, to people with the diagnosis, not to everyone at the door.”", "Screening across domains is the job of Level 1; a disorder-specific scale given as a screen is a common confusion (p. 842; Section I p. 15)."],
        ["Self-rated or clinician-rated", "“You fill in this one yourself.” Or: “I complete this one from what I see and from what you and your family tell me.”", "Some severity measures are self-rated, others clinician-rated from observation (p. 842)."],
        ["Which diagnoses have one", "To a colleague: “Check whether the diagnosis we made has its own severity form on the APA site.”", "The text names GAD, social anxiety disorder, the psychotic disorders, PTSD, autism spectrum disorder and social (pragmatic) communication disorder; the APA page also lists the PHQ-9 for depression and others (research, outside the DSM; p. 842)."],
        ["Psychotic disorders", "“For the voices, I’ll rate how strong they have been over the past week, at their worst.”", "The one severity measure printed in the manual is the psychosis symptom dimensions (pp. 842, 851)."],
        ["Baseline", "“We’ll do this today as a starting point and repeat it at your next visits.”", "Quantitative ratings are meant to be taken at the initial evaluation as a baseline and repeated to monitor change (Section I p. 20)."],
        ["Showing the trend", "“Your score was [14] at your first visit and [8] today. Does that match how you feel?”", "Sharing the numbers is the core of measurement-based care: tools given and their results used to track progress and refine the plan (pp. 841–842)."],
        ["Language", "Tagalog aside: “May bersiyong Filipino ang ilang form; gagamitin natin kung mayroon.”", "Philippine context (outside the DSM): a Filipino PHQ-9 and GAD-7 were validated in Filipino domestic workers in Macao (Garabiles et al. 2019), a migrant sample; the DSM’s own severity measures are online in English (p. 842)."]
      ],
      tx: care("use the severity measure to **follow the diagnosis you made**: give it at baseline, repeat it as treatment proceeds, and change the plan when the score does not move.", [
        "Severity measures put numbers on **frequency, intensity or duration** of the symptoms of one diagnosis (p. 842).",
        "Give them only once the diagnosis, or a clinically significant syndrome short of it, is established (p. 842); for screening use Level 1 (Section I p. 15).",
        "Frequent, timely feedback of scores to the clinician during visits improved outcomes in trials, while one-off screening did not (Fortney et al. 2017; research, outside the DSM).",
        "The APA page’s caution: the measures should **enhance** clinical decisions and never be the **sole basis** of a diagnosis (APA website, outside the DSM; confirm online).",
        "Philippine context (outside the DSM): the Filipino PHQ-9 and GAD-7 cut scores of 6 and 7 come from a migrant sample (Garabiles et al. 2019); use them cautiously in a Bataan clinic."
      ])
    },
    {
      id: "psychosis-severity-dimensions",
      ask: [
        ["Explaining the rating to the patient", "“I’m going to ask about the past week, especially your worst day, so we can measure how strong each of your symptoms has been and follow it over time.”", "Clinician-rated, using all available information, each symptom at its most severe in the past 7 days (p. 851)."],
        ["Asking the family or ward staff", "“How was she this past week? Tell me about her worst day.”", "Tagalog aside: “Ano ang pinakamalalang araw niya nitong nakaraang linggo?” All available information includes informants and nursing notes (p. 851)."],
        ["Hallucinations", "“When the voice comes, do you feel you have to do what it says or answer it? How much does it bother you?”", "The mild, moderate and severe levels turn on pressure to act or respond and on distress, not on how strange the content is (p. 852)."],
        ["Delusions", "“How sure are you about this? Does it make you want to do something about it? How much does it upset you?”", "Graded the same way as hallucinations, by pressure to act and distress (p. 852)."],
        ["Disorganized speech", "Rated from the interview itself: how hard is the person’s speech to follow?", "Levels run from some difficulty following to nearly impossible to follow (p. 852)."],
        ["Abnormal psychomotor behavior", "To the nurse: “How often this week did he show odd movements, odd postures, or stop moving or responding?”", "Graded by how often abnormal or bizarre motor behavior or catatonia appears (p. 852)."],
        ["Negative symptoms", "“What have you started doing on your own this week? Do things still interest you?” Watch facial expression, tone and gestures while she answers.", "The degree of decrease in expressivity or self-initiated behavior sets the level (p. 853)."],
        ["Impaired cognition", "To the family: “Compared with others her age and background, how was her thinking and schooling before she got sick? And now?”", "Anchored to standard deviations below the level expected for age and socioeconomic status (p. 853)."],
        ["Depression and mania", "“Have you felt low, guilty, or that you have failed? Any days this week when you felt unusually high, irritable or restless?”", "Dimensions VII and VIII flag co-occurring mood pathology; whenever low mood is present, also ask about thoughts of self-harm, which is app guidance rather than part of the rating (pp. 851, 853)."],
        ["Recording it", "In the progress note: list the eight dimension scores for the past 7 days, and name which five feed the severity specifier.", "The five primary-symptom ratings serve the optional Chapter 2 “specify current severity”; the diagnosis can be made without it (Ch 2, p. 109; p. 851)."]
      ],
      tx: care("the eight ratings **document severity**; they do not change the Chapter 2 diagnosis. Use them as a baseline at admission and repeat them to judge response, and let the depression, mania and cognition ratings shape the plan.", [
        "Eight dimensions, **0–4**, clinician-rated, **worst in the past 7 days**; the first five are the primary symptoms used by the Chapter 2 severity specifier (pp. 851–853; Ch 2 p. 109).",
        "A high **depression** or **mania** rating points to co-occurring mood pathology with prognostic and treatment weight; review for schizoaffective or mood disorder with psychotic features in the Chapter 2–4 interviews (p. 851; app guidance).",
        "A high **cognition** rating predicts functional ability and prognosis; pair it with the WHODAS for a functioning baseline (p. 851; app guidance).",
        "Repeat at regular intervals as clinically indicated; consistently high scores warrant further assessment (p. 851). The app’s [[page:assess/scale/crdpss|psychosis severity tool]] in Case tools uses the same eight dimensions (app guidance).",
        "Inter-rater agreement was low for most items in one study of recent-onset psychosis, except delusions (Berendsen et al. 2020; research, outside the DSM): rate together on the team at first, and keep the same rater where possible (app guidance).",
        CRISIS
      ])
    },
    {
      id: "whodas",
      ask: [
        ["Introducing the form", "“This form is about everyday life: how much difficulty your health has caused you in the past 30 days, at home, at work or school, with people and in your community.”", "Tagalog aside: “Tungkol ito sa hirap sa pang-araw-araw na buhay dahil sa kalusugan, nitong nakaraang 30 araw.” Adults 18 and older; 36 items in six domains (p. 854)."],
        ["Any health problem counts", "“Count any health problem: an illness, an injury, stress or emotional problems, or drinking or drug use.”", "The form’s preamble defines health conditions broadly, physical and mental (p. 856)."],
        ["Asking a proxy", "To the daughter: “Since your father can’t answer these right now, could you tell me how much difficulty he has had with daily activities this past month?”", "When capacity is impaired, for example in major neurocognitive disorder, a knowledgeable informant can complete the proxy version, which is online (p. 854)."],
        ["The work or school block", "“Do you currently work or go to school? If not, you can skip that part.”", "The work/school items have a skip instruction for people who neither work nor study; that is a planned omission, not missing data (p. 857)."],
        ["Reviewing each answer", "“You marked a lot of difficulty getting along with people. Tell me what that looks like day to day.”", "Go over every item in the interview, enter it in the Clinician Use Only column, and write a corrected score if the interview supports one (p. 855)."],
        ["Blank items", "“I noticed a few were left blank. Could we go through them together?”", "Ten or more missing items (over 25%) spoil the general scores; a domain can still be scored if 75%–100% of its items are answered (p. 855)."],
        ["Explaining the result", "“For getting around, your average is 1, meaning no difficulty. For taking part in community life it is 4, which is severe. Does that fit how things are?”", "Average domain score = raw domain score ÷ number of items, read on the 1 (none) to 5 (extreme) scale (p. 855)."],
        ["Planning to repeat it", "“Let’s do this again in a few months to see whether daily life is getting easier.”", "Repeat at regular intervals as clinically indicated; the WHODAS is sensitive to change (pp. 854–855)."],
        ["Language", "Tagalog aside: “Kung may tanong na hindi malinaw, sabihin mo lang at ipapaliwanag ko.”", "Philippine context (outside the DSM): no validated Filipino WHODAS 2.0 was found, and WHO does not vouch for translations it did not produce; the measure has been validated across many cultures in its WHO versions (p. 854)."]
      ],
      tx: care("use the WHODAS as the **functioning statement** in the formulation, the role the GAF once played, and as a target for treatment: the domains with the highest averages are where rehabilitation, family work or school and work planning should go.", [
        "Score it the DSM-5-TR way: **average domain score** (raw ÷ items) and **average general disability score** (raw total ÷ 36), both on the 1–5 scale (p. 855). WHO’s simple sum (max 180) and IRT score (0–100) are alternatives (p. 854).",
        "Apply the **missing-data rule** before reporting a number: 10 or more blanks → no general score; a domain 75%–100% complete can still be used (p. 855).",
        "**Residual impairment** after symptoms settle raises the risk of relapse, for example in major depressive and anxiety disorders, so a persistently high WHODAS is a reason to keep treating (p. 842; app guidance).",
        "The GAF was replaced by the WHODAS in DSM-5; do not record a GAF score (Section I p. 16).",
        "Clinicians may reproduce the printed form for their own patients; electronic or other use needs WHO’s written permission (p. 857).",
        SAMEINF
      ])
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "screen-positive", title: "A screening form flags a domain",
      intro: "A Level 1 domain at or above its threshold is a **prompt to ask more**, not a diagnosis (p. 846). For adults the threshold is **mild (2) or greater** on any item, or **slight (1) or greater** for substance use, suicidal ideation and psychosis; for the parent version it is mild, slight for inattention and psychosis, and **Yes or Don’t Know** on the substance and suicide items (pp. 845–846). Follow the domain with its **Level 2** measure where one exists, or with your own questions where none does (pp. 844–846), then interview against the Section II criteria. If no disorder is met, the positive screen is still documented and followed (app guidance). The [[helper:measures|measures helper]] walks through each threshold.",
      ask: ["Which domains reached their threshold, and which item in each domain was highest?", "Is this a slight-threshold domain (substance use, suicidal ideation, psychosis in adults; inattention, psychosis in children)?", "Is there a Level 2 for this domain, or do I ask directly?", "Who answered the form: the patient, an informant or a parent? Did a parent answer Don’t Know?", "Does the interview confirm the symptom, and does it meet any Section II criteria?", "Is the domain part of the presenting problem or something new?"],
      mustNotMiss: ["A flag on **thoughts of self-harm**: slight (1) in adults, or Yes or Don’t Know in the parent version, means a direct conversation the same day; there is no Level 2 (pp. 844–846). NCMH Crisis Hotline 1553 (outside the DSM; confirm before giving out).", "A **psychosis** flag at slight (1): there is no Level 2, so interview for psychosis yourself (p. 844).", "A parent’s **Don’t Know** on a substance item in an adolescent: ask the young person and consider the child-rated substance Level 2 (pp. 845–846).", "Calling a positive screen a **diagnosis** (p. 846)."],
      helpers: ["measures"],
      items: [
        { ch: "ch23", dx: "level1-adult", when: "Adult self- or informant-rated form, past 2 weeks: mild (2) on any item, or slight (1) for substance use, suicidal ideation and psychosis (pp. 843–846)." },
        { ch: "ch23", dx: "level1-child", when: "Parent or guardian form for ages 6–17: mild (2), slight (1) for inattention and psychosis, Yes or Don’t Know on the six substance and suicide items (pp. 844–846)." },
        { ch: "ch23", dx: "level2-measures", when: "The in-depth follow-up for a flagged domain where one exists; online (pp. 844–846)." },
        { ch: "ch23", dx: "severity-measures", when: "Once the interview confirms a diagnosis, a disorder-specific measure tracks its severity (p. 842)." },
        { ch: "ch20", dx: "other-specified-mental-disorder", when: "The interview finds clinically significant distress or impairment that fits no specific criteria set (app guidance)." },
        { ch: "ch20", dx: "no-diagnosis", when: "A full interview finds no disorder: a positive screen alone needs no diagnosis (app guidance; p. 846)." },
        { ch: "ch24", dx: "cultural-formulation", when: "Cultural factors may shape how the form was answered; use the CFI where cultural dynamics matter (Section I p. 20)." }
      ]
    },
    {
      id: "tracking-change", title: "How do I show whether the patient is getting better?",
      intro: "Use **measurement-based care**: give standardized measures and use their results to track progress and refine the plan (pp. 841–842). Take a **baseline** at the first evaluation and repeat the same measures later (Section I p. 20): Level 1 and the relevant Level 2 for symptoms across domains (p. 846), a disorder-specific **severity measure** for the diagnosis (p. 842), the **psychosis dimensions** for a psychotic disorder (p. 851) and the **WHODAS 2.0** for functioning (p. 855). Repeat at intervals that match the stability of symptoms and treatment, with the **same informant** where one is used (p. 846). The [[helper:measures|measures helper]] picks the measure.",
      ask: ["Which measure did I use at baseline, and is it the same one now?", "Is the same person rating it (patient, informant, parent, clinician)?", "Does the recall window match: 2 weeks, 7 days or 30 days?", "Have symptoms improved while function has not?", "Has any new domain crossed its threshold since the last visit?", "Does the patient agree with what the numbers show?"],
      mustNotMiss: ["A **change of rater** (another relative, a different parent) that makes the scores incomparable (p. 846).", "**Residual impairment** on the WHODAS after symptoms improve, which raises relapse risk (p. 842).", "A new flag on **thoughts of self-harm** at follow-up: ask directly the same day (pp. 844–846).", "A WHODAS with **10 or more missing items**, whose general score should not be compared (p. 855)."],
      helpers: ["measures"],
      items: [
        { ch: "ch23", dx: "level1-adult", when: "Repeat the whole review of mental systems to catch new domains as well as change in old ones (p. 846)." },
        { ch: "ch23", dx: "level1-child", when: "Repeat with the same parent or guardian; add the child-rated form for ages 11–17 (p. 846)." },
        { ch: "ch23", dx: "level2-measures", when: "Repeat the Level 2 for the domain being treated (p. 846)." },
        { ch: "ch23", dx: "severity-measures", when: "Follow the diagnosis you made with its disorder-specific measure (p. 842)." },
        { ch: "ch23", dx: "psychosis-severity-dimensions", when: "Rate the eight dimensions at admission and at intervals, each for the worst of the past 7 days (p. 851)." },
        { ch: "ch23", dx: "whodas", when: "Compare average domain and general disability scores over time; functioning can lag behind symptoms (pp. 842, 855)." }
      ]
    },
    { id: "psychosis", title: "Hearing voices or unusual beliefs", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 psychosis domain (two items): slight (1) or greater; no Level 2, so ask directly. In the parent version psychosis is also a slight domain with no Level 2 (pp. 844–846)." },
      { ch: "ch23", dx: "psychosis-severity-dimensions", when: "Once a psychotic disorder is diagnosed, rate eight dimensions 0–4 for the worst of the past 7 days; five feed the Chapter 2 severity specifier (p. 851; Ch 2 p. 109)." }
    ] },
    { id: "low-mood", title: "Low mood or sadness", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 depression domain (two items): mild (2) or greater; Level 2 is the PROMIS depression short form (adult) or parent item bank (child) (pp. 844–845)." }
    ] },
    { id: "anxious", title: "Anxiety, worry or nervousness", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 anxiety domain (three items): mild (2) or greater; Level 2 is the PROMIS anxiety short form (adult) or parent item bank (child) (pp. 844–845)." }
    ] },
    { id: "suicidal", title: "Suicidal thoughts", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 suicidal ideation item: slight (1) or greater; no Level 2, ask directly the same day (pp. 844, 846)." },
      { ch: "ch23", dx: "level1-child", when: "Parent version suicidal ideation and lifetime attempt items: Yes or Don’t Know; no Level 2, ask the child directly (pp. 845–846, 850)." }
    ] },
    { id: "heavy-use", title: "Drinking or drug use getting out of hand", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 substance use domain (three items): slight (1) or greater; Level 2 adapted from the NIDA-Modified ASSIST (pp. 844, 846)." },
      { ch: "ch23", dx: "level1-child", when: "Parent version substance items: Yes → parent Level 2 (adapted NIDA-modified ASSIST); Don’t Know → child-rated version for ages 11–17 (pp. 845–846)." }
    ] },
    { id: "inattention", title: "Inattention, restlessness or impulsivity", items: [
      { ch: "ch23", dx: "level1-child", when: "Parent version inattention item: slight (1) or greater; Level 2 is the SNAP-IV. The adult Level 1 has no inattention domain, so ask directly (pp. 844–846)." }
    ] },
    { id: "memory-older", title: "Memory complaints with low mood in an older adult", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 memory item: mild (2) or greater; no Level 2, ask directly; an informant may complete the form when capacity is impaired (pp. 843–844)." },
      { ch: "ch23", dx: "whodas", when: "For daily functioning, the proxy WHODAS can be completed by a knowledgeable informant when capacity is impaired (p. 854)." }
    ] },
    { id: "body-symptoms", title: "Physical symptoms that won’t go away", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 somatic symptoms domain (two items): mild (2) or greater; Level 2 is the PHQ-15 Somatic Symptom Severity Scale, adult and parent versions (pp. 844–845)." }
    ] },
    { id: "elevated", title: "Elevated or irritable mood with little sleep", items: [
      { ch: "ch23", dx: "level1-adult", when: "Adult Level 1 mania domain (two items): mild (2) or greater; Level 2 is the Altman Self-Rating Mania Scale. These items were the least reliable in the Field Trials (Narrow et al. 2013; research, outside the DSM), so ask an informant (p. 844)." }
    ] }
  ]);
})();
