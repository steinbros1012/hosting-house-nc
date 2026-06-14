import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service event planning, day-of coordination, event design, and custom floral arrangements for weddings, showers, and celebrations across North Carolina.",
  openGraph: {
    title: "Event Planning & Floral Design Services | The Hosting House NC",
    description: "From full-service wedding planning to custom floral arrangements — we handle every detail so you can enjoy your celebration.",
    images: [{ url: "/images/portfolio/IMG_6227.JPG", width: 1200, height: 630, alt: "The Hosting House NC event design and florals" }],
  },
};

const services = [
  {
    id: "planning",
    label: "Event Planning",
    title: "Full-Service Event Planning",
    tagline: "From vision to reality, every detail handled with care.",
    description: [
      "Planning an event you will actually enjoy attending starts with having the right team behind you. We take on the logistics, vendor coordination, and timeline management so you can focus on being present with your guests.",
      "Whether you are planning an intimate dinner for twenty or a wedding for two hundred, we bring the same level of attention and care to every event we take on.",
    ],
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    imageAlt: "Elegantly planned event reception",
    benefits: [
      "Personalized planning process tailored to your vision and budget",
      "Comprehensive vendor sourcing, vetting, and management",
      "Detailed event timeline and day-of execution",
      "On-site coordination from setup through final farewell",
      "A calm, organized presence on the day you need it most",
    ],
    idealFor: [
      "Weddings",
      "Rehearsal dinners",
      "Milestone birthdays",
      "Baby and bridal showers",
      "Corporate events",
      "Anniversary celebrations",
    ],
    flip: false,
  },
  {
    id: "design",
    label: "Event Design",
    title: "Event Design & Styling",
    tagline: "Your aesthetic vision, brought to life in every detail.",
    description: [
      "A beautiful event is more than pretty decor. It is a cohesive experience that tells a story from the moment guests arrive. We develop a complete design vision for your celebration and bring it to life.",
      "From color palettes and tablescapes to lighting design and custom installations, we create environments that feel elevated and unmistakably yours.",
    ],
    image:
      "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
    imageAlt: "Beautifully styled event tablescape",
    benefits: [
      "Custom mood board and design concept development",
      "Tablescape design including linens, china, and centerpiece direction",
      "Lighting consultation and rental coordination",
      "Custom signage and paper goods sourcing",
      "Full decor styling and day-of installation",
    ],
    idealFor: [
      "Weddings and receptions",
      "Styled shoots",
      "Brand activations",
      "Holiday parties",
      "Intimate dinner parties",
      "Photo and content shoots",
    ],
    flip: true,
  },
  {
    id: "florals",
    label: "Floral Design",
    title: "Custom Floral Design",
    tagline: "Beautiful arrangements that set the tone for your celebration.",
    description: [
      "Flowers have a way of saying everything words cannot. We design custom floral arrangements that feel alive and seasonal, using blooms chosen to complement your color palette and event aesthetic.",
      "From bridal bouquets and ceremony arches to statement centerpieces and floral installations, every arrangement we create is designed to complement your palette and make the space feel alive.",
    ],
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
    imageAlt: "Lush pink floral centerpiece arrangement",
    benefits: [
      "Custom seasonal bloom sourcing based on your palette",
      "Bridal party florals: bouquets, boutonnieres, and hair flowers",
      "Ceremony florals: arches, altar arrangements, and aisle decor",
      "Reception centerpieces and statement installations",
      "Delivery, setup, and breakdown included",
    ],
    idealFor: [
      "Weddings and ceremonies",
      "Bridal and baby showers",
      "Birthday celebrations",
      "Corporate and brand events",
      "Custom gifting and arrangements",
      "Holiday tablescapes",
    ],
    flip: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "380px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          paddingBottom: "72px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=2000&q=85"
          alt="Beautiful floral arrangements by The Hosting House NC"
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
              "linear-gradient(to bottom, rgba(48,66,84,0.15) 0%, rgba(48,66,84,0.6) 100%)",
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
            What We Offer
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
            Our Services
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          padding: "80px 24px",
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
                marginBottom: "20px",
              }}
            >
              Everything You Need in One Place
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "16px",
                lineHeight: 1.85,
                color: "#5a5a5a",
              }}
            >
              From carefully curated floral arrangements to full-service event
              planning, we are here to help you prepare for life&apos;s special
              occasions. Every service is offered with the same care, attention,
              and Southern warmth.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* SERVICE SECTIONS */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="section-lg"
          style={{ backgroundColor: service.flip ? "#fdf5f6" : "#ffffff" }}
        >
          <div
            className={`container service-row${service.flip ? " flipped" : ""}`}
          >
            <AnimateIn
              direction="in"
              style={{ direction: "ltr" }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4/5",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimateIn>

            <AnimateIn delay={150} style={{ direction: "ltr" }}>
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
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(30px, 4vw, 44px)",
                  fontWeight: 400,
                  color: "#304254",
                  lineHeight: 1.2,
                  marginBottom: "12px",
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "19px",
                  fontStyle: "italic",
                  color: "#cd8b91",
                  marginBottom: "28px",
                }}
              >
                {service.tagline}
              </p>

              {service.description.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    lineHeight: 1.85,
                    color: "#5a5a5a",
                    marginBottom: "16px",
                  }}
                >
                  {para}
                </p>
              ))}

              <div style={{ marginTop: "32px" }}>
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

              <div style={{ marginTop: "28px" }}>
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
                        backgroundColor: "#fdf5f6",
                        padding: "4px 12px",
                        borderRadius: "20px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
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
                  marginTop: "32px",
                }}
              >
                Inquire About This Service
              </Link>
            </AnimateIn>
          </div>
        </section>
      ))}

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
