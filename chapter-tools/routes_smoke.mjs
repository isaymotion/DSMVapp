import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const routes=['#/','#/c/ch17/practice','#/c/ch17/practice/write','#/c/ch17/practice/count','#/c/ch17/practice/traps','#/c/ch17/cards/vignettes','#/complaints/confusion','#/complaints/memory-older','#/complaints/memory-gaps', '#/c/ch17', '#/c/ch17/guide', '#/c/ch17/guide/s17-map', '#/c/ch17/guide/s17-domains', '#/c/ch17/guide/s17-coding', '#/c/ch17/guide/s17-delirium-specifiers', '#/c/ch17/guide/s17-ncd-assessment', '#/c/ch17/guide/s17-parkinsons', '#/c/ch17/guide/s17-tbi', '#/c/ch17/guide/s17-substance', '#/c/ch17/guide/s17-compare', '#/c/ch17/guide/s17-workup', '#/c/ch17/high-yield', '#/c/ch17/cards/criteria', '#/c/ch17/cards/differential', '#/c/ch17/cards/clinical', '#/c/ch17/cards/cases', '#/c/ch17/cards/mnemonics', '#/c/ch17/handout', '#/c/ch17/summary', '#/dx/delirium', '#/dx/major-ncd', '#/dx/mild-ncd', '#/dx/ncd-alzheimers', '#/dx/ncd-substance', '#/dx/ncd-unknown', '#/compare/ncd-alzheimers,ncd-frontotemporal,ncd-lewy', '#/compare/delirium,major-ncd', '#/helpers/delirium', '#/helpers/neurocognitive', '#/time', '#/codes', '#/glossary', '#/mnemonics', '#/mnemonics/drill/ch17', '#/whats-new', '#/updates', '#/search/delirium', '#/drill/ch17', '#/complaints', '#/c/ch11', '#/dx/enuresis'];
for (const vp of [{width:1400,height:900},{width:390,height:844}]) {
const p = await b.newPage({viewport:vp});
const errs=[]; p.on('pageerror',e=>errs.push(p.url()+' :: '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_TUNNEL/.test(m.text()))errs.push(p.url()+' :: console '+m.text())});
for (const r of routes) { await p.goto('http://localhost:8766/'+r); await p.waitForTimeout(400); const t=await p.title(); if(t.startsWith('Not found')) errs.push('NOTFOUND '+r);
 const ov=await p.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth); if(ov>1) errs.push('OVERFLOW '+vp.width+' '+r+' '+ov);
 if(vp.width<500 && ['#/c/ch17/guide/s17-coding','#/helpers/neurocognitive','#/c/ch17/guide/s17-tbi'].includes(r)) await p.screenshot({path:(process.env.SC||'.')+'/p6'+r.replace(/[#\/,]/g,'_')+'.png'});
}
console.log(vp.width,'ERRORS',errs.length); errs.forEach(e=>console.log(e)); await p.close();}
await b.close();
