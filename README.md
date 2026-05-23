# Khma — ხმა

AI feedback analytics for Georgian hospitality. Khma reads guest reviews from Google,
Booking.com, TripAdvisor and 2GIS — in Georgian, English and Russian — and turns
1,000+ comments a month into the three things worth fixing this week.

Built with **Next.js 15 (App Router) · React 19 · TypeScript** and **PostgreSQL 16** in Docker.
The marketing page follows the locked design system in [`DESIGN.md`](./DESIGN.md) (Framer's
dark-canvas poster aesthetic), produced with the [Hallmark](.agents/skills/hallmark) design skill.

## Quick start

```bash
# 1. Environment
cp .env.example .env.local        # defaults already match docker-compose

# 2. Database (Postgres 16 in Docker — table auto-creates on first boot)
npm run db:up

# 3. App
npm install
npm run dev                       # http://localhost:3000
```

The waitlist form on the landing page writes to the `waitlist` table via a Next.js
Server Action (`src/app/actions.ts` → `src/lib/db.ts`).

## Verify the database works

```bash
# After submitting the form on the page:
docker exec -it khma-postgres psql -U khma -d khma -c "SELECT business_name, email, city, business_type, created_at FROM waitlist ORDER BY created_at DESC;"
```

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run db:up` / `npm run db:down` | Start / stop Postgres |
| `npm run db:logs` | Tail Postgres logs |

## Project shape

```
docker-compose.yml      Postgres 16 service (volume + healthcheck)
db/init.sql             waitlist schema, auto-run on first container boot
tokens.css              portable design tokens (mirrors DESIGN.md)
src/app/
  layout.tsx            fonts (Geist + Inter) + metadata
  globals.css           full stylesheet, every colour references a token
  page.tsx              the landing page (Bento Grid macrostructure)
  actions.ts            joinWaitlist server action + validation
src/components/
  WaitlistForm.tsx      client form (8 states via useActionState)
src/lib/db.ts           pooled pg client
```

## Notes

- Dashboard figures on the page are clearly labelled **“Sample data”** — Khma is a new
  product, so the page makes no invented social-proof claims.
- No light mode by design — `DESIGN.md` specifies a dark-only brand.
- `DATABASE_URL` is read server-side only; `pg` is excluded from the client bundle.
