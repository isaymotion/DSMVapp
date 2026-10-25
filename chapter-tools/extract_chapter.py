#!/usr/bin/env python3
"""Extract one DSM-5-TR chapter as text from the user's PDF (never commit the PDF or its text).
Usage: python3 -I extract_chapter.py DSM.pdf FIRST_PRINTED_PAGE LAST_PRINTED_PAGE OUT.txt
  e.g. Chapter 11 (Elimination): 399 405 -> ch11.txt  (page ranges are in data/chapters.js `pages`)
Makes dsm.txt next to OUT with `pdftotext -layout` once, then finds the PDF pages whose
first or last non-blank line is the printed page number."""
import os, subprocess, sys
pdf, first, last, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
full = os.path.join(os.path.dirname(os.path.abspath(out)), 'dsm.txt')
if not os.path.exists(full):
    subprocess.run(['pdftotext', '-layout', pdf, full], check=True)
pages = open(full, encoding='utf-8', errors='replace').read().split('\f')
def num(p):
    ls = [l.strip() for l in p.strip().splitlines() if l.strip()]
    for cand in (ls[-1:] + ls[:1]) if ls else []:
        if cand.isdigit(): return int(cand)
    return None
nums = [num(p) for p in pages]
s = next(i for i, n in enumerate(nums) if n == first)
e = s
for i in range(s, len(nums)):
    if nums[i] is not None and nums[i] > last and i - s > 1: break
    if nums[i] is not None and nums[i] < first: continue
    e = i
open(out, 'w').write('\f'.join(pages[s:e + 1]))
print(f'{out}: printed {first}-{last} = PDF pages {s+1}-{e+1}, {sum(len(p) for p in pages[s:e+1])} chars')
