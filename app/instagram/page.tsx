import type { Metadata } from "next";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function ExternalLinkIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Follow @hostinghousenc on Instagram for behind-the-scenes content, fresh floral arrangements, and event inspiration.",
};

const instagramPosts = [
  {
    src: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80",
    alt: "Pink rose arrangement",
    caption: "The softest shades of pink for a Saturday bridal shower.",
    likes: 184,
    tag: "Florals",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    alt: "Floral table centerpiece",
    caption: "When the tablescape does all the talking.",
    likes: 312,
    tag: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
    alt: "Wedding bouquet",
    caption: "For the bride who wanted garden-fresh and effortless.",
    likes: 256,
    tag: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    alt: "Pastel bridal bouquet",
    caption: "Peonies are always the answer. Always.",
    likes: 428,
    tag: "Florals",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=600&q=80",
    alt: "Lush floral installation",
    caption: "A full floral arch installation for an outdoor ceremony.",
    likes: 501,
    tag: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&q=80",
    alt: "Styled table setting",
    caption: "Every detail of this dinner party felt just right.",
    likes: 197,
    tag: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80",
    alt: "Candlelit reception",
    caption: "There is something magical about candlelight at golden hour.",
    likes: 367,
    tag: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    alt: "Romantic event styling",
    caption: "This one was personal. The bride cried. We all cried.",
    likes: 445,
    tag: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    alt: "Elegant dinner party",
    caption: "Elevated holiday gathering for a group of 30.",
    likes: 229,
    tag: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
    alt: "Outdoor wedding reception",
    caption: "Summer under the trees. Could not have dreamed it better.",
    likes: 384,
    tag: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80",
    alt: "Wedding reception styling",
    caption: "Every ribbon, every bloom, every candle placed with intention.",
    likes: 293,
    tag: "Weddings",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    alt: "Baby shower decor",
    caption: "The sweetest little baby shower for the sweetest mama.",
    likes: 512,
    tag: "Showers",
  },
];

export default function InstagramPage() {
  return (
    <>
      {/* HEADER */}
      <section
        style={{
          paddingTop: "160px",
          paddingBottom: "72px",
          textAlign: "center",
          backgroundColor: "#fdf5f6",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <AnimateIn>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#cd8b91" }}><InstagramIcon size={20} /></span>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
              }}
            >
              Follow Along
            </p>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(32px, 6vw, 64px)",
              fontWeight: 400,
              color: "#304254",
              marginBottom: "16px",
            }}
          >
            @hostinghousenc
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              color: "#5a5a5a",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto 36px",
            }}
          >
            Behind the scenes, fresh arrangements, real events, and daily
            inspiration from our studio.
          </p>
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
              padding: "14px 36px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <InstagramIcon size={14} />
            Follow on Instagram
            <ExternalLinkIcon size={12} />
          </a>
        </AnimateIn>
      </section>

      {/* STATS BAR */}
      <section
        style={{
          backgroundColor: "#304254",
          padding: "28px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "64px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Posts", value: "200+" },
            { label: "Following", value: "Floral Lovers" },
            { label: "NC Events", value: "50+ Served" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#ffe5e8",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "64px 24px 100px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            {instagramPosts.map((post, i) => (
              <AnimateIn key={post.src} delay={i * 60} direction="scale">
                <a
                  href="https://www.instagram.com/hostinghousenc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insta-card"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid #ecdcde",
                  }}
                >
                  <div
                    className="img-zoom"
                    style={{
                      aspectRatio: "1/1",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        backgroundColor: "#cd8b91",
                        color: "#ffffff",
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        borderRadius: "10px",
                      }}
                    >
                      {post.tag}
                    </div>
                  </div>
                  <div style={{ padding: "16px 18px 18px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "16px",
                        fontStyle: "italic",
                        color: "#304254",
                        lineHeight: 1.5,
                        marginBottom: "10px",
                      }}
                    >
                      {post.caption}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="#cd8b91"
                      >
                        <path d="M12 21.593c-.425-.246-8.365-5.214-8.365-12.08a8.366 8.366 0 0116.73 0c0 6.866-7.94 11.834-8.365 12.08z" />
                      </svg>
                      <span
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "12px",
                          color: "#9a9a9a",
                        }}
                      >
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </a>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW CTA */}
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
              marginBottom: "16px",
            }}
          >
            Join Us on Instagram
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
            Follow @hostinghousenc for daily floral inspiration, event prep,
            and behind the scenes from our studio.
          </p>
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
              padding: "16px 44px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <InstagramIcon size={14} />
            Follow @hostinghousenc
          </a>
        </AnimateIn>
      </section>
    </>
  );
}
