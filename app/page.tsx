import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "The Hosting House NC — Boutique Event Planning & Floral Design",
  description:
    "North Carolina's boutique event planning and floral design studio. We create beautifully crafted weddings, celebrations, and gatherings with a signature Southern touch.",
};

const services = [
  {
    title: "Event Planning",
    description:
      "From intimate gatherings to grand celebrations, we handle every detail so you can be present in the moments that matter most.",
    icon: "✦",
    href: "/services#planning",
  },
  {
    title: "Event Design",
    description:
      "We translate your vision into a cohesive aesthetic experience — from tablescapes and lighting to custom decor that tells your story.",
    icon: "◇",
    href: "/services#design",
  },
  {
    title: "Floral Design",
    description:
      "Lush, intentional floral arrangements that set the tone for your celebration — centerpieces, installations, bridal florals, and more.",
    icon: "❀",
    href: "/services#florals",
  },
];

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    alt: "Elegant floral centerpiece at a reception",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Wedding bouquet with garden roses",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    alt: "Styled event table with floral accents",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    alt: "Romantic event decor with candles",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80",
    alt: "Pink floral arrangement close-up",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Bridal bouquet with soft pastel blooms",
    tall: false,
  },
];

const testimonials = [
  {
    quote:
      "Meredith and Susanna turned our wedding vision into something even more beautiful than we imagined. Every detail was perfect, and we were completely at ease knowing they had it all handled.",
    name: "Sarah & James",
    event: "Wedding, Raleigh NC",
  },
  {
    quote:
      "The florals for our baby shower were absolutely stunning. So many guests asked who designed them. I cannot recommend The Hosting House enough.",
    name: "Emily R.",
    event: "Baby Shower, Durham NC",
  },
  {
    quote:
      "From our first inquiry call to the final send-off, working with The Hosting House felt like collaborating with close friends who just happened to have incredible taste.",
    name: "The Morrison Family",
    event: "Anniversary Celebration",
  },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&q=80",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
  "https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=400&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2000&q=85"
          alt="Beautifully designed event with lush florals"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(30,20,20,0.3) 0%, rgba(30,20,20,0.5) 50%, rgba(30,20,20,0.7) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: "800px",
          }}
        >
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e8a8ae",
              marginBottom: "20px",
            }}
          >
            North Carolina&apos;s Boutique Studio
          </p>
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(52px, 9vw, 100px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.05,
              marginBottom: "24px",
              textShadow: "0 2px 30px rgba(0,0,0,0.25)",
            }}
          >
            The Hosting House
          </h1>
          <p
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.65,
              marginBottom: "44px",
              maxWidth: "540px",
              margin: "0 auto 44px",
            }}
          >
            Creating beautiful, thoughtfully crafted celebrations for life&apos;s
            most meaningful moments.
          </p>
          <div
            className="animate-fade-up delay-300"
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              What We Do
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
              A Full Suite of Event Services
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
                src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80"
                alt="Event founders working on floral design"
                fill
                style={{ objectFit: "cover" }}
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
                marginBottom: "20px",
              }}
            >
              The Hosting House is the brainchild of Meredith Parker and
              Susanna Thomas — two women who share a deep passion for
              hospitality, beautiful design, and the art of gathering.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#5a5a5a",
                marginBottom: "36px",
              }}
            >
              Rooted in the South and guided by intention, we built this studio
              to help clients host the kind of events they will talk about for
              years to come.
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

      {/* TESTIMONIALS */}
      <section className="section-lg" style={{ backgroundColor: "#ffffff" }}>
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
              Client Love
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 400,
                color: "#304254",
              }}
            >
              What Our Clients Say
            </h2>
          </AnimateIn>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 120}>
                <div className="testimonial-card">
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "60px",
                      lineHeight: 0.75,
                      color: "#cd8b91",
                      marginBottom: "20px",
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "19px",
                      fontStyle: "italic",
                      lineHeight: 1.65,
                      color: "#304254",
                      marginBottom: "28px",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      backgroundColor: "#cd8b91",
                      marginBottom: "14px",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#304254",
                      marginBottom: "4px",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "12px",
                      color: "#9a9a9a",
                    }}
                  >
                    {t.event}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM PREVIEW */}
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
              Follow Along
            </p>
            <h2
              style={{
                fontFamily: "var(--font-ballet)",
                fontSize: "clamp(28px, 4vw, 44px)",
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
              }}
            >
              Behind the scenes, fresh arrangements, and event inspiration
            </p>
          </AnimateIn>

          <div className="instagram-preview-grid">
            {instagramImages.map((src, i) => (
              <AnimateIn key={src} delay={i * 60} direction="scale">
                <a
                  href="https://www.instagram.com/hostinghousenc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="img-zoom"
                  style={{
                    display: "block",
                    aspectRatio: "1/1",
                    position: "relative",
                    borderRadius: "2px",
                  }}
                >
                  <Image
                    src={src}
                    alt="Instagram post from @hostinghousenc"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 33vw, 16vw"
                  />
                </a>
              </AnimateIn>
            ))}
          </div>

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
                color: "#304254",
                border: "1px solid #304254",
                padding: "14px 36px",
                borderRadius: "2px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Follow on Instagram
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
            crafting something truly beautiful together.
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

