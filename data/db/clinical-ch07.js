/* Chapter 7 clinical extras, merged into the disorder library when the app loads (js/practice.js).
   ask: [criterion, plain-language question, optional tip]   — "How to ask it" on each disorder page
   tx:  treatment bridge, clearly labeled as outside the DSM, linking to the Stahl Study Companion
        (paths are relative to https://isaymotion.github.io/Stahl/#/)
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge. */
(function () {
  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "ptsd",
      ask: [
        ["A Event", "“Have you ever been through something where you thought you or someone else might die or be seriously hurt, or something sexual that was forced on you?”", "Use a trauma checklist; ask about the worst event. Do not push for details at first."],
        ["B Intrusion", "“Do memories of it pop into your mind when you don’t want them? Nightmares? Times you feel it is happening again?”"],
        ["B Cues", "“What happens in your body when something reminds you of it?”"],
        ["C Avoidance", "“Do you try hard not to think about it, or stay away from places, people or things that remind you?”"],
        ["D Cognition and mood", "“Has it changed how you see yourself or the world? Do you blame yourself? Do you feel cut off from people or unable to feel happy?”"],
        ["E Arousal", "“Are you jumpy, always on guard, irritable? How are your sleep and concentration? Have you done risky things?”"],
        ["F Duration", "“When did this start, and how long has it lasted?”", "More than 1 month; delayed expression if full criteria came 6 months or more later."],
        ["Dissociation", "“Do you ever feel detached from your body, or that things around you are unreal?”"],
        ["Safety", "“Have you had thoughts of ending your life? Are you still in danger? How much are you drinking or using?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Trauma-focused psychotherapy** is first-line: prolonged exposure (PE), cognitive processing therapy (CPT), trauma-focused CBT, or EMDR. Medication: an SSRI or SNRI; FDA-approved: [[stahl:drugs/sertraline|sertraline]] and [[stahl:drugs/paroxetine|paroxetine]]; [[stahl:drugs/venlafaxine|venlafaxine]] is also recommended in guidelines.",
        points: [
          "Avoid **benzodiazepines**: they do not help PTSD and may worsen outcomes and interfere with exposure therapy.",
          "Nightmares: [[stahl:drugs/prazosin|prazosin]] is widely used, with mixed trial evidence; imagery rehearsal therapy is an option.",
          "Treat comorbid substance use, depression and sleep problems; assess suicide risk.",
          "Not approved: the FDA declined MDMA-assisted therapy in August 2024 and brexpiprazole plus sertraline in 2025, so no new PTSD drug is approved as of October 2026."
        ],
        stahl: [["PTSD", "c/ch08/guide/s8-ptsd"], ["Fear extinction", "c/ch08/guide/s8-extinction"], ["Reconsolidation and novel approaches", "c/ch08/guide/s8-novel"], ["SSRIs", "c/ch07/guide/s7-ssri"]]
      }
    },
    {
      id: "acute-stress",
      ask: [
        ["A Event", "“What happened, and when?”", "Symptoms must last at least 3 days and no more than 1 month."],
        ["Dissociation", "“Since then, have you felt dazed, as if things were unreal, or unable to remember parts of it?”"],
        ["Intrusion and avoidance", "“Do memories or dreams of it keep coming back? Are you avoiding reminders?”"],
        ["Arousal", "“How are your sleep, temper, concentration and jumpiness?”"],
        ["Appraisals", "“What do you think this means for you and your future? Do you blame yourself?”", "Catastrophic appraisals predict persistence."]
      ],
      tx: {
        asOf: "October 2026",
        first: "Practical support, safety and information (psychological first aid); **trauma-focused CBT** for acute stress disorder reduces later PTSD.",
        points: ["Avoid routine single-session psychological debriefing, which is not recommended and may be harmful.", "Avoid benzodiazepines for prevention of PTSD.", "Follow up at 1 month for PTSD."],
        stahl: [["Fear extinction", "c/ch08/guide/s8-extinction"]]
      }
    },
    {
      id: "adjustment",
      ask: [
        ["A Stressor", "“What has been happening in your life recently? When did you start feeling this way?”", "Within 3 months."],
        ["B Proportion", "“How is this affecting your work, studies and relationships?”"],
        ["C Other disorders", "Screen for a major depressive episode, GAD, PTSD and substance use.", "If met, diagnose those instead."],
        ["E Course", "“Is the stressor still going on? How have you been since it ended?”"],
        ["Safety", "“Have you had any thoughts of harming yourself?”", "Adjustment disorders are linked with suicide attempts."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Brief psychotherapy** focused on the stressor: problem solving, supportive therapy, CBT, stress management; mobilize social support.",
        points: ["Medication is not routinely needed; treat specific symptoms (e.g., short-term sleep help) if necessary.", "Reassess if symptoms persist: another disorder may emerge."],
        stahl: []
      }
    },
    {
      id: "pgd",
      ask: [
        ["A Time", "“When did they die?”", "At least 12 months (6 in children and adolescents)."],
        ["B Core", "“How often do you long for them or find your mind full of them?”", "Nearly every day for the last month."],
        ["C Symptoms", "“Do you feel part of you died too? Do you still find it hard to believe? Do you avoid reminders that they are gone? Do you feel numb, lonely or that life has no meaning? Can you take part in life again?”"],
        ["E Norms", "“How do people in your family or community usually grieve, and for how long?”"],
        ["F Depression and trauma", "“Do you feel worthless or down about everything, not just the loss? Do you have nightmares or flashbacks of how they died?”"],
        ["Safety", "“Do you wish you could be with them? Have you thought of ending your life?”", "Suicidal ideation is common."]
      ],
      tx: {
        asOf: "October 2026",
        first: "**Prolonged grief disorder therapy** (complicated grief treatment), a targeted, grief-focused CBT-based psychotherapy, has the best evidence.",
        points: ["Antidepressants help comorbid depression but are less effective for grief symptoms alone.", "Screen for PTSD after violent deaths, and for substance use."],
        stahl: []
      }
    },
    {
      id: "rad",
      ask: [
        ["A Comfort", "To caregivers: “When your child is hurt or upset, does she come to you? Does she calm down when you comfort her?”"],
        ["B Affect", "“Does she smile and enjoy playing with you? Does she have sudden fearful or sad spells?”"],
        ["C History", "“Tell me about her care before she came to you: institutions, foster placements, neglect?”"],
        ["Development", "Assess developmental age, language, hearing, growth and nutrition."],
        ["E Autism", "Look for restricted interests, rituals and social communication deficits."]
      ],
      tx: {
        asOf: "October 2026",
        first: "A **stable, sensitive, responsive caregiver** is the core treatment; caregiver-focused interventions (e.g., attachment-based programs such as Attachment and Biobehavioral Catch-up, child-parent psychotherapy).",
        points: ["Address safety, nutrition, development and education.", "No medication treats attachment itself; coercive “holding therapies” are harmful and should be avoided."],
        stahl: []
      }
    },
    {
      id: "dsed",
      ask: [
        ["A Strangers", "“How does your child behave with people she doesn’t know? Would she go off with a stranger? Does she check back with you in a new place?”"],
        ["B Impulsivity", "Ask about attention and hyperactivity at home and school."],
        ["C History", "“What was her care like in her first years?”"]
      ],
      tx: {
        asOf: "October 2026",
        first: "Stable caregiving plus **caregiver-based interventions** that teach safe social boundaries and strengthen the attachment relationship.",
        points: ["Safety planning, because of the risk of going off with strangers.", "Treat comorbid ADHD."],
        stahl: []
      }
    },
    {
      id: "other-specified-trauma",
      tx: { asOf: "October 2026", first: "Treat according to the presentation: trauma-focused therapy for subthreshold PTSD; supportive and problem-focused therapy for adjustment-like presentations.", points: [], stahl: [] }
    },
    {
      id: "unspecified-trauma",
      tx: { asOf: "October 2026", first: "Ensure safety, gather the history of the stressor, and reassess for a specific diagnosis.", points: [], stahl: [] }
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "after-trauma", title: "Symptoms after a traumatic event",
      intro: "Find out **what happened**, **when**, and **which symptoms** followed. Timing decides much of the diagnosis: under 3 days, 3 days to 1 month, more than 1 month.",
      ask: ["What happened, and were you or someone else in danger of death, serious injury or sexual violence?", "How long ago?", "Memories, nightmares or flashbacks? Avoidance? Changes in how you see yourself and others? Jumpiness, anger, sleep?", "Do you feel detached or unreal?", "Alcohol or drugs? Thoughts of suicide? Still in danger?"],
      mustNotMiss: ["**Suicide risk**, especially with PTSD and substance use.", "**Ongoing danger**: domestic violence, abuse.", "**Head injury** (TBI) after accidents, blasts or assaults."],
      helpers: ["trauma"],
      items: [
        { ch: "ch07", dx: "acute-stress", when: "9 of 14 symptoms between 3 days and 1 month after the event." },
        { ch: "ch07", dx: "ptsd", when: "Intrusion, avoidance, cognition/mood and arousal for more than a month." },
        { ch: "ch07", dx: "adjustment", when: "Subthreshold symptoms, or any non-Criterion A stressor." },
        { ch: "ch07", dx: "other-specified-trauma", when: "Subthreshold PTSD lasting more than 6 months." },
        { ch: "ch04", dx: "mdd", when: "A full major depressive episode, alone or with PTSD." },
        { ch: "ch05", dx: "panic-disorder", when: "Unexpected attacks, not only after reminders." },
        { ch: "ch08", name: "Dissociative disorders", when: "Severe dissociation or amnesia without other trauma symptoms." }
      ]
    },
    {
      id: "after-loss", title: "Grief or low mood after a death",
      items: [
        { ch: "ch07", dx: "pgd", when: "Yearning or preoccupation plus 3 of 8 symptoms, ≥12 months after the death (6 in youth)." },
        { ch: "ch07", dx: "adjustment", when: "Out-of-proportion or impairing grief before 12 months." },
        { ch: "ch07", dx: "ptsd", when: "After a violent or accidental death: intrusions about the event, no yearning." }
      ]
    },
    {
      id: "stress-reaction", title: "Struggling after a life change or stressor",
      intro: "Distinguish a normal reaction from an adjustment disorder, and check whether another disorder is already met.",
      ask: ["What changed, and when?", "How is it affecting work, school and relationships?", "Do you meet criteria for depression, anxiety or substance use?", "Is the stressor still going on?", "Any thoughts of self-harm?"],
      mustNotMiss: ["**Suicide risk**, which is raised in adjustment disorders.", "A full **major depressive episode**."],
      helpers: ["trauma"],
      items: [
        { ch: "ch07", dx: "adjustment", when: "Within 3 months of the stressor, out of proportion or impairing, no other disorder." },
        { ch: "ch04", dx: "mdd", when: "Full major depressive episode criteria." },
        { ch: "ch05", dx: "gad", when: "6 months of uncontrollable worry about many things." },
        { ch: "ch07", dx: "other-specified-trauma", when: "Onset after 3 months, or lasting beyond 6 months without an ongoing stressor." }
      ]
    },
    {
      id: "neglected-child", title: "A young child after neglect or institutional care",
      intro: "Two opposite pictures follow neglect: a withdrawn child who does not seek comfort, or an indiscriminately friendly child. Assess development, growth and safety too.",
      ask: ["Does the child seek and accept comfort from caregivers?", "How does the child behave with strangers?", "What was early care like?", "Developmental age, language and hearing?", "Restricted interests or rituals?"],
      mustNotMiss: ["**Ongoing neglect or abuse.**", "**Malnutrition** and medical problems.", "**Autism** and developmental delay."],
      helpers: ["attachment"],
      items: [
        { ch: "ch07", dx: "rad", when: "Withdrawn, rarely seeks or responds to comfort, onset before 5." },
        { ch: "ch07", dx: "dsed", when: "Overly familiar with strangers, goes off with them." },
        { ch: "ch07", dx: "ptsd", when: "Trauma reenactment in play, nightmares, startle after a specific event." },
        { ch: "ch01", dx: "asd", when: "Restricted interests and rituals; attachment present." },
        { ch: "ch01", dx: "adhd", when: "Impulsivity with attention and activity problems." }
      ]
    }
  ]);
})();
