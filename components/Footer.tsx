import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/instagram", label: "Instagram" },
  { href: "/inquiry", label: "Inquire" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#304254",
        color: "#ffffff",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Brand Column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-ballet)",
                fontSize: "28px",
                color: "#cd8b91",
                marginBottom: "16px",
                fontWeight: 400,
              }}
            >
              The Hosting House
            </h3>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
                marginBottom: "24px",
                maxWidth: "260px",
              }}
            >
              Boutique event planning and floral design in North Carolina,
              crafted with Southern heart and a refined eye for beauty.
            </p>
            <a
              href="https://www.instagram.com/hostinghousenc"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#cd8b91",
                textDecoration: "none",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @hostinghousenc
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "20px",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Event Planning", "Event Design", "Floral Design", "Wedding Florals", "Custom Arrangements", "Day-Of Coordination"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "20px",
              }}
            >
              Start Planning
            </h4>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "14px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Ready to bring your vision to life? We would love to hear about
              your celebration.
            </p>
            <Link
              href="/inquiry"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-dm-sans)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#cd8b91",
                padding: "12px 28px",
                borderRadius: "2px",
                textDecoration: "none",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "32px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            &copy; {new Date().getFullYear()} The Hosting House NC. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            Meredith Parker &amp; Susanna Thomas &mdash; North Carolina
          </p>
        </div>
      </div>
    </footer>
  );
}
