"use server";

import { pool } from "@/lib/db";
import { CITIES, BUSINESS_TYPES, type WaitlistState } from "@/lib/constants";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const businessName = String(formData.get("businessName") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const city = String(formData.get("city") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "").trim();
  const monthlyReviews = String(formData.get("monthlyReviews") ?? "").trim() || null;

  const fieldErrors: NonNullable<WaitlistState["fieldErrors"]> = {};
  if (businessName.length < 2) fieldErrors.businessName = "Tell us the venue’s name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "That email address looks incomplete.";
  if (!CITIES.includes(city as (typeof CITIES)[number]))
    fieldErrors.city = "Pick the city you operate in.";
  if (!BUSINESS_TYPES.includes(businessType as (typeof BUSINESS_TYPES)[number]))
    fieldErrors.businessType = "Pick the kind of venue you run.";

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "A couple of fields need a second look.",
      fieldErrors,
    };
  }

  try {
    await pool.query(
      `INSERT INTO waitlist (business_name, email, city, business_type, monthly_reviews)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (email) DO UPDATE
         SET business_name = EXCLUDED.business_name,
             city = EXCLUDED.city,
             business_type = EXCLUDED.business_type,
             monthly_reviews = EXCLUDED.monthly_reviews`,
      [businessName, email, city, businessType, monthlyReviews]
    );
  } catch (err) {
    console.error("waitlist insert failed:", err);
    return {
      status: "error",
      message:
        "We couldn’t reach the database. Make sure Postgres is running (`npm run db:up`), then try again.",
    };
  }

  return {
    status: "success",
    message: `You’re on the list, ${businessName}. We’ll email ${email} when your city opens.`,
  };
}
