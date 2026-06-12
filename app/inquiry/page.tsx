"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  venue: string;
  guestCount: string;
  budget: string;
  services: string[];
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  eventDate: "",
  eventType: "",
  venue: "",
  guestCount: "",
  budget: "",
  services: [],
  message: "",
};

const eventTypes = [
  "Wedding",
  "Bridal Shower",
  "Baby Shower",
  "Birthday Celebration",
  "Corporate Event",
  "Rehearsal Dinner",
  "Anniversary Celebration",
  "Holiday Party",
  "Cocktail Party",
  "Other",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000+",
  "Flexible / Let's discuss",
];

const serviceOptions = [
  "Full-Service Event Planning",
  "Day-Of Coordination",
  "Event Design & Styling",
  "Floral Design",
  "Bridal Florals",
  "Custom Floral Arrangements",
  "Venue Styling",
];

export default function InquiryPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

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

  if (submitted) {
    return (
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fdf5f6",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "560px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#ffe5e8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 32px",
              fontSize: "28px",
            }}
          >
            ❀
          </div>
          <h1
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 400,
              color: "#304254",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            We Can&apos;t Wait to Connect
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#5a5a5a",
              marginBottom: "16px",
            }}
          >
            Thank you for reaching out, {formData.name.split(" ")[0]}. Your
            inquiry has been received and we will be in touch within 48 hours.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#5a5a5a",
              marginBottom: "40px",
            }}
          >
            In the meantime, follow along on{" "}
            <a
              href="https://www.instagram.com/hostinghousenc"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#cd8b91", textDecoration: "none" }}
            >
              @hostinghousenc
            </a>{" "}
            for inspiration.
          </p>
          <a
            href="/"
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
              display: "inline-block",
            }}
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "360px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
          paddingBottom: "72px",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88df5691cc57?w=2000&q=85"
          alt="Beautiful floral arrangement"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(48,66,84,0.15) 0%, rgba(48,66,84,0.65) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <p
            className="animate-fade-up"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#e8a8ae",
              marginBottom: "16px",
            }}
          >
            Let&apos;s Begin
          </p>
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.1,
            }}
          >
            Inquire About Your Event
          </h1>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="section-lg" style={{ backgroundColor: "#fdf5f6" }}>
        <div className="container split-grid" style={{ alignItems: "start" }}>
          {/* LEFT COLUMN */}
          <AnimateIn direction="in">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#cd8b91",
                  marginBottom: "20px",
                }}
              >
                Ready When You Are
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(32px, 4vw, 44px)",
                  fontWeight: 400,
                  color: "#304254",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Tell Us About Your Celebration
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "#5a5a5a",
                  marginBottom: "20px",
                }}
              >
                Every great event starts with a conversation. Fill out the form
                and we will reach out within 48 hours to schedule a complimentary
                consultation.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "#5a5a5a",
                  marginBottom: "40px",
                }}
              >
                We take on a limited number of events each season to ensure every
                client receives our full attention. The sooner you reach out, the
                better.
              </p>

              {[
                { icon: "✉", label: "Response within 48 hours" },
                { icon: "◇", label: "Complimentary consultation included" },
                { icon: "✦", label: "Fully personalized to your vision" },
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

              <div
                style={{
                  marginTop: "48px",
                  padding: "28px 32px",
                  backgroundColor: "#ffffff",
                  borderRadius: "4px",
                  border: "1px solid #ecdcde",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "20px",
                    fontStyle: "italic",
                    color: "#304254",
                    lineHeight: 1.55,
                    marginBottom: "16px",
                  }}
                >
                  &ldquo;Think of us as your partner in planning. We are here to
                  make this fun, not stressful.&rdquo;
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#cd8b91",
                  }}
                >
                  Meredith &amp; Susanna
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* FORM */}
          <AnimateIn delay={200}>
            <form
              onSubmit={handleSubmit}
              className="form-card"
            >
              <h3
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#304254",
                  marginBottom: "36px",
                }}
              >
                Event Inquiry Form
              </h3>

              {/* Name + Email */}
              <div className="form-row">
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#cd8b91")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#ecdcde")
                    }
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#cd8b91")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#ecdcde")
                    }
                  />
                </div>
              </div>

              {/* Phone + Date */}
              <div
                className="form-row"
              >
                <div>
                  <label htmlFor="phone" style={labelStyle}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#cd8b91")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#ecdcde")
                    }
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" style={labelStyle}>
                    Event Date
                  </label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#cd8b91")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#ecdcde")
                    }
                  />
                </div>
              </div>

              {/* Event Type */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="eventType" style={labelStyle}>
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none" as const }}
                  onFocus={(e) =>
                    ((e.target as HTMLSelectElement).style.borderColor =
                      "#cd8b91")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLSelectElement).style.borderColor =
                      "#ecdcde")
                  }
                >
                  <option value="">Select event type...</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Venue + Guest Count */}
              <div
                className="form-row"
              >
                <div>
                  <label htmlFor="venue" style={labelStyle}>
                    Venue / Location
                  </label>
                  <input
                    id="venue"
                    name="venue"
                    type="text"
                    value={formData.venue}
                    onChange={handleChange}
                    placeholder="City, venue name..."
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#cd8b91")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#ecdcde")
                    }
                  />
                </div>
                <div>
                  <label htmlFor="guestCount" style={labelStyle}>
                    Estimated Guests
                  </label>
                  <input
                    id="guestCount"
                    name="guestCount"
                    type="text"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 50-75"
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#cd8b91")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#ecdcde")
                    }
                  />
                </div>
              </div>

              {/* Budget */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="budget" style={labelStyle}>
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: "none" as const }}
                  onFocus={(e) =>
                    ((e.target as HTMLSelectElement).style.borderColor =
                      "#cd8b91")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLSelectElement).style.borderColor =
                      "#ecdcde")
                  }
                >
                  <option value="">Select a range...</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Services */}
              <div style={{ marginBottom: "24px" }}>
                <label style={labelStyle}>Services Interested In</label>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: formData.services.includes(service)
                          ? "#ffffff"
                          : "#304254",
                        backgroundColor: formData.services.includes(service)
                          ? "#cd8b91"
                          : "transparent",
                        border: formData.services.includes(service)
                          ? "1px solid #cd8b91"
                          : "1px solid #ecdcde",
                        padding: "7px 14px",
                        borderRadius: "20px",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "32px" }}>
                <label htmlFor="message" style={labelStyle}>
                  Tell Us About Your Event *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your vision, inspiration, must-haves, and anything that will help us understand your celebration..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      "#cd8b91")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      "#ecdcde")
                  }
                />
              </div>

              {/* Error */}
              {error && (
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "13px",
                    color: "#c0392b",
                    marginBottom: "16px",
                    padding: "12px 16px",
                    backgroundColor: "#fef0f0",
                    borderRadius: "2px",
                    border: "1px solid #fcd5d5",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  width: "100%",
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  backgroundColor: submitting ? "#e8a8ae" : "#cd8b91",
                  border: "none",
                  padding: "16px",
                  borderRadius: "2px",
                  cursor: submitting ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!submitting) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "#b8717a";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitting) {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                      "#cd8b91";
                  }
                }}
              >
                {submitting ? "Sending..." : "Send My Inquiry"}
              </button>

              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "12px",
                  color: "#9a9a9a",
                  textAlign: "center",
                  marginTop: "16px",
                  lineHeight: 1.6,
                }}
              >
                We respond within 48 hours. Your information is kept private and
                never shared.
              </p>
            </form>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
