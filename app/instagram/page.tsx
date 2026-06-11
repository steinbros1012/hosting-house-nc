import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import InstagramFeed from "@/components/InstagramFeed";
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


export default function InstagramPage() {
  return (
    <>
      {/* HEADER */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "56px",
          textAlign: "center",
          backgroundColor: "#fdf5f6",
          paddingLeft: "20px",
          paddingRight: "20px",
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
        <div className="stats-bar" style={{ maxWidth: "800px", margin: "0 auto" }}>
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

      {/* LIVE INSTAGRAM GRID */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "48px 20px 80px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <InstagramFeed limit={12} />
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
