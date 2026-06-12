import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "steinbros1012@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Event Type: ${data.eventType}`,
    `Event Date: ${data.eventDate || "Not specified"}`,
    `Venue: ${data.venue || "Not specified"}`,
    `Guest Count: ${data.guestCount || "Not specified"}`,
    `Budget: ${data.budget || "Not specified"}`,
    `Services: ${servicesText}`,
    ``,
    `Message:`,
    data.message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: "steinbros1012@gmail.com",
      to: "steinbros1012@gmail.com",
      replyTo: data.email,
      subject: `New Inquiry: ${data.eventType} — ${data.name}`,
      text,
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
