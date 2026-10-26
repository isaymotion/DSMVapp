const fs=require('fs');const f=process.argv[2], ch=process.argv[3];const src=fs.readFileSync(f,'utf8');
global.window={};let out;global.SP={add(c,k,v){out=v}};eval(src);
const T=[1,3,0,4,2];
out.forEach((v,i)=>{const t=T[i%5]%v.choices.length;const a=v.answer;if(t===a)return;[v.choices,v.whyNot].forEach(arr=>{const x=arr[a];arr[a]=arr[t];arr[t]=x;});v.answer=t;});
const cnt=[0,0,0,0,0];out.forEach(v=>cnt[v.answer]++);console.error(ch,cnt.join(' '));
const head=src.slice(0,src.indexOf('SP.add('));
fs.writeFileSync(f,head+'SP.add("'+ch+'", "vignettes", [\n'+out.map(v=>'  '+JSON.stringify(v,null,2).replace(/\n/g,'\n  ')).join(',\n')+'\n]);\n');
