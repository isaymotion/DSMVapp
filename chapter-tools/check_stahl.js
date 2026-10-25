global.window=global;global.SP={};eval(require("fs").readFileSync("data/chapters.js","utf8"));
const CH=process.env.CH||'ch10';
const fs=require('fs');SP.extraFiles.forEach(f=>eval(fs.readFileSync(f,'utf8')));
const ST=(process.env.STAHL||'../Stahl')+'/data/';
const drugs=new Set([...fs.readFileSync(ST+'db/drugs.js','utf8').matchAll(/^\s*id: '([^']*)'/gm)].map(m=>m[1]));
const secs=new Set();fs.readdirSync(ST).filter(d=>/^ch\d+$/.test(d)).forEach(d=>{const g=ST+d+'/guide.js';if(fs.existsSync(g))[...fs.readFileSync(g,'utf8').matchAll(/id: "(s\d+-[a-z0-9-]+)"/g)].forEach(m=>secs.add(d+'/'+m[1]))});
const chk=p=>{if(p.startsWith('drugs/'))return drugs.has(p.slice(6));const m=p.match(/^c\/(ch\d+)\/guide(?:\/(.+))?$/);if(!m)return false;return !m[2]||secs.has(m[1]+'/'+m[2])};
const dx=new Set(SP.disorders.map(d=>d.id));let bad=0;
const ex=SP.dxExtra.filter(e=>SP.disorders.find(d=>d.id===e.id&&d.ch===CH));console.log('extras ch10',ex.length);
const s=JSON.stringify(ex);for(const m of s.matchAll(/\[\[stahl:([^|\]]+)/g))if(!chk(m[1])){console.log('BAD',m[1]);bad++}
ex.forEach(e=>(e.tx&&e.tx.stahl||[]).forEach(x=>{if(!chk(x[1])){console.log('BADL',x[1]);bad++}}));
SP.complaintData.forEach(c=>c.items.forEach(i=>{if(i.dx&&!dx.has(i.dx)){console.log('BADDX',c.id,i.dx);bad++}}));
SP.dxExtra.forEach(e=>{if(!dx.has(e.id))console.log('BADEXTRA',e.id)});
console.log('bad',bad);
