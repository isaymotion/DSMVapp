import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const SC=(process.env.SC||process.cwd())+'/';
const inbox=fs.readFileSync(SC+'inbox.json','utf8');
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1024,height:900}});
const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.on('dialog',d=>d.accept());
await p.goto('http://localhost:8770/case-psychinterview/'); await p.waitForTimeout(800);
// existing case with user-typed content
await p.evaluate(()=>{ const s={cases:{abc1:{id:'abc1',kind:'case',created:Date.now()-1e6,updated:Date.now()-1e6,data:{patient:'Mr. A',agesex:'29/M',hpi:'Typed HPI',primaryDx:'Schizophrenia (typed)',ddx:[['Typed ddx','a','b']],refs:['My own ref'],bps:{'Predisposing|Biological':'Typed cell'}}}},last:{}}; localStorage.setItem('psyCaseApp.v1',JSON.stringify(s)); });
await p.evaluate(v=>localStorage.setItem('psyCaseApp.inbox',v), inbox);
await p.reload(); await p.waitForTimeout(1000);
console.log('SHEET', (await p.textContent('.sheet h3')));
await p.screenshot({path:SC+'pi_sheet.png'});
await p.click('[data-into="abc1"]'); await p.waitForTimeout(700);
console.log('RESULT', (await p.textContent('.sheet')).replace(/\s+/g,' ').slice(0,600));
await p.click('[data-ok]'); await p.waitForTimeout(300);
const st = await p.evaluate(()=>JSON.parse(localStorage.getItem('psyCaseApp.v1')));
const d = st.cases.abc1.data;
console.log('inbox left', await p.evaluate(()=>localStorage.getItem('psyCaseApp.inbox')));
console.log('primaryDx:', JSON.stringify(d.primaryDx).slice(0,200));
console.log('ddx rows', d.ddx.length, 'episodes', (d.episodes||[]).length, 'subTable', (d.subTable||[]).length, 'refs', d.refs.length, d.refs[0]);
console.log('bps PB:', JSON.stringify(d.bps['Predisposing|Biological']));
console.log('violence', d.violenceRisk, 'discNotes', (d.discNotes||'').slice(0,60));
// generate slides
const r = await p.evaluate(async ()=>{ const res = await fetch('templates/colorful.pptx'); const buf = await res.arrayBuffer(); const st=JSON.parse(localStorage.getItem('psyCaseApp.v1')); const out = await CaseSlides.generate(st.cases.abc1.data, { template: buf, templateCfg: CaseSlides.TEMPLATES[0] || CaseSlides.TEMPLATES.colorful, title:'Test', dividers:true, notes:true }); return { count: out.count, bytes: out.bytes.length, deck: typeof out.deck, keys: Object.keys(out.deck||{}).slice(0,8), label: out.label }; }).catch(e=>({err:String(e)}));
console.log('SLIDES', JSON.stringify(r).slice(0,1800));
// re-send same inbox: duplicates?
await p.evaluate(v=>localStorage.setItem('psyCaseApp.inbox',v), inbox); await p.reload(); await p.waitForTimeout(800); await p.click('[data-into="abc1"]'); await p.waitForTimeout(500);
console.log('RESEND', (await p.textContent('.sheet')).replace(/\s+/g,' ').slice(0,200));
const d2=(await p.evaluate(()=>JSON.parse(localStorage.getItem('psyCaseApp.v1')))).cases.abc1.data; console.log('after resend ddx', d2.ddx.length, 'episodes', d2.episodes.length);
console.log('ERRORS', errs);
await b.close();
