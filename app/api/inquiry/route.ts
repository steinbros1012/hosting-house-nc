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
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 2) {
    return NextResponse.json({ error: "Please tell us a bit more about your event." }, { status: 400 });
  }

  const servicesText =
    Array.isArray(data.services) && data.services.length > 0
      ? data.services.join(", ")
      : "Not specified";

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "The Hosting House NC <noreply@buildsiteco.com>",
      to: "hello@hostinghousenc.com",
      replyTo: data.email,
      subject: `New Inquiry: ${data.eventType} - ${data.name}`,
      html: `
        <h2>New Event Inquiry</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${data.phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Event Type</td><td style="padding:8px">${data.eventType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Event Date</td><td style="padding:8px">${data.eventDate || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Venue</td><td style="padding:8px">${data.venue || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Guest Count</td><td style="padding:8px">${data.guestCount || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Budget</td><td style="padding:8px">${data.budget || "Not specified"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Services</td><td style="padding:8px">${servicesText}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${data.message}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
