import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
const SC=(process.env.SC||process.cwd())+'/';
const b = await chromium.launch();
const p = await (await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2})).newPage();
const errs=[]; p.on('pageerror',e=>errs.push(p.url()+' '+e.message)); p.on('dialog',d=>d.accept());
const go=async h=>{await p.goto('http://localhost:8766/'+h);await p.waitForTimeout(700);};
const wide=async n=>{const w=await p.evaluate(()=>document.documentElement.scrollWidth);if(w>391)errs.push('OVERFLOW '+n+' '+w);};
for (const ch of [process.env.CH||'ch10']) {
  // walk all vignettes: answer correct, part 2, rate
  await go(`#/c/${ch}/cards/vignettes`); await p.selectOption('#opt-mode','order'); await p.waitForTimeout(300);
  for (let i=0;i<25;i++){
    const ans=await p.evaluate(()=>{const k=document.querySelector('.card-nav__pos');return 0});
    const r=await p.evaluate(([ch,i])=>SP._app.chapter(ch).vignettes[i].answer,[ch,i]);
    if(r<0){errs.push('vig not found '+ch+i);break;}
    await p.click(`.face--front [data-choice="${r}"]`); await p.waitForTimeout(60);
    if(await p.locator('#part2').count()){await p.click('#part2');await p.waitForTimeout(60);const r2=await p.evaluate(([ch,i])=>SP._app.chapter(ch).vignettes[i].then.answer,[ch,i]);await p.click(`.face--front [data-choice="${r2}"]`);await p.waitForTimeout(60);}
    if(i===0) await p.screenshot({path:SC+ch+'-vig.png',fullPage:true});
    await wide(ch+'vig'+i);
    const v=await p.textContent('.face--back .verdict'); if(!/Correct/.test(v)) errs.push('verdict '+ch+i+' '+v);
    if(await p.locator('#next').isDisabled()) break; await p.click('#next'); await p.waitForTimeout(60);
  }
  // all dxline correct
  await go(`#/c/${ch}/practice/write`);
  const n=await p.evaluate((ch)=>SP._app.chapter(ch).dxline.length,ch);
  for(let i=0;i<n;i++){
    const parts=await p.evaluate(([ch,i])=>SP._app.chapter(ch).dxline[i].parts.map(x=>x.answer),[ch,i]);
    for(let j=0;j<parts.length;j++){for(const k of [].concat(parts[j])) await p.click(`[data-part="${j}"][data-opt="${k}"]`);}
    await p.click('[data-act="check"]'); await p.waitForTimeout(60);
    const t=await p.textContent('.pr-result__v'); if(!/Exactly/.test(t)) errs.push('dx '+ch+i);
    if(i===0) await p.screenshot({path:SC+ch+'-write.png',fullPage:true});
    await wide(ch+'write'+i);
    await p.click('[data-act="next"]'); await p.waitForTimeout(60);
  }
  // all counting correct
  await go(`#/c/${ch}/practice/count`);
  const m=await p.evaluate((ch)=>SP._app.chapter(ch).counting.length,ch);
  for(let i=0;i<m;i++){
    const it=await p.evaluate(([ch,i])=>{const k=SP._app.chapter(ch).counting[i];return {items:k.items.map(x=>!!x[1]),met:!!k.met}},[ch,i]);
    for(let j=0;j<it.items.length;j++) await p.click(`[data-i="${j}"][data-v="${it.items[j]?1:0}"]`);
    await p.click(`[data-met="${it.met?1:0}"]`); await p.click('[data-act="check"]'); await p.waitForTimeout(60);
    const t=await p.textContent('.pr-result__v'); if(!/All correct/.test(t)) errs.push('count '+ch+i+' '+t);
    if(i===0) await p.screenshot({path:SC+ch+'-count.png',fullPage:true});
    await wide(ch+'count'+i);
    await p.click('[data-act="next"]'); await p.waitForTimeout(60);
  }
}
for (const h of ['#/dx/suicidal-behavior','#/dx/malingering','#/complaints/life-problem','#/complaints/self-harm-behavior','#/complaints/after-loss','#/complaints/feigned']) { await go(h); await wide(h); await p.screenshot({path:SC+h.replace(/[#/]/g,'_')+'.png',fullPage:true}); }
console.log(await p.evaluate(()=>SP.complaints.map(c=>c.id+':'+c.items.length).join(' ')));
console.log('ERR',errs); await b.close();
