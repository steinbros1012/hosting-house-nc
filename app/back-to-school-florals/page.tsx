"use client";

import Script from "next/script";
import AnimateIn from "@/components/AnimateIn";

const PICKUP_DATES = [
  { label: "Monday, August 10", value: "2026-08-10" },
  { label: "Tuesday, August 18", value: "2026-08-18" },
  { label: "Sunday, August 23", value: "2026-08-23" },
  { label: "Sunday, August 30", value: "2026-08-30" },
  { label: "Monday, September 7", value: "2026-09-07" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "14px",
  color: "#1a1a1a",
  backgroundColor: "#ffffff",
  border: "1px solid #ecdcde",
  borderRadius: "2px",
  padding: "12px 16px",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#304254",
  marginBottom: "8px",
};

export default function BackToSchoolFloralsPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #fdf5f6 0%, #ffe5e8 50%, #fdf5f6 100%)",
          padding: "clamp(80px, 12vw, 140px) 24px clamp(60px, 8vw, 100px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative petals */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            fontSize: "clamp(48px, 8vw, 120px)",
            opacity: 0.08,
            color: "#cd8b91",
            fontFamily: "serif",
            userSelect: "none",
          }}
        >
          ❀
        </div>
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            fontSize: "clamp(40px, 6vw, 96px)",
            opacity: 0.06,
            color: "#cd8b91",
            fontFamily: "serif",
            userSelect: "none",
          }}
        >
          ✦
        </div>

        <AnimateIn direction="in">
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#cd8b91",
              marginBottom: "20px",
            }}
          >
            Limited Availability &mdash; Summer 2026
          </p>

          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(42px, 7vw, 80px)",
              fontWeight: 400,
              color: "#304254",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Back to School
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(50px, 8vw, 96px)",
              fontWeight: 400,
              color: "#cd8b91",
              lineHeight: 1.05,
              marginBottom: "32px",
            }}
          >
            Teacher Florals
          </h1>

          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.85,
              color: "#5a5a5a",
              maxWidth: "580px",
              margin: "0 auto 40px",
            }}
          >
            Show your child&apos;s teacher they are seen and celebrated this school year. We are offering a limited run of beautifully designed floral arrangements available for pick-up, just in time for the first day of school.
          </p>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#ffe5e8",
              border: "1px solid #e8a8ae",
              borderRadius: "20px",
              padding: "8px 20px",
            }}
          >
            <span style={{ fontSize: "14px" }}>🌸</span>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 600,
                color: "#b8717a",
              }}
            >
              Only 20 arrangements per pick-up date
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* PICKUP DATES */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(60px, 8vw, 96px) 24px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <AnimateIn direction="in">
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                Available Pick-Up Dates
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 400,
                  color: "#304254",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Choose Your Pick-Up Day
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  color: "#5a5a5a",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                Pick-up dates align with major school start days across the Triangle. If you have kids in different schools, each arrangement can have its own pick-up date.
              </p>
            </div>
          </AnimateIn>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              maxWidth: "360px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {PICKUP_DATES.map((date, i) => (
              <AnimateIn key={date.value} delay={i * 80}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    padding: "10px 0",
                    borderBottom:
                      i < PICKUP_DATES.length - 1 ? "1px solid #ecdcde" : "none",
                  }}
                >
                  <span
                    aria-hidden
                    style={{ color: "#cd8b91", fontSize: "14px", flexShrink: 0 }}
                  >
                    ❀
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "#304254",
                      lineHeight: 1.3,
                    }}
                  >
                    {date.label}
                  </span>
                </li>
              </AnimateIn>
            ))}
          </ul>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "12px",
              color: "#9a9a9a",
              letterSpacing: "0.05em",
              textAlign: "center",
              marginTop: "24px",
            }}
          >
            Maximum of 20 arrangements per pick-up date
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          padding: "clamp(60px, 8vw, 96px) 24px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(40px, 6vw, 72px)",
            alignItems: "center",
          }}
        >
          <AnimateIn direction="in">
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
              What&apos;s Included
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 44px)",
                fontWeight: 400,
                color: "#304254",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              A Little Something for the Teachers Who Give Everything
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                lineHeight: 1.85,
                color: "#5a5a5a",
                marginBottom: "32px",
              }}
            >
              Each arrangement is handcrafted by The Hosting House NC with our signature seasonal blooms. Beautiful, thoughtful, and ready to brighten any classroom.
            </p>

            {[
              { icon: "❀", label: "Seasonal fresh florals" },
              { icon: "◇", label: "Beautifully wrapped and ready to gift" },
              { icon: "✦", label: "Pick-up in the Raleigh area" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#ffe5e8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "14px",
                    color: "#304254",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </AnimateIn>

          <AnimateIn delay={200}>
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ecdcde",
                borderRadius: "4px",
                padding: "clamp(24px, 4vw, 40px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "18px",
                  fontStyle: "italic",
                  color: "#304254",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                &ldquo;Teachers pour so much of themselves into their students. We wanted to create something easy for parents to give that still feels truly special.&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#cd8b91",
                  marginBottom: "24px",
                }}
              >
                Meredith &amp; Susanna
              </p>
              <div
                style={{
                  borderTop: "1px solid #ecdcde",
                  paddingTop: "20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "12px",
                    color: "#9a9a9a",
                    lineHeight: 1.7,
                  }}
                >
                  Questions? Reach us at{" "}
                  <a
                    href="mailto:hello@hostinghousenc.com"
                    style={{ color: "#cd8b91", textDecoration: "none" }}
                  >
                    hello@hostinghousenc.com
                  </a>
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ORDER FORM — HoneyBook */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "clamp(60px, 8vw, 96px) 24px",
        }}
        id="order"
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <AnimateIn direction="in">
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
                Reserve Your Spot
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 400,
                  color: "#304254",
                  lineHeight: 1.2,
                  marginBottom: "16px",
                }}
              >
                Place Your Preorder
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  color: "#5a5a5a",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  margin: "0 auto",
                }}
              >
                Spots are limited to 20 per pick-up date. Secure yours today. Payment is processed securely through HoneyBook.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={150}>
            <div
              style={{
                backgroundColor: "#fdf5f6",
                border: "1px solid #ecdcde",
                borderRadius: "4px",
                padding: "clamp(24px, 5vw, 48px)",
                minHeight: "400px",
              }}
            >
              {/* HoneyBook embed */}
              <div className="hb-p-6a242303155aea95ce43a9e3-3" />
              {/* Tracking pixel */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height={1}
                width={1}
                style={{ display: "none" }}
                src="https://www.honeybook.com/p.png?pid=6a242303155aea95ce43a9e3"
                alt=""
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* HoneyBook script */}
      <Script
        id="honeybook-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,b,s,n,i,p,e,t) {
              h._HB_ = h._HB_ || {};h._HB_.pid = i;
              t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
              e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","6a242303155aea95ce43a9e3");
          `,
        }}
      />
    </>
  );
}
