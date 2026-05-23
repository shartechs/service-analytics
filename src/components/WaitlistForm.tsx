"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";
import { CITIES, BUSINESS_TYPES, type WaitlistState } from "@/lib/constants";
import { dict, cityLabels, businessTypeLabels, type Lang } from "@/lib/i18n";

const initialState: WaitlistState = { status: "idle", message: "" };

function SubmitButton({ lang }: { lang: Lang }) {
  const { pending } = useFormStatus();
  const f = dict[lang].form;
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? f.pending : f.submit}
    </button>
  );
}

export default function WaitlistForm({ lang }: { lang: Lang }) {
  const [state, formAction] = useActionState(joinWaitlist, initialState);
  const errors = state.fieldErrors ?? {};
  const f = dict[lang].form;

  if (state.status === "success") {
    return (
      <div className="wl-form" role="status" aria-live="polite">
        <div className="wl-success">
          <div className="check" aria-hidden="true">
            ✓
          </div>
          <h3>{f.successTitle}</h3>
          <p>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="wl-form" action={formAction} noValidate aria-describedby="wl-msg">
      <input type="hidden" name="lang" value={lang} />

      <div className="field">
        <label htmlFor="businessName">{f.venueName}</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          placeholder={f.venueNamePh}
          autoComplete="organization"
          aria-invalid={Boolean(errors.businessName)}
          required
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
          required
        />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="city">{f.city}</label>
          <select id="city" name="city" defaultValue="" aria-invalid={Boolean(errors.city)} required>
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
            required
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

      {state.status === "error" && state.message && (
        <p id="wl-msg" className="wl-status error" role="alert">
          {state.message}
        </p>
      )}

      <SubmitButton lang={lang} />
      <p className="wl-fineprint">{f.fineprint}</p>
    </form>
  );
}
