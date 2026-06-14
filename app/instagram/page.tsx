import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Instagram",
  description:
    "Follow @hostinghousenc on Instagram for behind-the-scenes floral design, event styling inspiration, and a peek at our latest celebrations across North Carolina.",
  openGraph: {
    title: "The Hosting House NC on Instagram",
    description: "Behind-the-scenes florals, tablescapes, and event styling from Meredith and Susanna. Follow us @hostinghousenc.",
    images: [{ url: "/images/portfolio/DSC00970.JPG", width: 1200, height: 630, alt: "The Hosting House NC floral design" }],
  },
};

const INSTAGRAM_URL = "https://www.instagram.com/hostinghousenc";

const featured = {
  src: "/images/instagram/post5.jpg",
  alt: "Hosting House NC event styling by Meredith and Susanna",
};

const posts = [
  {
    src: "/images/instagram/post1.jpg",
    alt: "Hosting House NC event styling",
    caption: "The softest shades of pink for a Saturday bridal shower.",
  },
  {
    src: "/images/instagram/post2.jpg",
    alt: "Hosting House NC floral design",
    caption: "When the tablescape does all the talking.",
  },
  {
    src: "/images/instagram/post3.jpg",
    alt: "Hosting House NC celebration",
    caption: "For the bride who wanted garden-fresh and effortless.",
  },
  {
    src: "/images/instagram/post4.jpg",
    alt: "Hosting House NC floral arrangement",
    caption: "Peonies are always the answer. Always.",
  },
  {
    src: "/images/instagram/post5.jpg",
    alt: "Hosting House NC reception styling",
    caption: "There is something magical about candlelight at golden hour.",
  },
  {
    src: "/images/instagram/post6.jpg",
    alt: "Hosting House NC event design",
    caption: "This one was personal. The bride cried. We all cried.",
  },
  {
    src: "/images/instagram/post7.jpg",
    alt: "Hosting House NC table setting",
    caption: "Every detail of this dinner party felt just right.",
  },
  {
    src: "/images/instagram/post9.jpg",
    alt: "Hosting House NC outdoor wedding",
    caption: "Summer under the trees. Could not have dreamed it better.",
  },
  {
    src: "/images/instagram/post1.jpg",
    alt: "Hosting House NC gathering",
    caption: "Elevated holiday gathering for a group of 30.",
  },
];

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export default function InstagramPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "70vh",
          minHeight: "520px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <Image
          src={featured.src}
          alt={featured.alt}
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.62) 60%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            padding: "0 24px",
            maxWidth: "680px",
          }}
        >
          <AnimateIn>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "100px",
                padding: "8px 20px",
                marginBottom: "24px",
              }}
            >
              <span style={{ color: "#e8a8ae" }}>
                <InstagramIcon size={14} />
              </span>
              <span
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                @hostinghousenc
              </span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-ballet)",
                fontSize: "clamp(44px, 7vw, 80px)",
                fontWeight: 400,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Follow Our Journey
            </h1>
            <a
              href={INSTAGRAM_URL}
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
              Follow Us on Instagram
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section
        style={{
          backgroundColor: "#304254",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <AnimateIn>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(22px, 3.5vw, 36px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#ffffff",
                lineHeight: 1.65,
                marginBottom: "24px",
              }}
            >
              &ldquo;Behind every beautiful event is a hundred tiny decisions
              made with love. We share them all on Instagram.&rdquo;
            </p>
            <div
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "#cd8b91",
                margin: "0 auto 16px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
              }}
            >
              Meredith &amp; Susanna
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* CURATED GRID */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "80px 20px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimateIn style={{ textAlign: "center", marginBottom: "56px" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#cd8b91",
                marginBottom: "14px",
              }}
            >
              From the Feed
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#304254",
              }}
            >
              A Few of Our Favorites
            </h2>
          </AnimateIn>

          {/* 3-col grid — all link to Instagram */}
          <div className="ig-editorial-grid">
            {posts.map((post, i) => (
              <AnimateIn key={i} delay={i * 55} direction="scale">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ig-editorial-card"
                >
                  <div className="ig-editorial-img">
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="ig-editorial-overlay">
                      <InstagramIcon size={22} />
                      <p className="ig-editorial-caption">{post.caption}</p>
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
          backgroundColor: "#fdf5f6",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <AnimateIn>
          <Image
            src="/logo-transparent.svg"
            width={160}
            height={120}
            alt="The Hosting House NC"
            style={{ height: "56px", width: "auto", marginBottom: "32px" }}
          />
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 400,
              color: "#304254",
              lineHeight: 1.2,
              marginBottom: "18px",
            }}
          >
            See What We&apos;re Up To
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#5a5a5a",
              lineHeight: 1.8,
              maxWidth: "420px",
              margin: "0 auto 40px",
            }}
          >
            Follow along for daily floral inspiration, event prep, and
            behind-the-scenes moments from our studio.
          </p>
          <a
            href={INSTAGRAM_URL}
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
              padding: "16px 48px",
              borderRadius: "2px",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <InstagramIcon size={15} />
            Follow @hostinghousenc
          </a>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "12px",
              color: "#9a9a9a",
              marginTop: "20px",
            }}
          >
            Opens Instagram in a new tab
          </p>
        </AnimateIn>
      </section>

      {/* INQUIRY NUDGE */}
      <section
        style={{
          backgroundColor: "#304254",
          padding: "72px 24px",
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
              marginBottom: "16px",
            }}
          >
            Love What You See?
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              color: "#ffffff",
              marginBottom: "32px",
            }}
          >
            Let&apos;s Create Something Just as Beautiful for You
          </h2>
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
              padding: "14px 40px",
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
