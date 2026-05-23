"use client";

// Static-export variant of the waitlist form (GitHub Pages has no server).
// Validates client-side and shows the success state, but does not persist —
// the real Server Action version (WaitlistForm.tsx) runs when the app is
// served by Next.js with Postgres. Selected at build time in page.tsx.

import { useState } from "react";
import { CITIES, BUSINESS_TYPES } from "@/lib/constants";

type Errors = Partial<Record<"businessName" | "email" | "city" | "businessType", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistFormDemo() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState<{ name: string; email: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const businessName = String(fd.get("businessName") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim().toLowerCase();
    const city = String(fd.get("city") ?? "").trim();
    const businessType = String(fd.get("businessType") ?? "").trim();

    const next: Errors = {};
    if (businessName.length < 2) next.businessName = "Tell us the venue’s name.";
    if (!EMAIL_RE.test(email)) next.email = "That email address looks incomplete.";
    if (!CITIES.includes(city as (typeof CITIES)[number])) next.city = "Pick the city you operate in.";
    if (!BUSINESS_TYPES.includes(businessType as (typeof BUSINESS_TYPES)[number]))
      next.businessType = "Pick the kind of venue you run.";

    setErrors(next);
    if (Object.keys(next).length === 0) setDone({ name: businessName, email });
  }

  if (done) {
    return (
      <div className="wl-form" role="status" aria-live="polite">
        <div className="wl-success">
          <div className="check" aria-hidden="true">
            ✓
          </div>
          <h3>You’re on the list</h3>
          <p>
            Thanks, {done.name}. This is a design preview, so {done.email} isn’t stored — run the
            app locally to save real signups.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="wl-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="businessName">Venue name</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          placeholder="e.g. Old Town Guesthouse"
          autoComplete="organization"
          aria-invalid={Boolean(errors.businessName)}
        />
        {errors.businessName && <span className="err">{errors.businessName}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@yourvenue.ge"
          autoComplete="email"
          inputMode="email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="city">City</label>
          <select id="city" name="city" defaultValue="" aria-invalid={Boolean(errors.city)}>
            <option value="" disabled>
              Select…
            </option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          {errors.city && <span className="err">{errors.city}</span>}
        </div>

        <div className="field">
          <label htmlFor="businessType">Venue type</label>
          <select
            id="businessType"
            name="businessType"
            defaultValue=""
            aria-invalid={Boolean(errors.businessType)}
          >
            <option value="" disabled>
              Select…
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.businessType && <span className="err">{errors.businessType}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="monthlyReviews">Reviews per month (optional)</label>
        <select id="monthlyReviews" name="monthlyReviews" defaultValue="">
          <option value="">Not sure</option>
          <option value="0-100">Under 100</option>
          <option value="100-500">100–500</option>
          <option value="500-2000">500–2,000</option>
          <option value="2000+">Over 2,000</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Request early access
      </button>
      <p className="wl-fineprint">Design preview — submissions aren’t saved.</p>
    </form>
  );
}
