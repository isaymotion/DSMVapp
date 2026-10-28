/* Chapter 24 clinical extras (Section III, Culture and Psychiatric Diagnosis, pp. 859–879), merged into the disorder library
   when the app loads (js/practice.js).
   ask: [element, plain-language question, tip]   — "How to ask it" on each library page; every tip ends with its page
   tx:  orientation only, every line labeled as outside the DSM / app guidance; no Stahl pages exist for these concepts
   Complaint hub entries (SP.complaintData) are shared across chapters: entries with the same id merge.
   Nothing in this chapter is a diagnosis. The ten cultural concepts of distress are illustrations, and the chart gets the
   Section II disorder that is met (or an other specified category, or a Chapter 22 code) with the cultural term in the case
   formulation (p. 873). The CFI rows describe what each group of questions is for in the app’s own words; the interview
   itself is in the manual and online. Suicidal thoughts and behavior are handled in general clinical terms only. */
(function () {
  var ASOF = "October 2026";
  var NOTDX = "**Not a diagnosis**: a cultural concept of distress has no code. Chart the **Section II disorder that is met**, or an **other specified** category when the picture is clinically significant but below threshold, and name the concept in the **case formulation** (p. 873).";
  var INTERP = "Use a **trained interpreter** whenever the person’s best language is not yours; the Outline asks you to note language abilities and the need for an interpreter (p. 861). Avoid using children or the relative at the center of the conflict as the interpreter (app guidance).";
  var CRISIS = "If suicidal thoughts come up, ask about them directly and plan for safety; the Philippine **NCMH Crisis Hotline** is **1553** or **1800-1888-1553** nationwide, **0919-057-1553** (Smart/TNT), and **0917-899-8727** or **0966-351-4518** (Globe/TM), as published in September 2026 (outside the DSM; confirm current numbers before giving them out).";
  function care(first, points) {
    return { asOf: ASOF, first: "Outside the DSM / app guidance: " + first, points: [NOTDX].concat(points), stahl: [] };
  }

  SP.dxExtra = (SP.dxExtra || []).concat([
    {
      id: "cultural-formulation",
      ask: [
        ["Before the interview", "Collect the background details first: birthplace, age, gender, ethnic or racialized background, civil status and household, schooling, languages, faith, work, income and any migration.", "Tagalog aside: “Saan ka ipinanganak at lumaki? Anong wika ang pinakakomportable ka?” Tailor the later questions to these answers (p. 863)."],
        ["Domain 1: the problem in their words", "“Tell me about the trouble you’ve been having. If you had to give it a name, what would you call it?”", "Purpose: the person’s own understanding of the problem. Write down their word and keep using it in every later question (p. 864)."],
        ["Domain 1: how others hear it, what weighs most", "“When this comes up with your family or friends, how do you describe it to them? Which part of it bothers you the most?”", "Purpose: the framing used with the social network, and the aspect that matters most to the person (p. 864)."],
        ["Domain 2: causes", "“What do you think is behind this? And what do the people around you say is causing it?”", "Tagalog aside: “Ano sa tingin mo ang dahilan nito? Ano naman ang sabi ng pamilya mo?” Purpose: the explanatory model, which may hold several causes and may differ from the family’s (pp. 864–865)."],
        ["Domain 2: supports and stresses", "“Who or what helps you get through this? What makes it harder: money, family, work, school, being treated unfairly?”", "Purpose: social support and resilience on one side, stressors on the other (p. 865)."],
        ["Domain 2: identity", "“Which parts of who you are matter most to you: where you come from, your language, your faith, your family role, your gender or sexuality? Do any of them make this problem better or worse, or cause other worries?”", "Purpose: the role of cultural identity, including discrimination, migration and conflict across generations or over gender roles (p. 865)."],
        ["Domain 3: coping and past help", "“What have you done on your own to deal with this? Who else have you gone to: a doctor, a counselor, a priest or pastor, a healer? What helped, and what didn’t?”", "Tagalog aside: “Nagpatingin ka na ba sa albularyo o nagpadasal?” (the albularyo is a Philippine resource, outside the DSM). Purpose: self-coping and every source of care tried (pp. 865–866)."],
        ["Domain 3: barriers", "“Has anything gotten in the way of getting help: cost, work or family duties, worry about what people will say, or no one who speaks your language or knows your background?”", "Purpose: barriers to access and engagement, including stigma and discrimination (p. 866)."],
        ["Domain 4: help wanted now", "“What kind of help do you think would be most useful right now? Has anyone close to you suggested a different kind?”", "Purpose: the person’s preferences and the network’s view; probe if only one option is named (p. 866)."],
        ["Domain 4: our relationship", "“People from different backgrounds don’t always see a problem the same way, and that can happen between patients and clinicians too. Has anything about me or this clinic made you uneasy? What would help?”", "Purpose: the clinician-patient relationship, where perceived racism, language barriers or cultural differences can block care. If the person cannot answer (a child, florid psychosis, cognitive impairment), use the Informant version with someone who knows them (pp. 867–868)."]
      ],
      tx: care("the CFI is an **assessment tool**, not a treatment. Use what it elicits to negotiate the plan: name the problem with the person’s own word, explain the Section II diagnosis in relation to their explanation, agree on goals they value, and decide together how the family and any other healers fit in.", [
        "The CFI is meant to improve the **cultural validity** of the assessment, **treatment planning**, and **engagement and satisfaction**; fold its answers into the whole clinical picture rather than filing them separately (p. 863).",
        "Reach for it first in the seven situations the manual lists, such as a large background gap, uncertain fit or severity, disagreement about care, mistrust or poor adherence (p. 863); most of them recur in Philippine practice (app guidance).",
        "When no Section II disorder is met, a Chapter 22 condition may still be the focus, for example acculturation difficulty, a parent-child relational problem or a religious or spiritual problem (p. 873; see [[ch:ch22|Chapter 22]]).",
        INTERP,
        "The **Supplementary modules** (children and adolescents, older adults, caregivers, immigrants and refugees, and the domain modules) are online, not in the book (p. 863); field work outside the manual describes the core CFI as taking about 20 minutes once practiced and as harder to use in acute psychosis, suicidality, aggression or cognitive impairment (Jarvis et al., Focus 2020; outside the DSM)."
      ])
    },
    {
      id: "ataque-de-nervios",
      ask: [
        ["The episode", "“Can you walk me through one of these attacks? Do you scream or shout, cry, shake, feel heat climbing from your chest to your head, or lash out at someone?”", "Tagalog aside for a bilingual family: “Ano ang nangyayari kapag inaatake siya?” The core features are intense upset with screaming, crying, trembling, rising heat and aggression (p. 874)."],
        ["Loss of control", "“While it is happening, do you feel you can’t control yourself?”", "Feeling out of control is the general feature (p. 874)."],
        ["Trigger", "“What was going on just before? Bad news about someone in the family, a fight with your partner or children, an accident?”", "Most attacks follow a family stressor; a minority come from accumulated suffering with no single trigger (p. 874)."],
        ["Dissociation and fainting", "“Afterward, do you remember everything? Did you feel outside yourself or as if things were unreal? Have you ever fainted or had something that looked like a seizure?”", "Screen dissociative disorders and functional neurological symptom disorder (p. 874)."],
        ["Unexpected attacks", "“Have you ever had a sudden surge of fear out of the blue, with a pounding heart and trouble breathing, when nothing upsetting had happened?”", "Uncued attacks with persistent worry point to panic disorder; stressor-bound ataques usually do not meet it (p. 874)."],
        ["Anger between episodes", "“Apart from these attacks, do you have outbursts of anger that are much bigger than the situation?”", "Intermittent explosive disorder is on the manual’s related list (p. 874)."],
        ["Meaning and setting", "“What do you and your family call these episodes, and what do you think causes them? Did any happen where others would see them as expected, like at a wake or funeral?”", "Some ataques are normative expressions of distress with no lasting problems (p. 874)."],
        ["Suicidal thoughts", "“During or after an attack, have you had thoughts of ending your life, or done anything to hurt yourself?”", "Tagalog aside: “Naiisip mo bang wakasan ang buhay mo?” Ataque can include suicidal behavior and is linked to suicidal thoughts (p. 874)."],
        ["Help seeking", "“Who have you turned to after these attacks: family, church, a healer, a clinic? What helped?”", "Past help seeking and its usefulness (pp. 866, 874)."]
      ],
      tx: care("treat the Section II disorder that is met (panic, dissociative, functional neurological, anxiety or trauma- and stressor-related) as in the app’s chapters, and for the ataque itself work on the **family stressor** and on what the person and family can do when the next one starts.", [
        "Psychoeducation that **respects the explanatory model**: accept “ataque” as the person’s word, explain that strong emotion can bring on these episodes, and avoid calling them “hysterical” or “fake” (app guidance; p. 874).",
        "Bring the **family** in: the trigger is usually a family event, so a family meeting about the conflict or the loss is often part of care; respect church or healer support the family relies on (app guidance; p. 874).",
        "When the episodes meet a Section II disorder, follow that chapter’s treatment: [[ch:ch05|Chapter 5]] for panic disorder, [[ch:ch08|Chapter 8]] for dissociative disorders, [[ch:ch09|Chapter 9]] for functional neurological symptom disorder, [[ch:ch07|Chapter 7]] for trauma- and stressor-related disorders (app guidance).",
        INTERP,
        CRISIS
      ])
    },
    {
      id: "dhat-syndrome",
      ask: [
        ["The worry", "“What is it that you feel you are losing from your body? When do you notice it, and what does it look like?”", "The cardinal feature is anxiety about loss of dhat, a white discharge noticed on passing stool or urine, with no physical dysfunction found (p. 874)."],
        ["Explanation", "“What do you believe losing it does to you? Where did you learn about this?”", "Rooted in the Ayurvedic idea of dhatu as one of seven vital fluids; similar beliefs are widespread in the community (pp. 874–875)."],
        ["Body symptoms", "“How is your energy and strength? Any weight loss, aches or other body complaints?”", "Fatigue, weakness, weight loss and multiple somatic complaints are commonly attributed to dhat (p. 874)."],
        ["Sexual function", "“Has there been any change with erections or with how quickly you finish during sex?”", "Erectile disorder, early ejaculation and other sexual dysfunctions are on the related list (p. 875)."],
        ["Mood", "“How has your mood been? Do you still enjoy things? How are sleep and concentration?”", "Screen major depressive and persistent depressive disorder (p. 875)."],
        ["Health worry", "“How much of the day do you spend worrying about your health? Have you seen many doctors about it?”", "Screen GAD, somatic symptom disorder and illness anxiety disorder (p. 875)."],
        ["Infection", "“Any burning on urination, discharge from the penis, sores, or a partner with symptoms?”", "Dhat can be a lay word for a sexually transmitted infection without distress: examine and test (p. 875)."],
        ["Studies and work", "“How are your studies or your work going?”", "Educational problems are on the related list (p. 875)."],
        ["Help seeking", "“Who have you consulted about this: traditional healers, pharmacies, other doctors? What were you told?”", "Help seeking from professional and traditional sources (pp. 861, 866)."]
      ],
      tx: care("examine and test first (genital exam, urinalysis, STI screening when indicated), then treat the Section II disorder that is met; most of the work is **reassurance and education** delivered in a way that does not dismiss the person’s belief.", [
        "Psychoeducation that **respects the explanatory model**: acknowledge that beliefs about semen loss are common in the person’s community (p. 875), explain the normal findings plainly, and offer a different account of the fatigue or anxiety without ridicule (app guidance).",
        "Work with **family and traditional healers** where the person wants them involved; a female relative with a leukorrhea concern may need gynecologic care (app guidance; p. 875).",
        "Treat the disorder that is met as in the app’s chapters: [[ch:ch04|Chapter 4]] for depressive disorders, [[ch:ch05|Chapter 5]] for GAD, [[ch:ch09|Chapter 9]] for somatic symptom or illness anxiety disorder, [[ch:ch13|Chapter 13]] for sexual dysfunctions (app guidance).",
        INTERP
      ])
    },
    {
      id: "hikikomori",
      ask: [
        ["Duration", "To the parent: “When did he last go out to meet anyone in person? Has it been 6 months or more?”", "Tagalog aside: “Kailan siya huling lumabas ng bahay para makipagkita sa ibang tao?” Japan’s ministry guideline (2010) uses 6 months of withdrawal (p. 875)."],
        ["Extent", "“Do you leave your room or the house at all? Do you see anyone face to face, even family?”", "The typical picture is a young man who stays in his room in the parents’ home with no in-person contact (p. 875)."],
        ["Screens", "“What do you do online most of the day? How many hours do you game, and what happens when you can’t?”", "Heavy Internet use is common; screen Internet gaming disorder, a Section III proposal (p. 875)."],
        ["School and work", "“When did you stop going to school or work? What made you stop?”", "Loss of interest in school or work; school refusal in adolescents (p. 875)."],
        ["How it feels", "“At first, did staying in feel like a relief? How do you feel about it now?”", "It may begin as ego-syntonic and usually becomes distressing (p. 875)."],
        ["Fear of others", "“When you think about going out, what worries you? Being judged or embarrassed?”", "Screen social anxiety disorder and avoidant personality disorder (p. 875)."],
        ["Mood and worry", "“How is your mood? Do you still enjoy anything? Do you worry most of the day?”", "Screen major depressive disorder and GAD (p. 875)."],
        ["Trauma and psychosis", "“Did something frightening or hurtful happen before you withdrew? Do you ever hear voices or feel people are against you?”", "Screen PTSD and schizophrenia or another psychotic disorder (p. 875)."],
        ["Development and interest in people", "To the parent: “As a child, how did he play and talk with others? Has he ever wanted close friends?”", "Screen autism spectrum disorder and schizoid personality disorder (p. 875)."],
        ["Family and help", "“How is the family coping? Who has tried to help so far, and what happened?”", "Secondary (within a disorder) versus primary withdrawal; the family’s help seeking (pp. 866, 875)."]
      ],
      tx: care("start with the **family**, since the young person often will not come; build contact gradually, treat any Section II disorder that is found, and plan a stepwise return to activity and people.", [
        "Psychoeducation for the family that **respects their explanation** (shame, laziness, a phase, a spiritual cause) while explaining that long withdrawal usually becomes distressing and deserves care (app guidance; p. 875).",
        "Treat the disorder that is met as in the app’s chapters: [[ch:ch05|Chapter 5]] for social anxiety or GAD, [[ch:ch04|Chapter 4]] for depression, [[ch:ch01|Chapter 1]] for autism spectrum disorder, [[ch:ch18|Chapter 18]] for personality disorders, [[ch:ch02|Chapter 2]] for psychosis; for primary withdrawal with no disorder, a Chapter 22 code such as a parent-child relational or educational problem may fit (pp. 873, 875; app guidance).",
        "Agree on screen and sleep routines with the family rather than sudden removal of devices, which can provoke conflict (app guidance).",
        "Coordinate with the **school** or employer on a gradual return (app guidance)."
      ])
    },
    {
      id: "khyal-cap",
      ask: [
        ["The attack", "“During an attack, what do you feel? Dizziness, a pounding heart, short breath, cold hands and feet?”", "These panic-attack symptoms are the core (p. 875)."],
        ["Ears and neck", "“Do your ears ring or your neck get sore during an attack?”", "Tinnitus and neck soreness are distinctive features (p. 875)."],
        ["The wind belief", "“What do you fear is happening inside your body? What could the wind do if it rises?”", "Catastrophic cognitions: wind rising with the blood may block breathing or enter the head and cause fainting or death (pp. 875–876)."],
        ["Triggers", "“What sets an attack off? Standing up quickly, a worrying thought, a smell, crowds, riding in a car?”", "Typical triggers include orthostasis, odors, worry and agoraphobic cues (p. 876)."],
        ["Between attacks", "“How much do you worry about the next attack? Have you started avoiding places or trips because of it?”", "Screen panic disorder and agoraphobia (p. 876)."],
        ["Worry and health", "“Do you worry about many things most days? Do you fear you have a serious illness?”", "Screen GAD and illness anxiety disorder (p. 876)."],
        ["Trauma", "When the person is ready: “Some people who lived through war or loss have attacks like these. Do memories or nightmares about the past come back to you?”", "PTSD is on the related list; khyâl attacks can shape trauma-related disorders (p. 876)."],
        ["Coping and help", "“What do you or your family do when an attack starts? Who have you seen for it?”", "Self-coping and past help seeking, professional and traditional (pp. 865–866)."]
      ],
      tx: care("treat the panic attacks or the disorder that is met as in [[ch:ch05|Chapter 5]] and [[ch:ch07|Chapter 7]], and address the **wind belief directly**, because it is the catastrophic thought that turns dizziness into an attack.", [
        "Psychoeducation that **respects the explanatory model**: discuss what the person fears the wind will do and offer an account of dizziness on standing and of the body’s alarm response that sits alongside their own; the manual gives culturally specific catastrophic cognitions as its example of why culture matters for treatment (p. 872; app guidance).",
        "Involve **family and traditional healers** the person trusts, and ask what they already do during an attack before advising against it (app guidance).",
        "Assess **trauma** history gently and over time; PTSD and panic disorder often need treating together (app guidance; p. 876).",
        INTERP
      ])
    },
    {
      id: "kufungisisa",
      ask: [
        ["The thinking", "“When you say you are thinking too much, what are the thoughts about?”", "Tagalog aside: “Ano ang laging iniisip mo?” (masyadong nag-iisip is a Philippine cousin, outside the DSM). Rumination on worries is the content (p. 876)."],
        ["Explanation", "“What do you believe all this thinking is doing to your body or your mind?”", "As an explanation it is thought to cause anxiety, depression and bodily complaints, and in some places psychosis or death (p. 876)."],
        ["Life problems", "“What is going on at home: in your marriage, with money for the children, with work?”", "As an idiom it signals interpersonal and social difficulties (p. 876)."],
        ["Illness", "“Are you living with a long-term illness, or worried about one?”", "Worry about chronic illness, including HIV-related disorders (p. 876)."],
        ["Mood", "“How is your mood? Do you still enjoy things? How long has it been like this?”", "Screen major depressive and persistent depressive disorder (p. 876)."],
        ["Worry and panic", "“Is the worry hard to stop? Do you get sudden attacks of fear?”", "Screen GAD and panic attacks (p. 876)."],
        ["Memories and repeated thoughts", "“Are some of the thoughts memories of something terrible that come back on their own? Are any thoughts senseless but impossible to push away, with things you feel you must do?”", "Screen PTSD and OCD (p. 876)."],
        ["Grief", "“Did this start after someone close to you died?”", "Screen prolonged grief disorder (p. 876)."],
        ["Suicidal thoughts", "“With so much on your mind, have you had thoughts of ending your life?”", "Tagalog aside: “Naiisip mo bang wakasan ang buhay mo?” Thinking too much is thought in some settings to lead to suicidal thoughts (p. 876)."],
        ["Help seeking", "“Who have you talked to about this: family, church, a healer, a clinic?”", "Past and preferred help (pp. 866, 876)."]
      ],
      tx: care("use the person’s phrase, find the **life problems** the thinking is about, and treat any depressive, anxiety, trauma or grief disorder that is met as in the app’s chapters.", [
        "Psychoeducation that **respects the explanatory model**: agree that the thinking is causing harm, then work on the worries themselves (problem solving, practical help with money, work or marriage) alongside symptom treatment (app guidance; p. 876).",
        "Involve **family, church or community supports** where the person wants them; many of the problems kufungisisa signals are social ones (app guidance; p. 876).",
        "Treat the disorder that is met: [[ch:ch04|Chapter 4]] for depressive disorders, [[ch:ch05|Chapter 5]] for GAD, [[ch:ch06|Chapter 6]] for OCD, [[ch:ch07|Chapter 7]] for PTSD and prolonged grief disorder (app guidance).",
        INTERP,
        CRISIS
      ])
    },
    {
      id: "maladi-dyab",
      ask: [
        ["Onset", "“Did this start suddenly, or did it come on slowly? Was there a sudden change in how you were acting?”", "Acute onset or an abrupt change raises suspicion of a sent sickness (p. 877)."],
        ["Explanation", "“What do you believe caused this? Who might want to harm you, and why?”", "Tagalog aside for a Filipino family with a similar belief: “May naniniwala ba sa pamilya na kinulam siya?” (kulam is outside the DSM). Envy and malice lead to illness sent by a sorcerer (p. 876)."],
        ["Success and envy", "“Did something good happen to you before it began: a new job, a purchase, good grades?”", "Visible success is thought to provoke the attack (pp. 876–877)."],
        ["Shared belief", "“Does your family or your community see it the same way?”", "A belief shared by the group is a cultural explanation, not by itself a delusion (p. 877)."],
        ["Mood", "“How have your mood, sleep and appetite been? Do you feel hopeless?”", "Depression is among the illnesses attributed to sent sickness (p. 876)."],
        ["Psychosis screen", "“Do you hear voices or see things others don’t? Do you feel watched or targeted by many people, beyond this one matter?”", "Look for features beyond the shared belief before considering a psychotic disorder; misdiagnosis of delusional disorder or schizophrenia is the trap (p. 877)."],
        ["Daily life", "“How are school, work and daily tasks going? Any trouble with neighbors or relatives?”", "Social or academic failure and problems with the social environment are on the related list (pp. 876–877)."],
        ["Children", "If a child is affected: “When did your child become ill, and what did the family think caused it?”", "Even healthy young children are thought vulnerable (p. 877)."],
        ["Healers", "“Have you seen a healer or religious leader? What did they do, and did it help?”", "Which treatment works helps decide the label (p. 877)."]
      ],
      tx: care("respect the explanation, look for a Section II disorder on its own features, and treat what is met; do not argue the person or family out of a shared belief.", [
        "Psychoeducation that **respects the explanatory model**: a sent sickness and a medical illness can be treated side by side; ask how the family would feel about combining a healer’s care with the clinic’s (app guidance; p. 877).",
        "Work with **family and traditional or religious healers**, checking that any remedies used are safe and do not replace urgent medical care (app guidance).",
        "Treat the disorder that is met as in the app’s chapters, for example [[ch:ch04|Chapter 4]] for depression or [[ch:ch02|Chapter 2]] for a psychotic disorder with features beyond the shared belief; Chapter 22 codes may fit social or educational problems (p. 877; app guidance).",
        INTERP
      ])
    },
    {
      id: "nervios",
      ask: [
        ["Meaning", "“When you say you have nerves, what do you mean by that? What do you think causes them?”", "Tagalog aside: “Ano ang ibig mong sabihin sa nerbyos?” (nerbyos is a Philippine idiom, outside the DSM). Nervios is an idiom and an explanation (p. 877)."],
        ["Lifelong or recent", "“Have you always been a nervous person, or did you fall ill with nerves at some point?”", "Being nervous since childhood is trait-like; being ill with nerves is closer to dissociation and depression (p. 877)."],
        ["Body symptoms", "“Do you get headaches at the back of the head and neck, stomach upset, trembling, tingling, or dizzy spells?”", "Common symptoms include brain aches, GI upset, trembling, tingling and mareos (p. 877)."],
        ["Sleep, tears and focus", "“How are your sleep and concentration? Do you cry easily or get irritable?”", "Sleep difficulty, easy tearfulness, poor concentration and irritability are part of the picture (p. 877)."],
        ["Worry", "“Do you worry about many things, most days, and find it hard to stop?”", "Screen GAD (p. 877)."],
        ["Mood", "“How is your mood? Do you still enjoy things? How long has it been like this?”", "Screen major depressive and persistent depressive disorder (p. 877)."],
        ["Social fear", "“Do you get very nervous around people or when others are watching you?”", "Screen social anxiety disorder, especially with lifelong nerves (p. 877)."],
        ["Dissociation and body focus", "“Do you ever feel cut off from yourself or your surroundings? How much of your day goes to worrying about these body symptoms?”", "Screen dissociative and somatic symptom disorders (p. 877)."],
        ["Psychosis screen", "“Do you ever hear or see things that others don’t?”", "Schizophrenia is on the related list; nervios spans no disorder to psychotic presentations (p. 877)."],
        ["Stress and help", "“What has been hardest lately? Who helps you when your nerves are bad?”", "Stressors and supports; nervios is a state of vulnerability to hard circumstances (pp. 865, 877)."]
      ],
      tx: care("treat nervios as a doorway: find out what the person means, what has been stressing them, and whether a Section II disorder is present, then treat that.", [
        "Psychoeducation that **respects the explanatory model**: accept “nerves” as the person’s word and link it to the treatment you propose (“this is to help your nerves”) without dismissing it (app guidance; p. 877).",
        "Ask about and, with permission, involve **family and community supports**; many presentations are tied to difficult circumstances (app guidance; p. 877).",
        "Treat the disorder that is met as in the app’s chapters: [[ch:ch05|Chapter 5]] for GAD or social anxiety, [[ch:ch04|Chapter 4]] for depressive disorders, [[ch:ch08|Chapter 8]] for dissociative disorders, [[ch:ch09|Chapter 9]] for somatic symptom disorder; if no disorder is met, supportive follow-up may still be wanted (p. 873; app guidance).",
        INTERP
      ])
    },
    {
      id: "shenjing-shuairuo",
      ask: [
        ["Exhaustion", "“How tired is your mind? Do you run out of mental energy quickly?”", "Weakness (mental fatigue) is one of the five clusters (p. 877)."],
        ["Vexation", "“Do you feel irritated and troubled, torn between things you want and can’t have?”", "Fan nao, feeling vexed: irritability mixed with worry and distress (pp. 877–878)."],
        ["Racing memories", "“Do memories or thoughts keep coming back and stir you up?”", "Excitement (increased recollections) is a cluster (p. 877)."],
        ["Pain and sleep", "“Do you get headaches? How are you sleeping?”", "Nervous pain and sleep are the remaining clusters (p. 877)."],
        ["Triggers", "“What happened before this began: trouble at work or in the family, a failure, losing face?”", "Precipitants include work or family stress, loss of face and a sense of failure (p. 878)."],
        ["Explanation", "“How do you understand what is happening in your body? Have you taken tonics or seen a traditional doctor?”", "Ideas of weakness and depleted or stagnant qi (p. 878)."],
        ["Mood", "“Have you felt down or lost interest in things most days?”", "Screen major depressive and persistent depressive disorder (p. 879)."],
        ["Worry and body focus", "“Do you worry most of the day? How much do the body symptoms preoccupy you?”", "Screen GAD and somatic symptom disorder (p. 879)."],
        ["Fears and trauma", "“Are there situations or people you fear and avoid? Did something frightening happen to you?”", "Screen social anxiety disorder, specific phobia and PTSD (p. 879)."]
      ],
      tx: care("use the person’s framing to open the conversation, check for the depressive, anxiety and somatic symptom disorders the manual links to it, and treat what is met; many people with this picture meet no DSM disorder and still want help.", [
        "Psychoeducation that **respects the explanatory model**: the manual notes clinicians may still use the term with traditional patients to ease communication and reduce stigma (p. 878); explain any Section II diagnosis in terms that connect with it (app guidance).",
        "Ask about **traditional Chinese medicine** and tonics in use, and coordinate rather than forbid (app guidance).",
        "Treat the disorder that is met as in the app’s chapters: [[ch:ch04|Chapter 4]] for depressive disorders, [[ch:ch05|Chapter 5]] for GAD, social anxiety and specific phobia, [[ch:ch09|Chapter 9]] for somatic symptom disorder, [[ch:ch07|Chapter 7]] for PTSD (app guidance).",
        "Address the **stressor and loss of face** directly; family meetings can help when the failure is felt as a family matter (app guidance; p. 878)."
      ])
    },
    {
      id: "susto",
      ask: [
        ["The fright", "“Was there a moment when you had a bad scare? What happened?”", "Natural events, animals, people or supernatural agents can be the precipitant (p. 879)."],
        ["Timing", "“How long after the scare did you start to feel unwell?”", "Symptoms may start days to years after the fright (p. 879)."],
        ["Explanation", "“What do you believe the scare did to you?”", "The soul is thought to leave the body, bringing unhappiness, sickness and trouble in social roles (p. 879)."],
        ["Mood and self-worth", "“How is your appetite and sleep? Do you have bad dreams? Do you feel sad, worthless or unclean, or have no drive?”", "Commonly reported features; there are no defining symptoms (p. 879)."],
        ["Body symptoms", "“Any muscle aches, cold hands or feet, headaches, stomachaches or diarrhea? Have people said you look pale?”", "Somatic features of susto (p. 879)."],
        ["Loss", "“Before this, did you lose someone, feel abandoned or unloved?”", "Interpersonal susto, with sadness and poor self-image, is closest to major depressive disorder (p. 879)."],
        ["Trauma", "“Does the frightening event come back in memories or dreams? Do you avoid reminders or startle easily?”", "Susto after a traumatic event fits PTSD better (p. 879)."],
        ["Many healers", "“How many doctors or healers have you seen for these body symptoms?”", "Recurrent somatic susto with many practitioners resembles somatic symptom disorder (p. 879)."],
        ["Suicidal thoughts", "“Have you had thoughts of ending your life?”", "Tagalog aside: “Naiisip mo bang wakasan ang buhay mo?” Interpersonal susto can include suicidal thoughts (p. 879)."]
      ],
      tx: care("sort the picture into the manual’s three patterns (after a loss, after a trauma, recurrent bodily symptoms) and treat the Section II disorder each points to.", [
        "Psychoeducation that **respects the explanatory model**: acknowledge the fright and what the person believes it did; treatment can be offered as helping them recover from it (app guidance; p. 879).",
        "Ask whether a **healer** has done or is planning a ritual and how the family sees clinic care alongside it; coordinate rather than compete (app guidance).",
        "Treat the disorder that is met as in the app’s chapters: [[ch:ch04|Chapter 4]] for major depressive disorder, [[ch:ch07|Chapter 7]] for PTSD and other trauma- and stressor-related disorders, [[ch:ch09|Chapter 9]] for somatic symptom disorder (p. 879; app guidance).",
        INTERP,
        CRISIS
      ])
    },
    {
      id: "taijin-kyofusho",
      ask: [
        ["The fear", "“What worries you most when you are with other people?”", "Anxiety and avoidance arise from a sense that one’s looks or actions are inadequate or offensive to others (p. 879)."],
        ["Sensitive or offensive", "“Is your main fear being embarrassed yourself, or making other people uncomfortable?”", "Sensitive type versus offensive type (p. 879)."],
        ["Blushing and gaze", "“Do you worry that you blush, or that your eye contact is too much or too little?”", "Sekimen-kyofu and jiko-shisen-kyofu (p. 879)."],
        ["Body odor", "“Do you worry that your body gives off a smell that bothers people? What do you do about it?”", "Tagalog aside: “Natatakot ka bang may naaamoy sa iyo ang ibang tao?” Jiko-shu-kyofu relates to olfactory reference syndrome (p. 879)."],
        ["Appearance and movement", "“Do you think something about your face, body or the way you move looks wrong?”", "Shubo-kyofu overlaps with body dysmorphic disorder (p. 879)."],
        ["Avoidance", "“Which situations do you avoid because of this: meetings, meals, public transport?”", "Avoidance of interpersonal situations (p. 879)."],
        ["Conviction", "“If several people told you they notice nothing, would that change your mind?”", "Concerns that are delusional and resist reassurance or counterexample suggest delusional disorder (p. 879)."],
        ["Repetitive behavior", "“Do you check, wash, shower or seek reassurance over and over because of this?”", "Screen OCD, BDD and olfactory reference syndrome (p. 879)."],
        ["Help seeking", "“Who have you asked for help, and what were you told?”", "Past help seeking (p. 866)."]
      ],
      tx: care("treat the Section II disorder the presentation reaches (social anxiety disorder, BDD, olfactory reference syndrome, OCD or delusional disorder), guided by the person’s degree of conviction.", [
        "Psychoeducation that **respects the explanatory model**: take the concern about offending others seriously rather than dismissing it, since it reflects real social values about not causing others discomfort (app guidance; p. 879).",
        "Ask whether **family or employers** know, and involve them only with consent; shame often keeps the problem hidden (app guidance).",
        "Treat the disorder that is met as in the app’s chapters: [[ch:ch05|Chapter 5]] for social anxiety disorder, [[ch:ch06|Chapter 6]] for BDD, OCD and olfactory reference syndrome, [[ch:ch02|Chapter 2]] for delusional disorder (app guidance).",
        INTERP
      ])
    }
  ]);

  SP.complaintData = (SP.complaintData || []).concat([
    {
      id: "cultural-explanation", title: "The person or family blames a spiritual, supernatural or traditional cause",
      intro: "Start by learning the explanation in the person’s own words with the [[helper:cultural|cultural helper]] or the CFI (pp. 862–867). A cause such as sorcery, a fright, envy, lost semen or “thinking too much” is a **cultural explanation**, not a diagnosis and, when the group shares it, not a delusion (pp. 871, 877). Then assess on Section II criteria: chart the disorder that is met, or an other specified category, or a Chapter 22 code, and put the explanation in the formulation (p. 873).",
      ask: ["What do you think caused this, and what does your family say?", "Is this a common explanation in your family or community?", "Did it start suddenly, after a scare, a success or a quarrel?", "What symptoms bother you most: mood, sleep, fear, body complaints, hearing or seeing things?", "Have you seen a healer, priest or pastor? What did they do?", "Have you had thoughts of ending your life?"],
      mustNotMiss: ["Reading a **shared cultural belief as a delusion** (pp. 872, 877).", "A real **psychotic disorder** with features beyond the shared belief (p. 877).", "**Depression** or **PTSD** under the explanation (pp. 876–879).", "A **medical cause**, such as an STI behind a dhat complaint (p. 875).", "**Suicidal thoughts** (pp. 874, 876, 879)."],
      helpers: ["cultural"],
      items: [
        { ch: "ch24", dx: "cultural-formulation", when: "Use the CFI to elicit the explanation, supports, past help and preferences before deciding on a diagnosis (pp. 862–867)." },
        { ch: "ch24", dx: "maladi-dyab", when: "Illness blamed on envy and a sorcerer sending sickness (Haitian contexts); not a diagnosis (pp. 876–877)." },
        { ch: "ch24", dx: "susto", when: "Illness blamed on a fright that made the soul leave the body (some Latinx contexts); not a diagnosis (p. 879)." },
        { ch: "ch24", dx: "dhat-syndrome", when: "Fatigue, weakness or sexual worry blamed on loss of semen (South Asia); not a diagnosis (pp. 874–875)." },
        { ch: "ch24", dx: "kufungisisa", when: "Distress blamed on thinking too much (Shona, Zimbabwe); not a diagnosis (p. 876)." },
        { ch: "ch24", dx: "nervios", when: "Distress explained as weak or bad nerves (Latinx contexts); not a diagnosis (p. 877)." },
        { ch: "ch24", dx: "khyal-cap", when: "Attacks explained as wind rising in the body (Cambodian contexts); not a diagnosis (pp. 875–876)." },
        { ch: "ch24", dx: "shenjing-shuairuo", when: "Exhaustion explained as weakness of the nervous system or depleted qi (Chinese contexts); not a diagnosis (pp. 877–878)." },
        { ch: "ch02", dx: "delusional-disorder", when: "Only when the belief is not shared by the person’s group and has a delusional quality; the manual names it as a misdiagnosis risk (p. 877)." },
        { ch: "ch02", dx: "schizophrenia", when: "Hallucinations, disorganization or decline beyond the shared explanation (p. 877)." },
        { ch: "ch04", dx: "mdd", when: "A depressive syndrome under the explanation, such as interpersonal susto or a sent sickness (pp. 877, 879)." },
        { ch: "ch07", dx: "ptsd", when: "The explanation is attached to a traumatic event with re-experiencing and avoidance (pp. 876, 879)." },
        { ch: "ch09", dx: "ssd", when: "Recurrent bodily symptoms with much worry and many healers consulted (pp. 875, 879)." },
        { ch: "ch22", dx: "religious-spiritual-problem", when: "The concern is spiritual or religious and no disorder is met (p. 873)." },
        { ch: "ch22", dx: "social-environment-problem", when: "Acculturation difficulty, exclusion or discrimination is the focus and no disorder is met (p. 873)." }
      ]
    },
    {
      id: "withdrawn-youth", title: "A young person who hasn’t left home or their room for months",
      intro: "Protracted withdrawal of a teenager or young adult who stays home, often online, and stops school or work matches the manual’s description of **hikikomori**; Japan’s ministry guideline uses **6 months** (p. 875). It is **not a diagnosis**: screen the Section II disorders the manual lists, and if none is met, record the nearest category or a Chapter 22 code with the term in the formulation (pp. 873, 875). The family is often the first and only informant; the [[helper:cultural|cultural helper]] covers the route.",
      ask: ["When did they last go out to see anyone in person?", "What do they do all day? How much gaming or Internet use?", "When and why did school or work stop?", "Do they seem afraid of people, sad, or uninterested in others?", "Any voices, odd beliefs or a frightening event before this?", "How was their social development as a child?"],
      mustNotMiss: ["A **psychotic disorder** behind the withdrawal (p. 875).", "**Depression** with suicidal thoughts (p. 875; app guidance).", "**Autism spectrum disorder** never diagnosed (p. 875).", "**Internet gaming disorder** (p. 875).", "**Family conflict** that keeps the pattern going (app guidance)."],
      helpers: ["cultural"],
      items: [
        { ch: "ch24", dx: "hikikomori", when: "Months of severe withdrawal at home with no in-person contact, often with heavy Internet use; not a diagnosis (p. 875)." },
        { ch: "ch05", dx: "social-anxiety", when: "Withdrawal driven by fear of being judged or embarrassed (p. 875)." },
        { ch: "ch04", dx: "mdd", when: "Low mood, loss of interest and other depressive symptoms behind the withdrawal (p. 875)." },
        { ch: "ch05", dx: "gad", when: "Persistent, hard-to-control worry about many things (p. 875)." },
        { ch: "ch07", dx: "ptsd", when: "Withdrawal began after a traumatic event, with re-experiencing and avoidance (p. 875)." },
        { ch: "ch01", dx: "asd", when: "Lifelong social-communication differences and restricted interests (p. 875)." },
        { ch: "ch18", dx: "avoidant-pd", when: "A long-standing pattern of avoiding people for fear of rejection or criticism (p. 875)." },
        { ch: "ch18", dx: "schizoid-pd", when: "A long-standing lack of interest in close relationships, without fear (p. 875)." },
        { ch: "ch02", dx: "schizophrenia", when: "Withdrawal with hallucinations, delusions or disorganization (p. 875)." },
        { ch: "ch25", dx: "internet-gaming-disorder", when: "Gaming has taken over, with the proposed features; a Section III proposal (p. 875)." },
        { ch: "ch22", dx: "parent-child-relational", when: "Conflict between the young person and parents is the main focus and no disorder is met (app guidance)." },
        { ch: "ch22", dx: "educational-problem", when: "Dropping out or school problems are the focus and no disorder is met (app guidance)." }
      ]
    },
    { id: "panic-episodes", title: "Sudden attacks of fear, palpitations or chest pain", items: [
      { ch: "ch24", dx: "ataque-de-nervios", when: "Attacks of screaming, crying, trembling and aggression, usually after a family stressor, with a sense of losing control; not a diagnosis, so chart the panic, dissociative or other disorder that is met (pp. 873–874)." },
      { ch: "ch24", dx: "khyal-cap", when: "Panic-like attacks with tinnitus and neck soreness and a fear that wind is rising in the body (Cambodian contexts); usually meet panic attack criteria (pp. 875–876)." }
    ] },
    { id: "anxious", title: "Anxiety, worry or nervousness", items: [
      { ch: "ch24", dx: "nervios", when: "“Nerves” as an idiom and explanation, with headaches, trembling, tingling, poor sleep and tearfulness; assess for GAD, depression and other listed disorders (p. 877)." },
      { ch: "ch24", dx: "kufungisisa", when: "“Thinking too much” about worries and social problems; screen GAD, depression, PTSD and OCD (p. 876)." },
      { ch: "ch24", dx: "shenjing-shuairuo", when: "Mental exhaustion, vexation, headache and poor sleep framed as weak nerves; screen GAD and depression (pp. 877–879)." }
    ] },
    { id: "body-symptoms", title: "Physical symptoms that won’t go away", items: [
      { ch: "ch24", dx: "dhat-syndrome", when: "Fatigue, weakness and bodily complaints blamed on semen loss, with normal findings; screen depression, SSD and illness anxiety, and test for infection (pp. 874–875)." },
      { ch: "ch24", dx: "nervios", when: "Brain aches, stomach upset, tingling and dizzy spells explained as nerves (p. 877)." },
      { ch: "ch24", dx: "shenjing-shuairuo", when: "Headache, fatigue and poor sleep framed as weakness of the nervous system; screen SSD (pp. 877–879)." },
      { ch: "ch24", dx: "susto", when: "Recurrent aches, cold extremities and stomach complaints after a fright, with many healers seen; resembles somatic symptom disorder (p. 879)." }
    ] },
    { id: "low-mood", title: "Low mood or sadness", items: [
      { ch: "ch24", dx: "susto", when: "Sadness, low self-worth and poor appetite after a fright, especially after a loss or abandonment; closest to major depressive disorder (p. 879)." },
      { ch: "ch24", dx: "kufungisisa", when: "Low mood explained as thinking too much about life problems (p. 876)." },
      { ch: "ch24", dx: "nervios", when: "“Being ill with nerves,” closer to depression and dissociation (p. 877)." }
    ] },
    { id: "avoidance", title: "Avoiding places or situations", items: [
      { ch: "ch24", dx: "taijin-kyofusho", when: "Avoiding people for fear that one’s looks, gaze, blushing or odor offend others; broader than social anxiety disorder (p. 879)." },
      { ch: "ch24", dx: "hikikomori", when: "Staying home or in one’s room for months with no in-person contact (p. 875)." }
    ] },
    { id: "unreal", title: "Feeling unreal, detached or outside one’s body", items: [
      { ch: "ch24", dx: "ataque-de-nervios", when: "Depersonalization, derealization or amnesia during an attack of nerves after a family stressor; consider other specified or unspecified dissociative disorder (p. 874)." }
    ] },
    { id: "psychosis", title: "Hearing voices or unusual beliefs", items: [
      { ch: "ch24", dx: "maladi-dyab", when: "A belief that a sorcerer sent the illness, shared by the person’s community; a cultural explanation that is easily misdiagnosed as delusional disorder or schizophrenia (p. 877)." },
      { ch: "ch24", dx: "taijin-kyofusho", when: "A conviction of offending others with odor, gaze or appearance; consider delusional disorder only when it resists reassurance and counterexample (p. 879)." }
    ] },
    { id: "fatigue", title: "Fatigue or low energy", items: [
      { ch: "ch24", dx: "shenjing-shuairuo", when: "Mental fatigue with vexation, headache and poor sleep, framed as weakness of the nervous system (pp. 877–878)." },
      { ch: "ch24", dx: "dhat-syndrome", when: "Fatigue and weakness blamed on loss of semen (p. 874)." }
    ] },
    { id: "sexual-problems", title: "Sexual problems: low desire, erections or orgasm", items: [
      { ch: "ch24", dx: "dhat-syndrome", when: "Erectile or ejaculation worries attributed to semen loss; screen erectile disorder, early ejaculation and depression (pp. 874–875)." }
    ] },
    { id: "life-problem", title: "A life problem, stressor or circumstance rather than a disorder", items: [
      { ch: "ch24", dx: "cultural-formulation", when: "Use the CFI when acculturation, discrimination, family or religious concerns may be the real focus; a Chapter 22 code may fit (pp. 863, 873)." }
    ] },
    { id: "no-clear-fit", title: "Symptoms that fit no specific diagnosis", items: [
      { ch: "ch24", dx: "cultural-formulation", when: "Culturally distinctive symptoms that do not fit the criteria: use the CFI, then choose a specified or other specified diagnosis, or none, with the concept in the formulation (pp. 863, 873)." }
    ] },
    { id: "after-trauma", title: "Symptoms after a traumatic event", items: [
      { ch: "ch24", dx: "susto", when: "Symptoms blamed on a fright, where the event shapes re-experiencing and avoidance; fits PTSD better (p. 879)." },
      { ch: "ch24", dx: "khyal-cap", when: "Wind attacks in trauma survivors (Cambodian contexts); assess PTSD alongside panic disorder (p. 876)." }
    ] },
    { id: "stress-reaction", title: "Struggling after a life change or stressor", items: [
      { ch: "ch24", dx: "ataque-de-nervios", when: "An attack of nerves right after family news or conflict; may be normative or point to an other specified trauma- and stressor-related disorder (p. 874)." },
      { ch: "ch24", dx: "susto", when: "Unhappiness and trouble in social roles after a frightening experience (p. 879)." }
    ] },
    { id: "school-refusal", title: "A child who won’t go to school or won’t speak there", items: [
      { ch: "ch24", dx: "hikikomori", when: "An adolescent who has stopped school and stays in their room for months; school refusal is associated (p. 875)." }
    ] }
  ]);
})();
