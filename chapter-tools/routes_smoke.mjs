import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const routes=["#/", "#/c/ch14/practice", "#/c/ch14/practice/write", "#/c/ch14/practice/count", "#/c/ch14/practice/traps", "#/c/ch14/cards/vignettes", "#/complaints/gender-distress", "#/complaints/appearance", "#/complaints/school-refusal", "#/complaints/social-differences", "#/complaints/unstable", "#/complaints", "#/c/ch14", "#/c/ch14/guide", "#/c/ch14/high-yield", "#/c/ch14/cards", "#/helpers/gender", "#/glossary", "#/mnemonics", "#/whats-new", "#/c/ch14/guide/s14-map", "#/c/ch14/guide/s14-terms", "#/c/ch14/guide/s14-coding", "#/c/ch14/guide/s14-children", "#/c/ch14/guide/s14-adults", "#/c/ch14/guide/s14-specifiers", "#/c/ch14/guide/s14-features", "#/c/ch14/guide/s14-associated", "#/c/ch14/guide/s14-epi", "#/c/ch14/guide/s14-course", "#/c/ch14/guide/s14-risk", "#/c/ch14/guide/s14-suicide", "#/c/ch14/guide/s14-differential", "#/c/ch14/guide/s14-residual", "#/c/ch14/guide/s14-care", "#/c/ch14/guide/s14-approach", "#/dx/gender-dysphoria-children", "#/dx/gender-dysphoria-adults", "#/dx/other-specified-gender-dysphoria", "#/dx/unspecified-gender-dysphoria", "#/compare"];
for (const vp of [{width:1400,height:900},{width:390,height:844}]) {
const p = await b.newPage({viewport:vp});
const errs=[]; p.on('pageerror',e=>errs.push(p.url()+' :: '+e.message)); p.on('console',m=>{if(m.type()==='error'&&!/fonts|ERR_TUNNEL/.test(m.text()))errs.push(p.url()+' :: console '+m.text())});
for (const r of routes) { await p.goto('http://localhost:8766/'+r); await p.waitForTimeout(400); const t=await p.title(); if(t.startsWith('Not found')) errs.push('NOTFOUND '+r);
 const ov=await p.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth); if(ov>1) errs.push('OVERFLOW '+vp.width+' '+r+' '+ov);
 if(vp.width<500 && ["#/c/ch14/guide/s14-map", "#/c/ch14/guide/s14-coding", "#/c/ch14/guide/s14-children", "#/c/ch14/guide/s14-course", "#/c/ch14/guide/s14-care", "#/helpers/gender"].includes(r)) await p.screenshot({path:(process.env.SC||'.')+'/p6'+r.replace(/[#\/,]/g,'_')+'.png'});
}
console.log(vp.width,'ERRORS',errs.length); errs.forEach(e=>console.log(e)); await p.close();}
await b.close();
