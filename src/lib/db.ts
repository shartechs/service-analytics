import "server-only";
import { Pool } from "pg";

// Reuse a single pool across hot-reloads in dev (Next.js re-evaluates modules).
declare global {
  // eslint-disable-next-line no-var
  var __khmaPool: Pool | undefined;
}

function createPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env.local and run `npm run db:up`."
    );
  }
  return new Pool({ connectionString, max: 5 });
}

export const pool: Pool = global.__khmaPool ?? createPool();
if (process.env.NODE_ENV !== "production") global.__khmaPool = pool;
