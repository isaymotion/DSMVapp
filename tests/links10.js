global.window=global;global.SP={};window.SP=SP;eval(require("fs").readFileSync("data/chapters.js","utf8"));
const fs=require('fs');
SP.manifest.filter(c=>c.ready).forEach(c=>c.files.forEach(f=>{const p='data/'+c.id+'/'+f+'.js';if(fs.existsSync(p))eval(fs.readFileSync(p,'utf8'));else console.log('MISSING',p)}));
SP.extraFiles.forEach(f=>eval(fs.readFileSync(f,'utf8')));
const secs=new Set();Object.values(SP.chapters).forEach(ch=>ch.guide&&ch.guide.parts.forEach(p=>p.sections.forEach(s=>secs.add(s.id))));
const dx=new Set(SP.disorders.map(d=>d.id)),hp=new Set(SP.helpers.map(h=>h.id));
const gl=new Set(SP.glossary.map(g=>g[0].toLowerCase()));
const all=JSON.stringify([SP.chapters.ch10,SP.disorders.filter(d=>d.ch==='ch10'),SP.helpers.filter(h=>h.chapter==='ch10')]);
let bad=0;
for(const m of all.matchAll(/\[\[(\w+):([^\]|]+)/g)){const [_,k,v]=m;
 if(k==='dx'&&!dx.has(v)||k==='helper'&&!hp.has(v)||k==='gl'&&!gl.has(v.toLowerCase())){console.log('BAD',k,v);bad++}
 if(k==='page'&&v.startsWith('c/')){const s=v.split('/')[3];if(s&&!secs.has(s)){console.log('BADPAGE',v);bad++}}}
SP.disorders.filter(d=>d.ch==='ch10').forEach(d=>{if(!secs.has(d.sec))console.log('BADSEC',d.id,d.sec);(d.differential||[]).forEach(x=>{if(x.id&&!dx.has(x.id))console.log('BADDIFF',d.id,x.id)})});
SP.helpers.filter(h=>h.chapter==='ch10').forEach(h=>{Object.entries(h.nodes).forEach(([k,n])=>n.options.forEach(o=>{if(o.to.startsWith('r:')){if(!h.results[o.to.slice(2)])console.log('BADRES',h.id,o.to)}else if(!h.nodes[o.to])console.log('BADNODE',h.id,o.to)}));
 Object.entries(h.results).forEach(([k,r])=>{if(r.link&&!secs.has(r.link.sec))console.log('BADLINK',k,r.link.sec);if(r.dxId&&!dx.has(r.dxId))console.log('BADDXID',k,r.dxId)});
 const used=new Set();Object.values(h.nodes).forEach(n=>n.options.forEach(o=>used.add(o.to)));Object.keys(h.results).forEach(k=>{if(!used.has('r:'+k))console.log('UNUSED',h.id,k)})});
SP.chapters.ch10.mnemonics.forEach(m=>{if(!secs.has(m.sec)||!dx.has(m.dx))console.log('BADMN',m.id)});
const ids=new Set();['criteria','differential','clinical','cases'].forEach(k=>SP.chapters.ch10[k].forEach(c=>{if(ids.has(c.id))console.log('DUP',c.id);ids.add(c.id)}));
const gterms=SP.glossary.map(g=>g[0].toLowerCase());console.log('gl dups',gterms.filter((t,i)=>gterms.indexOf(t)!==i));
console.log('done bad',bad,'disorders',SP.disorders.length);
