import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ServiceCard from "@/components/ServiceCard";
import InstagramFeed from "@/components/InstagramFeed";

export const metadata: Metadata = {
  title: "The Hosting House NC — Boutique Event Planning & Floral Design",
  description:
    "Raleigh, North Carolina's boutique event planning and floral design studio. We create beautifully crafted celebrations and gatherings with a signature Southern touch.",
  openGraph: {
    title: "The Hosting House NC — Event Planning & Floral Design",
    description: "Boutique event planning and floral design in Raleigh, NC. Creating gracious gatherings and bespoke blooms for milestone moments.",
    images: [{ url: "/images/portfolio/IMG_3728.JPG", width: 1200, height: 630, alt: "The Hosting House NC — Event Design and Florals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hosting House NC — Event Planning & Floral Design",
    description: "Boutique event planning and floral design in Raleigh, NC.",
  },
};

const services = [
  {
    title: "The Full Celebration",
    description:
      "You want to be a guest at your own event.",
    icon: "✦",
    href: "/services#planning",
  },
  {
    title: "The Final Details",
    description:
      "You have most of the plans in place and need someone you trust to see them through.",
    icon: "◇",
    href: "/services#design",
  },
  {
    title: "The Finishing Touch",
    description:
      "You need beautiful, intentional florals to tie it all together.",
    icon: "❀",
    href: "/services#florals",
  },
];

const portfolioImages = [
  {
    src: "/images/portfolio/IMG_6227.JPG",
    alt: "Spring tablescape with pink roses and gingham",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00420.JPG",
    alt: "Colorful outdoor floral centerpiece",
    tall: false,
  },
  {
    src: "/images/portfolio/IMG_7537.JPG",
    alt: "Blue and white centerpiece with lemons and tapers",
    tall: false,
  },
  {
    src: "/images/portfolio/IMG_3728.JPG",
    alt: "Silver urn with roses and hydrangeas",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00970.JPG",
    alt: "Bold summer floral centerpiece",
    tall: false,
  },
  {
    src: "/images/portfolio/IMG_2371.JPG",
    alt: "Classic green and white place setting",
    tall: false,
  },
];



export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundColor: "#fdf5f6",
        }}
      >
        <Image
          src="/images/portfolio/IMG_3728.JPG"
          alt="Silver urn with roses and florals by The Hosting House NC"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.78) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "clamp(100px, 15vw, 140px) 24px clamp(60px, 8vw, 100px)",
            maxWidth: "800px",
          }}
        >
          <h1
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(52px, 9vw, 110px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "20px",
              textShadow: "0 2px 20px rgba(0,0,0,0.25)",
            }}
          >
            The Hosting House
          </h1>

          <p
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#e8a8ae",
              marginBottom: "20px",
            }}
          >
            Raleigh, North Carolina
          </p>

          <p
            className="animate-fade-up delay-150"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(18px, 2.4vw, 24px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto 44px",
            }}
          >
            Creating gracious gatherings and bespoke blooms for milestone moments.
          </p>

          <div className="animate-fade-up delay-200 hero-ctas">
            <Link
              href="/inquiry"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#cd8b91",
                padding: "15px 40px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Inquire Now
            </Link>
            <Link
              href="/portfolio"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.6)",
                padding: "15px 40px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in delay-500"
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Scroll
          </p>
          <div
            style={{
              width: "1px",
              height: "40px",
              backgroundColor: "rgba(255,255,255,0.35)",
            }}
          />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-lg" style={{ backgroundColor: "#fdf5f6" }}>
        <div className="container">
          <AnimateIn style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
                marginBottom: "16px",
              }}
            >
              A full suite of event planning and floral design services
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 400,
                color: "#304254",
                lineHeight: 1.15,
              }}
            >
              What We Bring to the Table
            </h2>
          </AnimateIn>

          <div className="services-grid">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 120}>
                <ServiceCard service={service} />
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-lg" style={{ backgroundColor: "#ffffff" }}>
        <div className="container split-grid">
          <AnimateIn direction="in">
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/founders.jpg"
                alt="Meredith Parker and Susanna Thomas, founders of The Hosting House NC"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
                marginBottom: "20px",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#304254",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Born from a Shared Love of Southern Hospitality
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#5a5a5a",
                marginBottom: "36px",
              }}
            >
              The Hosting House was founded by two friends, Meredith Parker and
              Susanna Thomas, who share a love of Southern hospitality,
              hostessing and bringing people together. They believe that the
              best celebrations aren&apos;t just beautiful; they&apos;re the
              ones people carry with them long after the last guest leaves.
            </p>
            <Link
              href="/about"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#304254",
                textDecoration: "none",
                borderBottom: "1px solid #304254",
                paddingBottom: "3px",
              }}
            >
              Meet Meredith &amp; Susanna
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-lg" style={{ backgroundColor: "#fdf5f6" }}>
        <div className="container">
          <AnimateIn style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
                marginBottom: "16px",
              }}
            >
              Recent Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 400,
                color: "#304254",
              }}
            >
              From Our Portfolio
            </h2>
          </AnimateIn>

          {/* Portfolio Grid */}
          <div className="portfolio-preview-grid">
            {portfolioImages.map((img, i) => (
              <AnimateIn
                key={img.src}
                delay={i * 80}
                style={{
                  gridRow: img.tall ? "span 2" : "span 1",
                  borderRadius: "3px",
                }}
                className="img-zoom"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
              </AnimateIn>
            ))}
          </div>

          <AnimateIn style={{ textAlign: "center", marginTop: "48px" }}>
            <Link
              href="/portfolio"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#304254",
                border: "1px solid #304254",
                padding: "14px 36px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              View Full Portfolio
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* LIVE INSTAGRAM FEED */}
      <section className="section-lg" style={{ backgroundColor: "#fdf5f6" }}>
        <div className="container">
          <AnimateIn style={{ textAlign: "center", marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
                marginBottom: "16px",
              }}
            >
              Follow Our Journey
            </p>
            <h2
              style={{
                fontFamily: "var(--font-ballet)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 400,
                color: "#304254",
                marginBottom: "12px",
              }}
            >
              @hostinghousenc
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                color: "#5a5a5a",
                lineHeight: 1.7,
                maxWidth: "420px",
                margin: "0 auto",
              }}
            >
              Behind the scenes, fresh arrangements, and real moments from our studio.
            </p>
          </AnimateIn>

          {/* Live feed — auto-updates when INSTAGRAM_ACCESS_TOKEN is set */}
          <InstagramFeed limit={6} />

          <AnimateIn style={{ textAlign: "center" }}>
            <a
              href="https://www.instagram.com/hostinghousenc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#cd8b91",
                padding: "14px 40px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              Follow Us on Instagram
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="section-lg"
        style={{ backgroundColor: "#cd8b91", textAlign: "center" }}
      >
        <AnimateIn>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "20px",
            }}
          >
            Let&apos;s Get Started
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            Ready to Start Planning Your
            <br />
            <em>Perfect Celebration?</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            We would love to hear about your event. Reach out and let&apos;s begin
            crafting something beautiful together.
          </p>
          <Link
            href="/inquiry"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#cd8b91",
              backgroundColor: "#ffffff",
              padding: "16px 44px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Inquire Now
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}

