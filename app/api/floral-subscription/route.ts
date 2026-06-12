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

const resend = new Resend(process.env.RESEND_API_KEY);

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

  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Delivery Address", data.address || "Not provided"],
    ["City / Area", data.city || "Not provided"],
    ["Style Preference", data.preference || "No preference selected"],
    ["Notes", data.notes || "None"],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;background:#fdf5f6;border:1px solid #ecdcde;">${label}</td><td style="padding:8px 12px;border:1px solid #ecdcde;">${value}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#304254;">New Floral Club Signup</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>
  `;

  const { error } = await resend.emails.send({
    from: "The Hosting House NC <onboarding@resend.dev>",
    to: "steinbros1012@gmail.com",
    replyTo: data.email,
    subject: `Floral Club Signup: ${data.name}`,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
