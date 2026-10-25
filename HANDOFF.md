# Handoff (technical part)
The full handoff, including case-prep status, lives in the private claude.ai Project doc `claude/handoff.md`. Patient details are never stored in this repo.

## 3. Architecture (DSM app)
- Data registration: `SP.add(ch, key, data)`. Routes: `SP.routes[name] = fn(parts)`. Helpers: `SP._app` (store, esc, setView, main, …).
- Store prefix `dsm:v1:`; the case is stored in `dsm:v1:case`.
- `sw.js` VERSION is currently `'2026-10-25-case-tools-4'`; bump it on every release. The changelog (`data/changelog.js`) is at id 26, so the next id is 27.
- Case tools (`#/assess`):
  - `js/assess.js`: substance assessment (11 criteria, severity, withdrawal), scales (AUDIT, CIWA-Ar, FTND, COWS, CRDPSS), psychosis tool (`#/assess/psychosis`).
  - `js/case.js`: case builder at `#/assess/case`:
    - admissions table and SVG timeline;
    - print view `/print`, one-page handout `/handout`, timed script `/script`;
    - "Open case file" (.json; opening one replaces the current case);
    - "Send to PsychInterview".
  - Data files: `data/tools/{substance,scales,psychosis,teaching}.js`.
    - `teaching.js` holds discussion points, Q&A and references, all tagged with `when` (schizo, multi, nonadherence, violence, alcohol, tobacco, amphetamine, olanzapine…).
- **Handoff to PsychInterview** (same origin, shared localStorage):
  - The DSM app writes `psyCaseApp.inbox` = `[{from:'DSMVapp', v:1, sent, title, fields:{…}, chart:{stats, adm:[…]}, notes}]`.
  - PsychInterview `checkInbox()` merges non-destructively: it fills empty fields and adds rows.
  - `admChart` draws the "Hospitalization timeline" slide after Past Psychiatric History.
  - Q&A goes into `discNotes`, which are speaker notes only and are excluded from the Word export.
  - PsychInterview storage is `psyCaseApp.v1`. Its SW CACHE is `'case-mse-v21'`.

## 5. Commands
```
git clone https://github.com/isaymotion/DSMVapp dsmvapp
git clone https://github.com/isaymotion/case-psychinterview
cd dsmvapp && git fetch origin dev-tools && git worktree add ../dsm-devtools dev-tools
cd .. && (cd dsmvapp && python3 -m http.server 8766 >/dev/null 2>&1 &) && (python3 -m http.server 8770 >/dev/null 2>&1 &)
mkdir -p out && SC=$PWD/out node dsm-devtools/tests/t10.mjs   # route smoke test: no NOTFOUND lines = pass
SC=$PWD/out node dsm-devtools/tests/ct.mjs                     # case tools end to end; writes case.json and inbox.json
```
- Port 8766 serves dsmvapp. Port 8770 serves the parent folder, so PsychInterview is at `/case-psychinterview/`.
- Run `npm i -g playwright` only if `import 'playwright'` fails. Chromium is preinstalled; **do not run `playwright install`**. The scripts import playwright from `/home/claude/.npm-global/...`; edit line 1 if the path differs.
- `ho.mjs` checks that the handout is exactly 1 PDF page. `sc.mjs` renders the script view. `pi.mjs` / `pi2.mjs` test the PsychInterview merge and build the deck PDF.
