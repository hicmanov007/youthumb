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

      <main style={{ fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* Navigation */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" }}>
          <div style={{ fontWeight: "bold", fontSize: "24px", color: "#0070f3" }}>Nepez</div>
          <nav>
            <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/"><a style={{ textDecoration: "none", color: "#000" }}>Accueil</a></Link></li>
              <li><Link href="/blog"><a style={{ textDecoration: "none", color: "#000" }}>Blog</a></Link></li>
              <li><Link href="/contact"><a style={{ textDecoration: "none", color: "#000" }}>Contact</a></Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "80px" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>Welcome to Nepez.com</h1>
          <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
            Discover AI tools, YouTube tips, and resources to grow your channel and save time.
          </p>
          <Link href="/blog">
            <a style={{
              display: "inline-block",
              padding: "12px 30px",
              backgroundColor: "#0070f3",
              color: "#fff",
              borderRadius: "6px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "background-color 0.3s"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = "#005bb5"}
            onMouseOut={e => e.currentTarget.style.backgroundColor = "#0070f3"}
            >
              Explore the Blog
            </a>
          </Link>
        </section>

        {/* Latest Articles Section */}
        <section>
          <h2 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>Latest Articles</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>

            {/* Article Card 1 */}
            <div style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "300px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
            }}>
              <img src="https://i.imgur.com/5P4LkIY.png" alt="YouTube Thumbnail Downloader" style={{ width: "100%", borderRadius: "6px", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                <Link href="/blog/why-use-youtube-thumbnail-downloader">
                  <a style={{ color: "#0070f3", textDecoration: "none" }}>Why Use a YouTube Thumbnail Downloader?</a>
                </Link>
              </h3>
              <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
                Learn the benefits of downloading YouTube thumbnails.
              </p>
              <Link href="/blog/why-use-youtube-thumbnail-downloader">
                <a style={{ color: "#0070f3", fontWeight: "bold" }}>Read More →</a>
              </Link>
            </div>

            {/* Article Card 2 */}
            <div style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "300px",
              padding: "20px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
            }}>
              <img src="https://i.imgur.com/7gIY1pB.png" alt="AI Tools for YouTubers" style={{ width: "100%", borderRadius: "6px", marginBottom: "15px" }} />
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                <Link href="/blog/best-ai-tools-for-youtubers-in-2026">
                  <a style={{ color: "#0070f3", textDecoration: "none" }}>Best AI Tools for YouTubers in 2026</a>
                </Link>
              </h3>
              <p style={{ fontSize: "14px", color: "#555", marginBottom: "10px" }}>
                Discover the top AI tools to boost your YouTube channel.
              </p>
              <Link href="/blog/best-ai-tools-for-youtubers-in-2026">
                <a style={{ color: "#0070f3", fontWeight: "bold" }}>Read More →</a>
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{
        marginTop: "80px",
        padding: "20px",
        borderTop: "1px solid #eaeaea",
        textAlign: "center",
        fontSize: "14px"
      }}>
        <p>
          © {new Date().getFullYear()} Nepez ·
          <Link href="/about"><a style={{ marginLeft: "8px" }}>About Us</a></Link> ·
          <Link href="/contact"><a style={{ marginLeft: "8px" }}>Contact</a></Link> ·
          <Link href="/blog"><a style={{ marginLeft: "8px" }}>Blog</a></Link>
        </p>
        <p>
          Business Email: <a href="mailto:contact@nepez.com">contact@nepez.com</a>
        </p>
      </footer>
    </>
  );
}
