/* Chapter 11 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  var NOBLAME = "Explain that wetting and soiling are **not deliberate laziness** in most children; stop **punishment**, which worsens shame and withholding. Ask about teasing and safety at home.";
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "enuresis",
      ask: [
        ["A Wetting", "“Does your child wet the bed, their clothes, or both?”", "Ask the child too, privately: “Does it bother you?”"],
        ["B Frequency", "“How many wet nights or days in a usual week, and for how many months?”", "A 2-week diary helps."],
        ["B Impact", "“Does wetting stop them from sleepovers, camp or sport? Are they teased?”", "Distress or impairment can satisfy B."],
        ["C Development", "“How old was your child when they walked, talked and were dry by day?”", "Use developmental age."],
        ["D Medical", "“Is your child very thirsty, losing weight, in pain when passing urine, or dribbling all the time?”", "Diabetes, UTI, structural causes."],
        ["D Medication", "“Did the wetting start after any new medicine?”", "Antipsychotics, diuretics."],
        ["Subtype", "“Does it happen at night, in the day, or both? Do they rush to the toilet or hold on too long?”"],
        ["Course", "“Has your child ever been dry for 6 months or more?”", "Primary versus secondary."],
        ["Bowels and sleep", "“How often do they open their bowels? Do they snore or stop breathing at night?”", "Constipation and sleep apnea."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Education and reassurance, treat **constipation** first, then an **enuresis alarm** or **desmopressin** as first-line options for nocturnal enuresis (ICCS 2020; NICE CG111; Cochrane 2025).",
        points: [
          NOBLAME,
          "**Alarm**: works over weeks to months, needs a motivated family, and has a **lower relapse** rate than desmopressin.",
          "**Desmopressin**: oral tablet or melt at bedtime; best with **nocturnal polyuria** and for quick results (camps). **Limit fluids** from 1 hour before to 8 hours after the dose to prevent **hyponatremia**; the intranasal form is no longer recommended for enuresis. Relapse after stopping is common.",
          "A 2025 Cochrane review: desmopressin made 14 dry nights about **3 times** as likely as placebo (NNT about 5); adding an alarm or an anticholinergic helps modestly.",
          "Daytime wetting: timed voiding and bladder training; **anticholinergics** (e.g., oxybutynin) for an overactive bladder.",
          "[[stahl:drugs/imipramine|Imipramine]] is **third line** for refractory cases under specialist care: **cardiotoxic**, and dangerous in overdose.",
          "Refer for snoring with apneas (adenotonsillectomy helps about half), neurological signs, constant dribbling or recurrent febrile UTIs."
        ],
        stahl: [["Imipramine", "drugs/imipramine"], ["Tricyclic antidepressants", "c/ch07/guide/s7-tca"]]
      }
    },
    {
      id: "encopresis",
      ask: [
        ["A Soiling", "“Where are the stools found: underwear, floor, hidden somewhere?”", "Hidden or smeared stools may be accidental cleanup."],
        ["B Frequency", "“How many accidents in a month, and for how many months?”", "At least monthly for 3 months."],
        ["C Development", "“When was your child toilet-trained, and how did it go?”"],
        ["D Medical", "“Any diarrhea, blood in the stool, weight loss, back or leg problems?”", "Diarrhea, spina bifida and anal stenosis exclude."],
        ["D Substance", "“Is your child taking laxatives or any other medicine?”"],
        ["Subtype", "“How often does your child pass a stool? Is it big, hard or painful? Do they hide or cross their legs to hold it in?”", "Constipation and withholding."],
        ["Exam", "Feel the abdomen; inspect the anus and the lower spine.", "Impaction supports the constipation subtype."],
        ["Context", "“What happens at home when there is an accident? Anything stressful lately: a new sibling, school, bullying?”", "Screen for oppositional behavior and safety."]
      ],
      tx: {
        asOf: "October 2026",
        first: "With constipation: **disimpaction** then daily maintenance **polyethylene glycol**, with education and a toilet routine (ESPGHAN/NASPGHAN 2026).",
        points: [
          NOBLAME,
          "**Disimpaction**: high-dose oral PEG or enemas for **3–6 days**; then maintenance PEG, often for months, weaned only after regular soft stools.",
          "Scheduled toilet sitting after meals with a footstool; praise or a reward chart for sitting, not for clean pants alone.",
          "Behavioral therapy is an **adjunct** to laxatives, not a replacement. Fluids, fiber and activity as for any child.",
          "Without constipation: behavioral treatment and parent management training; assess and treat **ODD or conduct disorder**; take a careful psychosocial history.",
          "Refer for red flags: onset in the first month of life, delayed meconium, failure to thrive, abnormal spinal or neurological findings, bloody stools."
        ],
        stahl: []
      }
    },
    {
      id: "other-specified-elimination",
      ask: [
        ["Reason", "“How often, and for how long, has this happened?”", "Record why full criteria are not met."],
        ["Impact", "“How much does it upset your child or limit what they do?”", "Distress or impairment is required."]
      ]
    },
    {
      id: "unspecified-elimination",
      ask: [
        ["Information", "“Who knows this child’s history? When did this start?”", "Revise once the history is available."]
      ]
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "bedwetting", title: "Bedwetting or daytime wetting",
      intro: "Check **age** (developmental 5), **frequency and duration** (twice weekly for 3 months, or distress), and **medical or medication causes** first. Then decide night, day or both, and look for **constipation** and **sleep apnea**.",
      ask: ["How many wet nights or days a week, for how long?", "Ever dry for 6 months?", "Thirst, weight loss, pain on passing urine, constant dribbling?", "Bowel habits?", "Snoring or pauses in breathing?", "Any new medicine?", "How do the family respond to wet nights?"],
      mustNotMiss: ["**Diabetes mellitus or insipidus** (polyuria, thirst, weight loss).", "**UTI**, structural or **neurogenic** causes (dribbling, abnormal spine or gait).", "**Medication** effects: antipsychotics such as clozapine, diuretics.", "**Punishment** or maltreatment at home."],
      helpers: ["elimination"],
      items: [
        { ch: "ch11", dx: "enuresis", when: "Age 5+, twice weekly for 3 months or distress, no medical or drug cause." },
        { ch: "ch11", dx: "encopresis", when: "Soiling and constipation often come with wetting." },
        { ch: "ch11", dx: "other-specified-elimination", when: "Subthreshold wetting with a stated reason (N39.498)." },
        { ch: "ch11", dx: "unspecified-elimination", when: "Not enough information, e.g., the emergency room (R32)." },
        { ch: "ch05", dx: "social-anxiety", when: "Avoiding school toilets, leading to daytime wetting." },
        { ch: "ch07", dx: "ptsd", when: "New wetting after trauma, with re-experiencing and avoidance." }
      ]
    },
    {
      id: "soiling", title: "Soiling or fecal accidents",
      intro: "Check **age** (developmental 4) and **frequency** (monthly for 3 months). Ask about **stool pattern and withholding** and examine the abdomen: most soiling is **overflow from constipation**. Deliberate soiling with normal stools suggests oppositional or conduct problems.",
      ask: ["How often does your child pass a stool, and what is it like?", "Pain, hiding or leg-crossing to hold it in?", "Where are the stools found?", "Any diarrhea, blood or weight loss?", "Laxatives or other medicines?", "What happens at home after an accident?"],
      mustNotMiss: ["**Fecal impaction** with overflow mistaken for diarrhea.", "**Neurological or structural** causes: spina bifida, anal stenosis, Hirschsprung disease.", "**Hypothyroidism** or celiac disease behind constipation.", "**Abuse or neglect**: soiling is more common after early maltreatment."],
      helpers: ["elimination"],
      items: [
        { ch: "ch11", dx: "encopresis", when: "Age 4+, monthly for 3 months; usually with constipation and overflow." },
        { ch: "ch11", dx: "enuresis", when: "Wetting often coexists." },
        { ch: "ch11", dx: "other-specified-elimination", when: "Subthreshold soiling with distress (R15.9)." },
        { ch: "ch10", dx: "bulimia", when: "Fecal accidents from laxative misuse in an adolescent." },
        { ch: "ch07", dx: "ptsd", when: "Regression with soiling after trauma." }
      ]
    },
    {
      id: "neglected-child", title: "A young child after neglect or institutional care",
      items: [
        { ch: "ch11", dx: "encopresis", when: "Soiling, more common after early abuse or neglect." },
        { ch: "ch11", dx: "enuresis", when: "Wetting; very common in children from institutions." }
      ]
    },
    {
      id: "irritable-child", title: "Irritability or temper outbursts in a child",
      items: [
        { ch: "ch11", dx: "encopresis", when: "Deliberate soiling without constipation, often with oppositional behavior." }
      ]
    }
  ]);
})();
