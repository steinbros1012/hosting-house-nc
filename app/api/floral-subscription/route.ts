import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface SignupBody {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  preference?: string;
  notes?: string;
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

  const data = body as SignupBody;

  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    return NextResponse.json({ error: "Please provide your name." }, { status: 400 });
  }
  if (!data.email || !isValidEmail(data.email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "The Hosting House NC <noreply@buildsiteco.com>",
      to: "steinbros1012@gmail.com",
      replyTo: data.email,
      subject: `Floral Club Signup: ${data.name}`,
      html: `
        <h2>New Floral Club Signup</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${data.name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${data.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${data.phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Delivery Address</td><td style="padding:8px">${data.address || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">City / Area</td><td style="padding:8px">${data.city || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Style Preference</td><td style="padding:8px">${data.preference || "No preference selected"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Notes</td><td style="padding:8px">${data.notes || "None"}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
