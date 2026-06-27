import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Meredith and Susanna, the duo behind The Hosting House NC. Boutique event planners and floral designers based in Raleigh, North Carolina with a passion for beautiful, heartfelt gatherings.",
  openGraph: {
    title: "About The Hosting House NC",
    description: "Meet Meredith and Susanna — Raleigh, North Carolina event planners and floral designers who bring warmth and beauty to every celebration.",
    images: [{ url: "/images/founders.jpg", width: 1200, height: 630, alt: "Meredith and Susanna, founders of The Hosting House NC" }],
  },
};

const values = [
  {
    title: "Trust",
    description:
      "We communicate clearly and consistently so you always know where things stand.",
  },
  {
    title: "Warmth",
    description:
      "Every celebration should feel like a genuine welcome — inviting, beautiful and effortless.",
  },
  {
    title: "Grace",
    description:
      "We navigate the unexpected with poise and calm.",
  },
  {
    title: "Attention to Detail",
    description:
      "Nothing is an afterthought. Each element is considered and purposeful.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero-blush">
        <AnimateIn>
          <h1
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(56px, 10vw, 100px)",
              fontWeight: 400,
              color: "#cd8b91",
              lineHeight: 1.1,
              marginBottom: "0",
            }}
          >
            Meet the Founders
          </h1>
        </AnimateIn>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="section-lg" style={{ backgroundColor: "#ffffff" }}>
        <div className="container split-grid">
          <AnimateIn direction="in">
            <div style={{ position: "relative" }}>
              <div
                style={{
                  aspectRatio: "4/5",
                  position: "relative",
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
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  width: "160px",
                  height: "160px",
                  backgroundColor: "#ffe5e8",
                  borderRadius: "4px",
                  zIndex: -1,
                }}
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
              The Founders
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#304254",
                lineHeight: 1.2,
                marginBottom: "32px",
              }}
            >
              Meredith Parker &amp; Susanna Thomas
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                lineHeight: 1.9,
                color: "#5a5a5a",
                marginBottom: "20px",
              }}
            >
              The Hosting House was built on a simple belief: that life&apos;s
              special moments deserve to be celebrated beautifully, and that
              gathering the people you love is one of the most meaningful things
              you can do.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                lineHeight: 1.9,
                color: "#5a5a5a",
                marginBottom: "20px",
              }}
            >
              Meredith Parker grew up in Nashville, Tennessee, and Susanna
              Thomas was born in Macon, Georgia and raised right here in Raleigh.
              Long before they became business partners, Susanna and Meredith
              were friends sitting at each other&apos;s tables, celebrating each
              other&apos;s milestones, and quietly noticing that they approached
              hospitality the same way.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                lineHeight: 1.9,
                color: "#5a5a5a",
                marginBottom: "36px",
              }}
            >
              That shared love of bringing people together is what The Hosting
              House is built on. Their goal is to greet every client the way
              they would greet a friend at their front door: with a drink in
              hand, a listening ear, and a plan to make their celebration
              everything they imagined.
            </p>
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
                padding: "14px 32px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Work With Us
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        style={{
          backgroundColor: "#304254",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <AnimateIn>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
                marginBottom: "24px",
              }}
            >
              Our Mission
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: 1.55,
                marginBottom: "32px",
              }}
            >
              &ldquo;To greet every client the way we would greet a friend at
              our front door: with a drink in hand, a listening ear, and a plan
              to make their celebration everything they imagined.&rdquo;
            </h2>
            <div
              style={{
                width: "48px",
                height: "1px",
                backgroundColor: "#cd8b91",
                margin: "0 auto",
              }}
            />
          </div>
        </AnimateIn>
      </section>

      {/* VALUES SECTION */}
      <section className="section-lg" style={{ backgroundColor: "#fdf5f6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              How We Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 400,
                color: "#304254",
              }}
            >
              What We Stand For
            </h2>
          </AnimateIn>

          <div className="values-grid">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 100}>
                <div
                  style={{
                    padding: "clamp(20px, 4vw, 40px) clamp(16px, 3vw, 32px)",
                    backgroundColor: "#ffffff",
                    borderRadius: "4px",
                    border: "1px solid #ecdcde",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "2px",
                      backgroundColor: "#cd8b91",
                      marginBottom: "24px",
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "26px",
                      fontWeight: 500,
                      color: "#304254",
                      marginBottom: "16px",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      lineHeight: 1.8,
                      color: "#5a5a5a",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#ffe5e8",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <AnimateIn>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              color: "#304254",
              marginBottom: "20px",
            }}
          >
            Let&apos;s Plan Something Beautiful Together
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#5a5a5a",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "440px",
              margin: "0 auto 36px",
            }}
          >
            We take on a limited number of events each season to ensure every
            client gets our full attention and care.
          </p>
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
              padding: "16px 44px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Inquire About Your Event
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
