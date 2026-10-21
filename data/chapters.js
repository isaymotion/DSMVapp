/*
 * Chapter registry: the 22 chapters of DSM-5-TR Section II (Diagnostic Criteria and Codes).
 * Every chapter is listed so the menu shows the whole roadmap. Set `ready: true` once data/chNN/
 * exists; only ready chapters are loaded. `pages` are the manual's printed page numbers.
 */
window.SP = window.SP || {};
SP.chapters = SP.chapters || {};
SP.add = function (id, key, value) {
  (SP.chapters[id] = SP.chapters[id] || {})[key] = value;
};
SP.BOOK = 'DSM-5-TR (American Psychiatric Association, 2022)';
SP.CHAPTER_FILES = ['guide', 'highyield', 'cards-criteria', 'cards-differential', 'cards-clinical', 'cards-cases', 'glossary', 'mnemonics'];
/* Practice pack (Stage 2): board vignettes, write-the-diagnosis and counting drills, exam traps.
   Add these to a chapter's files once data/chNN/ has them (plus data/db/clinical-chNN.js in SP.extraFiles). */
SP.PRACTICE_FILES = ['vignettes', 'drills', 'traps'];

SP.manifest = [
  { id: 'ch01', number: 1, ready: false, pages: '35–99', title: 'Neurodevelopmental Disorders', short: 'Neurodevelopmental',
    summary: 'Intellectual developmental disorders, communication disorders, autism spectrum disorder, attention-deficit/hyperactivity disorder, specific learning disorder, motor and tic disorders.' },
  { id: 'ch02', number: 2, ready: true, pages: '101–138', title: 'Schizophrenia Spectrum and Other Psychotic Disorders', short: 'Schizophrenia spectrum and other psychotic',
    summary: 'The five psychotic domains; schizotypal (personality) disorder, delusional disorder, brief psychotic disorder, schizophreniform disorder, schizophrenia and schizoaffective disorder; substance/medication-induced and medically caused psychosis; the three catatonia diagnoses; and the other specified and unspecified categories, with every time rule, specifier and code.',
    files: SP.CHAPTER_FILES },
  { id: 'ch03', number: 3, ready: true, pages: '139–176', title: 'Bipolar and Related Disorders', short: 'Bipolar and related',
    summary: 'Manic, hypomanic and major depressive episodes; bipolar I and II disorders with their coding; cyclothymic disorder; treatment-emergent, substance/medication-induced and medically caused mania; the other specified presentations; and every mood specifier, from mixed features and rapid cycling to peripartum onset and seasonal pattern.',
    files: SP.CHAPTER_FILES },
  { id: 'ch04', number: 4, ready: true, pages: '177–214', title: 'Depressive Disorders', short: 'Depressive',
    summary: 'Disruptive mood dysregulation disorder; the major depressive episode and major depressive disorder with full coding; grief and its look-alikes; persistent depressive disorder and its course specifiers; premenstrual dysphoric disorder; substance/medication-induced and medically caused depression; the other specified presentations; and every depressive specifier, from anxious distress to seasonal pattern.',
    files: SP.CHAPTER_FILES.concat(SP.PRACTICE_FILES) },
  { id: 'ch05', number: 5, ready: false, pages: '215–261', title: 'Anxiety Disorders', short: 'Anxiety',
    summary: 'Separation anxiety, selective mutism, specific phobia, social anxiety disorder, panic disorder and the panic attack specifier, agoraphobia and generalized anxiety disorder.' },
  { id: 'ch06', number: 6, ready: false, pages: '263–294', title: 'Obsessive-Compulsive and Related Disorders', short: 'Obsessive-compulsive and related',
    summary: 'OCD, body dysmorphic disorder, hoarding disorder, trichotillomania and excoriation disorder, with the insight specifiers.' },
  { id: 'ch07', number: 7, ready: false, pages: '295–328', title: 'Trauma- and Stressor-Related Disorders', short: 'Trauma- and stressor-related',
    summary: 'Reactive attachment and disinhibited social engagement disorders, PTSD, acute stress disorder, adjustment disorders and prolonged grief disorder.' },
  { id: 'ch08', number: 8, ready: false, pages: '329–348', title: 'Dissociative Disorders', short: 'Dissociative',
    summary: 'Dissociative identity disorder, dissociative amnesia and depersonalization/derealization disorder.' },
  { id: 'ch09', number: 9, ready: false, pages: '349–370', title: 'Somatic Symptom and Related Disorders', short: 'Somatic symptom and related',
    summary: 'Somatic symptom disorder, illness anxiety disorder, functional neurological symptom disorder, psychological factors affecting other medical conditions and factitious disorder.' },
  { id: 'ch10', number: 10, ready: false, pages: '371–397', title: 'Feeding and Eating Disorders', short: 'Feeding and eating',
    summary: 'Pica, rumination disorder, avoidant/restrictive food intake disorder, anorexia nervosa, bulimia nervosa and binge-eating disorder.' },
  { id: 'ch11', number: 11, ready: false, pages: '399–405', title: 'Elimination Disorders', short: 'Elimination',
    summary: 'Enuresis and encopresis.' },
  { id: 'ch12', number: 12, ready: false, pages: '407–476', title: 'Sleep-Wake Disorders', short: 'Sleep-wake',
    summary: 'Insomnia, hypersomnolence and narcolepsy, breathing-related sleep disorders, circadian rhythm disorders, parasomnias and restless legs syndrome.' },
  { id: 'ch13', number: 13, ready: false, pages: '477–510', title: 'Sexual Dysfunctions', short: 'Sexual dysfunctions',
    summary: 'Desire, arousal, orgasm and pain disorders, and substance/medication-induced sexual dysfunction.' },
  { id: 'ch14', number: 14, ready: false, pages: '511–520', title: 'Gender Dysphoria', short: 'Gender dysphoria',
    summary: 'Gender dysphoria in children, and in adolescents and adults.' },
  { id: 'ch15', number: 15, ready: false, pages: '521–541', title: 'Disruptive, Impulse-Control, and Conduct Disorders', short: 'Disruptive, impulse-control and conduct',
    summary: 'Oppositional defiant disorder, intermittent explosive disorder, conduct disorder, antisocial personality disorder (cross-listed), pyromania and kleptomania.' },
  { id: 'ch16', number: 16, ready: false, pages: '543–665', title: 'Substance-Related and Addictive Disorders', short: 'Substance-related and addictive',
    summary: 'Use, intoxication, withdrawal and induced disorders for ten substance classes, and gambling disorder.' },
  { id: 'ch17', number: 17, ready: false, pages: '667–732', title: 'Neurocognitive Disorders', short: 'Neurocognitive',
    summary: 'Delirium, major and mild neurocognitive disorders and their etiological subtypes.' },
  { id: 'ch18', number: 18, ready: false, pages: '733–778', title: 'Personality Disorders', short: 'Personality',
    summary: 'General personality disorder and the ten personality disorders in clusters A, B and C.' },
  { id: 'ch19', number: 19, ready: false, pages: '779–801', title: 'Paraphilic Disorders', short: 'Paraphilic',
    summary: 'The eight paraphilic disorders and the distinction between a paraphilia and a paraphilic disorder.' },
  { id: 'ch20', number: 20, ready: false, pages: '803–806', title: 'Other Mental Disorders and Additional Codes', short: 'Other mental disorders',
    summary: 'Other specified and unspecified mental disorders, including those due to another medical condition, and the no-diagnosis codes.' },
  { id: 'ch21', number: 21, ready: false, pages: '807–820', title: 'Medication-Induced Movement Disorders and Other Adverse Effects of Medication', short: 'Medication-induced movement',
    summary: 'Neuroleptic malignant syndrome, medication-induced parkinsonism, dystonia, akathisia, tardive dyskinesia and related conditions, and antidepressant discontinuation syndrome.' },
  { id: 'ch22', number: 22, ready: false, pages: '821–836', title: 'Other Conditions That May Be a Focus of Clinical Attention', short: 'Other conditions of clinical focus',
    summary: 'Suicidal behavior and nonsuicidal self-injury codes, relational, abuse and neglect, educational, occupational, housing, economic and other psychosocial problems.' }
];

/* Shared data loaded with the chapters: the disorder library, diagnostic helpers, and release notes. */
SP.extraFiles = [
  'data/db/disorders-ch02.js',
  'data/helpers/ch02-psychosis.js',
  'data/db/disorders-ch03.js',
  'data/helpers/ch03-bipolar.js',
  'data/db/disorders-ch04.js',
  'data/helpers/ch04-depressive.js',
  'data/db/clinical-ch04.js',
  'data/changelog.js'
];
