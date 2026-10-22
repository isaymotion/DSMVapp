/*
 * Diagnostic helpers for Chapter 7 (Trauma- and Stressor-Related Disorders), DSM-5-TR pp. 295–328.
 * "trauma": from the event and the timing to PTSD, acute stress disorder, adjustment disorder, prolonged grief or other.
 * "attachment": reactive attachment disorder vs disinhibited social engagement disorder vs look-alikes.
 */
SP.helpers = (SP.helpers || []).concat([
  {
    id: "trauma",
    chapter: "ch07",
    title: "Which trauma- or stressor-related disorder?",
    summary: "Start from the event, then the timing and the symptom count, to reach PTSD, acute stress disorder, an adjustment disorder, prolonged grief disorder or another diagnosis.",
    caution: "A teaching aid built from DSM-5-TR pp. 295–328. A stressor never excludes another disorder: if MDD, panic disorder or a psychotic disorder is met, diagnose it. Ask about suicide, substance use and ongoing danger.",
    start: "event",
    nodes: {
      event: {
        q: "What was the event?",
        help: "Criterion A: actual or threatened death, serious injury or sexual violence, experienced directly, witnessed in person, learned about (violent or accidental if a death), or met through repeated work exposure to details. Natural deaths learned about and non-work media do not count.",
        options: [
          { label: "A Criterion A trauma", to: "timing", note: "A Criterion A event." },
          { label: "The death of a close person (any cause)", to: "griefwhen", note: "Bereavement." },
          { label: "Another stressor (divorce, job loss, illness, a move)", to: "adjother", note: "A non-Criterion A stressor." },
          { label: "Neglect or repeated caregiver changes in early childhood", to: "r:attach", note: "Insufficient early care." }
        ]
      },
      timing: {
        q: "How long since the trauma, and how long have the symptoms lasted?",
        help: "PTSD symptoms may start immediately even when full criteria come later.",
        options: [
          { label: "Less than 3 days", to: "r:tooearly", note: "Under 3 days." },
          { label: "3 days to 1 month", to: "asdcount", note: "The acute window." },
          { label: "More than 1 month", to: "ptsdcount", note: "The PTSD window." }
        ]
      },
      asdcount: {
        q: "Are 9 or more of the 14 acute stress symptoms present (intrusion, negative mood, dissociation, avoidance, arousal), with distress or impairment?",
        help: "Intrusion (memories, dreams, flashbacks, cue reactions), inability to feel positive emotions, altered reality, amnesia, two kinds of avoidance, sleep, irritability, hypervigilance, concentration, startle. Exclude brief psychotic disorder, substances and mild TBI.",
        options: [
          { label: "Yes", to: "r:asd", note: "9 or more of 14." },
          { label: "No, but there is clinically significant distress or impairment", to: "r:adjtrauma", note: "Subthreshold acute response." }
        ]
      },
      ptsdcount: {
        q: "Are all four PTSD clusters met: ≥1 intrusion, ≥1 avoidance, ≥2 negative cognition/mood, ≥2 arousal?",
        help: "For children 6 and younger: ≥1 intrusion, ≥1 avoidance or negative cognition, ≥2 arousal.",
        options: [
          { label: "Yes", to: "ptsddelay", note: "Full PTSD criteria." },
          { label: "No, and it has been 6 months or less since the stressor or its consequences ended", to: "r:adjtrauma", note: "Subthreshold within the adjustment window." },
          { label: "No, and the subthreshold symptoms have lasted more than 6 months", to: "r:subptsd", note: "Persistent subthreshold PTSD." }
        ]
      },
      ptsddelay: {
        q: "Were full criteria first met at least 6 months after the event?",
        help: "Some symptoms may have begun immediately.",
        options: [
          { label: "No", to: "ptsddiss", note: "Not delayed." },
          { label: "Yes", to: "ptsddissd", note: "With delayed expression." }
        ]
      },
      ptsddiss: {
        q: "Are there persistent or recurrent depersonalization or derealization, not due to substances or seizures?",
        help: "Feeling detached from one’s body or mind, or that the world is unreal.",
        options: [
          { label: "Yes", to: "r:ptsddiss", note: "With dissociative symptoms." },
          { label: "No", to: "r:ptsd", note: "No dissociative symptoms." }
        ]
      },
      ptsddissd: {
        q: "Are there persistent or recurrent depersonalization or derealization, not due to substances or seizures?",
        help: "Feeling detached from one’s body or mind, or that the world is unreal.",
        options: [
          { label: "Yes", to: "r:ptsdboth", note: "With dissociative symptoms." },
          { label: "No", to: "r:ptsddelayed", note: "No dissociative symptoms." }
        ]
      },
      griefwhen: {
        q: "How long since the death, and how is the person grieving?",
        help: "Prolonged grief needs 12 months (6 in children and adolescents). A major depressive episode can be diagnosed at any time after a death. If the death was violent or accidental, also consider PTSD.",
        options: [
          { label: "≥12 months (≥6 in youth), with intense yearning or preoccupation nearly every day", to: "pgdcount", note: "Within the prolonged grief window." },
          { label: "Less than 12 months, with grief out of proportion or impairing", to: "r:adjgrief", note: "Early impairing grief." },
          { label: "Waves of grief that ease, self-esteem preserved, within cultural norms", to: "r:normal", note: "Normal grief." },
          { label: "Pervasive low mood, worthlessness, anhedonia (full major depressive episode)", to: "r:mde", note: "Depressive symptoms." }
        ]
      },
      pgdcount: {
        q: "Are at least 3 of the 8 present nearly every day for the last month: identity disruption, disbelief, avoidance of reminders, emotional pain, difficulty reintegrating, numbness, meaninglessness, loneliness, with impairment beyond cultural norms?",
        help: "Anniversary surges alone do not count.",
        options: [
          { label: "Yes", to: "r:pgd", note: "Prolonged grief criteria met." },
          { label: "No", to: "r:subgrief", note: "Subthreshold prolonged grief." }
        ]
      },
      adjother: {
        q: "Does the reaction meet criteria for another mental disorder (e.g., MDD, GAD, panic disorder)?",
        help: "Adjustment disorder is used only when no other disorder explains the reaction.",
        options: [
          { label: "No", to: "adjtime", note: "No other disorder." },
          { label: "Yes", to: "r:otherdx", note: "Another disorder is met." }
        ]
      },
      adjtime: {
        q: "Did symptoms start within 3 months of the stressor, with out-of-proportion distress or impairment?",
        help: "Normal upset after adversity is not a disorder.",
        options: [
          { label: "Yes", to: "adjsub", note: "Within 3 months and clinically significant." },
          { label: "They started more than 3 months after the stressor", to: "r:adjdelayed", note: "Delayed onset." },
          { label: "Expected upset without impairment", to: "r:normative", note: "Normative reaction." }
        ]
      },
      adjsub: {
        q: "Which symptoms predominate?",
        help: "Then specify acute (<6 months) or persistent (≥6 months with a chronic stressor).",
        options: [
          { label: "Low mood, tearfulness, hopelessness", to: "r:adj21", note: "Depressed mood." },
          { label: "Nervousness, worry, jitteriness", to: "r:adj22", note: "Anxiety." },
          { label: "Both depression and anxiety", to: "r:adj23", note: "Mixed." },
          { label: "Conduct problems", to: "r:adj24", note: "Conduct." },
          { label: "Emotional symptoms and conduct problems", to: "r:adj25", note: "Mixed emotions and conduct." }
        ]
      }
    },
    results: {
      tooearly: { label: "Too early", dx: "No disorder yet: an acute reaction", line: "Acute stress disorder needs symptoms for at least 3 days.", points: ["Offer support and safety; reassess after 3 days.", "Screen for injury, intoxication and suicidality."], link: { ch: "ch07", sec: "s7-asd-criteria", label: "Acute stress disorder" } },
      asd: { dx: "Acute stress disorder (F43.0)", line: "Nine or more of 14 symptoms, 3 days to 1 month after a Criterion A trauma.", points: ["If symptoms persist beyond 1 month and meet PTSD criteria, change the diagnosis to PTSD.", "Catastrophic appraisals predict persistence."], link: { ch: "ch07", sec: "s7-asd-criteria", label: "Acute stress disorder" }, dxId: "acute-stress" },
      adjtrauma: { dx: "Adjustment disorder (F43.2x)", line: "A Criterion A event with symptoms below the ASD or PTSD threshold, within the adjustment window.", points: ["Choose the subtype by predominant symptoms.", "If subthreshold symptoms last beyond 6 months, use other specified (persistent response with PTSD-like symptoms)."], link: { ch: "ch07", sec: "s7-adjust-ddx", label: "Adjustment vs PTSD" }, dxId: "adjustment" },
      subptsd: { dx: "Other specified trauma- and stressor-related disorder (F43.89)", line: "Persistent response to trauma with PTSD-like symptoms (subthreshold or partial PTSD) beyond 6 months.", points: ["Record the reason after the diagnosis.", "Printed as F43.8 in DSM-5-TR."], link: { ch: "ch07", sec: "s7-other", label: "Other specified" }, dxId: "other-specified-trauma" },
      ptsd: { dx: "Posttraumatic stress disorder (F43.10)", line: "All four clusters for more than 1 month.", points: ["Screen for depression, substance use and suicidal thoughts.", "Consider TBI if the trauma involved head injury."], link: { ch: "ch07", sec: "s7-ptsd-criteria", label: "PTSD criteria" }, dxId: "ptsd" },
      ptsddiss: { dx: "PTSD (F43.10), with dissociative symptoms", line: "Full PTSD plus persistent depersonalization or derealization.", points: ["Exclude alcohol blackouts and complex partial seizures."], link: { ch: "ch07", sec: "s7-ptsd-criteria", label: "PTSD specifiers" }, dxId: "ptsd" },
      ptsddelayed: { dx: "PTSD (F43.10), with delayed expression", line: "Full criteria first met at least 6 months after the event.", points: ["Some symptoms may have started immediately."], link: { ch: "ch07", sec: "s7-ptsd-criteria", label: "PTSD specifiers" }, dxId: "ptsd" },
      ptsdboth: { dx: "PTSD (F43.10), with dissociative symptoms, with delayed expression", line: "Full criteria first met at least 6 months after the event, with persistent depersonalization or derealization.", points: [], link: { ch: "ch07", sec: "s7-ptsd-criteria", label: "PTSD specifiers" }, dxId: "ptsd" },
      adjgrief: { dx: "Adjustment disorder (F43.2x) after a death", line: "Out-of-proportion or impairing grief within the first 12 months that does not meet another disorder.", points: ["Reassess at 12 months for prolonged grief disorder.", "If the death was violent, screen for PTSD."], link: { ch: "ch07", sec: "s7-adjust-ddx", label: "Bereavement and adjustment" }, dxId: "adjustment" },
      normal: { label: "No mental disorder", dx: "Normal grief", line: "Grief within cultural norms, easing over time; anniversary surges are normal.", points: ["Sensing or hearing the deceased is common and often comforting."], link: { ch: "ch07", sec: "s7-pgd-ddx", label: "Grief distinctions" } },
      mde: { dx: "Major depressive episode", line: "Diagnose MDD (or a bipolar disorder) when full criteria are met, even after a death.", points: ["Prolonged grief disorder can coexist when its criteria are separately met."], link: { ch: "ch04", sec: "s4-grief", label: "Grief and depression (Chapter 4)" }, dxId: "mdd", also: { href: "#/helpers/grief", label: "Grief or depression helper" } },
      pgd: { dx: "Prolonged grief disorder (F43.81)", line: "Yearning or preoccupation plus 3 of 8, nearly every day for the last month, at least 12 months after the death (6 in youth), beyond cultural norms.", points: ["Printed as F43.8 in DSM-5-TR.", "Screen for MDD, PTSD (violent deaths) and suicidal ideation."], link: { ch: "ch07", sec: "s7-pgd-criteria", label: "Prolonged grief criteria" }, dxId: "pgd" },
      subgrief: { dx: "Other specified trauma- and stressor-related disorder (F43.89)", line: "Impairing grief persisting beyond 12 months that falls short of prolonged grief disorder.", points: ["Record the reason."], link: { ch: "ch07", sec: "s7-adjust-ddx", label: "Bereavement" }, dxId: "other-specified-trauma" },
      otherdx: { label: "Not an adjustment disorder", dx: "Diagnose the other disorder", line: "If the reaction meets MDD, GAD, panic disorder or another disorder, diagnose that instead of an adjustment disorder.", points: ["Adjustment disorder can coexist only if the other disorder does not explain the stress reaction."], link: { ch: "ch07", sec: "s7-adjust-ddx", label: "Adjustment differential" } },
      adjdelayed: { dx: "Other specified trauma- and stressor-related disorder (F43.89)", line: "Adjustment-like disorder with delayed onset (more than 3 months after the stressor).", points: [], link: { ch: "ch07", sec: "s7-other", label: "Other specified" }, dxId: "other-specified-trauma" },
      normative: { label: "No mental disorder", dx: "Normative stress reaction", line: "Expected distress after adversity, within cultural norms, without impairment.", points: [], link: { ch: "ch07", sec: "s7-adjust-ddx", label: "Normative reactions" } },
      adj21: { dx: "Adjustment disorder with depressed mood (F43.21)", line: "Specify acute (<6 months) or persistent (≥6 months with a chronic stressor).", points: ["Symptoms must end within 6 months after the stressor ends."], link: { ch: "ch07", sec: "s7-adjust", label: "Adjustment disorders" }, dxId: "adjustment" },
      adj22: { dx: "Adjustment disorder with anxiety (F43.22)", line: "Specify acute or persistent.", points: [], link: { ch: "ch07", sec: "s7-adjust", label: "Adjustment disorders" }, dxId: "adjustment" },
      adj23: { dx: "Adjustment disorder with mixed anxiety and depressed mood (F43.23)", line: "Specify acute or persistent.", points: [], link: { ch: "ch07", sec: "s7-adjust", label: "Adjustment disorders" }, dxId: "adjustment" },
      adj24: { dx: "Adjustment disorder with disturbance of conduct (F43.24)", line: "Specify acute or persistent.", points: ["Rule out conduct disorder."], link: { ch: "ch07", sec: "s7-adjust", label: "Adjustment disorders" }, dxId: "adjustment" },
      adj25: { dx: "Adjustment disorder with mixed disturbance of emotions and conduct (F43.25)", line: "Specify acute or persistent.", points: [], link: { ch: "ch07", sec: "s7-adjust", label: "Adjustment disorders" }, dxId: "adjustment" },
      attach: { label: "Go to the attachment helper", dx: "Reactive attachment disorder or disinhibited social engagement disorder", line: "Neglect in early childhood leads to the attachment disorders.", points: [], link: { ch: "ch07", sec: "s7-attach-ddx", label: "RAD or DSED" }, also: { href: "#/helpers/attachment", label: "Attachment helper" } }
    }
  },
  {
    id: "attachment",
    chapter: "ch07",
    title: "RAD, DSED or something else?",
    summary: "For a child with a history of neglect or unusual social behavior: work through attachment behavior, behavior with strangers, developmental age and look-alikes.",
    caution: "A teaching aid built from DSM-5-TR pp. 295–301. Use several informants and structured observation; check growth, hearing, development and safety.",
    start: "neglect",
    nodes: {
      neglect: {
        q: "Has the child experienced extremes of insufficient care?",
        help: "Persistent social neglect or deprivation, repeated changes of primary caregivers (e.g., foster placements), or institutional rearing with high child-to-caregiver ratios.",
        options: [
          { label: "Yes", to: "devage", note: "Insufficient care." },
          { label: "No", to: "lookalike", note: "No neglect history." }
        ]
      },
      devage: {
        q: "Is the child’s developmental age at least 9 months?",
        help: "Selective attachments normally form by about 9 months.",
        options: [
          { label: "Yes", to: "pattern", note: "Developmentally able to attach." },
          { label: "No", to: "r:tooyoung", note: "Too young developmentally." }
        ]
      },
      pattern: {
        q: "Which pattern fits best?",
        help: "Observe the child with caregivers and with strangers.",
        options: [
          { label: "Withdrawn: rarely seeks or accepts comfort from caregivers, little positive affect, unexplained fear or sadness", to: "radchecks", note: "Inhibited pattern." },
          { label: "Overfriendly: approaches strangers, overfamiliar, does not check back, would go off with a stranger", to: "dsedadhd", note: "Disinhibited pattern." },
          { label: "Seeks comfort from caregivers, behaves appropriately with strangers", to: "r:nodisorder", note: "Attachment and social behavior intact." }
        ]
      },
      radchecks: {
        q: "Was it evident before age 5, and are criteria for autism spectrum disorder not met?",
        help: "Autism: restricted interests, rituals, selective social communication deficits, attachment typical for developmental level.",
        options: [
          { label: "Yes to both", to: "r:rad", note: "RAD criteria." },
          { label: "Autism criteria are met", to: "r:autism", note: "Autism." },
          { label: "First evident after age 5", to: "r:late", note: "Late presentation." }
        ]
      },
      dsedadhd: {
        q: "Is the behavior more than impulsivity, i.e., socially disinhibited, rather than part of ADHD?",
        help: "Children with DSED do not show attention problems or hyperactivity; but the two often co-occur.",
        options: [
          { label: "Yes: socially disinhibited", to: "r:dsed", note: "DSED criteria." },
          { label: "No: only impulsivity with attention and activity problems", to: "r:adhd", note: "ADHD." }
        ]
      },
      lookalike: {
        q: "What is the main concern?",
        help: "Without neglect, consider other explanations.",
        options: [
          { label: "Limited social reciprocity with restricted interests or rituals", to: "r:autism", note: "Autism features." },
          { label: "Global delays with social skills matching cognitive level", to: "r:id", note: "Intellectual disability." },
          { label: "Sadness and low positive affect, but still seeks comfort", to: "r:depression", note: "Depressive features." },
          { label: "Impulsive, hyperactive, inattentive", to: "r:adhd", note: "ADHD features." }
        ]
      }
    },
    results: {
      rad: { dx: "Reactive attachment disorder (F94.1)", line: "Specify persistent (>12 months) and severe if all symptoms are present at high levels.", points: ["Look for associated delays, stereotypies and malnutrition.", "Prognosis depends on the quality of caregiving now."], link: { ch: "ch07", sec: "s7-rad", label: "RAD" }, dxId: "rad" },
      dsed: { dx: "Disinhibited social engagement disorder (F94.2)", line: "Specify persistent (>12 months) and severe if all symptoms are present at high levels.", points: ["Can occur with secure attachments to current caregivers.", "Often persists despite good care; screen for ADHD."], link: { ch: "ch07", sec: "s7-dsed", label: "DSED" }, dxId: "dsed" },
      tooyoung: { label: "Not yet", dx: "Developmental age under 9 months", line: "RAD and DSED cannot be diagnosed before a child can form selective attachments.", points: ["Address the neglect and reassess."], link: { ch: "ch07", sec: "s7-rad", label: "RAD" } },
      nodisorder: { label: "No attachment disorder", dx: "Neglect without RAD or DSED", line: "Most severely neglected children do not develop either disorder.", points: ["Monitor development and other mental health problems."], link: { ch: "ch07", sec: "s7-rad", label: "RAD" } },
      autism: { label: "Consider", dx: "Autism spectrum disorder", line: "Restricted interests, rituals, selective social communication deficits, with attachment present.", points: ["RAD cannot be diagnosed if autism criteria are met; DSED can co-occur with autism."], link: { ch: "ch07", sec: "s7-attach-ddx", label: "RAD vs autism" } },
      late: { label: "Caution", dx: "RAD requires evidence before age 5", line: "Less is known about RAD in older children; diagnose with caution.", points: ["Consider trauma-related, depressive or other disorders."], link: { ch: "ch07", sec: "s7-rad", label: "RAD" } },
      adhd: { label: "Consider", dx: "ADHD", line: "Social impulsivity with attention and activity problems.", points: ["DSED and ADHD often co-occur."], link: { ch: "ch07", sec: "s7-dsed", label: "DSED differential" } },
      id: { label: "Consider", dx: "Intellectual developmental disorder", line: "Social and emotional skills match cognitive level, and selective attachments appear by a cognitive age of 7–9 months.", points: [], link: { ch: "ch07", sec: "s7-attach-ddx", label: "RAD differential" } },
      depression: { label: "Consider", dx: "A depressive disorder", line: "Young children with depression still seek and respond to comfort.", points: [], link: { ch: "ch07", sec: "s7-attach-ddx", label: "RAD differential" }, dxId: "mdd" }
    }
  }
]);
