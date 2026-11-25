import AnimateIn from "@/components/AnimateIn";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

// Shown when INSTAGRAM_ACCESS_TOKEN is not yet configured
// Last updated: 2026-11-25 from @hostinghousenc
const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "DfkRFU0Ogi5",
    media_url: "/images/instagram/ig-DfkRFU0Ogi5.jpg",
    permalink: "https://www.instagram.com/p/DfkRFU0Ogi5/",
    caption: "100 years deserve 100 roses. We arranged white roses and magnolia in silver for Hayes Barton Baptist Church's Centennial Service. It was an honor to be part of this one — here's to the next hundred!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DePOgY0EbOb",
    media_url: "/images/instagram/ig-DePOgY0EbOb.jpg",
    permalink: "https://www.instagram.com/p/DePOgY0EbOb/",
    caption: "This is the season we were named for! Friendsgiving, Thanksgiving, Christmas, and every gathering in between — we're here to lighten your load. Centerpiece flowers: the reason everyone lingers after the last plate is cleared. Tablescapes: just hand us the keys and the china. We're taking a limited number of tables this season. Tell us what you're hosting.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DeHevTLEe4t",
    media_url: "/images/instagram/ig-DeHevTLEe4t.jpg",
    permalink: "https://www.instagram.com/p/DeHevTLEe4t/",
    caption: "There's a chill in the air, and we're leaning all the way in. Fall flowers, warm tones, and tables made for lingering — the coziest season of gathering is here.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DdolIrNEaPI",
    media_url: "/images/instagram/ig-DdolIrNEaPI.jpg",
    permalink: "https://www.instagram.com/p/DdolIrNEaPI/",
    caption: "Our answer to a rainy Wednesday. Bright, happy, and blooming right through the gloom.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DdRf0DPEe7c",
    media_url: "/images/instagram/ig-DdRf0DPEe7c.jpg",
    permalink: "https://www.instagram.com/p/DdRf0DPEe7c/",
    caption: "The vessel decides the shape — that's why we design to it, not just in it. Low and lush, gathered and full, or tall and dramatic. Same blooms, different vessels, completely different looks. Have an heirloom you've always wanted filled? Bring it. Don't? We'll shop for the perfect one; we love the hunt!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DcJUJBCkdXp",
    media_url: "/images/instagram/ig-DcJUJBCkdXp.jpg",
    permalink: "https://www.instagram.com/p/DcJUJBCkdXp/",
    caption: "40 looks good in rhinestones. Denim, diamonds, and dinner for Meredith's big birthday — flowers by us, sparkle by Dolly.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DaiR5PZtt3C",
    media_url: "/images/instagram/ig-DaiR5PZtt3C.jpg",
    permalink: "https://www.instagram.com/p/DaiR5PZtt3C/",
    caption: "A birthday surprise from a husband with one request: all bright colors, please. Expression garden roses, tulips, snapdragons, and sweet peas, designed and hand-delivered.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DadMlu8xKpk",
    media_url: "/images/instagram/ig-DadMlu8xKpk.jpg",
    permalink: "https://www.instagram.com/p/DadMlu8xKpk/",
    caption: "The patriotism continues! Ready for game day. Let us know if you want to brainstorm ideas!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DaXtSPoR9aP",
    media_url: "/images/instagram/ig-DaXtSPoR9aP.jpg",
    permalink: "https://www.instagram.com/p/DaXtSPoR9aP/",
    caption: "Turning 250 looks good on you, America! And a birthday this big deserves a cake. Happy Hosting and Happy 4th!",
    media_type: "IMAGE",
    timestamp: "",
  },
];

async function fetchLivePosts(limit: number): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media` +
        `?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp` +
        `&access_token=${token}` +
        `&limit=${limit}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (data.error) return null;

    return ((data.data ?? []) as InstagramPost[])
      .filter(
        (p) => p.media_type === "IMAGE" || p.media_type === "CAROUSEL_ALBUM"
      )
      .slice(0, limit);
  } catch {
    return null;
  }
}

interface Props {
  limit?: number;
}

export default async function InstagramFeed({ limit = 9 }: Props) {
  const livePosts = await fetchLivePosts(limit);
  const posts = livePosts ?? PLACEHOLDER_POSTS.slice(0, limit);

  return (
    <div className="ig-live-grid">
      {posts.map((post, i) => (
        <AnimateIn key={post.id} delay={i * 50} direction="scale">
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-live-card"
            aria-label={post.caption ?? "View on Instagram"}
          >
            <div className="ig-live-img">
              {/* Using <img> because Instagram CDN hostnames are non-deterministic */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.media_url}
                alt={
                  post.caption
                    ? post.caption.slice(0, 80)
                    : "Instagram post from @hostinghousenc"
                }
                loading="lazy"
              />
              <div className="ig-live-overlay">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                {post.caption && (
                  <p className="ig-live-caption">
                    {post.caption.length > 72
                      ? post.caption.slice(0, 72) + "…"
                      : post.caption}
                  </p>
                )}
              </div>
            </div>
          </a>
        </AnimateIn>
      ))}
    </div>
  );
}
