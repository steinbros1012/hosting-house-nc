import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Meredith Parker and Susanna Thomas, the founders behind The Hosting House NC. Two Southern women with a passion for beautiful gatherings and heartfelt hospitality.",
};

const values = [
  {
    title: "Intentionality",
    description:
      "Every decision we make — from the bloom selection to the table linen — is purposeful. We never settle for good enough when something can be genuinely beautiful.",
  },
  {
    title: "Warmth",
    description:
      "We believe the best events feel like a welcome embrace. Our work is rooted in genuine care for our clients and their guests.",
  },
  {
    title: "Artistry",
    description:
      "We approach every celebration as a creative project. The details matter, the aesthetics matter, and so does the feeling a space creates when guests walk in.",
  },
  {
    title: "Trust",
    description:
      "You are sharing one of life's most meaningful moments with us. We hold that responsibility with gratitude and take it seriously at every step.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO — blush background with logo graphic, matching brand style */}
      <section className="about-hero-blush">
        <AnimateIn>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px",
            }}
          >
            <Image
              src="/logo-blush.png"
              width={320}
              height={240}
              alt="The Hosting House NC"
              priority
              style={{ maxWidth: "min(320px, 72vw)", height: "auto" }}
            />
          </div>
          <h1
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(44px, 7vw, 76px)",
              fontWeight: 400,
              color: "#cd8b91",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            Meet the Team
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "18px",
              fontStyle: "italic",
              color: "#b07a80",
              fontWeight: 300,
            }}
          >
            The faces behind every beautiful celebration
          </p>
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
              The Hosting House is the brainchild of Meredith Parker and Susanna
              Thomas. Both of their roots are firmly planted in the South,
              Meredith hailing originally from Nashville, TN and Susanna born in
              Macon, GA and raised right here in Raleigh.
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
              Through their friendship, they realized they shared a true love of
              Southern hospitality and hosting. Together, they find joy in
              creating beautiful, approachable, polished gatherings to celebrate
              every milestone in life.
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
              From baptisms and birthdays to corporate events and cocktail
              parties, The Hosting House is here to greet you, offer you a drink,
              and invite you in as we thoughtfully plan your next soiree.
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
              &ldquo;To greet every client the way we would a dear friend at our
              front door: with warmth, a drink in hand, and a space that feels
              made entirely for them.&rdquo;
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
                    padding: "40px 32px",
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

      {/* WHY US SECTION */}
      <section className="section-lg" style={{ backgroundColor: "#ffffff" }}>
        <div className="container split-grid">
          <AnimateIn delay={100}>
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
              Why Choose Us
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
              A Studio Built Around
              <em style={{ display: "block" }}>You and Your Vision</em>
            </h2>

            {[
              "Full-service planning, design, and florals under one roof",
              "Personalized experience for every client, every time",
              "Deep roots in North Carolina with a Southern sensibility",
              "Transparent, collaborative process from first inquiry to final send-off",
              "A genuine investment in making your celebration unforgettable",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    backgroundColor: "#cd8b91",
                    borderRadius: "50%",
                    flexShrink: 0,
                    marginTop: "8px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#5a5a5a",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}

            <Link
              href="/services"
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
                display: "inline-block",
                marginTop: "12px",
              }}
            >
              Explore Our Services
            </Link>
          </AnimateIn>

          <AnimateIn direction="in">
            <div className="why-grid">
              {[
                "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80",
                "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&q=80",
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
                "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
              ].map((src, i) => (
                <div
                  key={src}
                  className={i === 1 || i === 3 ? "stagger-offset" : ""}
                  style={{
                    aspectRatio: "1/1",
                    position: "relative",
                    borderRadius: "4px",
                    overflow: "hidden",
                    marginTop: i === 1 || i === 3 ? "20px" : "0",
                  }}
                >
                  <Image
                    src={src}
                    alt="Portfolio work by The Hosting House NC"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </AnimateIn>
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
