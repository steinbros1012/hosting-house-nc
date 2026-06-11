"use client";

import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "48px 36px",
        borderRadius: "4px",
        border: "1px solid #ecdcde",
        height: "100%",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 12px 40px rgba(205,139,145,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: "22px", color: "#cd8b91", marginBottom: "20px" }}>
        {service.icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "28px",
          fontWeight: 500,
          color: "#304254",
          marginBottom: "16px",
        }}
      >
        {service.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "15px",
          lineHeight: 1.8,
          color: "#5a5a5a",
          marginBottom: "28px",
        }}
      >
        {service.description}
      </p>
      <Link
        href={service.href}
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#cd8b91",
          textDecoration: "none",
        }}
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
