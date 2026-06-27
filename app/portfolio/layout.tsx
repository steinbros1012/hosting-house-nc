import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our portfolio of events, florals, tablescapes, and celebrations designed by The Hosting House NC. Real work, real celebrations across North Carolina.",
  openGraph: {
    title: "Portfolio | The Hosting House NC",
    description: "A glimpse at the parties, tablescapes, and floral arrangements we have had the honor of bringing to life.",
    images: [{ url: "/images/portfolio/DSC00420.JPG", width: 1200, height: 630, alt: "The Hosting House NC portfolio — floral and event design" }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
