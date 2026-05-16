// pages/_app.js
import "@/styles/globals.css";
import PointerGlow from "@/components/PointerGlow";
import FaviconLinks from "@/components/FaviconLinks";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FaviconLinks />
      <PointerGlow />
      <Component {...pageProps} />
    </>
  );
}
