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

      <main style={{ fontFamily: "Arial, sans-serif", maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* Logo et navigation */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <div style={{ fontWeight: "bold", fontSize: "28px", color: "#0070f3" }}>
            <img src="/logo-nepez.png" alt="Nepez Logo" style={{ height: "40px" }} /> Nepez
          </div>
          <nav>
            <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/"><a style={{ textDecoration: "none", color: "#000" }}>Accueil</a></Link></li>
              <li><Link href="/blog"><a style={{ textDecoration: "none", color: "#000" }}>Blog</a></Link></li>
              <li><Link href="/contact"><a style={{ textDecoration: "none", color: "#000" }}>Contact</a></Link></li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
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
              fontSize: "16px",
              textDecoration: "none"
            }}>
              Explore the Blog
            </a>
          </Link>
        </section>

        {/* YouTube Thumbnail Downloader Bar */}
        <section style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ marginBottom: "20px" }}>Download YouTube Thumbnails</h2>
          <input
            type="text"
            placeholder="Paste YouTube URL here"
            style={{
              width: "60%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginRight: "10px"
            }}
          />
          <button style={{
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Download
          </button>
        </section>

        {/* Latest Articles */}
        <section>
          <h2 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>Latest Articles</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>

            {/* Article Card 1 */}
            <div style={{ width: "300px", textAlign: "center" }}>
              <img src="/thumbnail1.png" alt="YouTube Thumbnail Downloader" style={{ width: "100%", borderRadius: "6px", marginBottom: "10px" }} />
              <Link href="/blog/why-use-youtube-thumbnail-downloader">
                <a style={{ fontSize: "18px", color: "#0070f3", textDecoration: "underline" }}>
                  Why Use a YouTube Thumbnail Downloader?
                </a>
              </Link>
            </div>

            {/* Article Card 2 */}
            <div style={{ width: "300px", textAlign: "center" }}>
              <img src="/thumbnail2.png" alt="AI Tools for YouTubers" style={{ width: "100%", borderRadius: "6px", marginBottom: "10px" }} />
              <Link href="/blog/best-ai-tools-for-youtubers-in-2026">
                <a style={{ fontSize: "18px", color: "#0070f3", textDecoration: "underline" }}>
                  Best AI Tools for YouTubers in 2026
                </a>
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ marginTop: "80px", padding: "20px", borderTop: "1px solid #eaeaea", textAlign: "center", fontSize: "14px" }}>
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
