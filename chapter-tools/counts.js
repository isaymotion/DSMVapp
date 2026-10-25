// Usage (from dsmvapp/): node ../dsm-devtools/chapter-tools/counts.js  -> content counts per ready chapter
global.window=global;global.SP={};window.SP=SP;const fs=require('fs');eval(fs.readFileSync('data/chapters.js','utf8'));
SP.manifest.filter(c=>c.ready).forEach(c=>c.files.forEach(f=>{const p='data/'+c.id+'/'+f+'.js';if(fs.existsSync(p))eval(fs.readFileSync(p,'utf8'))}));
SP.extraFiles.forEach(f=>{try{eval(fs.readFileSync(f,'utf8'))}catch(e){}});
const L=x=>Array.isArray(x)?x.length:x&&typeof x==='object'?Object.keys(x).length:0;
const rows=SP.manifest.filter(c=>c.ready).map(c=>{const d=SP.chapters[c.id]||{};const g=d.guide;return {ch:c.id,
 secs:g?g.parts.reduce((a,p)=>a+p.sections.length,0):0,hy:(d.highYield||[]).reduce((a,t)=>a+t.items.length,0),crit:L(d.criteria),diff:L(d.differential),clin:L(d.clinical),cases:L(d.cases),
 gloss:(fs.readFileSync('data/'+c.id+'/glossary.js','utf8').match(/^\s*\["/gm)||[]).length,mn:L(d.mnemonics),vig:L(d.vignettes),dxl:L(d.dxline),cnt:L(d.counting),traps:L(d.traps),
 dx:SP.disorders.filter(x=>x.ch===c.id).length,helpers:SP.helpers.filter(h=>h.chapter===c.id).length,extra:(SP.dxExtra||[]).filter(e=>SP.disorders.find(x=>x.id===e.id&&x.ch===c.id)).length}});
console.table(rows);
