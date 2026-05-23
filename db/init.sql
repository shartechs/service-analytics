-- Khma — initial schema.
-- Runs automatically the first time the Postgres data volume is created
-- (Docker mounts this file into /docker-entrypoint-initdb.d/).

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS waitlist (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name TEXT        NOT NULL,
  email         TEXT        NOT NULL UNIQUE,
  city          TEXT        NOT NULL,
  business_type TEXT        NOT NULL,
  monthly_reviews TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Newest signups first — the query the team will run most often.
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC);
