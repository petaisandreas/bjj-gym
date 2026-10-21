// GENERATED from clients/bjj-gym/client.json by scripts/sync-default.mjs / scripts/build.mjs. Do not edit by hand.
const deepFreeze = (o) => { Object.values(o).forEach((v) => v && typeof v === "object" && deepFreeze(v)); return Object.freeze(o); };
export default deepFreeze({
  "id": "bjj-gym",
  "appName": "BJJ GYM",
  "wordmark": {
    "main": "BJJ",
    "accent": "GYM"
  },
  "businessName": "BJJ GYM Academy",
  "owner": {
    "name": "Rafael Moreira",
    "short": "Rafael",
    "initials": "RM"
  },
  "contact": {
    "email": "hello@bjjgym.app",
    "instagram": "bjjgym"
  },
  "locale": {
    "currency": "USD",
    "numberLocale": "en-US"
  },
  "storagePrefix": "bjjgym",
  "seed": {
    "location": "Main Academy",
    "staffEmailDomain": "bjjgym.app"
  },
  "site": {
    "title": "BJJ GYM — Academy software built on the mats",
    "description": "BJJ GYM runs your Jiu-Jitsu academy: members, schedule, check-ins, billing, belts, leads, staff, shop and reports in one place.",
    "heroLead": "BJJ GYM puts members, class check-ins, billing, belt promotions and lead follow-up in one fast, mobile-friendly workspace — so you can spend your evenings on the mats instead of behind a desk.",
    "promo": "🥋 Built by grapplers, for academy owners"
  }
});
