import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nepez.com – AI & YouTube Tools for Creators</title>
        <meta
          name="description"
          content="Nepez.com shares daily AI and YouTube tools tips to help creators save time and grow their channels."
        />
      </Head>

      <main style={{ maxWidth: "900px", margin: "40px auto", padding: "0 20px" }}>
        {/* Section Accroche */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h1>Welcome to Nepez.com</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            Discover AI tools, YouTube tips, and resources to grow your channel and save time.
          </p>
          <Link href="/blog">
            <a style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "#fff",
              borderRadius: "6px",
              textDecoration: "none"
            }}>
              Explore the Blog
            </a>
          </Link>
        </section>

        {/* Section Articles récents */}
        <section>
          <h2>Latest Articles</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "15px" }}>
              <Link href="/blog/why-use-youtube-thumbnail-downloader">
                <a style={{ color: "#0070f3", textDecoration: "underline" }}>
                  Why Use a YouTube Thumbnail Downloader?
                </a>
              </Link>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <Link href="/blog/best-ai-tools-for-youtubers-in-2026">
                <a style={{ color: "#0070f3", textDecoration: "underline" }}>
                  Best AI Tools for YouTubers in 2026
                </a>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
