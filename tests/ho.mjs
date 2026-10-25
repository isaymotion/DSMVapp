import { chromium } from '/home/claude/.npm-global/lib/node_modules/playwright/index.mjs';
import fs from 'fs';
const SC=(process.env.SC||process.cwd())+'/';
const b = await chromium.launch(); const ctx=await b.newContext({viewport:{width:1280,height:900}}); let p = await ctx.newPage();
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
// seed case via ct state: reuse localStorage from file if exists
const st = JSON.parse(fs.readFileSync(SC+'case.json','utf8'));
await p.goto('http://localhost:8766/'); await p.evaluate(v=>localStorage.setItem('dsm:v1:case', v), JSON.stringify(st));
await p.waitForTimeout(1500); const p2 = await ctx.newPage(); await p2.goto('http://localhost:8766/#/assess/case/handout'); await p2.waitForTimeout(1800); const q=p; p=p2;
console.log('URL', p.url(), 'ERR0', errs.join(' / ')); console.log('FIT', await p.textContent('#ho-fit',{timeout:3000}).catch(e=>'none'));
await p.screenshot({path:SC+'ho_screen.png', fullPage:true});
await p.evaluate(()=>document.body.classList.add('print-handout','print-casehand')); await p.emulateMedia({media:'print'});
const pdf = await p.pdf({format:'Letter', printBackground:true, preferCSSPageSize:true});
fs.writeFileSync(SC+'handout.pdf', pdf);
const n=(pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g)||[]).length; console.log('PAGES', n);
console.log('ERR', errs);
await b.close();
