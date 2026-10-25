import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const routes=['#/c/ch10/practice','#/c/ch10/practice/write','#/c/ch10/practice/count','#/c/ch10/practice/traps','#/c/ch10/cards/vignettes','#/complaints/weight-loss','#/complaints/binge-purge','#/complaints/odd-eating','#/complaints/picky-child','#/complaints/neglected-child','#/complaints/avoidance','#/complaints','#/','#/c/ch10','#/c/ch10/guide','#/c/ch10/guide/s10-coding','#/c/ch10/high-yield','#/c/ch10/cards/criteria','#/c/ch10/cards/differential','#/c/ch10/cards/clinical','#/c/ch10/cards/cases','#/c/ch10/cards/mnemonics','#/c/ch10/handout','#/c/ch10/summary','#/dx/pica','#/dx/rumination','#/dx/arfid','#/dx/anorexia','#/dx/bulimia','#/dx/bed','#/dx/other-specified-eating','#/dx/unspecified-eating','#/compare/anorexia,arfid','#/compare/bulimia,bed','#/helpers/eating','#/time','#/codes','#/glossary','#/mnemonics','#/mnemonics/drill/ch10','#/whats-new','#/updates','#/search/anorexia','#/drill/ch10','#/dx/specific-phobia','#/dx/bdd','#/complaints/appearance','#/mnemonics/pdf'];
for (const vp of [{width:1400,height:900},{width:390,height:844}]) {
const p = await b.newPage({viewport:vp});
const errs=[]; p.on('pageerror',e=>errs.push(p.url()+' :: '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_TUNNEL/.test(m.text()))errs.push(p.url()+' :: console '+m.text())});
for (const r of routes) { await p.goto('http://localhost:8766/'+r); await p.waitForTimeout(400); const t=await p.title(); if(t.startsWith('Not found')) errs.push('NOTFOUND '+r);
 const ov=await p.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth); if(ov>1) errs.push('OVERFLOW '+vp.width+' '+r+' '+ov);
 if(vp.width<500 && ['#/c/ch10/guide','#/helpers/eating'].includes(r)) await p.screenshot({path:'p6'+r.replace(/[#\/,]/g,'_')+'.png'});
}
console.log(vp.width,'ERRORS',errs.length); errs.forEach(e=>console.log(e)); await p.close();}
await b.close();
