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
const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "p1",
    media_url: "/images/instagram/post1.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "The softest shades of pink for a Saturday baby shower.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p2",
    media_url: "/images/instagram/post2.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "When the tablescape does all the talking.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p3",
    media_url: "/images/instagram/post3.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "For the host who wanted garden-fresh and effortless.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p4",
    media_url: "/images/instagram/post4.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "Peonies are always the answer. Always.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p5",
    media_url: "/images/instagram/post5.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "There is something magical about candlelight at golden hour.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p6",
    media_url: "/images/instagram/post6.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "Every detail of this dinner party felt just right.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p7",
    media_url: "/images/instagram/post7.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "There is something magical about candlelight at golden hour.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p8",
    media_url: "/images/instagram/post9.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "This one was personal. She cried. We all cried.",
    media_type: "IMAGE",
    timestamp: "",
  },
  {
    id: "p9",
    media_url: "/images/instagram/post1.jpg",
    permalink: "https://www.instagram.com/hostinghousenc",
    caption: "Elevated holiday gathering for a group of 30.",
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
