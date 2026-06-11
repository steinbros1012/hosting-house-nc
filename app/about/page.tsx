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
      {/* PAGE HERO */}
      <section
        style={{
          position: "relative",
          height: "55vh",
          minHeight: "420px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          paddingBottom: "80px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=85"
          alt="Elegantly styled event table"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(48,66,84,0.2) 0%, rgba(48,66,84,0.65) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e8a8ae",
              marginBottom: "16px",
            }}
          >
            Our Story
          </p>
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            About The Hosting House
          </h1>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Meredith Parker and Susanna Thomas, founders of The Hosting House NC"
                  fill
                  style={{ objectFit: "cover" }}
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
              The Hosting House was born from a friendship, a shared obsession
              with Southern hospitality, and a belief that every celebration
              deserves to be beautiful.
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
              Meredith grew up in Nashville, Tennessee, where she developed a
              deep appreciation for gracious hosting and the way a well-designed
              space can make people feel truly at home. Susanna was raised in
              Raleigh, North Carolina, having spent her early years in Macon,
              Georgia, where the art of gathering was woven into everyday life.
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
              When they found each other, they found a partner who shared the
              same vision: a studio that could help anyone, for any occasion,
              host with beauty, warmth, and genuine intention.
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
      <section style={{ backgroundColor: "#fdf5f6", padding: "100px 24px" }}>
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px",
            }}
          >
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
      <section style={{ backgroundColor: "#ffffff", padding: "100px 24px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {[
                "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80",
                "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&q=80",
                "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
                "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
              ].map((src, i) => (
                <div
                  key={src}
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
