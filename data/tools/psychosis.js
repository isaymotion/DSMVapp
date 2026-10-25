/* Case tools: schizophrenia assessment (DSM-5-TR pp. 113–122) and the clinical checklists used in a
   psychosis case presentation (adherence, violence risk, substance-induced vs independent). */
SP.tools = SP.tools || {};
SP.tools.schizo = {
  aSymptoms: [
    { id: "del", label: "Delusions", core: true, ask: "“Is anyone trying to harm you? Do you have special powers or a special mission?”" },
    { id: "hal", label: "Hallucinations", core: true, ask: "“Do you hear voices when no one is around? What do they say?”" },
    { id: "dis", label: "Disorganized speech", core: true, ask: "Observe: derailment, tangentiality, incoherence." },
    { id: "beh", label: "Grossly disorganized or catatonic behavior", ask: "Observe and ask staff or family." },
    { id: "neg", label: "Negative symptoms (diminished emotional expression or avolition)", ask: "“Do you still do the things you used to? How do you spend your day?”" }
  ],
  criteria: [
    { id: "a1m", label: "A. Two or more of the above for a significant portion of 1 month (less if successfully treated), at least one being delusions, hallucinations or disorganized speech", auto: true },
    { id: "b", label: "B. Level of functioning in work, relationships or self-care is markedly below the level before onset" },
    { id: "c", label: "C. Continuous signs for at least 6 months, including at least 1 month of active-phase symptoms (may include prodromal or residual periods)" },
    { id: "d", label: "D. Schizoaffective disorder and depressive or bipolar disorder with psychotic features ruled out (no mood episodes during the active phase, or present for only a minority of the total duration)" },
    { id: "e", label: "E. Not attributable to a substance (drug or medication) or another medical condition" },
    { id: "f", label: "F. If there is autism or a childhood communication disorder, prominent delusions or hallucinations have lasted at least 1 month" }
  ],
  courses: [
    { id: "first-acute", label: "First episode, currently in acute episode" },
    { id: "first-partial", label: "First episode, currently in partial remission" },
    { id: "first-full", label: "First episode, currently in full remission" },
    { id: "multi-acute", label: "Multiple episodes, currently in acute episode" },
    { id: "multi-partial", label: "Multiple episodes, currently in partial remission" },
    { id: "multi-full", label: "Multiple episodes, currently in full remission" },
    { id: "continuous", label: "Continuous" },
    { id: "unspecified", label: "Unspecified" }
  ],
  courseNote: "Course specifiers are used only after the disorder has lasted 1 year. “Multiple episodes” needs at least two episodes: a first episode, a remission and at least one relapse.",
  adherence: {
    methods: ["Patient report", "Family or caregiver report", "Pill count or blister packs", "Pharmacy refill records", "Missed appointments or depot doses", "Plasma antipsychotic level", "Relapse soon after stopping (by history)"],
    reasons: [
      { g: "Illness", items: ["Poor insight (does not believe he is ill)", "Persecutory beliefs about medicine or doctors", "Cognitive impairment or disorganization (forgets doses)", "Feels well and stops (“I’m cured”)", "Depression or hopelessness"] },
      { g: "Medication", items: ["Weight gain or metabolic effects", "Sedation", "Sexual dysfunction", "Extrapyramidal effects or akathisia", "Complex regimen or many daily doses"] },
      { g: "Substances", items: ["Alcohol use", "Other drug use", "Smoking changes drug levels (CYP1A2)"] },
      { g: "Social and system", items: ["Cost or access to medicines", "Lives alone or little supervision", "Stigma", "Poor follow-up or weak therapeutic alliance", "Family attitudes against medication"] }
    ]
  },
  violence: {
    historical: ["Past violence (strongest predictor)", "Violence when off medication", "Young age at first violence", "Substance use disorder", "Past nonadherence", "Conduct problems or antisocial traits", "Victim of abuse or trauma", "Male sex, younger age"],
    clinical: ["Persecutory delusions or feeling threatened", "Command hallucinations to harm", "Lack of insight", "Hostility, anger or agitation now", "Current intoxication or use", "Currently not taking medication"],
    future: ["Access to weapons", "Unstable housing or little supervision", "Poor follow-up after discharge", "Conflict with family or others", "Likely return to substances"],
    protective: ["Taking medication (or on a long-acting injectable)", "Insight into illness and early warning signs", "Supportive family", "Engaged with treatment team", "Abstinent from substances", "Structured day or work"],
    note: "Structured professional judgment tools such as the HCR-20 V3 organize these factors. Rate risk as low, moderate or high for a time frame and say what would change it."
  },
  induced: [
    { id: "before", label: "Psychosis began before any substance use", indep: true },
    { id: "abst", label: "Psychotic episodes occurred during periods of abstinence (or years after stopping)", indep: true },
    { id: "persist", label: "Psychosis persisted well beyond about 1 month after stopping use or withdrawal", indep: true },
    { id: "history", label: "History of recurrent non-substance-related episodes", indep: true },
    { id: "onlyuse", label: "Psychosis occurs only during intoxication or withdrawal and resolves within days to weeks", indep: false },
    { id: "insight", label: "Hallucinations with intact reality testing during use (perceptual disturbances only)", indep: false }
  ]
};
