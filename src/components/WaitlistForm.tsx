"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { joinWaitlist } from "@/app/actions";
import { CITIES, BUSINESS_TYPES, type WaitlistState } from "@/lib/constants";

const initialState: WaitlistState = { status: "idle", message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? "Adding you…" : "Request early access"}
    </button>
  );
}

export default function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, initialState);
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="wl-form" role="status" aria-live="polite">
        <div className="wl-success">
          <div className="check" aria-hidden="true">
            ✓
          </div>
          <h3>You’re on the list</h3>
          <p>{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="wl-form" action={formAction} noValidate aria-describedby="wl-msg">
      <div className="field">
        <label htmlFor="businessName">Venue name</label>
        <input
          id="businessName"
          name="businessName"
          type="text"
          placeholder="e.g. Old Town Guesthouse"
          autoComplete="organization"
          aria-invalid={Boolean(errors.businessName)}
          required
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
          required
        />
        {errors.email && <span className="err">{errors.email}</span>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="city">City</label>
          <select id="city" name="city" defaultValue="" aria-invalid={Boolean(errors.city)} required>
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
            required
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

      {state.status === "error" && state.message && (
        <p id="wl-msg" className="wl-status error" role="alert">
          {state.message}
        </p>
      )}

      <SubmitButton />
      <p className="wl-fineprint">
        Free during the pilot. No card required. We email only about your onboarding.
      </p>
    </form>
  );
}
