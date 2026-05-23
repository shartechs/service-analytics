// Shared, framework-agnostic constants and types.
// Kept out of the "use server" module so they can be imported by client components
// (a "use server" file may only export async functions).

export const CITIES = [
  "Tbilisi",
  "Batumi",
  "Kutaisi",
  "Kazbegi",
  "Sighnaghi",
  "Telavi",
  "Bakuriani",
  "Other",
] as const;

export const BUSINESS_TYPES = [
  "Hotel",
  "Guesthouse",
  "Restaurant",
  "Café",
  "Wine bar",
  "Tour operator",
  "Other",
] as const;

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<
    Record<"businessName" | "email" | "city" | "businessType", string>
  >;
};
