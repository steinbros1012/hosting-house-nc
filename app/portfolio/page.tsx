"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const categories = ["All", "Weddings", "Florals", "Events", "Showers"];

const portfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Lush reception centerpiece with garden roses and greenery",
    category: "Weddings",
    title: "Garden Rose Reception",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Bridal bouquet with peonies and white blooms",
    category: "Florals",
    title: "Peony Bridal Bouquet",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
    alt: "Elegant styled dinner tablescape",
    category: "Events",
    title: "Styled Dinner Party",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Soft pastel bridal shower arrangement",
    category: "Showers",
    title: "Bridal Shower Blooms",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
    alt: "Close-up of pink rose arrangement",
    category: "Florals",
    title: "Pink Rose Composition",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    alt: "Reception with candles and ambient lighting",
    category: "Weddings",
    title: "Candlelit Reception",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=800&q=80",
    alt: "Lush pink floral installation",
    category: "Florals",
    title: "Floral Installation",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Romantic event decor setup",
    category: "Events",
    title: "Romantic Evening Event",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Elegant table setting for dinner party",
    category: "Events",
    title: "Black Tie Dinner",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    alt: "Wedding reception detail shot",
    category: "Weddings",
    title: "Wedding Reception Details",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    alt: "Baby shower with pastel decor",
    category: "Showers",
    title: "Pastel Baby Shower",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    alt: "Outdoor summer wedding reception",
    category: "Weddings",
    title: "Summer Garden Wedding",
    tall: false,
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      {/* HEADER */}
      <section
        style={{
          paddingTop: "140px",
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

      {/* MASONRY GRID */}
      <section style={{ backgroundColor: "#ffffff", padding: "0 20px 80px" }}>
        <div className="container masonry-grid">
          {filtered.map((item, i) => (
            <AnimateIn
              key={item.src}
              delay={i * 50}
              style={{
                breakInside: "avoid",
                marginBottom: "12px",
                cursor: "pointer",
                display: "block",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "3px",
                  aspectRatio: item.tall ? "3/4" : "4/3",
                }}
                onClick={() =>
                  setLightbox({ src: item.src, alt: item.alt })
                }
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onMouseEnter={(e) =>
                    ((e.target as HTMLImageElement).style.transform =
                      "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLImageElement).style.transform = "scale(1)")
                  }
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(48,66,84,0)",
                    transition: "background-color 0.3s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "20px",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor =
                      "rgba(48,66,84,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor =
                      "rgba(48,66,84,0)";
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "18px",
                      fontStyle: "italic",
                      color: "#ffffff",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.opacity = "1")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.opacity = "0")
                    }
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Mobile: switch to 2 columns */}
        <style>{`
          @media (max-width: 768px) {
            .masonry-grid { columns: 2 !important; }
          }
          @media (max-width: 480px) {
            .masonry-grid { columns: 1 !important; }
          }
        `}</style>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src.replace("w=800", "w=1400")}
              alt={lightbox.alt}
              fill
              style={{ objectFit: "contain" }}
              sizes="min(900px, 96vw)"
            />
            <button
              onClick={() => setLightbox(null)}
              className="lightbox-close"
              aria-label="Close lightbox"
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
              marginBottom: "36px",
              maxWidth: "440px",
              margin: "0 auto 36px",
            }}
          >
            Let&apos;s create something just as beautiful for your celebration.
            Reach out to start the conversation.
          </p>
          <a
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
          </a>
        </AnimateIn>
      </section>
    </>
  );
}
