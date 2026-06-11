import { NextResponse } from "next/server";

export const revalidate = 3600; // rebuild cached response every hour

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "INSTAGRAM_ACCESS_TOKEN not configured" },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media` +
        `?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp` +
        `&access_token=${token}` +
        `&limit=12`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Instagram API error:", err);
      return NextResponse.json(
        { error: "Instagram API returned an error", detail: err },
        { status: res.status }
      );
    }

    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 400 });
    }

    const posts = (data.data ?? []).filter(
      (p: { media_type: string }) =>
        p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM"
    );

    return NextResponse.json({ posts });
  } catch (err) {
    console.error("Instagram fetch failed:", err);
    return NextResponse.json(
      { error: "Failed to reach Instagram API" },
      { status: 500 }
    );
  }
}
