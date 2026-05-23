import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khma.ge"),
  title: "Khma — Hear every guest. See every pattern.",
  description:
    "Khma reads your guest reviews from Google, Booking.com, TripAdvisor and 2GIS in Georgian, English and Russian — then shows you what to fix this week. Built for hotels, restaurants and guesthouses across Georgia.",
  keywords: [
    "guest feedback analytics",
    "review analysis Georgia",
    "hospitality analytics Tbilisi",
    "hotel reviews dashboard",
    "restaurant feedback AI",
  ],
  openGraph: {
    title: "Khma — Hear every guest. See every pattern.",
    description:
      "AI feedback analytics for Georgian hospitality. Turn reviews from Google, Booking.com, TripAdvisor and 2GIS into a weekly action list.",
    type: "website",
    locale: "en_GE",
  },
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
