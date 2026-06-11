import { NextRequest, NextResponse } from "next/server";

interface InquiryBody {
  name: string;
  email: string;
  phone?: string;
  eventDate?: string;
  eventType: string;
  venue?: string;
  guestCount?: string;
  budget?: string;
  services?: string[];
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const data = body as InquiryBody;

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (!data.email || !isValidEmail(data.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!data.eventType || typeof data.eventType !== "string") {
    return NextResponse.json({ error: "Please select an event type." }, { status: 400 });
  }
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    return NextResponse.json({ error: "Please tell us a bit more about your event." }, { status: 400 });
  }

  const servicesText =
    Array.isArray(data.services) && data.services.length > 0
      ? data.services.join(", ")
      : "Not specified";

  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return NextResponse.json({ error: "Form not configured." }, { status: 500 });
  }

  const payload = {
    access_key: accessKey,
    subject: `New Inquiry: ${data.eventType} - ${data.name}`,
    from_name: "The Hosting House NC",
    replyto: data.email,
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    event_type: data.eventType,
    event_date: data.eventDate || "Not specified",
    venue: data.venue || "Not specified",
    guest_count: data.guestCount || "Not specified",
    budget: data.budget || "Not specified",
    services: servicesText,
    message: data.message,
  };

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!result.success) {
    console.error("Web3Forms error:", result);
    return NextResponse.json({ error: "Failed to send inquiry. Please try again." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
