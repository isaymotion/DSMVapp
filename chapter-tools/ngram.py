import re,sys
def norm(s): return re.sub(r'[^a-z0-9 ]+',' ',s.lower().replace('**','')).split()
src=' '.join(norm(open(sys.argv[1]).read()))
srcset=set()
w=src.split()
for i in range(len(w)-11): srcset.add(' '.join(w[i:i+12]))
for f in sys.argv[2:]:
    t=norm(open(f).read()); hits=set(); i=0
    while i+12<=len(t):
        g=' '.join(t[i:i+12])
        if g in srcset: hits.add(g); i+=12
        else: i+=1
    for h in hits: print(f.split('/')[-1],'|',h)
