import { NextRequest, NextResponse } from "next/server";

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

  const payload = {
    _subject: `Floral Club Signup: ${data.name}`,
    _replyto: data.email,
    _template: "table",
    Name: data.name,
    Email: data.email,
    Phone: data.phone || "Not provided",
    "Delivery Address": data.address || "Not provided",
    "City / Area": data.city || "Not provided",
    "Style Preference": data.preference || "No preference selected",
    Notes: data.notes || "None",
  };

  const res = await fetch("https://formsubmit.co/ajax/steinbros1012@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (!result.success) {
    console.error("Formsubmit error:", result);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
