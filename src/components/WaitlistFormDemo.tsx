"use client";

// Static-export variant of the waitlist form (GitHub Pages has no server).
// Validates client-side and shows the success state, but does not persist —
// the real Server Action version (WaitlistForm.tsx) runs when the app is
// served by Next.js with Postgres. Selected at build time in Landing.tsx.

import { useState } from "react";
import { CITIES, BUSINESS_TYPES } from "@/lib/constants";
import { dict, cityLabels, businessTypeLabels, type Lang } from "@/lib/i18n";

type Errors = Partial<Record<"businessName" | "email" | "city" | "businessType", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistFormDemo({ lang }: { lang: Lang }) {
  const f = dict[lang].form;
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
    if (businessName.length < 2) next.businessName = f.msgNameRequired;
    if (!EMAIL_RE.test(email)) next.email = f.msgEmailInvalid;
    if (!CITIES.includes(city as (typeof CITIES)[number])) next.city = f.msgCityRequired;
    if (!BUSINESS_TYPES.includes(businessType as (typeof BUSINESS_TYPES)[number]))
      next.businessType = f.msgTypeRequired;

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
          <h3>{f.successTitle}</h3>
          <p>{f.demoSuccess.replace("{name}", done.name).replace("{email}", done.email)}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="wl-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="businessName">{f.venueName}</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          placeholder={f.venueNamePh}
          autoComplete="organization"
          aria-invalid={Boolean(errors.businessName)}
        />
        {errors.businessName && <span className="err">{errors.businessName}</span>}
      </div>

      <div className="field">
        <label htmlFor="email">{f.email}</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={f.emailPh}
          autoComplete="email"
          inputMode="email"
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="city">{f.city}</label>
          <select id="city" name="city" defaultValue="" aria-invalid={Boolean(errors.city)}>
            <option value="" disabled>
              {f.selectPh}
            </option>
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {cityLabels[c][lang]}
              </option>
            ))}
          </select>
          {errors.city && <span className="err">{errors.city}</span>}
        </div>

        <div className="field">
          <label htmlFor="businessType">{f.venueType}</label>
          <select
            id="businessType"
            name="businessType"
            defaultValue=""
            aria-invalid={Boolean(errors.businessType)}
          >
            <option value="" disabled>
              {f.selectPh}
            </option>
            {BUSINESS_TYPES.map((tp) => (
              <option key={tp} value={tp}>
                {businessTypeLabels[tp][lang]}
              </option>
            ))}
          </select>
          {errors.businessType && <span className="err">{errors.businessType}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="monthlyReviews">{f.monthlyReviews}</label>
        <select id="monthlyReviews" name="monthlyReviews" defaultValue="">
          {f.mrOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        {f.submit}
      </button>
      <p className="wl-fineprint">{f.fineprintDemo}</p>
    </form>
  );
}
