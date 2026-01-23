import Link from "next/link";
import Head from "next/head";

export default function BlogIndex() {
  const articles = [
    {
      title: "Why Use a YouTube Thumbnail Downloader?",
      slug: "why-use-youtube-thumbnail-downloader",
    },
    {
      title: "Best AI Tools for YouTubers in 2026",
      slug: "best-ai-tools-for-youtubers-in-2026",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - Nepez.com</title>
        <meta
          name="description"
          content="Discover AI tools and YouTube tools to boost your online growth and productivity."
        />
      </Head>

      <main style={{ maxWidth: "800px", margin: "40px auto", padding: "0 20px" }}>
        <h1>Nepez Blog</h1>
        <p>Explore our latest articles on AI tools and YouTube growth.</p>

        <ul>
          {articles.map((article) => (
            <li key={article.slug} style={{ marginBottom: "10px" }}>
              <Link href={`/blog/${article.slug}`}>
                <a style={{ color: "#0070f3", textDecoration: "underline" }}>
                  {article.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
