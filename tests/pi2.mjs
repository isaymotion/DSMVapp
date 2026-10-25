import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const SC=(process.env.SC||process.cwd())+'/';
const b = await chromium.launch(); const p = await b.newPage();
await p.goto('http://localhost:8770/case-psychinterview/'); await p.waitForTimeout(800);
const inbox=fs.readFileSync(SC+'inbox.json','utf8');
await p.evaluate(()=>{ const s={cases:{abc1:{id:'abc1',kind:'case',created:Date.now()-1e6,updated:Date.now()-1e6,data:{patient:'Mr. A',agesex:'29/M',hpi:'Typed HPI',cc:'Ayaw ko na uminom ng gamot',primaryDx:'',refs:[]}}},last:{}}; localStorage.setItem('psyCaseApp.v1',JSON.stringify(s)); });
await p.evaluate(v=>localStorage.setItem('psyCaseApp.inbox',v), inbox); await p.reload(); await p.waitForTimeout(900); await p.click('[data-into="abc1"]'); await p.waitForTimeout(600); await p.click('[data-ok]');
const r = await p.evaluate(async ()=>{ const st=JSON.parse(localStorage.getItem('psyCaseApp.v1')); const res = await fetch('templates/colorful.pptx'); const buf = await res.arrayBuffer();
  const out = await CaseSlides.generate(st.cases.abc1.data, { template: buf, templateCfg: CaseSlides.TEMPLATES[0] || CaseSlides.TEMPLATES.colorful, title:'The Revolving Door', dividers:false, notes:true });
  const titles = out.deck.slides.map(s=>s.title);
  let pdf=null; try{ const pb = await CasePDF.render(out.deck, {}); const bytes = pb.bytes || pb; pdf = Array.from(new Uint8Array(bytes)); }catch(e){ pdf = String(e); }
  return { titles, pdf }; });
console.log(r.titles.join(' | '));
if (Array.isArray(r.pdf)) { fs.writeFileSync(SC+'deck.pdf', Buffer.from(r.pdf)); console.log('pdf ok'); } else console.log('pdf', r.pdf);
await b.close();
