"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  preference: string;
  notes: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  preference: "",
  notes: "",
};

const preferences = [
  "Soft & Romantic (blush, white, cream)",
  "Bold & Colorful (bright, mixed blooms)",
  "Garden & Wild (loose, natural look)",
  "Classic & Elegant (roses, hydrangeas)",
  "Seasonal — Surprise me!",
];

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontFamily: "var(--font-dm-sans)",
  fontSize: "14px",
  color: "#304254",
  backgroundColor: "#ffffff",
  border: "1px solid #ecdcde",
  borderRadius: "3px",
  outline: "none",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  display: "block" as const,
  fontFamily: "var(--font-dm-sans)",
  fontSize: "11px",
  fontWeight: 600 as const,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "#304254",
  marginBottom: "8px",
};

export default function FloralSubscriptionPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/floral-subscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setFormData(initialFormData);
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      {/* HERO */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          paddingTop: "130px",
          paddingBottom: "72px",
          textAlign: "center",
          paddingLeft: "24px",
          paddingRight: "24px",
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
            Monthly Florals
          </p>
          <h1
            style={{
              fontFamily: "var(--font-ballet)",
              fontSize: "clamp(48px, 8vw, 88px)",
              fontWeight: 400,
              color: "#304254",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            The Floral Club
          </h1>
          <p
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#b07a80",
              lineHeight: 1.6,
              maxWidth: "560px",
              margin: "0 auto 12px",
            }}
          >
            Fresh, seasonal arrangements delivered to your door every month.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              color: "#5a5a5a",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Sign up below and we will be in touch with all the details — pricing,
            delivery schedule, and your first bloom selection.
          </p>
        </AnimateIn>
      </section>

      {/* WHAT TO EXPECT */}
      <section
        style={{
          backgroundColor: "#304254",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
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
              What to Expect
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#ffffff",
              }}
            >
              Fresh blooms, every single month
            </h2>
          </AnimateIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
            }}
          >
            {[
              {
                icon: "✦",
                title: "Seasonal Selections",
                body: "Each arrangement is built around what is freshest and most beautiful that time of year.",
              },
              {
                icon: "◇",
                title: "Designed by Us",
                body: "Meredith and Susanna personally design and arrange every subscription bouquet.",
              },
              {
                icon: "❀",
                title: "Your Preference",
                body: "Tell us what you love and we will tailor each arrangement to your style.",
              },
              {
                icon: "◯",
                title: "No Commitment",
                body: "Start or pause any time. We will reach out with all the details after you sign up.",
              },
            ].map((item) => (
              <AnimateIn key={item.title}>
                <div
                  style={{
                    textAlign: "center",
                    padding: "32px 20px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "28px",
                      color: "#cd8b91",
                      marginBottom: "16px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "22px",
                      fontWeight: 500,
                      color: "#ffffff",
                      marginBottom: "12px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* SIGN UP FORM */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "100px 24px",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
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
              Join the List
            </p>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#304254",
                marginBottom: "12px",
              }}
            >
              Sign Me Up
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "15px",
                color: "#5a5a5a",
                lineHeight: 1.75,
              }}
            >
              Fill out the form and we will reach out with everything you need to know.
            </p>
          </AnimateIn>

          {status === "success" ? (
            <AnimateIn>
              <div
                style={{
                  textAlign: "center",
                  padding: "64px 40px",
                  backgroundColor: "#fdf5f6",
                  borderRadius: "4px",
                  border: "1px solid #ecdcde",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "48px",
                    color: "#cd8b91",
                    marginBottom: "20px",
                  }}
                >
                  ❀
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "#304254",
                    marginBottom: "12px",
                  }}
                >
                  You are on the list!
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "15px",
                    color: "#5a5a5a",
                    lineHeight: 1.8,
                    maxWidth: "380px",
                    margin: "0 auto",
                  }}
                >
                  We will be in touch shortly with all the details. We cannot
                  wait to bring some blooms to your door.
                </p>
              </div>
            </AnimateIn>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="form-card"
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Name + Email */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>
                    Full Name <span style={{ color: "#cd8b91" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>
                    Email <span style={{ color: "#cd8b91" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Phone + City */}
              <div className="form-row">
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle}>City / Area</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Raleigh, Cary, etc."
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div>
                <label style={labelStyle}>Delivery Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  style={inputStyle}
                />
              </div>

              {/* Style Preference */}
              <div>
                <label style={labelStyle}>Floral Style Preference</label>
                <select
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none" as const }}
                >
                  <option value="">Select a style...</option>
                  {preferences.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div>
                <label style={labelStyle}>Anything else we should know?</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Allergies, color preferences, special requests..."
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "vertical" as const,
                    minHeight: "100px",
                  }}
                />
              </div>

              {status === "error" && (
                <div
                  style={{
                    padding: "14px 18px",
                    backgroundColor: "#fff0f1",
                    border: "1px solid #f5c6cb",
                    borderRadius: "3px",
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "14px",
                    color: "#842029",
                  }}
                >
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  backgroundColor: status === "loading" ? "#e0a0a6" : "#cd8b91",
                  border: "none",
                  padding: "18px 40px",
                  borderRadius: "3px",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  width: "100%",
                  transition: "background-color 0.2s ease",
                }}
              >
                {status === "loading" ? "Sending..." : "Count Me In"}
              </button>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "12px",
                  color: "#9a9a9a",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                We will follow up within 48 hours with pricing and next steps.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* SAMPLE PHOTO ROW */}
      <section
        style={{
          backgroundColor: "#fdf5f6",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <AnimateIn style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                color: "#304254",
              }}
            >
              A taste of what is coming to your door
            </h2>
          </AnimateIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                src: "/images/portfolio/IMG_3728.JPG",
                alt: "Roses and hydrangeas arrangement",
              },
              {
                src: "/images/portfolio/IMG_7537.JPG",
                alt: "Blue and white floral centerpiece",
              },
              {
                src: "/images/portfolio/DSC00970.JPG",
                alt: "Bold colorful floral arrangement",
              },
              {
                src: "/images/portfolio/DSC00420.JPG",
                alt: "Garden party florals",
              },
            ].map((photo) => (
              <AnimateIn key={photo.src}>
                <div
                  style={{
                    aspectRatio: "1/1",
                    position: "relative",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
