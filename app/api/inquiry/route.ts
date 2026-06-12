import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Event Type", data.eventType],
    ["Event Date", data.eventDate || "Not specified"],
    ["Venue", data.venue || "Not specified"],
    ["Guest Count", data.guestCount || "Not specified"],
    ["Budget", data.budget || "Not specified"],
    ["Services", servicesText],
    ["Message", data.message],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;background:#fdf5f6;border:1px solid #ecdcde;">${label}</td><td style="padding:8px 12px;border:1px solid #ecdcde;">${value}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#304254;">New Inquiry — ${data.eventType}</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "The Hosting House NC <onboarding@resend.dev>",
    to: "ethan@buildsiteco.com",
    replyTo: data.email,
    subject: `New Inquiry: ${data.eventType} — ${data.name}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
