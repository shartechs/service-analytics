"use server";

import { pool } from "@/lib/db";
import { CITIES, BUSINESS_TYPES, type WaitlistState } from "@/lib/constants";
import { dict, isLang } from "@/lib/i18n";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const langRaw = String(formData.get("lang") ?? "en");
  const lang = isLang(langRaw) ? langRaw : "en";
  const m = dict[lang].form;

  const businessName = String(formData.get("businessName") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const city = String(formData.get("city") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "").trim();
  const monthlyReviews = String(formData.get("monthlyReviews") ?? "").trim() || null;

  const fieldErrors: NonNullable<WaitlistState["fieldErrors"]> = {};
  if (businessName.length < 2) fieldErrors.businessName = m.msgNameRequired;
  if (!EMAIL_RE.test(email)) fieldErrors.email = m.msgEmailInvalid;
  if (!CITIES.includes(city as (typeof CITIES)[number])) fieldErrors.city = m.msgCityRequired;
  if (!BUSINESS_TYPES.includes(businessType as (typeof BUSINESS_TYPES)[number]))
    fieldErrors.businessType = m.msgTypeRequired;

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: m.msgGenericError, fieldErrors };
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
    return { status: "error", message: m.msgDbError };
  }

  return {
    status: "success",
    message: m.msgSuccess.replace("{name}", businessName).replace("{email}", email),
  };
}
