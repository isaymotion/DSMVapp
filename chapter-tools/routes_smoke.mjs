import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const routes=['#/','#/c/ch11/practice','#/c/ch11/practice/write','#/c/ch11/practice/count','#/c/ch11/practice/traps','#/c/ch11/cards/vignettes','#/complaints/bedwetting','#/complaints/soiling','#/complaints/neglected-child','#/complaints/irritable-child','#/c/ch11','#/c/ch11/guide','#/c/ch11/guide/s11-coding','#/c/ch11/guide/s11-workup','#/c/ch11/guide/s11-other','#/c/ch11/high-yield','#/c/ch11/cards/criteria','#/c/ch11/cards/differential','#/c/ch11/cards/clinical','#/c/ch11/cards/cases','#/c/ch11/cards/mnemonics','#/c/ch11/handout','#/c/ch11/summary','#/dx/enuresis','#/dx/encopresis','#/dx/other-specified-elimination','#/dx/unspecified-elimination','#/compare/enuresis,encopresis','#/helpers/elimination','#/time','#/codes','#/glossary','#/mnemonics','#/mnemonics/drill/ch11','#/whats-new','#/updates','#/search/enuresis','#/drill/ch11','#/complaints','#/c/ch10','#/dx/anorexia','#/mnemonics/pdf'];
for (const vp of [{width:1400,height:900},{width:390,height:844}]) {
const p = await b.newPage({viewport:vp});
const errs=[]; p.on('pageerror',e=>errs.push(p.url()+' :: '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_TUNNEL/.test(m.text()))errs.push(p.url()+' :: console '+m.text())});
for (const r of routes) { await p.goto('http://localhost:8766/'+r); await p.waitForTimeout(400); const t=await p.title(); if(t.startsWith('Not found')) errs.push('NOTFOUND '+r);
 const ov=await p.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth); if(ov>1) errs.push('OVERFLOW '+vp.width+' '+r+' '+ov);
 if(vp.width<500 && ['#/c/ch11/guide','#/helpers/elimination','#/c/ch11/guide/s11-coding'].includes(r)) await p.screenshot({path:(process.env.SC||'.')+'/p6'+r.replace(/[#\/,]/g,'_')+'.png'});
}
console.log(vp.width,'ERRORS',errs.length); errs.forEach(e=>console.log(e)); await p.close();}
await b.close();
