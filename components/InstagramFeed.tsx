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
// Last updated: 2026-07-10 from @hostinghousenc
const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "DaiR5PZtt3C",
    media_url: "/images/instagram/post1.jpg",
    permalink: "https://www.instagram.com/p/DaiR5PZtt3C/",
    caption: "A birthday surprise from a husband with one request: all bright colors, please. Expression garden roses, tulips, snapdragons, and sweet peas, designed and hand-delivered.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DadMlu8xKpk",
    media_url: "/images/instagram/post2.jpg",
    permalink: "https://www.instagram.com/p/DadMlu8xKpk/",
    caption: "The patriotism continues! Ready for game day. Let us know if you want to brainstorm ideas!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DaXtSPoR9aP",
    media_url: "/images/instagram/post3.jpg",
    permalink: "https://www.instagram.com/p/DaXtSPoR9aP/",
    caption: "Turning 250 looks good on you, America! And a birthday this big deserves a cake. Happy Hosting and Happy 4th!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DaVNrFukS8m",
    media_url: "/images/instagram/post4.jpg",
    permalink: "https://www.instagram.com/p/DaVNrFukS8m/",
    caption: "Red, white, and blue florals are arranged and the patriotic tablescape is almost ready. Happy 4th!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DaK_TvtN8am",
    media_url: "/images/instagram/post5.jpg",
    permalink: "https://www.instagram.com/p/DaK_TvtN8am/",
    caption: "A gathering of green and white flowers tucked into a basket and left a little wild around the edges. Need the whole event planned, or just beautiful florals? Either way, we're in!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DZ5HdpwkXM9",
    media_url: "/images/instagram/post6.jpg",
    permalink: "https://www.instagram.com/p/DZ5HdpwkXM9/",
    caption: "Seven arrangements, start to finish. We were enchanted to be part of a perfect summer night!",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DZu4c01RQxs",
    media_url: "/images/instagram/post7.jpg",
    permalink: "https://www.instagram.com/p/DZu4c01RQxs/",
    caption: "We upgraded our website and we cannot wait for you to see it! Come on in and take a look around.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DZpq2jKjWnh",
    media_url: "/images/instagram/post8.jpg",
    permalink: "https://www.instagram.com/p/DZpq2jKjWnh/",
    caption: "A summer dinner party designed to transport us to Capri. Wedding china, the perfect menu, and a carefully arranged tablescape.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "DZcw_lYxXnx",
    media_url: "/images/instagram/post9.jpg",
    permalink: "https://www.instagram.com/p/DZcw_lYxXnx/",
    caption: "A true Southern welcome starts at the door. You bring the guests, we'll handle the rest!",
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
