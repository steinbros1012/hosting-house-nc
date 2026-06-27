import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service event planning, day-of coordination, event design, and custom floral arrangements for celebrations across Raleigh, North Carolina.",
  openGraph: {
    title: "Event Planning & Floral Design Services | The Hosting House NC",
    description: "From full-service event planning to custom floral arrangements — we handle every detail so you can enjoy your celebration.",
    images: [{ url: "/images/portfolio/IMG_6227.JPG", width: 1200, height: 630, alt: "The Hosting House NC event design and florals" }],
  },
};

const services = [
  {
    id: "planning",
    label: "The Full Celebration",
    tagline: "You want to be a guest at your own event.",
    description:
      "From vision board to final send-off, we plan, design, and execute every detail. In-house florals, vendor coordination, and full day-of management are all included so you can walk in and be completely present for the moment you've been looking forward to.",
    benefits: [
      "Personalized planning process tailored to your vision and budget",
      "In-house floral design, fully integrated into your overall event aesthetic",
      "Comprehensive vendor sourcing, coordination, and management",
      "Tablescape design and installation, including linens, china, place cards, and floral arrangements",
      "Custom signage and paper goods sourcing",
      "Detailed event timeline",
      "On-site coordination from setup through the final farewell",
    ],
    idealFor: [
      "Dinner parties",
      "Milestone birthdays",
      "Baby showers",
      "Luncheons",
      "Engagement parties",
      "Corporate events",
      "Anniversary celebrations",
    ],
  },
  {
    id: "design",
    label: "The Final Details",
    tagline: "You have most of the plans in place and need someone you trust to see them through.",
    description:
      "We step in as your day-of partner and manage your timeline, communicate with vendors and tie up loose ends. And if you need beautiful florals to complete the picture, we design and arrange those in-house too.",
    benefits: [
      "In-house floral design to pull your whole celebration together",
      "Day-of timeline management and vendor communication",
      "On-site coordination from setup through the final farewell",
      "Tablescape installation using your design plan, including linens, china, place cards, and florals",
    ],
    idealFor: [
      "Baptisms",
      "Cocktail parties",
      "Holiday gatherings",
      "Intimate dinner parties",
      "Birthday celebrations",
      "Engagement parties",
    ],
  },
  {
    id: "florals",
    label: "The Finishing Touch",
    tagline: "You need beautiful, intentional florals to tie it all together.",
    description:
      "Our florals are designed and arranged entirely in-house. Each is created with your palette, venue and vision in mind.",
    benefits: [
      "Bespoke floral arrangements designed and created in-house to accent your event",
      "Seasonal bloom sourcing",
      "Statement arrangements",
      "Centerpiece arrangements",
      "Bud vase arrangements",
      "Delivery and setup",
    ],
    idealFor: [
      "Baby showers",
      "Birthday celebrations",
      "Luncheons and dinner parties",
      "Corporate and brand events",
      "Custom gifting and arrangements",
      "Holiday tablescapes",
    ],
  },
];

export default function ServicesPage() {
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
            }}
          >
            Services
          </h1>
        </AnimateIn>
      </section>

      {/* INTRO */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          padding: "0 24px 80px",
          textAlign: "center",
        }}
      >
        <AnimateIn>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400,
                color: "#304254",
                marginBottom: "16px",
              }}
            >
              One Place. Every Detail. Every Celebration.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: "#cd8b91",
                marginBottom: "20px",
              }}
            >
              Dinner Parties &nbsp;&middot;&nbsp; Baptisms &nbsp;&middot;&nbsp; Luncheons &nbsp;&middot;&nbsp; Birthday Parties &nbsp;&middot;&nbsp; Baby Showers &nbsp;&middot;&nbsp; Cocktail Parties &nbsp;&middot;&nbsp; Engagement Parties
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "16px",
                lineHeight: 1.85,
                color: "#5a5a5a",
              }}
            >
              We handle every detail, from the first bloom to the final toast,
              so you can be present for the moments that matter most.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            backgroundColor: idx % 2 === 0 ? "#ffffff" : "#fdf5f6",
            padding: "80px 24px",
            borderTop: "1px solid #ecdcde",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <AnimateIn>
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
                {service.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(20px, 2.5vw, 26px)",
                  fontStyle: "italic",
                  color: "#304254",
                  marginBottom: "24px",
                  lineHeight: 1.4,
                }}
              >
                {service.tagline}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "#5a5a5a",
                  marginBottom: "36px",
                  maxWidth: "640px",
                }}
              >
                {service.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "40px",
                  alignItems: "start",
                }}
                className="service-detail-grid"
              >
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#304254",
                      marginBottom: "16px",
                    }}
                  >
                    What&apos;s Included
                  </p>
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        marginBottom: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          backgroundColor: "#cd8b91",
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: "8px",
                        }}
                      />
                      <p
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "#5a5a5a",
                        }}
                      >
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#304254",
                      marginBottom: "12px",
                    }}
                  >
                    Ideal For
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {service.idealFor.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "#cd8b91",
                          border: "1px solid #ecdcde",
                          backgroundColor: idx % 2 === 0 ? "#fdf5f6" : "#ffffff",
                          padding: "4px 12px",
                          borderRadius: "20px",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
                  marginTop: "36px",
                }}
              >
                Inquire About This Service
              </Link>
            </AnimateIn>
          </div>
        </section>
      ))}

      {/* WHAT TO EXPECT */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          padding: "100px 24px",
          textAlign: "center",
          borderTop: "1px solid #ecdcde",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <AnimateIn>
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
              The Process
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#304254",
                marginBottom: "16px",
              }}
            >
              What to Expect
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                color: "#5a5a5a",
                lineHeight: 1.8,
                maxWidth: "560px",
                margin: "0 auto 64px",
              }}
            >
              From your first message to the final farewell, here is how we work
              together to bring your celebration to life.
            </p>
          </AnimateIn>

          <div
            className="process-steps-grid"
            style={{
              display: "grid",
              gap: "40px",
              textAlign: "center",
            }}
          >
            {[
              { step: "01", title: "Consultation", body: "We start with a conversation to learn about your vision, your guests, and what matters most to you." },
              { step: "02", title: "Vision Board & Proposal", body: "We pull together a design direction and a detailed proposal so you can see the full picture before anything is confirmed." },
              { step: "03", title: "Design Review", body: "We refine every detail together until the plan feels exactly right." },
              { step: "04", title: "Contract & Deposit", body: "Once everything is approved, we lock it in and get to work." },
              { step: "05", title: "The Fun Begins", body: "We handle the details. You enjoy the celebration." },
            ].map((item, i) => (
              <AnimateIn key={item.step} delay={i * 100}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-ballet)",
                      fontSize: "40px",
                      color: "#b0a0a2",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    {item.step}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "#304254",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13px",
                      lineHeight: 1.75,
                      color: "#5a5a5a",
                    }}
                  >
                    {item.body}
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
          backgroundColor: "#304254",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <AnimateIn>
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
            Ready to Begin?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Tell Us About Your Event
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.75,
              marginBottom: "40px",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            Every celebration starts with a conversation. Fill out our inquiry
            form and we will be in touch within 48 hours.
          </p>
          <Link
            href="/inquiry"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#304254",
              backgroundColor: "#ffffff",
              padding: "16px 44px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Start Your Inquiry
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
