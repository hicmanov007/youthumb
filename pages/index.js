import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nepez.com – AI & YouTube Tools</title>
        <meta
          name="description"
          content="Nepez.com shares AI and YouTube tools tips to help creators grow their channels."
        />
      </Head>

      <main style={{ fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        
        {/* Hero Section */}
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to Nepez.com</h1>
        <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
          Discover AI tools, YouTube tips, and resources to grow your channel and save time.
        </p>
        <Link href="/blog">
          <a style={{
            display: "inline-block",
            padding: "12px 30px",
            backgroundColor: "#0070f3",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "16px"
          }}>
            Explore the Blog
          </a>
        </Link>

        {/* Recent Articles */}
        <section style={{ marginTop: "60px", textAlign: "left" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>Latest Articles</h2>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "center" }}>
            <li style={{ marginBottom: "15px" }}>
              <Link href="/blog/why-use-youtube-thumbnail-downloader">
                <a style={{ color: "#0070f3", textDecoration: "underline", fontSize: "18px" }}>
                  Why Use a YouTube Thumbnail Downloader?
                </a>
              </Link>
            </li>
            <li style={{ marginBottom: "15px" }}>
              <Link href="/blog/best-ai-tools-for-youtubers-in-2026">
                <a style={{ color: "#0070f3", textDecoration: "underline", fontSize: "18px" }}>
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
