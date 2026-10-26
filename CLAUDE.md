# BodyGuard

Aplikácia na vyzdvihovanie detí (MŠ / ZŠ / SKD). Zdroj pravdy je [SPEC.md](./SPEC.md), najmä kapitoly 15 (rozhodnutia) a 16 (infraštruktúra).

- Komunikácia s majiteľom: slovensky. Kód a komentáre: angličtina.
- UI texty len cez i18n (SK + EN, ľahko pridať ďalší jazyk).
- Firebase projekt: `bodyguard-5a327`. Vývoj s emulátormi, bez ostrého nasadenia bez súhlasu.
- Žiadne kľúče ani `.env` v repozitári.

## Príkazy
Monorepo (npm workspaces): `apps/web` (Next.js PWA + next-intl), `functions` (Cloud Functions, región europe-west1), `tests` (Security Rules testy).

- `npm install` – inštalácia
- `npm run dev` – web (env: skopíruj `.env.example` do `apps/web/.env.local`)
- `npm run emulators` – Firebase Emulator Suite (Auth, Firestore, Functions, Storage; UI na :4000; potrebuje Java)
- `npm run typecheck` / `npm run build`
- `npm run test:rules` – testy Security Rules v emulátore (testy zatiaľ nie sú napísané)
- Deploy: zatiaľ žiadny, len so súhlasom majiteľa.

Jazyk UI: cookie `locale` -> jazyk prehliadača -> `sk`. Nový jazyk = `src/i18n/config.ts` + `messages/<kód>.json`.
