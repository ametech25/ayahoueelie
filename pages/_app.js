// pages/_app.js
import "@/styles/globals.css";
import MouseTracker from "@/components/MouseTracker";
import FaviconLinks from "@/components/FaviconLinks";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FaviconLinks />
      <MouseTracker />
      <Component {...pageProps} />
    </>
  );
}
