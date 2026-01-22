import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Youtube Thumbnail Downloader"
        description="Download high-quality thumbnails from YouTube videos."
        canonical="https://www.nepez.com"
        openGraph={{
          url: "https://www.nepez.com",
          title: "Youtube Thumbnail Downloader",
          description: "Download high-quality thumbnails from YouTube videos.",
          site_name: "Nepez",
        }}
      />

      <Component {...pageProps} />

      {/* Footer visible sur toutes les pages */}
      <Footer />
    </Fragment>
  );
}

export default MyApp;
