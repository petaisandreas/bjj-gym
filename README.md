# BJJ GYM

Academy management platform for Jiu-Jitsu schools — marketing site, staff web app and front-desk kiosk.
Zero dependencies: vanilla JS modules + a tiny Node static server.

```bash
node server.js        # → http://localhost:5173
```

| Page | Path |
|---|---|
| Marketing site + trial signup | `/` |
| Staff app | `/app.html` |
| Check-in kiosk (tablet) | `/kiosk.html` |
| Member portal (phone) | `/member.html` |
| Mat TV (round timer + who's on the mat) | `/tv.html` |

## Modules
Dashboard · Members (class-group tabs with monthly price, paid / due soon / overdue status with a grace-period day, one-tap Mark paid, profiles, CSV export) · Schedule & attendance (weekly grid, rosters, reservations) ·
Documents (health certificates & waivers with expiry tracking, files kept in IndexedDB) · Belts & progress (configurable stripe/belt rules, eligibility, leaderboard) · Curriculum (technique library, lesson plans) ·
Events (seminars, belt tests, competitions with paid registration) · Billing (plans, invoices, monthly run, failed-payment retry, expenses) ·
Leads & automations (drag-and-drop pipeline, convert-to-member, email/SMS sequences, embeddable form) ·
Staff & payroll (per-class pay, pay periods) · Pro shop (POS, inventory, low-stock alerts, charge-to-account) · Reports · Settings (locations, backup/restore).

## Data
Everything is stored in the browser's `localStorage` (`bjjgym:v1`) and seeded with a demo academy.
Reset from **Settings → Reset demo data**. The kiosk and app sync across tabs.

## Code map
- `js/store.js` — data model, seed data, derived logic (eligibility, check-in, promotion)
- `js/ui.js` — escaping, modal/form helpers, charts, toasts
- `js/app.js` — shell + hash router; `js/views/*.js` — one file per module
- `js/kiosk.js` — PIN / name check-in
- `css/tokens.css` (theme, light/dark), `css/app.css`, `css/site.css`

## Next steps for production
Real backend + auth (e.g. Postgres + an API), a payment processor for recurring billing,
an email/SMS provider to actually send automation steps, and a native/PWA member app.
