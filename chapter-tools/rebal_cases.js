const fs=require('fs');const f=process.argv[2], ch=process.argv[3];const src=fs.readFileSync(f,'utf8');
global.window={};let out;global.SP={add(c,k,v){out=v}};eval(src);
const T=[2,0,3,1,4];
out.forEach((v,i)=>{const t=T[i%5];const a=v.answer;if(t===a)return;const x=v.choices[a];v.choices[a]=v.choices[t];v.choices[t]=x;v.answer=t;});
const cnt=[0,0,0,0,0];out.forEach(v=>cnt[v.answer]++);console.error(ch,cnt.join(' '));
const head=src.slice(0,src.indexOf('SP.add('));
fs.writeFileSync(f,head+'SP.add("'+ch+'", "cases", [\n'+out.map(v=>'  '+JSON.stringify(v)).join(',\n')+'\n]);\n');
