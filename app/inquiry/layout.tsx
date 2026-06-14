import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquire",
  description:
    "Ready to start planning? Submit an inquiry to The Hosting House NC for event planning, floral design, or day-of coordination across North Carolina. We respond within 48 hours.",
  openGraph: {
    title: "Inquire | The Hosting House NC",
    description: "Tell us about your celebration. We offer event planning, floral design, and coordination services throughout North Carolina.",
    images: [{ url: "/images/portfolio/IMG_3728.JPG", width: 1200, height: 630, alt: "The Hosting House NC floral arrangement" }],
  },
};

export default function InquiryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
