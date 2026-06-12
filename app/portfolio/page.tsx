"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const categories = ["All", "Florals", "Tablescapes", "Events", "Parties"];

const portfolioItems = [
  {
    src: "/images/portfolio/IMG_6227.JPG",
    alt: "Spring tablescape with pink roses, butterfly plates, and gingham",
    category: "Tablescapes",
    title: "Spring Garden Tablescape",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00420.JPG",
    alt: "Colorful outdoor floral centerpiece with snapdragons and orange roses",
    category: "Florals",
    title: "Garden Party Florals",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00781.JPG",
    alt: "Meredith and Susanna at a Caftans and Cocktails party",
    category: "Events",
    title: "Caftans & Cocktails",
    tall: false,
  },
  {
    src: "/images/portfolio/IMG_3728.JPG",
    alt: "Elegant silver urn with roses and hydrangeas for an anniversary dinner",
    category: "Florals",
    title: "Anniversary Centerpiece",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_7537.JPG",
    alt: "Blue and white floral centerpiece with lemons and yellow tapers",
    category: "Tablescapes",
    title: "Lemon & Lavender Dinner",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00295.JPG",
    alt: "Disco ball cake reading Calpenia and Cocktails",
    category: "Events",
    title: "Caftans & Cocktails Cake",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00970.JPG",
    alt: "Bold colorful centerpiece with peonies, orange, and yellow blooms",
    category: "Florals",
    title: "Bold Summer Centerpiece",
    tall: false,
  },
  {
    src: "/images/portfolio/IMG_8131.JPG",
    alt: "Spring dining table with tall floral arrangements and tapers",
    category: "Tablescapes",
    title: "Spring Dining Table",
    tall: false,
  },
  {
    src: "/images/portfolio/DSC00345.JPG",
    alt: "Branded white gift boxes with ribbons and The Hosting House tags",
    category: "Events",
    title: "Custom Party Favors",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_5317.jpg",
    alt: "Founder at a decorated dinner table with a pink birthday cake",
    category: "Events",
    title: "Pink Birthday Dinner",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00417.JPG",
    alt: "Close-up outdoor floral arrangement with orange roses and pink peonies",
    category: "Florals",
    title: "Outdoor Garden Arrangement",
    tall: false,
  },
  {
    src: "/images/portfolio/IMG_6966.JPG",
    alt: "Louisa's Pink Puppy Club kids birthday party with banner and pink table",
    category: "Parties",
    title: "Pink Puppy Club Party",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_2371.JPG",
    alt: "Elegant green and white place setting with crystal and silver",
    category: "Tablescapes",
    title: "Classic Green Place Setting",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00392.JPG",
    alt: "Silver punch bowl with citrus slices and flowers",
    category: "Events",
    title: "Garden Party Punch Bowl",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_4845.JPG",
    alt: "Outdoor cocktail bar with custom signature cocktail menu",
    category: "Events",
    title: "Signature Cocktail Bar",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00753.JPG",
    alt: "Harry Styles themed floral arrangement in a silver bucket",
    category: "Florals",
    title: "Harry Styles Garden Party",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_6967.JPG",
    alt: "Pink puppy birthday table with flowers and a party hat stuffed animal",
    category: "Parties",
    title: "Puppy Birthday Florals",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_0454.jpg",
    alt: "Holiday chandelier with pink ribbons and floral centerpiece",
    category: "Events",
    title: "Holiday Dinner Party",
    tall: true,
  },
  {
    src: "/images/portfolio/IMG_3741.jpg",
    alt: "Tiered flower display with multiple seasonal bloom varieties",
    category: "Florals",
    title: "Floral Bar Display",
    tall: true,
  },
  {
    src: "/images/portfolio/DSC00463.JPG",
    alt: "Caftans and Cocktails retro-style cocktail menu in a gold frame",
    category: "Events",
    title: "Caftans & Cocktails Menu",
    tall: true,
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      {/* HEADER */}
      <section
        style={{
          paddingTop: "clamp(100px, 15vw, 140px)",
          paddingBottom: "48px",
          textAlign: "center",
          backgroundColor: "#fdf5f6",
          paddingLeft: "20px",
          paddingRight: "20px",
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
              marginBottom: "16px",
            }}
          >
            Our Work
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 400,
              color: "#304254",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Portfolio
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "#5a5a5a",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            A glimpse at the celebrations, florals, and gatherings we have had
            the honor of bringing to life.
          </p>
        </AnimateIn>
      </section>

      {/* FILTER TABS */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          paddingBottom: "48px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <AnimateIn
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: active === cat ? "#ffffff" : "#304254",
                backgroundColor: active === cat ? "#cd8b91" : "transparent",
                border: active === cat ? "1px solid #cd8b91" : "1px solid #ecdcde",
                padding: "9px 22px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </AnimateIn>
      </section>

      {/* UNIFORM GRID */}
      <section style={{ backgroundColor: "#ffffff", padding: "0 20px 80px" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: filtered.length <= 4 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {filtered.map((item, i) => (
            <AnimateIn key={item.src} delay={i * 40}>
              {/* Ornate gold frame wrapper */}
              <div className="portfolio-frame">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1px",
                    aspectRatio: "1/1",
                    cursor: "pointer",
                  }}
                  onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector<HTMLDivElement>(".portfolio-overlay");
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector<HTMLDivElement>(".portfolio-overlay");
                    if (overlay) overlay.style.opacity = "0";
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                    sizes="(max-width: 640px) 50vw, 33vw"
                    onMouseEnter={(e) =>
                      ((e.target as HTMLImageElement).style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLImageElement).style.transform = "scale(1)")
                    }
                  />
                  <div
                    className="portfolio-overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(48,66,84,0.4)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "16px",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "16px",
                        fontStyle: "italic",
                        color: "#ffffff",
                        pointerEvents: "none",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="min(900px, 96vw)"
            />
            <button
              onClick={() => setLightbox(null)}
              className="lightbox-close"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}

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
            Love What You See?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#5a5a5a",
              lineHeight: 1.75,
              maxWidth: "440px",
              margin: "0 auto 36px",
            }}
          >
            Let&apos;s create something just as beautiful for your celebration.
            Reach out to start the conversation.
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
