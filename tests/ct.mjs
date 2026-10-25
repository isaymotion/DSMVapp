import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const SC=(process.env.SC||process.cwd())+'/';
const b = await chromium.launch();
for (const vp of [{width:1280,height:900},{width:390,height:844}]) {
const ctx = await b.newContext({viewport:vp}); const p = await ctx.newPage();
const errs=[]; p.on('pageerror',e=>errs.push(p.url()+' :: '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_TUNNEL/.test(m.text()))errs.push('console '+m.text())}); p.on('dialog',d=>d.accept());
const go=async h=>{await p.goto('http://localhost:8766/'+h);await p.waitForTimeout(700);};
const ov=async n=>{const o=await p.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth); if(o>1) errs.push('OVERFLOW '+vp.width+' '+n+' '+o);};
await go('#/assess'); await ov('hub');
await go('#/assess/substance'); 
for (const s of ['alcohol','tobacco','amphetamine']) await p.click(`[data-sel="${s}"]`);
for (const n of [1,2,3,4,5,6,9,10,11]) await p.check(`[data-k="sub.alcohol.crit.${n}"]`);
await p.check('[data-k="sub.alcohol.wd.on"]'); for (const i of [0,1,2,4]) await p.check(`[data-k="sub.alcohol.wd.signs.${i}"]`); await p.check('[data-k="sub.alcohol.wd.perc"]');
for (const n of [1,2,4,7,9,10,11]) await p.check(`[data-k="sub.tobacco.crit.${n}"]`);
await p.fill('[data-k="sub.amphetamine.specific"]','methamphetamine');
await p.selectOption('[data-k="sub.amphetamine.status"]','sustained');
for (const n of [1,3,4,5,6,8]) await p.check(`[data-k="sub.amphetamine.crit.${n}"]`);
await p.waitForTimeout(200);
console.log(vp.width,'LINES:', (await p.textContent('#as-lines')).replace(/\s+/g,' '));
await ov('sub'); if(vp.width<500) await p.screenshot({path:SC+'ct_sub.png',fullPage:false});
await go('#/assess/scale/audit'); for (let i=0;i<10;i++){ await p.click(`input[name="it${i}"] >> nth=${i<8?3:2}`);} 
console.log('AUDIT', (await p.textContent('#as-score')).replace(/\s+/g,' '));
await go('#/assess/scale/ftnd'); for (let i=0;i<6;i++) await p.click(`input[name="it${i}"] >> nth=0`);
console.log('FTND', (await p.textContent('#as-score')).replace(/\s+/g,' '));
await go('#/assess/scale/ciwa'); for (let i=0;i<10;i++) await p.click(`input[name="it${i}"] >> nth=2`);
console.log('CIWA', (await p.textContent('#as-score')).replace(/\s+/g,' ')); await ov('ciwa');
await go('#/assess/psychosis');
for (const k of ['del','hal','neg']) await p.check(`[data-k="psy.a.${k}"]`);
await p.check('[data-k="psy.a1m"]'); for (const k of ['b','c','d','e']) await p.check(`[data-k="psy.crit.${k}"]`);
await p.selectOption('[data-k="psy.course"]','multi-acute'); await p.fill('[data-k="psy.onset"]','2014');
await p.selectOption('[data-k="scales.crdpss.ans.0"]','3'); await p.selectOption('[data-k="scales.crdpss.ans.1"]','4');
await p.check('[data-k="psy.ind.abst"]'); await p.check('[data-k="psy.ind.persist"]');
await p.check('[data-k="psy.adhr.0_0"]'); await p.check('[data-k="psy.adhr.1_0"]'); await p.check('[data-k="psy.adhr.2_0"]');
await p.check('[data-k="psy.vh.0"]'); await p.check('[data-k="psy.vh.1"]'); await p.check('[data-k="psy.vc.0"]'); await p.check('[data-k="psy.vp.2"]');
await p.selectOption('[data-k="psy.vRisk"]','High'); await p.selectOption('[data-k="psy.sRisk"]','Low');
console.log('PSY', (await p.textContent('#ps-line')).replace(/\s+/g,' '), '|', await p.textContent('#ps-ind-v'));
await ov('psy');
await go('#/assess/case');
const dates=['2014-06','2015-09','2016-11','2018-02','2019-05','2020-10','2022-01','2023-07','2025-03'];
for (let i=0;i<9;i++){ if(i>=3){ await p.click('#cp-addadm'); await p.waitForTimeout(150);} await p.fill(`[data-k="adm.${i}.date"]`,dates[i]); await p.selectOption(`[data-k="adm.${i}.meds"]`, i===4?'adherent':i%3?'off':'partial'); await p.selectOption(`[data-k="adm.${i}.viol"]`, i%2?'assault':'destructive'); await p.fill(`[data-k="adm.${i}.trigger"]`,'Stopped olanzapine'); if(i%2) await p.fill(`[data-k="adm.${i}.subs"]`,'Alcohol'); }
await p.fill('[data-k="pres.medTrials"]','Olanzapine 20 mg/day since 2015: good response');
await p.fill('[data-k="pres.age"]','29'); await p.fill('[data-k="pres.title"]','The Revolving Door: Relapse, Nonadherence and Violence in Schizophrenia'); await p.fill('[data-k="pres.presenter"]','Presenter Name, MD'); await p.fill('[data-k="pres.supervisor"]','Dr. Consultant'); await p.fill('[data-k="pres.supResident"]','Dr. Resident'); await p.fill('[data-k="pres.date"]','October 26, 2026'); await p.fill('[data-k="pres.institution"]','Sample Hospital · Residency Program'); await p.fill('[data-k="pres.alias"]','Mr. A');
for (const w of ['oneliner','ddx','grid','prog','goals','plans']) { await p.click(`[data-sugg="${w}"]`); await p.waitForTimeout(250); }
console.log('STATS', await p.textContent('#cp-stats'));
console.log('ONELINER', await p.inputValue('[data-k="pres.oneliner"]'));
console.log('points', await p.locator('[data-pt]').count(), 'qs', await p.locator('.as-qa').count(), 'refs', await p.locator('#cp-refs li').count());
await ov('case'); if(vp.width>500) await p.screenshot({path:SC+'ct_case.png',fullPage:true});
await p.click('#cp-send-pi'); console.log('SEND', await p.textContent('#cp-sendmsg'));
const inbox = await p.evaluate(()=>localStorage.getItem('psyCaseApp.inbox')); console.log('INBOX keys', Object.keys(JSON.parse(inbox)[0].fields).join(','));

await go('#/assess/case/print'); await ov('print'); if(vp.width>500) await p.screenshot({path:SC+'ct_print.png',fullPage:true});
await go('#/library'); await ov('lib');
console.log(vp.width,'ERRORS',errs.length); errs.forEach(e=>console.log(e));
if(vp.width>500){ const fs=await import('fs'); fs.writeFileSync(SC+'inbox.json', inbox); fs.writeFileSync(SC+'case.json', await p.evaluate(()=>localStorage.getItem('dsm:v1:case'))); }
await ctx.close(); }
await b.close();
