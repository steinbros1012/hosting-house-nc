import type { Metadata } from "next";
import { Ballet, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const ballet = Ballet({
  variable: "--font-ballet",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Hosting House NC — Event Planning & Floral Design",
    template: "%s | The Hosting House NC",
  },
  description:
    "The Hosting House NC is a boutique event planning and floral design studio serving North Carolina. We create beautifully crafted weddings, celebrations, and gatherings with a signature Southern touch.",
  keywords: [
    "event planning North Carolina",
    "floral design NC",
    "wedding planner Raleigh",
    "event design NC",
    "floral arrangements",
    "wedding florals",
    "event coordinator",
    "Hosting House NC",
  ],
  authors: [{ name: "Meredith Parker & Susanna Thomas" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hostinghousenc.com",
    siteName: "The Hosting House NC",
    title: "The Hosting House NC — Event Planning & Floral Design",
    description:
      "Boutique event planning and floral design studio in North Carolina. Creating beautiful, thoughtfully crafted celebrations.",
    images: [
      {
        url: "/images/portfolio/IMG_6227.JPG",
        width: 1200,
        height: 630,
        alt: "The Hosting House NC — Elegant Event Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hosting House NC — Event Planning & Floral Design",
    description:
      "Boutique event planning and floral design studio in North Carolina.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hostinghousenc.com",
  name: "The Hosting House NC",
  description:
    "Boutique event planning and floral design studio serving North Carolina. We create beautifully crafted weddings, celebrations, and gatherings with a signature Southern touch.",
  url: "https://www.hostinghousenc.com",
  telephone: "",
  email: "hello@hostinghousenc.com",
  address: {
    "@type": "PostalAddress",
    addressRegion: "NC",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.7796,
    longitude: -78.6382,
  },
  areaServed: {
    "@type": "State",
    name: "North Carolina",
  },
  founder: [
    { "@type": "Person", name: "Meredith Parker" },
    { "@type": "Person", name: "Susanna Thomas" },
  ],
  sameAs: ["https://www.instagram.com/hostinghousenc"],
  serviceType: [
    "Wedding Planning",
    "Event Planning",
    "Floral Design",
    "Floral Arrangements",
    "Bridal Shower Planning",
    "Baby Shower Planning",
    "Corporate Event Planning",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ballet.variable} ${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
