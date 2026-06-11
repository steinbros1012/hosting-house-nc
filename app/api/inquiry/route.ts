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
  const resend = new Resend(process.env.RESEND_API_KEY);
  const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || "hostinghousenc@gmail.com";
  const FROM_EMAIL = process.env.FROM_EMAIL || "inquiries@hostinghousenc.com";

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const data = body as InquiryBody;

  // Validate required fields
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

  const businessEmailHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #fdf5f6; border-radius: 8px; overflow: hidden;">
      <div style="background: #304254; padding: 32px 40px; text-align: center;">
        <h1 style="color: #cd8b91; font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 0.02em;">
          The Hosting House
        </h1>
        <p style="color: rgba(255,255,255,0.7); font-family: Arial, sans-serif; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 8px;">
          New Event Inquiry
        </p>
      </div>
      <div style="padding: 40px; background: #ffffff;">
        <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; width: 140px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;"><a href="mailto:${data.email}" style="color: #cd8b91; text-decoration: none;">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${data.phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Event Type</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${data.eventType}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Event Date</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${data.eventDate || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Venue</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${data.venue || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Guest Count</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${data.guestCount || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Budget</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${data.budget || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #9a9a9a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Services</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #ecdcde; color: #304254;">${servicesText}</td>
          </tr>
        </table>

        <div style="margin-top: 28px; padding: 24px; background: #fdf5f6; border-radius: 4px; border-left: 3px solid #cd8b91;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #9a9a9a; margin-bottom: 12px; font-family: Arial, sans-serif;">About the Event</p>
          <p style="color: #304254; line-height: 1.7; font-size: 15px;">${data.message}</p>
        </div>

        <div style="margin-top: 32px; text-align: center;">
          <a href="mailto:${data.email}" style="background: #cd8b91; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 2px; font-family: Arial, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">
            Reply to ${data.name.split(" ")[0]}
          </a>
        </div>
      </div>
      <div style="background: #304254; padding: 20px 40px; text-align: center;">
        <p style="color: rgba(255,255,255,0.4); font-family: Arial, sans-serif; font-size: 11px; margin: 0;">
          The Hosting House NC &bull; North Carolina
        </p>
      </div>
    </div>
  `;

  const confirmationEmailHtml = `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #304254; padding: 40px; text-align: center;">
        <h1 style="color: #cd8b91; font-size: 32px; font-weight: 400; margin: 0 0 8px;">
          The Hosting House
        </h1>
        <p style="color: rgba(255,255,255,0.6); font-family: Arial, sans-serif; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; margin: 0;">
          North Carolina
        </p>
      </div>
      <div style="padding: 48px 40px; background: #ffffff; border: 1px solid #ecdcde; border-top: none;">
        <h2 style="color: #304254; font-size: 28px; font-weight: 400; margin: 0 0 16px;">
          Thank you, ${data.name.split(" ")[0]}.
        </h2>
        <p style="color: #5a5a5a; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.8; margin-bottom: 16px;">
          We are so glad you reached out. Your inquiry has been received, and we will be
          in touch within <strong>48 hours</strong> to schedule a complimentary consultation.
        </p>
        <p style="color: #5a5a5a; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.8; margin-bottom: 32px;">
          In the meantime, follow us on Instagram at
          <a href="https://www.instagram.com/hostinghousenc" style="color: #cd8b91; text-decoration: none;">@hostinghousenc</a>
          for inspiration and behind-the-scenes from our studio.
        </p>
        <div style="border-top: 1px solid #ecdcde; padding-top: 28px; margin-top: 28px; font-family: Arial, sans-serif;">
          <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #9a9a9a; margin-bottom: 6px;">
            Your Inquiry Summary
          </p>
          <p style="color: #304254; font-size: 14px; margin: 0; line-height: 1.6;">
            <strong>Event Type:</strong> ${data.eventType}<br/>
            ${data.eventDate ? `<strong>Event Date:</strong> ${data.eventDate}<br/>` : ""}
            ${data.venue ? `<strong>Venue:</strong> ${data.venue}` : ""}
          </p>
        </div>
      </div>
      <div style="background: #fdf5f6; padding: 24px 40px; text-align: center; border: 1px solid #ecdcde; border-top: none;">
        <p style="color: #9a9a9a; font-family: Arial, sans-serif; font-size: 12px; margin: 0 0 16px;">
          With warmth &mdash; Meredith &amp; Susanna
        </p>
        <a href="https://www.instagram.com/hostinghousenc" style="color: #cd8b91; font-family: Arial, sans-serif; font-size: 12px; text-decoration: none;">
          @hostinghousenc
        </a>
      </div>
    </div>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: BUSINESS_EMAIL,
        subject: `New Inquiry: ${data.eventType} — ${data.name}`,
        html: businessEmailHtml,
        replyTo: data.email,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: data.email,
        subject: "We received your inquiry — The Hosting House NC",
        html: confirmationEmailHtml,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again." },
      { status: 500 }
    );
  }
}
