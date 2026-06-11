"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/instagram", label: "Instagram" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          // Always frosted so logo + links stay readable over any background
          backgroundColor: scrolled
            ? "rgba(253,245,246,0.97)"
            : "rgba(253,245,246,0.78)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(205,139,145,0.18)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: scrolled ? "64px" : "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "height 0.3s ease",
          }}
        >
          {/* Logo — landscape SVG, height-driven sizing with auto width */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo-blush.png"
              alt="The Hosting House NC"
              width={220}
              height={165}
              priority
              style={{
                height: scrolled ? "48px" : "62px",
                width: "auto",
                transition: "height 0.3s ease",
              }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="hidden md:flex"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isActive(href) ? "#cd8b91" : "#304254",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  paddingBottom: "2px",
                  borderBottom: isActive(href) ? "1px solid #cd8b91" : "1px solid transparent",
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#ffffff",
                backgroundColor: "#cd8b91",
                padding: "10px 24px",
                borderRadius: "2px",
                textDecoration: "none",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.backgroundColor = "#b8717a")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.backgroundColor = "#cd8b91")
              }
            >
              Inquire
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#304254",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "#fdf5f6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <Image
          src="/logo-blush.png"
          alt="The Hosting House NC"
          width={220}
          height={165}
          style={{ height: "70px", width: "auto", marginBottom: "8px" }}
        />
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "32px",
              fontWeight: 400,
              color: isActive(href) ? "#cd8b91" : "#304254",
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            {label}
          </Link>
        ))}
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
            padding: "14px 40px",
            borderRadius: "2px",
            textDecoration: "none",
            marginTop: "8px",
          }}
        >
          Inquire Now
        </Link>
      </div>
    </>
  );
}
